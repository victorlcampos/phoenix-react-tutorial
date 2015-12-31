let Ajax = function() {
  let get = function(url, action, component) {
    let request = new XMLHttpRequest();
    request.open('GET', "/api/v1"+url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText).data;
        component.updateFunction(action, data);
      } else {
        console.log('We reached our target server, but it returned an error', request)
      }
    };

    request.onerror = function() {
      console.log('Something went wrong', request)
    };

    request.send();
  }

  return {
    get: get
  }
}();

export default Ajax;
