import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Hello() {
    let phrase = "World!"
    return (
        <h1> Hello {phrase} </h1>
    )
}

function SayFullName(props) {
    return (
        <div>
        <h1> Мое имя {props.name}, фамилия - {props.surname}</h1>
        <a href={props.link}> Ссылка на мой профиль </a>
        </div>
    )
}

ReactDOM.render(<SayFullName name="Vasily" surname="Safronov" link="http://ya.ru" />, document.getElementById('root'));
registerServiceWorker();
