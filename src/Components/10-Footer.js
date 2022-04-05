import LogoImage from "../Assets/logo-large.png";
function Footer() {
  return (
    <div className='Footer'>
      <img src={LogoImage} />
      <div>© 2020 NOVEC | All Rights Reserved</div>
      <div>
        <a>Privacy & Legal Statement </a>|
        <a> Sie Map</a> |
        <a> Careers</a> |
        <a> NOVEC en Español</a>
      </div>
    </div>
  );
}

export default Footer;
