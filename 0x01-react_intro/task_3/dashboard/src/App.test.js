import {shallow} from 'enzyme';
import React from 'react';
import App from './App';

//test renders without crashing
describe('Renders without crashing', () => {
    const app = shallow(<App />);

    //test App renders div with class App-header
    it('App-header renders div', () => {
        expect(app.find('App-header')).toBeDefined();
    });

    //test App renders div with class App-body
    it('App-body renders div', () => {
        expect(app.find('App-body')).toBeDefined();
    });

    //test App renders div with class App-footer
    it('App-footer render div', () => {
        expect(app.find('App-footer')).toBeDefined();
    });

});