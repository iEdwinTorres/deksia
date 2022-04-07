import LogoImage from "../Assets/logo-large.png";
function Footer() {
  return (
    <div className='Footer'>
      <img src={LogoImage} alt='' />
      <div>© 2020 NOVEC | All Rights Reserved</div>
      <div>
        <div>Privacy & Legal Statement </div>|<div> Sie Map</div> |
        <div> Careers</div> |<div> NOVEC en Español</div>
      </div>
    </div>
  );
}

export default Footer;
