/* =============================================
   💗 SWETA'S HAPPY PLACE — SCRIPT.JS 💗
   ============================================= */

'use strict';

// =============================================
// DATA — Smile Messages (flirty for girlfriend)
// =============================================
const smileMessages = [
  "Breaking News:\nSweta has once again been detected being dangerously beautiful.",
  "Scientists confirm:\nSweta improves every room she enters — and every heart she touches.",
  "Warning ⚠️\nExcessive Sweta-ness may cause uncontrollable feelings of love.",
  "Congratulations!\nYou have successfully made your boyfriend smile just by existing.",
  "Fun Fact:\nIce cream tastes better when Sweta eats it. And everything tastes better next to her.",
  "Sweta has been promoted to:\nChief Executive Officer of Stealing Varun's Heart.",
  "Alert:\nSweta's smile is classified as a national treasure — and Varun's personal weakness.",
  "Official Report:\nEveryone who sees Sweta immediately becomes 47% happier. Varun becomes 1000% happier.",
  "Hot Take:\nThe sun rises just to see what Sweta is wearing today.",
  "Did you know?\nSweta was voted 'Most Likely to Make Varun Forget What He Was Saying' by the universe.",
  "Plot Twist:\nThe butterflies in Varun's stomach were inside Sweta all along.",
  "Exclusive:\nSweta smiled today and Varun's heart skipped approximately 3 beats.",
  "Newsflash:\nBeing this beautiful is apparently legal. Sweta is proof.",
  "Certified Fact:\nSweta's laugh could cure Varun's bad days. And it does. Every time.",
  "Scientists baffled:\nSweta somehow gets more stunning every single day.",
  "ANNOUNCEMENT:\nSweta has officially unlocked the 'Has Varun Completely Wrapped Around Her Finger' achievement.",
  "Fun Fact:\nEverything looks better when Sweta is in it.",
  "Weather Report:\nExpect sunshine, warmth, and 100% chance of Varun being in love wherever Sweta goes today.",
  "Reminder:\nSweta once walked into a room and Varun forgot every word he knew.",
  "Breaking:\nSweta is the reason love songs make sense.",
  "Studies show:\nPeople smile more within 5 minutes of talking to Sweta. Varun smiles permanently.",
  "Official Decree:\nSweta's good energy is a renewable resource. Her beauty is timeless.",
  "The universe confirms:\nPutting Sweta anywhere immediately makes it better.",
  "Daily Reminder:\nSweta is doing better than she thinks. And she's loved more than she knows.",
  "Confidential Memo:\nThe stars arranged themselves differently just for Sweta. Varun noticed.",
  "Report Card:\nSweta gets an A+ in being herself — which is the most wonderful subject.",
  "Toast:\nTo Sweta — may your chai always be perfect and your WiFi always strong.",
  "Fun Fact:\nSweta's presence alone has been shown to reduce Varun's stress by 100%.",
  "Exclusive Interview:\nThe moon said Sweta is her favourite. Varun agrees wholeheartedly.",
  "Sports Update:\nSweta wins gold in the category of making Varun feel like the luckiest guy alive.",
  "Did you know?\nWhenever Sweta laughs, Varun falls a little more in love.",
  "From the desk of the universe:\nYou, Sweta, are one of the better decisions I made.",
  "Forecast:\n100% chance of charm and beauty wherever Sweta goes today.",
  "Breaking:\nSweta spotted being incredible again. Fourth time this week. New record.",
  "Public Announcement:\nSweta is the kind of person love stories get written about.",
  "Fact Check: TRUE\nSweta is too precious for the bad days she sometimes has.",
  "Hot News:\nScientists discovered that Sweta's smile contains actual stardust.",
  "Certified:\nSweta's kindness has made more people feel better than she will ever know.",
  "Alert Level: MAX\nDangerous levels of adorable detected. Source: Sweta.",
  "Fun Fact:\nIf Sweta were a song, she would be Varun's favourite song. She already is.",
  "OFFICIAL NOTICE:\nSweta is hereby declared a Permanent Vibe Improvement Zone.",
  "Trending:\n#SwetaIsLiterallySoPerfect is breaking the internet again.",
  "The jury has returned:\nVerdict — Sweta is the best, your honour. And Varun's too.",
  "Weather Advisory:\nSweta's energy is expected to cause spontaneous joy and heart eyes.",
  "Did you know?\nSweta has accidentally made Varun smile at his phone 47 times today.",
  "Important Reminder:\nSweta being sad is not allowed. Universe's rules. Varun's rules. Sorry.",
  "Late-Breaking Story:\nSweta is exactly who she's supposed to be — and Varun loves every part.",
  "Update:\nThe ice cream you're about to eat is going to be amazing. Everything is when you're here.",
  "Exclusive:\nSweta's happiness is a priority. Not a maybe. A priority. Varun's top priority.",
  "Final Report:\nSweta is loved more than she will ever fully know. Especially by one particular guy.",
  "BONUS ALERT:\nYou opened this website. That means Varun loves you more than words can say. Which is a lot."
];

