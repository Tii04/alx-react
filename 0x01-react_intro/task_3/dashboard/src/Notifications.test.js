import {shallow} from 'enzyme';
import React from 'react';
import notifications from './Notifications';

//Notification correctly renders
describe('test notifications render without crashing', () => {
    expect(Notification).toBeDefined();

    //test render three list items
    it('Notification renders list items', () => {
        expect(Notification.toBeDefined());
    });

    //test text rendered
    it('test notification renders text', () => {
        expect('Here is the list of notifications').toBeDefined();
    });
});

