import Card from "../components/Card";
import { useAppContext } from "../context";

const MainShow = ({ computeAnswer }) => {
  const [appState] = useAppContext();

  const { questionBank, currentQuestion, maxnumber } = appState;
  return (
    <>
      <div className=" mb-28 text-black font-extrabold text-2xl">
        {questionBank[currentQuestion]?.category}
      </div>

      <Card
        question={questionBank[currentQuestion]?.question}
        selected={(answer) =>
          computeAnswer(
            answer,
            questionBank[currentQuestion]?.correct_answer,
            questionBank[currentQuestion]?.question
          )
        }
      />

      <div className=" mt-6 text-black font-extrabold text-center">
        {currentQuestion + 1} 0f {maxnumber}
      </div>
    </>
  );
};

export default MainShow;
