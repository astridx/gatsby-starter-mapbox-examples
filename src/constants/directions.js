import { siteMetadata } from '../../gatsby-config'
const { mapboxToken } = siteMetadata
export default [
  {
    //https://github.com/mapbox/mapbox-gl-directions/blob/master/src/directions.js
    language: 'de-DE',
    accessToken: mapboxToken,
    steps: true,
    exclude: 'toll',
    unit: 'metric',
    alternatives: 'true',
    interactive: false,
    controls: {
      inputs: true,
      instructions: true,
      profileSwitcher: true,
    },
    profile: 'mapbox/driving',
    flyTo: false,
    // custom
    origin: [7.227778, 50.282222],
    destination: [-4.488582, 36.86133],
    pois: [
      [1.81108, 47.069302, 'Koordinate: 1.811080, 47.069302'],
      [-0.610723, 43.185493, 'Koordinate:  -0.610723, 43.185493'],
      [-3.479979, 39.819714, 'Koordinate:   -3.479979, 39.819714'],
    ],
  },
]
