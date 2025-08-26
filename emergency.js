const heartIcons=document.querySelectorAll('.fa-regular.fa-heart');
const hearts=document.getElementById('love-icon')
let totalHeart=parseInt(hearts.innerText)

for(const heart of heartIcons){
    heart.addEventListener('click',
        function(){
            totalHeart+=1
            hearts.innerText=totalHeart
        }
    )
}

