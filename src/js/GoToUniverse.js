export default class GoToUniversity {
    createButton () {
        const button = document.createElement("button");
        button.classList.add("university-button");
        button.innerText = "В универ";
        return button;
    }
}