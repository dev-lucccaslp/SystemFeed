import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/73972488?v=4' />
                    <div className={styles.authorInfo}>
                        <strong>Lucas Pacheco</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='29 de Julho às 20:40h' dateTime='2022-07-29'>Publicado há 1h</time>

                <div className={stles.content}>
                    <p>Fala galeraa 👋</p>

                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p><a href=''>👉 jane.design/doctorcare</a></p>

                    <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>

                </div>
            </header>
        </article>
    );
}