window.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelectorAll(".nav-item");
  const $navNavegator = document.querySelectorAll('.nav-navegator')

  if(location.hash == "#sobremi"){
    list[0].classList.add("active")
  }
  else if(location.hash == "#recursos"){
    list[1].classList.add("active")
  }
  else if(location.hash == "#libros"){
    list[2].classList.add("active")
  }

  function activarLink() {
    list.forEach((item) => {
      item.classList.remove("active");
    });
  }

  $navNavegator.forEach(item => {
    item.addEventListener('click', () => {
      activarLink()
      const $navItem = item.closest('.nav-item')
      $navItem.classList.add('active')
    })
  })
  /*

  list.forEach((item) => {
    item.addEventListener("click", () => {
      activarLink();
      item.classList.add("active");
    });
  });
  */
  
});