# Gatsby starter with Mapbox GL

The starter https://github.com/brendan-ward/gatsby-starter-mapbox gets you going quickly with Mapbox GL in Gatsby. It uses React hooks to wrap the Mapbox GL JS object and I build my examples on this repo. 

__This starter__ is build on the starter https://github.com/brendan-ward/gatsby-starter-mapbox. It gets you going quickly with Mapbox GL in Gatsby. It uses React hooks to wrap the Mapbox GL JS object and I build my examples on this repo.

Because Mapbox GL is provided as a native JS object within `components/Map/index.jsx`, instead of a React Component, you need to coordinate application state directly with the map object.

[Demo](https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-examples/)

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

### Full Screen Map

![Full Screen Map Gatsby Mapbox GL Starter](https://user-images.githubusercontent.com/9974686/97588775-239f6100-19fd-11eb-9816-6c5aedc4a3a2.png)

#### Adapt to your wishes

### Map with Sidebar

![Map with Sidebar Gatsby Mapbox GL Starter](https://user-images.githubusercontent.com/9974686/97588781-24d08e00-19fd-11eb-952c-388a35241b3f.png)


#### Adapt to your wishes

### Map with GeoJson Layer (simple)

![Full Screen Map with GeoJSON Gatsby Mapbox GL Starter](https://user-images.githubusercontent.com/9974686/97588787-25692480-19fd-11eb-9199-422272267fd8.png)

#### Adapt to your wishes

### Scroll Fly To

![Map with Sidebar Gatsby Mapbox GL Starter(1)](https://user-images.githubusercontent.com/9974686/97588790-2601bb00-19fd-11eb-8951-13108382d57f.png)


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

![Full Screen Map Gatsby Mapbox GL Starter(1)](https://user-images.githubusercontent.com/9974686/97588793-2601bb00-19fd-11eb-9fa8-b47ac9ff56dc.png)

Sometimes it is helpful to get information about a location at the click of a mouse. This is what the menu item for elevations information offers.

#### Adapt to your wishes

### Layer Switcher

![Full Screen Map with GeoJSON and Layer Control Layer Switcher Gatsby Mapbox GL Starter](https://user-images.githubusercontent.com/9974686/97588801-269a5180-19fd-11eb-8240-4c60935efd82.png)

#### Adapt to your wishes


### Swipe between maps

![Full Screen Map Gatsby Mapbox GL Starter(2)](https://user-images.githubusercontent.com/9974686/97588806-2732e800-19fd-11eb-869f-cee5146d5ce8.png)

Different information can be highlighted with different maps. This function offers a comparison between different cards.

https://astridx.github.io/mapboxexamples/plugins/mapbox-gl-compare-swipe-between-maps.html

#### Adapt to your wishes




### Directions

![Full Screen Map with Route Gatsby Mapbox GL Starter](https://user-images.githubusercontent.com/9974686/97588809-28641500-19fd-11eb-8d8f-4b577ccfd722.png)

What is the best way to get from A to B. Or: I want to show you how I got from A to B. The second was my requirement. I show special points along this route with markers.

#### Adapt to your wishes




### Style Switcher

![Full Screen Map with Route Gatsby Mapbox GL Starter(1)](https://user-images.githubusercontent.com/9974686/97588813-28fcab80-19fd-11eb-8831-b7486a02df5f.png)


#### Adapt to your wishes


### Scale Control

![Full Screen Map with Route Gatsby Mapbox GL Starter(2)](https://user-images.githubusercontent.com/9974686/97588818-29954200-19fd-11eb-899e-c76bfbc4e3c0.png)


#### Adapt to your wishes





