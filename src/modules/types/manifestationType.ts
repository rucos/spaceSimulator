import IPosition from './positionType'

export default interface IManifestation {
	/**
     * Контекст рисования для элемента canvas
     * */
	ctx: any

	/**
     * Длина траектории движения,
     *  представляющую собой количество предыдущих позиций тела,
     *  которые след отображает
     *
     *  @var number
     * */
	trailLength: number

	/**
     * Радиус круга (radius), который представляет текущее положение тела
     *
     *  @var number
     * */
	radius: number

	/**
     * Список позиций
     *
     *  @var array
     * */
	positions: IPosition[]

	/**
     * Заполнение массива позиций
     *
     * @param position
     * @return void
     * */
	fillPosition(position: IPosition): void

	/**
     * Рисование траектории движения
     *
     * @param position
     * @return void
     * */
	draw(position: IPosition): void
}
