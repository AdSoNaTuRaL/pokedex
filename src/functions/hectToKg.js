export function hectogramToKilogram(hectogramWeight) {
  // 1hect => 100g
  // 1g => 0.001kg
  // 1kg => 10hect
  return hectogramWeight / 10;
}