import { withRouter } from 'react-router-dom';
import { injectReducer } from '../../store/reducers';
import reducers, { key } from "./modules/Hello";
import { store } from '../../App';
import Hello from './containers/Hello';

injectReducer(store, { key, reducers });
export default withRouter(Hello);
