$(document).ready(function()
{
(function(){
// добавляем в документ необходимые блоки для миниатюр
$("body").append('<div id=\'MyleneatureWrap\'></div>');	// тёмное фиксированое поле, не даёт жмакать на другие элементы, при просмотре Милениатюры
$("#MyleneatureWrap").append('<div id=\'MyleneatureBlock\'></div>'); // Белый поле, в центре которого будет изображение	
$("#MyleneatureBlock").append('<img class=\'MyleneatureImg\'>'); // Изображение	


// ФУНКЦИИ

function activeWrap()  // Делает видимыми основные блоки милениатюры
{
	$("#MyleneatureWrap").css('display','block');
	$("#MyleneatureBlock").css('display','block');
	$(".MyleneatureImg").css('display','block');
}

function ShowImg(St_img)  // Определяет какое изображение надо выводить в милениатюру
{
var fullImg = $(St_img).attr('full');
if(fullImg == undefined) // Если атрибут full обьявлен, то выводим изображение, находящиеся по адресу из этого атрибута
{
var str = St_img.src;
}
else
{
var str = fullImg;	
}
$(".MyleneatureImg").attr('src',str);
}

function removeScroll(){      // Убирает скролл
	$("body").css('height','100%').css('width','100%').css('overflow','hidden');
}

function backScroll(){ // возвращает скролл
	$("body").css('height','auto').css('width','auto').css('overflow','auto');
}	

function hider()  // прячет Милениатюры
{
	$(".MyleneatureImg").css('display','none');
	$("#MyleneatureWrap").css('display','none');
	$("#MyleneatureBlock").css('display','none');
	$(".MyleneatureImg").attr('src','');
	backScroll();
}
	

	
	
// ОБРАБОТЧИКИ

$("img").click(function()  // делегируем все изображения документа
{
	if($(this).attr('myleneature') == '') // проверяем наличеие атрибута указывающего на изображение, как на объект милениатюры
	{
		activeWrap();
		ShowImg(this);
			if($(this).attr('hidescroll') == '')
			{
				removeScroll();
			}
	}
});

// прячем милениатюру 
$("#MyleneatureWrap").click(function(){
hider();
});

// Останавливаем всплытие на изображении, что бы милениатюра не схлопывалась по клику на изображение 
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