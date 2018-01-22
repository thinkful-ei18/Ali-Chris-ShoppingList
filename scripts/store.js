'use strict';

const store = (function (){
  const store = {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: ''
  };
  return {
    items: store.items,
    hideSchedItems: store.hideCheckedItems,
    searchTerm: store.searchTerm,
  };
}() );