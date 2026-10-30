/* ── RENDER NAV ── */
const navEl = document.getElementById("navTabs")
trip.days.forEach((d, i) => {
  const btn = document.createElement("button")
  btn.className = "nav-tab" + (i === 0 ? " active" : "")
  btn.dataset.i = i
  btn.setAttribute("role", "tab")
  btn.setAttribute("aria-selected", i === 0 ? "true" : "false")
  btn.innerHTML = `<span class="date-num">${d.date}</span>${d.wd}`
  btn.addEventListener("click", () => switchDay(i))
  navEl.appendChild(btn)
})

const extraTagsEl = document.getElementById("extraTags")

const shrineBtn = document.createElement("button")
shrineBtn.className = "extra-tag"
shrineBtn.textContent = "神社"
shrineBtn.addEventListener("click", () => switchToPanel(shrineBtn, shrinePanel))
extraTagsEl.appendChild(shrineBtn)

const souvenirBtn = document.createElement("button")
souvenirBtn.className = "extra-tag"
souvenirBtn.textContent = "伴手禮"
souvenirBtn.addEventListener("click", () => switchToPanel(souvenirBtn, souvenirPanel))
extraTagsEl.appendChild(souvenirBtn)

const foodBtn = document.createElement("button")
foodBtn.className = "extra-tag"
foodBtn.textContent = "美食"
foodBtn.addEventListener("click", () => switchToPanel(foodBtn, foodPanel))
extraTagsEl.appendChild(foodBtn)

const stayBtn = document.createElement("button")
stayBtn.className = "extra-tag"
stayBtn.textContent = "住宿/機票"
stayBtn.addEventListener("click", () => switchToPanel(stayBtn, stayPanel))
extraTagsEl.appendChild(stayBtn)

/* ── RENDER DAYS ── */
const mainEl = document.getElementById("mainContent")

trip.days.forEach((d, i) => {
  const panel = document.createElement("section")
  panel.className = "day-panel" + (i === 0 ? " active" : "")
  panel.id = `day-${i}`
  panel.setAttribute("role", "tabpanel")

  const items = d.items
    .map(
      (it) => `
        <div class="timeline-item">
            <div class="t-card${it.expand ? " has-expand" : ""}">
                <div class="t-card-top">
                    <span class="t-time">${it.time}</span>
                    <span class="t-icon">${it.icon}</span>
                    ${it.mapUrl ? `<a class="t-name" href="${it.mapUrl}" target="_blank" rel="noopener">${it.name}</a>` : `<span class="t-name">${it.name}</span>`}
                    ${it.expand ? `<button class="t-expand-btn" aria-expanded="false" aria-label="展開交通細項">▾</button>` : ""}
                </div>
                ${it.note ? `<p class="t-note">${it.note}</p>` : ""}
                ${it.expand !== undefined ? `
                <div class="t-expand-body" aria-hidden="true">
                    <p class="t-expand-text">${it.expand.replace(/\n/g, "<br>")}</p>
                </div>` : ""}
            </div>
        </div>
    `
    )
    .join("")

  panel.innerHTML = `
        <div class="day-header">
            <div class="day-big-date">${d.date}</div>
            <div class="day-title-wrap">
                <div class="day-title">${d.title}</div>
                <div class="day-sub">${d.wd} · November 2026</div>
            </div>
            <span class="day-pill">${d.tag}</span>
        </div>
        <div class="timeline">${items}</div>
    `

  mainEl.appendChild(panel)
})

/* ── CARD TEMPLATES ── */
function flightCard(f, label, badge) {
  return `
    <div class="info-card">
        <div class="info-card-head">
            <span class="ic-icon">✈️</span>
            <span class="ic-label">${label}航班</span>
            <span class="ic-badge">${badge}</span>
        </div>
        <div class="flight-route">
            <span class="f-iata">${f.from}</span>
            <div class="f-line"></div>
            <span class="f-iata">${f.to}</span>
        </div>
        <div class="info-row">
            <span class="ir-label">班號</span>
            <span class="ir-val">${f.flightNo} · ${f.airline}</span>
        </div>
        <div class="info-row">
            <span class="ir-label">出發</span>
            <span class="ir-val">${f.depart} · ${f.fromName}</span>
        </div>
        <div class="info-row">
            <span class="ir-label">抵達</span>
            <span class="ir-val">${f.arrive} · ${f.toName}</span>
        </div>
    </div>`
}

function hotelCard(h) {
  return `
    <div class="info-card">
        <div class="info-card-head">
            <span class="ic-icon">🏨</span>
            <span class="ic-label">住宿</span>
            <span class="ic-badge">${h.nights}</span>
        </div>
        <div class="hotel-name">${h.name}</div>
        <div class="info-row">
            <span class="ir-label">區域</span>
            <span class="ir-val">${h.area}</span>
        </div>
        <div class="info-row">
            <span class="ir-label">Check-in</span>
            <span class="ir-val">${h.checkIn}</span>
        </div>
        <div class="info-row">
            <span class="ir-label">Check-out</span>
            <span class="ir-val">${h.checkOut}</span>
        </div>
        ${h.mapUrl ? `<a href="${h.mapUrl}" target="_blank" rel="noopener" class="map-btn">在地圖查看 →</a>` : ""}
    </div>`
}

