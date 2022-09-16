import './global.css';
import {Post} from './components/Post'
import { Header } from './components/Header';
import styles from './App.module.css'
import { SideBar } from './components/SideBar';



const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/edufontana.png',
      name: 'Eduardo',
      role: 'Web Developer',
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/github.png',
      name: 'Diego',
      role: 'Web Developer',
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-03 20:00:00')
  },
]

function App() {

  return (
    <>

      <Header/>
      <div className={styles.wrapper}>

        <SideBar />
        <main>
          {post.map(post=>(
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>

      </div>

    </>
  )
}

export default App
