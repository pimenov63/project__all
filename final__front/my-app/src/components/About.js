import React from 'react'
import about from './about.svg';

export default function About(props) {
    const { page } = props;
    return (
        // передача контента страницы с Wordpress
        <section className={"page"}>
            <h1 className={"page-title"}>{page.title.rendered}</h1>
            <div className={"page-content"} dangerouslySetInnerHTML={{ __html: props.page.content.rendered }}/>
        </section>
    )
}