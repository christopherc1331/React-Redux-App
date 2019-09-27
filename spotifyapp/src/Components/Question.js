import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchRandomQuestion } from "../Actions/index.js";

const Question = ({ fetchRandomQuestion, ...props }) => {
  console.log("Props from Question:", props);

  useEffect(() => {
    fetchRandomQuestion();
  }, [fetchRandomQuestion]);

  return (
    <div>
      {props.isFetching ? <p>Loading....</p> : <h1>{props.question}</h1>}
      <button onClick={fetchRandomQuestion}>New question</button>
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
