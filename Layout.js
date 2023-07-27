import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-danger">
        <div class="container-fluid"style={{display:"flex",justifyContent:"space-between"}}>
          <a class="navbar-brand" href="https://codeberryschool.com/blog/wp-content/uploads/2021/08/cover-1.png">
          LEARN Eazy
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <Link to="/" style={{paddingRight:"10px"}}>Home</Link>
              <Link to="/about" style={{paddingRight:"10px"}}>AboutUs</Link>
              <Link to="/courses">Courses</Link>
            </form>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;