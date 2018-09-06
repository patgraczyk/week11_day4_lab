document.addEventListener('DOMContentLoaded', () => {

  const theForm = document.querySelector('#new-item-form');
  theForm.addEventListener('submit', handleForm);

});

const handleForm = function(event){
  event.preventDefault();
  const formPara = document.querySelector("#reading-list");
  formPara.textContent =`Title: ${event.target.title.value},
  Author: ${event.target.author.value},
  Category: ${event.target.category.value}`
  document.querySelector('#new-item-form').reset();
  // const readingListItes = document.querySelector("#reading-list");

  const list = document.createElemenet(ul);
  const listItem = document.createElement(li);
  formPara.appendChild(list);
  list.appendChild(listItem);
}
