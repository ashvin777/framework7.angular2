function NotificationsPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/notifications/notifications.html"
  }).Class({
    constructor: function() {
      window.application.init();
    },
    notification1: function() {
      window.application.addNotification({
        message: 'Simple message'
      });
    },
    notification2: function() {
      window.application.addNotification({
        message: 'Multi-line message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in magna nisi.',
      });
    },

    notification3: function() {
      window.application.addNotification({
        message: 'Nice yellow button',
        button: {
          text: 'Click me',
          color: 'yellow'
        }
      });
    },
    notification4: function() {
      window.application.addNotification({
        message: 'Close me to see Alert',
        button: {
          text: 'Close',
          color: 'lightgreen'
        },
        onClose: this.onNotificationClose.bind(this)
      });
    },
    onNotificationClose: function() {
      window.application.alert('Notification closed');
    }
  });
}
