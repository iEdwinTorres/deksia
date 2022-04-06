import LogoImage from "../Assets/logo-small.png";
import SearchImage from "../Assets/icon-search.png";

function Header() {
  return (
    <div>
      <div className='container-fluid yellowBar' />

      <div className='container'>
        <div className='row'>
          <div className='col header_left'>
            <img className='logo' src={LogoImage} />
          </div>
          <div className='col header_right'>
            <div className='row justify-content-end search'>
              <img className='col-1' src={SearchImage} />
            </div>
            <div className='row justify-content-end menu'>
              <div className='col'>Menu</div>
              <div className='col'>Menu</div>
              <div className='col'>Menu</div>
              <div className='col'>Menu</div>
            </div>
          </div>
        </div>
      </div>

      <div id='navbar'>
        <div className='container text-center'>
          <div className='row' id='navbar_text'>
            <div className='col'>Sub Menu</div>
            <div className='col'>Sub Menu</div>
            <div className='col'>Sub Menu</div>
            <div className='col'>Sub Menu</div>
            <div className='col'>Sub Menu</div>
            <div className='col'>Sub Menu</div>
            <div className='col'>Sub Menu</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
