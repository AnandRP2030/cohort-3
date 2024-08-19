class Rectangle {
    constructor(height, width, border, bgColor, textColor) {
        this.height = height;
        this.width = width;
        this.border = border;
        this.bgColor = bgColor;
        this.textColor = textColor;
        this.active = true;
    }
    area = () => {
        const area = this.width * this.height
        console.log("this", this)
        return area
    }
    
}
const box1 = new Rectangle(4, 65, 2, "Red", "white");
const box2 = new Rectangle(4, 5, 5, "green", "white");
console.log("box1,", box1)
console.log(box1.area())
