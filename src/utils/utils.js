export const shortenText = (text, startingPoint, maxLength) => {
  return text.length > maxLength ? `${text.slice(startingPoint, maxLength)}...` : text
}

export const convertObjectToArray = object => {
  if (object) {
    const betArrays = []
    const keys = Object.keys(object)
    for (let i = 0; i < keys.length; i++) {
      betArrays.push({betId: keys[i], ...object[keys[i]]})
    }
    return betArrays
  }
  return []
}

export const months_names =['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']

export const getRandomeColor = () => {
  return `#${Math.floor(Math.random() * 0xfffff)}`;
};

export function secondsToDhms(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);

  // var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  // var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  // var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  // return {dDisplay, hDisplay, mDisplay, sDisplay};
  return { d, h, m, s };
}
