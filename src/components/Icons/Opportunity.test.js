import React from 'react';
import { shallow } from 'enzyme';

import Opportunity from './Opportunity';

describe('<Opportunity /> icon', () => {
  it('passes className and size props to the svg element', () => {
    const className = 'medium-icon';
    const size = '256px';
    const wrapper = shallow(
      <Opportunity className={className} size={size} />
    );

    const svg = wrapper.find('svg');

    expect(svg.prop('className')).toBe(className);
    expect(svg.prop('height')).toBe(size);
    expect(svg.prop('width')).toBe(size);
  });
})
