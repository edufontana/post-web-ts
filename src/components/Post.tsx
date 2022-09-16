import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comments } from './Comments'
import style from './Post.module.css'

export function Post({author, puplishedAt, content}){
  const [comments, setComments] = useState([])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(puplishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(puplishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(){
    event.preventDefault();
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(){
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)

  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment =>{
      return comment !== commentToDelete;
    })


    setComments(commentsWithoutDeletedOne)

  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return(
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatarUrl} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={puplishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={style.content}>
        {content.map(line =>{
          if(line.type === 'paragraph'){
            return <p keu={line.content}>{line.content}</p>;
          } else if (line.type === 'link'){
            return <p key={line.content}><a href='#'>{line.content}</a></p>

          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={style.contentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
        placeholder='deixe um comentario'
        name="comment"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
        />

        <footer>
          <button disabled={newCommentText.length === 0} type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map(comments=>
          <Comments key={comments} content={comments} onDeleteComment={deleteComment}/>
        )}
      </div>

    </article>
  )

}


