import React from 'react';
import './DashboardItem.css';
import DashboardImage from "../../assets/images/5ff6a024-17bb-401e-a10e-4f607c649414 kopie.jpg";
import {ReactComponent as PlusIcon} from "../../assets/icons/049-add.svg";

function DashboardItem() {

    return(
        <>
        <div className="dashboard-item-container">
            <div className="dashboard-item-picture">
                <img className="dashboard-item-picture-picture" src={DashboardImage} alt="dashboard-image"/>
            </div>
            <div className="dashboard-item-text">
                <h5>Name Artist</h5>
                <p>Song name</p>
                <p>MP3</p>
                <p>01/01/2021</p>
            </div>
            <div className="dashboard-item-plus">
                <PlusIcon
                    fill="hsl(32, 100%, 49%)"
                />
            </div>
        </div>
        </>
    );
}

export default DashboardItem;