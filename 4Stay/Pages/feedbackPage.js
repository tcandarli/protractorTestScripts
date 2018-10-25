var feedbackPage = function () {

    this.feedbackForm = element(by.id('send_a_message'));
    this.nameField= element(by.id('name'));
    this.emailField= element(by.id('email'));
    this.messageField= element(by.id('message'));
    this.sendMessageButton = $('.btn.btn-signup');
    this.confirmMessage = element(by.id('confirmation-header'));
    
}

module.exports = new feedbackPage();