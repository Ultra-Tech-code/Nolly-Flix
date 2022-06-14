 const tabItems=document.querySelectorAll('.tab-item');
 const tabContent=document.querySelectorAll('.tab-content-item');
//select tab content item
function selectItem(e){
    removeItem();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    //grab content items from dom
    const tabContentItem=document.querySelector(`#${this.id}-content`);
    console.log(tabContentItem);
    tabContentItem.classList.add('show');
}
function removeItem(){
    tabItems.forEach(item=>{
        item.classList.remove('tab-border');
    });
}
function removeShow(){
    tabContent.forEach(item=>{
        item.classList.remove('show');
    });
}
 tabItems.forEach(item=>{
     item.addEventListener('click',selectItem)
 });


//  ------------------------------------------------------------
// function changeBg(){
//     var Bgimage = document.getElementsByClassName("showcase");
//     Bgimage.style.backgroundimage =   url('../images/tab-content-2-3.png');

// }

// var theBtn = document.querySelectorAll("btn");
// theBtn.onclick = changeBg;

counter = 0;
var no0fCount = document.querySelector('.counter');
no0fCount.innerHTML = counter;

function increment(){
    counter++;
    no0fCount.innerHTML = counter;
}