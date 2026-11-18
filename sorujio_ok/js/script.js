const frequencies = [
  { hz: 174, mood: "安定", description: "足元を確かめるような、落ち着いたひととき。", color: "var(--tone-one)" },
  { hz: 285, mood: "めぐり", description: "自然のリズムを感じながら、ひと息つく時間。", color: "var(--tone-two)" },
  { hz: 396, mood: "解放", description: "こわばった気持ちを、そっとほどきたいときに。", color: "var(--tone-three)" },
  { hz: 417, mood: "切り替え", description: "気分を変えて、新しい一歩を考えたいときに。", color: "var(--tone-four)" },
  { hz: 528, mood: "やすらぎ", description: "静かな呼吸とともに、自分をいたわる時間。", color: "var(--tone-five)" },
  { hz: 639, mood: "調和", description: "人とのつながりを思いながら、心を休める時間。", color: "var(--tone-six)" },
  { hz: 741, mood: "表現", description: "考えを整理して、自分の声に耳を傾ける時間。", color: "var(--tone-seven)" },
  { hz: 852, mood: "直感", description: "静けさのなかで、今の気持ちを見つめる時間。", color: "var(--tone-eight)" },
  { hz: 963, mood: "ひらめき", description: "一日の終わりに、ゆったり余白をつくる時間。", color: "var(--tone-nine)" }
];

const testimonials = [
  { quote: "寝る前にスマートフォンを置いて、呼吸を整えるきっかけに。", context: "夜のくつろぎ時間" },
  { quote: "仕事の合間、数分だけ目を閉じて気持ちを切り替えています。", context: "午後の小休憩" },
  { quote: "読書のおともに小さな音で。静かな時間が心地いいです。", context: "読書やひとり時間" },
  { quote: "朝の支度の前にひと呼吸。自分のペースを思い出せます。", context: "朝のはじまり" }
];

const questions = [
  { question: "ソルフェジオ周波数とは何ですか？", answer: "特定の音の高さ（周波数）に、伝統的・スピリチュアルな意味づけをした音楽や音響の呼び方です。紹介されるテーマはさまざまで、医学的な効果が確立しているわけではありません。" },
  { question: "どの周波数を選べばよいですか？", answer: "気になるテーマや音を試して、心地よいと感じるものをお選びください。決まった選び方や、正解はありません。" },
  { question: "音が再生されません。", answer: "再生ボタンを押すとブラウザの音声機能が有効になります。端末の消音設定や音量をご確認ください。ブラウザの設定によっては音声の再生が制限されることがあります。" },
  { question: "イヤホンで聴いても大丈夫ですか？", answer: "お使いいただけますが、音量は控えめにし、長時間の連続再生は避けてください。不快感や気分の悪さを感じた場合はすぐに停止してください。" }
];

const frequencyList = document.querySelector("#frequency-list");
const playerPanel = document.querySelector(".player-panel");
const playerMood = document.querySelector("#player-mood");
const playerFrequency = document.querySelector("#player-frequency");
const playerDescription = document.querySelector("#player-description");
const playerStatus = document.querySelector("#player-status");
const playButton = document.querySelector("#play-button");
const playLabel = document.querySelector("#play-label");
const stopButton = document.querySelector("#stop-button");
const durationSelect = document.querySelector("#session-duration");

let selectedFrequency = frequencies[0];
let audioContext;
let oscillator;
let gainNode;
let sessionTimeout;
let finishTimeout;

frequencyList.innerHTML = frequencies.map((item, index) => `
  <button class="frequency-card" type="button" aria-pressed="${index === 0}" data-frequency="${item.hz}" style="--tone-color: ${item.color}">
    <span class="frequency-card-top"><span class="frequency-card-number">TONE 0${index + 1}</span><span class="frequency-card-dot"></span></span>
    <span><h3>${item.mood}の周波数</h3><strong>${item.hz}<small>Hz</small></strong></span>
  </button>
`).join("");

