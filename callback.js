// Convert callback-based functions to return Promises
function step1(value) {
    return new Promise((resolve, reject) => {
        resolve(value + 10);
    });
}

function step2(value) {
    return new Promise((resolve, reject) => {
        resolve(value + 10);
    });
}

function step3(value) {
    return new Promise((resolve, reject) => {
        resolve(value + 10);
    });
}

// Async function to chain the steps
async function runSteps() {
    try {
        let result = await step1(5); // Start with an initial value of 5
        console.log('Result after step1:', result);

        result = await step2(result);
        console.log('Result after step2:', result);

        result = await step3(result);
        console.log('Result after step3:', result);
    } catch (err) {
        console.error('Error occurred:', err);
    }
}

runSteps();
