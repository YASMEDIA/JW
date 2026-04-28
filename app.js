/* ===== JAMING WORLD — APP.JS ===== */

// ===== GAMES DATA =====
const GAMES = {
  'trivia-wars': {
    id: 'trivia-wars',
    emoji: '🧠',
    logoImg: 'assest/99.svg',
    logoBg: '#000000',
    logoBorderColor: 'rgba(255,0,10,0.4)',
    name: '9ayad x Na9ab',
    nameAr: 'صياد X نصاب',
    cardDescKey: 'card.99.desc',
    tagline: 'Only a Hunter Can Catch a Deceiver',
    taglineAr: 'مايصيد النصاب الا الصياد',
    desc: `9ayad X Na9ab is a fast-paced social game of deception, persuasion, and sharp thinking.<br>Can you convince your friends when you don't even know the answer — or will they expose you?<br><br>Every round is a mind game where confidence beats knowledge.<br>Built for high-energy groups, it turns any gathering into a tense, hilarious battle of wits.`,
    descAr: `لعبة سريعة تعتمد على الصياد والنصاب، مو الكل يعرف الإجابة… وهذا اهي الزبدة.<br>اخلط بين الصج والجذب، أقنع ربعك، وحاول ما يايطيح عليك.`,
    players: '3–10 Players',
    duration: '15–30 min',
    age: '12+',
    type: 'Social / Deception / Party Game',
    playersAr: '3–10 لاعبين',
    durationAr: '15–30 دقيقة',
    typeAr: 'اجتماعي / خداع / حفلات',
    color: '#ff000a',
    orderUrl: 'https://na9aab.com',
    isApp: true,
    videoId: 'jkXSxmFGfIg',
  },
  'draw-blast': {
    id: 'draw-blast',
    emoji: '🎨',
    logoImg: 'assest/Deera.svg',
    logoBg: '#ed5633',
    logoBorderColor: 'rgba(237,86,51,0.4)',
    name: 'Deera',
    nameAr: 'الديرة',
    cardDescKey: 'card.deera.desc',
    tagline: 'Move. Cooperate. Win.',
    taglineAr: 'تحرك. تعاون. انتصر.',
    desc: `A strategic team-based board game that blends movement, tactics, and cooperation.<br>Each player controls specific pieces, using dice to advance and navigate the board toward the center to win.`,
    descAr: `لعبة جماعية تعتمد على الاستراتيجية، فيها حركة وتكتيك وتعاون.<br>كل لاعب يتحكم بقطعه، ويستخدم النرد عشان يتحرك ويوصل للنص ويفوز.`,
    players: '4 Players',
    duration: '40+ min',
    age: '9+',
    type: 'Creative / Party',
    playersAr: '4 لاعبين',
    durationAr: '+40 دقيقة',
    typeAr: 'إبداعي / حفلات',
    color: '#ed5633',
    orderUrl: 'https://jaming-holding.com/product/3-الديرة',
    videoId: 'k1hY65vrYFI',
    videoStart: 3,
  },
  'speed-race': {
    id: 'speed-race',
    emoji: '⚡',
    logoImg: 'assest/Mishakhet.svg',
    name: 'Mishakhet',
    nameAr: 'مشاخط',
    cardDescKey: 'card.mishakhet.desc',
    tagline: 'Blink and you lose.',
    taglineAr: 'طرفة عين وخسرت.',
    desc: 'Mishakhet is a reaction-based adrenaline fest. Players face rapid-fire challenges testing reflexes, coordination, and quick thinking. Dodge obstacles, hit targets, and outlast your opponents in real-time rounds that get faster and more chaotic with every level. Built for competitive spirits and fast fingers.',
    players: '2–12 Players',
    duration: '15–30 min',
    age: '10+',
    type: 'Action / Reaction',
    playersAr: '2–12 لاعب',
    durationAr: '15–30 دقيقة',
    typeAr: 'حركة / ردود أفعال',
    color: '#00d4ff',
    orderUrl: 'https://yasmedia.com/order',
    comingSoon: true,
  },
  'word-clash': {
    id: 'word-clash',
    emoji: '💬',
    logoImg: 'assest/SVG/Five s.svg',
    logoBg: '#000000',
    logoBorderColor: 'rgba(255,255,255,0.15)',
    name: 'Five',
    nameAr: 'Five',
    cardDescKey: 'card.five.desc',
    tagline: 'Words are your weapons.',
    taglineAr: 'الكلمات سلاحك.',
    desc: 'Five is a dynamic wordplay battle with twists that keep every round fresh. Wildcards, reverse rounds, and surprise modifiers make it unpredictable and hilarious. Players earn points for creativity, speed, and cleverness — making it perfect for language lovers and party game fanatics alike.',
    players: '2–10 Players',
    duration: '25–50 min',
    age: '12+',
    type: 'Word / Strategy',
    playersAr: '2–10 لاعبين',
    durationAr: '25–50 دقيقة',
    typeAr: 'كلمات / استراتيجية',
    color: '#f59e0b',
    orderUrl: 'https://yasmedia.com/order',
    comingSoon: true,
  },
  'dare-drop': {
    id: 'dare-drop',
    emoji: '🎲',
    logoImg: 'assest/Bairaq.svg',
    name: 'Bairaq',
    nameAr: 'البيرق',
    cardDescKey: 'card.bairaq.desc',
    tagline: 'Spin it. Face it. Own it.',
    taglineAr: 'أدرها. واجهها. امتلكها.',
    desc: 'Bairaq reimagines the classic dare game with a digital twist. Spin the wheel to land on dares, challenges, truths, or wild card scenarios. With hundreds of prompts ranging from hilarious to boldly daring, no two games are ever the same. The ultimate icebreaker for any party or event.',
    players: '2–20 Players',
    duration: '20–60 min',
    age: '16+',
    type: 'Party / Social',
    playersAr: '2–20 لاعب',
    durationAr: '20–60 دقيقة',
    typeAr: 'حفلات / اجتماعي',
    color: '#ec4899',
    orderUrl: 'https://yasmedia.com/order',
    comingSoon: true,
  },
  'team-quest': {
    id: 'team-quest',
    emoji: '🚀',
    logoImg: 'assest/High Hand.svg',
    name: 'High Hand',
    nameAr: 'High Hand',
    cardDescKey: 'card.highhand.desc',
    tagline: 'Together or nothing.',
    taglineAr: 'معاً أو لا شيء.',
    desc: 'High Hand is a cooperative adventure where communication and teamwork are your only weapons. Players must solve puzzles, complete missions, and survive challenges — together. With branching storylines and escalating difficulty, High Hand is perfect for corporate events, team-building sessions, and groups who love a real challenge.',
    players: '4–24 Players',
    duration: '45–90 min',
    age: '14+',
    type: 'Co-op / Adventure',
    playersAr: '4–24 لاعب',
    durationAr: '45–90 دقيقة',
    typeAr: 'تعاوني / مغامرة',
    color: '#10b981',
    orderUrl: 'https://yasmedia.com/order',
    comingSoon: true,
  },
};

