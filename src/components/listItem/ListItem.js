import React from 'react';
import './ListItem.css';

function ListItem({ title, subTitle, body}) {

    return(
        <>
            <div className="list-item">
                <div className="list-item__title">{title}</div>
                <div className="list-item__subTitle">{subTitle}</div>
                <div className="list-item__body">
                    <p>{body}</p>
                </div>
                <div className="list-item__redirect">
                    <button type="button">
                        <a href="/">Read more</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ListItem;