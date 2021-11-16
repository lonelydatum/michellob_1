import {size, init} from './common.js'
import {frameEnd, trailingFX} from './proline.js'

function start(xy={x:`+=${150}`, y:`+=${0}`}){
	
	const tl = init()
	// return
	
	const time = 1
	
	
	
	trailingFX(time, {...xy, opacity:0})
	tl.from(".bg1b", time*1.3, {...xy, opacity:0}, 0)	
	tl.from(".t1a", .2, {x:`+=${250}`,opacity:0}, .6)
	tl.from(".t1b", .01, {opacity:0}, "+=.4")

	
	
	
	tl.add(frameEnd(), "+=1.7")

}

export {start}