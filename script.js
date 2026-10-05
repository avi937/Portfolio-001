/* ====================================================
   AVI ARORA — DEVOPS PORTFOLIO INTERACTIVITY
   Typing animations, Dashboard tabs, Counters & Mobile Nav
==================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── 0. THEME SWITCHER (Desktop button + Mobile drawer button) ──
  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');

  let storedTheme = 'light';
  try {
    storedTheme = localStorage.getItem('avi_portfolio_theme') || 'light';
  } catch (e) {
    console.warn("localStorage not available");
  }
  document.documentElement.setAttribute('data-theme', storedTheme);

  function toggleThemeMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('avi_portfolio_theme', nextTheme);
    } catch (e) {
      console.warn("localStorage not available");
    }
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleThemeMode);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleThemeMode);

  // ── 1. DYNAMIC TYPEWRITER EFFECT ──
  const typewriterElement = document.getElementById('typewriter');
  const phrases = [
    'DevOps Engineer',
    'AWS Cloud Engineer',
    'Terraform Specialist',
    'RHCSA Certified Admin',
    'CI/CD & Docker Specialist'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400; // Pause before new phrase
    }

    setTimeout(typeEffect, typingSpeed);
  }

  if (typewriterElement) {
    typeEffect();
  }

  // ── 2. HUMAN-READABLE OPERATIONS DASHBOARD ──
  const opsOutput = document.getElementById('opsOutput');
  const opsTabButtons = document.querySelectorAll('.ops-tabs .ops-tab-btn');

  const opsTabsData = {
    overview: `
<div class="ops-grid">
  <div class="ops-card">
    <div class="ops-card-header">
      <span class="ops-card-tag bg-blue">AWS Cloud</span>
      <h4>Multi-AZ VPC Architecture</h4>
    </div>
    <p>Production Multi-AZ VPC network (10.0.0.0/16) in Mumbai spanning Availability Zones A and B with separated public and private subnets, NAT Gateway outbound routing, and secure route tables.</p>
    <div class="ops-meta-row">
      <span class="meta-pill">VPC &amp; Subnets</span>
      <span class="meta-pill">NAT Gateway</span>
      <span class="meta-pill">Route Tables</span>
    </div>
  </div>

  <div class="ops-card">
    <div class="ops-card-header">
      <span class="ops-card-tag bg-emerald">Live Workloads</span>
      <h4>Production SaaS Platforms (Aisun)</h4>
    </div>
    <p>Managing daily infrastructure maintenance for <strong>Chatreal.ai</strong>, <strong>CelebsGPT.com</strong>, and <strong>ExciteMe.ai</strong> across AWS (EC2, ECS Fargate, RDS) and Azure App Services with proactive monitoring.</p>
    <div class="ops-meta-row">
      <span class="meta-pill">AWS ECS Fargate</span>
      <span class="meta-pill">Azure Services</span>
      <span class="meta-pill">Docker Containers</span>
    </div>
  </div>

  <div class="ops-card">
    <div class="ops-card-header">
      <span class="ops-card-tag bg-purple">Automation</span>
      <h4>Infrastructure as Code &amp; CI/CD</h4>
    </div>
    <p>Provisioning declarative cloud resources using modular Terraform with remote S3 backend state storage and locking. Automated GitHub Actions pipelines for linting, security audits, and deployments.</p>
    <div class="ops-meta-row">
      <span class="meta-pill">Terraform</span>
      <span class="meta-pill">S3 Backend</span>
      <span class="meta-pill">GitHub Actions</span>
    </div>
  </div>
</div>
    `.trim(),

    asg: `
<div class="ops-grid">
  <div class="ops-card">
    <div class="ops-card-header">
      <span class="ops-card-tag bg-cyan">Traffic Routing</span>
      <h4>Application Load Balancer</h4>
    </div>
    <p>Layer-7 Application Load Balancer deployed across Mumbai availability zones. Distributes incoming HTTP requests to target group instances while shielding compute instances from direct public exposure.</p>
    <div class="ops-meta-row">
      <span class="meta-pill">Port 80 Listener</span>
      <span class="meta-pill">Target Group</span>
      <span class="meta-pill">HTTP Health Checks</span>
    </div>
  </div>

  <div class="ops-card">
    <div class="ops-card-header">
      <span class="ops-card-tag bg-orange">Elastic Fleet</span>
      <h4>Target Tracking Auto Scaling Policy</h4>
    </div>
    <p>Configured CloudWatch target tracking scaling based on request volume. Automatically adjusts desired capacity between 2 and 4 instances as traffic scales, with built-in cooldown periods.</p>
    <div class="ops-meta-row">
      <span class="meta-pill">Min: 2</span>
      <span class="meta-pill">Max: 4</span>
      <span class="meta-pill">Target: 20 req/min/target</span>
    </div>
  </div>

  <div class="ops-card">
    <div class="ops-card-header">
      <span class="ops-card-tag bg-emerald">Self-Healing</span>
      <h4>Instance Health Monitoring</h4>
    </div>
    <p>Target group health checks periodically ping instance endpoints. If an instance becomes unhealthy or terminates, the Auto Scaling Group automatically launches a replacement using the Launch Template.</p>
    <div class="ops-meta-row">
      <span class="meta-pill">Launch Template</span>
      <span class="meta-pill">ELB Health Check</span>
      <span class="meta-pill">Automated Replacement</span>
    </div>
  </div>
</div>
    `.trim(),

    security: `
<div class="ops-grid">
  <div class="ops-card">
    <div class="ops-card-header">
      <span class="ops-card-tag bg-purple">Identity &amp; Access</span>
      <h4>Cloudflare Access (ZTNA)</h4>
    </div>
    <p>Configured Zero Trust Network Access policies across application authentication services via Cloudflare Access, enforcing identity verification and eliminating direct public exposure of backend endpoints.</p>
    <div class="ops-meta-row">
      <span class="meta-pill">Cloudflare ZTNA</span>
      <span class="meta-pill">Identity Controls</span>
      <span class="meta-pill">WAF Protection</span>
    </div>
  </div>

  <div class="ops-card">
    <div class="ops-card-header">
      <span class="ops-card-tag bg-blue">Network Security</span>
      <h4>Restricted Security Groups</h4>
    </div>
    <p>EC2 security groups are configured to accept inbound web traffic strictly from the Application Load Balancer security group, preventing direct internet access to application servers.</p>
    <div class="ops-meta-row">
      <span class="meta-pill">Security Group Chaining</span>
      <span class="meta-pill">Least Privilege</span>
    </div>
  </div>

  <div class="ops-card">
    <div class="ops-card-header">
      <span class="ops-card-tag bg-red">Observability &amp; Email</span>
      <h4>Monitoring &amp; Deliverability</h4>
    </div>
    <p>CloudWatch metric alarms and container restart monitors routing alerts to Slack. Configured AWS SES transactional email with SPF, DKIM, and DMARC alignment for reliable message delivery.</p>
    <div class="ops-meta-row">
      <span class="meta-pill">CloudWatch &amp; Slack</span>
      <span class="meta-pill">AWS SES</span>
      <span class="meta-pill">SPF / DKIM / DMARC</span>
    </div>
  </div>
</div>
    `.trim()
  };

  function renderOpsTab(tabKey) {
    if (!opsOutput || !opsTabsData[tabKey]) return;
    opsOutput.innerHTML = opsTabsData[tabKey];
  }

  // Initial tab load
  renderOpsTab('overview');

  opsTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      opsTabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderOpsTab(btn.dataset.tab);
    });
  });

  // ── 3. ANIMATED METRICS COUNTER ──
  const statValues = document.querySelectorAll('.stat-value');
  let counted = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        statValues.forEach(counter => {
          const target = +counter.dataset.target;
          const duration = 1800; // ms
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.4 });

  const statsRibbon = document.querySelector('.stats-ribbon');
  if (statsRibbon) {
    statsObserver.observe(statsRibbon);
  }

  // ── 4. MOBILE DRAWER NAVIGATION ──
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (menuToggle) {
      menuToggle.classList.remove('active');
      // Force all bars back to resting state
      menuToggle.querySelectorAll('.hamburger-bar').forEach(bar => {
        bar.style.transform = '';
        bar.style.opacity = '';
      });
    }
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    const mobileDrawerButtons = document.querySelectorAll('.mobile-drawer-btn');
    mobileDrawerButtons.forEach(btn => {
      btn.addEventListener('click', closeDrawer);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !menuToggle.contains(e.target)) {
        closeDrawer();
      }
    });
  }

  // ── 5. ACTIVE NAVBAR LINK HIGHLIGHT ON SCROLL ──
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(sec => {
      const secTop = sec.offsetTop;
      const secHeight = sec.offsetHeight;
      if (scrollPosition >= secTop && scrollPosition < secTop + secHeight) {
        currentSection = sec.getAttribute('id');
      }
    });

    desktopNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // ── 6. COPY EMAIL CLIPBOARD & TOAST ──
  const copyBtn = document.getElementById('copyEmailHero');
  const toast = document.getElementById('toast');

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('aviarora6789@gmail.com').then(() => {
        showToast('✅ Email copied: aviarora6789@gmail.com');
      }).catch(() => {
        showToast('aviarora6789@gmail.com');
      });
    });
  }

  // ── 7. CONTACT FORM SUBMISSION ──
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value;
      const email = document.getElementById('senderEmail').value;
      const subject = document.getElementById('senderSubject').value;
      const message = document.getElementById('senderMessage').value;

      const mailtoLink = `mailto:aviarora6789@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Avi,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      showToast('Opening email client...');
      window.location.href = mailtoLink;
    });
  }

});
