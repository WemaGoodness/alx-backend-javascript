const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter(line => line);
        const students = lines.slice(1);
        const fields = {};

        students.forEach((student) => {
          const [firstName, , , field] = student.split(',');
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstName);
        });

        console.log(`Number of students: ${students.length}`);
        for (const [field, names] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
