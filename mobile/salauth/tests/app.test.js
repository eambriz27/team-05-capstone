import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../screens/Home';
import Account from '../screens/Account';

describe('<Home />', () => {
  it('has 2 child', async() => {
    const tree = await renderer.create(<Home />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});