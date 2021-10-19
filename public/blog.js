// @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0
$(document).ready(() => {
  const month = new Date().toLocaleString("default", { month: "long" }).toLowerCase();
  const day = new Date().getDate();
  const year = new Date().getFullYear();
  $.getJSON("https://raw.githubusercontent.com/waterford-montessori-academy/coop-blog/main/posts/" + year + "/" + month + "/" + day + ".json", function (data) {
    $(document.body).append("<h1>" + data.title + "</h1><br/>" + "<h2>Today's blog post, courtesy of " + data.author + "<br />" + data.content);
  })
})
// @license-end  
