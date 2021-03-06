export default class Mail {
    createMailButton () {
        const mailButton = document.createElement("button");
            mailButton.classList.add("mail-button");
        const image = new Image(50, 32);
            image.src = "src/images/icons/mail.png";
            image.classList.add("mail-button__image");
            mailButton.append(image);
        return mailButton;
    }
}

