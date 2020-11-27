document.getElementById("menu-wrap").innerHTML = `<div class="scrollside">
<ul class="list-unstyled components">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>
</div>`





function menubar() {
    let sidebar = document.querySelector("#menu-wrap")
    

    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
        

    } else {
        sidebar.style.display = "block";
        
    }
}