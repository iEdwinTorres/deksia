import MapImage from "../Assets/Map.png";

function Services() {
  return (
    <div className='Services'>
      <h1 id='custom_heading'>Natural Gas Services Area</h1>

      <div className='container'>
        <div className='row'>
          <div className='col-5'>
            <div className='row'>
              {" "}
              <body>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </strong>{" "}
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </body>
            </div>
            <h3 id='NOVA_h3'>Other Services</h3>
            <div className='row'></div>
            <div className='row'>
              <body>Ut enim ad minim veniam, quis nostrud exercitation.</body>
            </div>
            <div className='row'></div>
            <div>
              <button id='cta_btn'>CTA</button>
            </div>
          </div>
          <div className='col-7'>
            <img className='map' src={MapImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
