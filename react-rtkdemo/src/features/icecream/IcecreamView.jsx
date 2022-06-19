import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const [value, setValue] = React.useState(1);
  const numOfIcecreams = useSelector((state) => {
    return state.icecream.numOfIcecreams;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of ice cream a7a - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>order ice cream</button>
      <input
        type="number"
        value={value}
        onClick={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice cream
      </button>
    </div>
  );
};

export default IcecreamView;
