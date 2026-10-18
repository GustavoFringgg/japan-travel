/* ── 行程資料：修改這裡換成真實資料 ── */
const trip = {
  flights: {
    out: {
      flightNo: "7G800",
      airline: "星悅航空 StarFlyer",
      from: "TPE",
      fromName: "桃園機場 T1",
      to: "KKJ",
      toName: "北九州機場",
      depart: "03:00",
      arrive: "06:15",
      date: "2026/11/02"
    },
    ret: {
      flightNo: "7G801",
      airline: "星悅航空 StarFlyer",
      from: "KKJ",
      fromName: "北九州機場",
      to: "TPE",
      toName: "桃園機場 T1",
      depart: "23:50",
      arrive: "01:30",
      date: "2026/11/06"
    }
  },
  hotels: [
    {
      name: "Quintessa Hotel Kokura",
      area: "小倉・北九州市",
      nights: "11/2 – 11/6",
      checkIn: "15:00",
      checkOut: "11:00",
      mapUrl: "https://maps.app.goo.gl/nC5qbNxBngvEbnkZ6"
    }
  ],
  transit: [
    {
      date: "11/2",
      cards: [
        {
          icon: "🚌",
          label: "北九州機場 → 小倉站",
          badge: "機場巴士",
          rows: [
            { label: "路線", val: "北九州空港エアポートバス（航廈外 1 號乘車處）→ 小倉駅前" },
            { label: "所需時間", val: "約 35 分鐘" },
            { label: "車資", val: "約 ¥700（需再確認）" },
            { label: "備註", val: "06:15 落地，首班車時刻待確認" }
          ]
        }
      ]
    }
  ],
  days: [
    {
      date: "11/2",
      wd: "Mon",
      title: "抵達北九州",
      tag: "Day 1",
      items: [
        { time: "03:00", icon: "✈️", name: "桃園機場 T1 出發", note: "7G800 · 星悅航空" },
        { time: "06:15", icon: "🛬", name: "抵達北九州機場", note: "入境 → 提取行李" },
        {
          time: "15:00",
          icon: "🏨",
          name: "飯店 Check-in",
          note: "Quintessa Hotel Kokura",
          mapUrl: "https://maps.app.goo.gl/nC5qbNxBngvEbnkZ6"
        }
      ]
    },
    { date: "11/3", wd: "Tue", title: "待規劃", tag: "Day 2", items: [] },
    { date: "11/4", wd: "Wed", title: "待規劃", tag: "Day 3", items: [] },
    { date: "11/5", wd: "Thu", title: "待規劃", tag: "Day 4", items: [] },
    {
      date: "11/6",
      wd: "Fri",
      title: "回家",
      tag: "Day 5",
      items: [
        { time: "11:00", icon: "🧳", name: "飯店 Check-out", note: "行李可寄放櫃台" },
        { time: "23:50", icon: "✈️", name: "北九州機場起飛", note: "7G801 · 隔日 01:30 抵達桃園 T1" }
      ]
    }
  ]
}

const savedPlaces = []
