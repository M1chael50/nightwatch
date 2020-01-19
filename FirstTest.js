module.exports = {
	'@tags' : ['TMC'],
	'My first test case'(browser){
		
		browser
			.url('https://www.lmsuk.com/trackmycase/lms/account')
			.waitForElementVisible('.tone2')
			.assert.containsText(".tone2","Login")
			.waitForElementVisible('input#actionModels_Login_Email')
			.setValue('input[type=text]', 'nightwatch@planet-it.co.uk')
            .assert.visible('a.btn.btn-dark')
			.click('a.btn.btn-dark')
			.waitForElementVisible('input#actionModels_SignIn_Password', 'Login form loaded')
			.setValue('input[type=password]', 'Vision!1')
			.assert.visible('a.btn.btn-dark')
			.click('a.btn.btn-dark')
			.waitForElementVisible('h3.tone2')
			.assert.containsText("h3.tone2","Your Case List","Landed on Case List Page")
			.saveScreenshot('tests_output/Case_List_page.png');
	},
		
	'Link my case' (browser){
		
		const linkMyCaseDialogCloseSelector = 'a.lms-ui-dlg-close';
		const submitButtonSelector = 'a.lms-ui-dlg-btn';
		
		browser
		    .assert.visible('a#link-my-case-button')
			.click('a#link-my-case-button')
			.waitForElementVisible('input[name="FirstInitial"]')
			.setValue('input[name="FirstInitial"]', 'M')
			.setValue('input#Surname', 'Lambert')
			.setValue('input#ConveyedPostcode', 'CH3 9RH')
			.setValue('input#TransactionAmount', '300000')
			.setValue('input#MobileNumber', '07805')
			.saveScreenshot('tests_output/link_my_case_output.png')
			.click(linkMyCaseDialogCloseSelector);
			//.click(submitButtonSelector)
	},
		
	'logout' (browser) {
		browser
			.assert.visible('a.logout')
			.click('a.logout');
	}
	
};