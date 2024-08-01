interface MajorCredits {
  credits: number;
  _brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  _brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'MajorCredits',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'MinorCredits',
  };
}

const major1: MajorCredits = { credits: 3, _brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 4, _brand: 'MajorCredits' };
const minor1: MinorCredits = { credits: 1, _brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 2, _brand: 'MinorCredits' };

console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));
