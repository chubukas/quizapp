import HomePage from "../pages/Main";
import QuizPage from "../pages/Quiz";
import ResultPage from "../pages/Results";
import Page404 from "../pages/404";

export const routes = [
  {
    path: "/",
    Component: HomePage,
  },

  {
    path: "/quiz",
    Component: QuizPage,
  },

  {
    path: "/results",
    Component: ResultPage,
  },

  {
    path: "*",
    Component: Page404,
  },
];
