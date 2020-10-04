class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-mb-3">
                        <img class="img-fluid mb-2 w-50" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-items">Company: ${user.company}</li>
                            <li class="list-group-items">Website/Blog: ${user.blog}</li>
                            <li class="list-group-items">Location: ${user.location}</li>
                            <li class="list-group-items">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
            `;
    }

    showRepos(repos) {
        let output = '';

        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
                        <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                    </div>
                </div>
            </div>
            `;
        })

        document.getElementById('repos').innerHTML = output;
    }

    showAlert(message, className) {
        //clear additional alerts
        this.clearAlert();
        //create div
        const div = document.createElement('div');
        //add classes
        div.className = className;
        //add text
        div.append(document.createTextNode(message));
        //get parent
        const container = document.querySelector('.searchContainer');
        //get search box
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div, search);

        //timeout after 3 secs
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    //clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}