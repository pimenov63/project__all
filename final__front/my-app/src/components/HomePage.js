import React from "react";
import wrench from './wrench.svg';
import bigGear from './biggear.svg';

export default function HomePage(props) {
    const { posts } = props;

    return (
        // Главная страница веб-сайта
        <section className="main">
            <div className="row align-items-center">
                <div className="col">
                Добро пожаловать на мой сайт продажи услуг по веб-разработке!
                </div>
                <div className="col-sm" id="col-center">
                    <img className="wrenc_pic" src={wrench} />
                    <img className="big-gear_pic" src={bigGear} />
                </div>
                <div className="col" id="col-right">
                На сайте вы найдете информацию о предоставляемых мною услугах!
                </div>
            </div>
            <div className="txt-block">
                <h2 className="txt-title">Почему я решил стать Веб-разработчиком?</h2>
                <p className="txt-content">Работа веб-разработчика имеет множество преимуществ, изучив которые я решил начать заниматься этим делом. Удобный график работы, множество достоиных преимуществ, приятная заработная плата - всё это может зацепить в данной профессии, но ключевое преимущество - интересная работа, которая позволяет погрузиться в неё с головой!</p>
            </div>
            <div className="txt-block">
                <h2 className="txt-title">Почему необходимо обращаться к квалифицированным разработчикам?</h2>
                <p className="txt-content">Компетентый веб-разработчик выполнит необходимый для вас объем работ в срок, вополощая все ваши желания в реальность!</p>
            </div>
            <div className="txt-block">
                <h2 className="txt-title">Что я считаю основой в изучении веб-разработки?</h2>
                <p className="txt-content">На мой взгляд, чтобы стать успешным веб-разработчиком необходимо активно изучать теоретический материал и максимально стараться применять его на практике. Только постоянное обучение позволит стать успешным профессионалом!</p>
            </div>
        </section>

    );
}