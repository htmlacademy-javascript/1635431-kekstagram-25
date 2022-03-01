function getRandom(min , max) {
  min = (50);
  max = (400);
  const GET = Math.floor(Math.random()*(max - min + 1) + min);
  if (GET >= min && GET <=max) {
    return GET >= 50 && GET <=300;
  }
  if (GET < min) {
    return GET;
  }
  if (GET > max) {
    return GET;
  }
}
getRandom(402);

function checkLength(str, max) {
  str = (90);
  max = (80);
  const GET = Math.floor(Math.random()*(max - str) + str);
  if (GET > max) {
    return 'перенос на новую строку';
  }
  if (GET <= max) {
    return true;
  }
}
checkLength(60);
