export type VocabItem = {
  korean: string;
  chinese: string;
};

export type Unit = {
  id: number;
  title: string;
  vocab: VocabItem[];
};

export type Week = {
  week: number;
  title: string;
  units: Unit[];
};

export const weeks: Week[] = [
  // ════════════════════════════════════════════
  // WEEK 1 — 開口第一步
  // ════════════════════════════════════════════
  {
    week: 1,
    title: "開口第一步",
    units: [
      {
        id: 1,
        title: "問候 & 道別",
        vocab: [
          { korean: "안녕하세요", chinese: "您好" },
          { korean: "안녕히 계세요", chinese: "再見（對方留下）" },
          { korean: "안녕히 가세요", chinese: "再見（對方離開）" },
          { korean: "처음 뵙겠습니다", chinese: "初次見面" },
          { korean: "반갑습니다", chinese: "很高興認識你" },
          { korean: "잘 지냈어요?", chinese: "你過得好嗎？" },
          { korean: "잘 지냈어요", chinese: "我過得很好" },
          { korean: "오랜만이에요", chinese: "好久不見" },
          { korean: "또 만나요", chinese: "再見／下次見" },
          { korean: "안녕", chinese: "嗨／掰掰（非正式）" },
        ],
      },
      {
        id: 2,
        title: "自我介紹",
        vocab: [
          { korean: "저는 ~이에요/예요", chinese: "我是～" },
          { korean: "이름이 뭐예요?", chinese: "你叫什麼名字？" },
          { korean: "제 이름은 ~이에요", chinese: "我的名字是～" },
          { korean: "어디서 왔어요?", chinese: "你從哪裡來？" },
          { korean: "대만 사람이에요", chinese: "我是台灣人" },
          { korean: "몇 살이에요?", chinese: "你幾歲？" },
          { korean: "직업이 뭐예요?", chinese: "你的職業是？" },
          { korean: "학생이에요", chinese: "我是學生" },
          { korean: "만나서 반가워요", chinese: "很高興見到你" },
          { korean: "잘 부탁드립니다", chinese: "請多指教" },
        ],
      },
      {
        id: 3,
        title: "基本禮貌用語",
        vocab: [
          { korean: "감사합니다", chinese: "謝謝（正式）" },
          { korean: "고마워요", chinese: "謝謝（非正式）" },
          { korean: "천만에요", chinese: "不客氣" },
          { korean: "죄송합니다", chinese: "非常抱歉（正式）" },
          { korean: "미안해요", chinese: "對不起（非正式）" },
          { korean: "괜찮아요", chinese: "沒關係" },
          { korean: "잠깐만요", chinese: "請稍等" },
          { korean: "알겠습니다", chinese: "我明白了" },
          { korean: "네", chinese: "是／對" },
          { korean: "아니요", chinese: "不是／不對" },
        ],
      },
      {
        id: 4,
        title: "基本疑問詞",
        vocab: [
          { korean: "뭐예요?", chinese: "是什麼？" },
          { korean: "어디예요?", chinese: "在哪裡？" },
          { korean: "언제예요?", chinese: "是什麼時候？" },
          { korean: "누구예요?", chinese: "是誰？" },
          { korean: "왜요?", chinese: "為什麼？" },
          { korean: "어떻게요?", chinese: "怎麼（做）？" },
          { korean: "얼마예요?", chinese: "多少錢？" },
          { korean: "몇 개예요?", chinese: "有幾個？" },
          { korean: "어느 거예요?", chinese: "是哪一個？" },
          { korean: "맞아요?", chinese: "對嗎？" },
        ],
      },
      {
        id: 5,
        title: "日常時間詞",
        vocab: [
          { korean: "오늘", chinese: "今天" },
          { korean: "어제", chinese: "昨天" },
          { korean: "내일", chinese: "明天" },
          { korean: "지금", chinese: "現在" },
          { korean: "아침", chinese: "早上" },
          { korean: "점심", chinese: "中午" },
          { korean: "저녁", chinese: "傍晚／晚上" },
          { korean: "밤", chinese: "夜晚" },
          { korean: "이따가", chinese: "等一下／待會" },
          { korean: "나중에", chinese: "之後／待會" },
        ],
      },
      {
        id: 6,
        title: "情緒 & 狀態",
        vocab: [
          { korean: "좋아요", chinese: "好／喜歡" },
          { korean: "싫어요", chinese: "討厭／不喜歡" },
          { korean: "기뻐요", chinese: "開心" },
          { korean: "슬퍼요", chinese: "難過" },
          { korean: "피곤해요", chinese: "疲倦" },
          { korean: "바빠요", chinese: "忙碌" },
          { korean: "괜찮아요", chinese: "還好／沒事" },
          { korean: "힘들어요", chinese: "辛苦／很累" },
          { korean: "배고파요", chinese: "肚子餓" },
          { korean: "졸려요", chinese: "想睡覺" },
        ],
      },
      {
        id: 7,
        title: "顏色 & 形容詞",
        vocab: [
          { korean: "빨간색", chinese: "紅色" },
          { korean: "파란색", chinese: "藍色" },
          { korean: "노란색", chinese: "黃色" },
          { korean: "초록색", chinese: "綠色" },
          { korean: "하얀색", chinese: "白色" },
          { korean: "검은색", chinese: "黑色" },
          { korean: "크다", chinese: "大" },
          { korean: "작다", chinese: "小" },
          { korean: "예뻐요", chinese: "漂亮" },
          { korean: "맛있어요", chinese: "好吃" },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════
  // WEEK 2 — 數字與生活
  // ════════════════════════════════════════════
  {
    week: 2,
    title: "數字與生活",
    units: [
      {
        id: 8,
        title: "固有數詞（數物品）",
        vocab: [
          { korean: "하나", chinese: "一（數物品）" },
          { korean: "둘", chinese: "二（數物品）" },
          { korean: "셋", chinese: "三（數物品）" },
          { korean: "넷", chinese: "四（數物品）" },
          { korean: "다섯", chinese: "五（數物品）" },
          { korean: "여섯", chinese: "六（數物品）" },
          { korean: "일곱", chinese: "七（數物品）" },
          { korean: "여덟", chinese: "八（數物品）" },
          { korean: "아홉", chinese: "九（數物品）" },
          { korean: "열", chinese: "十（數物品）" },
        ],
      },
      {
        id: 9,
        title: "漢字數詞（時間金錢）",
        vocab: [
          { korean: "일", chinese: "一（漢字數）" },
          { korean: "이", chinese: "二（漢字數）" },
          { korean: "삼", chinese: "三（漢字數）" },
          { korean: "사", chinese: "四（漢字數）" },
          { korean: "오", chinese: "五（漢字數）" },
          { korean: "육", chinese: "六（漢字數）" },
          { korean: "칠", chinese: "七（漢字數）" },
          { korean: "팔", chinese: "八（漢字數）" },
          { korean: "구", chinese: "九（漢字數）" },
          { korean: "십／백／천／만", chinese: "十／百／千／萬" },
        ],
      },
      {
        id: 10,
        title: "時間說法",
        vocab: [
          { korean: "몇 시예요?", chinese: "幾點？" },
          { korean: "한 시", chinese: "一點鐘" },
          { korean: "두 시", chinese: "兩點鐘" },
          { korean: "세 시 반", chinese: "三點半" },
          { korean: "오전", chinese: "上午" },
          { korean: "오후", chinese: "下午" },
          { korean: "분", chinese: "分鐘" },
          { korean: "초", chinese: "秒" },
          { korean: "일찍", chinese: "早" },
          { korean: "늦게", chinese: "晚／遲" },
        ],
      },
      {
        id: 11,
        title: "星期 & 日期",
        vocab: [
          { korean: "월요일", chinese: "星期一" },
          { korean: "화요일", chinese: "星期二" },
          { korean: "수요일", chinese: "星期三" },
          { korean: "목요일", chinese: "星期四" },
          { korean: "금요일", chinese: "星期五" },
          { korean: "토요일", chinese: "星期六" },
          { korean: "일요일", chinese: "星期日" },
          { korean: "몇 월 며칠이에요?", chinese: "幾月幾號？" },
          { korean: "무슨 요일이에요?", chinese: "星期幾？" },
          { korean: "주말", chinese: "週末" },
        ],
      },
      {
        id: 12,
        title: "價格 & 金錢",
        vocab: [
          { korean: "원", chinese: "韓元（₩）" },
          { korean: "얼마예요?", chinese: "多少錢？" },
          { korean: "천 원", chinese: "一千元" },
          { korean: "만 원", chinese: "一萬元" },
          { korean: "거스름돈", chinese: "找零" },
          { korean: "할인", chinese: "折扣" },
          { korean: "세일", chinese: "特賣／Sale" },
          { korean: "공짜", chinese: "免費" },
          { korean: "영수증", chinese: "收據" },
          { korean: "카드로 낼게요", chinese: "我要刷卡" },
        ],
      },
      {
        id: 13,
        title: "數量單位",
        vocab: [
          { korean: "개", chinese: "個（一般物品）" },
          { korean: "명 / 분", chinese: "位（人，분較敬語）" },
          { korean: "잔", chinese: "杯（飲料）" },
          { korean: "병", chinese: "瓶" },
          { korean: "그릇", chinese: "碗" },
          { korean: "장", chinese: "張（紙／票）" },
          { korean: "권", chinese: "本（書）" },
          { korean: "벌", chinese: "套（衣服）" },
          { korean: "켤레", chinese: "雙（鞋／襪）" },
          { korean: "번", chinese: "次／號（次數）" },
        ],
      },
      {
        id: 14,
        title: "電話 & 聯絡",
        vocab: [
          { korean: "전화번호", chinese: "電話號碼" },
          { korean: "전화해요", chinese: "打電話" },
          { korean: "문자 보내요", chinese: "傳簡訊" },
          { korean: "카카오톡", chinese: "KakaoTalk" },
          { korean: "연락처", chinese: "聯絡方式" },
          { korean: "저장해요", chinese: "儲存" },
          { korean: "통화 중", chinese: "通話中／忙線" },
          { korean: "부재중", chinese: "未接來電" },
          { korean: "공 / 영", chinese: "零（電話讀法）" },
          { korean: "인터넷", chinese: "網路" },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════
  // WEEK 3 — 出門與移動
  // ════════════════════════════════════════════
  {
    week: 3,
    title: "出門與移動",
    units: [
      {
        id: 15,
        title: "交通工具",
        vocab: [
          { korean: "지하철", chinese: "地鐵" },
          { korean: "버스", chinese: "公車" },
          { korean: "택시", chinese: "計程車" },
          { korean: "기차", chinese: "火車" },
          { korean: "비행기", chinese: "飛機" },
          { korean: "자전거", chinese: "腳踏車" },
          { korean: "자동차", chinese: "汽車" },
          { korean: "배", chinese: "船" },
          { korean: "오토바이", chinese: "機車" },
          { korean: "걸어서", chinese: "走路／步行" },
        ],
      },
      {
        id: 16,
        title: "方向 & 位置",
        vocab: [
          { korean: "왼쪽", chinese: "左邊" },
          { korean: "오른쪽", chinese: "右邊" },
          { korean: "직진", chinese: "直走" },
          { korean: "앞", chinese: "前面" },
          { korean: "뒤", chinese: "後面" },
          { korean: "위", chinese: "上面" },
          { korean: "아래", chinese: "下面" },
          { korean: "옆", chinese: "旁邊" },
          { korean: "안", chinese: "裡面" },
          { korean: "밖", chinese: "外面" },
        ],
      },
      {
        id: 17,
        title: "問路 & 地點",
        vocab: [
          { korean: "어디예요?", chinese: "在哪裡？" },
          { korean: "얼마나 걸려요?", chinese: "需要多久？" },
          { korean: "가까워요", chinese: "很近" },
          { korean: "멀어요", chinese: "很遠" },
          { korean: "역", chinese: "車站" },
          { korean: "공항", chinese: "機場" },
          { korean: "병원", chinese: "醫院" },
          { korean: "약국", chinese: "藥局" },
          { korean: "편의점", chinese: "便利商店" },
          { korean: "화장실", chinese: "廁所" },
        ],
      },
      {
        id: 18,
        title: "購物",
        vocab: [
          { korean: "사고 싶어요", chinese: "我想買" },
          { korean: "주세요", chinese: "請給我" },
          { korean: "있어요?", chinese: "有嗎？" },
          { korean: "없어요", chinese: "沒有" },
          { korean: "더 큰 거 있어요?", chinese: "有更大的嗎？" },
          { korean: "입어봐도 돼요?", chinese: "可以試穿嗎？" },
          { korean: "깎아 주세요", chinese: "可以便宜一點嗎？" },
          { korean: "포장해 주세요", chinese: "請幫我包裝" },
          { korean: "봉투", chinese: "袋子" },
          { korean: "교환／환불", chinese: "換貨／退款" },
        ],
      },
      {
        id: 19,
        title: "餐廳點餐",
        vocab: [
          { korean: "자리 있어요?", chinese: "有位子嗎？" },
          { korean: "메뉴 주세요", chinese: "請給我菜單" },
          { korean: "이거 주세요", chinese: "我要這個" },
          { korean: "추천해 주세요", chinese: "請推薦" },
          { korean: "맵지 않게 해주세요", chinese: "請不要做辣的" },
          { korean: "물 더 주세요", chinese: "請再給我水" },
          { korean: "맛있어요", chinese: "好吃" },
          { korean: "계산해 주세요", chinese: "請幫我結帳" },
          { korean: "포장이요", chinese: "外帶" },
          { korean: "같이 낼게요", chinese: "我們一起付" },
        ],
      },
      {
        id: 20,
        title: "天氣",
        vocab: [
          { korean: "날씨가 어때요?", chinese: "天氣怎麼樣？" },
          { korean: "더워요", chinese: "熱" },
          { korean: "추워요", chinese: "冷" },
          { korean: "따뜻해요", chinese: "溫暖" },
          { korean: "시원해요", chinese: "涼爽" },
          { korean: "비가 와요", chinese: "下雨了" },
          { korean: "눈이 와요", chinese: "下雪了" },
          { korean: "바람이 불어요", chinese: "在刮風" },
          { korean: "맑아요", chinese: "晴天" },
          { korean: "흐려요", chinese: "陰天" },
        ],
      },
      {
        id: 21,
        title: "身體 & 健康",
        vocab: [
          { korean: "아파요", chinese: "痛／不舒服" },
          { korean: "머리가 아파요", chinese: "頭痛" },
          { korean: "배가 아파요", chinese: "肚子痛" },
          { korean: "열이 나요", chinese: "發燒" },
          { korean: "감기 걸렸어요", chinese: "感冒了" },
          { korean: "병원에 가야 해요", chinese: "必須去醫院" },
          { korean: "약 주세요", chinese: "請給我藥" },
          { korean: "괜찮아요", chinese: "沒事了" },
          { korean: "쉬어야 해요", chinese: "必須休息" },
          { korean: "건강해요", chinese: "很健康" },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════
  // WEEK 4 — 日常對話進階
  // ════════════════════════════════════════════
  {
    week: 4,
    title: "日常對話進階",
    units: [
      {
        id: 22,
        title: "家人 & 人際關係",
        vocab: [
          { korean: "가족", chinese: "家人" },
          { korean: "부모님", chinese: "父母" },
          { korean: "아버지", chinese: "父親" },
          { korean: "어머니", chinese: "母親" },
          { korean: "형 / 오빠", chinese: "哥哥（男生用／女生用）" },
          { korean: "누나 / 언니", chinese: "姐姐（男生用／女生用）" },
          { korean: "남동생", chinese: "弟弟" },
          { korean: "여동생", chinese: "妹妹" },
          { korean: "친구", chinese: "朋友" },
          { korean: "남자친구 / 여자친구", chinese: "男友／女友" },
        ],
      },
      {
        id: 23,
        title: "家 & 空間",
        vocab: [
          { korean: "집", chinese: "家／房子" },
          { korean: "방", chinese: "房間" },
          { korean: "부엌", chinese: "廚房" },
          { korean: "화장실", chinese: "廁所／浴室" },
          { korean: "거실", chinese: "客廳" },
          { korean: "침대", chinese: "床" },
          { korean: "책상", chinese: "書桌" },
          { korean: "창문", chinese: "窗戶" },
          { korean: "문", chinese: "門" },
          { korean: "냉장고", chinese: "冰箱" },
        ],
      },
      {
        id: 24,
        title: "食物 & 飲料",
        vocab: [
          { korean: "밥", chinese: "白飯" },
          { korean: "국", chinese: "湯" },
          { korean: "김치", chinese: "泡菜" },
          { korean: "고기", chinese: "肉" },
          { korean: "생선", chinese: "魚" },
          { korean: "채소", chinese: "蔬菜" },
          { korean: "과일", chinese: "水果" },
          { korean: "커피", chinese: "咖啡" },
          { korean: "차", chinese: "茶" },
          { korean: "술", chinese: "酒" },
        ],
      },
      {
        id: 25,
        title: "動詞：日常行動",
        vocab: [
          { korean: "가요", chinese: "去" },
          { korean: "와요", chinese: "來" },
          { korean: "먹어요", chinese: "吃" },
          { korean: "마셔요", chinese: "喝" },
          { korean: "자요", chinese: "睡覺" },
          { korean: "일어나요", chinese: "起床" },
          { korean: "씻어요", chinese: "洗澡／洗" },
          { korean: "입어요", chinese: "穿（衣服）" },
          { korean: "봐요", chinese: "看" },
          { korean: "들어요", chinese: "聽" },
        ],
      },
      {
        id: 26,
        title: "動詞：溝通行動",
        vocab: [
          { korean: "말해요", chinese: "說" },
          { korean: "물어봐요", chinese: "問" },
          { korean: "대답해요", chinese: "回答" },
          { korean: "알아요", chinese: "知道／明白" },
          { korean: "몰라요", chinese: "不知道" },
          { korean: "생각해요", chinese: "想／思考" },
          { korean: "기다려요", chinese: "等待" },
          { korean: "도와줘요", chinese: "幫忙" },
          { korean: "부탁해요", chinese: "拜託／請求" },
          { korean: "약속해요", chinese: "約定／承諾" },
        ],
      },
      {
        id: 27,
        title: "興趣 & 嗜好",
        vocab: [
          { korean: "좋아해요", chinese: "喜歡" },
          { korean: "음악", chinese: "音樂" },
          { korean: "영화", chinese: "電影" },
          { korean: "운동", chinese: "運動" },
          { korean: "여행", chinese: "旅行" },
          { korean: "요리", chinese: "料理／烹飪" },
          { korean: "독서", chinese: "閱讀" },
          { korean: "게임", chinese: "遊戲" },
          { korean: "사진", chinese: "照片／拍照" },
          { korean: "쇼핑", chinese: "購物" },
        ],
      },
      {
        id: 28,
        title: "常用句型",
        vocab: [
          { korean: "~고 싶어요", chinese: "我想要～" },
          { korean: "~할 수 있어요?", chinese: "可以做～嗎？" },
          { korean: "~해도 돼요?", chinese: "做～可以嗎？" },
          { korean: "~하지 마세요", chinese: "請不要做～" },
          { korean: "~해야 해요", chinese: "必須做～" },
          { korean: "~는 게 좋아요", chinese: "做～比較好" },
          { korean: "~이/가 있어요", chinese: "有～" },
          { korean: "~이/가 없어요", chinese: "沒有～" },
          { korean: "~을/를 주세요", chinese: "請給我～" },
          { korean: "~는 어때요?", chinese: "～怎麼樣？" },
        ],
      },
    ],
  },
];

// 把所有單元攤平，方便抽考用
export const allUnits = weeks.flatMap((w) => w.units);
