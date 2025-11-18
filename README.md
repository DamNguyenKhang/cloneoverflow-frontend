# CloneOverflow Frontend

---

## ***************************************Vietnamese version***************************************

**CloneOverflow** là một nền tảng hỏi đáp hiện đại lấy cảm hứng từ FUOverflow, phát triển bằng React, TypeScript, Vite và Material UI, dành riêng cho cộng đồng sinh viên FU.

### 🚀 Tính năng nổi bật

- **Giao diện hiện đại**: Responsive, đẹp mắt với Material UI & SCSS modules.
- **Xác thực bảo mật**: Đăng nhập, đăng ký, refresh token bằng JWT.
- **Diễn đàn & Nhắn tin**: Đăng bài, nhắn tin trực tiếp, thông báo, hồ sơ cá nhân.
- **Chia sẻ tài liệu**: Tìm kiếm, tải lên, quản lý tài nguyên học tập.
- **Phân quyền**: Hỗ trợ route công khai & riêng tư, layout linh hoạt.
- **Thông báo nhanh**: react-toastify.
- **Tích hợp API**: Axios, xử lý lỗi & tự động refresh token.

### 🛠️ Công nghệ sử dụng

- React 19, TypeScript, Vite
- Material UI (MUI), SCSS
- React Router v7, Axios
- ESLint, Prettier, react-toastify

### 📦 Bắt đầu nhanh

1. **Clone dự án:**

```bash
git clone https://github.com/nhat251/cloneoverflow-frontend.git
cd cloneoverflow-frontend
```

2. **Cài đặt phụ thuộc:**

```bash
npm install
# hoặc
yarn install
```

3. **Chạy dev:**

```bash
npm run dev
# hoặc
yarn dev
```

4. **Build production:**

```bash
npm run build
# hoặc
yarn build
```

5. **Kiểm tra code:**

```bash
npm run lint
# hoặc
yarn lint
```

### 📁 Cấu trúc thư mục

```
src/
  api/        # Cấu hình Axios & helper API
  assets/     # Ảnh, font, tài nguyên tĩnh
  components/ # Component UI tái sử dụng
  hooks/      # Custom React hooks
  layouts/    # Layout (Default, HeaderOnly...)
  pages/      # Trang (Home, Message...)
  routes/     # Định nghĩa route
  services/   # Xử lý nghiệp vụ, gọi API
  stores/     # State management (Auth, context)
  types/      # Định nghĩa TypeScript
  App.tsx     # Entry chính
  main.tsx    # Entry Vite
```

### 🔑 Biến môi trường

Tạo file `.env` nếu cần override API:

```env
VITE_API_BASE_URL=https://localhost:7068/api/
```

### 🤝 Đóng góp

1. Fork repo, tạo branch mới (`git checkout -b feature/ten-tinh-nang`)
2. Commit thay đổi (`git commit -am 'Thêm tính năng'`)
3. Push lên branch (`git push origin feature/ten-tinh-nang`)
4. Tạo Pull Request

### 👨‍💻 Người phát triển

- [Birthday Nguyen](https://github.com/nhat251)
- [DamNguyenKhang](https://github.com/DamNguyenKhang)

### 📜 Giấy phép

Dự án theo giấy phép MIT.

---

## ***************************************English version***************************************

---

> A modern Q&A forum web application inspired by FUOverflow, built with React, TypeScript, Vite, and MUI.

### 🚀 Features

- **Modern UI/UX**: Clean, responsive interface using Material UI and custom SCSS modules.
- **Authentication**: JWT-based login, registration, and token refresh with secure storage.
- **Forum & Messaging**: Post questions, direct messaging, notifications, and user profiles.
- **Document & Resource Sharing**: Upload, search, and manage educational resources.
- **Role-based Access**: Public and private routes, with flexible layout support.
- **Toast Notifications**: User feedback with react-toastify.
- **API Integration**: Axios-based API layer with robust error handling and auto-refresh.

### 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Material UI (MUI)](https://mui.com/)
- [React Router v7](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Sass/SCSS](https://sass-lang.com/)
- [ESLint & Prettier](https://eslint.org/), [react-toastify](https://fkhadra.github.io/react-toastify/)

### 📦 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/nhat251/cloneoverflow-frontend.git
cd cloneoverflow-frontend
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Start the development server:**

```bash
npm run dev
# or
yarn dev
```

4. **Build for production:**

```bash
npm run build
# or
yarn build
```

5. **Lint & Format:**

```bash
npm run lint
# or
yarn lint
```

### 📁 Project Structure

```
src/
  api/                # Axios config and API helpers
  assets/             # Fonts, images, static assets
  components/         # Reusable UI components
  hooks/              # Custom React hooks
  layouts/            # Layout wrappers (Default, HeaderOnly, etc.)
  pages/              # Page components (Home, Message, etc.)
  routes/             # Route definitions
  services/           # Business logic, API services
  stores/             # State management (Auth, contexts)
  types/              # TypeScript types & interfaces
  App.tsx             # Main app entry
  main.tsx            # Vite entry point
```

### 🔑 Environment Variables

Create a `.env` file for local development if you need to override API endpoints or secrets. Example:

```env
VITE_API_BASE_URL=https://localhost:7068/api/
```

### 🤝 Contributing

1. Fork this repo and create your feature branch (`git checkout -b feature/your-feature`)
2. Commit your changes (`git commit -am 'Add new feature'`)
3. Push to the branch (`git push origin feature/your-feature`)
4. Create a Pull Request

### 👨‍💻 Maintainers

- [Birthday Nguyen](https://github.com/nhat251)
- [DamNguyenKhang](https://github.com/DamNguyenKhang)

### 📜 License

This project is licensed under the MIT License.

---

> Made with ❤️ for the FU community.
