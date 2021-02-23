import React from 'react';
import './DetailPage.css';
// import Button from "../../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function DetailPage() {

    const history = useHistory()

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
                        <h2 className="detailpage-container__title">Name Artist</h2>
                        <h4 className="detailpage-container__subTitle">Song Name</h4>
                        <p className="detailpage-container__info">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda autem cumque
                            deserunt dignissimos dolores ducimus eius ex fugiat harum incidunt iste nam neque nihil
                            numquam odit officiis pariatur quae, quaerat quia quidem quis rem reprehenderit sint
                            tempora tenetur ullam. Doloribus, fugit, iure. A animi autem debitis distinctio
                            doloremque ea earum, esse est et ex exercitationem facere, fugit impedit libero nam nostrum
                            omnis perferendis porro praesentium quas reprehenderit similique tempora. Accusantium
                            aliquam consectetur consequatur culpa et iusto maiores officia quae veritatis voluptates?
                            Consectetur delectus dicta ex fugiat molestiae obcaecati quas quis tenetur! Commodi
                            delectus doloremque eius eum magni officia quae quisquam ullam voluptatem. Aliquam
                            incidunt itaque magnam nobis odit perferendis praesentium provident quas quod vel?
                            Accusamus aperiam beatae, cum debitis dolorem error officia voluptate! Accusantium
                            aliquid autem consequuntur esse ipsum quidem repudiandae soluta tempora. Accusantium
                            asperiores consectetur deserunt, dignissimos ducimus error eum excepturi illum labore
                        </p>
                    </div>
                </div>
                <div className="detailpage-header">
                </div>
            </div>
        </>
    );
}

export default DetailPage;
