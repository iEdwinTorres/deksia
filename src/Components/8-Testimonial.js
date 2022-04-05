import CustomerPic from "../Assets/img-5.png";


function Testimonial() {
  return (
    <div className="Testimonial">
      <img src={CustomerPic}/>
      <div>“I have never had a bad experience with Novec and I have been a customer of theirs since 1997.  They recently processed a change of service for me and whenever I call with a question, they are always very helpful.  I appreciate that in a service environment it isn’t always easy dealing with people or their situations, but they do their best.”</div>
      <div>Jim Smith, customer since 1997</div>
      <div className='Testimonial-Banner'/>
    </div>
  );
}

export default Testimonial;
