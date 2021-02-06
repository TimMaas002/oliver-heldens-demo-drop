import React from 'react';
import './About.css';
import oliver_heldens from '../../assets/images/Oliver-Heldens-Maassilo-1.jpg';

function About() {

    return (
        <>
            <div className="about-container">
                <div className="bio-container">
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
                    <img className="picture" src={oliver_heldens} alt="oliver heldens" />
                </div>
            </div>
        </>
    );
};

export default About;