export default class Chat {
    createChatButton () {
        const chatButton = document.createElement("button");
            chatButton.classList.add("chat-button");
        const image = new Image(40);
            image.src = "src/images/icons/chatIcon.png";
            image.classList.add("chat-button__image");
            chatButton.append(image);
        const text = document.createElement("p");
            text.classList.add("chat-button__text");
            text.innerText = "чат";
            chatButton.append(text);
        return chatButton;
    }
}