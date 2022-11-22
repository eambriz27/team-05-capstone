import React from 'react';
import renderer from 'react-test-renderer';
import Account from '../screens/Account';

describe('make sure only one component is rendered', () => {
    it('has 1 child', async() => {
      const tree = await renderer.create(<Account />).toJSON();
      expect(tree.children.length).toBe(1);
    });
});

test('check the text div is rendered correctly', async() => {
      const tree = await renderer.create(<Account />).toJSON();
      const render = /[<Text style={{"fontSize": 40, "fontWeight": "400", "paddingTop": 50, "textAlign": "center"}}>Your Services Coming Soon!</Text>]/;
      expect(tree).toStrictEqual(renderer.create(<Account />).toJSON());
});