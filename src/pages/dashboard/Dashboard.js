import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import DashboardItem from "../../components/dashboardItem/DashboardItem";

function Dashboard() {

    return(
        <>
            <div className="background-img-dashboard">
                <header className="header-container">
                    <Link to="/dashboard">
                        <h2>Dashboard</h2>
                    </Link>
                </header>

                <div className="dashboard-container">
                    <fieldset>
                        <DashboardItem />
                    </fieldset>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
