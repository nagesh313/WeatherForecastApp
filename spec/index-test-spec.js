describe('ForeCast App homepage test', function () {
    it('should run the forecast app', function () {
        browser.get('http://localhost:8080');
        browser.driver.sleep(10000);
       
       // expect($('.detail-div').isPresent()).toBe(true);
//browser.driver.wait(5000);


        //         var EC = protractor.ExpectedConditions;
        //         browser.driver.wait(function() {
        //  console.log("inside asdasd");
        //             return true;
        //         }, 1000);   
        //         browser.waitForAngular().then(function () {
        //             //element(by.cssContainingText('#mainUserDropMenu a', 'Settings')).click(); 
        //             element(by.cssContainingText('.headerLink', 'Current Forecast')).click().then(function(){
        //                browser.waitForAngular();
        //                  expect(true).toEqual(true);

        //                // browser.driver.wait(5000);
        //             });
        //             expect(true).toEqual(true);

        //         });
        //         expect(true).toEqual(true);


        // browser.wait(element(by.css(".detail-div")).isPresent);
        //expect(true).toEqual(true);


        // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        // element(by.css('[value="add"]')).click();

        // var todoList = element.all(by.repeater('todo in todoList.todos'));
        // expect(todoList.count()).toEqual(3);
        // expect(todoList.get(2).getText()).toEqual('write first protractor test');

        // // You wrote your first test, cross it off the list
        // todoList.get(2).element(by.css('input')).click();
        // var completedAmount = element.all(by.css('.done-true'));
        // expect(completedAmount.count()).toEqual(2);

    });
});