import svg8 from "../Assets/8.svg";
import svg9 from "../Assets/9.svg";

function FQA() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-5' id='faq_left_rows'>
          <h1 id='faq_heading'>
            Frequently
            <br />
            Asked
            <br />
            questions
          </h1>
          <div>
            <h3 id='faq_h3'>FAQ Category </h3>
            <h3 id='faq_h3'>FAQ Category </h3>
            <h3 id='faq_h3'>FAQ Category </h3>
            <h3 id='faq_h3'>FAQ Category </h3>
          </div>
        </div>
        <div className='col-7'>
          <div className='row' id='faq_right_rows'>
            <div className='col-8 ' id='faq_middle_top_row'>
              <h3 id='faq_h3'>What gas company services my address?</h3>
            </div>
            <div className='col' id='faq_right_top_row'>
              <img src={svg8} alt='' />
            </div>
          </div>
          <div className='row' id='faq_right_rows'>
            <div className='col-8' id='faq_middle_middle_row'>
              <h3 id='faq_h3'>Can I switch natural gas providers?</h3>
            </div>
            <div className='col' id='faq_right_middle_row'>
              <img src={svg8} alt='' />
            </div>
          </div>
          <div className='row align-items-' id='faq_right_rows'>
            <div className='col-8' id='faq_middle_bottom_row'>
              <div className='row'>
                <h3 id='faq_h3'>How to get natural gas in my neighborhoods?</h3>
              </div>
              <div className='row' id='faq_p'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor.
                </p>
                <p >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
            <div className='col' id='faq_right_bottom_row'>
              <img src={svg9} alt='' />
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default FQA;
