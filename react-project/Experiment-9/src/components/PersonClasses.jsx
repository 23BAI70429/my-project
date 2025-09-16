// Base class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getInfo() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Subclass: Student
  class Student extends Person {
    constructor(name, age, course, grade) {
      super(name, age);
      this.course = course;
      this.grade = grade;
    }
  
    getInfo() {
      return `${super.getInfo()}, Course: ${this.course}, Grade: ${this.grade}`;
    }
  }
  
  // Subclass: Teacher
  class Teacher extends Person {
    constructor(name, age, subject, department) {
      super(name, age);
      this.subject = subject;
      this.department = department;
    }
  
    getInfo() {
      return `${super.getInfo()}, Subject: ${this.subject}, Department: ${this.department}`;
    }
  }
  
  // Export classes
  export { Person, Student, Teacher };