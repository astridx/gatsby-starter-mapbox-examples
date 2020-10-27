import React, { useEffect } from 'react'
import Layercontrol from '../components/Layercontrol/Layercontrol'
import layercontrol from '../constants/layercontrol'

import Layout from 'components/Layout'
import Map from 'components/Map'

const sources = {
  dreieck: {
    type: 'geojson',
    data: {
      type: 'Polygon',
      coordinates: [[[7.03, 50.19], [7.58, 50.39], [7.18, 50.29]]],
    },
  },
  dreieck2: {
    type: 'geojson',
    data: {
      type: 'Polygon',
      coordinates: [[[7.4, 50.1], [7.4, 50.3], [7.5, 50.3], [7.5, 50.1]]],
    },
  },
}

const layers = [
  {
    id: '1',
    source: 'dreieck',
    type: 'fill',
    paint: {
      'fill-color': 'red',
      'fill-opacity': 0.5,
    },
  },
  {
    id: '2',
    source: 'dreieck2',
    type: 'fill',
    paint: {
      'fill-color': 'red',
      'fill-opacity': 0.5,
    },
  },
]

const MapPage = () => {
  const addControll = () => {
    var toggleableLayerIds = [1, 2]
    for (var i = 0; i < toggleableLayerIds.length; i++) {
      var id = toggleableLayerIds[i]

      var link = document.createElement('a')
      link.href = '#'
      link.className = 'active'
      link.textContent = id

      link.onclick = function(e) {
        var clickedLayer = this.textContent
        e.preventDefault()
        e.stopPropagation()

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility')

        if (visibility === 'visible') {
          map.setLayoutProperty(clickedLayer, 'visibility', 'none')
          this.className = 'visk'
        } else {
          this.className = 'active'
          map.setLayoutProperty(clickedLayer, 'visibility', 'visible')
        }
      }

      var layerscontrol = document.getElementById('menu')
      if (layerscontrol) {
        layerscontrol.appendChild(link)
      }
    }
  }

  useEffect(() => {
    if (document.readyState === 'complete') {
      addControll()
    } else {
      window.addEventListener('load', addControll)

      return () => {
        window.removeEventListener('load', addControll)
      }
    }
  }, [])

  return (
    <Layout title="Full Screen Map with GeoJSON">
      <nav id="menu" />
      <Map sources={sources} layers={layers} />
    </Layout>
  )
}

export default MapPage
