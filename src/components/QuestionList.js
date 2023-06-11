import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ onDeleteQuestion, questions, onAnswerChange }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => {
          return (
            <QuestionItem
              question={question}
              key={question.id}
              onDeleteQuestion={onDeleteQuestion}
              onAnswerChange={onAnswerChange}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
