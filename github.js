class Github {
    constructor() {
        this.client_id = '1c8196328edbff5a5291';
        this.client_secret = 'f6fac4a46d80c2c56f999b155cf5e54054c04d75';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        const repoData = await repoResponse.json();

        return{
            //return json data object
            //profile: profile => profile (for json data, if the same, just one)
            profile: profileData,
            repos: repoData
        }
    }
}
