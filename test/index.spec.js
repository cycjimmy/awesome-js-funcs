import {
  judgeBasic
} from '../dist';

import {
  isString
} from '../dist/judgeBasic';


describe('default spec', () => {
  const
    string = 'string'
  ;

  test('default judge test', () => {
    expect(isString(string)).toBe(true);
    expect(judgeBasic.isString(string)).toBe(true);
  });
});

