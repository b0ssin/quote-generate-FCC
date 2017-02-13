document.addEventListener("DOMContentLoaded", function() {

    let body = document.getElementById("body");
    let container = body.childNodes[1];
    let button = container.children[0];
    button.addEventListener("click", function() {
            let request = new XMLHttpRequest();
            let url = "http://api.icndb.com/jokes/random"
            request.open("GET", url, true);
            request.onreadystatechange = function() {
                if (request.status >= 200 && request.status < 400) {
                    let data = JSON.parse(request.responseText);
                    // Connected
                    console.log(data);
                    console.log(data.value.joke);
                } else {
                    console.log("reached server then got an error")
                }
            };

            request.onerror = function() {
                console.log("Connection error");
            }

            request.send();
        })
        // button.onclick = function() {
        //     let request = new XMLHttpRequest();
        //     let url = "http://api.icndb.com/jokes/random"
        //     request.open("GET", url, true);
        //     request.onreadystatechange = function() {
        //         if (request.status >= 200 && request.status < 400) {
        //             let data = JSON.parse(request.responseText);
        //             // Connected
        //             console.log(data);
        //             console.log(data.value.joke);
        //         } else {
        //             console.log("reached server then got an error")
        //         }
        //     };

    //     request.onerror = function() {
    //         console.log("Connection error");
    //     }

    //     request.send();


    // }
})