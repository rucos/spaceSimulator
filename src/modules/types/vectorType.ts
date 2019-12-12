import IMasses from './massesType'

export default interface IVector {
	/**
	 * Список космических тел
	 * @var number
	 * */
	masses: IMasses[]

	/**
	 * Обновление координат
	 *
	 * @return IVector
	 * */
	updatePositionVectors(): IVector

	/**
	 * Обновление векторов скорости всех тел
	 *
	 * @return void
	 * */
	updateVelocityVectors(): void

	/**
	 * Обновления векторов ускорения всех тел
	 *
	 * @return IVector
	 * */
	updateAccelerationVectors(): IVector

	/**
	 * Анимация движения космических тел
	 *
	 * @return void
	 * */
	animate(ctx: CanvasRenderingContext2D, scale: number, width: number, height: number): void
}
