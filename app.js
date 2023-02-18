AOS.init();

// pagination mock re-order

let pageNum = document.querySelectorAll(".page-number");

pageNum.forEach((num) => {
  num.addEventListener("click", () => {
    if (num.textContent !== "...") {
      let postCard = document.querySelectorAll(".post-card");
      let postReOrder = postCard[num.textContent];
      let container = postReOrder.parentNode;

      document.querySelector(".validation-pagination").classList.remove("show");
      container.insertBefore(postReOrder, postCard[0]);
      postCard[0].scrollIntoView({ behavior: "smooth" });
    } else {
      console.log(document.querySelector(".validation-pagination"));
      document.querySelector(".validation-pagination").classList.add("show");
    }
  });
});

// tags selecting

let tag = document.querySelectorAll(".tag");

tag.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("selected-tag");
  });
});
