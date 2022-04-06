import LeftImage from "../Assets/img-2.png";
import RightImage from "../Assets/img-3.png";
import svg5 from "../Assets/5.svg";

function Benefits() {
  const items = {
    icon: { svg5 },
    title: "Benefit #4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  };
  return (
    <div className='Benefits'>
      <div className='container'>
        <div className='container-fluid' id='yellowBar2' />

        <h1 id='benefits_heading'>
          Benefits of Buying Natural
          <br />
          Gas through Novec
        </h1>

        <div className='container'>
          <div className='row justify-content-between' id='benefits_12'>
            <div className='col-6' id='benefit_container_g'>
              <div className='row'>
                <div className='col-2'>
                  <div className='col'>
                    <img id='benefit_icon' src={svg5} />
                  </div>
                </div>
                <div className='col'>
                  <div className='row'>
                    <div className='benefit_title'>Benefit #1</div>
                    <p id='benefit_text'>
                      <strong>Lorem ipsum dolor sit amet,</strong> consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6' id='benefit_container_b'>
              <div className='row'>
                <div className='col-2'>
                  <div className='col'>
                    <img id='benefit_icon' src={svg5} />
                  </div>
                </div>
                <div className='col'>
                  <div className='row'>
                    <div className='benefit_title'>Benefit #2</div>
                    <p id='benefit_text'>
                      <strong>Lorem ipsum dolor sit amet,</strong> consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-between' id='benefits_34'>
            <div className='col-6' id='benefit_container_b'>
              <div className='row'>
                <div className='col-2'>
                  <div className='col'>
                    <img id='benefit_icon' src={svg5} />
                  </div>
                </div>
                <div className='col'>
                  <div className='row'>
                    <div className='benefit_title'>Benefit #3</div>
                    <p id='benefit_text'>
                      <strong>Lorem ipsum dolor sit amet,</strong> consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6' id='benefit_container_g'>
              <div className='row'>
                <div className='col-2'>
                  <div className='col'>
                    <img id='benefit_icon' src={svg5} />
                  </div>
                </div>
                <div className='col'>
                  <div className='row'>
                    <div className='benefit_title'>Benefit #4</div>
                    <p id='benefit_text'>
                      <strong>Lorem ipsum dolor sit amet,</strong> consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6' id='benefits_banner'>
            <img src={LeftImage} id='benefits_banner' />
          </div>
          <div className='col-6' id='benefits_banner'>
            <img src={RightImage} id='benefits_banner' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
