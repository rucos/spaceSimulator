import IAnimate from './modules/types/animateType'
import Vector from './modules/vector'
import getMasses from './modules/helpers/getMasses'
import setting from './modules/helpers/getSettings'

const canvas = document.querySelector('#canvas') as HTMLCanvasElement
if (!canvas) {
	throw new Error('Missing selector #canvas')
}

const ctx = canvas.getContext('2d')
if (!ctx) {
	throw new Error('Missing ctx')
}


const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight
const { scale, radius, trailLength, g, dt, softeningConstant } = setting

const vectors = new Vector(
	g,
	dt,
	getMasses(ctx, trailLength, radius),
	softeningConstant
)

vectors.animate({ ctx,
	scale,
	width,
	height } as IAnimate)

