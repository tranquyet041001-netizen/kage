export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
}

export interface WeddingEvent {
  id: string;
  type: "BAO_HY" | "TIEC_CUOI";
  title: string;
  subTitle: string;
  timeRange: string;
  dateStr: string;
  locationName: string;
  address: string;
  mapEmbedUrl?: string;
  calendarEvent: {
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
  };
}

export interface ScheduleStep {
  time: string;
  title: string;
  description: string;
  iconType: "welcome" | "ring" | "wine" | "music" | "photo";
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  aspect?: "portrait" | "landscape" | "square";
}

export interface BankAccount {
  ownerName: string;
  bankName: string;
  accountNumber: string;
  branch?: string;
  role: "CHÚ RỂ" | "CÔ DÂU";
  qrUrl?: string;
}

export interface WeddingData {
  groom: {
    name: string;
    fullName: string;
    title: string; // Trưởng nam
    fatherName: string;
    motherName: string;
    residence: string;
  };
  bride: {
    name: string;
    fullName: string;
    title: string; // Út nữ
    fatherName: string;
    motherName: string;
    residence: string;
  };
  weddingDate: {
    day: number;
    month: number;
    year: number;
    lunarDateText: string;
    fullDisplay: string;
    time: string;
    targetTimestamp: number;
  };
  envelopeHeader: string;
  invitationTitle: string;
  welcomeMessage: {
    title: string;
    content: string[];
    quote: string;
  };
  timeline: TimelineMilestone[];
  events: WeddingEvent[];
  programSchedule: ScheduleStep[];
  gallery: GalleryPhoto[];
  dressCode: {
    title: string;
    description: string;
    colors: { name: string; hex: string; border?: string }[];
  };
  bankAccounts: BankAccount[];
  music: {
    title: string;
    artist: string;
    audioUrl: string;
  };
}

