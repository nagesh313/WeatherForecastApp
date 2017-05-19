describe('ForeCast App homepage test', function () {
    it('should run the forecast app', function () {
        browser.get('http://localhost:8080');
        //browser.driver.sleep(10000);
        element(by.model('home.latitude')).sendKeys(12);
         browser.driver.sleep(1000);
        element(by.model('home.longitude')).sendKeys(2);
         browser.driver.sleep(1000);
        element(by.id('fetchForecast')).click().then(function () {
             browser.driver.sleep(4000);
        });
         element(by.model('home.latitude')).clear().sendKeys(19);
         browser.driver.sleep(1000);
        element(by.model('home.longitude')).clear().sendKeys(31);
         browser.driver.sleep(1000);
        element(by.id('fetchForecast')).click().then(function () {
             browser.driver.sleep(4000);
        });
         element(by.model('home.latitude')).clear().sendKeys(129);
         browser.driver.sleep(1000);
        element(by.model('home.longitude')).clear().sendKeys(31);
         browser.driver.sleep(1000);
        element(by.id('fetchForecast')).click().then(function () {
             browser.driver.sleep(4000);
        });
    });
});