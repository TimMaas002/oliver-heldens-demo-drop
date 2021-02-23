import React from 'react';
import './DashboardItem.css';
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function DashboardItem({ title, subTitle, body, link }) {

    const history = useHistory();

    return(
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
                    onClick={() => {history.push('/feedback')}}
                >
                    <div className="dashboard__icon">
                        <FontAwesomeIcon icon={faCommentAlt} onClick={() => {history.push('/feedback')}}/>
                    </div>
                    feedback
                </Button>
            </div>
        </>
    );
}

export default DashboardItem;