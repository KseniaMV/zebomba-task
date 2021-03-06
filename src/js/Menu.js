import Chat from './Chat.js';
import GoToUniversity from './GoToUniverse.js';
import Rating from './Rating.js';
import Slider from './Slider.js';
import Mail from './Mail.js';

export default class Menu {
    constructor (root) {
        this.root = root;
        this.menuConteiner = null;
        this.slider = null;
        this.chatButton = null;
        this.universityButton = null;
        this.mailButton  = null;
        this.ratingButton = null;
    }

    createMenuConteiner () {
        const menuConteiner = document.createElement("section");
        menuConteiner.classList.add("menu__conteiner");
        this.menuConteiner = menuConteiner;
        this.root.append(menuConteiner);
    }

    createMenuSlider () {
        const slider = new Slider();
        const sliderSection = slider.createSliderSection();
        this.slider = sliderSection;
        slider.createSlider();
        this.menuConteiner.append(sliderSection);
    }

    createChatButton () {
        const chatButton = new Chat().createChatButton();
        this.chatButton = chatButton;
        this.slider.after(chatButton);
    }

    createGoToUniverseButton () {
        const universityButton = new GoToUniversity().createButton();
        this.universityButton  = universityButton;
        this.chatButton.after(universityButton);

    }

    createMailButton () {
        const mailButton = new Mail().createMailButton();
        this.mailButton  = mailButton;
        this.universityButton.after(mailButton);
    }

    createRatingButton () {
        const ratingButton = new Rating(this.root).createRatingButton();
        this.ratingButton  = ratingButton;
        this.mailButton.after(ratingButton);
    }

    createMenu () {
        this.createMenuConteiner ()
        this.createMenuSlider ()
        this.createChatButton ()
        this.createGoToUniverseButton ()
        this.createMailButton ()
        this.createRatingButton ()
    }
}