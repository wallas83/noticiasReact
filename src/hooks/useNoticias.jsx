import { useContext } from "react"
import { NoticiasContext } from "../context/NoticiasProvider"


export function useNoticias() {

     const {categoria,handleChangeCategoria} = useContext(NoticiasContext)

    return({
        categoria,
        handleChangeCategoria
    })
}