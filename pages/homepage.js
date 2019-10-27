let homepage = function()
{
    let firstNumberInput = element(by.model('first'));
    let secondNumberInput = element(by.model('second'));
    let goSubmit = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url)
    {
        browser.get(url);
    }
    this.enterFirstNumber = function(firstNo)
    {
        firstNumberInput.sendKeys(firstNo);
    }
    this.secondNumberInput = function(secondNo)
    {
        secondNumberInput.sendKeys(secondNo);
    }
    this.goClick = function()
    {
        goSubmit.click();
    }

    /*this.veryfyResult = function(result)
    {
        let output = element(by.cssContainingText('ng-binding',result));
        expect(result.getText()).toEqual(result);
    }*/
};

module.exports = new homepage();

