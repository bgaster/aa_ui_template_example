/*
 * 
 */
'use strict'

function Renderer (client) {
    this.el = document.createElement('canvas')
    this.el.id = 'guide'
    // set required size of canvas here
    this.el.width = 640
    this.el.height = 640
    this.el.style.width = '320px'
    this.el.style.height = '320px'
    this.context = this.el.getContext('2d')
    this.showExtras = true

    this.scale = 1 //window.devicePixelRatio

    // params
    this.param1 = 0.05
    
    // handle incoming control message, set values of params, etc.
    this.controlParam1 = (v) => {
        let mv = map(v, 0, 127, 0.08, 4.0)
        this.param1 = mv
        return mv
    }

    // constants

    const red = "#DD4A22"
    const yellow = "#F3B83C"
    const blue = "#6060A6"
    const rose = "#FFBDB0"
    const rootbeer = "#1f0c07"

    // functions 
    this.start = function () {
        this.update()
    }

    this.update = function (force = false) {
        this.resize()
        this.draw()
    }

    this.draw = function() {
        this.clear()
        this.drawKey()
    }

    this.clear = function () {
        this.context.clearRect(0, 0, this.el.width * this.scale, this.el.height * this.scale);
        this.context.rect(0, 0, this.el.width * this.scale, this.el.height * this.scale);
        this.context.fillStyle = rootbeer;
        this.context.fill();
    }

    this.resize = function () {
        const _target = client.getPaddedSize()
        const _current = { width: this.el.width / this.scale, height: this.el.height / this.scale }
        const offset = sizeOffset(_target, _current)
        if (offset.width === 0 && offset.height === 0) {
            return
        }
        console.log('Renderer', `Require resize: ${printSize(_target)}, from ${printSize(_current)}`)
        this.el.width = (_target.width) * this.scale
        this.el.height = (_target.height) * this.scale
        this.el.style.width = (_target.width) + 'px'
        this.el.style.height = (_target.height) + 'px'
    }
    // ------------------

    this.drawKey = function() {
        var style = { color: "#d3d3d3", thickness: 6.0, strokeLinecap: "round", strokeLinejoin: "round"}
        this.setStyle(style)

        // box
        this.context.beginPath();
        this.context.moveTo(269.3, 76.4);
        this.context.lineTo(211.0, 76.4);
        this.context.bezierCurveTo(203.0, 76.4, 196.5, 70.0, 196.5, 62.0);
        this.context.lineTo(196.5, 47.6);
        this.context.bezierCurveTo(196.5, 39.6, 203.0, 33.2, 211.0, 33.2);
        this.context.lineTo(269.3, 33.2);
        this.context.bezierCurveTo(277.3, 33.2, 283.8, 39.6, 283.8, 47.6);
        this.context.lineTo(283.8, 62.0);
        this.context.bezierCurveTo(283.8, 70.0, 277.3, 76.4, 269.3, 76.4);
        this.context.closePath();
        this.context.stroke();

        this.context.strokeStyle = yellow
        // Nuke/Key
        this.context.beginPath();
        this.context.moveTo(228.8, 54.5);
        this.context.bezierCurveTo(228.8, 59.2, 225.0, 63.0, 220.3, 63.0);
        this.context.bezierCurveTo(215.6, 63.0, 211.8, 59.2, 211.8, 54.5);
        this.context.bezierCurveTo(211.8, 49.8, 215.6, 46.0, 220.3, 46.0);
        this.context.bezierCurveTo(225.0, 46.0, 228.8, 49.8, 228.8, 54.5);
        this.context.closePath();
        this.context.stroke();

        // Nuke/Key/Base
        this.context.beginPath();
        this.context.moveTo(228.8, 54.5);
        this.context.lineTo(268.6, 54.5);
        this.context.stroke();

        // Nuke/Key/Tooth 2
        this.context.beginPath();
        this.context.moveTo(260.6, 54.5);
        this.context.lineTo(260.6, 63.0);
        this.context.stroke();

        // Nuke/Key/Tooth 1
        this.context.beginPath();
        this.context.moveTo(249.6, 54.5);
        this.context.lineTo(249.6, 63.0);
        this.context.stroke();

        // Nuke/Key/Fill
        this.context.beginPath();
        this.context.moveTo(225.4, 47.7);
        this.context.lineTo(225.4, 61.1);
        this.context.stroke();
    }

    this.setStyle = function(style) {
        this.context.strokeStyle = style.color
        this.context.lineWidth = style.thickness * this.scale
        this.context.lineCap = style.strokeLinecap
        this.context.lineJoin = style.strokeLinejoin
    }

    this.drawPath = function (path, style) {
        const p = new Path2D(path)

        this.context.strokeStyle = style.color
        this.context.lineWidth = style.thickness * this.scale
        this.context.lineCap = style.strokeLinecap
        this.context.lineJoin = style.strokeLinejoin

        if (style.fill && style.fill !== 'none') {
        this.context.fillStyle = style.color
        this.context.fill(p)
        }

        // Dash
        this.context.save()
        if (style.strokeLineDash) { 
            this.context.setLineDash(style.strokeLineDash) 
        } 
        else { 
            this.context.setLineDash([]) 
        }
        this.context.stroke(p)
        this.context.restore()
    }

    // some helper functions

    function printSize (size) { return `${size.width}x${size.height}` }
    function sizeOffset (a, b) { return { width: a.width - b.width, height: a.height - b.height } }
    function clamp (v, min, max) { return v < min ? min : v > max ? max : v }
    function normalize(n, min, max) { return (n - min) / (max - min) }
    function vector(x,y) { return new Vector(x,y) }
    function point(x,y) { return new Vector(x,y) } // hmm...
    function floor(x) { return Math.floor(x) }
    function transform_scale(v, s) { return v.mul(s) }
    function translate(v,p) { return v.plus(p) }
    function rotate(p,a,orgin) {
        let s = Math.sin(a)
        let c = Math.cos(a)
        
        // translate to orgin
        p = p.minus(orgin)

        // rotate around orgin
        p = point(p.x * c - p.y * s, p.x * s + p.y * c)

        // translate back to orignal position
        return p.plus(orgin)
    }
    function radians(d) { return d * (Math.PI/180) }
    function map(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    }
}