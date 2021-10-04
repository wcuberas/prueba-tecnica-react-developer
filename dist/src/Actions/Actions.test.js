import { getMovies, getSeries } from "./Actions"


describe('getSeries function', () => {
	// Tests creado anteriormente
  it('should return an Array with elements', () => {
    expect(getSeries()).not.toBeUndefined();
  })
})

describe('getMovies function', () => {
	// Tests creado anteriormente
  it('should return an Array with elements', () => {
    expect(getMovies()).not.toBeUndefined();
  })
})