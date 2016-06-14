import React from 'react';

class matrix extends React.Component {
  render() {

    var input = '4 4 1/n1 2 3 4/n5 6 7 8/n9 10 11 12/n13 14 15 16';

    var matrix = [];
    var M,N,R;

    function rotate(arr){

        // 1  2  3
        // 4  5  6
        // 7  8  9

        // 2  3  6
        // 1  5  9
        // 4  7  8

        return arr;
    }


    function processData(input) {
        //Enter your code here
        var splitted = input.split('/n');
        var options = splitted[0].split(' ');
        M = options[0]; // M rowsNb
        N = options[1]; // N colsNb
        R = options[2]; // R rotationNb

        for(var rowI = 1; rowI <= M; rowI++){
          matrix.push( splitted[rowI].split(' ') );
        }
        return input;
    }


    processData(input);


    return<div>
          {matrix.map( (row) => <div key={row}>{row}</div>) }
      </div>
  }
}

module.exports = matrix;
