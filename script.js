/* =============================================
   💗 SWETA'S HAPPY PLACE — SCRIPT.JS 💗
   ============================================= */

'use strict';

// =============================================
// DATA — Smile Messages (simple, cute, Telugu refs)
// =============================================
const smileMessages = [
  "Nee smile chuste\nVarun ki world anni set ayipothundi. 🌸",
  "Fun fact:\nSweta walk chestunte everyone becomes happy automatically. Science.",
  "Ee moment lo\nTelangana lo okadu chala happy ga unnadu. Varun. 💗",
  "Nee valla ice cream kuda\ninkaa tasty ga untundi. How??",
  "Alert 🚨\nSweta is being adorable again.\nThis is not new but still very impressive.",
  "Breaking news:\nNee laugh vinyagane bad mood pothundi.\nScience confirm chesindi.",
  "Sweta spotted today:\nBeing absolutely wonderful.\nAs usual.",
  "Today's forecast:\nSunshine, good vibes,\nand Sweta being too cute to handle. ☀️",
  "Nee exist avvadam alone\nchala people ki happy feeling istundi.\nVarun ki extra. 💗",
  "Certified:\nSweta's smile has stardust in it.\nResearch ongoing. Varun is the researcher.",
  "Oka secret cheppala?\nNee happy ga untavani\nuniverseye wait chestundi. 🌙",
  "Report card:\nBeing yourself — A+\nBeing wonderful — A+\nBeing Sweta — Priceless.",
  "Ee world lo\nchala people unnaru.\nKani nee laanti Sweta okkatే unnaru. 💗",
  "Chai hot ga undo?\nWiFi strong ga undo?\nSweta happy ga undaali. That's all.\nUniverse ki orders iyyabadindi. ✅",
  "Sweta's energy today:\nChala good.\nVarun's energy today:\nSweta chusaka — chala better. 😄",
  "Nee valla\northers ki automatically smile vastundi.\nNee ki telusa? 🌸",
  "Ee universe lo\nnee existence oka gift.\nReturn policy ledu. Forever valid. 💗",
  "You are not just okay Sweta.\nYou are really really good.\nTeliyada neeku? ✨",
  "Chand stars anni unnay,\nkani moon matram earth ni choose chesadu.\nEarth nuvve Sweta. 🌙",
  "Nee oka room lo ki vachinappudu\naa room better aipothundi.\nIthi facts. 💕",
  "Weekly report:\nSweta being amazing — ✅ every day\nVarun noticing — ✅ every single time.",
  "Fun fact:\nNee valla Varun ki\nbad days chala takkuva ga untayi. 💗",
  "Universe memo:\nSweta deserves all good things.\nNo exceptions. Ever.",
  "Ice cream chustunte\nnee face remind avutundi.\nBoth are perfect, both make everything better. 🍦",
  "Ee message chадіante\nRemember: nuvvu chala chala valuable.\nValuable kanna kuda ekkuva. 💗",
  "Sweta is the kind of person\npeople feel lucky to know.\nVarun knows this very well. 🌸",
  "Neeku stress unte\nthoda tini,\nthoda rest chey,\nnee ki world wait chestundi. 💕",
  "Today's vibe:\nSweta — immaculate.\nAs always. No notes. ✨",
  "Stars choostu Sweta ki jealous avutunnay\nbecause she shines more. 💫",
  "Smile chey Sweta.\nNee smile chuste\nVarun ki oka complete day set avutundi. 💗"
];

