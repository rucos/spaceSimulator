import IManifestation from './manifestationType'

export default interface IMasses {
	/**
     * Имя объекта
     * */
	name: string

	/**
     * Единица массы
     * */
	m: number

	/**
     * Координаты
     * */
	x: number
	y: number
	z: number

	/**
     * Векторы скорости
     * */
	vx: number
	vy: number
	vz: number

	/**
     * Векторы ускорения
     * */
	ax: number
	ay: number
	az: number

	/**
	 * Экземпляр элемента canvas
	 * */
	manifestation: IManifestation
}
