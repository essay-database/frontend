module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["react-app", "plugin:prettier/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules":{
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/anchor-has-content": 0
    }
};