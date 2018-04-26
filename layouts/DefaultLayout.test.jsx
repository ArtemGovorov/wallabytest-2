import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import DefaultLayout from './DefaultLayout';

const mockChildren = <div>hello world</div>;

describe('<DefaultLayout />', () => {
  const component = shallow(<DefaultLayout>{mockChildren}</DefaultLayout>);
  test('renders as expected', () => {
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
