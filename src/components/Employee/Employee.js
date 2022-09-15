import React, { useEffect, useState } from 'react';
import profile_photo from '../assets/images/profile-photo.png';
import check from '../assets/images/check.svg';
import s from './Employee.module.css';


const Employee =()=> {
    return(
        <div className={s.profile}>
            <img src={profile_photo} className={s.profile_photo}/>
            <div className={s.name}>
                Артур Гаврилов
                <div>
                    <img src={check} className={s.check}/>
                </div>
            </div>
            <div className={s.company}>
                Работает в компании Premier Tips
            </div>
            <div className={s.caption}>
                Собираю на новый Genesis G90!
            </div>
        </div>
    )
}
export {Employee};