function MainCtrl($scope, $location) {
    $scope.navigate = function(url)
    {
        $location.path(url);
    };
}