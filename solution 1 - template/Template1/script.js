const form = document.getElementById('form');

form.addEventListener('keyup', (event) => {
  if(event.target.value === ''){
    var el = document.querySelector("label[for='" + event.target.id + "']")
    el.classList.remove("active","highlight");   
  }else{
    var el = document.querySelector("label[for='" + event.target.id + "']")
    el.classList.add("active","highlight");    
  }
  
}, true);

// for tab
function openTab(evt, tabName) {
    var i, tabcontent, tab;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
