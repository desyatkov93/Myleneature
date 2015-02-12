$(document).ready(function()
{
(function(){
$("body").append('<div id=\'MyleneatureWrap\'></div>');	
$("#MyleneatureWrap").append('<div id=\'MyleneatureBlock\'></div>');	
$("#MyleneatureBlock").append('<img class=\'MyleneatureImg\'>');	
function ShowImg(St_img) 
{
var fullImg = $(St_img).attr('full');
if(fullImg == undefined)
{
var str = St_img.src;
}
else
{
var str = fullImg;	
}
$(".MyleneatureImg").attr('src',str);
}
	
function hider()
{
	$(".MyleneatureImg").css('display','none');
	$("#MyleneatureWrap").css('display','none');
	$("#MyleneatureBlock").css('display','none');
	$(".MyleneatureImg").attr('src','');
	backScroll();
}
	
function removeScroll(){
	$("body").css('height','100%').css('width','100%').css('overflow','hidden');
}
function backScroll(){
	$("body").css('height','auto').css('width','auto').css('overflow','auto');
}
function activeWrap()
{
	$("#MyleneatureWrap").css('display','block');
	$("#MyleneatureBlock").css('display','block');
	$(".MyleneatureImg").css('display','block');
}
// delegation in the all images
$("img").click(function()
{
	if($(this).attr('myleneature') == '')
	{
		activeWrap();
		ShowImg(this);
			if($(this).attr('hidescroll') == '')
			{
				removeScroll();
			}
		
	}
}
);
// hide Myleneature 
$("#MyleneatureWrap").click(function(){
hider();
});

// Stop bubbling
$(".MyleneatureImg")[0].onclick = function(event) {
  event = event || window.event; 
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
}


})();
});