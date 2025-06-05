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

  const imagenes = [
    'https://picsum.photos/300/400?random=1',
    'https://picsum.photos/300/400?random=2',
    'https://picsum.photos/300/400?random=3',
    'https://picsum.photos/300/400?random=4',
    'https://picsum.photos/300/400?random=5',
    'https://picsum.photos/300/400?random=6',
  ];

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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: '90%',
          height: '95vh',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: 4,
          boxShadow: 3,
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Título principal */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 3,
            fontWeight: 'bold',
            color: '#C1282C',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
          }}
        >
          🎬 Buscador de Películas LuigiTech
        </Typography>

        {/* Buscador */}
        <TextField
          label="Buscar por título o género"
          variant="outlined"
          value={busqueda}
          onChange={handleChange}
          fullWidth
          sx={{
            backgroundColor: '#fff',
            mb: 3,
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

        {/* Botones de géneros */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            mb: 4,
            justifyContent: 'center',
          }}
        >
          {generos.map((genero, index) => (
            <Button
              key={index}
              variant="contained"
              onClick={() => handleGeneroClick(genero)}
              sx={{
                backgroundColor: '#C1282C',
                height: '56px',
                fontSize: '0.95rem',
                fontWeight: 'bold',
                px: 3,
                '&:hover': { backgroundColor: '#a41e23' },
              }}
            >
              {genero}
            </Button>
          ))}
        </Box>

        {/* Resultados */}
        <Box sx={{ flex: 1, overflowY: 'visible' }}>
          <Grid
            container
            spacing={3}
            columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            justifyContent="center"
          >
            {resultados.map((peli, idx) => (
              <Grid
                item
                key={idx}
                xs={12}
                sm={6}
                md={4}
                lg={2.4}
                sx={{ display: 'flex', justifyContent: 'center', overflow: 'visible' }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    width: '100%',
                    maxWidth: 260,
                    height: 380,
                    border: '3px solid #C1282C',
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundImage: `url(${imagenes[idx % imagenes.length]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
                    },
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  <Box sx={{ px: 2, color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.9)' }}>
                    <Box
                      sx={{
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        borderRadius: 1,
                        mb: 1,
                        px: 1,
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 'bold',
                          textDecoration: 'underline',
                        }}
                      >
                        {peli.titulo}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        borderRadius: 1,
                        mb: 1,
                        px: 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontStyle: 'italic',
                          fontSize: '1rem',
                          lineHeight: 1.4,
                          textDecoration: 'underline',
                        }}
                      >
                        {peli.descripcion}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        borderRadius: 1,
                        mb: 1,
                        px: 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, textDecoration: 'underline' }}
                      >
                        🎬 {peli.director}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        borderRadius: 1,
                        px: 1,
                      }}
                    >
                      <Typography variant="body1" sx={{ textDecoration: 'underline' }}>
                        📅 {peli.anio} &nbsp;&nbsp; ⏱ {peli.duracion} min
                      </Typography>
                    </Box>
                  </Box>
                </Paper>

              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
