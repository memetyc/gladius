import React from 'react';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { GiRopeBridge, GiOilPump, GiCrane, GiMountainRoad, GiWindTurbine, GiLifeJacket } from 'react-icons/gi';
import { FaLeaf, FaVolumeMute, FaUserTie, FaProjectDiagram, FaCompass, FaShieldAlt, FaBolt, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { useInView } from '../hooks/useInView';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import SectionHead from '../components/SectionHead';

const Home = () => {
  const [servicesRef, servicesInView] = useInView();
  const [advantagesRef, advantagesInView] = useInView();
  const [teamRef, teamInView] = useInView();

  const heroSlides = [
    {
      title: "Endüstriyel Çözümler ve",
      titleHighlight: "Profesyonel Hizmetler",
      description: "İple erişim, kaynak, rüzgar türbini tamiri ve daha fazlası için güvenilir çözüm ortağınız. 15 yılı aşkın tecrübemizle yanınızdayız.",
      bgImage: "/hero-bg.jpg"
    },
    {
      title: "Rüzgar Türbini",
      titleHighlight: "Bakım ve Onarım",
      description: "Rüzgar türbinlerinin periyodik bakımı, kanat tamiri ve yıldırımdan korunma sistemleri için uzman ekibimizle hizmetinizdeyiz.",
      bgImage: "/wind-turbine.webp"
    },
    {
      title: "İple Erişim ile",
      titleHighlight: "Güvenli Çözümler",
      description: "Yüksek yapılarda güvenli erişim sağlayarak, endüstriyel temizlik, boya ve bakım işlemlerini profesyonel ekibimizle gerçekleştiriyoruz.",
      bgImage: "/wind-turbine.webp"
    },
    {
      title: "Endüstriyel",
      titleHighlight: "Yaşam Hatları",
      description: "Endüstriyel tesisler için kalıcı ve geçici yaşam hattı kurulumu, periyodik kontrol ve sertifikasyon hizmetleri sunuyoruz.",
      bgImage: "/wind-turbine.webp"
    }
  ];

  const services = [
    {
      title: "İple Erişim",
      icon: <GiRopeBridge className="w-12 h-12" />,
      description: "Yüksek yapılarda güvenli erişim ve bakım hizmetleri sunuyoruz.",
      subServices: [
        "Endüstriyel Temizlik",
        "Boya ve Kaplama",
        "Yapısal Kontrol",
        "Bakım Onarım"
      ],
      image: "/services/rope-access.jpg"
    },
    {
      title: "Petrol & Enerji",
      icon: <GiOilPump className="w-12 h-12" />,
      description: "Enerji sektörü için özel çözümler ve bakım hizmetleri sağlıyoruz.",
      subServices: [
        "Tank Bakımı",
        "Boru Hattı Kontrol",
        "Rafineri Bakım",
        "Platform Servisleri"
      ],
      image: "/services/welding.jpg"
    },
    {
      title: "Yüksekte Çalışma",
      icon: <GiCrane className="w-12 h-12" />,
      description: "Profesyonel yüksekte çalışma ve güvenlik sistemleri kurulumu.",
      subServices: [
        "İskele Kurulum",
        "Güvenlik Sistemleri",
        "Eğitim ve Danışmanlık",
        "Risk Değerlendirme"
      ],
      image: "/services/high-work.jpg"
    },
    {
      title: "Şev Stabilizasyonu",
      icon: <GiMountainRoad className="w-12 h-12" />,
      description: "Zemin ve yapı güçlendirme çözümleri sunuyoruz.",
      subServices: [
        "Şev Düzenleme",
        "Zemin Ankrajı",
        "Kaya Düşmesi Önleme",
        "Toprak İyileştirme"
      ],
      image: "/services/slope.jpg"
    },
    {
      title: "Rüzgar Türbini",
      icon: <GiWindTurbine className="w-12 h-12" />,
      description: "Rüzgar türbinleri için kapsamlı bakım ve onarım hizmetleri.",
      subServices: [
        "Kanat Bakımı",
        "Periyodik Kontrol",
        "Yıldırım Koruması",
        "Kompozit Tamir"
      ],
      image: "/services/wind-turbine.jpg"
    },
    {
      title: "Yaşam Hattı",
      icon: <GiLifeJacket className="w-12 h-12" />,
      description: "Endüstriyel tesisler için yaşam hattı çözümleri ve kurulum.",
      subServices: [
        "Sistem Kurulumu",
        "Periyodik Kontrol",
        "Sertifikasyon",
        "Kullanıcı Eğitimi"
      ],
      image: "/services/lifeline.jpg"
    }
  ];

  const advantages = [
    {
      title: "Engelsiz Çevre Yaratırız",
      description: "Trafiği ve kaldırımları işgal eden büyük ekipman olmadan, sorunlarınıza kesintisiz çözümler sunuyoruz. Kamu izinleriyle ilgili sıkıntıları ortadan kaldırıyoruz.",
      icon: <BiWorld className="w-8 h-8 text-primary" />
    },
    {
      title: "Daha Çevreciyiz",
      description: "Karbon ayak izimizi minimize etmek adına daha az iş makinesi kullanıyoruz. Çevreci ürünleri tercih ediyor ve ekolojik çözümler sunuyoruz.",
      icon: <FaLeaf className="w-8 h-8 text-primary" />
    },
    {
      title: "Sessiz Çalışırız",
      description: "Geleneksel alternatiflere göre daha sessiz bir çalışma ortamı sunarız. Gürültü kirliliğini ortadan kaldırarak konforlu çözümler sağlıyoruz.",
      icon: <FaVolumeMute className="w-8 h-8 text-primary" />
    },
    {
      title: "Profesyoneliz",
      description: "300'den fazla projede başarıyla yer almış, Türkiye'nin en büyük 10 projesinin altında imzası bulunan ekibimizle hizmet veriyoruz.",
      icon: <FaUserTie className="w-8 h-8 text-primary" />
    },
    {
      title: "Proje Yönetimini Yaparız",
      description: "Anahtar teslim çözümlerimizle projenizin tüm aşamalarını titizlikle yönetiyor ve başarıyla hayata geçiriyoruz.",
      icon: <FaProjectDiagram className="w-8 h-8 text-primary" />
    },
    {
      title: "Her Noktaya Ulaşırız (360°)",
      description: "Kapalı ya da açık alanlarda, zorlu coğrafyalar dahi endüstriyel dağcılık prensiplerimizle sınırları ortadan kaldırıyoruz.",
      icon: <FaCompass className="w-8 h-8 text-primary" />
    },
    {
      title: "Güvenlik Önceliğimizdir",
      description: "Uzmanlarımız, uluslararası standartlara uygun çift emniyet istasyonunu kullanarak can güvenliğini ve iş güvenliğini sağlar.",
      icon: <FaShieldAlt className="w-8 h-8 text-primary" />
    },
    {
      title: "Hızlıyız",
      description: "Endüstriyel dağcılık yöntemimizle süreçleri dakikalar içinde tamamlar, aynı anda birden fazla noktada uygulama yaparak zaman kazandırırız.",
      icon: <FaBolt className="w-8 h-8 text-primary" />
    }
  ];

  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      position: "Genel Müdür",
      image: "/team/member1.jpg",
      expertise: "15+ Yıl Deneyim",
      description: "Endüstriyel dağcılık ve yüksekte çalışma konusunda uluslararası sertifikalara sahip uzman.",
      certifications: ["IRATA Level 3", "GWO", "SPRAT"],
      social: {
        linkedin: "https://linkedin.com",
        email: "mailto:ahmet@gladius.com"
      }
    },
    {
      name: "Mehmet Demir",
      position: "Teknik Müdür",
      image: "/team/member2.jpg",
      expertise: "12+ Yıl Deneyim",
      description: "Rüzgar türbini bakımı ve yaşam hattı sistemleri konusunda uzman mühendis.",
      certifications: ["IRATA Level 3", "GWO BST", "TWIF"],
      social: {
        linkedin: "https://linkedin.com",
        email: "mailto:mehmet@gladius.com"
      }
    },
    {
      name: "Ayşe Kaya",
      position: "Proje Müdürü",
      image: "/team/member3.jpg",
      expertise: "10+ Yıl Deneyim",
      description: "Endüstriyel projelerde uzmanlaşmış, PMP sertifikalı proje yöneticisi.",
      certifications: ["PMP", "IRATA Level 2", "ISO 45001"],
      social: {
        linkedin: "https://linkedin.com",
        email: "mailto:ayse@gladius.com"
      }
    },
    {
      name: "Can Yıldız",
      position: "İSG Uzmanı",
      image: "/team/member4.jpg",
      expertise: "8+ Yıl Deneyim",
      description: "A Sınıfı İSG Uzmanı, yüksekte çalışma ve endüstriyel güvenlik danışmanı.",
      certifications: ["A Sınıfı İSG", "NEBOSH", "ISO 14001"],
      social: {
        linkedin: "https://linkedin.com",
        email: "mailto:can@gladius.com"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-base-300">

      
      {/* Hero Section with Swiper */}
      <div className="relative h-screen">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          speed={1000}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + ' bg-primary!"></span>';
            },

          }}
       
          loop={true}
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index} className="cursor-auto">
              <div className="relative h-full">
                {/* Slide Background */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                     style={{ backgroundImage: `url(${slide.bgImage})` }}>
                  <div className="absolute inset-0 bg-base-300/60 backdrop-blur-sm"></div>
                </div>
                
                {/* Slide Content */}
                <div className="relative h-full flex items-center z-20">
                  <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                      <h1 className="text-5xl md:text-6xl font-bold text-base-content mb-6 opacity-0 animate-fade-slide-up">
                        {slide.title}{" "}
                        <span className="text-primary">{slide.titleHighlight}</span>
                      </h1>
                      <p className="text-xl text-base-content/80 mb-8 opacity-0 animate-fade-slide-up [animation-delay:200ms]">
                        {slide.description}
                      </p>
                      <div className="flex flex-wrap gap-4 opacity-0 animate-fade-slide-up [animation-delay:400ms]">
                        <button className="btn btn-primary btn-lg">
                          Hizmetlerimiz
                        </button>
                        <button className="btn btn-ghost btn-lg text-base-content border-2 border-base-content hover:bg-base-content hover:text-base-300">
                          İletişime Geçin
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Services Section */}
      <section ref={servicesRef} className="py-20">
        <div className="container mx-auto px-4">
        <SectionHead view={servicesInView} title="Hizmetlerimiz" subtitle="Avantajlarımız" description="Yüksek vasıflı ve deneyimli ekibimizle en zorlu projelerde bile güvenilir çözümler sunuyoruz" />
          



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 duration-300 opacity-0 ${
                  servicesInView ? 'animate-fade-slide-up' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-primary">{service.icon}</span>
                    <h3 className="card-title text-base-content">{service.title}</h3>
                  </div>
                  <p className="text-base-content/70 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.subServices.map((subService, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm text-base-content/80">{subService}</span>
                      </div>
                    ))}
                  </div>
                  <div className="card-actions justify-end mt-6">
                    <button className="btn btn-primary btn-sm">Detaylı Bilgi</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={advantagesRef} className="py-20 bg-base-200 relative">
        <div className="container mx-auto px-4">
        <SectionHead view={advantagesInView} title="Neden Bizi Tercih Etmelisiniz?" subtitle="Bu işi biliyoruz" description="Yüksek vasıflı ve deneyimli ekibimizle en zorlu projelerde bile güvenilir çözümler sunuyoruz" />
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className={`bg-base-100 p-8 rounded-2xl hover:shadow-xl transition-all group opacity-0 ${
                  advantagesInView ? 'animate-fade-slide-up' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                <p className="text-base-content/70">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20">
        <div className="container mx-auto px-4">
          <SectionHead view={teamInView} title="Uzman Kadromuz" subtitle="Profesyonel Ekip" description="Yüksek vasıflı ve deneyimli ekibimizle en zorlu projelerde bile güvenilir çözümler sunuyoruz" />


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`group opacity-0 ${teamInView ? 'animate-fade-slide-up' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Container */}
                <div className="bg-base-100 h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-base-300 to-transparent z-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Social Links */}
                    <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                      <a 
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-primary/90 hover:bg-primary text-base-100 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn className="w-4 h-4" />
                      </a>
                      <a 
                        href={member.social.email}
                        className="w-8 h-8 bg-primary/90 hover:bg-primary text-base-100 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
                      >
                        <FaEnvelope className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-base-content">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.position}</p>
                    <p className="text-base-content/70 text-sm mb-4">{member.description}</p>
                    
                    {/* Certifications */}
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, idx) => (
                        <span 
                          key={idx}
                          className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            
    </div>
  );
};

export default Home;