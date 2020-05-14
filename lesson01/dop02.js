let str = prompt("Введите время");

str = str.replace(/\s/g, '');
split = str.replace(/[a-zA-Z0-9]/g, '');
time = str.replace(/[a-zA-Z]/g, '');
meridiem = str.substr(str.length - 2).toLowerCase();

timeArray = time.split(split);

hh = parseInt(timeArray[0]);
mm = parseInt(timeArray[1]);

if ( meridiem === "pm" ) {
  hh += 12;
}

if ( hh > 24 || mm > 60 ) {
    alert("Ошибка!!!");
} else {
    if ( hh === 24 ) {
      hh = "00";
    }

    if (hh.toString().length < 2) {
        hh = "0" + hh;
    }

    if (mm.toString().length < 2) {
        mm = "0" + mm;
    }
}

alert(hh + ":" + mm);
