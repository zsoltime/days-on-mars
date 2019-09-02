import React from 'react';
import { shallow } from 'enzyme';

import Curiosity from './Curiosity';

describe('<Curiosity /> icon', () => {
  it('passes className and size props to the svg element', () => {
    const className = 'small-icon';
    const size = '32px';
    const wrapper = shallow(
      <Curiosity className={className} size={size} />
    );

    const svg = wrapper.find('svg');

    expect(svg.prop('className')).toBe(className);
    expect(svg.prop('height')).toBe(size);
    expect(svg.prop('width')).toBe(size);
  });
})
