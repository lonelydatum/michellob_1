import {init, size, BLUE, RED} from '../../_common/js/common.js'


function shoot(){
	const tl_ball = new TimelineMax()
	const y = 90
	const x = 30
	
	
	

	tl_ball.add( setItem("og") ).to(".ball", .9, 
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
		}
	)

	return tl_ball

}

function start(){

	const tl = init()

	tl.to(".t1 .flip-card", .7, {transform: `rotateX(180deg)`, ease:Back.easeInOut}, 0)

	tl.add( setItem("og"), 0 )
	tl.add( shoot() , 1.4)
	


	
	

	
	
	tl.add("toWhite", "-=.2")
	tl.add( setItem("white"), "toWhite" )
	tl.set(".frame1", {backgroundColor: BLUE}, "toWhite")
	tl.set([".t1", ".hoop", ".ball"], {opacity:0}, "toWhite")
	

	const time = .5
	const time2 = .3
	const ease = Power1.easeOut
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

	tl.to([".logo", ".o", ".nba"], .3, {y:"-=18"})
	tl.from(".t3", .3, {opacity:0, ease})

}


function setItem(item, delay=0){
	
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

