import {init, size, BLUE, RED} from '../../_common/js/common.js'


const tl = init()

tl.to(".t1 .flip-card", .7, {transform: `rotateX(180deg)`, ease:Back.easeInOut}, 0)

tl.add("flip", "+=2")
tl.to(".t1 .flip-card", .7, {transform: `rotateX(360deg)`, ease:Back.easeInOut}, "flip")
tl.to(".t2 .flip-card", .7, {transform: `rotateX(180deg)`, ease:Back.easeInOut}, "flip")