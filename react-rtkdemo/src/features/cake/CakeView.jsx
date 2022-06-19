import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => {
    return state.cake.numOfCakes;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(ordered())}>order cake</button>
      <button onClick={() => dispatch(restocked(5))}> cakes </button>
    </div>
  );
};

export default CakeView;
