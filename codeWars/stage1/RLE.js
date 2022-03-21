// Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, 
// sequences in which the same data value occurs in many consecutive data elements) are stored as
//  a single data value and count, rather than as the original run. Wikipedia

// Task
// Your task is to write such a run-length encoding.

// Examples
// As the article states, RLE is a very simple form of data compression.
// It's only suitable for runs of data, as one can see in the following example:

// runLengthEncoding("hello world!")
//  =>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]

// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//   => [[34,'a'], [3,'b']]


var runLengthEncoding = function (str) {
    return (str.match(/(.)\1*/g) || []).map((coincidence)=>{
      return [coincidence.length, coincidence[0]]
    })
}
