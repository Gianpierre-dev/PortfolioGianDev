'use client';

import { useState } from 'react';
import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import type { FieldError } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';
import { isValidEmail } from '@/lib/utils';
import { sendContactMessage, urlWhatsapp } from '@/lib/email';
import IconoWhatsapp from '@/components/ui/IconoWhatsapp';
import { ContactForm } from '@/types';
import { useIdioma } from '@/i18n/LanguageProvider';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  User,
  MessageSquare,
  Copy
} from 'lucide-react';

const CLASES_INPUT =
  'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors';

function clasesCampo(error: FieldError | undefined): string {
  return `${CLASES_INPUT} ${error ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'}`;
}

// Mensaje de error vinculado a su campo mediante aria-describedby.
function ErrorCampo({ id, error }: { id: string; error: FieldError | undefined }) {
  if (!error) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
      <AlertCircle className="w-4 h-4 mr-1 shrink-0" aria-hidden="true" />
      {error.message}
    </p>
  );
}

interface TarjetaContactoProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  description: string;
  badge?: { icon: ComponentType<{ className?: string }>; texto: string };
}

// Contenido común de las tarjetas; el contenedor (button, a o div) lo decide quien la usa.
// Solo usa <span>: dentro de un <button> únicamente se admite contenido de frase.
function ContenidoTarjeta({ icon: Icon, label, value, description, badge }: TarjetaContactoProps) {
  const interactiva = Boolean(badge);
  return (
    <span className="flex items-center space-x-4 text-left">
      <span
        className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center ${
          interactiva
            ? 'bg-blue-100 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
        }`}
      >
        <Icon className="w-5 h-5" aria-hidden="true" />
      </span>
      <span className="block flex-1 min-w-0">
        <span className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          {label}
          {badge && (
            <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full flex items-center">
              <badge.icon className="w-3 h-3 mr-1" aria-hidden="true" />
              {badge.texto}
            </span>
          )}
        </span>
        <span className="block text-gray-800 dark:text-gray-200 font-medium break-words">
          {value}
        </span>
        <span className="block text-sm text-gray-500 dark:text-gray-400">
          {description}
        </span>
      </span>
    </span>
  );
}

const CLASES_TARJETA =
  'flex items-center w-full h-full bg-gray-50 dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700 transition-all duration-200';
const CLASES_TARJETA_INTERACTIVA =
  'hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500';

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

  // Copia el email al portapapeles; si el navegador no lo permite, abre el cliente de correo.
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopyNotification(t.contact.mensajes.copiado);
      setTimeout(() => setCopyNotification(''), 3000);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await sendContactMessage(data);

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(t.contact.mensajes.exito);
        reset();
      } else {
        setSubmitStatus('error');
        setSubmitMessage(t.contact.mensajes.error);
      }
    } catch {
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

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
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
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.contact.infoTitulo}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.contact.infoTexto}
              </p>
            </motion.div>

            {/* Contact Methods: en desktop las tarjetas reparten el alto del formulario
                para que ambas columnas terminen a la misma altura. */}
            <ul className="space-y-4 lg:flex-1 lg:grid lg:auto-rows-fr lg:gap-4 lg:space-y-0">
              {/* WhatsApp primero: es el canal por el que escriben los clientes */}
              <motion.li variants={itemVariants}>
                <a
                  href={urlWhatsapp(t.whatsapp.mensajeGeneral)}
                  target="_blank"
                  rel="noopener noreferrer"
                  // El nombre accesible empieza por la etiqueta visible (WCAG 2.5.3).
                  aria-label={`${t.contact.labels.telefono}: ${personalInfo.phone}. ${t.a11y.whatsapp} (${t.a11y.nuevaPestana})`}
                  className={`${CLASES_TARJETA} ${CLASES_TARJETA_INTERACTIVA}`}
                >
                  <ContenidoTarjeta
                    icon={IconoWhatsapp}
                    label={t.contact.labels.telefono}
                    value={personalInfo.phone}
                    description={t.contact.descripciones.telefono}
                    badge={{ icon: IconoWhatsapp, texto: t.contact.badgeWhatsapp }}
                  />
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  type="button"
                  onClick={handleEmailClick}
                  className={`${CLASES_TARJETA} ${CLASES_TARJETA_INTERACTIVA}`}
                >
                  <ContenidoTarjeta
                    icon={Mail}
                    label={t.contact.labels.email}
                    value={personalInfo.email}
                    description={t.contact.descripciones.email}
                    badge={{ icon: Copy, texto: t.contact.badgeCopiar }}
                  />
                </button>
              </motion.li>
              <motion.li variants={itemVariants}>
                <div className={CLASES_TARJETA}>
                  <ContenidoTarjeta
                    icon={MapPin}
                    label={t.contact.labels.ubicacion}
                    value={t.contact.valores.ubicacion}
                    description={t.contact.descripciones.ubicacion}
                  />
                </div>
              </motion.li>
              <motion.li variants={itemVariants}>
                <div className={CLASES_TARJETA}>
                  <ContenidoTarjeta
                    icon={Clock}
                    label={t.contact.labels.horario}
                    value={t.contact.valores.horario}
                    description={t.contact.descripciones.horario}
                  />
                </div>
              </motion.li>
            </ul>

            {/* Copy Notification */}
            <div aria-live="polite">
              {copyNotification && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 p-4 rounded-lg flex items-center shadow-lg border border-green-200 dark:border-green-700"
                >
                  <CheckCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                  {copyNotification}
                </motion.div>
              )}
            </div>
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t.contact.formTitulo}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {t.contact.formAviso}
              </p>
            </motion.div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" aria-hidden="true" />
                  {t.contact.form.nombre} *
                </label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  {...register('name', {
                    required: t.contact.validaciones.nombreRequerido,
                    minLength: { value: 2, message: t.contact.validaciones.nombreMin }
                  })}
                  className={clasesCampo(errors.name)}
                  placeholder={t.contact.form.nombrePlaceholder}
                />
                <ErrorCampo id="name-error" error={errors.name} />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" aria-hidden="true" />
                  {t.contact.form.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  {...register('email', {
                    required: t.contact.validaciones.emailRequerido,
                    validate: (value) => isValidEmail(value) || t.contact.validaciones.emailInvalido
                  })}
                  className={clasesCampo(errors.email)}
                  placeholder={t.contact.form.emailPlaceholder}
                />
                <ErrorCampo id="email-error" error={errors.email} />
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" aria-hidden="true" />
                  {t.contact.form.asunto} *
                </label>
                <input
                  type="text"
                  id="subject"
                  aria-required="true"
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  {...register('subject', {
                    required: t.contact.validaciones.asuntoRequerido,
                    minLength: { value: 5, message: t.contact.validaciones.asuntoMin }
                  })}
                  className={clasesCampo(errors.subject)}
                  placeholder={t.contact.form.asuntoPlaceholder}
                />
                <ErrorCampo id="subject-error" error={errors.subject} />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" aria-hidden="true" />
                  {t.contact.form.mensaje} *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  {...register('message', {
                    required: t.contact.validaciones.mensajeRequerido,
                    minLength: { value: 10, message: t.contact.validaciones.mensajeMin }
                  })}
                  className={`${clasesCampo(errors.message)} resize-none`}
                  placeholder={t.contact.form.mensajePlaceholder}
                />
                <ErrorCampo id="message-error" error={errors.message} />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:ring-offset-gray-800"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" aria-hidden="true"></div>
                      {t.contact.form.enviando}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                      {t.contact.form.enviar}
                    </>
                  )}
                </Button>
              </motion.div>

              {/* Status Message */}
              <div aria-live="polite">
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-center ${
                      submitStatus === 'success'
                        ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
                        : 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 mr-2 shrink-0" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-2 shrink-0" aria-hidden="true" />
                    )}
                    {submitMessage}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
