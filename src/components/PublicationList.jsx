import React, {useEffect} from 'react';
import { CardPublication } from './CardPublication';
import { usePublications } from '../shared/hooks';


export const PublicationList = ({ publications }) => {
    return (
      <div className="row">
        {publications.map((publication) => (
          <div className="col-md-4 mb-3" key={publication._id}>
            <CardPublication publication={publication} />
          </div>
        ))}
      </div>
    );
  }