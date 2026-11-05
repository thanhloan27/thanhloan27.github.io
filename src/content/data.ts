// All site content lives here. Every user-facing string has an English and a Vietnamese version.
// Edit this file to update the portfolio — components only handle layout.

export type Lang = "en" | "vi";
export type L = { en: string; vi: string };

export const profile = {
  // English order: given names first, surname last (matches the passport: DO / THI THANH LOAN)
  name: { en: "Thi Thanh Loan Do", vi: "Đỗ Thị Thanh Loan" },
  initials: "TL",
  // Square photo; set to null to show the initials instead
  avatar: "/images/avatar.jpg" as string | null,
  title: { en: "Business Analyst · QA/QC for AI products", vi: "Business Analyst · QA/QC cho sản phẩm AI" },
  location: { en: "Hanoi, Vietnam", vi: "Hà Nội, Việt Nam" },
  birthDate: { en: "Born 27/01/2004", vi: "Sinh ngày 27/01/2004" },
  email: "loanlamk8@gmail.com",
  phone: { display: "0961 959 271", tel: "+84961959271" },
  github: "https://github.com/dothanhloan",
  linkedin: "https://www.linkedin.com/in/%C4%91%E1%BB%97-th%E1%BB%8B-thanh-loan-138061409/" as string | null,
  // Put your CV at public/cv/DoThiThanhLoan_BA_CV.pdf.
  // Bump ?v= whenever the PDF changes so browsers don't serve a cached copy.
  cv: "/cv/DoThiThanhLoan_BA_CV.pdf?v=10",
};

export const hero = {
  status: { en: "Open to BA & QA/QC roles", vi: "Sẵn sàng cho vị trí BA & QA/QC" },
};

// Photos of your activities for the scrolling hero background wall.
// Add files to public/images/activities/ and list them here (portrait photos look best; 6–12 is ideal).
// Any orientation works — tiles keep each photo's own aspect ratio.
export const activities: { src: string; alt: L }[] = [
  { src: "/images/activities/devfest-cloud-hanoi.jpg", alt: { en: "DevFest Cloud Hanoi", vi: "DevFest Cloud Hanoi" } },
  { src: "/images/activities/ai-in-action-closing.jpg", alt: { en: "AI in Action closing ceremony", vi: "Lễ bế giảng AI in Action" } },
  { src: "/images/activities/team-presentation.jpg", alt: { en: "Presenting with my project team", vi: "Thuyết trình cùng nhóm dự án" } },
  { src: "/images/activities/devfest-team.jpg", alt: { en: "DevFest with friends", vi: "DevFest cùng bạn bè" } },
  { src: "/images/activities/gsm-pm-overview.jpg", alt: { en: "Project Management Overview at GSM", vi: "Buổi Project Management Overview tại GSM" } },
  { src: "/images/activities/devfest-audience.jpg", alt: { en: "DevFest sessions", vi: "Tham dự các phiên DevFest" } },
  { src: "/images/activities/devfest-solo.jpg", alt: { en: "DevFest Cloud Hanoi", vi: "DevFest Cloud Hanoi" } },
  { src: "/images/activities/devfest-group.jpg", alt: { en: "DevFest community", vi: "Cộng đồng DevFest" } },
];

export const ui = {
  nav: {
    bio: { en: "Bio", vi: "Giới thiệu" },
    news: { en: "News", vi: "Tin mới" },
    cv: { en: "CV", vi: "CV" },
    projects: { en: "Projects", vi: "Dự án" },
    skills: { en: "Skills", vi: "Kỹ năng" },
    contact: { en: "Contact", vi: "Liên hệ" },
  },
  viewWork: { en: "View my work", vi: "Xem dự án" },
  downloadCv: { en: "Download CV", vi: "Tải CV" },
  cvIntro: {
    en: "Experience and education timeline. Full CV in",
    vi: "Dòng thời gian kinh nghiệm và học vấn. Xem CV đầy đủ dạng",
  },
  experience: { en: "Experience", vi: "Kinh nghiệm" },
  education: { en: "Education", vi: "Học vấn" },
  readCase: { en: "View project details", vi: "Xem chi tiết dự án" },
  featured: { en: "Featured", vi: "Nổi bật" },
  back: { en: "Back to portfolio", vi: "Quay lại portfolio" },
  role: { en: "Role", vi: "Vai trò" },
  period: { en: "Period", vi: "Thời gian" },
  contactText: {
    en: "I'm looking for Business Analyst and QA/QC roles on AI and data products. Reach me by email or phone.",
    vi: "Tôi đang tìm vị trí Business Analyst và QA/QC cho các sản phẩm AI và dữ liệu. Bạn có thể liên hệ với tôi qua email hoặc số điện thoại.",
  },
  close: { en: "Close", vi: "Đóng" },
  prev: { en: "Previous photo", vi: "Ảnh trước" },
  next: { en: "Next photo", vi: "Ảnh sau" },
  backToTop: { en: "Back to top", vi: "Về đầu trang" },
  footer: { en: "Built with Next.js, Tailwind CSS and Framer Motion.", vi: "Xây dựng bằng Next.js, Tailwind CSS và Framer Motion." },
};

