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
            alt="Milind Pandey"
            src={Logo}
            sx={{ width: 150, height: 150 }}
          />

          <div className="text-center my-4">
            <Typography variant="h4" gutterBottom>
              Milind Pandey
            </Typography>

            <Typography variant="body1" gutterBottom>
              Hi Everyone, I am Milind Pandey from Uttrakhand, India.
              <br></br>
              I am a student at Bipin Chandra Tripathi kumon Institute of Technology .
            </Typography>
          </div>
        </div>

        <hr />
        <Typography variant="h6" gutterBottom>
          Connect With Me
        </Typography>
        <div id='social' className="d-flex justify-content-center align-items-center">
          <a href="https://github.com/mp2003" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.instagram.com/milindpandey__/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/milind-pandey-9bb3a020b/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>

        </div>

      </Container>
    </>
  );
}