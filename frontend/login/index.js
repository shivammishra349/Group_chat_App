async function login(event){
    event.preventDefault();

    let email= event.target.email.value;
    let password = event.target.password.value;

    let obj={
        email,
        password
    }

    let res = await axios.post('http://localhost:1234/login',obj)
        alert(' User logged successfully') 
}