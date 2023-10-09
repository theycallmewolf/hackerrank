'use strict';

/**
 * 
 * Overall, this code defines a simple inheritance hierarchy for employee and engineer objects,
 * with the `Engineer` object inheriting from the `Employee` object.
 * The code uses constructor functions and the prototype property to define methods
 * that can be shared across all employee and engineer objects.
 * 
 * To improve the code, we could use ES6 classes instead of constructor functions 
 * to define the Employee and Engineer objects. 
 * This would make the code more concise and easier to read. 
 * Additionally, we could use more descriptive variable names to make the code more readable.
 */

// JavaScript constructor function
function Employee(title) {
  this.title = title;
}

Employee.prototype.setTitle = function (newTitle) {
  this.title = newTitle;
}

Employee.prototype.getTitle = function () {
  return this.title;
}

// JavaScript constructor function
function Engineer(title, isManager) {
  Employee.call(this, title);
  this.isManager = isManager;
}

// The `Engineer` constructor function inherits from the Employee constructor function 
// using the `Object.create` method. This creates a new object with the `Employee.prototype` object
// as its prototype, which allows the Engineer object to inherit the `setTitle` and `getTitle` methods
// from the `Employee` object.
Engineer.prototype = Object.create(Employee.prototype);

// The `Engineer` constructor function is then assigned to the `Engineer.prototype.constructor` property, 
// which ensures that the constructor function is set to the `Engineer` constructor function.
Engineer.prototype.constructor = Engineer;
// Engineer.prototype = Object.create(Employee.prototype, {
//   constructor: {
//     value: Engineer,
//     enumerable: false,
//     writable: true,
//     configurable: true
//   }
// });

Engineer.prototype.setIsManager = function (newManager) {
  this.isManager = newManager;
}

Engineer.prototype.getIsManager = function () {
  return this.isManager;
}

function main() {
  const engineerObject = new Engineer('Bruno', false);

  console.info(`Initial Employee Profile 
    - Title is ${engineerObject.getTitle()}. 
    - ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager
    `)

  engineerObject.setTitle('TheyCallMeWolf');
  engineerObject.setIsManager(true);

  console.info(`Final Employee Profile 
    - Title is ${engineerObject.getTitle()}. 
    - ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager
    `)

  console.info('Engineer.prototype has properties:');
  console.info(`    - setTitle: ${Engineer.prototype.hasOwnProperty('setTitle')}`);
  console.info(`    - getTitle: ${Engineer.prototype.hasOwnProperty('getTitle')}`);
  console.info(`    - setIsManager: ${Engineer.prototype.hasOwnProperty('setIsManager')}`);
  console.info(`    - getIsManager: ${Engineer.prototype.hasOwnProperty('getIsManager')}`);
}

main();