//  const tabItems=document.querySelectorAll('.tab-item');
//  const tabContent=document.querySelectorAll('.tab-content-item');
// //select tab content item
// function selectItem(e){
//     removeItem();
//     removeShow();
//     //add border to current tab
//     this.classList.add('tab-border');
//     //grab content items from dom
//     const tabContentItem=document.querySelector(`#${this.id}-content`);
//     console.log(tabContentItem);
//     tabContentItem.classList.add('show');
// }
// function removeItem(){
//     tabItems.forEach(item=>{
//         item.classList.remove('tab-border');
//     });
// }
// function removeShow(){
//     tabContent.forEach(item=>{
//         item.classList.remove('show');
//     });
// }
//  tabItems.forEach(item=>{
//      item.addEventListener('click',selectItem)
//  });


//  ------------------------------------------------------------
// function changeBg(){
//     var Bgimage = document.getElementsByClassName("showcase");
//     Bgimage.style.backgroundimage =   url('../images/tab-content-2-3.png');

// }
{/* <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px"></img> */}

// var theBtn = document.querySelectorAll("btn");
// theBtn.onclick = changeBg;


const btnItems=document.querySelectorAll('.btn');
// let result = document.querySelector('.counter')
var counter = 0;

// Array.from(btnItems).forEach(btn =>{
//     btn.addEventListener('click', function(event){
//         result.innerHTML = counter++;
//     });
// });

function selectItem(e){
    e.preventDefault();
    increment()

    // var noOfCount = document.querySelector(`#counter-${this.id}`);
    // console.log(noOfCount)
    // noOfCount.innerHTML = counter;
    const element = e.target;
    if (element.tagName == "BUTTON"){
        var result = e.target.getAttribute('.btn-lg');
        result.innerHTML = counter;
    }
    // console.log(element)
    // element.innerText = counter;
    
}


function increment(){
    return counter++;
}

 btnItems.forEach(item=>{
     item.addEventListener('click',selectItem)
 });