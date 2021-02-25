import React, {useEffect, useState} from 'react';
import './Feedback.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {useHistory, useParams} from "react-router-dom";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import axios from 'axios';

function Feedback() {

    // const { id } = useParams()

    const [message, setMessage] = useState([]);

    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackArtistName, setFeedbackArtistName] = useState('');

    const history = useHistory();
    const [createUserSuccess, setCreateUserSuccess] = useState(false);

    async function getFeedbackOne() {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8080/api/feedbacktexts/`, {
                header: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            // console.log(response.data);
            setMessage(response.data);
            setFeedbackMessage(message[0].message)
        } catch (e) {
            console.error(e)
        }
    }

    async function getFeedbackTwo() {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8080/api/feedbacktexts/`, {
                header: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            // console.log(response.data);
            setMessage(response.data);
            setFeedbackMessage(message[1].message)
        } catch (e) {
            console.error(e)
        }
    }

    async function getFeedbackThree() {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8080/api/feedbacktexts/`, {
                header: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            // console.log(response.data);
            setMessage(response.data);
            setFeedbackMessage(message[2].message)
        } catch (e) {
            console.error(e)
        }
    }

    async function getFeedbackFour() {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8080/api/feedbacktexts/`, {
                header: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            // console.log(response.data);
            setMessage(response.data);
            setFeedbackMessage(message[3].message)
        } catch (e) {
            console.error(e)
        }
    }

    function handleSubmit(e) {
        e.preventDefault(e);
        setCreateUserSuccess(true);
    }

    return (
        <>
            <div className="background-img__feedback">
                <div className="feedback-header">
                    <div className="feedback-header__arrow">
                        <FontAwesomeIcon icon={faArrowLeft} onClick={() => {
                            history.goBack()
                        }}/>
                    </div>
                    <h2 className="feedback-header__h2">
                        Feedback
                    </h2>
                </div>
                <div className="feedback-container">
                    <div className="feedback-container__buttons">
                        <Button
                            type="button"
                            className="button-feedback"
                            onClick={getFeedbackOne}
                        >i like this!...</Button>
                        <Button
                            type="button"
                            className="button-feedback"
                            onClick={getFeedbackTwo}
                        >i would change...</Button>
                        <Button
                            type="button"
                            className="button-feedback"
                            onClick={getFeedbackThree}
                        >i want to use this...</Button>
                        <Button
                            type="button"
                            className="button-feedback"
                            onClick={getFeedbackFour}
                        >for the future...</Button>
                    </div>
                    <div className="feedback-container__form">
                        <form onSubmit={handleSubmit}>
                            <InputField
                                id="feedback-artist-name"
                                className={"input-field input-field--white"}
                                type="text"
                                placeholder="Artist name here"
                                value={feedbackArtistName}
                                onChange={(e) => {setFeedbackArtistName(e.target.value)}}
                            >
                                Name / Artist name
                            </InputField>
                            <label htmlFor="feedback-message"/>
                            <textarea
                                name="message"
                                id="feedback-message"
                                cols="5"
                                rows="20"
                                placeholder="Press 1 of the buttons to reveal a message"
                                value={feedbackMessage}
                                onChange={(e) => {setFeedbackMessage(e.target.value)}}
                            />
                            <Button
                                className="button button-form button__orange"
                                type="submit"
                            >Sent feedback</Button>
                            {createUserSuccess === true && <p>The feedback was sent succesfully to (artist_name)</p>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Feedback;