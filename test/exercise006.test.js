import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
  } from "../challenges/exercise006";

  describe("areWeCovered", () => {
    test("returns true when there are at least 3 staff members available for the given day", () => {
      const staff = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Jane", rota: ["Monday", "Tuesday", "Thursday"] },
        { name: "John", rota: ["Monday", "Wednesday", "Friday"] },
      ];
      expect(areWeCovered(staff, "Tuesday")).toBe(true);
    });
  
    test("returns false when there are less than 3 staff members available for the given day", () => {
      const staff = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Jane", rota: ["Monday", "Tuesday", "Thursday"] },
        { name: "John", rota: ["Monday", "Wednesday", "Friday"] },
      ];
      expect(areWeCovered(staff, "Sunday")).toBe(false);
    });
});

describe("sumMultiples", () => {
    test("returns the sum of multiples of 3 or 5 in the array", () => {
      expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(33);
      // The multiples of 3 or 5 in the array are: 3, 5, 6, 9, 10
      // Their sum is 3 + 5 + 6 + 9 + 10 = 33
    });
  
    test("returns 0 if no multiples of 3 or 5 in the array", () => {
      expect(sumMultiples([1, 2, 4, 7, 11])).toBe(0);
      // There are no multiples of 3 or 5 in the array
      // The sum of multiples is 0
    });
});

describe("isValidDNA", () => {
    test("returns true for a valid DNA string", () => {
      expect(isValidDNA("CGTA")).toBe(true);
      // The string contains valid DNA characters (C, G, T, A)
      // Returns true
    });
  
    test("returns false for an invalid DNA string", () => {
      expect(isValidDNA("CGTAX")).toBe(false);
      // The string contains an invalid character (X)
      // Returns false
    });
  
    test("returns true for an empty string", () => {
      expect(isValidDNA("")).toBe(true);
      // An empty string is considered valid as it contains no invalid characters
      // Returns true
    });
  
    test("throws an error when str parameter is not provided", () => {
      expect(() => isValidDNA()).toThrow("str is required");
      // Throws an error when the str parameter is not provided
    });
  });


  describe('getComplementaryDNA', () => {
    test('returns the complementary DNA string for a valid DNA string', () => {
      expect(getComplementaryDNA('ACTG')).toBe('TGAC');
      expect(getComplementaryDNA('CGTA')).toBe('GCAT');
      expect(getComplementaryDNA('ATCG')).toBe('TAGC');
      expect(getComplementaryDNA('GCTA')).toBe('CGAT');
    });

    test('returns an empty string for an empty input string', () => {
        expect(getComplementaryDNA('')).toBe('');
      });
    
      test('throws an error if the input string is not provided', () => {
        expect(() => getComplementaryDNA()).toThrow('str is required');
      });
    
    });

    describe('isItPrime', () => {
        test('returns true for prime numbers', () => {
          expect(isItPrime(2)).toBe(true);
          expect(isItPrime(3)).toBe(true);
          expect(isItPrime(5)).toBe(true);
          expect(isItPrime(7)).toBe(true);
          expect(isItPrime(11)).toBe(true);
          expect(isItPrime(13)).toBe(true);
          expect(isItPrime(17)).toBe(true);
          expect(isItPrime(19)).toBe(true);
          expect(isItPrime(23)).toBe(true);
          expect(isItPrime(29)).toBe(true);
        });
      
        test('returns false for non-prime numbers', () => {
          expect(isItPrime(1)).toBe(false);
          expect(isItPrime(4)).toBe(false);
          expect(isItPrime(6)).toBe(false);
          expect(isItPrime(8)).toBe(false);
          expect(isItPrime(9)).toBe(false);
          expect(isItPrime(10)).toBe(false);
          expect(isItPrime(12)).toBe(false);
          expect(isItPrime(14)).toBe(false);
          expect(isItPrime(15)).toBe(false);
          expect(isItPrime(20)).toBe(false);
        });
    });

    describe('createMatrix', () => {
        it('returns a matrix of size 3x3 filled with "foo"', () => {
          const result = createMatrix(3, 'foo');
          const expected = [
            ['foo', 'foo', 'foo'],
            ['foo', 'foo', 'foo'],
            ['foo', 'foo', 'foo']
          ];
          expect(result).toEqual(expected);
        });

        it('returns a matrix of size 4x4 filled with an empty string', () => {
            const result = createMatrix(4, '');
            const expected = [
              ['', '', '', ''],
              ['', '', '', ''],
              ['', '', '', ''],
              ['', '', '', '']
            ];
            expect(result).toEqual(expected);
          });
        });

