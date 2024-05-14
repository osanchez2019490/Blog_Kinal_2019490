import React, { useEffect, useState } from 'react';
import { CardPublication } from './CardPublication';
import { usePublications } from '../shared/hooks/usePublications';

export const PublicationList = () => {
  const { getPublications, publications, isFetching } = usePublications();

  useEffect(() => {
    getPublications();
  }, [getPublications]);

  if (isFetching) {
    return <div className="row">Cargando publicaciones...</div>;
  }

  return (
    <div className="row">
      {publications.length > 0 ? (
        publications.map((publication) => (
          <div className="col-md-4 mb-3" key={publication._id}>
            <CardPublication publication={publication} />
          </div>
        ))
      ) : (
        <div className="col-md-12">No se encontraron publicaciones</div>
      )}
    </div>
  );
};