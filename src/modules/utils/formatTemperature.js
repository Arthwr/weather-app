export default function formatTemperature(temperature) {
  return temperature >= 0 ? `+${temperature} °C` : `${temperature} °C`;
}
