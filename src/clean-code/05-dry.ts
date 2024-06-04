type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(public name: string = '', public price: number = 0, public size: Size = '') {

    }

    isProductReady(): boolean {
        for(const key in this){
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw new Error(`The ${key} is Empty`);
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw new Error(`The ${key} is zero`);
                    break;           
                default:
                    throw new Error(`The ${typeof this[key]} is not valid`);
            }
        }
        return true;        
    }

    toString() {
        if (!this.isProductReady) return;
        return `${this.name} (${this.price}), ${this.size }`;
    }
}

(() => {
    const bluePants = new Product('Blue large pants', 20, 'S');
    console.log(bluePants.toString());
})();