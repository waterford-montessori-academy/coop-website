// @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0
$.getJSON("https://raw.githubusercontent.com/waterford-montessori-academy/coop-blog/main/posts/2021/october/19.json", function (data) {
  document.write("<h1>" + data.title + "</h1><br/>" + data.content);
})
  
