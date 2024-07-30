function updateStudentGradeByCity(students, city, newGrades) {
  return students.map(student => {
    const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';

    return { ...student, grade };
  }).filter(student => student.location === city);
}

export default updateStudentGradeByCity;
