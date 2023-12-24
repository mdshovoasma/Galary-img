const filterable_button = document.querySelectorAll('.filter-button button');

const filterable_card = document.querySelectorAll('.filterable-card .card');

// console.log(filterable_button,filterable_card);

function filtercard(event){
    const active = document.querySelector('.active');
    active.classList.remove('active');
     event.target.classList.add('active');


     filterable_card.forEach(card=>{
        card.classList.add('hide');


        // dataset.name dea html ar Data-name bar kora jai  
        
        // click korla terget bola hoi
        // console.log(card.dataset.name);

        // console.log(event.target.dataset.name)

        if(card.dataset.name===event.target.dataset.name|| event.target.dataset.name=='all'){
            card.classList.remove('hide');

        }


     })

    
}
filterable_button.forEach(button=>button.addEventListener("click",filtercard));



// for(let i = 0; i<filterable_button.length;i++){
// filterable_button[i].addEventListener('click',filtercard)
// }



// const array = [1, 2, 3, 4, 5];

// // array.forEach(function(element) {
// //   console.log(element);
// // });



// array.forEach(button=>{
//     console.log(button);
// })