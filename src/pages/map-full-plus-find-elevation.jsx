import React, { useEffect } from 'react'
import Findelevation from '../components/Findelevation/Findelevation'
import axios from 'axios'
import Layout from 'components/Layout'
import Map from 'components/Map'
import { siteMetadata } from '../../gatsby-config'

const { mapboxToken } = siteMetadata

const MapPage = () => {
  const findElevation = () => {
    map.on('click', function(e) {
      var query =
        'https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2/tilequery/' +
        e.lngLat.lng +
        ',' +
        e.lngLat.lat +
        '.json?layers=contour&limit=50&access_token=' +
        mapboxToken

      // https://stackoverflow.com/questions/50949594/axios-having-cors-issue
      axios.defaults.headers.post['Content-Type'] =
        'application/x-www-form-urlencoded'

      axios
        .get(query)
        .then(function(response) {
          var elevations = []
          response.data.features.forEach(function(feature) {
            elevations.push(feature.properties.ele)
          })
          document.getElementById('findelevationfield').textContent = Math.max(
            ...elevations
          )
        })
        .catch(function(error) {
          console.log(error)
        })
        .then(function() {
          // immer
        })
    })
  }

  useEffect(() => {
    window.addEventListener('click', findElevation)

    return () => {
      window.removeEventListener('click', findElevation)
    }
  }, [])

  return (
    <Layout title="Full Screen Map">
      <Findelevation />
      <Map />
    </Layout>
  )
}

export default MapPage
