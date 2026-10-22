'use client';

import { useEffect, type ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import Lenis from 'lenis';

const CONSULTA_MOVIMIENTO_REDUCIDO = '(prefers-reduced-motion: reduce)';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const consulta = window.matchMedia(CONSULTA_MOVIMIENTO_REDUCIDO);
    let lenis: Lenis | null = null;
    let frameId = 0;

    const raf = (time: number) => {
      lenis?.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    const iniciar = () => {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      frameId = requestAnimationFrame(raf);
    };

    const detener = () => {
      cancelAnimationFrame(frameId);
      lenis?.destroy();
      lenis = null;
    };

    // Con "reducir movimiento" activo no se monta el scroll suavizado; si el
    // usuario cambia la preferencia en caliente, se activa o desactiva.
    const sincronizar = () => {
      if (consulta.matches) {
        detener();
      } else if (!lenis) {
        iniciar();
      }
    };

    sincronizar();
    consulta.addEventListener('change', sincronizar);

    return () => {
      consulta.removeEventListener('change', sincronizar);
      detener();
    };
  }, []);

  // reducedMotion="user": Framer Motion desactiva las animaciones de transform
  // y layout cuando el sistema operativo pide reducir movimiento.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
