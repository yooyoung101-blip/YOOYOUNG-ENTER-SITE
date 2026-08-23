const scanCopy = {
  taste:
    '음악을 듣고 "좋다"에서 끝내지 않고, 왜 좋은지와 누구에게 닿을지를 바로 언어화합니다.',
  temp:
    "뜨거운 취향과 차가운 판단을 같이 씁니다. 감각은 살리고, 선택 기준은 선명하게 둡니다.",
  serve:
    "데모, 아티스트, 콘텐츠 팀이 바로 움직일 수 있도록 짧은 문장과 우선순위로 서빙합니다.",
};

const mapCopy = {
  scoop: {
    label: "Step 01",
    title: "Scoop the Song",
    body: "데모의 훅, 보컬 톤, 아티스트 핏을 먼저 떠서 핵심 맛을 잡습니다.",
  },
  chill: {
    label: "Step 02",
    title: "Chill the Direction",
    body: "과한 설명은 덜고, 제작 방향과 캠페인 메시지를 차갑게 정리합니다.",
  },
  serve: {
    label: "Step 03",
    title: "Serve the Release",
    body: "티저, 숏폼, 비주얼 키워드가 같은 맛으로 느껴지도록 발매 흐름을 만듭니다.",
  },
};

const trackData = [
  {
    title: "Vanilla Fit",
    items: [
      "아티스트의 현재 이미지와 곡의 정서를 맞춥니다.",
      "팬이 기대하는 지점과 새롭게 확장할 지점을 나눕니다.",
      "레퍼런스를 의사결정 언어로 정리합니다.",
    ],
  },
  {
    title: "Mango Hook",
    items: [
      "첫 10초에 남는 멜로디와 훅을 체크합니다.",
      "보컬이 살아나는 구간과 편곡 밀도를 함께 봅니다.",
      "듣는 사람이 따라 말할 수 있는 키워드로 압축합니다.",
    ],
  },
  {
    title: "Mint Launch",
    items: [
      "발매 전 기대감을 만드는 티저 순서를 잡습니다.",
      "숏폼으로 잘리는 구간과 비주얼 톤을 연결합니다.",
      "쿨하고 선명한 한 문장으로 캠페인 각도를 정리합니다.",
    ],
  },
];

const buildProfiles = {
  taste_production_campaign: [
    "Sweet Strategy Scoop",
    "좋은 곡의 매력을 빠르게 잡고, 제작 메모와 캠페인 문장으로 팀이 바로 움직이게 만듭니다.",
  ],
  taste_production_market_campaign: [
    "Mango Timing Mix",
    "음악적 매력과 시장 타이밍을 같이 보며 발매 각도와 공개 순서를 설계합니다.",
  ],
  taste_production_people_campaign: [
    "Team Sync Sundae",
    "감각적인 판단을 제작진과 아티스트가 이해할 수 있는 실행 언어로 바꿉니다.",
  ],
  all: [
    "Full Topping A&R",
    "발굴, 제작, 시장, 사람, 캠페인을 한 컵에 담아 발매까지 녹지 않게 밀고 갑니다.",
  ],
  default: [
    "Custom Pop Scoop",
    "선택한 토핑을 중심으로 음악과 캠페인 사이의 빈칸을 채우는 유연한 빌드입니다.",
  ],
};

document.querySelectorAll("[data-scan]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-scan]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    document.querySelector("#scan-result").textContent = scanCopy[button.dataset.scan];
  });
});

document.querySelectorAll("[data-map]").forEach((pin) => {
  pin.addEventListener("click", () => {
    const detail = mapCopy[pin.dataset.map];
    document.querySelectorAll("[data-map]").forEach((item) => item.classList.remove("is-active"));
    pin.classList.add("is-active");
    document.querySelector("#map-detail").innerHTML = `
      <span>${detail.label}</span>
      <h3>${detail.title}</h3>
      <p>${detail.body}</p>
    `;
  });
});

document.querySelectorAll("[data-track]").forEach((card) => {
  card.addEventListener("click", () => {
    const data = trackData[Number(card.dataset.track)];
    document.querySelectorAll("[data-track]").forEach((item) => item.classList.remove("is-selected"));
    card.classList.add("is-selected");
    document.querySelector("#track-panel").innerHTML = `
      <p>Today's Pick</p>
      <h3>${data.title}</h3>
      <ul>${data.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
  });
});

const updateBuild = () => {
  const order = ["taste", "production", "market", "people", "campaign"];
  const selected = [...document.querySelectorAll(".toppings input:checked")]
    .map((input) => input.value)
    .sort((a, b) => order.indexOf(a) - order.indexOf(b));
  const key = selected.length === 5 ? "all" : selected.join("_");
  const [title, text] = buildProfiles[key] || buildProfiles.default;
  document.querySelector("#build-title").textContent = title;
  document.querySelector("#build-text").textContent = text;
};

document.querySelectorAll(".toppings input").forEach((input) => {
  input.addEventListener("change", updateBuild);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.16 },
);

document.querySelectorAll(".section > *:not(.hero-photo):not(.hero-tint)").forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
