const mocha = require('mocha')
const chai = require('chai')
const sinon = require('sinon')
chai.use(require('sinon-chai'))

module.exports = {
  mocha,
  describe: mocha.describe,
  context: mocha.context,
  it: mocha.it,
  before: mocha.before,
  beforeEach: mocha.beforeEach,
  after: mocha.after,
  afterEach: mocha.afterEach,

  chai,
  expect: chai.expect,
  assert: chai.assert,
  should: chai.should,

  sinon,
  spy: sinon.spy,
  stub: sinon.stub,
  mock: sinon.mock,
  clock: sinon.clock
}
