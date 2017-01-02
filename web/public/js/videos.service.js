//------------------------------------------------------------------------------
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//------------------------------------------------------------------------------
(function () {
  function VideosService($http, $q) {
    console.log("Initializing VideosService...");

    return {
      all: function () {
        var deferred = $q.defer();
        $http.get("/api/videos").success(function (data) {
          deferred.resolve(data);
        }).error(function () {
          deferred.reject();
        });
        return deferred.promise;
      },
      get: function (videoId) {
        var deferred = $q.defer();
        $http.get("/api/videos/" + encodeURIComponent(videoId)).success(function (data) {
          deferred.resolve(data);
        }).error(function () {
          deferred.reject();
        });
        return deferred.promise;
      },
      images: function (videoId) {
        var deferred = $q.defer();
        $http.get("/api/videos/" + encodeURIComponent(videoId) + "/images").success(function (data) {
          deferred.resolve(data);
        }).error(function () {
          deferred.reject();
        });
        return deferred.promise;
      },
      summary: function (videoId) {
        var deferred = $q.defer();
        $http.get("/api/videos/" + encodeURIComponent(videoId) + "/summary").success(function (data) {
          deferred.resolve(data);
        }).error(function () {
          deferred.reject();
        });
        return deferred.promise;
      },
      reset: function (videoId) {
        var deferred = $q.defer();
        $http.get("/api/videos/" + encodeURIComponent(videoId) + "/reset").success(function (data) {
          deferred.resolve(data);
        }).error(function () {
          deferred.reject();
        });
        return deferred.promise;
      },
      resetImages: function (videoId) {
        var deferred = $q.defer();
        $http.get("/api/videos/" + encodeURIComponent(videoId) + "/reset-images").success(function (data) {
          deferred.resolve(data);
        }).error(function () {
          deferred.reject();
        });
        return deferred.promise;
      }
    };
  }

  angular.module('app')
    .service('VideosService', ['$http', '$q', VideosService]);
}());
