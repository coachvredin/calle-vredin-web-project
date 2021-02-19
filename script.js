document.getElementById("getText").addEventListener("click", getText);
        document.getElementById("getUsers").addEventListener("click", getUsers);
        document.getElementById("getPosts").addEventListener("click", getPosts);
        document.getElementById("addPost").addEventListener("submit", addPost);
        
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

        //GET and printing users from users.json to the site through a loop.
        function getUsers(){
            fetch("users.json")
            .then((res) => res.json())
            .then((data) => {
                let output = "<h2>Users</h2>";
                data.forEach(function(user){
                    output += `
                        <ul>
                            <li>ID: ${user.id}</li>
                            <li>ID: ${user.name}</li>
                            <li>ID: ${user.email}</li>
                        </ul>
                    `;
                });
                document.getElementById("output").innerHTML = output;
            })
        }

        //GET and printing posts from extern site.
        function getPosts(){
            fetch("http://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                let output = "<h2>Posts</h2>";
                data.forEach(function(post){
                    output += `
                        <div>
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                        </div>
                    `;
                });
                document.getElementById("output").innerHTML = output;
            })
        }

        //POST a post through the API.
        function addPost(e){
            e.preventDefault();
            
            let title = document.getElementById("title").value;
            let body = document.getElementById("body").value;

            fetch("http://jsonplaceholder.typicode.com/posts", {
                method: "Post",
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    "Content-type": "application/json"
                },
                body:JSON.stringify({title:title, body:body})
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
        }