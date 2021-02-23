import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";

function Home() {
    const [uploadFormArtistName, setUploadFormArtistName] = useState('');
    const [uploadFormEmail, setUploadFormEmail] = useState('');
    const [uploadFormSongName, setUploadFormSongName] = useState('');
    const [uploadFormFile, setUploadFormFile] = useState('');
    const [uploadFormMessage, setUploadFormMessage] = useState('');

    //artist_name: uploadFormArtistName,
    //email: uploadFormEmail,
    //song_name: uploadFormSongName,
    //upload_file: uploadFormFile,
    //message: uploadFormMessage,


    async function handleSubmit(e) {
        e.preventDefault();

        try {

        } catch (e) {

        }
        console.log({uploadFormArtistName, uploadFormEmail, uploadFormSongName, uploadFormFile, uploadFormMessage});
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
                                value={uploadFormEmail}
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
                                placeholder="This music was inspired by..."
                                value={uploadFormMessage}
                                onChange={(e) => setUploadFormMessage(e.target.value)}
                            />
                            <Button
                                className="button button__orange button-form"
                                type="submit"
                            >Submit Demo</Button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Home;
