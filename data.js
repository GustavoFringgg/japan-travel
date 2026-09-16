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
          label: "難波八阪・大阪城・心齋橋・道頓堀",
          badge: "地鐵為主",
          rows: [
            { label: "飯店 → 難波八阪神社", val: "大國町站步行 or 地鐵至難波站（約 10～15 分）" },
            { label: "難波八阪神社 → 大阪城", val: "難波站 → 谷町四丁目站（谷町線）・約 15 分" },
            { label: "大阪城 → 心齋橋", val: "谷町四丁目站 → 心齋橋站（長堀鶴見綠地線）・約 10 分" },
            { label: "心齋橋 → 道頓堀", val: "步行約 5～10 分" }
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
        { time: "18:15", icon: "🛬", name: "抵達關西機場 T2", note: "入境 → 提取行李" },
        {
          time: "19:00",
          icon: "🚃",
          name: "搭南海電鐵往難波",
          expand:
            "1. T2 -> 南海空港：在 T2 航廈外搭乘往 AEROPLAZA 1樓的接駁巴士，車程約7至9分鐘（約每10分鐘一班） \n\n2. 抵達後上手扶梯至二樓，走過空橋前往關西空港車站\n\n3. 乘坐南海特急 Rapi:t -> 南海難波站"
        },
        {
          time: "20:00",
          icon: "🚇",
          name: "南海難波轉乘地鐵 → 大國町站",
          expand:
            "1. 電車抵達南海難波站後，請順著月台上的大看板，朝 「3F 北改札口（北出口）」 的方向走\n\n2. 刷卡出閘門 ➔ 立刻會看到超長手扶 \n\n3. 正前方就會看到通往樓下的一長串大走廊與手扶梯，上方有大字標示紅色圓圈「M」：Osaka Metro 御堂筋線 \n\n4. 搭手扶梯一路下到「B1 地下街」\n\n5. 到了 B1 後，抬頭順著紅色 M 標誌往前直走約 1～2 分鐘，右手邊就會看到 御堂筋線 なんば駅 的 「南南改札口」（或「南改札口」\n\n5. 進閘門後搭手扶梯／電梯下到月台：請認明 「1 號月台」（往 天王寺／中百舌鳥 方向）\n\n6. 上車後只要搭乘 1 站（車程約 2 分鐘），聽到廣播 「Daiko-kucho（大國町）」 下車就到了\n\n7. 三號出口"
        },
        {
          time: "20:15",
          icon: "🏨",
          name: "飯店 Check-in",
          note: "住一難波南3號店",
          mapUrl: "https://maps.app.goo.gl/RWkgKKbw43bXrVZc6"
        }
      ]
    },
    {
      date: "10/2",
      wd: "Fri",
      title: "環球影城",
      tag: "Day 2",
      items: [
        {
          time: "07:30",
          icon: "🎢",
          name: "出發環球影城",
          note: "",
          expand:
            "1. 走路10分鐘，到新今公JR\n\n2. 往西九條大阪方向(上車搭10分鐘)\n\n3. 到了西九條下車轉搭 JR 夢咲線（櫻島線）\n\n4. 搭到環球城站（Universal-City Station）下車"
        },
        { time: "08:30", icon: "🎡", name: "抵達環球影城", note: "" },
        {
          time: "21:00",
          icon: "🌙",
          name: "離開環球影城",
          note: "",
          expand:
            "1. 搭乘 JR 夢咲線（櫻島線）至 西九條站下車\n\n2. 西九條站轉乘 JR 大阪環狀線（往內回方向，經大正、弁天町）至 新今宮站\n\n3. 走路10分鐘回飯店"
        },
        {
          time: "21:30",
          icon: "🏨",
          name: "抵達飯店",
          note: "住一難波南3號店",
          mapUrl: "https://maps.app.goo.gl/RWkgKKbw43bXrVZc6"
        }
      ]
    },
    {
      date: "10/3",
      wd: "Sat",
      title: "難波八阪・大阪城・心齋橋・道頓堀",
      tag: "Day 3",
      items: [
        { time: "09:00", icon: "⛩️", name: "八阪神社-難波", note: "" },
        { time: "10:30", icon: "🏯", name: "大阪城", note: "" },
        {
          time: "12:30",
          icon: "🍱",
          name: "Shake Shake 漢堡",
          note: "",
          mapUrl: "https://maps.app.goo.gl/BPVZjmZpSzAVfMwU8",
          expand: "營業時間: 10:00-21:30"
        },
        { time: "14:00", icon: "🛍️", name: "心齋橋", note: "" },
        { time: "16:00", icon: "🌉", name: "道頓堀", note: "" },
        {
          time: "20:15",
          icon: "🍱",
          name: "Enya Namba 串燒",
          note: "",
          mapUrl: "https://maps.app.goo.gl/BB28FCp2P1GcTrhY6"
        }
      ]
    },
    {
      date: "10/4",
      wd: "Sun",
      title: "京都・清水寺・祇園",
      tag: "Day 4",
      items: [
        { time: "07:30", icon: "🚃", name: "出門", note: "" },
        { time: "08:45", icon: "🏯", name: "抵達清水寺", note: "" },
        { time: "11:00", icon: "🎋", name: "三年坂（產寧坂）→ 二年坂", note: "" },
        { time: "12:30", icon: "🍱", name: "中餐", note: "" },
        { time: "14:00", icon: "⛩️", name: "八坂神社", note: "" },
        { time: "15:30", icon: "🌸", name: "祇園、花見小路 → 鴨川傍晚散步", note: "" },
        { time: "19:20", icon: "🌸", name: "通天閣", note: "" }
      ]
    },
    {
      date: "10/5",
      wd: "Mon",
      title: "勝尾寺・通天閣",
      tag: "Day 5",
      items: [
        {
          time: "08:50",
          icon: "🚃",
          name: "集合",
          note: "箕面萱野站",
          expand:
            "1. 出發站：大國町站 \n\n2. 搭乘路線：Osaka Metro 御堂筋線（「箕面萱野」方向）\n\n3. 下車站：箕面萱野站（車程約 37 分鐘）"
        },
        { time: "09:20", icon: "⛩️", name: "抵達勝尾寺", note: "" },
        {
          time: "12:45",
          icon: "🍖",
          name: "燒肉但馬屋 梅田店",
          note: "",
          mapUrl: "https://maps.app.goo.gl/N27sZgnnZwqVPX9Z6"
        },
        { time: "14:00", icon: "🏨", name: " 梅田 HEP百貨 ", note: "" },
        { time: "18:15", icon: "🌸", name: "  植物園 teamLab", note: "" }
      ]
    },
    {
      date: "10/6",
      wd: "Tue",
      title: "回家",
      tag: "Day 6",
      items: [
        { time: "06:30", icon: "🏨", name: "飯店 Check-out", note: "退房・整理行李" },
        {
          time: "07:30",
          icon: "🚃",
          name: "前往關西機場",
          note: "南海電鐵 Rapi:t 特急 · 難波出發 · 約 45 分",
          expand: ""
        },
        { time: "7:45", icon: "🛫", name: "抵達關西機場", note: "辦理登機・行李托運" },
        { time: "10:45", icon: "✈️", name: "起飛回台", note: "MM031 · 再見，大阪" }
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
