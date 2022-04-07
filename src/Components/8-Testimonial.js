import CustomerPic from "../Assets/img-5.png";
import BannerPic from "../Assets/img-6.png";
import svg6 from "../Assets/6.svg";
import svg7 from "../Assets/7.svg";

function Testimonial() {
  return (
    <div>
      <div className='container-fluid' id='review_bkgd'>
        <div className='row align-items-center justify-content-center'>
          <div className='col text-start' id='svg_lf'>
            <img id='svg_lf' src={svg6} />
          </div>
          <div className='col-4 text-center'>
            <img id='customer' src={CustomerPic} />
          </div>
          <div className='col-5' id='review_text'>
            <p id='review_p'>
              “I have never had a bad experience with Novec and I have been a
              customer of theirs since 1997. They recently processed a change of
              service for me and whenever I call with a question, they are
              always very helpful. I appreciate that in a service environment it
              isn’t always easy dealing with people or their situations, but
              they do their best.”
            </p>
            <div id='customer_details'>Jim Smith, customer since 1997</div>
          </div>
          <div className='col text-end' id='svg_ri'>
            <img id='svg_ri' src={svg7} />
          </div>
        </div>
      </div>

      <img className='Testimonial-Banner' src={BannerPic} />
    </div>
  );
}

export default Testimonial;
