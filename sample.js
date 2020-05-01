new Vue({
  el: '#app',
  data: {
    name: 'Mouhamed Diop',
    course: 'Web Engineer Course',
    acceptancePeriod: 'April 2020',
    defaultLastId: 3,
    students: [
      { id: 1, name: 'Hiroyoshi NORO', course: 'Machine learning course', acceptancePeriod: 'January 2019' },
      { id: 2, name: 'Shuji TOMONAGA', course: 'Web Engineer Course', acceptancePeriod: 'January 2017' },
      { id: 3, name: 'Kazuki SAITO', course: 'Web Engineer Course', acceptancePeriod: 'September 2018' }
    ]
  },
  methods: {
    addStudent: function() {
        let element = this.students[this.students.length - 1];
            let auto = element.id + 1;
            return this.students.push({ id: auto, name: this.name, course: this.course, acceptancePeriod: this.acceptancePeriod })
    }
  }
})
