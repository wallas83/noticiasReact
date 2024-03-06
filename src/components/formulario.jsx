import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';

const CATEGORIAS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
]
export function Formulario() {

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoria</InputLabel>
                <Select
                    label='Categoria'
                >
                    {
                        CATEGORIAS.map((categoria, index) => (
                            <MenuItem key={index} value={categoria.value}>{categoria.label}</MenuItem>
                        ))
                    }
                </Select>
                <Box sx={{marginTop:4}}>
                <Button
                fullWidth
                variant='contained'
                color='primary'
                >Buscar Noticias</Button>
                </Box>
               
            </FormControl>
        </form>
    )
}