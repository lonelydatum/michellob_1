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

function setWH(el, id) {
	var width = el.offsetWidth / 2;
	var height = el.offsetHeight / 2;
	// console.log({width, height}in);
	TweenMax.set("." + id, { width: width, height: height });
}

function getWH(id) {

	var el = document.getElementById(id);

	if (el.complete) {
		setWH(el, id);
	} else {
		el.addEventListener('load', function () {
			setWH(el, id);
		});
	}
}

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {} });

	tl.set(".frame1", { opacity: 1 });

	getWH("t1");
	getWH("t2");

	// tl.set(".t1", )

	return tl;
}

exports.size = size;
exports.init = init;
exports.BLUE = BLUE;
exports.RED = RED;
exports.getWH = getWH;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJs = require('./common.js');

function shoot() {
	var tl_ball = new TimelineMax();
	var BALL_TIME = .7;

	tl_ball.to(".ball", .3, { opacity: 1 });
	tl_ball.to(".ball", BALL_TIME, {
		rotation: 400,
		scale: .33,
		bezier: {

			curviness: 1,
			values: [{ x: 2, y: 360 }, { x: 2, y: 60 }, { x: 2, y: 120 }]
		},
		ease: Power1.easeOut
	}, 0);

	tl_ball.set(".hoop", { zIndex: 99 }, BALL_TIME * .6);

	return tl_ball;
}

function start() {

	var tl = (0, _commonJs.init)();

	var y = 90;
	var x = 30;

	// tl.set(".frame1", {backgroundColor:BLUE})
	tl.add(setItem("og"));

	tl.to(".t1 .flip-card", .7, { transform: "rotateX(180deg)", ease: Back.easeInOut }, 0);

	tl.add(shoot(), 1.8);

	// return

	tl.add("toWhite");
	tl.set(".ball", { opacity: 0 }, "toWhite");
	tl.set([".hoop", ".t1"], { opacity: 0 }, "toWhite");
	tl.add(setItem("w"), "toWhite");
	tl.set(".frame1", { backgroundColor: _commonJs.BLUE }, "toWhite");

	tl.add("toBlue", "+=.3");
	tl.add(setItem("b"), "toBlue");
	tl.set(".frame1", { backgroundColor: _commonJs.RED }, "toBlue");

	tl.add("toOG", "+=.3");
	tl.add(setItem("og"), "toOG");
	tl.set(".frame1", { backgroundColor: "white" }, "toOG");

	tl.add("end", "+=.2");
	tl.to(".t2 .flip-card", .7, { transform: "rotateX(180deg)", ease: Back.easeInOut }, "end");
	tl.from(".beer", .3, { x: "-=120", ease: Power3.easeOut }, "end");

	return;
}

function setItem(item) {
	var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	var tl2 = new TimelineMax();

	var list = ["w", "b", "og"];
	console.log(item);

	list.map(function (i) {
		var opacity = item === i ? 1 : 0;
		tl2.set("." + i, { opacity: opacity }, delay);
	});

	return tl2;
}

start();

},{"./common.js":1}],3:[function(require,module,exports){
'use strict';

require('../../_common/js/ss.js');

},{"../../_common/js/ss.js":2}]},{},[3])


//# sourceMappingURL=main.js.map
