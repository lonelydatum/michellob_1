import {init, size, BLUE, RED, getWH} from './common.js'

const tl = init()




function start(){
	
	

	const FLASH = .4

	

	
	

	tl.set(".frame1", {backgroundColor:BLUE})
	tl.add( setItem("w") )

	const tl2 = new TimelineMax()
	tl2.from(".ribbon", FLASH*2, {y:"-=90"}, 0)
	// tl2.from(".beer", FLASH*2, {y:"+=90"}, 0)
	tl2.from(".logo", FLASH*2, {x:"-=140"}, 0)
	

	tl.add("toRed", `+=${FLASH}`)
	tl.set(".frame1", {backgroundColor:RED}, "toRed")
	tl.add( setItem("b"), "toRed" )


	tl.add("toOG", `+=${FLASH}`)
	tl.set(".frame1", {backgroundColor:"white"}, "toOG")
	tl.add( setItem("og"), "toOG" )

	tl.add("t1")
	tl.to(".t1 .flip-card", .7, {transform: `rotateX(180deg)`, ease:Back.easeInOut}, "t1")
	tl.from(".legal", .3, {opacity:0}, "t1")


	tl.add("t2", "+=2")
	tl.to(".t1 .flip-card", .7, {transform: `rotateX(0deg)`, ease:Back.easeInOut}, "t2")
	tl.to(".t2 .flip-card", .7, {transform: `rotateX(180deg)`, ease:Back.easeInOut}, "t2")
	






}


function setItem(item, delay=0){
	
	const tl2 = new TimelineMax()
	
	const list = ["w", "b", "og"]

	list.map(i=>{
		const opacity = item===i ? 1 : 0
		tl2.set(`.${i}`, {opacity}, delay)
	})

	return tl2
}

start()





