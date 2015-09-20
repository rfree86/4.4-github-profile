$.ajaxSetup({
  headers: {
    "Authorization": "token 19e47712ab9e85b4237068fd3d614a457668d764"
  },
});
var repoURL = "https://api.github.com/user/repos"
var userURL = "https://api.github.com/user"
$.ajax(repoURL).then(function(data) {


  data.forEach(function(repo) {
    $('.repo_list').append('<li class="js_repoName"><h2> <a href="' + repo.html_url + '">' + repo.name + '</a></h2></li>');
    $('.repo_list').append('<li class="js_update">  ' + repo.updated_at + '  </li>');
    $('.repo_list').append('<li class="js_star"> ' + repo.stargazers_count + '</li>');
    $('.repo_list').append('<li class="js_fork"> ' + repo.forks_count + '</li>');
  })
})

$.ajax(userURL).then(function(data) {

  console.log(data);

  $('.js_user_avatar').html('<img class="user_pic1" src="' + data.avatar_url + '">');
  $('.user_avatar').html('<img class="user_pic" src="' + data.avatar_url + '">');

  $('.name').html('<h4 class="js_name">' + data.name + '</h4>');
  $('.user_name').html('<h4 class="js_user_name">' + data.login + '</h4>');
  $('.email_info').html('<span class="js_email">' + data.email + '</span>');
  $('.join_date').html('<span class="js_join_date">' + data.created_at + '</span>');
  $('.followers_number').html('<span class="followers_number">' + data.followers + '</span>');
  $('.following_number').html('<span class="following_number">' + data.following + '</span>');

})
