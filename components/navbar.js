class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 100%;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #22c55e;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: #22c55e;
        }
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        .mobile-menu-button svg {
          stroke: #374151; /* Dark grey icon color */
          width: 28px;
          height: 28px;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-button {
            display: block;
          }
        }
      </style>

      <nav class="navbar">
        <a href="/" class="logo">EcoTravel</a>
        <div class="nav-links">
          <a href="/">Home</a>
          <a href="/destinations">Destinations</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <button class="mobile-menu-button" aria-label="Toggle menu">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;

    // ✅ Render Feather icon inside this shadow DOM
    if (window.feather) {
      const icon = this.shadowRoot.querySelector('i[data-feather="menu"]');
      if (icon) {
        icon.outerHTML = window.feather.icons.menu.toSvg({
          stroke: '#374151', // dark stroke
          'stroke-width': 2,
          width: 28,
          height: 28
        });
      }
    }

    // ✅ Bubble event so main script can listen
    const btn = this.shadowRoot.querySelector('.mobile-menu-button');
    btn.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('menu-toggle', { bubbles: true }));
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
