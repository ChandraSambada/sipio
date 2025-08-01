import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import logoPuskemasPamulang from '../assets/images/footer/logoPuskesmasPamulang.png';
import LogoTangSel from '../assets/images/footer/LogoTangSel.png';
import LogoKemenkes from '../assets/images/footer/LogoKemenkes.png';

function Footer() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    fetch('https://visitor-counter-backend-production.up.railway.app/track', {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => {
        setVisitorCount(data.count);
      })
      .catch(err => {
        console.error('Failed to fetch visitor count:', err);
      });
  }, []);
  

  return (
    <Box sx={{ backgroundColor: 'rgba(34, 72, 112, 1)', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
          
          {/* Logo Kiri */}
          <Grid item xs={12} sm={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ backgroundColor: '#fff', width: 179, height: 78, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={logoPuskemasPamulang} height="80" alt="Logo Puskesmas" />
            </Box>
          </Grid>

          {/* Alamat */}
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>Alamat</Typography>
            <Typography sx={{ color: '#fff', fontSize: 16, fontWeight: 300, lineHeight: 1.4 }}>
              Jl. Surya Kencana No.1, Pamulang Barat,<br />
              Kec. Pamulang, Kota Tangerang<br />
              Selatan, Banten 15417
            </Typography>
          </Grid>

          {/* Telepon */}
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>Telepon</Typography>
            <Typography sx={{ color: '#fff', fontSize: 16, fontWeight: 300 }}>
              (021) 7445537
            </Typography>
          </Grid>

          {/* Visitor Count */}
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>Pengunjung</Typography>
            <Typography sx={{ color: '#fff', fontSize:  15, fontWeight: 200 }}>
              {visitorCount !== null ? visitorCount : 'Memuat...'}
            </Typography>
          </Grid>

          {/* Logo Kanan */}
          <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <img src={LogoTangSel} height="60" alt="Logo Kota Tangsel" />
            <img src={LogoKemenkes} height="60" alt="Logo Kemenkes" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
