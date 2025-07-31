# AI Chatbot Interface

A customizable AI chatbot interface built with HTML, CSS, and JavaScript. This project provides a clean, responsive UI for implementing an AI assistant for various domains such as customer service, education, tech support, mental wellness, and more.

## Features

- Modern, responsive design that works on desktop and mobile devices
- Clean user interface with intuitive chat experience
- Customizable bot configuration (domain, tone, available tools)
- Message history with scrollable chat container
- Clear chat functionality
- Auto-resizing text input
- Typing indicator animation
- Simple message handling system

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start chatting with the AI assistant

## Customization

### Changing the Bot Configuration

Edit the `botConfig` object in `script.js` to customize your chatbot:

```javascript
const botConfig = {
    name: 'AI Assistant',
    domain: 'customer service', // Change this to match your domain
    tone: 'friendly', // Change this to match your preferred tone
    tools: ['company FAQ', 'product manuals'] // Change this to match your available tools
};
```

### Modifying the Response Logic

The current implementation uses a simple array of predefined responses. In a production environment, you would replace the `getBotResponse()` function with a call to an actual AI service API.

To modify the response logic, edit the `getBotResponse()` function in `script.js`.

### Styling

The appearance of the chatbot can be customized by editing the `styles.css` file. The main color scheme is defined by:

- Primary color: `#4a6fa5` (blue)
- Background color: `#f5f7fb` (light gray)
- User message background: `#4a6fa5` (blue)
- Bot message background: `#f0f2f5` (light gray)

## Integration with AI Services

To connect this interface with an actual AI service:

1. Replace the `getBotResponse()` function with API calls to your preferred AI service
2. Add authentication as required by your AI service
3. Process the AI response and display it in the chat interface

## License

This project is available for personal and commercial use. Feel free to modify and adapt it to your needs.

## Credits

- Font Awesome for icons
- Google Fonts for typography