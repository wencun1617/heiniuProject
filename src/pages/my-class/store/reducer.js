const defaultState = {
  adminiClass: [],
  teachClass: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_ADMINICLASS":
      return {...state, adminiClass: action.adminiClass};
    case "CHANGE_TAECHCLASS":
      return {...state, teachClass: action.teachClass};
    default: 
      return state;
  }
}
export default reducer