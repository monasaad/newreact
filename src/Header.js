import Nav_Button from './Nav_Button'
import Nav_Links from './Nav_Links'

function Header() {
  return (
    <header class="nav">
        <div class="nav_logo"> CREW
          <Nav_Links label='Resources'/>
          <Nav_Links label='Features'/>
          <Nav_Links label='Find Jobs'/>
          <Nav_Links label='Post a Jobs'/>
        </div>

        <Nav_Button/>
    </header>
  );
}

export default Header;