// =============================================
// DATA — Compliments (flirty + sweet)
// =============================================
const compliments = [
  "Your smile should be illegal for what it does to Varun's heart.",
  "You make ordinary days feel like the best days of my life.",
  "You're basically a limited edition. There's only one Sweta — and I got lucky.",
  "The stars filed a complaint because you're stealing their sparkle.",
  "Sweta is proof that good things genuinely exist.",
  "You have the kind of laugh that makes Varun forget everything else.",
  "You are a walking, talking reminder that the best things are real.",
  "Being around you feels like a warm Sunday morning — my favourite feeling.",
  "You light up every room without even trying. You light up my world all the time.",
  "Your heart is one of the most beautiful things about you.",
  "You make everything around you better just by existing. Including me.",
  "You're the kind of person who makes someone feel chosen every single day.",
  "Your presence is a gift I didn't deserve but I'm endlessly grateful for.",
  "You are someone's favourite reason to smile — and that someone is Varun.",
  "You have a rare kind of warmth that very few people carry.",
  "Even on your bad days, you're still the most beautiful thing in my world.",
  "You are worthy of every good thing coming your way.",
  "The world is measurably better because you're in it.",
  "You make me feel seen. That's incredibly rare and incredibly you.",
  "You have the ability to turn difficult moments into bearable ones — just by being there.",
  "Your energy is magnetic. I am one hundred percent a victim of it.",
  "You're braver than you believe and more beautiful than you see.",
  "The kindness you give out comes back to you — I'm living proof.",
  "You are absolutely, undeniably enough. And more than enough for me.",
  "You carry yourself with a grace you probably don't notice. I notice everything.",
  "You're genuinely one of a kind — there's no one else like Sweta.",
  "The good you put into the world matters more than you know.",
  "Your voice matters. What you think matters. You matter — to everyone, and especially to me.",
  "You have a depth to you that's rare and beautiful and endlessly interesting.",
  "You make me feel comfortable just by being around. That's your superpower.",
  "Your instincts are good. Trust them more. Especially the ones about us.",
  "You've grown more than you give yourself credit for.",
  "You're someone I feel unbelievably lucky to have in my corner.",
  "You're allowed to take up space and shine brightly. Please never stop.",
  "Even your quiet moments are full of meaning.",
  "Your resilience is something to be in awe of.",
  "You are more than the hard days make you feel.",
  "You deserve the same kindness you give to others — and then some.",
  "You're soft AND strong — that's the most beautiful combination.",
  "Your style? Impeccable. Your vibe? Unmatched. My feelings for you? Indescribable.",
  "You have that rare thing: genuine warmth that makes people feel safe.",
  "You're a safe space for people — and the most beautiful one for me.",
  "You inspire me every day without even knowing it.",
  "Your laugh is genuinely contagious and genuinely my favourite sound.",
  "You're the kind of girlfriend everyone wishes they had. I actually have you.",
  "You find beauty in small things and that says everything about you.",
  "Your good qualities run so much deeper than the surface.",
  "You are exactly the kind of person this world needs more of.",
  "You're someone worth knowing, Sweta. Truly worth loving.",
  "You're blooming even when you don't feel like it.",
  "You make everything you touch a little more beautiful. You made me better.",
  "You're not just surviving — you're doing more than you think.",
  "Your potential is vast and still unfolding and I can't wait to watch.",
  "You are remarkable in ways you haven't discovered yet.",
  "You deserve a whole book written about how wonderful you are.",
  "Your authenticity is the best thing about you.",
  "You are soft, strong, and spectacular.",
  "Even the universe is rooting for you, Sweta.",
  "You have a gift for making people feel at home — you are home to me.",
  "Your dreams are valid. So valid. And I believe in all of them.",
  "You're the main character and you don't even know it. I'm just happy to be in your story.",
  "You make the world gentler just by being in it.",
  "You're smarter than you think on the hard days.",
  "Your heart is incredibly kind. Don't ever let anyone dull it.",
  "You glow differently on the days you're yourself.",
  "You were made for great things, Sweta. Watch.",
  "You radiate something special that can't be faked and can't be forgotten.",
  "You are exactly enough. Always have been. Always will be.",
  "You carry a light inside you that doesn't go out — even on hard nights.",
  "Your growth is real, even when it's invisible.",
  "You are someone worth celebrating today and every day.",
  "You bring out the best in people around you — especially in me.",
  "You're endlessly interesting if people take the time to notice.",
  "You handle things with a grace that's worth admiring.",
  "You are spectacular when you let yourself be.",
  "Your good days prove what you're capable of. Remember them on the hard ones.",
  "You make difficult things look easier than they are.",
  "There is magic in you, Sweta. Genuine, undeniable magic.",
  "You're the kind of human that restores faith in everything.",
  "You are appreciated more than you know.",
  "Your flaws don't cancel your greatness — they're part of what makes you real.",
  "You have a warmth that I want to be near, always.",
  "You're doing hard things and that deserves recognition.",
  "You have everything it takes to keep going. And I'll be right here.",
  "You matter to more people than you realize — most of all to me.",
  "You're a genuinely beautiful human being, inside and out.",
  "Whoever gets your time and energy is very lucky. I know I am.",
  "You make hope feel possible when you walk into a room.",
  "You're creative, capable, and completely wonderful.",
  "You're not behind. You're on your own timeline and it's perfect.",
  "You are loved. Not for what you do — just for being you.",
  "You deserve softness, kindness, and all good things. Including me, I hope.",
  "You're more magnificent than any bad day has ever made you feel.",
  "You are the reason someone out there smiled today — that someone is Varun.",
  "You are a whole universe in one person, Sweta.",
  "Today, and every day — you are more than enough.",
  "You are adored. Deeply, completely adored. Just so you know.",
  "You are Sweta. And that alone is extraordinary."
];

