import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import ChangeNumber from "./reducers/upDown";
import { decNumber, incNumber } from "./actions";

function App() {
  const dispatch = useDispatch();
  const myState = useSelector((e) => e.ChangeNumber);
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px" }}>{myState}</h1>
      <button onClick={() => dispatch(incNumber())}>Increement</button>
      <button onClick={() => dispatch(decNumber())}>Decreement</button>
    </div>
  );
}

export default App;
