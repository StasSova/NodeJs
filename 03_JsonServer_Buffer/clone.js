const user = {
    name: "Alex",
    age: 18,
    hobby: ["basketball", "videogame"],
    address: {
        street: "Sadova",
        house: 3,
    }
}
const user2 = {... user}
const user3 = structuredClone(user)

user.address.street = "Kuznecova"
user.hobby = ["football"]
user.name = "Oleg"

console.log(user)
console.log(user2)
console.log(user3)