const chai = require('chai')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
const spies = require('chai-spies')

chai.use(spies)

const expect = chai.expect


describe('index', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  })

  describe('changeCompletely(element, index, array)', () => {
    it('is defined', () => {
      expect(changeCompletely).to.be.a('function')
    })

    it('completely alters an array in place when used with Array.prototype.forEach', () => {
      const array = [1, 2, 3]

      expect(array.forEach(changeCompletely)).not.to.eql([1, 2, 3])
    })
  })

  describe('doToElementsInArray(array, callback)', () => {
    it('is defined', () => {
      expect(doToElementsInArray).to.be.a('function')
    })

    it('performs `callback` on `array` using `Array.prototype.forEach`', () => {
      const callback = chai.spy()
      const array = [1, 2, 3]
      const forEach = chai.spy.on(array, 'forEach')

      doToElementsInArray(array, callback)

      expect(callback).to.have.been.called
      expect(forEach).to.have.been.called
    })
  })
})
