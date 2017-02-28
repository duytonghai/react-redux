import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions/savingActions';

import SavingForm from '../components/forms/Form';

export const FormSavingPage = (props) => {
  return (
    <SavingForm
      saveValue={props.actions.saveData}
      dataSaving={props.dataSaving} />
  );
};

FormSavingPage.propsTypes = {
  actions: PropTypes.object.isRequired,
  dataSaving: PropTypes.object.isRequired
};

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