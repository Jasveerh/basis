let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formvalidation();
});

let formvalidation = () => {
  if (input.value ==="") {
    msg.innerHTML = "Please put some information";
    
  } else {
    msg.innerHTML ="";
    acceptdata();
    createpost();
  }
}
let data ={}
let acceptdata = () => {
data["text"] = input.value;
console.log(data);

}

let createpost = () => {
    posts.innerHTML +=
    `



    <div>
            <p>${data.text}</p>
            <span class="options">
                <button   onclick ="editPost(this)">EDIT</button>
                <button onclick ="deletePost(this)">DELETE</button>
                
            </span>
    
    `;
    input.value = "";
};

let deletePost = (e) => {
e.parentElement.parentElement.remove();
};

let editPost = (e) => {
input.value =e.parentElement.previousElementSibling.innerHTML;
e.parentElement.parentElement.remove();


}