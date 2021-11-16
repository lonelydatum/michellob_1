import {size} from "./common.js"

function trailingFX(speed=1, obj={x:"+=50", y:"+=20"}){
	const tl = new TimelineMax()
	
	
	tl.add("start", 0)
	const total = 4
	// for(let i=total; i>0;i--){
	for(let i=1; i<=total;i++){
		const percent = i/total * speed * .1
		
		
		obj = {...obj, opacity:i===total?1:0}
		
		tl.from(`#player${i}`, .8*speed, {...obj, ease:Power3.easeOut}, `start+=${percent}`)	
	}
	
	
	
	// TweenLite.to(".ball", 1.2*speed, {x:0, y:0, ease:Power4.easeOut, delay:.17})
	return tl
}





function frameEnd(){
	const tl = new TimelineMax()

	tl.set(".frame2", {opacity:1})
	tl.from(".bg2", .2, {opacity:0})

	
	tl.from(".phone", .3, {y:size.h, opacity:1}, "+=.3")	
	tl.from(".ill", .3, {scale:0})

	tl.from(".t2", .01, { opacity:0}, "+=.5")
	tl.from(".cta1", .01, {opacity:0}, "+=1.5")
	tl.to(".cta1", .01, {opacity:0}, "+=2.5")
	tl.from(".cta2", .2, {opacity:0}, "+=.2")

	return tl
}

export {frameEnd, trailingFX}