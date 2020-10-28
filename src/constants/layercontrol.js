export default [
  {
    uniqueid: 'menu1',
    layer: [
      {
        id: 'Dreieck',
        source: 'dreieck',
        sources: {
          dreieck: {
            type: 'geojson',
            data: {
              type: 'Polygon',
              coordinates: [[[7.03, 50.19], [7.58, 50.39], [7.18, 50.29]]],
            },
          },
        },
        type: 'fill',
        paint: {
          'fill-color': 'red',
          'fill-opacity': 0.5,
        },
      },
      {
        id: 'Polygon',
        source: 'dreieck2',
        sources: {
          dreieck2: {
            type: 'geojson',
            data: {
              type: 'Polygon',
              coordinates: [
                [[7.4, 50.1], [7.4, 50.3], [7.5, 50.3], [7.5, 50.1]],
              ],
            },
          },
        },
        type: 'fill',
        paint: {
          'fill-color': 'red',
          'fill-opacity': 0.5,
        },
      },
    ],
  },
]
