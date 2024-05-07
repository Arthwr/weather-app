export default function formatAirQuality(epaIndex) {
  const epaStandard = [
    "Good",
    "Moderate",
    "Unhealthy for sensitive group",
    "Unhealthy",
    "Very Unhealthy",
    "Hazardous",
  ];

  return epaStandard[epaIndex - 1];
}
