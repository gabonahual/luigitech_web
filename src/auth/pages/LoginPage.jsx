import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Paper,
  Link,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const backgroundImage = 'url("/fondo-principal.jpg")';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de envío
  };

  const handleGoogleLogin = () => {
    alert("Simulación: redirigiendo a Google Login...");
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 6,
          borderRadius: 3,
          width: 460,
          textAlign: 'center',
          backgroundColor: 'white',
        }}
      >

        <Typography variant="h5" gutterBottom color="#333">
          Iniciar Sesión
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Correo"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            required
            size="small"
            sx={{ borderRadius: 2 }}
          />
          <TextField
            label="Contraseña"
            name="password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            required
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end" size="small" sx={{ color: '#c23b22' }}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 1,
              bgcolor: '#c23b22',
              color: 'white',
              '&:hover': { bgcolor: '#a02f1d' },
              borderRadius: 2,
              py: 1,
            }}
          >
            Iniciar Sesión
          </Button>
        </form>

        <Button
          onClick={handleGoogleLogin}
          fullWidth
          variant="outlined"
          sx={{
            mt: 2,
            borderRadius: 2,
            py: 1,
            color: '#333',
            borderColor: '#dcdcdc',
            '&:hover': { backgroundColor: '#f0f0f0' },
          }}
        >
          Iniciar sesión con Google
        </Button>

        <Box mt={2} sx={{ fontSize: 14 }}>
          <Link href="/registro" underline="hover" sx={{ display: 'block', color: '#c23b22', mt: 1 }}>
            ¿Eres nuevo? Crear cuenta
          </Link>
          <Link href="/recuperar_contraseña" underline="hover" sx={{ display: 'block', color: '#c23b22', mt: 1 }}>
            ¿Olvidaste tu contraseña?
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};
