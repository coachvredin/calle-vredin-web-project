document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getHighlights").addEventListener("click", getHighlights);
// document.getElementById("addPost").addEventListener("submit", addPost);
// document.getElementById("getJobs").addEventListener("click", getJobs);
        
    //Printing sample.txt to console(V1 & 2) or site(V3, including error catching)
    function getText() {
        
        // VERSION 1:
        // fetch("sample.txt")
        // .then(function(res){
        //     return res.text();
        // })
        // .then(function(data){
        //     console.log(data)
        // });
        
        //VERSION 2:
        // fetch("sample.txt")
        // .then((res) => res.text())
        // .then((data) => console.log(data))
        
        //VERSION 3:
        fetch("sample.txt")
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("output").innerHTML = data;
        })
        .catch((err) => console.log(err))
    }

    //GET all games from the European leagues and the url to their stats. 
    // function getHighlights(){
    //     fetch("https://www.scorebat.com/video-api/v1/")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         let output = "<h2>All highlights</h2>";
    //         data.forEach(function(highlight){
    //             output += `
    //                 <div>
    //                     <h3>${highlight.title}</h3>
    //                     <p>${highlight.url}</p>
    //                 </div>
    //             `;
    //         });
    //         document.getElementById("output").innerHTML = output;
    //     })
    // }

    async function getHighlights(){
        const response = await fetch("https://www.scorebat.com/video-api/v1/");
        const json = await response.json();
            document.getElementById("output").innerHTML=json[0].embed;
    };

    //POST a post through the API.
    // function addPost(e){
    //     e.preventDefault();
        
    //     let title = document.getElementById("title").value;
    //     let body = document.getElementById("body").value;

    //     fetch("http://jsonplaceholder.typicode.com/posts", {
    //         method: "Post",
    //         headers: {
    //             "Accept": "application/json, text/plain, */*",
    //             "Content-type": "application/json"
    //         },
    //         body:JSON.stringify({title:title, body:body})
    //     })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    // }
    
    //GET a list with jobs from jobs.github.com
    // async function getJobs(){
    //     const response = await fetch("https://jobs.github.com/positions.json?location=sweden",option);
    //     const json = await response.json();
    //     console.log(json)
    // };