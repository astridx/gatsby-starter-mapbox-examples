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
import Compare from 'mapbox-gl-compare'
import 'mapbox-gl-compare/dist/mapbox-gl-compare.css'

import { siteMetadata } from '../../../gatsby-config'

const Wrapper = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
  flex: 1 0 auto;
`

const Swipemap = ({
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
}) => {
  const { mapboxToken } = siteMetadata

  if (!mapboxToken) {
    console.error(
      'ERROR: Mapbox token is required in gatsby-config.js siteMetadata'
    )
  }

  if (!hasWindow) {
    return null
  }

  const mapNode = useRef(null)
  const mapNode2 = useRef(null)

  const mapRef = useRef(null)
  const mapRef2 = useRef(null)

  useEffect(() => {
    let mapCenter = center
    let mapZoom = zoom

    if (bounds && bounds.length === 4) {
      const { center: boundsCenter, zoom: boundsZoom } = getCenterAndZoom(
        mapNode.current,
        mapNode2.current,
        bounds,
        padding
      )
      mapCenter = boundsCenter
      mapZoom = boundsZoom
    }

    mapboxgl.accessToken = mapboxToken

    const map = new mapboxgl.Map({
      container: 'eins',
      style: `mapbox://styles/mapbox/${styles[0]}`,
      center: mapCenter,
      zoom: mapZoom,
      minZoom,
      maxZoom,
    })
    mapRef.current = map
    window.map = map

    const map2 = new mapboxgl.Map({
      container: 'zwei',
      style: `mapbox://styles/mapbox/${styles[3]}`,
      center: mapCenter,
      zoom: mapZoom,
      minZoom,
      maxZoom,
    })
    mapRef2.current = map2
    window.map2 = map2 // for easier debugging and querying via console

    var compare = new Compare(map, map2, '#swipewrapper', {})

    map2.addControl(new mapboxgl.NavigationControl(), 'top-right')

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
    })

    return () => {
      map.remove()
    }
  }, [])

  return (
    <Wrapper id="swipewrapper" width={width} height={height}>
      <div
        id="eins"
        style={{ top: 0, position: 'absolute', width: '100%', bottom: 0 }}
      />
      <div
        id="zwei"
        style={{ top: 0, position: 'absolute', width: '100%', bottom: 0 }}
      />
      {/*  <StyleSelector map={mapRef.current} styles={styles} token={mapboxToken} /> */}
    </Wrapper>
  )
}

Swipemap.propTypes = {
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
}

Swipemap.defaultProps = {
  width: 'auto',
  height: '100%',
  center: [7.221275, 50.326111],
  zoom: 9.5,
  bounds: null,
  minZoom: 0,
  maxZoom: 24,
  styles: ['streets-v11', 'light-v9', 'dark-v9', 'satellite-v9'],
  padding: 0.1,
  sources: {},
  layers: [],
  directions: [],
}

export default Swipemap
