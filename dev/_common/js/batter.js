import {size, init} from './common.js'
import {frameEnd, trailingFX} from './proline.js'

function start(xy={x:`-=${150}`, y:0}){
	
	const tl = init()
	// return
	
	const time = 1.3
	
	tl.from(".ball", time*1.2, {...xy}, 0)
	tl.from(".player2", time, {...xy}, 0)	
	tl.from(".bg1b", time*.8, {...xy, opacity:0}, 0)	
	trailingFX(time, {...xy, opacity:0})
	tl.from(".t1a", .1, {x:`-=${size.w}`,opacity:1}, .6)
	tl.from(".t1b", .01, {opacity:0}, "+=0")

	
	
	
	tl.add(frameEnd(), "+=1.6")

}

export {start}