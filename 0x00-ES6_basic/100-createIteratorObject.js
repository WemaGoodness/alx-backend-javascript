export default function createIteratorObject(report) {
	const departments = Object.keys(report.allEmployees);
	let departmentIndex = 0;
	let employeeIndex = 0;

	return {
		next: function() {
			const department = departments[departmentIndex];

			if (!department) {
				return { done: true };
			}

			const employee = report.allEmployees[department][employeeIndex++];

			if (employee) {
				return { value: employee, done: false };
			}

			// Move to next department
			departmentIndex++;
			employeeIndex = 0;
			return this.next();
		},
		[Symbol.iterator]: function() { return this; }
	};
}
