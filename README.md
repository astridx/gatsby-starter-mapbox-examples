# Gatsby starter with Mapbox GL

This starter https://github.com/brendan-ward/gatsby-starter-mapbox gets you going quickly with Mapbox GL in Gatsby. It uses React hooks to wrap the Mapbox GL JS object and I build my examples on this repo.

Because Mapbox GL is provided as a native JS object within `components/Map/index.jsx`, instead of a React Component, you need to coordinate application state directly with the map object.

Map configuration is stored in `config/map.js`. You need to provide basic map configuration such as initial `zoom` level, and you can provide optional `sources` and `layers` according to the Mapbox GL style specification.

You must set the [environment variable](https://www.gatsbyjs.com/docs/environment-variables/) `GATSBY_MAPBOX_API_TOKEN` to your [Mapbox API token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/). Define an environment config file, `.env.development` and/or `.env.production`, in your root folder. Depending on your active environment, the correct one will be found and its values embedded as environment variables in the browser JavaScript. Add the line 

```
GATSBY_MAPBOX_API_TOKEN='YOUR TOKEN'
```

## Installing the starter

Supply the `[URL_OF_STARTER_GIT_REPO]` directly:

```
gatsby new [SITE_DIRECTORY] [URL_OF_STARTER_GIT_REPO]
```

For example, to create a site in a `mymapboxglsite` directory with this Gatsby Starter:

```
gatsby new mymapboxglsite https://github.com/astridx/gatsby-starter-mapbox-examples
```

## Features

### Scroll Fly To

[Fly to a location](https://astridx.github.io/mapboxexamples/examples/scroll-fly-to.html) based on scroll position in the sidebar. Scroll down through the Points of interest and the map will fly to the location. 



See another [example](https://docs.mapbox.com/mapbox-gl-js/example/scroll-fly-to/).

