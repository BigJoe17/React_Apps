import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }) { //props destructuring 
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div className="text-center  bg-secondary p-2 mb-3 ">
        <h2>{heading}</h2>
      </div>
      {items.length === 0 && <p>Data not found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
