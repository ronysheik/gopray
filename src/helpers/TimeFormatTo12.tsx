const TimeFormatTo12 = (time: string) => {
  const time12 = convertTo12HourFormat(time);
  return time12;
};

// Conversion Function
function convertTo12HourFormat(time24: string): string {
  const [hour, minute] = time24.split(':').map(Number);
  const period = hour >= 12 ? 'PM' : 'AM';
  const hour12 = (hour % 12 || 12).toString().padStart(2, '0');
  return `${hour12}:${minute.toString().padStart(2, '0')} ${period}`;
}

export default TimeFormatTo12;