// =============================================
// DATA — Jokes by Category
// =============================================
const jokes = {
  joke: [
    "Why did Sweta bring a ladder to the party?\nBecause she heard the drinks were on the house.",
    "Sweta: I'm not like other people.\nVarun: I know. You're better. Much better.",
    "Why did the calendar blush?\nBecause Sweta marked it as 'Best Day Ever' three times — and it was.",
    "What do you call Sweta who's also amazing?\nJust Sweta. That covers everything.",
    "Sweta walked into a library and asked for books about paranoia.\nLibrarian: They're right behind you.\nSweta: Perfect.",
    "Why did the sun go to therapy?\nBecause it kept comparing itself to Sweta's smile and lost.",
    "Sweta typed 'Who is the most beautiful person alive?' into Google.\nGoogle said: 'Did you mean yourself?'",
    "Why can't Sweta play hide and seek?\nBecause Varun would never stop looking.",
    "Sweta walked past a mirror and the mirror said 'omg, same.'\nVarun: Same.",
    "The WiFi password changed to 'SwetaIsEverything' and Varun memorised it instantly.",
    "Knock knock.\nWho's there?\nVarun's heart.\nVarun's heart who?\nVarun's heart, hopelessly in love with Sweta.",
    "Why did the cookie cry?\nBecause Sweta ate all the ice cream first. Legendary move.",
    "Sweta tried to write her flaws list.\nShe ran out of paper because she kept writing 'none'.",
    "Doctor: I have good news and better news.\nSweta: What's the good news?\nDoctor: The better news is Varun is absolutely whipped for you. Medically verified.",
    "Sweta's horoscope today: 'Varun is going to look at you like you hung the moon.'\nEvery horoscope. Every day. No exceptions.",
    "Why did the moon apply for a job?\nBecause it wanted to be as impressive as Sweta.",
    "Sweta opened a fortune cookie.\nIt said: 'Congratulations on having the best boyfriend.'\nSweta: Debatable.\nCookie: Nope.",
  ],
  icecream: [
    "EMERGENCY PROTOCOL ACTIVATED:\nProceed immediately to nearest ice cream source.\nVarun's treat.",
    "Doctor's Orders:\nYou are legally required to eat ice cream at least once today.\nPrescription signed: Dr. Varun (of Love).",
    "Scientists discover:\nIce cream consumed while thinking of someone you love makes it 200% better.\nSweta qualifies.",
    "Breaking: Ice cream shortage reported.\nCause: Sweta keeps being too cute and the universe compensates automatically.",
    "Ice Cream Flavour Recommendation for Today:\nWhatever you want. You deserve it. Varun will order for you.",
    "The ice cream said:\n'I was waiting for you, Sweta.'\nVarun has been saying the same thing.",
    "Official Notice:\nThe ice cream aisle has been renamed 'Sweta's section' effective immediately.",
    "Fun Fact:\nIce cream tastes 47% better when shared with someone who loves you.\nVarun's always available.",
    "Diagnosis: Low ice cream levels.\nPrescription: One scoop minimum. Varun's company mandatory.",
    "The committee has reviewed your week.\nRecommendation: Extra scoop. With sprinkles. Varun's paying. Non-negotiable.",
  ],
  confidence: [
    "If confidence were money,\nSweta would own three countries and Varun's entire heart.",
    "Reminder:\nYou are legally and cosmically required to be confident today.",
    "The FBI called.\nThey want to know how Sweta keeps being this breathtaking.\nShe declined to comment.",
    "Breaking News:\nSweta spotted being iconic again. Varun: 'Literally every day.'",
    "Sweta walked into a room.\nThe room straightened up and tried to look nice.",
    "Mirror: You look incredible.\nSweta: I know.\nMirror: She gets it.\nVarun: I've been saying this.",
    "Sweta's confidence level today: ████████████ 100%\nVarun's love level today: ████████████ ∞",
    "The vibe check results are in:\nSweta: Immaculate, as always.",
    "Today's power level: Over 9000.\nSource: Sweta being Sweta.",
    "You are the energy you've been looking for.\nAnd you've had it the whole time. Varun saw it first.",
    "Style check: Passed.\nVibe check: Passed.\nHaving Varun's heart check: Eternally passed.",
  ],
  chaos: [
    "CHAOS MODE ACTIVATED:\nAnything is possible.\nSweta is leading the charge.",
    "Chaotic good:\nSweta, eating ice cream at midnight, not caring, thriving — and Varun watching adoringly.",
    "Fun chaos idea:\nText Varun something sweet today.\nWatch him become 300% happier.",
    "Today's mission:\nDo one thing that makes you laugh. Anything counts.",
    "Chaotic affirmation:\nYou are wonderful in the best way.\nFree. Real. Sweta.",
    "Breaking: Sweta has decided to have a good day.\nThe universe has no choice but to comply.\nNeither does Varun.",
    "Plot Twist:\nThe chaotic thing you're considering? Do it.\n(The ice cream one, obviously.)",
    "Chaos tip:\nPlay your favourite song at full volume.\nImmediately 200% better.",
    "Emergency Chaos Protocol:\nLaugh at something tiny.\nText Varun a meme.\nCarry on.",
    "Did you know?\nBeing a little chaotic and a lot wonderful is Sweta's entire brand. Varun loves it.",
    "Chaotic Sweta energy:\nShe showed up. She was herself. Everyone was better for it — especially Varun.",
  ],
  laugh: [
    "Ha.\nHa ha.\nHa ha ha.\nOkay you're laughing now. Varun heard it from here.",
    "This is your sign to think about something funny from last year and laugh again.",
    "Remember that one time something ridiculous happened?\nYep. Still funny.",
    "The giggle is incoming.\n3... 2... 1... there it is.\nVarun can picture it perfectly.",
    "Fun exercise:\nTry to keep a straight face while saying 'banana' five times fast.",
    "Plot Twist:\nYou already look incredibly cute when you laugh.\nSo you might as well laugh more.",
    "Science has confirmed:\nSweta's laugh makes everything better.\nPlease deploy it liberally.",
    "Breaking: Sweta laughed.\nVarun forgot what he was doing and just smiled for five minutes.",
    "This is your official laugh prescription for today.\nDoctor Varun's orders. No skipping.",
    "If your laugh were a song, it would be Varun's most-played song.\nFact.",
  ]
};

