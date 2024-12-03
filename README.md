# React Checkout Progress App

This is my first React project, a simple multi-step checkout flow featuring dynamic progress tracking, cart updates, and a user-friendly interface.

## Features

- **Multi-Step Navigation**: Navigate through the steps with "Next Page" and "Prev Page" buttons.
- **Dynamic Progress Bar**: The progress bar updates dynamically as the user proceeds through the steps, marking completed steps with a checkmark.
- **Shopping Cart Integration**: A shopping cart displays the selected items on each page.
- **Credit Card Form**: Users can input their credit card details and cardholder's name. On form submission, a success page thanks the user for their order.

## Demo

![Final Page Demo](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3N1YXM3N3Fvdmc0YmY3MHZ1NnpuaG5zZzJiZHVjdHNxMDZpYW81NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oUFEwIofmKzQjrBkl2/giphy.gif)

## How to Run the Project

1. Clone this repository:
   ```bash
   git clone https://github.com/clairehuang77777/firstReact.git

2. Navigate to the project directory:
    ```bash
    cd your-repo-name

3. Install dependencies:
    ```bash
    npm install

4. Start the development server:
    ```bash
    npm run dev

5. Open your browser and go to:
    ```arduino
    http://localhost:5173

### Built With
- React: For building the user interface.
- Vite: For fast and optimized development setup.

### 專案結構
##### 根目錄文件
- README.md	// 介紹專案結構	
- babel.config.js // 用來配置Babel轉譯功能	
- eslint.config.js // 用來檢視靜態程式碼
- vite.config.js //Vite配置, 設置根目錄及確保入口文件位置
##### 入口文件
- index.html //  入口文件, 引入main.jsx
##### 資源管理
- package-lock.json  // 所有資源包的版本紀錄
- Package.json // 紀錄指令跟資源依賴
- node_modules // 所有下載過的資源包的內容
##### 主要目錄 & 樣式文件
- src // 主要 jsx 及 css 檔案位置
  - main.jsx //render 畫面主要文件
  - app.jsx // 存放react component 主要文件
  - cart.jsx // 購物車元件
  - CartContext.js // 購物車context
  - index.scss 
  - header.scss
  - form.scss 
  - cart.scss 
  - base.scss
  - app.scss
##### 靜態目錄文件
- Public // 靜態資料夾, 放所有會用到svg的

	