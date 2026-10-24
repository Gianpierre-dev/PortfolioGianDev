'use client';

import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/personal';
import { etiquetaSocial } from '@/lib/a11y';
import { urlWhatsapp } from '@/lib/email';
import IconoWhatsapp from '@/components/ui/IconoWhatsapp';
import { useIdioma } from '@/i18n/LanguageProvider';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Footer() {
  const { t } = useIdioma();

  const enlaces = [
    { href: '#services', texto: t.footer.navegacion.servicios },
    { href: '#projects', texto: t.footer.navegacion.proyectos },
    { href: '#about', texto: t.footer.navegacion.about },
    { href: '#skills', texto: t.footer.navegacion.habilidades },
    { href: '#contact', texto: t.footer.navegacion.contacto },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white border-t border-transparent dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Profile Section */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-3 text-white">
              Gianpierre Terrazas
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {t.footer.descripcion}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                const esExterno = social.icon !== 'mail';
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={esExterno ? '_blank' : undefined}
                    rel={esExterno ? 'noopener noreferrer' : undefined}
                    aria-label={etiquetaSocial(social, t)}
                    className="w-11 h-11 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <nav className="md:col-span-1" aria-labelledby="footer-navegacion">
            <h2 id="footer-navegacion" className="text-lg font-semibold mb-4 text-white">
              {t.footer.navegacionTitulo}
            </h2>
            <ul className="space-y-2">
              {enlaces.map((enlace) => (
                <li key={enlace.href}>
                  <a href={enlace.href} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {enlace.texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold mb-4 text-white">{t.footer.contactoTitulo}</h2>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" aria-hidden="true" />
                {t.footer.ubicacion}
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" aria-hidden="true" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-400 transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <IconoWhatsapp className="w-4 h-4 mr-2 text-green-400" />
                <a
                  href={urlWhatsapp(t.whatsapp.mensajeGeneral)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.whatsapp.cta}: ${personalInfo.phone} (${t.a11y.nuevaPestana})`}
                  className="hover:text-green-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {personalInfo.name}. {t.footer.copyright}
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">{t.footer.disponible}</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
