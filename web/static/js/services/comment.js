import Channel from "../utils/channel"
import Ajax from "../utils/ajax"

let Comment = function() {
  var room = 'comments:lobby';
  var allComments = '/comments';

  return {
    all: function(component) {
      return Ajax.get(allComments, 'all:comments', component);
    },
    notifyNew: function(component) {
      Channel.notify(room, 'new:comment', component);
    },
    pushNew: function(state) {
      Channel.push(room, 'new:comment', state);
    }
  }
}();

export default Comment;
