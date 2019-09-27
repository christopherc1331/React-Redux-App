import { FETCH_QUESTION, FETCH_QUESTION_SUCCESS } from "../Actions/Index.js";

const initialState = {
  isFetching: false,
  id: "",
  question: "",
  answer: "",
  category: "",
  value: ""
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        id: action.payload.id,
        question: action.payload.question,
        answer: action.payload.answer,
        category: action.payload.category.title,
        value: action.payload.value
      };

    default:
      return state;
  }
};

export default Reducer;
