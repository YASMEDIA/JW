/* ===== JAMING WORLD — APP.JS ===== */

// ===== GAMES DATA =====
const GAMES = {
  'trivia-wars': {
    id: 'trivia-wars',
    emoji: '🧠',
    name: 'Trivia Wars',
    tagline: 'The battle of minds begins now',
    desc: 'Trivia Wars is the ultimate knowledge showdown. Challenge your friends across 20+ categories — pop culture, science, sports, history, and more. With lightning rounds, power-ups, and sudden death finales, every match is a new battle. Designed for groups of 2–20 players, Trivia Wars turns any gathering into an epic championship.',
    players: '2–20 Players',
    duration: '30–60 min',
    age: '12+',
    type: 'Quiz / Party',
    color: '#1a4aff',
    orderUrl: 'https://yasmedia.com/order',
  },
  'draw-blast': {
    id: 'draw-blast',
    emoji: '🎨',
    name: 'Draw Blast',
    tagline: 'Sketch fast. Guess faster.',
    desc: 'Draw Blast is pure chaotic creativity. One player draws, the rest guess — but with wild modifiers like "draw with your eyes closed", "30 second limit", or "your teammate guides your hand". A perfect mix of artistic disaster and uncontrollable laughter, perfect for all ages and group sizes.',
    players: '3–16 Players',
    duration: '20–45 min',
    age: '8+',
    type: 'Creative / Party',
    color: '#7c3aed',
    orderUrl: 'https://yasmedia.com/order',
  },
  'speed-race': {
    id: 'speed-race',
    emoji: '⚡',
    name: 'Speed Race',
    tagline: 'Blink and you lose.',
    desc: 'Speed Race is a reaction-based adrenaline fest. Players face rapid-fire challenges testing reflexes, coordination, and quick thinking. Dodge obstacles, hit targets, and outlast your opponents in real-time rounds that get faster and more chaotic with every level. Built for competitive spirits and fast fingers.',
    players: '2–12 Players',
    duration: '15–30 min',
    age: '10+',
    type: 'Action / Reaction',
    color: '#00d4ff',
    orderUrl: 'https://yasmedia.com/order',
  },
  'word-clash': {
    id: 'word-clash',
    emoji: '💬',
    name: 'Word Clash',
    tagline: 'Words are your weapons.',
    desc: 'Word Clash is a dynamic wordplay battle with twists that keep every round fresh. Wildcards, reverse rounds, and surprise modifiers make it unpredictable and hilarious. Players earn points for creativity, speed, and cleverness — making it perfect for language lovers and party game fanatics alike.',
    players: '2–10 Players',
    duration: '25–50 min',
    age: '12+',
    type: 'Word / Strategy',
    color: '#f59e0b',
    orderUrl: 'https://yasmedia.com/order',
  },
  'dare-drop': {
    id: 'dare-drop',
    emoji: '🎲',
    name: 'Dare Drop',
    tagline: 'Spin it. Face it. Own it.',
    desc: 'Dare Drop reimagines the classic dare game with a digital twist. Spin the wheel to land on dares, challenges, truths, or wild card scenarios. With hundreds of prompts ranging from hilarious to boldly daring, no two games are ever the same. The ultimate icebreaker for any party or event.',
    players: '2–20 Players',
    duration: '20–60 min',
    age: '16+',
    type: 'Party / Social',
    color: '#ec4899',
    orderUrl: 'https://yasmedia.com/order',
  },
  'team-quest': {
    id: 'team-quest',
    emoji: '🚀',
    name: 'Team Quest',
    tagline: 'Together or nothing.',
    desc: 'Team Quest is a cooperative adventure where communication and teamwork are your only weapons. Players must solve puzzles, complete missions, and survive challenges — together. With branching storylines and escalating difficulty, Team Quest is perfect for corporate events, team-building sessions, and groups who love a real challenge.',
    players: '4–24 Players',
    duration: '45–90 min',
    age: '14+',
    type: 'Co-op / Adventure',
    color: '#10b981',
    orderUrl: 'https://yasmedia.com/order',
  },
};

