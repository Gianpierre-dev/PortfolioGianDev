import { ContactForm } from '@/types';

// Número de WhatsApp con código de país (Perú +51), sin "+" ni espacios.
const WHATSAPP_NUMERO = '51961170946';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}`;

interface ResultadoEnvio {
  success: boolean;
}

// Abre WhatsApp con el mensaje del formulario ya redactado (MÉTODO PRINCIPAL).
export const sendWhatsApp = (formData: ContactForm): ResultadoEnvio => {
  const message = `*Nuevo mensaje desde el portfolio*

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Asunto:* ${formData.subject}

*Mensaje:*
${formData.message}

---
_Enviado desde el formulario de contacto del portfolio_`;

  const whatsappURL = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

  // window.open devuelve null si el navegador bloqueó la ventana emergente.
  // No se pasa 'noopener' como feature porque con él window.open siempre devuelve
  // null y no se podría detectar el bloqueo; se corta el opener a mano.
  const ventana = window.open(whatsappURL, '_blank');
  if (!ventana) {
    // Ventana bloqueada (Safari iOS, bloqueadores): se navega en la misma pestaña
    // para que el mensaje no se pierda.
    window.location.href = whatsappURL;
    return { success: true };
  }

  ventana.opener = null;
  return { success: true };
};

// Función principal de contacto: hoy el único canal es WhatsApp.
export const sendContactMessage = async (formData: ContactForm): Promise<ResultadoEnvio> => {
  return sendWhatsApp(formData);
};
