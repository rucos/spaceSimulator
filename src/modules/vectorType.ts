import massesType from './massesType'

export default interface IVector {
	g: number
	dt: number
	softeningConstant: number
	masses: massesType[]
	updatePositionVectors(): IVector
	updateVelocityVectors(): void
	updateAccelerationVectors(): IVector
}
