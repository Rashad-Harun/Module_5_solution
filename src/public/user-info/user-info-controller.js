
(()=> {
    'use strict';
    angular.module('public')
    .controller('userInfoController', userInfoController)


    userInfoController.$inject = ['userInfoService', 'ApiPath']
    function userInfoController(userInfoService, ApiPath){
        let ctrl = this;
        ctrl.showMessage;
        ctrl.basePath = ApiPath;

        ctrl.$onInit = function(){
            ctrl.userInfo = userInfoService.getUserInfo()
            if(ctrl.userInfo){
                ctrl.showMessage = false;
            }
            else{
                ctrl.showMessage = true;
            }
        }

    } 
})();