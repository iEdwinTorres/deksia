import MapImage from "../Assets/Map.png";
import svg1 from "../Assets/1.svg";

function Services() {
  return (
    <div className='Services'>
      <h1 id='services_heading'>Natural Gas Services Area</h1>

      <div className='container' id='services_container'>
        <div className='row'>
          <div className='col-5' id='services_left'>
            <div className='row'>
              <body id='services_reg'>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit, sed do eiusmod tempor incididunt
                </strong>{" "}
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </body>

              <h3 id='services_h3'>Other Services</h3>

              <div className='container'>
                <div className='row justify-content-between' id='services_12'>
                  <div className='col' id='services_btns_13'>
                    <div className='row'>
                      <div className='col-auto' id='service_svg'>
                        <img src={svg1} />
                      </div>
                      <div className='col' id='services_btns_text'>
                        Other
                        <br />
                        Service
                      </div>
                    </div>
                  </div>
                  <div className='col' id='services_btns_24'>
                    <div className='row'>
                      <div className='col-auto' id='service_svg'>
                        <img src={svg1} />
                      </div>
                      <div className='col' id='services_btns_text'>
                        Other
                        <br />
                        Service
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row justify-content-between' id='services_34'>
                  <div className='col' id='services_btns_13'>
                    <div className='row'>
                      <div className='col-auto' id='service_svg'>
                        <img src={svg1} />
                      </div>
                      <div className='col' id='services_btns_text'>
                        Other
                        <br />
                        Service
                      </div>
                    </div>
                  </div>
                  <div className='col' id='services_btns_24'>
                    <div className='row'>
                      <div className='col-auto' id='service_svg'>
                        <img src={svg1} />
                      </div>
                      <div className='col' id='services_btns_text'>
                        Other
                        <br />
                        Service
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <body id='services_reg'>
                Ut enim ad minim veniam, quis nostrud exercitation.
              </body>
            </div>
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