/* ── HOTEL / FLIGHT PANEL ── */
const stayPanel = document.createElement("section")
stayPanel.className = "saved-panel"
stayPanel.setAttribute("role", "tabpanel")
stayPanel.innerHTML = `
    <div class="info-grid">
        ${hotelCard(trip.hotels[0])}
    </div>
    <div class="info-grid">
        ${flightCard(trip.flights.out, "去程", "11/2")}
        ${flightCard(trip.flights.ret, "回程", "11/6")}
    </div>
`
mainEl.appendChild(stayPanel)

/* ── PLACES PANELS ── */
const BOUGHT_KEY = "boughtItems"

function loadBought() {
  try {
    return JSON.parse(localStorage.getItem(BOUGHT_KEY)) || {}
  } catch {
    return {}
  }
}

function saveBought(bought) {
  try {
    localStorage.setItem(BOUGHT_KEY, JSON.stringify(bought))
  } catch {}
}

function placeCards(list, checkable) {
  if (!list.length) return `<p class="place-note">尚未新增</p>`
  const bought = loadBought()
  return list
    .map((p) => {
      const url = p.mapUrl || (p.mapQuery && `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.mapQuery)}`)
      const isBought = checkable && bought[p.name]
      return `
        <div class="place-card${isBought ? " bought" : ""}">
            ${p.img ? `<img class="place-img" src="${p.img}" alt="${p.name}" loading="lazy">` : ""}
            <div class="place-card-top">
                <span class="place-name">${p.name}</span>
            </div>
            ${p.note ? `<p class="place-note">${p.note}</p>` : ""}
            ${url ? `<a href="${url}" target="_blank" rel="noopener" class="map-btn">在地圖查看 →</a>` : ""}
            ${
              checkable
                ? `<button class="bought-btn" data-name="${p.name}" aria-pressed="${!!isBought}">${isBought ? "✓ 已買" : "標記已買"}</button>`
                : ""
            }
        </div>`
    })
    .join("")
}

// filters: 依 item.area 篩選，預設選第一個
function placesPanel(list, filters, checkable) {
  const panel = document.createElement("section")
  panel.className = "saved-panel"
  panel.setAttribute("role", "tabpanel")
  panel.innerHTML = `
    ${
      filters
        ? `<div class="cat-pills">
        ${filters.map((f, i) => `<button class="cat-pill${i === 0 ? " active" : ""}" data-area="${f}">${f}</button>`).join("")}
    </div>`
        : ""
    }
    <div class="places-grid"></div>
`
  const grid = panel.querySelector(".places-grid")

  function render(area) {
    panel.querySelectorAll(".cat-pill").forEach((p) => p.classList.toggle("active", p.dataset.area === area))
    grid.innerHTML = placeCards(area ? list.filter((p) => p.area === area) : list, checkable)
  }

  panel.querySelectorAll(".cat-pill").forEach((pill) => {
    pill.addEventListener("click", () => render(pill.dataset.area))
  })

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".bought-btn")
    if (!btn) return
    const bought = loadBought()
    bought[btn.dataset.name] = !bought[btn.dataset.name]
    saveBought(bought)
    const isBought = bought[btn.dataset.name]
    btn.closest(".place-card").classList.toggle("bought", isBought)
    btn.setAttribute("aria-pressed", isBought)
    btn.textContent = isBought ? "✓ 已買" : "標記已買"
  })
  render(filters && filters[0])

  mainEl.appendChild(panel)
  return panel
}

const shrinePanel = placesPanel(shrines)
const souvenirPanel = placesPanel(souvenirs, ["博多車站", "唐吉訶德"], true)
const foodPanel = placesPanel(foods, ["福岡燒肉", "小倉燒肉"])

/* ── SWITCH ── */
const extraPanels = [stayPanel, shrinePanel, souvenirPanel, foodPanel]

function deactivateAll() {
  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.classList.remove("active")
    btn.setAttribute("aria-selected", "false")
  })
  document.querySelectorAll(".extra-tag").forEach((btn) => btn.classList.remove("active"))
  document.querySelectorAll(".day-panel").forEach((p) => p.classList.remove("active"))
  extraPanels.forEach((p) => p.classList.remove("active"))
}

function scrollToNav() {
  window.scrollTo({ top: document.querySelector(".nav-wrapper").offsetTop - 4, behavior: "smooth" })
}

function switchDay(idx) {
  deactivateAll()
  document.querySelectorAll(".nav-tab")[idx].classList.add("active")
  document.querySelectorAll(".nav-tab")[idx].setAttribute("aria-selected", "true")
  document.querySelectorAll(".day-panel")[idx].classList.add("active")
  scrollToNav()
}

function switchToPanel(btn, panel) {
  deactivateAll()
  btn.classList.add("active")
  panel.classList.add("active")
  scrollToNav()
}

/* ── EXPAND / COLLAPSE ── */
mainEl.addEventListener("click", (e) => {
  if (e.target.closest("a.t-name")) return
  const card = e.target.closest(".t-card.has-expand")
  if (!card) return
  const expanded = card.classList.toggle("expanded")
  card.querySelector(".t-expand-btn").setAttribute("aria-expanded", expanded)
  card.querySelector(".t-expand-body").setAttribute("aria-hidden", !expanded)
})
