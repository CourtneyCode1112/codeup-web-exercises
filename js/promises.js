
function gitUserLastPush() {
    fetch('https://api.github.com/users/coryholley/events', {headers: {'Authorization': 'GITHUB_API_KEY'}})
        .then(result => result.json())
        .then(data => console.log(data[0].created_at))
}
gitUserLastPush()

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resolve) {
                return resolve(num);
            } else {
                return reject('Network Connection Error!');
            }
        }, num);
    });
}

console.log(wait()); // pending promise

wait(1000).then((num) => console.log(`You\'ll see this after ${num} ms`));
wait(3000).then((num) => console.log(`You\'ll see this after ${num} ms`));