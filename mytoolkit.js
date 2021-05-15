// File name: mytoolkit.js

import { SVG } from './svg.min.js';

var MyToolkit = (function () {
  var draw = SVG().addTo('body').size('1400px', '1400px');
  // Button Widget
  var Button = function () {
    var btnDraw = SVG().addTo(draw).size('1000px', '1000px');

    var btnGroup = btnDraw.group();
    var button = btnGroup
      .rect(100, 40)
      .fill('#838BC2')
      .stroke('#808080')
      .radius(10);

    var text = btnGroup.text('').move(16, 6);

    var clickEvent = null;

    button.mouseover(function () {
      this.fill({ color: '#D8CEE6' });
    });
    button.mouseout(function () {
      this.fill({ color: '#838BC2' });
    });

    button.click(function (event) {
      this.fill({ color: '#424651' });
      if (clickEvent != null) clickEvent(event);
    });

    // custom functions?
    return {
      move: function (x, y) {
        btnGroup.move(x, y);
      },
      onclick: function (eventHandler) {
        clickEvent = eventHandler;
      },
      text: function (textInput) {
        text.text(textInput);
        // Button Text style
        text.font({ fill: 'white', family: 'Itim' });
      },
    };
  };

  // Checkbox Widget
  var CheckBox = function () {
    var checkboxDraw = SVG().addTo(draw).size('1000px', '1000px');
    var checkboxGroup = checkboxDraw.group();

    var checkbox = checkboxGroup
      .rect(30, 30)
      .fill('white')
      .stroke('#708090')
      .radius(2);

    var checkRect = checkboxGroup
      .rect(20, 20)
      .move(5, 5)
      .fill({ color: 'white' });
    var checkText = checkboxGroup.text('').move(40, 1);
    var clickEvent = null;

    checkbox.click(function (event) {
      if (clickEvent != null) clickEvent(event);
    });
    checkRect.click(function (event) {
      if (event.target.attributes[4].value === '#b3b3e6') {
        checkRect.fill({ color: 'white' });
      } else if (event.target.attributes[4].value === 'white') {
        checkRect.fill({ color: '#b3b3e6' });
      }
      if (clickEvent != null) clickEvent(event);
    });

    return {
      onclick: function (eventHandler) {
        clickEvent = eventHandler;
      },
      move: function (x, y) {
        checkboxGroup.move(x, y);
      },
      text: function (checkboxText) {
        checkText.text(checkboxText);
        checkText.font({ fill: 'black', family: 'Itim' });
      },
    };
  };

  // Radio Button Widget
  var RadioButton = function (radioBtnList) {
    var radioButtonDraw = SVG().addTo(draw).size('100%', '100%');
    var radiobuttonGroup = radioButtonDraw.group();

    let yPosition = -30;
    let index = 0;
    let clickEvent = null;

    let radioCircleArr = [];

    for (let i = 0; i < radioBtnList.length; i++) {
      let radiobutton = radiobuttonGroup
        .circle(20)
        .fill('white')
        .stroke('#708090');
      let radioCircle = radiobuttonGroup
        .circle(10)
        .move(5, 5)
        .fill({ color: 'white' })
        .data('number', i);
      let radioText = radiobuttonGroup.text(radioBtnList[i][0]).move(40, 1);
      radioText.font({ family: 'Itim' });

      // move radio button
      radiobuttonGroup.move(0, yPosition);
      yPosition -= 30;
      if (radioBtnList[i][1] === true) {
        radioCircle.fill('black');
        index = i;
      }
      radioCircleArr.push(radioCircle);
    }

    radioCircleArr.forEach((circle, index) => {
      // console.log(circle.data('number'));
      circle.click(function (event) {
        if (event.target.attributes[3].nodeValue === 'black') {
          circle.fill('white');
        } else {
          circle.fill('black');
        }

        radioCircleArr.forEach((circle) => {
          if (index !== circle.data('number')) {
            circle.fill('white');
          }
        });
      });
    });

    return {
      onclick: function (eventHandler) {
        clickEvent = eventHandler;
      },
      move: function (x, y) {
        radiobuttonGroup.move(x, y);
      },
    };
  };
  // Textbox Widget
  var TextBox = function () {
    const textboxDraw = SVG().addTo(draw).size('1000px', '1000px');
    const textDraw = SVG().size(123, 25);

    const textboxGroup = textboxDraw.group();
    textDraw.addTo(textboxGroup);

    let textbox = textboxGroup
      .rect(130, 25)
      .fill({ color: 'white', opacity: 0.1 })
      .stroke('black')
      .radius(1);

    let inputText = textDraw.text('').move(4, -4).font({ family: 'Itim' });
    let textCaret = textDraw.rect(1, 15.5).move(2, 2.5);
    let caretRunner = textCaret.animate().width(0);
    caretRunner.loop(1000, 1, 0);

    let regex = /[A-Za-z0-9]/g;
    SVG.on(window, 'keyup', (event) => {
      if (event.key.match(regex) === null) {
        inputText.text(inputText.text() + ' ');
        textCaret.x(inputText.length() + 4);
      } else {
        if (event.key.match(regex).length === 1) {
          inputText.text(inputText.text() + event.key);
          textCaret.x(inputText.length() + 5);
        }
      }
    });
    return {
      move: function (x, y) {
        textboxGroup.move(x, y);
      },
      text: function (textInput) {},
    };
  };
  var ScrollBar = function () {};

  // ProgressBar Widget
  var ProgressBar = function () {
    let progressbarDraw = SVG().addTo(draw).size('1000px', '1000px');
    let progressChanging = SVG().size(300, 25);

    const progressbarGroup = progressbarDraw.group();
    progressChanging.addTo(progressbarGroup);

    let innerProgress = progressChanging;

    let progressbar = progressbarGroup
      .rect(300, 25)
      .fill({ color: 'white', opacity: '0.1' })
      .stroke('#838BC2')
      .radius(2);

    return {
      move: function (x, y) {
        progressbarGroup.move(x, y);
      },
      updateProgress: function (progressPercent) {
        const wholeLength = 300;

        innerProgress
          .rect(wholeLength * (progressPercent / 100), 25)
          .fill('#838bc2')
          .radius(2);
      },
    };
  };

  const ChangeButton = function () {
    const changeButtonDraw = SVG().addTo(draw).size('1000px', '1000px');
    const changeButtonGroup = changeButtonDraw.group();

    const plusDraw = SVG();
    let minusBtn = changeButtonGroup
      .rect(40, 40)
      .fill('white')
      .stroke({ color: '#838bc2', width: 4 })
      .radius(2)
      .data('changer', 'minus');

    let plusBtn = changeButtonGroup
      .rect(40, 40)
      .fill('#838bc2')
      .stroke({ color: '#838bc2', width: 4 })
      .radius(2)
      .data('changer', 'plus')
      .move(40, 0);

    let minus = changeButtonGroup
      .line(0, 0, 20, 0)
      .stroke({ color: '#838bc2', width: 7, linecap: 'round' })
      .move(9, 20);
    let plus = plusDraw.group();
    // plus.addTo(changeButtonGroup);
    plus
      .line(0, 0, 20, 0)
      .stroke({ color: 'white', width: 7, linecap: 'round' })
      .move(-20, 40);
    plus
      .line(0, 20, 0, 0)
      .stroke({ color: 'white', width: 7, linecap: 'round' })
      .move(-10, 30);

    plus.addTo(changeButtonGroup).move(49, 10);

    let changingText = '0';
    let numText = changeButtonGroup
      .text(changingText)
      .move(33, -55)
      .font({ family: 'Itim', size: 37, color: '#424651' });

    return {
      move: function (x, y) {
        changeButtonGroup.move(x, y);
      },
    };
  };
  return {
    Button,
    CheckBox,
    RadioButton,
    TextBox,
    ScrollBar,
    ProgressBar,
    ChangeButton,
  };
})();

export { MyToolkit };
