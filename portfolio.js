let menu = document.getElementById('menu')
menu.style.maxHeight = "0px";
function toggle(){
if(menu.style.maxHeight == "0px")
{
 menu.style.maxHeight = "300px";
}
else{
    menu.style.maxHeight = "0px";
}
}

    const text = document.querySelector('.sec-text');
    const textload = () => {
        setTimeout(() => {
            text.textContent = "fron-end devolper";
        }, 0);
        setTimeout(() => {
            text.textContent = "freelancer";
        }, 3100);
        setTimeout(() => {
            text.textContent = "web devlper";
        }, 5500);
    }
    textload();
    setInterval(textload, 12000);
