const potterySpots = [
  {
    name: "今右衛門窯",
    category: "伝統と革新",
    description: "色鍋島の伝統を受け継ぎ、繊細な色絵の美しさを今に伝える窯元。",
    location: "赤絵町エリア",
     
     
    image: "imaemon.webp",
    imageAlt: "今右衛門窯の器をイメージした写真"
  },
  {
    name: "香蘭社",
    category: "有田の名窯",
    description: "華やかな絵付けと品格あるデザイン。歴史ある有田焼の魅力にふれる。",
    location: "幸平エリア",
    image: "kouransya.webp",
    imageAlt: "香蘭社の器をイメージした写真"
  },
  {
    name: "有田ポーセリンラボ",
    category: "モダンな有田焼",
    description: "伝統の技に現代の感性を重ねた、日々の暮らしに寄り添う器。",
    location: "上幸平エリア",
    image: "arita_porcelain_lab.webp",
    imageAlt: "有田ポーセリンラボの器をイメージした写真"
  }
];

const travelerVoices = [
  {
    quote: "歩いていると煙突や窯元が見えてきて、町全体が焼きものの博物館みたいでした。",
    name: "30代・女性"
  },
  {
    quote: "お店ごとに器の表情が違って、作り手の方のお話も聞けたのがうれしかったです。",
    name: "40代・男性"
  },
  {
    quote: "路地をのんびり散策。旅先で見つけた器を、今も毎日使っています。",
    name: "20代・女性"
  }
];

const frequentlyAskedQuestions = [
  {
    question: "窯元めぐりは予約が必要ですか？",
    answer: "見学や体験の受け入れ方法は窯元によって異なります。訪問前に各窯元の公式情報を確認し、必要な場合は事前にご予約ください。"
  },
  {
    question: "車がなくても楽しめますか？",
    answer: "有田駅周辺や内山地区には徒歩でめぐれる窯元・ショップがあります。訪問先を事前に地図で確認し、歩きやすい靴でお出かけください。"
  },
  {
    question: "窯元やお店の営業日はどこで確認できますか？",
    answer: "営業日・営業時間は変更になる場合があります。各窯元の公式サイトや案内窓口で、最新の情報をご確認ください。"
  }
];

const spotList = document.querySelector("#spot-list");
const voiceList = document.querySelector("#voice-list");
const faqList = document.querySelector("#faq-list");

potterySpots.forEach((spot) => {
  const card = document.createElement("article");
  card.className = "spot-card";
  card.innerHTML = `
    <img src="${spot.image}" alt="${spot.imageAlt}" loading="lazy">
    <div class="spot-card-body">
      <span class="spot-category">${spot.category}</span>
      <h3>${spot.name}</h3>
      <p>${spot.description}</p>
      <div class="spot-meta">⌖ ${spot.location}</div>
    </div>
  `;
  spotList.append(card);
});

travelerVoices.forEach((voice) => {
  const card = document.createElement("article");
  card.className = "voice-card";
  card.innerHTML = `
    <div class="voice-stars" aria-label="おすすめ">★★★★★</div>
    <blockquote>${voice.quote}</blockquote>
    <p>${voice.name} の旅より</p>
  `;
  voiceList.append(card);
});

frequentlyAskedQuestions.forEach((item, index) => {
  const faqItem = document.createElement("div");
  const questionId = `faq-question-${index + 1}`;
  const answerId = `faq-answer-${index + 1}`;
  faqItem.className = "faq-item";
  faqItem.innerHTML = `
    <button class="faq-question" id="${questionId}" type="button" aria-expanded="false" aria-controls="${answerId}">
      <span>${item.question}</span>
    </button>
    <div class="faq-answer" id="${answerId}" role="region" aria-labelledby="${questionId}" aria-hidden="true">
      <div class="faq-answer-inner">${item.answer}</div>
    </div>
  `;
  faqList.append(faqItem);
});

faqList.addEventListener("click", (event) => {
  const question = event.target.closest(".faq-question");
  if (!question) return;

  const isExpanded = question.getAttribute("aria-expanded") === "true";
  const answer = document.getElementById(question.getAttribute("aria-controls"));
  question.setAttribute("aria-expanded", String(!isExpanded));
  answer.setAttribute("aria-hidden", String(isExpanded));
});
