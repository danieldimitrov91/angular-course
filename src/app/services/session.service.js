sessionService.$inject = ['$timeout', 'ProfileService', 'SESSION_TIME', '$injector'];

function sessionService($timeout, ProfileService, SESSION_TIME, $injector) {

    var sessionTimer = null,
        sessionFlag = false;

    this.setSession = setSession;
    this.startSessionCheck = startSessionCheck;

    function setSession(isActive) {
        sessionFlag = isActive;

        if (isActive) {
            $timeout.cancel(sessionTimer);
            startSessionCheck();
        }
    }
    
    function startSessionCheck() {

        sessionTimer = $timeout(function checkActivity() {

            if (sessionFlag && ProfileService.isLoggedIn()) {
                setSession(false);
                startSessionCheck();
            } else {
                endSession();
            }
        }, SESSION_TIME);
    }

    function endSession() {
        var stateService = $injector.get('$state');
        ProfileService.logoutUser();
        stateService.go('app.client.login');

    }
}

export default sessionService;