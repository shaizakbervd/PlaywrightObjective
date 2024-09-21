let options = [
    '--require-module ts-node/register',
    '--require ./steps/*.steps.ts',
    '--format progress', // This line is correct, no typo here
    '--format json:./reports/cucumber_report.json' // Ensure this line is correct
].join(' ');

module.exports = {
    test_runner: options
};
