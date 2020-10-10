/* eslint-disable max-len, no-underscore-dangle */
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import scrollflyto from '../../constants/scrollflyto'
import styled from 'style'
import { hasWindow } from 'util/dom'
import { getCenterAndZoom } from './util'
import StyleSelector from './StyleSelector'

import { siteMetadata } from '../../../gatsby-config'

// This wrapper must be positioned relative for the map to be able to lay itself out properly
const Wrapper = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
  flex: 1 0 auto;
`

const Map = ({
  width,
  height,
  zoom,
  center,
  bounds,
  padding,
  styles,
  sources,
  layers,
  minZoom,
  maxZoom,
}) => {
  const { mapboxToken } = siteMetadata

  if (!mapboxToken) {
    console.error(
      'ERROR: Mapbox token is required in gatsby-config.js siteMetadata'
    )
  }

  // if there is no window, we cannot render this component
  if (!hasWindow) {
    return null
  }

  // this ref holds the map DOM node so that we can pass it into Mapbox GL
  const mapNode = useRef(null)

  // this ref holds the map object once we have instantiated it, so that we
  // can use it in other hooks
  const mapRef = useRef(null)
  /*
  const [scrollPosition, setSrollPosition] = useState(0)
  const handleScroll = () => {
    var activeName = scrollflyto[0].title
    for (var i = 0; i < scrollflyto.length; i++) {
      console.log(scrollflyto[i].title)
      if (isElementOnScreen(scrollflyto[i].title)) {
        setActiveChapter(scrollflyto[i].title, i)
        break
      }
    }

    function setActiveChapter(chapterName, i) {
      if (chapterName === activeName) return

      map.flyTo(scrollflyto[i])

      document.getElementById(chapterName).setAttribute('class', 'active')
      document.getElementById(activeName).setAttribute('class', '')

      activeName = chapterName
    }

    function isElementOnScreen(id) {
      var element = document.getElementById(id)
      var bounds = element.getBoundingClientRect()
      return bounds.top < window.innerHeight && bounds.bottom > 0
    }
    const position = window.pageYOffset
    setSrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
*/
  // construct the map within an effect that has no dependencies
  // this allows us to construct it only once at the time the
  // component is constructed.
  useEffect(() => {
    let mapCenter = center
    let mapZoom = zoom

    // If bounds are available, use these to establish center and zoom when map first loads
    if (bounds && bounds.length === 4) {
      const { center: boundsCenter, zoom: boundsZoom } = getCenterAndZoom(
        mapNode.current,
        bounds,
        padding
      )
      mapCenter = boundsCenter
      mapZoom = boundsZoom
    }

    // Token must be set before constructing map
    mapboxgl.accessToken = mapboxToken

    const map = new mapboxgl.Map({
      container: mapNode.current,
      style: `mapbox://styles/mapbox/${styles[0]}`,
      center: mapCenter,
      zoom: mapZoom,
      minZoom,
      maxZoom,
    })
    mapRef.current = map
    window.map = map // for easier debugging and querying via console

    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    if (styles.length > 1) {
      map.addControl(
        new StyleSelector({
          styles,
          token: mapboxToken,
        }),
        'bottom-left'
      )
    }

    map.on('load', () => {
      console.log('map onload')
      // add sources
      Object.entries(sources).forEach(([id, source]) => {
        map.addSource(id, source)
      })

      // add layers
      layers.forEach(layer => {
        map.addLayer(layer)
      })
    })

    // hook up map events here, such as click, mouseenter, mouseleave
    // e.g., map.on('click', (e) => {})

    // when this component is destroyed, remove the map
    return () => {
      map.remove()
    }
  }, [])

  // You can use other `useEffect` hooks to update the state of the map
  // based on incoming props.  Just beware that you might need to add additional
  // refs to share objects or state between hooks.

  return (
    <Wrapper width={width} height={height}>
      <div ref={mapNode} style={{ width: '100%', height: '100%' }} />
      {/* <StyleSelector map={mapRef.current} styles={styles} token={mapboxToken} /> */}
    </Wrapper>
  )
}

Map.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  bounds: PropTypes.arrayOf(PropTypes.number),
  minZoom: PropTypes.number,
  maxZoom: PropTypes.number,
  styles: PropTypes.arrayOf(PropTypes.string),
  padding: PropTypes.number,
  sources: PropTypes.object,
  layers: PropTypes.arrayOf(PropTypes.object),
}

Map.defaultProps = {
  width: 'auto',
  height: '100%',
  center: [7.221275, 50.326111],
  zoom: 17.5,
  bounds: null,
  minZoom: 0,
  maxZoom: 24,
  styles: ['streets-v11', 'light-v9', 'dark-v9'],
  padding: 0.1, // padding around bounds as a proportion
  sources: {},
  layers: [],
}

export default Map
