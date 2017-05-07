import React, {PropTypes} from 'react';

import SavingForm from './forms/Form';

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

FormSavingPage.displayName = 'FormSavingPage';

export default FormSavingPage;
