import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const toggleQuestions = (id) =>{
    const newActiveId = activeId === id ? null  : id
    setActiveId(newActiveId) ;
  }
  return (
    <main>
      <Questions questions={questions} activeId = {activeId } toggleQuestions = {toggleQuestions} />
    </main>
  );
};
export default App;
