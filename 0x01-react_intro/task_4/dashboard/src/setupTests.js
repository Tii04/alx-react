import {configure} from 'enzyme';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';

EnzymeAdapter.configure({adapter: new Adapter() });