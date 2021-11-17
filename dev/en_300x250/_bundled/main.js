(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power1.easeOut;

var w = size.w;
var h = size.h;

var BLUE = "#001c82";
var RED = "#c7102d";

function getWH(id) {
	var el = document.getElementById(id);
	var width = el.offsetWidth / 2;
	var height = el.offsetHeight / 2;
	return { width: width, height: height };
}

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {} });

	tl.set(".frame1", { opacity: 1 });
	tl.set(".t1", getWH("t1"));
	tl.set(".t2", getWH("t2"));

	return tl;
}

exports.size = size;
exports.init = init;
exports.BLUE = BLUE;
exports.RED = RED;
exports.getWH = getWH;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var tl = (0, _commonJsCommonJs.init)();

function start() {
	var y = 90;
	var x = 30;

	tl.add(setItem("og"));

	tl.to(".ball", 1.2, {
		rotation: 222,
		bezier: {
			type: "cubic",
			curviness: 8,
			values: [{ x: -80 - x, y: 100 - y }, { x: 50 - x, y: 30 - y }, { x: 103 - x, y: 120 - y }, { x: 123 - x, y: 152 - y }],
			autoRotate: ["x", "y", "rotation", 0, true]
		},
		ease: Power2.easeInOut
	}, 1.4);

	// tl.from(".t1", .3, {opacity:0}, 0)

	// TweenLite.set(".flip-card-container", {width:size.w, height:size.h})
	tl.to(".t1 .flip-card", .7, { transform: "rotateX(180deg)", ease: Back.easeInOut }, 0);

	tl.add(setItem("white"));

	tl.set(".frame1", { backgroundColor: _commonJsCommonJs.BLUE });

	tl.set([".t1", ".hoop", ".ball"], { opacity: 0 });

	var time = .6;
	var time2 = .4;
	var ease = Power1.easeInOut;
	tl.add("toRed");
	tl.to(".logo", time, { x: 89, y: 163, scale: .53, ease: ease }, "toRed");
	tl.to(".nba", time, { x: 34, y: 157, scale: .53, ease: ease }, "toRed");
	tl.to(".ribbon", time, { x: 190, ease: ease }, "toRed");

	tl.set(".frame1", { backgroundColor: _commonJsCommonJs.RED }, "toRed+=" + time2);
	tl.add(setItem("blue"), "toRed+=" + time2);
	tl.to(".ribbon .blue", .3, { x: 20, y: 0, scale: 1, ease: ease }, "toRed+=" + time2);

	tl.add(setItem("end"));
	tl.set(".frame1", { backgroundColor: "white" });

	tl.add("end", "+=.3");

	tl.from(".beer", .4, { x: "+=100", ease: Power3.easeOut }, "end");
	// tl.from(".t2", .3, {opacity:0, x:"-=50", ease}, "end")
	tl.to(".t2 .flip-card", .7, { transform: "rotateX(180deg)", ease: Back.easeInOut }, "end");
	tl.from(".o", .3, { opacity: 0, ease: ease }, "end");
}

function setItem(item) {
	var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	console.log(delay);
	var tl2 = new TimelineMax();

	var list = ["og", "white", "blue", "end"];

	list.map(function (i) {
		var opacity = item === i ? 1 : 0;
		tl2.set("." + i, { opacity: opacity }, delay);
	});

	return tl2;
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map