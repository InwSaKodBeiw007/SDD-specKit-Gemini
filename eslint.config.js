import globals from "globals";

export default [
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            // Add any specific rules you want to enforce
        },
    },
];