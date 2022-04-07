import FamilyImage from "../Assets/img-4.png";

function Style2() {
  return (
    <div className='StyleB'>
      <div className='container-fluid' id='style2_container'>
        <div className='row justify-content-center'>
          <div className='col-6' id='family_col'>
            <img className='family' src={FamilyImage} />
          </div>
          <div className='col-6' id='right_col'>
            <h2 id='style2_heading'>
              H2. Headline 2 Styling
              <br />& Spacing
            </h2>

            <p id='style2_reg'>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </strong>{" "}
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor.
            </p>

            <ul id='style2_ul'>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
            </ul>

            <button id='style2_signup'>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Style2;
