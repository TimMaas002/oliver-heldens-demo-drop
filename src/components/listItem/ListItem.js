import React from 'react';
import './ListItem.css';

function ListItem({ title, subTitle, body}) {

    return(
        <>
            <div className="list-item">
                <div className="list-item__title"><h4>{title}</h4></div>
                <div className="list-item__subTitle"><h5>{subTitle}</h5></div>
                <div className="list-item__body">
                    <p>{body}</p>
                </div>
                <div className="list-item__redirect">
                    <button type="button">
                        <a href="/detailpage">Read more</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ListItem;