import { Container, Grid, Typography } from '@mui/material'
import { Formulario } from './components/formulario'

function App() {
  return (
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
          <Formulario/>
        </Grid>
      </Grid>

    </Container>
  )
}

export default App
