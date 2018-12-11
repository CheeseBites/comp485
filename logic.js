addEventListenerToallDivElements();

function changeImage(id, xcoordinate, ycoordinate) {
  if (mouseupindicator == 0) {
    if (password.indexOf(id) == -1) {
      document.getElementById(
        id
      ).style.backgroundImage = selectedBullet;
      password.push(id);
      drawLine(xcoordinate, ycoordinate, prevX, prevY);
      prevX = xcoordinate;
      prevY = ycoordinate;
    }
  }
}

function drawLowPo(
  xPasswed,
  yPassed,
  prevX,
  prevY
) {
  drawGenLow(
    prevY,
    xPassed,
    prevX,
    "lowSlopePositive"
  );
}

function drawLowNeg(
  xPassed,
  xPassed,
  prevX,
  prevY
) {
  drawGenLow(
    prevY,
    yPassed,
    prevX,
    "lowSlopeNegative"
  );
}

function drawGenLow(
  prevY,
  yPassed,
  prevX,
  newElementClassName
) {
  var div = document.createElement("div");
  div.className = newElementClassName;
  div.style.left = 163;
  document.getElementById("mainElement").appendChild(div);
  var divTopValueOneForLowSloppedLines =
    -13 +
    110 * (previousXPassed - 1 >= 0 ? previousXPassed - 1 : previousXPassed);
  var divTopValueTwoForLowSloppedLines =
    -13 + 110 * (previousXPassed >= 0 ? previousXPassed : 0);

  if (previousYPassed < yCoordinatePassed) {
    div.style.top =
      newElementClassName === "lowSlopePositive"
        ? divTopValueOneForLowSloppedLines
        : divTopValueTwoForLowSloppedLines;
  } else {
    div.style.top =
      newElementClassName === "lowSlopeNegative"
        ? divTopValueOneForLowSloppedLines
        : divTopValueTwoForLowSloppedLines;
  }
}

function drawHighNeg(
  xPassed,
  yPassed,
  prevX,
  prevY
) {
  drawGenHigh(
    prevX,
    xPassed,
    prevY,
    "highSlopeNegative"
  );
}

function drawHighPos(
  xPassed,
  yPassed,
  prevX,
  prevY
) {
  drawGenHigh(
    prevX,
    xPassed,
    prevY,
    "highSlopePositive"
  );
}

function drawGenHigh(
  prevX,
  xPassed,
  prevY,
  newElementClassName
) {
  var div = document.createElement("div");
  div.className = newElementClassName;
  div.style.top = 43;
  document.getElementById("mainElement").appendChild(div);
  var divTopOne =
    109 +
    110 * (prevY - 1 >= 0 ? prevY - 1 : prevY);
  var divTopTwo =
    109 + 110 * (prevY >= 0 ? prevY : 0);
  if (prevX > xPassed) {
    div.style.left =
      newElementClassName == "highSlopePositive"
        ? divTopTwo
        : divTopOne;
  } else {
    div.style.left =
      newElementClassName == "highSlopeNegative"
        ? divTopTwo
        : divTopOne;
  }
}

function drawVerticalLine(
  xDraw,
  yDraw,
  prevXDraw,
  prevYDraw
) {
  drawGenStraight(
    prevXDraw,
    xDraw,
    prevYDraw,
    "vertical"
  );
}

function drawHorizontalLine(
  xDraw,
  yDraw,
  prevXDraw,
  prevYDraw
) {
  drawGenStraight(
    prevYDraw,
    yDraw,
    prevXDraw,
    "horizontal"
  );
}

function drawGenStraight(
  prevXYDraw,
  xyDraw,
  lastP,
  newElementClassName
) {
  var div = document.createElement("div");
  div.className = newElementClassName;
  document.getElementById("mainElement").appendChild(div);
  var isVerticalLine = newElementClassName === "vertical" ? 1 : 0;

  var topStyle = "top";
  var leftStyle = "left";
  var heightStyle = "height";
  var widthStyle = "width";

  if (prevXYDraw < xyDraw) {
    if (isVerticalLine) {
      div.style[topStyle] = 54 + isVerticalLine + 110 * prevXYDraw;
    } else {
      div.style[leftStyle] = 54 + isVerticalLine + 110 * prevXYDraw;
    }
  } else {
    if (Math.abs(prevXYDraw - xyDraw) > 1) {
      if (isVerticalLine) {
        div.style[topStyle] =
          54 + isVerticalLine + 110 * (prevXYDraw - 2);
      } else {
        div.style[leftStyle] =
          54 + isVerticalLine + 110 * (prevXYDraw - 2);
      }
    } else {
      if (isVerticalLine) {
        div.style[topStyle] =
          54 + isVerticalLine + 110 * (prevXYDraw - 1);
      } else {
        div.style[leftStyle] =
          54 + isVerticalLine + 110 * (prevXYDraw - 1);
      }
    }
  }
  if (Math.abs(prevXYDraw - xyDraw) > 1) {
    if (isVerticalLine) {
      div.style[heightStyle] +=
        Math.abs(prevXYDraw - xyDraw) * 110;
    } else {
      div.style[widthStyle] +=
        Math.abs(prevXYDraw - xyDraw) * 110;
    }
  }
  if (isVerticalLine) {
    div.style[leftStyle] = 55 + 110 * lastP;
  } else {
    div.style[topStyle] = 55 + 110 * lastP;
  }
}

