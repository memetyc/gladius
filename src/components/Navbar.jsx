import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { GiRopeBridge, GiOilPump, GiCrane, GiMountainRoad, GiWindTurbine, GiLifeJacket } from 'react-icons/gi';
import { FaWind, FaMountain, FaShieldAlt, FaIndustry, FaAmbulance } from 'react-icons/fa';
import SunMoonIcon from './SunMoon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [mobileEducationOpen, setMobileEducationOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const educationRef = useRef(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {

    const closeDropdowns = () => {
      setIsDropdownOpen(false);
      setIsEducationOpen(false);
    }


    const handleClickOutside = (event) => {
      if (isDropdownOpen || isEducationOpen || isMenuOpen) {
        console.log('Click outside detected:', event.target);

        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
        }
        if (educationRef.current && !educationRef.current.contains(event.target)) {
          setIsEducationOpen(false);
        }
        if (isMenuOpen &&
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          !buttonRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', closeDropdowns);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', closeDropdowns);
    };
  }, [isMenuOpen, isDropdownOpen, isEducationOpen]);

  const services = [
    {
      title: "İple Erişim",
      icon: <GiRopeBridge className="w-8 h-8" />,
      description: "Yüksek yapılarda güvenli erişim çözümleri",
      subServices: [
        "Endüstriyel Temizlik",
        "Boya ve Kaplama",
        "Yapısal Kontrol",
        "Bakım Onarım"
      ],
      link: "/iple-erisim"
    },
    {
      title: "Petrol & Enerji",
      icon: <GiOilPump className="w-8 h-8" />,
      description: "Enerji sektörü için özel çözümler",
      subServices: [
        "Tank Bakımı",
        "Boru Hattı Kontrol",
        "Rafineri Bakım",
        "Platform Servisleri"
      ],
      link: "/petrol-enerji"
    },
    {
      title: "Yüksekte Çalışma",
      icon: <GiCrane className="w-8 h-8" />,
      description: "Profesyonel yüksekte çalışma hizmetleri",
      subServices: [
        "İskele Kurulum",
        "Güvenlik Sistemleri",
        "Eğitim ve Danışmanlık",
        "Risk Değerlendirme"
      ],
      link: "/yuksekte-calisma"
    },
    {
      title: "Şev Stabilizasyonu",
      icon: <GiMountainRoad className="w-8 h-8" />,
      description: "Zemin ve yapı güçlendirme çözümleri",
      subServices: [
        "Şev Düzenleme",
        "Zemin Ankrajı",
        "Kaya Düşmesi Önleme",
        "Toprak İyileştirme"
      ],
      link: "/sev-stabilizasyonu"
    },
    {
      title: "Rüzgar Türbini",
      icon: <GiWindTurbine className="w-8 h-8" />,
      description: "Rüzgar türbinleri bakım ve onarım hizmetleri",
      subServices: [
        "Kanat Bakımı",
        "Periyodik Kontrol",
        "Yıldırım Koruması",
        "Kompozit Tamir"
      ],
      link: "/ruzgar-turbini"
    },
    {
      title: "Yaşam Hattı",
      icon: <GiLifeJacket className="w-8 h-8" />,
      description: "Endüstriyel tesisler için yaşam hattı çözümleri",
      subServices: [
        "Sistem Kurulumu",
        "Periyodik Kontrol",
        "Sertifikasyon",
        "Kullanıcı Eğitimi"
      ],
      link: "/yasam-hatti"
    }
  ];

  const education = [
    {
      title: "Rüzgar Türbini",
      icon: <FaWind className="w-8 h-8 text-primary" />,
      description: "Rüzgar türbini operasyonları için özel eğitimler",
      subServices: [
        { name: "GWO BST Temel Güvenlik Eğitimi", link: "/egitimler/gwo-bst" },
        { name: "GWO BTT Temel Teknik Eğitimi", link: "/egitimler/gwo-btt" },
        { name: "GWO ART İleri Kurtarma Eğitimi", link: "/egitimler/gwo-art" },
        { name: "GWO SLS Sapancı-İşaretçi Eğitimi", link: "/egitimler/gwo-sls" },
        { name: "GWO WLA Türbine Kısıtlı Giriş Eğitimi", link: "/egitimler/gwo-wla" },
        { name: "Haca Muayene Eğitimi", link: "/egitimler/haca-muayene" }
      ],
      link: "/gwo"
    },
    {
      title: "İple Erişim",
      icon: <FaMountain className="w-8 h-8 text-primary" />,
      description: "Profesyonel iple erişim eğitimleri",
      subServices: [
        { name: "IRATA / Endüstriyel Dağcılık", link: "/egitimler/irata" },
        { name: "SPRAT / Endüstriyel Dağcılık", link: "/egitimler/sprat" }
      ],
      link: "/iple-erisim"
    },
    {
      title: "İş Güvenliği",
      icon: <FaShieldAlt className="w-8 h-8 text-primary" />,
      description: "Kapsamlı iş güvenliği eğitimleri",
      subServices: [
        { name: "Yüksekte Çalışma ve Kurtarma", link: "/egitimler/yuksekte-calisma" },
        { name: "Kapalı ve Kısıtlı Alan", link: "/egitimler/kisitli-alan" },
        { name: "KKD Muayene", link: "/egitimler/kkd-muayene" },
        { name: "Güvenlik Ağı", link: "/egitimler/guvenlik-agi" },
        { name: "Yaşam Hattı", link: "/egitimler/yasam-hatti" },
        { name: "İş Sağlığı ve Güvenliği", link: "/egitimler/isg" }
      ],
      link: "/is-guvenligi"
    },
    {
      title: "Sektörel Eğitimler",
      icon: <FaIndustry className="w-8 h-8 text-primary" />,
      description: "Endüstriyel alanda özel eğitimler",
      subServices: [
        { name: "EKED / LOTO", link: "/egitimler/eked-loto" },
        { name: "Sapancı - İşaretçi", link: "/egitimler/sapanci-isaretci" },
        { name: "İskele", link: "/egitimler/iskele" },
        { name: "Elektrik Bilinçlendirme", link: "/egitimler/elektrik" },
        { name: "Ergonomi Eğitimleri", link: "/egitimler/ergonomi" }
      ],
      link: "/sektor-egitimleri"
    },
    {
      title: "Acil Durum Müdahale",
      icon: <FaAmbulance className="w-8 h-8 text-primary" />,
      description: "Acil durum müdahale eğitimleri",
      subServices: [
        { name: "Arama Kurtarma & Tahliye", link: "/egitimler/arama-kurtarma" },
        { name: "İlk Yardım (TC.Sağlık Bakanlığı)", link: "/egitimler/ilk-yardim" },
        { name: "Yangın", link: "/egitimler/yangin" },
        { name: "Teleferik Kurtarma", link: "/egitimler/teleferik-kurtarma" },
        { name: "Endüstriyel Kurtarma", link: "/egitimler/endustriyel-kurtarma" }
      ],
      link: "/acil-durum-muhadele"
    }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className={`duration-300 backdrop-blur-md ${(isMenuOpen || isDropdownOpen || isEducationOpen) ? 'bg-base-100' : 'bg-base-300/50'}`}>
          <div className="container mx-auto">
            <div className="navbar relative">
              <div className="flex-1">
                <Link to="/" className="text-2xl ps-2 font-bold text-base-content">
                  GLADIUS
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex">
                <ul className="flex items-center gap-8 text-base-content">
                  <li className='group'>
                    <Link to="/" className="hover:text-primary transition-colors">
                      Ana Sayfa
                    </Link>
                    <span className='w-0 group-hover:w-full h-0.5 bg-primary block transition-all duration-300'></span>
                  </li>

                  {/* Custom Dropdown */}
                  <li ref={dropdownRef} className='group/parent'>
                    <button
                      onClick={() => {
                        setIsDropdownOpen(!isDropdownOpen);
                        setIsEducationOpen(false);
                      }}
                      className="flex cursor-pointer items-center gap-1 hover:text-primary transition-colors"
                    >
                      <span>Hizmetler</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <span className='w-0 group-hover/parent:w-full h-0.5 bg-primary block transition-all duration-300'></span>
                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0  w-full bg-base-100 border-t-primary border-t-2 rounded-b-xl shadow-xl transform transition-all duration-200 origin-top 
                        ${isDropdownOpen
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                    >
                      <div className="p-6 grid grid-cols-3 gap-6">
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            to={`/hizmetler${service.link}`}
                            className="group cursor-pointer"
                          >
                            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-base-200 transition-colors">
                              <span className="text-primary">{service.icon}</span>
                              <div >
                                <h3 className="font-semibold text-base-content group-hover:text-primary transition-colors">
                                  {service.title}
                                </h3>
                                <p className="text-sm text-base-content/70 mt-1">
                                  {service.description}
                                </p>
                                <ul className="mt-2 space-y-1">
                                  {service.subServices.map((subService) => (
                                    <li
                                      key={subService}
                                      className="text-sm  text-base-content/70 hover:text-primary transition-colors"
                                    >
                                      • {subService}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>

                  {/* Education Dropdown */}
                  <li ref={educationRef} className='group/parent'>
                    <button
                      onClick={() => {
                        setIsEducationOpen(!isEducationOpen);
                        setIsDropdownOpen(false);
                      }}
                      className="flex cursor-pointer items-center gap-1 hover:text-primary transition-colors"
                    >
                      <span>Eğitimler</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isEducationOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <span className='w-0 group-hover/parent:w-full h-0.5 bg-primary block transition-all duration-300'></span>
                    {/* Education Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0  w-full bg-base-100 border-t-primary border-t-2 rounded-b-xl shadow-xl transform transition-all duration-200 origin-top 
                        ${isEducationOpen
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                    >
                      <div className="p-6 grid grid-cols-3 justify-center h-full gap-6">
                        {education.map((edu) => (
                          <Link to={`/egitimler${edu.link}`} key={edu.title} className="group cursor-pointer block h-full">
                            <div className="flex items-start h-full gap-4 p-4 rounded-lg hover:bg-base-200 transition-colors">
                              <span className="text-2xl">{edu.icon}</span>
                              <div>
                                <h3 className="font-semibold text-base-content group-hover:text-primary transition-colors">
                                  {edu.title}
                                </h3>
                                <p className="text-sm text-base-content/70 mt-1">
                                  {edu.description}
                                </p>
                                <ul className="mt-2 space-y-1">
                                  {edu.subServices.map((sub) => (
                                    <li
                                      key={sub.name}
                                      className="text-sm text-base-content/70 hover:text-primary transition-colors"
                                    >
                                      • {sub.name}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>

                  <li className='group'>
                    <Link to="/projeler" className="hover:text-primary transition-colors">
                      Projeler
                    </Link>
                    <span className='w-0 group-hover:w-full h-0.5 bg-primary block transition-all duration-300'></span>
                  </li>
                  <li className='group'>
                    <Link to="/hakkimizda" className="hover:text-primary transition-colors">
                      Hakkımızda
                    </Link>
                    <span className='w-0 group-hover:w-full h-0.5 bg-primary block transition-all duration-300'></span>
                  </li>

                  <li className='group'>
                    <Link to="/iletisim" className="hover:text-primary transition-colors">
                      İletişim
                    </Link>
                    <span className='w-0 group-hover:w-full h-0.5 bg-primary block transition-all duration-300'></span>
                  </li>

                </ul>
              </div>


              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  ref={buttonRef}
                  className="p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`bg-current block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${isMenuOpen ?
                        'rotate-45 translate-y-1' : '-translate-y-0.5'
                      }`} />
                    <span className={`bg-current block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ?
                        'opacity-0' : 'opacity-100'
                      }`} />
                    <span className={`bg-current block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${isMenuOpen ?
                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                      }`} />
                  </div>
                </button>

              </div>
              <div className='md:ms-5 ms-2 h-6 w-6'>
                <SunMoonIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Full Screen */}
        <div
          ref={menuRef}
          className={`lg:hidden fixed inset-0 top-[64px] bg-base-100 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
            }`}
        >
          <div className="h-[calc(100vh-64px)] overflow-y-auto">
            <div className="container mx-auto ">
              <ul className="space-y-4 pb-8">
                <li>
                  <Link
                    to="/"
                    className="block p-4 text-lg font-medium hover:bg-base-200 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ana Sayfa
                  </Link>
                </li>

                {/* Mobile Services Accordion */}
                <li className="overflow-hidden">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full p-4 text-lg font-medium hover:bg-base-200 rounded-lg transition-colors flex justify-between items-center"
                  >
                    <span>Hizmetler</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={`transition-all duration-300 ease-in-out space-y-4 mt-2 ${mobileServicesOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    {services.map((service) => (
                      <div key={service.title} className="bg-base-200/50 rounded-xl p-4 mx-4">
                        <Link to={`/hizmetler${service.link}`}>
                          <div
                            to={`/hizmetler${service.link}`}
                            className="flex items-center gap-3 mb-2"
                          >
                            <span className="text-primary">{service.icon}</span>
                            <h3 className="text-lg font-semibold">{service.title}</h3>
                          </div>
                          <p className="text-base text-base-content/70">
                            {service.description}
                          </p>
                          <ul className="mt-3 ml-6 space-y-2">
                            {service.subServices.map((subService) => (
                              <li
                                key={subService}
                                className="text-base text-base-content/70 hover:text-primary transition-colors"
                              >
                                • {subService}
                              </li>
                            ))}
                          </ul>
                        </Link>
                      </div>
                    ))}
                  </div>
                </li>

                {/* Mobile Education Accordion */}
                <li className="overflow-hidden">
                  <button
                    onClick={() => setMobileEducationOpen(!mobileEducationOpen)}
                    className="w-full p-4 text-lg font-medium hover:bg-base-200 rounded-lg transition-colors flex justify-between items-center"
                  >
                    <span>Eğitimler</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${mobileEducationOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={`transition-all duration-300 ease-in-out space-y-4 mt-2 ${mobileEducationOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    {education.map((edu) => (
                      <div key={edu.title} className="bg-base-200/50 rounded-xl p-4 mx-4">
                        <div className="flex items-center gap-3 mb-2">
                          {edu.icon}
                          <h3 className="text-lg font-semibold">{edu.title}</h3>
                        </div>
                        <p className="text-base text-base-content/70">
                          {edu.description}
                        </p>
                        <ul className="mt-3 ml-6 space-y-2">
                          {edu.subServices.map((sub) => (
                            <li
                              key={sub.name}
                              className="text-base text-base-content/70 hover:text-primary transition-colors"
                            >
                              • {sub.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </li>

                <li>
                  <Link
                    to="/projeler"
                    className="block p-4 text-lg font-medium hover:bg-base-200 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projeler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hakkimizda"
                    className="block p-4 text-lg font-medium hover:bg-base-200 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link
                    to="/iletisim"
                    className="block p-4 text-lg font-medium hover:bg-base-200 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for background when menu is open */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;