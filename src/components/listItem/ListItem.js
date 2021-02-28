import React from 'react';
import './ListItem.css';

function ListItem({ title, subTitle, body, link }) {
// hier wordt de list-item aangemaakt welke gebruikt wordt in de upload list van de user

    return (
        <>
            <div className="list-item">
                <div className="list-item__title"><h4>{title}</h4></div>
                <div className="list-item__subTitle"><h5>{subTitle}</h5></div>
                <div className="list-item__body"><p>{body}</p></div>
                <div className="list-item__redirect">
                    <button type="button">
                        <a href={link}>Read more</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ListItem;