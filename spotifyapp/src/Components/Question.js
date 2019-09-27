import React from "react";
import { connect } from "react-redux";

import { fetchRandomQuestion } from "../Actions/Index.js";

const Question = ({ fetchRandomQuestion, ...props }) => {
  console.log(props);
  return (
    <div>
      {/* {props.state.isFetching }  */}
      test
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    id: state.id,
    question: state.question,
    answer: state.answer,
    category: state.category,
    value: state.value
  };
};

export default connect(
  mapStateToProps,
  { fetchRandomQuestion: fetchRandomQuestion }
)(Question);
