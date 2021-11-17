import {init, size, BLUE, RED} from '../../_common/js/common.js'

function shoot(){
	const tl_ball = new TimelineMax()
	const BALL_TIME = .7
	
	
	tl_ball.to(".ball", .3, {opacity:1})
	tl_ball.to(".ball", BALL_TIME, 
		{	
			rotation: 400,
			scale: .33,
			bezier:
				{
					
					curviness: 1,
					values:[
						{x:2, y:360},
						{x:2, y:60},						
						{x:2, y:120},
					], 
				}, 
			ease:Power1.easeOut
		}, 0
	)

	tl_ball.set(".hoop", {zIndex:99}, BALL_TIME*.6)

	
	return tl_ball
}


function start(){

	const tl = init()


	const y = 90
	const x = 30

	// tl.set(".frame1", {backgroundColor:BLUE})
	tl.add( setItem("og") )
	
	
	tl.to(".t1 .flip-card", .7, {transform: `rotateX(180deg)`, ease:Back.easeInOut}, 0)

	tl.add(shoot(), 1.8)

	// return


	tl.add("toWhite")
	tl.set(".ball", {opacity:0}, "toWhite")
	tl.set([".hoop", ".t1"], {opacity:0}, "toWhite")
	tl.add( setItem("w"), "toWhite" )
	tl.set(".frame1", {backgroundColor: BLUE}, "toWhite")


	tl.add("toBlue", "+=.3")	
	tl.add( setItem("b"), "toBlue" )
	tl.set(".frame1", {backgroundColor: RED}, "toBlue")

	tl.add("toOG", "+=.3")	
	tl.add( setItem("og"), "toOG" )
	tl.set(".frame1", {backgroundColor: "white"}, "toOG")

	tl.add("end", "+=.2")
	tl.to(".t2 .flip-card", .7, {transform: `rotateX(180deg)`, ease:Back.easeInOut}, "end")
	tl.from(".beer", .3, {x:"-=120", ease:Power3.easeOut}, "end")

	return


	
	

	
	
	
	

	

	
	// tl.set([".t1", ".hoop", ".ball"], {opacity:0})
	

	// const time = .6
	// const time2 = .4
	// const ease = Power1.easeInOut
	// tl.add("toRed")
	// tl.to(".logo", time, {x:89, y:163, scale:.53, ease}, "toRed")
	// tl.to(".nba", time, {x:34, y:157, scale:.53, ease}, "toRed")
	// tl.to(".ribbon", time, {x:190, ease}, "toRed")


	// tl.set(".frame1", {backgroundColor: RED}, `toRed+=${time2}`)
	// tl.add( setItem("blue"), `toRed+=${time2}` )
	// tl.to(".ribbon .blue", .3, {x:20, y:0, scale:1, ease}, `toRed+=${time2}`)
	
	
	
	// tl.add( setItem("end") )
	// tl.set(".frame1", {backgroundColor: "white"})

	// tl.add("end", "+=.3")
	
	// tl.from(".beer", .4, {x:"+=100", ease:Power3.easeOut}, "end")
	
	// tl.to(".t2 .flip-card", .7, {transform: `rotateX(180deg)`, ease:Back.easeInOut}, "end")
	// tl.from(".o", .3, {opacity:0, ease}, "end")

}


function setItem(item, delay=0){
	
	const tl2 = new TimelineMax()
	
	const list = ["w", "b", "og"]
	console.log(item);

	list.map(i=>{
		const opacity = item===i ? 1 : 0
		tl2.set(`.${i}`, {opacity}, delay)
	})

	return tl2
}


start()



module.exports = {};

