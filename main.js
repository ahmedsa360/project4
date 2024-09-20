let btn = document.getElementById('btn');
let blog = document.getElementById('blog');


 btn.onclick = function () {
     blog.style.display = 'none';
    

 }

 let down = document.getElementById('todown')

 down.onclick = function() {
     scroll({
         top:800,
          left:0,
       behavior:'smooth'
     })
 }