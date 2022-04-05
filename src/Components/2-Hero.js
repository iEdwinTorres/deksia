import { useState } from "react";

function Items({ items, index }) {
  return <div className='items'>{items.text}</div>;
}

function Hero() {
  const [items] = useState([
    {
      icon: "aaa",
      text: "Billing & Payments",
    },
    {
      icon: "aaa",
      text: "Report A Problem",
    },
    {
      icon: "aaa",
      text: "Moving Or Canceling Service",
    },
    {
      icon: "aaa",
      text: "Switching Service Providers",
    },
  ]);

  return (
    <div>
      <div className='Hero'>
        <h1>
          Natural Gas
          <br />
          Services
        </h1>
        <h3>Super neat subhead</h3>
        <body>
          NOVEC Energy Solutions is pleased to offer natural gas customers in
          Pennsylvania, Maryland, Virginia, District of Columbia and Kentucky
          the option to enroll in our PriceOne Plan.
        </body>
        <button>Sign up</button>
      </div>

      <div className='HeroItems'>
        {items.map((items, index) => (
          <Items key={index} index={index} items={items} />
        ))}
      </div>
    </div>
  );
}

export default Hero;
