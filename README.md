# 🧪 Prompt Playground

一個小型的練習平台，讓你可以輸入 Prompt，並即時取得 OpenAI API 回應，適合用來練習 Prompt Engineering 的思維與調整。

## ✨ 專案功能

- 使用 OpenAI API 即時回應 Prompt
- 支援使用者輸入與回應顯示
- 基於 Next.js App Router 架構
- 使用 shadcn/ui 元件庫與 Tailwind CSS 美化 UI

## 📁 專案結構
prompt-playground/
├── app/
│ ├── api/
│ │ └── ask/route.ts # 處理後端 API 請求
│ ├── layout.tsx # 全域佈局樣式與 meta
│ └── page.tsx # 主畫面：輸入 prompt + 顯示回應
├── components/
│ └── ui/
│ ├── button.tsx
│ └── textarea.tsx # 自定義 UI 元件（來自 shadcn/ui）
├── styles/
│ └── globals.css # TailwindCSS 設定檔
└── tailwind.config.ts


## ⚙️ 使用方式

1. 安裝依賴：
```bash
npm install
```

2. 設定你的 OpenAI API 金鑰：
請在專案根目錄下建立 .env.local，加入：
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

3. 啟動專案：
```bash
npm run dev
```

## 📦 使用技術
Next.js 14（App Router）
React
Tailwind CSS
ShadCN UI
OpenAI API