import Vector from './modules/vector'
import getMasses from './modules/getMasses'

const canvas = document.querySelector('#canvas') as HTMLCanvasElement

if (!canvas) {
	throw new Error('Missing selector #canvas')
}

const ctx = canvas.getContext('2d')

if (!ctx) {
	throw new Error('Missing ctx')
}

const scale = 150 // константа масштаба
const radius = 5
const trailLength = 35 // длина следа движения — количество предыдущих позиций, которые включает траектория
const g = 39.5
const dt = 0.008 // 0,008 года равно 2,92 дня
const softeningConstant = 0.15
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

const vectors = new Vector(
	g,
	dt,
	getMasses(ctx, trailLength, radius),
	softeningConstant)

vectors.animate(ctx, scale, width, height)

