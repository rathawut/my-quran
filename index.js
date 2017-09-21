/**
 * Created by ilyas on 9/21/2017 AD.
 */

var app = new Vue({
  el: '#app',
  data: {
    group: 1,
  },
  methods: {
    getPage(group, pageInGroup) {
      const basePageNo = (group - 1) * 8;
      return basePageNo + pageInGroup;
    },
    getQuranUrl: function (group, pageInGroup) {
      return `./assets/images/page${_.padStart((this.getPage(group, pageInGroup)).toString(), 3, '0')}.png`;
    },
  }
});

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      console.log('left');
      app.group++;
      break;
    case 38:
      console.log('up');
      break;
    case 39:
      app.group--;
      console.log('right');
      break;
    case 40:
      console.log('down');
      break;
  }
};
