import { useContext } from "react"
import { NoticiasContext } from "../context/NoticiasProvider"


export function useNoticias() {

     const {categoria,handleChangeCategoria, noticias,totalNoticias,pagina,handleChangePagina} = useContext(NoticiasContext)

    return({
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        pagina,
        handleChangePagina
    })
}