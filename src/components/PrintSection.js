import React from 'react';
import { connect } from 'react-redux';

function PrintSection(props) {
    return (
      <div className="printSection">
        <h1>Datos del formulario:</h1>
        <p>Texto: {props.printStatus.textValue ? props.printStatus.textValue : "[]"}</p> 
        <p>Date: {props.printStatus.dateValue ? props.printStatus.dateValue.toLocaleDateString():"00/00/0000"}</p>
        <p>Cantidad: {props.printStatus.rangeValue ? props.printStatus.rangeValue : "[]"}</p>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    printStatus: state.printStatus,
  };
}

export default connect(mapStateToProps)(PrintSection);