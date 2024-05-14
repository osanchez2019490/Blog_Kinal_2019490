import React from 'react';
import { NavbarDocument } from '../components/navbars/Navbar';
import image1 from '../assets/img/OIP.jpg'
import image2 from '../assets/img/proyecto.jpg'
import image3 from '../assets/img/coment.jpg'


export const WelcomePage = () => {


  return (
    <div className='container d-flex flex-column align-items-center py-5'>
      <NavbarDocument />
      <div className='col-md-6 offset-md-0.5 text-center'>
        <h1 className='mt-5'>Bienvenido a mi blog</h1>
        <p>
          Bienvenido a mi blog de programacion donde subo publicaciones recientes de mis proyectos.
        </p>
      </div>
      <div className='image-container mt-5'>
        <img src={image1} alt='Image' className='img-fluid' />
      </div>
      <div className='col-md-6 offset-md-0.5 text-center'>
        <h1 className='mt-5'>Proyectos</h1>
        <p>
          Aqui vas a encontrar algunos proyectos interesantes!
        </p>
      </div>
      <div className='image-container mt-5'>
        <img src={image2} alt='Image' className='img-fluid' />
      </div>
      <div className='col-md-6 offset-md-0.5 text-center'>
        <h1 className='mt-5'>Apoya</h1>
        <p>
          Invenstiga y apoyame dando tu comentario!
        </p>
      </div>
      <div className='image-container mt-5'>
        <img src={image3} alt='Image' className='img-fluid' />
      </div>
    </div>
  );
};
