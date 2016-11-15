LogoutSuccessController.$inject = ['$state', 'ProfileService'];

function LogoutSuccessController($state, ProfileService) {

    activate();

    function activate() {
        console.log('LogoutSuccessController');
        ProfileService.logoutUser();
    }

    // $state.go('app.admin.logout-success');
}


export default LogoutSuccessController;