import IMasses from './modules/massesType'
import Vector from '../src/modules/vectors'

const masses: IMasses[] = []
const g = 39.5
const dt = 0.008 // 0,008 года равно 2,92 дня
const softeningConstant = 0.15

masses.push({
	name: 'Sun', // в качестве единицы массы используем солнечную, поэтому масса Солнца равна 1
	m: 1,
	x: -1.50324727873647e-6,
	y: -3.93762725944737e-6,
	z: -4.86567877183925e-8,
	vx: 3.1669325898331e-5,
	vy: -6.85489559263319e-6,
	vz: -7.90076642683254e-7,
	ax: 0,
	ay: 0,
	az: 0,
})

const v = new Vector(g, dt, masses, softeningConstant)
v.updatePositionVectors()
	.updatePositionVectors()

console.log(masses)
