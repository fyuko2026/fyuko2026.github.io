const experiences = [
    {
        id: "starry-sky",
        scene: "SCENE 01",
        title: "Starry Sky",
        subtitle: "星降る夜",
        description: "無数の星がまたたく夜空。炎のゆらぎとともに、静かな夜の深さを感じて。",
        imageText: "Starry+Sky"
    },
    {
        id: "aurora",
        scene: "SCENE 02",
        title: "Aurora",
        subtitle: "光のカーテン",
        description: "色を変えながら広がるオーロラ。夜空に浮かぶ光のうねりを眺める時間。",
        imageText: "Aurora"
    },
    {
        id: "moving-moon",
        scene: "SCENE 03",
        title: "Moving Moon",
        subtitle: "月の旅路",
        description: "空をゆっくり横切る月を追いかけて。時間が流れていく心地よさを。",
        imageText: "Moving+Moon"
    },
    {
        id: "sunrise",
        scene: "SCENE 04",
        title: "Sunrise",
        subtitle: "夜明けの色",
        description: "闇がほどけ、朝日が昇るまで。新しい一日のはじまりを焚火のそばで。",
        imageText: "Sunrise"
    }
];

const testimonials = [
    {
        quote: "火を見ながらぼんやりしていたら、久しぶりに深く息ができた気がします。自分のための時間って大切ですね。",
        name: "30代・会社員",
        imageText: "User+01"
    },
    {
        quote: "星から朝焼けへ変わる空が本当にきれいで、最後まで見届けたくなりました。次は友人と来たいです。",
        name: "20代・学生",
        imageText: "User+02"
    },
    {
        quote: "何かをしなくていい、ということがこんなに心地いいとは。慌ただしい一週間の終わりにぴったりでした。",
        name: "40代・自営業",
        imageText: "User+03"
    }
];

const faqs = [
    {
        question: "どんな体験ができますか？",
        answer: "焚火の映像とともに、星空からオーロラ、月の移動、朝焼けへと変化する空を眺めるリラックス体験です。四つのシーンからお好きな時間をお選びいただけます。"
    },
    {
        question: "初めてでも楽しめますか？",
        answer: "もちろんです。特別な準備や知識は必要ありません。座って、炎と空を眺めながら、ご自身のペースでお過ごしください。"
    },
    {
        question: "途中で休憩したり、退出したりできますか？",
        answer: "はい。ご自身の心地よさをいちばんに、いつでも休憩・退出していただけます。"
    },
    {
        question: "どのシーンを選べばよいですか？",
        answer: "星空、オーロラ、月、朝焼けから、その日の気分に合う景色をお選びください。迷ったときは、夜から朝へ移ろう時間をゆっくり味わえるSunriseがおすすめです。"
    }
];

const programList = document.getElementById("program-list");
const voiceList = document.getElementById("voice-list");
const faqList = document.getElementById("faq-list");

programList.innerHTML = experiences.map((experience) => `
    <article class="program-card" data-experience-card="${experience.id}">
        <div class="program-image">
            <img src="https://placehold.jp/600x400.png?text=Item" alt="${experience.subtitle}のイメージ" loading="lazy">
            <span class="program-scene">${experience.scene}</span>
        </div>
        <div class="program-body">
            <h3>${experience.title} <span lang="ja">— ${experience.subtitle}</span></h3>
            <p>${experience.description}</p>
            <button class="program-select" type="button" data-experience="${experience.id}" aria-pressed="false">
                <span>この景色を選ぶ</span><span aria-hidden="true">↗</span>
            </button>
        </div>
    </article>
`).join("");

voiceList.innerHTML = testimonials.map((testimonial) => `
    <article class="voice-card">
        <div class="voice-rating" aria-label="5つ星">★★★★★</div>
        <blockquote>「${testimonial.quote}」</blockquote>
        <div class="voice-person">
            <img src="https://placehold.jp/150x150.png?text=User" alt="" loading="lazy">
            <span>${testimonial.name}</span>
        </div>
    </article>
`).join("");

faqList.innerHTML = faqs.map((faq, index) => `
    <article class="faq-item">
        <h3>
            <button class="faq-question" type="button" id="faq-question-${index}" aria-expanded="false" aria-controls="faq-answer-${index}">
                <span>${faq.question}</span><span class="faq-icon" aria-hidden="true"></span>
            </button>
        </h3>
        <div class="faq-answer" id="faq-answer-${index}" role="region" aria-labelledby="faq-question-${index}">
            <div class="faq-answer-inner"><p>${faq.answer}</p></div>
        </div>
    </article>
`).join("");

const starField = document.getElementById("hero-stars");
const starCount = window.matchMedia("(max-width: 768px)").matches ? 48 : 88;
const starFragment = document.createDocumentFragment();

for (let index = 0; index < starCount; index += 1) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 68}%`;
    star.style.setProperty("--star-size", `${Math.random() * 2 + 1}px`);
    star.style.setProperty("--twinkle-duration", `${Math.random() * 3 + 2}s`);
    star.style.setProperty("--twinkle-delay", `${Math.random() * -5}s`);
    starFragment.append(star);
}

starField.append(starFragment);

programList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-experience]");
    if (!button) return;

    const selectedExperience = experiences.find((experience) => experience.id === button.dataset.experience);
    if (!selectedExperience) return;

    programList.querySelectorAll("[data-experience]").forEach((item) => {
        const isSelected = item === button;
        item.setAttribute("aria-pressed", String(isSelected));
        item.closest(".program-card").classList.toggle("is-selected", isSelected);
    });

    document.getElementById("selection-message").textContent =
        `${selectedExperience.subtitle}を選びました。焚火のそばで、ゆっくりお過ごしください。`;
});

faqList.addEventListener("click", (event) => {
    const button = event.target.closest(".faq-question");
    if (!button) return;

    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const item = button.closest(".faq-item");
    button.setAttribute("aria-expanded", String(!isExpanded));
    item.classList.toggle("is-open", !isExpanded);
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "メニューを開く" : "メニューを閉じる");
    mobileNav.hidden = isExpanded;
});

mobileNav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "メニューを開く");
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || mobileNav.hidden) return;
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "メニューを開く");
    menuToggle.focus();
});
