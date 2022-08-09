import { format, formatDistanceToNow } from 'date-fns'
import ptbr from 'date-fns/locale/pt-BR'

import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }){
    // const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
    //   day: "2-digit", 
    //   month: "long",
    //   hour: "2-digit",
    //   minute: "2-digit",

    // }).format(publishedAt)

    const publishedDateFormated = format(publishedAt,"dd 'de' LLLL 'às' HH:mm'h' ", {
        locale: ptbr
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptbr,
        addSuffix: true,
    })

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>

            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p><a href=''>{line.content}</a></p>
                    }
                })}

            </div>


            <form className={styles.commentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentario'
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