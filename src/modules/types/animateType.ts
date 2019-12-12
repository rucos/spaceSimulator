export default interface IAnimate {
	/**
     * Холст
     * @var CanvasRenderingContext2D
     * */
	ctx: CanvasRenderingContext2D

	/**
     * Масштаб
     * @var number
     * */
	scale: number

	/**
     * Ширина холста
     * @var number
     * */
	width: number

	/**
     * Высота холста
     * @var number
     * */
	height: number
}
