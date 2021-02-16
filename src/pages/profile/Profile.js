// import React from 'react';
// import './Profile.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { useHistory } from 'react-router-dom';
// import Button from "../../components/button/Button";
// import InputField from "../../components/inputField/InputField";
//
// function Profile() {
//
//     const history = useHistory();
//
//     return(
//         <>
//             <div className="background-img__profile">
//                 <div className="profile-header">
//                 </div>
//                 <div className="profile-container">
//                     <div className="profile__arrow">
//                         <FontAwesomeIcon icon={faArrowLeft} onClick={() => {history.goBack()}}/>
//                     </div>
//                     <div className="profile__account-settings">
//                         <h3>Account Settings</h3>
//                         <div className="profile-settings__bar">
//                             <Button
//
//                             >Profile</Button>
//                             <Button
//
//                             >Settings</Button>
//                         </div>
//                     </div>
//                     <div className="profile__picture-settings">
//                         <h3>Profile picture</h3>
//                         <div className="profile-picture__bar">
//                             <div className="profile-picture__img">
//
//                             </div>
//                             <Button
//                                 type="button"
//                                 className=""
//                             >Upload new</Button>
//                             <Button
//                                 type="button"
//                                 className=""
//                             >Delete</Button>
//                         </div>
//                     </div>
//                     <div className="profile__info">
//                         <h3>Info</h3>
//                         <div className="profile-info__bar">
//                             <InputField />
//                             <InputField />
//                             <InputField />
//                             <InputField />
//                         </div>
//                     </div>
//                     <div className="profile__change-password">
//                         <Button
//                             type="button"
//                         >Change password</Button>
//                     </div>
//                     <div className="profile__bio">
//                         <label htmlFor=""/>
//                         <textarea
//                             name=""
//                             id=""
//                             cols="30"
//                             rows="10"/>
//                     </div>
//                     <div className="profile__update-account">
//                         <Button
//                             type="button"
//                             className=""
//                         >Update profile</Button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
//
// export default Profile;
