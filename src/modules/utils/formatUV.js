export default function formatUv(index) {
  if (index >= 11) {
    return `Extreme (${index}).`;
  } else if (index >= 8 && index <= 10) {
    return `Very High (${index}).`;
  } else if (index >= 6 && index <= 7) {
    return `High (${index})`;
  } else if (index >= 3 && index <= 5) {
    return `Moderate (${index})`;
  } else {
    return `Low (${index})`;
  }
}
