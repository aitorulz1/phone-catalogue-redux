import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';

export const enzymeSetUp = () => {
  configure({ adapter: new Adapter() });
}
