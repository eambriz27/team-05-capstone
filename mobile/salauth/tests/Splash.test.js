import React from 'react';
import renderer from 'react-test-renderer';
import Splash from '../screens/Splash';

describe('make sure splash is rendered on startup', () => {
    it('will load the splash div', async() => {
      expect(renderer.create(<Splash />)).toBeTruthy();
    });
});

// test('check the buttons are rendered correctly', async() => {
//       const tree = await renderer.create(<Account />).toJSON();
//       const render = /[<Text style={{"fontSize": 40, "fontWeight": "400", "paddingTop": 50, "textAlign": "center"}}>Your Services Coming Soon!</Text>]/;
//       expect(tree).toStrictEqual(renderer.create(<Account />).toJSON());
// });