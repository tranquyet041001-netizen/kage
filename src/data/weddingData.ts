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
    fatherName: string;
    motherName: string;
    residence: string;
  };
  bride: {
    name: string;
    fullName: string;
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
  timeline: TimelineMilestone[];
  events: WeddingEvent[];
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
    fatherName: "Ông Nguyễn Văn Dũng",
    motherName: "Bà Trần Thị Hạnh",
    residence: "Hà Nội, Việt Nam"
  },
  bride: {
    name: "Hoài An",
    fullName: "Phạm Hoài An",
    fatherName: "Ông Phạm Văn Thành",
    motherName: "Bà Lê Thu Trang",
    residence: "Hà Nội, Việt Nam"
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
  timeline: [
    {
      id: "meet",
      year: "2018",
      title: "GẶP GỠ (2018)",
      subtitle: "Góc cà phê quen thuộc",
      description: "Chỉ một ánh nhìn tình cờ tại góc quán nhỏ chiều thu Hà Nội, câu chuyện của chúng tôi đã bắt đầu từ đó.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=85",
      badge: "FIRST SIGHT"
    },
    {
      id: "dating",
      year: "2019",
      title: "HẸN HÒ (2019)",
      subtitle: "Những buổi dạo bước",
      description: "Những buổi dạo bộ rợp bóng mát, cùng lắng nghe những giai điệu êm đềm và sẻ chia từng ước mơ giản đơn.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=85",
      badge: "FALLING IN LOVE"
    },
    {
      id: "engagement",
      year: "2023",
      title: "ĐÍNH HÔN (2023)",
      subtitle: "Lời hẹn ước trọn đời",
      description: "Chiếc nhẫn đính ước trao tay dưới ánh hoàng hôn biển rạng rỡ, với một câu trả lời 'Em đồng ý' đong đầy nước mắt hạnh phúc.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=85",
      badge: "SHE SAID YES"
    },
    {
      id: "wedding",
      year: "2024",
      title: "ĐÁM CƯỚI (2024)",
      subtitle: "Ngày chung đôi viên mãn",
      description: "Được nắm tay người mình yêu bước vào thánh đường, cùng viết nên chương mới đẹp nhất của cuộc đời.",
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
      title: "TIỆC CƯỚI",
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
