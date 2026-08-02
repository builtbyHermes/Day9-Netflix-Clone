export function isCacheValid(
  timestamp,
  duration = 1000 * 60 * 5
) {

  return (
    Date.now() - timestamp < duration
  );

}