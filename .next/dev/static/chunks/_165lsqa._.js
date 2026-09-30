(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/wanakana/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ROMANIZATIONS",
    ()=>ROMANIZATIONS,
    "TO_KANA_METHODS",
    ()=>TO_KANA_METHODS,
    "VERSION",
    ()=>VERSION,
    "bind",
    ()=>bind,
    "isHiragana",
    ()=>isHiragana,
    "isJapanese",
    ()=>isJapanese,
    "isKana",
    ()=>isKana,
    "isKanji",
    ()=>isKanji,
    "isKatakana",
    ()=>isKatakana,
    "isMixed",
    ()=>isMixed,
    "isRomaji",
    ()=>isRomaji,
    "stripOkurigana",
    ()=>stripOkurigana,
    "toHiragana",
    ()=>toHiragana,
    "toKana",
    ()=>toKana,
    "toKatakana",
    ()=>toKatakana,
    "toRomaji",
    ()=>toRomaji,
    "tokenize",
    ()=>tokenize,
    "unbind",
    ()=>unbind
]);
/**
 * Returns detailed type as string (instead of just 'object' for arrays etc)
 * @private
 * @param {any} value js value
 * @returns {String} type of value
 * @example
 * typeOf({}); // 'object'
 * typeOf([]); // 'array'
 * typeOf(function() {}); // 'function'
 * typeOf(/a/); // 'regexp'
 * typeOf(new Date()); // 'date'
 * typeOf(null); // 'null'
 * typeOf(undefined); // 'undefined'
 * typeOf('a'); // 'string'
 * typeOf(1); // 'number'
 * typeOf(true); // 'boolean'
 * typeOf(new Map()); // 'map'
 * typeOf(new Set()); // 'map'
 */ function typeOf(value) {
    if (value === null) {
        return 'null';
    }
    if (value !== Object(value)) {
        return typeof value;
    }
    return ({}).toString.call(value).slice(8, -1).toLowerCase();
}
/**
 * Checks if input string is empty
 * @param  {String} input text input
 * @return {Boolean} true if no input
 */ function isEmpty(input) {
    if (typeOf(input) !== 'string') {
        return true;
    }
    return !input.length;
}
/**
 * Takes a character and a unicode range. Returns true if the char is in the range.
 * @param  {String}  char  unicode character
 * @param  {Number}  start unicode start range
 * @param  {Number}  end   unicode end range
 * @return {Boolean}
 */ function isCharInRange(char = '', start, end) {
    if (isEmpty(char)) return false;
    const code = char.charCodeAt(0);
    return start <= code && code <= end;
}
const VERSION = '5.3.1';
const TO_KANA_METHODS = {
    HIRAGANA: 'toHiragana',
    KATAKANA: 'toKatakana'
};
const ROMANIZATIONS = {
    HEPBURN: 'hepburn'
};
/**
 * Default config for WanaKana, user passed options will be merged with these
 * @type {DefaultOptions}
 * @name DefaultOptions
 * @property {Boolean} [useObsoleteKana=false] - Set to true to use obsolete characters, such as ゐ and ゑ.
 * @example
 * toHiragana('we', { useObsoleteKana: true })
 * // => 'ゑ'
 * @property {Boolean} [passRomaji=false] - Set to true to pass romaji when using mixed syllabaries with toKatakana() or toHiragana()
 * @example
 * toHiragana('only convert the katakana: ヒラガナ', { passRomaji: true })
 * // => "only convert the katakana: ひらがな"
 * @property {Boolean} [convertLongVowelMark=true] - Set to false to prevent conversions of 'ー' to extended vowels with toHiragana()
 * @example
 * toHiragana('ラーメン', { convertLongVowelMark: false });
 * // => 'らーめん
 * @property {Boolean} [upcaseKatakana=false] - Set to true to convert katakana to uppercase using toRomaji()
 * @example
 * toRomaji('ひらがな カタカナ', { upcaseKatakana: true })
 * // => "hiragana KATAKANA"
 * @property {Boolean | 'toHiragana' | 'toKatakana'} [IMEMode=false] - Set to true, 'toHiragana', or 'toKatakana' to handle conversion while it is being typed.
 * @property {'hepburn'} [romanization='hepburn'] - choose toRomaji() romanization map (currently only 'hepburn')
 * @property {Object.<String, String>} [customKanaMapping] - custom map will be merged with default conversion
 * @example
 * toKana('wanakana', { customKanaMapping: { na: 'に', ka: 'Bana' }) };
 * // => 'わにBanaに'
 * @property {Object.<String, String>} [customRomajiMapping] - custom map will be merged with default conversion
 * @example
 * toRomaji('つじぎり', { customRomajiMapping: { じ: 'zi', つ: 'tu', り: 'li' }) };
 * // => 'tuzigili'
 */ const DEFAULT_OPTIONS = {
    useObsoleteKana: false,
    passRomaji: false,
    convertLongVowelMark: true,
    upcaseKatakana: false,
    IMEMode: false,
    romanization: ROMANIZATIONS.HEPBURN
};
const LATIN_UPPERCASE_START = 0x41;
const LATIN_UPPERCASE_END = 0x5a;
const LOWERCASE_ZENKAKU_START = 0xff41;
const LOWERCASE_ZENKAKU_END = 0xff5a;
const UPPERCASE_ZENKAKU_START = 0xff21;
const UPPERCASE_ZENKAKU_END = 0xff3a;
const HIRAGANA_START = 0x3041;
const HIRAGANA_END = 0x3096;
const KATAKANA_START = 0x30a1;
const KATAKANA_END = 0x30fc;
const KANJI_START = 0x4e00;
const KANJI_END = 0x9faf;
const KANJI_ITERATION_MARK = 0x3005; // 々
const PROLONGED_SOUND_MARK = 0x30fc; // ー
const KANA_SLASH_DOT = 0x30fb; // ・
const ZENKAKU_NUMBERS = [
    0xff10,
    0xff19
];
const ZENKAKU_UPPERCASE = [
    UPPERCASE_ZENKAKU_START,
    UPPERCASE_ZENKAKU_END
];
const ZENKAKU_LOWERCASE = [
    LOWERCASE_ZENKAKU_START,
    LOWERCASE_ZENKAKU_END
];
const ZENKAKU_PUNCTUATION_1 = [
    0xff01,
    0xff0f
];
const ZENKAKU_PUNCTUATION_2 = [
    0xff1a,
    0xff1f
];
const ZENKAKU_PUNCTUATION_3 = [
    0xff3b,
    0xff3f
];
const ZENKAKU_PUNCTUATION_4 = [
    0xff5b,
    0xff60
];
const ZENKAKU_SYMBOLS_CURRENCY = [
    0xffe0,
    0xffee
];
const HIRAGANA_CHARS = [
    0x3040,
    0x309f
];
const KATAKANA_CHARS = [
    0x30a0,
    0x30ff
];
const HANKAKU_KATAKANA = [
    0xff66,
    0xff9f
];
const KATAKANA_PUNCTUATION = [
    0x30fb,
    0x30fc
];
const KANA_PUNCTUATION = [
    0xff61,
    0xff65
];
const CJK_SYMBOLS_PUNCTUATION = [
    0x3000,
    0x303f
];
const COMMON_CJK = [
    0x4e00,
    0x9fff
];
const RARE_CJK = [
    0x3400,
    0x4dbf
];
const KANA_RANGES = [
    HIRAGANA_CHARS,
    KATAKANA_CHARS,
    KANA_PUNCTUATION,
    HANKAKU_KATAKANA
];
const JA_PUNCTUATION_RANGES = [
    CJK_SYMBOLS_PUNCTUATION,
    KANA_PUNCTUATION,
    KATAKANA_PUNCTUATION,
    ZENKAKU_PUNCTUATION_1,
    ZENKAKU_PUNCTUATION_2,
    ZENKAKU_PUNCTUATION_3,
    ZENKAKU_PUNCTUATION_4,
    ZENKAKU_SYMBOLS_CURRENCY
];
// All Japanese unicode start and end ranges
// Includes kanji, kana, zenkaku latin chars, punctuation, and number ranges.
const JAPANESE_RANGES = [
    ...KANA_RANGES,
    ...JA_PUNCTUATION_RANGES,
    ZENKAKU_UPPERCASE,
    ZENKAKU_LOWERCASE,
    ZENKAKU_NUMBERS,
    COMMON_CJK,
    RARE_CJK
];
const MODERN_ENGLISH = [
    0x0000,
    0x007f
];
const HEPBURN_MACRON_RANGES = [
    [
        0x0100,
        0x0101
    ],
    [
        0x0112,
        0x0113
    ],
    [
        0x012a,
        0x012b
    ],
    [
        0x014c,
        0x014d
    ],
    [
        0x016a,
        0x016b
    ]
];
const SMART_QUOTE_RANGES = [
    [
        0x2018,
        0x2019
    ],
    [
        0x201c,
        0x201d
    ]
];
const ROMAJI_RANGES = [
    MODERN_ENGLISH,
    ...HEPBURN_MACRON_RANGES
];
const EN_PUNCTUATION_RANGES = [
    [
        0x20,
        0x2f
    ],
    [
        0x3a,
        0x3f
    ],
    [
        0x5b,
        0x60
    ],
    [
        0x7b,
        0x7e
    ],
    ...SMART_QUOTE_RANGES
];
/**
 * Tests a character. Returns true if the character is [Katakana](https://en.wikipedia.org/wiki/Katakana).
 * @param  {String} char character string to test
 * @return {Boolean}
 */ function isCharJapanese(char = '') {
    return JAPANESE_RANGES.some(([start, end])=>isCharInRange(char, start, end));
}
/**
 * Test if `input` only includes [Kanji](https://en.wikipedia.org/wiki/Kanji), [Kana](https://en.wikipedia.org/wiki/Kana), zenkaku numbers, and JA punctuation/symbols.”
 * @param  {String} [input=''] text
 * @param  {RegExp} [allowed] additional test allowed to pass for each char
 * @return {Boolean} true if passes checks
 * @example
 * isJapanese('泣き虫')
 * // => true
 * isJapanese('あア')
 * // => true
 * isJapanese('２月') // Zenkaku numbers allowed
 * // => true
 * isJapanese('泣き虫。！〜＄') // Zenkaku/JA punctuation
 * // => true
 * isJapanese('泣き虫.!~$') // Latin punctuation fails
 * // => false
 * isJapanese('A泣き虫')
 * // => false
 * isJapanese('≪偽括弧≫', /[≪≫]/);
 * // => true
 */ function isJapanese(input = '', allowed) {
    const augmented = typeOf(allowed) === 'regexp';
    return isEmpty(input) ? false : [
        ...input
    ].every((char)=>{
        const isJa = isCharJapanese(char);
        return !augmented ? isJa : isJa || allowed.test(char);
    });
}
var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === 'number' && value !== value;
};
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for(var i = 0; i < newInputs.length; i++){
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}
function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) {
        isEqual = areInputsEqual;
    }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for(var _i = 0; _i < arguments.length; _i++){
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
    for (key of iter.keys()){
        if (dequal(key, tar)) return key;
    }
}
function dequal(foo, bar) {
    var ctor, len, tmp;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (ctor === Set) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len;
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!bar.has(tmp)) return false;
            }
            return true;
        }
        if (ctor === Map) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len[0];
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!dequal(len[1], bar.get(tmp))) {
                    return false;
                }
            }
            return true;
        }
        if (ctor === ArrayBuffer) {
            foo = new Uint8Array(foo);
            bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo.getInt8(len) === bar.getInt8(len));
            }
            return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo[len] === bar[len]);
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
/**
 * Easy re-use of merging with default options
 * @param {Object} opts user options
 * @returns user options merged over default options
 */ const mergeWithDefaultOptions = (opts = {})=>Object.assign({}, DEFAULT_OPTIONS, opts);
