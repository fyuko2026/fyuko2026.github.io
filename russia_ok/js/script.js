// Edit these arrays to update the directory, editorial cards, and FAQ.
const contentList = [
  {
    type: "restaurant",
    name: "ロゴスキー",
    prefecture: "東京都",
    city: "銀座エリア",
    description: "日本のロシア料理の草分けとして知られるレストラン。",
    tags: ["伝統料理", "老舗"]
  },
  {
    type: "restaurant",
    name: "スンガリー",
    prefecture: "東京都",
    city: "新宿エリア",
    description: "ロシアや東欧の家庭料理を楽しめるレストラン。",
    tags: ["家庭料理", "コース"]
  },
  {
    type: "restaurant",
    name: "サラファン",
    prefecture: "東京都",
    city: "御茶ノ水エリア",
    description: "ロシアの家庭料理や郷土料理を味わえるお店。",
    tags: ["家庭料理", "郷土料理"]
  },
  {
    type: "restaurant",
    name: "チャイカ",
    prefecture: "東京都",
    city: "高田馬場エリア",
    description: "ボルシチやピロシキなど親しみやすい料理がそろうお店。",
    tags: ["ボルシチ", "ピロシキ"]
  },
  {
    type: "restaurant",
    name: "キエフ",
    prefecture: "京都府",
    city: "祇園エリア",
    description: "京都でロシア・ウクライナ料理を紹介してきたレストラン。",
    tags: ["郷土料理", "老舗"]
  },
  {
    type: "story",
    number: "01 / ТРАДИЦИЯ",
    title: "スープから始まる物語",
    description: "ビーツの鮮やかな赤が印象的なボルシチ。土地や家庭によって具材や味つけが少しずつ異なる、ロシアを代表するスープです。",
    image: "borushiti.webp",
    imageAlt: "ボルシチ"
  },
  {
    type: "story",
    number: "02 / ДОМАШНЯЯ КУХНЯ",
    title: "手のひらサイズのごちそう",
    description: "焼いたり揚げたりした生地に、肉やキャベツなどの具を包むピロシキ。お店ごとの生地やフィリングの違いも楽しみのひとつ。",
    image: "piroshiki.webp",
    imageAlt: "ピロシキ"
  },
  {
    type: "story",
    number: "03 / В ЯПОНИИ",
    title: "日本で育ったロシアの味",
    description: "明治以降、日本に伝わったロシア料理。各地のお店が受け継ぎ、工夫を重ねながら、今の日本の食卓にも根づいています。",
    image: "course.webp",
    imageAlt: "ロシア料理のコース"
  }
];

const reviews = [
  {
    category: "まずはこの一品",
    quote: "初めてなら、ビーツの色も美しいボルシチから。サワークリームを添えて味の変化も楽しんで。",
    byline: "編集部メモ · ボルシチ"
  },
  {
    category: "お店ごとの個性",
    quote: "同じ料理名でも、お店ごとに仕立てや味わいはさまざま。食べ比べると新しい発見があります。",
    byline: "編集部メモ · 食べ比べ"
  },
  {
    category: "ゆっくり味わう",
    quote: "前菜から温かいスープ、メインへ。コース料理でロシアの食文化をゆっくりたどるのもおすすめ。",
    byline: "編集部メモ · コース料理"
  }
];

const faqs = [
  {
    question: "ロシア料理が初めてなら、何を頼むとよいですか？",
    answer: "ボルシチやピロシキは、日本でも親しまれている定番料理です。お店によって味や具材が異なるので、メニューの説明を見たり、スタッフにおすすめを聞いたりしてみてください。"
  },
  {
    question: "近くのお店が地図に表示されていません。",
    answer: "このサイトは掲載店を順次追加しています。お探しの地域にお店が表示されない場合も、検索サイトや各地域の情報で最新の店舗情報をご確認ください。"
  },
  {
    question: "掲載情報はどのように確認できますか？",
    answer: "掲載情報や営業状況は変わる場合があります。ご訪問前に、店舗の公式サイトや公式SNSなどで営業時間・定休日・予約方法をご確認ください。"
  },
  {
    question: "ロシア料理にはどんなメニューがありますか？",
    answer: "ボルシチ、ピロシキのほか、ビーフストロガノフ、ペリメニ（ロシア風水餃子）、ブリヌイ（クレープ）などがあります。地域やお店によって出会える料理もさまざまです。"
  }
];

