import React from 'react'
import App, { generateDots } from './app'
import { shallow } from 'enzyme'

describe('<App />', () => {
  it('should exist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })

  it('should have the correct class', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.prop('className')).toEqual('container')
  })
})

describe('generateDots()', () => {
  it('should exist', () => {
    expect(generateDots).toBeDefined()
  })

  it('should render the specified amount of animated dots', () => {
    expect(generateDots(3)).toHaveLength(4)
  })
})
