import {init, size} from '../../_common/js/common.js'

const tl = init()


function start(){
	const y = 90
	const x = 30
	const BLUE = "#001c82"
	const RED = "#c7102d"
	
	tl.add( setItem("og") )

	tl.to(".ball", 1.2, 
		{	
			rotation: 222,
			bezier:
				{
					type:"cubic", 
					curviness: 8,
					values:[
						{x:-80-x, y:100-y}, 
						{x:50-x, y:30-y}, 
						{x:103-x, y:120-y},
						{x:123-x, y:152-y},
					], 
					autoRotate:["x","y","rotation", 0, true]
				}, 
			ease:Power2.easeInOut
		}, 1.4
	)


	// tl.from(".t1", .3, {opacity:0}, 0)

	// TweenLite.set(".flip-card-container", {width:size.w, height:size.h})
	tl.to(".t1 .flip-card", .7, {transform: `rotateX(180deg)`, ease:Back.easeInOut}, 0)

	
	
	
	tl.add( setItem("white") )

	tl.set(".frame1", {backgroundColor: BLUE})

	
	tl.set([".t1", ".hoop", ".ball"], {opacity:0})
	

	const time = .6
	const time2 = .4
	const ease = Power1.easeInOut
	tl.add("toRed")
	tl.to(".logo", time, {x:89, y:163, scale:.53, ease}, "toRed")
	tl.to(".nba", time, {x:34, y:157, scale:.53, ease}, "toRed")
	tl.to(".ribbon", time, {x:190, ease}, "toRed")


	tl.set(".frame1", {backgroundColor: RED}, `toRed+=${time2}`)
	tl.add( setItem("blue"), `toRed+=${time2}` )
	tl.to(".ribbon .blue", .3, {x:20, y:0, scale:1, ease}, `toRed+=${time2}`)
	
	
	
	tl.add( setItem("end") )
	tl.set(".frame1", {backgroundColor: "white"})

	tl.add("end", "+=.3")
	
	tl.from(".beer", .4, {x:"+=100", ease:Power3.easeOut}, "end")
	// tl.from(".t2", .3, {opacity:0, x:"-=50", ease}, "end")
	tl.to(".t2 .flip-card", .7, {transform: `rotateX(180deg)`, ease:Back.easeInOut}, "end")
	tl.from(".o", .3, {opacity:0, ease}, "end")

}


function setItem(item, delay=0){
	console.log(delay);
	const tl2 = new TimelineMax()
	
	const list = ["og", "white", "blue", "end"]

	list.map(i=>{
		const opacity = item===i ? 1 : 0
		tl2.set(`.${i}`, {opacity}, delay)
	})

	return tl2
}

start()



module.exports = {};

