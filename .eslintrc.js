module.exports = {
    "parser": "babel-eslint",
    "rules": {
      "strict": 0
    },
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-dangle": [
          "error",
          "never"
        ],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        /* Override React Rules */
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/no-unused-prop-types": 0,
        /* Override jsx-a11y Rules */
        "jsx-a11y/anchor-has-content": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        /* Advanced Rules */
        "no-unused-expressions": "error",
        "no-useless-concat": "error",
        "block-scoped-var": "error",
        "consistent-return": "error"
    }
};
