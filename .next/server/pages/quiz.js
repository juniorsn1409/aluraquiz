module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/quiz.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./db.json":
/*!*****************!*\
  !*** ./db.json ***!
  \*****************/
/*! exports provided: bg, bg2, title, description, questions, external, theme, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"bg\":\"https://images3.alphacoders.com/551/551729.jpg\",\"bg2\":\"https://images3.alphacoders.com/101/1010067.jpg\",\"title\":\"Quiz: Star Trek \",\"description\":\"Você é um verdadeiro Trekkie?\",\"questions\":[{\"image\":\"https://static.wikia.nocookie.net/explaining-errors-in-star-trek/images/d/d5/Where-no-man-has-gone-before-star-trek.jpg\",\"title\":\"Qual o nome do episódio-piloto de Jornada nas Estrelas? \",\"description\":\"que foi lançado com sucesso?\",\"answer\":1,\"alternatives\":[\"The Cage\",\"Where no Man has Gone Before\",\"Amok Time\",\"The First Duty\"]},{\"image\":\"https://i.ytimg.com/vi/A87InzywZOY/maxresdefault.jpg\",\"title\":\"Qual foi o primeiro filme da franquia a ganhar um Óscar? \",\"description\":\"\",\"answer\":0,\"alternatives\":[\"Star Trek (2009)\",\"Jornada nas Estrelas: O Filme\",\"Jornada nas Estrelas II: A Ira de Khan\",\"Jornada nas Estrelas III: À Procura de Spock \"]},{\"image\":\"https://cdn.images.express.co.uk/img/dynamic/78/590x/Spock-Five-561444.jpg\",\"title\":\"Quantos atores representaram Spock no filme Jornada nas Estrelas III: À Procura de Spock? \",\"description\":\"\",\"answer\":2,\"alternatives\":[\"Um\",\"Dois\",\"Cinco\",\"Sete\"]},{\"image\":\"https://i.pinimg.com/originals/65/48/37/654837832b1e7005a59e2202bd858eda.jpg\",\"title\":\"Qual é o local turístico onde tanto Picard como Archer passaram férias?\",\"description\":\"\",\"answer\":0,\"alternatives\":[\"Risa\",\"Romulus\",\"Terra\",\"Vulcan\"]},{\"image\":\"https://static.wikia.nocookie.net/startrek/images/f/fa/Kelvin.jpg\",\"title\":\"Como se chama a cronologia alternativa de Jornada nas Estrelas?\",\"description\":\"\",\"answer\":1,\"alternatives\":[\"Abrams\",\"Kelvin\",\"Kirk\",\"Spock\"]}],\"external\":[\"https://doctor-who-quiz.emanuelpna.vercel.app/\"],\"theme\":{\"colors\":{\"primary\":\"#bd2800\",\"secondary\":\"#34130a\",\"mainBg\":\"#eedfb4\",\"contrastText\":\"#34130a\",\"wrong\":\"#aa2e25\",\"success\":\"#00695f\"},\"borderRadius\":\"4px\"}}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if ( true && as.startsWith('/')) {
      resolvedAs = (0, _resolveRewrites.default)(addBasePath(addLocale(delBasePath((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname), this.locale)), pages, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname, this.locales);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: (0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(resolvedAs) ? delBasePath(resolvedAs) : resolvedAs, this.locales).pathname
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  if (!pages.includes((0, _normalizeLocalePath.normalizeLocalePath)(asPath, locales).pathname)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        const fsPathname = (0, _normalizeLocalePath.normalizeLocalePath)((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath), locales).pathname;

        if (pages.includes(fsPathname)) {
          asPath = fsPathname; // check if we now match a page as this means we are done
          // resolving the rewrites

          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(fsPathname);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          asPath = fsPathname;
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/quiz.js":
/*!***********************!*\
  !*** ./pages/quiz.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuizPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Link */ "./src/components/Link/index.js");
/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Widget */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/QuizLogo */ "./src/components/QuizLogo/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/QuizContainer */ "./src/components/QuizContainer/index.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _src_components_AlternativeForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/AlternativeForm */ "./src/components/AlternativeForm/index.js");
/* harmony import */ var _src_components_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/Loading */ "./src/components/Loading/index.js");
/* harmony import */ var _src_components_BlackLinkArrow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/BlackLinkArrow */ "./src/components/BlackLinkArrow/index.js");
/* harmony import */ var _src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/GitHubCorner */ "./src/components/GitHubCorner/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\pages\\quiz.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function LoadingScreen() {
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Carregando Pergunta..."), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(_src_components_Loading__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  })));
}

function ResultWidget({
  results
}) {
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].section,
    transition: {
      delay: 0.5,
      duration: 0.5
    },
    variants: {
      show: {
        opacity: 1
      },
      hidden: {
        opacity: 0
      }
    },
    initial: "hidden",
    animate: "show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_src_components_BlackLinkArrow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), " Pontua\xE7\xE3o"), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, `voce acertou `, results.filter(x => x).length, ` questoes, parabéns!`), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, results.map((result, questionIndex) => __jsx("li", {
    key: `result__${result}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "#0", questionIndex + 1, " Resultado: ", result === true ? 'Acertou' : 'Errou')))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Quizes da Galera"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, _db_json__WEBPACK_IMPORTED_MODULE_1__.external.map(linkExterno => {
    const [projectName, githubUser] = linkExterno.replace(/\//g, '').replace('https:', '').replace('.vercel.app', '').split('.');
    return __jsx("li", {
      key: linkExterno,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }
    }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Topic, {
      as: _src_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"],
      disabled: name.length === 0,
      href: `/quiz/${projectName}___${githubUser}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }, `${githubUser}/${projectName}`));
  }))), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_12__["default"], {
    projectUrl: "https://github.com/juniorsn1409/aluraquiz-startrek.git",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }));
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResults
}) {
  const [selectedAlternative, setSelectedAlternative] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx(_src_components_BlackLinkArrow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }), " ", `Pergunta ${questionIndex + 1} de ${totalQuestions}`)), __jsx("img", {
    alt: "Descri\xE7\xE3o",
    style: {
      width: '100%',
      height: '150px',
      objectFit: 'display'
    },
    src: question.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, question.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, question.description), __jsx(_src_components_AlternativeForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onSubmit: infosDoEvento => {
      infosDoEvento.preventDefault();
      setIsQuestionSubmited(true);
      setTimeout(() => {
        addResults(isCorrect);
        onSubmit();
        setIsQuestionSubmited(false);
        setSelectedAlternative(undefined);
      }, 2 * 1000);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, question.alternatives.map((alternative, alternativeIndex) => {
    const alternativeId = `alternative__${alternativeIndex}`;
    const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
    const isSelected = selectedAlternative === alternativeIndex;
    return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Topic, {
      as: "label",
      key: alternativeId,
      htmlFor: alternativeId,
      "data-selected": isSelected,
      "data-status": isQuestionSubmited && alternativeStatus,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 33
      }
    }, __jsx("input", {
      style: {
        display: 'none'
      },
      id: alternativeId,
      name: questionId,
      onChange: () => setSelectedAlternative(alternativeIndex),
      type: "radio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 37
      }
    }), alternative);
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "submit",
    disabled: !hasAlternativeSelected,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  }, "Confirmar"), isQuestionSubmited && isCorrect, isQuestionSubmited && !isCorrect)));
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
};
function QuizPage() {
  const [screenState, setScreenState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(screenStates.LOADING);
  const [results, setResults] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const totalQuestions = _db_json__WEBPACK_IMPORTED_MODULE_1__.questions.length;
  const [currentQuestion, setCurrentQuestion] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const questionIndex = currentQuestion;
  const question = _db_json__WEBPACK_IMPORTED_MODULE_1__.questions[questionIndex];

  function addResults(result) {
    //results.push(result); funciona
    setResults([...results, result]);
  } //[React chama de: Efeitos|| Effects] ciclo de estados!
  //React.useEffet
  // atualizado === WillUpdate
  //morre === willUnmount


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    //fetch()...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000); //nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_6__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_1__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 17
    }
  }), screenState === screenStates.QUIZ && __jsx(QuestionWidget, {
    question: question,
    questionIndex: questionIndex,
    totalQuestions: totalQuestions,
    onSubmit: handleSubmitQuiz,
    addResults: addResults,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 21
    }
  }), screenState === screenStates.LOADING && __jsx(LoadingScreen, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 58
    }
  }), screenState === screenStates.RESULT && __jsx(ResultWidget, {
    results: results,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 58
    }
  })));
}

/***/ }),

/***/ "./src/components/AlternativeForm/index.js":
/*!*************************************************!*\
  !*** ./src/components/AlternativeForm/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AlternativesForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "AlternativeForm__AlternativesForm",
  componentId: "etdg9t-0"
})(["label{&[data-selected=\"true\"]{background-color:", ";&[data-status=\"SUCCESS\"]{background-color:", ";}&[data-status=\"ERROR\"]{background-color:", ";}}&:focus{opacity:1;}}button{margin-top:24px;}"], ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.success, ({
  theme
}) => theme.colors.wrong);
/* harmony default export */ __webpack_exports__["default"] = (AlternativesForm);

/***/ }),

/***/ "./src/components/BlackLinkArrow/index.js":
/*!************************************************!*\
  !*** ./src/components/BlackLinkArrow/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackLinkArrow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Link */ "./src/components/Link/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\src\\components\\BlackLinkArrow\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Link__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "BlackLinkArrow__StyledLink",
  componentId: "y7jfcn-0"
})(["transition:.3s;background:", ";;&:hover{opacity:0.5;}"], ({
  theme
}) => theme.colors.primary);
const SVG = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "BlackLinkArrow__SVG",
  componentId: "y7jfcn-1"
})(["vertical-align:middle;"]);
function BackLinkArrow({
  href
}) {
  return __jsx(StyledLink, {
    href: href,
    style: {
      width: '24px',
      height: '24px',
      display: 'inline-block'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z",
    fill: "white",
    fillOpacity: "0.87",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })));
}
BackLinkArrow.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

/***/ }),

/***/ "./src/components/Button/index.js":
/*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1qc8929-0"
})(["padding:10px 16px;border-radius:1.5px ", ";width:100%;background:#377d72;color:", ";font-weight:bold;font-size:14px;outline:0;text-transform:uppercase;letter-spacing:1px;display:inline-block;cursor:pointer;transition:transform 3s cubic-bezier(0,1.69,0.76,1.74);cursor:pointer;&:hover,&:focus{opacity:.90;}&:disabled{background-color:#a3b29f;color:#a39169;cursor:not-allowed;}"], ({
  theme
}) => theme.borderRadius, ({
  theme
}) => theme.colors.contrastText);
Button.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['submit', 'type', 'button']).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/GitHubCorner/index.js":
/*!**********************************************!*\
  !*** ./src/components/GitHubCorner/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GitHubCorner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\src\\components\\GitHubCorner\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// src/components/GitHubCorner/index.js


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GitHubCorner__Wrapper",
  componentId: "sc-1x140l1-0"
})(["position:absolute;top:0;border:0;right:0;z-index:20;"]);
const SVGWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "GitHubCorner__SVGWrapper",
  componentId: "sc-1x140l1-1"
})(["fill:", ";color:", ";cursor:pointer;&:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){&:hover .octo-arm{animation:none}& .octo-arm{animation:octocat-wave 560ms ease-in-out}}"], ({
  theme
}) => theme.colors.mainBg, ({
  theme
}) => theme.colors.primary); // eslint-disable-next-line react/prop-types

function GitHubCorner({
  projectUrl
}) {
  return __jsx(Wrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: projectUrl,
    target: "_blank",
    rel: "noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(SVGWrapper, {
    className: "githubCorner",
    width: "80",
    height: "80",
    viewBox: "0 0 250 250",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
    fill: "currentColor",
    style: {
      transformOrigin: '130px 106px'
    },
    className: "octo-arm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
    fill: "currentColor",
    className: "octo-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/Link/index.js":
/*!**************************************!*\
  !*** ./src/components/Link/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\src\\components\\Link\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Link(_ref) {
  let {
    children,
    href
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "href"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("a", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), children));
}

/***/ }),

/***/ "./src/components/Loading/index.js":
/*!*****************************************!*\
  !*** ./src/components/Loading/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingOrbits; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\src\\components\\Loading\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SpinnerBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Loading__SpinnerBox",
  componentId: "fzpm7e-0"
})(["width:100%;height:180px;display:flex;justify-content:center;align-items:center;background-color:transparent;@keyframes spin{from{transform:rotate(0);}to{transform:rotate(359deg);}}@keyframes spin3D{from{transform:rotate3d(.5,.5,.5,360deg);}to{transform:rotate3d(0deg);}}"]);
const Blue = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Loading__Blue",
  componentId: "fzpm7e-1"
})(["position:absolute;display:flex;justify-content:center;align-items:center;border-radius:50%;width:165px;height:165px;border:1px solid   #377d72;-webkit-animation:spin3D 3s linear .2s infinite;"]);
const Green = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Loading__Green",
  componentId: "fzpm7e-2"
})(["position:absolute;display:flex;justify-content:center;align-items:center;border-radius:50%;width:120px;height:120px;border:1px solid #bd2800;-webkit-animation:spin3D 2s linear 1s infinite;"]);
const Red = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Loading__Red",
  componentId: "fzpm7e-3"
})(["position:absolute;display:flex;justify-content:center;align-items:center;border-radius:50%;width:90px;height:90px;border:1px solid #377d72;-webkit-animation:spin3D 2s linear 0s infinite;"]);
const Circle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Loading__Circle",
  componentId: "fzpm7e-4"
})(["position:absolute;display:flex;justify-content:center;align-items:center;border-radius:50%;width:90px;height:90px;border:1px solid #bd2800;-webkit-animation:spin3D 0.7s linear 1s infinite;"]);
function LoadingOrbits() {
  return __jsx(SpinnerBox, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(Blue, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), __jsx(Green, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx(Red, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx(Circle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./src/components/QuizBackground/index.js":
/*!************************************************!*\
  !*** ./src/components/QuizBackground/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// src/components/QuizBackground/index.js

const QuizBackground = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuizBackground",
  componentId: "ouh9z4-0"
})(["width:100%;background-size:cover;background-position:center;background-image:url(", ");background-color:", ";flex:1;@media screen and (max-width:500px){background-image:none;&:after{content:\"\";background-size:cover;background-position:center;background-image:linear-gradient(transparent,", "),url(", ");display:block;width:100%;height:210px;position:absolute;top:0;left:0;right:0;z-index:1;}*:first-child{position:relative;z-index:10;}}"], ({
  backgroundImage
}) => backgroundImage, ({
  theme
}) => theme.colors.mainBg, ({
  theme
}) => theme.colors.mainBg, ({
  backgroundImage
}) => backgroundImage);
/* harmony default export */ __webpack_exports__["default"] = (QuizBackground);

/***/ }),

/***/ "./src/components/QuizContainer/index.js":
/*!***********************************************!*\
  !*** ./src/components/QuizContainer/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const QuizContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuizContainer",
  componentId: "sc-18cw0zx-0"
})(["width:100%;max-width:350px;padding-top:45px;margin:auto 10%;@media screen and (max-width:500px){margin:auto;padding:15px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (QuizContainer);

/***/ }),