// =============================================
// DATA — Happy Jar Notes
// =============================================
const happyNotes = [
  "Someone is smiling because of you. Right now. His name is Varun.",
  "Drink water. You are mostly water. Be kind to yourself.",
  "Take a deep breath. In. Hold. Out. Better.",
  "You are doing better than you think.",
  "Today is proud of you.",
  "Rest is not laziness. It's self-respect.",
  "You have survived 100% of your hard days.",
  "Something wonderful is on its way to you.",
  "You are exactly where you need to be.",
  "One good thing: you opened this jar — and Varun made it for you.",
  "You deserve softness today.",
  "Your vibe is magnetic today. It always is.",
  "Check in with yourself: are you okay? If not, Varun wants to know.",
  "You made someone feel loved this week. You don't know it, but you did.",
  "Progress doesn't have to be dramatic to be real.",
  "You are more than what you produce.",
  "Take a break if you need one. The work will wait.",
  "The flowers are growing because you water them. You do the same.",
  "Someone out there thinks you're wonderful. That someone is Varun.",
  "You don't have to have it all figured out today.",
  "Your feelings are valid. All of them.",
  "You've been kind today, even when it was hard.",
  "Give yourself the same grace you give to others.",
  "Your story isn't over. This is still the beautiful middle part.",
  "You are the main character. Act like it. Varun agrees.",
  "Stretch. Your body deserves five minutes.",
  "You've outgrown things you used to think you couldn't live without. Growth.",
  "The sky is doing something beautiful right now. Look up.",
  "Eat something that makes you happy today. Varun will join you.",
  "You are a good person. Not perfect — good. That's better.",
  "You helped someone without realising it this week.",
  "Today you are allowed to just be.",
  "Put on your favourite song. Right now.",
  "You are not a burden. You are a gift. Varun's favourite gift.",
  "Small joys are still joys.",
  "You are building something, even when it doesn't feel like it.",
  "You are loved — not for what you do, just for being you.",
  "It's okay to start over. It's okay to start small.",
  "The version of you reading this deserves kindness.",
  "You made it to another day. That counts. Varun is glad you're here.",
  "You are resilient. Not because you don't feel things — because you do.",
  "You belong in the rooms you walk into.",
  "Something today will surprise you in a good way.",
  "Breathe. You're still here. That's enough.",
  "You've made peace with things that would have broken you before. See that.",
  "You are someone's safe person. Varun's, especially.",
  "Drink your water. Eat your snack. You're doing great.",
  "Today: be gentle with yourself first.",
  "Your presence alone changes the energy of a room.",
  "Wherever you are, you belong there.",
  "You are worthy of rest without earning it.",
  "Not every day will be good — but there is good in every day.",
  "You're growing in ways you can't see yet.",
  "One step at a time is still moving forward.",
  "You are not your productivity.",
  "Someone thought of you warmly today. Varun thinks of you constantly.",
  "You have handled harder things than this. Remember that.",
  "Your heart is good. Keep it that way.",
  "The universe is quietly rooting for you. So is Varun. Loudly.",
  "You matter beyond what you can measure.",
  "Rest your eyes. You've been looking at screens too long.",
  "You are enough, right now, exactly as you are.",
  "Celebrate the small wins. They add up.",
  "Take the long route home sometimes. Notice things.",
  "You didn't give up when it was hard. Quietly proud of you.",
  "You are allowed to be happy, Sweta.",
  "Ask for help if you need it. That's strength. Varun is always here.",
  "Your bad days don't cancel your good ones.",
  "Something that worries you now will seem smaller soon.",
  "You are exactly who someone needed today.",
  "Put your phone down for five minutes. Unless you're texting Varun. That's allowed.",
  "You've been working hard. You deserve a moment.",
  "The kindness you give comes back to you.",
  "You are more capable than your worst anxiety tells you.",
  "You have arrived at today. That's the whole job.",
  "You are a living, breathing good thing.",
  "Today: notice one beautiful thing you'd normally walk past.",
  "Your softness is not weakness. It is a form of courage.",
  "Someone's favourite memory involves you. Varun has many of them.",
  "You have changed for the better.",
  "Be patient with yourself. You're learning.",
  "You are not running out of time. You are on your timeline.",
  "The hard moment will pass. It always does.",
  "You are rare, Sweta. Actually rare.",
  "You show up for people. That matters enormously.",
  "Notice how far you've already come.",
  "Today you don't have to be extraordinary. Just you — that's already extraordinary.",
  "You are cared about. More than you know.",
  "All your feelings make sense. Let them through.",
  "Even on the heavy days — you are still luminous.",
  "You are worthy of love and belonging. Always.",
  "Today holds something good for you. Keep your eyes open.",
  "You are part of why the world is a gentler place.",
  "Something beautiful will come from this season of your life.",
  "You are held, even when it doesn't feel like it. Varun's got you.",
  "You are treasured. You are loved. You are Sweta.",
  "You are the sunshine Varun has been waiting for.",
  "Come back here whenever you need to. This jar is always full — just like Varun's heart."
];

