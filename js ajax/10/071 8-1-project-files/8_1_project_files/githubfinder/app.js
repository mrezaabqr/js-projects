// Search input
const github = new Github();

// Init UI
const ui = new UI();


const searchUser = document.getElementById('searchUser');

// Search input event listener

searchUser.addEventListener('keyup',(e)=>{
    // Get input text
    
    const userText = e.target.value;
    
    if(userText !==''){
        // Make http call
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message==='Not Found'){
                // Show alert user not found
                ui.showAlert('User not found','alert alert-danger msg');
            }else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                ui.clearAlert();
            }
            
        })
    }else{
        ui.clearProfile();
    }
});