function Footer() {
  return (
    <footer className="bg-black text-white py-5">
        <div className="container">
            <div className="row">
                {/* Left Column */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <h6 className="text-uppercase fw-bold mb-2">Be the first to know</h6>
                    <p className="small mb-3">Sign up for updates from metta muse.</p>
                    <div className="d-flex">
                    <input
                        type="email"
                        className="form-control me-2"
                        placeholder="Enter your e-mail..."
                        style={{ maxWidth: '300px' }}
                    />
                    <button className="btn btn-outline-light text-uppercase" disabled>
                        Subscribe
                    </button>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-md-6">
                    <div className="mb-3">
                    <h6 className="text-uppercase fw-bold mb-2">Contact Us</h6>
                    <p className="mb-0">+44 221 133 5360</p>
                    <p className="mb-0">customercare@mettamuse.com</p>
                    </div>

                    <div>
                    <h6 className="text-uppercase fw-bold mb-2">Currency</h6>
                    <p className="mb-0">
                        <img
                        src="https://flagcdn.com/w40/us.png"
                        alt="USD"
                        width="20"
                        className="me-2"
                        />
                        <strong>USD</strong>
                    </p>
                    <p className="small  mt-1">
                        Transactions will be completed in Euros and a currency reference is available on hover.
                    </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                {/* Column 1: Company Info */}
                <div className="col-md-3 mb-4">
                    <h6 className="fw-bold">mettä muse</h6>
                    <ul className="list-unstyled small">
                    <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Stories</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Artisans</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Boutiques</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
                    <li><a href="#" className="text-white text-decoration-none">EU Compliances Docs</a></li>
                    </ul>
                </div>

                {/* Column 2: Quick Links */}
                <div className="col-md-3 mb-4">
                    <h6 className="fw-bold">Quick Links</h6>
                    <ul className="list-unstyled small">
                    <li><a href="#" className="text-white text-decoration-none">Orders & Shipping</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Join/Login as a Seller</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Payment & Pricing</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Return & Refunds</a></li>
                    <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Column 3: Social + Payments */}
                <div className="col-md-6 text-md-end">
                    <h6 className="fw-bold">FOLLOW US</h6>
                    <div className="mb-3">
                    <a href="#" className="text-white me-2 fs-5"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="text-white fs-5"><i className="bi bi-linkedin"></i></a>
                    </div>

                    <h6 className="fw-bold">mettä muse ACCEPTS</h6>
                    <div className="d-flex flex-wrap justify-content-md-end gap-2">
                    <img src="https://img.icons8.com/color/48/000000/google-pay-india.png" alt="Google Pay" height="30"/>
                    <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" height="30"/>
                    <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" height="30"/>
                    <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" height="30"/>
                    <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" height="30"/>
                    <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" height="30"/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}   

export default Footer;