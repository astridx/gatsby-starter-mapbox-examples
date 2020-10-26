import React from 'react'

import Layout from 'components/Layout'
import Map from 'components/Map'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import directionData from '../constants/directions'

const MapPage = () => {
  return (
    <Layout title="Full Screen Map with Route">
      <Map directions={directionData} />
    </Layout>
  )
}

export default MapPage
