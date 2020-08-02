//init github (instantiating class from github.js file)
const github = new Github;
//init UI
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');

//search input event list.
searchUser.addEventListener('keyup', (e) => {
    //get inout text
    const userText = e.target.value;

    if (userText !== '') {
        //http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger');
                }
                else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }
    else {
        //clear profile
        ui.clearProfile();
    }
});