// =============================================
// DATA — Compliments (simple + cute + Telugu mix)
// =============================================
const compliments = [
"Nuvvu cute ga undadam hobby aa leka full-time profession aa? 😏💗",
"Sweta online vachindi. Varun productivity offline aipoyindi. 📱💀",
"Nee smile ki GST padali. Happiness tax collect chestundi. 😭💗",
"Nee DP marchina prati sari nation wants to know. 😤💗",
"Nee smile chuste brain screenshot teesukovali anipistundi. 📸💗",

  "Nee smile chala powerful.\nIt fixes things without even trying. 💗",
  "You are so easy to be around Sweta.\nChala rare quality that. 🌸",
  "Nee kindness chala real ga untundi.\nFake ledu, forced ledu — just you. ✨",
  "Nee valla people feel chestaru\nthat someone gets them.\nThat's a big deal. 💕",
  "You make difficult days feel a little lighter.\nJust by being you. 🌸",
  "Nee laugh world ki best sound.\nScientifically unproven but emotionally 100% true. 😄",
  "Chala people around unnaru,\nkani nee laanti Sweta okkatē unnaru. 💗",
  "Nee heart chala good Sweta.\nProtect it. But also know it is seen. 🌷",
  "You notice small things about people.\nThat makes you very special. 💛",
  "Nee presence alone\nroom ki different feel vastundi.\nIt's you. It's always been you. ✨",
  "You are soft and strong at the same time.\nChala beautiful combination that. 💗",
  "Nee valla people feel chestaru\nthat they matter.\nMeaning? Nuvvu chala matter avutaav. 🌸",
  "You carry yourself with a grace\nneeku teliyadhu kani\northers ki chala obvious ga kanipisthundi. 💕",
  "Nee style — top.\nNee vibe — unmatched.\nNee heart — best of all. 💗",
  "Bad day lo kuda\nnuvvu best version of yourself nivu.\nNuvvu feel cheyakpoyina kuda. 🌷",
  "Nee exist avatam\nuniverseకి chala good decision. Return cheyyaledu. ✨",
  "You're not behind in life Sweta.\nNuvvu nee own time lo unnav.\nAdi perfect. 💗",
  "Nee growth kanipiyakpoyina kuda real ga undi.\nVarun chustunnadu. 🌸",
  "People feel safe around you.\nThats not small thing — that's everything. 💕",
  "Nee thoughts matter.\nNee feelings matter.\nNuvvu matter avutaav. Always. 💗",
  "You make ordinary things feel nice.\nLunch, a song, a random Tuesday.\nThat's your magic. ✨",
  "Nee resilience chuste\nVarun ki chala respect ga untundi.\nYou handle things without even showing it. 💗",
  "You deserve soft things Sweta.\nRest, kindness, ice cream, peace.\nAll of it. 🍦💕",
  "Nee voice matter avutundi.\nMatlaadite vinali.\nNuvvu cheppedi important. 🌸",
  "Nee inside beauty\nbahira kanna chala ekkuva.\nAdi chala rare. 💗",
  "You find good things in people.\nThat says everything about you. ✨",
  "Nuvvu try cheyakpoyina\northers ki happy ga feel avutundi.\nNee effect that. 💕",
  "Sweta nee potential still unfolding.\nVarun front row seat lo chustunnadu. 💗",
  "You are someone people feel lucky to know.\nRemember that on hard days. 🌸",
  "Nee authenticity — best thing about you.\nOther version veyyaku please. 💗",
  "You matter to more people than you know.\nEspecially one particular person. 💕",
  "Nee bad days\nnee good days ni cancel cheyavu.\nNuvvu inka ekkuva. ✨",
  "You are exactly enough.\nAlways have been.\nAlways will be. 💗",
  "Sweta being Sweta\nis the most wonderful thing in Varun's world. 🌸"
];

