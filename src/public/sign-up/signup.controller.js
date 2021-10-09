
(()=> {
    'use strict';
    angular.module('public')
    .controller('signUpController', SignUpController)


    SignUpController.$inject = ['MenuService', 'userInfoService', '$timeout']
    function SignUpController(MenuService, userInfoService, $timeout){
        let ctrl = this;

        ctrl.user = {fName: '', lName: '', uEmail: '', uPhone: '', uFavDish: []}
        ctrl.reset = false;
        ctrl.favDish = ''; 
        ctrl.message = false;
        ctrl.successSub;

        ctrl.checkFavDish = function (shortName) {
            // converting the string to upper
            // then retrieving the letters only ¯\_(ツ)_/¯

            var mainShortName = shortName.toUpperCase();
            var shortN = mainShortName.replace(/[0-9]/g, '');
            MenuService.getMenuItems(shortN).then(response => {

                for (let i = 0; i < response.menu_items.length; i++) {
                    if(response.menu_items[i].short_name === mainShortName){
                        ctrl.message = false;
                        ctrl.user.uFavDish.push(response.menu_items[i])
                        break;
                    } else{ ctrl.message = true; }   
                }
            })
        }

        ctrl.submit = function(){
            // sending the user information objet to the service
            // so it can expose it in the myInfo page

            userInfoService.collectUserInfo(ctrl.user)
            ctrl.successSub = true;
            $timeout(function(){
                ctrl.successSub = false;
            }, 3000)
            ctrl.user = []
            ctrl.favDish = '';
            ctrl.reset = true;
        }
    }
})();