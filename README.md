# Portfolio – Thi Thanh Loan Do

Next.js (App Router) + Tailwind CSS v4 + Framer Motion. Song ngữ EN/VI, dark mode mặc định.

## Chạy thử

```bash
npm install
npm run dev      # mở http://localhost:3000
```

## Sửa nội dung

Toàn bộ chữ trên web nằm trong `src/content/data.ts` (mỗi đoạn có bản `en` và `vi`).

- Ảnh đại diện: thay file `public/images/avatar.jpg` (ảnh vuông).
- CV: đặt file vào `public/cv/Thanh-Loan-Do-CV.pdf`.
- LinkedIn: điền `linkedin` trong `profile`.
- Logo công ty/trường: đặt ảnh vào `public/images/logos/` và thêm `logo: "/images/logos/xxx.png"` vào mục tương ứng trong `timeline`.

## Đăng lên GitHub Pages

1. Tạo repo tên **`dothanhloan.github.io`** trên GitHub (đúng username của bạn).
2. Push code lên nhánh `main`.
3. Vào **Settings → Pages → Source: GitHub Actions**.
4. Workflow `.github/workflows/deploy.yml` sẽ tự build và đăng. Web chạy tại `https://dothanhloan.github.io/`.
