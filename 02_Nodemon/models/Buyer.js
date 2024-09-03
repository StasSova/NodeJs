export default class Buyer{
    #_name;
    #_email;

    constructor(name, email) {
        this.#_name = name;
        this.#_email = email;
    }
    get name() {
        return this.#_name;
    }
    get email() {
        return this.#_email;
    }

    notify(message) {
        console.log(`Notification to ${this.name} (${this.email}): ${message}`);
    }
}