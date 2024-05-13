async function login(event){
    event.preventDefault();

    let email= event.target.email.value;
    let password = event.target.password.value;

    let obj={
        email,
        password
    }
    try{
        let res = await axios.post('http://localhost:1234/login',obj)
        console.log(res.data.user[0].name)
        alert(' User logged successfully')   
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('username',res.data.user[0].name)
        window.location.href='../frontend/index.html'
    }
    catch(err){
        console.log(err)
    }

}