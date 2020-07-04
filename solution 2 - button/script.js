function createBtn(count) {
let i = 1;
let btn_group = document.getElementById("wrapper_btn");

for (i; i <= count; i++) {
  let button = document.createElement("button");
  button.innerHTML = 'Button '+i;
  btn_group.appendChild(button);
  button.addEventListener ("click", function(i) {
    console.log("name => "+ event.target.innerHTML + " index=>" + i);
  }.bind(null, i));
}
}

