import filterList from 'Utils/filterList';

test('Filter array A to array B with a value', () => {
  const value1 = 'a';
  const value2 = 'c';
  const arrayA = [
    {
      title: 'abc 12'
    },
    {
      title: 'cde 34'
    },
  ];
  const arrayB = [
    {
      title: 'abc 12'
    },
  ];

  expect(filterList(value1, arrayA)).toEqual(arrayB);
  expect(filterList(value2, arrayA)).toEqual(arrayA);
});
