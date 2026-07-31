import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";


function Navbar() {
  return (
    <header>

      <nav>

        <div>
          <Link to="/">
            NETFLIX
          </Link>
        </div>


        <div>
          <Link to="/">
            Home
          </Link>

          <Link to="/search">
            Movies
          </Link>

          <Link to="/favorites">
            My List
          </Link>
        </div>


        <div>
          <SearchBar />
          <ProfileMenu />
        </div>


      </nav>

    </header>
  );
}

export default Navbar;