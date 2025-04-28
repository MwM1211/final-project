function volunteerButton(){
    //alert("test");

    const volForm =  document.getElementById("vform");

    if (volForm.style.visibility === "hidden"){
        volForm.style.visibility = "visible";
    } else {
        volForm.style.visibility = "hidden";
    }
    
}





function resultList(){
    const restList = document.getElementById("rlist");
    restList.style.visibility = "visible";
}

function hideList(){
    const restList = document.getElementById("rlist");
    restList.style.visibility = "hidden";
}





function callComment(){
    //alert('test');
    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2> Posts </h2>';
        data.forEach(function(post){
            output += `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}