export const weddingData: WeddingData = {
  groom: {
    name: "Minh Quân",
    fullName: "Nguyễn Minh Quân",
    title: "Trưởng Nam",
    fatherName: "Ông Nguyễn Văn Dũng",
    motherName: "Bà Trần Thị Hạnh",
    residence: "Ba Đình, Hà Nội"
  },
  bride: {
    name: "Hoài An",
    fullName: "Phạm Hoài An",
    title: "Ái Nữ",
    fatherName: "Ông Phạm Văn Thành",
    motherName: "Bà Lê Thu Trang",
    residence: "Cầu Giấy, Hà Nội"
  },
  weddingDate: {
    day: 28,
    month: 12,
    year: 2024,
    lunarDateText: "Ngày 28 tháng 11 năm Giáp Thìn",
    fullDisplay: "28 THÁNG 12 NĂM 2024",
    time: "18:00",
    targetTimestamp: new Date("2026-12-28T18:00:00+07:00").getTime()
  },
  envelopeHeader: "MỜI TRÂN TRỌNG",
  invitationTitle: "HÔN LỄ ĐƯỢC CỬ HÀNH VÀO",
  welcomeMessage: {
    title: "Lời Ngỏ Từ Chúng Tôi",
    content: [
      "Hạnh phúc không phải là một điểm đến, mà là một hành trình có người cùng ta sánh bước qua bao năm tháng thăng trầm.",
      "Sau 6 năm gắn bó và sẻ chia, chúng tôi tin rằng đây chính là khoảnh khắc trọn vẹn nhất để cùng nhau xây đắp một mái ấm gia đình. Sự hiện diện và lời chúc phúc của Quý khách chính là món quà quý giá nhất trong ngày trọng đại này."
    ],
    quote: "“Yêu một người là cùng nhau nhìn về một hướng và cùng nhau đi suốt cuộc đời.”"
  },
  timeline: [
    {
      id: "meet",
      year: "2018",
      title: "GẶP GỠ (2018)",
      subtitle: "Góc cà phê quen thuộc",
      description: "Chỉ một ánh nhìn tình cờ tại góc quán nhỏ chiều thu Hà Nội, câu chuyện ngàn ngày bắt đầu bằng một nụ cười ấm áp.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=85",
      badge: "FIRST SIGHT"
    },
    {
      id: "dating",
      year: "2019",
      title: "HẸN HÒ (2019)",
      subtitle: "Những buổi dạo bước",
      description: "Những buổi dạo bộ rợp bóng mát, cùng lắng nghe từng giai điệu êm đềm và thầm sẻ chia những hoài bão bình dị.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=85",
      badge: "FALLING IN LOVE"
    },
    {
      id: "engagement",
      year: "2023",
      title: "ĐÍNH HÔN (2023)",
      subtitle: "Lời hẹn ước trọn đời",
      description: "Chiếc nhẫn trao tay dưới hoàng hôn biển rạng rỡ, với một câu trả lời 'Em đồng ý' đong đầy giọt nước mắt hạnh phúc.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=85",
      badge: "SHE SAID YES"
    },
    {
      id: "wedding",
      year: "2024",
      title: "ĐÁM CƯỚI (2024)",
      subtitle: "Ngày chung đôi viên mãn",
      description: "Nắm chặt tay nhau bước vào thánh đường, cùng viết nên chương mới đẹp nhất và thiêng liêng nhất của cuộc đời.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
      badge: "EVERLASTING"
    }
  ],
  events: [
    {
      id: "le-bao-hy",
      type: "BAO_HY",
      title: "LỄ BÁO HỶ",
      subTitle: "Nghi lễ gia tiên & Tiệc thân mật",
      timeRange: "09:00 - 11:00",
      dateStr: "28/12/2024",
      locationName: "Tư gia Nhà Gái & Nhà Trai",
      address: "Số 68 Đường Hoàng Hoa Thám, Ba Đình, Hà Nội",
      calendarEvent: {
        title: "Lễ Báo Hỷ — Nguyễn Minh Quân & Phạm Hoài An",
        description: "Tham dự nghi lễ thành hôn & tiệc thân mật cùng gia đình hai họ",
        location: "Số 68 Đường Hoàng Hoa Thám, Ba Đình, Hà Nội",
        startDate: "20241228T090000",
        endDate: "20241228T110000"
      }
    },
    {
      id: "tiec-cuoi",
      type: "TIEC_CUOI",
      title: "TIỆC CƯỚI TRỌNG THỂ",
      subTitle: "Tiệc mừng trọng thể & Khai tiệc",
      timeRange: "18:00 - 21:00",
      dateStr: "28/12/2024",
      locationName: "Trung tâm Tiệc cưới Đông Sơn — Trống Đồng Palace",
      address: "Tầng 3, Tòa nhà Đông Sơn, Số 489 Hoàng Quốc Việt, Cầu Giấy, Hà Nội",
      calendarEvent: {
        title: "Tiệc Cưới Trọng Thể — Nguyễn Minh Quân & Phạm Hoài An",
        description: "Chung vui tiệc cưới cùng cô dâu Hoài An & chú rể Minh Quân",
        location: "Trống Đồng Palace, 489 Hoàng Quốc Việt, Cầu Giấy, Hà Nội",
        startDate: "20241228T180000",
        endDate: "20241228T210000"
      }
    }
  ],
  programSchedule: [
    {
      time: "17:30",
      title: "Đón Khách & Chụp Ảnh Lưu Niệm",
      description: "Tiếp đón quan khách, ghi sổ lưu bút và chụp hình tại photobooth phong cách Indochine.",
      iconType: "welcome"
    },
    {
      time: "18:30",
      title: "Lễ Thành Hôn & Nghi Thức Trao Nhẫn",
      description: "Cô dâu chú rể bước vào lễ đường, thực hiện nghi thức cắt bánh, rót rượu và trao lời thề nguyền.",
      iconType: "ring"
    },
    {
      time: "19:00",
      title: "Khai Tiệc Mừng Hạnh Phúc",
      description: "Mời toàn thể quan khách nâng ly chúc mừng và thưởng thức thực đơn ẩm thực cung đình đặc sắc.",
      iconType: "wine"
    },
    {
      time: "19:45",
      title: "Âm Nhạc Giao Lưu & Mini Game",
      description: "Các tiết mục hòa tấu violin lãng mạn cùng những phần quà kỷ niệm từ cô dâu chú rể.",
      iconType: "music"
    },
    {
      time: "20:30",
      title: "Tiễn Khách & Tri Ân",
      description: "Gia đình gửi lời cảm tạ chân thành và gửi quà cảm ơn tới từng vị khách quý.",
      iconType: "photo"
    }
  ],
  gallery: [
    {
      id: "p1",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
      caption: "Khoảnh khắc thiêng liêng khi hai trái tim hòa chung nhịp đập",
      aspect: "landscape"
    },
    {
      id: "p2",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85",
      caption: "Hẹn ước trăm năm bên người mình thương",
      aspect: "portrait"
    },
    {
      id: "p3",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85",
      caption: "Nụ cười rạng ngời trong ngày chung đôi",
      aspect: "landscape"
    },
    {
      id: "p4",
      url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85",
      caption: "Dưới ánh hoàng hôn, tình yêu đơm hoa kết trái",
      aspect: "portrait"
    },
    {
      id: "p5",
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85",
      caption: "Ghi dấu từng khoảnh khắc ngọt ngào bên nhau",
      aspect: "portrait"
    },
    {
      id: "p6",
      url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1000&q=85",
      caption: "Cùng nhìn về một tương lai tươi sáng và bền chặt",
      aspect: "landscape"
    }
  ],
  dressCode: {
    title: "GỢI Ý TRANG PHỤC (DRESS CODE)",
    description: "Để không gian tiệc cưới thêm phần hài hòa và trang trọng, Quý khách vui lòng ưu tiên lựa chọn trang phục theo các gam màu:",
    colors: [
      { name: "Xanh Emerald", hex: "#12332e" },
      { name: "Vàng Champagne", hex: "#e6c875" },
      { name: "Màu Be / Kem", hex: "#f5efe4", border: "#dfd2bc" },
      { name: "Trắng Ngà", hex: "#ffffff", border: "#dfd2bc" }
    ]
  },
  bankAccounts: [
    {
      ownerName: "NGUYEN MINH QUAN",
      bankName: "Techcombank",
      accountNumber: "19036888888888",
      branch: "Hà Nội",
      role: "CHÚ RỂ",
      qrUrl: "https://api.vietqr.io/image/970407-19036888888888-qr_only.jpg?accountName=NGUYEN%20MINH%20QUAN&amount=0"
    },
    {
      ownerName: "PHAM HOAI AN",
      bankName: "Vietcombank",
      accountNumber: "998877665544",
      branch: "Hà Nội",
      role: "CÔ DÂU",
      qrUrl: "https://api.vietqr.io/image/970436-998877665544-qr_only.jpg?accountName=PHAM%20HOAI%20AN&amount=0"
    }
  ],
  music: {
    title: "A Thousand Years (Acoustic Piano)",
    artist: "Indochine Chamber Ensemble",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112199.mp3"
  }
};
