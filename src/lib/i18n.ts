import { writable } from 'svelte/store';

export type Language = 'en' | 'ta';

export interface BranchInfo {
  id: string;
  name: string;
  address: string;
  mtc: string[];
  suburban: string;
  metro: { line: string; color: string; note?: string }[];
  directionsUrl: string;
  mapEmbedUrl: string;
}

export interface Translations {
  churchName: string;
  churchNameSub: string;
  nav: {
    home: string;
    about: string;
    branches: string;
    convention: string;
    member: string;
    contact: string;
    joinMeeting: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    updatesTitle: string;
    updatesSubtitle: string;
    conventionAnnouncement: string;
    sundayServiceTitle: string;
    sundayServiceDesc: string;
    quickLinksTitle: string;
  };
  about: {
    title: string;
    welcomeMsg: string;
    description: string;
    missionTitle: string;
    missionDesc: string;
  };
  branches: {
    title: string;
    subtitle: string;
    addressLabel: string;
    transitLabel: string;
    mtcLabel: string;
    suburbanLabel: string;
    metroLabel: string;
    getDirections: string;
    egmore: BranchInfo;
    manappakkam: BranchInfo;
  };
  convention: {
    title: string;
    subtitle: string;
    year: string;
    getDirections: string;
    detailedDirections: string;
    downloadSongSheet: string;
    downloadPoster: string;
    contactUs: string;
  };
  member: {
    title: string;
    headingTa: string;
    headingEn: string;
    taFormBtn: string;
    enFormBtn: string;
    description: string;
  };
  contact: {
    title: string;
    subtitle: string;
    contactPerson: string;
    phoneLabel: string;
    callNow: string;
    generalEnquiries: string;
  };
  meetingModal: {
    title: string;
    description: string;
    joinBtn: string;
    copyBtn: string;
    copied: string;
    close: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    churchName: "Kirubasanam Church of Christ Egmore",
    churchNameSub: "கிருபாசனம் கிருஸ்துவின் சபை எழும்பூர்",
    nav: {
      home: "Home",
      about: "About",
      branches: "Branches",
      convention: "Convention 2025",
      member: "Member Access",
      contact: "Contact",
      joinMeeting: "Join Meeting"
    },
    home: {
      heroTitle: "Welcome to Kirubasanam Church of Christ",
      heroSubtitle: "A place of grace, truth, and Christian fellowship in Egmore, Chennai.",
      updatesTitle: "Latest Updates & Announcements",
      updatesSubtitle: "Stay connected with upcoming events and spiritual meetings.",
      conventionAnnouncement: "Aavikkurriya Viseshittha Kootangal 2025 (New)",
      sundayServiceTitle: "Sunday Worship Services",
      sundayServiceDesc: "Join us in person or online for Sunday Worship & Prayer Services.",
      quickLinksTitle: "Quick Actions"
    },
    about: {
      title: "About Us",
      welcomeMsg: "Grace to you and peace from God our Father and the Lord Jesus Christ.",
      description: "Kirubasanam Church of Christ, Egmore is dedicated to preaching the uncompromised Word of God, nurturing spiritual growth, and serving our community with love and faith.",
      missionTitle: "Our Faith & Vision",
      missionDesc: "We strive to follow the New Testament pattern of worship, fellowship, and Christian living, proclaiming salvation through Christ."
    },
    branches: {
      title: "Our Branches",
      subtitle: "Find directions and public transport details to our worship locations.",
      addressLabel: "Address",
      transitLabel: "Public Transit",
      mtcLabel: "MTC Bus Routes",
      suburbanLabel: "Suburban Railway",
      metroLabel: "Metro Stations",
      getDirections: "Get Directions",
      egmore: {
        id: "egmore",
        name: "Egmore Branch",
        address: "107, Pantheon Rd, Egmore, Chennai, Tamil Nadu 600008",
        mtc: ["10A", "10E", "15C", "17D", "17E", "17K", "18G", "37E", "37ECT"],
        suburban: "Egmore Railway Station",
        metro: [
          { line: "Blue Line - Thousand Lights", color: "#0000dd" },
          { line: "Green Line - Nehru Park", color: "#009600" },
          { line: "Purple Line - Thousand Lights (Upcoming 2027)", color: "#7c00f8" }
        ],
        directionsUrl: "https://maps.app.goo.gl/hrA73TVBYQ5VbPLB7",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.2384931797671!2d80.25549470178771!3d13.06892853573137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266128d50d5ed%3A0x20a6776063867570!2sJeevan%20Jothi%20Building%20aka%20ICSA%20Centre!5e0!3m2!1sen!2sin!4v1719146268587!5m2!1sen!2sin"
      },
      manappakkam: {
        id: "manappakkam",
        name: "Manappakkam Branch",
        address: "2/513, Ambedkar Nagar, Manapakkam, Chennai, 600125",
        mtc: ["54B", "188C", "188ET"],
        suburban: "Guindy Railway Station",
        metro: [
          { line: "Red Line - Manappakkam (Upcoming 2026)", color: "#dd0000" }
        ],
        directionsUrl: "https://maps.app.goo.gl/yEZ46CxhjrXB1v1u8",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.322593714598!2d80.17837217460449!3d13.015117313923694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260ed6affffff%3A0xd3442d879d5f6742!2sIcsa%20Paripurna%20Training%20Centre!5e0!3m2!1sen!2sin!4v1719147777438!5m2!1sen!2sin"
      }
    },
    convention: {
      title: "Spiritual Special Meetings 2025",
      subtitle: "Aavikkurriya Viseshittha Kootangal 2025",
      year: "2025",
      getDirections: "Get Directions",
      detailedDirections: "View Branch Routes",
      downloadSongSheet: "Download Song Sheet (PDF)",
      downloadPoster: "View / Download Poster",
      contactUs: "Contact Us"
    },
    member: {
      title: "Member Registration & Google Meet Access",
      headingTa: "நமது சபையின் Google Meet கூட்டங்களை காண, நமது சபையின் மின்னஞ்சல் பட்டியலில் உங்கள் மின்னஞ்சலை சேர இந்த Link-ஐ Click செய்யவும்",
      headingEn: "To view our church's Google Meet meetings, click this link to add your email to our church's email list.",
      taFormBtn: "தமிழிற்கு Click செய்யவும்",
      enFormBtn: "For English Click Here",
      description: "Sign up to receive official Google Meet invitations and weekly prayer updates."
    },
    contact: {
      title: "Contact Us",
      subtitle: "Reach out to us for prayers, enquiries, or meeting details.",
      contactPerson: "Sis. Selvi",
      phoneLabel: "Phone Number",
      callNow: "Call Now",
      generalEnquiries: "For any questions or prayer requests, feel free to call us anytime."
    },
    meetingModal: {
      title: "Join Google Meet",
      description: "Click below to join our online church service directly via Google Meet.",
      joinBtn: "Open Google Meet",
      copyBtn: "Copy Link",
      copied: "Copied!",
      close: "Close"
    }
  },
  ta: {
    churchName: "கிருபாசனம் கிருஸ்துவின் சபை எழும்பூர்",
    churchNameSub: "Kirubasanam Church of Christ Egmore",
    nav: {
      home: "முகப்பு",
      about: "பற்றி",
      branches: "கிளைகள்",
      convention: "கூட்டங்கள் 2025",
      member: "உறுப்பினர் சேர்க்கை",
      contact: "தொடர்பு",
      joinMeeting: "மீட்டிங்"
    },
    home: {
      heroTitle: "கிருபாசனம் கிருஸ்துவின் சபைக்கு நல்வரவு",
      heroSubtitle: "சென்னை எழும்பூரில் தேவ கிருபையும் சத்தியமும் நிறைந்த கிறிஸ்தவ சபை.",
      updatesTitle: "சமீபத்திய அறிவிப்புகள்",
      updatesSubtitle: "நமது சபையின் சிறப்பு நிகழ்வுகள் மற்றும் ஆவிக்குரிய கூட்டங்கள்.",
      conventionAnnouncement: "ஆவிக்குரிய விசேஷித்த கூட்டங்கள் 2025 (புதியது)",
      sundayServiceTitle: "ஞாயிறு ஆராதனை",
      sundayServiceDesc: "ஞாயிறு தோறும் ஆராதனை மற்றும் ஜெபக் கூட்டங்களில் பங்கேற்க வாருங்கள்.",
      quickLinksTitle: "விரைவு இணைப்புகள்"
    },
    about: {
      title: "சபையைப் பற்றி",
      welcomeMsg: "நம்முடைய பிதாவாகிய தேவனாலும் கர்த்தராகிய இயேசுகிறிஸ்துவினாலும் உங்களுக்குக் கிருபையும் சமாதானமும் உண்டாவதாக.",
      description: "எழும்பூர் கிருபாசனம் கிறிஸ்துevin சபை தேவனுடைய தூய வார்த்தையைப் பிரசங்கிப்பதிலும், ஆவிக்குரிய வளர்ச்சியை ஆசீர்வதிப்பதிலும், அன்போடு ஊழியம் செய்வதிலும் அர்ப்பணிக்கப்பட்டுள்ளது.",
      missionTitle: "நமது விசுவாசம் & நோக்கம்",
      missionDesc: "புதிய ஏற்பாட்டின் படி ஆராதனை, ஐக்கியம் மற்றும் கிறிஸ்தவ வாழ்முறையைப் பின்பற்றி இயேசுவின் இரட்சிப்பை அறிவிக்கிறோம்."
    },
    branches: {
      title: "நமது கிளைகள்",
      subtitle: "சபை ஆராதனை நடைபெறும் இடங்கள் மற்றும் போக்குவரத்து விவரங்கள்.",
      addressLabel: "முகவரி",
      transitLabel: "பொது போக்குவரத்து",
      mtcLabel: "நகர்புற பேருந்து",
      suburbanLabel: "புறநகர் இரயில்",
      metroLabel: "மெட்ரோ வழித்தடம்",
      getDirections: "வழிசெலுத்தலைப் பெறுங்கள்",
      egmore: {
        id: "egmore",
        name: "எழும்பூர் கிளை",
        address: "107, பாந்தியன் சாலை, எழும்பூர், சென்னை, தமிழ்நாடு 600008",
        mtc: ["10A", "10E", "15C", "17D", "17E", "17K", "18G", "37E", "37ECT"],
        suburban: "எழும்பூர் இரயில் நிலையம்",
        metro: [
          { line: "நீல வழித்தடம் - ஆயிரம் விளக்கு", color: "#0000dd" },
          { line: "பச்சை வழித்தடம் - நேரு பார்க்", color: "#009600" },
          { line: "ஊதா வழித்தடம் - ஆயிரம் விளக்கு (2027)", color: "#7c00f8" }
        ],
        directionsUrl: "https://maps.app.goo.gl/hrA73TVBYQ5VbPLB7",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.2384931797671!2d80.25549470178771!3d13.06892853573137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266128d50d5ed%3A0x20a6776063867570!2sJeevan%20Jothi%20Building%20aka%20ICSA%20Centre!5e0!3m2!1sen!2sin!4v1719146268587!5m2!1sen!2sin"
      },
      manappakkam: {
        id: "manappakkam",
        name: "மணப்பாக்கம் கிளை",
        address: "2/513, அம்பேத்கர் நகர், மணப்பாக்கம், சென்னை, 600125",
        mtc: ["54B", "188C", "188ET"],
        suburban: "கிண்டி இரயில் நிலையம்",
        metro: [
          { line: "சிவப்பு வழித்தடம் - மணப்பாக்கம் (2026)", color: "#dd0000" }
        ],
        directionsUrl: "https://maps.app.goo.gl/yEZ46CxhjrXB1v1u8",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.322593714598!2d80.17837217460449!3d13.015117313923694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260ed6affffff%3A0xd3442d879d5f6742!2sIcsa%20Paripurna%20Training%20Centre!5e0!3m2!1sen!2sin!4v1719147777438!5m2!1sen!2sin"
      }
    },
    convention: {
      title: "ஆவிக்குரிய விசேஷித்த கூட்டங்கள் 2025",
      subtitle: "சிறப்பு நற்செய்தி மற்றும் ஆவிக்குரிய கூட்டங்கள்",
      year: "2025",
      getDirections: "வழிசெலுத்தலைப் பெறுங்கள்",
      detailedDirections: "கிளை வழித்தடங்களைக் காண்க",
      downloadSongSheet: "பாட்டுப் புத்தகம் பதிவிறக்கவும் (PDF)",
      downloadPoster: "சுவரொட்டி பார்க்க / பதிவிறக்கவும்",
      contactUs: "தொடர்புகொள்ள"
    },
    member: {
      title: "உறுப்பினர் பதிவு & Google Meet அணுகல்",
      headingTa: "நமது சபையின் Google Meet கூட்டங்களை காண, நமது சபையின் மின்னஞ்சல் பட்டியலில் உங்கள் மின்னஞ்சலை சேர இந்த Link-ஐ Click செய்யவும்",
      headingEn: "To view our church's Google Meet meetings, click this link to add your email to our church's email list.",
      taFormBtn: "தமிழிற்கு Click செய்யவும்",
      enFormBtn: "For English Click Here",
      description: "கூட்டங்களுக்கான Google Meet அழைப்புகளை மின்னஞ்சலில் பெறப் பதிவு செய்யுங்கள்."
    },
    contact: {
      title: "தொடர்பு கொள்ள",
      subtitle: "ஜெபக் கோரிக்கைகள் மற்றும் தகவல்களுக்கு எங்களைத் தொடர்பு கொள்ளவும்.",
      contactPerson: "சகோ. செல்வி",
      phoneLabel: "தொலைபேசி எண்",
      callNow: "அழைக்க",
      generalEnquiries: "ஜெபக் கோரிக்கைகள் மற்றும் சந்தேகங்களுக்கு எப்போதும் அழைக்கலாம்."
    },
    meetingModal: {
      title: "Google Meet-இல் இணையுங்கள்",
      description: "ஆன்லைன் சபை ஆராதனையில் Google Meet வழியாக உடனடியாக இணைய கீழே உள்ள பொத்தானைக் கிளிக் செய்யவும்.",
      joinBtn: "Google Meet திறக்க",
      copyBtn: "இணைப்பை நகலெடு",
      copied: "நகலெடுக்கப்பட்டது!",
      close: "மூடுக"
    }
  }
};

const getInitialLang = (): Language => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('kcce_lang') as Language;
    if (saved === 'ta' || saved === 'en') return saved;
  }
  return 'ta';
};

export const currentLang = writable<Language>(getInitialLang());

if (typeof window !== 'undefined') {
  currentLang.subscribe((lang) => {
    localStorage.setItem('kcce_lang', lang);
    document.documentElement.lang = lang;
    document.title = translations[lang].churchName;
  });
}