// =============================================
// DATA — Daily Quotes (flirty & romantic)
// =============================================
const dailyQuotes = [
  "She remembered who she was and the game changed.",
  "In a world full of people, I'd still choose you every time.",
  "She is both hellfire and holy water — and I'm completely gone for her.",
  "You are the universe experiencing itself — and I'm the luckiest part of it.",
  "Do it with passion or not at all.",
  "She turned her can'ts into cans and her dreams into plans. I was watching the whole time.",
  "She was chaos and beauty intertwined — and I love every part.",
  "I didn't know what I was looking for until I found you.",
  "Make it happen. Shock everyone — you already shocked me.",
  "You attract what you are. You attracted someone hopelessly in love with you.",
  "Beautiful things don't ask for attention — but I can't look away.",
  "She believed she could, so she did. And I believed in her before she did.",
  "You are the magic you're looking for.",
  "Life is tough, my darling — but so are you. And I'll be right here.",
  "Stay close to anything that makes you glad you're alive. I hope that includes me.",
  "Bloom where you are planted — you've bloomed into something extraordinary.",
  "She remembered her worth and everything shifted.",
  "I could search my whole life and never find someone like you.",
  "You are my favourite distraction, my best decision.",
  "She was never looking for a hero — she was busy being one."
];

// =============================================
// UTILITY FUNCTIONS
// =============================================
function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showMsg(el, text) {
  el.classList.remove('visible');
  setTimeout(() => {
    el.innerHTML = text.replace(/\n/g, '<br>');
    el.classList.add('visible');
  }, 200);
}

