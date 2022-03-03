/* eslint-disable no-undef */
const { expect } = require('chai')
const config = require('config')
const server = require('../index')

describe('Server', () => {
  it('tests that server is running current port', async () => {
    expect(server.port).to.equal(config.port)
  })
})
