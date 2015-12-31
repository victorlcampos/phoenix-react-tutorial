import CommentList from './commentList'
import CommentForm from './commentForm'
import Comment from '../services/comment'

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    Comment.all(this);
    Comment.notifyNew(this);
  },
  updateFunction: function(action, comments) {
    if (comments.length) {
      this.setState({data: comments});
    } else {
      this.state.data.push(comments);
      this.setState({data: this.state.data});
    }
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

export default CommentBox;
