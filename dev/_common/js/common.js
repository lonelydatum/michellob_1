const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power1.easeOut


const {w, h} = size




const BLUE = "#001c82"
const RED = "#c7102d"




function getWH(id){
	const el = document.getElementById(id)
	const width = el.offsetWidth/2
	const height = el.offsetHeight/2
	return {width, height}
}

function init(){
	
	const tl = new TimelineMax({onComplete:()=>{
	
	}})

	

	tl.set(".frame1", {opacity:1})
	tl.set(".t1", getWH("t1"))
	tl.set(".t2", getWH("t2"))

	

	return tl
}




export {size, init, BLUE, RED, getWH}