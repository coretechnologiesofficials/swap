/**
 * S.W.A.P Official Marketing Website - Core Interactive Engine
 * Handles navigation, desktop application tab switching, accessible FAQ accordions,
 * and institutional demonstration request validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');

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

    const mobileLinks = mobileDrawer.querySelectorAll('.mobile-link');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Header Scroll Subtle Elevation
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 15) {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)';
      } else {
        header.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 3. Desktop Application Frame Tab Switching
  const tabBtns = document.querySelectorAll('.showcase-tab-btn');
  const tabPanels = document.querySelectorAll('.showcase-screen-panel');
  const captionText = document.getElementById('showcaseCaptionText');

  const captions = {
    'dashboard': 'Morning Substitution Dashboard: Faculty selection, period assignment, and conflict-validated candidate matching.',
    'availability': 'Real-Time Availability Matrix: Period-by-period free faculty grid with daily duty limits.',
    'timetables': 'Multi-Grid Class Schedules: Master timetable mapping from Grade 1 through Grade 12.',
    'engine': 'Algorithmic Decision Inspector: Conceptual preview of sequential conflict verification.'
  };

  if (tabBtns.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        tabBtns.forEach((b) => b.classList.remove('active'));
        tabPanels.forEach((p) => p.classList.remove('active'));

        btn.classList.add('active');
        const activePanel = document.getElementById(`panel-${targetTab}`);
        if (activePanel) {
          activePanel.classList.add('active');
        }

        if (captionText && captions[targetTab]) {
          captionText.textContent = captions[targetTab];
        }
      });
    });
  }

  // 4. Accessible Accordion FAQ
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const parentItem = trigger.closest('.faq-item');
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close all other accordions for clean single-view
      document.querySelectorAll('.faq-item').forEach((item) => {
        if (item !== parentItem) {
          item.classList.remove('open');
          const t = item.querySelector('.faq-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });

      if (isExpanded) {
        parentItem.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        parentItem.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 5. Institutional Demonstration Lead Form
  const demoForm = document.getElementById('institutionalDemoForm');
  const successBox = document.getElementById('demoSuccessBox');
  const directMailtoBtn = document.getElementById('directMailtoFallback');

  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;
      const requiredInputs = demoForm.querySelectorAll('[required]');

      requiredInputs.forEach((input) => {
        const group = input.closest('.form-group') || input.parentElement;
        if (!input.value.trim()) {
          group.classList.add('has-error');
          hasError = true;
        } else {
          group.classList.remove('has-error');
        }
      });

      if (hasError) {
        const firstError = demoForm.querySelector('.has-error input, .has-error select');
        if (firstError) firstError.focus();
        return;
      }

      // Collect form data
      const schoolName = demoForm.schoolName ? demoForm.schoolName.value : '';
      const contactPerson = demoForm.contactPerson ? demoForm.contactPerson.value : '';
      const designation = demoForm.designation ? demoForm.designation.value : '';
      const officialEmail = demoForm.officialEmail ? demoForm.officialEmail.value : '';
      const phone = demoForm.phone ? demoForm.phone.value : '';
      const facultyCount = demoForm.facultyCount ? demoForm.facultyCount.value : '';
      const currentSystem = demoForm.currentSystem ? demoForm.currentSystem.value : '';
      const notes = demoForm.notes ? demoForm.notes.value : '';

      // Prepare mailto fallback link with prefilled parameters
      const emailSubject = encodeURIComponent(`SWAP Demo Request - ${schoolName}`);
      const emailBody = encodeURIComponent(
        `Hello CORE Technologies Team,\n\n` +
        `We would like to request an institutional demonstration of S.W.A.P.\n\n` +
        `School Name: ${schoolName}\n` +
        `Contact Person: ${contactPerson}\n` +
        `Designation: ${designation}\n` +
        `Official Email: ${officialEmail}\n` +
        `Phone Number: ${phone}\n` +
        `Approximate Faculty Size: ${facultyCount}\n` +
        `Current Timetable System: ${currentSystem}\n` +
        `Notes / Requirements: ${notes}\n\n` +
        `Thank you.`
      );
      const fallbackMailto = `mailto:coretechnologiesofficial@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      if (directMailtoBtn) {
        directMailtoBtn.setAttribute('href', fallbackMailto);
      }

      // Display loading state on submit button
      const submitBtn = demoForm.querySelector('.form-submit-btn');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Request Institutional Demonstration';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Verifying &amp; Recording...';
      }

      setTimeout(() => {
        demoForm.style.display = 'none';
        if (successBox) {
          successBox.classList.add('visible');
          successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 600);
    });
  }
});
