const sign_in_btn =document.querySelector("#sign-in-btn");
const sign_up_btn =document.querySelector("#sign-up-btn");
const container =document.querySelector(".container");

const sign_in_btn2 =document.querySelector("#sign-in-btn2");
const sign_up_btn2 =document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});



$(document).ready(function() {
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        if($(window).scrollTop()>60){
            $('header').addClass('header-active');
        }
        else{
            $('header').removeClass('header-active');
        }
        $('section').each(function()
        {
            let top=$(window).scrollTop();
            let height=$(this).height();
            let offset=$(this).offset().top-200;
            let id=$(this).attr('id');
            if(top >= offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"`).addClass('active');
            }
        })

       
    });
});
/*
const filterItem=document.querySelector(".items");
const filterImg=document.querySelector(".immggal");
window.onload=()=>{ //once window loaded
    filterItem.onclick =(selectedItem)=>{
if(selectedItem.target.classList.contains("item")){
 filterItem.querySelector(".activ").classList.remove("activ");
 selectedItem.target.classList.add("activ");
 let filterName= selectedItem.target.getAttribute("data-name");
 filterImg.forEach((immggal)=> {
     let filterimages=immggal.getAttribute("data-name");
     console.log(filterimages);
     if((filterimages == filterName) || filterName == "all"){
        immggal.classList.remove("hide");
         immggal.classList.add("show");
     }
     else{
        immggal.classList.add("hide");
        immggal.classList.remove("show");
     }
 });
}


    }
    for (let index = 0; index < filterImg.length; index++) {
        filterImg[index].setAttribute("sclick", "preview(this)");
        
    }
}

const previewBox =document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".ico");
function preview(element){
    previewBox.classList.add("show")

}
*/