import {Socket} from "deps/phoenix/web/static/js/phoenix"

let Channel = function() {
  let components = {};
  let channels = {};

  let socket = new Socket("/socket", {params: {token: window.userToken}});

  socket.connect();

  let connect = function(url) {
    let channel = socket.channel(url, {});

    channel.join()
           .receive("ok", resp => { console.log("Join channel", resp) })
           .receive("error", resp => { console.log("Unable to join", resp) });

    channels[url] = channel;
  }

  return {
    notify: function(url, action, component) {
      if (components[url] === undefined) {
        components[url] = [];

        if (components[url][action] == undefined) {
          components[url][action] = [];
        }
        components[url][action].push(component);

        connect(url);
      } else {
        if (components[url][action] == undefined) {
          components[url][action] = []
        }
        components[url].push(component);
      }

      if (components[url][action].length == 1) {
        channels[url].on(action, state => {
          console.log("on " + action, state);
          components[url][action].map(function(component) { component.updateFunction(action, state) });
        });
      }
    },
    push: function(url, action, state) {
      console.log("push " + action, state);
      channels[url].push(action, state);
    }
  }
}();

export default Channel;
