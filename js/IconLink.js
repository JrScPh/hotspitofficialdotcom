export class IconLink {
    constructor(container, data) {
        const template = document.getElementById("icon-link-template");
        const clone = template.content.cloneNode(true);
        this.link = clone.querySelector("a");
        this.img = clone.querySelector("img");
        this.link.href = data.url;
        this.link.setAttribute("aria-label", data.name);
        this.img.src = data.src;
        this.img.alt = data.name;
        container.appendChild(clone);
    }
}
