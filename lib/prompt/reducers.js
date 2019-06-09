import actions from './actions'

export const initialState = {
  title: null,
  error: false,
  loading : false
}

function reducer (state = initialState, action) {
  //console.log(action.type);
  switch (action.type) {
    case actions.CHANGE_TITLE:
      return {
        ...state,
        title: action.payload.title
      }
      case actions.CHANGE_TITLE_SUCCESS:
            return {
              ...state,
              title: action.title 
            }
     case actions.CHANGE_TITLE_ERROR:
            return {
              ...state,
              ...{ error: action.error }
            }
    default:
      return state
  }
}

export default reducer
