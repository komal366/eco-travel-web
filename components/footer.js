class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #1f2937;
          color: white;
          padding: 3rem 1rem;
        }
        .footer-container {
          max-width: 6xl;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #4ade80;
          margin-bottom: 1rem;
        }
        .footer-description {
          color: #9ca3af;
          margin-bottom: 1.5rem;
        }
        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: #4ade80;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: #9ca3af;
          transition: color 0.3s;
        }
        .social-links a:hover {
          color: #4ade80;
        }
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #374151;
          color: #9ca3af;
        }
      </style>
      <div class="footer-container">
        <div>
          <div class="footer-logo">EcoTravel</div>
          
          <div class="social-links">
            <a href="#"><i data-feather="facebook"></i></a>
            <a href="#"><i data-feather="instagram"></i></a>
            <a href="#"><i data-feather="twitter"></i></a>
            <a href="#"><i data-feather="youtube"></i></a>
          </div>
        </div>
        <div>
          <h3 class="footer-heading">Destinations</h3>
          <div class="footer-links">
            <a href="#">Costa Rica</a>
            <a href="#">Norway</a>
            <a href="#">Bhutan</a>
            <a href="#">New Zealand</a>
            <a href="#">All Destinations</a>
          </div>
        </div>
        <div>
          <h3 class="footer-heading">Company</h3>
          <div class="footer-links">
            <a href="#">About Us</a>
            <a href="#">Sustainability</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div>
          <h3 class="footer-heading">Support</h3>
          <div class="footer-links">
            <a href="#">FAQ</a>
            <a href="#">Booking Info</a>
            <a href="#">Travel Insurance</a>
            <a href="#">COVID-19 Updates</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        &copy; ${new Date().getFullYear()} EcoTravel. All rights reserved.
      </div>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);