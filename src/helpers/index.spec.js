import { mapSteps } from 'helpers';

import { steps, durations } from 'data.json';

const mockMappedSteps = [
  {
    duration: 2000,
    key: 'first',
    value: 'yellow',
  },
  {
    duration: 2500,
    key: 'second',
    value: 'blue',
  },
  {
    duration: 1500,
    key: 'third',
    value: 'green',
  },
  {
    duration: 3000,
    key: 'fourth',
    value: 'red',
  },
];

describe('mapSteps', () => {
  it('Should return an array containing all data needed', () => {
    const mappedStepes = mapSteps(steps, durations);
    expect(mappedStepes).toEqual(mockMappedSteps);
  });
});
