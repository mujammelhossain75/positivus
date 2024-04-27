(function($){
      'use positivus'
      const mobilemenus = document.querySelector(".mobile-menus")
      const menu = document.querySelector(".menu")

      mobilemenus.addEventListener("click",() =>){
        mobilemenus.classList.toggle("active");
        menu.classList.toggle("active");
      }
      


}) (jquery);
