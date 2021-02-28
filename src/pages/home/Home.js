import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import axios from 'axios';
import { useAuthState } from "../../context/AuthContext";

function Home() {
    // maak hier de states aan voor het formulier
    const [uploadFormArtistName, setUploadFormArtistName] = useState('');
    const [uploadFormEmail, setUploadFormEmail] = useState('');
    const [uploadFormSongName, setUploadFormSongName] = useState('');
    const [uploadFormFile, setUploadFormFile] = useState('');
    const [uploadFormMessage, setUploadFormMessage] = useState('');

    const [error, setError] = useState('');
    const [formError, setFormError] = useState('');
    const [createUserSuccess, setCreateUserSuccess] = useState(false);
    const [protectedData, setProtectedData] = useState('')

    useEffect(() => {
        async function getProtectedData() {
            setFormError('');
            try {
                const token = localStorage.getItem('token');

                const response = await axios.get(`http://localhost:8080/api/users/user`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });

                setProtectedData(response.data);
            } catch(e) {
                setFormError('Er is iets misgegaan bij het ophalen van de data')
            }
        }
        getProtectedData();
    }, []);

    async function handleSubmit(e) {
        setError('');
        e.preventDefault();
        try {
            const formData = {
                artist_name: uploadFormArtistName,
                email: uploadFormEmail,
                song_name: uploadFormSongName,
                upload_file: uploadFormFile,
                message: uploadFormMessage
            }

            const token = localStorage.getItem('token');
            const response = await axios.post(`http://localhost:8080/api/uploadforms`, formData,{
                header: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.status === 201) {
                setCreateUserSuccess(true);
            }

        } catch (e) {
            console.error(e)
            setError('Er is iets misgegaan met het uploaden');
        }
    }

    return (
        <>
            <div className="background-img__home">
                <header className="header-container">
                    <Link to="/" className="active-link">
                        <h2 className="header__h2">Producer</h2>
                    </Link>
                    <Link to="/home-upload-list">
                        <h2 className="header__h2">Upload List</h2>
                    </Link>
                </header>

                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="form__outline">
                            <InputField
                                id="details-name"
                                className={"input-field input-field--white "}
                                type="text"
                                placeholder="Oliver heldens"
                                value={uploadFormArtistName}
                                onChange={(e) => setUploadFormArtistName(e.target.value)}
                            >
                                Artist Name
                            </InputField>

                            <InputField
                                id="email-address"
                                className={"input-field input-field--white"}
                                type="email"
                                placeholder="oliverheldens@gmail.com"
                                value={protectedData.email}
                                onChange={(e) => setUploadFormEmail(e.target.value)}
                            >
                                Email Address
                            </InputField>

                            <InputField
                                id="artist-name"
                                className={"input-field input-field--white"}
                                type="text"
                                placeholder="Amazing song"
                                value={uploadFormSongName}
                                onChange={(e) => setUploadFormSongName(e.target.value)}
                            >
                                Song name
                            </InputField>

                            <InputField
                                id="music-upload"
                                className={"input-field input-field--white"}
                                type="file"
                                placeholder="amazing-demo.mp3"
                                value={uploadFormFile}
                                onChange={(e) => setUploadFormFile(e.target.value)}
                            >
                                Music
                            </InputField>

                            <label htmlFor="personal-message">personal message</label>
                            <textarea
                                name="message"
                                id="personal-message"
                                cols="30"
                                rows="5"
                                maxLength="250"
                                placeholder="This music was inspired by..."
                                value={uploadFormMessage}
                                onChange={(e) => setUploadFormMessage(e.target.value)}
                            />
                            <Button
                                className="button button__orange button-form"
                                type="submit"
                            >Submit Demo</Button>
                            {/*geef de user feedback dat de demo goed was geupload*/}
                            {error && <p>{error}</p>}
                            {createUserSuccess === true && <p>The demo was uploaded succesfully!</p>}
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Home;