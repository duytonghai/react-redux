import React, {PropTypes} from 'react';

const TextInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <div>
      <input className="small"
        type="text"
        placeholder={props.placeholder}
        onChange={handleChange} />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default TextInput;
