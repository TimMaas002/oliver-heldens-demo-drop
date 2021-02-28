import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import DashboardItem from "../../components/dashboardItem/DashboardItem";
import axios from "axios";

function Dashboard() {

    const [uploads, setUploads] = useState([]);
    const [error, setError] = useState('');
    const [formError, setFormError] = useState('');
    const [protectedData, setProtectedData] = useState('');

    useEffect(() => {
        // Via deze async function vragen we de data op van alle uploadforms
        // die in de database te vinden zijn
        async function getUploadForms() {
            setError('');
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8080/api/uploadforms`,{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })
                setUploads(response.data);
            } catch (e) {
                setError('Something went wrong while getting data')
            }
        }
        getUploadForms();
    },[])

    useEffect(() => {
        async function getProtectedData() {
            setFormError('');
            try {
                // haal de token op uit de local storage
                const token = localStorage.getItem('token');

                // haal de protected data op met de token meegestuurd
                const response = await axios.get('http://localhost:8080/api/users/user', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });

                // zet deze data in de state zodat we dit in het component kunnen laten zien
                setProtectedData(response.data);
            } catch(e) {
                setFormError('Er is iets misgegaan bij het ophalen van de data')
            }
        }

        getProtectedData();
    }, []);

    return (
        <>
            <div className="background-img__dashboard">
                <header className="header-container">
                    <Link to="/dashboard">
                        <h2 className="header__h2">Dashboard</h2>
                    </Link>
                </header>

                <div className="dashboard-list__container">
                    {/*map hier over alle uploads heen die bij de getUploadForms worden opgehaald*/}
                    {uploads.map((upload) => {
                        return <DashboardItem
                            key={upload.id}
                            title={upload.artist_name}
                            subTitle={upload.song_name}
                            body={upload.message}
                            // link hier door naar de specifieke upload id
                            link={`/uploadforms/${upload.id}`}
                        />
                    })}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
