# History of Places

A VR experience through history: how tourist destinations changed.

![alt text](https://github.com/Mimaaa/MINOR_WD_PROJECT1/blob/master/assets/images/screenshot.png "Screenshot")

[Clik here if you want to skip to the install procedure](#install)

# Public Library of Amsterdam (OBA)

Our one-week project for the OBA required us to build a web app that included the use of the AdamLink API ([read more about AdamLink](http://blogadamlink.nl/het-project/)). The API consists of collections from several institutions where the data is structured by using the [Linked Open Data Method](https://en.wikipedia.org/wiki/Linked_data) which is available in the [RDF format](https://en.wikipedia.org/wiki/Resource_Description_Framework). Data is requested with the use of [SPARQL](https://en.wikipedia.org/wiki/SPARQL) queries.

# A-Frame

I was thinking about what I wanted to make and during the presentation on Monday our teacher Joost Faber hinted about virtual reality. I immediately thought about the [A-Frame](https://aframe.io/) project which I came across last year, on [CSS Day](https://cssday.nl/), where [Ada Rose Cannon](https://twitter.com/lady_ada_king) showed us a demo she made.

The A-Frame framework makes it possible to construct VR worlds which are viewable in the browser (even on mobile) and can be build in a much simpler manner.

# Concept

I already knew that this project is more about the concept you were going to present instead of writing complex code. The idea needs to be something people will and can use. It needs to inspire the people from the institutions to imagine building apps that use their collected and linked data, to serve a bigger purpose than just being data.

## My Idea

I wanted to highlight six popular tourist destinations. Each destination would get its own 360° view of the current day á la Google Streetview. In each view you have the option to walk and look around. On the sides/behind you there are several panes in which pictures that were taken in the past are being shown with their corresponding years.

## A Realisation

Unfortunately it was more difficult to construct the multiple worlds than initially thought. I used the [360° Image Gallery](https://aframe.io/examples/showcase/360-image-gallery/) as a starting point because it gave me the option to switch between views. However, it was limited in customising each view according to my requirements.

I then took a look at the [`<a-link>`](https://aframe.io/docs/0.8.0/primitives/a-link.html) primitive which makes it possible to link to different HTML documents. That sounded exactly what I wanted. It gave me the option to construct each view way faster and unique to its environment. I tried setting this up but soon found out that this method of linking worlds together (traversing) would cost me more time than I had (I had 1.5 days left a this point in time).

## Shortcut to Completion

I still had to write some code to handle all the data. Thus, I chose to shortcut my way to completion: instead of constructing six different views, I chose to limit it to one. That was a big relief, as constructing one view is much less work than doing six. That gave me time to work on the API handling and data presentation in the respective view.

# What did I learn?

I learned several things in this project. Some of them are:

* Thinking more about the concept and what users *probably* want to see (I didn't do extensive user research). In essence thinking user-first instead of data-first.
* More knowledge about A-Frame. Last year I already started experimenting a bit with A-Frame, but this definitely gave me more motivation to continue those experiments, because it's simply way a too awesome tool.
* Thinking about handling and presenting data.
* Writing queries in SPARQL syntax.

# To-Do

The current project is pretty limited: it is a simple prototype showing a part of my initial idea. 

There is a couple of things I still want to do:

* Support multiple worlds

  The initial idea was to support multiple worlds showing six popular tourist destinations.

* Show a description of each picture

  The prototype isn't that interactive. I want to add the option to focus on a picture after which an overlay is brought into the view displaying the description that tells you more about the story behind the picture.

# Install

If you want to run my project and see the end result for yourself, please do so.

**Note: if you are going to view this on your laptop you need to do so on Google Chrome. If you want to view this project through your VR goggles you can do so by visiting [my Glitch project](https://powerful-raven.glitch.me). However, you will be served placeholder images instead of the ones from the API, [more about that below](#the-glitch-issue).**

## The Steps

1. Clone the project

```sh
$ git clone https://github.com/Mimaaa/backend-package-assignment.git
```

2. Install a Google Chrome plugin

Because of the fact that I'm making a request to the API through the client, the server on which the images are stored is not allowing me access. 

>No 'Access-Control-Allow-Origin' header is present on the requested resource.

There are two ways to solve this problem:

* Install this [Google Chrome Plugin](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en) and turn it on.

* Or setting up a proxy server by using [this package](https://github.com/Rob--W/cors-anywhere). 

I chose to do the first one, as it's taking me only 1 second to solve the problem. That doesn't mean it's the right way to solve it.

3. Run the server

```sh
$ npm start
```

Note: you will be requested your password to install live-server globally in order to run the project.

4. View the project

Open Google Chrome and visit `http://localhost:8080/`

### The Glitch issue

Glitch is not allowing me to receive the pictures through their project because the images are server with HTTP instead of HTTPS. I would advise the owners of that database to change this as soon as possible.


