# Product

<!-- impeccable:product-schema 1 -->

> Registro escrito sin entrevista: el usuario pidió avanzar sin preguntas. Los hechos
> marcados como *(inferido)* salen del repositorio o de la sesión, no de una confirmación
> explícita; corregirlos cuando corresponda.

## Platform

web

## Users

- **Principal: clientes potenciales en Perú.** Dueños de pymes, estudios contables y áreas de administración o RRHH de empresas peruanas que necesitan sistemas de planillas, RRHH, automatización de procesos SUNAT, gestión para estudios contables o una web/tienda online. Confirmado: el sitio es para clientes, no para reclutadores.
- **Cómo llegan:** principalmente por un enlace compartido (WhatsApp, LinkedIn) o recomendación, y evalúan desde el celular *(inferido)*. Leen en español; existe versión en inglés.
- **Secundario: reclutadores.** Ven el CV (PDF en español e inglés); el sitio no debe dejarles una mala impresión, pero no se optimiza para ellos.

## Product Purpose

Portfolio y sitio de servicios de Gianpierre Terrazas Tello, desarrollador full stack freelance. Existe para que un cliente potencial entienda qué problema le resuelve, vea prueba de que ya lo resolvió en sistemas reales y lo contacte. Éxito: el visitante escribe por WhatsApp (canal principal) o envía el formulario de contacto por correo.

## Positioning

Construye sistemas de gestión a medida para la realidad peruana —planillas bajo los regímenes laborales del Perú, RRHH multiempresa, automatización del portal SUNAT, cronogramas tributarios para estudios contables— y ya los tiene en producción. Se encarga del ciclo completo (requerimientos, arquitectura, desarrollo con pruebas automatizadas, despliegue y soporte) y el cliente trata directo con quien programa *(trato directo: inferido)*.

## Operating Context

- El primer contacto es por WhatsApp; los enlaces abren el chat con un mensaje pre-escrito. El formulario envía correo con Resend.
- Compromisos confirmados por el usuario y publicables: responde el mismo día hábil; la primera conversación para entender el proyecto no tiene costo; trabaja con acuerdo de confidencialidad sobre los datos del cliente (planillas, datos tributarios).
- Los sistemas para empresas son privados: se presentan como casos sin código ni capturas reales.
- Términos locales que el sitio usa y explica en inglés: SUNAT, planilla, RUC/DNI, régimen laboral, boletas, Yape/Plin.

## Capabilities and Constraints

- Servicios ofrecidos: sistemas de planillas y RRHH a medida; automatización de procesos SUNAT; sistemas de gestión para estudios contables; sitios web y tiendas online.
- Stack de trabajo: TypeScript de punta a punta (NestJS, Prisma, PostgreSQL, Next.js), además de Java/Spring Boot y Python; despliegue en Railway, almacenamiento S3/Wasabi.
- El sitio: Next.js 15, bilingüe ES/EN, tema claro/oscuro, desplegado en Railway (`portfolio-gian-production.up.railway.app`).
- **Sin decidir:** dominio propio y email con dominio propio (hoy Railway y hotmail).

## Brand Commitments

- Nombre: Gianpierre Terrazas Tello; marca corta `gt_`.
- Voz: español neutro con tuteo (sin voseo ni modismos argentinos), directa y profesional; el inglés acompaña con el mismo tono.
- WhatsApp es el canal de contacto principal.

## Evidence on Hand

- Proyectos con sitio público y captura (`public/images/proyectos/`): Valentino Benites (tienda online, código público), Human Touch Books (sitio editorial con panel propio, código público), Tlacuache's Store, Mr. Sif.
- Sistemas privados en producción o desarrollo: Sistema de Planillas Multiempresa (370+ tests), SIGEMYPE para estudios contables (120+ tests), Sistema de RRHH Multiempresa.
- Proyectos propios con código público: Automatización SUNAT, TeachGenius, Tonin.
- Cifras confirmadas: 3+ años de experiencia, 25+ proyectos.
- Experiencia laboral real: STI GOLD (Tech Lead), JJMM, SipnasisCode, GALDIAZ, Mr. Sif, Ingecem Perú.
- Foto profesional del autor (`public/images/profile.webp`); CV en ES/EN (`public/documents/`, fuente en `cv/`).
- **Ausentes, no fabricar:** testimonios, logos de clientes, métricas de negocio de los sistemas (existen en los sistemas pero no se publican), capturas de los sistemas privados.

## Product Principles

1. Primero el problema del cliente, después la tecnología: el stack respalda, no encabeza.
2. Solo prueba real: proyectos en producción, enlaces vivos y datos confirmados; nada inventado.
3. Contactar tiene que costar un toque, sobre todo desde el celular.
4. Un portfolio de quien vende sistemas confiables tiene que serlo él mismo: rápido, accesible y sin errores.

## Accessibility & Inclusion

WCAG 2.1 AA como mínimo *(inferido; es el estándar que el sitio ya aplica)*: contraste, nombres accesibles en enlaces de solo ícono, foco visible, `prefers-reduced-motion` respetado y formulario con errores asociados a sus campos.
