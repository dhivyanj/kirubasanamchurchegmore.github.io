import { writable } from 'svelte/store';

export type Language = 'en' | 'ta';

export interface BranchInfo {
  id: string;
  name: string;
  address: string;
  mtc: string[];
  suburban: string;
  metro: { line: string; color: string }[];
  directionsUrl: string;
  directionsLabel: string;
  mapEmbedUrl: string;
}

export interface Translations {
  churchName: string;
  churchNameTa: string;
  login: string;
  nav: {
    home: string;
    convention: string;
    branches: string;
    contact: string;
    joinMeeting: string;
  };
  home: {
    updatesTitle: string;
  };
  convention: {
    title: string;
    getDirections: string;
    detailedDirections: string;
    downloadSongSheet: string;
    contactUs: string;
  };
  branches: {
    title: string;
    addressLabel: string;
    transitLabel: string;
    mtcLabel: string;
    suburbanLabel: string;
    metroLabel: string;
    egmore: BranchInfo;
    manappakkam: BranchInfo;
  };
  contact: {
    title: string;
    contactPerson: string;
    phone: string;
  };
  meetingModal: {
    title: string;
    joinBtn: string;
    copyBtn: string;
    copied: string;
    close: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    churchName: "Kirubasanam Church of Christ Egmore",
    churchNameTa: "கிருபாசனம் கிருஸ்துவின் சபை எழும்பூர்",
    login: "login",
    nav: {
      home: "Home",
      convention: "Conventions",
      branches: "Branches",
      contact: "Contact",
      joinMeeting: "Join Meeting"
    },
    home: {
      updatesTitle: "Updates"
    },
    convention: {
      title: "Aavikkurriya Viseshittha Kootangal 2026",
      getDirections: "Get Directions",
      detailedDirections: "Detailed Directions",
      downloadSongSheet: "Download Song Sheet",
      contactUs: "Contact Us"
    },
    branches: {
      title: "Branches",
      addressLabel: "Address",
      transitLabel: "Public Transit",
      mtcLabel: "MTC",
      suburbanLabel: "Suburban",
      metroLabel: "Metro",
      egmore: {
        id: "egmore",
        name: "Egmore",
        address: "107, Pantheon Rd, Egmore, Chennai, Tamil Nadu 600008",
        mtc: ["10A", "10E", "15C", "17D", "17E", "17K", "18G", "37E", "37ECT"],
        suburban: "Egmore Railway Station",
        metro: [
          { line: "Blue Line - Thousand Lights", color: "#0000dd" },
          { line: "Green Line - Nehru Park", color: "#009600" },
          { line: "Purple Line - Thousand Lights (2027)", color: "#7c00f8" }
        ],
        directionsUrl: "https://maps.app.goo.gl/hrA73TVBYQ5VbPLB7",
        directionsLabel: "Get Directions",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.2384931797671!2d80.25549470178771!3d13.06892853573137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266128d50d5ed%3A0x20a6776063867570!2sJeevan%20Jothi%20Building%20aka%20ICSA%20Centre!5e0!3m2!1sen!2sin!4v1719146268587!5m2!1sen!2sin"
      },
      manappakkam: {
        id: "manappakkam",
        name: "Manappakkam",
        address: "2/513, Ambedkar Nagar, Manapakkam, Chennai, 600125",
        mtc: ["54B", "188C", "188ET"],
        suburban: "Guindy Railway Station",
        metro: [
          { line: "Red Line - Manappakkam (2026)", color: "#dd0000" }
        ],
        directionsUrl: "https://maps.app.goo.gl/yEZ46CxhjrXB1v1u8",
        directionsLabel: "Get Directions",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.322593714598!2d80.17837217460449!3d13.015117313923694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260ed6affffff%3A0xd3442d879d5f6742!2sIcsa%20Paripurna%20Training%20Centre!5e0!3m2!1sen!2sin!4v1719147777438!5m2!1sen!2sin"
      }
    },
    contact: {
      title: "Contact",
      contactPerson: "Sis. Selvi",
      phone: "+919841099306"
    },
    meetingModal: {
      title: "Join Meeting",
      joinBtn: "Join Google Meet",
      copyBtn: "Copy Link",
      copied: "Copied!",
      close: "Close"
    }
  },
  ta: {
    churchName: "Kirubasanam Church of Christ Egmore",
    churchNameTa: "கிருபாசனம் கிருஸ்துவின் சபை எழும்பூர்",
    login: "உள்நுழை",
    nav: {
      home: "முகப்பு",
      convention: "கூட்டங்கள்",
      branches: "கிளைகள்",
      contact: "தொடர்பு",
      joinMeeting: "மீட்டிங்"
    },
    home: {
      updatesTitle: "முகப்பு"
    },
    convention: {
      title: "ஆவிக்குரிய விசேஷித்த கூட்டங்கள் 2026",
      getDirections: "வழிசெலுத்தலைப் பெறுங்கள்",
      detailedDirections: "விரிவான வழித்தடங்கள்",
      downloadSongSheet: "பாட்டுப் புத்தகம் பதிவிறக்கவும்",
      contactUs: "தொடர்புகொள்ள"
    },
    branches: {
      title: "கிளைகள்",
      addressLabel: "முகவரி",
      transitLabel: "பொது போக்குவரத்து",
      mtcLabel: "நகர்புற பேருந்து",
      suburbanLabel: "புறநகர் இரயில்",
      metroLabel: "மெட்ரோ",
      egmore: {
        id: "egmore",
        name: "எழும்பூர்",
        address: "107, பாந்தியன் சாலை, எழும்பூர், சென்னை, தமிழ்நாடு 600008",
        mtc: ["10A", "10E", "15C", "17D", "17E", "17K", "18G", "37E", "37ECT"],
        suburban: "எழும்பூர் இரயில் நிலையம்",
        metro: [
          { line: "நீல வழித்தடம் - ஆயிரம் விளக்கு", color: "#0000dd" },
          { line: "பச்சை வழித்தடம் - நேரு பார்க்", color: "#009600" },
          { line: "ஊதா வழித்தடம் - ஆயிரம் விளக்கு (2027)", color: "#7c00f8" }
        ],
        directionsUrl: "https://maps.app.goo.gl/hrA73TVBYQ5VbPLB7",
        directionsLabel: "வழிசெலுத்தலைப் பெறுங்கள்",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.2384931797671!2d80.25549470178771!3d13.06892853573137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266128d50d5ed%3A0x20a6776063867570!2sJeevan%20Jothi%20Building%20aka%20ICSA%20Centre!5e0!3m2!1sen!2sin!4v1719146268587!5m2!1sen!2sin"
      },
      manappakkam: {
        id: "manappakkam",
        name: "மணப்பாக்கம்",
        address: "2/513, அம்பேத்கர் நகர், மணப்பாக்கம், சென்னை, 600125",
        mtc: ["54B", "188C", "188ET"],
        suburban: "கிண்டி இரயில் நிலையம்",
        metro: [
          { line: "சிவப்பு வழித்தடம் - மணப்பாக்கம் (2026)", color: "#dd0000" }
        ],
        directionsUrl: "https://maps.app.goo.gl/yEZ46CxhjrXB1v1u8",
        directionsLabel: "வழிசெலுத்தலைப் பெறுங்கள்",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.322593714598!2d80.17837217460449!3d13.015117313923694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260ed6affffff%3A0xd3442d879d5f6742!2sIcsa%20Paripurna%20Training%20Centre!5e0!3m2!1sen!2sin!4v1719147777438!5m2!1sen!2sin"
      }
    },
    contact: {
      title: "தொடர்புக்கு",
      contactPerson: "சகோ. செல்வி",
      phone: "+919841099306"
    },
    meetingModal: {
      title: "மீட்டிங்",
      joinBtn: "Google Meet திறக்க",
      copyBtn: "நகலெடு",
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
  return 'en';
};

export const currentLang = writable<Language>(getInitialLang());

if (typeof window !== 'undefined') {
  currentLang.subscribe((lang) => {
    localStorage.setItem('kcce_lang', lang);
    document.documentElement.lang = lang;
  });
}
