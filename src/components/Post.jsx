import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
    console.log(props);


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/Josirocha.png" />

                    <div className={styles.authorInfo}>
                        <strong>Josiane Rocha</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio as 08:13h" dateTime="2023-01-11 23:10:00">
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>


            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    ); <footer></footer>
}