// ===== UTILITY =====
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ===== I18N =====
const I18N = {
  en: {
    'loading': 'Loading Game Experience...',
    'nav.about': 'About',
    'nav.games': 'Games',
    'nav.build': 'Build a Game',
    'nav.cta': 'Start Your Game',
    'hero.headline': 'A Beautiful World…<br />of <span class="highlight">Games</span>',
    'hero.sub': '<span>Play.</span> &nbsp;Compete. &nbsp;<span>Laugh.</span>',
    'hero.explore': 'Explore Games',
    'hero.build': 'Build Your Game →',
    'about.label': 'The Universe',
    'about.title': 'What is <span style="background:linear-gradient(135deg,#6fa3ff,#00d4ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">عالم جيمنق?</span>',
    'about.desc': 'A universe of social games designed for real fun — group experiences that bring people together through play, challenges, and laughter.',
    'feat1.title': 'Social Games',
    'feat1.desc': 'Multiplayer experiences designed to be played together — in person or online.',
    'feat2.title': 'Compete & Win',
    'feat2.desc': 'Leaderboards, challenges, and bragging rights for the ultimate champions.',
    'feat3.title': 'Pure Fun',
    'feat3.desc': 'Every game is crafted to make you laugh, connect, and create memories.',
    'feat4.title': 'Group Experiences',
    'feat4.desc': 'From small gatherings to big events — عالم جيمنق scales with your crew.',
    'games.label': 'The Arena',
    'games.title': 'Choose Your <span style="background:linear-gradient(135deg,#9d5cff,#00d4ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Game</span>',
    'games.desc': 'Each game is a world of its own. Tap to dive in.',
    'card.explore': 'Explore',
    'card.soon': 'Coming Soon',
    'card.99.name': '9ayad x Na9ab',
    'card.deera.name': 'Deera',
    'card.mishakhet.name': 'Mishakhet',
    'card.five.name': 'Five',
    'card.bairaq.name': 'Bairaq',
    'card.highhand.name': 'High Hand',
    'card.99.desc': 'A fast-paced deception game where you bluff, convince, and outsmart your friends. Can you fake the truth… or will you get exposed?',
    'card.deera.desc': 'A strategic team game where players move, cooperate, and race to the center using dice.',
    'card.mishakhet.desc': 'Reaction-based chaos. Hit, dodge, and race your way to victory in real-time.',
    'card.five.desc': 'Wordplay battles with twists, wildcards, and surprise round modifiers.',
    'card.bairaq.desc': 'Spin the wheel and face the dare. The classic party game, reimagined.',
    'card.highhand.desc': 'Cooperative missions where your team must work together or face game over.',
    'form.label': 'Game Creator',
    'form.title': 'Have a Game Idea?',
    'form.desc': "Tell us your vision. We'll help you build the next game world.",
    'form.name.label': 'Your Name',
    'form.name.placeholder': "What's your name?",
    'form.phone.label': 'Phone Number',
    'form.phone.placeholder': '+965 xxxx xxxx',
    'form.email.label': 'Email Address',
    'form.email.placeholder': 'you@example.com',
    'form.idea.label': 'Your Game Idea',
    'form.idea.placeholder': 'Describe your game concept — mechanics, theme, players, vibe...',
    'form.submit': 'Start Your Game',
    'form.success.title': 'Your idea has been received!',
    'form.success.sub': 'Our team will contact you within 24 hours.',
    'footer.credit': 'Designed & Developed by',
    'back': 'Back to World',
    'detail.about': 'About This Game',
    'detail.get': 'Get This Game',
    'detail.order': 'Order Now',
    'detail.download': 'Download Now',
    'detail.redirect': "You'll be redirected to our ordering system",
    'detail.manual': 'Game Manual',
    'detail.manual.btn': 'Download PDF',
    'detail.info': 'Game Info',
    'detail.more': 'More Games',
    'detail.video.sub': 'Click to watch the gameplay reel',
    'info.players': 'Players',
    'info.duration': 'Duration',
    'info.age': 'Age',
    'info.type': 'Type',
  },
  ar: {
    'loading': 'جاري تحميل تجربة الألعاب...',
    'nav.about': 'عن العالم',
    'nav.games': 'الألعاب',
    'nav.build': 'صمم لعبتك',
    'nav.cta': 'ابدأ لعبتك',
    'hero.headline': 'عالم جميل…<br />من <span class="highlight">الألعاب</span>',
    'hero.sub': '<span>العب.</span> &nbsp;تنافس. &nbsp;<span>اضحك.</span>',
    'hero.explore': 'استكشف الألعاب',
    'hero.build': '← صمم لعبتك',
    'about.label': 'الكون',
    'about.title': 'ما هو <span style="background:linear-gradient(135deg,#6fa3ff,#00d4ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">عالم جيمنق؟</span>',
    'about.desc': 'عالم من الألعاب الاجتماعية صُمِّم للمتعة الحقيقية — تجارب جماعية تجمع الناس معاً بالضحك والتحدي واللعب.',
    'feat1.title': 'ألعاب اجتماعية',
    'feat1.desc': 'تجارب متعددة اللاعبين مصممة للعب المشترك — حضورياً أو أونلاين.',
    'feat2.title': 'تنافس وانتصر',
    'feat2.desc': 'قوائم النتائج والتحديات وحقوق التباهي للأبطال الحقيقيين.',
    'feat3.title': 'متعة خالصة',
    'feat3.desc': 'كل لعبة مصممة لتضحك وتتواصل وتصنع ذكريات لا تُنسى.',
    'feat4.title': 'تجارب جماعية',
    'feat4.desc': 'من التجمعات الصغيرة إلى الفعاليات الكبيرة — عالم جيمنق يتأقلم مع مجموعتك.',
    'games.label': 'الساحة',
    'games.title': 'اختر <span style="background:linear-gradient(135deg,#9d5cff,#00d4ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">لعبتك</span>',
    'games.desc': 'كل لعبة عالم منفصل. اضغط وانطلق.',
    'card.explore': 'استكشف',
    'card.soon': 'قريباً',
    'card.99.name': 'صياد X نصاب',
    'card.deera.name': 'الديرة',
    'card.mishakhet.name': 'مشاخط',
    'card.five.name': 'Five',
    'card.bairaq.name': 'البيرق',
    'card.highhand.name': 'High Hand',
    'card.99.desc': 'لعبة خداع سريعة حيث تكذب وتقنع وتتفوق على أصدقائك. هل تستطيع تزوير الحقيقة… أم ستُكشف؟',
    'card.deera.desc': 'لعبة استراتيجية جماعية حيث يتنافس اللاعبون بالنرد للوصول إلى المركز.',
    'card.mishakhet.desc': 'فوضى مبنية على ردود الأفعال. اضرب، تهرّب، وتسابق نحو النصر في الوقت الحقيقي.',
    'card.five.desc': 'معارك الكلمات مع تويستات وبطاقات وحشية ومعدِّلات جولات مفاجئة.',
    'card.bairaq.desc': 'أدر العجلة وواجه التحدي. لعبة الحفلات الكلاسيكية بتصور جديد.',
    'card.highhand.desc': 'مهمات تعاونية حيث يجب أن يعمل فريقك معاً أو تواجهون نهاية اللعبة.',
    'form.label': 'صانع الألعاب',
    'form.title': 'هل لديك فكرة لعبة؟',
    'form.desc': 'أخبرنا بفكرتك. سنساعدك في بناء عالم لعبتك القادم.',
    'form.name.label': 'اسمك',
    'form.name.placeholder': 'ما اسمك؟',
    'form.phone.label': 'رقم الهاتف',
    'form.phone.placeholder': '+965 xxxx xxxx',
    'form.email.label': 'البريد الإلكتروني',
    'form.email.placeholder': 'example@email.com',
    'form.idea.label': 'فكرة لعبتك',
    'form.idea.placeholder': 'صف مفهوم لعبتك — الآليات والموضوع وعدد اللاعبين والأجواء...',
    'form.submit': 'ابدأ لعبتك',
    'form.success.title': 'وصلتنا فكرتك!',
    'form.success.sub': 'سيتواصل معك فريقنا خلال 24 ساعة.',
    'footer.credit': 'تصميم وتطوير',
    'back': 'العودة للعالم',
    'detail.about': 'عن اللعبة',
    'detail.get': 'احصل على اللعبة',
    'detail.order': 'اطلب الآن',
    'detail.download': 'حمّل الآن',
    'detail.redirect': 'ستُحوَّل إلى نظام الطلبات',
    'detail.manual': 'دليل اللعبة',
    'detail.manual.btn': 'تحميل PDF',
    'detail.info': 'معلومات اللعبة',
    'detail.more': 'المزيد من الألعاب',
    'detail.video.sub': 'اضغط لمشاهدة مقطع اللعبة',
    'info.players': 'اللاعبون',
    'info.duration': 'المدة',
    'info.age': 'العمر',
    'info.type': 'النوع',
  },
};

