import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.commment}>
            <img src="https://github.com/Josirocha.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Josiane Rocha</strong>
                            <time title="11 de Maio as 08:13h" dateTime="2023-01-11 23:10:00">
                                Cerca de 1h  atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>


                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>


                <footer>
                <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                </button>
                </footer>
            </div>
        </div>
    )
}