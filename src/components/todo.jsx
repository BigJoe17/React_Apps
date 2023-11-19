import { useRef, useState } from "react";

function Todo() {
  const inputRef = useRef(null);
  const [data, setData] = useState([]);

  return (
    <div>
      <input ref={inputRef} type="text" className=" form-control" />
      <button
        onClick={() => setData([...data,inputRef.current.value])}
        className="btn btn-primary"
      >
        submit
      </button>
      {data.map((item, index) => {
        return <h2 key={index}>{item}</h2>;
      })}
    </div>
  );
}

export default Todo;
