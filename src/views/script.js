document.querySelector("#btnClick").onclick = function () {

    // axios({
    //     method: 'GET',
    //     url: 'http://localhost:8080/api/getUser/2'
    // }).then(result => {
    //     console.log(result)
    //     document.querySelector("#ketQua").innerHTML = result.data.last_name +  " " + result.data.first_name;
    // })

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    axios({
        method: 'POST',
        url: 'http://localhost:8080/api/checkLogin',
        data: {
            username: username,
            password: password
          }
    }).then(result => {
       
        document.querySelector("#ketQua").innerHTML = result.data
    })

}