console.log('This is script.js');

document.querySelector('.cross').style.display = "none";

document.querySelector('.hamburger').addEventListener('click', ()=>{
    document.querySelector('.side_bar').classList.toggle('side_bar_go');
    if(document.querySelector('.side_bar').classList.contains('side_bar_go')){
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = "none";
    }
    else{
        document.querySelector('.ham').style.display = "none";
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300);
    }
})
