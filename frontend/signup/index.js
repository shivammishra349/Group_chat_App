async function addUser(event){
    try{
        event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let number = event.target.number.value;
    let password = event.target.password.value;

    let obj = {
        name,
        email,
        number,
        password
    }

    let res = await axios.post('http://localhost:1234/signup',obj);
    console.log(res);
    alert('User registered successfully')
    }
    catch(err){
        alert(err='This user allready registered please login')
    }
    
}