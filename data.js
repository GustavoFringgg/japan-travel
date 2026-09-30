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
            { label: "Step 1", val: "關西機場站搭 南海空港急行 或 Rapi:t 特急 → 新今宮站）" },
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
            "1. T2 -> 南海空港：在 T2 航廈外搭乘往 AEROPLAZA 1樓的接駁巴士，車程約7至9分鐘（約每10分鐘一班） \n\n2. 抵達後上手扶梯至二樓，走過空橋前往關西空港車站\n\n3. 乘坐南海特急 Rapi:t -> 新今宮"
        },
        {
          time: "20:00",
          icon: "🚇",
          name: "南海難波轉乘地鐵 → 新今宫站",
          expand:
            "1. 下電車後在月台上看頭頂的標示，找到「エレベーター（電梯 / Elevator）」 到一樓\n2. 出電梯就是南海電鐵的 「1 樓改札口（北出口通道）」"
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
            "1. 走路10分鐘，到新今宮JR\n\n2. 往西九條大阪方向(上車搭10分鐘)\n\n3. 到了西九條下車轉搭 JR 夢咲線（櫻島線）\n\n4. 搭到環球城站（Universal-City Station）下車\n ps. 早晨偶爾會有少數看板顯示直達「櫻島（Sakurajima）」的班次，若剛好遇到，就可以不用在西九條換車、一路直達環球城站"
        },
        {
          time: "08:30",
          icon: "🎡",
          name: "抵達環球影城",
          note: "",
          expand:
            "快通 \n1. 13:20-14:20: 超級任天堂世界園區入場 \n2. 13:20-13:50: 瑪利歐賽車～庫巴的挑戰書 \n3. 13:50-14:20: 咚奇剛的瘋狂礦車 \n4. 15:30-16:00: 小小兵瘋狂任務～成為大壞蛋之路 \n擇一體驗: \n1. 飛天翼龍 \n2. 哈利波特禁忌之旅"
        },
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
        { time: "09:00", icon: "⛩️", name: "八阪神社-難波", note: "", expand: "步行 8-10 分鐘即可抵達" },
        {
          time: "09:05",
          icon: "⛩️",
          name: "浪漫焼き芋芋の巣なんば本店",
          note: "",
          mapUrl: "https://maps.app.goo.gl/M1UoAEJzE2a3capx7"
        },
        {
          time: "10:30",
          icon: "🏯",
          name: "大阪城",
          note: "",
          expand:
            "1. 步行至難波站4 號或 5 號出口,走下樓梯到地下 1 樓\n2. 進站要走「南北改札口」\n3. 往 2 號月台（往梅田・新大阪方向） \n4. 乘大阪地鐵御堂筋線約兩站至「本町站」，轉乘中央線至「谷町四丁目站」\n\n 在難波站 2 號月台候車時，請走到列車最前方的車廂（第 10 節或第 9 節車廂） 上車 \n 下車後，抬頭看天花板懸掛的指標，尋找代表 中央線（Chuo Line） 的 「綠色圓圈 C」 圖示 \n 請走往 「1 號月台」 \n 指標會寫著：谷町四丁目・森ノ宮・生駒・長田・学研奈良登美ヶ丘 方面 \n 停靠順序為：本町 ➔ 堺筋本町 ➔ 谷町四丁目（車程約 5～6 分鐘） \n 抵達 谷町四丁目車站 站下車，並於 9 號出口出門"
        },
        {
          time: "12:30",
          icon: "🍱",
          name: "Shake Shake 漢堡",
          note: "",
          mapUrl: "https://maps.app.goo.gl/BPVZjmZpSzAVfMwU8",
          expand:
            "營業時間: 10:00-21:30 \n 1. 森之宮站搭乘地鐵至「心齋橋站」\n2.地下連通道可直通大丸百貨 \n\n 從大阪城公園走回地下鐵「森之宮站」\n 找淺綠色指標：這次進站後，請抬頭尋找「淺綠色圓圈 N」的指標（長堀鶴見綠地線 / Nagahori Tsurumi-ryokuchi Line）\n 走到長堀鶴見綠地線的月台，搭乘往「心齋橋・大正」方向的列車 \n 下車後，請尋找車站內的黃色出口指標，朝著「南改札（南剪票口）」或「大丸百貨店 / 4 號出口」的方向走 \n刷卡出站後，直接就能從地下通道走進大丸百貨，搭手扶梯上 1 樓，就可以舒舒服服地吃漢堡了，完全不用走到地面上找路\n\n 途中經過: 玉造 ➡️ 谷町六丁目 ➡️ 松屋町 ➡️ 長堀橋 ➡️ 心齋橋站"
        },
        {
          time: "14:00",
          icon: "🛍️",
          name: "心齋橋 / Uniqlo Shinsaibashi / GU",
          note: "",
          expand: "建議由北向南漫步逛街，一路往戎橋與道頓堀方向前進"
        },
        { time: "16:00", icon: "🌉", name: "道頓堀", note: "" },
        {
          time: "20:15",
          icon: "🍱",
          name: "Enya Namba 串燒",
          note: "",
          mapUrl: "https://maps.app.goo.gl/BB28FCp2P1GcTrhY6",
          expand:
            "1. 步行進地鐵站( 難波千日前往南海難波站 / 高島屋方向走 ) \n2. 在 難波站 刷卡搭乘 御堂筋線（紅色線）\n3. 搭乘往 天王寺、中百舌鳥、住之江公園（往南）方向的電車 \n4. 只要搭 1 站 就抵達 大國町站"
        }
      ]
    },
    {
      date: "10/4",
      wd: "Sun",
      title: "京都・清水寺・祇園",
      tag: "Day 4",
      items: [
        {
          time: "07:30",
          icon: "🚃",
          name: "出門",
          note: "",
          expand:
            "用西瓜卡即可\n1. 搭乘 Osaka Metro 御堂筋線：從 大國町站 搭乘御堂筋線（往新大阪／千里中央方向）至 淀屋桥\n\n2.轉乘京阪電車（京阪本線）：站內依指標轉乘 京阪本線。搭乘 特急 列車（往出町柳方向），至七條站下車，不要換月台直接等下一台<準急、區間急行、普通車>上車到清水五条（車程約 50～55 分鐘）\n\n3.攔計程車上清水寺"
        },
        { time: "08:45", icon: "🏯", name: "抵達清水寺", note: "" },
        { time: "11:00", icon: "🎋", name: "三年坂（產寧坂）→ 二年坂", note: "" },
        {
          time: "12:30",
          icon: "🍱",
          name: "炭燒鰻 土井活鰻 祇園八坂店",
          note: "",
          mapUrl: "https://maps.app.goo.gl/14A7PYBA5Phegpab7"
        },
        { time: "14:00", icon: "⛩️", name: "八坂神社", note: "" },
        {
          time: "15:30",
          icon: "🌸",
          name: "祇園、花見小路 → 鴨川傍晚散步",
          note: "",
          expand:
            "1. 進入祇園四條站\n2. 搭乘 京阪本線「特急」電車（往淀屋橋方向）\n3. 一路搭到終點站 淀屋橋 站 下車\n 4. 站內轉乘 Osaka Metro 御堂筋線（紅色線）\n5. 搭乘往 天王寺、難波、中百舌鳥（南下）方向的電車\n6. 搭乘 4 站（途經本町、心齋橋、難波）即可直達 大國町站"
        },
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
          mapUrl: "https://maps.app.goo.gl/N27sZgnnZwqVPX9Z6",
          expand:
            "1. 進入 箕面萱野 站剪票口 \n2. 搭乘線路：搭乘 北大阪急行電鐵（直通大阪地鐵御堂筋線），往 「中百舌鳥 / なかもず」 或 「天王寺」 方向的列車 \n3. 約 24 分鐘直達梅田站\n4. 在御堂筋線梅田站下車後，朝 「南改札（南剪票口）」 方向出站\n5. 出站後順著地下通道往南走（往阪神百貨店、地下鐵谷町線「東梅田站」方向） \n6. 沿途抬頭看指標，尋找 「E-ma」 或 「ディアモール大阪（Whity梅田 / Diamor 地下街）」"
        },
        { time: "14:00", icon: "🏨", name: " 梅田 HEP百貨 ", note: "" },
        { time: "18:15", icon: "🌸", name: "  植物園 teamLab", note: "" }
      ]
    },
    {
      date: "10/6",
      wd: "Tue",
      title: "哭哭回家",
      tag: "Day 6",
      items: [
        { time: "06:30", icon: "🏨", name: "飯店 Check-out", note: "退房・整理行李" },
        {
          time: "07:32",
          icon: "🚃",
          name: "前往關西機場(南海地鐵發車時間)",
          note: "南海電鐵 Rapi:t 特急 · 新今宮出發 · 約 40 分"
        },
        {
          time: "08:10",
          icon: "🛫",
          name: "抵達關西機場",
          note: "辦理登機・行李托運",
          expand:
            "1. 出南海電鐵閘門後，請往右轉（朝著 AEROPLAZA 方向走)\n2. 走過聯絡空橋進入 AEROPLAZA 大樓，順著指標搭乘手扶梯或電梯下到 1 樓\n3. 1 樓門口就是前往第 2 航廈的免費穿梭巴士站（Terminal 2 Shuttle Bus）"
        },
        { time: "10:45", icon: "✈️", name: "航班起飛時間", note: "MM031 · 再見，大阪" },
        { time: "13:10", icon: "🛫", name: "抵達高雄機場", note: "哭哭" }
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