const prefectureCoordinates = [
  ["北海道", "北海道", 72, 10], ["青森県", "東北", 69, 21], ["岩手県", "東北", 73, 27], ["宮城県", "東北", 70, 32],
  ["秋田県", "東北", 65, 26], ["山形県", "東北", 65, 33], ["福島県", "東北", 68, 38], ["茨城県", "関東", 72, 44],
  ["栃木県", "関東", 68, 42], ["群馬県", "関東", 64, 43], ["埼玉県", "関東", 66, 47], ["千葉県", "関東", 73, 49],
  ["東京都", "関東", 68, 49], ["神奈川県", "関東", 66, 52], ["新潟県", "中部", 60, 38], ["富山県", "中部", 55, 43],
  ["石川県", "中部", 51, 42], ["福井県", "中部", 49, 47], ["山梨県", "中部", 62, 51], ["長野県", "中部", 59, 47],
  ["岐阜県", "中部", 54, 51], ["静岡県", "中部", 63, 55], ["愛知県", "中部", 57, 55], ["三重県", "近畿", 53, 58],
  ["滋賀県", "近畿", 50, 54], ["京都府", "近畿", 47, 53], ["大阪府", "近畿", 46, 57], ["兵庫県", "近畿", 43, 55],
  ["奈良県", "近畿", 49, 59], ["和歌山県", "近畿", 47, 63], ["鳥取県", "中国", 39, 54], ["島根県", "中国", 34, 55],
  ["岡山県", "中国", 39, 59], ["広島県", "中国", 34, 60], ["山口県", "中国", 29, 61], ["徳島県", "四国", 43, 65],
  ["香川県", "四国", 39, 64], ["愛媛県", "四国", 34, 67], ["高知県", "四国", 39, 69], ["福岡県", "九州", 24, 66],
  ["佐賀県", "九州", 20, 67], ["長崎県", "九州", 16, 69], ["熊本県", "九州", 21, 72], ["大分県", "九州", 27, 70],
  ["宮崎県", "九州", 26, 77], ["鹿児島県", "九州", 21, 81], ["沖縄県", "沖縄", 13, 94]
];

const prefectures = prefectureCoordinates.map(([name, region, x, y]) => ({ name, region, x, y }));
const selectedPrefecture = { value: "" };
const searchQuery = { value: "" };

const prefectureSelect = document.querySelector('#submission-form select[name="prefecture"]');
prefectureSelect.innerHTML += prefectures.map(({ name }) => `<option value="${name}">${name}</option>`).join("");

document.getElementById("submission-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const photoFile = data.get("photo");
  const photoUrl = photoFile && photoFile.size ? URL.createObjectURL(photoFile) : "https://placehold.jp/600x400.png?text=Item";
  const menu = data.get("menu").trim();
  const comment = data.get("comment").trim();

  contentList.unshift({
    type: "restaurant",
    name: data.get("name").trim(),
    prefecture: data.get("prefecture"),
    city: data.get("city").trim() || "エリア未入力",
    address: data.get("address").trim(),
    phone: data.get("phone").trim(),
    url: data.get("url").trim(),
    menu,
    description: comment,
    image: photoUrl,
    tags: menu ? menu.split(/[,、]/).map((tag) => tag.trim()).filter(Boolean).slice(0, 3) : ["おすすめ"]
  });

  selectedPrefecture.value = data.get("prefecture");
  searchQuery.value = "";
  document.getElementById("search-input").value = "";
  renderPrefectures();
  renderMapPins();
  renderVenues();
  form.reset();
  document.getElementById("form-status").textContent = "投稿ありがとうございました。店舗一覧に追加しました。";
  document.getElementById("map").scrollIntoView({ behavior: "smooth" });
});

function getMatchingVenues() {
  const query = searchQuery.value.trim().toLocaleLowerCase("ja");
  return contentList.filter((item) => {
    if (item.type !== "restaurant") return false;
    const matchesPrefecture = !selectedPrefecture.value || item.prefecture === selectedPrefecture.value;
    const matchesQuery = !query || [item.name, item.prefecture, item.city, item.description, ...item.tags]
      .join(" ").toLocaleLowerCase("ja").includes(query);
    return matchesPrefecture && matchesQuery;
  });
}

function renderPrefectures() {
  const list = document.getElementById("prefecture-list");
  const query = searchQuery.value.trim().toLocaleLowerCase("ja");
  const matchingNames = prefectures.filter(({ name, region }) => !query || `${name} ${region}`.toLocaleLowerCase("ja").includes(query));
  list.innerHTML = matchingNames.map(({ name }) => `
    <button class="prefecture-button${selectedPrefecture.value === name ? " selected" : ""}" type="button" data-prefecture="${name}" aria-pressed="${selectedPrefecture.value === name}">${name}</button>
  `).join("");
  list.querySelectorAll(".prefecture-button").forEach((button) => {
    button.addEventListener("click", () => selectPrefecture(button.dataset.prefecture));
  });
}

