import React from 'react'

const Navbar = () => {
  return (
    <>
      <header className="p-3 mb-3 border-bottom bg-light">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-2 link-secondary">Overview</a></li>
          <li><a href="/" className="nav-link px-2 link-dark">Inventory</a></li>
          <li><a href="/" className="nav-link px-2 link-dark">Customers</a></li>
          <li><a href="/" className="nav-link px-2 link-dark">Products</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="dropdown text-end">
          <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle show" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="true">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small " aria-labelledby="dropdownUser1" data-popper-placement="bottom-end" style={{position: "absolute", inset: '0px auto auto 0px', margin: '0px', transform: 'translate3d(-111px, 34px, 0px)'}}>
            <li><a className="dropdown-item" href="/">New project...</a></li>
            <li><a className="dropdown-item" href="/">Settings</a></li>
            <li><a className="dropdown-item" href="/">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}

export default Navbar
