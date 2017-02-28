import React, {PropTypes} from 'react';

import TextInput from './TextInput';


class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.savingsKeypress = this.savingsKeypress.bind(this);
  }

  savingsKeypress(name, value) {
    this.props.saveValue(value);
  }

  save() {
    this.props.saveValue(this.props.dataSaving);
  }

  render() {
    const {dataSaving} = this.props;

    return (
      <div>
        <h2>Form Saving</h2>
        <TextInput name="Input_1"
          placeholder="Input 1"
          onChange={this.savingsKeypress}
          value={dataSaving.input_1} />

        <input type="submit" value="Save" onClick={this.save} />
      </div>
    );
  }
}

Form.propTypes = {
  saveValue: PropTypes.func.isRequired,
  dataSaving: PropTypes.object.isRequired
};

export default Form;
