import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions';

import FormSavingPage from './FormSavingPage';

function mapStateToProps(state) {
  return {
    dataSaving: state.dataSaving
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSavingPage);
