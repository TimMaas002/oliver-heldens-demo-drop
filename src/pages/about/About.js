import React from 'react';
import './About.css';
import oliver_heldens from '../../assets/images/Oliver-Heldens-Maassilo-1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import FittedImage from "react-fitted-image";

function About() {

    const history = useHistory();

    return (
        <>
            <div className="about-container">
                <div className="bio-container">
                    <div className="bio__arrow">
                        <FontAwesomeIcon icon={faArrowLeft} onClick={() => {history.goBack()}}/>
                    </div>
                    <h1>Oliver heldens</h1>
                    <p>
                    The Dutch/DJ producer founded the label to create a platform to showcase the new music of
                    budding producers. In only five years, Oliver Heldens has grown Heldeep Records into a
                    fully-fledged label, featuring respected mainstay acts like ALOK, Chocolate Puma,
                    & Dada Life as well as hosting stages at leading festivals across the globe like
                    Tomorrowland, Electric Forest, Spring Awakening Music Festival and South West Four.
                    </p>
                </div>
                <div className="picture-container">
                    <FittedImage
                        src={oliver_heldens}
                        fit={"cover"}
                    />
                </div>
            </div>
        </>
    );
};

export default About;