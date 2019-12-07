import IMasses from './modules/types/massesType'
import IPosition from './modules/types/positionType'
import Manifestation from './modules/manifestation'
import Vector from './modules/vector'


const canvas = <HTMLCanvasElement> document.querySelector('#canvas')
const scale = 70 // константа масштаба
const radius = 4
const trailLength = 35 // длина следа движения — количество предыдущих позиций, которые включает траектория

const ctx = canvas.getContext('2d')

if (ctx) {
	const masses: IMasses[] = []
	const g = 39.5
	const dt = 0.008 // 0,008 года равно 2,92 дня
	const softeningConstant = 0.15

	const width = canvas.width = window.innerWidth
	const height = canvas.height = window.innerHeight

	masses.push({
		manifestation: new Manifestation(
			ctx,
			trailLength,
			radius
		),
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

	masses.push({
		name: 'Mercury',
		m: 1.65956463e-7,
		x: -0.346390408691506,
		y: -0.272465544507684,
		z: 0.00951633403684172,
		vx: 4.25144321778261,
		vy: -7.61778341043381,
		vz: -1.01249478093275,
		ax: 0,
		ay: 0,
		az: 0,
		manifestation: new Manifestation(
			ctx,
			trailLength,
			radius
		),
	})

	masses.push({
		ax: 0, ay: 0, az: 0, manifestation: new Manifestation(
			ctx,
			trailLength,
			radius
		),
		name: 'Venus',
		m: 2.44699613e-6,
		x: -0.168003526072526,
		y: 0.698844725464528,
		z: 0.0192761582256879,
		vx: -7.2077847105093,
		vy: -1.76778886124455,
		vz: 0.391700036358566,
	})

	masses.push({
		name: 'Earth',
		m: 3.0024584e-6, ax: 0, ay: 0, az: 0,
		manifestation: new Manifestation(
			ctx,
			trailLength,
			radius
		),
		x: 0.648778995445634,
		y: 0.747796691108466,
		z: -3.22953591923124e-5,
		vx: -4.85085525059392,
		vy: 4.09601538682312,
		vz: -0.000258553333317722,
	})

	masses.push({
		ax: 0, ay: 0, az: 0, manifestation: new Manifestation(
			ctx,
			trailLength,
			radius
		),
		m: 3.213e-7,
		name: 'Mars',
		x: -0.574871406752105,
		y: -1.395455041953879,
		z: -0.01515164037265145,
		vx: 4.9225288800471425,
		vy: -1.5065904473191791,
		vz: -0.1524041758922603,
	})

	const vectors = new Vector(
		g,
		dt,
		masses,
		softeningConstant)

	const animate = (): void => {
		vectors
			.updatePositionVectors()
			.updateAccelerationVectors()
			.updateVelocityVectors()

		ctx.clearRect(0, 0, width, height)

		vectors.masses.forEach(massI => {
			const position: IPosition = {
				x: width / 2 + massI.x * scale,
				y: height / 2 + massI.y * scale,
			}

			massI.manifestation.draw(position)

			if (massI.name) {
				ctx.font = '14px Arial'
				ctx.fillText(massI.name, position.x + 12, position.y + 4)
				ctx.fill()
			}
		})

		requestAnimationFrame(animate)
	}

	animate()
}
