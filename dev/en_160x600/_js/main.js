import {init, size, BLUE, RED} from '../../_common/js/common.js'




function start(){

	const tl = init()


	const y = 90
	const x = 30

	// tl.set(".frame1", {backgroundColor:BLUE})
	tl.add( setItem("og") )
	
	
	
	// tl.add( setItem("w") )
	tl.to(".ball", .2, {opacity:1})
	tl.to(".ball", 5, 
		{	
			rotation: 555,
			scale: .37,
			bezier:
				{
					
					curviness: 2,
					values:[
						{x:2, y:360},
						{x:2, y:40},						
						{x:2, y:510},
					], 
					// autoRotate:["x","y","rotation", 0, true]
				}, 
			ease:Linear.easeNone
		}, 0
	)


	return


	
	// tl.to(".t1 .flip-card", .7, {transform: `rotateX(180deg)`, ease:Back.easeInOut}, 0)

	
	
	
	// tl.add( setItem("white") )

	// tl.set(".frame1", {backgroundColor: BLUE})

	
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

