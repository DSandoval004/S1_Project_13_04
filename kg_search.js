"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 4

   Wordsearch Game Script
   
   Filename: kg_search.js
   Author: Diego Sandoval
   Date:   March 26, 2019 (03/26/19)
   
   
   Function List
   
   function drawWordSearch(letters, words)
      Returns the HTML code for a word search table based on the entries
      in the letters array and the location of the words
      in the words array
      
   showList(list)
      Returns the HTML for code for an unordered list of words based
      on the items in the list array

*/
// DVARG:
var mouseUP = true,
      WSCells;
// DDOES:
window.onload = function () {
      // DDOES:
      document.getElementById('wordSearchTitle').innerHTML = wordSearchTitle;
      document.getElementById('wordTable').innerHTML = drawWordSearch(letterGrid, wordGrid);
      document.getElementById('wordList').innerHTML = showList(wordArray);
      // DVARA:
      WSCells = document.querySelectorAll('table#wordSearchTable td')
      // DLOOP:
      for (var i = 0; i < WSCells.length; i++) {
            // DDOES:
            WSCells[i].style.cursor = "pointer";
            // DDOES:
            WSCells[i].addEventListener('mouseenter', function (e) {
                  // DIFDO:
                  if (mouseUP) e.target.style.backgroundColor = "lightGray";

            });
            // DDOES:
            WSCells[i].addEventListener('mouseleave', function (e) {
                  // DIFDO:
                  if (mouseUP) e.target.style.backgroundColor = "white";
            });
            // DDOES:
            WSCells[i].addEventListener('mousedown', WSCSelect);
            // DDOES:
            WSCells[i].addEventListener('mouseup', WSCSSelect);
      }
      document.addEventListener('mouseup', WSCSSelect)
      // DDOES:
      document.getElementById('showSolution').addEventListener('click', function () {
            console.log('showSolution')
      })
};
// DFUNC:
function WSCSelect(e) {
      console.log(e)
      // DVARB:
      mouseUP = false;
      // DVARN:
      var MSXC, MSYC, selPat,
            selPatNum = [],
            MSXO = e.pageX,
            MSYO = e.pageY;
      // DLOOP:
      for (var k = 0; k < 8; k++) {
            selPatNum.push([])
            selPatNum[k].push([], [])
            for (var j = 0; j < 25; j++) {
                  if (k = 0) {
                        selPatNum[k][0].push(function () {
                              return MSXO + (24 * j);
                        })
                  }
            }
      }
      console.log(selPatNum)
      // DLOOP:
      for (var k = 0; k < WSCells.length; k++) {
            // DDOES:
            WSCells[k].addEventListener('mouseenter', function (e) {
                  // DDOES:
                  MSXC = e.pageX, MSYC = e.pageY;
                  // DIFDO:
                  if (mouseUP == false) WSCSelecting(e);
            })
      }
      // DDOES:
      e.preventDefault();
      e.target.style.backgroundColor = "rgb(255, 200, 185)";
}
// DFUNC:
function WSCSelecting(e) {
      // 24
      console.log(e);
      // DDOES:
      e.target.style.backgroundColor = "rgb(255, 200, 185)";
};
// DFUNC:
function WSCSSelect(e) {
      // DVARB:
      mouseUP = true;
      // DLOOP:
      for (var k = 0; k < WSCells.length; k++) {
            // DDOES:
            WSCells[k].removeEventListener('mouseenter', function (e) {
                  console.log(e);
                  // DDOES:
                  e.target.style.backgroundColor = "rgb(255, 200, 185)";
            })
      }
}
/*============================================================*/

function drawWordSearch(letters, words) {
      var rowSize = letters.length;
      var colSize = letters[0].length;

      var htmlCode = "<table id='wordSearchTable'>";
      htmlCode += "<caption>Word Search</caption>";

      for (var i = 0; i < rowSize; i++) {
            htmlCode += "<tr>";

            for (var j = 0; j < colSize; j++) {
                  if (words[i][j] == " ") {
                        htmlCode += "<td>";
                  } else {
                        htmlCode += "<td class='wordCell'>";
                  }
                  htmlCode += letters[i][j];
                  htmlCode += "</td>";
            }

            htmlCode += "</tr>";
      }
      htmlCode += "</table>";

      return htmlCode;
}

function showList(list) {
      var htmlCode = "<ul id='wordSearchList'>";

      for (var i = 0; i < list.length; i++) {
            htmlCode += "<li>" + list[i] + "</li>";
      }

      htmlCode += "</ul>";

      return htmlCode;
}