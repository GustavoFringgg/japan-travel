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
      name: "ホテルリブマックス小倉駅前",
      area: "小倉駅前・北九州市",
      nights: "11/2 – 11/6",
      checkIn: "15:00",
      checkOut: "11:00",
      mapUrl: "https://maps.app.goo.gl/Z8LFR5oqbYv5KW6p7"
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
          time: "08:00",
          icon: "🍳",
          name: "洋食咖啡廳",
          note: "早餐",
          mapUrl: "https://maps.app.goo.gl/DHsLESCSjindTCbW9"
        },
        {
          time: "09:00",
          icon: "🏯",
          name: "小倉城",
          note: "天守閣參觀",
          expand: "走路 10-15 分鐘"
        },
        {
          time: "10:00",
          icon: "⛩️",
          name: "八坂神社",
          note: "小倉城旁・步行約 5 分"
        },
        {
          time: "11:00",
          icon: "🍜",
          name: "旦過市場",
          note: "午餐・市場散策，從八版神社走路10分鐘"
        },
        {
          time: "12:30",
          icon: "🚃",
          name: "前往宮地嶽神社",
          expand:
            "1. 搭乘北九州單軌電車，坐 2 站直達小倉站\n2. JR鹿兒島本線快速 → 福間駅（約 50～60 分）\n3. 轉乘巴士／計程車約 10 分（或步行約 25 分）"
        },
        {
          time: "14:00",
          icon: "⛩️",
          name: "宮地嶽神社",
          note: "本殿巨大注連繩・著名「光の道」參道（11 月非光之道季節，仍可參拜本殿、奧之宮）",
          expand:
            "1. 抵達福間站後，從 JR 福間站（宮地口） 出站 \n2. 福間站前搭乘往「津屋崎橋（經由宮地嶽神社）」方向的巴士（常見路線編號為 1-1 或 1-2）\n3. 在「宮地嶽神社前」站下車，票價約 170 日圓，下車後步行約 2 分鐘即達參道入口"
        },
        {
          time: "15:30",
          icon: "🚃",
          name: "返回小倉",
          expand: "原路搭巴士／計程車回福間駅 → JR返回小倉駅・約 50～60 分"
        },
        {
          time: "17:00",
          icon: "🍽️",
          name: "燒肉屋 天穗",
          note: "小倉車站周邊自由選擇",
          mapUrl: "https://maps.app.goo.gl/h73fQpWRuu29r9tD7"
        },
        {
          time: "19:00",
          icon: "🌃",
          name: "小倉城夜景"
        },
        {
          time: "20:30",
          icon: "🛍️",
          name: "montbell",
          mapUrl: "https://maps.app.goo.gl/uHRubz7EUfyeq5PF7"
        },
        {
          time: "21:30",
          icon: "🏨",
          name: "飯店 Check-in",
          note: "ホテルリブマックス小倉駅前",
          mapUrl: "https://maps.app.goo.gl/Z8LFR5oqbYv5KW6p7"
        }
      ]
    },
    {
      date: "11/3",
      wd: "Tue",
      title: "門司港・唐戶市場・皿倉山夜景",
      tag: "Day 2",
      items: [
        {
          time: "09:00",
          icon: "🚃",
          name: "前往門司港",
          expand: "小倉駅 → 門司港駅・JR 鹿兒島本線約 13～15 分"
        },
        {
          time: "09:20",
          icon: "⛩️",
          name: "甲宗八幡宮",
          note: "門司港駅步行約 10 分"
        },
        {
          time: "09:35",
          icon: "🚶",
          name: "前往和布刈神社",
          expand: "沿關門海峽步道北行，約 15 分"
        },
        {
          time: "09:50",
          icon: "⛩️",
          name: "和布刈神社",
          note: "位於關門海峽岬・和布刈公園，日本遺產景點"
        },
        {
          time: "10:05",
          icon: "🚶",
          name: "前往關門隧道人道入口",
          expand: "步行約 5 分，鄰近和布刈公園・御裳川公園"
        },
        {
          time: "10:15",
          icon: "🕳️",
          name: "關門海底隧道（人道）",
          note: "步行穿越隧道至下關側・全長約 780 公尺，約 15 分，跨越福岡／山口縣界"
        },
        {
          time: "10:30",
          icon: "🚌",
          name: "搭巴士到唐戶市場",
          expand:
            "1. 走出隧道電梯口、穿越馬路到對面靠近公園側的みもすそ川公車站 \n2. 只要是開往 「下關站（下関駅）」 方向的班車皆可搭乘\n3. 在 「唐戶（唐戸）」 站下車（車程約 5–7 分鐘）\n 上下車皆要刷卡 "
        },
        {
          time: "11:00",
          icon: "🐟",
          name: "唐戶市場",
          note: "午餐・新鮮海產・迴轉壽司"
        },
        {
          time: "12:00",
          icon: "⛩️",
          name: "赤間神宮",
          note: "唐戶市場步行約 5～10 分"
        },
        {
          time: "12:30",
          icon: "⛴️",
          name: "搭船返回門司港",
          expand: "關門汽船渡船・唐戶 → 門司港，約 5 分鐘航程"
        },
        {
          time: "13:00",
          icon: "🚠",
          name: "前往皿倉山展望台",
          expand:
            "門司港駅 → JR八幡駅（鹿兒島本線約 20～25 分）→ 轉乘巴士／計程車至帆柱纜車山麓站（約 10～15 分）→ 搭纜車＋斜行電梯上山"
        },
        {
          time: "14:00",
          icon: "🌆",
          name: "皿倉山展望台",
          note: "新日本三大夜景之一・11 月日落約 17:15，建議留到天黑看夜景"
        },
        {
          time: "18:30",
          icon: "🚃",
          name: "返回小倉",
          expand: "原路搭纜車下山 → 轉乘 JR 回小倉駅・總車程約 40～50 分"
        }
      ]
    },
    {
      date: "11/4",
      wd: "Wed",
      title: "太宰府・紅葉八幡宮・天神",
      tag: "Day 3",
      items: [
        {
          time: "07:00",
          icon: "🚃",
          name: "前往太宰府",
          expand:
            "小倉駅 → JR鹿兒島本線快速 → 博多駅（約 70 分）→ 轉乘地下鐵／西鐵至西鐵福岡(天神)駅 → 西鐵太宰府線直通特急 → 西鐵太宰府駅（約 30 分）・總車程約 1.5～2 小時"
        },
        {
          time: "09:00",
          icon: "⛩️",
          name: "太宰府天満宮",
          note: "参拝・名物梅枝餅・參道散策"
        },
        {
          time: "10:30",
          icon: "🚃",
          name: "前往紅葉八幡宮",
          expand: "西鐵太宰府 → 西鐵福岡(天神) 直通特急約 30 分 → 轉乘地下鐵七隈線至別府駅約 10 分 → 步行約 10～15 分"
        },
        {
          time: "11:45",
          icon: "⛩️",
          name: "紅葉八幡宮",
          note: "参拝"
        },
        {
          time: "12:30",
          icon: "🚇",
          name: "前往天神",
          expand: "地下鐵七隈線返回天神南駅・約 10 分"
        },
        {
          time: "13:00",
          icon: "🛍️",
          name: "天神地下街",
          note: "逛街・午茶・自由活動"
        },
        {
          time: "17:30",
          icon: "🍽️",
          name: "晚餐",
          note: "天神周邊自由選擇"
        },
        {
          time: "19:30",
          icon: "🚃",
          name: "返回小倉",
          expand: "西鐵福岡(天神)／博多駅 → JR返回小倉駅・約 1～1.5 小時"
        }
      ]
    },
    {
      date: "11/5",
      wd: "Thu",
      title: "博多一日・櫛田神社・運河城",
      tag: "Day 4",
      items: [
        {
          time: "09:00",
          icon: "🚃",
          name: "前往博多",
          expand: "小倉駅 → JR鹿兒島本線快速 → 博多駅・約 70 分（或新幹線約 20 分）"
        },
        {
          time: "10:15",
          icon: "🚶",
          name: "前往櫛田神社",
          expand: "博多駅步行約 15 分"
        },
        {
          time: "10:30",
          icon: "⛩️",
          name: "櫛田神社",
          note: "参拝・博多祇園山笠山笠展示"
        },
        {
          time: "11:00",
          icon: "🚶",
          name: "前往麵包超人博物館",
          expand: "步行約 5～10 分・博多リバレイン 5、6 樓"
        },
        {
          time: "11:15",
          icon: "🧸",
          name: "麵包超人博物館",
          note: "福岡アンパンマンこどもミュージアム＆モール（博多リバレイン）・建議事先預約門票"
        },
        {
          time: "13:00",
          icon: "🍜",
          name: "午餐",
          note: "博多リバレイン內或附近・博多拉麵等"
        },
        {
          time: "13:45",
          icon: "🚶",
          name: "前往博多運河城",
          expand: "步行約 10～15 分"
        },
        {
          time: "14:00",
          icon: "🏬",
          name: "博多運河城"
        },
        {
          time: "16:00",
          icon: "🚶",
          name: "前往博多車站",
          expand: "步行或地下鐵約 15 分"
        },
        {
          time: "16:30",
          icon: "🚉",
          name: "博多車站",
          note: "JR博多City購物・鐵道展望台"
        },
        {
          time: "18:30",
          icon: "🍽️",
          name: "晚餐",
          note: "博多車站周邊"
        },
        {
          time: "20:30",
          icon: "🚃",
          name: "返回小倉",
          expand: "JR博多駅 → 小倉駅・約 70 分"
        }
      ]
    },
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
