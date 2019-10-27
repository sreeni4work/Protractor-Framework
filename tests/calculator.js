let homepage = require('../pages/homepage')

describe('calculator test suite',function()
{
   it('Addition testcase', function()
   {
       homepage.get('http://juliemr.github.io/protractor-demo/');
       homepage.enterFirstNumber('50');
       homepage.secondNumberInput('30');
       homepage.goClick();

       browser.sleep(3000);
   })
})