// =============================================
// PAGE NAVIGATION
// =============================================
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + name);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Close mobile nav
  document.getElementById('nav-links').classList.remove('open');

  // Page-specific init
  if (name === 'final') initFinalHearts();
  if (name === 'beauty') initMoonParticles();
  if (name === 'certificate') initCertParticles();
}

// Mobile nav toggle
document.getElementById('nav-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

// =============================================
// PAGE 2 — SMILE & SURPRISE
// =============================================
function getSmile() {
  const el = document.getElementById('smile-msg');
  showMsg(el, rand(smileMessages));
  const photos = ['sweta1.jpg', 'sweta2.jpg', 'sweta3.jpg', 'sweta4.jpg'];
  document.getElementById('smile-photo').src = rand(photos);
  spawnHeartBurst();
}

function surpriseMe() {
  const all = [...smileMessages, ...compliments, ...happyNotes];
  const el = document.getElementById('surprise-msg');
  showMsg(el, rand(all));
}

function moodBooster() {
  const boosts = [
    "🌈 Your mood just levelled up. Varun's too.",
    "🎵 Play your favourite song right now. Do it.",
    "🌸 Look up from the screen. Notice something beautiful.",
    "☀️ The sun is technically out there for you.",
    "💃 Give yourself a 10-second dance break. You earned it.",
    "🍦 Ice cream. Varun's buying.",
    "🫂 You deserve a hug. Varun has one ready.",
    "✨ Close your eyes, breathe deep. Open them — you're still amazing.",
    "🌺 One good thing: you exist. That alone is enough. Especially for Varun.",
    "🎉 Celebrate yourself. Right now. For no reason. Varun does it constantly.",
  ];
  const el = document.getElementById('surprise-msg');
  showMsg(el, rand(boosts));
}

// =============================================
// PAGE 3 — COMPLIMENTS
// =============================================
function getCompliment() {
  const el = document.getElementById('compliment-display');
  const c = rand(compliments);
  el.style.opacity = 0;
  setTimeout(() => {
    el.innerHTML = c;
    el.style.opacity = 1;
  }, 300);
  spawnHeartBurst();
}

// =============================================
// PAGE 4 — LAUGH LAB
// =============================================
function getJoke(type) {
  const el = document.getElementById('joke-display');
  el.classList.remove('visible');
  const pool = jokes[type] || jokes.joke;
  setTimeout(() => {
    el.innerHTML = rand(pool).replace(/\n/g, '<br>');
    el.classList.add('visible');
  }, 200);
}

// =============================================
// PAGE 5 — CERTIFICATE
// =============================================
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colours = ['#f9a8d4','#ff80b5','#ffb6c1','#ff69b4','#ffd700','#ff6fa8','#c4b5fd','#fff'];
  const shapes = ['circle', 'rect', 'heart'];

  for (let i = 0; i < 220; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 10 + 5,
      colour: rand(colours),
      shape: rand(shapes),
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 5 + 2,
      rot: Math.random() * Math.PI * 2,
      rotV: (Math.random() - 0.5) * 0.15,
      alpha: 1
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotV;
      if (frame > 120) p.alpha -= 0.012;
      ctx.save();
      ctx.globalAlpha = Math.max(p.alpha, 0);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.colour;
      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'rect') {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else {
        ctx.font = `${p.w * 1.5}px serif`;
        ctx.fillText('💗', -p.w / 2, p.h / 2);
      }
      ctx.restore();
    });
    frame++;
    if (frame < 200) requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); }
  }
  draw();
}

