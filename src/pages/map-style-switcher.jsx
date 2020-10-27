import React from 'react'

import Layout from 'components/Layout'
import Map from 'components/Map'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import styleSwitcherData from '../constants/styles'

// https://www.npmjs.com/package/mapbox-gl-style-switcher
const MapPage = () => {
  return (
    <Layout title="Full Screen Map with Route">
      <Map
        styleSwitcher={[{ styles: styleSwitcherData, position: 'top-left' }]}
        /*styles={ ['streets-v11', 'light-v9', 'dark-v9', 'satellite-v9']}*/
      />
    </Layout>
  )
}

export default MapPage
