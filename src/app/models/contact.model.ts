export class Contact {

    constructor(public _id?: string, public name: string = '', public email: string = '', public phone: string = '') {

    }

    setId?() {
        // Implement your own set Id
        this._id = 'hkjgbjhb '

    }
    // get contactName?(){
    //     return this.name
    // }

    // set contactName?(name: string){
    //     this.name = name
    // }
}