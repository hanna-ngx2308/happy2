# Periodic Table of Happy Hormones 🧠

Bảng Tuần Hoàn Các Hormone Hạnh Phúc - Một ứng dụng web tương tác để tìm hiểu và khám phá các hoạt động, thói quen giúp tăng cường Dopamine, Oxytocin, Serotonin và Endorphins.

## Mô tả

Dự án này là một visualization data dựa trên thiết kế Figma, hiển thị các habit và activity được phân loại theo:
- **Impact Level** (1-5): Mức độ tác động của từng hoạt động
- **Neurotransmitter Type**: Loại hormone được kích thích
  - 🟡 **DOPAMIN** (Yellow border)
  - 🔴 **OXCYTOCIN** (Red border)
  - 🟢 **SEROTONIN** (Green border)
  - 🟣 **ENDORPHINS** (Purple border)
- **Habit Type**: Phân loại thói quen
  - **P** - Physical Habit
  - **M** - Mental Habit
  - **F** - Food
  - **H** - Health

## Tính năng

- ✨ Giao diện đẹp mắt với thiết kế theo Figma
- 🎯 Hiển thị Impact Level (1-5)
- 🎨 Màu sắc phân biệt theo từng loại hormone
- 🖱️ Tương tác khi hover và click
- 📱 Responsive design

## Cấu trúc File

```
happy/
├── index.html      # File HTML chính
├── styles.css      # File CSS styling
├── script.js       # File JavaScript cho tương tác
└── README.md       # File documentation
```

## Cách sử dụng

1. Mở file `index.html` trong trình duyệt web
2. Không cần build process - đây là một static HTML application
3. Hover vào các habit boxes để xem hiệu ứng
4. Click vào các boxes để tương tác

## Thiết kế

Dự án được xây dựng dựa trên thiết kế Figma:
- Frame size: 1920px × 1080px
- Font: Inter (Black, Bold weights)
- Colors:
  - Dopamin: `#ffde76` (Yellow)
  - Oxytocin: `rgba(255, 53, 56, 0.6)` (Red)
  - Serotonin: `#5ecf98` (Green)
  - Endorphins: `#c497f7` (Purple)

## Browser Support

Hỗ trợ tất cả các trình duyệt hiện đại:
- Chrome
- Firefox
- Safari
- Edge

## Tùy chỉnh

Bạn có thể dễ dàng tùy chỉnh:
- Thêm/xóa habit boxes trong `index.html`
- Thay đổi màu sắc và styling trong `styles.css`
- Thêm tính năng tương tác mới trong `script.js`

## License

MIT License

---

Được tạo với ❤️ dựa trên thiết kế Figma

