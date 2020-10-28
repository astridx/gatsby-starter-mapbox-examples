/* eslint-disable max-len, no-underscore-dangle */
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styled from 'style'
import { hasWindow } from 'util/dom'
import { getCenterAndZoom } from './util'
import StyleSelector from './StyleSelector'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import { MapboxStyleSwitcherControl } from 'mapbox-gl-style-switcher'
import 'mapbox-gl-style-switcher/styles.css'
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
  directions,
  scale,
  styleSwitcher,
  layerSwitcher,
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

      var direction
      directions.forEach(directionData => {
        directionData.pois.forEach(poi => {
          new mapboxgl.Marker()
            .setLngLat([poi[0], poi[1]])
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(poi[2]))
            .addTo(map)
        })
        direction = new MapboxDirections(directionData)
        direction.setOrigin(directionData.origin)
        direction.setDestination(directionData.destination)
        map.addControl(direction, 'top-right')
      })

      scale.forEach(s => {
        map.addControl(
          new mapboxgl.ScaleControl({
            maxWidth: s.maxWidth,
            unit: s.unit,
          })
        )
      })

      styleSwitcher.forEach(ss => {
        console.log(ss.styles + ss.position)
        map.addControl(new MapboxStyleSwitcherControl(ss.styles, ss.position))
        /*   map.addControl(
          
        );*/
      })

      layerSwitcher.forEach(ls => {
        console.log(ls)
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
  directions: PropTypes.arrayOf(PropTypes.object),
  scale: PropTypes.arrayOf(PropTypes.object),
  styleSwitcher: PropTypes.arrayOf(PropTypes.object),
  layerSwitcher: PropTypes.arrayOf(PropTypes.object),
}

Map.defaultProps = {
  width: 'auto',
  height: '100%',
  center: [7.221275, 50.326111],
  zoom: 9.5,
  bounds: null,
  minZoom: 0,
  maxZoom: 24,
  styles: ['streets-v11'],
  padding: 0.1, // padding around bounds as a proportion
  sources: {},
  layers: [],
  directions: [],
  scale: [],
  styleSwitcher: [],
  layerSwitcher: [],
}

export default Map
