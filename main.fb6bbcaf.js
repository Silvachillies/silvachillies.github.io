// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./25552.jpg":[["25552.6c01d769.jpg","css/25552.jpg"],"css/25552.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../static/img/html.png":[function(require,module,exports) {
module.exports = "/html.841cd383.png";
},{}],"../static/img/js.png":[function(require,module,exports) {
module.exports = "/js.6d9c27a4.png";
},{}],"../static/img/css-3.png":[function(require,module,exports) {
module.exports = "/css-3.54c709ae.png";
},{}],"../static/img/atom.png":[function(require,module,exports) {
module.exports = "/atom.eae9bda2.png";
},{}],"js/homepage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadHomePage;
var _html = _interopRequireDefault(require("../../static/img/html.png"));
var _js = _interopRequireDefault(require("../../static/img/js.png"));
var _css = _interopRequireDefault(require("../../static/img/css-3.png"));
var _atom = _interopRequireDefault(require("../../static/img/atom.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function homepage() {
  var homepageland = document.createElement("div");
  homepageland.classList.add("homepage");
  homepageland.appendChild(homepageContent("Check out some of our amazing projects"));
  homepageland.appendChild(homepageContent("Alim Nawaz is an aspiring web developer from London,"));
  homepageland.appendChild(homepageContent("we utilise the latest technology to build beautiful reponsive websites"));
  homepageland.append(Technologies(_html.default));
  homepageland.append(Technologies(_js.default));
  homepageland.append(Technologies(_css.default));
  homepageland.append(Technologies(_atom.default));
  homepageland.append(writeUp("Get in touch today, our team is ready to help you build the site of your dreams "));
  return homepageland;
}
function Technologies() {
  var imageContainer = document.createElement("div");
  imageContainer.classList.add("imageContainer");
  var ourtech = document.createElement("img");
  for (var _len = arguments.length, techs = new Array(_len), _key = 0; _key < _len; _key++) {
    techs[_key] = arguments[_key];
  }
  ourtech.src = techs;
  imageContainer.appendChild(ourtech);
  return imageContainer;
}
function homepageContent(p) {
  var hpcontent = document.createElement("div");
  hpcontent.classList.add("hpcontent");
  hpcontent.textContent = p;
  return hpcontent;
}
function writeUp(text) {
  var writeUp = document.createElement("div");
  //writeUp.classList.add("writeUp");
  writeUp.textContent = text;
  writeUp.style.marginTop = "-10.5rem";
  writeUp.style.maxWidth = "50vw";
  writeUp.style.backgroundColor = "azure";
  writeUp.style.color = "black";
  writeUp.style.padding = "20px";
  writeUp.style.borderRadius = "10px";
  writeUp.style.fontWeight = "80px";
  return writeUp;
}
function loadHomePage() {
  document.querySelector(".content").appendChild(homepage());
}
},{"../../static/img/html.png":"../static/img/html.png","../../static/img/js.png":"../static/img/js.png","../../static/img/css-3.png":"../static/img/css-3.png","../../static/img/atom.png":"../static/img/atom.png"}],"../static/img/RPS.png":[function(require,module,exports) {
module.exports = "/RPS.f64965e3.png";
},{}],"../static/img/Calculator.png":[function(require,module,exports) {
module.exports = "/Calculator.98bb64cb.png";
},{}],"../static/img/Etch-a-Sketch.png":[function(require,module,exports) {
module.exports = "/Etch-a-Sketch.e5b71bb7.png";
},{}],"../static/img/Library.png":[function(require,module,exports) {
module.exports = "/Library.3a32266f.png";
},{}],"../static/img/WeatherAPP.png":[function(require,module,exports) {
module.exports = "/WeatherAPP.fd8b6c98.png";
},{}],"js/projects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = projectPage;
var _RPS = _interopRequireDefault(require("../../static/img/RPS.png"));
var _Calculator = _interopRequireDefault(require("../../static/img/Calculator.png"));
var _EtchASketch = _interopRequireDefault(require("../../static/img/Etch-a-Sketch.png"));
var _Library = _interopRequireDefault(require("../../static/img/Library.png"));
var _WeatherAPP = _interopRequireDefault(require("../../static/img/WeatherAPP.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var projectItems = {
  RPSLINKS: function RPSLINKS() {
    var RPSLINKS = document.createElement("a");
    RPSLINKS.title = "RPS";
    RPSLINKS.href = "https://silvachillies.github.io/ROCK-PAPER-SCISSORS-UI/";
    return RPSLINKS;
  },
  RPSCODE: function RPSCODE() {
    var RPSCODE = document.createElement("a");
    RPSCODE.title = "RPS CODE";
    RPSCODE.href = "https://github.com/Silvachillies/ROCK-PAPER-SCISSORS-UI";
    return RPSCODE;
  },
  EASLINKS: function EASLINKS() {
    var eas = document.createElement("a");
    eas.title = "LIVE";
    eas.href = "https://silvachillies.github.io/ETCH-A-SKETCH/";
    return eas;
  },
  EASCODE: function EASCODE() {
    var EASCODE = document.createElement("a");
    EASCODE.title = "CODE";
    EASCODE.href = "https://github.com/Silvachillies/ETCH-A-SKETCH";
    return EASCODE;
  },
  calculatorlinks: function calculatorlinks() {
    var calculator = document.createElement("a");
    calculator.title = "LIVE calculator";
    calculator.href = "https://silvachillies.github.io/Calculator-JS/";
    return calculator;
  },
  calculatorCode: function calculatorCode() {
    var calculatorCode = document.createElement("a");
    calculatorCode.title = "Calculator Code";
    calculatorCode.href = "https://github.com/Silvachillies/Calculator-JS";
    return calculatorCode;
  },
  librarylink: function librarylink() {
    var library = document.createElement("a");
    library.title = "Live library";
    library.href = "https://silvachillies.github.io/JS-Library/";
    return library;
  },
  libraryCode: function libraryCode() {
    var libraryCode = document.createElement("a");
    libraryCode.title = "Library Code";
    libraryCode.href = "https://github.com/Silvachillies/JS-Library";
    return libraryCode;
  },
  weatherLinks: function weatherLinks() {
    var weather = document.createElement("a");
    weather.title = "Weather";
    weather.href = "https://silvachillies.github.io/Weather-Website/";
    return weather;
  },
  weatherCode: function weatherCode() {
    var weatherCode = document.createElement("a");
    weatherCode.title = "Weather Code";
    weatherCode.href = "https://github.com/Silvachillies/Weather-Website";
    return weatherCode;
  }
};
function portfolioItems() {
  var portfolioItemEAS = document.createElement("div");
  //portfolioItemEAS.classList.add("container");
  //portfolioItemEAS.setAttribute("href", projectItems.EASLINKS);
  portfolioItemEAS.innerHTML = "\n  <div class=\"portfolios\">\n  <p>An Etch-a-Sketch which allows you to draw on a grid in various colours.</p>\n  <a class=\"live\" a href = ".concat(projectItems.EASCODE(), ">CODE</a>\n  <a class =\"live EAS\" a href = ").concat(projectItems.EASLINKS(), ">LIVE</a>\n   <img src= ").concat(_EtchASketch.default, " class = \"projectImages\"></img>\n  </div>\n  <div class=\"portfolios\">\n   <p>A Rock, Paper, Scissors game created using HTML, CSS and Javascript.</p>\n     <a class=\"live a href = ").concat(projectItems.RPSCODE(), "\" >CODE</button>\n   <a class=\"live\" a href = ").concat(projectItems.RPSLINKS(), ">LIVE</a>\n   <img src= ").concat(_RPS.default, " class = \"projectImages\"></img>\n   </div>\n   <div class=\"portfolios\">\n   <p>A calculator built using HTML, CSS and JavaScript</p>\n   <a class=\"live\" a href = ").concat(projectItems.calculatorCode(), " >CODE</a>\n   <a class=\"live live_calculator\" a href = ").concat(projectItems.calculatorlinks(), ">LIVE</a>\n   <img src= ").concat(_Calculator.default, " class = \"projectImages\"></img>\n   </div>\n   <div class=\"portfolios\">\n   <p>Library, an application which tracks my reading list</p>\n   <a class=\"live\" a href = ").concat(projectItems.libraryCode(), ">CODE</a>\n   <a class=\"live live_library\" a href = ").concat(projectItems.librarylink(), ">LIVE</a>\n   <img src= ").concat(_Library.default, " class = \"projectImages\"></img>\n     </div>\n   <div class=\"portfolios\">\n   <p>Weather App, utilises a weather API to update weather in a location of your choice</p>\n   <a class=\"live\" a href = ").concat(projectItems.weatherCode(), ">CODE</a>\n   <a class=\"live live_weather\" a href = ").concat(projectItems.weatherLinks(), ">LIVE</button>\n   <img src= ").concat(_WeatherAPP.default, " class = \"projectImages\"></img>\n</div>\n\n  ");
  return portfolioItemEAS;
}
function projectPage() {
  var projects = document.createElement("div");
  projects.classList.add("projectsPage");
  projects.appendChild(portfolioItems());
  return projects;
}
},{"../../static/img/RPS.png":"../static/img/RPS.png","../../static/img/Calculator.png":"../static/img/Calculator.png","../../static/img/Etch-a-Sketch.png":"../static/img/Etch-a-Sketch.png","../../static/img/Library.png":"../static/img/Library.png","../../static/img/WeatherAPP.png":"../static/img/WeatherAPP.png"}],"../static/img/odin-lined.png":[function(require,module,exports) {
module.exports = "/odin-lined.10dbef5f.png";
},{}],"../static/img/arsenal.png":[function(require,module,exports) {
module.exports = "/arsenal.a029e622.png";
},{}],"../static/img/UFC.png":[function(require,module,exports) {
module.exports = "/UFC.bd4a2503.png";
},{}],"js/about.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadAbout;
var _odinLined = _interopRequireDefault(require("../../static/img/odin-lined.png"));
var _arsenal = _interopRequireDefault(require("../../static/img/arsenal.png"));
var _UFC = _interopRequireDefault(require("../../static/img/UFC.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function aboutMe() {
  var about = document.createElement("div");
  about.classList.add("aboutPage");
  about.innerHTML = "\n  <h1>ABOUT ME</h1>\n  <div class=intro>My name is Alim Nawaz, an aspriring Web Developer. I started my professional career at 17 working in door-to-door sales. \n  Yes I know, the human equivalent of junk mail.</div>\n  <div class=intro>During this time I sold broadband, signed people up to charities, Sky TV and much more. All this was on a commission only basis. No sales = No wages.</div>\n  <div class=intro>Eventually I used my exprience to move into better sales roles, I worked in media, construction and advertising sectors.</div>\n  <div class=experience>Having worked in media I worked closely with some of the software developers within our company, I instantly became\n\n  fascinated with the processes of web development.</div>\n  <div class=experience>The power of software and the impact it has on our world today, the limitless opportunites it opens up, always fascinated me. The internet's impact on business, communication and society, \n  watching its growth has always amazed me. Talking to some of my colleagues the thing that struck me most was their passion for what they did, how much they enjoyed their work, something I struggled to relate to having worked in sales for so long.</div>\n  <div class=experience>At their direction I began studying in my own time, starting with HTML and CSS and Javascript, I began following the Odin Project.</div>\n  <div class=intro>Although initally The Odin Project was very challenging (still is), I enjoyed it immensely, being able to solve a problem after being stuck for so long gave me a great feeling of accomplisment. While I had times I felt hopeless I can see myself progressing quite quickly now I've got a grasp on the fundamentals.\n  I think FAC will help further solidify those skills, the part I look forward to most is the chance to work with others in the same boat as me, people to bounce ideas off, exploring new approaches to problem solving. People to hold me accountable. Learning on your own whilst balancing work, life and everything else can become tiresome and eventually burnout creeps up on you.\n  </div>\n  <div class=intro>I especially like the fact that we are expected to have a certain level of competency coming in. Being around others, who have also put similar effort in can and should be a game changer.</div>\n  <div class=intro>Outside of work, I am a football fanatic, been a lifelong Arsenal fan, our stadium also happens to be very close the FAC office! I was briefly an amatuer MMA fighter, and still remain an avid MMA/UFC fan.</div>\n  <div class=images>\n<div class=Odin>\n  <img src=".concat(_odinLined.default, "><caption The Odin Project/></img>\n</div>\n<div class=Odin>\n<img src=").concat(_arsenal.default, "></img>\n</div>\n<div class=Odin>\n<img src=").concat(_UFC.default, "></img>\n</div>\n<div>\n  ");
  return about;
}
function loadAbout() {
  document.querySelector(".content").appendChild(aboutMe());
}
},{"../../static/img/odin-lined.png":"../static/img/odin-lined.png","../../static/img/arsenal.png":"../static/img/arsenal.png","../../static/img/UFC.png":"../static/img/UFC.png"}],"js/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearContent = clearContent;
require("../css/main.css");
var _homepage = _interopRequireDefault(require("./homepage"));
var _projects = _interopRequireDefault(require("./projects"));
var _about = _interopRequireDefault(require("./about"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var aboutBtn = document.querySelector(".about");
var projectsPage = document.querySelector(".projects");
var homeBtn = document.querySelector(".home");
function compo() {
  var el = document.createElement("p");
  el.textContent = "I Am an portfolio";
  el.style.color = "red";
  el.style.fontWeight = "bolder";
  return el;
}
//document.body.appendChild(compo());
(0, _homepage.default)();
function clearContent() {
  var content = document.querySelector(".content");
  content.innerHTML = "";
  return content;
}
aboutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  clearContent();
  (0, _about.default)();
});
projectsPage.addEventListener("click", function (e) {
  e.preventDefault();
  clearContent();
  document.querySelector(".content").appendChild((0, _projects.default)());
});
homeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  clearContent();
  document.querySelector(".content").append((0, _homepage.default)());
});
},{"../css/main.css":"css/main.css","./homepage":"js/homepage.js","./projects":"js/projects.js","./about":"js/about.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55364" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map