Vue.component("case", {
    props: ["content", "active"],
    template: '#case',
    data() {
      return {
        alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        character: '',
        activeFace: Math.round(Math.random() * 4),
        transition: (1+ Math.round(Math.random() * 4)).toString() + 's',
      }
    },
    mounted() {
      this.character = this.alphabet.split('')[Math.round(Math.random() * (this.alphabet.length - 2))];
      this.character = this.content;
    }
});

new Vue({
    el: ".app",
    data: {
         pattern:
        'ittisothirfor|' +
        'twenlveafifty|' +
        'sixselevenine|' +
        'twonefourfive|' +
        'eighthreeteen|' +
        'pastoueighten|' +
        'threefourfive|' +
        'middaynightwo|' +
        'elsevenonesix|' +
        'ninesinathent|' +
        'moreveningoca|' +
        'usanafternoon|',
        patterns: [
          {word: 'it', patternMatch: '0,0|0,1'},
          {word: 'is', patternMatch: '0,3|0,4'},
          {word: 'one', patternMatch: '3,2|3,3|3,4', value: 1, for: 'minute'},
          {word: 'two', patternMatch: '3,0|3,1|3,2', value: 2, for: 'minute'},
          {word: 'three', patternMatch: '4,4|4,5|4,6|4,7|4,8', value: 3, for: 'minute'},
          {word: 'four', patternMatch: '3,5|3,6|3,7|3,8', value: 4, for: 'minute'},
          {word: 'five', patternMatch: '3,9|3,10|3,11|3,12', value: 5, for: 'minute'},
          {word: 'six', patternMatch: '2,0|2,1|2,2', value: 6, for: 'minute'},
          {word: 'seven', patternMatch: '2,3|2,4|2,7|2,8|2,9', value: 7, for: 'minute'},
          {word: 'eight', patternMatch: '4,0|4,1|4,2|4,3|4,4', value: 8, for: 'minute'},
          {word: 'nine', patternMatch: '2,9|2,10|2,11|2,12', value: 9, for: 'minute'},
          {word: 'eleven', patternMatch: '2,4|2,5|2,6|2,7|2,8|2,9', value: 11, for: 'minute'},
          {word: 'twelve', patternMatch: '1,0|1,1|1,2|1,4|1,5|1,6', value: 12, for: 'minute'},
          {word: 'thirteen', patternMatch: '0,6|0,7|0,8|0,9|4,9|4,10|4,11|4,12', value: 13, for: 'minute'},
          {word: 'fourteen', patternMatch: '3,5|3,6|3,7|3,8|4,9|4,10|4,11|4,12', value: 14, for: 'minute'},
          {word: 'fifteen', patternMatch: '1,8|1,9|1,10|4,9|4,10|4,11|4,12', value: 15, for: 'minute'},
          {word: 'sixteen', patternMatch: '2,0|2,1|2,2|4,9|4,10|4,11|4,12', value: 16, for: 'minute'},
          {word: 'seventeen', patternMatch: '2,3|2,4|2,7|2,8|2,9|4,9|4,10|4,11|4,12', value: 17, for: 'minute'},
          {word: 'eightteen', patternMatch: '4,0|4,1|4,2|4,3|4,4|4,9|4,10|4,11|4,12', value: 18, for: 'minute'},
          {word: 'nineteen', patternMatch: '2,9|2,10|2,11|2,12|4,9|4,10|4,11|4,12', value: 19, for: 'minute'},
          {word: 'twenty', patternMatch: '1,0|1,1|1,2|1,3|1,11|1,12', value: 20, for: 'minute'},
          {word: 'thirty', patternMatch: '0,6|0,7|0,8|0,9|1,11|1,12', value: 30, for: 'minute'},
          {word: 'forty', patternMatch: '0,10|0,11|0,12|1,11|1,12', value: 40, for: 'minute'},
          {word: 'fifty', patternMatch: '1,8|1,9|1,10|1,11|1,12', value: 50, for: 'minute'},
          {word: 'half', patternMatch: '0,7|1,7|2,5|3,9', value: 30, for: 'minute'},
          {word: 'ten', patternMatch: '4,9|4,11|4,12', value: 10, for: 'minute'},
          {word: 'to', patternMatch: '5,3|5,4'},
          {word: 'past', patternMatch: '5,0|5,1|5,2|5,3'},
          {word: 'one', patternMatch: '8,7|8,8|8,9', value: 1, for: 'hour'},
          {word: 'two', patternMatch: '7,10|7,11|7,12', value: 2, for: 'hour'},
          {word: 'four', patternMatch: '6,5|6,6|6,7|6,8', value: 4, for: 'hour'},
          {word: 'six', patternMatch: '8,10|8,11|8,12', value: 6, for: 'hour'},
          {word: 'midday', patternMatch: '7,0|7,1|7,2|7,3|7,4|7,5', value: 12, for: 'hour'},
          {word: 'midnight', patternMatch: '7,0|7,1|7,2|7,6|7,7|7,8|7,9|7,10', value: 0, for: 'hour'},
          {word: 'three', patternMatch: '6,0|6,1|6,2|6,3|6,4', value: 3, for: 'hour'},
          {word: 'seven', patternMatch: '8,2|8,3|8,4|8,5|8,6', value: 7, for: 'hour'},
          {word: 'eleven', patternMatch: '8,0|8,1|8,3|8,4|8,5|8,6', value: 11, for: 'hour'},
          {word: 'eight', patternMatch: '5,6|5,7|5,8|5,9|5,10', value: 8, for: 'hour'},
          {word: 'nine', patternMatch: '9,0|9,1|9,2|9,3', value: 9, for: 'hour'},
          {word: 'five', patternMatch: '6,9|6,10|6,11|6,12', value: 5, for: 'hour'},
          {word: 'ten', patternMatch: '5,10|5,11|5,12', value: 10, for: 'hour'},
          {word: 'in', patternMatch: '9,5|9,6'},
          {word: 'the', patternMatch: '9,8|9,9|9,10'},
          {word: 'morning', patternMatch: '10,0|10,1|10,2|10,6|10,7|10,8|10,9', value: [1, 12]},
          {word: 'evening', patternMatch: '10,3|10,4|10,5|10,6|10,7|10,6|10,7|10,8|10,9', value: [13, 18]},
          {word: 'afternoon', patternMatch: '11,4|11,5|11,6|11,7|11,8|11,9|11,10|11,11|11,12', value: [19, 0]},
        ],
        active: [],
    },
    methods: {
        getTime() {
        const t = moment().format('HH:mm');
        const h = t.split(':')[0];
        const m = t.split(':')[1];
        let result = [];
        result.push(this.patterns.find(p => p.word === 'it'));
        result.push(this.patterns.find(p => p.word === 'is'));
        result = result.concat(this.getMinute(m));
        result = result.concat(this.getHour(h, m));
        return result;
      },

      getMinute(min) {
        const m = parseInt(min);
        const result = [];

        switch (true) {
          case (m > 0 && m <= 20):
            result.push(this.patterns.find(p => p.for === 'minute' && p.value === m));
            break;
          case (m > 20 && m < 30):
            result.push(this.patterns.find(p => p.for === 'minute' && p.value === 20));
            result.push(this.patterns.find(p => p.for === 'minute' && p.value === parseInt(m.toString().split('')[1])));
            break;
          case m === 30:
            result.push(this.patterns.find(p => p.word === 'half'));
            break;
          case (m > 30 && m < 40):
            result.push(this.patterns.find(p => p.for === 'minute' && p.value === 20));
            result.push(this.patterns.find(p => p.for === 'minute' && p.value === 10 - parseInt(m.toString().split('')[1])));
            break;
          case m === 40:
            result.push(this.patterns.find(p => p.for === 'minute' && p.value === 20));
            break;
          case (m > 30 && m < 40) || (m > 40):
            result.push(this.patterns.find(p => p.for === 'minute' && p.value === 60 - m));
            break;
        }

        switch (true) {
          case m > 0 && m <= 30:
            result.push(this.patterns.find(p => p.word === 'past'));
            break;
          case m > 30 && m <= 60:
            result.push(this.patterns.find(p => p.word === 'to'));
            break;
        }
        return result;
      },

      getHour(hour, min) {
        const h = parseInt(hour);
        const m = parseInt(min);

        const result = [];

        switch (true) {
          case h % 24 === 0 && m <= 30:
            result.push(this.patterns.find(p => p.for === 'hour' && p.value === 0));
            break;
          case h % 24 === 12 && m <= 30:
            result.push(this.patterns.find(p => p.for === 'hour' && p.value === 12));
            break;
          default:
            switch (true) {
              case m <= 30:
                result.push(this.patterns.find(p => p.for === 'hour' && p.value === h % 12));
                break;
              case m > 30:
                result.push(this.patterns.find(p => p.for === 'hour' && p.value === (h % 12) + 1));
                break;
            }
            result.push(this.patterns.find(p => p.word === 'in'));
            result.push(this.patterns.find(p => p.word === 'the'));

            switch (true) {
              case h >= 0 && h < 12:
                result.push(this.patterns.find(p => p.word === 'morning'));
                break;
              case h >= 12 && h <= 18:
                result.push(this.patterns.find(p => p.word === 'afternoon'));
                break;
              default:
                result.push(this.patterns.find(p => p.word === 'evening'));
                break;
            }
            break;
        }
        return result;
      },

      getTimeSentence() {
        //console.log(JSON.stringify(this.getTime().map(m => m.word)));

        this.active = [];
        this.getTime().map(p => {
          const patternMatch = p.patternMatch.split('|').map(m => m.split(',').map(n => parseInt(n)));
          patternMatch.map(a => {
            this.active.push(a);
          });
        });
      },
    },
    mounted() {
      setTimeout(() => this.getTimeSentence(), 500);
      setInterval(() => this.getTimeSentence(), 1000);
    },
});
