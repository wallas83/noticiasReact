import { Container, Grid, Typography } from '@mui/material'
import { Formulario } from './components/formulario'
import { NoticiasProvider } from './context/NoticiasProvider'
import { ListadoNoticias } from './components/ListadoNoticias'

function App() {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' component='h1' variant='h3' marginY={5} >
            Buscador de Noticias
          </Typography>
        </header>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={12} md={6} lg={4}>

            <Formulario />
          </Grid>
        </Grid>
      <ListadoNoticias/>
      </Container>
    </NoticiasProvider>
  )
}

export default App
