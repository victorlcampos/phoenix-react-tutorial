import Comment from './comment'

let CommentList = React.createClass({
  commentNodes: function() {
    return this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
  },
  render: function() {
    return (
      <div className="commentList">
        {this.commentNodes()}
      </div>
    );
  }
});

export default CommentList;
