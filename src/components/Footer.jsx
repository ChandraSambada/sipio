import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import logoPuskemasPamulang from '../assets/images/footer/logoPuskesmasPamulang.png';
import LogoTangSel from '../assets/images/footer/LogoTangSel.png';
import LogoKemenkes from '../assets/images/footer/LogoKemenkes.png';

function Footer() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    // Masukkan script auth
    const authScript = document.createElement('script');
    authScript.src = 'https://www.freevisitorcounters.com/auth.php?id=aeb965cec5b295c7a2f20653ff9ba88ec414eaca';
    authScript.async = true;
    document.body.appendChild(authScript);
  
    // Masukkan script counter
    const counterScript = document.createElement('script');
    counterScript.src = 'https://www.freevisitorcounters.com/en/home/counter/1371590/t/6';
    counterScript.async = true;
    document.body.appendChild(counterScript);
  
    // Optional: Cleanup jika component unmount
    return () => {
      document.body.removeChild(authScript);
      document.body.removeChild(counterScript);
    };
  }, []);
  
  

  return (
    <div
      style={{
        display: 'flex',
        height: 184,
        width: '100%',
        backgroundColor: 'rgba(34, 72, 112, 1)',
        justifyContent: 'center',
      }}
    >
      <Container xl lg sx={{ paddingTop: '37px' }}>
        <Grid container spacing={2}>
          <Grid>
            <div
              style={{
                backgroundColor: '#fff',
                width: 179,
                height: 78,
                borderRadius: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={logoPuskemasPamulang} height="80" alt="Logo Puskesmas" />
            </div>
          </Grid>

          <Grid container xl lg direction="column" sx={{ display: 'flex', paddingLeft: '50px' }}>
            <Typography sx={{ color: '#fff', fontSize: 20, fontWeight: 700 }}>Alamat</Typography>
            <Typography sx={{ color: '#fff', fontSize: 16, fontWeight: 300, lineHeight: 1.4 }}>
              Jl. Surya Kencana No.1, Pamulang Barat,
              <br />
              Kec. Pamulang, Kota Tangerang
              <br />
              Selatan, Banten 15417
            </Typography>
          </Grid>

          <Grid container xl lg direction="column" sx={{ display: 'flex', paddingLeft: '50px' }}>
            <Typography sx={{ color: '#fff', fontSize: 20, fontWeight: 700 }}>Telepon</Typography>
            <Typography sx={{ color: '#fff', fontSize: 16, fontWeight: 300 }}>(021) 7445537</Typography>

            {/* Visitor Counter */}
            <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 300, marginTop: 1 }}>
              {visitorCount !== null ? `Pengunjung: ${visitorCount}` : 'Memuat...'}
            </Typography>
          </Grid>

          <Grid>
            <img src={LogoTangSel} height="75" alt="Logo Kota Tangsel" style={{ marginLeft: 200 }} />
            <img src={LogoKemenkes} height="75" alt="Logo Kemenkes" style={{ marginLeft: 10 }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
