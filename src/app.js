import "bootstrap";
import "./style.css";


function main(){

  const cardClass=['heart', 'spade','club', 'diamond']
  const cardNums=[2,3,4,5,6,7,8,9,10,"J","K","Q","A"];

// const cards= document.getElementsByClassName('class')
function generateRandomValues(){
  let randomNum= Math.floor(Math.random()*cardNums.length);
  let randomCardClass= Math.floor(Math.random()*cardClass.length);
  

return {card:cardClass[randomCardClass], value:cardNums[randomNum]}
}


function hideAllCards(){
  //hide all the cards first 
  cardClass.forEach(card=>{
    const elements = document.getElementsByClassName(card);

    if(elements.length > 0){
      elements[0].style.display='none';
    }
  });

}


  
  //show the selected ones only 
function showCard({card,value}){
    const selectedCard=document.getElementsByClassName(card);

  if(selectedCard.length > 0){
    selectedCard[0].style.display='block';
    //get the chosen number as well
    const selectedNum= selectedCard[0].querySelector('.num');
    if(selectedNum){
      selectedNum.innerText=value;
    }
  }
}


function updatedCard(){
  hideAllCards();
  const card= generateRandomValues();
  showCard(card);
}
// window.cardValuesToShow=cardValuesToShow;
window.addEventListener('load', updatedCard);
const button= document.getElementById('new-btn-generator');
if(button){
  button.addEventListener('click', updatedCard)
}
}

main();