document.querySelector("#testimonial-list").innerHTML = testimonials.map((item) => `
  <article class="testimonial-card"><blockquote>${item.quote}</blockquote><p>${item.context}</p></article>
`).join("");

document.querySelector("#faq-list").innerHTML = questions.map((item, index) => `
  <article class="faq-item">
    <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${index}">
      <span><b>Q${String(index + 1).padStart(2, "0")}</b>${item.question}</span><span class="faq-toggle" aria-hidden="true">＋</span>
    </button>
    <div class="faq-answer" id="faq-answer-${index}"><div><p>${item.answer}</p></div></div>
  </article>
`).join("");

function updateSelection(item, card) {
  selectedFrequency = item;
  document.querySelectorAll(".frequency-card").forEach((button) => {
    button.setAttribute("aria-pressed", String(button === card));
  });
  playerMood.textContent = `${item.mood}の周波数`;
  playerFrequency.textContent = item.hz;
  playerDescription.textContent = item.description;
  playerPanel.style.setProperty("--tone-color", item.color);
  if (oscillator && audioContext) {
    oscillator.frequency.setTargetAtTime(item.hz, audioContext.currentTime, .12);
    playerStatus.textContent = `${item.hz}Hzを再生中です。`;
  }
}

frequencyList.addEventListener("click", (event) => {
  const card = event.target.closest(".frequency-card");
  if (!card) return;
  const item = frequencies.find((frequency) => frequency.hz === Number(card.dataset.frequency));
  updateSelection(item, card);
});

function stopPlayback(message = "再生を停止しました。") {
  clearTimeout(sessionTimeout);
  clearTimeout(finishTimeout);
  sessionTimeout = undefined;
  if (gainNode && audioContext && audioContext.state !== "closed") {
    gainNode.gain.cancelScheduledValues(audioContext.currentTime);
    gainNode.gain.setTargetAtTime(0, audioContext.currentTime, .18);
    finishTimeout = setTimeout(() => {
      if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        gainNode.disconnect();
        oscillator = undefined;
        gainNode = undefined;
      }
    }, 850);
  }
  playerPanel.classList.remove("is-playing");
  playLabel.textContent = "再生する";
  playButton.querySelector(".play-icon").textContent = "▶";
  stopButton.disabled = true;
  playerStatus.textContent = message;
}

async function startPlayback() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    playerStatus.textContent = "このブラウザでは音声を再生できません。";
    return;
  }
  try {
    if (!audioContext || audioContext.state === "closed") audioContext = new AudioContextClass();
    await audioContext.resume();
    if (oscillator) {
      clearTimeout(finishTimeout);
      oscillator.stop();
      oscillator.disconnect();
      gainNode.disconnect();
    }
    oscillator = audioContext.createOscillator();
    gainNode = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = selectedFrequency.hz;
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.setTargetAtTime(.035, audioContext.currentTime, .65);
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    playerPanel.classList.add("is-playing");
    playLabel.textContent = "再生中";
    playButton.querySelector(".play-icon").textContent = "Ⅱ";
    stopButton.disabled = false;
    playerStatus.textContent = `${selectedFrequency.hz}Hzを再生中です。いつでも停止できます。`;
    sessionTimeout = setTimeout(() => stopPlayback("設定した時間が終わりました。おつかれさまでした。"), Number(durationSelect.value) * 60 * 1000);
  } catch {
    playerStatus.textContent = "音声を開始できませんでした。端末の設定をご確認ください。";
  }
}

playButton.addEventListener("click", () => {
  if (oscillator) stopPlayback();
  else startPlayback();
});
stopButton.addEventListener("click", () => stopPlayback());

document.querySelector("#faq-list").addEventListener("click", (event) => {
  const button = event.target.closest(".faq-question");
  if (!button) return;
  const willOpen = button.getAttribute("aria-expanded") !== "true";
  button.setAttribute("aria-expanded", String(willOpen));
  button.closest(".faq-item").classList.toggle("is-open", willOpen);
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  mainNav.classList.toggle("is-open", isOpen);
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "メニューを開く");
    mainNav.classList.remove("is-open");
  }
});