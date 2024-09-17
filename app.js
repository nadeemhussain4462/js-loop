// alert("hello world");

// chapter 17 to 20 Array and Loop
// Assignment no 6
// Question no 1
var arr = []
document.write(arr)

// Question no 2 multidimensional array 
var arr = [[0,1,2,3], "</br>",[1,0,1,2],"</br>",[2,1,0,1] ,"</br>"]
document.write(arr)

// Question no 3 print numaric counting form 1 to 10
var arr = [1,2,3,4,5,6,7,8,9,10]
document.write("<h1>" + arr + "</h1>")

// Question no 4 Write a program to print multiplication table of any number using for loop. 
var num = +prompt("Enter a number to print its multiplication table")
document.write("<h1>Multiplication table of " + num + "</h1>")
for (i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + num * i + "</br>")
}

// Question no 5 Write a program to print items of the following array using for loop: 
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
document.write("<h1>Fruits</h1>")
for (i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "</br>")
}

// Question no 6 Generate the following series in your browser. See example output.
var Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
document.write("<h1>Counting</h1>")
for (i = 0; i < Counting.length; i++) {
  document.write(Counting[i] + "</br>")
}
var Reverse_counting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
document.write("<h1>Reverse Counting</h1>")
for (i = 0; i < Reverse_counting.length; i++) {
  document.write(Reverse_counting[i] + "</br>")
}
var Even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
document.write("<h1>Even</h1>")
for (i = 0; i < Even.length; i++) {
  document.write(Even[i] + "</br>")
}
var Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
document.write("<h1>Odd</h1>")
for (i = 0; i < Odd.length; i++) {
  document.write(Odd[i] + "</br>")
}
var Series = [2+'k', 4+'k', 6+'k', 8+'k', 10+'k', 12+'k', 14+'k', 16+'k', 18+'k', 20+'k']
document.write("<h1>Series</h1>")
for (i = 0; i < Series.length; i++) {
  document.write(Series[i] + "</br>")
}

// Question no 7 You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var input = prompt("Enter the item you want to search")
var found = false
for (i = 0; i < A.length; i++) {
  if (input == A[i]) {
    found = true
    break
  }
}
if (found) {
  document.write("<h1>" + input  + " is found in the array" + "</h1>" + '</br>')
} else {
  document.write(input + " is not found in the array" + '</br>')
}

// Question no 8 Write a program to find the maximum value in an array.
var arr = [24,53,78,91,12]
var max = arr[0]  
for (i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  }
}
document.write("The maximum value in the array is " + max + '</br>')

// Question no 9 Write a program to find the minimum value in an array.
var arr = [24,53,78,91,12]
var min = arr[0]
for (i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i]
  }
}
document.write("The minimum value in the array is " + min + '</br>')

// Question no 10 Write a program to print multiples of 5 ranging 1 to 100.
document.write("<h1>Multiples of 5 ranging 1 to 100</h1>")
for (i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    document.write(i + "</br>")
  }
}

