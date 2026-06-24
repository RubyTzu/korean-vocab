export type VocabItem = {
  korean: string;
  chinese: string;
};

export type Unit = {
  id: number;
  title: string;
  vocab: VocabItem[];
};

export const units: Unit[] = [
  {
    id: 1,
    title: "問候 & 自我介紹",
    vocab: [
      { korean: "안녕하세요", chinese: "您好" },
      { korean: "감사합니다", chinese: "謝謝" },
      { korean: "죄송합니다", chinese: "非常抱歉" },
      { korean: "괜찮아요", chinese: "沒關係" },
      { korean: "잠깐만요", chinese: "請稍等" },
      { korean: "잘 부탁드립니다", chinese: "請多指教" },
      { korean: "알겠습니다", chinese: "我明白了" },
      { korean: "안녕히 계세요", chinese: "再見（對方留下）" },
      { korean: "안녕히 가세요", chinese: "再見（對方離開）" },
      { korean: "처음 뵙겠습니다", chinese: "初次見面" },
    ],
  },
  {
    id: 2,
    title: "數字 & 時間",
    vocab: [
      { korean: "오늘", chinese: "今天" },
      { korean: "어제", chinese: "昨天" },
      { korean: "내일", chinese: "明天" },
      { korean: "주말", chinese: "週末" },
      { korean: "생일", chinese: "生日" },
      { korean: "지금", chinese: "現在" },
      { korean: "아침", chinese: "早上" },
      { korean: "저녁", chinese: "晚上" },
      { korean: "시간", chinese: "時間／小時" },
      { korean: "분", chinese: "分鐘" },
    ],
  },
  {
    id: 3,
    title: "食物 & 餐廳",
    vocab: [
      { korean: "밥", chinese: "飯・米飯" },
      { korean: "물", chinese: "水" },
      { korean: "맛있어요", chinese: "好吃" },
      { korean: "맵다", chinese: "辣" },
      { korean: "달다", chinese: "甜" },
      { korean: "식당", chinese: "餐廳" },
      { korean: "메뉴", chinese: "菜單" },
      { korean: "주문", chinese: "點餐" },
      { korean: "계산", chinese: "結帳" },
      { korean: "배고프다", chinese: "肚子餓" },
    ],
  },
  {
    id: 4,
    title: "交通 & 方向",
    vocab: [
      { korean: "지하철", chinese: "地鐵" },
      { korean: "버스", chinese: "公車" },
      { korean: "택시", chinese: "計程車" },
      { korean: "역", chinese: "車站" },
      { korean: "공항", chinese: "機場" },
      { korean: "왼쪽", chinese: "左邊" },
      { korean: "오른쪽", chinese: "右邊" },
      { korean: "직진", chinese: "直走" },
      { korean: "어디", chinese: "哪裡" },
      { korean: "얼마나", chinese: "多久／多少" },
    ],
  },
  {
    id: 5,
    title: "購物",
    vocab: [
      { korean: "얼마예요", chinese: "多少錢？" },
      { korean: "싸다", chinese: "便宜" },
      { korean: "비싸다", chinese: "貴" },
      { korean: "사다", chinese: "買" },
      { korean: "팔다", chinese: "賣" },
      { korean: "가게", chinese: "店家" },
      { korean: "백화점", chinese: "百貨公司" },
      { korean: "카드", chinese: "信用卡" },
      { korean: "현금", chinese: "現金" },
      { korean: "영수증", chinese: "收據" },
    ],
  },
  {
    id: 6,
    title: "天氣 & 季節",
    vocab: [
      { korean: "날씨", chinese: "天氣" },
      { korean: "덥다", chinese: "熱" },
      { korean: "춥다", chinese: "冷" },
      { korean: "비", chinese: "雨" },
      { korean: "눈", chinese: "雪" },
      { korean: "바람", chinese: "風" },
      { korean: "봄", chinese: "春天" },
      { korean: "여름", chinese: "夏天" },
      { korean: "가을", chinese: "秋天" },
      { korean: "겨울", chinese: "冬天" },
    ],
  },
  {
    id: 7,
    title: "情緒 & 狀態",
    vocab: [
      { korean: "좋다", chinese: "好／喜歡" },
      { korean: "싫다", chinese: "討厭／不喜歡" },
      { korean: "기쁘다", chinese: "開心" },
      { korean: "슬프다", chinese: "難過" },
      { korean: "피곤하다", chinese: "疲倦" },
      { korean: "바쁘다", chinese: "忙碌" },
      { korean: "괜찮다", chinese: "還好／沒事" },
      { korean: "힘들다", chinese: "辛苦" },
      { korean: "신나다", chinese: "興奮" },
      { korean: "걱정되다", chinese: "擔心" },
    ],
  },
];
