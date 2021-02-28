import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './UploadList.css';
import ListItem from "../../components/listItem/ListItem";
import axios from 'axios';

function UploadList() {

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

    return (
        <>
            <div className="background-img__upload-list">
                <header className="header-container">
                    <Link to="/">
                        <h2 className="header__h2">Producer</h2>
                    </Link>
                    <Link to="/home-upload-list" className="active-link">
                        <h2 className="header__h2">Upload List</h2>
                    </Link>
                </header>

                <div className="upload-list__container">
                    {uploads.map((upload) => {
                        return <ListItem
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

export default UploadList;