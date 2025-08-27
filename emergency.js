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


const calls=document.querySelectorAll('.call-button');
const coins=document.getElementById('coins');
let numberOfCoins=parseInt(coins.innerText);
for(const call of calls){
    call.addEventListener('click',
        function(){
            const serviceName=call.parentElement.querySelector('h1').innerText;
            const number=call.parentElement.querySelector('h2').innerText;
            if(numberOfCoins>0){
                alert(serviceName+' '+number);
                numberOfCoins-=20;
                const historySection=document.querySelector('#history');
                const childHistory=document.createElement('div');
                childHistory.classList.add('inner-history');
                const time=new Date();
                let suf=''
                if(time.getHours()<12){
                    suf='AM'
                }
                else{
                    suf='PM'
                }
                childHistory.innerHTML=
                `<div>
                <p>${serviceName}</p>
                <p>${number}</p>
                </div>
                <p>
                ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${suf}
                </P>`;
                historySection.appendChild(childHistory);
                document.getElementById('clear').addEventListener('click',
                    function(){
                        childHistory.hidden=true
                    }
                )
            }
            else{
                alert('There are not enough coins')
                return
            }
            coins.innerText=numberOfCoins
        }
    )
}


const copyButtons=document.querySelectorAll('.copy-button');
const copies=document.getElementById('copy-count')
let numberOfCopies=parseInt(copies.innerText)

for(const copy of copyButtons){
    copy.addEventListener('click',
        function(){
            const numberToCopy=copy.parentElement.querySelector('h2').innerText
            if(navigator.clipboard){
                    navigator.clipboard.writeText(numberToCopy)
                    .then(()=>{
                        alert('Number is copied')
                    });
                };
            numberOfCopies+=1
            copies.innerText=numberOfCopies
        }
    )
}
