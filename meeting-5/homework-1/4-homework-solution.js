console.log("Start");

const usersDB = {
    "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
    "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
    "user3@hw.js": [],
};


function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usersDB[email] != undefined) {
                console.log(`Now we have the data of user: ${email}`);
                let user = { userEmail: email };
                resolve(user);
            } else {
                reject("User not found!");
            }

        }, 3000)
    })
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user:", email);
            if (usersDB[email.userEmail].length != 0) {
                resolve(email.userEmail);
            } else {
                reject("Videos not found!");
            }
        }, 2000)
    })
}


function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(video)
            console.log(`videos:`, usersDB[video]);
            if (usersDB[video][0].title != undefined) {
                resolve(usersDB[video]);
            } else {
                reject("Video Title not found!");
            }
        }, 2000)
    })
}


const getPassedUsersFirstVideoTitle = async (user) => {
    if (typeof (user) != "string") {
        console.log(`title: ${user[0].title}`);
    } else {
        try {
            let arg = await loginUser(user)
            arg = await getUserVideos(arg)
            arg = await videoDetails(arg)
            arg = await getPassedUsersFirstVideoTitle(arg)
        } catch (err) {
            displayError(err)
        }
    }
}
function displayError(errorMessage) {
    console.error(new Error(errorMessage));
}

console.log("Finish");



// getPassedUsersFirstVideoTitle("user4@hw.js");
// getPassedUsersFirstVideoTitle("user3@hw.js");
// getPassedUsersFirstVideoTitle("user2@hw.js");
// getPassedUsersFirstVideoTitle("user1@hw.js");
