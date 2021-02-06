import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import InputField from "../../components/inputField/InputField";

function Home() {
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formArtistName, setFormArtistName] = useState('');
    const [formFile, setFormFile] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        console.log({formName, formEmail, formArtistName, formFile});
    }

    return (
        <>
            <div className="background-img-home">
                <header className="header-container">
                    <Link to="/" className="active-link">
                        <h2>Producer</h2>
                    </Link>
                    <Link to="/home-upload-list">
                        <h2>Upload List</h2>
                    </Link>
                </header>

                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <InputField
                                id="details-name"
                                type="text"
                                placeholder="Oliver"
                                value={formName}
                                onChange={(e) => setFormName(e.target.value)}
                            >
                                Name
                            </InputField>

                            <InputField
                                id="email-address"
                                type="email"
                                placeholder="oliverheldens@gmail.com"
                                value={formEmail}
                                onChange={(e) => setFormEmail(e.target.value)}
                            >
                                Email Address
                            </InputField>

                            <InputField
                                id="artist-name"
                                type="text"
                                placeholder="Oliver Heldens - amazing song"
                                value={formArtistName}
                                onChange={(e) => setFormArtistName(e.target.value)}
                            >
                                Artist name - song name
                            </InputField>

                            <InputField
                                id="music-upload"
                                type="file"
                                placeholder="amazing-demo.mp3"
                                value={formFile}
                                onChange={(e) => setFormFile(e.target.value)}
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
                            />
                            <button type="submit">Submit Demo</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Home;
