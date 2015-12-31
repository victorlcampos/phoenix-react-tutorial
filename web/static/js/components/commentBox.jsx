import CommentList from './commentList'
import CommentForm from './commentForm'
import Comment from '../services/comment'

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.setState({data: Comment.all()});

    Comment.notifyNew(this);
  },
  updateFunction: function(action, comment) {
    this.state.data.push(comment);
    this.setState({data: this.state.data});
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