function drawPositiveDiagonalLine(
  xDraw,
  yDraw,
  prevXDraw,
  prevYDraw
) {
  createGenDiag(
    xDraw,
    yDraw,
    prevXDraw,
    prevYDraw,
    "positiveDiagonal"
  );
}

function drawNegDiag(
  xDraw,
  yDraw,
  prevXDraw,
  prevYDraw
) {
  createGenDiag(
    xDraw,
    yDraw,
    prevXDraw,
    prevYDraw,
    "negativeDiagonal"
  );
}

function createGenDiag(
  xDraw,
  yDraw,
  prevXDraw,
  prevYDraw,
  newElementClassName
) {
  var isPosDiag = newElementClassName === "positiveDiagonal";
  var div = document.createElement("div");
  div.className = newElementClassName;
  if (yDraw > prevYDraw) {
    div.style.left = 110 + prevYDraw * 110;
    div.style.top =
      32 +
      (isPosDiag ? prevXDraw - 1 : prevXDraw) *
        110;
  } else {
    div.style.left = 110 + (prevYDraw - 1) * 110;
    div.style.top =
      32 +
      (isPosDiag ? prevXDraw : prevXDraw - 1) *
        110;
  }
  if (Math.abs(prevXDraw - xDraw) > 1) {
    div.style.height = 156 * Math.abs(prevXDraw - xDraw);
    div.style.top = 10;
    div.style.left = 165;
  }
  document.getElementById("mainElement").appendChild(div);
}
function drawLine(
  xPassed,
  yPassed,
  prevXPassed,
  prevYPassed
) {
  var cells = document
    .getElementById("mainElement")
    .getElementsByTagName("div");
  if (
    prevXPassed - xPassed ==
    HVL
  ) {
    drawHorizontalLine(
      xPassed,
      yPassed,
      prevXPassed,
      prevYPassed
    );
  }
  //Definitely Vertical line as y coordinate difference is zero
  else if (
    prevYPassed - yPassed ==
    HVL
  ) {
    drawVerticalLine(
      xPassed,
      yPassed,
      prevXPassed,
      prevYPassed
    );
  } else if (
    (prevYPassed - yPassed) / (prevXPassed - xPassed) ==
    -LSL
  ) {
    drawLowPo(
      xPassed,
      yPassed,
      prevXPassed,
      prevYPassed
    );
  } else if (
    (prevYPassed - yPassed) / (prevXPassed - xPassed) ==
    LSL
  ) {
    drawLowNeg(
      xPassed,
      yPassed,
      prevXPassed,
      prevYPassed
    );
  } else if (
    (prevYPassed - yPassed) / (prevXPassed - xPassed) ==
    HSL
  ) {
    drawHighNeg(
      xPassed,
      yPassed,
      prevXPassed,
      prevYPassed
    );
  } else if (
    (prevYPassed - yPassed) / (prevXPassed - xPassed) ==
    -HSL
  ) {
    drawHighPo(
      xPassed,
      yPassed,
      prevXPassed,
      prevYPassed
    );
  }
  else {
    var angle = toDegrees(
      Math.atan2(
        prevYPassed - yPassed,
        prevXPassed - xPassed
      )
    );
    if (
      angle == -diagonalLineS ||
      angle == diagonalLineB
    ) {
      drawPositiveDiagonalLine(
        xPassed,
        yPassed,
        prevXPassed,
        prevYPassed
      );
    } else if (
      angle == -diagonalLineB ||
      angle == diagonalLineS
    ) {
      drawNegDiag(
        xPassed,
        yPassed,
        prevXPassed,
        prevYPassed
      );
    }
  }
}

function toDegrees(radians) {
  return Math.round(radians * (180 / Math.PI));
}
