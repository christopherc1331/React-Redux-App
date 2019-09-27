import axios from "axios";

export const FETCH_QUESTION = "FETCH_QUESTION";
export const FETCH_QUESTION_SUCCESS = "FETCH_QUESTION_SUCCESS";

export const fetchRandomQuestion = dispatch => {
  return function(dispatch) {
    dispatch({ type: FETCH_QUESTION });

    axios
      .get("http://jservice.io/api/random")
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_QUESTION_SUCCESS, payload: res.data[0] });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
