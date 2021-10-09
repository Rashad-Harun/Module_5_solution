
// responsible of user's data handeling ...
(()=> {
    'use strict';
    angular.module('public')
    .service('userInfoService', userInfoService)


    // userInfoService.$inject = ['']
    function userInfoService(){
        let service = this;
        // let userInformation = [];
        let userInformation;

        service.collectUserInfo = function(userObj){
            userInformation = [];
            let user = {
                fName: userObj.fName,
                lName: userObj.lName,
                uEmail: userObj.uEmail,
                uPhone: userObj.uPhone,
                uFavDish: userObj.uFavDish
            }
            userInformation = user;
        }
        
        service.getUserInfo = function(){
            return userInformation
        }
    }


})();
