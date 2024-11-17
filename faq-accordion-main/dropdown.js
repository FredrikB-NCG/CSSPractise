/* when the user click on the butto,
toggle between hiding and showing the dropdown content */
function dropDownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
/*    
    let checkBoxEl = document.querySelector(".image-toggler")
    if (checkBoxEl.checked == true) checkBoxEl.checked = false;
    else checkBoxEl.checked = true; */
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns =document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
           
            
        }
    }
}