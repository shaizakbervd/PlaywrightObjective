import rimraf from "rimraf";
async function globalSetup()  {
    await new Promise(unlink => {
        rimraf('./allure-results/*', unlink);
    });
    
}
export default globalSetup;