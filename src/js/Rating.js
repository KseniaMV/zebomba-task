import GetData from './GetData.js';
export default class Rating {
    constructor (root) {
        this.root = root;
        this.ratingButton = null;
        this.ratingWindow = null;
        this.ratingConteiner = null;
    }

    createRatingButton () {
        const ratingButton = document.createElement("button");
        ratingButton.classList.add("rating-button");
        const image = new Image(68, 50);
        image.src = "src/images/icons/rating.png";
        image.classList.add("rating-button__image");
        ratingButton.append(image);
        this.ratingButton = ratingButton;
        this.openRating ();
        return ratingButton;
    }

    openRating () {
        this.ratingButton.addEventListener("click", () => {
            if(this.ratingWindow === null){
                this.createRatingWindow ();
                this.createRatingConteiner ();
                this.createRatingList ();
                this.createRatingItem ();
                this.createCloseButton ();
                this.createFilter ();
            }
        });
    }

    createRatingWindow () {
        const ratingWindow = document.createElement("article");
            ratingWindow.classList.add("rating__window");
        this.ratingWindow = ratingWindow;
        const title = document.createElement("h2");
            title.classList.add("rating__title");
            title.innerText = "Рейтинг игроков";
        this.ratingWindow.append(title);
        this.root.append(ratingWindow);
    }

    createRatingConteiner () {
        const ratingConteiner = document.createElement("ul");
            ratingConteiner.classList.add("rating__conteiner");
        const subTitle = document.createElement("div");
            subTitle.classList.add("rating__subTitle");
        const place = document.createElement("p");
            place.classList.add("subTitle__place");
            place.innerText = "Место";
        const userName = document.createElement("p");
            userName.classList.add("subTitle__iserName");
            userName.innerText = "Имя Фамилия";
        const points = document.createElement("p");
            points.classList.add("subTitle__point");
            points.innerText = "Опыт";
        ratingConteiner.append(subTitle);
        subTitle.append(place);
        place.after(userName);
        userName.after(points);
        this.ratingConteiner = ratingConteiner;
        this.ratingWindow.append(ratingConteiner);

    }

    createRatingList () {
        const data = new GetData().getData();
        data.then((data)=>{
            const rating = data.rating;
            const friends = data.friends.map((item)=> item.id);
            const sortRating = rating.slice(0);
            sortRating.sort(function(a,b) {
                return b.points - a.points;
            });
            for (const key in sortRating) {
                const item = this.createRatingItem (Number(key)+1, sortRating[key].name, sortRating[key].lastName, sortRating[key].img, sortRating[key].points);
                this.ratingConteiner.append(item);
                friends.forEach(element => {
                    if(sortRating[key].id === element){
                        item.classList.add("friend--inRating");
                    }
                });
            }
        }); 
    }

    createRatingItem (key, firstName, lastName, img, points) {
        const ratingItem = document.createElement("li");
            ratingItem.classList.add("rating__item");
        const itemPlace = this.createItemSpan ("item__place", key);
        const itemIcon = document.createElement("div");
            itemIcon.classList.add("item__image");
        const itemImage = new Image(20, 20);
            itemImage.src = img;
            itemIcon.append(itemImage);
        const itemName = this.createItemSpan ("item__name", `${firstName} ${lastName}`);
        const itemPoints =  this.createItemSpan ("item__points", points);
        ratingItem.append(itemPlace);
        itemPlace.after(itemIcon);
        itemIcon.after(itemName);
        itemName.after(itemPoints);
        return ratingItem;
    }

    createItemSpan (className, text) {
        const span  = document.createElement("span");
        span.classList.add(className);
        span.innerText = text;
        return span;
    }

    createCloseButton () {
        const closeButton = document.createElement("button");
        closeButton.classList.add("close-button", "rating__close-button");
        this.ratingWindow.append(closeButton);
        closeButton.innerText = "x";
        closeButton.addEventListener("click", ()=>{
            this.ratingWindow.remove();
            this.ratingWindow = null;
        });
    }

    createFilter() {
        const filterWeek = this.createFilterButtons("rating__filter-week", "Недельный");
        const filterCommon = this.createFilterButtons("rating__filter-common", "Общий")
        this.ratingConteiner.before(filterWeek);
        this.ratingConteiner.before(filterCommon);
    }

    createFilterButtons (className, text) {
        const button = document.createElement("div");
        button.classList.add(className);
        button.innerText = text;
        return button;
    }
}