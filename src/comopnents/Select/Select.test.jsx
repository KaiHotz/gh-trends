import React from 'react';
import { shallow } from 'enzyme';
import { Select } from './Select';

const defaultProps = {
  options: [
    { value: 'foo', label: 'Foo' },
    { value: 'bar', label: 'Bar' },
  ],
  label: 'this is a label',
  filterTxt: 'This is the Filter text',
  value: 'foo',
  onChange: jest.fn(),
};

describe('Select', () => {
  it('should render', () => {
    const wrapper = shallow(<Select {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