function getLang() {
  return document.documentElement.lang || localStorage.getItem('jw-lang') || 'en';
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('jw-lang', lang);

  const label = lang === 'en' ? 'عربي' : 'English';
  $$('#lang-toggle, #lang-toggle-mobile').forEach(btn => { if (btn) btn.textContent = label; });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = I18N[lang]?.[el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = I18N[lang]?.[el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = I18N[lang]?.[el.dataset.i18nPlaceholder];
    if (val !== undefined) el.placeholder = val;
  });

  if (typeof window.__detailLangUpdate === 'function') window.__detailLangUpdate(lang);
}

// Init language on page load
(function () {
  const saved = localStorage.getItem('jw-lang') || 'en';
  setLanguage(saved);
  $$('#lang-toggle, #lang-toggle-mobile').forEach(btn => {
    btn?.addEventListener('click', () => {
      setLanguage(getLang() === 'en' ? 'ar' : 'en');
    });
  });
})();

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
    entries.forEach((entry) => {
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
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(card => io.observe(card));
})();

// ===== CONTACT FORM =====
const form = $('#game-idea-form');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn = form.querySelector('.form-submit');
  const original = btn.innerHTML;
  btn.innerHTML = '<span>Sending...</span>';
  btn.disabled = true;

  const data = {
    name: $('#name')?.value,
    phone: $('#phone')?.value,
    email: $('#email')?.value,
    idea: $('#idea')?.value,
  };

  await sendFormEmail(data);

  setTimeout(() => {
    btn.innerHTML = original;
    btn.disabled = false;
    form.reset();

    const success = $('#form-success');
    if (success) {
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 5000);
    }
  }, 400);
}, 600);

