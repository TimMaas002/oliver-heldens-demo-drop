import React from 'react';
import './DashboardItem.css';
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faDownload } from "@fortawesome/free-solid-svg-icons";
import {useHistory, useParams} from "react-router-dom";

function DashboardItem({ title, subTitle, body, link }) {
    // Bijna identiek aan het listItem component.
    // Bij het dashboard item worden er nog extra buttons laten zien
    // om door te linken naar de feedback pagina
    // en als download knop voor de geüploade file (is momenteel niet uitgewerkt)
    const history = useHistory();
    const { id } = useParams();

    return (
        <>
            <div className="dashboard-item">
                <div className="dashboard-item__title"><h4>{title}</h4></div>
                <div className="dashboard-item__subTitle"><h5>{subTitle}</h5></div>
                <div className="dashboard-item__body"><p>{body}</p></div>
                <div className="dashboard-item__redirect">
                    <button type="button">
                        <a href={link}>Read more</a>
                    </button>
                </div>

                <Button
                    type="button"
                    className={"button button-dashboard button-dashboard__purple"}
                    onClick={() => {history.push('/')}}
                >
                    <div className="dashboard__icon">
                        <FontAwesomeIcon icon={faDownload} onClick={() => {history.push('/')}}/>
                    </div>
                    download
                </Button>
                <Button
                    type="button"
                    className={"button button-dashboard button-dashboard__orange"}
                    onClick={() => {history.push(`/feedback/${id}`)}}
                >
                    <div className="dashboard__icon">
                        <FontAwesomeIcon icon={faCommentAlt} onClick={() => {history.push(`/feedback/${id}`)}}/>
                    </div>
                    feedback
                </Button>
            </div>
        </>
    );
}

export default DashboardItem;