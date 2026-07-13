import { ContactForm } from '@/types';

// Función para abrir WhatsApp con mensaje predefinido (MÉTODO PRINCIPAL)
export const sendWhatsApp = (formData: ContactForm) => {
  const phoneNumber = '51961170946'; // Tu número con código país (Perú +51)
  
  const message = `*Nuevo mensaje desde el portfolio*

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Asunto:* ${formData.subject}

*Mensaje:*
${formData.message}

---
_Enviado desde el formulario de contacto del portfolio_`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  console.log('📱 Abriendo WhatsApp...');
  // Abrir WhatsApp en nueva pestaña
  window.open(whatsappURL, '_blank');
  
  return { success: true, message: 'Mensaje enviado por WhatsApp 📱' };
};

// Función principal de contacto (SIMPLIFICADA)
export const sendContactMessage = async (formData: ContactForm) => {
  console.log('🚀 Enviando mensaje de contacto por WhatsApp...');
  
  // Enviar directamente por WhatsApp
  const result = sendWhatsApp(formData);
  
  return {
    success: true,
    message: '¡Mensaje enviado por WhatsApp! 📱 Te responderé pronto.'
  };
};

// ===============================
// BACKUP: Email via API (para futuro si lo necesitas)
// ===============================

// Función para enviar email via API route (BACKUP - para futuro)
export const sendEmailViaAPI = async (formData: ContactForm) => {
  try {
    console.log('📧 Enviando email via API route...');
    
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log('✅ Email enviado correctamente via API');
      return { success: true, message: 'Email enviado correctamente' };
    } else {
      console.error('❌ Error en API de email:', result.error);
      return { success: false, message: result.error || 'Error enviando email' };
    }
  } catch (error) {
    console.error('❌ Error conectando con API de email:', error);
    return { success: false, message: 'Error de conexión con el servidor' };
  }
};

// Función combinada WhatsApp + Email (para cuando configures email)
export const sendContactMessageWithEmail = async (formData: ContactForm) => {
  console.log('🚀 Enviando mensaje por WhatsApp + Email...');
  
  // 1. Intentar enviar por email
  const emailResult = await sendEmailViaAPI(formData);
  
  // 2. Enviar por WhatsApp
  setTimeout(() => {
    sendWhatsApp(formData);
  }, 1000);
  
  // 3. Resultado
  if (emailResult.success) {
    return { 
      success: true, 
      message: '¡Mensaje enviado por email y WhatsApp! 📧📱' 
    };
  } else {
    return { 
      success: true, 
      message: 'Mensaje enviado por WhatsApp 📱 (Email en configuración)' 
    };
  }
}; 