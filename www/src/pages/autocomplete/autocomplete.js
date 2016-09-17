function AutoCompletePageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/autocomplete/autocomplete.html"
  }).Class({
    constructor: [ng.core.ElementRef, function(element) {
      this.$element = element;
      this.fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');

      this.simpleAutocomplete = {
        openIn: 'dropdown',
        source: this.simpleAutocompleteSource.bind(this)
      };

      this.autocompleteDropdownAll = {
        openIn: 'dropdown',
        source: this.autocompleteDropdownAllSource.bind(this)
      };

      this.autocompleteDropdownPlaceholder = {
        openIn: 'dropdown',
        dropdownPlaceholderText: 'Try to type "Apple"',
        source: this.autocompleteDropdownPlaceholderSource.bind(this)
      };

      this.autocompleteDropdownAjax = {
        openIn: 'dropdown',
        preloader: true, //enable preloader
        valueProperty: 'id', //object's "value" property name
        textProperty: 'name', //object's "text" property name
        limit: 20, //limit to 20 results
        dropdownPlaceholderText: 'Try "JavaScript"',
        source: this.autocompleteDropdownAjaxSource.bind(this)
      };

      this.autocompleteStandaloneSimple = {
        openIn: 'popup', //open in page
        backOnSelect: true, //go back after we select something
        source: this.autocompleteStandaloneSimpleSource.bind(this),
        onChange: this.autocompleteStandaloneSimpleOnChange.bind(this)
      };

      // Standalone Popup
      this.autocompleteStandalonePopup = {
        openIn: 'popup', //open in page
        backOnSelect: true, //go back after we select something
        source: this.autocompleteStandalonePopupSource.bind(this),
        onChange: this.autocompleteStandalonePopupOnChange.bind(this)
      };

      // Multiple Standalone
      this.autocompleteStandaloneMultiple = {
        openIn: 'popup', //open in page
        multiple: true, //allow multiple values
        source: this.autocompleteStandaloneMultipleSource.bind(this),
        onChange: this.autocompleteStandaloneMultipleOnChange.bind(this)
      };

      // Standalone With Ajax
      this.autocompleteStandaloneAjax = {
        openIn: 'popup', //open in page
        multiple: true, //allow multiple values
        valueProperty: 'id', //object's "value" property name
        textProperty: 'name', //object's "text" property name
        limit: 50,
        preloader: true, //enable preloader
        preloaderColor: 'white', //preloader color
        source: this.autocompleteStandaloneAjaxSource.bind(this),
        onChange: this.autocompleteStandaloneAjaxOnChange.bind(this)
      };
    }],
    simpleAutocompleteSource: function(autocomplete, query, render) {
      this.fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');
      var results = [];
      if (query.length === 0) {
        render(results);
        return;
      }
      // Find matched items
      for (var i = 0; i < this.fruits.length; i++) {
        if (this.fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(this.fruits[i]);
      }
      // Render items by passing array with result items
      render(results);
    },
    autocompleteDropdownAllSource: function(autocomplete, query, render) {
      this.fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');
      var results = [];
      // Find matched items
      for (var i = 0; i < this.fruits.length; i++) {
        if (this.fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(this.fruits[i]);
      }
      // Render items by passing array with result items
      render(results);
    },
    autocompleteDropdownPlaceholderSource: function(autocomplete, query, render) {
      var results = [];
      if (query.length === 0) {
        render(results);
        return;
      }
      // Find matched items
      for (var i = 0; i < this.fruits.length; i++) {
        if (this.fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(this.fruits[i]);
      }
      // Render items by passing array with result items
      render(results);
    },
    autocompleteDropdownAjaxSource: function(autocomplete, query, render) {
      var results = [];
      if (query.length === 0) {
        render(results);
        return;
      }
      // Show Preloader
      autocomplete.showPreloader();
      // Do Ajax request to Autocomplete data
      Dom7.ajax({
        url: 'js/autocomplete-languages.json',
        method: 'GET',
        dataType: 'json',
        //send "query" to server. Useful in case you generate response dynamically
        data: {
          query: query
        },
        success: function(data) {
          // Find matched items
          for (var i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
          }
          // Hide Preoloader
          autocomplete.hidePreloader();
          // Render items by passing array with result items
          render(results);
        }
      });
    },
    autocompleteStandaloneSimpleSource: function(autocomplete, query, render) {
      var results = [];
      if (query.length === 0) {
        render(results);
        return;
      }
      // Find matched items
      for (var i = 0; i < this.fruits.length; i++) {
        if (this.fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(this.fruits[i]);
      }
      // Render items by passing array with result items
      render(results);
    },
    autocompleteStandaloneSimpleOnChange: function(autocomplete, value) {

      // console.log( autocomplete.opener );
      // Add item text value to item-after
      autocomplete.opener.find('.item-after').text(value[0]);
      // Add item value to input value
      autocomplete.opener.find('input').val(value[0]);
    },
    autocompleteStandalonePopupSource: function(autocomplete, query, render) {
      var results = [];
      if (query.length === 0) {
        render(results);
        return;
      }
      // Find matched items
      for (var i = 0; i < this.fruits.length; i++) {
        if (this.fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(this.fruits[i]);
      }
      // Render items by passing array with result items
      render(results);
    },
    autocompleteStandalonePopupOnChange: function(autocomplete, value) {
      // Add item text value to item-after
      autocomplete.opener.find('.item-after').text(value[0]);
      // Add item value to input value
      autocomplete.opener.find('input').val(value[0]);
    },
    autocompleteStandaloneMultipleSource: function(autocomplete, query, render) {
      var results = [];
      if (query.length === 0) {
        render(results);
        return;
      }
      // Find matched items
      for (var i = 0; i < this.fruits.length; i++) {
        if (this.fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(this.fruits[i]);
      }
      // Render items by passing array with result items
      render(results);
    },
    autocompleteStandaloneMultipleOnChange: function(autocomplete, value) {
      // Add item text value to item-after
      autocomplete.opener.find('.item-after').text(value.join(', '));
      // Add item value to input value
      autocomplete.opener.find('input').val(value.join(', '));
    },
    autocompleteStandaloneAjaxSource: function(autocomplete, query, render) {
      var results = [];
      if (query.length === 0) {
        render(results);
        return;
      }
      // Show Preloader
      autocomplete.showPreloader();
      // Do Ajax request to Autocomplete data
      Dom7.ajax({
        url: 'js/autocomplete-languages.json',
        method: 'GET',
        dataType: 'json',
        //send "query" to server. Useful in case you generate response dynamically
        data: {
          query: query
        },
        success: function(data) {
          // Find matched items
          for (var i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
          }
          // Hide Preoloader
          autocomplete.hidePreloader();
          // Render items by passing array with result items
          render(results);
        }
      });
    },
    autocompleteStandaloneAjaxOnChange: function(autocomplete, value) {
      var itemText = [],
        inputValue = [];
      for (var i = 0; i < value.length; i++) {
        itemText.push(value[i].name);
        inputValue.push(value[i].id);
      }
      // Add item text value to item-after
      autocomplete.opener.find('.item-after').text(itemText.join(', '));
      // Add item value to input value
      autocomplete.opener.find('input').val(inputValue.join(', '));
    }
  });
}