function applyMapping(string, mapping, convertEnding) {
    const root = mapping;
    function nextSubtree(tree, nextChar) {
        const subtree = tree[nextChar];
        if (subtree === undefined) {
            return undefined;
        }
        // if the next child node does not have a node value, set its node value to the input
        return Object.assign({
            '': tree[''] + nextChar
        }, tree[nextChar]);
    }
    function newChunk(remaining, currentCursor) {
        // start parsing a new chunk
        const firstChar = remaining.charAt(0);
        return parse(Object.assign({
            '': firstChar
        }, root[firstChar]), remaining.slice(1), currentCursor, currentCursor + 1);
    }
    function parse(tree, remaining, lastCursor, currentCursor) {
        if (!remaining) {
            if (convertEnding || Object.keys(tree).length === 1) {
                // nothing more to consume, just commit the last chunk and return it
                // so as to not have an empty element at the end of the result
                return tree[''] ? [
                    [
                        lastCursor,
                        currentCursor,
                        tree['']
                    ]
                ] : [];
            }
            // if we don't want to convert the ending, because there are still possible continuations
            // return null as the final node value
            return [
                [
                    lastCursor,
                    currentCursor,
                    null
                ]
            ];
        }
        if (Object.keys(tree).length === 1) {
            return [
                [
                    lastCursor,
                    currentCursor,
                    tree['']
                ]
            ].concat(newChunk(remaining, currentCursor));
        }
        const subtree = nextSubtree(tree, remaining.charAt(0));
        if (subtree === undefined) {
            return [
                [
                    lastCursor,
                    currentCursor,
                    tree['']
                ]
            ].concat(newChunk(remaining, currentCursor));
        }
        // continue current branch
        return parse(subtree, remaining.slice(1), lastCursor, currentCursor + 1);
    }
    return newChunk(string, 0);
}
// transform the tree, so that for example hepburnTree['ゔ']['ぁ'][''] === 'va'
// or kanaTree['k']['y']['a'][''] === 'きゃ'
function transform(tree) {
    return Object.entries(tree).reduce((map, [char, subtree])=>{
        const endOfBranch = typeOf(subtree) === 'string';
        // eslint-disable-next-line no-param-reassign
        map[char] = endOfBranch ? {
            '': subtree
        } : transform(subtree);
        return map;
    }, {});
}
function getSubTreeOf(tree, string) {
    return string.split('').reduce((correctSubTree, char)=>{
        if (correctSubTree[char] === undefined) {
            // eslint-disable-next-line no-param-reassign
            correctSubTree[char] = {};
        }
        return correctSubTree[char];
    }, tree);
}
/**
 * Creates a custom mapping tree, returns a function that accepts a defaultMap which the newly created customMapping will be merged with and returned
 * (customMap) => (defaultMap) => mergedMap
 * @param  {Object} customMap { 'ka' : 'な' }
 * @return {Function} (defaultMap) => defaultMergedWithCustomMap
 * @example
 * const sillyMap = createCustomMapping({ 'ちゃ': 'time', '茎': 'cookie'　});
 * // sillyMap is passed defaultMapping to merge with when called in toRomaji()
 * toRomaji("It's 茎 ちゃ よ", { customRomajiMapping: sillyMap });
 * // => 'It's cookie time yo';
 */ function createCustomMapping(customMap = {}) {
    const customTree = {};
    if (typeOf(customMap) === 'object') {
        Object.entries(customMap).forEach(([roma, kana])=>{
            let subTree = customTree;
            roma.split('').forEach((char)=>{
                if (subTree[char] === undefined) {
                    subTree[char] = {};
                }
                subTree = subTree[char];
            });
            subTree[''] = kana;
        });
    }
    return function makeMap(map) {
        const mapCopy = JSON.parse(JSON.stringify(map));
        function transformMap(mapSubtree, customSubtree) {
            if (mapSubtree === undefined || typeOf(mapSubtree) === 'string') {
                return customSubtree;
            }
            return Object.entries(customSubtree).reduce((newSubtree, [char, subtree])=>{
                // eslint-disable-next-line no-param-reassign
                newSubtree[char] = transformMap(mapSubtree[char], subtree);
                return newSubtree;
            }, mapSubtree);
        }
        return transformMap(mapCopy, customTree);
    };
}
// allow consumer to pass either function or object as customMapping
function mergeCustomMapping(map, customMapping) {
    if (!customMapping) {
        return map;
    }
    return typeOf(customMapping) === 'function' ? customMapping(map) : createCustomMapping(customMapping)(map);
}
// NOTE: not exactly kunrei shiki, for example ぢゃ -> dya instead of zya, to avoid name clashing
/* eslint-disable */ // prettier-ignore
const BASIC_KUNREI = {
    a: 'あ',
    i: 'い',
    u: 'う',
    e: 'え',
    o: 'お',
    k: {
        a: 'か',
        i: 'き',
        u: 'く',
        e: 'け',
        o: 'こ'
    },
    s: {
        a: 'さ',
        i: 'し',
        u: 'す',
        e: 'せ',
        o: 'そ'
    },
    t: {
        a: 'た',
        i: 'ち',
        u: 'つ',
        e: 'て',
        o: 'と'
    },
    n: {
        a: 'な',
        i: 'に',
        u: 'ぬ',
        e: 'ね',
        o: 'の'
    },
    h: {
        a: 'は',
        i: 'ひ',
        u: 'ふ',
        e: 'へ',
        o: 'ほ'
    },
    m: {
        a: 'ま',
        i: 'み',
        u: 'む',
        e: 'め',
        o: 'も'
    },
    y: {
        a: 'や',
        u: 'ゆ',
        o: 'よ'
    },
    r: {
        a: 'ら',
        i: 'り',
        u: 'る',
        e: 'れ',
        o: 'ろ'
    },
    w: {
        a: 'わ',
        i: 'ゐ',
        e: 'ゑ',
        o: 'を'
    },
    g: {
        a: 'が',
        i: 'ぎ',
        u: 'ぐ',
        e: 'げ',
        o: 'ご'
    },
    z: {
        a: 'ざ',
        i: 'じ',
        u: 'ず',
        e: 'ぜ',
        o: 'ぞ'
    },
    d: {
        a: 'だ',
        i: 'ぢ',
        u: 'づ',
        e: 'で',
        o: 'ど'
    },
    b: {
        a: 'ば',
        i: 'び',
        u: 'ぶ',
        e: 'べ',
        o: 'ぼ'
    },
    p: {
        a: 'ぱ',
        i: 'ぴ',
        u: 'ぷ',
        e: 'ぺ',
        o: 'ぽ'
    },
    v: {
        a: 'ゔぁ',
        i: 'ゔぃ',
        u: 'ゔ',
        e: 'ゔぇ',
        o: 'ゔぉ'
    }
};
const SPECIAL_SYMBOLS$1 = {
    '.': '。',
    ',': '、',
    ':': '：',
    '/': '・',
    '!': '！',
    '?': '？',
    '~': '〜',
    '-': 'ー',
    '‘': '「',
    '’': '」',
    '“': '『',
    '”': '』',
    '[': '［',
    ']': '］',
    '(': '（',
    ')': '）',
    '{': '｛',
    '}': '｝'
};
const CONSONANTS = {
    k: 'き',
    s: 'し',
    t: 'ち',
    n: 'に',
    h: 'ひ',
    m: 'み',
    r: 'り',
    g: 'ぎ',
    z: 'じ',
    d: 'ぢ',
    b: 'び',
    p: 'ぴ',
    v: 'ゔ',
    q: 'く',
    f: 'ふ'
};
const SMALL_Y$1 = {
    ya: 'ゃ',
    yi: 'ぃ',
    yu: 'ゅ',
    ye: 'ぇ',
    yo: 'ょ'
};
const SMALL_VOWELS = {
    a: 'ぁ',
    i: 'ぃ',
    u: 'ぅ',
    e: 'ぇ',
    o: 'ぉ'
};
// typing one should be the same as having typed the other instead
const ALIASES = {
    sh: 'sy',
    ch: 'ty',
    cy: 'ty',
    chy: 'ty',
    shy: 'sy',
    j: 'zy',
    jy: 'zy',
    // exceptions to above rules
    shi: 'si',
    chi: 'ti',
    tsu: 'tu',
    ji: 'zi',
    fu: 'hu'
};
// xtu -> っ
const SMALL_LETTERS = Object.assign({
    tu: 'っ',
    wa: 'ゎ',
    ka: 'ヵ',
    ke: 'ヶ'
}, SMALL_VOWELS, SMALL_Y$1);
// don't follow any notable patterns
const SPECIAL_CASES = {
    yi: 'い',
    wu: 'う',
    ye: 'いぇ',
    wi: 'うぃ',
    we: 'うぇ',
    kwa: 'くぁ',
    whu: 'う',
    // because it's not thya for てゃ but tha
    // and tha is not てぁ, but てゃ
    tha: 'てゃ',
    thu: 'てゅ',
    tho: 'てょ',
    dha: 'でゃ',
    dhu: 'でゅ',
    dho: 'でょ'
};
const AIUEO_CONSTRUCTIONS = {
    wh: 'う',
    kw: 'く',
    qw: 'く',
    q: 'く',
    gw: 'ぐ',
    sw: 'す',
    ts: 'つ',
    th: 'て',
    tw: 'と',
    dh: 'で',
    dw: 'ど',
    fw: 'ふ',
    f: 'ふ'
};
/* eslint-enable */ function createRomajiToKanaMap$1() {
    const kanaTree = transform(BASIC_KUNREI);
    // pseudo partial application
    const subtreeOf = (string)=>getSubTreeOf(kanaTree, string);
    // add tya, sya, etc.
    Object.entries(CONSONANTS).forEach(([consonant, yKana])=>{
        Object.entries(SMALL_Y$1).forEach(([roma, kana])=>{
            // for example kyo -> き + ょ
            subtreeOf(consonant + roma)[''] = yKana + kana;
        });
    });
    Object.entries(SPECIAL_SYMBOLS$1).forEach(([symbol, jsymbol])=>{
        subtreeOf(symbol)[''] = jsymbol;
    });
    // things like うぃ, くぃ, etc.
    Object.entries(AIUEO_CONSTRUCTIONS).forEach(([consonant, aiueoKana])=>{
        Object.entries(SMALL_VOWELS).forEach(([vowel, kana])=>{
            const subtree = subtreeOf(consonant + vowel);
            subtree[''] = aiueoKana + kana;
        });
    });
    // different ways to write ん
    [
        'n',
        "n'",
        'xn'
    ].forEach((nChar)=>{
        subtreeOf(nChar)[''] = 'ん';
    });
    // c is equivalent to k, but not for chi, cha, etc. that's why we have to make a copy of k
    kanaTree.c = JSON.parse(JSON.stringify(kanaTree.k));
    Object.entries(ALIASES).forEach(([string, alternative])=>{
        const allExceptLast = string.slice(0, string.length - 1);
        const last = string.charAt(string.length - 1);
        const parentTree = subtreeOf(allExceptLast);
        // copy to avoid recursive containment
        parentTree[last] = JSON.parse(JSON.stringify(subtreeOf(alternative)));
    });
    function getAlternatives(string) {
        return [
            ...Object.entries(ALIASES),
            ...[
                [
                    'c',
                    'k'
                ]
            ]
        ].reduce((list, [alt, roma])=>string.startsWith(roma) ? list.concat(string.replace(roma, alt)) : list, []);
    }
    Object.entries(SMALL_LETTERS).forEach(([kunreiRoma, kana])=>{
        const last = (char)=>char.charAt(char.length - 1);
        const allExceptLast = (chars)=>chars.slice(0, chars.length - 1);
        const xRoma = `x${kunreiRoma}`;
        const xSubtree = subtreeOf(xRoma);
        xSubtree[''] = kana;
        // ltu -> xtu -> っ
        const parentTree = subtreeOf(`l${allExceptLast(kunreiRoma)}`);
        parentTree[last(kunreiRoma)] = xSubtree;
        // ltsu -> ltu -> っ
        getAlternatives(kunreiRoma).forEach((altRoma)=>{
            [
                'l',
                'x'
            ].forEach((prefix)=>{
                const altParentTree = subtreeOf(prefix + allExceptLast(altRoma));
                altParentTree[last(altRoma)] = subtreeOf(prefix + kunreiRoma);
            });
        });
    });
    Object.entries(SPECIAL_CASES).forEach(([string, kana])=>{
        subtreeOf(string)[''] = kana;
    });
    // add kka, tta, etc.
    function addTsu(tree) {
        return Object.entries(tree).reduce((tsuTree, [key, value])=>{
            if (!key) {
                // we have reached the bottom of this branch
                // eslint-disable-next-line no-param-reassign
                tsuTree[key] = `っ${value}`;
            } else {
                // more subtrees
                // eslint-disable-next-line no-param-reassign
                tsuTree[key] = addTsu(value);
            }
            return tsuTree;
        }, {});
    }
    // have to explicitly name c here, because we made it a copy of k, not a reference
    [
        ...Object.keys(CONSONANTS),
        'c',
        'y',
        'w',
        'j'
    ].forEach((consonant)=>{
        const subtree = kanaTree[consonant];
        subtree[consonant] = addTsu(subtree);
    });
    // nn should not be っん
    delete kanaTree.n.n;
    // solidify the results, so that there there is referential transparency within the tree
    return Object.freeze(JSON.parse(JSON.stringify(kanaTree)));
}
let romajiToKanaMap = null;
function getRomajiToKanaTree() {
    if (romajiToKanaMap == null) {
        romajiToKanaMap = createRomajiToKanaMap$1();
    }
    return romajiToKanaMap;
}
const USE_OBSOLETE_KANA_MAP = createCustomMapping({
    wi: 'ゐ',
    we: 'ゑ'
});
function IME_MODE_MAP(map) {
    // in IME mode, we do not want to convert single ns
    const mapCopy = JSON.parse(JSON.stringify(map));
    mapCopy.n.n = {
        '': 'ん'
    };
    mapCopy.n[' '] = {
        '': 'ん'
    };
    return mapCopy;
}
/**
 * Tests if char is in English unicode uppercase range
 * @param  {String} char
 * @return {Boolean}
 */ function isCharUpperCase(char = '') {
    if (isEmpty(char)) return false;
    return isCharInRange(char, LATIN_UPPERCASE_START, LATIN_UPPERCASE_END);
}
/**
 * Returns true if char is 'ー'
 * @param  {String} char to test
 * @return {Boolean}
 */ function isCharLongDash(char = '') {
    if (isEmpty(char)) return false;
    return char.charCodeAt(0) === PROLONGED_SOUND_MARK;
}
/**
 * Tests if char is '・'
 * @param  {String} char
 * @return {Boolean} true if '・'
 */ function isCharSlashDot(char = '') {
    if (isEmpty(char)) return false;
    return char.charCodeAt(0) === KANA_SLASH_DOT;
}
/**
 * Tests a character. Returns true if the character is [Hiragana](https://en.wikipedia.org/wiki/Hiragana).
 * @param  {String} char character string to test
 * @return {Boolean}
 */ function isCharHiragana(char = '') {
    if (isEmpty(char)) return false;
    if (isCharLongDash(char)) return true;
    return isCharInRange(char, HIRAGANA_START, HIRAGANA_END);
}
/**
 * Convert [Hiragana](https://en.wikipedia.org/wiki/Hiragana) to [Katakana](https://en.wikipedia.org/wiki/Katakana)
 * Passes through any non-hiragana chars
 * @private
 * @param  {String} [input=''] text input
 * @return {String} converted text
 * @example
 * hiraganaToKatakana('ひらがな')
 * // => "ヒラガナ"
 * hiraganaToKatakana('ひらがな is a type of kana')
 * // => "ヒラガナ is a type of kana"
 */ function hiraganaToKatakana(input = '') {
    const kata = [];
    input.split('').forEach((char)=>{
        // Short circuit to avoid incorrect codeshift for 'ー' and '・'
        if (isCharLongDash(char) || isCharSlashDot(char)) {
            kata.push(char);
        } else if (isCharHiragana(char)) {
            // Shift charcode.
            const code = char.charCodeAt(0) + (KATAKANA_START - HIRAGANA_START);
            const kataChar = String.fromCharCode(code);
            kata.push(kataChar);
        } else {
            // Pass non-hiragana chars through
            kata.push(char);
        }
    });
    return kata.join('');
}
// memoize and deeply compare args so we only recreate when necessary
const createRomajiToKanaMap = memoizeOne((IMEMode, useObsoleteKana, customKanaMapping)=>{
    let map = getRomajiToKanaTree();
    map = IMEMode ? IME_MODE_MAP(map) : map;
    map = useObsoleteKana ? USE_OBSOLETE_KANA_MAP(map) : map;
    if (customKanaMapping) {
        map = mergeCustomMapping(map, customKanaMapping);
    }
    return map;
}, dequal);
/**
 * Convert [Romaji](https://en.wikipedia.org/wiki/Romaji) to [Kana](https://en.wikipedia.org/wiki/Kana), lowercase text will result in [Hiragana](https://en.wikipedia.org/wiki/Hiragana) and uppercase text will result in [Katakana](https://en.wikipedia.org/wiki/Katakana).
 * @param  {String} [input=''] text
 * @param  {DefaultOptions} [options=defaultOptions]
 * @param  {Object.<string, string>} [map] custom mapping
 * @return {String} converted text
 * @example
 * toKana('onaji BUTTSUUJI')
 * // => 'おなじ ブッツウジ'
 * toKana('ONAJI buttsuuji')
 * // => 'オナジ ぶっつうじ'
 * toKana('座禅‘zazen’スタイル')
 * // => '座禅「ざぜん」スタイル'
 * toKana('batsuge-mu')
 * // => 'ばつげーむ'
 * toKana('!?.:/,~-‘’“”[](){}') // Punctuation conversion
 * // => '！？。：・、〜ー「」『』［］（）｛｝'
 * toKana('we', { useObsoleteKana: true })
 * // => 'ゑ'
 * toKana('wanakana', { customKanaMapping: { na: 'に', ka: 'bana' } });
 * // => 'わにbanaに'
 */ function toKana(input = '', options = {}, map) {
    let config;
    if (!map) {
        config = mergeWithDefaultOptions(options);
        map = createRomajiToKanaMap(config.IMEMode, config.useObsoleteKana, config.customKanaMapping);
    } else {
        config = options;
    }
    // throw away the substring index information and just concatenate all the kana
    return splitIntoConvertedKana(input, config, map).map((kanaToken)=>{
        const [start, end, kana] = kanaToken;
        if (kana === null) {
            // haven't converted the end of the string, since we are in IME mode
            return input.slice(start);
        }
        const enforceHiragana = config.IMEMode === TO_KANA_METHODS.HIRAGANA;
        const enforceKatakana = config.IMEMode === TO_KANA_METHODS.KATAKANA || [
            ...input.slice(start, end)
        ].every(isCharUpperCase);
        return enforceHiragana || !enforceKatakana ? kana : hiraganaToKatakana(kana);
    }).join('');
}
/**
 *
 * @private
 * @param {String} [input=''] input text
 * @param {DefaultOptions} [options=defaultOptions] toKana options
 * @param {Object} [map] custom mapping
 * @returns {Array[]} [[start, end, token]]
 * @example
 * splitIntoConvertedKana('buttsuuji')
 * // => [[0, 2, 'ぶ'], [2, 6, 'っつ'], [6, 7, 'う'], [7, 9, 'じ']]
 */ function splitIntoConvertedKana(input = '', options = {}, map) {
    const { IMEMode, useObsoleteKana, customKanaMapping } = options;
    if (!map) {
        map = createRomajiToKanaMap(IMEMode, useObsoleteKana, customKanaMapping);
    }
    return applyMapping(input.toLowerCase(), map, !IMEMode);
}
let LISTENERS = [];
/**
 * Automagically replaces input values with converted text to kana
 * @param  {defaultOptions} [options] user config overrides, default conversion is toKana()
 * @return {Function} event handler with bound options
 * @private
 */ function makeOnInput(options) {
    let prevInput;
    // Enforce IMEMode if not already specified
    const mergedConfig = Object.assign({}, mergeWithDefaultOptions(options), {
        IMEMode: options.IMEMode || true
    });
    const preConfiguredMap = createRomajiToKanaMap(mergedConfig.IMEMode, mergedConfig.useObsoleteKana, mergedConfig.customKanaMapping);
    const triggers = [
        ...Object.keys(preConfiguredMap),
        ...Object.keys(preConfiguredMap).map((char)=>char.toUpperCase())
    ];
    return function onInput({ target }) {
        if (target.value !== prevInput && target.dataset.ignoreComposition !== 'true') {
            convertInput(target, mergedConfig, preConfiguredMap, triggers);
        }
    };
}
function convertInput(target, options, map, triggers, prevInput) {
    const [head, textToConvert, tail] = splitInput(target.value, target.selectionEnd, triggers);
    const convertedText = toKana(textToConvert, options, map);
    const changed = textToConvert !== convertedText;
    if (changed) {
        const newCursor = head.length + convertedText.length;
        const newValue = head + convertedText + tail;
        // eslint-disable-next-line no-param-reassign
        target.value = newValue;
        if (tail.length) {
            // push later on event loop (otherwise mid-text insertion can be 1 char too far to the right)
            setTimeout(()=>target.setSelectionRange(newCursor, newCursor), 1);
        } else {
            target.setSelectionRange(newCursor, newCursor);
        }
    } else {
        // eslint-disable-next-line no-param-reassign
        target.value;
    }
}
function onComposition({ type, target, data }) {
    // navigator.platform is not 100% reliable for singling out all OS,
    // but for determining desktop "Mac OS" it is effective enough.
    const isMacOS = /Mac/.test(window.navigator && window.navigator.platform);
    // We don't want to ignore on Android:
    // https://github.com/WaniKani/WanaKana/issues/82
    // But MacOS IME auto-closes if we don't ignore:
    // https://github.com/WaniKani/WanaKana/issues/71
    // Other platform Japanese IMEs pass through happily
    if (isMacOS) {
        if (type === 'compositionupdate' && isJapanese(data)) {
            // eslint-disable-next-line no-param-reassign
            target.dataset.ignoreComposition = 'true';
        }
        if (type === 'compositionend') {
            // eslint-disable-next-line no-param-reassign
            target.dataset.ignoreComposition = 'false';
        }
    }
}
function trackListeners(id, inputHandler, compositionHandler) {
    LISTENERS = LISTENERS.concat({
        id,
        inputHandler,
        compositionHandler
    });
}
function untrackListeners({ id: targetId }) {
    LISTENERS = LISTENERS.filter(({ id })=>id !== targetId);
}
function findListeners(el) {
    return el && LISTENERS.find(({ id })=>id === el.getAttribute('data-wanakana-id'));
}
// Handle non-terminal inserted input conversion:
// | -> わ| -> わび| -> わ|び -> わs|び -> わsh|び -> わshi|び -> わし|び
// or multiple ambiguous positioning (to select which "s" to work from)
// こsこs|こsこ -> こsこso|こsこ -> こsこそ|こsこ
function splitInput(text = '', cursor = 0, triggers = []) {
    let head;
    let toConvert;
    let tail;
    if (cursor === 0 && triggers.includes(text[0])) {
        [head, toConvert, tail] = workFromStart(text, triggers);
    } else if (cursor > 0) {
        [head, toConvert, tail] = workBackwards(text, cursor);
    } else {
        [head, toConvert] = takeWhileAndSlice(text, (char)=>!triggers.includes(char));
        [toConvert, tail] = takeWhileAndSlice(toConvert, (char)=>!isJapanese(char));
    }
    return [
        head,
        toConvert,
        tail
    ];
}
function workFromStart(text, catalystChars) {
    return [
        '',
        ...takeWhileAndSlice(text, (char)=>catalystChars.includes(char) || !isJapanese(char, /[0-9]/))
    ];
}
function workBackwards(text = '', startIndex = 0) {
    const [toConvert, head] = takeWhileAndSlice([
        ...text.slice(0, startIndex)
    ].reverse(), (char)=>!isJapanese(char));
    return [
        head.reverse().join(''),
        toConvert.split('').reverse().join(''),
        text.slice(startIndex)
    ];
}
function takeWhileAndSlice(source = {}, predicate = (x)=>!!x) {
    const result = [];
    const { length } = source;
    let i = 0;
    while(i < length && predicate(source[i], i)){
        result.push(source[i]);
        i += 1;
    }
    return [
        result.join(''),
        source.slice(i)
    ];
}
/* eslint-disable no-console */ const onInput = ({ target: { value, selectionStart, selectionEnd } })=>console.log('input:', {
        value,
        selectionStart,
        selectionEnd
    });
