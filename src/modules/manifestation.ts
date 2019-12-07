import IManifestation from './types/manifestationType'
import IPosition from './types/positionType'

export default class Manifestation implements IManifestation {
	/**
     * Контекст рисования для элемента canvas
     * */
	ctx: any

	/**
     * Список позиций
     *
     *  @var array
     * */
	positions: IPosition[]

	/**
     * Радиус круга (radius), который представляет текущее положение тела
     *
     *  @var number
     * */
	radius: number

	/**
     * Длина траектории движения,
     *  представляющую собой количество предыдущих позиций тела,
     *  которые след отображает
     *
     *  @var number
     * */
	trailLength: number

	constructor(ctx: any, trailLength: number, radius: number) {
		this.ctx = ctx
		this.trailLength = trailLength
		this.radius = radius
		this.positions = []
	}

	/**
     * Рисование траектории движения
     *
     * @param position
     * @return void
     * */
	draw(position: IPosition): void {
		this.fillPosition(position)

		this.positions.forEach((currentPosition, i) => {
			const transparency = this.getCalculateTransparency(i)
			const circleScaleFactor = this.getCircleScaleFactor(i)

			this.ctx.beginPath()
			this.ctx.arc(
				currentPosition.x,
				currentPosition.y,
				circleScaleFactor * this.radius,
				0,
				2 * Math.PI
			)
			this.ctx.fillStyle = `rgb(0, 12, 153, ${transparency})`

			this.ctx.fill()
		})
	}

	/**
     * Заполнение массива позиций
     *
     * @param position
     * @return void
     * */
	fillPosition(position: IPosition): void {
		this.positions.push(position)

		if (this.positions.length > this.trailLength) {
			this.positions.shift()
		}
	}

	/**
     * Получить рассчитанную прозрачность для элемента canvas
     *
     * @param i
     * @return number
     * */
	private getCalculateTransparency(i: number): number {
		let transparency = 0

		if (i === this.positions.length - 1) {
			transparency = 1
		} else {
			transparency = i / this.positions.length / 2
		}

		return transparency
	}

	/**
     * Получить массштабный коэфициент для элемента canvas
     *
     * @param i
     * @return number
     * */
	private getCircleScaleFactor(i: number): number {
		let circleScaleFactor = 0

		if (i === this.positions.length - 1) {
			circleScaleFactor = 1
		} else {
			circleScaleFactor = i / this.positions.length
		}

		return circleScaleFactor
	}

}
