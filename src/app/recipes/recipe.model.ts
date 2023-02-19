export class Recipe {
    // model the recipe object
    public name: string;
    public description: string;
    public imagePath: string;

    // constructor build object
    constructor(name: string, descripton: string, imagePath: string){
        this.name = name;
        this.description = descripton;
        this.imagePath = imagePath;
    }
}