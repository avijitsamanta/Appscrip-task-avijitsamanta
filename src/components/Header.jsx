import { FaUser, FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header className="border-bottom pb-3 mb-4">
        <div className="d-flex justify-content-between align-items-center px-4 py-3">
            <div className="justify-content-left">
                <img src="/images/Logo.png" alt="Logo" style={{ height: '36px' ,width:'36px' }} />
            </div>
            <div className="flex-grow-1 d-flex justify-content-center">
                <h1 className="fw-bold fs-4 m-0">LOGO</h1>
            </div>
            <div className="d-flex gap-3 align-items-center">
                <FaSearch />
                <FaHeart />
                <FaShoppingCart />
                <FaUser />
                <span>ENG <i className="bi bi-chevron-down ms-1"></i></span>
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-center px-4 flex-wrap">
            <nav className="nav justify-content-center flex-grow-1">
                <a className="nav-link" href="#">Shop</a>
                <a className="nav-link" href="#">Skills</a>
                <a className="nav-link" href="#">Stories</a>
                <a className="nav-link" href="#">About</a>
                <a className="nav-link" href="#">Contact Us</a>
            </nav>
            
        </div>
    </header>
  );
}

export default Header;
