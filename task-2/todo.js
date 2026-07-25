import promptSync from 'prompt-sync';
const prompt = (promptSync)();
let items = [];
const addItem = () => {
    let item = {
        title: prompt("Enter your todo title: "),
    };
    items.push(item);
};
const removeItem = () => {
    const title = prompt("Enter item title to delete an itme: ");
    items = items.filter(i => i.title !== title);
};
const displayItems = () => {
    console.log("|---------Your To Do Items-----------");
    items.forEach((item, index) => {
        console.log("|  ", index + 1, item.title);
    });
    console.log("|_____________________________________");
};
let running = true;
while (running) {
    console.log("------Menu----------");
    console.log("1, Add Todo Item");
    console.log("2, Remove Todo Item");
    console.log("3, Display All Items");
    console.log("0, Exit ");
    console.log("_____________________");
    const opt = Number(prompt("Enter you choice: "));
    switch (opt) {
        case 1:
            addItem();
            break;
        case 2:
            removeItem();
            break;
        case 3:
            displayItems();
            break;
        case 0:
            running = false;
            break;
        default:
            console.log("enter valid option!");
    }
}
//# sourceMappingURL=todo.js.map