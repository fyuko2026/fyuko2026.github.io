const shopData = [
  {
    id: "ginza-yoshimune",
    name: "銀座吉宗",
    area: "中央区",
    address: "東京都中央区銀座8-9-16 長崎センタービルB1",
    phone: "03-3572-7686",
    url: "https://www.yoshimune.co.jp/",
    image: "https://placehold.jp/600x400.png?text=Ginza+Yoshimune",
    comment: "太麺皿うどんの王道を味わえる銀座の老舗。茶碗蒸しとセットで訪れたい店。",
    x: 58,
    y: 50
  },
  {
    id: "nagasaki-hanten-shibuya",
    name: "長崎飯店 渋谷店",
    area: "渋谷区",
    address: "東京都渋谷区道玄坂1-9-1 梅山ビル1F",
    phone: "03-3464-0528",
    url: "https://nagasaki-hanten.jp/shibuya.html",
    image: "https://placehold.jp/600x400.png?text=Nagasaki+Hanten",
    comment: "本場長崎直送の麺を使う店。太麺皿うどんは香ばしさと野菜の甘みを楽しめる。",
    x: 42,
    y: 63
  },
  {
    id: "nagasaki-hanten-takadanobaba",
    name: "長崎飯店 高田馬場店",
    area: "新宿区",
    address: "東京都新宿区高田馬場2-18-6 柳屋ビルB1F",
    phone: "03-3208-0915",
    url: "https://nagasaki-hanten.jp/takadanobaba.html",
    image: "https://placehold.jp/600x400.png?text=Takadanobaba",
    comment: "長崎直送の麺で本格的な皿うどんを提供。太麺派にもおすすめの店舗。",
    x: 35,
    y: 31
  },
  {
    id: "raira",
    name: "來來來",
    area: "世田谷区",
    address: "東京都世田谷区太子堂4-27-10",
    phone: "03-3412-2918",
    url: "https://tabelog.com/tokyo/A1317/A131713/13000882/",
    image: "https://placehold.jp/600x400.png?text=Rairai",
    comment: "太麺皿うどんが選べる長崎ちゃんぽん店。一口餃子との相性も抜群。",
    x: 34,
    y: 71
  },
  {
    id: "ringerhut",
    name: "リンガーハット",
    area: "東京各所",
    address: "東京都内各店舗（店舗によりメニューを確認）",
    phone: "",
    url: "https://www.ringerhut.jp/menu/saraudon/thick_su/",
    image: "https://placehold.jp/600x400.png?text=Ringer+Hut",
    comment: "ちゃんぽん麺を香ばしく焼いた太めん皿うどん。全国展開店で都内でも探しやすい。",
    x: 64,
    y: 35
  },
  {
    id: "horai-ken",
    name: "宝来軒",
    area: "江戸川区",
    address: "東京都江戸川区中葛西2丁目22-9",
    phone: "03-3687-7273",
    url: "https://tabelog.com/tokyo/A1313/A131303/13008184/",
    image: "https://placehold.jp/600x400.png?text=Horai+Ken",
    comment: "ボリュームとコスパに優れた皿うどん店。太麺で食べ応えを楽しめる。",
    x: 82,
    y: 57
  }
];

const communityShops = JSON.parse(localStorage.getItem("tokyoSaraudonCommunity") || "[]");
const shopDataWithCommunity = [...shopData, ...communityShops];

const voiceData = [
  {
    name: "太麺さん",
    role: "中央区在住",
    avatar: "https://placehold.jp/150x150.png?text=User",
    text: "太麺のザクザク感と熱々のあん。ソースを少し足すと香ばしさがさらに際立ちました。",
  },
  {
    name: "あんかけ派",
    role: "世田谷区在住",
    avatar: "https://placehold.jp/150x150.png?text=User",
    text: "野菜のシャキシャキ感と太麺のコシの対比が最高。都内でも名店が見つかりました。",
  },
  {
    name: "長崎出身",
    role: "江戸川区在住",
    avatar: "https://placehold.jp/150x150.png?text=User",
    text: "細麺ばかりになりがちな東京で、太麺皿うどんを選べる店が集まって嬉しい。",
  }
];

const faqData = [
  {
    question: "太麺皿うどんとはどんな料理ですか？",
    answer: "長崎皿うどんのうち、ちゃんぽん麺などの太めの麺を揚げて提供するスタイルです。細麺皿うどんとは麺の太さと食感が異なります。"
  },
  {
    question: "このサイトに載っているのは細麺も含みますか？",
    answer: "いいえ。太麺皿うどん、または太めん皿うどんを提供する店だけを掲載する構成です。"
  },
  {
    question: "メニューが変更されていることはありますか？",
    answer: "店舗の状況によりメニューや営業内容が変わる場合があります。訪問前に公式サイトや電話で確認することをおすすめします。"
  },
  {
    question: "お店を追加することはできますか？",
    answer: "投稿フォームから店名、エリア、住所、電話番号、URL、写真URL、コメントを入力できます。投稿内容はブラウザ内に保存されます。"
  }
];