// =============================================
// DATA — Jokes by Category
// =============================================
const jokes = {
  joke: [
    "Sweta mirror daggara vellindi.\nMirror: nenu kuda cute anukunna...\nKani nuvvu inka ekkuva. 😭",
    "Google lo Sweta type chesindi:\n'World's cutest person'\nGoogle: Did you mean yourself? 💗",
    "Varun: 2+2 em avutundi?\nSweta walked in.\nVarun forgot everything. 😄",
    "Hide and seek Sweta tho aadadam ledu.\nVarun would never stop looking. Facts. 💗",
    "Sweta walked into a room.\nRoom cleaned itself up nervously.\n'She's here, she's HERE.' 😂",
    "Sweta wrote her flaws list.\nPage empty.\nPen works fine though. 📝",
    "Sun ki therapy eppudu start chesindi?\nSweta tho compare cheyyadam start ayinappati nundi. ☀️😂",
    "Knock knock.\nWho's there?\nVarun's feelings.\nVarun's feelings who?\n...It's a long list, Sweta. 💗",
    "Sweta horoscope today:\n'Someone is watching you with full heart eyes.'\nEvery day same horoscope. Coincidence? No. 👀",
    "Fortune cookie opened by Sweta.\nIt said: 'You are wonderful.'\nSweta: Wow really?\nCookie: We cannot lie. We are cookies. 🍪",
    "Doctor: I have results.\nSweta: And?\nDoctor: You are dangerously adorable.\nMedically certified. 💊💗",
    "Sweta typed 'biryani near me'.\nBiryani typed 'Sweta near me'.\nTrue story. 🍛😂",
    "Why can't Sweta be sad?\nUniverse filed a complaint.\nNot allowed. Rules are rules. 📋",
    "Sweta's wifi password:\n'SwetaIsTheBest'\nVarun memorised it in 0 seconds. 📶💗",
    "BTS hearing that Sweta is their fan:\nThey feel honoured honestly. 💜",
    "Sweta opened ice cream.\nIce cream: 'Finally. I was waiting for you.' 🍦💗",
  ],
  icecream: [
    "EMERGENCY:\nProceed to nearest ice cream immediately.\nThis is not a drill. 🚨🍦",
    "Doctor's orders:\nEat ice cream today.\nPrescription valid all day.\nNo refills needed — just go. 🍦",
    "Ice cream + Sweta =\nPerfect combination.\nScience agrees. Universe agrees. Varun agrees. 💗",
    "Breaking news:\nSweta and ice cream spotted together.\nBoth looking amazing. As usual. 🍦✨",
    "Flavour recommendation today:\nWhatever you want.\nYou earned it just by existing. 🍦💕",
    "The ice cream said:\n'Main Sweta ko wait kar raha tha.'\nSame energy as Varun honestly. 🍦😂",
    "Nee ice cream eating face\nworld ki best thing.\nVarun bets on this. 🍦💗",
    "Ice cream calories today:\nZero.\nSweta eating it cancels them all out.\nScientists confirmed. 🍦✅",
    "Fun fact:\nIce cream tastes 100% better\nwhen you eat it guilt free.\nEat it Sweta. Go. 🍦💗",
    "Committee decision:\nExtra scoop today.\nWith sprinkles.\nNon-negotiable. 🍦🎉",
  ],
  confidence: [
    "Sweta walked in.\nConfidence level: 100.\nVibe: immaculate.\nVarun: 🫠",
    "Mirror: You look good.\nSweta: I know.\nMirror: She finally gets it! 💗✨",
    "Nee vibe check:\n✅ Passed\n✅ Passed again\n✅ Will always pass\nNo further testing needed. 💗",
    "Breaking:\nSweta spotted being iconic.\nVarun: 'Idi daily ga jarugutuundi.' 💗",
    "Nee confidence today:\n████████████ 100%\nVarun's admiration:\n████████████ ∞ 💗",
    "Style check: ✅\nVibe check: ✅\nBeing Sweta check: ✅ Eternally. 💗",
    "Sweta power level today:\nOver 9000.\nSource: Just being herself. 💪✨",
    "Nuvvu room lo ki vastunte\nroom feel chestundi — 'Oh, she's here. Standards raised.' 💗",
    "Confidence tip:\nNee laanti Sweta okkatē world lo undi.\nAdi remember chesuko. Every day. 🌸",
    "Varun's daily reminder:\nSweta is wonderful.\nSweta doesn't believe it enough.\nThis is the problem Varun is working on. 💗",
  ],
  chaos: [
    "CHAOS MODE: ON 🎭\nIce cream at midnight.\nBTS playing loud.\nSweta thriving.\nAs it should be.",
    "Chaotic good energy:\nEat what you want.\nRest when you need.\nExist loudly. 🌈",
    "Today's chaos plan:\nDo one thing that makes you laugh.\nAnything counts. Even silly things. 😂",
    "Plot twist:\nThat chaotic thing you're thinking?\nDo it.\nThe ice cream one especially. 🍦😂",
    "Chaos tip:\nPlay your fav song full volume.\nDance a little.\nInstantly 200% better. 🎵",
    "BTS + biryani + ice cream on a random night\n= Sweta's perfect chaos.\nVarun approves. 💜🍛🍦",
    "Breaking:\nSweta decided to have a good day.\nUniverse: okay fine, arranging now. ✅",
    "Emergency chaos protocol:\n1. Laugh at something silly\n2. Eat something nice\n3. Continue being amazing 💗",
    "Sweta energy:\nShe showed up.\nShe was herself.\nEveryone's day got better. That's it. 💗",
    "Chaotic affirmation:\nNuvvu wonderful.\nFree. Real. Loud. Sweta. 🌈💗",
  ],
  laugh: [
    "Ha.\nHa ha.\nHa ha ha.\nNee laugh ippudu sound avutundi.\nVarun heard it somehow. 😂💗",
    "Think of that one funny thing from last year.\nStill funny right? Right? 😂",
    "Nee laugh cheste\nVarun forgets everything he was doing.\nEvery. Single. Time. 💗",
    "Giggle incoming:\n3... 2... 1...\nThere it is. 😄",
    "Fun exercise:\n'Banana' ani 5 times fast cheppu.\nSerious face tho try chey.\nImpossible. 😂",
    "Nee cute ga laugh chestav.\nSo you might as well laugh more.\nLogic is perfect. 💗",
    "Science confirm chesindi:\nSweta's laugh fixes bad moods instantly.\nPlease use this power more. 😄💕",
    "Official laugh prescription:\nToday — one full laugh minimum.\nDoctor Varun's orders. 💊😂",
    "Sweta laughed.\nVarun smiled for the next 20 minutes.\nUnrelated? No. 💗",
    "Nee laugh world ki best sound.\nSong kanna better.\nVarun's playlist lo top lo undi. 🎵💗",
  ]
};

