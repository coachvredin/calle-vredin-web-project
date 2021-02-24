document.getElementById("getUsers").addEventListener("click", getUsers);

function getUsers(){
    fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
        let printusers = "";
        data.forEach(function(user){
            printusers += `
                <ul>
                    <li> Name: ${user.name}</li>
                    <li> Email: ${user.email}</li>
                </ul>
            `;
        });
        document.getElementById("seeUsers").innerHTML = printusers;
    })
}