const onCompositionStart = ()=>console.log('compositionstart');
const onCompositionUpdate = ({ target: { value, selectionStart, selectionEnd }, data })=>console.log('compositionupdate', {
        data,
        value,
        selectionStart,
        selectionEnd
    });
const onCompositionEnd = ()=>console.log('compositionend');
const events = {
    input: onInput,
    compositionstart: onCompositionStart,
    compositionupdate: onCompositionUpdate,
    compositionend: onCompositionEnd
};
const addDebugListeners = (input)=>{
    Object.entries(events).forEach(([event, handler])=>input.addEventListener(event, handler));
};
const removeDebugListeners = (input)=>{
    Object.entries(events).forEach(([event, handler])=>input.removeEventListener(event, handler));
};
const ELEMENTS = [
    'TEXTAREA',
    'INPUT'
];
let idCounter = 0;
const newId = ()=>{
    idCounter += 1;
    return `${Date.now()}${idCounter}`;
};
/**
 * Binds eventListener for 'input' events to an input field to automagically replace values with kana
 * Can pass `{ IMEMode: 'toHiragana' || 'toKatakana' }` to enforce kana conversion type
 * @param  {HTMLInputElement | HTMLTextAreaElement} element textarea, input[type="text"] etc
 * @param  {DefaultOptions} [options=defaultOptions] defaults to { IMEMode: true } using `toKana`
 * @example
 * bind(document.querySelector('#myInput'));
 */ function bind(element = {}, options = {}, debug = false) {
    if (!ELEMENTS.includes(element.nodeName)) {
        throw new Error(`Element provided to Wanakana bind() was not a valid input or textarea element.\n Received: (${JSON.stringify(element)})`);
    }
    if (element.hasAttribute('data-wanakana-id')) {
        return;
    }
    const onInput = makeOnInput(options);
    const id = newId();
    const attributes = [
        {
            name: 'data-wanakana-id',
            value: id
        },
        {
            name: 'lang',
            value: 'ja'
        },
        {
            name: 'autoCapitalize',
            value: 'none'
        },
        {
            name: 'autoCorrect',
            value: 'off'
        },
        {
            name: 'autoComplete',
            value: 'off'
        },
        {
            name: 'spellCheck',
            value: 'false'
        }
    ];
    const previousAttributes = {};
    attributes.forEach((attribute)=>{
        previousAttributes[attribute.name] = element.getAttribute(attribute.name);
        element.setAttribute(attribute.name, attribute.value);
    });
    element.dataset.previousAttributes = JSON.stringify(previousAttributes);
    element.addEventListener('input', onInput);
    element.addEventListener('compositionupdate', onComposition);
    element.addEventListener('compositionend', onComposition);
    trackListeners(id, onInput, onComposition);
    if (debug === true) {
        addDebugListeners(element);
    }
}
/**
 * Unbinds eventListener from input field
 * @param  {HTMLInputElement | HTMLTextAreaElement} element textarea, input
 */ function unbind(element, debug = false) {
    const listeners = findListeners(element);
    if (listeners == null) {
        throw new Error(`Element provided to Wanakana unbind() had no listener registered.\n Received: ${JSON.stringify(element)}`);
    }
    const { inputHandler, compositionHandler } = listeners;
    const attributes = JSON.parse(element.dataset.previousAttributes);
    Object.keys(attributes).forEach((key)=>{
        if (attributes[key]) {
            element.setAttribute(key, attributes[key]);
        } else {
            element.removeAttribute(key);
        }
    });
    element.removeAttribute('data-previous-attributes');
    element.removeAttribute('data-ignore-composition');
    element.removeEventListener('input', inputHandler);
    element.removeEventListener('compositionstart', compositionHandler);
    element.removeEventListener('compositionupdate', compositionHandler);
    element.removeEventListener('compositionend', compositionHandler);
    untrackListeners(listeners);
    if (debug === true) {
        removeDebugListeners(element);
    }
}
/**
 * Tests a character. Returns true if the character is [Romaji](https://en.wikipedia.org/wiki/Romaji) (allowing [Hepburn romanisation](https://en.wikipedia.org/wiki/Hepburn_romanization))
 * @param  {String} char character string to test
 * @return {Boolean}
 */ function isCharRomaji(char = '') {
    if (isEmpty(char)) return false;
    return ROMAJI_RANGES.some(([start, end])=>isCharInRange(char, start, end));
}
/**
 * Test if `input` is [Romaji](https://en.wikipedia.org/wiki/Romaji) (allowing [Hepburn romanisation](https://en.wikipedia.org/wiki/Hepburn_romanization))
 * @param  {String} [input=''] text
 * @param  {RegExp} [allowed] additional test allowed to pass for each char
 * @return {Boolean} true if [Romaji](https://en.wikipedia.org/wiki/Romaji)
 * @example
 * isRomaji('Tōkyō and Ōsaka')
 * // => true
 * isRomaji('12a*b&c-d')
 * // => true
 * isRomaji('あアA')
 * // => false
 * isRomaji('お願い')
 * // => false
 * isRomaji('a！b&cーd') // Zenkaku punctuation fails
 * // => false
 * isRomaji('a！b&cーd', /[！ー]/)
 * // => true
 */ function isRomaji(input = '', allowed) {
    const augmented = typeOf(allowed) === 'regexp';
    return isEmpty(input) ? false : [
        ...input
    ].every((char)=>{
        const isRoma = isCharRomaji(char);
        return !augmented ? isRoma : isRoma || allowed.test(char);
    });
}
/**
 * Tests a character. Returns true if the character is [Katakana](https://en.wikipedia.org/wiki/Katakana).
 * @param  {String} char character string to test
 * @return {Boolean}
 */ function isCharKatakana(char = '') {
    return isCharInRange(char, KATAKANA_START, KATAKANA_END);
}
/**
 * Tests a character. Returns true if the character is [Hiragana](https://en.wikipedia.org/wiki/Hiragana) or [Katakana](https://en.wikipedia.org/wiki/Katakana).
 * @param  {String} char character string to test
 * @return {Boolean}
 */ function isCharKana(char = '') {
    if (isEmpty(char)) return false;
    return isCharHiragana(char) || isCharKatakana(char);
}
/**
 * Test if `input` is [Kana](https://en.wikipedia.org/wiki/Kana) ([Katakana](https://en.wikipedia.org/wiki/Katakana) and/or [Hiragana](https://en.wikipedia.org/wiki/Hiragana))
 * @param  {String} [input=''] text
 * @return {Boolean} true if all [Kana](https://en.wikipedia.org/wiki/Kana)
 * @example
 * isKana('あ')
 * // => true
 * isKana('ア')
 * // => true
 * isKana('あーア')
 * // => true
 * isKana('A')
 * // => false
 * isKana('あAア')
 * // => false
 */ function isKana(input = '') {
    if (isEmpty(input)) return false;
    return [
        ...input
    ].every(isCharKana);
}
/**
 * Test if `input` is [Hiragana](https://en.wikipedia.org/wiki/Hiragana)
 * @param  {String} [input=''] text
 * @return {Boolean} true if all [Hiragana](https://en.wikipedia.org/wiki/Hiragana)
 * @example
 * isHiragana('げーむ')
 * // => true
 * isHiragana('A')
 * // => false
 * isHiragana('あア')
 * // => false
 */ function isHiragana(input = '') {
    if (isEmpty(input)) return false;
    return [
        ...input
    ].every(isCharHiragana);
}
/**
 * Test if `input` is [Katakana](https://en.wikipedia.org/wiki/Katakana)
 * @param  {String} [input=''] text
 * @return {Boolean} true if all [Katakana](https://en.wikipedia.org/wiki/Katakana)
 * @example
 * isKatakana('ゲーム')
 * // => true
 * isKatakana('あ')
 * // => false
 * isKatakana('A')
 * // => false
 * isKatakana('あア')
 * // => false
 */ function isKatakana(input = '') {
    if (isEmpty(input)) return false;
    return [
        ...input
    ].every(isCharKatakana);
}
/**
 * Returns true if char is '々'
 * @param  {String} char to test
 * @return {Boolean}
 */ function isCharIterationMark(char = '') {
    if (isEmpty(char)) return false;
    return char.charCodeAt(0) === KANJI_ITERATION_MARK;
}
/**
 * Tests a character. Returns true if the character is a CJK ideograph (kanji).
 * @param  {String} char character string to test
 * @return {Boolean}
 */ function isCharKanji(char = '') {
    return isCharInRange(char, KANJI_START, KANJI_END) || isCharIterationMark(char);
}
/**
 * Tests if `input` is [Kanji](https://en.wikipedia.org/wiki/Kanji) ([Japanese CJK ideographs](https://en.wikipedia.org/wiki/CJK_Unified_Ideographs))
 * @param  {String} [input=''] text
 * @return {Boolean} true if all [Kanji](https://en.wikipedia.org/wiki/Kanji)
 * @example
 * isKanji('刀')
 * // => true
 * isKanji('切腹')
 * // => true
 * isKanji('勢い')
 * // => false
 * isKanji('あAア')
 * // => false
 * isKanji('🐸')
 * // => false
 */ function isKanji(input = '') {
    if (isEmpty(input)) return false;
    return [
        ...input
    ].every(isCharKanji);
}
/**
 * Test if `input` contains a mix of [Romaji](https://en.wikipedia.org/wiki/Romaji) *and* [Kana](https://en.wikipedia.org/wiki/Kana), defaults to pass through [Kanji](https://en.wikipedia.org/wiki/Kanji)
 * @param  {String} input text
 * @param  {{ passKanji: Boolean}} [options={ passKanji: true }] optional config to pass through kanji
 * @return {Boolean} true if mixed
 * @example
 * isMixed('Abあア'))
 * // => true
 * isMixed('お腹A')) // ignores kanji by default
 * // => true
 * isMixed('お腹A', { passKanji: false }))
 * // => false
 * isMixed('ab'))
 * // => false
 * isMixed('あア'))
 * // => false
 */ function isMixed(input = '', options = {
    passKanji: true
}) {
    const chars = [
        ...input
    ];
    let hasKanji = false;
    if (!options.passKanji) {
        hasKanji = chars.some(isKanji);
    }
    return (chars.some(isHiragana) || chars.some(isKatakana)) && chars.some(isRomaji) && !hasKanji;
}
const isCharInitialLongDash = (char, index)=>isCharLongDash(char) && index < 1;
const isCharInnerLongDash = (char, index)=>isCharLongDash(char) && index > 0;
const isKanaAsSymbol = (char)=>[
        'ヶ',
        'ヵ'
    ].includes(char);
