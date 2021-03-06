import GetData from './GetData.js';
export default class Slider {
    constructor () {
        this.sliderSection = null;
        this.slider = null;
        this.leftArrow = null;
        this.rightArrow = null;
    }

    createSliderSection () {
        const sliderSection  = document.createElement("section");
        sliderSection.classList.add("slider-section");
        this.sliderSection = sliderSection;
        return sliderSection;
    }

    createSlider () {
        const slider = document.createElement("div");
            slider.classList.add("slider-conteiner");
            this.slider = slider;
            this.sliderSection.append(slider);
            this.createSliderButtons ();
            this.createSliderElements ();
            this.createSliderPlusButton ();
            this.moveSlider ();
    }

    createSliderButtons () {
        const leftArrow = this.createButtonElement("slider__left-button");
            this.leftArrow = leftArrow;
            this.slider.before(leftArrow);
        const rightArrow = this.createButtonElement("slider__right-arrow");
            this.rightArrow = rightArrow;
            this.slider.after(rightArrow);
    }

    createSliderPlusButton () {
        const plusButton = this.createButtonElement("slider__plus-button");
            plusButton.innerText = "+";
            this.slider.after(plusButton);
    }

    createButtonElement (className) {
        const button = document.createElement("button");
        button.classList.add(className, "slider__button");
        return button;
    }

    createSliderElements () {
        const data = new GetData().getData();
        let img;
        data.then((data)=>{
            const friends = data.friends;
            friends.forEach(element => {
                img = element.img;
                this.createSliderIcon (img);
            });
            if(friends.length < 5) {
                img = "src/images/icons/default.png";
                let i = 5;
                while(i < 10){
                    this.createSliderIcon (img);
                    i++;
                }
            }
        }); 
    }

    createSliderIcon (img) {
        const sliderElement = document.createElement("div");
        sliderElement.classList.add("slider-element");
        const image = new Image(30, 35);
        image.classList.add("slider-icon");
        image.src = img;
        sliderElement.append(image);
        this.slider.append(sliderElement);
    };
    

    moveSlider () {
        let shift = 0;
        const sliderElements = this.slider.childNodes;
        this.leftArrow.addEventListener("click", (e)=>{
            shift -= 53;
            sliderElements.forEach((element)=>{
                element.style.transform = `translateX(${shift}px)`;
            });
        });
        this.rightArrow.addEventListener("click", ()=>{
            shift += 53;
            sliderElements.forEach((element)=>{
                element.style.transform = `translateX(${shift}px)`;
            });
        });
    }

}