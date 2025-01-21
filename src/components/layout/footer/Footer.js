import React from 'react'
import "./footer.scss"
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 fixed_footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <h5 className="text-uppercase mb-3">About Us</h5>
          <p>
            We deliver high-quality solutions that cater to your business needs. Our team focuses on innovation and customer satisfaction.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <h5 className="text-uppercase mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="/home" className="text-light text-decoration-none">officelsite</a>
            </li>
            <li className="mb-2">
              <a href="/about" className="text-light text-decoration-none">email</a>
            </li>
         
         
          </ul>
        </div>

        <div className="col-lg-4 col-md-12 mb-4">
          <h5 className="text-uppercase mb-3">Contact Us</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-envelope me-2"> gov.rajpolice.com</i>
            </li>
            <li className="mb-2">
              <i className="bi bi-phone me-2">SCRB Police HQ, Laal Khoti, Jaipur 30215</i> 7062852770 
            </li>
          
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center py-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
      © {new Date().getFullYear()} YourCompany. All Rights Reserved.
    </div>
  </footer>
  )
}

export default Footer
