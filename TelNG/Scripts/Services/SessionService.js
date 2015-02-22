var SessionService = function ($cookies) {
    this.token = undefined;
    this.userName = undefined;

    this.getToken = function () {
        if(!$cookies.awesomeAngularWebAppToken){
            if(!this.token){
                return undefined;
            }
            this.setToken(this.token);
        }

        return $cookies.awesomeAngularWebAppToken;
    }

    this.getUserName = function () {
        if (!$cookies.awesomeAngularWebAppUserName) {
            if (!this.userName) {
                return undefined;
            }
            this.setUserName(this.userName);
        }

        return $cookies.awesomeAngularWebAppUserName;
    }

    this.setToken = function (token) {
        this.token = token;
        $cookies.awesomeAngularWebAppToken = token;
    }

    this.setUserName = function (userName) {
        this.userName = userName;
        $cookies.awesomeAngularWebAppUserName = userName;
    }

    this.apiUrl = 'http://localhost:64589';


}

SessionService.$inject = ['$cookies'];