import React from 'react';
import { changeTextValue } from '../store/';
import { connect } from 'react-redux';

function TextField(props) {
    return (
      <div className="textField">
        <p>Digita el texto:</p>
        <textarea id="textValue" name="textValue" className="textBox" placeholder="" value={props.textValue} onChange={props.handleInput} />
    </div>
    )
}

const mapStateToProps = state => {
  return {
    textValue: state.textValue
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleInput(e) {
      dispatch(changeTextValue(e.target.value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField);