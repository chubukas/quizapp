import { useEffect, useCallback } from "react";
import { Navigate } from "react-router-dom";

import MainShow from "../components/MainShow";
import { useAppContext } from "../context";
import {
  QUESTION_BANK,
  SCORE,
  RESPONSES,
  CURRENT_QUESTION,
  ALL_ANSWERS,
} from "../context/types";
import { randomMax } from "../util/helper";
import { api } from "../util/api";

const Quiz = () => {
  const [appState, dispatch] = useAppContext();

  const {
    questionBank,
    score,
    currentQuestion,
    maxnumber,
    responses,
    allAnswers,
  } = appState;

  // Function to get question from api
  const getQuestions = useCallback(async () => {
    try {
      const question = await fetch(api());
      const data = await question.json();
      const mainData = randomMax(data.results, maxnumber);
      dispatch({ type: QUESTION_BANK, payload: mainData });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, maxnumber]);

  useEffect(() => {
    getQuestions();
    dispatch({ type: SCORE, payload: 0 });
    dispatch({ type: ALL_ANSWERS, payload: [] });
  }, [getQuestions, dispatch]);

  // Function to show next question
  const showNextQuestion = () => {
    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questionBank.length) {
      dispatch({ type: CURRENT_QUESTION, payload: nextQuetions });
    } else {
      dispatch({ type: RESPONSES, payload: maxnumber });
    }
  };

  // Function to compute scores
  const computeAnswer = (answer, correctAns, questions) => {
    const objs = { questions, answer, correctAns };
    const getAnswers = [objs];
    const data = allAnswers.concat(getAnswers);

    dispatch({ type: ALL_ANSWERS, payload: data });

    if (answer === correctAns) {
      dispatch({ type: SCORE, payload: score + 1 });
    }

    showNextQuestion();
  };

  return (
    <div className="container my-10 px-12 mx-auto text-center">
      {questionBank?.length > 0 && responses < maxnumber ? (
        <MainShow computeAnswer={computeAnswer} />
      ) : (
        <div>Loading...</div>
      )}

      {responses === maxnumber ? <Navigate to="/results" /> : null}
    </div>
  );
};

export default Quiz;
