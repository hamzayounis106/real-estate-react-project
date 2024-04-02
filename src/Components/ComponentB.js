// ComponentB.js
import { useLocation } from "react-router-dom";

function ComponentB() {
  const { state } = useLocation();

  if (!state) {
    return <div>Some Thing got fucked</div>;
  }
console.log(state)
  return (
    <>
      <div>
        <p>Name: {state.details}</p>
      </div>
    </>
  );
}

export default ComponentB;
