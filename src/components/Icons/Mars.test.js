import React from 'react';
import { shallow } from 'enzyme';

import Mars from './Mars';

describe('<Mars /> icon', () => {
  it('passes className and size props to the svg element', () => {
    const className = 'large-icon';
    const size = '512px';
    const wrapper = shallow(
      <Mars className={className} size={size} />
    );

    const svg = wrapper.find('svg');

    expect(svg.prop('className')).toBe(className);
    expect(svg.prop('height')).toBe(size);
    expect(svg.prop('width')).toBe(size);
  });
})
