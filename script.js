const features = [
  { title: 'Daily Questions', description: 'Curated prompts that invite presence, honesty, and emotional intimacy in just a few minutes.', impact: 'Turns ordinary days into consistent moments of closeness.' },
  { title: 'Bond Categories', description: 'Explore themes like communication, trust, affection, and future vision with guided depth.', impact: 'Makes growth structured instead of overwhelming.' },
  { title: 'Love Notes', description: 'Send private messages that feel timeless—short words that carry real emotional weight.', impact: 'Keeps tenderness alive, even during busy seasons.' },
  { title: 'Ritual Creation', description: 'Build intentional weekly or monthly rituals designed around your relationship rhythm.', impact: 'Creates meaningful habits that strengthen commitment.' },
  { title: 'Planning Together', description: 'Set shared plans, date ideas, and small goals in a space built for partnership.', impact: 'Moves love from intention to action.' },
  { title: 'Shared Memories', description: 'Save highlights, reflections, and milestones in a warm private archive.', impact: 'Helps couples revisit growth and joy over time.' },
  { title: 'Gentle Notifications', description: 'Elegant reminders to check in, reflect, or reconnect without feeling intrusive.', impact: 'Supports consistency and emotional care.' },
  { title: 'Partner Feedback & Results', description: 'Understand patterns, celebrate strengths, and uncover opportunities to connect better.', impact: 'Builds awareness and deeper alignment.' },
  { title: 'Solo & Couple Modes', description: 'Use Khethiwe alone for self-reflection or together for shared conversation and growth.', impact: 'Meets you wherever you are in your relationship journey.' }
];

const categories = [
  { name: 'Emotional Intimacy', tone: 'Soft, vulnerable, and reassuring', prompts: ['When do you feel most emotionally close to me?', 'What is one small thing that helps you feel deeply seen?'] },
  { name: 'Real Talk', tone: 'Honest, grounded, and direct', prompts: ['What is something you need more of from me lately?', 'Where do we avoid hard conversations, and why?'] },
  { name: 'Deep & Intimate', tone: 'Soulful and reflective', prompts: ['What fear do you want us to handle with more tenderness?', 'What part of your story do you wish I asked about more often?'] },
  { name: 'Conflict & Repair', tone: 'Constructive and healing', prompts: ['What helps you feel safe after we misunderstand each other?', 'How can we apologize in ways that truly land?'] },
  { name: 'Family & Values', tone: 'Intentional and principled', prompts: ['What value do you want our relationship to always protect?', 'Which tradition would you love us to create together?'] },
  { name: 'Future Plans', tone: 'Vision-led and hopeful', prompts: ['What season of life are you preparing your heart for?', 'How do we want our relationship to feel one year from now?'] },
  { name: 'Light & Fun', tone: 'Playful and warm', prompts: ['What mini challenge should we try this week just for fun?', 'What would your dream spontaneous date look like this month?'] }
];

const testimonials = [
  { quote: 'Khethiwe made us slow down and truly hear each other. It feels less like an app and more like a ritual for our relationship.', name: 'Nadia & Elias', role: 'Together 4 years' },
  { quote: 'I use solo mode every evening. The prompts helped me understand my emotional patterns before bringing them into my relationship.', name: 'Ayanda M.', role: 'Solo reflection user' },
  { quote: 'The design is beautiful, but what surprised us most is how intentional every question feels. We feel closer and calmer.', name: 'Leila & Mark', role: 'Newly engaged couple' }
];

const previews = [
  ['Mood Check', 'How connected do you feel today?'],
  ['Date Planner', 'Friday candlelit dinner at home'],
  ['Growth Insight', 'You both value reassurance'],
  ['Memory Vault', 'Our 1-year reflection note']
];

const points = [
  'Most relationship apps focus on messaging. Khethiwe is designed for meaningful moments that build emotional safety over time.',
  'You can grow as an individual and as a couple in the same space, making your growth journey connected and practical.',
  'From daily prompts to shared rituals, every touchpoint is crafted to feel thoughtful, intimate, and premium.',
  'The experience balances romance and structure—so connection is not left to chance, but built with intention.'
];

const stores = [
  { label: 'Get it on', name: 'Google Play' },
  { label: 'Download on the', name: 'App Store' }
];

function phoneCard(title, subtitle, lines) {
  return `
    <article class="phone-card">
      <div class="phone-inner">
        <div class="notch"></div>
        <p class="phone-subtitle">${subtitle}</p>
        <h4 class="phone-title">${title}</h4>
        <div class="phone-lines">${lines.map((line) => `<p>${line}</p>`).join('')}</div>
      </div>
    </article>`;
}

function render() {
  const storeMarkup = stores
    .map((s) => `<a class="store-btn" href="#" aria-label="${s.label} ${s.name}"><small>${s.label}</small><strong>${s.name}</strong></a>`)
    .join('');

  document.querySelector('#hero-store-buttons').innerHTML = storeMarkup;
  document.querySelector('#footer-store-buttons').innerHTML = storeMarkup;

  document.querySelector('#hero-phone-stack').innerHTML =
    `<div style="margin-top:2rem">${phoneCard('Tonight\'s Reflection', 'For you', ['How did you feel loved today?', 'What do you need tomorrow?'])}</div>` +
    phoneCard('Daily Bond', 'For both of you', ['Question #184', 'When did you feel closest this week?', 'Share your answer →']);

  document.querySelector('#overview-phones').innerHTML =
    phoneCard('Love Notes', 'Private', ['I loved how you checked in today.', 'Save to memory']) +
    `<div style="padding-top:2rem">${phoneCard('Weekly Ritual', 'Together', ['Sunday check-in', '12 min reflection', 'Complete streak'])}</div>`;

  document.querySelector('#features-grid').innerHTML = features
    .map((f) => `<article class="card"><h3>${f.title}</h3><p>${f.description}</p><p class="impact">Why it matters: ${f.impact}</p></article>`)
    .join('');

  document.querySelector('#difference-points').innerHTML = points.map((p) => `<p class="point">${p}</p>`).join('');

  document.querySelector('#category-stack').innerHTML = categories
    .map((c) => `
      <article class="category">
        <div class="category-head"><h3>${c.name}</h3><span class="category-tone">${c.tone}</span></div>
        <ul>${c.prompts.map((p) => `<li>“${p}”</li>`).join('')}</ul>
      </article>`)
    .join('');

  document.querySelector('#reviews-grid').innerHTML = testimonials
    .map((t) => `<figure class="review"><blockquote>“${t.quote}”</blockquote><figcaption><strong>${t.name}</strong>${t.role}</figcaption></figure>`)
    .join('');

  document.querySelector('#preview-grid').innerHTML = previews
    .map(([title, line]) => `<div class="preview"><p class="eyebrow">Preview</p><h3>${title}</h3><p class="body-text">${line}</p></div>`)
    .join('');
}

render();
