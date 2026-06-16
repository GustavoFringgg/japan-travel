/* ── 行程資料：修改這裡換成真實資料 ── */
const trip = {
  flights: {
    out: {
      flightNo: "MM032",
      airline: "Peach Aviation",
      from: "KHH",
      fromName: "台灣高雄",
      to: "KIX",
      toName: "關西國際",
      depart: "14:10",
      arrive: "18:15",
      date: "2026/10/01"
    },
    ret: {
      flightNo: "MM031",
      airline: "Peach Aviation",
      from: "KIX",
      fromName: "關西國際",
      to: "KHH",
      toName: "台灣高雄",
      depart: "10:45",
      arrive: "13:10",
      date: "2026/10/06"
    }
  },
  hotels: [
    {
      name: "難波南大國站前APA飯店",
      area: "難波・中央區",
      nights: "10/1 – 10/6",
      checkIn: "15:00",
      checkOut: "11:00",
      mapUrl:
        "https://www.google.com/maps/place/難波南大國站前APA飯店/data=!4m2!3m1!1s0x6000e7bf75fc475f:0xb819ff11a45bb926?sa=X&ved=1t:242&ictx=111"
    }
  ],
  days: [
    {
      date: "10/1",
      wd: "Thu",
      title: "抵達大阪",
      tag: "Day 1",
      items: [
        { time: "14:10", icon: "✈️", name: "高雄機場出發", note: "MM032 · 建議提前2小時辦理登機" },
        { time: "18:15", icon: "🛬", name: "抵達關西機場", note: "入境 → 提取行李 → 換日幣／購買 ICOCA", hi: true },
        {
          time: "14:00",
          icon: "🚄",
          name: "Haruka 特急往大阪",
          note: "關空特急 HARUKA · 約75分 · 建議買「ICOCA & HARUKA」套票"
        },
        { time: "15:30", icon: "🏨", name: "飯店 Check-in", note: "Dormy Inn Premium 難波" },
        { time: "18:00", icon: "🌆", name: "道頓堀散步", note: "グリコ看板 · 戎橋 · 法善寺横丁" },
        { time: "19:30", icon: "🐙", name: "晚餐：道頓堀たこ焼き", note: "跟著人潮找當地人排隊的攤位" }
      ]
    },
    {
      date: "10/2",
      wd: "Fri",
      title: "大阪城と黒門市場",
      tag: "Day 2",
      items: [
        { time: "09:00", icon: "☕", name: "早餐", note: "飯店早餐或附近昭和風喫茶店" },
        { time: "10:00", icon: "🏯", name: "大阪城公園", note: "天守閣入場 ¥600 · 秋天楓紅美景 · 建議留2-3小時" },
        {
          time: "13:00",
          icon: "🥩",
          name: "午餐：黒門市場",
          note: "大阪の廚房 · 海鮮串、松阪牛一口サイズ、新鮮水果",
          hi: true
        },
        { time: "15:00", icon: "🛍️", name: "心斎橋筋商店街", note: "藥妝・雜貨・流行品牌 · 全長580m有頂拱廊" },
        { time: "17:30", icon: "☕", name: "カフェ休息", note: "心斎橋一帶不少設計感咖啡廳" },
        { time: "19:00", icon: "🍜", name: "晚餐：千日前道具屋筋附近", note: "大衆割烹 or 居酒屋一品料理體驗" }
      ]
    },
    {
      date: "10/3",
      wd: "Sat",
      title: "天王寺と新世界",
      tag: "Day 3",
      items: [
        { time: "09:30", icon: "⛩️", name: "住吉大社", note: "大阪最古老神社 · 太鼓橋上拍照超好看" },
        { time: "11:30", icon: "🌳", name: "天王寺公園", note: "市中心的綠洲 · 順遊天王寺動物園（可選）" },
        { time: "13:00", icon: "🗼", name: "通天閣・新世界", note: "昭和30年代復古街道 · 強烈推薦！", hi: true },
        { time: "14:00", icon: "🍢", name: "午餐：元祖串カツ", note: "二度漬け禁止！用豬肉高湯醬炸串體驗" },
        {
          time: "16:00",
          icon: "🏙️",
          name: "あべのハルカス",
          note: "日本最高百貨 · 58F 展望台 ¥2,000 · 日落前入場最值"
        },
        { time: "19:00", icon: "🍺", name: "晚餐：居酒屋", note: "天王寺附近找下班族聚集的熱鬧小店" }
      ]
    },
    {
      date: "10/4",
      wd: "Sun",
      title: "梅田・北大阪",
      tag: "Day 4",
      items: [
        { time: "10:00", icon: "🏬", name: "梅田 Grand Front Osaka", note: "設計感強烈的複合商場 · 文創品牌集中" },
        { time: "12:00", icon: "🍛", name: "午餐：梅田地下街", note: "Whity 梅田 · 龐大地下街美食迷宮探索" },
        { time: "13:30", icon: "🎡", name: "HEP FIVE 摩天輪", note: "梅田地標 · ¥600 · 俯瞰大阪市景", hi: true },
        { time: "15:00", icon: "🛍️", name: "茶屋町 LOFT / 蔦屋書店", note: "文具・生活雜貨・設計小物，可以逛很久" },
        { time: "16:30", icon: "🏨", name: "換飯店 Check-in", note: "Cross Hotel Osaka · 心斎橋・長堀橋據點" },
        { time: "19:00", icon: "🍷", name: "晚餐：北新地", note: "大阪高端飲食區 · 小酒館氛圍完全不同" }
      ]
    },
    {
      date: "10/5",
      wd: "Mon",
      title: "Universal Studios Japan",
      tag: "Day 5",
      items: [
        { time: "08:00", icon: "🎢", name: "提早出發 USJ", note: "開園前30分鐘到場！旺季必備", hi: true },
        { time: "08:30", icon: "⚡", name: "哈利波特魔法世界", note: "奥比旺・魔法柺杖互動 · 霍格茲啤酒必喝" },
        { time: "11:00", icon: "🦕", name: "Jurassic Park & 主要設施", note: "善用 EXPRESS PASS 或排隊策略" },
        { time: "13:00", icon: "🌭", name: "園內午餐", note: "Three Broomsticks（哈利波特區）or Mel's Drive-In" },
        { time: "14:30", icon: "🎭", name: "下午遊玩", note: "Minion Park · Hollywood 區 · 確認當日表演時刻" },
        {
          time: "19:00",
          icon: "🌙",
          name: "夜間遊行 & 煙火",
          note: "10月特殊活動季，確認當天 night show 節目表",
          hi: true
        },
        { time: "21:00", icon: "🍜", name: "離園，宵夜", note: "難波或環球城周邊找宵夜補充體力" }
      ]
    },
    {
      date: "10/6",
      wd: "Tue",
      title: "最後の大阪・回家",
      tag: "Day 6",
      items: [
        { time: "09:00", icon: "🌅", name: "清晨道頓堀散步", note: "人潮最少，氛圍最美的道頓堀在清晨" },
        { time: "10:30", icon: "🛍️", name: "心斎橋最後購物衝刺", note: "藥妝・零食伴手禮・漏買的都在這補齊" },
        { time: "12:00", icon: "🏨", name: "飯店 Check-out", note: "行李寄放或直接帶往機場" },
        { time: "13:00", icon: "🍱", name: "最後の一餐", note: "好好享用最後一頓大阪美食，不要趕", hi: true },
        {
          time: "15:00",
          icon: "🚄",
          name: "前往關西機場",
          note: "南海電鐵 Rapi:t 特急 · 難波出發 · 約45分 · 請提早！"
        },
        { time: "18:00", icon: "✈️", name: "起飛回台", note: "MM928 · 再見，大阪 👋" }
      ]
    }
  ]
}

