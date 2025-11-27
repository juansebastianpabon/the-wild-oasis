// components/AuthSync.jsx
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import supabase from '../../services/supabase'; //
export function AuthSync() {
  const queryClient = useQueryClient();

  useEffect(() => {
    // Esta función se ejecuta cada vez que Supabase detecta cualquier cambio en la sesión
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Evento Supabase:', event); // ← puedes borrarlo después

        // Actualiza el caché de React Query inmediatamente
        queryClient.setQueryData(['user'], session?.user ?? null);
      }
    );

    // Verificación inicial por si la página se carga sin sesión pero el caché aún tiene usuario viejo
    const initSession = async () => {
      const { data } = await supabase.auth.getSession();
      queryClient.setQueryData(['user'], data.session?.user ?? null);
    };
    initSession();

    // Cleanup
    return () => {
      listener.subscription.unsubscribe();
    };
  }, [queryClient]);

  return null; // este componente no renderiza nada
}
