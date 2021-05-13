// File name: demo.js

import { MyToolkit } from './mytoolkit.js';
import { SVG } from './svg.min.js';

SVG.on(document, 'DOMContentLoaded', function () {
  // Implement a MyToolkit Button
  var btn = new MyToolkit.Button();
  btn.move(100, 100);
  btn.onclick(function (e) {
    console.log(e);
  });
  btn.text('BUTTON');

  var checkbox = new MyToolkit.CheckBox();
  checkbox.onclick(function (e) {
    console.log('checkbox', e);
  });
  checkbox.text('Check Box 1');

  var radioButtonInputs = [
    ['radio text 1', true],
    ['radio text 2', false],
    ['radio text 3', false],
  ];

  var radiobutton = new MyToolkit.RadioButton(radioButtonInputs);
  radiobutton.move(70, 170);

  // for (let i = 0; i < radioButtonInputs.length; i++) {
  //   var radiobutton = new MyToolkit.RadioButton();
  //   radiobutton.text(radioButtonInputs[i]p)
  // }
  radiobutton.onclick(function (e) {
    console.log('radio button', e);
  });

  // var textbox = new MyToolkit.TextBox();
});
