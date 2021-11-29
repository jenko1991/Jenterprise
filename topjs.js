window.onload=function(){
    $('.container').slick({
    autoplay:true,
    autoplaySpeed:1500,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    centerMode:true,
    slidesToShow:1,
    slidesToScroll:2
    });
  };

  //search bar v2

function search_animal() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById('searchbar');
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByTagName('li');

  if(input.value.length == 0){
      ul.style.display = "none";
      return;
  }else{
      ul.style.display = "block";
  }
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "block";
      } else {
          li[i].style.display = "none";
      }
  }
}

//search bar v2
