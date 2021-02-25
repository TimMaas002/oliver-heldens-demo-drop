import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import DashboardItem from "../../components/dashboardItem/DashboardItem";
import axios from "axios";

function Dashboard() {

    const [uploads, setUploads] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getProtectedData() {
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
        getProtectedData();
    },[])

    return(
        <>
            <div className="background-img__dashboard">
                <header className="header-container">
                    <Link to="/dashboard">
                        <h2 className="header__h2">Dashboard</h2>
                    </Link>
                </header>

                <div className="dashboard-list__container">
                    {uploads.map((upload) => {
                        return <DashboardItem
                            key={upload.id}
                            title={upload.artist_name}
                            subTitle={upload.song_name}
                            body={upload.message}
                            link={`/uploadforms/${upload.id}`}
                        />
                    })}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
