/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions/common.ts":
/*!*********************************!*\
  !*** ./src/functions/common.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.splitArrayIntoChunks = function (array, chunkSize) {\n    if (!chunkSize || chunkSize === '0') {\n        return [array];\n    }\n    var thisChunk = array.slice(0, chunkSize);\n    var remainder = array.slice(chunkSize);\n    if (!remainder || remainder.length === 0) {\n        return [thisChunk];\n    }\n    return [thisChunk].concat(exports.splitArrayIntoChunks(remainder, chunkSize));\n};\n\n\n//# sourceURL=webpack:///./src/functions/common.ts?");

/***/ }),

/***/ "./src/functions/gameInfo.ts":
/*!***********************************!*\
  !*** ./src/functions/gameInfo.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar common_1 = __webpack_require__(/*! ./common */ \"./src/functions/common.ts\");\nexports.containsCollectionsIds = function (game, gameCollectionIds) {\n    if (!gameCollectionIds ||\n        gameCollectionIds.length < 1 ||\n        (gameCollectionIds.length === 1 && gameCollectionIds[0] === '')) {\n        return true;\n    }\n    if (!game.gameCollectionIds || game.gameCollectionIds.length < 1) {\n        return false;\n    }\n    var containsAllFilteredCollectionIds = true;\n    gameCollectionIds.split(',').forEach(function (filterCollectionId) {\n        if (!game.gameCollectionIds\n            .map(function (collectionId) { return collectionId.toLowerCase(); })\n            .includes(filterCollectionId.toLowerCase())) {\n            containsAllFilteredCollectionIds = false;\n        }\n    });\n    return containsAllFilteredCollectionIds;\n};\nexports.filterGameInfo = function (games, filter) {\n    if (!filter) {\n        return games;\n    }\n    var gameProvider = filter.gameProvider, gameCollectionId = filter.gameCollectionId, page = filter.page, pageSize = filter.pageSize;\n    var filteredGames = games.filter(function (game) {\n        if (gameProvider &&\n            game.gameProvider.toLowerCase() !== gameProvider.toLowerCase()) {\n            return false;\n        }\n        return exports.containsCollectionsIds(game, gameCollectionId);\n    });\n    if (!page) {\n        return common_1.splitArrayIntoChunks(filteredGames, pageSize)[0];\n    }\n    return common_1.splitArrayIntoChunks(filteredGames, pageSize)[page];\n};\n\n\n//# sourceURL=webpack:///./src/functions/gameInfo.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar JsonDataService_1 = __webpack_require__(/*! ./services/JsonDataService */ \"./src/services/JsonDataService.ts\");\nvar api_1 = __webpack_require__(/*! ./services/api */ \"./src/services/api.ts\");\nvar app = express();\nvar PORT = 3001;\nvar dataService = new JsonDataService_1.JsonDataService();\nvar api = new api_1[\"default\"](dataService);\napp.get('/', function (req, res) {\n    res.send({\n        message: 'hello world',\n    });\n});\n// Lobby service\napp.get('/game-info', function (req, res) {\n    var _a = req.query, gameProvider = _a.gameProvider, gameCollectionId = _a.gameCollectionId, page = _a.page, pageSize = _a.pageSize;\n    api\n        .getAllGamesData({ gameProvider: gameProvider, gameCollectionId: gameCollectionId, page: page, pageSize: pageSize })\n        .then(function (gamesData) {\n        res.send(gamesData);\n    })[\"catch\"](function (error) {\n        console.log(error.message);\n        res.status(404).send();\n    });\n});\napp.get('/game-info/:gameId', function (req, res) {\n    api\n        .getGameData(req.params.gameId)\n        .then(function (gamesData) {\n        res.send(gamesData);\n    })[\"catch\"](function (error) {\n        res.status(404).send(error.message);\n    });\n});\napp.listen(PORT, function () {\n    console.log('server started at http://localhost:' + PORT);\n});\nexports[\"default\"] = app;\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/services/JsonDataService.ts":
/*!*****************************************!*\
  !*** ./src/services/JsonDataService.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar fs_1 = __webpack_require__(/*! fs */ \"fs\");\nvar gameInfo_1 = __webpack_require__(/*! ../functions/gameInfo */ \"./src/functions/gameInfo.ts\");\nfunction jsonFileReader(file) {\n    return new Promise(function (resolve, reject) {\n        fs_1.readFile(file, 'utf8', function (err, data) {\n            if (err) {\n                reject(err);\n            }\n            resolve(JSON.parse(data));\n        });\n    });\n}\nexports.fileReaderFunctionsFactory = function (fileReader) {\n    var getAllGamesData = function (filterData) {\n        return fileReader('data/all-games.json').then(function (data) {\n            return gameInfo_1.filterGameInfo(data, filterData);\n        });\n    };\n    var getGameData = function (gameId) {\n        return fileReader('data/all-games.json').then(function (data) {\n            var gameInfo = data.find(function (game) {\n                return game.id === gameId;\n            });\n            if (gameInfo) {\n                return gameInfo;\n            }\n            throw new Error(\"Game with id: \" + gameId + \" not found\");\n        });\n    };\n    return { getAllGamesData: getAllGamesData, getGameData: getGameData };\n};\nvar JsonDataService = /** @class */ (function () {\n    function JsonDataService() {\n        this.fileReaderFunctions = exports.fileReaderFunctionsFactory(jsonFileReader);\n    }\n    JsonDataService.prototype.getAllGamesData = function (filter) {\n        return this.fileReaderFunctions.getAllGamesData(filter);\n    };\n    JsonDataService.prototype.getGameData = function (gameId) {\n        return this.fileReaderFunctions.getGameData(gameId);\n    };\n    return JsonDataService;\n}());\nexports.JsonDataService = JsonDataService;\n\n\n//# sourceURL=webpack:///./src/services/JsonDataService.ts?");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\n// ToDo gör om till en Express.Router() ??\nvar Api = /** @class */ (function () {\n    function Api(dataService) {\n        this.dataService = dataService;\n    }\n    Api.prototype.getAllGamesData = function (filter) {\n        return this.dataService.getAllGamesData(filter);\n    };\n    Api.prototype.getGameData = function (gameId) {\n        return this.dataService.getGameData(gameId);\n    };\n    return Api;\n}());\nexports[\"default\"] = Api;\n\n\n//# sourceURL=webpack:///./src/services/api.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ })

/******/ });