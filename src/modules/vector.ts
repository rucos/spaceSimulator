import IAnimate from './types/animateType'
import IMasses from './types/massesType'
import IPosition from './types/positionType'
import IVector from './types/vectorType'

export default class Vector implements IVector {
	/**
	 * Список космических тел
	 * @var number
	 * */
	public masses: IMasses[]

	/**
     * Временной шаг
     * @var number
     * */
	private readonly dt: number

	/**
     * Гравитационная постоянная
     * @var number
     * */
	private readonly g: number

	/**
     * Величина размягчения
     * @var number
     * */
	private readonly softeningConstant: number

	/**
	* @param g
	* @param dt
	* @param masses
	* @param softeningConstant
	* */
	constructor(g: number, dt: number, masses: IMasses[], softeningConstant: number) {
		this.g = g
		this.dt = dt
		this.masses = masses
		this.softeningConstant = softeningConstant
	}

	/**
     * Обновления векторов ускорения всех тел
     *
     * @return IVector
     * */
	public updateAccelerationVectors(): IVector {
		this.masses.forEach((massI, i) => {
			let ax = 0
			let ay = 0
			let az = 0

			this.masses.forEach((massJ, j) => {
				if (i !== j) {
					const dx = massJ.x - massI.x
					const dy = massJ.y - massI.y
					const dz = massJ.z - massI.z
					const f = this.getCalculateGravitationalForce(massJ.m, dx, dy, dz)

					ax += dx * f
					ay += dy * f
					az += dz * f
				}
			})

			massI.ax = ax
			massI.ay = ay
			massI.az = az
		})

		return this
	}

	/**
     * Обновление координат
     *
     * @return IVector
     * */
	public updatePositionVectors(): IVector {
		this.masses.forEach(el => {
			el.x += el.vx * this.dt
			el.y += el.vy * this.dt
			el.z += el.vz * this.dt
		})

		return this
	}

	/**
     * Обновление векторов скорости всех тел
     *
     * @return void
     * */
	public updateVelocityVectors(): void {
		this.masses.forEach(el => {
			el.vx += el.ax * this.dt
			el.vy += el.ay * this.dt
			el.vz += el.az * this.dt
		})
	}

	/**
	 * Анимация движения космических тел
	 *
	 * @param animateObj
	 * @return void
	 * */
	public animate(animateObj: IAnimate): void {
		const { ctx, scale, width, height } = animateObj

		this.updatePositionVectors()
			.updateAccelerationVectors()
			.updateVelocityVectors()

		ctx.clearRect(0, 0, width, height)

		this.masses.forEach(massI => {
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

		requestAnimationFrame(this.animate.bind(this, animateObj))
	}

	/**
     * Получить значени рассчетанной гравитационной силы
	 *  f = g * massJ.m / dSq * (dSq + s)^½
	 *
     * @param m
     * @param dx
     * @param dy
     * @param dz
     * @return number
     * */
	private getCalculateGravitationalForce(m: number, dx: number, dy: number, dz: number): number {
		const distanceSq = this.getDistanceSq(dx, dy, dz)

		return this.g * m / (distanceSq * Math.sqrt(distanceSq + this.softeningConstant))
	}

	/**
     * Произведение суммы квадратов расстояния между massI и massJ
     *  по осям x, y и z
     *
     * @param dx
     * @param dy
     * @param dz
     * @return number
     * */
	private getDistanceSq(dx: number, dy: number, dz: number): number {
		return dx * dx + dy * dy + dz * dz
	}
}
