import React from 'react';
import { Link } from "react-router-dom";
import './UploadList.css';
import ListItem from "../../components/listItem/ListItem";

function UploadList() {


    return(
        <>
            <div className="background-img__upload-list">
                <header className="header-container">
                    <Link to="/">
                        <h2 className="header__h2">Producer</h2>
                    </Link>
                    <Link to="/home-upload-list" className="active-link">
                        <h2 className="header__h2">Upload List</h2>
                    </Link>
                </header>

                <div className="upload-list__container">
                    <ListItem
                        title="Name Artist"
                        subTitle="Song Name"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi..."
                    />
                    <ListItem
                        title="Name Artist"
                        subTitle="Song Name"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi..."
                    />
                    <ListItem
                        title="Name Artist"
                        subTitle="Song Name"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi..."
                    />
                    <ListItem
                        title="Name Artist"
                        subTitle="Song Name"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi..."
                    />
                </div>
            </div>
        </>
    )
}

export default UploadList;