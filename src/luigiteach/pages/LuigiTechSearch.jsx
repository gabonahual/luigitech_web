import { useState } from 'react';
import { usePeliculas } from '../../hooks';
import {
  Box,
  Button,
  Grid,
  TextField,
  Paper,
  Typography,
} from '@mui/material';

const generos = ['Aventuras', 'Romance', 'Adultos', 'Drama', 'Comedia', 'Terror'];

export const LuigiTechSearch = () => {
  const { buscarPorTitulo } = usePeliculas();
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleChange = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    setResultados(buscarPorTitulo(valor));
  };

  const handleGeneroClick = (genero) => {
    setBusqueda(genero);
    setResultados(buscarPorTitulo(genero));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("/fondo-principal.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        padding: 4,
      }}
    >
      {/* IZQUIERDA: buscador + botones */}
      <Box
        sx={{
          width: '280px',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          mr: 4,
        }}
      >
        <TextField
          label="Buscar por título o género"
          variant="outlined"
          value={busqueda}
          onChange={handleChange}
          sx={{
            backgroundColor: '#fff',
            '& .MuiOutlinedInput-root': {
              height: '64px',
              fontSize: '1.1rem',
            },
            '& .MuiInputLabel-root': {
              backgroundColor: '#ffffff',
              px: 0.5,
            },
          }}
        />

        <Grid container spacing={2}>
          {generos.map((genero, index) => (
            <Grid item xs={6} key={index}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleGeneroClick(genero)}
                sx={{
                  backgroundColor: '#C1282C',
                  height: '56px',
                  fontSize: '0.95rem',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#a41e23' },
                }}
              >
                {genero}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* DERECHA: resultados en mosaico */}
      <Grid container spacing={3} sx={{ flex: 1 }} alignContent="flex-start">
        {resultados.map((peli, idx) => (
          <Grid
            item
            key={idx}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: 180,
                height: 200,
                textAlign: 'center',
                border: '2px solid #C1282C',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
                boxSizing: 'border-box',
              }}
            >
              <Box sx={{ fontSize: 40 }}>🎬</Box>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#C1282C',
                  fontWeight: 'bold',
                  mt: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}
              >
                {peli.titulo}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
