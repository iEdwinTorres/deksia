import LogoImage from "../Assets/logo-small.png";
import SearchImage from "../Assets/icon-search.png";

function Header() {
  return (
    <div className='Header'>
      <div id='Header_right'>
        <img src={LogoImage} />
      </div>

      <div id='Header_left'>
        <div><img id='Search' src={SearchImage} /></div>
        <div>
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
