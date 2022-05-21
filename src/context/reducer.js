import {
  QUESTION_BANK,
  SCORE,
  RESPONSES,
  CURRENT_QUESTION,
  ALL_ANSWERS,
} from "./types";

export const Reducers = (state, action) => {
  switch (action.type) {
    case QUESTION_BANK:
      return {
        ...state,
        questionBank: action.payload,
      };
    case SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case RESPONSES:
      return {
        ...state,
        responses: action.payload,
      };
    case CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      };
    case ALL_ANSWERS:
      return {
        ...state,
        allAnswers: action.payload,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
