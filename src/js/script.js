// 3 ways to export data:
export let one = 1;

let two = 2;
export {two};

//// just named functions could be exported
export function sayHello(name) {
    console.log(`${name}, I was exported!`);
}