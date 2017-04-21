/* eslint-disable no-param-reassign */

describe('the prime numbers canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const primeFactorsOf = (number) => {
    const factors = [];
    if (number > 1) {
      if (number % 2 === 0) {
        factors.push(2);
        number /= 2;
      }
    }

    if (number > 1) factors.push(number);
    return factors;
  };

  describe('a prime numbers function should', () => {
    it('return none for 1', () => {
      primeFactorsOf(1).should.deepEqual([]);
    });

    it('return 2 for 2', () => {
      primeFactorsOf(2).should.deepEqual([2]);
    });

    it('return 3 for 3', () => {
      primeFactorsOf(3).should.deepEqual([3]);
    });

    it('return 2, 2 for 4', () => {
      primeFactorsOf(4).should.deepEqual([2, 2]);
    });

    it('return 5 for 5', () => {
      primeFactorsOf(5).should.deepEqual([5]);
    });

    it('return 2, 3 for 6', () => {
      primeFactorsOf(6).should.deepEqual([2, 3]);
    });

    it('return 7 for 7', () => {
      primeFactorsOf(7).should.deepEqual([7]);
    });

    it('return 2, 2, 2 for 8');

    it('return 3, 3 for 9');
  });
});