// Fade in on page load
document.addEventListener('DOMContentLoaded', () => {
  const pt = $('#page-transition');
  if (pt) {
    pt.classList.remove('active');
  }
});

async function sendFormEmail(data) {
  const body = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\nGame Idea:\n${data.idea}`;
  const mailto = `mailto:info@yasmedia.com?subject=New Game Idea from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(body)}`;
  const a = document.createElement('a');
  a.href = mailto;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ===== GAME DETAIL PAGE LOGIC =====
if (document.querySelector('.game-detail-hero')) {
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get('id');
  const game = GAMES[gameId];

  if (game) {
    // --- Static setup (runs once) ---
    const logoEl = $('#detail-logo');
    const orderBtn = $('#order-btn');
    const videoSection = $('#video-section');
    const videoLabel = $('#video-label');

    if (logoEl) {
      if (game.logoImg) {
        logoEl.innerHTML = `<img src="${game.logoImg}" alt="${game.name}">`;
        logoEl.style.background = game.logoBg || 'rgba(255,255,255,0.08)';
        logoEl.style.borderColor = game.logoBorderColor || 'rgba(255,255,255,0.15)';
        logoEl.style.padding = '16px';
      } else {
        logoEl.textContent = game.emoji;
      }
    }
    if (orderBtn) {
      orderBtn.href = game.orderUrl;
      orderBtn.target = '_blank';
      orderBtn.rel = 'noopener';
    }
    const manualCard = $('#download-btn')?.closest('.glass-card');
    if (manualCard && !game.manualUrl) manualCard.style.display = 'none';

    if (videoSection && game.videoId) {
      const startParam = game.videoStart ? `?start=${game.videoStart}` : '';
      videoSection.innerHTML = `<iframe src="https://www.youtube.com/embed/${game.videoId}${startParam}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:var(--radius-lg);"></iframe>`;
      videoSection.style.position = 'relative';
    }

    document.documentElement.style.setProperty('--blue-glow', game.color);
    document.documentElement.style.setProperty('--blue-light', game.color);

    // --- Lang-dependent rendering (called on load + every language switch) ---
    function renderDetailLang(lang) {
      const displayName = (lang === 'ar' && game.nameAr) ? game.nameAr : game.name;
      document.title = `${displayName} — عالم جيمنق`;

      const titleEl = $('#detail-title');
      const taglineEl = $('#detail-tagline');
      const descEl = $('#detail-desc');
      const infoList = $('#game-info-list');
      const moreContainer = $('#more-games');

      if (titleEl) titleEl.textContent = displayName;
      if (taglineEl) taglineEl.textContent = (lang === 'ar' && game.taglineAr) ? game.taglineAr : game.tagline;
      if (descEl) descEl.innerHTML = (lang === 'ar' && game.descAr) ? game.descAr : game.desc;
      if (videoLabel && !game.videoId) videoLabel.textContent = `${displayName} — Gameplay Reel`;

      if (orderBtn && game.isApp) {
        const span = orderBtn.querySelector('span');
        if (span) {
          span.textContent = I18N[lang]?.['detail.download'] || 'Download Now';
          span.removeAttribute('data-i18n');
        }
      }

      const t = (k) => I18N[lang]?.[k] || k;
      if (infoList) {
        const ar = lang === 'ar';
        infoList.innerHTML = [
          { label: t('info.players'), value: ar && game.playersAr ? game.playersAr : game.players },
          { label: t('info.duration'), value: ar && game.durationAr ? game.durationAr : game.duration },
          { label: t('info.age'), value: game.age },
          { label: t('info.type'), value: ar && game.typeAr ? game.typeAr : game.type },
        ].map(r => `<div class="info-row"><span class="label">${r.label}</span><span class="value">${r.value}</span></div>`).join('');
      }

      if (moreContainer) {
        const others = Object.values(GAMES).filter(g => g.id !== gameId).slice(0, 3);
        moreContainer.innerHTML = others.map(g => {
          const logoHtml = g.logoImg ? `<img src="${g.logoImg}" alt="${g.name}">` : g.emoji;
          const logoBg = g.logoBg || 'rgba(255,255,255,0.08)';
          const logoBorder = g.logoBorderColor || 'rgba(255,255,255,0.12)';
          const logoPadding = g.logoImg ? '14px' : '';
          const cardName = (lang === 'ar' && g.nameAr) ? g.nameAr : g.name;
          const cardDesc = (g.cardDescKey && I18N[lang]?.[g.cardDescKey]) || g.desc.substring(0, 100);
          const soonLabel = I18N[lang]?.['card.soon'] || 'Coming Soon';
          const exploreLabel = I18N[lang]?.['card.explore'] || 'Explore';
          const soonBadge = g.comingSoon ? `<div class="coming-soon-badge">${soonLabel}</div>` : '';
          const soonStyle = g.comingSoon ? 'opacity:0.55; pointer-events:none;' : '';
          return `
            <a href="game.html?id=${g.id}" class="glass-card game-card${g.comingSoon ? ' game-card--soon' : ''} scroll-reveal" style="opacity:0; transform:translateY(30px); ${soonStyle}">
              ${soonBadge}
              <div class="game-card-inner">
                <div class="game-card-logo" style="background:${logoBg}; border-color:${logoBorder}; padding:${logoPadding};">${logoHtml}</div>
                <h3 class="game-card-name">${cardName}</h3>
                <p class="game-card-desc">${cardDesc}</p>
                <div class="game-card-arrow"><span>${exploreLabel}</span> <span class="arrow-icon">→</span></div>
              </div>
            </a>
          `;
        }).join('');
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
    }

    renderDetailLang(getLang());
    window.__detailLangUpdate = renderDetailLang;

  } else {
    window.location.href = 'index.html#games';
  }
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
