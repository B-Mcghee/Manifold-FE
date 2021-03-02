module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    setupFiles: ['./tests/setup.js'],
    moduleFileExtensions:[
        'js',
        'jsx',
        'json',
        'vue'
    ],
    // transform:{
    //     '^.+\\.vue$': 'vue-jest',
    //     '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    //     '^.+\\.(ts|tsx)?$': 'ts-jest',
    //     "^.+\\.(js|jsx)$": "babel-jest",
    //     "node_modules/(?!(@babel)/)"
    // },
    // transformIgnorePatterns:[
    //     '/node_modules/'
    // ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    }, snapshotSerializers: [
        'jest-serializer-vue'
    ],
    // testMatch:[
    //     '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|tx|tsx)'
    // ],
    // testURL: 'http://localhost/',
    // watchPlugins:[
    //     'jest-watch-typeahead/filename',
    //     'jest-watch-typeahead/testname'
    // ]
}