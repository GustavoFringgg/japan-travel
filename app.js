/* ── RENDER NAV ── */
const navEl = document.getElementById('navTabs');
trip.days.forEach((d, i) => {
    const btn = document.createElement('button');
    btn.className = 'nav-tab' + (i === 0 ? ' active' : '');
    btn.dataset.i = i;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    btn.innerHTML = `<span class="date-num">${d.date}</span>${d.wd}`;
    btn.addEventListener('click', () => switchDay(i));
    navEl.appendChild(btn);
});

const extraTagsEl = document.getElementById('extraTags');

const savedBtn = document.createElement('button');
savedBtn.className = 'extra-tag';
savedBtn.textContent = '收藏';
savedBtn.addEventListener('click', switchToSaved);
extraTagsEl.appendChild(savedBtn);

const hotelBtn = document.createElement('button');
hotelBtn.className = 'extra-tag';
hotelBtn.textContent = '住宿';
hotelBtn.addEventListener('click', switchToHotel);
extraTagsEl.appendChild(hotelBtn);

const flightBtn = document.createElement('button');
flightBtn.className = 'extra-tag';
flightBtn.textContent = '機票';
flightBtn.addEventListener('click', switchToFlight);
extraTagsEl.appendChild(flightBtn);

/* ── RENDER DAYS ── */
const mainEl = document.getElementById('mainContent');

trip.days.forEach((d, i) => {
    const panel = document.createElement('section');
    panel.className = 'day-panel' + (i === 0 ? ' active' : '');
    panel.id = `day-${i}`;
    panel.setAttribute('role', 'tabpanel');

    const items = d.items.map(it => `
        <div class="timeline-item">
            <div class="t-dot${it.hi ? ' highlight' : ''}"></div>
            <div class="t-card">
                <div class="t-card-top">
                    <span class="t-time">${it.time}</span>
                    <span class="t-icon">${it.icon}</span>
                    <span class="t-name">${it.name}</span>
                </div>
                ${it.note ? `<p class="t-note">${it.note}</p>` : ''}
            </div>
        </div>
    `).join('');

    panel.innerHTML = `
        <div class="day-header">
            <div class="day-big-date">${d.date}</div>
            <div class="day-title-wrap">
                <div class="day-title">${d.title}</div>
                <div class="day-sub">${d.wd} · October 2026</div>
            </div>
            <span class="day-pill">${d.tag}</span>
        </div>
        <div class="timeline">${items}</div>
    `;

    mainEl.appendChild(panel);
});

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
    </div>`;
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
    </div>`;
}

/* ── FLIGHT PANEL ── */
const flightPanel = document.createElement('section');
flightPanel.className = 'saved-panel';
flightPanel.setAttribute('role', 'tabpanel');
flightPanel.innerHTML = `
    <div class="day-header">
        <div class="day-big-date">機票</div>
        <div class="day-title-wrap">
            <div class="day-title">去程 & 回程航班</div>
            <div class="day-sub">Peach Aviation · MM927 / MM928</div>
        </div>
    </div>
    <div class="info-grid">
        ${flightCard(trip.flights.out, '去程', '10/1')}
        ${flightCard(trip.flights.ret, '回程', '10/6')}
    </div>
`;
mainEl.appendChild(flightPanel);

/* ── HOTEL PANEL ── */
const hotelPanel = document.createElement('section');
hotelPanel.className = 'saved-panel';
hotelPanel.setAttribute('role', 'tabpanel');
hotelPanel.innerHTML = `
    <div class="day-header">
        <div class="day-big-date">住宿</div>
        <div class="day-title-wrap">
            <div class="day-title">飯店資訊</div>
            <div class="day-sub">兩間飯店・5晚</div>
        </div>
    </div>
    <div class="info-grid">
        ${hotelCard(trip.hotels[0])}
        ${hotelCard(trip.hotels[1])}
    </div>
`;
mainEl.appendChild(hotelPanel);

/* ── SAVED PANEL ── */
const savedPanel = document.createElement('section');
savedPanel.className = 'saved-panel';
savedPanel.setAttribute('role', 'tabpanel');
savedPanel.innerHTML = `
    <div class="day-header">
        <div class="day-big-date">收藏</div>
        <div class="day-title-wrap">
            <div class="day-title">美食・玩樂・景點清單</div>
            <div class="day-sub">點卡片可在 Google Maps 查看位置</div>
        </div>
    </div>
    <div class="cat-pills">
        ${['全部','美食','玩樂','景點'].map(c =>
            `<button class="cat-pill${c==='全部'?' active':''}" data-cat="${c}">${c}</button>`
        ).join('')}
    </div>
    <div class="places-grid" id="placesGrid"></div>
`;
mainEl.appendChild(savedPanel);

const placesGrid = document.getElementById('placesGrid');

function renderPlaces(cat) {
    savedPanel.querySelectorAll('.cat-pill').forEach(p =>
        p.classList.toggle('active', p.dataset.cat === cat)
    );
    const list = cat === '全部' ? savedPlaces : savedPlaces.filter(p => p.cat === cat);
    placesGrid.innerHTML = list.map(p => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.mapQuery)}`;
        return `
        <div class="place-card">
            <div class="place-card-top">
                <span class="place-name">${p.name}</span>
                <span class="cat-badge cat-${p.cat}">${p.cat}</span>
            </div>
            ${p.note ? `<p class="place-note">${p.note}</p>` : ''}
            <a href="${url}" target="_blank" rel="noopener" class="map-btn">在地圖查看 →</a>
        </div>`;
    }).join('');
}

renderPlaces('全部');

savedPanel.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => renderPlaces(pill.dataset.cat));
});

/* ── SWITCH ── */
const extraPanels = [flightPanel, hotelPanel, savedPanel];

function deactivateAll() {
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.extra-tag').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.day-panel').forEach(p => p.classList.remove('active'));
    extraPanels.forEach(p => p.classList.remove('active'));
}

function scrollToNav() {
    window.scrollTo({ top: document.querySelector('.nav-wrapper').offsetTop - 4, behavior: 'smooth' });
}

function switchDay(idx) {
    deactivateAll();
    document.querySelectorAll('.nav-tab')[idx].classList.add('active');
    document.querySelectorAll('.nav-tab')[idx].setAttribute('aria-selected', 'true');
    document.querySelectorAll('.day-panel')[idx].classList.add('active');
    scrollToNav();
}

function switchToFlight() {
    deactivateAll();
    flightBtn.classList.add('active');
    flightPanel.classList.add('active');
    scrollToNav();
}

function switchToHotel() {
    deactivateAll();
    hotelBtn.classList.add('active');
    hotelPanel.classList.add('active');
    scrollToNav();
}

function switchToSaved() {
    deactivateAll();
    savedBtn.classList.add('active');
    savedPanel.classList.add('active');
    scrollToNav();
}
