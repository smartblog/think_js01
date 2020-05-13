// 3. Валидировать и переформатировать введенную пользователем дату из Американского в Российский стандарт
// Американский формат: ММ/ЧЧ/ГГГГ например: 5/30/2006
// Российский формат: ЧЧ.ММ.ГГГГ например: 30.05.2006

dateUsa = prompt('Введите дату в формате USA', "5/30/2006")

dateArray = dateUsa.split("/");
dateVal = new Date(dateUsa);

if ( (dateVal.getFullYear() == dateArray[2]) && (dateVal.getMonth() == dateArray[0] - 1) && (dateVal.getDate() == dateArray[1]) ) {
  if (dateArray[0].length < 2) {
    dateArray[0] = "0" + dateArray[0];
  }
  dateRussia = dateArray[1] + '.' + dateArray[0] + '.' + dateArray[2];
  console.log(dateRussia);
} else {
  alert("Введена неправильная дата");
};
