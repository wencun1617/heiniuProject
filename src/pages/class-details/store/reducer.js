const defaultState = {
  teachers: [],
  students: [],
  parents: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_CLASSDETAILS":
      return {
        ...state, teachers: action.classDetails[0].teachers,
        students: action.classDetails[0].students, parents: action.classDetails[0].parents
      };
    case "CLEAR":
      return { ...state, teachers: [], students: [], parents: [] }
    default:
      return state;
  }

}
export default reducer