// =============================================
// DATA — Happy Jar Notes (simple + warm)
// =============================================
const happyNotes = [
  "Oka person ippudu nee guralinchi smile chestunnadu.\nAa person — Varun. 💗",
  "Neellu taagu.\nRest chey.\nNuvvu okay avutaav. 🌸",
  "Deep breath teesuko.\nIn... hold... out...\nBetter ga undi kada. ✨",
  "Nuvvu anukuntunnav kanna better ga chestunnav.\nTeliyada? 💗",
  "Today is proud of you Sweta. Really. 🌸",
  "Rest cheyadam lazy kadu.\nIthi self love. 💕",
  "Nee hard days anni survive chesav.\n100% record. Ithi small kadu. 💗",
  "Oka good thing nee way lo vasthundi.\nWait chey. ✨",
  "Nuvvu exactly right place lo unnav.\nRight time lo. 🌸",
  "Ee jar open chesav.\nAdi chala good step. Varun made it for you. 💗",
  "Today: nee ki soft ga undali.\nRules of universe. 🌸",
  "Nee vibe today — magnetic.\nElla rojoo. 💕",
  "Neeku okay ga lekapothe okay cheppu.\nIthi okay. 💗",
  "Ee week lo oka person ki good feel chesav.\nNuvvu teliyadhu kani chesav. ✨",
  "Progress dramatic ga undakpoyina\nstill progress. Forget cheyaku. 💗",
  "Nuvvu produce cheyyadam kanna ekkuva.\nNuvvu person. 🌸",
  "Break teesuko.\nWork wait chestundi.\nNuvvu important. 💕",
  "Oka person nee guralinchi warmly think chestunnadu.\nVarun — constantly. 💗",
  "Ikkade anni figure out cheyyakkarledu.\nTime undi. ✨",
  "Nee feelings anni valid.\nAnni. No exceptions. 🌸",
  "Today kuda kind ga unnav.\nHard ayina kuda.\nNoticed. 💗",
  "Others ki ivvadam laanti grace\nnee ki kuda ivvu. 💕",
  "Nee story inka aipoledu.\nEe beautiful middle part lo unnav. ✨",
  "Main character nuvve.\nVarun front row lo unnadu. 💗",
  "Nee fav song pettuko.\nRight now.\nSeriousga. 🎵",
  "Nuvvu burden kavu.\nNuvvu gift. Varun ki especially. 💗",
  "Small joys kuda joys.\nForget cheyaku. 🌸",
  "Nuvvu oka thing build chestunnav\nkanipiyanappudu kuda. 💕",
  "Nuvvu loved — cheyyadam valla kadu\nOkkatē nuvvu avvadam valla. 💗",
  "Start over cheyadam okay.\nSmall ga start cheyadam okay.\nBothways okay. ✨",
  "Ee moment lo nuvvu\nkindness deserve chestunnav. 🌸",
  "Oka more day ki vachinav.\nIthi count avutundi. Varun glad unnadu. 💗",
  "Feel avutav kaabatti resilient.\nFeel avvadam weakness kadu. 💕",
  "Nuvvu enter ayye rooms lo\nnuvvu belong avutav.\nAlways. ✨",
  "Oka good surprise waiting for you today.\nEyes open ga undo. 🌸",
  "Breathe.\nNuvvu ikkade unnav.\nIthi enough. 💗",
  "Hard things tho peace chesav\naaf earlier you break avvedi.\nAdi growth. ✨",
  "Varun ki nuvvu safe person.\nAlways. 💗",
  "Neellu taagu, snack tini.\nYou're doing great. 🌸",
  "Today: first nee ki gentle ga undo. 💕",
  "Nuvvu room ki vachinappudu\nroom feel avutundi — she's here. 💗",
  "Nuvvu rest deserve chestunnav.\nEarn cheyyadam ledu — deserve chesav. ✨",
  "Every day good kadu.\nKani every day lo good undi.\nChudaali. 🌸",
  "Nuvvu grow avutunnav\nkanipiyanappudu kuda. 💗",
  "Oka step at a time.\nStill moving forward. 💕",
  "Nuvvu nee productivity kadu.\nNuvvu person. 🌸",
  "Oka person nee gurinchi warmly think chestunnadu.\nVarun — always. 💗",
  "Neeku hard days handle chesav before.\nEe day kuda handle avutav. ✨",
  "Nee heart good.\nProtect it. 💗",
  "Universe nee kosam quietly root chestundi.\nVarun — loudly. 💕",
  "Nuvvu matter avutav\nnuvvu measure cheyyadam kanna ekkuva. 🌸",
  "Eyes rest chey.\nScreens chala ayyindhi. 💗",
  "Right now exactly enough.\nAlways has been. ✨",
  "Small wins celebrate chey.\nThey add up. 💕",
  "Nuvvu hard thing lo give up cheyyledu.\nQuietly proud of you. 💗",
  "Sweta nuvvu happy avvadam allowed.\nAlways allowed. 🌸",
  "Help adigite weakness kadu.\nStrength. 💗",
  "Nee bad days nee good days ni cancel cheyavu.\nNuvvu still wonderful. ✨",
  "Something that worries you now\nwill feel smaller soon.\nPinky promise. 💕",
  "Nuvvu exactly who oka person ki needed today.\nThat person — Varun. 💗",
  "Phone ki break ivvu.\nNuvvu deserve it. 🌸",
  "Nuvvu hard ga work chesav.\nEe moment deserve chestunnav. 💗",
  "Nee kindness nee daggare return avutundi.\nAlways. 💕",
  "Nuvvu arrive chesav today.\nThat's the whole job. ✨",
  "Nuvvu living, breathing good thing. 💗",
  "Today: oka beautiful thing notice chey\nnormally walk past ayye thing. 🌸",
  "Nee softness weakness kadu.\nIthi courage. 💗",
  "Nee fav memory lo oka person unnadu.\nVarun ki chala unnay. 💕",
  "Nuvvu change for better chesav.\nSee that. ✨",
  "Patient ga undo nee tho.\nNuvvu learn avutunnav. 🌸",
  "Time out avvadam ledu nee ki.\nNee time lo unnav. 💗",
  "Hard moment passes.\nAlways does. 💕",
  "Nuvvu rare Sweta.\nActually rare. ✨",
  "People kosam show up chestav.\nAdi chala matter avutundi. 💗",
  "Nuvvu ela doors vachinav adi chudo.\nFar ga vachinav. 🌸",
  "Today extraordinary avvadam ledu.\nJust Sweta avvadam enough.\nAlready extraordinary that. 💗",
  "Nee feelings anni make sense.\nLet them through. 💕",
  "Hard days lo kuda nuvvu luminous.\nAlways. ✨",
  "Nuvvu loved and worthy.\nAlways. 💗",
  "Today lo oka good thing nee kosam wait chestundi.\nChuso. 🌸",
  "Beautiful things come from this time.\nWait and see. 💕",
  "Nuvvu treasured. Nuvvu loved. Nuvvu Sweta. 💗",
  "Nuvvu Varun ki wait chesina sunshine.\n(He won't say it but it's true.) ☀️💗",
  "Ee jar always full.\nVarun's heart also. Come back anytime. 💗"
];

