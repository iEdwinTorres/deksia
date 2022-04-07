import svg1 from "../Assets/1.svg";
import svg2 from "../Assets/2.svg";
import svg3 from "../Assets/3.svg";
import svg4 from "../Assets/4.svg";

function Hero() {
  return (
    <div className='container-fixed'>
      <div className='hero'>
        <div className='container ' id='hero_rows'>
          <div className='row'>
            <h1 className='col-4' id='hero_h1'>
              Natural Gas
              <br />
              Services
            </h1>
          </div>
          <div className='row'>
            <h3 className='col-4' id='hero_h3'>Super neat subhead</h3>
          </div>
          <div className='row'>
            <p className='col-5' id='hero_p'>
              NOVEC Energy Solutions is pleased to offer natural gas customers
              in Pennsylvania, Maryland, Virginia, District of Columbia and
              Kentucky the option to enroll in our PriceOne Plan.
            </p>
          </div>
          <div>
            <button id='hero_signup'>Sign up</button>
          </div>
        </div>
      </div>

      <div className='container-fluid options'>
        <div className='row justify-content-center'>
          <div className='col'>
            <div className='row'>
              <img className='col' id='svg' src={svg1}  alt=''/>
              <div className='col-9' id='opt_text'>
                Billing
                <br />& Payment
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img className='col' id='svg' src={svg2}  alt=''/>
              <div className='col-9' id='opt_text'>
                Report
                <br />a problem
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img className='col' id='svg' src={svg3}  alt=''/>
              <div className='col-9' id='opt_text'>
                Moving or
                <br />
                canceling service
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img className='col' id='svg' src={svg4}  alt=''/>
              <div className='col-9' id='opt_text'>
                Switching Service
                <br /> Providers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
