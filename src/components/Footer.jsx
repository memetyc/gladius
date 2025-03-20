import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-base-content mb-4">Gladius</h3>
            <p className="text-base-content/70 mb-6">
              Endüstriyel alanda güvenilir ve profesyonel çözümler sunan lider kuruluş.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center text-base-content hover:bg-primary hover:text-primary-content transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center text-base-content hover:bg-primary hover:text-primary-content transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center text-base-content hover:bg-primary hover:text-primary-content transition-colors">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center text-base-content hover:bg-primary hover:text-primary-content transition-colors">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-base-content mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/hakkimizda" className="text-base-content/70 hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-base-content/70 hover:text-primary transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/projeler" className="text-base-content/70 hover:text-primary transition-colors">
                  Projeler
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-base-content/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-base-content/70 hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-base-content mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/hizmetler/yuksekte-calisma" className="text-base-content/70 hover:text-primary transition-colors">
                  Yüksekte Çalışma
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/ruzgar-turbini" className="text-base-content/70 hover:text-primary transition-colors">
                  Rüzgar Türbini
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/yasam-hatti" className="text-base-content/70 hover:text-primary transition-colors">
                  Yaşam Hattı
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/endüstriyel-denetim" className="text-base-content/70 hover:text-primary transition-colors">
                  Endüstriyel Denetim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-base-content mb-4">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" size={20} />
                <span className="text-base-content/70">
                  Merkez Ofis, İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" size={18} />
                <a href="tel:+902121234567" className="text-base-content/70 hover:text-primary transition-colors">
                  +90 (212) 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" size={18} />
                <a href="mailto:info@gladius.com" className="text-base-content/70 hover:text-primary transition-colors">
                  info@gladius.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base-content/70 text-center md:text-left">
              © {currentYear} Gladius. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6">
              <Link to="/gizlilik-politikasi" className="text-base-content/70 hover:text-primary transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/kullanim-sartlari" className="text-base-content/70 hover:text-primary transition-colors">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 