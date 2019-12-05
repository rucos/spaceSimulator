import IMasses from './massesType'
import IVector from './vectorType'


export default class Vector implements IVector {
	/**
     * Временной шаг
     * @var number
     * */
	dt: number

	/**
     * Гравитационная постоянная
     * @var number
     * */
	g: number

	/**
     * Список космических тел
     * @var number
     * */
	masses: IMasses[]

	/**
     * Величина размягчения
     * @var number
     * */
	softeningConstant: number

	constructor(g: number, dt: number, masses: IMasses[], softeningConstant: number) {
		this.g = g
		this.dt = dt
		this.masses = masses
		this.softeningConstant = softeningConstant

	}

	updateAccelerationVectors(): IVector {
		return this
	}

	/**
     * Обновление координат
     *
     * @return IVector
     * */
	updatePositionVectors(): IVector {
		this.masses.forEach(el => {
			el.x += el.vx * this.dt
			el.y += el.vy * this.dt
			el.z += el.vz * this.dt
		})

		return this
	}

	/**
     * Обновление векторов скорости
     *
     * @return void
     * */
	updateVelocityVectors(): void {
		this.masses.forEach(el => {
			el.vx += el.ax * this.dt
			el.vy += el.ay * this.dt
			el.vz += el.az * this.dt
		})
	}

}
