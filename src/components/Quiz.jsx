import { useCallback, useState } from "react";
import questions from "../questions";

import Questions from "./Questions";
import Summary from "./Summary";

export default function Quiz() {
  const [userAwnser, setUserAwnser] = useState([]);

  const activeQuestionIndex = userAwnser.length;
  const finishedQuiz = activeQuestionIndex === questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAwnser((prevSelectedAnswer) => {
      return [...prevSelectedAnswer, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (finishedQuiz) {
    return <Summary userAnswers={userAwnser} />;
  }

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAwnser={handleSkipAnswer}
      />
    </div>
  );
}
