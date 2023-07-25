import * as React from 'react';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Logo from './../../Assets/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './About.css';

export default function About() {
  return (
    <>
      <Container className='my-5' maxWidth="sm">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Avatar
            alt="Hardik Desai"
            src={Logo}
            sx={{ width: 150, height: 150 }}
          />

          <div className="text-center my-4">
            <Typography variant="h4" gutterBottom>
              Hardik Desai
            </Typography>

            <Typography variant="body1" gutterBottom>
              Hi Everyone, I am Hardik Desai from Gujarat, India.
              I am a Fronted web developer at Zignuts Technolab Pvt. Ltd.
            </Typography>
          </div>
        </div>

        <hr />
        <Typography variant="h6" gutterBottom>
          Social Handles
        </Typography>
        <div id='social' className="d-flex justify-content-center align-items-center">
          <a href="https://www.github.com/imhardikdesai" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.instagram.com/imhardikdesai" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/desai-hardik-6b239b213/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>

        </div>

      </Container>
    </>
  );
}