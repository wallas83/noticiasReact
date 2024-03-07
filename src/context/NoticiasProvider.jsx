import { createContext, useState } from "react"

// 1. se crea el context
export const NoticiasContext = createContext();
//2. se crea el provider
export function NoticiasProvider({ children }) {

    const [categoria, setCategoria] = useState('general')

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
    }
    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}