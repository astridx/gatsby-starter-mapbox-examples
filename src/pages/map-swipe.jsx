import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import Layout from 'components/Layout'
import Swipemap from 'components/Swipemap'

const MapPage = () => {
  return (
    <Layout title="Full Screen Map">
      <Swipemap styles={['streets-v11', 'satellite-v9']} 
      /*styles={ ['streets-v11', 'light-v9', 'dark-v9', 'satellite-v9']}*/
      />
    </Layout>
  )
}

export default MapPage
