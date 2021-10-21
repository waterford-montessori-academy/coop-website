// @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0
$(document).ready(() => {
  const month = new Date().toLocaleString("default", { month: "long" }).toLowerCase();
  const day = new Date().getDate();
  const year = new Date().getFullYear();
  const url = "https://raw.githubusercontent.com/waterford-montessori-academy/coop-blog/main/posts/" + year + "/" + month + "/" + day + ".json"
  $.getJSON(, function (data) {
    const http = new XMLHttpRequest();
    http.open('HEAD', "https://raw.githubusercontent.com/waterford-montessori-academy/coop-blog/main/posts/" + year + "/" + month + "/" + day + ".json", false);
    http.send();
    if (http.status != 404) {
      $(document.body).append("<img style='display: block; margin-left: auto; margin-right: auto; width: " + data.width + "; height: " + data.height +  ";' src='" + data.picture + "'><h1>" + data.title + "</h1>" + "<h3>Today's blog post, courtesy of " + data.author + "</h3><h4>" + data.description + "</h4><h5>" + data.content + "</h5>");
    }
    else {
      $(document.body).append("There is no blog post yet.");
    }
  })
})
// @license-end  
