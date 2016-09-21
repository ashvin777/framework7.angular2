function ModalsPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/modals/modals.html"
  }).Class({
    constructor: function() {
      this.actionSheetButtons = this.getActionSheet();
    },
    ngOnInit: function() {
      window.application.init();
    },
    demoAlert: function() {
      window.application.alert('Hello!');
    },
    demoConfirm: function() {
      window.application.confirm('Are you feel good today?', function() {
        window.application.alert('Great!');
      });
    },
    demoPrompt: function() {
      window.application.prompt('What is your name?', function(data) {
        // @data contains input value
        window.application.confirm('Are you sure that your name is ' + data + '?', function() {
          window.application.alert('Ok, your name is ' + data + ' ;)');
        });
      });
    },
    demoLogin: function() {
      window.application.modalLogin('Enter your username and password', function(username, password) {
        window.application.alert('Thank you! Username: ' + username + ', password: ' + password);
      });
    },
    demoPassword: function() {
      window.application.modalPassword('Enter your password', function(password) {
        window.application.alert('Thank you! Password: ' + password);
      });
    },
    demoModalsStack: function() {
      // Open 5 alerts
      window.application.alert('Alert 1');
      window.application.alert('Alert 2');
      window.application.alert('Alert 3');
      window.application.alert('Alert 4');
      window.application.alert('Alert 5');
    },
    demoPickerModal: function() {
      window.application.pickerModal('.picker-modal-demo');
    },
    demoActions: function(e) {
      window.application.actions(this.actionSheetButtons);
    },
    demoActionsPopover: function(e) {
      // We need to pass additional target parameter (this) for popover
      window.application.actions(this, this.actionSheetButtons);
    },
    getActionSheet: function() {
      return [
        // First buttons group
        [
          // Group Label
          {
            text: 'Choose some action',
            label: true
          },
          // First button
          {
            text: 'Alert',
            onClick: function() {
              window.application.alert('He Hoou!');
            }
          },
          // Second button
          {
            text: 'Second Alert',
            onClick: function() {
              window.application.alert('Second Alert!');
            }
          },
          // Another red button
          {
            text: 'Nice Red Button ',
            color: 'red',
            onClick: function() {
              window.application.alert('You have clicked red button!');
            }
          },
        ],
        // Second group
        [{
          text: 'Cancel'
        }]
      ];
    }
  });
}
