// import './Navbar.css'
import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light m-2">
        <a class="navbar-brand" href="#">
          G-Chess
        </a>
        
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse  justify-content-between"
          id="navbarTogglerDemo02"
        >
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sets
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Board
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pieces
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
          </ul>

          <form class="form-inline my-2 my-lg-0 d-flex flex-row bd-highlight mb-3 gap-1">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder=""
            ></input>

            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
            <CartWidget />
          </form>
        </div>
      </nav>
   
    </header>

    
  );
};

export default Navbar;
