import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../actions/index';
import App from '../components/App';

  function mapStateToProps(state) {
    return {
      list: state.columns,
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      pageActions: bindActionCreators(pageActions,dispatch)
    }
  }
  
  

export default connect(mapStateToProps, mapDispatchToProps)(App)

