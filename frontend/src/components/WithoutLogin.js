import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';

function WithoutLogin() {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch()

    return (
        <div>
            <div className='row'>
                <div className='col-6 rounded-4 p-3 m-3'>
                    <h2>
                        Добро пожаловать в наше спортивное сообщество!
                    </h2>
                    <p className='lead'>
                        SportLife это портал для тех, кто бегает, плавает,
                         ездит на велосипеде, ходит в тренажерный зал — и хочет это делать веселее.
                          С ним можно найти единомышленников в спорте или посмотреть, где и каким спортом
                           занимаются ваши друзья сейчас, рассказать о своих успехах, вести фотожурнал тренировок,
                            открыть для себя новые места и новые спортивные занятия. Присоединяйся!
                    </p>
                </div>
                <div className='col-4 border rounded-4 p-3 m-3'>
                    <Form />
                </div>

            </div>
        </div>
    )
}

export default WithoutLogin