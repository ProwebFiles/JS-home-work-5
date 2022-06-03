const users = {}
for(let i = 1; i <= 10; i++) {
    let name = prompt('Введите имя', 'Name');
    let age = +prompt('Введите Возраст', 35);
    users[i] = {
        name: name,
        age: age
    }
}
for(const key in users) {
    console.log(`Пользователь ${key}`);
    for(const newKey in users[key]){
        console.log(newKey == 'name' ? `Ваше имя ${users[key][newKey]}`: `Ваш возрост ${users[key][newKey]}`);
    }
}
console.log(users);
