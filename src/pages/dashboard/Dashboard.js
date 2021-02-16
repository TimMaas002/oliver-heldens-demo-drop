import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import DashboardItem from "../../components/dashboardItem/DashboardItem";

function Dashboard() {

    return(
        <>
            <div className="background-img__dashboard">
                <header className="header-container">
                    <Link to="/dashboard">
                        <h2 className="header__h2">Dashboard</h2>
                    </Link>
                </header>

                <div className="dashboard-list__container">
                    <DashboardItem
                        title="Name Artist"
                        subTitle="Song Name"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi..."
                    />
                    <DashboardItem
                        title="Name Artist"
                        subTitle="Song Name"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi..."
                    />
                    <DashboardItem
                        title="Name Artist"
                        subTitle="Song Name"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi..."
                    />
                    <DashboardItem
                        title="Name Artist"
                        subTitle="Song Name"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi..."
                    />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