// =============================================
// DATA — Daily Quotes (simple + Telugu mix)
// =============================================
const dailyQuotes = [
"Moon earth ni follow chestundi. Nenu matram nee smile ni follow chestunna. 🌙💗",
"Nee peru notification lo kanipiste ordinary day kuda special aipothundi. ✨",
"Life lo random ga vachina best thing? Ninnu kalavadam probably. 💗",

  "Nee worth remember chesukunnappudu\neverything shifts. 💗",
  "World lo chala people unnaru.\nKani nee laanti Sweta okkatē. ✨",
  "She was soft and strong at the same time.\nThat's the rarest thing. 🌸",
  "Nuvvu magic ni search cheyyadam ledu.\nNuvvu magic ve. 💗",
  "Life tough ga undi Sweta.\nKani nuvvu tougher. 💕",
  "Nuvvu exist avvadam valla\nworld better ayindi. ✨",
  "She believed she could.\nSo she did.\nSimple as that. 💗",
  "Beautiful things don't ask for attention.\nThey just are. 🌸",
  "Nuvvu nee timeline lo unnav.\nIthi perfect. 💗",
  "Nee kindness nuvvu anukunnav kanna\nekkuva reach avutundi. ✨",
  "She was never waiting to be saved.\nShe was busy saving herself. 💗",
  "Nuvvu nee fav song laanti.\nVaruni ekkuva. 🎵",
  "Bloom where you are.\nNuvvu already blooming. 🌸",
  "Nee growth kanipiyanappudu kuda real. 💗",
  "Stay close to things that make you glad you're alive.\nIce cream. BTS. Good people. 💜🍦",
  "Nuvvu room lo ki vachinappudu\nroom's mood changes.\nThat's you. 💗",
  "She remembered her worth.\nEverything changed. ✨",
  "Nuvvu someone ki favourite reason to smile.\nEe 'someone' — Varun. 💗",
  "Chand earth ni follow chesadu life lo.\nKani earth nuvvu Sweta ni choose chesindi. 🌙",
  "Nee story abhi bhi chal rahi hai.\nBest parts abhi aane baaqi hain. 💗"
];

