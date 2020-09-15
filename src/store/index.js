import { createStore } from 'redux';

export const CHANGE_TEXT_VALUE = 'CHANGE_TEXT_VALUE';
export const CHANGE_RANGE_VALUE = 'CHANGE_RANGE_VALUE';
export const CHANGE_DATE_VALUE = 'CHANGE_DATE_VALUE';
export const CHANGE_CHECK_STATUS = 'CHANGE_CHECK_STATUS';
export const CHANGE_ENABLE_STATUS = 'CHANGE_ENABLE_STATUS';
export const SAVE_PRINT_STATUS = 'SAVE_PRINT_STATUS';
export const RESET_STATUS = 'RESET_STATUS';


export function changeTextValue(content) {
    return {
      type: CHANGE_TEXT_VALUE,
      payload: content
    };
}

export function changeDateValue(content) {
    return {
      type: CHANGE_DATE_VALUE,
      payload: content
    };
}

export function changeRangeValue(content) {
    return {
      type: CHANGE_RANGE_VALUE,
      payload: content
    };
}

export function changeCheckStatus(item,status) {
    return {
      type: CHANGE_CHECK_STATUS,
      payload: status,
      input: item,
    };
}

export function changeEnableStatus(item,status) {
    return {
      type: CHANGE_ENABLE_STATUS,
      payload: status,
      input: item,
    };
}

export function savePrintStatus(status) {
    return {
      type: SAVE_PRINT_STATUS,
      payload: status,
    };
}

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_TEXT_VALUE:
      return {
        ...state,
        textValue: action.payload,
      };
    case CHANGE_RANGE_VALUE:
      return {
        ...state,
        rangeValue: action.payload,
      };
    case CHANGE_DATE_VALUE:
      return {
        ...state,
        dateValue: action.payload,
      };
    case CHANGE_CHECK_STATUS:
      return {
        ...state,
        [action.input]: action.payload,
    };
    case CHANGE_ENABLE_STATUS:
        return {
          ...state,
          [action.input]: action.payload,
      };
    case SAVE_PRINT_STATUS:
        return {
          ...state,
          printStatus: action.payload,
      };
    case RESET_STATUS:
        return {
            ...state,
            textField: false,
            dateField: true,
            rangeField: false,
            textValue: "",
            dateValue: new Date(),
            rangeValue: 50,
        }
    default:
      return state;
  }
}

const initialState = {
    textField: false,
    dateField: true,
    rangeField: false,
    textValue: "",
    dateValue: new Date(),
    rangeValue: 50,
    enableInput: false,
    enablePrint: false,
    enableCreate: true,
    printStatus: {},
}

export const store = createStore(reducer, initialState);