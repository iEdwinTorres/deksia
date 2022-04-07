import LogoImage from "../Assets/logo-large.png";
import Facebook from "../Assets/social-Facebook.png";
import Twitter from "../Assets/social-Twitter.png";
import Youtube from "../Assets/social-Youtube.png";

function Footer() {
  return (
    <div>
      <div id='navbar' />

      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-5'>
            <img id='footer_logo' src={LogoImage} alt='' />
          </div>
          <div className='col-7' id='footer_right'>
            <div className='row justify-content-end'>
              <div className='col-1'>
                <img id='footer_social' src={Facebook} alt='' />
              </div>
              <div className='col-1'>
                <img id='footer_social' src={Twitter} alt='' />
              </div>
              <div className='col-1'>
                <img id='footer_social' src={Youtube} alt='' />
              </div>
            </div>
            <div className='row justify-content-end'>
              <div id='footer_text'>
                © 2020 NOVEC | All Rights Reserved <br />
                Privacy & Legal Statement | Site Map | Careers | NOVEC en
                Español
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid yellowBar3' />
    </div>
  );
}

export default Footer;
