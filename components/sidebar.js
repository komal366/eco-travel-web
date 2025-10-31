class CustomSidebar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 16rem;
          background-color: white;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
          z-index: 999;
          transition: transform 0.3s ease;
          overflow-y: auto;
          padding-top: 5rem;
        }
        .sidebar-links {
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }
        .sidebar-links a {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          color: #4b5563;
          text-decoration: none;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
          transition: all 0.3s;
        }
        .sidebar-links a:hover {
          background-color: #f0fdf4;
          color: #22c55e;
        }
        .sidebar-links i {
          margin-right: 0.75rem;
          width: 1.25rem;
          height: 1.25rem;
        }
      @media (max-width: 1023px) {
  :host {
    transform: translateX(-100%);
  }
  :host([data-hidden="false"]) {
    transform: translateX(0);
  }
}

        @media (min-width: 1024px) {
          :host {
            transform: translateX(0) !important;
          }
        }
      </style>
      <div class="sidebar-links">
        <a href="/popular">
          <i data-feather="star"></i>
          Popular Trips
        </a>
        <a href="/eco-tips">
          <i data-feather="leaf"></i>
          Eco Tips
        </a>
        <a href="/blog">
          <i data-feather="book"></i>
          Blog
        </a>
        <a href="/contact">
          <i data-feather="mail"></i>
          Contact
        </a>
      </div>
    `;
    this.setAttribute('data-hidden', 'true');
  }
}
customElements.define('custom-sidebar', CustomSidebar);