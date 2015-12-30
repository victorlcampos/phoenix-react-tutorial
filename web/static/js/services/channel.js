import {Socket} from "deps/phoenix/web/static/js/phoenix"

let Channel = function() {
  let components = {};
  let socket = new Socket("/socket", {params: {token: window.userToken}});

  socket.connect();

  let connect = function(url) {
    let channel = socket.channel(url, {});
    channel.join()
           .receive("ok", resp => { console.log("Join channel", resp) })
           .receive("error", resp => { console.log("Unable to join", resp) })
  }

  return {
    notify: function(url, component) {
      if (components[url] === undefined) {
        components[url] = [];
        components[url].push(component);

        connect(url);
      } else {
        components[url].push(component);
      }
    }
  }
}();

export default Channel;
