import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faArrowUpFromBracket, faPoo } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart, faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const Post = ({ author, content, image, date, replies, reposts, likes }) => {
  return (
    <div className='post-wrapper'>
      <div className='post'>
        <div className='author'>
          <img src={author.photo} className='author-img' />
          <span className='authorName'>
            {author.name}
            <span>
              {
                author.name === 'игореня' ?
                  <FontAwesomeIcon icon={faPoo} className='notverified'></FontAwesomeIcon> :
                  <FontAwesomeIcon icon={faCircleCheck} className='verified'></FontAwesomeIcon>
              }
            </span>
          </span>
          <span className='nickname'>
            <span>{author.nickname}</span>
            <span>&#183;</span>
            <span>{date}</span>
          </span>
            
        </div>
        <div className='post-content'>
          <p className='post-text'>{content}</p>
          <img src={image} className="post-image" />
          <div className='actions'>
            <div className='action'>
              <FontAwesomeIcon icon={faComment} className='icon'></FontAwesomeIcon>
              <span>{replies}</span>
            </div>
            <div className='action'>
              <FontAwesomeIcon icon={faRetweet} className='icon'></FontAwesomeIcon>
              <span>{reposts}</span>
            </div>
            <div className='action'>
              <FontAwesomeIcon icon={faHeart} className='icon'></FontAwesomeIcon>
              <span>{likes}</span>
            </div>
            <div className='action'>
              <FontAwesomeIcon icon={faArrowUpFromBracket} className='icon'></FontAwesomeIcon>
            </div>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Post;