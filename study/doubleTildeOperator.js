
/*
~~ is a double NOT bitwise operator.

It is used as a faster substitute for Math.floor() for positive numbers. 
It does not return the same result as Math.floor() for negative numbers,
 as it just chops off the part after the decimal

 It's two single tilde operators, so it does a bitwise complement (bitwise not) twice. 
 The operations take out each other, so the only remaining effect 
 is the conversion that is done before the first operator is applied, 
 i.e. converting the value to an integer number.

 Some use it as a faster alternative to Math.floor, but the speed difference is not that dramatic, 
 and in most cases it's just micro optimisation. Unless you have a piece of code that really needs to be optimised,
  you should use code that descibes what it does instead of code that uses a side effect of a non-operation.

Update 2011-08:
With optimisation of the JavaScript engine in browsers, the performance for operators and functions change.
 With current browsers, using ~~ instead of Math.floor is somewhat faster in some browsers, 
 and not faster at all in some browsers. If you really need that extra bit of performance, 
 you would need to write different optimised code for each browser.


 */