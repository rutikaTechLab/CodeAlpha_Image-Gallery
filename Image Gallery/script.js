const images=document.querySelectorAll(".gallery img");
const lightbox=document.querySelector(".lightbox");
const lightboxImage=document.querySelector(".lightbox-image");
const close=document.querySelector(".close");
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
let current=0;


images.forEach((img,index)=>{
img.addEventListener("click",()=>{
lightbox.style.display="flex";
lightboxImage.src=img.src;
current=index;
});
});



close.onclick=()=>{

lightbox.style.display="none";
}



next.onclick=()=>{
current++;

if(current>=images.length){
current=0;
}

lightboxImage.src=images[current].src;
}


prev.onclick=()=>{
current--;

if(current<0){
current=images.length-1;
}

lightboxImage.src=images[current].src;
}


window.onclick=(e)=>{
if(e.target==lightbox){
lightbox.style.display="none";
}
}


const buttons=document.querySelectorAll(".filter-buttons button");

const galleryItems=document.querySelectorAll(".gallery .image");



buttons.forEach(button=>{
button.addEventListener("click",()=>{
buttons.forEach(btn=>btn.classList.remove("active"));
button.classList.add("active");


const filter=button.dataset.filter;

galleryItems.forEach(item=>{

if(filter==="all"){
item.style.display="block";
}
else{
if(item.classList.contains(filter))
item.style.display="block";
else
item.style.display="none";
}
});
});
});