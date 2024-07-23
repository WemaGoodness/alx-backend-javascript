export default function iterateThroughObject(reportWithIterator) {
	let result = '';
	for (const employee of reportWithIterator) {
		if (result.length > 0) {
			result += ' | ';
		}
		result += employee;
	}
	return result;
}
