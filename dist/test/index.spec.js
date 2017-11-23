import {
  isString
} from '../dist';


describe('default spec', () => {
  const
    string = 'string'
  ;

  test('default judge test', () => {
    expect(isString(string)).toBe(true);
  });
});

