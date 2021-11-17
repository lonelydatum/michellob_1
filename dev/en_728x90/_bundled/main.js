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
	console.log(el, { width: width, height: height });
	TweenMax.set("." + id, { width: width, height: height });
}

function getWH(id) {

	var el = document.getElementById(id);
	console.log(el.complete);
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

var _commonJsCommonJs = require('../../_common/js/common.js');

var tl = (0, _commonJsCommonJs.init)();

function start() {

	var FLASH = .4;

	tl.set(".frame1", { backgroundColor: _commonJsCommonJs.BLUE });
	tl.add(setItem("w"));

	var tl2 = new TimelineMax();
	tl2.from(".ribbon", FLASH * 2, { y: "-=90" }, 0);
	tl2.from(".beer", FLASH * 2, { y: "+=90" }, 0);
	tl2.from(".logo", FLASH * 2, { x: "-=140" }, 0);

	tl.add("toRed", "+=" + FLASH);
	tl.set(".frame1", { backgroundColor: _commonJsCommonJs.RED }, "toRed");
	tl.add(setItem("b"), "toRed");

	tl.add("toOG", "+=" + FLASH);
	tl.set(".frame1", { backgroundColor: "white" }, "toOG");
	tl.add(setItem("og"), "toOG");

	tl.add("t1");
	tl.to(".t1 .flip-card", .7, { transform: "rotateX(180deg)", ease: Back.easeInOut }, "t1");
	tl.from(".legal", .3, { opacity: 0 }, "t1");

	tl.add("t2", "+=2");
	tl.to(".t1 .flip-card", .7, { transform: "rotateX(0deg)", ease: Back.easeInOut }, "t2");
	tl.to(".t2 .flip-card", .7, { transform: "rotateX(180deg)", ease: Back.easeInOut }, "t2");
}

function setItem(item) {
	var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	var tl2 = new TimelineMax();

	var list = ["w", "b", "og"];

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
