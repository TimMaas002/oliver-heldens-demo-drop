import React, {useContext, useEffect, useState} from 'react';
import './DetailPage.css';
import Button from "../../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faDownload, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import {useAuthState} from "../../context/AuthContext";

function DetailPage() {

    const { isAdmin } = useAuthState();

    const { id } = useParams();
    const [error, setError] = useState('');
    const [upload, setUpload] = useState('');

    const history = useHistory()

    useEffect(() =>{
        getUpload();

    }, [])

    async function getUpload() {
        setError('');

        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8080/api/uploadforms/${id}`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            setUpload(response.data);

        } catch (e) {
            setError('Something went wrong while getting data')
        }
    }

    return(
        <>
            <div className="background-img__detailpage">
                <div className="detailpage-header">
                </div>
                <div className="detailpage-container">
                    <div className="detailpage-container__content">
                        <div className="detailpage__arrow">
                            <FontAwesomeIcon icon={faArrowLeft} onClick={() => {history.goBack()}}/>
                        </div>
                        <h2 className="detailpage-container__title">{upload.artist_name}</h2>
                        <h4 className="detailpage-container__subTitle">{upload.song_name}</h4>
                        <p className="detailpage-container__info">{upload.message}</p>
                    </div>
                    {isAdmin ? (
                        <div className="detailpage-container__buttons">
                            <Button
                                type="button"
                                className={"button button-detailpage button-detailpage__purple"}
                                onClick={() => {history.push('/')}}
                            >
                                <div className="detailpage__icon">
                                    <FontAwesomeIcon icon={faDownload} onClick={() => {history.push('/')}}/>
                                </div>
                                download
                            </Button>
                            <Button
                                type="button"
                                className={"button button-detailpage button-detailpage__orange"}
                                onClick={() => {history.push('/feedback')}}
                            >
                                <div className="detailpage__icon">
                                    <FontAwesomeIcon icon={faCommentAlt} onClick={() => {history.push('/feedback')}}/>
                                </div>
                                feedback
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <p>Oliver heldens and his team are giving your demo feedback!</p>
                        </div>
                    )}
                    {/*{isAdmin && }*/}
                </div>
            </div>
        </>
    );
}

export default DetailPage;
