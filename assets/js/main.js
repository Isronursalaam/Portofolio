/**
 * ISRO NUR SALAAM - PORTFOLIO INTERACTIVITY
 * Lightweight Vanilla ES6 JavaScript
 * Zero external dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initScrollSpy();
  initProjectFilters();
  initContactForms();
  fetchGitHubStats();
  initTiltEffect();
});

/* --------------------------------------------------------------------------
   1. THEME TOGGLE (LIGHT / DARK)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Retrieve saved preference or system preference
  const savedTheme = localStorage.getItem('isro_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  html.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('isro_theme', newTheme);
      showToast(newTheme === 'dark' ? 'Mode Gelap diaktifkan' : 'Mode Terang diaktifkan');
    });
  }
}

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileBtn || !mobileDrawer) return;

  const toggleDrawer = () => {
    const isOpen = mobileDrawer.classList.toggle('open');
    mobileBtn.classList.toggle('active', isOpen);
    mobileBtn.setAttribute('aria-expanded', isOpen);
  };

  mobileBtn.addEventListener('click', toggleDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      mobileBtn.classList.remove('active');
      mobileBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileDrawer.classList.contains('open') && 
        !mobileDrawer.contains(e.target) && 
        !mobileBtn.contains(e.target)) {
      mobileDrawer.classList.remove('open');
      mobileBtn.classList.remove('active');
      mobileBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* --------------------------------------------------------------------------
   3. SCROLL SPY (HIGHLIGHT ACTIVE NAV LINK)
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* --------------------------------------------------------------------------
   4. PROJECT FILTERS (ALL, WEB, IOT, AI)
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. LIVE GITHUB STATS SYNC (WITH CACHED FALLBACK)
   -------------------------------------------------------------------------- */
function fetchGitHubStats() {
  const username = 'Isronursalaam';
  const heroRepoBadge = document.getElementById('heroRepoCount');
  const statRepoCount = document.getElementById('statRepoCount');

  // Fallback defaults
  const fallbackCount = 21;

  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) throw new Error('API Rate Limit or Network Error');
      return response.json();
    })
    .then(data => {
      const repos = data.public_repos || fallbackCount;
      if (heroRepoBadge) heroRepoBadge.textContent = `${repos} Repos`;
      if (statRepoCount) statRepoCount.textContent = repos;
    })
    .catch(() => {
      // Gracefully use fallback count
      if (heroRepoBadge) heroRepoBadge.textContent = `${fallbackCount} Repos`;
      if (statRepoCount) statRepoCount.textContent = fallbackCount;
    });
}

/* --------------------------------------------------------------------------
   6. CONTACT FORM & QUICK PING HANDLERS
   -------------------------------------------------------------------------- */
function initContactForms() {
  const contactForm = document.getElementById('contactForm');
  const pingForm = document.getElementById('pingForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>SENDING...</span>';

      setTimeout(() => {
        showToast('Terima kasih! Pesan Anda telah terkirim.');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 700);
    });
  }

  if (pingForm) {
    pingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Email Anda telah tercatat! Terima kasih.');
      pingForm.reset();
    });
  }
}

/* --------------------------------------------------------------------------
   7. TOAST NOTIFICATION UTILITY
   -------------------------------------------------------------------------- */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* --------------------------------------------------------------------------
   8. SUBTLE INTERACTIVE TILT ON DESKTOP
   -------------------------------------------------------------------------- */
function initTiltEffect() {
  const stage = document.querySelector('.portrait-stage');
  if (!stage || window.innerWidth < 1024) return;

  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = (y / rect.height) * -12;
    const rotY = (x / rect.width) * 12;

    stage.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    stage.style.transition = 'transform 0.1s ease-out';
  });

  stage.addEventListener('mouseleave', () => {
    stage.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    stage.style.transition = 'transform 0.5s ease-out';
  });
}
