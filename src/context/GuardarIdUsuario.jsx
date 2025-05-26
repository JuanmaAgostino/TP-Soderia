import {create} from 'zustand';

export const GuardarIdUsuario = create((set) => ({
    idUsuario: null,
    setIdUsuario: (id) => set({ idUsuario: id }),
}));