const sliderImages = [
  "r_main1.webp",
  "r_main2.webp",
  "r_main3.webp",
  "r_main4.webp",
  "r_main5.webp",
  "r_main6.webp"
];

let sliderIndex = 0;
let sliderTimer = null;
let activeArea = "すべて";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function initSlider() {
  const track = document.getElementById("sliderTrack");
  const dots = document.getElementById("sliderDots");
  track.innerHTML = sliderImages.map((src, index) =>
    `<div class="slide" role="group" aria-label="${index + 1} / ${sliderImages.length}">
      <img src="${src}" alt="長崎皿うどん 太麺 ${index + 1}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy'"}>
    </div>`
  ).join("");

  dots.innerHTML = sliderImages.map((_, index) =>
    `<button class="slider-dot ${index === 0 ? "active" : ""}" type="button" aria-label="${index + 1}枚目を表示" aria-current="${index === 0 ? "true" : "false"}"></button>`
  ).join("");

  document.querySelectorAll(".slider-dot").forEach((dot, index) => {
    dot.addEventListener("click", () => setSlider(index, true));
  });
  document.querySelector(".slider-prev").addEventListener("click", () => setSlider(sliderIndex - 1, true));
  document.querySelector(".slider-next").addEventListener("click", () => setSlider(sliderIndex + 1, true));
  document.getElementById("sliderFrame").addEventListener("keydown", handleSliderKey);
  document.getElementById("sliderFrame").tabIndex = 0;
  document.querySelector(".hero-slider").addEventListener("mouseenter", stopSlider);
  document.querySelector(".hero-slider").addEventListener("mouseleave", startSlider);
  document.querySelector(".hero-slider").addEventListener("focusin", stopSlider);
  document.querySelector(".hero-slider").addEventListener("focusout", startSlider);

  document.querySelectorAll(".slide img").forEach(img => {
    img.addEventListener("error", () => {
      img.src = "https://placehold.jp/900x900.png?text=Thick+Saraudon";
    }, { once: true });
  });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) startSlider();
}

function setSlider(index, restart) {
  sliderIndex = (index + sliderImages.length) % sliderImages.length;
  document.getElementById("sliderTrack").style.transform = `translateX(-${sliderIndex * 100}%)`;
  document.querySelectorAll(".slider-dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === sliderIndex);
    dot.setAttribute("aria-current", dotIndex === sliderIndex ? "true" : "false");
  });
  if (restart) stopSlider(), startSlider();
}

function handleSliderKey(event) {
  if (event.key === "ArrowLeft") setSlider(sliderIndex - 1, true);
  if (event.key === "ArrowRight") setSlider(sliderIndex + 1, true);
  if (event.key === "Home") setSlider(0, true);
  if (event.key === "End") setSlider(sliderImages.length - 1, true);
}

function startSlider() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  stopSlider();
  sliderTimer = window.setInterval(() => setSlider(sliderIndex + 1, false), 5000);
}

function stopSlider() {
  if (sliderTimer) window.clearInterval(sliderTimer);
  sliderTimer = null;
}

function renderAreaFilters() {
  const areas = ["すべて", ...new Set(shopDataWithCommunity.map(shop => shop.area))];
  document.getElementById("areaFilters").innerHTML = areas.map(area =>
    `<button class="area-filter ${area === activeArea ? "active" : ""}" type="button" data-area="${escapeHtml(area)}">${escapeHtml(area)}</button>`
  ).join("");
  document.querySelectorAll(".area-filter").forEach(button => {
    button.addEventListener("click", () => {
      activeArea = button.dataset.area;
      renderAreaFilters();
      renderShops();
      renderMapPins();
    });
  });
}

