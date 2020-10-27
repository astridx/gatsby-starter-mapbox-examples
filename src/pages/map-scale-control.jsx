import React from 'react'

import Layout from 'components/Layout'
import Map from 'components/Map'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

/* https://docs.mapbox.com/mapbox-gl-js/api/markers/#scalecontrol */
const MapPage = () => {
  return (
    <Layout title="Full Screen Map with Route">
      <Map scale={[{ unit: 'metric', maxWidth: 200 }]} />
    </Layout>
  )
}

export default MapPage
