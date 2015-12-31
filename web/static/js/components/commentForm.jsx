import Comment from '../services/comment';

let CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: '', id: Date.now()};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    Comment.pushNew(this.state);
    this.setState({text: '', id: Date.now()})
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}/>
        <input type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange} />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

export default CommentForm;
