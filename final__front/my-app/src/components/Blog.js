import React from "react";
import wrenchPost from './wrench_post.svg';

export default function HomePage(props) {
    const { posts } = props;

    return (
        // передача услуг с Wordpress на страницу блога
        <section className="blog">
            <div className="blog_container">
            {posts.map((post, index) => (
                <div className="post" key={index}>
                    <div className="row align-items-center justify-content-cente">
                        <div className="col-2" id="col_pic">
                            <img className="post_pic" src={wrenchPost} />
                        </div>
                        <div className="col-10">
                            <h1 className={"post-title"}>{post.title.rendered}</h1>
                            <div className={"post-content"} dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}}/>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
}