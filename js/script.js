var btn = document.querySelector('.fa-heart');

btn.addEventListener('click',function(){
  console.log('tst');
  btn.classList.remove("far");
  btn.classList.add("fas");
});
