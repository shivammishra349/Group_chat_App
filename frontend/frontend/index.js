async function show(event){
    event.preventDefault();

    let message = event.target.message.value;
    console.log(message)
    // let obj ={
    //     message
    // }

    try{
        let token= localStorage.getItem('token')
        let res =await axios.post('http://localhost:1234/messages', {message},{headers :{'Authorization' :token}})
        console.log(res)
    }
    catch(err){
        console.log(err)
    }
    
}