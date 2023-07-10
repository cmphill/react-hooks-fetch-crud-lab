import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((r) => r.json())
      .then((q) => setQuestions(q))
  }, [questions])

    function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
    }

    function deleteQuestion(deleteQuestion) {
      const updatedQuestions = questions.filter((question) => question.id !== deleteQuestion.id)
      setQuestions(updatedQuestions)
    }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (<QuestionForm  onAddQuestion={handleAddQuestion}/>) : (<QuestionList deleteQuestion={deleteQuestion} handleAddQuestion={handleAddQuestion} question={questions} />)}
    </main>
  );
}

export default App;
