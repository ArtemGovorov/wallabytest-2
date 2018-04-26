import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import IndexPage from 'pages/index';

describe('<IndexPage />', () => {
  const component = shallow(<IndexPage bar="hello world" />);
  test('renders as expected', () => {
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
