const scanCopy = {
  taste:
    "레퍼런스와 신인을 빠르게 듣고, 아티스트의 장점이 선명해지는 방향을 찾습니다.",
  coordination:
    "제작진, 아티스트, 캠페인 담당자가 같은 그림을 볼 수 있도록 메모와 우선순위를 정리합니다.",
  story:
    "곡의 분위기를 티저, 비주얼, 숏폼, 인터뷰 키워드로 확장해 발매 전후의 서사를 만듭니다.",
};

const mapCopy = {
  listen: {
    label: "01 / Listening Room",
    title: "좋은 곡을 고르는 것에서 멈추지 않는다.",
    body:
      "곡의 첫인상, 보컬 캐릭터, 레퍼런스, 청자 반응 포인트를 분해해 다음 의사결정으로 연결합니다.",
  },
  align: {
    label: "02 / Production Table",
    title: "팀이 바로 움직일 수 있는 언어로 바꾼다.",
    body:
      "감각적인 의견을 구체적인 수정 방향, 제작 일정, 커뮤니케이션 체크포인트로 정리합니다.",
  },
  launch: {
    label: "03 / Campaign Launch",
    title: "발매는 음악의 두 번째 편곡이다.",
    body:
      "후킹 포인트와 아티스트 캐릭터가 대중에게 닿도록 콘텐츠 각도와 공개 순서를 설계합니다.",
  },
};

const trackData = [
  {
    title: "Artist Fit",
    items: [
      "아티스트의 현재 이미지와 곡의 정서를 맞춥니다.",
      "팬이 기대하는 지점과 새롭게 확장할 지점을 나눕니다.",
      "레퍼런스를 단순 복제가 아니라 의사결정 언어로 정리합니다.",
    ],
  },
  {
    title: "Demo Direction",
    items: [
      "멜로디의 기억 지점과 보컬이 살아나는 구간을 체크합니다.",
      "편곡의 밀도, 템포, 사운드 팔레트에 대한 수정 메모를 만듭니다.",
      "프로듀서와 아티스트가 같은 목표로 대화할 수 있게 정리합니다.",
    ],
  },
  {
    title: "Release Story",
    items: [
      "곡의 감정을 한 문장으로 압축해 캠페인 중심축을 세웁니다.",
      "티저, 숏폼, 비주얼 톤이 같은 방향으로 움직이도록 연결합니다.",
      "발매 전 기대감과 발매 후 확산 포인트를 분리해 설계합니다.",
    ],
  },
];

const buildProfiles = {
  taste_production_campaign:
    ["Taste-led Production Campaigner", "곡의 매력을 빠르게 포착하고, 제작 메모와 캠페인 스토리로 팀이 움직일 수 있는 언어를 만듭니다."],
  taste_production_market_campaign:
    ["Market-aware Release Designer", "음악적 매력과 시장 타이밍을 함께 보며 발매 각도와 콘텐츠 순서를 설계합니다."],
  taste_production_people_campaign:
    ["Team-facing A&R Operator", "좋은 음악적 판단을 팀 커뮤니케이션과 실행 순서로 안정적으로 연결합니다."],
  all:
    ["Full-cycle A&R Builder", "발굴, 제작, 시장, 사람, 캠페인을 한 흐름으로 묶어 발매까지 밀고 가는 조합입니다."],
  default:
    ["Adaptive A&R Candidate", "선택한 강점을 중심으로 음악과 캠페인 사이의 빈칸을 채우는 유연한 빌드입니다."],
};

document.addEventListener("pointermove", (event) => {
  document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
  document.documentElement.style.setProperty("--my", `${event.clientY}px`);
});

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
      <p>Selected Track</p>
      <h3>${data.title}</h3>
      <ul>${data.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
  });
});

const updateBuild = () => {
  const order = ["taste", "production", "market", "people", "campaign"];
  const selected = [...document.querySelectorAll(".builder-controls input:checked")]
    .map((input) => input.value)
    .sort((a, b) => order.indexOf(a) - order.indexOf(b));
  const key = selected.length === 5 ? "all" : selected.join("_");
  const [title, text] = buildProfiles[key] || buildProfiles.default;
  document.querySelector("#build-title").textContent = title;
  document.querySelector("#build-text").textContent = text;
};

document.querySelectorAll(".builder-controls input").forEach((input) => {
  input.addEventListener("change", updateBuild);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.18 },
);

document.querySelectorAll(".section > *:not(.cover-art):not(.cover-overlay)").forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
