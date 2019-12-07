import IMasses from './massesType'

export default interface IVector {
	/**
	 * Гравитационная постоянная
	 * @var number
	 * */
	g: number

	/**
	 * Временной шаг
	 * @var number
	 * */
	dt: number

	/**
	 * Величина размягчения
	 * @var number
	 * */
	softeningConstant: number

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
}
