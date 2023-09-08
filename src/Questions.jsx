import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId , toggleQuestions }) => {
  return (
    <section className="container">
      <h1>FAQ</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestions={toggleQuestions}
          />
        );
      })}
    </section>
  );
};
export default Questions