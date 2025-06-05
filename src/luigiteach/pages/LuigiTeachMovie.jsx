import { useEffect, useState } from 'react';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const LuigiTeachMovie = () => {
  const [pelicula, setPelicula] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const peli = localStorage.getItem('pelicula_seleccionada');
    if (peli) setPelicula(JSON.parse(peli));
  }, []);

  if (!pelicula) return <Typography variant="h6" p={4}>Cargando información de la película...</Typography>;

  return (
    <Box sx={{ backgroundColor: '#f7f7f7', color: 'black', fontFamily: 'sans-serif' }}>
      {/* Banner con miniatura fija */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '40vh',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="https://img.freepik.com/vector-gratis/composicion-elementos-cine-sobre-fondo-rojo_1419-2239.jpg?semt=ais_hybrid&w=740"
          alt="Miniatura contenido"
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, black, rgba(0,0,0,0.6), transparent)',
          }}
        />
      </Box>

      {/* Contenido principal con layout horizontal */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            p: 4,
            borderRadius: 3,
            backgroundColor: '#fff',
            alignItems: 'flex-start',
          }}
        >
          {/* Columna izquierda: texto original */}
          <Box flex={1} minWidth={300}>
            <Typography variant="h3" fontWeight="bold" mb={2} textAlign="center">
              {pelicula.titulo}
            </Typography>

            <Typography variant="body1" mb={3} textAlign="center">
              {pelicula.descripcion}
            </Typography>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              gap={4}
              fontSize="1rem"
              color="#555"
              mt={2}
              mb={4}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <span role="img" aria-label="Director">🎬</span>
                <Typography>{pelicula.director}</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <span role="img" aria-label="Año">📅</span>
                <Typography>{pelicula.anio}</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <span role="img" aria-label="Duración">⏱</span>
                <Typography>{pelicula.duracion} min</Typography>
              </Box>
            </Box>

            <Box mt={4} display="flex" gap={2} justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#dc2626',
                  '&:hover': { backgroundColor: '#b91c1c' },
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
              >
                ▶ Ver ahora
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#333' },
                  px: 3,
                  py: 1.5,
                  textTransform: 'none',
                }}
              >
                Más info
              </Button>
            </Box>

            <Box mt={4} display="flex" justifyContent="center">
              <Button
                onClick={() => navigate(-1)}
                sx={{
                  color: '#dc2626',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                  border: '1px solid #dc2626',
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#ffecec',
                  },
                }}
              >
                ⬅ Volver
              </Button>
            </Box>
          </Box>

          {/* Columna derecha: imagen aleatoria */}
          <Box
            flexShrink={0}
            width={300}
            height={300}
            borderRadius={2}
            overflow="hidden"
            boxShadow={3}
          >
            <Box
              component="img"
              src={`https://picsum.photos/seed/${pelicula.titulo}/300/300`}
              alt="Imagen aleatoria"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
