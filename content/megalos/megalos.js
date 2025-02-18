const DIE_LABELS = ["Top Left", "Top Right", "Bottom Left", "Bottom Right"];

function intializeHtml() {
  // The left side column, holding the grid
  const leftColumn = $(`<div class="column is-narrow" />`);
  for (let row = 0; row < 4; row++) {
    let rowHtml = $(`<div class="columns is-mobile" />`);
    for (let col = 0; col < 4; col++) {
      rowHtml.append(
        $(
          `<div class="column is-narrow" id="aoe-4x4-r${row + 1}c${
            col + 1
          }"></div>`
        )
      );
    }
    leftColumn.append(rowHtml);
  }

  // PICOFLAG

  const diceRow = $(`<div class="columns" />`);
  for (let i = 0; i < 4; i++) {
    diceRow.append(
      $(`
<div class="column">
  <div class="field">
      <label class="label">${DIE_LABELS[i]}</label>
      <div class="control">
          <div class="select">
              <select id="aoe-4x4-d${i + 1}" class="aoe-4x4-die" value="R">
                  <option value="R">(Roll Randomly)</option>
                  <option value="0">(Blank)</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6H">6 (Horizontal)</option>
                  <option value="6V">6 (Vertical)</option>
              </select>
          </div>
      </div>
  </div>
</div>
    `)
    );
  }

  const buttonRow = $(`
<div class="columns">
  <div class="column is-narrow">
    <button class="is-primary button" id="aoe-4x4-roll">Roll</button>
    <button class="is-warning button" id="aoe-4x4-reset">Reset</button>
  </div>
  <div class="column">
    <div class="content">
      <p>
        Dice won't randomize when you click "Roll" unless set to "(Roll Randomly)".
        This lets you designate some values as blank, or to specify values for some dice.
        Click "Reset" to clear the map and set all dice to be random.
      </p>
    </div>
  </div>
</div>
  `);

  const rightColumn = $(`<div class="column" />`).append(diceRow, buttonRow);

  const interactiveTool = $(`<div class="columns" />`).append(
    leftColumn,
    rightColumn
  );

  $("#interactive-tool-root").append(interactiveTool);
}

function initializeGrid() {
  for (let rows = 1; rows < 5; rows++) {
    for (let cols = 1; cols < 5; cols++) {
      id = `#aoe-4x4-r${rows}c${cols}`;
      $(id).html("&#x25A2;");
    }
  }
}

function pointsForDie(dieValue, quadrant) {
  let q;
  switch (dieValue) {
    case "1":
      return [[0, 0]];
    case "2":
      q = [
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1],
      ][quadrant];
      return [[0, 0], q];
    case "3":
      return quadrant == 1 || quadrant == 2
        ? [
            [0, 0],
            [-1, -1],
            [1, 1],
          ]
        : [
            [0, 0],
            [-1, 1],
            [1, -1],
          ];
    case "4":
      return [
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1],
      ];
    case "5":
      return [
        [0, 0],
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1],
      ];
    case "6H":
      return [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ];
    case "6V":
      return [
        [-1, -1],
        [0, -1],
        [1, -1],
        [-1, 1],
        [0, 1],
        [1, 1],
      ];
    default:
      return [];
  }
}

function setupGrid() {
  for (let i = 0; i < 4; i++) {
    let dieValue = $(`#aoe-4x4-d${i + 1}`).val();
    let points = pointsForDie(dieValue, i);
    for (let point of points) {
      let row = 2 + point[0] + (i < 2 ? 0 : 1);
      let col = 2 + point[1] + (i % 2 ? 1 : 0);
      let id = `#aoe-4x4-r${row}c${col}`;
      $(id).html("&#x25A3;");
    }
  }
}

function randomValue() {
  const value = Math.floor(Math.random() * 6) + 1;
  if (value == 6) {
    const hv = Math.floor(Math.random() * 2);
    return `6${hv ? "V" : "H"}`;
  } else {
    return `${value}`;
  }
}

$(function () {
  intializeHtml();
  initializeGrid();

  $(".aoe-4x4-die").on("change", function () {
    initializeGrid();
    setupGrid();
  });

  $("#aoe-4x4-roll").on("click", function () {
    initializeGrid();
    if ($("#aoe-4x4-d1").val() == "R") {
      $("#aoe-4x4-d1").val(randomValue());
    }
    if ($("#aoe-4x4-d2").val() == "R") {
      $("#aoe-4x4-d2").val(randomValue());
    }
    if ($("#aoe-4x4-d3").val() == "R") {
      $("#aoe-4x4-d3").val(randomValue());
    }
    if ($("#aoe-4x4-d4").val() == "R") {
      $("#aoe-4x4-d4").val(randomValue());
    }
    setupGrid();
  });

  $("#aoe-4x4-reset").on("click", function () {
    initializeGrid();
    $(".aoe-4x4-die").val("R");
  });
});
