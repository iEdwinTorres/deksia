import GraphImg from "../Assets/Graph.png";

function Graph() {
  return (
    <div className='container' id='rates_container'>
      <div className='row justify-content-center' id='rates_top'>
        <div className='col-6' id='text_left'>
          <h1 id='rate_heading'>
            Fixed Rate vs Variable <br/>Rate Gas Prices What<br/> to know
          </h1>
        </div>
        <div className='col-6' id='text_right'>
          <body>
            <strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </strong>{" "}
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor.
          </body>
        </div>
      </div>
      <div className='row justify-content-between' id='rates_bottom'>
        <div className='col-5' id='fixed_rate'>
          <div id='box_left'>
            <h3 id='rates_h3'>Fixed rate</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
            </ul>
          </div>
        </div>
        <div className='col-5' id='variable_rate'>
          <div id='box_right'>
            <h3 id='rates_h3'>Variable rate</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col text-center'>
          <img id='graph' src={GraphImg} />
        </div>
      </div>
    </div>
  );
}

export default Graph;
