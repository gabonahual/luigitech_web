import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { es } from 'date-fns/locale';

const memberships = [
  {
    value: 'economica',
    title: 'Suscripción Económica',
    price: '$99',
    features: [
      'Acceso limitado al catálogo',
      'Contenido con anuncios',
      'Calidad estándar',
      '1 dispositivo',
    ],
  },
  {
    value: 'premium',
    title: 'Suscripción Premium',
    price: '$149',
    features: [
      'Acceso completo al catálogo',
      'Sin anuncios',
      'Full HD o 4K',
      'Hasta 4 dispositivos',
      'Descargas offline',
    ],
  },
];

export const RegisterPage = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    nombres: '',
    email: '',
    edad: '',
    membresia: '',
    tarjeta: '',
    cvv: '',
    expira: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 0) {
      if (!formData.nombres.trim()) newErrors.nombres = 'Campo requerido';
      if (!formData.email.trim()) {
        newErrors.email = 'Campo requerido';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Correo inválido';
      }
      if (!formData.edad || parseInt(formData.edad) <= 0) newErrors.edad = 'Edad válida requerida';
    }

    if (step === 1 && !formData.membresia) {
      newErrors.membresia = 'Selecciona una membresía';
    }

    if (step === 2) {
      if (!formData.tarjeta.trim()) newErrors.tarjeta = 'Campo requerido';
      if (!formData.cvv.trim()) newErrors.cvv = 'Campo requerido';
      if (!formData.expira) newErrors.expira = 'Selecciona fecha';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step === 2) {
        alert('Formulario enviado');
      } else {
        setStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleCardSelect = (value) => {
    setFormData((prev) => ({ ...prev, membresia: value }));
    setErrors((prev) => ({ ...prev, membresia: '' }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'url("/fondo-principal.jpg") center center / cover no-repeat fixed',
          backgroundColor: '#f5f1e8',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 3,
            width: step === 1 ? 600 : 400,
            transition: 'width 0.3s ease',
            bgcolor: 'white',
          }}
        >
          {step === 0 && (
            <>
              <Typography variant="h5" color="#b03a27" mb={2}>
                Datos Personales
              </Typography>
              <TextField
                fullWidth
                label="Nombres"
                value={formData.nombres}
                onChange={handleChange('nombres')}
                margin="normal"
                required
                error={!!errors.nombres}
                helperText={errors.nombres}
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                margin="normal"
                required
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                fullWidth
                label="Edad"
                type="number"
                value={formData.edad}
                onChange={handleChange('edad')}
                margin="normal"
                required
                error={!!errors.edad}
                helperText={errors.edad}
              />
            </>
          )}

          {step === 1 && (
            <>
              <Typography variant="h5" color="#b03a27" mb={2}>
                Selecciona una Membresía
              </Typography>
              {errors.membresia && (
                <Typography color="error" fontSize={14} mb={1}>
                  {errors.membresia}
                </Typography>
              )}
              <Grid container spacing={2} sx={{ overflowX: 'auto', flexWrap: 'nowrap' }}>
                {memberships.map((m) => (
                  <Grid item key={m.value} sx={{ minWidth: 250, flexShrink: 0, display: 'flex' }}>
                    <Box
                      onClick={() => handleCardSelect(m.value)}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: `2px solid ${
                          formData.membresia === m.value ? '#b03a27' : '#ccc'
                        }`,
                        borderRadius: 2,
                        p: 2,
                        bgcolor: formData.membresia === m.value ? '#fff4f1' : '#f5f1e8',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        height: '100%',
                        '&:hover': {
                          boxShadow: 2,
                          borderColor: '#b03a27',
                        },
                      }}
                    >
                      <Box>
                        <Typography fontWeight="bold">{m.title}</Typography>
                        <Typography color="#b03a27" fontSize="1.2em" fontWeight="bold" mt={1}>
                          {m.price}
                        </Typography>
                        <ul style={{ paddingLeft: '1em', marginTop: 8, marginBottom: 0 }}>
                          {m.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          {step === 2 && (
            <>
              <Typography variant="h5" color="#b03a27" mb={2}>
                Datos Bancarios
              </Typography>
              <TextField
                fullWidth
                label="Número de tarjeta"
                value={formData.tarjeta}
                onChange={handleChange('tarjeta')}
                margin="normal"
                required
                error={!!errors.tarjeta}
                helperText={errors.tarjeta}
              />
              <TextField
                fullWidth
                label="CVV"
                value={formData.cvv}
                onChange={handleChange('cvv')}
                margin="normal"
                required
                error={!!errors.cvv}
                helperText={errors.cvv}
              />
              <DatePicker
                views={['year', 'month']}
                label="Fecha de expiración"
                minDate={new Date()}
                value={formData.expira}
                onChange={(newValue) => {
                  setFormData((prev) => ({ ...prev, expira: newValue }));
                  setErrors((prev) => ({ ...prev, expira: '' }));
                }}
                format="MM/yy"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    margin="normal"
                    required
                    error={!!errors.expira}
                    helperText={errors.expira}
                  />
                )}
              />
            </>
          )}

          <Box mt={4} display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              onClick={handleBack}
              disabled={step === 0}
              sx={{
                backgroundColor: step === 0 ? '#ccc' : '#b03a27',
                '&:hover': {
                  backgroundColor: step === 0 ? '#ccc' : '#932c1d',
                },
              }}
            >
              Anterior
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                backgroundColor: '#b03a27',
                '&:hover': {
                  backgroundColor: '#932c1d',
                },
              }}
            >
              {step === 2 ? 'Enviar' : 'Siguiente'}
            </Button>
          </Box>
        </Paper>
      </Box>
    </LocalizationProvider>
  );
};
