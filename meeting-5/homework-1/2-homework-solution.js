console.log("Start");

const usersDB = {
    "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
    "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
    "user3@hw.js": [],
};


function loginUser(email, password, callback, errorCallBack) {
    setTimeout(() => {
        if (usersDB[email] != undefined) {
            console.log(`Now we have the data of user: ${email}`);
            let user = { userEmail: email };
            callback(user, videoDetails, displayError);
        } else {
            errorCallBack("User not found!");
        }

    }, 3000);
}

function getUserVideos(email, callback, errorCallBack) {
    setTimeout(() => {
        console.log("user:", email);
        if (usersDB[email.userEmail].length != 0) {
            callback(email.userEmail, getPassedUsersFirstVideoTitle, displayError);
        } else {
            errorCallBack("Videos not found!");
        }

    }, 2000);
}


function videoDetails(video, callback, errorCallBack) {
    setTimeout(() => {
        console.log(`videos:`, usersDB[video]);
        if (usersDB[video][0].title != undefined) {
            callback(usersDB[video]);
        } else {
            errorCallBack("Video Title not found!");
        }
    }, 2000);
}


const getPassedUsersFirstVideoTitle = (user) => {
    if (typeof (user) != "string") {
        console.log(user[0]);
    } else {
        loginUser(user, "1234", getUserVideos, displayError);
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
