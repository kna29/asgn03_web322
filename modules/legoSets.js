/********************************************************************************
* WEB322 – Assignment 03
* 
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
* 
* https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
* Name: Khushi Student ID: 137471223 Date: 11 March 2024
*
********************************************************************************/

const setData = require("../data/setData");
const themeData = require("../data/themeData");

let sets = [];

function initialize() {
  return new Promise((resolve, reject) => {
    setData.forEach((setElement) => {
      let setWithTheme = {
        ...setElement,
        theme: themeData.find(
          (themeElement) => themeElement.id == setElement.theme_id
        ).name,
      };
      sets.push(setWithTheme);
    });
    //should be outside the loop
    resolve();
  });
}

function getAllSets() {
  return new Promise((resolve, reject) => {
    resolve(sets);
  });
}

function getSetByNum(setNum) {
  return new Promise((resolve, reject) => {
    let foundSet = sets.find((s) => s.set_num == setNum);

    if (foundSet) {
      resolve(foundSet);
    } else {
      reject("Unable to find requested set");
    }
  });
}

function getSetsByTheme(theme) {
  return new Promise((resolve, reject) => {
    let foundSets = sets.filter((s) =>
      s.theme.toUpperCase().includes(theme.toUpperCase())
    );

    if (foundSets) {
      resolve(foundSets);
    } else {
      reject("Unable to find requested sets");
    }
  });
}

//to be able to use these functions in another module
module.exports = { initialize, getAllSets, getSetByNum, getSetsByTheme };
