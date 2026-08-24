/* ── 行程資料：修改這裡換成真實資料 ── */
const trip = {
  flights: {
    out: {
      flightNo: "MM032",
      airline: "Peach Aviation",
      from: "KHH",
      fromName: "KHH",
      to: "KIX",
      toName: "關西國際T2",
      depart: "14:10",
      arrive: "18:15",
      date: "2026/10/01"
    },
    ret: {
      flightNo: "MM031",
      airline: "Peach Aviation",
      from: "KIX",
      fromName: "關西國際T2",
      to: "KHH",
      toName: "KHH",
      depart: "10:45",
      arrive: "13:10",
      date: "2026/10/06"
    }
  },
  hotels: [
    {
      name: "住一難波南3號店",
      area: "難波・中央區",
      nights: "10/1 – 10/6",
      checkIn: "15:00",
      checkOut: "11:00",
      mapUrl: "https://maps.app.goo.gl/RWkgKKbw43bXrVZc6"
    }
  ],
  transit: [
    {
      date: "10/1",
      cards: [
        {
          icon: "🚃",
          label: "關西機場 → 大國町站",
          badge: "南海電鐵",
          rows: [
            { label: "Step 1", val: "關西機場站搭 南海空港急行 或 Rapi:t 特急 → 南海難波站（約 35～45 分）" },
            { label: "Step 2", val: "站內步行至 Osaka Metro 難波站（約 5～8 分）" },
            { label: "Step 3", val: "搭御堂筋線 或 四橋線 往天王寺方向 → 大國町站（1 站・約 2 分）" },
            { label: "總車程", val: "約 50～60 分鐘" }
          ]
        },
        {
          icon: "💳",
          label: "ICOCA 交通卡",
          badge: "機場購買",
          rows: [
            { label: "購買地點", val: "關西機場各大售票機" },
            { label: "押金", val: "¥500（退卡可退還）" },
            { label: "建議加值", val: "¥3,000 – ¥5,000 可撐整趟旅程" },
            { label: "適用範圍", val: "地鐵・JR・巴士・部分便利商店" }
          ]
        }
      ]
    },
    {
      date: "10/2",
      cards: [
        {
          icon: "🚇",
          label: "大阪城・心斎橋",
          badge: "地鐵為主",
          rows: [
            { label: "飯店 → 大阪城", val: "大國町站 → 谷町四丁目站（谷町線）・約 10 分" },
            { label: "大阪城 → 黒門市場", val: "步行約 15 分 or 地鐵至日本橋站" },
            { label: "黒門 → 心斎橋", val: "步行約 10 分" }
          ]
        }
      ]
    },
    {
      date: "10/3",
      cards: [
        {
          icon: "🚇",
          label: "住吉大社・天王寺・新世界",
          badge: "地鐵 + 阪堺電車",
          rows: [
            { label: "飯店 → 住吉大社", val: "大國町站 → 天王寺站（御堂筋線）→ 阪堺電車 → 住吉大社前（約 40 分）" },
            { label: "住吉大社 → 天王寺", val: "阪堺電車 → 天王寺駅前（約 25 分）" },
            { label: "天王寺 → 新世界", val: "步行約 10 分 or 地鐵動物園前站 1 站" }
          ]
        }
      ]
    },
    {
      date: "10/4",
      cards: [
        {
          icon: "🚇",
          label: "梅田・北大阪",
          badge: "御堂筋線直達",
          rows: [
            { label: "飯店 → 梅田", val: "大國町站 → 梅田站（御堂筋線）・約 10 分" },
            { label: "梅田站出口", val: "Grand Front 方向・地下街直通" }
          ]
        }
      ]
    },
    {
      date: "10/5",
      cards: [
        {
          icon: "🎢",
          label: "飯店 → USJ",
          badge: "JR 夢咲線",
          rows: [
            { label: "路線", val: "大國町站 → 難波站 → 西九條站 → ユニバーサルシティ站（JR 夢咲線）" },
            { label: "總車程", val: "約 30～40 分" },
            { label: "建議", val: "開園前 30 分出發，旺季人多要早" }
          ]
        }
      ]
    },
    {
      date: "10/6",
      cards: [
        {
          icon: "🚃",
          label: "難波 → 關西機場",
          badge: "南海 Rapi:t",
          rows: [
            { label: "路線", val: "南海難波站搭 Rapi:t 特急 → 關西機場站" },
            { label: "所需時間", val: "約 45 分鐘" },
            { label: "出發建議", val: "飛機起飛前 3 小時離開飯店" },
            { label: "備註", val: "抵達 T1，Peach 使用 T2 需搭接駁電車（約 5 分）" }
          ]
        }
      ]
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
        { time: "18:15", icon: "🛬", name: "抵達關西機場 T2", note: "入境 → 提取行李", hi: true },
        { time: "19:00", icon: "🚃", name: "搭南海電鐵往難波", note: "南海空港急行 or Rapi:t 特急 · 約 40 分" },
        {
          time: "20:00",
          icon: "🚇",
          name: "地鐵轉乘 → 大國町站",
          note: "步行至 Osaka Metro 難波站 → 御堂筋線 or 四橋線 1 站"
        },
        { time: "20:15", icon: "🏨", name: "飯店 Check-in", note: "住一難波南3號店" }
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
  {
    name: "道頓堀たこ焼き",
    cat: "美食",
    meal: "晚餐",
    note: "跟著人潮找的排隊攤位，不用特定一家",
    mapQuery: "道頓堀 たこ焼き 大阪"
  },
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
