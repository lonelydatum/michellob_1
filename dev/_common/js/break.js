import {size, init} from './common.js'
import {frameEnd, trailingFX} from './proline.js'

function start(xy={x:`+=${50}`, y:`+=${150}`}){
	
	const tl = init()
	// return
	
	const time = 1
	
	
	tl.from(".ball", time+.2, {...xy}, 0)
	tl.from(".bg1b", time*1.2, {...xy, opacity:0}, 0)	
	trailingFX(time, {...xy, opacity:0})
	tl.from(".t1a", .20, {y:`+=${90}`,opacity:0}, .5)
	tl.from(".t1b", .01, {opacity:0}, "+=.2")

	
	
	
	tl.add(frameEnd(), "+=1.7")

}

export {start}