import React from 'react';
import { changeRangeValue } from '../store/';
import { connect } from 'react-redux';

function RangeField(props) {
    return (
      <div className="rangeField">
        <p>Selecciona el valor:</p>
        <p>{props.rangeValue}</p>
        <input type="range" name="rangeValue" min="0" max="100" value={props.rangeValue} onChange={props.handleInput}></input>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    rangeValue: state.rangeValue
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleInput(e) {
      dispatch(changeRangeValue(e.target.value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RangeField);