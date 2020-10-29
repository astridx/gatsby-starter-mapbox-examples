import React from 'react'

import Layout from 'components/Layout'
import Map from 'components/Map'

const MapPage = () => {
  return (
    <Layout title="Full Screen Map">
      <Map
        width="auto"
        height="100%"
        center={[7.221275, 50.326111]}
        zoom={9.5}
        bounds={null}
        minZoom={0}
        maxZoom={24}
        styles={['streets-v11']}
        padding={0.1}
        sources={[]}
        layers={[]}
        directions={[]}
        scale={[]}
        styleSwitcher={[]}
        layerSwitcher={[]}
      />
    </Layout>
  )
}

export default MapPage
