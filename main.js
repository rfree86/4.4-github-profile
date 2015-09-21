$.ajaxSetup({
  headers: {
    "Authorization": "token 19e47712ab9e85b4237068fd3d614a457668d764"
  },
});
var repoURL = "https://api.github.com/user/repos"
var userURL = "https://api.github.com/user"
$.ajax(repoURL).then(function(data) {
console.log(data);

  data.forEach(function(repo){
    var upDate= (moment().subtract(repo.updated_at, 'days'));
  console.log(upDate);

    $('.repo_list').append('<li><h2> <a class="js_repoName" href="' + repo.html_url + '">' + repo.name + '</a></h2></li>');
    $('.repo_list').append('<li class="js_update">  ' + repo.updated_at + '  </li>');
    $('.repo_list').append('<li class="js_fork"><a href="' + repo.forks_url + '"> <i class="fa fa-code-fork"></i> ' + repo.forks_count + '<a/></li>');
    $('.repo_list').append('<li class="js_star"> <a href="' + repo.stargazers_url + '"> <i class="fa fa-star"></i> ' + repo.stargazers_count + '<a/></li>');

  })
})

$.ajax(userURL).then(function(data) {

  console.log(data);


  $('.js_user_avatar').html('<img class="user_pic1" src="' + data.avatar_url + '"><i class="fa fa-caret-down"></i>');
  $('.user_avatar').html('<img class="user_pic" src="' + data.avatar_url + '">');
  $('.name').html('<span class="js_name">' + data.name + '</span>');
  $('.user_name').html('<span class="js_user_name">' + data.login + '</span>');
  $('.join_date').html('<span class="js_join_date"><time datetime=' + data.created_at + '>Aug 6, 2015 </time> </span>');
  $('.followers_number').html('<span><a class="followers_number" href=" ' + data.followers_url +' "> ' + data.followers + ' </a> </span>');
  $('.Starred_number').html('<span><a class="Starred_number" href=" ' + data.starred_url +' "> ' + data.followers + ' </a> </span>');
  $('.following_number').html('<span><a class="following_number" href=" ' + data.following_url +' ">' + data.following + ' </a> </span>');
  $('.email_info').html('<span> <a class="js_email_info" href=" mailto: ' + data.email + '">  ' + data.email + '<a/></span>');

})
