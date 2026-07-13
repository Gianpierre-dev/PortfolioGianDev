import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Configuración del transporter de email
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'hotmail', // Para Hotmail/Outlook
    auth: {
      user: process.env.EMAIL_USER, // Tu email
      pass: process.env.EMAIL_PASS, // Tu contraseña de aplicación
    },
  });
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validar datos
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    if (
      typeof name !== 'string' || typeof email !== 'string' ||
      typeof subject !== 'string' || typeof message !== 'string' ||
      name.length > MAX_FIELD_LENGTH || email.length > MAX_FIELD_LENGTH ||
      subject.length > MAX_FIELD_LENGTH || message.length > MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json(
        { success: false, error: 'Datos inválidos o demasiado largos' },
        { status: 400 }
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { success: false, error: 'El email no tiene un formato válido' },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // Crear transporter
    const transporter = createTransporter();

    // Configurar el email
    const mailOptions = {
      from: process.env.EMAIL_USER, // Tu email
      to: 'pier_terrazas@hotmail.com', // Email destino  
      replyTo: email, // Email del contacto
      subject: `Portfolio - ${subject.replace(/[\r\n]/g, ' ')}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            📧 Nuevo mensaje desde tu Portfolio
          </h2>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
            <p><strong>👤 Nombre:</strong> ${safeName}</p>
            <p><strong>📧 Email:</strong> ${safeEmail}</p>
            <p><strong>📝 Asunto:</strong> ${safeSubject}</p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; border-left: 4px solid #007bff;">
            <h3 style="color: #333; margin-top: 0;">💬 Mensaje:</h3>
            <p style="line-height: 1.6; color: #555;">${safeMessage}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #6c757d; font-size: 14px;">
              📨 Enviado desde el formulario de contacto del portfolio
            </p>
            <p style="margin: 5px 0 0 0; color: #6c757d; font-size: 12px;">
              Para responder, simplemente haz reply a este email
            </p>
          </div>
        </div>
      `,
      text: `
🔥 Nuevo mensaje desde tu Portfolio

👤 Nombre: ${name}
📧 Email: ${email}
📝 Asunto: ${subject}

💬 Mensaje:
${message}

---
📨 Enviado desde el formulario de contacto del portfolio
      `.trim()
    };

    // Enviar email
    console.log('📧 Enviando email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado:', result.messageId);

    return NextResponse.json({
      success: true,
      message: 'Email enviado correctamente',
      messageId: result.messageId
    });

  } catch (error) {
    console.error('Error enviando email:', error);

    const err = error as { code?: string; message?: string };
    let errorMessage = 'Error interno del servidor';
    if (err.code === 'EAUTH') {
      errorMessage = 'Error de autenticación. Verifica las credenciales.';
    } else if (err.code === 'ECONNECTION') {
      errorMessage = 'Error de conexión SMTP';
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      },
      { status: 500 }
    );
  }
} 