class Sound {
    constructor(name, url, click) {
        this.name = name;
        this.url = url;
        this.click = click;
    }
    name() {
        return `${this.name}`;
    }
	url() {
        return `${this.url}`;
    }
	click() {
        return `${this.click}`;
    }
    
} 