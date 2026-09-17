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
        id: "bachelor-tingtun",
        slug: "bachelor-tingtun",
        title: "Cấu trúc hóa phản hồi sự kiện kiểm thử bằng AI",
        description:
          "Dự án cử nhân hợp tác với Tingtun, trong đó chúng tôi phát triển một giải pháp dựa trên AI để phân tích, cấu trúc hóa phản hồi và đề xuất cải tiến.",
      },
      {
        id: "placeholder-project-2",
        title: "Sắp có thêm nhiều dự án",
        description: "Tôi đang thực hiện các dự án mới và sẽ sớm cập nhật tại đây.",
      },
      {
        id: "placeholder-project-3",
        title: "Sắp có thêm nhiều dự án",
        description: "Tôi đang thực hiện các dự án mới và sẽ sớm cập nhật tại đây.",
      },
    ],
  },
  projectCaseStudies: {
    bachelorTingtun: {
      backToProjects: "Quay lại dự án",
      title: "Cấu trúc hóa phản hồi sự kiện kiểm thử bằng AI",
      subtitle: "Dự án cử nhân hợp tác với Tingtun",
      period: "Tháng 1 năm 2026 – tháng 6 năm 2026",
      roles: ["Quản lý dự án", "Scrum Master", "Lập trình viên full-stack"],
      techStackHeading: "Công nghệ",
      galleryControls: {
        openFullImage: "Mở hình ảnh ở kích thước đầy đủ",
        closeFullImage: "Đóng hình ảnh",
      },
      overview: {
        heading: "Tổng quan dự án",
        body: "Hợp tác với Tingtun, chúng tôi phát triển một giải pháp dựa trên AI có khả năng phân tích phản hồi từ các đơn vị sở hữu dịch vụ và đề xuất cải tiến dựa trên nội dung. Đây là dự án cử nhân tại Đại học Agder, được thực hiện từ tháng 1 đến tháng 6 năm 2026 bởi một nhóm năm người.",
      },
      problem: {
        heading: "Vấn đề",
        body: "Tingtun mong muốn một giải pháp giúp việc quản lý và phân tích phản hồi từ các đơn vị sở hữu dịch vụ trở nên dễ dàng hơn. Phản hồi có thể chứa lượng thông tin lớn, vì vậy mục tiêu là tìm hiểu cách trí tuệ nhân tạo có thể hỗ trợ cấu trúc hóa nội dung và đề xuất những cải tiến phù hợp.",
      },
      designProcess: {
        heading: "Quy trình thiết kế",
        body: "Tôi tham gia thiết kế giải pháp và sử dụng Figma trong quá trình thiết kế. Nhóm dùng công việc này để khám phá cấu trúc, luồng người dùng và cách trình bày rõ ràng những thông tin đã được phân tích.",
        gallery: {
          ariaLabel: "Hình ảnh quy trình thiết kế",
          items: {
            wireframe: {
              alt: "Wireframe thể hiện cấu trúc ban đầu và luồng người dùng của giải pháp Tingtun",
              caption: "Bố cục ban đầu được dùng để xác định cấu trúc tổng thể và luồng người dùng.",
            },
            mockup: {
              alt: "Mockup thể hiện thiết kế trực quan của giải pháp Tingtun",
              caption: "Bản hoàn thiện trực quan tập trung vào bố cục, phân cấp và thiết kế giao diện.",
            },
            prototype: {
              alt: "Nguyên mẫu tương tác của giải pháp Tingtun trước khi bắt đầu phát triển",
              caption: "Nguyên mẫu tương tác được sử dụng trước khi quá trình phát triển bắt đầu.",
            },
          },
        },
      },
      solution: {
        heading: "Giải pháp",
        body: "Chúng tôi phát triển một giải pháp full-stack, trong đó React.js xử lý giao diện người dùng còn Node.js xử lý các yêu cầu và giao tiếp với những dịch vụ bên ngoài. Người dùng có thể gửi phản hồi qua ứng dụng; phản hồi sau đó được chuyển đến Gemini API để phân tích, cấu trúc hóa và đề xuất cải tiến. GitHub API kết nối kết quả với GitHub Issues để các vấn đề có thể được tạo, theo dõi và quản lý trong một quy trình làm việc sẵn có.",
      },
      architecture: {
        heading: "Lựa chọn kiến trúc",
        introduction: "Tôi đề xuất với nhóm sử dụng GitHub Issues thông qua GitHub API thay vì xây dựng một cơ sở dữ liệu và hệ thống quản lý vấn đề tùy chỉnh hoàn chỉnh. GitHub Issues đã cung cấp chức năng để:",
        features: ["tạo vấn đề", "bình luận", "mở vấn đề", "đóng vấn đề", "theo dõi trạng thái vấn đề"],
        conclusion: "Lựa chọn kỹ thuật này giảm độ phức tạp không cần thiết và cho phép nhóm tập trung nhiều hơn vào chức năng AI và trải nghiệm người dùng. Đề xuất là đóng góp của tôi vào quá trình ra quyết định kỹ thuật, còn kiến trúc được phát triển chung với các thành viên còn lại.",
      },
      role: {
        heading: "Vai trò của tôi",
        areas: [
          {
            heading: "Quản lý dự án",
            items: ["Lập kế hoạch họp", "Theo dõi tiến độ", "Góp phần phân chia nhiệm vụ rõ ràng", "Trao đổi với nhóm, khách hàng và giảng viên hướng dẫn"],
          },
          {
            heading: "Scrum Master",
            items: ["Điều hành họp đứng hằng ngày", "Hỗ trợ lập kế hoạch sprint", "Đảm bảo mọi người cùng hiểu mục tiêu", "Tạo điều kiện thảo luận và ra quyết định chung"],
          },
          {
            heading: "Lập trình viên",
            items: ["Phát triển frontend và backend", "Tích hợp GitHub API và Gemini API", "Kiểm thử", "Đóng góp vào quy trình pull request"],
          },
        ],
      },
      result: {
        heading: "Kết quả",
        body: "Dự án tạo ra một nguyên mẫu hoạt động được, minh họa cách AI có thể hỗ trợ phân tích và cấu trúc hóa phản hồi.",
        gallery: {
          ariaLabel: "Hình ảnh kết quả dự án hoàn chỉnh",
          items: {
            home: {
              alt: "Trang chủ của ứng dụng Tingtun",
              caption: "Trang chủ là màn hình đầu tiên người dùng nhìn thấy và là điểm truy cập vào giải pháp.",
            },
            form: {
              alt: "Biểu mẫu gửi phản hồi trong ứng dụng Tingtun",
              caption: "Người dùng nhập phản hồi cần được phân tích.",
            },
            loading: {
              alt: "Trạng thái tải trong khi phản hồi đang được phân tích",
              caption: "Trong khi phản hồi được phân tích, trạng thái tải được hiển thị lúc AI tạo kết quả.",
            },
            analyse: {
              alt: "Bản phân tích do AI tạo cùng các đề xuất cải tiến",
              caption: "AI phân tích phản hồi đã gửi và tạo ra các đề xuất cải tiến.",
            },
            edit: {
              alt: "Chỉnh sửa phản hồi đã gửi trước khi tạo bản phân tích mới",
              caption: "Người dùng có thể chỉnh sửa phản hồi đã gửi và tạo một bản phân tích mới.",
            },
            sending: {
              alt: "Gửi vấn đề đã xem xét sang GitHub",
              caption: "Sau khi xem xét, người dùng có thể gửi vấn đề sang GitHub.",
            },
            github: {
              alt: "Vấn đề đã gửi được tạo thành một GitHub Issue",
              caption: "Vấn đề đã gửi được tạo thành một GitHub Issue, nơi có thể bình luận, theo dõi, mở và đóng vấn đề.",
            },
            contact: {
              alt: "Tính năng liên hệ qua email",
              caption: "Tính năng liên hệ cho phép người dùng liên lạc qua email.",
            },
          },
        },
      },
      learning: {
        heading: "Những điều tôi học được",
        body: "Dự án giúp tôi học cách kết hợp phát triển phần mềm với quản lý dự án, giao tiếp với khách hàng thực tế và cộng tác trong nhóm năm người. Tôi tích lũy thêm kinh nghiệm về tích hợp API và ra quyết định kỹ thuật, đồng thời học cách thích nghi khi giải pháp dự kiến không hoạt động như mong đợi. Một phần quan trọng của trải nghiệm là cân bằng công việc kỹ thuật với điều phối, giao tiếp và duy trì tiến độ.",
      },
    },
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
