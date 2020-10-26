# Gatsby starter with Mapbox GL

The starter https://github.com/brendan-ward/gatsby-starter-mapbox gets you going quickly with Mapbox GL in Gatsby. It uses React hooks to wrap the Mapbox GL JS object and I build my examples on this repo.

__This starter__ is build on the starter https://github.com/brendan-ward/gatsby-starter-mapbox. It gets you going quickly with Mapbox GL in Gatsby. It uses React hooks to wrap the Mapbox GL JS object and I build my examples on this repo.

Because Mapbox GL is provided as a native JS object within `components/Map/index.jsx`, instead of a React Component, you need to coordinate application state directly with the map object.

## Installation

### Gatsby

You will need to know Gatsby to use this starter. If you are interested in learning more about building your first Gatsby site, check out the [Gatsby.js Tutorials](https://www.gatsbyjs.com/tutorial/).

### Initialize the Site

You [created a new site](https://www.gatsbyjs.com/tutorial/part-one/) based on a starter using the following command:

```
gatsby new [SITE_DIRECTORY] [URL_OF_STARTER_GIT_REPO]
```

For example, to create a site in a `mymapboxglsite` directory with this Gatsby Starter:

```
gatsby new mymapboxglsite https://github.com/astridx/gatsby-starter-mapbox-examples
```

### Get Mapbox API token

You must set the [environment variable](https://www.gatsbyjs.com/docs/environment-variables/) `GATSBY_MAPBOX_API_TOKEN` to your [Mapbox API token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/). Define an environment config file, `.env.development` and/or `.env.production`, in your root folder. Depending on your active environment, the correct one will be found and its values embedded as environment variables in the browser JavaScript. Add the line 

```
GATSBY_MAPBOX_API_TOKEN='YOUR TOKEN'
```

#### Excurs: Configuration

You provide basic map configuration such as initial `zoom` level in the file `src/components/Map`: 

```
width: 'auto',
height: '100%',
center: [7.221275, 50.326111],
zoom: 9.5,
bounds: null,
minZoom: 0,
maxZoom: 24,
styles: ['streets-v11', 'light-v9', 'dark-v9'],
padding: 0.1,
sources: {},
layers: [],
directions: [],
```

You can provide optional configuration (for example `sources` and `layers`) according to the Mapbox GL style specification.

```
<Map 
  sources={sources} 
  layers={layers} 

/>
```

### Start the Site

Start the development mode:

```
gatsby develop
```

Open up a new tab in your browser and navigate to http://localhost:8000/

Perfect! This is the beginning of a Gatsby MapBox JS GL site! 

## Features

There is a menu item for each example.

### Scroll Fly To

This feature allows you to tell a story using the map.

[Fly to a location](https://astridx.github.io/mapboxexamples/examples/scroll-fly-to.html) based on scroll position in the sidebar. Scroll down through the Points of interest and the map will fly to the location. 

See another [example](https://docs.mapbox.com/mapbox-gl-js/example/scroll-fly-to/).

#### Adapt to your wishes

You change the content in the file [src/constants/scrollflyto.js](https://github.com/astridx/gatsby-starter-mapbox/blob/astridx/src/constants/scrollflyto.js)

Option | Description
--- | ---
bearing | The initial bearing (rotation) of the map, measured in degrees counter-clockwise from north. If bearing is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to 0 .
pitch | The initial pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-60). If pitch is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to 0 .
--- | ---

### Find elevations with the Tilequery API 

Sometimes it is helpful to get information about a location at the click of a mouse. This is what the menu item for elevations information offers.

#### Adapt to your wishes



### Swipe between maps

Different information can be highlighted with different maps. This function offers a comparison between different cards.

https://astridx.github.io/mapboxexamples/plugins/mapbox-gl-compare-swipe-between-maps.html

#### Adapt to your wishes




### Directions

What is the best way to get from A to B. Or: I want to show you how I got from A to B. The second was my requirement. I show special points along this route with markers.

#### Adapt to your wishes




