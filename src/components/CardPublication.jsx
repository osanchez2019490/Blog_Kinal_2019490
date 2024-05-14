import React from 'react';
import { FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CardPublication = ({ publication }) => {
    return (
        <div className='d-flex flex-wrap justify-content-between mb-4' style= {{marginTop: '2rem'}}>
            <div className="card border-0 shadow" style={{ width: '40rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{publication.title}</h5>
                    <div className="position-relative">
                        <img src={publication.urlImage} alt='Image' className='img-fluid rounded' style={{ width: '250px', height: '200px', objectFit: 'cover' }} />
                        <div className="card-overlay d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 rounded" />
                    </div>
                    <p className="card-title">Author: {publication.author}</p>
                    <a href={publication.url} className="btn btn-primary">
                        Read more
                    </a>
                </div>
            </div>
            <style jsx>{`
              .card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px rgba(0,0,0, 0.2);
                }

                .rounded-circle {
                    border-radius: 50% !important;
                }
                .mb-4 {
                    margin-buttom: 2rem;
                }
            `}

            </style>
        </div>
    );
};

