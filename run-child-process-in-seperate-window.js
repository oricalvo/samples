const {spawn} = require("child_process");

console.log("Before");

const process = spawn("yarn",[],{
    stdio: 'inherit',
    shell: true,
    detached: true,
});

process.on("close", function() {
    console.log("Done");
});

console.log("After");