function renderMapPins() {
  const filtered = activeArea === "すべて"
    ? shopDataWithCommunity
    : shopDataWithCommunity.filter(shop => shop.area === activeArea);
  document.getElementById("mapPins").innerHTML = filtered.map((shop, index) =>
    `<button class="map-pin" type="button" style="left:${shop.x || 50}%;top:${shop.y || 50}%" data-shop-id="${escapeHtml(shop.id)}" aria-label="${escapeHtml(shop.name)}を表示">
      <span>${index + 1}</span>
    </button>`
  ).join("");
  document.querySelectorAll(".map-pin").forEach(pin => {
    pin.addEventListener("click", () => {
      document.querySelectorAll(".map-pin").forEach(item => item.classList.remove("active"));
      pin.classList.add("active");
      document.getElementById("shops").scrollIntoView({ behavior: "smooth" });
      const card = document.querySelector(`[data-card-id="${CSS.escape(pin.dataset.shopId)}"]`);
      if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
  document.getElementById("shopCount").textContent = filtered.length;
}

function renderShops(search = "") {
  const normalized = search.trim().toLowerCase();
  const filtered = shopDataWithCommunity.filter(shop => {
    const matchesArea = activeArea === "すべて" || shop.area === activeArea;
    const searchable = `${shop.name} ${shop.area} ${shop.address} ${shop.comment}`.toLowerCase();
    return matchesArea && searchable.includes(normalized);
  });

  const grid = document.getElementById("shopGrid");
  if (!filtered.length) {
    grid.innerHTML = '<p>該当する太麺皿うどん店は見つかりませんでした。</p>';
    return;
  }

  grid.innerHTML = filtered.map(shop => {
    const phone = shop.phone
      ? `<p>☎ <a href="tel:${escapeHtml(shop.phone)}">${escapeHtml(shop.phone)}</a></p>`
      : "";
    return `<article class="shop-card" data-card-id="${escapeHtml(shop.id)}">
      <div class="shop-image">
        <img src="${escapeHtml(shop.image || "https://placehold.jp/600x400.png?text=Item")}" alt="${escapeHtml(shop.name)}の皿うどん" loading="lazy">
        <span class="shop-badge">太麺あり</span>
      </div>
      <div class="shop-body">
        <span class="shop-area">${escapeHtml(shop.area)}</span>
        <h3>${escapeHtml(shop.name)}</h3>
        <p class="shop-comment">${escapeHtml(shop.comment)}</p>
        <div class="shop-meta">
          <p>〒 ${escapeHtml(shop.address)}</p>
          ${phone}
        </div>
        <div class="shop-links">
          ${shop.url ? `<a href="${escapeHtml(shop.url)}" target="_blank" rel="noopener noreferrer">公式・店舗情報 →</a>` : ""}
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address)}" target="_blank" rel="noopener noreferrer">地図で見る</a>
        </div>
      </div>
    </article>`;
  }).join("");

  grid.querySelectorAll(".shop-image img").forEach(img => {
    img.addEventListener("error", () => {
      img.src = "https://placehold.jp/600x400.png?text=Thick+Saraudon";
    }, { once: true });
  });
}

function renderVoices() {
  document.getElementById("voiceGrid").innerHTML = voiceData.map(voice =>
    `<article class="voice-card">
      <span class="eyebrow">COMMENT</span>
      <blockquote>「${escapeHtml(voice.text)}」</blockquote>
      <div class="voice-user">
        <img src="${escapeHtml(voice.avatar)}" alt="" loading="lazy">
        <div><strong>${escapeHtml(voice.name)}</strong><span>${escapeHtml(voice.role)}</span></div>
      </div>
    </article>`
  ).join("");
}

function renderFaq() {
  document.getElementById("faqList").innerHTML = faqData.map((item, index) =>
    `<article class="faq-item ${index === 0 ? "open" : ""}">
      <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
        ${escapeHtml(item.question)}<span aria-hidden="true">+</span>
      </button>
      <div class="faq-answer"><p>${escapeHtml(item.answer)}</p></div>
    </article>`
  ).join("");

  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function initSubmitForm() {
  document.getElementById("submitForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const id = `community-${Date.now()}`;
    const submitted = {
      id,
      name: data.get("name").trim(),
      area: data.get("area").trim(),
      address: data.get("address").trim(),
      phone: data.get("phone").trim(),
      url: data.get("url").trim(),
      image: data.get("image").trim(),
      comment: data.get("comment").trim(),
      x: 20 + Math.floor(Math.random() * 65),
      y: 20 + Math.floor(Math.random() * 55)
    };

    communityShops.push(submitted);
    localStorage.setItem("tokyoSaraudonCommunity", JSON.stringify(communityShops));
    shopDataWithCommunity.push(submitted);
    form.reset();
    document.getElementById("formStatus").textContent = "投稿を地図と店舗一覧に追加しました。";
    activeArea = "すべて";
    renderAreaFilters();
    renderMapPins();
    renderShops();
  });
}

document.getElementById("shopSearch").addEventListener("input", event => renderShops(event.target.value));

initSlider();
renderAreaFilters();
renderMapPins();
renderShops();
renderVoices();
renderFaq();
initSubmitForm();
