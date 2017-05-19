describe('ForeCast App forecastByLocation test', function () {
    it('should run the forecastByLocation app', function () {
        browser.get('http://localhost:8080/#/forecastByLocation');
        element(by.model('forecast.location')).sendKeys("Pune");
        browser.driver.sleep(1000);
        element(by.id('fetchForecast')).click().then(function () {
            browser.driver.sleep(4000);
        });
        element(by.model('forecast.location')).clear().sendKeys("Banglore");
        browser.driver.sleep(1000);
        element(by.id('fetchForecast')).click().then(function () {
            browser.driver.sleep(4000);
        });
        element(by.model('forecast.location')).clear().sendKeys("zzzzzzzz");
        browser.driver.sleep(1000);
        element(by.id('fetchForecast')).click().then(function () {
            browser.driver.sleep(4000);
        });
    });
});