/***/ "./src/components/QuizLogo/index.js":
/*!******************************************!*\
  !*** ./src/components/QuizLogo/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\src\\components\\QuizLogo\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Logo({
  className
}) {
  return __jsx("svg", {
    className: className,
    width: "135",
    height: "67",
    viewBox: "0 0 135 67",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("g", {
    clipPath: "url(#clip0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("mask", {
    id: "path-1-outside-1",
    maskUnits: "userSpaceOnUse",
    x: "2",
    y: "2",
    width: "110",
    height: "50",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("rect", {
    fill: "white",
    x: "2",
    y: "2",
    width: "110",
    height: "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.0345 4H36.8354C37.0766 4 37.2787 4.186 37.2787 4.408V48.628C37.2778 48.7361 37.2309 48.8396 37.148 48.9162C37.0651 48.9928 36.9529 49.0363 36.8354 49.0375H32.0345C31.9171 49.0363 31.8048 48.9928 31.7219 48.9162C31.639 48.8396 31.5921 48.7361 31.5913 48.628V4.408C31.5913 4.186 31.7917 4 32.0345 4ZM65.0296 40.3855V41.5C65.0296 41.983 64.9498 42.6505 64.7477 43.5055C64.5864 44.3215 64.1024 45.175 63.3364 45.9925C62.5705 46.81 61.4412 47.5525 59.9077 48.1465C58.3759 48.7405 56.2769 49.0375 53.575 49.0375C50.8714 49.0375 48.7741 48.7405 47.2422 48.1465C45.7104 47.5525 44.5794 46.846 43.8135 45.9925C43.0476 45.175 42.5619 44.3215 42.4006 43.468C42.2393 42.613 42.1187 41.983 42.1187 41.5V16.327C42.1187 16.1035 42.3207 15.919 42.5619 15.919H47.3628C47.604 15.919 47.8061 16.1035 47.8061 16.327V39.904C47.8061 40.684 47.9267 41.239 48.0489 41.686C48.1695 42.1315 48.4107 42.577 48.7741 42.9475C49.1375 43.357 49.703 43.69 50.4689 43.951C51.1941 44.2105 52.2028 44.359 53.4544 44.359C54.745 44.359 55.7929 44.209 56.5588 43.951C57.3247 43.69 57.8902 43.357 58.2944 42.985C58.6969 42.6145 58.9788 42.205 59.101 41.7595C59.2216 41.314 59.383 40.9435 59.383 39.8665V16.327C59.383 16.1035 59.585 15.919 59.8262 15.919H64.6271C64.8683 15.919 65.0704 16.1035 65.0704 16.327V40.387H65.0296V40.3855ZM81.3667 15.919H84.5933C84.8769 15.919 85.0773 16.1785 84.9975 16.438L83.9089 20.299C83.8682 20.485 83.6661 20.596 83.5047 20.596H81.2461C80.0353 20.596 79.0673 20.746 78.3013 21.0415C77.5762 21.3385 76.9699 21.673 76.5674 22.081C76.2092 22.4272 75.9466 22.8475 75.8015 23.3065C75.6793 23.752 75.6385 24.1615 75.6385 24.532V48.6655C75.6377 48.7736 75.5908 48.8771 75.5079 48.9537C75.425 49.0303 75.3127 49.0738 75.1953 49.075H70.3553C70.2378 49.0738 70.1256 49.0303 70.0427 48.9537C69.9598 48.8771 69.9128 48.7736 69.912 48.6655V23.4925C69.912 23.047 69.9919 22.378 70.1939 21.5245C70.3553 20.6695 70.8393 19.8535 71.6052 19C72.3711 18.1825 73.5021 17.44 75.0339 16.846C76.5267 16.216 78.6647 15.919 81.3667 15.919ZM15.4156 15.919C19.3267 15.919 22.1916 16.624 24.0477 18.034C25.8631 19.4455 26.7904 21.229 26.7904 23.344V41.5375C26.7904 42.28 26.629 43.0975 26.3471 43.951C26.0652 44.842 25.4997 45.658 24.6523 46.3645C23.8049 47.107 22.6364 47.6995 21.1844 48.22C19.7308 48.703 17.7948 48.9625 15.4563 48.9625C13.077 48.9625 11.1801 48.703 9.72815 48.22C8.27615 47.737 7.10444 47.107 6.25867 46.3645C5.41126 45.622 4.84741 44.8045 4.56385 43.9495C4.28193 43.06 4.12059 42.2425 4.12059 41.5375V38.6425C4.12059 37.0825 4.56548 35.671 5.41126 34.408C6.29941 33.1465 7.50859 32.218 9.12356 31.6975C9.93022 31.438 10.8184 31.1785 11.8662 30.844C12.875 30.5095 13.8821 30.214 14.8501 29.878C15.8181 29.581 16.6264 29.284 17.3516 29.062C18.0784 28.8025 18.5216 28.69 18.683 28.6165C18.8443 28.5415 19.0855 28.4305 19.3674 28.282C19.651 28.1335 19.9329 27.9115 20.2148 27.652C20.4984 27.3535 20.7004 27.0205 20.9009 26.686C21.103 26.314 21.1844 25.8685 21.1844 25.3855V24.235C21.1844 23.827 21.103 23.419 20.9009 22.9735C20.7396 22.5265 20.4169 22.156 19.9736 21.784C19.5304 21.4135 18.9241 21.1165 18.1973 20.893C17.4721 20.671 16.5449 20.56 15.4156 20.56C13.1976 20.56 11.7049 20.968 10.8982 21.8215C10.2024 22.5714 9.79155 23.51 9.72815 24.4945C9.72815 24.718 9.52607 24.8665 9.28489 24.8665H4.44489C4.32744 24.8657 4.21502 24.8225 4.13182 24.7462C4.04861 24.6699 4.00128 24.5666 4 24.4585V23.3815C4 22.342 4.20207 21.376 4.64533 20.4865C5.04948 19.594 5.73393 18.7765 6.70193 18.109C7.63082 17.44 8.80089 16.8835 10.2529 16.513C11.6641 16.141 13.3981 15.919 15.4156 15.919ZM21.1437 32.218C21.1067 32.4085 21.0265 32.5896 20.9083 32.7496C20.7901 32.9096 20.6365 33.0449 20.4576 33.1465C20.0942 33.3685 19.7732 33.4795 19.4489 33.592C18.7644 33.814 18.0376 34.0375 17.2717 34.297C16.5058 34.5565 15.779 34.8175 15.0929 35.002C14.2862 35.263 13.5203 35.485 12.8342 35.7445C12.2847 35.9657 11.7695 36.2532 11.3024 36.5995C10.8982 36.9325 10.5348 37.342 10.2105 37.861C9.88948 38.3815 9.72815 39.013 9.72815 39.7915C9.72815 41.3515 10.1307 42.502 10.9373 43.282C11.744 44.0245 13.2367 44.4325 15.4156 44.4325C17.6335 44.4325 19.167 44.0245 19.9736 43.2445C20.7803 42.4285 21.1844 41.314 21.1844 39.829V32.218H21.1437ZM98.5511 15.919C102.462 15.919 105.327 16.624 107.183 18.034C108.999 19.4455 109.926 21.229 109.926 23.344V41.5375C109.926 42.28 109.765 43.0975 109.483 43.951C109.199 44.842 108.635 45.658 107.788 46.3645C106.94 47.107 105.77 47.6995 104.318 48.22C102.868 48.703 100.93 48.9625 98.5919 48.9625C96.2126 48.9625 94.3157 48.703 92.8637 48.22C91.4117 47.737 90.24 47.107 89.3942 46.3645C88.5468 45.622 87.983 44.8045 87.6994 43.9495C87.4175 43.06 87.2562 42.2425 87.2562 41.5375V38.6425C87.2562 37.0825 87.6994 35.671 88.5468 34.408C89.435 33.1465 90.6442 32.218 92.2575 31.6975C93.0642 31.438 93.9523 31.1785 95.0018 30.844C96.0089 30.5095 97.0176 30.214 97.9856 29.878C98.9536 29.581 99.7619 29.284 100.487 29.062C101.212 28.8025 101.657 28.69 101.819 28.6165C101.98 28.5415 102.221 28.4305 102.503 28.282C102.787 28.1335 103.068 27.9115 103.35 27.652C103.634 27.3535 103.834 27.0205 104.036 26.686C104.239 26.314 104.318 25.8685 104.318 25.3855V24.235C104.318 23.827 104.237 23.419 104.036 22.9735C103.875 22.5265 103.552 22.156 103.108 21.784C102.666 21.4135 102.06 21.1165 101.335 20.893C100.608 20.671 99.6805 20.56 98.5511 20.56C96.3316 20.56 94.8405 20.968 94.0338 21.8215C93.3379 22.5714 92.9271 23.51 92.8637 24.4945C92.8637 24.718 92.6616 24.8665 92.4188 24.8665H87.5788C87.4617 24.8653 87.3496 24.822 87.2668 24.7457C87.1839 24.6694 87.1368 24.5663 87.1356 24.4585V23.3815C87.1356 22.342 87.3376 21.376 87.7809 20.4865C88.1834 19.594 88.8695 18.7765 89.8375 18.109C90.7664 17.44 91.9348 16.8835 93.3868 16.513C94.8405 16.141 96.5336 15.919 98.5511 15.919ZM104.279 32.218C104.242 32.4085 104.162 32.5896 104.044 32.7496C103.926 32.9096 103.772 33.0449 103.593 33.1465C103.23 33.3685 102.909 33.4795 102.584 33.592C101.9 33.814 101.173 34.0375 100.406 34.297C99.6397 34.5565 98.9145 34.8175 98.2284 35.002C97.4218 35.263 96.6542 35.485 95.9698 35.7445C95.4196 35.9656 94.9039 36.2531 94.4363 36.5995C94.0338 36.9325 93.6704 37.342 93.3477 37.861C93.025 38.3815 92.8637 39.013 92.8637 39.7915C92.8637 41.3515 93.2662 42.502 94.0729 43.282C94.8796 44.0245 96.3723 44.4325 98.5511 44.4325C100.769 44.4325 102.303 44.0245 103.109 43.2445C103.916 42.4285 104.318 41.314 104.318 39.829V32.218H104.279Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  })), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.0345 4H36.8354C37.0766 4 37.2787 4.186 37.2787 4.408V48.628C37.2778 48.7361 37.2309 48.8396 37.148 48.9162C37.0651 48.9928 36.9529 49.0363 36.8354 49.0375H32.0345C31.9171 49.0363 31.8048 48.9928 31.7219 48.9162C31.639 48.8396 31.5921 48.7361 31.5913 48.628V4.408C31.5913 4.186 31.7917 4 32.0345 4ZM65.0296 40.3855V41.5C65.0296 41.983 64.9498 42.6505 64.7477 43.5055C64.5864 44.3215 64.1024 45.175 63.3364 45.9925C62.5705 46.81 61.4412 47.5525 59.9077 48.1465C58.3759 48.7405 56.2769 49.0375 53.575 49.0375C50.8714 49.0375 48.7741 48.7405 47.2422 48.1465C45.7104 47.5525 44.5794 46.846 43.8135 45.9925C43.0476 45.175 42.5619 44.3215 42.4006 43.468C42.2393 42.613 42.1187 41.983 42.1187 41.5V16.327C42.1187 16.1035 42.3207 15.919 42.5619 15.919H47.3628C47.604 15.919 47.8061 16.1035 47.8061 16.327V39.904C47.8061 40.684 47.9267 41.239 48.0489 41.686C48.1695 42.1315 48.4107 42.577 48.7741 42.9475C49.1375 43.357 49.703 43.69 50.4689 43.951C51.1941 44.2105 52.2028 44.359 53.4544 44.359C54.745 44.359 55.7929 44.209 56.5588 43.951C57.3247 43.69 57.8902 43.357 58.2944 42.985C58.6969 42.6145 58.9788 42.205 59.101 41.7595C59.2216 41.314 59.383 40.9435 59.383 39.8665V16.327C59.383 16.1035 59.585 15.919 59.8262 15.919H64.6271C64.8683 15.919 65.0704 16.1035 65.0704 16.327V40.387H65.0296V40.3855ZM81.3667 15.919H84.5933C84.8769 15.919 85.0773 16.1785 84.9975 16.438L83.9089 20.299C83.8682 20.485 83.6661 20.596 83.5047 20.596H81.2461C80.0353 20.596 79.0673 20.746 78.3013 21.0415C77.5762 21.3385 76.9699 21.673 76.5674 22.081C76.2092 22.4272 75.9466 22.8475 75.8015 23.3065C75.6793 23.752 75.6385 24.1615 75.6385 24.532V48.6655C75.6377 48.7736 75.5908 48.8771 75.5079 48.9537C75.425 49.0303 75.3127 49.0738 75.1953 49.075H70.3553C70.2378 49.0738 70.1256 49.0303 70.0427 48.9537C69.9598 48.8771 69.9128 48.7736 69.912 48.6655V23.4925C69.912 23.047 69.9919 22.378 70.1939 21.5245C70.3553 20.6695 70.8393 19.8535 71.6052 19C72.3711 18.1825 73.5021 17.44 75.0339 16.846C76.5267 16.216 78.6647 15.919 81.3667 15.919ZM15.4156 15.919C19.3267 15.919 22.1916 16.624 24.0477 18.034C25.8631 19.4455 26.7904 21.229 26.7904 23.344V41.5375C26.7904 42.28 26.629 43.0975 26.3471 43.951C26.0652 44.842 25.4997 45.658 24.6523 46.3645C23.8049 47.107 22.6364 47.6995 21.1844 48.22C19.7308 48.703 17.7948 48.9625 15.4563 48.9625C13.077 48.9625 11.1801 48.703 9.72815 48.22C8.27615 47.737 7.10444 47.107 6.25867 46.3645C5.41126 45.622 4.84741 44.8045 4.56385 43.9495C4.28193 43.06 4.12059 42.2425 4.12059 41.5375V38.6425C4.12059 37.0825 4.56548 35.671 5.41126 34.408C6.29941 33.1465 7.50859 32.218 9.12356 31.6975C9.93022 31.438 10.8184 31.1785 11.8662 30.844C12.875 30.5095 13.8821 30.214 14.8501 29.878C15.8181 29.581 16.6264 29.284 17.3516 29.062C18.0784 28.8025 18.5216 28.69 18.683 28.6165C18.8443 28.5415 19.0855 28.4305 19.3674 28.282C19.651 28.1335 19.9329 27.9115 20.2148 27.652C20.4984 27.3535 20.7004 27.0205 20.9009 26.686C21.103 26.314 21.1844 25.8685 21.1844 25.3855V24.235C21.1844 23.827 21.103 23.419 20.9009 22.9735C20.7396 22.5265 20.4169 22.156 19.9736 21.784C19.5304 21.4135 18.9241 21.1165 18.1973 20.893C17.4721 20.671 16.5449 20.56 15.4156 20.56C13.1976 20.56 11.7049 20.968 10.8982 21.8215C10.2024 22.5714 9.79155 23.51 9.72815 24.4945C9.72815 24.718 9.52607 24.8665 9.28489 24.8665H4.44489C4.32744 24.8657 4.21502 24.8225 4.13182 24.7462C4.04861 24.6699 4.00128 24.5666 4 24.4585V23.3815C4 22.342 4.20207 21.376 4.64533 20.4865C5.04948 19.594 5.73393 18.7765 6.70193 18.109C7.63082 17.44 8.80089 16.8835 10.2529 16.513C11.6641 16.141 13.3981 15.919 15.4156 15.919ZM21.1437 32.218C21.1067 32.4085 21.0265 32.5896 20.9083 32.7496C20.7901 32.9096 20.6365 33.0449 20.4576 33.1465C20.0942 33.3685 19.7732 33.4795 19.4489 33.592C18.7644 33.814 18.0376 34.0375 17.2717 34.297C16.5058 34.5565 15.779 34.8175 15.0929 35.002C14.2862 35.263 13.5203 35.485 12.8342 35.7445C12.2847 35.9657 11.7695 36.2532 11.3024 36.5995C10.8982 36.9325 10.5348 37.342 10.2105 37.861C9.88948 38.3815 9.72815 39.013 9.72815 39.7915C9.72815 41.3515 10.1307 42.502 10.9373 43.282C11.744 44.0245 13.2367 44.4325 15.4156 44.4325C17.6335 44.4325 19.167 44.0245 19.9736 43.2445C20.7803 42.4285 21.1844 41.314 21.1844 39.829V32.218H21.1437ZM98.5511 15.919C102.462 15.919 105.327 16.624 107.183 18.034C108.999 19.4455 109.926 21.229 109.926 23.344V41.5375C109.926 42.28 109.765 43.0975 109.483 43.951C109.199 44.842 108.635 45.658 107.788 46.3645C106.94 47.107 105.77 47.6995 104.318 48.22C102.868 48.703 100.93 48.9625 98.5919 48.9625C96.2126 48.9625 94.3157 48.703 92.8637 48.22C91.4117 47.737 90.24 47.107 89.3942 46.3645C88.5468 45.622 87.983 44.8045 87.6994 43.9495C87.4175 43.06 87.2562 42.2425 87.2562 41.5375V38.6425C87.2562 37.0825 87.6994 35.671 88.5468 34.408C89.435 33.1465 90.6442 32.218 92.2575 31.6975C93.0642 31.438 93.9523 31.1785 95.0018 30.844C96.0089 30.5095 97.0176 30.214 97.9856 29.878C98.9536 29.581 99.7619 29.284 100.487 29.062C101.212 28.8025 101.657 28.69 101.819 28.6165C101.98 28.5415 102.221 28.4305 102.503 28.282C102.787 28.1335 103.068 27.9115 103.35 27.652C103.634 27.3535 103.834 27.0205 104.036 26.686C104.239 26.314 104.318 25.8685 104.318 25.3855V24.235C104.318 23.827 104.237 23.419 104.036 22.9735C103.875 22.5265 103.552 22.156 103.108 21.784C102.666 21.4135 102.06 21.1165 101.335 20.893C100.608 20.671 99.6805 20.56 98.5511 20.56C96.3316 20.56 94.8405 20.968 94.0338 21.8215C93.3379 22.5714 92.9271 23.51 92.8637 24.4945C92.8637 24.718 92.6616 24.8665 92.4188 24.8665H87.5788C87.4617 24.8653 87.3496 24.822 87.2668 24.7457C87.1839 24.6694 87.1368 24.5663 87.1356 24.4585V23.3815C87.1356 22.342 87.3376 21.376 87.7809 20.4865C88.1834 19.594 88.8695 18.7765 89.8375 18.109C90.7664 17.44 91.9348 16.8835 93.3868 16.513C94.8405 16.141 96.5336 15.919 98.5511 15.919ZM104.279 32.218C104.242 32.4085 104.162 32.5896 104.044 32.7496C103.926 32.9096 103.772 33.0449 103.593 33.1465C103.23 33.3685 102.909 33.4795 102.584 33.592C101.9 33.814 101.173 34.0375 100.406 34.297C99.6397 34.5565 98.9145 34.8175 98.2284 35.002C97.4218 35.263 96.6542 35.485 95.9698 35.7445C95.4196 35.9656 94.9039 36.2531 94.4363 36.5995C94.0338 36.9325 93.6704 37.342 93.3477 37.861C93.025 38.3815 92.8637 39.013 92.8637 39.7915C92.8637 41.3515 93.2662 42.502 94.0729 43.282C94.8796 44.0245 96.3723 44.4325 98.5511 44.4325C100.769 44.4325 102.303 44.0245 103.109 43.2445C103.916 42.4285 104.318 41.314 104.318 39.829V32.218H104.279Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.0345 4H36.8354C37.0766 4 37.2787 4.186 37.2787 4.408V48.628C37.2778 48.7361 37.2309 48.8396 37.148 48.9162C37.0651 48.9928 36.9529 49.0363 36.8354 49.0375H32.0345C31.9171 49.0363 31.8048 48.9928 31.7219 48.9162C31.639 48.8396 31.5921 48.7361 31.5913 48.628V4.408C31.5913 4.186 31.7917 4 32.0345 4ZM65.0296 40.3855V41.5C65.0296 41.983 64.9498 42.6505 64.7477 43.5055C64.5864 44.3215 64.1024 45.175 63.3364 45.9925C62.5705 46.81 61.4412 47.5525 59.9077 48.1465C58.3759 48.7405 56.2769 49.0375 53.575 49.0375C50.8714 49.0375 48.7741 48.7405 47.2422 48.1465C45.7104 47.5525 44.5794 46.846 43.8135 45.9925C43.0476 45.175 42.5619 44.3215 42.4006 43.468C42.2393 42.613 42.1187 41.983 42.1187 41.5V16.327C42.1187 16.1035 42.3207 15.919 42.5619 15.919H47.3628C47.604 15.919 47.8061 16.1035 47.8061 16.327V39.904C47.8061 40.684 47.9267 41.239 48.0489 41.686C48.1695 42.1315 48.4107 42.577 48.7741 42.9475C49.1375 43.357 49.703 43.69 50.4689 43.951C51.1941 44.2105 52.2028 44.359 53.4544 44.359C54.745 44.359 55.7929 44.209 56.5588 43.951C57.3247 43.69 57.8902 43.357 58.2944 42.985C58.6969 42.6145 58.9788 42.205 59.101 41.7595C59.2216 41.314 59.383 40.9435 59.383 39.8665V16.327C59.383 16.1035 59.585 15.919 59.8262 15.919H64.6271C64.8683 15.919 65.0704 16.1035 65.0704 16.327V40.387H65.0296V40.3855ZM81.3667 15.919H84.5933C84.8769 15.919 85.0773 16.1785 84.9975 16.438L83.9089 20.299C83.8682 20.485 83.6661 20.596 83.5047 20.596H81.2461C80.0353 20.596 79.0673 20.746 78.3013 21.0415C77.5762 21.3385 76.9699 21.673 76.5674 22.081C76.2092 22.4272 75.9466 22.8475 75.8015 23.3065C75.6793 23.752 75.6385 24.1615 75.6385 24.532V48.6655C75.6377 48.7736 75.5908 48.8771 75.5079 48.9537C75.425 49.0303 75.3127 49.0738 75.1953 49.075H70.3553C70.2378 49.0738 70.1256 49.0303 70.0427 48.9537C69.9598 48.8771 69.9128 48.7736 69.912 48.6655V23.4925C69.912 23.047 69.9919 22.378 70.1939 21.5245C70.3553 20.6695 70.8393 19.8535 71.6052 19C72.3711 18.1825 73.5021 17.44 75.0339 16.846C76.5267 16.216 78.6647 15.919 81.3667 15.919ZM15.4156 15.919C19.3267 15.919 22.1916 16.624 24.0477 18.034C25.8631 19.4455 26.7904 21.229 26.7904 23.344V41.5375C26.7904 42.28 26.629 43.0975 26.3471 43.951C26.0652 44.842 25.4997 45.658 24.6523 46.3645C23.8049 47.107 22.6364 47.6995 21.1844 48.22C19.7308 48.703 17.7948 48.9625 15.4563 48.9625C13.077 48.9625 11.1801 48.703 9.72815 48.22C8.27615 47.737 7.10444 47.107 6.25867 46.3645C5.41126 45.622 4.84741 44.8045 4.56385 43.9495C4.28193 43.06 4.12059 42.2425 4.12059 41.5375V38.6425C4.12059 37.0825 4.56548 35.671 5.41126 34.408C6.29941 33.1465 7.50859 32.218 9.12356 31.6975C9.93022 31.438 10.8184 31.1785 11.8662 30.844C12.875 30.5095 13.8821 30.214 14.8501 29.878C15.8181 29.581 16.6264 29.284 17.3516 29.062C18.0784 28.8025 18.5216 28.69 18.683 28.6165C18.8443 28.5415 19.0855 28.4305 19.3674 28.282C19.651 28.1335 19.9329 27.9115 20.2148 27.652C20.4984 27.3535 20.7004 27.0205 20.9009 26.686C21.103 26.314 21.1844 25.8685 21.1844 25.3855V24.235C21.1844 23.827 21.103 23.419 20.9009 22.9735C20.7396 22.5265 20.4169 22.156 19.9736 21.784C19.5304 21.4135 18.9241 21.1165 18.1973 20.893C17.4721 20.671 16.5449 20.56 15.4156 20.56C13.1976 20.56 11.7049 20.968 10.8982 21.8215C10.2024 22.5714 9.79155 23.51 9.72815 24.4945C9.72815 24.718 9.52607 24.8665 9.28489 24.8665H4.44489C4.32744 24.8657 4.21502 24.8225 4.13182 24.7462C4.04861 24.6699 4.00128 24.5666 4 24.4585V23.3815C4 22.342 4.20207 21.376 4.64533 20.4865C5.04948 19.594 5.73393 18.7765 6.70193 18.109C7.63082 17.44 8.80089 16.8835 10.2529 16.513C11.6641 16.141 13.3981 15.919 15.4156 15.919ZM21.1437 32.218C21.1067 32.4085 21.0265 32.5896 20.9083 32.7496C20.7901 32.9096 20.6365 33.0449 20.4576 33.1465C20.0942 33.3685 19.7732 33.4795 19.4489 33.592C18.7644 33.814 18.0376 34.0375 17.2717 34.297C16.5058 34.5565 15.779 34.8175 15.0929 35.002C14.2862 35.263 13.5203 35.485 12.8342 35.7445C12.2847 35.9657 11.7695 36.2532 11.3024 36.5995C10.8982 36.9325 10.5348 37.342 10.2105 37.861C9.88948 38.3815 9.72815 39.013 9.72815 39.7915C9.72815 41.3515 10.1307 42.502 10.9373 43.282C11.744 44.0245 13.2367 44.4325 15.4156 44.4325C17.6335 44.4325 19.167 44.0245 19.9736 43.2445C20.7803 42.4285 21.1844 41.314 21.1844 39.829V32.218H21.1437ZM98.5511 15.919C102.462 15.919 105.327 16.624 107.183 18.034C108.999 19.4455 109.926 21.229 109.926 23.344V41.5375C109.926 42.28 109.765 43.0975 109.483 43.951C109.199 44.842 108.635 45.658 107.788 46.3645C106.94 47.107 105.77 47.6995 104.318 48.22C102.868 48.703 100.93 48.9625 98.5919 48.9625C96.2126 48.9625 94.3157 48.703 92.8637 48.22C91.4117 47.737 90.24 47.107 89.3942 46.3645C88.5468 45.622 87.983 44.8045 87.6994 43.9495C87.4175 43.06 87.2562 42.2425 87.2562 41.5375V38.6425C87.2562 37.0825 87.6994 35.671 88.5468 34.408C89.435 33.1465 90.6442 32.218 92.2575 31.6975C93.0642 31.438 93.9523 31.1785 95.0018 30.844C96.0089 30.5095 97.0176 30.214 97.9856 29.878C98.9536 29.581 99.7619 29.284 100.487 29.062C101.212 28.8025 101.657 28.69 101.819 28.6165C101.98 28.5415 102.221 28.4305 102.503 28.282C102.787 28.1335 103.068 27.9115 103.35 27.652C103.634 27.3535 103.834 27.0205 104.036 26.686C104.239 26.314 104.318 25.8685 104.318 25.3855V24.235C104.318 23.827 104.237 23.419 104.036 22.9735C103.875 22.5265 103.552 22.156 103.108 21.784C102.666 21.4135 102.06 21.1165 101.335 20.893C100.608 20.671 99.6805 20.56 98.5511 20.56C96.3316 20.56 94.8405 20.968 94.0338 21.8215C93.3379 22.5714 92.9271 23.51 92.8637 24.4945C92.8637 24.718 92.6616 24.8665 92.4188 24.8665H87.5788C87.4617 24.8653 87.3496 24.822 87.2668 24.7457C87.1839 24.6694 87.1368 24.5663 87.1356 24.4585V23.3815C87.1356 22.342 87.3376 21.376 87.7809 20.4865C88.1834 19.594 88.8695 18.7765 89.8375 18.109C90.7664 17.44 91.9348 16.8835 93.3868 16.513C94.8405 16.141 96.5336 15.919 98.5511 15.919ZM104.279 32.218C104.242 32.4085 104.162 32.5896 104.044 32.7496C103.926 32.9096 103.772 33.0449 103.593 33.1465C103.23 33.3685 102.909 33.4795 102.584 33.592C101.9 33.814 101.173 34.0375 100.406 34.297C99.6397 34.5565 98.9145 34.8175 98.2284 35.002C97.4218 35.263 96.6542 35.485 95.9698 35.7445C95.4196 35.9656 94.9039 36.2531 94.4363 36.5995C94.0338 36.9325 93.6704 37.342 93.3477 37.861C93.025 38.3815 92.8637 39.013 92.8637 39.7915C92.8637 41.3515 93.2662 42.502 94.0729 43.282C94.8796 44.0245 96.3723 44.4325 98.5511 44.4325C100.769 44.4325 102.303 44.0245 103.109 43.2445C103.916 42.4285 104.318 41.314 104.318 39.829V32.218H104.279Z",
    stroke: "#252B51",
    strokeWidth: "4",
    mask: "url(#path-1-outside-1)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M86.8469 62.368C84.8917 63.0142 83.211 62.938 81.805 62.1393C80.3989 61.3406 79.3095 59.9506 78.5365 57.9694C77.8934 56.3209 77.6895 54.6809 77.9248 53.0493C78.1601 51.4178 78.8115 49.9732 79.879 48.7154C80.9406 47.4425 82.334 46.521 84.0592 45.9507C85.7351 45.3968 87.2807 45.4835 88.696 46.2109C90.1219 46.9177 91.2419 48.3146 92.0561 50.4017C92.4928 51.5209 92.7099 52.6955 92.7075 53.9256C92.7051 55.1558 92.4778 56.3322 92.0254 57.4549C93.894 58.2032 94.8579 58.6529 94.9169 58.8042C95.0703 59.1974 95.0598 59.5509 94.8854 59.8646C94.7333 60.1881 94.4273 60.4258 93.9672 60.5779C93.6222 60.692 92.5301 60.4127 90.6909 59.74C89.6892 60.976 88.4079 61.852 86.8469 62.368ZM86.3954 60.2122C87.102 59.9787 87.7105 59.4702 88.221 58.6868C87.4993 58.3107 86.7651 57.8789 86.0184 57.3915C85.2882 56.8987 84.8877 56.5616 84.8169 56.3801C84.6576 55.9717 84.6306 55.6648 84.7359 55.4592C84.8518 55.2331 85.1068 55.0549 85.5012 54.9246C85.5505 54.9083 85.9935 55.0692 86.8303 55.4073C87.1653 55.5527 87.9239 55.8568 89.1062 56.3197C89.2619 55.4828 89.2926 54.6105 89.1981 53.7026C89.1142 52.7742 88.8952 51.8563 88.5411 50.9489C88.1281 49.8902 87.5871 49.1215 86.9179 48.6426C86.2653 48.1583 85.4789 48.0682 84.5587 48.3723C83.5072 48.7199 82.7122 49.3924 82.1739 50.3899C81.6356 51.3874 81.3576 52.5293 81.3401 53.8157C81.3167 55.0869 81.5292 56.2972 81.9776 57.4466C82.249 58.1423 82.6365 58.7314 83.14 59.2137C83.6541 59.6756 84.206 59.9968 84.7959 60.1775C85.3858 60.3581 85.9189 60.3697 86.3954 60.2122Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M105.647 55.5391C105.682 55.8179 105.602 56.0407 105.407 56.2075C105.219 56.3894 104.935 56.5428 104.557 56.6677C103.424 57.0424 102.765 56.9954 102.583 56.5265L102.394 55.6156C102.058 56.0853 101.64 56.5821 101.139 57.1061C100.639 57.63 100.183 57.9599 99.7723 58.0957C97.3405 58.8995 95.8385 58.5678 95.2662 57.1008C94.2926 54.6054 94.0498 51.6294 94.5377 48.1729C94.5992 47.7599 94.7072 47.4424 94.8618 47.2206C95.0328 46.9933 95.3894 46.7901 95.9316 46.6108C96.5067 46.4208 96.9634 46.3552 97.3018 46.4141C97.6506 46.4524 97.8634 46.5699 97.9401 46.7665C97.9578 46.8119 97.9205 46.9779 97.8283 47.2645C97.7243 47.5208 97.6449 47.769 97.5901 48.0091C96.972 50.894 97.1025 53.4632 97.9816 55.7167C98.0583 55.9133 98.2083 56.0601 98.4316 56.157C98.655 56.2539 98.8323 56.2807 98.9638 56.2372C99.3253 56.1177 99.8712 55.758 100.602 55.158C101.349 54.5525 101.887 54.0074 102.218 53.5226L101.994 51.5222C101.73 49.1337 101.574 47.6655 101.527 47.1175C101.472 46.4528 101.51 45.8853 101.642 45.4149C101.784 44.9239 102.168 44.5752 102.792 44.3688C103.663 44.081 104.193 44.179 104.382 44.663C104.411 44.7386 104.425 44.8451 104.423 44.9824C104.431 45.0991 104.442 45.198 104.455 45.279L104.903 49.28C105.253 52.4595 105.501 54.5459 105.647 55.5391Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M105.645 40.4037C105.462 39.9349 105.456 39.4674 105.627 39.0012C105.814 38.5296 106.195 38.1988 106.77 38.0087C107.378 37.8078 107.971 37.8079 108.551 38.0091C109.146 38.2049 109.53 38.5221 109.701 38.9607C109.872 39.3992 109.79 39.8534 109.453 40.323C109.117 40.7927 108.645 41.128 108.037 41.329C107.446 41.5245 106.941 41.5377 106.522 41.3687C106.115 41.1791 105.822 40.8574 105.645 40.4037ZM107.968 53.133C107.862 52.8607 107.531 49.8968 106.975 44.2411L106.5 43.4506C106.435 43.2842 106.492 43.1204 106.67 42.959C106.848 42.7977 107.241 42.6166 107.849 42.4156C108.326 42.2581 108.718 42.265 109.026 42.4364C109.35 42.6024 109.577 42.8517 109.707 43.1844C109.743 43.2752 109.773 43.4016 109.8 43.5637L110.792 52.4556L111.268 53.2461C111.332 53.4124 111.276 53.5763 111.098 53.7376C110.919 53.899 110.526 54.0801 109.918 54.2811C109.376 54.4603 108.967 54.4334 108.69 54.2003C108.408 53.9522 108.167 53.5964 107.968 53.133Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M122.195 49.9925C118.16 51.8214 115.862 52.8715 115.3 53.1426C114.715 53.404 114.415 53.5375 114.399 53.5429C114.103 53.6407 113.825 53.6898 113.566 53.6902C113.29 53.696 113.112 53.6439 113.032 53.5337C112.969 53.469 112.85 53.3546 112.675 53.1906C112.5 53.0265 112.386 52.8765 112.333 52.7404C112.279 52.6042 112.279 52.4848 112.332 52.382C112.379 52.2641 112.533 52.1363 112.794 51.9986C113.04 51.8664 113.211 51.7839 113.31 51.7514C113.804 50.7345 114.443 49.3536 115.228 47.6088C116.327 45.1966 117.18 43.4122 117.786 42.2557L113.049 44.3079C112.54 44.4762 112.194 44.326 112.011 43.8571C111.864 43.4791 111.864 43.0521 112.012 42.5762C112.053 42.4432 112.655 42.1077 113.818 41.5697C114.98 41.0317 116.256 40.4735 117.644 39.8951C119.043 39.2962 119.939 38.9316 120.334 38.8013C120.958 38.5949 121.4 38.8244 121.66 39.4899C121.736 39.6865 121.736 39.9 121.659 40.1303C121.576 40.3456 121.445 40.5339 121.267 40.6952L120.893 41.3055C120.32 42.4511 119.633 43.899 118.832 45.6493L116.786 49.9623C119.264 48.8017 120.864 48.1019 121.587 47.863C122.212 47.6566 122.654 47.8861 122.913 48.5516C123.014 48.8087 122.982 49.0838 122.818 49.377C122.665 49.6497 122.457 49.8548 122.195 49.9925Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M127.144 43.2346C127.205 43.6755 127.15 44.0096 126.979 44.2369C126.824 44.4587 126.476 44.6593 125.933 44.8385C125.013 45.1426 124.438 44.9998 124.208 44.41C124.061 44.0319 123.926 43.4019 123.805 42.52C123.694 41.6176 123.567 40.4131 123.424 38.9065C123.23 36.8876 123.039 35.2092 122.851 33.8713C122.726 33.0759 123.165 32.5126 124.167 32.1813C124.66 32.0184 125.071 31.9767 125.399 32.0561C125.726 32.1356 125.913 32.3299 125.96 32.6389L127.144 43.2346ZM126.495 49.0581C126.067 49.1993 125.642 49.1779 125.217 48.9937C124.787 48.7944 124.495 48.4982 124.342 48.1049C124.189 47.7117 124.244 47.2836 124.509 46.8205C124.767 46.3423 125.184 46.0082 125.759 45.8181C126.269 45.6498 126.74 45.622 127.174 45.7348C127.601 45.8325 127.904 46.1082 128.081 46.5619C128.263 47.0307 128.185 47.5178 127.844 48.0232C127.519 48.5231 127.07 48.8681 126.495 49.0581Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M86.918 48.6425C86.2653 48.1582 85.4789 48.0681 84.5588 48.3723C83.5072 48.7199 82.7123 49.3924 82.1739 50.3899C81.6356 51.3874 81.3577 52.5293 81.3401 53.8156C81.3167 55.0869 81.5292 56.2972 81.9776 57.4466C82.249 58.1423 82.6365 58.7313 83.14 59.2137C83.6541 59.6755 84.2061 59.9968 84.7959 60.1774C85.3858 60.3581 85.919 60.3696 86.3955 60.2121C86.5752 60.1528 86.7485 60.0756 86.9155 59.9806C87.4052 59.7022 87.8404 59.2709 88.2211 58.6867C87.8894 58.5139 87.5552 58.3294 87.2183 58.1331C86.822 57.9021 86.422 57.6549 86.0185 57.3915C85.2883 56.8987 84.8878 56.5615 84.817 56.38C84.6576 55.9717 84.6306 55.6647 84.736 55.4592C84.8518 55.2331 85.1069 55.0549 85.5012 54.9245C85.5505 54.9082 85.9935 55.0691 86.8303 55.4072C86.9456 55.4572 87.1111 55.5261 87.3267 55.6137C87.7377 55.7808 88.3308 56.0161 89.1062 56.3197C89.2156 55.7319 89.2633 55.1267 89.2492 54.504C89.2433 54.24 89.2263 53.9728 89.1981 53.7026C89.1142 52.7742 88.8952 51.8563 88.5412 50.9488C88.1282 49.8902 87.5871 49.1214 86.918 48.6425ZM76.0706 52.8227C76.348 50.8995 77.1239 49.167 78.4002 47.6611C79.691 46.1156 81.3851 45.0052 83.427 44.3303C85.551 43.6282 87.6618 43.7115 89.5957 44.7013C90.9023 45.3523 91.9307 46.3716 92.736 47.6463C92.8284 47.1947 92.9905 46.717 93.2874 46.2909L93.3053 46.2653L93.3242 46.2402C93.8433 45.5503 94.6764 45.1963 95.2995 44.9904C95.9611 44.7717 96.7751 44.5871 97.5859 44.7119C98.1981 44.7906 99.2006 45.087 99.6492 46.0635C99.6756 45.6926 99.7337 45.3314 99.8309 44.9848L99.8348 44.9709C100.169 43.8195 101.091 43.1018 102.16 42.7484C102.715 42.5649 103.452 42.3979 104.211 42.5385C104.387 42.5711 104.554 42.6182 104.712 42.6785C104.751 42.5709 104.797 42.4684 104.85 42.3714C104.406 41.9859 104.088 41.5076 103.885 40.9855C103.561 40.1566 103.547 39.2904 103.854 38.4516L103.862 38.4311L103.87 38.4108C104.271 37.3978 105.111 36.7276 106.138 36.3882C107.139 36.0572 108.186 36.046 109.195 36.3927C110.169 36.7161 111.057 37.3426 111.461 38.3787C111.817 39.2888 111.663 40.1703 111.24 40.9195C111.335 40.86 111.432 40.804 111.525 40.7521C111.889 40.549 112.382 40.3067 112.978 40.0313C114.164 39.4824 115.46 38.9154 116.864 38.3302C118.234 37.7438 119.211 37.3428 119.701 37.1808C120.176 37.024 120.759 36.9409 121.359 37.0696C121.237 35.9352 121.116 34.9468 120.998 34.1027C120.882 33.3446 121.024 32.5452 121.567 31.8491C122.081 31.1881 122.819 30.7975 123.535 30.5609C124.204 30.3399 125.032 30.1867 125.875 30.3911C126.323 30.4997 126.8 30.7203 127.184 31.1193C127.569 31.5183 127.749 31.981 127.813 32.4033L127.817 32.4329L129.003 43.0404C129.063 43.4965 129.067 44.0693 128.846 44.6302C129.313 44.9911 129.641 45.4679 129.841 45.9799C130.253 47.0361 130.012 48.0656 129.441 48.9184C128.904 49.7411 128.12 50.3503 127.127 50.6785C126.215 50.9797 125.276 50.9225 124.42 50.5509L124.398 50.5415L124.376 50.5316C124.343 50.5162 124.31 50.5005 124.278 50.4844C123.99 50.8854 123.608 51.2323 123.124 51.4871L123.074 51.5135L123.022 51.5371C118.972 53.3729 116.703 54.4094 116.168 54.6675L116.143 54.6796L116.117 54.691C115.825 54.8219 115.602 54.9215 115.449 54.9893L115.268 55.0692L115.207 55.0959L115.17 55.1113L115.135 55.1254C115.127 55.1288 115.084 55.1457 115.031 55.1633C114.58 55.3121 114.096 55.4084 113.589 55.4117C113.337 55.416 112.764 55.4033 112.217 55.1226C111.972 55.3063 111.712 55.4393 111.507 55.534C111.22 55.6658 110.895 55.7874 110.551 55.9014C109.764 56.1614 108.538 56.3295 107.523 55.5473C107.552 56.2045 107.325 56.8937 106.724 57.431C106.269 57.855 105.709 58.1165 105.19 58.288C104.546 58.5008 103.797 58.682 103.069 58.6299C102.836 58.6133 102.575 58.5707 102.308 58.4811C101.777 58.9962 101.145 59.4712 100.404 59.716C99.1819 60.1201 97.9238 60.3564 96.7544 60.1905C96.7079 60.3275 96.6493 60.464 96.5774 60.5994C96.1604 61.4419 95.3876 61.9377 94.5994 62.1983C94.0791 62.3702 93.5765 62.3257 93.3365 62.2981C93.0303 62.2629 92.7065 62.1941 92.3886 62.1128C92.0537 62.0271 91.6741 61.9141 91.2533 61.7765C90.1954 62.7662 88.9324 63.5079 87.4791 63.9883C85.1391 64.7618 82.8349 64.7475 80.8226 63.6044C78.9397 62.5347 77.6379 60.7602 76.7761 58.5512C76.0387 56.661 75.7935 54.7442 76.0706 52.8227ZM90.691 59.7399C89.6892 60.976 88.4079 61.852 86.847 62.3679C84.8917 63.0142 83.211 62.938 81.805 62.1392C80.399 61.3405 79.3095 59.9505 78.5366 57.9693C77.8934 56.3208 77.6895 54.6808 77.9248 53.0493C78.1602 51.4178 78.8115 49.9731 79.879 48.7154C80.9406 47.4425 82.334 46.5209 84.0592 45.9507C85.7352 45.3967 87.2808 45.4834 88.6961 46.2108C90.1219 46.9176 91.2419 48.3146 92.0562 50.4017C92.2034 50.7792 92.3258 51.163 92.4231 51.5531C92.6143 52.3196 92.7091 53.1104 92.7075 53.9256C92.7071 54.1719 92.6976 54.416 92.679 54.658C92.6051 55.6246 92.3872 56.5569 92.0254 57.4549C92.7167 57.7317 93.2842 57.9677 93.7278 58.1628C94.4834 58.4951 94.8797 58.7088 94.9169 58.8041C95.0216 59.0727 95.05 59.3227 95.0019 59.5541C94.9795 59.6616 94.9407 59.7651 94.8854 59.8646C94.7334 60.188 94.4273 60.4258 93.9672 60.5778C93.6222 60.6919 92.5301 60.4126 90.691 59.7399ZM95.1944 56.9122C95.2179 56.9754 95.2418 57.0382 95.2662 57.1008C95.4947 57.6866 95.8715 58.0913 96.3966 58.315C96.5082 58.3626 96.6267 58.402 96.7518 58.4333C97.5113 58.6227 98.5182 58.5102 99.7723 58.0956C100.122 57.9799 100.505 57.7232 100.92 57.3255C100.992 57.2565 101.065 57.1834 101.139 57.106C101.187 57.0561 101.234 57.0064 101.28 56.957C101.351 56.8815 101.419 56.8065 101.486 56.7321C101.491 56.7268 101.496 56.7214 101.501 56.716C101.599 56.6072 101.693 56.4996 101.784 56.3932C101.786 56.3903 101.788 56.3874 101.791 56.3845C102.015 56.1206 102.216 55.8643 102.394 55.6155L102.583 56.5265C102.714 56.8644 103.093 56.9832 103.719 56.8829C103.961 56.844 104.241 56.7723 104.557 56.6676C104.935 56.5427 105.219 56.3893 105.407 56.2074C105.602 56.0406 105.682 55.8178 105.648 55.539C105.501 54.5458 105.253 52.4595 104.903 49.2799L104.455 45.279C104.442 45.1979 104.431 45.099 104.423 44.9823C104.425 44.845 104.411 44.7386 104.382 44.663C104.193 44.179 103.663 44.0809 102.792 44.3688C102.168 44.5751 101.784 44.9238 101.642 45.4148C101.51 45.8852 101.472 46.4528 101.527 47.1175C101.574 47.6654 101.73 49.1336 101.994 51.5221L102.218 53.5226C101.955 53.9077 101.561 54.3308 101.036 54.7921C100.9 54.9115 100.755 55.0334 100.602 55.1579C100.443 55.288 100.294 55.4068 100.153 55.5143C99.6432 55.9026 99.2469 56.1436 98.9638 56.2372C98.8324 56.2806 98.655 56.2539 98.4317 56.1569C98.2084 56.06 98.0583 55.9132 97.9816 55.7166C97.1025 53.4632 96.972 50.894 97.5902 48.009C97.6449 47.769 97.7243 47.5208 97.8283 47.2644C97.9206 46.9778 97.9578 46.8119 97.9401 46.7665C97.8634 46.5699 97.6506 46.4524 97.3018 46.414C96.9635 46.3551 96.5067 46.4207 95.9317 46.6108C95.3895 46.79 95.0328 46.9933 94.8618 47.2205C94.7072 47.4424 94.5992 47.7598 94.5377 48.1728C94.3804 49.2872 94.2991 50.3517 94.2937 51.3662C94.2889 52.2589 94.343 53.113 94.4559 53.9284C94.486 54.1459 94.5203 54.3607 94.5588 54.5727C94.7079 55.3938 94.9197 56.1737 95.1944 56.9122ZM106.975 44.241C107.531 49.8967 107.862 52.8607 107.968 53.1329C108.167 53.5963 108.408 53.9521 108.69 54.2003C108.967 54.4333 109.376 54.4602 109.918 54.281C110.347 54.1394 110.669 54.0076 110.884 53.8856C110.974 53.8345 111.045 53.7852 111.098 53.7376C111.276 53.5762 111.332 53.4124 111.268 53.246L110.792 52.4555L109.8 43.5636C109.773 43.4015 109.743 43.2751 109.707 43.1844C109.628 42.9805 109.512 42.8079 109.359 42.6667C109.263 42.5774 109.151 42.5006 109.026 42.4364C108.85 42.3388 108.648 42.2945 108.418 42.3036C108.244 42.3104 108.054 42.3478 107.849 42.4155C107.241 42.6165 106.848 42.7976 106.67 42.959C106.598 43.0239 106.546 43.0893 106.514 43.155C106.466 43.2526 106.461 43.3511 106.5 43.4505L106.975 44.241ZM117.786 42.2556C117.459 42.8799 117.06 43.6871 116.589 44.6772C116.187 45.5214 115.734 46.4986 115.228 47.6088C114.443 49.3536 113.804 50.7344 113.31 51.7513C113.212 51.7839 113.04 51.8663 112.794 51.9986C112.758 52.018 112.723 52.0373 112.69 52.0563C112.67 52.0681 112.65 52.0798 112.632 52.0914C112.513 52.166 112.428 52.2374 112.376 52.3057C112.357 52.3316 112.342 52.357 112.332 52.382C112.283 52.4768 112.28 52.5859 112.321 52.7092C112.325 52.7195 112.328 52.7298 112.333 52.7403C112.349 52.7827 112.372 52.8265 112.4 52.8717C112.463 52.9713 112.554 53.0776 112.675 53.1905C112.85 53.3545 112.969 53.4689 113.032 53.5337C113.035 53.5388 113.039 53.5439 113.044 53.5488C113.064 53.5725 113.089 53.5933 113.119 53.6111C113.129 53.6169 113.14 53.6224 113.151 53.6276C113.248 53.6731 113.386 53.6939 113.566 53.6901C113.825 53.6897 114.103 53.6406 114.399 53.5429C114.415 53.5374 114.715 53.404 115.3 53.1425C115.862 52.8714 118.16 51.8214 122.196 49.9925C122.457 49.8548 122.665 49.6496 122.818 49.377C122.839 49.3385 122.859 49.3003 122.876 49.2624C122.984 49.0203 122.999 48.791 122.922 48.5743C122.919 48.5667 122.916 48.5591 122.913 48.5515C122.785 48.223 122.612 48.0007 122.395 47.8847C122.173 47.7657 121.903 47.7584 121.587 47.8629C121.161 48.0038 120.43 48.3047 119.394 48.7657C118.673 49.0869 117.803 49.4857 116.786 49.9622L118.832 45.6492C119.633 43.899 120.32 42.451 120.893 41.3054L121.267 40.6951C121.445 40.5338 121.576 40.3455 121.659 40.1303C121.661 40.1255 121.662 40.1208 121.664 40.1161C121.736 39.8911 121.735 39.6824 121.66 39.4898C121.637 39.431 121.612 39.3756 121.587 39.3237C121.556 39.262 121.523 39.2052 121.489 39.1531C121.408 39.0318 121.317 38.9365 121.215 38.8671C120.979 38.707 120.685 38.685 120.334 38.8012C119.939 38.9315 119.043 39.2962 117.644 39.8951C116.256 40.4734 114.98 41.0316 113.818 41.5696C112.655 42.1076 112.053 42.4432 112.012 42.5762C111.864 43.052 111.864 43.479 112.011 43.8571C112.194 44.3259 112.54 44.4762 113.049 44.3078L117.786 42.2556ZM123.426 38.9237C123.47 39.3826 123.512 39.8135 123.552 40.2162C123.644 41.1284 123.728 41.8963 123.805 42.52C123.926 43.4018 124.061 44.0318 124.208 44.4099C124.231 44.4683 124.257 44.5222 124.287 44.5718C124.496 44.9242 124.876 45.0558 125.427 44.9666C125.582 44.9414 125.751 44.8987 125.934 44.8384C126.476 44.6592 126.824 44.4587 126.979 44.2369C127.036 44.1606 127.08 44.0722 127.112 43.9719C127.174 43.7733 127.185 43.5275 127.144 43.2346L125.96 32.6389C125.913 32.3298 125.726 32.1355 125.399 32.0561C125.071 31.9766 124.66 32.0183 124.168 32.1813C123.165 32.5125 122.726 33.0759 122.851 33.8713C123.039 35.2092 123.23 36.8876 123.424 38.9065C123.425 38.9122 123.426 38.9179 123.426 38.9237ZM127.668 45.9692C127.528 45.8561 127.363 45.778 127.174 45.7347C126.888 45.6604 126.586 45.6471 126.268 45.6948C126.103 45.7195 125.933 45.7606 125.759 45.8181C125.244 45.9884 124.856 46.2744 124.594 46.676C124.564 46.7226 124.536 46.7708 124.509 46.8205C124.419 46.977 124.354 47.1295 124.312 47.2781C124.233 47.5605 124.24 47.8285 124.333 48.0821C124.336 48.0897 124.339 48.0973 124.342 48.1049C124.445 48.3696 124.611 48.5903 124.84 48.7672C124.951 48.853 125.077 48.9285 125.217 48.9936C125.642 49.1778 126.067 49.1993 126.495 49.0581C127.07 48.868 127.519 48.523 127.844 48.0231C128.185 47.5177 128.263 47.0307 128.081 46.5618C127.982 46.309 127.844 46.1115 127.668 45.9692ZM109.173 40.6532C109.275 40.5517 109.369 40.4416 109.453 40.323C109.79 39.8533 109.872 39.3992 109.701 38.9606C109.53 38.522 109.146 38.2048 108.551 38.009C107.971 37.8078 107.378 37.8077 106.77 38.0086C106.195 38.1987 105.814 38.5296 105.627 39.0012C105.456 39.4673 105.462 39.9348 105.645 40.4036C105.774 40.7337 105.964 40.9938 106.215 41.1841C106.309 41.2554 106.411 41.3169 106.522 41.3686C106.802 41.4816 107.121 41.5132 107.478 41.4632C107.655 41.4385 107.841 41.3937 108.037 41.3289C108.492 41.1787 108.87 40.9535 109.173 40.6532Z",
    fill: "#252B51",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("clipPath", {
    id: "clip0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("rect", {
    width: "134.373",
    height: "67",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))));
}

Logo.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
const QuizLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Logo).withConfig({
  displayName: "QuizLogo",
  componentId: "rct3ik-0"
})(["margin:auto;display:block;@media screen and (max-width:500px){margin:0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (QuizLogo);

/***/ }),

