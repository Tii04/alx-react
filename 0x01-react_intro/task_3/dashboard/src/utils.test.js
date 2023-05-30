import {getFullYear, getFooterCopy, getLatestNotification} from './utils';

test('Checks if full year is returned.', () => {
    expect(getFullYear()).toBe(2023);
});

test('Correct string returned when true or false.', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    expect(getFooterCopy(true)).toBe('Holberton School');
});

test('Checks for notifications', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});