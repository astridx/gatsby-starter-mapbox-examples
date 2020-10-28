import React, { useEffect } from 'react'
import Layercontrol from '../components/Layercontrol/Layercontrol'
import layercontrol from '../constants/layercontrol'

import Layout from 'components/Layout'
import Map from 'components/Map'

const MapPage = () => {
  const addControl = () => {
    layercontrol.forEach(item => {
      item.layer.forEach(l => {
        map.on('load', () => {
          console.log('map onload')
          Object.entries(l.sources).forEach(([id, source]) => {
            map.addSource(id, source)
          })

          map.addLayer(l)
          const link = document.getElementById(l.id)

          link.onclick = function(e) {
            var clickedLayer = this.textContent
            e.preventDefault()
            e.stopPropagation()

            var visibility = map.getLayoutProperty(clickedLayer, 'visibility')
            console.log(visibility)
            if (visibility === 'visible' || visibility === undefined) {
              map.setLayoutProperty(clickedLayer, 'visibility', 'none')
              this.className = 'visk'
            } else {
              this.className = 'active'
              map.setLayoutProperty(clickedLayer, 'visibility', 'visible')
            }
          }
        })
      })
    })
  }

  useEffect(() => {
    if (document.readyState === 'complete') {
      addControl()
    } else {
      window.addEventListener('load', addControl)

      return () => {
        window.removeEventListener('load', addControl)
      }
    }
  }, [])

  return (
    <Layout title="Full Screen Map with GeoJSON and Layer Control/Layer Switcher">
      <Layercontrol layercontrol={layercontrol} />
      <Map />
    </Layout>
  )
}

export default MapPage
