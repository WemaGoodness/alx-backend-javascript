const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((studentsByField) => {
        let responseText = 'This is the list of our students\n';
        
        const fields = Object.keys(studentsByField).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

        fields.forEach((field) => {
          const students = studentsByField[field];
          responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });

        res.status(200).send(responseText.trim());
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((studentsByField) => {
        const students = studentsByField[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch((error) => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