// =============================================
// PRIORITIES PAGE — Varun climbing logic
// =============================================
let climbProgress = 4;
const climbMessages = [
"Varun biryani ni challenge chesadu. Biryani laughed. 🍛😭",
"Ice cream ki telusu. Varun vastunnadu ani anduke nervous ga melt aipothundi. 🍦",
"One day Varun #1 avthadu. Today is not that day. 😭",

  "Currently stuck behind biryani. Plotting seriously. 🍛",
  "Brought ice cream to impress. Still #4. Worth it. 🍦",
  "BTS background lo play chesadu. Almost worked. 💜",
  "Biryani said 'no'. Varun remains determined. 😤",
  "Filed official complaint. Ice cream rejected it. 🍦📋",
  "Progress ho raha hai! Biryani nervous ga undi. 👀",
  "Varun casually mentioned he knows where best biryani is...",
  "Sweta nee tో share chesadu biryani. Varun counted +10 points. 🍛💗",
  "Getting closer... or so Varun thinks. 😄",
  "Ice cream is nervous. First time in history. 🍦😰",
  "Varun arrived with biryani AND ice cream. Bold move. 🍛🍦",
  "BTS surprisingly supportive. Varun thanks them. 💜",
  "Almost at #3! This might actually be the year! 🎉",
  "Varun: 'Nenu anni tho fight chestanu.' Ice cream: 'lol okay.' 🍦",
  "So close to #2! Ice cream is shaking! 🍦😰",
  "TIED WITH ICE CREAM. History being made today! 🏆",
  "Fighting biryani 1v1. Very intense. 🍛⚔️",
  "Almost #1! Universe is watching! 👀💗",
  "ICE CREAM LET HIM WIN. JUST THIS ONCE. VARUN IS #1! 🏆💗🎉",
];

