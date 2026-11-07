/**
 * S.W.A.P Official Marketing Website
 * Vanilla JavaScript for interaction: Mobile Navigation, Showcase Tabs, Header Scroll State
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Mobile Navigation Toggle
  // -------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileDrawer.classList.add('open');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close drawer when any mobile nav link is clicked
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // -------------------------------------------------------------------------
  // 2. Product Showcase Tab Switcher
  // -------------------------------------------------------------------------
  const tabs = document.querySelectorAll('.showcase-tab');
  const panels = document.querySelectorAll('.showcase-panel');

  function activateTab(targetId) {
    tabs.forEach((tab) => {
      const matches = tab.dataset.target === targetId;
      tab.classList.toggle('active', matches);
      tab.setAttribute('aria-selected', matches ? 'true' : 'false');
    });

    panels.forEach((panel) => {
      const matches = panel.id === `panel${targetId.charAt(0).toUpperCase() + targetId.slice(1)}`;
      if (matches) {
        panel.classList.add('active');
        panel.removeAttribute('hidden');
      } else {
        panel.classList.remove('active');
        panel.setAttribute('hidden', '');
      }
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      if (target) {
        activateTab(target);
      }
    });

    // Keyboard navigation (Arrow Left / Arrow Right)
    tab.addEventListener('keydown', (e) => {
      let newIndex = null;
      if (e.key === 'ArrowRight') {
        newIndex = (index + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft') {
        newIndex = (index - 1 + tabs.length) % tabs.length;
      }

      if (newIndex !== null) {
        e.preventDefault();
        tabs[newIndex].focus();
        const target = tabs[newIndex].dataset.target;
        if (target) {
          activateTab(target);
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // 3. Header Scroll Shadow
  // -------------------------------------------------------------------------
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)';
      } else {
        header.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }
});