/* ── 收藏景點：修改這裡新增/移除地點 ── */
const savedPlaces = [
  // 美食
  { name: "馬屋午間套餐", cat: "美食", meal: "午餐", note: "Threads 推薦午間套餐", mapQuery: "但馬屋+心齋橋店" },
  { name: "道頓堀たこ焼き", cat: "美食", meal: "晚餐", note: "跟著人潮找的排隊攤位，不用特定一家", mapQuery: "道頓堀 たこ焼き 大阪" },
  {
    name: "串カツ 達磨 新世界",
    cat: "美食",
    meal: "午餐",
    note: "新世界元祖名店・二度漬け禁止！",
    mapQuery: "串カツ達磨 新世界 大阪"
  },
  { name: "麦と麺助", cat: "美食", meal: "午餐", note: "Threads推薦醬油拉麵", mapQuery: "麦と麺助 新梅田中津店" },
  // 玩樂
  {
    name: "Universal Studios Japan",
    cat: "玩樂",
    note: "哈利波特・Minion Park・10月夜間遊行",
    mapQuery: "Universal Studios Japan Osaka"
  },
  { name: "HEP FIVE 摩天輪", cat: "玩樂", note: "梅田地標・¥600・俯瞰大阪市景", mapQuery: "HEP FIVE 大阪 梅田" },
  {
    name: "あべのハルカス",
    cat: "玩樂",
    note: "日本最高百貨58F展望台・¥2,000・日落前最值",
    mapQuery: "あべのハルカス 大阪"
  },
  // 景點
  { name: "勝尾寺", cat: "景點", note: "Threads", mapQuery: "勝尾寺" },
  { name: "通天閣・新世界", cat: "景點", note: "昭和30年代復古街道・必逛！", mapQuery: "通天閣 新世界 大阪" },
  { name: "住吉大社", cat: "景點", note: "大阪最古老神社・太鼓橋超上相", mapQuery: "住吉大社 大阪" },
  { name: "道頓堀", cat: "景點", note: "グリコ看板・戎橋・法善寺横丁", mapQuery: "道頓堀 大阪" },
  { name: "心斎橋筋商店街", cat: "景點", note: "全長580m有頂拱廊・藥妝雜貨集中地", mapQuery: "心斎橋筋商店街 大阪" }
]
