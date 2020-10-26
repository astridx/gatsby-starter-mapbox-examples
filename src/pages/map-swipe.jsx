import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import Layout from 'components/Layout'
import Swipemap from 'components/Swipemap'

const MapPage = () => {
  return (
    <Layout title="Full Screen Map">
      <Swipemap />
    </Layout>
  )
}

export default MapPage