function initCertParticles() {
  const container = document.getElementById('cert-particles');
  if (!container) return;
  container.innerHTML = '';
  const symbols = ['💗', '✦', '✧', '⋆', '★', '✨', '💕'];
  for (let i = 0; i < 24; i++) {
    const p = document.createElement('div');
    p.className = 'floater';
    p.textContent = rand(symbols);
    p.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      font-size:${Math.random()*0.8+0.6}rem;
      color:rgba(255,128,181,${Math.random()*0.5+0.3});
      animation-duration:${Math.random()*5+4}s;
      animation-delay:${Math.random()*4}s;
      position:absolute;
    `;
    container.appendChild(p);
  }
}

// =============================================
// PAGE 9 — SECRET
// =============================================
function triggerSecret() {
  launchConfetti();

  const btn = document.getElementById('secret-btn');
  btn.disabled = true;
  btn.textContent = '💗 UNLOCKED! 💗';
  btn.style.background = 'linear-gradient(135deg,#ff80b5,#ff69b4)';

  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 700);

  spawnHeartBurst(40);

  const result = document.getElementById('secret-result');
  const achieves = [
    '💗 Has Varun Completely Whipped',
    '✨ Certified Girlfriend of the Year',
    '👑 Queen Status: Confirmed',
    '🍦 Ice Cream Certified',
    '💫 Walking Serotonin Boost'
  ];

  result.innerHTML = '<div style="font-size:2rem;font-family:\'Dancing Script\',cursive;color:#ff80b5;text-shadow:0 0 20px rgba(255,128,181,.8)">SWETA PREMIUM EDITION UNLOCKED 💗</div>';

  const achDiv = document.createElement('div');
  achDiv.className = 'achievements';
  achieves.forEach((a, i) => {
    setTimeout(() => {
      const span = document.createElement('div');
      span.className = 'achievement';
      span.style.animationDelay = `${i * 0.15}s`;
      span.textContent = a;
      achDiv.appendChild(span);
    }, 400 + i * 200);
  });
  result.appendChild(achDiv);
}

// =============================================
// PAGE 10 — HAPPY JAR
// =============================================
function openJar() {
  const lid = document.getElementById('jar-lid');
  const note = document.getElementById('jar-note');

  lid.style.transform = 'translateY(-20px) rotate(30deg)';
  lid.style.transition = 'all .4s ease';

  setTimeout(() => {
    note.classList.remove('visible');
    setTimeout(() => {
      note.textContent = rand(happyNotes);
      note.classList.add('visible');
    }, 300);
    lid.style.transform = '';
  }, 600);

  spawnHeartBurst(8);
}

// =============================================
// FINAL PAGE — HEARTS
// =============================================
function initFinalHearts() {
  const container = document.getElementById('final-hearts');
  if (!container) return;
  container.innerHTML = '';
  const hearts = ['❤️','💗','💕','💖','💝','💓','💞','🌸','✨','💫'];
  for (let i = 0; i < 35; i++) {
    const h = document.createElement('div');
    h.className = 'final-heart';
    h.textContent = rand(hearts);
    h.style.cssText = `
      left:${Math.random()*100}%;
      font-size:${Math.random()*1.5+0.8}rem;
      animation-duration:${Math.random()*8+6}s;
      animation-delay:${Math.random()*8}s;
    `;
    container.appendChild(h);
  }
}

// =============================================
// BEAUTY PAGE — MOON PARTICLES
// =============================================
function initMoonParticles() {
  const container = document.getElementById('moon-particles');
  if (!container) return;
  container.innerHTML = '';
  const symbols = ['🌙','⭐','✨','💫','🌟','💗','·','✦'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'moon-particle';
    p.textContent = rand(symbols);
    p.style.cssText = `
      left:${Math.random()*100}%;
      font-size:${Math.random()*1.2+0.6}rem;
      animation-duration:${Math.random()*10+8}s;
      animation-delay:${Math.random()*10}s;
    `;
    container.appendChild(p);
  }
}

// =============================================
// BACKGROUND FLOATING ELEMENTS (pink theme)
// =============================================
function initBgElements() {
  const container = document.getElementById('bg-elements');
  const elements = [
    { symbol: '💗', count: 18, cls: '' },
    { symbol: '✨', count: 18, cls: '' },
    { symbol: '🌸', count: 15, cls: '' },
    { symbol: '💕', count: 12, cls: '' },
    { symbol: '⭐', count: 10, cls: '' },
    { symbol: '💫', count: 8, cls: '' },
    { symbol: '🌹', count: 8, cls: '' },
    { symbol: '💖', count: 10, cls: '' },
  ];

  elements.forEach(({ symbol, count, cls }) => {
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = `floater ${cls}`;
      el.textContent = symbol;
      el.style.cssText = `
        left: ${Math.random() * 100}%;
        font-size: ${Math.random() * 1.2 + 0.8}rem;
        animation-duration: ${Math.random() * 12 + 10}s;
        animation-delay: ${Math.random() * 15}s;
      `;
      container.appendChild(el);
    }
  });
}

// =============================================
// HEART BURST EFFECT
// =============================================
function spawnHeartBurst(count = 20) {
  const hearts = ['❤️','💗','💕','💖','💝','✨','💫','🌸','💓'];
  for (let i = 0; i < count; i++) {
    const h = document.createElement('div');
    h.textContent = rand(hearts);
    const x = 20 + Math.random() * 60;
    const y = 20 + Math.random() * 60;
    h.style.cssText = `
      position:fixed;
      left:${x}vw;
      top:${y}vh;
      font-size:${Math.random()*1.5+1}rem;
      pointer-events:none;
      z-index:5000;
      animation: heartBurstAnim ${Math.random()*1.5+1}s ease forwards;
    `;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 2500);
  }
}

// =============================================
// SLIDESHOW — PAGE 1 (4 images)
// =============================================
function initSlideshow() {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
}

// =============================================
// DAILY BITS (seeded by date)
// =============================================
function initDailyBits() {
  const today = new Date().toDateString();
  let seed = 0;
  for (const ch of today) seed += ch.charCodeAt(0);

  const ci = seed % compliments.length;
  const ji = (seed * 3) % jokes.joke.length;
  const qi = (seed * 7) % dailyQuotes.length;

  const dcEl = document.getElementById('daily-compliment');
  const djEl = document.getElementById('daily-joke');
  const dqEl = document.getElementById('daily-quote');

  if (dcEl) dcEl.textContent = compliments[ci];
  if (djEl) djEl.textContent = jokes.joke[ji].replace(/\n/g, ' ');
  if (dqEl) dqEl.textContent = dailyQuotes[qi];
}

// =============================================
// INJECT HEART BURST KEYFRAME
// =============================================
function injectKeyframes() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes heartBurstAnim {
      0%   { transform: translate(0,0) scale(0.5); opacity: 1; }
      50%  { opacity: 1; }
      100% { transform: translate(${Math.random()>0.5?'':'-'}${Math.random()*100+50}px, -${Math.random()*120+60}px) scale(1.4); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  injectKeyframes();
  initBgElements();
  initSlideshow();
  initDailyBits();
  showPage('welcome');
});
