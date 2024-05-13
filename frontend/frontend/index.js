window.onload = function() {
    let name = localStorage.getItem('username');
    if (name) {
        const joinMessage = `${name} joined the chat.`;
        displayMessage(joinMessage);
    }
}


async function show(event){
    event.preventDefault();

    let message = event.target.message.value;
    // console.log(message)
    // let obj ={
    //     message
    // }

    try{
        let token = localStorage.getItem('token');
        let res = await axios.post('http://localhost:1234/messages', { message }, { headers: { 'Authorization': token } });

        console.log(res.data.message)
        showMessages(res.data.message);

        
        event.target.message.value = '';
    }
    catch(err){
        console.log(err)
    }
    
}






document.addEventListener('DOMContentLoaded', async function() {
    await getMessage();
    setInterval(getMessage, 1000); 
});

async function getMessage() {
    try {
        let token = localStorage.getItem('token');
        let res = await axios.get('http://localhost:1234/getMessage', { headers: { 'Authorization': token } });

        
        document.getElementById('messages').innerHTML = '';

        
        res.data.data.forEach(message => {
            showMessages(message);
        });
    } catch (err) {
        console.log(err);
    }
}









function displayMessage(message) {
    const messagesContainer = document.getElementById('messages-container');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
}

function showMessages(message){
const MessageHolder = document.getElementById('messages');
const MessageEle = document.createElement('div');
MessageEle.textContent = message.message;
MessageHolder.appendChild(MessageEle)
}