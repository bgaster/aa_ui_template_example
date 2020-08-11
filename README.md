# Audio Anywhere UI Template

## Introduction

Audio Anywhere supports interfaces development in plan HTML5. While not required for inforced it is the goal to keep dependencies to a minimum to avoid porting issues at a later point.

The main focus on interfaces is to keep them simple and to use HTML canvas when possible.

## Building

Change into the directory ```ui``` and run the following command:

```bash
node scripts/lib/build.js
```

This will compile the .js files in scripts into a single index.html 
(or debug.html) in the currenty directory. 

## Loading GUI

Copy the resulting ```index.html``` to ```assets``` directory at the root of the repo. Change into that directory, and assuming you have python3 installed, run the command:

```bash
python3 -m http.server
```

Then open the URL [http://127.0.0.1:8000/](http://127.0.0.1:8000/) and your UI should be displyed.

## Coding an interface

The code for an interface is expected to be pretty simple. 
No dependencies on complex JS frameworks such as Angular or React. I
mean you can, but I'm just not sure it is necessary. Of course,
you might want to use Jquery to handle async control and so on, but 
probably not necessary.

There is single entry point, Client, that handles all global entry points, an instance of which is passed to all other functions/classes.

It calls the update property of all other functions/classes, to handle
redrawing of the UI. There are also other functions that it expects 
to be there for updating parameters and so on, from the host environment. Don't worry about these for now.

The code for client is in ```scripts/client.js```. For now I've added just one more file ```scripts/renderer.js```, which implements the canvas and thus the basic renderer. For now I would implement the UI in here, we might want to break it up into seperate JS files in the future, but that is for software engineering reasons only.

You will see that I've added the basics of what is needed, the function ```start``` can be used for initialization, and ```update``` is called each frame and is where drawing should be handled. For now it simply checks to see if there is a resize, which generally will not be the case, and then calls ```draw```, which in turn calls ```drawKey```. This later function simply uses the canvas API to draw a key :-). This and other functions like it are where you will draw the interface and is what I would work on to begin with. We will want to defined functions/classes for things like buttons, sliders, and so on, so that they can contain state and be animated, these will be in their own JS files and instances created in the renderer. 

As the JS files are all concaternated into a single file there is no need to include them or anything like that, just make sure they are created in the ```scripts``` directory.

## Some stuff to look at

I guess maybe working on the keyboard would be a good place to start. Below are
a couple of canvas keyoard examples. Here a lot of there JS are inthe HTML, 
while your's should just go in JS files. Of course, these ones have more traditional 
keys, but you should get the idea for the VL-1 style ones. Should not be a huge change. 

- [Drawing an animated piano keyboard using Javascript](https://www.benjaminpritchard.org/drawing-an-animated-piano-keyboard-using-javascript/)
- [Keyboard using Canvas](https://www.youtube.com/watch?v=W88oVRkGcPU)

jQuery is a libarary used a lot in JS programming, to quote "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. I often use it and it is widely used for all sorts of stuff. One example that is worth looking at is:

- [jQuery Kontrol](https://github.com/aterrien/jQuery-Kontrol)

Here is a simply example using canvas to draw a slider:

- [Canvas  Slider](https://www.c-sharpcorner.com/UploadFile/18ddf7/html5-canvas-slider-control-without-using-range-input/)