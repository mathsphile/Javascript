let array=[23,26,90,100];
console.log(array);
array[3]=99;
console.log("The new array with changing value is",array);
console.log(array.length);
 // for loop
for(let i=0;i<array.length;i++)
    {
        console.log(array[i]);
    }
heroes=["batman","superman","spiderman","camel"];
console.log(heroes);
for(let el of heroes)
    {
        console.log(el);
    }
array=[90,200,67,95,456];
array.push(2);
console.log(array);
// pop element
array.pop();
console.log(array);

// convert array into string
array.toString();
console.log(array);

// slice items
array.slice(2,4);
console.log(array);

// concatenation of two array items
 marvel=["superman", " spiderman","batamn"];
 dc=["marvel","hanuman","krrish"];
 hero=marvel.concat(dc);
 console.log(hero);

 // Unshift -> add element at the first positiin
 array.unshift("apple");

 // shift -> delete eleemnt from the last
  array.shift();

  // some questiions
  comp=["Uber","Ola","netflix","Amazon"];
  comp.splice(1,1,"Fixify");