$(document).ready(function(){
    $('.next').on('click',function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        if(nextImg.length){
            currentImg.removeClass('active').css('z-index',-10);
            nextImg.addClass('active').css('z-index',10);
        }
    })
    $('.prev').on('click',function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        if(prevImg.length){
            currentImg.removeClass('active').css('z-index',-10);
            prevImg.addClass('active').css('z-index',10);
        }
    })

    // Registration
    const name = document.getElementById('name');
    const password = document.getElementById('password');
    const form = document.getElementById('form');
    const errorElement= document.getElementById('error');
    const male= document.getElementById('male');
    const female= document.getElementById('female');
    form.addEventListener('submit', (e) => {
        let messages = [];
        if (name.value === '' || name.value == null) {
            messages.push('Name is required');
        }
    
        if (password.value.length <= 6) {
            messages.push('*Password must be longer than 6 characters');
        }
    
        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(', ');
        }
        if(male.checked == false||female.checked==false){
            messages.push('Select a Gender');
        }
        
    })
})