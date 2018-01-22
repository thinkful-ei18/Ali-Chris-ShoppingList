'use strict';
/* global cuid, Item, render */

const store = (function (){
  const store = {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: '',
    findById: function (id) {
      return this.items.find(item => item.id === id);
    },
    addItem: function (name) {
      try {
        Item.validateName(name);
        this.items.push(Item.create(name));
      } catch(e) {
        console.log('Cannot add item' + e);
      }
    },
    findAndToggleChecked: function (id) {
      this.findById(id).checked = !this.findById(id).checked;
    },
    findAndUpdateName: function (id, newName) {
      try {
        Item.validateName(newName);
        this.findById(id).name = newName;
      } catch(e) {
        console.log('Cannot update name' + e);
      }
    },
    findAndDelete: function (id) {
      this.items = this.items.filter(val => val.id !== id);
    },
    
  };
  return {
    items: store.items,
    hideSchedItems: store.hideCheckedItems,
    searchTerm: store.searchTerm,
    findById: store.findById,
    addItem: store.addItem,
    findAndToggleChecked: store.findAndToggleChecked,
    findAndUpdateName: store.findAndUpdateName,
    findAndDelete: store.findAndDelete,
  };
}() );