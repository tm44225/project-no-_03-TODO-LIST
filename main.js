#! /usr/bin/env node 
import inquirer from "inquirer";
let todolist = [];
let condition = true;
console.log("\n \t welcome to code with mahnoor - TODO List Application\n");
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task"
        }
    ]);
    todolist.push(addTask.task);
    console.log(`${addTask.task} task added in todo list successfully`);
    let addmoretask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task ?",
            default: "False"
        }
    ]);
    condition = addmoretask.addmore;
}
console.log("your updated todo list", todolist);