function renderMapPins() {
  const container = document.getElementById("map-pins");
  const venuePrefectures = new Set(contentList.filter((item) => item.type === "restaurant").map((item) => item.prefecture));
  container.innerHTML = prefectures.map(({ name, x, y }) => {
    const hasVenue = venuePrefectures.has(name);
    const selected = selectedPrefecture.value === name;
    return `<button class="map-pin${hasVenue ? " has-venue" : ""}${selected ? " selected" : ""}" type="button" style="left:${x}%;top:${y}%" data-prefecture="${name}" aria-label="${name}${hasVenue ? "、掲載店あり" : ""}" aria-pressed="${selected}"><span>${name}</span></button>`;
  }).join("");
  container.querySelectorAll(".map-pin").forEach((pin) => {
    pin.addEventListener("click", () => selectPrefecture(pin.dataset.prefecture));
  });
}

function renderVenues() {
  const venues = getMatchingVenues();
  const grid = document.getElementById("venue-grid");
  const title = document.getElementById("results-title");
  const count = document.getElementById("venue-count");
  const status = document.getElementById("map-status");
  const resultCount = document.getElementById("result-count");
  title.textContent = selectedPrefecture.value ? `${selectedPrefecture.value}の掲載店` : searchQuery.value ? "検索結果" : "全国の掲載店";
  count.textContent = `${venues.length} STORES`;
  status.textContent = selectedPrefecture.value || "日本全国";
  resultCount.textContent = venues.length ? `${venues.length}件のお店を表示` : "該当するお店はありません";

  if (!venues.length) {
    const isAreaSelected = Boolean(selectedPrefecture.value);
    grid.innerHTML = `<div class="empty-state"><strong>${isAreaSelected ? `${selectedPrefecture.value}の掲載店は現在ありません` : "該当するお店は見つかりませんでした"}</strong>${isAreaSelected ? "掲載情報は順次追加予定です。訪問前に最新情報をご確認ください。" : "別の地名やキーワードで検索してみてください。"}</div>`;
    return;
  }
  grid.innerHTML = venues.map((venue) => `
    <article class="venue-card">
      ${venue.image ? `<img class="venue-photo" src="${venue.image}" alt="${venue.name}の写真">` : ""}
      <span class="venue-arrow" aria-hidden="true">↗</span>
      <div class="venue-region">${venue.prefecture} · ${venue.city}</div>
      <h4>${venue.name}</h4>
      <p>${venue.description}</p>
      <div class="venue-tags">${venue.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    </article>
  `).join("");
}

function selectPrefecture(name) {
  selectedPrefecture.value = selectedPrefecture.value === name ? "" : name;
  renderPrefectures();
  renderMapPins();
  renderVenues();
}

function renderStories() {
  const stories = contentList.filter((item) => item.type === "story");
  document.getElementById("story-grid").innerHTML = stories.map((story) => `
    <article class="story-card">
      <img src="${story.image}" alt="${story.imageAlt}" loading="lazy">
      <span class="story-number">${story.number}</span>
      <h3>${story.title}</h3>
      <p>${story.description}</p>
      <a class="story-link" href="#map">お店で味わう <span aria-hidden="true">↗</span></a>
    </article>
  `).join("");
}

function renderReviews() {
  document.getElementById("voice-grid").innerHTML = reviews.map((review) => `
    <article class="voice-card">
      <div class="voice-mark" aria-hidden="true">“</div>
      <blockquote>${review.quote}</blockquote>
      <div class="voice-meta"><strong>${review.category}</strong><span>${review.byline}</span></div>
    </article>
  `).join("");
}

function renderFaqs() {
  const list = document.getElementById("faq-list");
  list.innerHTML = faqs.map((faq, index) => `
    <article class="faq-item">
      <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${index}" id="faq-question-${index}">
        <span class="faq-q-mark">Q.</span><span>${faq.question}</span><span class="faq-toggle" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${index}" role="region" aria-labelledby="faq-question-${index}">
        <div class="faq-answer-inner"><p><span class="faq-a-mark">A.</span><span>${faq.answer}</span></p></div>
      </div>
    </article>
  `).join("");
  list.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

document.getElementById("search-input").addEventListener("input", (event) => {
  searchQuery.value = event.target.value;
  renderPrefectures();
  renderMapPins();
  renderVenues();
});

document.getElementById("reset-filter").addEventListener("click", () => {
  selectedPrefecture.value = "";
  searchQuery.value = "";
  document.getElementById("search-input").value = "";
  renderPrefectures();
  renderMapPins();
  renderVenues();
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.getElementById("search-input").focus();
  }
  if (event.key === "Escape" && document.activeElement === document.getElementById("search-input")) {
    document.getElementById("search-input").value = "";
    searchQuery.value = "";
    renderPrefectures();
    renderMapPins();
    renderVenues();
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.getElementById("primary-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

renderPrefectures();
renderMapPins();
renderVenues();
renderStories();
renderReviews();
renderFaqs();
