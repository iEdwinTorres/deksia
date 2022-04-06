import { useState } from "react";

function Items({ items }) {
  return (
    <div className='items'>
      <strong>{items.title}</strong>
      <br />
      {items.text}
    </div>
  );
}

function Benefits() {
  const [items] = useState([
    {
      icon: "aaa",
      title: "Benefit #1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      icon: "aaa",
      title: "Benefit #2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      icon: "aaa",
      title: "Benefit #3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      icon: "aaa",
      title: "Benefit #4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
  ]);
  return (
    <div className='Benefits'>
      <h1>Benefits of Buying Natural Gas through Novec</h1>

      <div className='BenefitsItems'>
        {items.map((items, index) => (
          <Items key={index} index={index} items={items} />
        ))}
      </div>

      <div className='Benefits-Banner' />
    </div>
  );
}

export default Benefits;
