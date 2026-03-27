/* ============================================================
   BGS TRAVEL & TOURISM — MAIN JAVASCRIPT
   - Sticky nav with scroll detection
   - Mobile drawer open/close
   - Package filter tabs
   - Exit-intent popup
   - Lead form handling
   - Smooth scroll
   - Animate on scroll (AOS-lite)
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     1. STICKY NAVIGATION
     ============================================================ */
  const nav = document.getElementById('mainNav');
  const navBookBtn = document.getElementById('navBookBtn');

  function handleNavScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
      if (navBookBtn) navBookBtn.style.display = 'inline-flex';
    } else {
      nav.classList.remove('scrolled');
      if (navBookBtn) navBookBtn.style.display = 'none';
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // run on load

  /* ============================================================
     2. MOBILE DRAWER
     ============================================================ */
  const hamburgerBtn  = document.getElementById('hamburgerBtn');
  const navDrawer     = document.getElementById('navDrawer');
  const navOverlay    = document.getElementById('navOverlay');
  const drawerClose   = document.getElementById('drawerClose');

  function openDrawer() {
    navDrawer.classList.add('open');
    navOverlay.classList.add('show');
    navDrawer.setAttribute('aria-hidden', 'false');
    navOverlay.setAttribute('aria-hidden', 'false');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    navDrawer.classList.remove('open');
    navOverlay.classList.remove('show');
    navDrawer.setAttribute('aria-hidden', 'true');
    navOverlay.setAttribute('aria-hidden', 'true');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerClose)  drawerClose.addEventListener('click', closeDrawer);
  if (navOverlay)   navOverlay.addEventListener('click', closeDrawer);

  // Close drawer on nav link click (mobile)
  document.querySelectorAll('.nav__drawer-link').forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  // ESC key to close drawer
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeDrawer();
      closePopup();
    }
  });

  /* ============================================================
     3. PACKAGE FILTER TABS
     ============================================================ */
  const filterTabs  = document.querySelectorAll('.filter-tab');
  const packageCards = document.querySelectorAll('#packagesGrid .package-card');

  filterTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      // Update active tab
      filterTabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');

      packageCards.forEach(function (card) {
        const categories = card.getAttribute('data-category') || '';

        if (filter === 'all' || categories.split(' ').includes(filter)) {
          card.style.display = '';
          // Fade in
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          requestAnimationFrame(function () {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ============================================================
     4. SMOOTH SCROLL (for nav anchor links)
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 72;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  /* ============================================================
     5. EXIT-INTENT POPUP
     ============================================================ */
  const exitPopup   = document.getElementById('exitPopup');
  const popupClose  = document.getElementById('popupClose');
  const popupSkip   = document.getElementById('popupSkip');
  const popupForm   = document.getElementById('popupForm');

  let popupShown    = false;
  let popupDismissed = sessionStorage.getItem('bgs_popup_dismissed') === 'true';

  function showPopup() {
    if (popupShown || popupDismissed) return;
    popupShown = true;
    exitPopup.classList.add('show');
    exitPopup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus the first input
    const firstInput = exitPopup.querySelector('input');
    if (firstInput) setTimeout(function () { firstInput.focus(); }, 350);
  }

  function closePopup() {
    if (!exitPopup) return;
    exitPopup.classList.remove('show');
    exitPopup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    sessionStorage.setItem('bgs_popup_dismissed', 'true');
    popupDismissed = true;
  }

  // Exit-intent: mouse leaves viewport top
  document.addEventListener('mouseleave', function (e) {
    if (e.clientY <= 0 && !popupDismissed) {
      showPopup();
    }
  });

  // Timed fallback: show after 45s if not yet shown
  setTimeout(function () {
    if (!popupShown && !popupDismissed) showPopup();
  }, 45000);

  if (popupClose) popupClose.addEventListener('click', closePopup);
  if (popupSkip)  {
    popupSkip.addEventListener('click', closePopup);
    popupSkip.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') closePopup();
    });
  }
  if (exitPopup) {
    exitPopup.addEventListener('click', function (e) {
      if (e.target === exitPopup) closePopup();
    });
  }

  // Popup form submit
  if (popupForm) {
    popupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(popupForm);
      const name  = data.get('firstName') || '';
      const email = data.get('email') || '';

      // Basic validation
      if (!email) {
        const emailInput = popupForm.querySelector('[name="email"]');
        if (emailInput) { emailInput.focus(); emailInput.style.borderColor = '#ef4444'; }
        return;
      }

      // TODO: POST to GHL API or webhook here
      console.log('[BGS Popup] Lead captured:', { name, email });

      // Show thank-you state
      popupForm.innerHTML = `
        <div style="text-align:center;padding:16px 0;">
          <div style="font-size:2.5rem;margin-bottom:12px;">&#127881;</div>
          <p style="font-family:var(--font-display);font-size:1.375rem;color:var(--text-primary);font-weight:600;margin-bottom:8px;">
            You're in, ${name || 'Traveller'}!
          </p>
          <p style="color:var(--text-muted);font-size:0.9375rem;line-height:1.6;">
            Your AED 200 discount code will arrive in your inbox shortly.<br>
            Check your WhatsApp too!
          </p>
        </div>
      `;
      setTimeout(closePopup, 3500);
    });
  }

  /* ============================================================
     6. LEAD FORM (WhatsApp section)
     ============================================================ */
  const leadForm = document.getElementById('leadForm');

  if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(leadForm);
      const firstName = data.get('firstName') || '';
      const whatsapp  = data.get('whatsapp') || '';
      const email     = data.get('email') || '';

      if (!firstName || !whatsapp) {
        const missing = !firstName
          ? leadForm.querySelector('[name="firstName"]')
          : leadForm.querySelector('[name="whatsapp"]');
        if (missing) {
          missing.focus();
          missing.style.borderColor = '#ef4444';
          setTimeout(function () { missing.style.borderColor = ''; }, 2500);
        }
        return;
      }

      // TODO: POST to GHL webhook
      console.log('[BGS Lead] Captured:', { firstName, whatsapp, email });

      // Replace form with success message
      leadForm.innerHTML = `
        <div style="text-align:center;padding:12px;width:100%;color:white;">
          <p style="font-family:var(--font-display);font-size:1.5rem;font-weight:600;margin-bottom:8px;">
            &#10003; You're on the list, ${firstName}!
          </p>
          <p style="color:rgba(255,255,255,0.65);font-size:0.9375rem;">
            Expect your first exclusive deals within 24 hours on WhatsApp.
          </p>
        </div>
      `;
    });
  }

  /* ============================================================
     7. QUICK SEARCH PILLS → scroll to relevant section
     ============================================================ */
  document.querySelectorAll('.hero__pill').forEach(function (pill) {
    pill.addEventListener('click', function () {
      const text = pill.textContent.trim().toLowerCase();

      if (text.includes('all') || text.includes('experiences')) {
        const section = document.getElementById('activities');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      // Pre-select matching filter tab
      let filterTarget = 'all';
      if (text.includes('desert') || text.includes('dhow') || text.includes('luxury')) {
        filterTarget = text.includes('luxury') ? 'luxury' : 'dubai';
      } else if (text.includes('african') || text.includes('safari')) {
        filterTarget = 'africa';
      }

      const section = document.getElementById('packages');
      if (section) {
        const navH = nav ? nav.offsetHeight : 72;
        const top = section.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: 'smooth' });

        // Trigger the correct filter tab after scroll
        setTimeout(function () {
          const tab = document.querySelector(`.filter-tab[data-filter="${filterTarget}"]`);
          if (tab) tab.click();
        }, 600);
      }
    });
  });

  /* ============================================================
     8. ANIMATE ON SCROLL (lightweight AOS replacement)
     ============================================================ */
  const animatables = document.querySelectorAll(
    '.destination-card, .package-card, .blog-card, .review-card, .usp-item, .experience-card, .africa-card, .trust-bar__item'
  );

  // Set initial state
  animatables.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          const el = entry.target;
          // Stagger delay based on sibling index
          const siblings = el.parentElement ? el.parentElement.children : [];
          let delay = 0;
          for (let j = 0; j < siblings.length; j++) {
            if (siblings[j] === el) { delay = j * 80; break; }
          }
          setTimeout(function () {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  animatables.forEach(function (el) { observer.observe(el); });

  /* ============================================================
     9. HERO SEARCH SUBMIT
     ============================================================ */
  const heroSearchSubmit = document.querySelector('.hero__search-submit');

  if (heroSearchSubmit) {
    heroSearchSubmit.addEventListener('click', function () {
      const dest      = document.getElementById('searchDestination');
      const month     = document.getElementById('searchMonth');
      const travellers = document.getElementById('searchTravellers');

      const destVal = dest ? dest.value : '';
      const params  = new URLSearchParams();
      if (destVal)           params.set('destination', destVal);
      if (month && month.value)       params.set('month', month.value);
      if (travellers && travellers.value) params.set('travellers', travellers.value);

      // Navigate to packages page with search params
      window.location.href = 'packages.html' + (params.toString() ? '?' + params.toString() : '');
    });
  }

  /* ============================================================
     10. FOOTER NEWSLETTER
     ============================================================ */
  const footerForm = document.querySelector('.footer__newsletter-form');

  if (footerForm) {
    footerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = footerForm.querySelector('input[type="email"]');
      const btn   = footerForm.querySelector('button');
      if (!input || !input.value) { input && input.focus(); return; }

      // TODO: POST to GHL
      console.log('[BGS Footer] Newsletter signup:', input.value);
      if (btn) {
        btn.textContent = '✓ Subscribed!';
        btn.style.background = '#10b981';
        btn.disabled = true;
      }
    });
  }

  /* ============================================================
     11. NAV ACTIVE STATE (highlight based on scroll position)
     ============================================================ */
  const sections = document.querySelectorAll('section[id], div[id="africa"]');
  const navLinks = document.querySelectorAll('.nav__link');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    sections.forEach(function (section) {
      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id     = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ============================================================
     7b. SERVICES DROPDOWN (desktop)
     ============================================================ */
  var servicesDropBtn = document.getElementById('servicesDropBtn');
  var servicesDropWrap = servicesDropBtn && servicesDropBtn.closest('.nav__dropdown-wrap');
  var servicesDropMenu = servicesDropWrap && servicesDropWrap.querySelector('.nav__dropdown');

  if (servicesDropBtn && servicesDropMenu) {
    servicesDropBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = servicesDropMenu.classList.contains('open');
      servicesDropMenu.classList.toggle('open', !isOpen);
      servicesDropBtn.setAttribute('aria-expanded', String(!isOpen));
    });
    document.addEventListener('click', function () {
      servicesDropMenu.classList.remove('open');
      servicesDropBtn.setAttribute('aria-expanded', 'false');
    });
    servicesDropMenu.addEventListener('click', function (e) { e.stopPropagation(); });
  }

  /* ============================================================
     7c. SERVICES ACCORDION (mobile drawer)
     ============================================================ */
  var drawerServicesBtn = document.getElementById('drawerServicesBtn');
  var drawerServicesNav = document.getElementById('drawerServicesNav');

  if (drawerServicesBtn && drawerServicesNav) {
    drawerServicesBtn.addEventListener('click', function () {
      var isOpen = drawerServicesNav.classList.contains('open');
      drawerServicesNav.classList.toggle('open', !isOpen);
      drawerServicesBtn.setAttribute('aria-expanded', String(!isOpen));
      drawerServicesNav.setAttribute('aria-hidden', String(isOpen));
    });
  }

  /* ============================================================
     8. ANNOUNCEMENT BAR — measure height & close behaviour
     ============================================================ */
  var announcementBar   = document.getElementById('announcementBar');
  var announcementClose = document.getElementById('announcementClose');

  function setBarOffset() {
    var h = (announcementBar && announcementBar.style.display !== 'none')
      ? announcementBar.getBoundingClientRect().height
      : 0;
    document.documentElement.style.setProperty('--bar-offset', h + 'px');
  }

  if (announcementBar) {
    // Hide immediately if previously dismissed
    try {
      if (sessionStorage.getItem('bgs_announcement_closed')) {
        announcementBar.style.display = 'none';
        document.documentElement.style.setProperty('--bar-offset', '0px');
      } else {
        setBarOffset();
      }
    } catch(e) { setBarOffset(); }

    // Recalculate on resize (text may reflow)
    window.addEventListener('resize', setBarOffset, { passive: true });
  }

  if (announcementClose && announcementBar) {
    announcementClose.addEventListener('click', function () {
      announcementBar.style.transition = 'opacity 0.25s ease';
      announcementBar.style.opacity    = '0';
      setTimeout(function () {
        announcementBar.style.display = 'none';
        document.documentElement.style.setProperty('--bar-offset', '0px');
      }, 260);
      try { sessionStorage.setItem('bgs_announcement_closed', '1'); } catch(e) {}
    });
  }

  /* ============================================================
     9. FAQ ACCORDION
     ============================================================ */
  var faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer   = btn.nextElementSibling;
      var expanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all open items first
      faqButtons.forEach(function (otherBtn) {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          var otherAnswer = otherBtn.nextElementSibling;
          if (otherAnswer) otherAnswer.setAttribute('aria-hidden', 'true');
        }
      });

      // Toggle current
      btn.setAttribute('aria-expanded', String(!expanded));
      if (answer) answer.setAttribute('aria-hidden', String(expanded));
    });
  });

  /* ============================================================
     10. LIVE BOOKING NOTIFICATIONS
     ============================================================ */
  var bookings = [
    { name: 'Ahmed from Dubai',       action: 'just booked', trip: 'Desert Safari',      time: '2 min ago',  avatar: 'https://i.pravatar.cc/40?img=3'  },
    { name: 'Priya from Abu Dhabi',   action: 'just enquired about', trip: 'Zanzibar Beach',  time: '5 min ago',  avatar: 'https://i.pravatar.cc/40?img=47' },
    { name: 'James from UK',          action: 'just booked', trip: 'Serengeti Safari',   time: '8 min ago',  avatar: 'https://i.pravatar.cc/40?img=12' },
    { name: 'Fatima from Sharjah',    action: 'just booked', trip: 'Dhow Cruise Dinner', time: '11 min ago', avatar: 'https://i.pravatar.cc/40?img=5'  },
    { name: 'Omar from Dubai',        action: 'just enquired about', trip: 'Gorilla Trekking', time: '14 min ago', avatar: 'https://i.pravatar.cc/40?img=8'  },
    { name: 'Sarah from Australia',   action: 'just booked', trip: 'Hot Air Balloon',    time: '18 min ago', avatar: 'https://i.pravatar.cc/40?img=25' },
    { name: 'Khalid from UAE',        action: 'just booked', trip: 'Luxury Yacht Dubai', time: '22 min ago', avatar: 'https://i.pravatar.cc/40?img=7'  },
  ];

  var liveNotif     = document.getElementById('liveNotif');
  var notifName     = document.getElementById('liveNotifName');
  var notifAction   = document.getElementById('liveNotifAction');
  var notifTime     = document.querySelector('.live-notif__time');
  var notifAvatar   = document.querySelector('.live-notif__avatar img');
  var notifIndex    = 0;

  function showBookingNotif() {
    if (!liveNotif) return;
    var data = bookings[notifIndex % bookings.length];
    notifIndex++;

    if (notifName)   notifName.textContent   = data.name;
    if (notifAction) notifAction.innerHTML   = data.action + ' <strong>' + data.trip + '</strong>';
    if (notifTime)   notifTime.textContent   = data.time;
    if (notifAvatar) notifAvatar.src         = data.avatar;

    liveNotif.classList.add('show');
    setTimeout(function () { liveNotif.classList.remove('show'); }, 4500);
  }

  // First notification after 5s, then every 18s
  setTimeout(function () {
    showBookingNotif();
    setInterval(showBookingNotif, 18000);
  }, 5000);

})();
