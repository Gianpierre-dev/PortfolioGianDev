'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { personalInfo, socialLinks } from '@/data/personal';
import { isValidEmail } from '@/lib/utils';
import { sendContactMessage } from '@/lib/email';
import { ContactForm } from '@/types';
import { useIdioma } from '@/i18n/LanguageProvider';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Github,
  Linkedin,
  Clock,
  User,
  MessageSquare,
  Copy
} from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Contact() {
  const { t } = useIdioma();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [copyNotification, setCopyNotification] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  // Función para copiar email al portapapeles
  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopyNotification(t.contact.mensajes.copiado);
      setTimeout(() => setCopyNotification(''), 3000);
    } catch (error) {
      // Fallback: intentar abrir cliente de correo
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  // Función para manejar clic en teléfono
  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Intentar abrir WhatsApp primero, luego marcador
    const whatsappUrl = `https://wa.me/51961170946`;
    const phoneUrl = `tel:${personalInfo.phone}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank');
    
    // También intentar marcador como fallback
    setTimeout(() => {
      window.location.href = phoneUrl;
    }, 500);
  };

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Enviar mensaje por email (EmailJS) y WhatsApp
      const result = await sendContactMessage(data);
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(t.contact.mensajes.exito);
      } else {
        // Si falla el email, pero WhatsApp se abrió
        setSubmitStatus('success');
        setSubmitMessage(t.contact.mensajes.exitoSoloWhatsapp);
      }

      reset();
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(t.contact.mensajes.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.labels.email,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: t.contact.descripciones.email,
      onClick: handleEmailClick
    },
    {
      icon: Phone,
      label: t.contact.labels.telefono,
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: t.contact.descripciones.telefono,
      onClick: handlePhoneClick
    },
    {
      icon: MapPin,
      label: t.contact.labels.ubicacion,
      value: t.contact.valores.ubicacion,
      href: '#',
      description: t.contact.descripciones.ubicacion
    },
    {
      icon: Clock,
      label: t.contact.labels.horario,
      value: t.contact.valores.horario,
      href: '#',
      description: t.contact.descripciones.horario
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contact.titulo}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.contact.subtitulo}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contact.infoTitulo}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.contact.infoTexto}
              </p>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className={`
                    bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700 
                    transition-all duration-200
                    ${item.href !== '#' 
                      ? 'hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transform hover:scale-[1.02]' 
                      : 'hover:shadow-md'
                    }
                  `}
                  whileHover={item.href !== '#' ? { scale: 1.02, y: -2 } : {}}
                  whileTap={item.href !== '#' ? { scale: 0.98 } : {}}
                  onClick={item.onClick}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center
                      ${item.href !== '#' 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }
                    `}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                        {item.label}
                        {item.href !== '#' && (
                          <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full flex items-center">
                            {item.label === t.contact.labels.email ? <Copy className="w-3 h-3 mr-1" /> : <Phone className="w-3 h-3 mr-1" />}
                            {item.label === t.contact.labels.email ? t.contact.badgeCopiar : t.contact.badgeWhatsapp}
                          </span>
                        )}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {item.value}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Copy Notification */}
            {copyNotification && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 p-4 rounded-lg flex items-center shadow-lg border border-green-200 dark:border-green-700"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                {copyNotification}
              </motion.div>
            )}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {t.contact.redesTitulo}
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target={social.name !== 'Email' ? '_blank' : undefined}
                      rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contact.formTitulo}
              </h3>
            </motion.div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  {t.contact.form.nombre} *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', {
                    required: t.contact.validaciones.nombreRequerido,
                    minLength: { value: 2, message: t.contact.validaciones.nombreMin }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                  placeholder={t.contact.form.nombrePlaceholder}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name.message}
                  </p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  {t.contact.form.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: t.contact.validaciones.emailRequerido,
                    validate: (value) => isValidEmail(value) || t.contact.validaciones.emailInvalido
                  })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                  placeholder={t.contact.form.emailPlaceholder}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  {t.contact.form.asunto} *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', {
                    required: t.contact.validaciones.asuntoRequerido,
                    minLength: { value: 5, message: t.contact.validaciones.asuntoMin }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                  placeholder={t.contact.form.asuntoPlaceholder}
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.subject.message}
                  </p>
                )}
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  {t.contact.form.mensaje} *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', {
                    required: t.contact.validaciones.mensajeRequerido,
                    minLength: { value: 10, message: t.contact.validaciones.mensajeMin }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-colors"
                  placeholder={t.contact.form.mensajePlaceholder}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message.message}
                  </p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {t.contact.form.enviando}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t.contact.form.enviar}
                    </>
                  )}
                </Button>
              </motion.div>

              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
                      : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5 mr-2" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-2" />
                  )}
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 