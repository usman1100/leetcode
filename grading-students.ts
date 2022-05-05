function gradingStudents(grades: number[]): number[] {
    return grades.map((grade) =>
        grade < 38 || grade % 5 < 3 ? grade : grade + (5 - (grade % 5))
    );
}
let arr = [4, 73, 67, 38, 33];
console.log(gradingStudents(arr));
