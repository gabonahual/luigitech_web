import { Box, Button, Container, Typography } from '@mui/material';

export const LuigiTeachMovie = () => {
  return (
    <Box sx={{ backgroundColor: 'white', color: 'black', fontFamily: 'sans-serif' }}>
      {/* Banner con miniatura */}
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
        {/* Capa de gradiente */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, black, rgba(0,0,0,0.6), transparent)',
          }}
        />
      </Box>

      {/* Contenido */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        {/* Título */}
        <Typography variant="h3" fontWeight="bold" mb={2}>
          Titulo
        </Typography>

        {/* Descripción */}
        <Typography variant="body1" mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, quod, amet expedita quo veritatis dolorum ad aperiam est maiores, accusantium libero nemo quia minima quasi saepe blanditiis animi ut ea.
          Exercitationem quaerat voluptatum obcaecati tenetur soluta delectus laboriosam dolor laudantium voluptates asperiores qui distinctio deleniti, ullam dignissimos harum expedita nulla molestias dicta ea!
        </Typography>

        {/* Detalles */}
        <Box display="flex" alignItems="center" gap={4} fontSize="0.875rem" color="gray">
          <Box display="flex" alignItems="center" gap={1}>
            <span>⭐</span>
            <span>8.3</span>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <span>⏱</span>
            <span>1h 45min</span>
          </Box>
        </Box>

        {/* Botones */}
        <Box mt={4} display="flex" gap={2}>
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
      </Container>
    </Box>
  );
};