const LONG_VOWELS = {
    a: 'あ',
    i: 'い',
    u: 'う',
    e: 'え',
    o: 'う'
};
// inject toRomaji to avoid circular dependency between toRomaji <-> katakanaToHiragana
function katakanaToHiragana(input = '', toRomaji, { isDestinationRomaji, convertLongVowelMark } = {}) {
    let previousKana = '';
    return input.split('').reduce((hira, char, index)=>{
        // Short circuit to avoid incorrect codeshift for 'ー' and '・'
        if (isCharSlashDot(char) || isCharInitialLongDash(char, index) || isKanaAsSymbol(char)) {
            return hira.concat(char);
        }
        // Transform long vowels: 'オー' to 'おう'
        if (convertLongVowelMark && previousKana && isCharInnerLongDash(char, index)) {
            // Transform previousKana back to romaji, and slice off the vowel
            const romaji = toRomaji(previousKana).slice(-1);
            // However, ensure 'オー' => 'おお' => 'oo' if this is a transform on the way to romaji
            if (isCharKatakana(input[index - 1]) && romaji === 'o' && isDestinationRomaji) {
                return hira.concat('お');
            }
            return hira.concat(LONG_VOWELS[romaji]);
        // Transform all other chars
        }
        if (!isCharLongDash(char) && isCharKatakana(char)) {
            const code = char.charCodeAt(0) + (HIRAGANA_START - KATAKANA_START);
            const hiraChar = String.fromCharCode(code);
            previousKana = hiraChar;
            return hira.concat(hiraChar);
        }
        // Pass non katakana chars through
        previousKana = '';
        return hira.concat(char);
    }, []).join('');
}
let kanaToHepburnMap = null;
/* eslint-disable */ // prettier-ignore
const BASIC_ROMAJI = {
    あ: 'a',
    い: 'i',
    う: 'u',
    え: 'e',
    お: 'o',
    か: 'ka',
    き: 'ki',
    く: 'ku',
    け: 'ke',
    こ: 'ko',
    さ: 'sa',
    し: 'shi',
    す: 'su',
    せ: 'se',
    そ: 'so',
    た: 'ta',
    ち: 'chi',
    つ: 'tsu',
    て: 'te',
    と: 'to',
    な: 'na',
    に: 'ni',
    ぬ: 'nu',
    ね: 'ne',
    の: 'no',
    は: 'ha',
    ひ: 'hi',
    ふ: 'fu',
    へ: 'he',
    ほ: 'ho',
    ま: 'ma',
    み: 'mi',
    む: 'mu',
    め: 'me',
    も: 'mo',
    ら: 'ra',
    り: 'ri',
    る: 'ru',
    れ: 're',
    ろ: 'ro',
    や: 'ya',
    ゆ: 'yu',
    よ: 'yo',
    わ: 'wa',
    ゐ: 'wi',
    ゑ: 'we',
    を: 'wo',
    ん: 'n',
    が: 'ga',
    ぎ: 'gi',
    ぐ: 'gu',
    げ: 'ge',
    ご: 'go',
    ざ: 'za',
    じ: 'ji',
    ず: 'zu',
    ぜ: 'ze',
    ぞ: 'zo',
    だ: 'da',
    ぢ: 'ji',
    づ: 'zu',
    で: 'de',
    ど: 'do',
    ば: 'ba',
    び: 'bi',
    ぶ: 'bu',
    べ: 'be',
    ぼ: 'bo',
    ぱ: 'pa',
    ぴ: 'pi',
    ぷ: 'pu',
    ぺ: 'pe',
    ぽ: 'po',
    ゔぁ: 'va',
    ゔぃ: 'vi',
    ゔ: 'vu',
    ゔぇ: 've',
    ゔぉ: 'vo'
};
/* eslint-enable  */ const SPECIAL_SYMBOLS = {
    '。': '.',
    '、': ',',
    '：': ':',
    '・': '/',
    '！': '!',
    '？': '?',
    '〜': '~',
    'ー': '-',
    '「': '‘',
    '」': '’',
    '『': '“',
    '』': '”',
    '［': '[',
    '］': ']',
    '（': '(',
    '）': ')',
    '｛': '{',
    '｝': '}',
    '　': ' '
};
// んい -> n'i
const AMBIGUOUS_VOWELS = [
    'あ',
    'い',
    'う',
    'え',
    'お',
    'や',
    'ゆ',
    'よ'
];
const SMALL_Y = {
    ゃ: 'ya',
    ゅ: 'yu',
    ょ: 'yo'
};
const SMALL_Y_EXTRA = {
    ぃ: 'yi',
    ぇ: 'ye'
};
const SMALL_AIUEO = {
    ぁ: 'a',
    ぃ: 'i',
    ぅ: 'u',
    ぇ: 'e',
    ぉ: 'o'
};
const YOON_KANA = [
    'き',
    'に',
    'ひ',
    'み',
    'り',
    'ぎ',
    'び',
    'ぴ',
    'ゔ',
    'く',
    'ふ'
];
const YOON_EXCEPTIONS = {
    し: 'sh',
    ち: 'ch',
    じ: 'j',
    ぢ: 'j'
};
const SMALL_KANA = {
    っ: '',
    ゃ: 'ya',
    ゅ: 'yu',
    ょ: 'yo',
    ぁ: 'a',
    ぃ: 'i',
    ぅ: 'u',
    ぇ: 'e',
    ぉ: 'o'
};
// going with the intuitive (yet incorrect) solution where っや -> yya and っぃ -> ii
// in other words, just assume the sokuon could have been applied to anything
const SOKUON_WHITELIST = {
    b: 'b',
    c: 't',
    d: 'd',
    f: 'f',
    g: 'g',
    h: 'h',
    j: 'j',
    k: 'k',
    m: 'm',
    p: 'p',
    q: 'q',
    r: 'r',
    s: 's',
    t: 't',
    v: 'v',
    w: 'w',
    x: 'x',
    z: 'z'
};
function getKanaToHepburnTree() {
    if (kanaToHepburnMap == null) {
        kanaToHepburnMap = createKanaToHepburnMap();
    }
    return kanaToHepburnMap;
}
function getKanaToRomajiTree(romanization) {
    switch(romanization){
        case ROMANIZATIONS.HEPBURN:
            return getKanaToHepburnTree();
        default:
            return {};
    }
}
function createKanaToHepburnMap() {
    const romajiTree = transform(BASIC_ROMAJI);
    const subtreeOf = (string)=>getSubTreeOf(romajiTree, string);
    const setTrans = (string, transliteration)=>{
        subtreeOf(string)[''] = transliteration;
    };
    Object.entries(SPECIAL_SYMBOLS).forEach(([jsymbol, symbol])=>{
        subtreeOf(jsymbol)[''] = symbol;
    });
    [
        ...Object.entries(SMALL_Y),
        ...Object.entries(SMALL_AIUEO)
    ].forEach(([roma, kana])=>{
        setTrans(roma, kana);
    });
    // きゃ -> kya
    YOON_KANA.forEach((kana)=>{
        const firstRomajiChar = subtreeOf(kana)[''][0];
        Object.entries(SMALL_Y).forEach(([yKana, yRoma])=>{
            setTrans(kana + yKana, firstRomajiChar + yRoma);
        });
        // きぃ -> kyi
        Object.entries(SMALL_Y_EXTRA).forEach(([yKana, yRoma])=>{
            setTrans(kana + yKana, firstRomajiChar + yRoma);
        });
    });
    Object.entries(YOON_EXCEPTIONS).forEach(([kana, roma])=>{
        // じゃ -> ja
        Object.entries(SMALL_Y).forEach(([yKana, yRoma])=>{
            setTrans(kana + yKana, roma + yRoma[1]);
        });
        // じぃ -> jyi, じぇ -> je
        setTrans(`${kana}ぃ`, `${roma}yi`);
        setTrans(`${kana}ぇ`, `${roma}e`);
    });
    romajiTree['っ'] = resolveTsu(romajiTree);
    Object.entries(SMALL_KANA).forEach(([kana, roma])=>{
        setTrans(kana, roma);
    });
    AMBIGUOUS_VOWELS.forEach((kana)=>{
        setTrans(`ん${kana}`, `n'${subtreeOf(kana)['']}`);
    });
    // NOTE: could be re-enabled with an option?
    // // んば -> mbo
    // const LABIAL = [
    //   'ば', 'び', 'ぶ', 'べ', 'ぼ',
    //   'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
    //   'ま', 'み', 'む', 'め', 'も',
    // ];
    // LABIAL.forEach((kana) => {
    //   setTrans(`ん${kana}`, `m${subtreeOf(kana)['']}`);
    // });
    return Object.freeze(JSON.parse(JSON.stringify(romajiTree)));
}
function resolveTsu(tree) {
    return Object.entries(tree).reduce((tsuTree, [key, value])=>{
        if (!key) {
            // we have reached the bottom of this branch
            const consonant = value.charAt(0);
            // eslint-disable-next-line no-param-reassign
            tsuTree[key] = Object.keys(SOKUON_WHITELIST).includes(consonant) ? SOKUON_WHITELIST[consonant] + value : value;
        } else {
            // more subtrees
            // eslint-disable-next-line no-param-reassign
            tsuTree[key] = resolveTsu(value);
        }
        return tsuTree;
    }, {});
}
// memoize and deeply compare args so we only recreate when necessary
const createKanaToRomajiMap = memoizeOne((romanization, customRomajiMapping)=>{
    let map = getKanaToRomajiTree(romanization);
    if (customRomajiMapping) {
        map = mergeCustomMapping(map, customRomajiMapping);
    }
    return map;
}, dequal);
/**
 * Convert kana to romaji
 * @param  {String} kana text input
 * @param  {DefaultOptions} [options=defaultOptions]
 * @param  {Object.<string, string>} [map] custom mapping
 * @return {String} converted text
 * @example
 * toRomaji('ひらがな　カタカナ')
 * // => 'hiragana katakana'
 * toRomaji('げーむ　ゲーム')
 * // => 'ge-mu geemu'
 * toRomaji('ひらがな　カタカナ', { upcaseKatakana: true })
 * // => 'hiragana KATAKANA'
 * toRomaji('つじぎり', { customRomajiMapping: { じ: 'zi', つ: 'tu', り: 'li' } });
 * // => 'tuzigili'
 */ function toRomaji(input = '', options = {}, map) {
    const config = mergeWithDefaultOptions(options);
    if (!map) {
        map = createKanaToRomajiMap(config.romanization, config.customRomajiMapping);
    }
    // just throw away the substring index information and simply concatenate all the kana
    return splitIntoRomaji(input, config, map).map((romajiToken)=>{
        const [start, end, romaji] = romajiToken;
        const makeUpperCase = config.upcaseKatakana && isKatakana(input.slice(start, end));
        return makeUpperCase ? romaji.toUpperCase() : romaji;
    }).join('');
}
function splitIntoRomaji(input, options, map) {
    if (!map) {
        map = createKanaToRomajiMap(options.romanization, options.customRomajiMapping);
    }
    const config = Object.assign({}, {
        isDestinationRomaji: true
    }, options);
    return applyMapping(katakanaToHiragana(input, toRomaji, config), map, !options.IMEMode);
}
/**
 * Tests a character. Returns true if the character is considered English punctuation.
 * @param  {String} char character string to test
 * @return {Boolean}
 */ function isCharEnglishPunctuation(char = '') {
    if (isEmpty(char)) return false;
    return EN_PUNCTUATION_RANGES.some(([start, end])=>isCharInRange(char, start, end));
}
/**
 * Convert input to [Hiragana](https://en.wikipedia.org/wiki/Hiragana)
 * @param  {String} [input=''] text
 * @param  {DefaultOptions} [options=defaultOptions]
 * @return {String} converted text
 * @example
 * toHiragana('toukyou, オオサカ')
 * // => 'とうきょう、　おおさか'
 * toHiragana('only カナ', { passRomaji: true })
 * // => 'only かな'
 * toHiragana('wi')
 * // => 'うぃ'
 * toHiragana('wi', { useObsoleteKana: true })
 * // => 'ゐ'
 */ function toHiragana(input = '', options = {}) {
    const config = mergeWithDefaultOptions(options);
    if (config.passRomaji) {
        return katakanaToHiragana(input, toRomaji, config);
    }
    if (isMixed(input, {
        passKanji: true
    })) {
        const convertedKatakana = katakanaToHiragana(input, toRomaji, config);
        return toKana(convertedKatakana.toLowerCase(), config);
    }
    if (isRomaji(input) || isCharEnglishPunctuation(input)) {
        return toKana(input.toLowerCase(), config);
    }
    return katakanaToHiragana(input, toRomaji, config);
}
/**
 * Convert input to [Katakana](https://en.wikipedia.org/wiki/Katakana)
 * @param  {String} [input=''] text
 * @param  {DefaultOptions} [options=defaultOptions]
 * @return {String} converted text
 * @example
 * toKatakana('toukyou, おおさか')
 * // => 'トウキョウ、　オオサカ'
 * toKatakana('only かな', { passRomaji: true })
 * // => 'only カナ'
 * toKatakana('wi')
 * // => 'ウィ'
 * toKatakana('wi', { useObsoleteKana: true })
 * // => 'ヰ'
 */ function toKatakana(input = '', options = {}) {
    const mergedOptions = mergeWithDefaultOptions(options);
    if (mergedOptions.passRomaji) {
        return hiraganaToKatakana(input);
    }
    if (isMixed(input) || isRomaji(input) || isCharEnglishPunctuation(input)) {
        const hiragana = toKana(input.toLowerCase(), mergedOptions);
        return hiraganaToKatakana(hiragana);
    }
    return hiraganaToKatakana(input);
}
/**
 * Tests a character. Returns true if the character is considered Japanese punctuation.
 * @param  {String} char character string to test
 * @return {Boolean}
 */ function isCharJapanesePunctuation(char = '') {
    if (isEmpty(char) || isCharIterationMark(char)) return false;
    return JA_PUNCTUATION_RANGES.some(([start, end])=>isCharInRange(char, start, end));
}
const isCharEnSpace = (x)=>x === ' ';
const isCharJaSpace = (x)=>x === '　';
const isCharJaNum = (x)=>/[０-９]/.test(x);
const isCharEnNum = (x)=>/[0-9]/.test(x);
const TOKEN_TYPES = {
    EN: 'en',
    JA: 'ja',
    EN_NUM: 'englishNumeral',
    JA_NUM: 'japaneseNumeral',
    EN_PUNC: 'englishPunctuation',
    JA_PUNC: 'japanesePunctuation',
    KANJI: 'kanji',
    HIRAGANA: 'hiragana',
    KATAKANA: 'katakana',
    SPACE: 'space',
    OTHER: 'other'
};
// prettier-ignore
function getType(input, compact = false) {
    const { EN, JA, EN_NUM, JA_NUM, EN_PUNC, JA_PUNC, KANJI, HIRAGANA, KATAKANA, SPACE, OTHER } = TOKEN_TYPES;
    if (compact) {
        switch(true){
            case isCharJaNum(input):
                return OTHER;
            case isCharEnNum(input):
                return OTHER;
            case isCharEnSpace(input):
                return EN;
            case isCharEnglishPunctuation(input):
                return OTHER;
            case isCharJaSpace(input):
                return JA;
            case isCharJapanesePunctuation(input):
                return OTHER;
            case isCharJapanese(input):
                return JA;
            case isCharRomaji(input):
                return EN;
            default:
                return OTHER;
        }
    } else {
        switch(true){
            case isCharJaSpace(input):
                return SPACE;
            case isCharEnSpace(input):
                return SPACE;
            case isCharJaNum(input):
                return JA_NUM;
            case isCharEnNum(input):
                return EN_NUM;
            case isCharEnglishPunctuation(input):
                return EN_PUNC;
            case isCharJapanesePunctuation(input):
                return JA_PUNC;
            case isCharKanji(input):
                return KANJI;
            case isCharHiragana(input):
                return HIRAGANA;
            case isCharKatakana(input):
                return KATAKANA;
            case isCharJapanese(input):
                return JA;
            case isCharRomaji(input):
                return EN;
            default:
                return OTHER;
        }
    }
}
/**
 * Splits input into array of strings separated by opinionated token types
 * `'en', 'ja', 'englishNumeral', 'japaneseNumeral','englishPunctuation', 'japanesePunctuation','kanji', 'hiragana', 'katakana', 'space', 'other'`.
 * If `{ compact: true }` then many same-language tokens are combined (spaces + text, kanji + kana, numeral + punctuation).
 * If `{ detailed: true }` then return array will contain `{ type, value }` instead of `'value'`
 * @param  {String} input text
 * @param  {{compact: Boolean | undefined, detailed: Boolean | undefined}} [options={ compact: false, detailed: false}] options to modify output style
 * @return {(String[]|Array.<{type: String, value: String}>)} text split into tokens containing values, or detailed object
 * @example
 * tokenize('ふふフフ')
 * // ['ふふ', 'フフ']
 *
 * tokenize('感じ')
 * // ['感', 'じ']
 *
 * tokenize('人々')
 * // ['人々']
 *
 * tokenize('truly 私は悲しい')
 * // ['truly', ' ', '私', 'は', '悲', 'しい']
 *
 * tokenize('truly 私は悲しい', { compact: true })
 * // ['truly ', '私は悲しい']
 *
 * tokenize('5romaji here...!?人々漢字ひらがなカタ　カナ４「ＳＨＩＯ」。！')
 * // [ '5', 'romaji', ' ', 'here', '...!?', '人々漢字', 'ひらがな', 'カタ', '　', 'カナ', '４', '「', 'ＳＨＩＯ', '」。！']
 *
 * tokenize('5romaji here...!?人々漢字ひらがなカタ　カナ４「ＳＨＩＯ」。！', { compact: true })
 * // [ '5', 'romaji here', '...!?', '人々漢字ひらがなカタ　カナ', '４「', 'ＳＨＩＯ', '」。！']
 *
 * tokenize('5romaji here...!?人々漢字ひらがなカタ　カナ４「ＳＨＩＯ」。！ لنذهب', { detailed: true })
 * // [
 *  { type: 'englishNumeral', value: '5' },
 *  { type: 'en', value: 'romaji' },
 *  { type: 'space', value: ' ' },
 *  { type: 'en', value: 'here' },
 *  { type: 'englishPunctuation', value: '...!?' },
 *  { type: 'kanji', value: '人々漢字' },
 *  { type: 'hiragana', value: 'ひらがな' },
 *  { type: 'katakana', value: 'カタ' },
 *  { type: 'space', value: '　' },
 *  { type: 'katakana', value: 'カナ' },
 *  { type: 'japaneseNumeral', value: '４' },
 *  { type: 'japanesePunctuation', value: '「' },
 *  { type: 'ja', value: 'ＳＨＩＯ' },
 *  { type: 'japanesePunctuation', value: '」。！' },
 *  { type: 'space', value: ' ' },
 *  { type: 'other', value: 'لنذهب' },
 * ]
 *
 * tokenize('5romaji here...!?人々漢字ひらがなカタ　カナ４「ＳＨＩＯ」。！ لنذهب', { compact: true, detailed: true})
 * // [
 *  { type: 'other', value: '5' },
 *  { type: 'en', value: 'romaji here' },
 *  { type: 'other', value: '...!?' },
 *  { type: 'ja', value: '人々漢字ひらがなカタ　カナ' },
 *  { type: 'other', value: '４「' },
 *  { type: 'ja', value: 'ＳＨＩＯ' },
 *  { type: 'other', value: '」。！' },
 *  { type: 'en', value: ' ' },
 *  { type: 'other', value: 'لنذهب' },
 *]
 */ function tokenize(input, { compact = false, detailed = false } = {}) {
    if (input == null || isEmpty(input)) {
        return [];
    }
    const chars = [
        ...input
    ];
    let initial = chars.shift();
    let prevType = getType(initial, compact);
    initial = detailed ? {
        type: prevType,
        value: initial
    } : initial;
    const result = chars.reduce((tokens, char)=>{
        const currType = getType(char, compact);
        const sameType = currType === prevType;
        prevType = currType;
        let newValue = char;
        if (sameType) {
            newValue = (detailed ? tokens.pop().value : tokens.pop()) + newValue;
        }
        return detailed ? tokens.concat({
            type: currType,
            value: newValue
        }) : tokens.concat(newValue);
    }, [
        initial
    ]);
    return result;
}
const isLeadingWithoutInitialKana = (input, leading)=>leading && !isKana(input[0]);
const isTrailingWithoutFinalKana = (input, leading)=>!leading && !isKana(input[input.length - 1]);
const isInvalidMatcher = (input, matchKanji)=>matchKanji && ![
        ...matchKanji
    ].some(isKanji) || !matchKanji && isKana(input);
