const DateString = dateStart => {
  var dateS = dateStart.split('-')[0];
  var m = dateStart.split('-')[1];
  var Year = dateStart.split('-')[2];
  if (m === '01') {
    m = 'January';
  } else if (m === '02') {
    m = 'February';
  } else if (m === '03') {
    m = 'Maret';
  } else if (m === '04') {
    m = 'April';
  } else if (m === '05') {
    m = 'Mei';
  } else if (m === '06') {
    m = 'Juni';
  } else if (m === '07') {
    m = 'Juli';
  } else if (m === '08') {
    m = 'Agustus';
  } else if (m === '09') {
    m = 'September';
  } else if (m === '10') {
    m = 'Oktober';
  } else if (m === '11') {
    m = 'November';
  } else {
    m = 'Desember';
  }
  return dateS + ' ' + m + ' ' + Year;
};

export default DateString;
