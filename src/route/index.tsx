import { createBrowserRouter } from "react-router-dom";
import {
  Eight,
  Eighteen,
  Eleven,
  Fifteen,
  Five,
  Four,
  Fourteen,
  Nine,
  Nineteen,
  One,
  Seven,
  Seventeen,
  Six,
  Sixteen,
  Ten,
  Thirteen,
  Three,
  Twelve,
  Twenty,
  TwentyFour,
  TwentyOne,
  TwentyThree,
  TwentyTwo,
  Two,
} from "../levels";
import { Congrats } from "../parts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <One />,
  },
  {
    path: "/2",
    element: <Two />,
  },
  {
    path: "/3",
    element: <Three />,
  },
  {
    path: "/4",
    element: <Four />,
  },
  {
    path: "/5",
    element: <Five />,
  },
  {
    path: "/6",
    element: <Six />,
  },
  {
    path: "/7",
    element: <Seven />,
  },
  {
    path: "/8",
    element: <Eight />,
  },
  {
    path: "/9",
    element: <Nine />,
  },
  {
    path: "/10",
    element: <Ten />,
  },
  {
    path: "/11",
    element: <Eleven />,
  },
  {
    path: "/12",
    element: <Twelve />,
  },
  {
    path: "/13",
    element: <Thirteen />,
  },
  {
    path: "/14",
    element: <Fourteen />,
  },
  {
    path: "/15",
    element: <Fifteen />,
  },
  {
    path: "/16",
    element: <Sixteen />,
  },
  {
    path: "/17",
    element: <Seventeen />,
  },
  {
    path: "/18",
    element: <Eighteen />,
  },
  {
    path: "/19",
    element: <Nineteen />,
  },
  {
    path: "/20",
    element: <Twenty />,
  },
  {
    path: "/21",
    element: <TwentyOne />,
  },
  {
    path: "/22",
    element: <TwentyTwo />,
  },
  {
    path: "/23",
    element: <TwentyThree />,
  },
  {
    path: "/24",
    element: <TwentyFour />,
  },
  {
    path: "/fin",
    element: <Congrats />,
  },
]);
