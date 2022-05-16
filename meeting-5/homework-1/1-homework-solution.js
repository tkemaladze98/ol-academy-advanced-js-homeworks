console.log("Start");

const usersDB = {
    "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
    "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
    "user3@hw.js": [],
};


function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log(`Now we have the data of user: ${email}`);
        let user = { userEmail: email };
        callback(user);
    }, 3000);
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        // console.log("user:", email);
        callback(email.userEmail);
    }, 2000);
}


function videoDetails(video, callback) {
    setTimeout(() => {
        // console.log(`videos:`, usersDB[video]);
        callback(usersDB[video]);
    }, 2000);
}


const getPassedUsersFirstVideoTitle = (user) => {
    // if (typeof (user) != "string") {
    //     setTimeout(() => {
    //         console.log(`title: ${user[0].title}`);
    //     }, 2000);
    // }else {
    //     loginUser(user, "1234", getUserVideos);
    // }
    loginUser(user, "1234", (email) => {
        console.log("user:", email);
        getUserVideos(email, (video) => {
            console.log(`videos:`, usersDB[video]);
            videoDetails(video, (user) => {
                console.log(`title: ${user[0].title}`);
            })
        })
    })
}

console.log("Finish");

getPassedUsersFirstVideoTitle("user1@hw.js")