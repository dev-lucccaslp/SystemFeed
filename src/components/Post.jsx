import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src='https://avatars.githubusercontent.com/u/73972488?v=4' />
                    <div className={styles.authorInfo}>
                        <strong>Lucas Pacheco</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='29 de Julho às 20:40h' dateTime='2022-07-29'>Publicado há 1h</time>

            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href=''>jane.design/doctorcare</a></p>

                <p>
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#nlw</a>{' '}                        <a href=''>#rocketseat</a>
                </p>

            </div>


            <form className={styles.commentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um coment[ario'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}