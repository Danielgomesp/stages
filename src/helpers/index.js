export function mapSteps(steps, durations) {
  const mappedSteps = steps.map((step) => ({
    ...step,
    duration: durations[step.key],
  }));

  return mappedSteps;
}
