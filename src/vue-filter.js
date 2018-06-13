import Vue from 'vue'

/**
 * yyyy-MM-dd hh:mm:ss q S
 * @param format
 * @param time
 * @returns {*}
 */
function timeFormat (format, time) {
  var o = {
    // month
    'M+': time.getMonth() + 1,
    // day
    'd+': time.getDate(),
    // hour
    'h+': time.getHours(),
    // minute
    'm+': time.getMinutes(),
    // second
    's+': time.getSeconds(),
    // quarter
    'q+': Math.floor((time.getMonth() + 3) / 3),
    // millisecond
    'S': time.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : (`00${o[k]}`).substr((`${o[k]}`).length))
    }
  }
  return format;
}

Vue.filter('time_format', function (val, format = 'yyyy-MM-dd') {
  if (!val) return '-'
  if (typeof val === 'number' && val.toString().length === 10) {
    val = val * 1000
  }
  return timeFormat(format, new Date(val))
})

Vue.filter('substr', function (val, length = 50) {
  return val.length < 50 ? val : val.substring(0, length) + '...'
})
