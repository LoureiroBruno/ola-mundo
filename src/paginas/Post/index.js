import "./Post.css";
import styles from "./Post.module.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";


export default function Post() {
    const parametros = useParams();
    // console.log(posts);
    const post = posts.find((post) => {
        return post.id === parseInt(parametros.id);
    });

    const postsRecomnedados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((post1, post2) => post2.id - post1.id) // sort by
        .slice(0,4) // remove after 4 items
    
    if (!post) {
       return <NaoEncontrada />
    }

    // console.log(post);

    return (

        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo 
                        fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo} 
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                    {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>
                            Outros posts que você pode gostar:
                        </h2>

                        <ul className={styles.postsRecomendados}>
                            {postsRecomnedados.map( (post) => (
                                <li key={post.id}>
                                    <PostCard post={post}/>
                                </li>
                            )) }
                        </ul>

                    </PostModelo>
                }/>
            </Route>
        </Routes>
    )
}

/** usado o hook useParams para pegar os parametros da url
 <h1>Post {JSON.stringify(parametros)} || {parametros.id}</h1>
 */

// <h1>{post.titulo}</h1> 