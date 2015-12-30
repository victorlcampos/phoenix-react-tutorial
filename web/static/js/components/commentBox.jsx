import CommentList from './commentList'
import CommentForm from './commentForm'

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: [{id: 1, author: "Pete Hunt", text: "This is one comment"},{id: 2, author: "Jordan Walke", text: "This is *another* comment"}]};
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
