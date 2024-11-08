import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar/Avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {
const [likeCount, setLikeCount] = useState(0);


    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function hanndleLikeComment(){
        setLikeCount((state) =>{
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https:github.com/Josirocha.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Josiane Rocha</strong>
                            <time title="11 de Maio as 08:13h" dateTime="2023-01-11 23:10:00">
                                Cerca de 1h  atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>


                    <p>{content}</p>
                </div>


                <footer>
                    <button onClick={hanndleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}