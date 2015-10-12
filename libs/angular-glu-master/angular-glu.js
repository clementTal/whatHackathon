var scripts = document.getElementsByTagName("script")
var currentScriptPath = scripts[scripts.length-1].src;

angular.module('glu', ['ngRoute'])
    .directive('gluButton', function() {
        return {
            restrict: 'AEC',
            scope: {
                classes: '=',
                text: '=',
                click: '='
            },
            templateUrl: currentScriptPath.replace('angular-glu.js', 'templates/glu_button.html'),
            link: function (scope, element) {
                var buttons = element[0].getElementsByClassName('button');
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].addEventListener('click', function(event){
                        var clickedElm = this;
                        clickedElm.classList.add('clicked');
                        window.setTimeout(function(){
                            clickedElm.classList.remove('clicked');
                            if (scope.click) {
                                scope.click();
                            }
                        }, 300);
                    }, true)
                }
            }
        };
    })
    .directive('gluRound', function() {
            return {
                restrict: 'AEC',
                scope: {
                    classes: '=',
                    icons: '=',
                    click: '='
                },
                templateUrl: currentScriptPath.replace('angular-glu.js', 'templates/glu_round.html'),
                link: function (scope, element) {
                    var round = element[0].getElementsByClassName('round');
                    for (var i = 0; i < round.length; i++) {
                        round[i].addEventListener('click', function(event){
                            var clickedElm = this;
                            clickedElm.classList.add('clicked');
                            window.setTimeout(function(){
                                clickedElm.classList.remove('clicked');
                                if (scope.click) {
                                    scope.click();
                                }
                            }, 300);
                        }, true)
                    }
                }
            };
    })
    .directive('gluSymbs', function() {
            return {
                restrict: 'AEC',
                scope: {
                    classes: '=',
                    icons: '=',
                    click: '='
                },
                templateUrl: currentScriptPath.replace('angular-glu.js', 'templates/glu_symbs.html'),
                link: function (scope, element) {
                    var symbs = element[0].getElementsByClassName('symbs');
                    for (var i = 0; i < symbs.length; i++) {
                        symbs[i].addEventListener('click', function(event){
                            var clickedElm = this;
                            clickedElm.classList.add('clicked');
                            window.setTimeout(function(){
                                clickedElm.classList.remove('clicked');
                                if (scope.click) {
                                    scope.click();
                                }
                            }, 300);
                        }, true)
                    }
                }
            };
    });