export const bio: L[] = [
  {
    en: "I'm Loan, a <b>Bachelor of Information Systems</b> (Thuy Loi University) with nearly one year of hands-on experience across <b>Business Analysis</b>, <b>QA/QC</b> and <b>Project Management</b> on AI and data products. I also completed VinUniversity's <i>AI in Action</i> program (Batch 3), strengthening my foundation in applied AI.",
    vi: "Tôi là Loan - <b>Cử nhân Hệ thống Thông tin</b> (Đại học Thủy Lợi), có kinh nghiệm thực tế gần 1 năm ở vai trò <b>Business Analyst</b>, <b>QA/QC</b> và <b>Project Management</b> cho các sản phẩm AI và dữ liệu. Tôi đã hoàn thành chương trình <i>AI in Action</i> (Batch 3) của VinUniversity, củng cố nền tảng về ứng dụng AI.",
  },
  {
    en: "My strengths are <b>communication and working with stakeholders</b>: listening, clarifying needs and turning them into concrete requirements. With a solid technical grounding in <b>ML/AI</b>, I communicate effectively with engineering teams and bridge the gap between business and implementation. I aim to contribute to AI products that deliver real value, while growing into a specialist BA in the AI space.",
    vi: "Thế mạnh của tôi là <b>giao tiếp và làm việc với stakeholder</b>: lắng nghe, làm rõ nhu cầu và chuyển hóa thành yêu cầu cụ thể. Với nền tảng kỹ thuật vững về <b>ML/AI</b>, tôi trao đổi hiệu quả với đội kỹ thuật, thu hẹp khoảng cách giữa nghiệp vụ và triển khai. Tôi mong muốn đóng góp vào những sản phẩm AI mang lại giá trị thực, đồng thời phát triển chuyên sâu ở vai trò BA trong lĩnh vực AI.",
  },
];

// Newest first. Dates are shown as-is.
export const news: { date: string; text: L }[] = [
  {
    date: "11/2026",
    text: {
      en: "Completed <b>VinUniversity – AI in Action (Batch 3)</b>.",
      vi: "Hoàn thành chương trình <b>VinUniversity – AI in Action (Batch 3)</b>.",
    },
  },
  
  {
    date: "09/2026",
    text: {
      en: "Joined <b>GSM – VinSmart Future</b> as a <b>Project Manager Intern</b>.",
      vi: "Gia nhập <b>GSM – VinSmart Future</b> với vai trò <b>Project Manager Intern</b>.",
    },
  },
  
  {
    date: "09/2026",
    text: {
      en: "Graduated in <b>Information Systems</b> from Thuy Loi University.",
      vi: "Tốt nghiệp ngành <b>Hệ thống Thông tin</b>, Đại học Thủy Lợi.",
    },
  },
  {
    date: "07/2026",
    text: {
      en: "Started the <b>VinUniversity – AI in Action</b> program.",
      vi: "Bắt đầu chương trình <b>VinUniversity – AI in Action</b>.",
    },
  },
  {
    date: "12/2025",
    text: {
      en: "Joined <b>International Cyber Security (ICS)</b> as a <b>Business Analyst</b>.",
      vi: "Gia nhập <b>International Cyber Security (ICS)</b> với vai trò <b>Business Analyst</b>.",
    },
  },
];

export type TimelineItem = {
  kind: "work" | "edu";
  org: string;
  short: string; // shown in the logo badge when no logo image is set
  logo?: string; // e.g. "/images/logos/ics.png"
  time: L;
  place: L;
  role: L;
  points: L[];
  // Optional photos for this milestone, e.g. { src: "/images/timeline/gsm-1.jpg", caption: { en: "...", vi: "..." } }
  photos?: Photo[];
};

export type Photo = { src: string; caption: L };

// Newest first. Entries alternate left/right on desktop.
export const timeline: TimelineItem[] = [
  {
    kind: "work",
    org: "GSM – VinSmart Future",
    short: "GSM",
    logo: "/images/logos/gsm.png",
    time: { en: "Sep 2026 – Nov 2026", vi: "09/2026 – 11/2026" },
    place: { en: "Hanoi", vi: "Hà Nội" },
    role: { en: "Project Manager Intern", vi: "Project Manager Intern" },
    points: [
      {
        en: "Managed a personalization & recommendation project (RecSys) across a cross-functional DL&AI team covering Food, Intent/Service Ranking and Ride Destination recommendation.",
        vi: "Quản lý dự án cá nhân hóa & gợi ý (RecSys) với team DL&AI liên chức năng, gồm gợi ý món ăn, xếp hạng Intent/Service và gợi ý điểm đến.",
      },
      {
        en: "Built the project plan, tracked risks, issues and dependencies, and produced weekly progress reports for the project lead.",
        vi: "Lập kế hoạch dự án, theo dõi rủi ro, vấn đề và phụ thuộc; viết báo cáo tiến độ hàng tuần cho project lead.",
      },
      {
        en: "Supported requirement scoping for the Home-screen food recommendation phase, including the plan to A/B test merchant recommendations.",
        vi: "Hỗ trợ xác định phạm vi yêu cầu cho giai đoạn gợi ý món ăn trên màn hình chính, gồm kế hoạch A/B test gợi ý merchant.",
      },
      {
        en: "Wrote the PRD/BRD for an internal AI product (details confidential); ran user surveys to find pain points and also served as tester.",
        vi: "Viết PRD/BRD cho một sản phẩm AI nội bộ (thông tin bảo mật); khảo sát người dùng để tìm pain point và trực tiếp kiểm thử.",
      },
    ],
    photos: [
      { src: "/images/timeline/gsm-team-1.jpg", caption: { en: "With the team at GSM", vi: "Cùng team tại GSM" } },
      { src: "/images/timeline/gsm-team-2.jpg", caption: { en: "With the team at GSM", vi: "Cùng team tại GSM" } },
      { src: "/images/timeline/gsm-presentation.jpg", caption: { en: "Presenting with the team at GSM", vi: "Cùng team thuyết trình tại GSM" } },
    ],
  },
  {
    kind: "edu",
    org: "VinUniversity",
    short: "VinUni",
    logo: "/images/logos/vinuni.png",
    time: { en: "Jul 2026 – Nov 2026", vi: "07/2026 – 11/2026" },
    place: { en: "Hanoi", vi: "Hà Nội" },
    role: { en: "AI in Action – Batch 3 (Completed)", vi: "AI in Action – Batch 3 (Hoàn thành)" },
    points: [],
    photos: [
      {
        src: "/images/timeline/vinuni-ai-in-action-closing.jpg",
        caption: { en: "AI in Action closing ceremony — Vingroup × VinUniversity", vi: "Lễ bế giảng AI in Action — Vingroup × VinUniversity" },
      },
    ],
  },
  {
    kind: "work",
    org: "International Cyber Security (ICS)",
    short: "ICS",
    logo: "/images/logos/ics.png",
    time: { en: "Dec 2025 – Jul 2026", vi: "12/2025 – 07/2026" },
    place: { en: "Hanoi", vi: "Hà Nội" },
    role: { en: "Business Analyst", vi: "Business Analyst" },
    points: [
      {
        en: "Elicited and documented requirements from three stakeholder groups (Business, Data/Technical, Compliance) and translated them into technical specifications, reducing rework from misread requirements.",
        vi: "Thu thập và tài liệu hóa yêu cầu từ ba nhóm stakeholder (Business, Data/Technical, Compliance), chuyển thành đặc tả kỹ thuật, giảm việc làm lại do hiểu sai yêu cầu.",
      },
      {
        en: "Maintained requirements traceability across handoffs and flagged deviations between agreed specs and actual implementation early.",
        vi: "Duy trì traceability yêu cầu qua các lần bàn giao, chủ động cảnh báo sai lệch giữa đặc tả đã thống nhất và tiến độ triển khai thực tế.",
      },
      {
        en: "Assessed compliance risk in Data Warehouse/Data Platform development by defining data classification and control requirements from the early stages.",
        vi: "Đánh giá rủi ro tuân thủ khi phát triển Data Warehouse/Data Platform bằng cách xác định yêu cầu phân loại và kiểm soát dữ liệu ngay từ đầu.",
      },
      {
        en: "Contributed to analysis, design review and testing across parallel projects (HRM system, Vym Chatbot, Ward-level Dashboard).",
        vi: "Tham gia phân tích, review thiết kế và kiểm thử ở nhiều dự án song song (hệ thống HRM, Vym Chatbot, Dashboard cấp phường).",
      },
    ],
  },
  {
    kind: "edu",
    org: "Thuy Loi University (TLU)",
    short: "TLU",
    logo: "/images/logos/tlu.png",
    time: { en: "2022 – 2026", vi: "2022 – 2026" },
    place: { en: "Hanoi", vi: "Hà Nội" },
    role: { en: "B.Sc. Information Systems (Graduated)", vi: "Cử nhân Hệ thống Thông tin (Đã tốt nghiệp)" },
    points: [],
  },
];

