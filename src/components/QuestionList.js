import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({question, deleteQuestion}) {



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{question.map((question) => (
        <QuestionItem
          key={question.id} question={question} deleteQuestion={deleteQuestion}
        />
      ))}
         </ul>
    </section> 
    );

 }
export default QuestionList;
