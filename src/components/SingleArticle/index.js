import './SingleArticle.css';

import { useParams } from 'react-router-dom';

const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  const { title, imageUrl, body } = articles.find(article => article.id === id);

  return (
    // <div className='singleArticle'>
    //   <h1>Why Am I At Home</h1>
    //   <img
    //     src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobcain%2Ffiles%2F2017%2F10%2FKevin-Home-Alone.jpg'
    //     alt='home'
    //   />
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse
    //     laboriosam officia accusantium veritatis fugiat exercitationem vero
    //     autem nihil aliquid ullam recusandae, quis odit odio voluptates
    //     explicabo nobis! Consequuntur, aliquam?
    //   </p>
    // </div>
    <div className='singleArticle'>
      <h1>{title}</h1>
      <img
        src={imageUrl}
        alt='home'
      />
      <p>
        {body}
      </p>
    </div>
  );
};

export default SingleArticle;
