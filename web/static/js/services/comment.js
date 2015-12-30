import Channel from "./channel"

let Comment = function() {
  var room = 'comments:lobby';

  return {
    all: function() {
      return [{id: 1, author: "Pete Hunt", text: "This is one comment"},{id: 2, author: "Jordan Walke", text: "This is *another* comment"}];
    },
    notifyNew: function(component) {
      Channel.notify(room, component);
    }
  }
}();

export default Comment;
