import React from 'react';
import AddCommentForm from './AddCommentForm';

const Comment = props => (
  <div className="comment">
      <h4>{props.comment.postedBy}</h4>
      <p>{props.comment.text}</p>
  </div>
)

const CommentsList = ({ comments, articleName, setArticleInfo }) => {

  const commentsList = () => comments.map((comment, key) => <Comment comment={comment}  key={key}/>);


  return (
    <>
    <h3>Comments:</h3>
    {commentsList()}
    <AddCommentForm articleName={articleName} setArticleInfo={setArticleInfo} />
    </>
)};

export default CommentsList;