export type Metric = { value: string; label: L };
export type Project = {
  slug: string;
  title: string;
  tagline: L;
  role: L;
  period: L;
  featured?: boolean;
  github?: string;
  // Product screenshots; the first one is also shown on the project card
  shots?: Photo[];
  tags: string[];
  metrics: Metric[];
  sections: { heading: L; body?: L; points?: L[] }[];
};

export const projects: Project[] = [
  {
    slug: "internal-ai",
    title: "Internal AI Project (Confidential)",
    featured: true,
    tagline: {
      en: "An internal AI product. Product details are confidential, so this page covers only my role and what I delivered.",
      vi: "Một sản phẩm AI nội bộ. Thông tin sản phẩm được bảo mật, nên trang này chỉ trình bày vai trò và những việc tôi đã làm.",
    },
    role: { en: "Business Analyst & Quality Control", vi: "Business Analyst & Quality Control" },
    period: { en: "Sep – Oct 2026", vi: "09 – 10/2026" },
    tags: ["PRD", "Personas", "User Journeys", "Use Cases", "NFRs", "Acceptance Criteria", "RAG Evaluation", "Guardrails", "Regression Testing"],
    metrics: [
      { value: "51% → 87%", label: { en: "Regression pass rate", vi: "Pass rate regression" } },
      { value: "15/15", label: { en: "Guardrail tests passed", vi: "Guardrail test đạt" } },
      { value: "97.5%", label: { en: "Recall@1 (from 79.2%)", vi: "Recall@1 (từ 79,2%)" } },
      { value: "0", label: { en: "Fabricated values", vi: "Giá trị bịa đặt" } },
    ],
    sections: [
      {
        heading: { en: "My role as BA", vi: "Vai trò BA" },
        points: [
          {
            en: "Ran user surveys with end users and stakeholders, turning the findings into prioritized pain points, each mapped to a solution and a delivery phase.",
            vi: "Khảo sát người dùng cuối và các bên liên quan, tổng hợp thành các pain point có thứ tự ưu tiên, mỗi pain point gắn với giải pháp và giai đoạn triển khai.",
          },
          {
            en: "Authored PRD v2, turning the initial draft into a complete PRD: context, goals and success metrics, personas, user journeys, and the phased roadmap.",
            vi: "Soạn PRD V2, chuẩn hóa bản nháp ban đầu thành PRD đầy đủ: bối cảnh, mục tiêu và chỉ số thành công, persona, user journey, và roadmap theo giai đoạn.",
          },
          {
            en: "Specified the capabilities and use cases, non-functional requirements, knowledge-base requirements, and the conversation design (tone, answer structure, fallback and human hand-off).",
            vi: "Đặc tả các capability và use case, yêu cầu phi chức năng, yêu cầu Knowledge Base, và conversation design (giọng điệu, cấu trúc câu trả lời, fallback và chuyển người thật).",
          },
          {
            en: "Defined KPIs, acceptance criteria per use case, the MVP Definition of Done, risks and assumptions, the pilot plan with go/no-go criteria, and the RACI.",
            vi: "Xác định KPI, tiêu chí nghiệm thu theo từng use case, Definition of Done cho MVP, rủi ro và giả định, kế hoạch pilot với tiêu chí go/no-go, và ma trận RACI.",
          },
        ],
      },
      {
        heading: { en: "My role as QC", vi: "Vai trò QC" },
        points: [
          {
            en: "Designed a 100-case regression suite across 5 categories, then expanded it to 132 cases.",
            vi: "Thiết kế bộ regression 100 case thuộc 5 nhóm, sau đó mở rộng lên 132 case.",
          },
          {
            en: "Wrote guardrail tests for out-of-scope and unsafe questions — all 15/15 passing.",
            vi: "Viết guardrail test cho câu hỏi ngoài phạm vi và không an toàn — đạt 15/15.",
          },
          {
            en: "Tracked retrieval quality over 40+ evaluation runs (Recall@1, MRR@10) to show whether each change actually helped.",
            vi: "Theo dõi chất lượng truy xuất qua hơn 40 lần đánh giá (Recall@1, MRR@10) để biết mỗi thay đổi có thực sự cải thiện không.",
          },
          {
            en: "Checked every answer for fabricated values — numbers, names or policies not present in the source documents.",
            vi: "Kiểm tra từng câu trả lời để phát hiện giá trị bịa đặt — số liệu, tên hoặc chính sách không có trong tài liệu gốc.",
          },
        ],
      },
      {
        heading: { en: "Results", vi: "Kết quả" },
        points: [
          { en: "Regression pass rate rose from 51% to 87%.", vi: "Pass rate regression tăng từ 51% lên 87%." },
          { en: "Recall@1 improved from 79.2% to 97.5%; MRR@10 from 0.86 to 0.98.", vi: "Recall@1 tăng từ 79,2% lên 97,5%; MRR@10 từ 0,86 lên 0,98." },
          {
            en: "Answer correctness reached 88.7% — above the 85% accuracy target — with zero fabricated values.",
            vi: "Độ đúng câu trả lời đạt 88,7% — vượt ngưỡng 85% đề ra — không có giá trị bịa đặt.",
          },
          { en: "100% pass on guardrail tests (15/15).", vi: "Đạt 100% guardrail test (15/15)." },
        ],
      },
    ],
  },
  {
    slug: "incidentlens",
    title: "IncidentLens",
    tagline: {
      en: "An AI assistant that reads multi-camera video and sensor/control logs around an autonomous-driving incident and drafts a structured, evidence-backed report for engineers to review and approve.",
      vi: "Trợ lý AI đọc video nhiều camera và log cảm biến/điều khiển quanh một sự cố lái tự động, sinh bản nháp báo cáo có cấu trúc và có bằng chứng để kỹ sư review và duyệt.",
    },
    role: { en: "Business Analyst · Quality Assurance · UX/UI Designer", vi: "Business Analyst · Quality Assurance · UX/UI Designer" },
    period: { en: "Jul – Aug 2026", vi: "07 – 08/2026" },
    shots: [
      {
        src: "/images/projects/incidentlens-home.jpg",
        caption: {
          en: "IncidentLens — turns an autonomous-driving incident into an evidence-backed technical report in minutes",
          vi: "IncidentLens — biến một sự cố lái tự động thành báo cáo kỹ thuật có bằng chứng trong vài phút",
        },
      },
    ],
    tags: ["BRD", "Root-Cause Analysis", "Stakeholder Mapping", "Scope Definition", "NFRs", "UX/UI Design", "Test Planning", "Fuzz Testing", "Prompt-Contract Tests"],
    metrics: [
      { value: "475 → 758", label: { en: "Automated tests", vi: "Test tự động" } },
      { value: "70% → 74%", label: { en: "Code coverage", vi: "Độ bao phủ code" } },
      { value: "26", label: { en: "API endpoints fuzz-tested", vi: "API endpoint được fuzz test" } },
      { value: "38/38", label: { en: "Taxonomy definitions verified", vi: "Định nghĩa taxonomy được xác minh" } },
    ],
    sections: [
      {
        heading: { en: "The problem", vi: "Vấn đề" },
        body: {
          en: "After every disengagement, safety engineers scrub through multi-camera video and cross-check sensor/control logs by hand, then write the report from scratch. Reports differ from engineer to engineer, seniors re-review juniors' work, and incidents pile up faster than they can be analysed. The root causes are not a lack of skill:",
          vi: "Sau mỗi sự cố disengagement, kỹ sư an toàn phải tua video nhiều camera, đối chiếu thủ công với log cảm biến/điều khiển rồi viết báo cáo từ đầu. Báo cáo khác nhau giữa các kỹ sư, senior phải review lại bài của junior, và sự cố tồn đọng nhanh hơn năng lực xử lý. Nguyên nhân gốc không nằm ở kỹ năng:",
        },
        points: [
          {
            en: "No shared analysis standard: each engineer interprets the key factors of an incident from personal experience, with no required frame of reference.",
            vi: "Thiếu chuẩn phân tích chung: mỗi kỹ sư tự diễn giải yếu tố then chốt của sự cố theo kinh nghiệm cá nhân, không có khung tham chiếu bắt buộc.",
          },
          {
            en: "Linking video and logs by timestamp is the same manual, repetitive task in every incident.",
            vi: "Liên kết video và log theo timestamp là tác vụ thủ công, lặp lại ở mọi sự cố.",
          },
          {
            en: "No starting point: engineers have no preliminary summary to edit, so every report begins from a blank page.",
            vi: "Thiếu điểm khởi đầu: kỹ sư không có bản tóm tắt sơ bộ để chỉnh sửa, nên báo cáo nào cũng bắt đầu từ trang trắng.",
          },
          {
            en: "No system-level measure of analysis speed or quality — problems only surface in senior review.",
            vi: "Không có cơ chế đo tốc độ và chất lượng phân tích ở cấp hệ thống — vấn đề chỉ lộ ra khi senior review.",
          },
        ],
      },
      {
        heading: { en: "The solution", vi: "Giải pháp" },
        body: {
          en: "An AI assistant that takes multi-camera video and sensor/control logs around a flagged incident and drafts a structured report — actor, behaviour, conditions, key timestamps — for the engineer to review, edit and approve. It turns the job from \"write from scratch\" into \"review and approve\".",
          vi: "Trợ lý AI nhận video nhiều camera và log cảm biến/điều khiển quanh một sự cố đã được gắn cờ, sinh bản nháp báo cáo có cấu trúc — tác nhân, hành vi, điều kiện, mốc thời gian then chốt — để kỹ sư review, chỉnh sửa và duyệt. Công việc chuyển từ \"viết từ đầu\" thành \"review và duyệt\".",
        },
        points: [
          {
            en: "Human-in-the-loop: the AI only drafts; because this is safety data, the engineer always makes the final call.",
            vi: "Human-in-the-loop: AI chỉ tạo bản nháp; vì đây là dữ liệu an toàn, kỹ sư luôn là người quyết định cuối.",
          },
          {
            en: "Only the window around the incident is processed, not the whole drive, to keep VLM cost and processing time down.",
            vi: "Chỉ xử lý đoạn video/log quanh thời điểm sự cố, không xử lý toàn bộ hành trình, để tối ưu chi phí gọi VLM và thời gian xử lý.",
          },
          {
            en: "Core features: automatic video–log sync around the incident, a structured draft report, a side-by-side review view of source data and draft, and edit tracking to measure how often drafts are accepted.",
            vi: "Tính năng cốt lõi: tự động đồng bộ video–log quanh sự cố, bản nháp báo cáo có cấu trúc, giao diện review đặt dữ liệu gốc cạnh bản nháp, và ghi nhận chỉnh sửa để đo tỷ lệ bản nháp được chấp nhận.",
          },
          {
            en: "Every approved report links back to the source data and its edit history for traceability.",
            vi: "Mỗi báo cáo đã duyệt liên kết ngược tới dữ liệu gốc và lịch sử chỉnh sửa để phục vụ truy vết.",
          },
        ],
      },
      {
        heading: { en: "My role as BA", vi: "Vai trò BA" },
        points: [
          {
            en: "Authored the BRD: separated symptoms from root causes, wrote the problem statement and defined 5 pain-point metrics that measure the root causes rather than the symptoms.",
            vi: "Viết BRD: tách triệu chứng khỏi nguyên nhân gốc, viết problem statement và xác định 5 chỉ số đo nỗi đau bám vào nguyên nhân gốc thay vì triệu chứng.",
          },
          {
            en: "Mapped 4 stakeholder groups — incident analysts (primary users), the Safety Lead (sponsor), downstream perception/planning/control engineers and compliance — and focused the UX on the analysts whose adoption decides success.",
            vi: "Phân tích 4 nhóm stakeholder — kỹ sư phân tích sự cố (người dùng chính), Safety Lead (sponsor), kỹ sư downstream perception/planning/control và bộ phận compliance — và tập trung UX vào kỹ sư phân tích, nhóm quyết định công cụ có được dùng hay không.",
          },
          {
            en: "Set the scope rule that every in-scope feature must map to a root cause and a metric; pushed incident auto-detection, real-time processing, compliance integration and multi-incident dashboards out of the MVP.",
            vi: "Đặt nguyên tắc mỗi tính năng trong phạm vi phải map được tới một nguyên nhân gốc và một metric; đẩy tự động phát hiện sự cố, xử lý real-time, tích hợp compliance và dashboard đa sự cố ra khỏi MVP.",
          },
          {
            en: "Defined NFRs (access control, performance, VLM cost, traceability), MVP success criteria and the assumptions to validate before locking scope.",
            vi: "Xác định NFR (phân quyền, hiệu năng, chi phí VLM, truy vết), tiêu chí thành công cho MVP và các giả định cần xác thực trước khi chốt scope.",
          },
          {
            en: "Wrote user stories for 4 personas and validated the problem on 50–80 NHTSA SGO incident narratives.",
            vi: "Viết user story cho 4 persona và kiểm chứng vấn đề trên 50–80 mô tả sự cố NHTSA SGO.",
          },
          {
            en: "Reported MVP results honestly, including failed criteria (taxonomy accuracy 21.7% vs. a 17.4% majority baseline), and flagged the missing manual-time baseline as the top remaining risk.",
            vi: "Báo cáo kết quả MVP trung thực, kể cả tiêu chí chưa đạt (độ chính xác taxonomy 21,7% so với baseline 17,4%), và chỉ ra việc thiếu baseline thời gian làm thủ công là rủi ro lớn nhất còn lại.",
          },
        ],
      },
      {
        heading: { en: "My role as QA", vi: "Vai trò QA" },
        points: [
          {
            en: "Wrote a prioritized test plan covering technical, functional, UX and compliance risks.",
            vi: "Viết test plan có ưu tiên, bao phủ rủi ro kỹ thuật, chức năng, UX và tuân thủ.",
          },
          {
            en: "Grew the suite from 475 to 758 tests (coverage 70% → 74%) and proved the tests catch real bugs through fault injection and re-introduced historical bugs.",
            vi: "Mở rộng bộ test từ 475 lên 758 test (coverage 70% → 74%) và chứng minh test bắt được lỗi thật bằng fault injection và tái tạo lỗi cũ.",
          },
          {
            en: "Added fuzz tests across 26 API endpoints (156 tests).",
            vi: "Bổ sung fuzz test cho 26 API endpoint (156 test).",
          },
          {
            en: "Added prompt-contract tests (21 tests, 0 LLM tokens): 38/38 taxonomy definitions present and no label leakage across 92 clips.",
            vi: "Bổ sung prompt-contract test (21 test, 0 token LLM): đủ 38/38 định nghĩa taxonomy và không rò rỉ nhãn trên 92 clip.",
          },
        ],
      },
    ],
  },
  {
    slug: "ics-hrm",
    title: "ICS HRM – Human Resource Management System",
    tagline: {
      en: "Capstone project: a centralized HR system for ICS that links projects, tasks, attendance, leave, KPI and payroll in one closed loop — from field survey and requirements to a working web app.",
      vi: "Đồ án tốt nghiệp: hệ thống quản lý nhân sự tập trung cho ICS, liên kết dự án, công việc, chấm công, nghỉ phép, KPI và lương thành một chu trình khép kín — từ khảo sát, đặc tả yêu cầu đến ứng dụng web chạy được.",
    },
    role: { en: "Solo project · Business Analyst & Full-stack Developer", vi: "Dự án cá nhân · Business Analyst & Full-stack Developer" },
    period: { en: "Apr – Jun 2026", vi: "04 – 06/2026" },
    github: "https://github.com/dothanhloan/HRM_ICS",
    shots: [
      {
        src: "/images/projects/ics-hrm-dashboard.jpg",
        caption: {
          en: "ICS HRM dashboard — department info, monthly attendance, salary & KPI, and a quick report of my tasks",
          vi: "Dashboard ICS HRM — thông tin phòng ban, chấm công tháng, lương & KPI, và báo cáo nhanh công việc của tôi",
        },
      },
    ],
    tags: ["Business Survey", "Competitor Analysis", "Requirements Spec", "Use Cases", "UML", "Database Design", "FastAPI", "React", "MySQL"],
    metrics: [
      { value: "8", label: { en: "HR modules", vi: "Phân hệ nhân sự" } },
      { value: "12", label: { en: "Use cases specified", vi: "Use case được đặc tả" } },
      { value: "25", label: { en: "Database tables", vi: "Bảng cơ sở dữ liệu" } },
    ],
    sections: [
      {
        heading: { en: "The problem", vi: "Vấn đề" },
        body: {
          en: "ICS already had an HR system for employee records, attendance and leave, but the data around it did not connect:",
          vi: "ICS đã có hệ thống quản lý nhân sự cho hồ sơ nhân viên, chấm công và nghỉ phép, nhưng dữ liệu xung quanh chưa được liên kết:",
        },
        points: [
          {
            en: "Tasks were assigned across Zalo, WhatsApp and the HR system, making progress and task status hard to control.",
            vi: "Công việc được giao qua cả Zalo, WhatsApp và hệ thống nhân sự, khó kiểm soát tiến độ và tình trạng công việc.",
          },
          {
            en: "Performance reviews relied on manual counting, so KPI evaluation was slow and not transparent.",
            vi: "Đánh giá hiệu suất dựa vào thống kê thủ công, nên việc đánh giá KPI chậm và thiếu minh bạch.",
          },
          {
            en: "Attendance, leave and KPI data were not linked, so HR had to compile payroll from several sources by hand.",
            vi: "Dữ liệu chấm công, nghỉ phép và KPI chưa liên kết, nên bộ phận nhân sự phải tự tổng hợp từ nhiều nguồn để tính lương.",
          },
        ],
      },
      {
        heading: { en: "The solution", vi: "Giải pháp" },
        body: {
          en: "A web-based HR system whose key difference is the data link between modules: task results feed KPI, and KPI together with attendance and leave feeds payroll automatically.",
          vi: "Hệ thống quản lý nhân sự trên nền web, điểm khác biệt là dữ liệu liên thông giữa các phân hệ: kết quả công việc dùng để tính KPI, và KPI cùng chấm công, nghỉ phép được tổng hợp tự động để tính lương.",
        },
        points: [
          {
            en: "Projects & tasks: each task is split into sub-steps; progress is calculated from completed steps, and the project lead approves a task at 100% before it counts as done.",
            vi: "Dự án & công việc: mỗi công việc chia thành các bước con, tiến độ tính theo số bước đã hoàn thành; trưởng dự án phê duyệt khi đạt 100% trước khi chuyển sang \"Đã hoàn thành\".",
          },
          {
            en: "Attendance: office check-in is accepted only within 500 m of the office (location verified), WFH check-in is recorded separately, and late arrivals or missing check-outs are flagged automatically, with an explanation-and-approval flow.",
            vi: "Chấm công: check-in tại văn phòng chỉ hợp lệ trong bán kính 500 m (xác thực vị trí), WFH được ghi nhận riêng; đi trễ hoặc thiếu check-out được tự động gắn cờ, kèm luồng giải trình và phê duyệt.",
          },
          {
            en: "Leave: one day of leave accrues per month worked and carries over; leave requests go through an approval flow.",
            vi: "Nghỉ phép: mỗi tháng làm việc được cộng 1 ngày phép và cộng dồn sang tháng sau; đơn nghỉ phép đi qua luồng phê duyệt.",
          },
          {
            en: "KPI: calculated monthly from completion rate, on-time rate and workload versus the team average, then converted to a salary coefficient.",
            vi: "KPI: tính theo tháng từ tỷ lệ hoàn thành, tỷ lệ đúng hạn và khối lượng công việc so với trung bình nhóm, rồi quy đổi sang hệ số lương.",
          },
          {
            en: "Payroll: actual working days from attendance and leave × KPI coefficient, minus insurance and tax; employees only see a payslip after the admin approves it.",
            vi: "Lương: ngày công thực tế từ chấm công và nghỉ phép × hệ số KPI, trừ bảo hiểm và thuế; nhân viên chỉ xem được phiếu lương sau khi admin duyệt.",
          },
          {
            en: "Role-based access for Admin, project leads and employees.",
            vi: "Phân quyền theo vai trò cho Admin, trưởng dự án và nhân viên.",
          },
        ],
      },
      {
        heading: { en: "My role as BA", vi: "Vai trò BA" },
        points: [
          {
            en: "Surveyed ICS's current HR process and system, and benchmarked two market products (MISA AMIS HRM, Lac Viet SureHCS) to decide what to build within a 3-month scope.",
            vi: "Khảo sát quy trình và hệ thống nhân sự hiện tại của ICS, đối chiếu với hai sản phẩm trên thị trường (MISA AMIS HRM, Lạc Việt SureHCS) để chọn phạm vi phù hợp với 3 tháng thực hiện.",
          },
          {
            en: "Wrote the requirements specification for Admin and Employee roles across 8 modules, including the business rules for attendance, leave, KPI and payroll.",
            vi: "Viết đặc tả yêu cầu cho hai vai trò Admin và Nhân viên trên 8 phân hệ, gồm các quy tắc nghiệp vụ về chấm công, nghỉ phép, KPI và lương.",
          },
          {
            en: "Modelled the system with use-case diagrams and specified 12 key use cases, each with an activity diagram and a sequence diagram.",
            vi: "Mô hình hóa hệ thống bằng biểu đồ use case và đặc tả 12 use case chính, mỗi use case kèm biểu đồ hoạt động và biểu đồ tuần tự.",
          },
        ],
      },
      {
        heading: { en: "Design & build", vi: "Thiết kế & xây dựng" },
        points: [
          {
            en: "Designed a relational database of 25 tables (with an EER diagram) to keep data consistent across interconnected modules.",
            vi: "Thiết kế cơ sở dữ liệu quan hệ 25 bảng (kèm sơ đồ EER), đảm bảo dữ liệu nhất quán giữa các phân hệ liên kết.",
          },
          {
            en: "Built the web app end to end: Python/FastAPI REST API, React frontend, MySQL with SQLAlchemy and Alembic migrations.",
            vi: "Tự xây dựng ứng dụng web từ đầu đến cuối: REST API bằng Python/FastAPI, giao diện React, MySQL với SQLAlchemy và Alembic migration.",
          },
          {
            en: "Validated the system against the documented requirements, and recorded its limits (basic KPI criteria and payroll rules, no mobile app or device integration yet) as next steps.",
            vi: "Kiểm chứng hệ thống so với yêu cầu đã đặc tả, và ghi nhận các hạn chế (tiêu chí KPI và quy tắc lương còn cơ bản, chưa có app di động hay tích hợp máy chấm công) làm hướng phát triển tiếp.",
          },
        ],
      },
    ],
  },
  {
    slug: "hrm-chatbot",
    title: "Automated HRM Data Query Chatbot",
    tagline: {
      en: "An internal AI chatbot at ICS that answers questions about HR data in natural language — the LLM turns each question into SQL, queries live data through an internal API and replies in plain language, within each user's access rights.",
      vi: "Chatbot AI nội bộ tại ICS trả lời câu hỏi về dữ liệu nhân sự bằng ngôn ngữ tự nhiên — LLM chuyển câu hỏi thành SQL, truy vấn dữ liệu hiện hành qua API nội bộ và trả lời dễ hiểu, đúng phạm vi quyền của từng người dùng.",
    },
    role: { en: "Requirements Definition & Full-stack Implementation", vi: "Xác định yêu cầu & Phát triển full-stack" },
    period: { en: "Jan – Jun 2026", vi: "01 – 06/2026" },
    github: "https://github.com/dothanhloan/Chatbot-SQL-Agent",
    shots: [
      {
        src: "/images/projects/hrm-chatbot-login.jpg",
        caption: {
          en: "ICS HRM Chatbot — sign-in screen of the HR data query assistant",
          vi: "ICS HRM Chatbot — màn hình đăng nhập của trợ lý tra cứu dữ liệu nhân sự",
        },
      },
    ],
    tags: ["Requirements", "Role-based Access", "Prompt Engineering", "Text-to-SQL", "LangChain", "FastAPI", "React", "AI Testing"],
    metrics: [
      { value: "3", label: { en: "User roles with scoped data access", vi: "Vai trò người dùng có phạm vi dữ liệu riêng" } },
      { value: "6", label: { en: "HR data domains queried", vi: "Nhóm dữ liệu nhân sự được truy vấn" } },
    ],
    sections: [
      {
        heading: { en: "The problem", vi: "Vấn đề" },
        body: {
          en: "Answering everyday questions about HR data — who is late today, which tasks are overdue, how a project is progressing — meant knowing the database or waiting for someone who did. The goal was to let staff ask in plain Vietnamese and get accurate, up-to-date answers, without exposing data beyond their role.",
          vi: "Để trả lời những câu hỏi thường ngày về dữ liệu nhân sự — hôm nay ai đi muộn, công việc nào trễ hạn, dự án đang tiến triển ra sao — người dùng phải biết truy vấn cơ sở dữ liệu hoặc chờ người biết. Mục tiêu là để nhân viên hỏi bằng tiếng Việt tự nhiên và nhận câu trả lời chính xác, cập nhật, mà không để lộ dữ liệu vượt quá vai trò của mình.",
        },
      },
      {
        heading: { en: "The solution", vi: "Giải pháp" },
        body: {
          en: "Question → API → AI agent understands the intent → generates SQL → queries the live database → summarises the result in plain language, across employees, departments, attendance, salary, projects and tasks.",
          vi: "Câu hỏi → API → AI agent hiểu ý định → sinh SQL → truy vấn cơ sở dữ liệu hiện hành → tổng hợp kết quả thành câu trả lời dễ hiểu, trên các nhóm dữ liệu nhân viên, phòng ban, chấm công, lương, dự án và công việc.",
        },
        points: [
          {
            en: "Role-based access for Admin, Manager and Employee: each role only queries the data it is allowed to see — employees cannot see other people's salaries, and managers are limited to their own department.",
            vi: "Phân quyền theo vai trò Admin, Quản lý và Nhân viên: mỗi vai trò chỉ truy vấn được dữ liệu trong quyền hạn — nhân viên không xem được lương người khác, quản lý chỉ trong phạm vi phòng ban mình.",
          },
          {
            en: "Read-only by design: the prompt only allows SELECT statements, so the chatbot can never change data.",
            vi: "Chỉ đọc ngay từ thiết kế: prompt chỉ cho phép câu lệnh SELECT, nên chatbot không thể thay đổi dữ liệu.",
          },
          {
            en: "Daily Briefing for admins: today's attendance, overdue tasks and projects, active projects and priority alerts.",
            vi: "Tóm tắt ngày (Daily Briefing) cho admin: chấm công hôm nay, công việc và dự án quá hạn, dự án đang chạy và cảnh báo ưu tiên.",
          },
          {
            en: "Analytics Dashboard to spot bottlenecks early, and HR analytics reports exported to .docx (overview, top performers, department comparison, project status).",
            vi: "Analytics Dashboard giúp phát hiện sớm điểm nghẽn, và xuất báo cáo phân tích nhân sự ra file .docx (tổng quan, top nhân viên nổi bật, so sánh phòng ban, tình trạng dự án).",
          },
        ],
      },
      {
        heading: { en: "Requirements & analysis", vi: "Phân tích & xác định yêu cầu" },
        points: [
          {
            en: "Surveyed the company's internal data — HR, departments, attendance, salary/KPI, projects and tasks — and analysed the database schema and table relationships.",
            vi: "Khảo sát hệ thống dữ liệu nội bộ — nhân sự, phòng ban, chấm công, lương/KPI, dự án và công việc — và phân tích lược đồ cơ sở dữ liệu cùng quan hệ giữa các bảng.",
          },
          {
            en: "Defined the chatbot's core use cases and query scope, and the access rules for each of the three roles, keeping sensitive data out of public answers.",
            vi: "Xác định các use case cốt lõi, phạm vi truy vấn và luật phân quyền cho từng vai trò trong ba vai trò, không để dữ liệu nhạy cảm xuất hiện trong câu trả lời công khai.",
          },
          {
            en: "Encoded business rules the AI must follow, such as the 08:06 late-arrival rule and always using the latest task progress rather than an average.",
            vi: "Đưa các luật nghiệp vụ AI bắt buộc tuân theo vào hệ thống, như quy tắc đi muộn từ 08:06 và luôn lấy tiến độ mới nhất thay vì trung bình.",
          },
        ],
      },
      {
        heading: { en: "Build", vi: "Xây dựng" },
        points: [
          {
            en: "Backend: RESTful API with FastAPI and Uvicorn (models / schemas / routers), with every response standardised as JSON.",
            vi: "Backend: RESTful API bằng FastAPI và Uvicorn (tách models / schemas / routers), mọi phản hồi chuẩn hóa dạng JSON.",
          },
          {
            en: "AI core: LangChain with Groq and OpenAI models; the prompt gives the model a data-analyst role, the schema and table relationships, and a map from business terms to database fields so it generates accurate multi-table SQL.",
            vi: "Lõi AI: LangChain với mô hình Groq và OpenAI; prompt giao cho mô hình vai trò chuyên gia phân tích dữ liệu, cung cấp schema, quan hệ giữa các bảng và bảng ánh xạ từ thuật ngữ nghiệp vụ sang tên trường, để sinh SQL nhiều bảng chính xác.",
          },
          {
            en: "Frontend: a React chat portal with role-specific views, suggested questions, typing and loading states, chat history and file downloads; context sent to the backend is capped to keep requests small.",
            vi: "Frontend: cổng chat bằng React với giao diện riêng theo vai trò, gợi ý câu hỏi, trạng thái đang gõ/đang tải, lịch sử chat và tải file; giới hạn số tin nhắn ngữ cảnh gửi lên backend để request gọn nhẹ.",
          },
          {
            en: "Deployed on Ubuntu Server behind Nginx.",
            vi: "Triển khai trên Ubuntu Server qua Nginx.",
          },
        ],
      },
      {
        heading: { en: "Testing", vi: "Kiểm thử" },
        points: [
          {
            en: "Tested the API in Postman with simple, filtered, statistical and multi-table questions before front-end integration.",
            vi: "Kiểm thử API bằng Postman với câu hỏi đơn giản, có điều kiện lọc, thống kê và nhiều bảng trước khi tích hợp giao diện.",
          },
          {
            en: "Tested end to end for every role, making sure each one only reaches the data it is permitted to see.",
            vi: "Kiểm thử end-to-end cho từng vai trò, đảm bảo mỗi vai trò chỉ truy cập đúng dữ liệu được phép.",
          },
          {
            en: "Checked AI quality: different phrasings of the same question, generated SQL against the schema and business rules, answers against direct database queries (no guessing, rounding or dropped 0% / empty results), and edge cases such as no data or ambiguous questions.",
            vi: "Kiểm thử chất lượng AI: nhiều cách diễn đạt cho cùng một câu hỏi, đối chiếu SQL sinh ra với schema và luật nghiệp vụ, đối chiếu câu trả lời với truy vấn trực tiếp trên CSDL (không suy đoán, không làm tròn, không bỏ giá trị 0% hay danh sách rỗng), và các trường hợp biên như không có dữ liệu hoặc câu hỏi mơ hồ.",
          },
        ],
      },
    ],
  },
];