/**
 * Strips [Okurigana](https://en.wikipedia.org/wiki/Okurigana)
 * @param  {String} input text
 * @param  {{ leading: Boolean | undefined, matchKanji: string | undefined }} [options={ leading: false, matchKanji: '' }] optional config
 * @return {String} text with okurigana removed
 * @example
 * stripOkurigana('踏み込む')
 * // => '踏み込'
 * stripOkurigana('お祝い')
 * // => 'お祝'
 * stripOkurigana('お腹', { leading: true });
 * // => '腹'
 * stripOkurigana('ふみこむ', { matchKanji: '踏み込む' });
 * // => 'ふみこ'
 * stripOkurigana('おみまい', { matchKanji: 'お祝い', leading: true });
 * // => 'みまい'
 */ function stripOkurigana(input = '', { leading = false, matchKanji = '' } = {}) {
    if (!isJapanese(input) || isLeadingWithoutInitialKana(input, leading) || isTrailingWithoutFinalKana(input, leading) || isInvalidMatcher(input, matchKanji)) {
        return input;
    }
    const chars = matchKanji || input;
    const okuriganaRegex = new RegExp(leading ? `^${tokenize(chars).shift()}` : `${tokenize(chars).pop()}$`);
    return input.replace(okuriganaRegex, '');
}
;
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LibraryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/learn/engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function LibraryPage() {
    _s();
    // Sets live in localStorage, so the first render has to be empty and the
    // real list arrives after mount.
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    function refresh() {
        setRows((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listSets"])().map((set)=>({
                set,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["masterySummary"])(set.items, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProgress"])(set))
            })));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(refresh, []);
    function handleDelete(set) {
        if (!confirm(`Delete "${set.name}" and its progress? This can't be undone.`)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSet"])(set.id);
        refresh();
    }
    if (rows === null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-40 animate-pulse rounded-xl bg-surface"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 43,
            columnNumber: 12
        }, this);
    }
    if (rows.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-xl py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jp mb-4 text-5xl",
                    children: "単語"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-semibold tracking-tight",
                    children: "Photograph a vocab list. Study it forever."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-muted",
                    children: "Point your camera at a page of your textbook. Kanjiloop reads the kanji, readings, and meanings, then drills you on them until you know them cold — and keeps going after that."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/import",
                    className: "focus-ring mt-8 inline-block rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90",
                    children: "Import your first page"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-6 text-2xl font-semibold tracking-tight",
                children: "Your sets"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-3",
                children: rows.map(({ set, mastered, total, percent })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "rounded-xl border border-border bg-surface transition-colors hover:border-accent/40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/sets/${set.id}`,
                                    className: "focus-ring min-w-0 flex-1 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "truncate font-medium",
                                            children: set.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-0.5 text-sm text-muted",
                                            children: [
                                                total,
                                                " ",
                                                total === 1 ? "word" : "words",
                                                " · ",
                                                mastered,
                                                " mastered"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: percent,
                                            className: "mt-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/sets/${set.id}/learn`,
                                    className: "focus-ring shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90",
                                    children: percent === 0 ? "Start" : "Continue"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleDelete(set),
                                    "aria-label": `Delete ${set.name}`,
                                    className: "focus-ring shrink-0 rounded-lg p-2 text-muted transition-colors hover:text-wrong",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this)
                    }, set.id, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(LibraryPage, "oUO4y1eHkE0Vf49q2Vm/qoo41YE=");
_c = LibraryPage;
var _c;
__turbopack_context__.k.register(_c, "LibraryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProgressBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** A 0–1 mastery bar. Used on set cards and above the learn session. */ __turbopack_context__.s([
    "default",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ProgressBar({ value, className = "", label }) {
    const percent = Math.round(Math.min(Math.max(value, 0), 1) * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-1.5 w-full overflow-hidden rounded-full bg-surface-raised ${className}`,
        role: "progressbar",
        "aria-valuenow": percent,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": label ?? "Mastery",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-full bg-accent transition-[width] duration-500 ease-out",
            style: {
                width: `${percent}%`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ProgressBar.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProgressBar.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ProgressBar;
var _c;
__turbopack_context__.k.register(_c, "ProgressBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/japanese.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canonicalKana",
    ()=>canonicalKana,
    "gradeEnglish",
    ()=>gradeEnglish,
    "gradeJapanese",
    ()=>gradeJapanese,
    "hasKanji",
    ()=>hasKanji,
    "romajiOf",
    ()=>romajiOf,
    "splitMeanings",
    ()=>splitMeanings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wanakana$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wanakana/esm/index.js [app-client] (ecmascript)");
;
function hasKanji(term) {
    return [
        ...term
    ].some((char)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wanakana$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKanji"])(char));
}
/**
 * The vowel a kana ends on ("a" | "i" | "u" | "e" | "o"), or null for ん and
 * anything that isn't a kana. Used to expand long-vowel marks.
 */ function vowelOf(kana) {
    const romaji = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wanakana$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRomaji"])(kana);
    const last = romaji.slice(-1);
    return "aiueo".includes(last) ? last : null;
}
const VOWEL_KANA = {
    a: "あ",
    i: "い",
    u: "う",
    e: "え",
    o: "お"
};
function canonicalKana(input) {
    // passRomaji: false means romaji gets converted too, which is what we want —
    // the user may type either script.
    let text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wanakana$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHiragana"])(input.trim().toLowerCase(), {
        passRomaji: false
    });
    // Drop anything that isn't a sound: spaces, punctuation, interpuncts, tildes.
    text = text.replace(/[\s　.,、。・〜~！!？?（）()「」『』]/g, "");
    // Expand ー into the vowel it lengthens: こーひー -> こおひい
    let expanded = "";
    for (const char of text){
        if (char === "ー" || char === "－" || char === "―") {
            const vowel = vowelOf(expanded.slice(-1));
            if (vowel) expanded += VOWEL_KANA[vowel];
            continue;
        }
        expanded += char;
    }
    // う after an o-sound and い after an e-sound are long vowels in practice:
    // とうきょう -> とおきょお, せんせい -> せんせえ
    let collapsed = "";
    for (const char of expanded){
        const prevVowel = vowelOf(collapsed.slice(-1));
        if (char === "う" && prevVowel === "o") {
            collapsed += "お";
        } else if (char === "い" && prevVowel === "e") {
            collapsed += "え";
        } else {
            collapsed += char;
        }
    }
    // "tsuzuku" and "tsuduku" should both match つづく.
    return collapsed.replace(/ぢ/g, "じ").replace(/づ/g, "ず");
}
/** Levenshtein edit distance, capped implicitly by the shorter string. */ function editDistance(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    let prev = Array.from({
        length: b.length + 1
    }, (_, i)=>i);
    for(let i = 1; i <= a.length; i++){
        const row = [
            i
        ];
        for(let j = 1; j <= b.length; j++){
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            row[j] = Math.min(row[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
        }
        prev = row;
    }
    return prev[b.length];
}
/**
 * Strip the noise that makes two correct English glosses look different:
 * articles, the "to" of an infinitive, parentheticals, punctuation.
 */ function canonicalEnglish(input) {
    return input.trim().toLowerCase().replace(/\([^)]*\)/g, "").replace(/[.,;:!?"'’`\-–—]/g, " ").replace(/\b(?:a|an|the)\b/g, " ").replace(/^\s*to\s+/, "").replace(/\s+/g, " ").trim();
}
function splitMeanings(meaning) {
    return meaning.split(/[;,/]|\bor\b/g).map((part)=>part.trim()).filter(Boolean);
}
/** True when `needle` appears in `haystack` as a run of consecutive whole words. */ function containsPhrase(haystack, needle) {
    if (!needle.length || needle.length > haystack.length) return false;
    for(let start = 0; start <= haystack.length - needle.length; start++){
        if (needle.every((word, offset)=>haystack[start + offset] === word)) {
            return true;
        }
    }
    return false;
}
function gradeJapanese(given, accepts) {
    const answer = given.trim();
    if (!answer) return "incorrect";
    // An exact match on the written form (kanji included) is always correct.
    if (accepts.some((accept)=>accept.trim() === answer)) return "correct";
    const canonical = canonicalKana(answer);
    if (!canonical) return "incorrect";
    const targets = accepts.map(canonicalKana).filter(Boolean);
    if (targets.includes(canonical)) return "correct";
    // One slip in a word of reasonable length is "almost" — worth a retype
    // rather than being marked wrong outright.
    const closest = Math.min(...targets.map((t)=>editDistance(canonical, t)));
    const shortest = Math.min(...targets.map((t)=>t.length));
    if (closest === 1 && shortest >= 3) return "almost";
    return "incorrect";
}
function gradeEnglish(given, meaning) {
    const answer = canonicalEnglish(given);
    if (!answer) return "incorrect";
    const senses = splitMeanings(meaning).map(canonicalEnglish).filter(Boolean);
    const targets = senses.length ? senses : [
        canonicalEnglish(meaning)
    ];
    if (targets.includes(answer)) return "correct";
    // Accept a sense the user got right plus extra words they added, e.g.
    // "to eat something" for "to eat". Matching on whole words rather than
    // substrings keeps "teacherr" from counting as "teacher".
    const answerWords = answer.split(" ");
    if (targets.some((t)=>containsPhrase(answerWords, t.split(" ")))) {
        return "correct";
    }
    const closest = Math.min(...targets.map((t)=>editDistance(answer, t)));
    const shortest = Math.min(...targets.map((t)=>t.length));
    if (closest <= Math.max(1, Math.floor(shortest / 6)) && shortest >= 4) {
        return "almost";
    }
    return "incorrect";
}
function romajiOf(kana) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wanakana$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRomaji"])(kana);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/learn/engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ROUND_SIZE",
    ()=>ROUND_SIZE,
    "applyGrade",
    ()=>applyGrade,
    "buildQuestion",
    ()=>buildQuestion,
    "gradeAnswer",
    ()=>gradeAnswer,
    "initialProgress",
    ()=>initialProgress,
    "initialState",
    ()=>initialState,
    "isMastered",
    ()=>isMastered,
    "ladderFor",
    ()=>ladderFor,
    "masterySummary",
    ()=>masterySummary,
    "nextQuestion",
    ()=>nextQuestion,
    "syncProgress",
    ()=>syncProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/japanese.ts [app-client] (ecmascript)");
;
const ROUND_SIZE = 7;
function ladderFor(item) {
    const readingIsDistinct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasKanji"])(item.term) && item.reading.trim() !== item.term.trim();
    return readingIsDistinct ? [
        "mc-jp-en",
        "mc-reading",
        "mc-en-jp",
        "type-reading",
        "type-en",
        "type-jp"
    ] : [
        "mc-jp-en",
        "mc-en-jp",
        "type-en",
        "type-jp"
    ];
}
/** Hardest rungs, cycled forever once an item is mastered. */ const REVIEW_KINDS = [
    "type-en",
    "type-jp",
    "type-reading"
];
function isMastered(item, state) {
    return state.level >= ladderFor(item).length;
}
function initialState(itemId, index) {
    return {
        itemId,
        level: 0,
        // Stagger the initial due times so the first round isn't in set order.
        dueAt: index,
        seen: 0,
        correct: 0,
        incorrect: 0,
        streak: 0
    };
}
function initialProgress(setId, items) {
    const states = {};
    items.forEach((item, index)=>{
        states[item.id] = initialState(item.id, index);
    });
    return {
        setId,
        states,
        clock: 0,
        questionsAnswered: 0,
        updatedAt: Date.now()
    };
}
function syncProgress(progress, items) {
    const states = {};
    items.forEach((item, index)=>{
        states[item.id] = progress.states[item.id] ?? initialState(item.id, progress.clock + index);
    });
    return {
        ...progress,
        states
    };
}
function shuffle(input) {
    const out = [
        ...input
    ];
    for(let i = out.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [out[i], out[j]] = [
            out[j],
            out[i]
        ];
    }
    return out;
}
/**
 * Pick distractors for a multiple-choice question. Drawing from the same set
 * keeps them plausible — they're words from the same textbook chapter.
 */ function distractors(items, target, project, count = 3) {
    const targetValue = project(target);
    const pool = new Set();
    for (const item of shuffle(items)){
        if (item.id === target.id) continue;
        const value = project(item);
        if (!value || value === targetValue) continue;
        pool.add(value);
        if (pool.size >= count) break;
    }
    return [
        ...pool
    ];
}
function primaryMeaning(item) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitMeanings"])(item.meaning)[0] ?? item.meaning;
}
function buildQuestion(item, kind, items) {
    switch(kind){
        case "mc-jp-en":
            {
                const correct = primaryMeaning(item);
                return {
                    itemId: item.id,
                    kind,
                    prompt: item.term,
                    hint: item.partOfSpeech,
                    choices: shuffle([
                        correct,
                        ...distractors(items, item, primaryMeaning)
                    ]),
                    correctChoice: correct,
                    answerLabel: item.meaning
                };
            }
        case "mc-en-jp":
            {
                return {
                    itemId: item.id,
                    kind,
                    prompt: item.meaning,
                    hint: item.partOfSpeech,
                    choices: shuffle([
                        item.term,
                        ...distractors(items, item, (other)=>other.term)
                    ]),
                    correctChoice: item.term,
                    answerLabel: item.term,
                    answerReading: item.reading
                };
            }
        case "mc-reading":
            {
                return {
                    itemId: item.id,
                    kind,
                    prompt: item.term,
                    hint: item.meaning,
                    choices: shuffle([
                        item.reading,
                        ...distractors(items, item, (other)=>other.reading)
                    ]),
                    correctChoice: item.reading,
                    answerLabel: item.reading,
                    answerReading: item.reading
                };
            }
        case "type-reading":
            {
                return {
                    itemId: item.id,
                    kind,
                    prompt: item.term,
                    hint: item.meaning,
                    accepts: [
                        item.reading
                    ],
                    answerLabel: item.reading,
                    answerReading: item.reading
                };
            }
        case "type-en":
            {
                return {
                    itemId: item.id,
                    kind,
                    prompt: item.term,
                    hint: item.partOfSpeech,
                    answerLabel: item.meaning
                };
            }
        case "type-jp":
            {
                // Either script is fine here — the point is recalling the word, and not
                // everyone studies with an IME switched on.
                return {
                    itemId: item.id,
                    kind,
                    prompt: item.meaning,
                    hint: item.partOfSpeech,
                    accepts: [
                        item.term,
                        item.reading
                    ],
                    answerLabel: item.term === item.reading ? item.term : `${item.term} (${item.reading})`,
                    answerReading: item.reading
                };
            }
    }
}
function gradeAnswer(question, item, given) {
    if (question.choices) {
        return given === question.correctChoice ? "correct" : "incorrect";
    }
    if (question.kind === "type-en") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gradeEnglish"])(given, item.meaning);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gradeJapanese"])(given, question.accepts ?? []);
}
/**
 * How far ahead to reschedule an item after a correct answer. Later rungs wait
 * longer, so early words keep cycling while mastered ones drift to the back.
 */ function spacing(level) {
    return 4 + level * 5 + Math.floor(Math.random() * 4);
}
function applyGrade(state, item, grade, clock) {
    const ladderLength = ladderFor(item).length;
    const next = {
        ...state,
        seen: state.seen + 1,
        lastAnsweredAt: Date.now()
    };
    if (grade === "correct") {
        next.correct = state.correct + 1;
        next.streak = state.streak + 1;
        next.level = Math.min(state.level + 1, ladderLength);
        next.dueAt = clock + spacing(next.level);
    } else if (grade === "almost") {
        // A typo shouldn't cost a rung, but the word comes back soon.
        next.streak = 0;
        next.dueAt = clock + 3;
    } else {
        next.incorrect = state.incorrect + 1;
        next.streak = 0;
        next.level = Math.max(0, state.level - 1);
        next.dueAt = clock + 2;
    }
    return next;
}
function nextQuestion(items, progress, lastItemId) {
    if (!items.length) return null;
    const byId = new Map(items.map((item)=>[
            item.id,
            item
        ]));
    const candidates = items.map((item)=>progress.states[item.id]).filter((state)=>Boolean(state));
    if (!candidates.length) return null;
    const unmastered = candidates.filter((state)=>{
        const item = byId.get(state.itemId);
        return item ? !isMastered(item, state) : false;
    });
    const review = unmastered.length === 0;
    const pool = review ? candidates : unmastered;
    // Prefer not to repeat the previous item, but do if it's the only one left.
    const withoutLast = pool.filter((state)=>state.itemId !== lastItemId);
    const usable = withoutLast.length ? withoutLast : pool;
    const chosen = usable.reduce((best, state)=>state.dueAt < best.dueAt ? state : best);
    const item = byId.get(chosen.itemId);
    if (!item) return null;
    const ladder = ladderFor(item);
    const kind = review ? REVIEW_KINDS.filter((k)=>ladder.includes(k))[Math.floor(Math.random() * REVIEW_KINDS.filter((k)=>ladder.includes(k)).length)] ?? ladder[ladder.length - 1] : ladder[Math.min(chosen.level, ladder.length - 1)];
    return {
        question: buildQuestion(item, kind, items),
        item: chosen,
        review
    };
}
function masterySummary(items, progress) {
    if (!items.length) return {
        mastered: 0,
        total: 0,
        percent: 0
    };
    let rungs = 0;
    let climbed = 0;
    let mastered = 0;
    for (const item of items){
        const state = progress.states[item.id];
        const ladderLength = ladderFor(item).length;
        rungs += ladderLength;
        if (!state) continue;
        climbed += Math.min(state.level, ladderLength);
        if (isMastered(item, state)) mastered += 1;
    }
    return {
        mastered,
        total: items.length,
        percent: rungs === 0 ? 0 : climbed / rungs
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSet",
    ()=>createSet,
    "deleteSet",
    ()=>deleteSet,
    "getProgress",
    ()=>getProgress,
    "getSet",
    ()=>getSet,
    "listSets",
    ()=>listSets,
    "newId",
    ()=>newId,
    "resetProgress",
    ()=>resetProgress,
    "saveProgress",
    ()=>saveProgress,
    "saveSet",
    ()=>saveSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/learn/engine.ts [app-client] (ecmascript)");
"use client";
;
const SETS_KEY = "kanjiloop:sets";
const PROGRESS_PREFIX = "kanjiloop:progress:";
/** Everything here runs in the browser; guard so pages can still render on the server. */ function available() {
    return ("TURBOPACK compile-time value", "object") !== "undefined" && !!window.localStorage;
}
function read(key, fallback) {
    if (!available()) return fallback;
    try {
        const raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch  {
        return fallback;
    }
}
function write(key, value) {
    if (!available()) return;
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        // Quota is the realistic failure here — a few thousand words still fit
        // comfortably, but tell the caller rather than losing data silently.
        console.error(`Failed to save ${key}`, error);
        throw new Error("Your browser storage is full. Delete an old set and try again.");
    }
}
function newId() {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
        return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function listSets() {
    return read(SETS_KEY, []).sort((a, b)=>b.updatedAt - a.updatedAt);
}
function getSet(id) {
    return listSets().find((set)=>set.id === id) ?? null;
}
function saveSet(set) {
    const sets = read(SETS_KEY, []);
    const index = sets.findIndex((existing)=>existing.id === set.id);
    const updated = {
        ...set,
        updatedAt: Date.now()
    };
    if (index >= 0) {
        sets[index] = updated;
    } else {
        sets.push(updated);
    }
    write(SETS_KEY, sets);
}
function createSet(name, items) {
    const set = {
        id: newId(),
        name: name.trim() || "Untitled set",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        items
    };
    saveSet(set);
    return set;
}
function deleteSet(id) {
    write(SETS_KEY, read(SETS_KEY, []).filter((set)=>set.id !== id));
    if (available()) window.localStorage.removeItem(PROGRESS_PREFIX + id);
}
function getProgress(set) {
    const stored = read(PROGRESS_PREFIX + set.id, null);
    if (!stored) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialProgress"])(set.id, set.items);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncProgress"])(stored, set.items);
}
function saveProgress(progress) {
    write(PROGRESS_PREFIX + progress.setId, {
        ...progress,
        updatedAt: Date.now()
    });
}
function resetProgress(set) {
    const fresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialProgress"])(set.id, set.items);
    saveProgress(fresh);
    return fresh;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_165lsqa._.js.map