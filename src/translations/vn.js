const vn = {
  meta: {
    title: "Nina Huynh | Hồ sơ năng lực",
  },
  navigation: {
    mainLabel: "Điều hướng chính",
    projects: "Dự án",
    skills: "Kỹ năng",
    timeline: "Dòng thời gian",
    contact: "Liên hệ",
    enableDarkMode: "Bật chế độ tối",
    enableLightMode: "Bật chế độ sáng",
  },
  language: {
    openMenu: "Chọn ngôn ngữ",
    menuLabel: "Lựa chọn ngôn ngữ",
  },
  hero: {
    greeting: "Xin chào, tôi là",
    worksWith: "Tôi làm việc với",
    roles: [
      "Phát triển full-stack",
      "Thiết kế UX/UI",
      "Thiết kế dịch vụ",
      "Tư vấn CNTT",
    ],
    description:
      "Tôi vừa tốt nghiệp ngành CNTT và hệ thống thông tin, với sự quan tâm đến phát triển web hiện đại, giao diện thân thiện và các dịch vụ số.",
    projectsButton: "Xem dự án của tôi",
    contactButton: "Liên hệ với tôi",
  },
  contact: {
    emailSubject: "Liên hệ từ hồ sơ năng lực",
  },
  projects: {
    heading: "Dự án",
    introduction:
      "Một số dự án thể hiện cách tôi tiếp cận thiết kế, phát triển và giải quyết vấn đề.",
    imagePlaceholder: "Hình ảnh dự án",
    imagePlaceholderFor: "Vị trí hình ảnh cho",
    items: [
      {
        id: "placeholder-project-1",
        title: "Dự án một",
        description: "Phần giới thiệu ngắn về dự án sẽ được thêm tại đây.",
      },
      {
        id: "placeholder-project-2",
        title: "Dự án hai",
        description: "Phần giới thiệu ngắn về dự án sẽ được thêm tại đây.",
      },
      {
        id: "placeholder-project-3",
        title: "Dự án ba",
        description: "Phần giới thiệu ngắn về dự án sẽ được thêm tại đây.",
      },
    ],
  },
  skills: {
    heading: "Kỹ năng",
    introduction:
      "Một số công nghệ, phương pháp thiết kế và công cụ tôi sử dụng để xây dựng các giải pháp số hiệu quả.",
    categories: [
      {
        name: "Frontend",
        skills: [
          { name: "React.js", description: "Xây dựng giao diện người dùng dựa trên component." },
          { name: "JavaScript", description: "Tạo tương tác và logic cho các giải pháp web hiện đại." },
          { name: "HTML", description: "Cấu trúc trang web có ngữ nghĩa và dễ tiếp cận." },
          { name: "CSS", description: "Bố cục đáp ứng và trình bày trực quan." },
          { name: "Material UI", description: "Component React dễ tiếp cận và hệ thống giao diện." },
          { name: "Bootstrap", description: "Phát triển nhanh với các component đáp ứng." },
          { name: "Tailwind CSS", description: "Các lớp tiện ích để phát triển giao diện linh hoạt." },
          { name: "Responsive Design", description: "Giải pháp thích ứng với nhiều màn hình và thiết bị." },
        ],
      },
      {
        name: "Backend & API",
        skills: [
          { name: "Node.js", description: "Logic phía máy chủ được viết bằng JavaScript." },
          { name: "Java", description: "Phát triển ứng dụng mạnh mẽ theo hướng đối tượng." },
          { name: "C#", description: "Phát triển hướng đối tượng trong hệ sinh thái .NET." },
          { name: "ASP.NET Core MVC", description: "Ứng dụng web được xây dựng theo kiến trúc MVC." },
          { name: "REST API", description: "Giao diện có cấu trúc giữa các dịch vụ số." },
          { name: "JSON", description: "Trao đổi dữ liệu có cấu trúc giữa các hệ thống." },
          { name: "FastAPI", description: "Phát triển API nhanh bằng Python." },
          { name: "GitHub API", description: "Tích hợp dữ liệu và dịch vụ từ GitHub." },
          { name: "Gemini API", description: "Tích hợp AI tạo sinh vào ứng dụng." },
        ],
      },
      {
        name: "Cơ sở dữ liệu",
        skills: [
          { name: "MySQL", description: "Lưu trữ và truy vấn dữ liệu quan hệ." },
          { name: "MariaDB", description: "Làm việc với cơ sở dữ liệu quan hệ." },
          { name: "SQL", description: "Mô hình hóa, truy xuất và xử lý dữ liệu." },
        ],
      },
      {
        name: "Thiết kế & UX",
        skills: [
          { name: "Figma", description: "Thiết kế, tạo mẫu và cộng tác trong dự án giao diện." },
          { name: "Design Thinking", description: "Khám phá và giải quyết vấn đề lấy người dùng làm trung tâm." },
          { name: "Wireframing", description: "Phác thảo sớm cấu trúc và luồng người dùng." },
          { name: "Prototyping", description: "Mô hình tương tác để kiểm thử ý tưởng." },
          { name: "Design Systems", description: "Nguyên tắc và component tái sử dụng để đảm bảo nhất quán." },
          { name: "UX/UI", description: "Giao diện số rõ ràng và thân thiện với người dùng." },
          { name: "Thiết kế toàn diện (WCAG)", description: "Giải pháp dễ tiếp cận dựa trên WCAG." },
        ],
      },
      {
        name: "Công cụ",
        skills: [
          { name: "Git", description: "Quản lý phiên bản và lịch sử mã nguồn có cấu trúc." },
          { name: "GitHub", description: "Lưu trữ mã nguồn, cộng tác và quy trình dự án." },
          { name: "Docker", description: "Môi trường phát triển và chạy ứng dụng có thể tái tạo." },
          { name: "Docker Desktop", description: "Quản lý container trên máy cục bộ." },
          { name: "Visual Studio Code", description: "Phát triển mã nguồn bằng trình chỉnh sửa linh hoạt." },
          { name: "Rider", description: "Môi trường phát triển dành cho .NET và C#." },
          { name: "HTTP / HTTPS", description: "Hiểu giao tiếp web và truyền dữ liệu an toàn." },
        ],
      },
    ],
  },
  timeline: {
    heading: "Dòng thời gian",
    introduction: "Tổng quan về quá trình học tập và kinh nghiệm của tôi.",
    sliderLabel: "Chọn một sự kiện trên dòng thời gian",
    entries: [
      {
        id: "thor-heyerdahl-start",
        title: "Trường trung học phổ thông Thor Heyerdahl",
        period: "Tháng 8 năm 2020",
        type: "Giáo dục",
        description:
          "Bắt đầu chương trình trung học chuyên sâu về khoa học tự nhiên, nơi tôi phát triển kỹ năng phân tích và xây dựng nền tảng cho việc học công nghệ sau này.",
      },
      {
        id: "thor-heyerdahl-completed",
        title: "Hoàn thành trung học phổ thông",
        period: "Tháng 6 năm 2023",
        type: "Giáo dục",
        description:
          "Hoàn thành chương trình trung học với định hướng khoa học tự nhiên và xây dựng nền tảng vững chắc cho việc học CNTT.",
      },
      {
        id: "university-start",
        title: "Cử nhân CNTT và Hệ thống thông tin",
        period: "Tháng 8 năm 2023",
        type: "Giáo dục",
        description:
          "Bắt đầu chương trình cử nhân tại Đại học Agder (UiA) ở Kristiansand, tập trung vào phát triển hệ thống, lập trình, cơ sở dữ liệu và thiết kế lấy người dùng làm trung tâm.",
      },
      {
        id: "tingtun-internship",
        title: "Thực tập tại Tingtun",
        period: "Tháng 8 năm 2025 – tháng 6 năm 2026",
        type: "Kinh nghiệm",
        description:
          "Hoàn thành kỳ thực tập tại Tingtun trong một nhóm phát triển đa ngành. Tôi có được kinh nghiệm thực tế về cộng tác, phương pháp Agile và phát triển giải pháp số, đồng thời nâng cao kỹ năng phát triển full-stack, thiết kế UX/UI và thiết kế dịch vụ.",
      },
      {
        id: "university-completed",
        title: "Hoàn thành bằng cử nhân",
        period: "Tháng 6 năm 2026",
        type: "Giáo dục",
        description:
          "Hoàn thành bằng cử nhân CNTT và hệ thống thông tin tại Đại học Agder, đồng thời củng cố kỹ năng kỹ thuật và hợp tác thông qua chương trình học và kỳ thực tập.",
      },
    ],
  },
  footer: {
    heading: "Liên hệ",
    socialLabel: "Mạng xã hội",
    copyright: "© 2026 Nina Huynh",
  },
};

export default vn;