// ===== UTILITY =====
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = $('#loading-screen');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 800);
    }
  }, 2400);
});

// ===== CUSTOM CURSOR (removed) =====

// ===== SCROLL PROGRESS =====
const progressBar = $('#scroll-progress');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  if (progressBar) progressBar.style.width = (scrolled / maxScroll * 100) + '%';
}, { passive: true });

// ===== NAVBAR — reveal after first screen =====
const navbar = $('#navbar');
if (navbar && !navbar.classList.contains('visible')) {
  const heroEl = $('#hero');
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) {
      navbar.classList.add('visible');
    } else {
      navbar.classList.remove('visible');
    }
  }, { threshold: 0.1 });
  if (heroEl) observer.observe(heroEl);
}

// ===== HAMBURGER MENU =====
const hamburger = $('#hamburger');
const mobileNav = $('#mobile-nav');

hamburger?.addEventListener('click', () => {
  mobileNav?.classList.toggle('open');
});

$$('.mobile-nav-link, .mobile-nav a').forEach(link => {
  link.addEventListener('click', () => mobileNav?.classList.remove('open'));
});

// ===== PARTICLES CANVAS =====
(function initParticles() {
  const canvas = $('#particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 10;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedY = -(Math.random() * 0.4 + 0.1);
      this.speedX = (Math.random() - 0.5) * 0.2;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '100,160,255' : '0,212,255';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.y < -10) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 120; i++) particles.push(new Particle());

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();

// ===== SCROLL REVEAL =====
(function initScrollReveal() {
  const els = $$('.scroll-reveal');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
          if (entry.target.classList.contains('neon-line')) {
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scaleX(1)';
          }
        }, delay);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  els.forEach(el => io.observe(el));
})();

// ===== STAGGER CARD ANIMATIONS =====
(function initCardStagger() {
  const cards = $$('.feature-card, .game-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  cards.forEach((card, i) => {
    card.style.transitionDelay = (i * 80) + 'ms';
    io.observe(card);
  });
})();

// ===== FORM SUBMISSION =====
const form = $('#game-idea-form');
const formSuccess = $('#form-success');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const originalHTML = btn.innerHTML;
  btn.innerHTML = '<span>Sending...</span>';
  btn.disabled = true;

  const data = {
    name: $('#name')?.value,
    phone: $('#phone')?.value,
    email: $('#email')?.value,
    idea: $('#idea')?.value,
  };

  // Send via mailto fallback (emailjs or formspree can be wired here)
  try {
    await sendFormEmail(data);
  } catch (_) {}

  // Always show success
  setTimeout(() => {
    form.style.opacity = '0';
    form.style.transform = 'scale(0.97)';
    form.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    setTimeout(() => {
      form.style.display = 'none';
      formSuccess?.classList.add('show');
    }, 400);
  }, 600);
});

