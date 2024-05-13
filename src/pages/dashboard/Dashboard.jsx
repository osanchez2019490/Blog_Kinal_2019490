import React, { useEffect } from 'react';
import { Navbar } from '../../components/navbars/Navbar';
import { PublicationList } from '../../components/PublicationList';
import { usePublications } from '../../shared/hooks';

export const Dashboard = () => {
    const { allPublications } = usePublications();


    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

                        <PublicationList publications={allPublications || []} />

                    </main>
                </div>
            </div>
        </div>
    );
};