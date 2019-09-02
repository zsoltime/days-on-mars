import React from 'react';
import { shallow } from 'enzyme';

import Icon from '.';

describe('<Icon />', () => {
  it('renders the correct component', () => {
    const wrapperCuriosity = shallow(<Icon type="Curiosity" />);
    const wrapperMars = shallow(<Icon type="Mars" />);
    const wrapperOpportunity = shallow(<Icon type="Opportunity" />);
    const wrapperSpirit = shallow(<Icon type="Spirit" />);

    expect(wrapperCuriosity.find('Curiosity').length).toBe(1)
    expect(wrapperMars.find('Mars').length).toBe(1)
    expect(wrapperOpportunity.find('Opportunity').length).toBe(1)
    expect(wrapperSpirit.find('Spirit').length).toBe(1)
  })

  it('passes props to component', () => {
    const wrapper = shallow(<Icon type="Opportunity" color="red" />);

    expect(wrapper.find('Opportunity').prop('color')).toBe('red');
  });

  it('returns null if type prop is invalid', () => {
    const wrapper = shallow(<Icon type="Test" />);

    expect(wrapper.type()).toEqual(null);
  })
})
