import axios from "axios";
import { createContext, useEffect, useState } from "react"

// 1. se crea el context
export const NoticiasContext = createContext();
//2. se crea el provider
export function NoticiasProvider({ children }) {

    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los datos')
            }
            return response.json();
        }).then(dato => {
            setNoticias(dato.articles);
            setTotalNoticias(dato.totalResults);
            setPagina(1)
        })
            .catch(error => {
                console.log('error', error)
            })

        // const consultarAPI = async () => {

        //     const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;


        //     const {data} = await axios.get(url);
        //     console.log(data);
        // }
        // consultarAPI()
    }, [categoria])
    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&page=${pagina}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los datos')
            }
            return response.json();
        }).then(dato => {
            setNoticias(dato.articles);
            setTotalNoticias(dato.totalResults);
        })
            .catch(error => {
                console.log('error', error)
            })

  
    }, [pagina])

    const handleChangePagina = (e,valor)=> {
        setPagina(valor)
    }
    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                pagina,
                handleChangePagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}