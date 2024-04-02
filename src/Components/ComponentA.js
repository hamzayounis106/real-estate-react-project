import { Link } from "react-router-dom";

function ComponentA() {
  return (
    <>
      <div>
        <Link to={"/ComponentB"} state={{ id: 1, name: "sabaoon" }}>
          Learn More
        </Link>
      </div>    
    </>
  );
}

export default ComponentA;
