const user = {
    name: 'Sergey',
    surname: 'Doronin',
    age: 27,
    country: "Uzbekistan",

    contact: { 
        email_one: "sergeydoronin199722",
        email_two: "serj.7007@mail.ru",

        phone: {
            home: {
                home_phone: ["+998712837696", "+998712997007", "+998717777777"]
            },

            personal: {
                personal_phone: "+998911921079"
            }
        }
    },

    car: [
        {
            name: "BMW",
            age: 2,
            country: "Germany" 
        },

        {
            name: "Lada",
            age: 1,
            country: ["Russia", "China", "Japan"]
        },

        {
            name: "Audi",
            age: 3,
            country: "Italy"
        }
    ]
}

console.log(user)
console.log(user.name)
console.log(user.country)
console.log(user.contact)
console.log(user.contact.email_one)
console.log(user.contact.phone)
console.log(user.contact.phone.personal)
console.log(user.contact.phone.home.home_phone[2])
console.log(user.car[1])
console.log(user.car[1].country[2])