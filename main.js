$.ajax({
  headers: {"Authorization": "token 19e47712ab9e85b4237068fd3d614a457668d764"},
  url: "https://api.github.com/user/repos",
  type: "GET",
}).then(function(data){
  console.log(data);
})
