# Gatsby starter with Mapbox GL

__This starter__ is build on the starter https://github.com/brendan-ward/gatsby-starter-mapbox. It gets you going quickly with Mapbox GL in Gatsby. It uses React hooks to wrap the Mapbox GL JS object and I build my examples on this repo.

[Demo](https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-examples/)

The menu items in the navigation can be changed in the file [Header.jsx](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/da0f115b8bc8c52d0b7063ede429d1ce5fb99b92/src/components/Layout/Header.jsx#L63)!

## Installation

You will need to know Gatsby to use this starter. If you are interested in learning more about building your first Gatsby site, check out the [Gatsby.js Tutorials](https://www.gatsbyjs.com/tutorial/).

1. Initialize the Site

To create a site in a `mymapboxglsite` directory with this Gatsby Starter:

```
gatsby new mymapboxglsite https://github.com/astridx/gatsby-starter-mapbox-examples
```

2. Get Mapbox API token

You must set the [environment variable](https://www.gatsbyjs.com/docs/environment-variables/) `GATSBY_MAPBOX_API_TOKEN` to your [Mapbox API token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/). Define an environment config file, `.env.development` and/or `.env.production`, in your root folder. Depending on your active environment, the correct one will be found and its values embedded as environment variables in the browser JavaScript. Add the line 

```
GATSBY_MAPBOX_API_TOKEN='YOUR TOKEN'
```

3. Start the Site

Start the development mode:

```
gatsby develop
```

Open up a new tab in your browser and navigate to http://localhost:8000/

Perfect! This is the beginning of a Gatsby MapBox JS GL site! 


## Features

There is a menu item for each example.

### Full Screen Map

[![Full Screen Map Gatsby Mapbox GL Starter](https://user-images.githubusercontent.com/9974686/97810139-0f17ce80-1c72-11eb-987f-aea7edadfd6f.png)](https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-examples/map-full)

#### Adapt to your wishes

I provide basic map configuration such as initial `zoom` level in the file [src/components/Map](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/da0f115b8bc8c52d0b7063ede429d1ce5fb99b92/src/components/Map/index.jsx#L191): 

```
width: 'auto',
height: '100%',
center: [7.221275, 50.326111],
zoom: 9.5,
bounds: null,
minZoom: 0,
maxZoom: 24,
styles: ['streets-v11'],
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

### Map with Sidebar

[![Map with Sidebar Gatsby Mapbox GL Starter](https://user-images.githubusercontent.com/9974686/97810141-117a2880-1c72-11eb-92b1-6410facee11d.png)](https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-examples/map)

#### Adapt to your wishes

This [example](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/da0f115b8bc8c52d0b7063ede429d1ce5fb99b92/src/pages/mapwithsidebar.jsx#L19) shows you how to add a sidebar. You can see a concrete implementation in the _Scoll Fly to_ example below.

### Map with GeoJson Layer (simple)

[![Full Screen Map with GeoJSON Gatsby Mapbox GL Starter](https://user-images.githubusercontent.com/9974686/97810142-12ab5580-1c72-11eb-95a9-ae56e83cc71b.png)](https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-examples/map-geojson-simple)

#### Adapt to your wishes

You add a few geodata directly in the code via JSON souce and layer. The [example](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/da0f115b8bc8c52d0b7063ede429d1ce5fb99b92/src/pages/map-geojson-simple.jsx#L6) is worth a thousand words.

### Scroll Fly To

[![Map with Scroll Fly To in Gatsby Mapbox GL Starter](https://user-images.githubusercontent.com/9974686/97810143-13dc8280-1c72-11eb-9c7a-ba29536eeedd.png)](https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-examples/scrollflyto)

This feature allows you to tell a story using the map.

[Fly to a location](https://astridx.github.io/mapboxexamples/examples/scroll-fly-to.html) based on scroll position in the sidebar. Scroll down through the _Points of interest_ and the map will fly to the location. 

See another [example](https://docs.mapbox.com/mapbox-gl-js/example/scroll-fly-to/).

#### Adapt to your wishes

You change the content in the file [src/constants/scrollflyto.js](https://github.com/astridx/gatsby-starter-mapbox/blob/astridx/src/constants/scrollflyto.js)

Option | Description
--- | ---
bearing | The initial bearing (rotation) of the map, measured in degrees counter-clockwise from north. If bearing is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to 0.
pitch | The initial pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-60). If pitch is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to 0.
speed | The average speed of the animation.
--- | Please visit [MapBox GL Documentation](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#flyto) for all opitons.

### Find elevations with the Tilequery API 

[![Full Screen Map Gatsby Mapbox GL Starter with Query for getting elevation](https://user-images.githubusercontent.com/9974686/97810145-14751900-1c72-11eb-8730-a898c8068eb4.png)](https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-examples/map-full-plus-find-elevation)

Sometimes it is helpful to get information about a location at the click of a mouse. The [Mapbox Tilequery API](https://docs.mapbox.com/api/maps/#tilequery) allows you to retrieve features from vector tilesets based on a given longitude and latitude. The menu item for elevations information offers an example for getting the elevation of a location an show this in a text field in the lef upper corner of the map.

#### Adapt to your wishes

In the starter you can see an [example](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/da0f115b8bc8c52d0b7063ede429d1ce5fb99b92/src/pages/map-full-plus-find-elevation.jsx#L14) for querying the height above sea level. You have the option to query and display other geodata. Test and learn about the Tilequery API in the [Playground](https://docs.mapbox.com/playground/tilequery/).

### Layer Switcher

[![Full Screen Map with GeoJSON and Layer Control Layer Switcher Gatsby Mapbox GL Starter](https://user-images.githubusercontent.com/9974686/97810146-15a64600-1c72-11eb-8043-2ddf5c0e81f6.png)](https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-examples/map-show-and-hide-layers)

Do you want to display a lot of geospatial data? Then it makes sense to add them in a separate file. In addition, you might want to show and hide them as needed? So you can create a custom layer switcher to display different datasets.

#### Adapt to your wishes

The page [show-and-hide-layers](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/da0f115b8bc8c52d0b7063ede429d1ce5fb99b92/src/pages/map-show-and-hide-layers.jsx#L3) shows you how to integrate data and components. If you want to use other data in another map of the website, simply create a new file similar to [this](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/master/src/constants/layercontrol.js) one in the constants folder and import it.

### Swipe between maps

[![Full Screen Map Gatsby Mapbox GL Starter with Swipe to compare](https://user-images.githubusercontent.com/9974686/97810147-16d77300-1c72-11eb-8573-d464b249af22.png)](https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-examples/map-swipe)

Different information can be highlighted with different maps. This function offers a comparison between different maps.

See this [example](https://astridx.github.io/mapboxexamples/plugins/mapbox-gl-compare-swipe-between-maps.html)

#### Adapt to your wishes

Add the component  `<Swipemap />` like in in this [page](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/da0f115b8bc8c52d0b7063ede429d1ce5fb99b92/src/pages/map-swipe.jsx#L9):  `<Swipemap styles={['streets-v11', 'satellite-v9']} />`. You have to use two styles as parameters to be able to compare them. If you add more styles, they will be added to the left map in a layer switcher. So you can show all styles and compare them with the map on the right.

### Directions

[![Full Screen Map with Route / Directions Gatsby Mapbox GL Starter](https://user-images.githubusercontent.com/9974686/97810148-1808a000-1c72-11eb-86cd-77aa3f72a7b8.png)](https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-examples/map-direction)

What is the best way to get from A to B. Or: I want to show you how I got from A to B. The second was my requirement. I show special points along this route with markers.

#### Adapt to your wishes

You can see in the [example page](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/master/src/pages/map-direction.jsx#L11) how you can add the directions plugin. You enter the data for the plugin in an [extra file](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/master/src/constants/directions.js). You can use different routes. To do this, create a file similar to [this](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/master/src/constants/directions.js) one in the constants directory and import it into the page in which the route should be displayed.

For all options of the plugin directions see the [Documentation](https://docs.mapbox.com/api/navigation/#directions).

Points of interest you can add via the parameter `pois`. Here you need to add the longitude, the latitude and a text for a popup.

### Style Switcher

[![Full Screen Map with Style Switcher Gatsby Mapbox GL Starter](https://user-images.githubusercontent.com/9974686/97810149-18a13680-1c72-11eb-9efa-7fbfe67efd11.png)](https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-examples/map-style-switcher)

In previous examples you may have already seen that you can use the parameter `styles` with more than one entry (for example like this `<Map styles={['streets-v11', 'satellite-v9']} />`) for showing a style control in the form of an image at the bottom left. In addition it is possible to show a control with text links. 

#### Adapt to your wishes

The example on [this page](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/bb3fefdbda2e6b2d3e9f2bc62e573cf4a0fc0b9a/src/pages/map-style-switcher.jsx#L13) shows how to do this. You need to add (styleSwitcherData](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/master/src/constants/styles.js). styleSwitcherData are the title you like to display in the control for activation of this style and the [style uri](https://docs.mapbox.com/help/glossary/style-url/).


### Scale Control

[![Full Screen Map with Scale Control Gatsby Mapbox GL Starter](https://user-images.githubusercontent.com/9974686/97810150-18a13680-1c72-11eb-8843-2e16801738e9.png)](https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-examples/map-scale-control)

#### Adapt to your wishes

The example on [this page](https://github.com/astridx/gatsby-starter-mapbox-examples/blob/bb3fefdbda2e6b2d3e9f2bc62e573cf4a0fc0b9a/src/pages/map-scale-control.jsx#L11) shows how to do this.