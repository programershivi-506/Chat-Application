document.getElementById('send-button').addEventListener('click', function () {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText) {
        // User's sent message
        const messageElement = document.createElement('div');
        messageElement.className = 'message sent';

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = `<p>${messageText}</p><span class="timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>`;

        messageElement.appendChild(messageContent);

        document.getElementById('chat-window').appendChild(messageElement);
        messageInput.value = '';
        document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;

        // Automatic reply after a short delay
        setTimeout(function () {
            const replyElement = document.createElement('div');
            replyElement.className = 'message received';

            const replyContent = document.createElement('div');
            replyContent.className = 'message-content';

            // Condition for specific replies
            let replyText;
            const lowerCaseMessage = messageText.toLowerCase();

            if (lowerCaseMessage === 'hy') {
                replyText = 'hello';
            } else if (lowerCaseMessage === 'good morning') {
                replyText = 'Good morning!';
            } else if (lowerCaseMessage === 'good afternoon') {
                replyText = 'Good afternoon!';
            } else if (lowerCaseMessage === 'good evening') {
                replyText = 'Good evening!';
            } else if (lowerCaseMessage.includes('how are you')) {
                replyText = 'I am just a chatbot, but I am here to help you!';
            } else if (lowerCaseMessage.includes('what is your name')) {
                replyText = 'My name is ChatBot!';
            } else if (lowerCaseMessage.includes('what can you do')) {
                replyText = 'I can chat with you and answer your questions. Try asking me something!';
            } else {
                replyText = 'Mujhe samajh nahi aaya!';
            }

            replyContent.innerHTML = `<p>${replyText}</p><span class="timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>`;

            replyElement.appendChild(replyContent);

            document.getElementById('chat-window').appendChild(replyElement);
            document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
        }, 1000); // Reply delay of 1 second
    }
});
