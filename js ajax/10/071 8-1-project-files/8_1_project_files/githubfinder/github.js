class Github {
    constructor(){
        this.client_id ='c0aee48232a2d57935d3';
        this.client_secret = '8201b9db06254cc453a1739ae645b3dbaef23188';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}