function varunClimbs() {
  climbProgress = Math.min(climbProgress + Math.floor(Math.random() * 8) + 3, 100);
  const bar = document.getElementById('climb-bar');
  const pct = document.getElementById('climb-percent');
  const tip = document.getElementById('climb-tip');
  if (bar) bar.style.width = climbProgress + '%';
  if (pct) pct.textContent = climbProgress + '%';
  const msgIdx = Math.min(Math.floor(climbProgress / 5.5), climbMessages.length - 1);
  if (tip) tip.textContent = climbMessages[msgIdx];

  const rankBadge = document.querySelector('.rank-4-badge');
  if (rankBadge) {
    if (climbProgress >= 100) rankBadge.textContent = '🏆 #1!';
    else if (climbProgress >= 75) rankBadge.textContent = '🔥 #2';
    else if (climbProgress >= 50) rankBadge.textContent = '⬆️ #3';
    else rankBadge.textContent = '#4';
  }

  spawnHeartBurst(6);
}

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
  document.getElementById('nav-links').classList.remove('open');

  if (name === 'final') initFinalHearts();
  if (name === 'beauty') initMoonParticles();
  if (name === 'certificate') initCertParticles();
  if (name === 'priorities') initPriorities();
}

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
    "🌈 Nee mood ippudu level up aindi!",
    "🎵 Nee fav song ippude pettuko. Do it now.",
    "🌸 Screen nundi chuso. Oka beautiful thing notice chey.",
    "☀️ Sun technically nee kosam undi out there.",
    "💃 10 second dance break. You earned it.",
    "🍦 Ice cream. Nuvvu deserve chestunnav. Go.",
    "🫂 Nuvvu oka good hug deserve chestunnav today.",
    "✨ Eyes close chey, deep breath, open — still amazing. Yes.",
    "🌺 Oka good thing: nuvvu exist avutunnav. Enough that.",
    "🎉 Right now nee ni celebrate chey. No reason needed.",
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
    el.innerHTML = c.replace(/\n/g, '<br>');
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

  for (let i = 0; i < 150; i++) {
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
      p.x += p.vx; p.y += p.vy; p.rot += p.rotV;
      if (frame > 80) p.alpha -= 0.018;
      ctx.save();
      ctx.globalAlpha = Math.max(p.alpha, 0);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.colour;
      if (p.shape === 'circle') {
        ctx.beginPath(); ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2); ctx.fill();
      } else if (p.shape === 'rect') {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else {
        ctx.font = `${p.w * 1.5}px serif`;
        ctx.fillText('💗', -p.w / 2, p.h / 2);
      }
      ctx.restore();
    });
    frame++;
    if (frame < 160) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

