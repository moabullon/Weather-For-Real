let $ = require('jquery')

$.getJSON('http://tiy-orl-proxy.herokuapp.com/darksky/forecast/a1162a6e17388ad8c842671dbb31554e/28.541303,-81.381219')
.then(function (response){

  var temp = response.currently.temperature
  var status = response.currently.summary

  $("#now").html(temp)
  $("#description").html(status)
  $("#display").css("background-color", color(temp))

    })
    function color(temp) {
        if (temp > 80) {
            return 'red'
        } else if (temp < 80 && temp > 60) {
            return 'orange'
        } else if (temp < 60) {
            return 'blue'
        }
    }

