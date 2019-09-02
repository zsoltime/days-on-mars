import React from 'react';
import { shallow } from 'enzyme';

import Spirit from './Spirit';

describe('<Spirit /> icon', () => {
  it('passes className and size props to the svg element', () => {
    const className = 'tiny-icon';
    const size = '8px';
    const wrapper = shallow(
      <Spirit className={className} size={size} />
    );

    const svg = wrapper.find('svg');

    expect(svg.prop('className')).toBe(className);
    expect(svg.prop('height')).toBe(size);
    expect(svg.prop('width')).toBe(size);
  });
})
