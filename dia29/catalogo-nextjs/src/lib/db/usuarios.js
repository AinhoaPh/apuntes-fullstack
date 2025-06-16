// src/services/getUsuarios.js
export const getUsuarios = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/usuarios`);
      const data = await res.json();
      return data.data;
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      return [];
    }
  };