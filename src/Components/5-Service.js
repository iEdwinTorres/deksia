import { useState } from "react";
import MapImage from "../Assets/Map.png";

function Items({ items, index }) {
  return (
    <div className='items'>
      {items.icon}
      {items.text}
    </div>
  );
}

function Services() {
  const [items] = useState([
    {
      icon: "aaa",
      text: "Other Service",
    },
    {
      icon: "aaa",
      text: "Other Service",
    },
    {
      icon: "aaa",
      text: "Other Service",
    },
    {
      icon: "aaa",
      text: "Other Service",
    },
  ]);

  return (
    <div className='Services'>
      <h1>Natural Gas Services Area</h1>

      <body>
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </strong>{" "}
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </body>

      <h3>Other Services</h3>

      <div className='ServiceItems'>
        {items.map((items, index) => (
          <Items key={index} index={index} items={items} />
        ))}
      </div>

      <body>Ut enim ad minim veniam, quis nostrud exercitation.</body>
      <button>CTA</button>

      <img src={MapImage} />
    </div>
  );
}

export default Services;
