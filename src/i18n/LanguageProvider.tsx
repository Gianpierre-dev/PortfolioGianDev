'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Diccionario, Idioma } from './types';
import { es } from './es';
import { en } from './en';

const diccionarios: Record<Idioma, Diccionario> = { es, en };

const CLAVE_STORAGE = 'idioma';

interface LanguageContextValue {
  idioma: Idioma;
  t: Diccionario;
  cambiarIdioma: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Se inicializa siempre en 'es' para evitar hydration mismatch; el valor
  // guardado en localStorage se aplica en el efecto tras el montaje.
  const [idioma, setIdioma] = useState<Idioma>('es');

  useEffect(() => {
    const guardado = window.localStorage.getItem(CLAVE_STORAGE);
    if (guardado === 'es' || guardado === 'en') {
      setIdioma(guardado);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = idioma;
  }, [idioma]);

  const cambiarIdioma = useCallback(() => {
    setIdioma((actual) => {
      const siguiente: Idioma = actual === 'es' ? 'en' : 'es';
      window.localStorage.setItem(CLAVE_STORAGE, siguiente);
      return siguiente;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ idioma, t: diccionarios[idioma], cambiarIdioma }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useIdioma(): LanguageContextValue {
  const contexto = useContext(LanguageContext);
  if (!contexto) {
    throw new Error('useIdioma debe usarse dentro de un LanguageProvider');
  }
  return contexto;
}
