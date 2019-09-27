import { FETCH_QUESTION, FETCH_QUESTION_SUCCESS } from "../Actions/";

const initialState = {
  isFetching: false,
  id: "",
  question: "",
  answer: "",
  category: "",
  value: ""
};

export const reducer = (state = initialState, action) => {
  console.log("state in reducer:", state);
  console.log("action in reducer:", action);
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
        category: action.payload.category,
        value: action.payload.value
      };

    default:
      return state;
  }
};
