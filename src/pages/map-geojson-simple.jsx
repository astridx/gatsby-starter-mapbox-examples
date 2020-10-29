import React from 'react'

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
]

const MapPage = () => {
  return (
    <Layout title="Full Screen Map with GeoJSON">
      <Map sources={sources} layers={layers} />
    </Layout>
  )
}

export default MapPage
