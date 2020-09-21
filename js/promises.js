
function gitUserLastCommit() {
    fetch('https://api.github.com/users/coryholley/events', {headers: {'Authorization': 'GITHUB_API_KEY'}})
        .then(result => result.json())
        .then(data => console.log(data[0].created_at))
}
gitUserLastCommit()


let getLastCommit = (username) => {
    let url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': `token ${GITHUB_API_KEY}`}})
        .then(response => response.json())
        .then(events => events.filter(event => event.type === "PushEvent"))
        .then(pushEvent => console.log(pushEvent[0].created_at))
}

getLastCommit("coryholley")



function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resolve) {
                return resolve(`You'll see this after ${num} ms`);
            } else {
                return reject('Network Connection Error!');
            }
        }, num);
    });
}

console.log(wait()); // pending promise

wait(1000).then((message) => console.log(message))
wait(3000).then((message) => console.log(message))