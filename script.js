document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const clearChatButton = document.getElementById('clear-chat');
    
    // Chatbot configuration
    const botConfig = {
        name: 'AI Assistant',
        domain: 'customer service', // Change this to match your domain
        tone: 'friendly', // Change this to match your preferred tone
        tools: ['company FAQ', 'product manuals'] // Change this to match your available tools
    };
    
    // Auto-resize textarea as user types
    userInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
        // Reset height if empty
        if (this.value === '') {
            this.style.height = '';
        }
    });
    
    // Send message when user clicks send button
    sendButton.addEventListener('click', sendMessage);
    
    // Send message when user presses Enter (but allow Shift+Enter for new lines)
    userInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Clear chat when user clicks clear button
    clearChatButton.addEventListener('click', function() {
        // Keep only the first welcome message
        while (chatMessages.children.length > 1) {
            chatMessages.removeChild(chatMessages.lastChild);
        }
    });
    
    // Function to send user message and get bot response
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addMessageToChat('user', message);
        
        // Clear input field and reset height
        userInput.value = '';
        userInput.style.height = '';
        
        // Simulate bot thinking with a typing indicator
        const typingIndicator = addTypingIndicator();
        
        // Simulate bot response after a short delay
        setTimeout(() => {
            // Remove typing indicator
            chatMessages.removeChild(typingIndicator);
            
            // Get bot response
            const botResponse = getBotResponse(message);
            
            // Add bot response to chat
            addMessageToChat('bot', botResponse);
            
            // Scroll to bottom of chat
            scrollToBottom();
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
        
        // Scroll to bottom of chat
        scrollToBottom();
    }
    
    // Function to add a message to the chat
    function addMessageToChat(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        
        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = message;
        
        messageContent.appendChild(messageParagraph);
        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);
    }
    
    // Function to add typing indicator
    function addTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('message', 'bot-message', 'typing-indicator');
        
        const typingContent = document.createElement('div');
        typingContent.classList.add('message-content');
        
        const typingDots = document.createElement('p');
        typingDots.innerHTML = '<span>.</span><span>.</span><span>.</span>';
        
        typingContent.appendChild(typingDots);
        typingDiv.appendChild(typingContent);
        chatMessages.appendChild(typingDiv);
        
        return typingDiv;
    }
    
    // Function to get bot response (this is where you would integrate with a real AI service)
    function getBotResponse(userMessage) {
        // Simple response logic - in a real app, this would call an AI API
        const responses = [
            `I understand you're asking about ${userMessage.toLowerCase().includes('price') ? 'pricing' : 'our services'}. Let me help you with that.`,
            `That's a great question about ${userMessage.toLowerCase().includes('product') ? 'our products' : 'our services'}. Here's what I can tell you...`,
            `I'd be happy to assist with your inquiry about ${userMessage.toLowerCase().includes('support') ? 'customer support' : 'general information'}.`,
            `Thanks for reaching out about ${userMessage.toLowerCase().includes('order') ? 'your order' : 'our company'}. I can help with that.`,
            `I'm here to help with your question. Could you provide a bit more detail so I can assist you better?`,
            `I appreciate your patience. Based on what you've asked, I recommend checking our ${botConfig.tools[Math.floor(Math.random() * botConfig.tools.length)]}.`
        ];
        
        // If message is very short, ask for clarification
        if (userMessage.length < 5) {
            return "I'd like to help you, but could you please provide more details about your question or concern?";
        }
        
        // Return random response from array
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Function to scroll to bottom of chat
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Add typing indicator styles
    const style = document.createElement('style');
    style.textContent = `
        .typing-indicator p {
            display: flex;
            align-items: center;
            height: 20px;
        }
        
        .typing-indicator span {
            height: 8px;
            width: 8px;
            margin: 0 1px;
            background-color: #888;
            border-radius: 50%;
            display: inline-block;
            animation: bounce 1.3s linear infinite;
        }
        
        .typing-indicator span:nth-child(2) {
            animation-delay: 0.15s;
        }
        
        .typing-indicator span:nth-child(3) {
            animation-delay: 0.3s;
        }
        
        @keyframes bounce {
            0%, 60%, 100% {
                transform: translateY(0);
            }
            30% {
                transform: translateY(-4px);
            }
        }
    `;
    document.head.appendChild(style);
});