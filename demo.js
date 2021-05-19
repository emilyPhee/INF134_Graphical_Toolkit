// File name: demo.js

import { MyToolkit } from './mytoolkit.js';
import { SVG } from './svg.min.js';

SVG.on(document, 'DOMContentLoaded', function () {
  // Implement a MyToolkit Button
  var btn = new MyToolkit.Button();
  btn.move(70, 100);
  btn.onclick(function (e) {
    console.log(e);
  });
  btn.text('BUTTON');

  const checkbox = new MyToolkit.CheckBox();
  checkbox.onclick(function (e) {
    console.log('checkbox', e);
  });
  checkbox.text('Check Box 1');

  let radioButtonInputs = [
    ['radio text 1', true],
    ['radio text 2', false],
    ['radio text 3', false],
  ];

  const radiobutton = new MyToolkit.RadioButton(radioButtonInputs);
  radiobutton.move(70, 170);

  radiobutton.onclick(function (e) {
    console.log('radio button', e);
  });

  const textbox = new MyToolkit.TextBox();
  // textbox.text = '';
  textbox.move(70, 300);

  let w = 400;
  const progressbar = new MyToolkit.ProgressBar(w);
  progressbar.move(300, 300);

  // Input progress as percentage
  // value between 0-100(%)
  progressbar.updateProgress(70);

  const scrollbar = new MyToolkit.ScrollBar();
  scrollbar.move(350, 50);

  const changebutton = new MyToolkit.ChangeButton();
  changebutton.move(300, 400);
});
