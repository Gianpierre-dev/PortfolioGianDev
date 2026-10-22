import { personalInfo } from '@/data/personal';
import type { Diccionario } from '@/i18n/types';
import type { SocialLink } from '@/types';

// Nombre accesible de un enlace social que solo muestra un ícono.
export function etiquetaSocial(social: SocialLink, t: Diccionario): string {
  if (social.icon === 'mail') return `${t.a11y.email}: ${personalInfo.email}`;
  return `${t.a11y[social.icon]} (${t.a11y.nuevaPestana})`;
}