export const skills: { group: L; items: string[] }[] = [
  {
    group: { en: "Business Analysis", vi: "Phân tích nghiệp vụ" },
    items: [
      "Requirements Elicitation",
      "BRD / PRD",
      "User Stories & Personas",
      "Use Cases",
      "Acceptance Criteria",
      "Stakeholder Management",
      "Change & Impact Analysis",
      "Requirements Traceability",
      "Risk, Issue & Dependency Tracking",
      "Product Roadmapping",
    ],
  },
  {
    group: { en: "Quality Assurance / QC", vi: "Đảm bảo chất lượng / QC" },
    items: [
      "Test Planning",
      "Test Case Design",
      "Regression Testing",
      "UAT Support",
      "API Fuzz Testing",
      "LLM Guardrail Testing",
      "Prompt-Contract Testing",
      "RAG Evaluation (Recall@k, MRR)",
      "Fault Injection",
    ],
  },
  {
    // TODO: add the tools you actually use (Jira, Confluence, Figma, Postman, ...)
    group: { en: "Tools & Tech", vi: "Công cụ & Công nghệ" },
    items: ["SQL", "Python", "pytest", "Agile / Scrum"],
  },
];

export const certifications: { name: L; href?: string }[] = [
  { name: { en: "VinUniversity – AI in Action, Batch 3 (2026)", vi: "VinUniversity – AI in Action, Batch 3 (2026)" } },
];
