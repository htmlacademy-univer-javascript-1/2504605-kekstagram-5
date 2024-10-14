/* eslint-disable no-console */
// "часы:минуты" в общее количество минут
function meetingWithWorkHours(startWork, endWork, startMeeting, duration) {

  function convertToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  // время в минуты
  const startWorkMinutes = convertToMinutes(startWork);
  const endWorkMinutes = convertToMinutes(endWork);
  const startMeetingMinutes = convertToMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + duration;

  // укладывается ли встреча в рабочий день
  if (startMeetingMinutes < startWorkMinutes) {
    return false; // начинается до начала рабочего дня
  }
  if (endMeetingMinutes > endWorkMinutes) {
    return false; // заканчивается после конца рабочего дня
  }
  return true; // укладывается в рабочий день
}

// Примеры использования функции
console.log(meetingWithWorkHours('08:00', '17:30', '14:00', 90)); // true
console.log(meetingWithWorkHours('8:0', '10:0', '8:0', 120)); // true
console.log(meetingWithWorkHours('08:00', '14:30', '14:00', 90)); // false
console.log(meetingWithWorkHours('14:00', '17:30', '08:0', 90)); // false
console.log(meetingWithWorkHours('8:00', '17:30', '08:00', 900)); // false