async function sendFormEmail(data) {
  const body = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\nGame Idea:\n${data.idea}`;
  // Opens mail client as fallback (replace with EmailJS / Formspree for production)
  const mailto = `mailto:info@yasmedia.com?subject=New Game Idea from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(body)}`;
  const a = document.createElement('a');
  a.href = mailto;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ===== PAGE TRANSITIONS =====
function navigateTo(url) {
  const pt = $('#page-transition');
  if (pt) {
    pt.classList.add('active');
    setTimeout(() => { window.location.href = url; }, 300);
  } else {
    window.location.href = url;
  }
}

// Intercept internal link clicks for smooth transitions
$$('a[href]').forEach(a => {
  const href = a.getAttribute('href');
  if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto') && !a.target) {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(href);
    });
  }
});

// Fade in on page load
document.addEventListener('DOMContentLoaded', () => {
  const pt = $('#page-transition');
  if (pt) {
    pt.classList.remove('active');
  }
});

// ===== GAME DETAIL PAGE LOGIC =====
if (document.querySelector('.game-detail-hero')) {
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get('id');
  const game = GAMES[gameId];

  if (game) {
    document.title = `${game.name} — Jaming World`;

    const logoEl = $('#detail-logo');
    const titleEl = $('#detail-title');
    const taglineEl = $('#detail-tagline');
    const descEl = $('#detail-desc');
    const infoList = $('#game-info-list');
    const orderBtn = $('#order-btn');
    const downloadBtn = $('#download-btn');
    const videoLabel = $('#video-label');

    if (logoEl) logoEl.textContent = game.emoji;
    if (titleEl) titleEl.textContent = game.name;
    if (taglineEl) taglineEl.textContent = game.tagline;
    if (descEl) descEl.textContent = game.desc;
    if (orderBtn) {
      orderBtn.href = game.orderUrl;
      orderBtn.target = '_blank';
      orderBtn.rel = 'noopener';
    }
    if (downloadBtn) {
      downloadBtn.href = `manuals/${gameId}-manual.pdf`;
      downloadBtn.download = `${game.name} Manual.pdf`;
    }
    if (videoLabel) videoLabel.textContent = `${game.name} — Gameplay Reel`;

    // Apply game color accent
    document.documentElement.style.setProperty('--blue-glow', game.color);
    document.documentElement.style.setProperty('--blue-light', game.color);

    // Info rows
    if (infoList) {
      const rows = [
        { label: 'Players', value: game.players },
        { label: 'Duration', value: game.duration },
        { label: 'Age', value: game.age },
        { label: 'Type', value: game.type },
      ];
      infoList.innerHTML = rows.map(r =>
        `<div class="info-row"><span class="label">${r.label}</span><span class="value">${r.value}</span></div>`
      ).join('');
    }

    // More games
    const moreContainer = $('#more-games');
    if (moreContainer) {
      const others = Object.values(GAMES).filter(g => g.id !== gameId).slice(0, 3);
      moreContainer.innerHTML = others.map(g => `
        <a href="game.html?id=${g.id}" class="glass-card game-card scroll-reveal" style="opacity:0; transform:translateY(30px);">
          <div class="game-card-inner">
            <div class="game-card-logo">${g.emoji}</div>
            <h3 class="game-card-name">${g.name}</h3>
            <p class="game-card-desc">${g.desc.substring(0, 100)}...</p>
            <div class="game-card-arrow">Explore <span>→</span></div>
          </div>
        </a>
      `).join('');

      // Re-init scroll reveal for dynamic cards
      setTimeout(() => {
        $$('#more-games .scroll-reveal').forEach((card, i) => {
          setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, i * 100 + 200);
        });
      }, 300);
    }
  } else {
    // Unknown game — redirect home
    window.location.href = 'index.html#games';
  }

  // Play button interaction
  const playBtn = $('#play-btn');
  playBtn?.addEventListener('click', () => {
    playBtn.style.transform = 'scale(0.95)';
    setTimeout(() => { playBtn.style.transform = ''; }, 150);
    // In production: embed a real video player here
    alert('🎮 Video coming soon! Full gameplay reel will be available here.');
  });
}

// ===== HERO PARALLAX =====
window.addEventListener('scroll', () => {
  const hero = $('#hero');
  if (hero) {
    const scrollY = window.scrollY;
    hero.style.transform = `translateY(${scrollY * 0.3}px)`;
    hero.style.opacity = 1 - scrollY / (window.innerHeight * 0.9);
  }
}, { passive: true });

// ===== GAME CARD MOUSE GLOW EFFECT =====
$$('.game-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const glow = card.querySelector('.game-card-glow');
    if (glow) {
      glow.style.background = glow.style.background.replace(
        /circle at \d+% \d+%/,
        `circle at ${x}% ${y}%`
      );
    }
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.04) 100%)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});

// ===== NEON LINE REVEAL =====
$$('.neon-line').forEach(line => {
  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      line.style.opacity = '1';
      line.style.transform = 'scaleX(1)';
      line.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      io.unobserve(line);
    }
  }, { threshold: 0.5 });
  io.observe(line);
});
