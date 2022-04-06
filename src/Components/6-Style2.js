import FamilyImage from "../Assets/img-4.png";

function StyleB() {
  return (
    <div className='StyleB'>
      <img className='family' src={FamilyImage} />

      <h2>H2. Headline 2 Styling & Spacing</h2>

      <body>
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </strong>{" "}
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor.
      </body>

      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur</li>
        <li>Lorem ipsum dolor sit amet, consectetur</li>
        <li>Lorem ipsum dolor sit amet, consectetur</li>
        <li>Lorem ipsum dolor sit amet, consectetur</li>
      </ul>

      <button>
        Sign up
      </button>
    </div>
  );
}

export default StyleB;
