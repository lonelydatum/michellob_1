const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power1.easeOut


const {w, h} = size




const BLUE = "#001c82"
const RED = "#c7102d"



function setWH(el, id){
	const width = el.offsetWidth/2
	const height = el.offsetHeight/2
	// console.log({width, height});
	TweenMax.set(`.${id}`, {width, height})

	
}

function getWH(id){

	const el = document.getElementById(id)
	
	if(el.complete){
		setWH(el, id)
	}else{
		el.addEventListener('load', ()=>{
			setWH(el, id)
		})	  	
	}
	
}

function init(){
	
	const tl = new TimelineMax({onComplete:()=>{
	
	}})

	

	tl.set(".frame1", {opacity:1})

	getWH("t1")
	getWH("t2")

	// tl.set(".t1", )
	

	

	return tl
}




export {size, init, BLUE, RED, getWH}