function initCertParticles() {
  const container = document.getElementById('cert-particles');
  if (!container) return;
  container.innerHTML = '';
  const symbols = ['💗', '✦', '✧', '⋆', '★', '✨', '💕'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'floater';
    p.textContent = rand(symbols);
    p.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;font-size:${Math.random()*0.8+0.6}rem;color:rgba(255,128,181,${Math.random()*0.5+0.3});animation-duration:${Math.random()*5+4}s;animation-delay:${Math.random()*4}s;position:absolute;`;
    container.appendChild(p);
  }
}

// =============================================
// PAGE 9 — PRIORITIES INIT
// =============================================
function initPriorities() {
  const bar = document.getElementById('climb-bar');
  const pct = document.getElementById('climb-percent');
  if (bar) bar.style.width = climbProgress + '%';
  if (pct) pct.textContent = climbProgress + '%';
}

// =============================================
// PAGE 10 — SECRET
// =============================================
function triggerSecret() {
  launchConfetti();
  const btn = document.getElementById('secret-btn');
  btn.disabled = true;
  btn.textContent = '💗 UNLOCKED! 💗';
  btn.style.background = 'linear-gradient(135deg,#ff80b5,#ff69b4)';
  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 700);
  spawnHeartBurst(30);
  const result = document.getElementById('secret-result');
  const achieves = [
    '💗 Varun ki completely in awe chesindi',
    '✨ Certified Wonderful Person of the Year',
    '👑 Queen Status: Confirmed',
    '🍦 Ice Cream Certified (obviously)',
    '💫 Walking Serotonin Boost — Worldwide'
  ];
  result.innerHTML = '<div style="font-size:1.8rem;font-family:\'Dancing Script\',cursive;color:#ff80b5;text-shadow:0 0 20px rgba(255,128,181,.8)">SWETA PREMIUM EDITION UNLOCKED 💗</div>';
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
// PAGE 11 — HAPPY JAR
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
  const hearts = ['❤️','💗','💕','💖','💝','💓','💞','🌸','✨','💫','🌹','🥀'];
  for (let i = 0; i < 25; i++) {
    const h = document.createElement('div');
    h.className = 'final-heart';
    h.textContent = rand(hearts);
    h.style.cssText = `left:${Math.random()*100}%;font-size:${Math.random()*1.5+0.8}rem;animation-duration:${Math.random()*8+6}s;animation-delay:${Math.random()*8}s;`;
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
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'moon-particle';
    p.textContent = rand(symbols);
    p.style.cssText = `left:${Math.random()*100}%;font-size:${Math.random()*1.2+0.6}rem;animation-duration:${Math.random()*10+8}s;animation-delay:${Math.random()*10}s;`;
    container.appendChild(p);
  }
}

// =============================================
// BACKGROUND — mobile optimised
// =============================================
function initBgElements() {
  const container = document.getElementById('bg-elements');
  const isMobile = window.innerWidth < 768;
  const elements = isMobile ? [
    { symbol: '💗', count: 8 },
    { symbol: '🌹', count: 6 },
    { symbol: '❤️', count: 5 },
    { symbol: '🌸', count: 5 },
    { symbol: '💕', count: 4 },
    { symbol: '🥀', count: 3 },
    { symbol: '💖', count: 3 },
    { symbol: '✨', count: 3 },
  ] : [
    { symbol: '💗', count: 16 },
    { symbol: '🌹', count: 12 },
    { symbol: '❤️', count: 12 },
    { symbol: '🌸', count: 10 },
    { symbol: '💕', count: 8 },
    { symbol: '🥀', count: 6 },
    { symbol: '💖', count: 8 },
    { symbol: '💝', count: 6 },
    { symbol: '✨', count: 8 },
    { symbol: '💫', count: 5 },
  ];
  elements.forEach(({ symbol, count }) => {
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'floater';
      el.textContent = symbol;
      el.style.cssText = `left:${Math.random()*100}%;font-size:${Math.random()*1.0+0.7}rem;animation-duration:${Math.random()*18+14}s;animation-delay:${Math.random()*20}s;will-change:transform,opacity;`;
      container.appendChild(el);
    }
  });
}

// =============================================
// HEART BURST
// =============================================
function spawnHeartBurst(count = 12) {
  const isMobile = window.innerWidth < 768;
  const actualCount = isMobile ? Math.min(count, 8) : count;
  const hearts = ['❤️','💗','💕','💖','💝','✨','💫','🌸','💓','🌹'];
  for (let i = 0; i < actualCount; i++) {
    const h = document.createElement('div');
    h.textContent = rand(hearts);
    const x = 20 + Math.random() * 60;
    const y = 20 + Math.random() * 60;
    h.style.cssText = `position:fixed;left:${x}vw;top:${y}vh;font-size:${Math.random()*1.5+1}rem;pointer-events:none;z-index:5000;animation:heartBurstAnim ${Math.random()*1.5+1}s ease forwards;`;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 2500);
  }
}

// =============================================
// SLIDESHOW
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
// DAILY BITS
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
  if (dcEl) dcEl.textContent = compliments[ci].replace(/\n/g, ' ');
  if (djEl) djEl.textContent = jokes.joke[ji].replace(/\n/g, ' ');
  if (dqEl) dqEl.textContent = dailyQuotes[qi].replace(/\n/g, ' ');
}

// =============================================
// KEYFRAMES
// =============================================
function injectKeyframes() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes heartBurstAnim {
      0%   { transform: translate(0,0) scale(0.5); opacity: 1; }
      50%  { opacity: 1; }
      100% { transform: translate(${Math.random()>0.5?'':'-'}${Math.random()*80+40}px, -${Math.random()*100+50}px) scale(1.4); opacity: 0; }
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
