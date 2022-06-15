Feature: Adding two numbers

Background: Two numbers to be manipulated through +, -, * and /
  Given the numbers 12 and 2

Example: adding two numbers
  When adding 12 and 2
  Then the sum should be 14

Example: subtracting two numbers
  When subtracting 12 and 2
  Then the difference should be 10

Example: multiplying two numbers
  When multiplying 12 and 2
  Then the product should be 24

Example: dividing two numbers
  When dividing 12 and 2
  Then the division should be 6