/***/ "./src/components/Widget/index.js":
/*!****************************************!*\
  !*** ./src/components/Widget/index.js ***!
  \****************************************/
/*! exports provided: Widget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Widget = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Widget",
  componentId: "i6tyvd-0"
})(["margin-top:20px;margin-bottom:20px;border:1px solid ", ";background-color:", ";border-radius:4px;overflow:hidden;h1,h2,h3{font-size:16px;font-weight:700;line-height:1;margin-bottom:0;}p{font-size:14px;font-weight:400;line-height:1;}"], ({
  theme
}) => {
  console.log(theme);
  return theme.colors.primary;
}, ({
  theme
}) => {
  console.log(theme);
  return theme.colors.mainBg;
});
Widget.Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "Widget__Header",
  componentId: "i6tyvd-1"
})(["display:flex;justify-content:flex-start;align-items:center;padding:18px 32px;background-color:", ";*{margin:0;}"], ({
  theme
}) => theme.colors.primary);
Widget.Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Widget__Content",
  componentId: "i6tyvd-2"
})(["padding:24px 32px 32px 32px;align-items:center;& > *:first-child{margin-top:0;}& > *:last-child{margin-bottom:0;}ul{list-style:none;padding:0;}"]);
Widget.Topic = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "Widget__Topic",
  componentId: "i6tyvd-3"
})(["outline:0;text-decoration:none;color:", ";background-color:", ";padding:10px 15px;margin-bottom:8px;cursor:pointer;border-radius:", ";transition:.3s;display:block;&:hover,&:focus{opacity:.5;}"], ({
  theme
}) => theme.colors.main, ({
  theme
}) => `${theme.colors.primary}50`, ({
  theme
}) => theme.borderRadius);
/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3F1aXouanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWx0ZXJuYXRpdmVGb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0JsYWNrTGlua0Fycm93L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HaXRIdWJDb3JuZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1F1aXpDb250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUXVpekxvZ28vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0L2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsicHJlZmV0Y2hlZCIsInJvdXRlciIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwiY29uc29sZSIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImRhdGEiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJ2YWxpZGF0ZSIsInBhcnNlZERlc3RpbmF0aW9uIiwiaGFkTG9jYWxlIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInN0ck9yQXJyYXkiLCJjb21waWxlTm9uUGF0aCIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwiZnNQYXRobmFtZSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJMb2FkaW5nU2NyZWVuIiwiUmVzdWx0V2lkZ2V0IiwicmVzdWx0cyIsIm1vdGlvbiIsInNlY3Rpb24iLCJkZWxheSIsImR1cmF0aW9uIiwic2hvdyIsIm9wYWNpdHkiLCJoaWRkZW4iLCJmaWx0ZXIiLCJsZW5ndGgiLCJxdWVzdGlvbkluZGV4IiwiZGIiLCJleHRlcm5hbCIsImxpbmtFeHRlcm5vIiwicHJvamVjdE5hbWUiLCJnaXRodWJVc2VyIiwic3BsaXQiLCJRdWVzdGlvbldpZGdldCIsInF1ZXN0aW9uIiwidG90YWxRdWVzdGlvbnMiLCJvblN1Ym1pdCIsImFkZFJlc3VsdHMiLCJzZWxlY3RlZEFsdGVybmF0aXZlIiwic2V0U2VsZWN0ZWRBbHRlcm5hdGl2ZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwiaXNRdWVzdGlvblN1Ym1pdGVkIiwic2V0SXNRdWVzdGlvblN1Ym1pdGVkIiwicXVlc3Rpb25JZCIsImlzQ29ycmVjdCIsImFuc3dlciIsImhhc0FsdGVybmF0aXZlU2VsZWN0ZWQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImluZm9zRG9FdmVudG8iLCJwcmV2ZW50RGVmYXVsdCIsImFsdGVybmF0aXZlcyIsImFsdGVybmF0aXZlIiwiYWx0ZXJuYXRpdmVJbmRleCIsImFsdGVybmF0aXZlSWQiLCJhbHRlcm5hdGl2ZVN0YXR1cyIsImlzU2VsZWN0ZWQiLCJkaXNwbGF5Iiwic2NyZWVuU3RhdGVzIiwiUVVJWiIsIkxPQURJTkciLCJSRVNVTFQiLCJRdWl6UGFnZSIsInNjcmVlblN0YXRlIiwic2V0U2NyZWVuU3RhdGUiLCJzZXRSZXN1bHRzIiwicXVlc3Rpb25zIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0UXVpeiIsIm5leHRRdWVzdGlvbiIsImJnIiwiQWx0ZXJuYXRpdmVzRm9ybSIsInN0eWxlZCIsImZvcm0iLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJ3cm9uZyIsIlN0eWxlZExpbmsiLCJTVkciLCJzdmciLCJCYWNrTGlua0Fycm93IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIkJ1dHRvbiIsImJ1dHRvbiIsImJvcmRlclJhZGl1cyIsImNvbnRyYXN0VGV4dCIsInR5cGUiLCJvbmVPZiIsIm5vZGUiLCJXcmFwcGVyIiwiZGl2IiwiU1ZHV3JhcHBlciIsIm1haW5CZyIsIkdpdEh1YkNvcm5lciIsInByb2plY3RVcmwiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJTcGlubmVyQm94IiwiQmx1ZSIsIkdyZWVuIiwiUmVkIiwiQ2lyY2xlIiwiTG9hZGluZ09yYml0cyIsIlF1aXpCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEltYWdlIiwiUXVpekNvbnRhaW5lciIsIkxvZ28iLCJjbGFzc05hbWUiLCJRdWl6TG9nbyIsIldpZGdldCIsImxvZyIsIkhlYWRlciIsImhlYWRlciIsIkNvbnRlbnQiLCJUb3BpYyIsImEiLCJtYWluIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFBLHdIQUtzQixDQUFDO0FBQUV6QztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BTGxEO0FBWUFvQyxNQUFNLENBQUNJLE9BQVAsR0FBaUI1Qyx3REFBTSxDQUFDc0IsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFjQWtCLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlN0Msd0RBQU0sQ0FBQzhDLENBQXRCO0FBQUE7QUFBQTtBQUFBLHdNQUdXLENBQUM7QUFBRTVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYTRDLElBSHZDLEVBSXNCLENBQUM7QUFBRTdDO0FBQUYsQ0FBRCxLQUFnQixHQUFFQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FBUSxJQUo3RCxFQVFtQixDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNjLFlBUnhDO0FBa0Jld0IscUVBQWYsRTs7Ozs7Ozs7Ozs7QUN4RUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcXVpei5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcXVpei5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIC8vIEZJWE1FOiBwcm9wZXIgcm91dGUgYW5ub3VuY2luZyBhdCBSb3V0ZXIgbGV2ZWwsIG5vdCBMaW5rOlxuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IGdldERvbWFpbkxvY2FsZShcbiAgICAgIGFzLFxuICAgICAgY3VyTG9jYWxlLFxuICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdElkbGVDYWxsYmFja1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG5mdW5jdGlvbiBpZGxlVGltZW91dDxUPihtczogbnVtYmVyLCBlcnI6IEVycm9yKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KGVyciksIG1zKSlcbiAgKVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIGlkbGVUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICAgICksXG4gIF0pXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgaWRsZVRpbWVvdXQ8Um91dGVMb2FkZXJFbnRyeT4oXG4gICAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5Jyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChcbiAgICAgICAgICBhZGRMb2NhbGUoZGVsQmFzZVBhdGgocGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUpLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwge1xuICAgICAgICAgICAgICBwYXRobmFtZTogbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgICAgICBoYXNCYXNlUGF0aChyZXNvbHZlZEFzKSA/IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICAgICAgKS5wYXRobmFtZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUocmVzb2x2ZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fCAob3B0aW9ucy5zY3JvbGwgPyB7IHg6IDAsIHk6IDAgfSA6IG51bGwpXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzUGF0aCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlTm9uUGF0aCh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoJzonKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyYW1zKSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhgOiR7a2V5fWApKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcKmAsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTYFxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcP2AsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT05gXG4gICAgICAgIClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwrYCwgJ2cnKSwgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUExVU2ApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX0oPyFcXFxcdylgLCAnZycpLFxuICAgICAgICAgIGAtLUVTQ0FQRURfUEFSQU1fQ09MT04ke2tleX1gXG4gICAgICAgIClcbiAgICB9XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZVxuICAgIC5yZXBsYWNlKC8oOnxcXCp8XFw/fFxcK3xcXCh8XFwpfFxce3xcXH0pL2csICdcXFxcJDEnKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUExVUy9nLCAnKycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9DT0xPTi9nLCAnOicpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTi9nLCAnPycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1MvZywgJyonKVxuXG4gIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAvLyBjb3JyZWN0bHlcbiAgcmV0dXJuIHBhdGhUb1JlZ2V4cFxuICAgIC5jb21waWxlKGAvJHt2YWx1ZX1gLCB7IHZhbGlkYXRlOiBmYWxzZSB9KShwYXJhbXMpXG4gICAgLnN1YnN0cigxKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW5cbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgLy8gY2xvbmUgcXVlcnkgc28gd2UgZG9uJ3QgbW9kaWZ5IHRoZSBvcmlnaW5hbFxuICBxdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXJ5KVxuICBjb25zdCBoYWRMb2NhbGUgPSBxdWVyeS5fX25leHRMb2NhbGVcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZVxuICBkZWxldGUgcXVlcnkuX19uZXh0RGVmYXVsdExvY2FsZVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gY29tcGlsZU5vblBhdGgodmFsdWUsIHBhcmFtcylcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBsZXQgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIC8vIHJlbW92ZSBpbnRlcm5hbCBwYXJhbSBmb3IgaTE4blxuICBpZiAoaGFkTG9jYWxlKSB7XG4gICAgcGFyYW1LZXlzID0gcGFyYW1LZXlzLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gJ25leHRJbnRlcm5hbExvY2FsZScpXG4gIH1cblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIG5ld1VybCA9IGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgKHBhcnNlZERlc3RpbmF0aW9uIGFzIGFueSkuc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhub3JtYWxpemVMb2NhbGVQYXRoKGFzUGF0aCwgbG9jYWxlcykucGF0aG5hbWUpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgY29uc3QgZnNQYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSxcbiAgICAgICAgICBsb2NhbGVzXG4gICAgICAgICkucGF0aG5hbWVcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoZnNQYXRobmFtZSkpIHtcbiAgICAgICAgICBhc1BhdGggPSBmc1BhdGhuYW1lXG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihmc1BhdGhuYW1lKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYXNQYXRoID0gZnNQYXRobmFtZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGIuanNvbic7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTGluayc7XHJcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0JztcclxuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvJztcclxuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kJztcclxuaW1wb3J0IFF1aXpDb250YWluZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekNvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IEFsdGVybmF0aXZlc0Zvcm0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQWx0ZXJuYXRpdmVGb3JtJztcclxuaW1wb3J0IExvYWRpbmdPcmJpdHMgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTG9hZGluZydcclxuaW1wb3J0IEJhY2tMaW5rQXJyb3cgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQmxhY2tMaW5rQXJyb3cnO1xyXG5pbXBvcnQgR2l0SHViQ29ybmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0dpdEh1YkNvcm5lcic7XHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nU2NyZWVuKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIENhcnJlZ2FuZG8gUGVyZ3VudGEuLi5cclxuICAgICAgICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZ09yYml0cy8+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZXN1bHRXaWRnZXQoe3Jlc3VsdHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gIFxyXG4gICAgICAgIDxXaWRnZXRcclxuICAgICAgICBhcz17bW90aW9uLnNlY3Rpb259XHJcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC41LCBkdXJhdGlvbjogMC41IH19XHJcbiAgICAgICAgdmFyaWFudHM9e3tcclxuICAgICAgICAgIHNob3c6IHsgb3BhY2l0eTogMSB9LFxyXG4gICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgIGFuaW1hdGU9XCJzaG93XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8QmFja0xpbmtBcnJvdyBocmVmPVwiL1wiIC8+IFBvbnR1YcOnw6NvXHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICA8cD57YHZvY2UgYWNlcnRvdSBgfVxyXG4gICAgICAgICAgICAgICAge3Jlc3VsdHMuZmlsdGVyKCh4KSA9PiB4KS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICB7YCBxdWVzdG9lcywgcGFyYWLDqW5zIWB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtyZXN1bHRzLm1hcCgocmVzdWx0LCBxdWVzdGlvbkluZGV4KSA9PihcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5ID0ge2ByZXN1bHRfXyR7cmVzdWx0fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjMHtxdWVzdGlvbkluZGV4ICsgMX0gUmVzdWx0YWRvOiB7cmVzdWx0ID09PSB0cnVlID8gJ0FjZXJ0b3UnOiAnRXJyb3UnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuXHJcbiAgICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cclxuICAgICAgICAgICAgPGgxPlF1aXplcyBkYSBHYWxlcmE8L2gxPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7ZGIuZXh0ZXJuYWwubWFwKChsaW5rRXh0ZXJubykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3Byb2plY3ROYW1lLCBnaXRodWJVc2VyXSA9IGxpbmtFeHRlcm5vXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnaHR0cHM6JywgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJy52ZXJjZWwuYXBwJywgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtsaW5rRXh0ZXJub30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdpZGdldC5Ub3BpY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e25hbWUubGVuZ3RoID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3F1aXovJHtwcm9qZWN0TmFtZX1fX18ke2dpdGh1YlVzZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtnaXRodWJVc2VyfS8ke3Byb2plY3ROYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9XaWRnZXQuVG9waWM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICA8R2l0SHViQ29ybmVyIHByb2plY3RVcmw9XCJodHRwczovL2dpdGh1Yi5jb20vanVuaW9yc24xNDA5L2FsdXJhcXVpei1zdGFydHJlay5naXRcIiAvPlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFF1ZXN0aW9uV2lkZ2V0KCB7XHJcbiAgICBxdWVzdGlvbiwgXHJcbiAgICBxdWVzdGlvbkluZGV4LCBcclxuICAgIHRvdGFsUXVlc3Rpb25zLFxyXG4gICAgb25TdWJtaXQsXHJcbiAgICBhZGRSZXN1bHRzLFxyXG59ICkge1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQWx0ZXJuYXRpdmUsIHNldFNlbGVjdGVkQWx0ZXJuYXRpdmVdID0gUmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IFtpc1F1ZXN0aW9uU3VibWl0ZWQsIHNldElzUXVlc3Rpb25TdWJtaXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBxdWVzdGlvbklkID1gcXVlc3Rpb25fXyR7cXVlc3Rpb25JbmRleH1gO1xyXG4gICAgY29uc3QgaXNDb3JyZWN0ID0gc2VsZWN0ZWRBbHRlcm5hdGl2ZSA9PT0gcXVlc3Rpb24uYW5zd2VyO1xyXG4gICAgY29uc3QgaGFzQWx0ZXJuYXRpdmVTZWxlY3RlZCA9IHNlbGVjdGVkQWx0ZXJuYXRpdmUgIT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICA8QmFja0xpbmtBcnJvdyBocmVmPVwiL1wiIC8+IHtgUGVyZ3VudGEgJHtxdWVzdGlvbkluZGV4ICArIDF9IGRlICR7dG90YWxRdWVzdGlvbnN9YH1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiRGVzY3Jpw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOicxMDAlJywgaGVpZ2h0OicxNTBweCcsIG9iamVjdEZpdDonZGlzcGxheScsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3JjPSB7cXVlc3Rpb24uaW1hZ2V9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxBbHRlcm5hdGl2ZXNGb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoaW5mb3NEb0V2ZW50bykgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvc0RvRXZlbnRvLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1F1ZXN0aW9uU3VibWl0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFJlc3VsdHMoaXNDb3JyZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzUXVlc3Rpb25TdWJtaXRlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRBbHRlcm5hdGl2ZSh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAgMiAqIDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmFsdGVybmF0aXZlcy5tYXAoIChhbHRlcm5hdGl2ZSwgYWx0ZXJuYXRpdmVJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHRlcm5hdGl2ZUlkID0gYGFsdGVybmF0aXZlX18ke2FsdGVybmF0aXZlSW5kZXh9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmVTdGF0dXMgPSAgaXNDb3JyZWN0ID8gJ1NVQ0NFU1MnIDogJ0VSUk9SJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkQWx0ZXJuYXRpdmUgPT09IGFsdGVybmF0aXZlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpZGdldC5Ub3BpYyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cImxhYmVsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXthbHRlcm5hdGl2ZUlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXthbHRlcm5hdGl2ZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zdGF0dXM9e2lzUXVlc3Rpb25TdWJtaXRlZCAmJiBhbHRlcm5hdGl2ZVN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXthbHRlcm5hdGl2ZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdWVzdGlvbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0U2VsZWN0ZWRBbHRlcm5hdGl2ZShhbHRlcm5hdGl2ZUluZGV4KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWx0ZXJuYXRpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9XaWRnZXQuVG9waWM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7IC8qPHByZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHF1ZXN0aW9uLCBudWxsLCA0KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3ByZT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshaGFzQWx0ZXJuYXRpdmVTZWxlY3RlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1hclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1F1ZXN0aW9uU3VibWl0ZWQgJiYgaXNDb3JyZWN0IH1cclxuICAgICAgICAgICAgICAgICAgICB7aXNRdWVzdGlvblN1Ym1pdGVkICYmICFpc0NvcnJlY3QgfVxyXG4gICAgICAgICAgICAgICAgPC9BbHRlcm5hdGl2ZXNGb3JtPlxyXG4gICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3Qgc2NyZWVuU3RhdGVzID0ge1xyXG4gICAgUVVJWjonUVVJWicsXHJcbiAgICBMT0FESU5HOidMT0FESU5HJyxcclxuICAgIFJFU1VMVDonUkVTVUxUJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpQYWdlKCkge1xyXG4gICAgY29uc3QgW3NjcmVlblN0YXRlLCBzZXRTY3JlZW5TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShzY3JlZW5TdGF0ZXMuTE9BRElORyk7XHJcbiAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCB0b3RhbFF1ZXN0aW9ucyA9IGRiLnF1ZXN0aW9ucy5sZW5ndGg7XHJcbiAgICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBxdWVzdGlvbkluZGV4ID0gY3VycmVudFF1ZXN0aW9uO1xyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBkYi5xdWVzdGlvbnNbcXVlc3Rpb25JbmRleF07XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkUmVzdWx0cyhyZXN1bHQpIHtcclxuICAgICAgICAvL3Jlc3VsdHMucHVzaChyZXN1bHQpOyBmdW5jaW9uYVxyXG4gICAgICAgIHNldFJlc3VsdHMoW1xyXG4gICAgICAgICAgICAuLi5yZXN1bHRzLFxyXG4gICAgICAgICAgICByZXN1bHQsXHJcbiAgICAgICAgXSkgXHJcbiAgICB9XHJcblxyXG4gICAgLy9bUmVhY3QgY2hhbWEgZGU6IEVmZWl0b3N8fCBFZmZlY3RzXSBjaWNsbyBkZSBlc3RhZG9zIVxyXG4gICAgLy9SZWFjdC51c2VFZmZldFxyXG4gICAgLy8gYXR1YWxpemFkbyA9PT0gV2lsbFVwZGF0ZVxyXG4gICAgLy9tb3JyZSA9PT0gd2lsbFVubW91bnRcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9mZXRjaCgpLi4uXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNjcmVlblN0YXRlKHNjcmVlblN0YXRlcy5RVUlaKTtcclxuICAgICAgICB9LCAxKiAxMDAwKTtcclxuICAgIC8vbmFzY2UgPT09IGRpZE1vdW50XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0UXVpeigpIHtcclxuICAgICAgICBjb25zdCBuZXh0UXVlc3Rpb24gPSBxdWVzdGlvbkluZGV4ICsgMTtcclxuXHJcbiAgICAgICAgaWYgKG5leHRRdWVzdGlvbiA8IHRvdGFsUXVlc3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihuZXh0UXVlc3Rpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNjcmVlblN0YXRlKHNjcmVlblN0YXRlcy5SRVNVTFQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCAgXHJcbiAgICAgICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxyXG4gICAgICAgICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxRdWl6TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuUVVJWiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uV2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uID0ge3F1ZXN0aW9ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25JbmRleCA9IHtxdWVzdGlvbkluZGV4fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxRdWVzdGlvbnMgPSB7dG90YWxRdWVzdGlvbnN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdCA9IHtoYW5kbGVTdWJtaXRRdWl6fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRSZXN1bHRzID0ge2FkZFJlc3VsdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5MT0FESU5HICYmIDxMb2FkaW5nU2NyZWVuIC8+fVxyXG5cclxuICAgICAgICAgICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLlJFU1VMVCAgJiYgPFJlc3VsdFdpZGdldCByZXN1bHRzID0ge3Jlc3VsdHN9IC8+IH1cclxuXHJcbiAgICAgICAgICAgIDwvUXVpekNvbnRhaW5lcj5cclxuICAgICAgICA8L1F1aXpCYWNrZ3JvdW5kPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQWx0ZXJuYXRpdmVzRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGxhYmVsIHtcclxuICAgICZbZGF0YS1zZWxlY3RlZD1cInRydWVcIl0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgXHJcbiAgICAgICZbZGF0YS1zdGF0dXM9XCJTVUNDRVNTXCJdIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5zdWNjZXNzfTtcclxuICAgICAgfVxyXG4gICAgICAmW2RhdGEtc3RhdHVzPVwiRVJST1JcIl0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndyb25nfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9IFxyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbHRlcm5hdGl2ZXNGb3JtOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcclxuXHJcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXHJcbiAgdHJhbnNpdGlvbjogLjNzO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9OztcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTVkcgPSBzdHlsZWQuc3ZnYFxyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWNrTGlua0Fycm93KHsgaHJlZiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRMaW5rIGhyZWY9e2hyZWZ9IHN0eWxlPXt7IHdpZHRoOiAnMjRweCcsIGhlaWdodDogJzI0cHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cclxuICAgICAgPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNS40MSA3LjQxTDE0IDZMOCAxMkwxNCAxOEwxNS40MSAxNi41OUwxMC44MyAxMkwxNS40MSA3LjQxWlwiIGZpbGw9XCJ3aGl0ZVwiIGZpbGxPcGFjaXR5PVwiMC44N1wiIC8+XHJcbiAgICAgIDwvU1ZHPlxyXG4gICAgPC9TdHlsZWRMaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbkJhY2tMaW5rQXJyb3cucHJvcFR5cGVzID0ge1xyXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXB4ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyUmFkaXVzfTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMzc3ZDcyO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5jb250cmFzdFRleHR9O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyBcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gM3MgY3ViaWMtYmV6aWVyKDAsIDEuNjksIDAuNzYsIDEuNzQpO1xyXG4vKiBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5jb250cmFzdFRleHR9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyUmFkaXVzfTtcclxuICBib3JkZXI6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICovXHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3BhY2l0eTogLjkwO1xyXG4gIH1cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2IyOWY7XHJcbiAgICBjb2xvcjogI2EzOTE2OTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydzdWJtaXQnLCAndHlwZScsICdidXR0b24nXSkuaXNSZXF1aXJlZCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCIvLyBzcmMvY29tcG9uZW50cy9HaXRIdWJDb3JuZXIvaW5kZXguanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3JkZXI6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyMDtcbmA7XG5cbmNvbnN0IFNWR1dyYXBwZXIgPSBzdHlsZWQuc3ZnYFxuICBmaWxsOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQmd9O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlciAub2N0by1hcm17XG4gICAgYW5pbWF0aW9uOm9jdG9jYXQtd2F2ZSA1NjBtcyBlYXNlLWluLW91dFxuICB9XG4gIEBrZXlmcmFtZXMgb2N0b2NhdC13YXZle1xuICAgIDAlLDEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgwKX1cbiAgICAyMCUsNjAle3RyYW5zZm9ybTpyb3RhdGUoLTI1ZGVnKX1cbiAgICA0MCUsODAle3RyYW5zZm9ybTpyb3RhdGUoMTBkZWcpfVxuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXtcbiAgICAmOmhvdmVyIC5vY3RvLWFybXtcbiAgICAgIGFuaW1hdGlvbjpub25lXG4gICAgfVxuICAgICYgLm9jdG8tYXJte1xuICAgICAgYW5pbWF0aW9uOm9jdG9jYXQtd2F2ZSA1NjBtcyBlYXNlLWluLW91dFxuICAgIH1cbiAgfVxuYDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdpdEh1YkNvcm5lcih7IHByb2plY3RVcmwgfSkge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPGEgaHJlZj17cHJvamVjdFVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICA8U1ZHV3JhcHBlciBjbGFzc05hbWU9XCJnaXRodWJDb3JuZXJcIiB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiODBcIiB2aWV3Qm94PVwiMCAwIDI1MCAyNTBcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTAsMCBMMTE1LDExNSBMMTMwLDExNSBMMTQyLDE0MiBMMjUwLDI1MCBMMjUwLDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMjguMywxMDkuMCBDMTEzLjgsOTkuNyAxMTkuMCw4OS42IDExOS4wLDg5LjYgQzEyMi4wLDgyLjcgMTIwLjUsNzguNiAxMjAuNSw3OC42IEMxMTkuMiw3Mi4wIDEyMy40LDc2LjMgMTIzLjQsNzYuMyBDMTI3LjMsODAuOSAxMjUuNSw4Ny4zIDEyNS41LDg3LjMgQzEyMi45LDk3LjYgMTMwLjYsMTAxLjkgMTM0LjQsMTAzLjJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMTMwcHggMTA2cHgnIH19IGNsYXNzTmFtZT1cIm9jdG8tYXJtXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTExNS4wLDExNS4wIEMxMTQuOSwxMTUuMSAxMTguNywxMTYuNSAxMTkuOCwxMTUuNCBMMTMzLjcsMTAxLjYgQzEzNi45LDk5LjIgMTM5LjksOTguNCAxNDIuMiw5OC42IEMxMzMuOCw4OC4wIDEyNy41LDc0LjQgMTQzLjgsNTguMCBDMTQ4LjUsNTMuNCAxNTQuMCw1MS4yIDE1OS43LDUxLjAgQzE2MC4zLDQ5LjQgMTYzLjIsNDMuNiAxNzEuNCw0MC4xIEMxNzEuNCw0MC4xIDE3Ni4xLDQyLjUgMTc4LjgsNTYuMiBDMTgzLjEsNTguNiAxODcuMiw2MS44IDE5MC45LDY1LjQgQzE5NC41LDY5LjAgMTk3LjcsNzMuMiAyMDAuMSw3Ny42IEMyMTMuOCw4MC4yIDIxNi4zLDg0LjkgMjE2LjMsODQuOSBDMjEyLjcsOTMuMSAyMDYuOSw5Ni4wIDIwNS40LDk2LjYgQzIwNS4xLDEwMi40IDIwMy4wLDEwNy44IDE5OC4zLDExMi41IEMxODEuOSwxMjguOSAxNjguMywxMjIuNSAxNTcuNywxMTQuMSBDMTU3LjksMTE2LjkgMTU2LjcsMTIwLjkgMTUyLjcsMTI0LjkgTDE0MS4wLDEzNi41IEMxMzkuOCwxMzcuNyAxNDEuNiwxNDEuOSAxNDEuOCwxNDEuOCBaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cIm9jdG8tYm9keVwiIC8+XG4gICAgICAgIDwvU1ZHV3JhcHBlcj5cbiAgICAgIDwvYT5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmsoeyBjaGlsZHJlbiwgaHJlZiwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0gcGFzc0hyZWY+XHJcbiAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovfVxyXG4gICAgICA8YSB7Li4ucHJvcHN9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9hPlxyXG4gICAgPC9OZXh0TGluaz5cclxuICApO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBTcGlubmVyQm94ID0gc3R5bGVkLmRpdlxyXG5gXHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDE4MHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgfVxyXG4gICAgdG97XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc3BpbjNEIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKC41LC41LC41LCAzNjBkZWcpO1xyXG4gICAgfVxyXG4gICAgdG97XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEJsdWUgPSBzdHlsZWQuZGl2XHJcbmBcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxud2lkdGg6IDE2NXB4O1xyXG5oZWlnaHQ6IDE2NXB4O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAgICMzNzdkNzI7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgM3MgbGluZWFyIC4ycyBpbmZpbml0ZTtcclxuYFxyXG5jb25zdCBHcmVlbiA9IHN0eWxlZC5kaXZcclxuYFxyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5ib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG53aWR0aDogMTIwcHg7XHJcbmhlaWdodDogMTIwcHg7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNiZDI4MDA7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMnMgbGluZWFyIDFzIGluZmluaXRlO1xyXG5gXHJcbmNvbnN0IFJlZCA9IHN0eWxlZC5kaXZcclxuYFxyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5ib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG53aWR0aDogOTBweDtcclxuaGVpZ2h0OiA5MHB4O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjMzc3ZDcyO1xyXG4td2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDJzIGxpbmVhciAwcyBpbmZpbml0ZTtcclxuYFxyXG5jb25zdCBDaXJjbGUgPSBzdHlsZWQuZGl2XHJcbmBcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxud2lkdGg6IDkwcHg7XHJcbmhlaWdodDogOTBweDtcclxuYm9yZGVyOiAxcHggc29saWQgI2JkMjgwMDtcclxuLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAwLjdzIGxpbmVhciAxcyBpbmZpbml0ZTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZ09yYml0cygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNwaW5uZXJCb3g+XHJcbiAgICAgICAgICAgIDxCbHVlPjwvQmx1ZT5cclxuICAgICAgICAgICAgPEdyZWVuPjwvR3JlZW4+XHJcbiAgICAgICAgICAgIDxSZWQ+PC9SZWQ+XHJcbiAgICAgICAgICAgIDxDaXJjbGU+PC9DaXJjbGU+XHJcblxyXG4gICAgICAgIDwvU3Bpbm5lckJveD5cclxuICAgICk7XHJcbiAgfVxyXG4gICIsIi8vIHNyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kL2luZGV4LmpzXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUXVpekJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsoeyBiYWNrZ3JvdW5kSW1hZ2UgfSkgPT4gYmFja2dyb3VuZEltYWdlfSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5CZ307XG4gIGZsZXg6IDE7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQmd9KSxcbiAgICAgICAgdXJsKCR7KHsgYmFja2dyb3VuZEltYWdlIH0pID0+IGJhY2tncm91bmRJbWFnZX0pO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjEwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICAqOmZpcnN0LWNoaWxkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUXVpekJhY2tncm91bmQ7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFF1aXpDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgbWFyZ2luOiBhdXRvIDEwJTtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6Q29udGFpbmVyOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmZ1bmN0aW9uIExvZ28oeyBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHdpZHRoPVwiMTM1XCIgaGVpZ2h0PVwiNjdcIiB2aWV3Qm94PVwiMCAwIDEzNSA2N1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwKVwiPlxuICAgICAgICA8bWFzayBpZD1cInBhdGgtMS1vdXRzaWRlLTFcIiBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHg9XCIyXCIgeT1cIjJcIiB3aWR0aD1cIjExMFwiIGhlaWdodD1cIjUwXCIgZmlsbD1cImJsYWNrXCI+XG4gICAgICAgICAgPHJlY3QgZmlsbD1cIndoaXRlXCIgeD1cIjJcIiB5PVwiMlwiIHdpZHRoPVwiMTEwXCIgaGVpZ2h0PVwiNTBcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMzIuMDM0NSA0SDM2LjgzNTRDMzcuMDc2NiA0IDM3LjI3ODcgNC4xODYgMzcuMjc4NyA0LjQwOFY0OC42MjhDMzcuMjc3OCA0OC43MzYxIDM3LjIzMDkgNDguODM5NiAzNy4xNDggNDguOTE2MkMzNy4wNjUxIDQ4Ljk5MjggMzYuOTUyOSA0OS4wMzYzIDM2LjgzNTQgNDkuMDM3NUgzMi4wMzQ1QzMxLjkxNzEgNDkuMDM2MyAzMS44MDQ4IDQ4Ljk5MjggMzEuNzIxOSA0OC45MTYyQzMxLjYzOSA0OC44Mzk2IDMxLjU5MjEgNDguNzM2MSAzMS41OTEzIDQ4LjYyOFY0LjQwOEMzMS41OTEzIDQuMTg2IDMxLjc5MTcgNCAzMi4wMzQ1IDRaTTY1LjAyOTYgNDAuMzg1NVY0MS41QzY1LjAyOTYgNDEuOTgzIDY0Ljk0OTggNDIuNjUwNSA2NC43NDc3IDQzLjUwNTVDNjQuNTg2NCA0NC4zMjE1IDY0LjEwMjQgNDUuMTc1IDYzLjMzNjQgNDUuOTkyNUM2Mi41NzA1IDQ2LjgxIDYxLjQ0MTIgNDcuNTUyNSA1OS45MDc3IDQ4LjE0NjVDNTguMzc1OSA0OC43NDA1IDU2LjI3NjkgNDkuMDM3NSA1My41NzUgNDkuMDM3NUM1MC44NzE0IDQ5LjAzNzUgNDguNzc0MSA0OC43NDA1IDQ3LjI0MjIgNDguMTQ2NUM0NS43MTA0IDQ3LjU1MjUgNDQuNTc5NCA0Ni44NDYgNDMuODEzNSA0NS45OTI1QzQzLjA0NzYgNDUuMTc1IDQyLjU2MTkgNDQuMzIxNSA0Mi40MDA2IDQzLjQ2OEM0Mi4yMzkzIDQyLjYxMyA0Mi4xMTg3IDQxLjk4MyA0Mi4xMTg3IDQxLjVWMTYuMzI3QzQyLjExODcgMTYuMTAzNSA0Mi4zMjA3IDE1LjkxOSA0Mi41NjE5IDE1LjkxOUg0Ny4zNjI4QzQ3LjYwNCAxNS45MTkgNDcuODA2MSAxNi4xMDM1IDQ3LjgwNjEgMTYuMzI3VjM5LjkwNEM0Ny44MDYxIDQwLjY4NCA0Ny45MjY3IDQxLjIzOSA0OC4wNDg5IDQxLjY4NkM0OC4xNjk1IDQyLjEzMTUgNDguNDEwNyA0Mi41NzcgNDguNzc0MSA0Mi45NDc1QzQ5LjEzNzUgNDMuMzU3IDQ5LjcwMyA0My42OSA1MC40Njg5IDQzLjk1MUM1MS4xOTQxIDQ0LjIxMDUgNTIuMjAyOCA0NC4zNTkgNTMuNDU0NCA0NC4zNTlDNTQuNzQ1IDQ0LjM1OSA1NS43OTI5IDQ0LjIwOSA1Ni41NTg4IDQzLjk1MUM1Ny4zMjQ3IDQzLjY5IDU3Ljg5MDIgNDMuMzU3IDU4LjI5NDQgNDIuOTg1QzU4LjY5NjkgNDIuNjE0NSA1OC45Nzg4IDQyLjIwNSA1OS4xMDEgNDEuNzU5NUM1OS4yMjE2IDQxLjMxNCA1OS4zODMgNDAuOTQzNSA1OS4zODMgMzkuODY2NVYxNi4zMjdDNTkuMzgzIDE2LjEwMzUgNTkuNTg1IDE1LjkxOSA1OS44MjYyIDE1LjkxOUg2NC42MjcxQzY0Ljg2ODMgMTUuOTE5IDY1LjA3MDQgMTYuMTAzNSA2NS4wNzA0IDE2LjMyN1Y0MC4zODdINjUuMDI5NlY0MC4zODU1Wk04MS4zNjY3IDE1LjkxOUg4NC41OTMzQzg0Ljg3NjkgMTUuOTE5IDg1LjA3NzMgMTYuMTc4NSA4NC45OTc1IDE2LjQzOEw4My45MDg5IDIwLjI5OUM4My44NjgyIDIwLjQ4NSA4My42NjYxIDIwLjU5NiA4My41MDQ3IDIwLjU5Nkg4MS4yNDYxQzgwLjAzNTMgMjAuNTk2IDc5LjA2NzMgMjAuNzQ2IDc4LjMwMTMgMjEuMDQxNUM3Ny41NzYyIDIxLjMzODUgNzYuOTY5OSAyMS42NzMgNzYuNTY3NCAyMi4wODFDNzYuMjA5MiAyMi40MjcyIDc1Ljk0NjYgMjIuODQ3NSA3NS44MDE1IDIzLjMwNjVDNzUuNjc5MyAyMy43NTIgNzUuNjM4NSAyNC4xNjE1IDc1LjYzODUgMjQuNTMyVjQ4LjY2NTVDNzUuNjM3NyA0OC43NzM2IDc1LjU5MDggNDguODc3MSA3NS41MDc5IDQ4Ljk1MzdDNzUuNDI1IDQ5LjAzMDMgNzUuMzEyNyA0OS4wNzM4IDc1LjE5NTMgNDkuMDc1SDcwLjM1NTNDNzAuMjM3OCA0OS4wNzM4IDcwLjEyNTYgNDkuMDMwMyA3MC4wNDI3IDQ4Ljk1MzdDNjkuOTU5OCA0OC44NzcxIDY5LjkxMjggNDguNzczNiA2OS45MTIgNDguNjY1NVYyMy40OTI1QzY5LjkxMiAyMy4wNDcgNjkuOTkxOSAyMi4zNzggNzAuMTkzOSAyMS41MjQ1QzcwLjM1NTMgMjAuNjY5NSA3MC44MzkzIDE5Ljg1MzUgNzEuNjA1MiAxOUM3Mi4zNzExIDE4LjE4MjUgNzMuNTAyMSAxNy40NCA3NS4wMzM5IDE2Ljg0NkM3Ni41MjY3IDE2LjIxNiA3OC42NjQ3IDE1LjkxOSA4MS4zNjY3IDE1LjkxOVpNMTUuNDE1NiAxNS45MTlDMTkuMzI2NyAxNS45MTkgMjIuMTkxNiAxNi42MjQgMjQuMDQ3NyAxOC4wMzRDMjUuODYzMSAxOS40NDU1IDI2Ljc5MDQgMjEuMjI5IDI2Ljc5MDQgMjMuMzQ0VjQxLjUzNzVDMjYuNzkwNCA0Mi4yOCAyNi42MjkgNDMuMDk3NSAyNi4zNDcxIDQzLjk1MUMyNi4wNjUyIDQ0Ljg0MiAyNS40OTk3IDQ1LjY1OCAyNC42NTIzIDQ2LjM2NDVDMjMuODA0OSA0Ny4xMDcgMjIuNjM2NCA0Ny42OTk1IDIxLjE4NDQgNDguMjJDMTkuNzMwOCA0OC43MDMgMTcuNzk0OCA0OC45NjI1IDE1LjQ1NjMgNDguOTYyNUMxMy4wNzcgNDguOTYyNSAxMS4xODAxIDQ4LjcwMyA5LjcyODE1IDQ4LjIyQzguMjc2MTUgNDcuNzM3IDcuMTA0NDQgNDcuMTA3IDYuMjU4NjcgNDYuMzY0NUM1LjQxMTI2IDQ1LjYyMiA0Ljg0NzQxIDQ0LjgwNDUgNC41NjM4NSA0My45NDk1QzQuMjgxOTMgNDMuMDYgNC4xMjA1OSA0Mi4yNDI1IDQuMTIwNTkgNDEuNTM3NVYzOC42NDI1QzQuMTIwNTkgMzcuMDgyNSA0LjU2NTQ4IDM1LjY3MSA1LjQxMTI2IDM0LjQwOEM2LjI5OTQxIDMzLjE0NjUgNy41MDg1OSAzMi4yMTggOS4xMjM1NiAzMS42OTc1QzkuOTMwMjIgMzEuNDM4IDEwLjgxODQgMzEuMTc4NSAxMS44NjYyIDMwLjg0NEMxMi44NzUgMzAuNTA5NSAxMy44ODIxIDMwLjIxNCAxNC44NTAxIDI5Ljg3OEMxNS44MTgxIDI5LjU4MSAxNi42MjY0IDI5LjI4NCAxNy4zNTE2IDI5LjA2MkMxOC4wNzg0IDI4LjgwMjUgMTguNTIxNiAyOC42OSAxOC42ODMgMjguNjE2NUMxOC44NDQzIDI4LjU0MTUgMTkuMDg1NSAyOC40MzA1IDE5LjM2NzQgMjguMjgyQzE5LjY1MSAyOC4xMzM1IDE5LjkzMjkgMjcuOTExNSAyMC4yMTQ4IDI3LjY1MkMyMC40OTg0IDI3LjM1MzUgMjAuNzAwNCAyNy4wMjA1IDIwLjkwMDkgMjYuNjg2QzIxLjEwMyAyNi4zMTQgMjEuMTg0NCAyNS44Njg1IDIxLjE4NDQgMjUuMzg1NVYyNC4yMzVDMjEuMTg0NCAyMy44MjcgMjEuMTAzIDIzLjQxOSAyMC45MDA5IDIyLjk3MzVDMjAuNzM5NiAyMi41MjY1IDIwLjQxNjkgMjIuMTU2IDE5Ljk3MzYgMjEuNzg0QzE5LjUzMDQgMjEuNDEzNSAxOC45MjQxIDIxLjExNjUgMTguMTk3MyAyMC44OTNDMTcuNDcyMSAyMC42NzEgMTYuNTQ0OSAyMC41NiAxNS40MTU2IDIwLjU2QzEzLjE5NzYgMjAuNTYgMTEuNzA0OSAyMC45NjggMTAuODk4MiAyMS44MjE1QzEwLjIwMjQgMjIuNTcxNCA5Ljc5MTU1IDIzLjUxIDkuNzI4MTUgMjQuNDk0NUM5LjcyODE1IDI0LjcxOCA5LjUyNjA3IDI0Ljg2NjUgOS4yODQ4OSAyNC44NjY1SDQuNDQ0ODlDNC4zMjc0NCAyNC44NjU3IDQuMjE1MDIgMjQuODIyNSA0LjEzMTgyIDI0Ljc0NjJDNC4wNDg2MSAyNC42Njk5IDQuMDAxMjggMjQuNTY2NiA0IDI0LjQ1ODVWMjMuMzgxNUM0IDIyLjM0MiA0LjIwMjA3IDIxLjM3NiA0LjY0NTMzIDIwLjQ4NjVDNS4wNDk0OCAxOS41OTQgNS43MzM5MyAxOC43NzY1IDYuNzAxOTMgMTguMTA5QzcuNjMwODIgMTcuNDQgOC44MDA4OSAxNi44ODM1IDEwLjI1MjkgMTYuNTEzQzExLjY2NDEgMTYuMTQxIDEzLjM5ODEgMTUuOTE5IDE1LjQxNTYgMTUuOTE5Wk0yMS4xNDM3IDMyLjIxOEMyMS4xMDY3IDMyLjQwODUgMjEuMDI2NSAzMi41ODk2IDIwLjkwODMgMzIuNzQ5NkMyMC43OTAxIDMyLjkwOTYgMjAuNjM2NSAzMy4wNDQ5IDIwLjQ1NzYgMzMuMTQ2NUMyMC4wOTQyIDMzLjM2ODUgMTkuNzczMiAzMy40Nzk1IDE5LjQ0ODkgMzMuNTkyQzE4Ljc2NDQgMzMuODE0IDE4LjAzNzYgMzQuMDM3NSAxNy4yNzE3IDM0LjI5N0MxNi41MDU4IDM0LjU1NjUgMTUuNzc5IDM0LjgxNzUgMTUuMDkyOSAzNS4wMDJDMTQuMjg2MiAzNS4yNjMgMTMuNTIwMyAzNS40ODUgMTIuODM0MiAzNS43NDQ1QzEyLjI4NDcgMzUuOTY1NyAxMS43Njk1IDM2LjI1MzIgMTEuMzAyNCAzNi41OTk1QzEwLjg5ODIgMzYuOTMyNSAxMC41MzQ4IDM3LjM0MiAxMC4yMTA1IDM3Ljg2MUM5Ljg4OTQ4IDM4LjM4MTUgOS43MjgxNSAzOS4wMTMgOS43MjgxNSAzOS43OTE1QzkuNzI4MTUgNDEuMzUxNSAxMC4xMzA3IDQyLjUwMiAxMC45MzczIDQzLjI4MkMxMS43NDQgNDQuMDI0NSAxMy4yMzY3IDQ0LjQzMjUgMTUuNDE1NiA0NC40MzI1QzE3LjYzMzUgNDQuNDMyNSAxOS4xNjcgNDQuMDI0NSAxOS45NzM2IDQzLjI0NDVDMjAuNzgwMyA0Mi40Mjg1IDIxLjE4NDQgNDEuMzE0IDIxLjE4NDQgMzkuODI5VjMyLjIxOEgyMS4xNDM3Wk05OC41NTExIDE1LjkxOUMxMDIuNDYyIDE1LjkxOSAxMDUuMzI3IDE2LjYyNCAxMDcuMTgzIDE4LjAzNEMxMDguOTk5IDE5LjQ0NTUgMTA5LjkyNiAyMS4yMjkgMTA5LjkyNiAyMy4zNDRWNDEuNTM3NUMxMDkuOTI2IDQyLjI4IDEwOS43NjUgNDMuMDk3NSAxMDkuNDgzIDQzLjk1MUMxMDkuMTk5IDQ0Ljg0MiAxMDguNjM1IDQ1LjY1OCAxMDcuNzg4IDQ2LjM2NDVDMTA2Ljk0IDQ3LjEwNyAxMDUuNzcgNDcuNjk5NSAxMDQuMzE4IDQ4LjIyQzEwMi44NjggNDguNzAzIDEwMC45MyA0OC45NjI1IDk4LjU5MTkgNDguOTYyNUM5Ni4yMTI2IDQ4Ljk2MjUgOTQuMzE1NyA0OC43MDMgOTIuODYzNyA0OC4yMkM5MS40MTE3IDQ3LjczNyA5MC4yNCA0Ny4xMDcgODkuMzk0MiA0Ni4zNjQ1Qzg4LjU0NjggNDUuNjIyIDg3Ljk4MyA0NC44MDQ1IDg3LjY5OTQgNDMuOTQ5NUM4Ny40MTc1IDQzLjA2IDg3LjI1NjIgNDIuMjQyNSA4Ny4yNTYyIDQxLjUzNzVWMzguNjQyNUM4Ny4yNTYyIDM3LjA4MjUgODcuNjk5NCAzNS42NzEgODguNTQ2OCAzNC40MDhDODkuNDM1IDMzLjE0NjUgOTAuNjQ0MiAzMi4yMTggOTIuMjU3NSAzMS42OTc1QzkzLjA2NDIgMzEuNDM4IDkzLjk1MjMgMzEuMTc4NSA5NS4wMDE4IDMwLjg0NEM5Ni4wMDg5IDMwLjUwOTUgOTcuMDE3NiAzMC4yMTQgOTcuOTg1NiAyOS44NzhDOTguOTUzNiAyOS41ODEgOTkuNzYxOSAyOS4yODQgMTAwLjQ4NyAyOS4wNjJDMTAxLjIxMiAyOC44MDI1IDEwMS42NTcgMjguNjkgMTAxLjgxOSAyOC42MTY1QzEwMS45OCAyOC41NDE1IDEwMi4yMjEgMjguNDMwNSAxMDIuNTAzIDI4LjI4MkMxMDIuNzg3IDI4LjEzMzUgMTAzLjA2OCAyNy45MTE1IDEwMy4zNSAyNy42NTJDMTAzLjYzNCAyNy4zNTM1IDEwMy44MzQgMjcuMDIwNSAxMDQuMDM2IDI2LjY4NkMxMDQuMjM5IDI2LjMxNCAxMDQuMzE4IDI1Ljg2ODUgMTA0LjMxOCAyNS4zODU1VjI0LjIzNUMxMDQuMzE4IDIzLjgyNyAxMDQuMjM3IDIzLjQxOSAxMDQuMDM2IDIyLjk3MzVDMTAzLjg3NSAyMi41MjY1IDEwMy41NTIgMjIuMTU2IDEwMy4xMDggMjEuNzg0QzEwMi42NjYgMjEuNDEzNSAxMDIuMDYgMjEuMTE2NSAxMDEuMzM1IDIwLjg5M0MxMDAuNjA4IDIwLjY3MSA5OS42ODA1IDIwLjU2IDk4LjU1MTEgMjAuNTZDOTYuMzMxNiAyMC41NiA5NC44NDA1IDIwLjk2OCA5NC4wMzM4IDIxLjgyMTVDOTMuMzM3OSAyMi41NzE0IDkyLjkyNzEgMjMuNTEgOTIuODYzNyAyNC40OTQ1QzkyLjg2MzcgMjQuNzE4IDkyLjY2MTYgMjQuODY2NSA5Mi40MTg4IDI0Ljg2NjVIODcuNTc4OEM4Ny40NjE3IDI0Ljg2NTMgODcuMzQ5NiAyNC44MjIgODcuMjY2OCAyNC43NDU3Qzg3LjE4MzkgMjQuNjY5NCA4Ny4xMzY4IDI0LjU2NjMgODcuMTM1NiAyNC40NTg1VjIzLjM4MTVDODcuMTM1NiAyMi4zNDIgODcuMzM3NiAyMS4zNzYgODcuNzgwOSAyMC40ODY1Qzg4LjE4MzQgMTkuNTk0IDg4Ljg2OTUgMTguNzc2NSA4OS44Mzc1IDE4LjEwOUM5MC43NjY0IDE3LjQ0IDkxLjkzNDggMTYuODgzNSA5My4zODY4IDE2LjUxM0M5NC44NDA1IDE2LjE0MSA5Ni41MzM2IDE1LjkxOSA5OC41NTExIDE1LjkxOVpNMTA0LjI3OSAzMi4yMThDMTA0LjI0MiAzMi40MDg1IDEwNC4xNjIgMzIuNTg5NiAxMDQuMDQ0IDMyLjc0OTZDMTAzLjkyNiAzMi45MDk2IDEwMy43NzIgMzMuMDQ0OSAxMDMuNTkzIDMzLjE0NjVDMTAzLjIzIDMzLjM2ODUgMTAyLjkwOSAzMy40Nzk1IDEwMi41ODQgMzMuNTkyQzEwMS45IDMzLjgxNCAxMDEuMTczIDM0LjAzNzUgMTAwLjQwNiAzNC4yOTdDOTkuNjM5NyAzNC41NTY1IDk4LjkxNDUgMzQuODE3NSA5OC4yMjg0IDM1LjAwMkM5Ny40MjE4IDM1LjI2MyA5Ni42NTQyIDM1LjQ4NSA5NS45Njk4IDM1Ljc0NDVDOTUuNDE5NiAzNS45NjU2IDk0LjkwMzkgMzYuMjUzMSA5NC40MzYzIDM2LjU5OTVDOTQuMDMzOCAzNi45MzI1IDkzLjY3MDQgMzcuMzQyIDkzLjM0NzcgMzcuODYxQzkzLjAyNSAzOC4zODE1IDkyLjg2MzcgMzkuMDEzIDkyLjg2MzcgMzkuNzkxNUM5Mi44NjM3IDQxLjM1MTUgOTMuMjY2MiA0Mi41MDIgOTQuMDcyOSA0My4yODJDOTQuODc5NiA0NC4wMjQ1IDk2LjM3MjMgNDQuNDMyNSA5OC41NTExIDQ0LjQzMjVDMTAwLjc2OSA0NC40MzI1IDEwMi4zMDMgNDQuMDI0NSAxMDMuMTA5IDQzLjI0NDVDMTAzLjkxNiA0Mi40Mjg1IDEwNC4zMTggNDEuMzE0IDEwNC4zMTggMzkuODI5VjMyLjIxOEgxMDQuMjc5WlwiIC8+XG4gICAgICAgIDwvbWFzaz5cbiAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0zMi4wMzQ1IDRIMzYuODM1NEMzNy4wNzY2IDQgMzcuMjc4NyA0LjE4NiAzNy4yNzg3IDQuNDA4VjQ4LjYyOEMzNy4yNzc4IDQ4LjczNjEgMzcuMjMwOSA0OC44Mzk2IDM3LjE0OCA0OC45MTYyQzM3LjA2NTEgNDguOTkyOCAzNi45NTI5IDQ5LjAzNjMgMzYuODM1NCA0OS4wMzc1SDMyLjAzNDVDMzEuOTE3MSA0OS4wMzYzIDMxLjgwNDggNDguOTkyOCAzMS43MjE5IDQ4LjkxNjJDMzEuNjM5IDQ4LjgzOTYgMzEuNTkyMSA0OC43MzYxIDMxLjU5MTMgNDguNjI4VjQuNDA4QzMxLjU5MTMgNC4xODYgMzEuNzkxNyA0IDMyLjAzNDUgNFpNNjUuMDI5NiA0MC4zODU1VjQxLjVDNjUuMDI5NiA0MS45ODMgNjQuOTQ5OCA0Mi42NTA1IDY0Ljc0NzcgNDMuNTA1NUM2NC41ODY0IDQ0LjMyMTUgNjQuMTAyNCA0NS4xNzUgNjMuMzM2NCA0NS45OTI1QzYyLjU3MDUgNDYuODEgNjEuNDQxMiA0Ny41NTI1IDU5LjkwNzcgNDguMTQ2NUM1OC4zNzU5IDQ4Ljc0MDUgNTYuMjc2OSA0OS4wMzc1IDUzLjU3NSA0OS4wMzc1QzUwLjg3MTQgNDkuMDM3NSA0OC43NzQxIDQ4Ljc0MDUgNDcuMjQyMiA0OC4xNDY1QzQ1LjcxMDQgNDcuNTUyNSA0NC41Nzk0IDQ2Ljg0NiA0My44MTM1IDQ1Ljk5MjVDNDMuMDQ3NiA0NS4xNzUgNDIuNTYxOSA0NC4zMjE1IDQyLjQwMDYgNDMuNDY4QzQyLjIzOTMgNDIuNjEzIDQyLjExODcgNDEuOTgzIDQyLjExODcgNDEuNVYxNi4zMjdDNDIuMTE4NyAxNi4xMDM1IDQyLjMyMDcgMTUuOTE5IDQyLjU2MTkgMTUuOTE5SDQ3LjM2MjhDNDcuNjA0IDE1LjkxOSA0Ny44MDYxIDE2LjEwMzUgNDcuODA2MSAxNi4zMjdWMzkuOTA0QzQ3LjgwNjEgNDAuNjg0IDQ3LjkyNjcgNDEuMjM5IDQ4LjA0ODkgNDEuNjg2QzQ4LjE2OTUgNDIuMTMxNSA0OC40MTA3IDQyLjU3NyA0OC43NzQxIDQyLjk0NzVDNDkuMTM3NSA0My4zNTcgNDkuNzAzIDQzLjY5IDUwLjQ2ODkgNDMuOTUxQzUxLjE5NDEgNDQuMjEwNSA1Mi4yMDI4IDQ0LjM1OSA1My40NTQ0IDQ0LjM1OUM1NC43NDUgNDQuMzU5IDU1Ljc5MjkgNDQuMjA5IDU2LjU1ODggNDMuOTUxQzU3LjMyNDcgNDMuNjkgNTcuODkwMiA0My4zNTcgNTguMjk0NCA0Mi45ODVDNTguNjk2OSA0Mi42MTQ1IDU4Ljk3ODggNDIuMjA1IDU5LjEwMSA0MS43NTk1QzU5LjIyMTYgNDEuMzE0IDU5LjM4MyA0MC45NDM1IDU5LjM4MyAzOS44NjY1VjE2LjMyN0M1OS4zODMgMTYuMTAzNSA1OS41ODUgMTUuOTE5IDU5LjgyNjIgMTUuOTE5SDY0LjYyNzFDNjQuODY4MyAxNS45MTkgNjUuMDcwNCAxNi4xMDM1IDY1LjA3MDQgMTYuMzI3VjQwLjM4N0g2NS4wMjk2VjQwLjM4NTVaTTgxLjM2NjcgMTUuOTE5SDg0LjU5MzNDODQuODc2OSAxNS45MTkgODUuMDc3MyAxNi4xNzg1IDg0Ljk5NzUgMTYuNDM4TDgzLjkwODkgMjAuMjk5QzgzLjg2ODIgMjAuNDg1IDgzLjY2NjEgMjAuNTk2IDgzLjUwNDcgMjAuNTk2SDgxLjI0NjFDODAuMDM1MyAyMC41OTYgNzkuMDY3MyAyMC43NDYgNzguMzAxMyAyMS4wNDE1Qzc3LjU3NjIgMjEuMzM4NSA3Ni45Njk5IDIxLjY3MyA3Ni41Njc0IDIyLjA4MUM3Ni4yMDkyIDIyLjQyNzIgNzUuOTQ2NiAyMi44NDc1IDc1LjgwMTUgMjMuMzA2NUM3NS42NzkzIDIzLjc1MiA3NS42Mzg1IDI0LjE2MTUgNzUuNjM4NSAyNC41MzJWNDguNjY1NUM3NS42Mzc3IDQ4Ljc3MzYgNzUuNTkwOCA0OC44NzcxIDc1LjUwNzkgNDguOTUzN0M3NS40MjUgNDkuMDMwMyA3NS4zMTI3IDQ5LjA3MzggNzUuMTk1MyA0OS4wNzVINzAuMzU1M0M3MC4yMzc4IDQ5LjA3MzggNzAuMTI1NiA0OS4wMzAzIDcwLjA0MjcgNDguOTUzN0M2OS45NTk4IDQ4Ljg3NzEgNjkuOTEyOCA0OC43NzM2IDY5LjkxMiA0OC42NjU1VjIzLjQ5MjVDNjkuOTEyIDIzLjA0NyA2OS45OTE5IDIyLjM3OCA3MC4xOTM5IDIxLjUyNDVDNzAuMzU1MyAyMC42Njk1IDcwLjgzOTMgMTkuODUzNSA3MS42MDUyIDE5QzcyLjM3MTEgMTguMTgyNSA3My41MDIxIDE3LjQ0IDc1LjAzMzkgMTYuODQ2Qzc2LjUyNjcgMTYuMjE2IDc4LjY2NDcgMTUuOTE5IDgxLjM2NjcgMTUuOTE5Wk0xNS40MTU2IDE1LjkxOUMxOS4zMjY3IDE1LjkxOSAyMi4xOTE2IDE2LjYyNCAyNC4wNDc3IDE4LjAzNEMyNS44NjMxIDE5LjQ0NTUgMjYuNzkwNCAyMS4yMjkgMjYuNzkwNCAyMy4zNDRWNDEuNTM3NUMyNi43OTA0IDQyLjI4IDI2LjYyOSA0My4wOTc1IDI2LjM0NzEgNDMuOTUxQzI2LjA2NTIgNDQuODQyIDI1LjQ5OTcgNDUuNjU4IDI0LjY1MjMgNDYuMzY0NUMyMy44MDQ5IDQ3LjEwNyAyMi42MzY0IDQ3LjY5OTUgMjEuMTg0NCA0OC4yMkMxOS43MzA4IDQ4LjcwMyAxNy43OTQ4IDQ4Ljk2MjUgMTUuNDU2MyA0OC45NjI1QzEzLjA3NyA0OC45NjI1IDExLjE4MDEgNDguNzAzIDkuNzI4MTUgNDguMjJDOC4yNzYxNSA0Ny43MzcgNy4xMDQ0NCA0Ny4xMDcgNi4yNTg2NyA0Ni4zNjQ1QzUuNDExMjYgNDUuNjIyIDQuODQ3NDEgNDQuODA0NSA0LjU2Mzg1IDQzLjk0OTVDNC4yODE5MyA0My4wNiA0LjEyMDU5IDQyLjI0MjUgNC4xMjA1OSA0MS41Mzc1VjM4LjY0MjVDNC4xMjA1OSAzNy4wODI1IDQuNTY1NDggMzUuNjcxIDUuNDExMjYgMzQuNDA4QzYuMjk5NDEgMzMuMTQ2NSA3LjUwODU5IDMyLjIxOCA5LjEyMzU2IDMxLjY5NzVDOS45MzAyMiAzMS40MzggMTAuODE4NCAzMS4xNzg1IDExLjg2NjIgMzAuODQ0QzEyLjg3NSAzMC41MDk1IDEzLjg4MjEgMzAuMjE0IDE0Ljg1MDEgMjkuODc4QzE1LjgxODEgMjkuNTgxIDE2LjYyNjQgMjkuMjg0IDE3LjM1MTYgMjkuMDYyQzE4LjA3ODQgMjguODAyNSAxOC41MjE2IDI4LjY5IDE4LjY4MyAyOC42MTY1QzE4Ljg0NDMgMjguNTQxNSAxOS4wODU1IDI4LjQzMDUgMTkuMzY3NCAyOC4yODJDMTkuNjUxIDI4LjEzMzUgMTkuOTMyOSAyNy45MTE1IDIwLjIxNDggMjcuNjUyQzIwLjQ5ODQgMjcuMzUzNSAyMC43MDA0IDI3LjAyMDUgMjAuOTAwOSAyNi42ODZDMjEuMTAzIDI2LjMxNCAyMS4xODQ0IDI1Ljg2ODUgMjEuMTg0NCAyNS4zODU1VjI0LjIzNUMyMS4xODQ0IDIzLjgyNyAyMS4xMDMgMjMuNDE5IDIwLjkwMDkgMjIuOTczNUMyMC43Mzk2IDIyLjUyNjUgMjAuNDE2OSAyMi4xNTYgMTkuOTczNiAyMS43ODRDMTkuNTMwNCAyMS40MTM1IDE4LjkyNDEgMjEuMTE2NSAxOC4xOTczIDIwLjg5M0MxNy40NzIxIDIwLjY3MSAxNi41NDQ5IDIwLjU2IDE1LjQxNTYgMjAuNTZDMTMuMTk3NiAyMC41NiAxMS43MDQ5IDIwLjk2OCAxMC44OTgyIDIxLjgyMTVDMTAuMjAyNCAyMi41NzE0IDkuNzkxNTUgMjMuNTEgOS43MjgxNSAyNC40OTQ1QzkuNzI4MTUgMjQuNzE4IDkuNTI2MDcgMjQuODY2NSA5LjI4NDg5IDI0Ljg2NjVINC40NDQ4OUM0LjMyNzQ0IDI0Ljg2NTcgNC4yMTUwMiAyNC44MjI1IDQuMTMxODIgMjQuNzQ2MkM0LjA0ODYxIDI0LjY2OTkgNC4wMDEyOCAyNC41NjY2IDQgMjQuNDU4NVYyMy4zODE1QzQgMjIuMzQyIDQuMjAyMDcgMjEuMzc2IDQuNjQ1MzMgMjAuNDg2NUM1LjA0OTQ4IDE5LjU5NCA1LjczMzkzIDE4Ljc3NjUgNi43MDE5MyAxOC4xMDlDNy42MzA4MiAxNy40NCA4LjgwMDg5IDE2Ljg4MzUgMTAuMjUyOSAxNi41MTNDMTEuNjY0MSAxNi4xNDEgMTMuMzk4MSAxNS45MTkgMTUuNDE1NiAxNS45MTlaTTIxLjE0MzcgMzIuMjE4QzIxLjEwNjcgMzIuNDA4NSAyMS4wMjY1IDMyLjU4OTYgMjAuOTA4MyAzMi43NDk2QzIwLjc5MDEgMzIuOTA5NiAyMC42MzY1IDMzLjA0NDkgMjAuNDU3NiAzMy4xNDY1QzIwLjA5NDIgMzMuMzY4NSAxOS43NzMyIDMzLjQ3OTUgMTkuNDQ4OSAzMy41OTJDMTguNzY0NCAzMy44MTQgMTguMDM3NiAzNC4wMzc1IDE3LjI3MTcgMzQuMjk3QzE2LjUwNTggMzQuNTU2NSAxNS43NzkgMzQuODE3NSAxNS4wOTI5IDM1LjAwMkMxNC4yODYyIDM1LjI2MyAxMy41MjAzIDM1LjQ4NSAxMi44MzQyIDM1Ljc0NDVDMTIuMjg0NyAzNS45NjU3IDExLjc2OTUgMzYuMjUzMiAxMS4zMDI0IDM2LjU5OTVDMTAuODk4MiAzNi45MzI1IDEwLjUzNDggMzcuMzQyIDEwLjIxMDUgMzcuODYxQzkuODg5NDggMzguMzgxNSA5LjcyODE1IDM5LjAxMyA5LjcyODE1IDM5Ljc5MTVDOS43MjgxNSA0MS4zNTE1IDEwLjEzMDcgNDIuNTAyIDEwLjkzNzMgNDMuMjgyQzExLjc0NCA0NC4wMjQ1IDEzLjIzNjcgNDQuNDMyNSAxNS40MTU2IDQ0LjQzMjVDMTcuNjMzNSA0NC40MzI1IDE5LjE2NyA0NC4wMjQ1IDE5Ljk3MzYgNDMuMjQ0NUMyMC43ODAzIDQyLjQyODUgMjEuMTg0NCA0MS4zMTQgMjEuMTg0NCAzOS44MjlWMzIuMjE4SDIxLjE0MzdaTTk4LjU1MTEgMTUuOTE5QzEwMi40NjIgMTUuOTE5IDEwNS4zMjcgMTYuNjI0IDEwNy4xODMgMTguMDM0QzEwOC45OTkgMTkuNDQ1NSAxMDkuOTI2IDIxLjIyOSAxMDkuOTI2IDIzLjM0NFY0MS41Mzc1QzEwOS45MjYgNDIuMjggMTA5Ljc2NSA0My4wOTc1IDEwOS40ODMgNDMuOTUxQzEwOS4xOTkgNDQuODQyIDEwOC42MzUgNDUuNjU4IDEwNy43ODggNDYuMzY0NUMxMDYuOTQgNDcuMTA3IDEwNS43NyA0Ny42OTk1IDEwNC4zMTggNDguMjJDMTAyLjg2OCA0OC43MDMgMTAwLjkzIDQ4Ljk2MjUgOTguNTkxOSA0OC45NjI1Qzk2LjIxMjYgNDguOTYyNSA5NC4zMTU3IDQ4LjcwMyA5Mi44NjM3IDQ4LjIyQzkxLjQxMTcgNDcuNzM3IDkwLjI0IDQ3LjEwNyA4OS4zOTQyIDQ2LjM2NDVDODguNTQ2OCA0NS42MjIgODcuOTgzIDQ0LjgwNDUgODcuNjk5NCA0My45NDk1Qzg3LjQxNzUgNDMuMDYgODcuMjU2MiA0Mi4yNDI1IDg3LjI1NjIgNDEuNTM3NVYzOC42NDI1Qzg3LjI1NjIgMzcuMDgyNSA4Ny42OTk0IDM1LjY3MSA4OC41NDY4IDM0LjQwOEM4OS40MzUgMzMuMTQ2NSA5MC42NDQyIDMyLjIxOCA5Mi4yNTc1IDMxLjY5NzVDOTMuMDY0MiAzMS40MzggOTMuOTUyMyAzMS4xNzg1IDk1LjAwMTggMzAuODQ0Qzk2LjAwODkgMzAuNTA5NSA5Ny4wMTc2IDMwLjIxNCA5Ny45ODU2IDI5Ljg3OEM5OC45NTM2IDI5LjU4MSA5OS43NjE5IDI5LjI4NCAxMDAuNDg3IDI5LjA2MkMxMDEuMjEyIDI4LjgwMjUgMTAxLjY1NyAyOC42OSAxMDEuODE5IDI4LjYxNjVDMTAxLjk4IDI4LjU0MTUgMTAyLjIyMSAyOC40MzA1IDEwMi41MDMgMjguMjgyQzEwMi43ODcgMjguMTMzNSAxMDMuMDY4IDI3LjkxMTUgMTAzLjM1IDI3LjY1MkMxMDMuNjM0IDI3LjM1MzUgMTAzLjgzNCAyNy4wMjA1IDEwNC4wMzYgMjYuNjg2QzEwNC4yMzkgMjYuMzE0IDEwNC4zMTggMjUuODY4NSAxMDQuMzE4IDI1LjM4NTVWMjQuMjM1QzEwNC4zMTggMjMuODI3IDEwNC4yMzcgMjMuNDE5IDEwNC4wMzYgMjIuOTczNUMxMDMuODc1IDIyLjUyNjUgMTAzLjU1MiAyMi4xNTYgMTAzLjEwOCAyMS43ODRDMTAyLjY2NiAyMS40MTM1IDEwMi4wNiAyMS4xMTY1IDEwMS4zMzUgMjAuODkzQzEwMC42MDggMjAuNjcxIDk5LjY4MDUgMjAuNTYgOTguNTUxMSAyMC41NkM5Ni4zMzE2IDIwLjU2IDk0Ljg0MDUgMjAuOTY4IDk0LjAzMzggMjEuODIxNUM5My4zMzc5IDIyLjU3MTQgOTIuOTI3MSAyMy41MSA5Mi44NjM3IDI0LjQ5NDVDOTIuODYzNyAyNC43MTggOTIuNjYxNiAyNC44NjY1IDkyLjQxODggMjQuODY2NUg4Ny41Nzg4Qzg3LjQ2MTcgMjQuODY1MyA4Ny4zNDk2IDI0LjgyMiA4Ny4yNjY4IDI0Ljc0NTdDODcuMTgzOSAyNC42Njk0IDg3LjEzNjggMjQuNTY2MyA4Ny4xMzU2IDI0LjQ1ODVWMjMuMzgxNUM4Ny4xMzU2IDIyLjM0MiA4Ny4zMzc2IDIxLjM3NiA4Ny43ODA5IDIwLjQ4NjVDODguMTgzNCAxOS41OTQgODguODY5NSAxOC43NzY1IDg5LjgzNzUgMTguMTA5QzkwLjc2NjQgMTcuNDQgOTEuOTM0OCAxNi44ODM1IDkzLjM4NjggMTYuNTEzQzk0Ljg0MDUgMTYuMTQxIDk2LjUzMzYgMTUuOTE5IDk4LjU1MTEgMTUuOTE5Wk0xMDQuMjc5IDMyLjIxOEMxMDQuMjQyIDMyLjQwODUgMTA0LjE2MiAzMi41ODk2IDEwNC4wNDQgMzIuNzQ5NkMxMDMuOTI2IDMyLjkwOTYgMTAzLjc3MiAzMy4wNDQ5IDEwMy41OTMgMzMuMTQ2NUMxMDMuMjMgMzMuMzY4NSAxMDIuOTA5IDMzLjQ3OTUgMTAyLjU4NCAzMy41OTJDMTAxLjkgMzMuODE0IDEwMS4xNzMgMzQuMDM3NSAxMDAuNDA2IDM0LjI5N0M5OS42Mzk3IDM0LjU1NjUgOTguOTE0NSAzNC44MTc1IDk4LjIyODQgMzUuMDAyQzk3LjQyMTggMzUuMjYzIDk2LjY1NDIgMzUuNDg1IDk1Ljk2OTggMzUuNzQ0NUM5NS40MTk2IDM1Ljk2NTYgOTQuOTAzOSAzNi4yNTMxIDk0LjQzNjMgMzYuNTk5NUM5NC4wMzM4IDM2LjkzMjUgOTMuNjcwNCAzNy4zNDIgOTMuMzQ3NyAzNy44NjFDOTMuMDI1IDM4LjM4MTUgOTIuODYzNyAzOS4wMTMgOTIuODYzNyAzOS43OTE1QzkyLjg2MzcgNDEuMzUxNSA5My4yNjYyIDQyLjUwMiA5NC4wNzI5IDQzLjI4MkM5NC44Nzk2IDQ0LjAyNDUgOTYuMzcyMyA0NC40MzI1IDk4LjU1MTEgNDQuNDMyNUMxMDAuNzY5IDQ0LjQzMjUgMTAyLjMwMyA0NC4wMjQ1IDEwMy4xMDkgNDMuMjQ0NUMxMDMuOTE2IDQyLjQyODUgMTA0LjMxOCA0MS4zMTQgMTA0LjMxOCAzOS44MjlWMzIuMjE4SDEwNC4yNzlaXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0zMi4wMzQ1IDRIMzYuODM1NEMzNy4wNzY2IDQgMzcuMjc4NyA0LjE4NiAzNy4yNzg3IDQuNDA4VjQ4LjYyOEMzNy4yNzc4IDQ4LjczNjEgMzcuMjMwOSA0OC44Mzk2IDM3LjE0OCA0OC45MTYyQzM3LjA2NTEgNDguOTkyOCAzNi45NTI5IDQ5LjAzNjMgMzYuODM1NCA0OS4wMzc1SDMyLjAzNDVDMzEuOTE3MSA0OS4wMzYzIDMxLjgwNDggNDguOTkyOCAzMS43MjE5IDQ4LjkxNjJDMzEuNjM5IDQ4LjgzOTYgMzEuNTkyMSA0OC43MzYxIDMxLjU5MTMgNDguNjI4VjQuNDA4QzMxLjU5MTMgNC4xODYgMzEuNzkxNyA0IDMyLjAzNDUgNFpNNjUuMDI5NiA0MC4zODU1VjQxLjVDNjUuMDI5NiA0MS45ODMgNjQuOTQ5OCA0Mi42NTA1IDY0Ljc0NzcgNDMuNTA1NUM2NC41ODY0IDQ0LjMyMTUgNjQuMTAyNCA0NS4xNzUgNjMuMzM2NCA0NS45OTI1QzYyLjU3MDUgNDYuODEgNjEuNDQxMiA0Ny41NTI1IDU5LjkwNzcgNDguMTQ2NUM1OC4zNzU5IDQ4Ljc0MDUgNTYuMjc2OSA0OS4wMzc1IDUzLjU3NSA0OS4wMzc1QzUwLjg3MTQgNDkuMDM3NSA0OC43NzQxIDQ4Ljc0MDUgNDcuMjQyMiA0OC4xNDY1QzQ1LjcxMDQgNDcuNTUyNSA0NC41Nzk0IDQ2Ljg0NiA0My44MTM1IDQ1Ljk5MjVDNDMuMDQ3NiA0NS4xNzUgNDIuNTYxOSA0NC4zMjE1IDQyLjQwMDYgNDMuNDY4QzQyLjIzOTMgNDIuNjEzIDQyLjExODcgNDEuOTgzIDQyLjExODcgNDEuNVYxNi4zMjdDNDIuMTE4NyAxNi4xMDM1IDQyLjMyMDcgMTUuOTE5IDQyLjU2MTkgMTUuOTE5SDQ3LjM2MjhDNDcuNjA0IDE1LjkxOSA0Ny44MDYxIDE2LjEwMzUgNDcuODA2MSAxNi4zMjdWMzkuOTA0QzQ3LjgwNjEgNDAuNjg0IDQ3LjkyNjcgNDEuMjM5IDQ4LjA0ODkgNDEuNjg2QzQ4LjE2OTUgNDIuMTMxNSA0OC40MTA3IDQyLjU3NyA0OC43NzQxIDQyLjk0NzVDNDkuMTM3NSA0My4zNTcgNDkuNzAzIDQzLjY5IDUwLjQ2ODkgNDMuOTUxQzUxLjE5NDEgNDQuMjEwNSA1Mi4yMDI4IDQ0LjM1OSA1My40NTQ0IDQ0LjM1OUM1NC43NDUgNDQuMzU5IDU1Ljc5MjkgNDQuMjA5IDU2LjU1ODggNDMuOTUxQzU3LjMyNDcgNDMuNjkgNTcuODkwMiA0My4zNTcgNTguMjk0NCA0Mi45ODVDNTguNjk2OSA0Mi42MTQ1IDU4Ljk3ODggNDIuMjA1IDU5LjEwMSA0MS43NTk1QzU5LjIyMTYgNDEuMzE0IDU5LjM4MyA0MC45NDM1IDU5LjM4MyAzOS44NjY1VjE2LjMyN0M1OS4zODMgMTYuMTAzNSA1OS41ODUgMTUuOTE5IDU5LjgyNjIgMTUuOTE5SDY0LjYyNzFDNjQuODY4MyAxNS45MTkgNjUuMDcwNCAxNi4xMDM1IDY1LjA3MDQgMTYuMzI3VjQwLjM4N0g2NS4wMjk2VjQwLjM4NTVaTTgxLjM2NjcgMTUuOTE5SDg0LjU5MzNDODQuODc2OSAxNS45MTkgODUuMDc3MyAxNi4xNzg1IDg0Ljk5NzUgMTYuNDM4TDgzLjkwODkgMjAuMjk5QzgzLjg2ODIgMjAuNDg1IDgzLjY2NjEgMjAuNTk2IDgzLjUwNDcgMjAuNTk2SDgxLjI0NjFDODAuMDM1MyAyMC41OTYgNzkuMDY3MyAyMC43NDYgNzguMzAxMyAyMS4wNDE1Qzc3LjU3NjIgMjEuMzM4NSA3Ni45Njk5IDIxLjY3MyA3Ni41Njc0IDIyLjA4MUM3Ni4yMDkyIDIyLjQyNzIgNzUuOTQ2NiAyMi44NDc1IDc1LjgwMTUgMjMuMzA2NUM3NS42NzkzIDIzLjc1MiA3NS42Mzg1IDI0LjE2MTUgNzUuNjM4NSAyNC41MzJWNDguNjY1NUM3NS42Mzc3IDQ4Ljc3MzYgNzUuNTkwOCA0OC44NzcxIDc1LjUwNzkgNDguOTUzN0M3NS40MjUgNDkuMDMwMyA3NS4zMTI3IDQ5LjA3MzggNzUuMTk1MyA0OS4wNzVINzAuMzU1M0M3MC4yMzc4IDQ5LjA3MzggNzAuMTI1NiA0OS4wMzAzIDcwLjA0MjcgNDguOTUzN0M2OS45NTk4IDQ4Ljg3NzEgNjkuOTEyOCA0OC43NzM2IDY5LjkxMiA0OC42NjU1VjIzLjQ5MjVDNjkuOTEyIDIzLjA0NyA2OS45OTE5IDIyLjM3OCA3MC4xOTM5IDIxLjUyNDVDNzAuMzU1MyAyMC42Njk1IDcwLjgzOTMgMTkuODUzNSA3MS42MDUyIDE5QzcyLjM3MTEgMTguMTgyNSA3My41MDIxIDE3LjQ0IDc1LjAzMzkgMTYuODQ2Qzc2LjUyNjcgMTYuMjE2IDc4LjY2NDcgMTUuOTE5IDgxLjM2NjcgMTUuOTE5Wk0xNS40MTU2IDE1LjkxOUMxOS4zMjY3IDE1LjkxOSAyMi4xOTE2IDE2LjYyNCAyNC4wNDc3IDE4LjAzNEMyNS44NjMxIDE5LjQ0NTUgMjYuNzkwNCAyMS4yMjkgMjYuNzkwNCAyMy4zNDRWNDEuNTM3NUMyNi43OTA0IDQyLjI4IDI2LjYyOSA0My4wOTc1IDI2LjM0NzEgNDMuOTUxQzI2LjA2NTIgNDQuODQyIDI1LjQ5OTcgNDUuNjU4IDI0LjY1MjMgNDYuMzY0NUMyMy44MDQ5IDQ3LjEwNyAyMi42MzY0IDQ3LjY5OTUgMjEuMTg0NCA0OC4yMkMxOS43MzA4IDQ4LjcwMyAxNy43OTQ4IDQ4Ljk2MjUgMTUuNDU2MyA0OC45NjI1QzEzLjA3NyA0OC45NjI1IDExLjE4MDEgNDguNzAzIDkuNzI4MTUgNDguMjJDOC4yNzYxNSA0Ny43MzcgNy4xMDQ0NCA0Ny4xMDcgNi4yNTg2NyA0Ni4zNjQ1QzUuNDExMjYgNDUuNjIyIDQuODQ3NDEgNDQuODA0NSA0LjU2Mzg1IDQzLjk0OTVDNC4yODE5MyA0My4wNiA0LjEyMDU5IDQyLjI0MjUgNC4xMjA1OSA0MS41Mzc1VjM4LjY0MjVDNC4xMjA1OSAzNy4wODI1IDQuNTY1NDggMzUuNjcxIDUuNDExMjYgMzQuNDA4QzYuMjk5NDEgMzMuMTQ2NSA3LjUwODU5IDMyLjIxOCA5LjEyMzU2IDMxLjY5NzVDOS45MzAyMiAzMS40MzggMTAuODE4NCAzMS4xNzg1IDExLjg2NjIgMzAuODQ0QzEyLjg3NSAzMC41MDk1IDEzLjg4MjEgMzAuMjE0IDE0Ljg1MDEgMjkuODc4QzE1LjgxODEgMjkuNTgxIDE2LjYyNjQgMjkuMjg0IDE3LjM1MTYgMjkuMDYyQzE4LjA3ODQgMjguODAyNSAxOC41MjE2IDI4LjY5IDE4LjY4MyAyOC42MTY1QzE4Ljg0NDMgMjguNTQxNSAxOS4wODU1IDI4LjQzMDUgMTkuMzY3NCAyOC4yODJDMTkuNjUxIDI4LjEzMzUgMTkuOTMyOSAyNy45MTE1IDIwLjIxNDggMjcuNjUyQzIwLjQ5ODQgMjcuMzUzNSAyMC43MDA0IDI3LjAyMDUgMjAuOTAwOSAyNi42ODZDMjEuMTAzIDI2LjMxNCAyMS4xODQ0IDI1Ljg2ODUgMjEuMTg0NCAyNS4zODU1VjI0LjIzNUMyMS4xODQ0IDIzLjgyNyAyMS4xMDMgMjMuNDE5IDIwLjkwMDkgMjIuOTczNUMyMC43Mzk2IDIyLjUyNjUgMjAuNDE2OSAyMi4xNTYgMTkuOTczNiAyMS43ODRDMTkuNTMwNCAyMS40MTM1IDE4LjkyNDEgMjEuMTE2NSAxOC4xOTczIDIwLjg5M0MxNy40NzIxIDIwLjY3MSAxNi41NDQ5IDIwLjU2IDE1LjQxNTYgMjAuNTZDMTMuMTk3NiAyMC41NiAxMS43MDQ5IDIwLjk2OCAxMC44OTgyIDIxLjgyMTVDMTAuMjAyNCAyMi41NzE0IDkuNzkxNTUgMjMuNTEgOS43MjgxNSAyNC40OTQ1QzkuNzI4MTUgMjQuNzE4IDkuNTI2MDcgMjQuODY2NSA5LjI4NDg5IDI0Ljg2NjVINC40NDQ4OUM0LjMyNzQ0IDI0Ljg2NTcgNC4yMTUwMiAyNC44MjI1IDQuMTMxODIgMjQuNzQ2MkM0LjA0ODYxIDI0LjY2OTkgNC4wMDEyOCAyNC41NjY2IDQgMjQuNDU4NVYyMy4zODE1QzQgMjIuMzQyIDQuMjAyMDcgMjEuMzc2IDQuNjQ1MzMgMjAuNDg2NUM1LjA0OTQ4IDE5LjU5NCA1LjczMzkzIDE4Ljc3NjUgNi43MDE5MyAxOC4xMDlDNy42MzA4MiAxNy40NCA4LjgwMDg5IDE2Ljg4MzUgMTAuMjUyOSAxNi41MTNDMTEuNjY0MSAxNi4xNDEgMTMuMzk4MSAxNS45MTkgMTUuNDE1NiAxNS45MTlaTTIxLjE0MzcgMzIuMjE4QzIxLjEwNjcgMzIuNDA4NSAyMS4wMjY1IDMyLjU4OTYgMjAuOTA4MyAzMi43NDk2QzIwLjc5MDEgMzIuOTA5NiAyMC42MzY1IDMzLjA0NDkgMjAuNDU3NiAzMy4xNDY1QzIwLjA5NDIgMzMuMzY4NSAxOS43NzMyIDMzLjQ3OTUgMTkuNDQ4OSAzMy41OTJDMTguNzY0NCAzMy44MTQgMTguMDM3NiAzNC4wMzc1IDE3LjI3MTcgMzQuMjk3QzE2LjUwNTggMzQuNTU2NSAxNS43NzkgMzQuODE3NSAxNS4wOTI5IDM1LjAwMkMxNC4yODYyIDM1LjI2MyAxMy41MjAzIDM1LjQ4NSAxMi44MzQyIDM1Ljc0NDVDMTIuMjg0NyAzNS45NjU3IDExLjc2OTUgMzYuMjUzMiAxMS4zMDI0IDM2LjU5OTVDMTAuODk4MiAzNi45MzI1IDEwLjUzNDggMzcuMzQyIDEwLjIxMDUgMzcuODYxQzkuODg5NDggMzguMzgxNSA5LjcyODE1IDM5LjAxMyA5LjcyODE1IDM5Ljc5MTVDOS43MjgxNSA0MS4zNTE1IDEwLjEzMDcgNDIuNTAyIDEwLjkzNzMgNDMuMjgyQzExLjc0NCA0NC4wMjQ1IDEzLjIzNjcgNDQuNDMyNSAxNS40MTU2IDQ0LjQzMjVDMTcuNjMzNSA0NC40MzI1IDE5LjE2NyA0NC4wMjQ1IDE5Ljk3MzYgNDMuMjQ0NUMyMC43ODAzIDQyLjQyODUgMjEuMTg0NCA0MS4zMTQgMjEuMTg0NCAzOS44MjlWMzIuMjE4SDIxLjE0MzdaTTk4LjU1MTEgMTUuOTE5QzEwMi40NjIgMTUuOTE5IDEwNS4zMjcgMTYuNjI0IDEwNy4xODMgMTguMDM0QzEwOC45OTkgMTkuNDQ1NSAxMDkuOTI2IDIxLjIyOSAxMDkuOTI2IDIzLjM0NFY0MS41Mzc1QzEwOS45MjYgNDIuMjggMTA5Ljc2NSA0My4wOTc1IDEwOS40ODMgNDMuOTUxQzEwOS4xOTkgNDQuODQyIDEwOC42MzUgNDUuNjU4IDEwNy43ODggNDYuMzY0NUMxMDYuOTQgNDcuMTA3IDEwNS43NyA0Ny42OTk1IDEwNC4zMTggNDguMjJDMTAyLjg2OCA0OC43MDMgMTAwLjkzIDQ4Ljk2MjUgOTguNTkxOSA0OC45NjI1Qzk2LjIxMjYgNDguOTYyNSA5NC4zMTU3IDQ4LjcwMyA5Mi44NjM3IDQ4LjIyQzkxLjQxMTcgNDcuNzM3IDkwLjI0IDQ3LjEwNyA4OS4zOTQyIDQ2LjM2NDVDODguNTQ2OCA0NS42MjIgODcuOTgzIDQ0LjgwNDUgODcuNjk5NCA0My45NDk1Qzg3LjQxNzUgNDMuMDYgODcuMjU2MiA0Mi4yNDI1IDg3LjI1NjIgNDEuNTM3NVYzOC42NDI1Qzg3LjI1NjIgMzcuMDgyNSA4Ny42OTk0IDM1LjY3MSA4OC41NDY4IDM0LjQwOEM4OS40MzUgMzMuMTQ2NSA5MC42NDQyIDMyLjIxOCA5Mi4yNTc1IDMxLjY5NzVDOTMuMDY0MiAzMS40MzggOTMuOTUyMyAzMS4xNzg1IDk1LjAwMTggMzAuODQ0Qzk2LjAwODkgMzAuNTA5NSA5Ny4wMTc2IDMwLjIxNCA5Ny45ODU2IDI5Ljg3OEM5OC45NTM2IDI5LjU4MSA5OS43NjE5IDI5LjI4NCAxMDAuNDg3IDI5LjA2MkMxMDEuMjEyIDI4LjgwMjUgMTAxLjY1NyAyOC42OSAxMDEuODE5IDI4LjYxNjVDMTAxLjk4IDI4LjU0MTUgMTAyLjIyMSAyOC40MzA1IDEwMi41MDMgMjguMjgyQzEwMi43ODcgMjguMTMzNSAxMDMuMDY4IDI3LjkxMTUgMTAzLjM1IDI3LjY1MkMxMDMuNjM0IDI3LjM1MzUgMTAzLjgzNCAyNy4wMjA1IDEwNC4wMzYgMjYuNjg2QzEwNC4yMzkgMjYuMzE0IDEwNC4zMTggMjUuODY4NSAxMDQuMzE4IDI1LjM4NTVWMjQuMjM1QzEwNC4zMTggMjMuODI3IDEwNC4yMzcgMjMuNDE5IDEwNC4wMzYgMjIuOTczNUMxMDMuODc1IDIyLjUyNjUgMTAzLjU1MiAyMi4xNTYgMTAzLjEwOCAyMS43ODRDMTAyLjY2NiAyMS40MTM1IDEwMi4wNiAyMS4xMTY1IDEwMS4zMzUgMjAuODkzQzEwMC42MDggMjAuNjcxIDk5LjY4MDUgMjAuNTYgOTguNTUxMSAyMC41NkM5Ni4zMzE2IDIwLjU2IDk0Ljg0MDUgMjAuOTY4IDk0LjAzMzggMjEuODIxNUM5My4zMzc5IDIyLjU3MTQgOTIuOTI3MSAyMy41MSA5Mi44NjM3IDI0LjQ5NDVDOTIuODYzNyAyNC43MTggOTIuNjYxNiAyNC44NjY1IDkyLjQxODggMjQuODY2NUg4Ny41Nzg4Qzg3LjQ2MTcgMjQuODY1MyA4Ny4zNDk2IDI0LjgyMiA4Ny4yNjY4IDI0Ljc0NTdDODcuMTgzOSAyNC42Njk0IDg3LjEzNjggMjQuNTY2MyA4Ny4xMzU2IDI0LjQ1ODVWMjMuMzgxNUM4Ny4xMzU2IDIyLjM0MiA4Ny4zMzc2IDIxLjM3NiA4Ny43ODA5IDIwLjQ4NjVDODguMTgzNCAxOS41OTQgODguODY5NSAxOC43NzY1IDg5LjgzNzUgMTguMTA5QzkwLjc2NjQgMTcuNDQgOTEuOTM0OCAxNi44ODM1IDkzLjM4NjggMTYuNTEzQzk0Ljg0MDUgMTYuMTQxIDk2LjUzMzYgMTUuOTE5IDk4LjU1MTEgMTUuOTE5Wk0xMDQuMjc5IDMyLjIxOEMxMDQuMjQyIDMyLjQwODUgMTA0LjE2MiAzMi41ODk2IDEwNC4wNDQgMzIuNzQ5NkMxMDMuOTI2IDMyLjkwOTYgMTAzLjc3MiAzMy4wNDQ5IDEwMy41OTMgMzMuMTQ2NUMxMDMuMjMgMzMuMzY4NSAxMDIuOTA5IDMzLjQ3OTUgMTAyLjU4NCAzMy41OTJDMTAxLjkgMzMuODE0IDEwMS4xNzMgMzQuMDM3NSAxMDAuNDA2IDM0LjI5N0M5OS42Mzk3IDM0LjU1NjUgOTguOTE0NSAzNC44MTc1IDk4LjIyODQgMzUuMDAyQzk3LjQyMTggMzUuMjYzIDk2LjY1NDIgMzUuNDg1IDk1Ljk2OTggMzUuNzQ0NUM5NS40MTk2IDM1Ljk2NTYgOTQuOTAzOSAzNi4yNTMxIDk0LjQzNjMgMzYuNTk5NUM5NC4wMzM4IDM2LjkzMjUgOTMuNjcwNCAzNy4zNDIgOTMuMzQ3NyAzNy44NjFDOTMuMDI1IDM4LjM4MTUgOTIuODYzNyAzOS4wMTMgOTIuODYzNyAzOS43OTE1QzkyLjg2MzcgNDEuMzUxNSA5My4yNjYyIDQyLjUwMiA5NC4wNzI5IDQzLjI4MkM5NC44Nzk2IDQ0LjAyNDUgOTYuMzcyMyA0NC40MzI1IDk4LjU1MTEgNDQuNDMyNUMxMDAuNzY5IDQ0LjQzMjUgMTAyLjMwMyA0NC4wMjQ1IDEwMy4xMDkgNDMuMjQ0NUMxMDMuOTE2IDQyLjQyODUgMTA0LjMxOCA0MS4zMTQgMTA0LjMxOCAzOS44MjlWMzIuMjE4SDEwNC4yNzlaXCIgc3Ryb2tlPVwiIzI1MkI1MVwiIHN0cm9rZVdpZHRoPVwiNFwiIG1hc2s9XCJ1cmwoI3BhdGgtMS1vdXRzaWRlLTEpXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk04Ni44NDY5IDYyLjM2OEM4NC44OTE3IDYzLjAxNDIgODMuMjExIDYyLjkzOCA4MS44MDUgNjIuMTM5M0M4MC4zOTg5IDYxLjM0MDYgNzkuMzA5NSA1OS45NTA2IDc4LjUzNjUgNTcuOTY5NEM3Ny44OTM0IDU2LjMyMDkgNzcuNjg5NSA1NC42ODA5IDc3LjkyNDggNTMuMDQ5M0M3OC4xNjAxIDUxLjQxNzggNzguODExNSA0OS45NzMyIDc5Ljg3OSA0OC43MTU0QzgwLjk0MDYgNDcuNDQyNSA4Mi4zMzQgNDYuNTIxIDg0LjA1OTIgNDUuOTUwN0M4NS43MzUxIDQ1LjM5NjggODcuMjgwNyA0NS40ODM1IDg4LjY5NiA0Ni4yMTA5QzkwLjEyMTkgNDYuOTE3NyA5MS4yNDE5IDQ4LjMxNDYgOTIuMDU2MSA1MC40MDE3QzkyLjQ5MjggNTEuNTIwOSA5Mi43MDk5IDUyLjY5NTUgOTIuNzA3NSA1My45MjU2QzkyLjcwNTEgNTUuMTU1OCA5Mi40Nzc4IDU2LjMzMjIgOTIuMDI1NCA1Ny40NTQ5QzkzLjg5NCA1OC4yMDMyIDk0Ljg1NzkgNTguNjUyOSA5NC45MTY5IDU4LjgwNDJDOTUuMDcwMyA1OS4xOTc0IDk1LjA1OTggNTkuNTUwOSA5NC44ODU0IDU5Ljg2NDZDOTQuNzMzMyA2MC4xODgxIDk0LjQyNzMgNjAuNDI1OCA5My45NjcyIDYwLjU3NzlDOTMuNjIyMiA2MC42OTIgOTIuNTMwMSA2MC40MTI3IDkwLjY5MDkgNTkuNzRDODkuNjg5MiA2MC45NzYgODguNDA3OSA2MS44NTIgODYuODQ2OSA2Mi4zNjhaTTg2LjM5NTQgNjAuMjEyMkM4Ny4xMDIgNTkuOTc4NyA4Ny43MTA1IDU5LjQ3MDIgODguMjIxIDU4LjY4NjhDODcuNDk5MyA1OC4zMTA3IDg2Ljc2NTEgNTcuODc4OSA4Ni4wMTg0IDU3LjM5MTVDODUuMjg4MiA1Ni44OTg3IDg0Ljg4NzcgNTYuNTYxNiA4NC44MTY5IDU2LjM4MDFDODQuNjU3NiA1NS45NzE3IDg0LjYzMDYgNTUuNjY0OCA4NC43MzU5IDU1LjQ1OTJDODQuODUxOCA1NS4yMzMxIDg1LjEwNjggNTUuMDU0OSA4NS41MDEyIDU0LjkyNDZDODUuNTUwNSA1NC45MDgzIDg1Ljk5MzUgNTUuMDY5MiA4Ni44MzAzIDU1LjQwNzNDODcuMTY1MyA1NS41NTI3IDg3LjkyMzkgNTUuODU2OCA4OS4xMDYyIDU2LjMxOTdDODkuMjYxOSA1NS40ODI4IDg5LjI5MjYgNTQuNjEwNSA4OS4xOTgxIDUzLjcwMjZDODkuMTE0MiA1Mi43NzQyIDg4Ljg5NTIgNTEuODU2MyA4OC41NDExIDUwLjk0ODlDODguMTI4MSA0OS44OTAyIDg3LjU4NzEgNDkuMTIxNSA4Ni45MTc5IDQ4LjY0MjZDODYuMjY1MyA0OC4xNTgzIDg1LjQ3ODkgNDguMDY4MiA4NC41NTg3IDQ4LjM3MjNDODMuNTA3MiA0OC43MTk5IDgyLjcxMjIgNDkuMzkyNCA4Mi4xNzM5IDUwLjM4OTlDODEuNjM1NiA1MS4zODc0IDgxLjM1NzYgNTIuNTI5MyA4MS4zNDAxIDUzLjgxNTdDODEuMzE2NyA1NS4wODY5IDgxLjUyOTIgNTYuMjk3MiA4MS45Nzc2IDU3LjQ0NjZDODIuMjQ5IDU4LjE0MjMgODIuNjM2NSA1OC43MzE0IDgzLjE0IDU5LjIxMzdDODMuNjU0MSA1OS42NzU2IDg0LjIwNiA1OS45OTY4IDg0Ljc5NTkgNjAuMTc3NUM4NS4zODU4IDYwLjM1ODEgODUuOTE4OSA2MC4zNjk3IDg2LjM5NTQgNjAuMjEyMlpcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTEwNS42NDcgNTUuNTM5MUMxMDUuNjgyIDU1LjgxNzkgMTA1LjYwMiA1Ni4wNDA3IDEwNS40MDcgNTYuMjA3NUMxMDUuMjE5IDU2LjM4OTQgMTA0LjkzNSA1Ni41NDI4IDEwNC41NTcgNTYuNjY3N0MxMDMuNDI0IDU3LjA0MjQgMTAyLjc2NSA1Ni45OTU0IDEwMi41ODMgNTYuNTI2NUwxMDIuMzk0IDU1LjYxNTZDMTAyLjA1OCA1Ni4wODUzIDEwMS42NCA1Ni41ODIxIDEwMS4xMzkgNTcuMTA2MUMxMDAuNjM5IDU3LjYzIDEwMC4xODMgNTcuOTU5OSA5OS43NzIzIDU4LjA5NTdDOTcuMzQwNSA1OC44OTk1IDk1LjgzODUgNTguNTY3OCA5NS4yNjYyIDU3LjEwMDhDOTQuMjkyNiA1NC42MDU0IDk0LjA0OTggNTEuNjI5NCA5NC41Mzc3IDQ4LjE3MjlDOTQuNTk5MiA0Ny43NTk5IDk0LjcwNzIgNDcuNDQyNCA5NC44NjE4IDQ3LjIyMDZDOTUuMDMyOCA0Ni45OTMzIDk1LjM4OTQgNDYuNzkwMSA5NS45MzE2IDQ2LjYxMDhDOTYuNTA2NyA0Ni40MjA4IDk2Ljk2MzQgNDYuMzU1MiA5Ny4zMDE4IDQ2LjQxNDFDOTcuNjUwNiA0Ni40NTI0IDk3Ljg2MzQgNDYuNTY5OSA5Ny45NDAxIDQ2Ljc2NjVDOTcuOTU3OCA0Ni44MTE5IDk3LjkyMDUgNDYuOTc3OSA5Ny44MjgzIDQ3LjI2NDVDOTcuNzI0MyA0Ny41MjA4IDk3LjY0NDkgNDcuNzY5IDk3LjU5MDEgNDguMDA5MUM5Ni45NzIgNTAuODk0IDk3LjEwMjUgNTMuNDYzMiA5Ny45ODE2IDU1LjcxNjdDOTguMDU4MyA1NS45MTMzIDk4LjIwODMgNTYuMDYwMSA5OC40MzE2IDU2LjE1N0M5OC42NTUgNTYuMjUzOSA5OC44MzIzIDU2LjI4MDcgOTguOTYzOCA1Ni4yMzcyQzk5LjMyNTMgNTYuMTE3NyA5OS44NzEyIDU1Ljc1OCAxMDAuNjAyIDU1LjE1OEMxMDEuMzQ5IDU0LjU1MjUgMTAxLjg4NyA1NC4wMDc0IDEwMi4yMTggNTMuNTIyNkwxMDEuOTk0IDUxLjUyMjJDMTAxLjczIDQ5LjEzMzcgMTAxLjU3NCA0Ny42NjU1IDEwMS41MjcgNDcuMTE3NUMxMDEuNDcyIDQ2LjQ1MjggMTAxLjUxIDQ1Ljg4NTMgMTAxLjY0MiA0NS40MTQ5QzEwMS43ODQgNDQuOTIzOSAxMDIuMTY4IDQ0LjU3NTIgMTAyLjc5MiA0NC4zNjg4QzEwMy42NjMgNDQuMDgxIDEwNC4xOTMgNDQuMTc5IDEwNC4zODIgNDQuNjYzQzEwNC40MTEgNDQuNzM4NiAxMDQuNDI1IDQ0Ljg0NTEgMTA0LjQyMyA0NC45ODI0QzEwNC40MzEgNDUuMDk5MSAxMDQuNDQyIDQ1LjE5OCAxMDQuNDU1IDQ1LjI3OUwxMDQuOTAzIDQ5LjI4QzEwNS4yNTMgNTIuNDU5NSAxMDUuNTAxIDU0LjU0NTkgMTA1LjY0NyA1NS41MzkxWlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTA1LjY0NSA0MC40MDM3QzEwNS40NjIgMzkuOTM0OSAxMDUuNDU2IDM5LjQ2NzQgMTA1LjYyNyAzOS4wMDEyQzEwNS44MTQgMzguNTI5NiAxMDYuMTk1IDM4LjE5ODggMTA2Ljc3IDM4LjAwODdDMTA3LjM3OCAzNy44MDc4IDEwNy45NzEgMzcuODA3OSAxMDguNTUxIDM4LjAwOTFDMTA5LjE0NiAzOC4yMDQ5IDEwOS41MyAzOC41MjIxIDEwOS43MDEgMzguOTYwN0MxMDkuODcyIDM5LjM5OTIgMTA5Ljc5IDM5Ljg1MzQgMTA5LjQ1MyA0MC4zMjNDMTA5LjExNyA0MC43OTI3IDEwOC42NDUgNDEuMTI4IDEwOC4wMzcgNDEuMzI5QzEwNy40NDYgNDEuNTI0NSAxMDYuOTQxIDQxLjUzNzcgMTA2LjUyMiA0MS4zNjg3QzEwNi4xMTUgNDEuMTc5MSAxMDUuODIyIDQwLjg1NzQgMTA1LjY0NSA0MC40MDM3Wk0xMDcuOTY4IDUzLjEzM0MxMDcuODYyIDUyLjg2MDcgMTA3LjUzMSA0OS44OTY4IDEwNi45NzUgNDQuMjQxMUwxMDYuNSA0My40NTA2QzEwNi40MzUgNDMuMjg0MiAxMDYuNDkyIDQzLjEyMDQgMTA2LjY3IDQyLjk1OUMxMDYuODQ4IDQyLjc5NzcgMTA3LjI0MSA0Mi42MTY2IDEwNy44NDkgNDIuNDE1NkMxMDguMzI2IDQyLjI1ODEgMTA4LjcxOCA0Mi4yNjUgMTA5LjAyNiA0Mi40MzY0QzEwOS4zNSA0Mi42MDI0IDEwOS41NzcgNDIuODUxNyAxMDkuNzA3IDQzLjE4NDRDMTA5Ljc0MyA0My4yNzUyIDEwOS43NzMgNDMuNDAxNiAxMDkuOCA0My41NjM3TDExMC43OTIgNTIuNDU1NkwxMTEuMjY4IDUzLjI0NjFDMTExLjMzMiA1My40MTI0IDExMS4yNzYgNTMuNTc2MyAxMTEuMDk4IDUzLjczNzZDMTEwLjkxOSA1My44OTkgMTEwLjUyNiA1NC4wODAxIDEwOS45MTggNTQuMjgxMUMxMDkuMzc2IDU0LjQ2MDMgMTA4Ljk2NyA1NC40MzM0IDEwOC42OSA1NC4yMDAzQzEwOC40MDggNTMuOTUyMiAxMDguMTY3IDUzLjU5NjQgMTA3Ljk2OCA1My4xMzNaXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMjIuMTk1IDQ5Ljk5MjVDMTE4LjE2IDUxLjgyMTQgMTE1Ljg2MiA1Mi44NzE1IDExNS4zIDUzLjE0MjZDMTE0LjcxNSA1My40MDQgMTE0LjQxNSA1My41Mzc1IDExNC4zOTkgNTMuNTQyOUMxMTQuMTAzIDUzLjY0MDcgMTEzLjgyNSA1My42ODk4IDExMy41NjYgNTMuNjkwMkMxMTMuMjkgNTMuNjk2IDExMy4xMTIgNTMuNjQzOSAxMTMuMDMyIDUzLjUzMzdDMTEyLjk2OSA1My40NjkgMTEyLjg1IDUzLjM1NDYgMTEyLjY3NSA1My4xOTA2QzExMi41IDUzLjAyNjUgMTEyLjM4NiA1Mi44NzY1IDExMi4zMzMgNTIuNzQwNEMxMTIuMjc5IDUyLjYwNDIgMTEyLjI3OSA1Mi40ODQ4IDExMi4zMzIgNTIuMzgyQzExMi4zNzkgNTIuMjY0MSAxMTIuNTMzIDUyLjEzNjMgMTEyLjc5NCA1MS45OTg2QzExMy4wNCA1MS44NjY0IDExMy4yMTEgNTEuNzgzOSAxMTMuMzEgNTEuNzUxNEMxMTMuODA0IDUwLjczNDUgMTE0LjQ0MyA0OS4zNTM2IDExNS4yMjggNDcuNjA4OEMxMTYuMzI3IDQ1LjE5NjYgMTE3LjE4IDQzLjQxMjIgMTE3Ljc4NiA0Mi4yNTU3TDExMy4wNDkgNDQuMzA3OUMxMTIuNTQgNDQuNDc2MiAxMTIuMTk0IDQ0LjMyNiAxMTIuMDExIDQzLjg1NzFDMTExLjg2NCA0My40NzkxIDExMS44NjQgNDMuMDUyMSAxMTIuMDEyIDQyLjU3NjJDMTEyLjA1MyA0Mi40NDMyIDExMi42NTUgNDIuMTA3NyAxMTMuODE4IDQxLjU2OTdDMTE0Ljk4IDQxLjAzMTcgMTE2LjI1NiA0MC40NzM1IDExNy42NDQgMzkuODk1MUMxMTkuMDQzIDM5LjI5NjIgMTE5LjkzOSAzOC45MzE2IDEyMC4zMzQgMzguODAxM0MxMjAuOTU4IDM4LjU5NDkgMTIxLjQgMzguODI0NCAxMjEuNjYgMzkuNDg5OUMxMjEuNzM2IDM5LjY4NjUgMTIxLjczNiAzOS45IDEyMS42NTkgNDAuMTMwM0MxMjEuNTc2IDQwLjM0NTYgMTIxLjQ0NSA0MC41MzM5IDEyMS4yNjcgNDAuNjk1MkwxMjAuODkzIDQxLjMwNTVDMTIwLjMyIDQyLjQ1MTEgMTE5LjYzMyA0My44OTkgMTE4LjgzMiA0NS42NDkzTDExNi43ODYgNDkuOTYyM0MxMTkuMjY0IDQ4LjgwMTcgMTIwLjg2NCA0OC4xMDE5IDEyMS41ODcgNDcuODYzQzEyMi4yMTIgNDcuNjU2NiAxMjIuNjU0IDQ3Ljg4NjEgMTIyLjkxMyA0OC41NTE2QzEyMy4wMTQgNDguODA4NyAxMjIuOTgyIDQ5LjA4MzggMTIyLjgxOCA0OS4zNzdDMTIyLjY2NSA0OS42NDk3IDEyMi40NTcgNDkuODU0OCAxMjIuMTk1IDQ5Ljk5MjVaXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMjcuMTQ0IDQzLjIzNDZDMTI3LjIwNSA0My42NzU1IDEyNy4xNSA0NC4wMDk2IDEyNi45NzkgNDQuMjM2OUMxMjYuODI0IDQ0LjQ1ODcgMTI2LjQ3NiA0NC42NTkzIDEyNS45MzMgNDQuODM4NUMxMjUuMDEzIDQ1LjE0MjYgMTI0LjQzOCA0NC45OTk4IDEyNC4yMDggNDQuNDFDMTI0LjA2MSA0NC4wMzE5IDEyMy45MjYgNDMuNDAxOSAxMjMuODA1IDQyLjUyQzEyMy42OTQgNDEuNjE3NiAxMjMuNTY3IDQwLjQxMzEgMTIzLjQyNCAzOC45MDY1QzEyMy4yMyAzNi44ODc2IDEyMy4wMzkgMzUuMjA5MiAxMjIuODUxIDMzLjg3MTNDMTIyLjcyNiAzMy4wNzU5IDEyMy4xNjUgMzIuNTEyNiAxMjQuMTY3IDMyLjE4MTNDMTI0LjY2IDMyLjAxODQgMTI1LjA3MSAzMS45NzY3IDEyNS4zOTkgMzIuMDU2MUMxMjUuNzI2IDMyLjEzNTYgMTI1LjkxMyAzMi4zMjk5IDEyNS45NiAzMi42Mzg5TDEyNy4xNDQgNDMuMjM0NlpNMTI2LjQ5NSA0OS4wNTgxQzEyNi4wNjcgNDkuMTk5MyAxMjUuNjQyIDQ5LjE3NzkgMTI1LjIxNyA0OC45OTM3QzEyNC43ODcgNDguNzk0NCAxMjQuNDk1IDQ4LjQ5ODIgMTI0LjM0MiA0OC4xMDQ5QzEyNC4xODkgNDcuNzExNyAxMjQuMjQ0IDQ3LjI4MzYgMTI0LjUwOSA0Ni44MjA1QzEyNC43NjcgNDYuMzQyMyAxMjUuMTg0IDQ2LjAwODIgMTI1Ljc1OSA0NS44MTgxQzEyNi4yNjkgNDUuNjQ5OCAxMjYuNzQgNDUuNjIyIDEyNy4xNzQgNDUuNzM0OEMxMjcuNjAxIDQ1LjgzMjUgMTI3LjkwNCA0Ni4xMDgyIDEyOC4wODEgNDYuNTYxOUMxMjguMjYzIDQ3LjAzMDcgMTI4LjE4NSA0Ny41MTc4IDEyNy44NDQgNDguMDIzMkMxMjcuNTE5IDQ4LjUyMzEgMTI3LjA3IDQ4Ljg2ODEgMTI2LjQ5NSA0OS4wNTgxWlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNODYuOTE4IDQ4LjY0MjVDODYuMjY1MyA0OC4xNTgyIDg1LjQ3ODkgNDguMDY4MSA4NC41NTg4IDQ4LjM3MjNDODMuNTA3MiA0OC43MTk5IDgyLjcxMjMgNDkuMzkyNCA4Mi4xNzM5IDUwLjM4OTlDODEuNjM1NiA1MS4zODc0IDgxLjM1NzcgNTIuNTI5MyA4MS4zNDAxIDUzLjgxNTZDODEuMzE2NyA1NS4wODY5IDgxLjUyOTIgNTYuMjk3MiA4MS45Nzc2IDU3LjQ0NjZDODIuMjQ5IDU4LjE0MjMgODIuNjM2NSA1OC43MzEzIDgzLjE0IDU5LjIxMzdDODMuNjU0MSA1OS42NzU1IDg0LjIwNjEgNTkuOTk2OCA4NC43OTU5IDYwLjE3NzRDODUuMzg1OCA2MC4zNTgxIDg1LjkxOSA2MC4zNjk2IDg2LjM5NTUgNjAuMjEyMUM4Ni41NzUyIDYwLjE1MjggODYuNzQ4NSA2MC4wNzU2IDg2LjkxNTUgNTkuOTgwNkM4Ny40MDUyIDU5LjcwMjIgODcuODQwNCA1OS4yNzA5IDg4LjIyMTEgNTguNjg2N0M4Ny44ODk0IDU4LjUxMzkgODcuNTU1MiA1OC4zMjk0IDg3LjIxODMgNTguMTMzMUM4Ni44MjIgNTcuOTAyMSA4Ni40MjIgNTcuNjU0OSA4Ni4wMTg1IDU3LjM5MTVDODUuMjg4MyA1Ni44OTg3IDg0Ljg4NzggNTYuNTYxNSA4NC44MTcgNTYuMzhDODQuNjU3NiA1NS45NzE3IDg0LjYzMDYgNTUuNjY0NyA4NC43MzYgNTUuNDU5MkM4NC44NTE4IDU1LjIzMzEgODUuMTA2OSA1NS4wNTQ5IDg1LjUwMTIgNTQuOTI0NUM4NS41NTA1IDU0LjkwODIgODUuOTkzNSA1NS4wNjkxIDg2LjgzMDMgNTUuNDA3MkM4Ni45NDU2IDU1LjQ1NzIgODcuMTExMSA1NS41MjYxIDg3LjMyNjcgNTUuNjEzN0M4Ny43Mzc3IDU1Ljc4MDggODguMzMwOCA1Ni4wMTYxIDg5LjEwNjIgNTYuMzE5N0M4OS4yMTU2IDU1LjczMTkgODkuMjYzMyA1NS4xMjY3IDg5LjI0OTIgNTQuNTA0Qzg5LjI0MzMgNTQuMjQgODkuMjI2MyA1My45NzI4IDg5LjE5ODEgNTMuNzAyNkM4OS4xMTQyIDUyLjc3NDIgODguODk1MiA1MS44NTYzIDg4LjU0MTIgNTAuOTQ4OEM4OC4xMjgyIDQ5Ljg5MDIgODcuNTg3MSA0OS4xMjE0IDg2LjkxOCA0OC42NDI1Wk03Ni4wNzA2IDUyLjgyMjdDNzYuMzQ4IDUwLjg5OTUgNzcuMTIzOSA0OS4xNjcgNzguNDAwMiA0Ny42NjExQzc5LjY5MSA0Ni4xMTU2IDgxLjM4NTEgNDUuMDA1MiA4My40MjcgNDQuMzMwM0M4NS41NTEgNDMuNjI4MiA4Ny42NjE4IDQzLjcxMTUgODkuNTk1NyA0NC43MDEzQzkwLjkwMjMgNDUuMzUyMyA5MS45MzA3IDQ2LjM3MTYgOTIuNzM2IDQ3LjY0NjNDOTIuODI4NCA0Ny4xOTQ3IDkyLjk5MDUgNDYuNzE3IDkzLjI4NzQgNDYuMjkwOUw5My4zMDUzIDQ2LjI2NTNMOTMuMzI0MiA0Ni4yNDAyQzkzLjg0MzMgNDUuNTUwMyA5NC42NzY0IDQ1LjE5NjMgOTUuMjk5NSA0NC45OTA0Qzk1Ljk2MTEgNDQuNzcxNyA5Ni43NzUxIDQ0LjU4NzEgOTcuNTg1OSA0NC43MTE5Qzk4LjE5ODEgNDQuNzkwNiA5OS4yMDA2IDQ1LjA4NyA5OS42NDkyIDQ2LjA2MzVDOTkuNjc1NiA0NS42OTI2IDk5LjczMzcgNDUuMzMxNCA5OS44MzA5IDQ0Ljk4NDhMOTkuODM0OCA0NC45NzA5QzEwMC4xNjkgNDMuODE5NSAxMDEuMDkxIDQzLjEwMTggMTAyLjE2IDQyLjc0ODRDMTAyLjcxNSA0Mi41NjQ5IDEwMy40NTIgNDIuMzk3OSAxMDQuMjExIDQyLjUzODVDMTA0LjM4NyA0Mi41NzExIDEwNC41NTQgNDIuNjE4MiAxMDQuNzEyIDQyLjY3ODVDMTA0Ljc1MSA0Mi41NzA5IDEwNC43OTcgNDIuNDY4NCAxMDQuODUgNDIuMzcxNEMxMDQuNDA2IDQxLjk4NTkgMTA0LjA4OCA0MS41MDc2IDEwMy44ODUgNDAuOTg1NUMxMDMuNTYxIDQwLjE1NjYgMTAzLjU0NyAzOS4yOTA0IDEwMy44NTQgMzguNDUxNkwxMDMuODYyIDM4LjQzMTFMMTAzLjg3IDM4LjQxMDhDMTA0LjI3MSAzNy4zOTc4IDEwNS4xMTEgMzYuNzI3NiAxMDYuMTM4IDM2LjM4ODJDMTA3LjEzOSAzNi4wNTcyIDEwOC4xODYgMzYuMDQ2IDEwOS4xOTUgMzYuMzkyN0MxMTAuMTY5IDM2LjcxNjEgMTExLjA1NyAzNy4zNDI2IDExMS40NjEgMzguMzc4N0MxMTEuODE3IDM5LjI4ODggMTExLjY2MyA0MC4xNzAzIDExMS4yNCA0MC45MTk1QzExMS4zMzUgNDAuODYgMTExLjQzMiA0MC44MDQgMTExLjUyNSA0MC43NTIxQzExMS44ODkgNDAuNTQ5IDExMi4zODIgNDAuMzA2NyAxMTIuOTc4IDQwLjAzMTNDMTE0LjE2NCAzOS40ODI0IDExNS40NiAzOC45MTU0IDExNi44NjQgMzguMzMwMkMxMTguMjM0IDM3Ljc0MzggMTE5LjIxMSAzNy4zNDI4IDExOS43MDEgMzcuMTgwOEMxMjAuMTc2IDM3LjAyNCAxMjAuNzU5IDM2Ljk0MDkgMTIxLjM1OSAzNy4wNjk2QzEyMS4yMzcgMzUuOTM1MiAxMjEuMTE2IDM0Ljk0NjggMTIwLjk5OCAzNC4xMDI3QzEyMC44ODIgMzMuMzQ0NiAxMjEuMDI0IDMyLjU0NTIgMTIxLjU2NyAzMS44NDkxQzEyMi4wODEgMzEuMTg4MSAxMjIuODE5IDMwLjc5NzUgMTIzLjUzNSAzMC41NjA5QzEyNC4yMDQgMzAuMzM5OSAxMjUuMDMyIDMwLjE4NjcgMTI1Ljg3NSAzMC4zOTExQzEyNi4zMjMgMzAuNDk5NyAxMjYuOCAzMC43MjAzIDEyNy4xODQgMzEuMTE5M0MxMjcuNTY5IDMxLjUxODMgMTI3Ljc0OSAzMS45ODEgMTI3LjgxMyAzMi40MDMzTDEyNy44MTcgMzIuNDMyOUwxMjkuMDAzIDQzLjA0MDRDMTI5LjA2MyA0My40OTY1IDEyOS4wNjcgNDQuMDY5MyAxMjguODQ2IDQ0LjYzMDJDMTI5LjMxMyA0NC45OTExIDEyOS42NDEgNDUuNDY3OSAxMjkuODQxIDQ1Ljk3OTlDMTMwLjI1MyA0Ny4wMzYxIDEzMC4wMTIgNDguMDY1NiAxMjkuNDQxIDQ4LjkxODRDMTI4LjkwNCA0OS43NDExIDEyOC4xMiA1MC4zNTAzIDEyNy4xMjcgNTAuNjc4NUMxMjYuMjE1IDUwLjk3OTcgMTI1LjI3NiA1MC45MjI1IDEyNC40MiA1MC41NTA5TDEyNC4zOTggNTAuNTQxNUwxMjQuMzc2IDUwLjUzMTZDMTI0LjM0MyA1MC41MTYyIDEyNC4zMSA1MC41MDA1IDEyNC4yNzggNTAuNDg0NEMxMjMuOTkgNTAuODg1NCAxMjMuNjA4IDUxLjIzMjMgMTIzLjEyNCA1MS40ODcxTDEyMy4wNzQgNTEuNTEzNUwxMjMuMDIyIDUxLjUzNzFDMTE4Ljk3MiA1My4zNzI5IDExNi43MDMgNTQuNDA5NCAxMTYuMTY4IDU0LjY2NzVMMTE2LjE0MyA1NC42Nzk2TDExNi4xMTcgNTQuNjkxQzExNS44MjUgNTQuODIxOSAxMTUuNjAyIDU0LjkyMTUgMTE1LjQ0OSA1NC45ODkzTDExNS4yNjggNTUuMDY5MkwxMTUuMjA3IDU1LjA5NTlMMTE1LjE3IDU1LjExMTNMMTE1LjEzNSA1NS4xMjU0QzExNS4xMjcgNTUuMTI4OCAxMTUuMDg0IDU1LjE0NTcgMTE1LjAzMSA1NS4xNjMzQzExNC41OCA1NS4zMTIxIDExNC4wOTYgNTUuNDA4NCAxMTMuNTg5IDU1LjQxMTdDMTEzLjMzNyA1NS40MTYgMTEyLjc2NCA1NS40MDMzIDExMi4yMTcgNTUuMTIyNkMxMTEuOTcyIDU1LjMwNjMgMTExLjcxMiA1NS40MzkzIDExMS41MDcgNTUuNTM0QzExMS4yMiA1NS42NjU4IDExMC44OTUgNTUuNzg3NCAxMTAuNTUxIDU1LjkwMTRDMTA5Ljc2NCA1Ni4xNjE0IDEwOC41MzggNTYuMzI5NSAxMDcuNTIzIDU1LjU0NzNDMTA3LjU1MiA1Ni4yMDQ1IDEwNy4zMjUgNTYuODkzNyAxMDYuNzI0IDU3LjQzMUMxMDYuMjY5IDU3Ljg1NSAxMDUuNzA5IDU4LjExNjUgMTA1LjE5IDU4LjI4OEMxMDQuNTQ2IDU4LjUwMDggMTAzLjc5NyA1OC42ODIgMTAzLjA2OSA1OC42Mjk5QzEwMi44MzYgNTguNjEzMyAxMDIuNTc1IDU4LjU3MDcgMTAyLjMwOCA1OC40ODExQzEwMS43NzcgNTguOTk2MiAxMDEuMTQ1IDU5LjQ3MTIgMTAwLjQwNCA1OS43MTZDOTkuMTgxOSA2MC4xMjAxIDk3LjkyMzggNjAuMzU2NCA5Ni43NTQ0IDYwLjE5MDVDOTYuNzA3OSA2MC4zMjc1IDk2LjY0OTMgNjAuNDY0IDk2LjU3NzQgNjAuNTk5NEM5Ni4xNjA0IDYxLjQ0MTkgOTUuMzg3NiA2MS45Mzc3IDk0LjU5OTQgNjIuMTk4M0M5NC4wNzkxIDYyLjM3MDIgOTMuNTc2NSA2Mi4zMjU3IDkzLjMzNjUgNjIuMjk4MUM5My4wMzAzIDYyLjI2MjkgOTIuNzA2NSA2Mi4xOTQxIDkyLjM4ODYgNjIuMTEyOEM5Mi4wNTM3IDYyLjAyNzEgOTEuNjc0MSA2MS45MTQxIDkxLjI1MzMgNjEuNzc2NUM5MC4xOTU0IDYyLjc2NjIgODguOTMyNCA2My41MDc5IDg3LjQ3OTEgNjMuOTg4M0M4NS4xMzkxIDY0Ljc2MTggODIuODM0OSA2NC43NDc1IDgwLjgyMjYgNjMuNjA0NEM3OC45Mzk3IDYyLjUzNDcgNzcuNjM3OSA2MC43NjAyIDc2Ljc3NjEgNTguNTUxMkM3Ni4wMzg3IDU2LjY2MSA3NS43OTM1IDU0Ljc0NDIgNzYuMDcwNiA1Mi44MjI3Wk05MC42OTEgNTkuNzM5OUM4OS42ODkyIDYwLjk3NiA4OC40MDc5IDYxLjg1MiA4Ni44NDcgNjIuMzY3OUM4NC44OTE3IDYzLjAxNDIgODMuMjExIDYyLjkzOCA4MS44MDUgNjIuMTM5MkM4MC4zOTkgNjEuMzQwNSA3OS4zMDk1IDU5Ljk1MDUgNzguNTM2NiA1Ny45NjkzQzc3Ljg5MzQgNTYuMzIwOCA3Ny42ODk1IDU0LjY4MDggNzcuOTI0OCA1My4wNDkzQzc4LjE2MDIgNTEuNDE3OCA3OC44MTE1IDQ5Ljk3MzEgNzkuODc5IDQ4LjcxNTRDODAuOTQwNiA0Ny40NDI1IDgyLjMzNCA0Ni41MjA5IDg0LjA1OTIgNDUuOTUwN0M4NS43MzUyIDQ1LjM5NjcgODcuMjgwOCA0NS40ODM0IDg4LjY5NjEgNDYuMjEwOEM5MC4xMjE5IDQ2LjkxNzYgOTEuMjQxOSA0OC4zMTQ2IDkyLjA1NjIgNTAuNDAxN0M5Mi4yMDM0IDUwLjc3OTIgOTIuMzI1OCA1MS4xNjMgOTIuNDIzMSA1MS41NTMxQzkyLjYxNDMgNTIuMzE5NiA5Mi43MDkxIDUzLjExMDQgOTIuNzA3NSA1My45MjU2QzkyLjcwNzEgNTQuMTcxOSA5Mi42OTc2IDU0LjQxNiA5Mi42NzkgNTQuNjU4QzkyLjYwNTEgNTUuNjI0NiA5Mi4zODcyIDU2LjU1NjkgOTIuMDI1NCA1Ny40NTQ5QzkyLjcxNjcgNTcuNzMxNyA5My4yODQyIDU3Ljk2NzcgOTMuNzI3OCA1OC4xNjI4Qzk0LjQ4MzQgNTguNDk1MSA5NC44Nzk3IDU4LjcwODggOTQuOTE2OSA1OC44MDQxQzk1LjAyMTYgNTkuMDcyNyA5NS4wNSA1OS4zMjI3IDk1LjAwMTkgNTkuNTU0MUM5NC45Nzk1IDU5LjY2MTYgOTQuOTQwNyA1OS43NjUxIDk0Ljg4NTQgNTkuODY0NkM5NC43MzM0IDYwLjE4OCA5NC40MjczIDYwLjQyNTggOTMuOTY3MiA2MC41Nzc4QzkzLjYyMjIgNjAuNjkxOSA5Mi41MzAxIDYwLjQxMjYgOTAuNjkxIDU5LjczOTlaTTk1LjE5NDQgNTYuOTEyMkM5NS4yMTc5IDU2Ljk3NTQgOTUuMjQxOCA1Ny4wMzgyIDk1LjI2NjIgNTcuMTAwOEM5NS40OTQ3IDU3LjY4NjYgOTUuODcxNSA1OC4wOTEzIDk2LjM5NjYgNTguMzE1Qzk2LjUwODIgNTguMzYyNiA5Ni42MjY3IDU4LjQwMiA5Ni43NTE4IDU4LjQzMzNDOTcuNTExMyA1OC42MjI3IDk4LjUxODIgNTguNTEwMiA5OS43NzIzIDU4LjA5NTZDMTAwLjEyMiA1Ny45Nzk5IDEwMC41MDUgNTcuNzIzMiAxMDAuOTIgNTcuMzI1NUMxMDAuOTkyIDU3LjI1NjUgMTAxLjA2NSA1Ny4xODM0IDEwMS4xMzkgNTcuMTA2QzEwMS4xODcgNTcuMDU2MSAxMDEuMjM0IDU3LjAwNjQgMTAxLjI4IDU2Ljk1N0MxMDEuMzUxIDU2Ljg4MTUgMTAxLjQxOSA1Ni44MDY1IDEwMS40ODYgNTYuNzMyMUMxMDEuNDkxIDU2LjcyNjggMTAxLjQ5NiA1Ni43MjE0IDEwMS41MDEgNTYuNzE2QzEwMS41OTkgNTYuNjA3MiAxMDEuNjkzIDU2LjQ5OTYgMTAxLjc4NCA1Ni4zOTMyQzEwMS43ODYgNTYuMzkwMyAxMDEuNzg4IDU2LjM4NzQgMTAxLjc5MSA1Ni4zODQ1QzEwMi4wMTUgNTYuMTIwNiAxMDIuMjE2IDU1Ljg2NDMgMTAyLjM5NCA1NS42MTU1TDEwMi41ODMgNTYuNTI2NUMxMDIuNzE0IDU2Ljg2NDQgMTAzLjA5MyA1Ni45ODMyIDEwMy43MTkgNTYuODgyOUMxMDMuOTYxIDU2Ljg0NCAxMDQuMjQxIDU2Ljc3MjMgMTA0LjU1NyA1Ni42Njc2QzEwNC45MzUgNTYuNTQyNyAxMDUuMjE5IDU2LjM4OTMgMTA1LjQwNyA1Ni4yMDc0QzEwNS42MDIgNTYuMDQwNiAxMDUuNjgyIDU1LjgxNzggMTA1LjY0OCA1NS41MzlDMTA1LjUwMSA1NC41NDU4IDEwNS4yNTMgNTIuNDU5NSAxMDQuOTAzIDQ5LjI3OTlMMTA0LjQ1NSA0NS4yNzlDMTA0LjQ0MiA0NS4xOTc5IDEwNC40MzEgNDUuMDk5IDEwNC40MjMgNDQuOTgyM0MxMDQuNDI1IDQ0Ljg0NSAxMDQuNDExIDQ0LjczODYgMTA0LjM4MiA0NC42NjNDMTA0LjE5MyA0NC4xNzkgMTAzLjY2MyA0NC4wODA5IDEwMi43OTIgNDQuMzY4OEMxMDIuMTY4IDQ0LjU3NTEgMTAxLjc4NCA0NC45MjM4IDEwMS42NDIgNDUuNDE0OEMxMDEuNTEgNDUuODg1MiAxMDEuNDcyIDQ2LjQ1MjggMTAxLjUyNyA0Ny4xMTc1QzEwMS41NzQgNDcuNjY1NCAxMDEuNzMgNDkuMTMzNiAxMDEuOTk0IDUxLjUyMjFMMTAyLjIxOCA1My41MjI2QzEwMS45NTUgNTMuOTA3NyAxMDEuNTYxIDU0LjMzMDggMTAxLjAzNiA1NC43OTIxQzEwMC45IDU0LjkxMTUgMTAwLjc1NSA1NS4wMzM0IDEwMC42MDIgNTUuMTU3OUMxMDAuNDQzIDU1LjI4OCAxMDAuMjk0IDU1LjQwNjggMTAwLjE1MyA1NS41MTQzQzk5LjY0MzIgNTUuOTAyNiA5OS4yNDY5IDU2LjE0MzYgOTguOTYzOCA1Ni4yMzcyQzk4LjgzMjQgNTYuMjgwNiA5OC42NTUgNTYuMjUzOSA5OC40MzE3IDU2LjE1NjlDOTguMjA4NCA1Ni4wNiA5OC4wNTgzIDU1LjkxMzIgOTcuOTgxNiA1NS43MTY2Qzk3LjEwMjUgNTMuNDYzMiA5Ni45NzIgNTAuODk0IDk3LjU5MDIgNDguMDA5Qzk3LjY0NDkgNDcuNzY5IDk3LjcyNDMgNDcuNTIwOCA5Ny44MjgzIDQ3LjI2NDRDOTcuOTIwNiA0Ni45Nzc4IDk3Ljk1NzggNDYuODExOSA5Ny45NDAxIDQ2Ljc2NjVDOTcuODYzNCA0Ni41Njk5IDk3LjY1MDYgNDYuNDUyNCA5Ny4zMDE4IDQ2LjQxNEM5Ni45NjM1IDQ2LjM1NTEgOTYuNTA2NyA0Ni40MjA3IDk1LjkzMTcgNDYuNjEwOEM5NS4zODk1IDQ2Ljc5IDk1LjAzMjggNDYuOTkzMyA5NC44NjE4IDQ3LjIyMDVDOTQuNzA3MiA0Ny40NDI0IDk0LjU5OTIgNDcuNzU5OCA5NC41Mzc3IDQ4LjE3MjhDOTQuMzgwNCA0OS4yODcyIDk0LjI5OTEgNTAuMzUxNyA5NC4yOTM3IDUxLjM2NjJDOTQuMjg4OSA1Mi4yNTg5IDk0LjM0MyA1My4xMTMgOTQuNDU1OSA1My45Mjg0Qzk0LjQ4NiA1NC4xNDU5IDk0LjUyMDMgNTQuMzYwNyA5NC41NTg4IDU0LjU3MjdDOTQuNzA3OSA1NS4zOTM4IDk0LjkxOTcgNTYuMTczNyA5NS4xOTQ0IDU2LjkxMjJaTTEwNi45NzUgNDQuMjQxQzEwNy41MzEgNDkuODk2NyAxMDcuODYyIDUyLjg2MDcgMTA3Ljk2OCA1My4xMzI5QzEwOC4xNjcgNTMuNTk2MyAxMDguNDA4IDUzLjk1MjEgMTA4LjY5IDU0LjIwMDNDMTA4Ljk2NyA1NC40MzMzIDEwOS4zNzYgNTQuNDYwMiAxMDkuOTE4IDU0LjI4MUMxMTAuMzQ3IDU0LjEzOTQgMTEwLjY2OSA1NC4wMDc2IDExMC44ODQgNTMuODg1NkMxMTAuOTc0IDUzLjgzNDUgMTExLjA0NSA1My43ODUyIDExMS4wOTggNTMuNzM3NkMxMTEuMjc2IDUzLjU3NjIgMTExLjMzMiA1My40MTI0IDExMS4yNjggNTMuMjQ2TDExMC43OTIgNTIuNDU1NUwxMDkuOCA0My41NjM2QzEwOS43NzMgNDMuNDAxNSAxMDkuNzQzIDQzLjI3NTEgMTA5LjcwNyA0My4xODQ0QzEwOS42MjggNDIuOTgwNSAxMDkuNTEyIDQyLjgwNzkgMTA5LjM1OSA0Mi42NjY3QzEwOS4yNjMgNDIuNTc3NCAxMDkuMTUxIDQyLjUwMDYgMTA5LjAyNiA0Mi40MzY0QzEwOC44NSA0Mi4zMzg4IDEwOC42NDggNDIuMjk0NSAxMDguNDE4IDQyLjMwMzZDMTA4LjI0NCA0Mi4zMTA0IDEwOC4wNTQgNDIuMzQ3OCAxMDcuODQ5IDQyLjQxNTVDMTA3LjI0MSA0Mi42MTY1IDEwNi44NDggNDIuNzk3NiAxMDYuNjcgNDIuOTU5QzEwNi41OTggNDMuMDIzOSAxMDYuNTQ2IDQzLjA4OTMgMTA2LjUxNCA0My4xNTVDMTA2LjQ2NiA0My4yNTI2IDEwNi40NjEgNDMuMzUxMSAxMDYuNSA0My40NTA1TDEwNi45NzUgNDQuMjQxWk0xMTcuNzg2IDQyLjI1NTZDMTE3LjQ1OSA0Mi44Nzk5IDExNy4wNiA0My42ODcxIDExNi41ODkgNDQuNjc3MkMxMTYuMTg3IDQ1LjUyMTQgMTE1LjczNCA0Ni40OTg2IDExNS4yMjggNDcuNjA4OEMxMTQuNDQzIDQ5LjM1MzYgMTEzLjgwNCA1MC43MzQ0IDExMy4zMSA1MS43NTEzQzExMy4yMTIgNTEuNzgzOSAxMTMuMDQgNTEuODY2MyAxMTIuNzk0IDUxLjk5ODZDMTEyLjc1OCA1Mi4wMTggMTEyLjcyMyA1Mi4wMzczIDExMi42OSA1Mi4wNTYzQzExMi42NyA1Mi4wNjgxIDExMi42NSA1Mi4wNzk4IDExMi42MzIgNTIuMDkxNEMxMTIuNTEzIDUyLjE2NiAxMTIuNDI4IDUyLjIzNzQgMTEyLjM3NiA1Mi4zMDU3QzExMi4zNTcgNTIuMzMxNiAxMTIuMzQyIDUyLjM1NyAxMTIuMzMyIDUyLjM4MkMxMTIuMjgzIDUyLjQ3NjggMTEyLjI4IDUyLjU4NTkgMTEyLjMyMSA1Mi43MDkyQzExMi4zMjUgNTIuNzE5NSAxMTIuMzI4IDUyLjcyOTggMTEyLjMzMyA1Mi43NDAzQzExMi4zNDkgNTIuNzgyNyAxMTIuMzcyIDUyLjgyNjUgMTEyLjQgNTIuODcxN0MxMTIuNDYzIDUyLjk3MTMgMTEyLjU1NCA1My4wNzc2IDExMi42NzUgNTMuMTkwNUMxMTIuODUgNTMuMzU0NSAxMTIuOTY5IDUzLjQ2ODkgMTEzLjAzMiA1My41MzM3QzExMy4wMzUgNTMuNTM4OCAxMTMuMDM5IDUzLjU0MzkgMTEzLjA0NCA1My41NDg4QzExMy4wNjQgNTMuNTcyNSAxMTMuMDg5IDUzLjU5MzMgMTEzLjExOSA1My42MTExQzExMy4xMjkgNTMuNjE2OSAxMTMuMTQgNTMuNjIyNCAxMTMuMTUxIDUzLjYyNzZDMTEzLjI0OCA1My42NzMxIDExMy4zODYgNTMuNjkzOSAxMTMuNTY2IDUzLjY5MDFDMTEzLjgyNSA1My42ODk3IDExNC4xMDMgNTMuNjQwNiAxMTQuMzk5IDUzLjU0MjlDMTE0LjQxNSA1My41Mzc0IDExNC43MTUgNTMuNDA0IDExNS4zIDUzLjE0MjVDMTE1Ljg2MiA1Mi44NzE0IDExOC4xNiA1MS44MjE0IDEyMi4xOTYgNDkuOTkyNUMxMjIuNDU3IDQ5Ljg1NDggMTIyLjY2NSA0OS42NDk2IDEyMi44MTggNDkuMzc3QzEyMi44MzkgNDkuMzM4NSAxMjIuODU5IDQ5LjMwMDMgMTIyLjg3NiA0OS4yNjI0QzEyMi45ODQgNDkuMDIwMyAxMjIuOTk5IDQ4Ljc5MSAxMjIuOTIyIDQ4LjU3NDNDMTIyLjkxOSA0OC41NjY3IDEyMi45MTYgNDguNTU5MSAxMjIuOTEzIDQ4LjU1MTVDMTIyLjc4NSA0OC4yMjMgMTIyLjYxMiA0OC4wMDA3IDEyMi4zOTUgNDcuODg0N0MxMjIuMTczIDQ3Ljc2NTcgMTIxLjkwMyA0Ny43NTg0IDEyMS41ODcgNDcuODYyOUMxMjEuMTYxIDQ4LjAwMzggMTIwLjQzIDQ4LjMwNDcgMTE5LjM5NCA0OC43NjU3QzExOC42NzMgNDkuMDg2OSAxMTcuODAzIDQ5LjQ4NTcgMTE2Ljc4NiA0OS45NjIyTDExOC44MzIgNDUuNjQ5MkMxMTkuNjMzIDQzLjg5OSAxMjAuMzIgNDIuNDUxIDEyMC44OTMgNDEuMzA1NEwxMjEuMjY3IDQwLjY5NTFDMTIxLjQ0NSA0MC41MzM4IDEyMS41NzYgNDAuMzQ1NSAxMjEuNjU5IDQwLjEzMDNDMTIxLjY2MSA0MC4xMjU1IDEyMS42NjIgNDAuMTIwOCAxMjEuNjY0IDQwLjExNjFDMTIxLjczNiAzOS44OTExIDEyMS43MzUgMzkuNjgyNCAxMjEuNjYgMzkuNDg5OEMxMjEuNjM3IDM5LjQzMSAxMjEuNjEyIDM5LjM3NTYgMTIxLjU4NyAzOS4zMjM3QzEyMS41NTYgMzkuMjYyIDEyMS41MjMgMzkuMjA1MiAxMjEuNDg5IDM5LjE1MzFDMTIxLjQwOCAzOS4wMzE4IDEyMS4zMTcgMzguOTM2NSAxMjEuMjE1IDM4Ljg2NzFDMTIwLjk3OSAzOC43MDcgMTIwLjY4NSAzOC42ODUgMTIwLjMzNCAzOC44MDEyQzExOS45MzkgMzguOTMxNSAxMTkuMDQzIDM5LjI5NjIgMTE3LjY0NCAzOS44OTUxQzExNi4yNTYgNDAuNDczNCAxMTQuOTggNDEuMDMxNiAxMTMuODE4IDQxLjU2OTZDMTEyLjY1NSA0Mi4xMDc2IDExMi4wNTMgNDIuNDQzMiAxMTIuMDEyIDQyLjU3NjJDMTExLjg2NCA0My4wNTIgMTExLjg2NCA0My40NzkgMTEyLjAxMSA0My44NTcxQzExMi4xOTQgNDQuMzI1OSAxMTIuNTQgNDQuNDc2MiAxMTMuMDQ5IDQ0LjMwNzhMMTE3Ljc4NiA0Mi4yNTU2Wk0xMjMuNDI2IDM4LjkyMzdDMTIzLjQ3IDM5LjM4MjYgMTIzLjUxMiAzOS44MTM1IDEyMy41NTIgNDAuMjE2MkMxMjMuNjQ0IDQxLjEyODQgMTIzLjcyOCA0MS44OTYzIDEyMy44MDUgNDIuNTJDMTIzLjkyNiA0My40MDE4IDEyNC4wNjEgNDQuMDMxOCAxMjQuMjA4IDQ0LjQwOTlDMTI0LjIzMSA0NC40NjgzIDEyNC4yNTcgNDQuNTIyMiAxMjQuMjg3IDQ0LjU3MThDMTI0LjQ5NiA0NC45MjQyIDEyNC44NzYgNDUuMDU1OCAxMjUuNDI3IDQ0Ljk2NjZDMTI1LjU4MiA0NC45NDE0IDEyNS43NTEgNDQuODk4NyAxMjUuOTM0IDQ0LjgzODRDMTI2LjQ3NiA0NC42NTkyIDEyNi44MjQgNDQuNDU4NyAxMjYuOTc5IDQ0LjIzNjlDMTI3LjAzNiA0NC4xNjA2IDEyNy4wOCA0NC4wNzIyIDEyNy4xMTIgNDMuOTcxOUMxMjcuMTc0IDQzLjc3MzMgMTI3LjE4NSA0My41Mjc1IDEyNy4xNDQgNDMuMjM0NkwxMjUuOTYgMzIuNjM4OUMxMjUuOTEzIDMyLjMyOTggMTI1LjcyNiAzMi4xMzU1IDEyNS4zOTkgMzIuMDU2MUMxMjUuMDcxIDMxLjk3NjYgMTI0LjY2IDMyLjAxODMgMTI0LjE2OCAzMi4xODEzQzEyMy4xNjUgMzIuNTEyNSAxMjIuNzI2IDMzLjA3NTkgMTIyLjg1MSAzMy44NzEzQzEyMy4wMzkgMzUuMjA5MiAxMjMuMjMgMzYuODg3NiAxMjMuNDI0IDM4LjkwNjVDMTIzLjQyNSAzOC45MTIyIDEyMy40MjYgMzguOTE3OSAxMjMuNDI2IDM4LjkyMzdaTTEyNy42NjggNDUuOTY5MkMxMjcuNTI4IDQ1Ljg1NjEgMTI3LjM2MyA0NS43NzggMTI3LjE3NCA0NS43MzQ3QzEyNi44ODggNDUuNjYwNCAxMjYuNTg2IDQ1LjY0NzEgMTI2LjI2OCA0NS42OTQ4QzEyNi4xMDMgNDUuNzE5NSAxMjUuOTMzIDQ1Ljc2MDYgMTI1Ljc1OSA0NS44MTgxQzEyNS4yNDQgNDUuOTg4NCAxMjQuODU2IDQ2LjI3NDQgMTI0LjU5NCA0Ni42NzZDMTI0LjU2NCA0Ni43MjI2IDEyNC41MzYgNDYuNzcwOCAxMjQuNTA5IDQ2LjgyMDVDMTI0LjQxOSA0Ni45NzcgMTI0LjM1NCA0Ny4xMjk1IDEyNC4zMTIgNDcuMjc4MUMxMjQuMjMzIDQ3LjU2MDUgMTI0LjI0IDQ3LjgyODUgMTI0LjMzMyA0OC4wODIxQzEyNC4zMzYgNDguMDg5NyAxMjQuMzM5IDQ4LjA5NzMgMTI0LjM0MiA0OC4xMDQ5QzEyNC40NDUgNDguMzY5NiAxMjQuNjExIDQ4LjU5MDMgMTI0Ljg0IDQ4Ljc2NzJDMTI0Ljk1MSA0OC44NTMgMTI1LjA3NyA0OC45Mjg1IDEyNS4yMTcgNDguOTkzNkMxMjUuNjQyIDQ5LjE3NzggMTI2LjA2NyA0OS4xOTkzIDEyNi40OTUgNDkuMDU4MUMxMjcuMDcgNDguODY4IDEyNy41MTkgNDguNTIzIDEyNy44NDQgNDguMDIzMUMxMjguMTg1IDQ3LjUxNzcgMTI4LjI2MyA0Ny4wMzA3IDEyOC4wODEgNDYuNTYxOEMxMjcuOTgyIDQ2LjMwOSAxMjcuODQ0IDQ2LjExMTUgMTI3LjY2OCA0NS45NjkyWk0xMDkuMTczIDQwLjY1MzJDMTA5LjI3NSA0MC41NTE3IDEwOS4zNjkgNDAuNDQxNiAxMDkuNDUzIDQwLjMyM0MxMDkuNzkgMzkuODUzMyAxMDkuODcyIDM5LjM5OTIgMTA5LjcwMSAzOC45NjA2QzEwOS41MyAzOC41MjIgMTA5LjE0NiAzOC4yMDQ4IDEwOC41NTEgMzguMDA5QzEwNy45NzEgMzcuODA3OCAxMDcuMzc4IDM3LjgwNzcgMTA2Ljc3IDM4LjAwODZDMTA2LjE5NSAzOC4xOTg3IDEwNS44MTQgMzguNTI5NiAxMDUuNjI3IDM5LjAwMTJDMTA1LjQ1NiAzOS40NjczIDEwNS40NjIgMzkuOTM0OCAxMDUuNjQ1IDQwLjQwMzZDMTA1Ljc3NCA0MC43MzM3IDEwNS45NjQgNDAuOTkzOCAxMDYuMjE1IDQxLjE4NDFDMTA2LjMwOSA0MS4yNTU0IDEwNi40MTEgNDEuMzE2OSAxMDYuNTIyIDQxLjM2ODZDMTA2LjgwMiA0MS40ODE2IDEwNy4xMjEgNDEuNTEzMiAxMDcuNDc4IDQxLjQ2MzJDMTA3LjY1NSA0MS40Mzg1IDEwNy44NDEgNDEuMzkzNyAxMDguMDM3IDQxLjMyODlDMTA4LjQ5MiA0MS4xNzg3IDEwOC44NyA0MC45NTM1IDEwOS4xNzMgNDAuNjUzMlpcIiBmaWxsPVwiIzI1MkI1MVwiIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcDBcIj5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjEzNC4zNzNcIiBoZWlnaHQ9XCI2N1wiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbkxvZ28ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IFF1aXpMb2dvID0gc3R5bGVkKExvZ28pYFxuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUXVpekxvZ287XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IFdpZGdldCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoZW1lKTtcbiAgICByZXR1cm4gdGhlbWUuY29sb3JzLnByaW1hcnk7XG4gIH19O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHtcbiAgICBjb25zb2xlLmxvZyh0aGVtZSk7XG4gICAgcmV0dXJuIHRoZW1lLmNvbG9ycy5tYWluQmc7XG4gIH19O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGgxLCBoMiwgaDMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbmA7XG5cbldpZGdldC5IZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE4cHggMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIFxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbldpZGdldC5Db250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMjRweCAzMnB4IDMycHggMzJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiA+ICo6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgJiA+ICo6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5gO1xuV2lkZ2V0LlRvcGljID0gc3R5bGVkLmFgXG4gIG91dGxpbmU6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW59O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTUwYH07XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyUmFkaXVzfTtcbiAgdHJhbnNpdGlvbjogLjNzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==