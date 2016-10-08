function PhotoBrowserPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/photo-browser/photo-browser.html"
  }).Class({
    constructor: function() {
      var photoBrowserPhotos = [{
          url: 'img/beach.jpg',
          caption: 'Amazing beach in Goa, India'
        },
        'http://placekitten.com/1024/1024',
        'img/lock.jpg', {
          url: 'img/monkey.jpg',
          caption: 'I met this monkey in Chinese mountains'
        }, {
          url: 'img/mountains.jpg',
          caption: 'Beautiful mountains in Zhangjiajie, China'
        }

      ];
      this.photoBrowserStandalone = window.application.photoBrowser({
        photos: photoBrowserPhotos
      });
      this.photoBrowserPopup = window.application.photoBrowser({
        photos: photoBrowserPhotos,
        type: 'popup'
      });
      this.photoBrowserPage = window.application.photoBrowser({
        photos: photoBrowserPhotos,
        type: 'page'
      });
      this.photoBrowserDark = window.application.photoBrowser({
        photos: photoBrowserPhotos,
        theme: 'dark'
      });
      this.photoBrowserPopupDark = window.application.photoBrowser({
        photos: photoBrowserPhotos,
        theme: 'dark',
        type: 'popup'
      });
      this.photoBrowserLazy = window.application.photoBrowser({
        photos: photoBrowserPhotos,
        lazyLoading: true,
        theme: 'dark'
      });
    },
    openPhotoBrowserStandalone: function() {
      this.photoBrowserStandalone.open();
    },
    openPhotoBrowserPopup: function() {
      this.photoBrowserPopup.open();
    },
    openPhotoBrowserPage: function() {
      this.photoBrowserPage.open();
    },
    openPhotoBrowserPopupDark: function() {
      this.photoBrowserPopupDark.open();
    },
    openPhotoBrowserDark: function() {
      this.photoBrowserDark.open();
    },
    openPhotoBrowserLazy: function() {
      this.photoBrowserLazy.open();
    }
  });
}
