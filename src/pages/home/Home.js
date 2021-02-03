import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import NavBar from "../../components/navBar/NavBar"

function Home() {
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formArtistName, setFormArtistName] = useState('');
    const [formFile, setFormFile] = useState();


    function handleSubmit(e) {
        e.preventDefault();
        console.log(formName, formEmail, formArtistName, formFile);
    }

    return (
        <>
            <NavBar />
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
                            <label htmlFor="details-name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="details-name"
                                placeholder="Oliver"
                                value={formName}
                                onChange={(e) => setFormName(e.target.value)}
                            />
                            <label htmlFor="email-address">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                id="email-address"
                                placeholder="oliverheldens@gmail.com"
                                value={formEmail}
                                onChange={(e) => setFormEmail(e.target.value)}
                            />
                            <label htmlFor="artist-name">Artist name - song name</label>
                            <input
                                type="text"
                                name="artist-name"
                                id="artist-name"
                                placeholder="Oliver Heldens - amazing song"
                                value={formArtistName}
                                onChange={(e) => setFormArtistName(e.target.value)}
                            />
                            <label htmlFor="music-upload">music</label>
                            <input
                                type="file"
                                name="music-upload"
                                id="music-upload"
                                placeholder="amazing-demo.mp3"
                                value={formFile}
                                onChange={(e) => setFormFile(e.target.value)}
                            />
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
