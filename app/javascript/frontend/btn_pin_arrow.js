document.addEventListener('turbolinks:load' , function(){

  let isClose = true
  let btnPinArrow = document.querySelector('.btn-pin-arrow');
  if(btnPinArrow){
    btnPinArrow.addEventListener('click', function(){
      let listDiv = document.querySelector('.extend')

      if (isClose){
        listDiv.classList.add('appear')
        isClose = false
      }else{
        listDiv.classList.remove('appear')
        isClose = true
      }
    })
    document.querySelectorAll('.delete').forEach((x)=>{
      x.addEventListener('click',function(e){
        e.target.parentNode.remove('li')
      })
    })
  }
})