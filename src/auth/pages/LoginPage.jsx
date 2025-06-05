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
  Alert,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const backgroundImage = 'url("/fondo-principal.jpg")';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError('Por favor ingresa un correo válido');
      return;
    }

    if (!password.trim()) {
      setError('La contraseña no puede estar vacía');
      return;
    }

    setError('');
    Swal.fire({
      icon: 'success',
      title: 'Inicio de sesión correcto',
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(() => {
      navigate('/search');
    }, 2000);
  };

  const handleGoogleLogin = () => {
    Swal.fire({
      icon: 'warning',
      title: 'No nos pagan lo suficiente 🗣️',
      text: 'Espere la actualización',
      confirmButtonColor: '#c23b22',
    });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'warning',
      title: '¿Olvidaste tu contraseña?',
      text: 'No t e preocupes, no la tenemos guardada 😜',
      confirmButtonColor: '#c23b22',
    });
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

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Correo"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            required
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Contraseña"
            name="password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            required
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePassword}
                    edge="end"
                    size="small"
                    sx={{ color: '#c23b22' }}
                  >
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
          <Link href="/auth/register" underline="hover" sx={{ display: 'block', color: '#c23b22', mt: 1 }}>
            ¿Eres nuevo? Crear cuenta
          </Link>
          <Link href="#" onClick={handleForgotPassword} underline="hover" sx={{ display: 'block', color: '#c23b22', mt: 1 }}>
            ¿Olvidaste tu contraseña?
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};
