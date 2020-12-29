export default {
    testEnvironment: 'jest-environment-node',
    transform: {},
    roots: ['<rootDir>/src'],
    testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/app/**/*.js']
}