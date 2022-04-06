function StyleA() {
  return (
    <div className='container' id='style_a'>
      <div className='row'>
        <div className='col-6' id='col_left'>
          <h1 id='NOVA_h1'>H1. Headline 1 styling and spacing</h1>
        </div>
        <div className='col-6' id='NOVA_Reg'>
          <p>
            <strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </strong>{" "}
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor.
          </p>
        </div>
      </div>

      <div className='row'>
        <div className='col-6' id='col_left'>
          <h2 id='NOVA_h2'>
            H2. Headline 2 Styling
            <br />& Spacing
          </h2>
        </div>
        <div className='col-6' id='NOVA_Reg'>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur</li>
            <li>Lorem ipsum dolor sit amet, consectetur</li>
            <li>Lorem ipsum dolor sit amet, consectetur</li>
            <li>Lorem ipsum dolor sit amet, consectetur</li>
          </ul>
        </div>
      </div>

      <div className='row' id='last_row'>
        <div className='col-6' id='col_left'>
          <h3 id='NOVA_h3'>
            H3. Subhead Styling & Spacing for
            <br />
            this website
          </h3>
        </div>

        <div className='col-6' id='style_link'>
          <a href='https://www.google.com/search?q=Text+Link+Treatment'>
            Text Link Treatment &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default StyleA;
