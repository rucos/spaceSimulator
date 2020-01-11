interface ISetting {
	/**
     * Константа масштаба
     *
     * @var number
     * */
	scale: number

	/**
     * Радиус тел
     *
     * @var number
     * */
	radius: number

	/**
     * Длина следа движения — количество предыдущих позиций, которые включает траектория
     *
     * @var number
     * */
	trailLength: number

	/**
     * Гравитационная постоянная
     *
     * @var number
     * */
	g: number

	/**
     * Шаг времени - 0,008 года равно 2,92 дня
     *
     * @var number
     * */
	dt: number

	/**
     * Величина размягчения
     *  (для рассчета гравитационной силы)
     *
     * @var number
     * */
	softeningConstant: number
}

export default {
	scale: 150,
	radius: 5,
	trailLength: 35,
	g: 39.5,
	dt: 0.008,
	softeningConstant: 0.15,
} as ISetting
