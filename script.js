
const headSection=document.querySelector('.head-section');
const Nav=document.querySelector('Navbar');

const onHov=document.querySelectorAll('.offHover');
console.log(onHov);
onHov.forEach(hov=>{
    hov.addEventListener('mouseover',function(){
        onHov.forEach(other=>{
            if(other!==hov){
                other.style.opacity=.5;
            }
        })
        // other.style.opacity=1;
    })
    hov.addEventListener('mouseout',function(){
        onHov.forEach(other=>{
            if(other!==hov){
                other.style.opacity=1;
            }
        })
        // other.style.opacity=1;
    })
})
