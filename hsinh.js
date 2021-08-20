function Student(name, age, gpa, level)
{
    this.name = name;
    this.age = age;
    this.gpa = gpa;
    this.level = level;
};

const students = [{"Khoi", 17, 9.0}; {"Khoa", 18, 9.5}; {"Hoa", 18, 9.5}; {"Hue", 19, 9.7}; {"Hieu", 16, 9.3};];

for (student in students) {
    console.log(student);
};
