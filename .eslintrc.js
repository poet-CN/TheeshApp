module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "env": {
        "es6": true,
        "node": true
    },
    "rules": {
        "indent": ["error", 4],
        "jsx-indent-props": [0],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": 0,
        "react/jsx-indent": [0, "tab"],
        "object-curly-newline": ["error", { "consistent": true }],
        "no-console": [0],
        "no-alert": [0],
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        // "react/prop-types": ["error", { "ignore": ["navigation"] }],
        "react/prop-types": [0],
        "react/no-typos": [0],
        "react/jsx-indent-props": [0],
        "max-len": [0],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "prefer-const": ["error", {
            "destructuring": "any",
            "ignoreReadBeforeAssign": false
        }],
        "react/jsx-one-expression-per-line": 0,
        "linebreak-style": ["off", "windows"],
        "eol-last": [0],
        "no-restricted-globals": 0,
        "react/destructuring-assignment": 0,
        "react/no-array-index-key": 0,
        "no-underscore-dangle": 0,
        "no-return-assign": 0,
        "react/no-string-refs": 0,
        "one-var": 0,
        "one-var-declaration-per-line": 0,
        "global-require": 0,
        "array-callback-return": 0,
        "no-restricted-syntax": 0,
        "no-await-in-loop": 0,
        "radix": 0,
        "no-lonely-if": 0,
        "consistent-return": 0,
        "react/jsx-no-bind": 0,
    },
    "globals": {
        "__DEV__": true,
        "__dirname": false,
        "__fbBatchedBridgeConfig": false,
        "alert": false,
        "cancelAnimationFrame": false,
        "cancelIdleCallback": false,
        "clearImmediate": true,
        "clearInterval": false,
        "clearTimeout": false,
        "console": false,
        "document": false,
        "escape": false,
        "Event": false,
        "EventTarget": false,
        "exports": false,
        "fetch": false,
        "FormData": false,
        "global": false,
        "jest": false,
        "Map": true,
        "module": false,
        "navigator": false,
        "process": false,
        "Promise": true,
        "requestAnimationFrame": true,
        "requestIdleCallback": true,
        "require": false,
        "Set": true,
        "setImmediate": true,
        "setInterval": false,
        "setTimeout": false,
        "window": false,
        "XMLHttpRequest": false,
        "pit": false,
    }
};
