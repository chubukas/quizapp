import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useAppContext } from "../context";
import { QUESTION_BANK, RESPONSES, CURRENT_QUESTION } from "../context/types";
import AnsweredList from "../components/AnsweredLists";

const Results = () => {
  const [appState, dispatch] = useAppContext();

  const { score, allAnswers, maxnumber } = appState;

  useEffect(() => {
    dispatch({ type: RESPONSES, payload: 0 });
    dispatch({ type: CURRENT_QUESTION, payload: 0 });
    dispatch({ type: QUESTION_BANK, payload: [] });
  }, [dispatch]);

  return (
    <div className="text-center text-black my-4 w-3/5 mx-auto">
      <div className=" text-3xl">
        You scored {score} / {maxnumber}
      </div>

      <div className=" font-normal text-lg text-gray-600">
        {allAnswers.map(({ questions, answer, correctAns }, i) => (
          <ul className="my-6 text-left list-disc" key={i}>
            <AnsweredList
              i={i}
              questions={questions}
              answer={answer}
              correctAns={correctAns}
            />
          </ul>
        ))}
      </div>
      <div className="mt-20 text-2xl font-normal">
        <Link to="/">Play Again</Link>
      </div>
    </div>
  );
};

export default Results;
