/**
 * @OnlyCurrentDoc
 * Google Docs Screenplay Helper – Main Script
 */

/* ============================================================================
   MENU AND SIDEBAR
============================================================================ */

/** Adds "Screenplay Helper" menu to the document */
function onOpen() {
  DocumentApp.getUi()
    .createMenu('Screenplay Helper')
    .addItem('Show Sidebar', 'showSidebar')
    .addToUi();
}

/** Shows the custom sidebar */
function showSidebar() {
  var template = HtmlService.createTemplateFromFile('Sidebar');
  var html = template.evaluate().setTitle('Screenplay Helper');
  DocumentApp.getUi().showSidebar(html);
}

/** Allows including CSS/JS partials in HTML */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/* ============================================================================
   SCRIPT FORMATTING AND INSERTION
============================================================================ */

/** Formats the entire script: sets font, size, and indents for all paragraphs */
function formatScript() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  body.setFontSize(12);
  body.setFontFamily("Courier New");
  var numParagraphs = body.getNumChildren();
  for (var i = 0; i < numParagraphs; i++) {
    var element = body.getChild(i);
    if (element.getType() === DocumentApp.ElementType.PARAGRAPH) {
      var paragraph = element.asParagraph();
      paragraph.setIndentStart(36);
      paragraph.setIndentFirstLine(36);
      paragraph.setIndentEnd(0);
      paragraph.setLineSpacing(1.0);
      paragraph.setSpacingAfter(0);
    }
  }
}

/** Inserts an intertitle at 72pt indent, all caps, with cursor on second new blank line */
function insertIntertitle(text) {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var cursor = doc.getCursor();
  if (!cursor) {
    DocumentApp.getUi().alert('Place your cursor where you want to insert.');
    return;
  }

  var intertitleText = "INTERTITLE: " + (text || "").toUpperCase();
  var newText = cursor.insertText(intertitleText);
  if (!newText) {
    DocumentApp.getUi().alert('Could not insert text at cursor.');
    return;
  }
  var paragraph = newText.getParent().asParagraph();
    paragraph.setFontFamily('Courier New');
    paragraph.setFontSize(12);
    paragraph.setSpacingBefore(0);
    paragraph.setSpacingAfter(0);
    paragraph.setIndentStart(36);
    paragraph.setIndentFirstLine(36);
    paragraph.setIndentEnd(0);
    paragraph.setAlignment(DocumentApp.HorizontalAlignment.LEFT);

  var idx = body.getChildIndex(paragraph);

  var blankPara1 = body.insertParagraph(idx + 1, "");
    blankPara1.setFontFamily('Courier New');
    blankPara1.setFontSize(12);
    blankPara1.setSpacingBefore(0);
    blankPara1.setSpacingAfter(0);
    blankPara1.setIndentStart(36);
    blankPara1.setIndentFirstLine(36);
    blankPara1.setIndentEnd(0);
    blankPara1.setAlignment(DocumentApp.HorizontalAlignment.LEFT);
  var blankPara2 = body.insertParagraph(idx + 2, "");
    blankPara2.setFontFamily('Courier New');
    blankPara2.setFontSize(12);
    blankPara2.setSpacingBefore(0);
    blankPara2.setSpacingAfter(0);
    blankPara2.setIndentStart(36);
    blankPara2.setIndentFirstLine(36);
    blankPara2.setIndentEnd(0);
    blankPara2.setAlignment(DocumentApp.HorizontalAlignment.LEFT);
  var newPosition = doc.newPosition(blankPara2, 0);
    doc.setCursor(newPosition);
}


/** Inserts a screenplay element (scene, transition, etc.) at the cursor */
function insertScreenplayElement(type, text) {
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  if (!cursor) {
    DocumentApp.getUi().alert('Place your cursor where you want to insert.');
    return;
  }

  var newText = cursor.insertText(text || '');
  var paragraph = newText.getParent().asParagraph();
  var body = doc.getBody();
  var idx = body.getChildIndex(paragraph);

  function insertTwoBlanksAndSetCursor(paragraph, indentStart, indentFirstLine, indentEnd, alignment) {
  var blankPara1 = body.insertParagraph(idx + 1, "");
    blankPara1.setFontFamily('Courier New');
    blankPara1.setFontSize(12);
    blankPara1.setSpacingBefore(0);
    blankPara1.setSpacingAfter(0);
    blankPara1.setIndentStart(indentStart);
    blankPara1.setIndentFirstLine(indentFirstLine);
    blankPara1.setIndentEnd(indentEnd);
    blankPara1.setAlignment(alignment);
  var blankPara2 = body.insertParagraph(idx + 2, "");
    blankPara2.setFontFamily('Courier New');
    blankPara2.setFontSize(12);
    blankPara2.setSpacingBefore(0);
    blankPara2.setSpacingAfter(0);
    blankPara2.setIndentStart(indentStart);
    blankPara2.setIndentFirstLine(indentFirstLine);
    blankPara2.setIndentEnd(indentEnd);
    blankPara2.setAlignment(alignment);
  var newPosition = doc.newPosition(blankPara2, 0);
    doc.setCursor(newPosition);
  }

  switch(type) {
    case 'SCENE':
      paragraph.setHeading(DocumentApp.ParagraphHeading.HEADING1);
      paragraph.setFontFamily('Courier New');
      paragraph.setFontSize(12);
      paragraph.setSpacingBefore(0);
      paragraph.setSpacingAfter(0);
      paragraph.setIndentStart(36);
      paragraph.setIndentFirstLine(36);
      paragraph.setIndentEnd(36);
      paragraph.setAlignment(DocumentApp.HorizontalAlignment.LEFT);
      insertTwoBlanksAndSetCursor(paragraph, 36, 36, 36, DocumentApp.HorizontalAlignment.LEFT);
      return;

    case 'TRANSITION':
      paragraph.setFontFamily('Courier New');
      paragraph.setFontSize(12);
      paragraph.setSpacingBefore(0);
      paragraph.setSpacingAfter(0);
      paragraph.setIndentStart(0);
      paragraph.setIndentFirstLine(0);
      paragraph.setIndentEnd(0);
      paragraph.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
      insertTwoBlanksAndSetCursor(paragraph, 36, 36, 36, DocumentApp.HorizontalAlignment.LEFT);
      return;

    case 'FADE-IN':
      paragraph.setFontFamily('Courier New');
      paragraph.setFontSize(12);
      paragraph.setSpacingBefore(0);
      paragraph.setSpacingAfter(0);
      paragraph.setIndentStart(36);
      paragraph.setIndentFirstLine(36);
      paragraph.setIndentEnd(0);
      paragraph.setAlignment(DocumentApp.HorizontalAlignment.LEFT);
      insertTwoBlanksAndSetCursor(paragraph, 36, 36, 0, DocumentApp.HorizontalAlignment.LEFT);
      return;
  }
}


/** Inserts an actor name at the cursor, uppercased and indented */
function insertActorName(name) {
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  if (!cursor) {
    DocumentApp.getUi().alert('Place your cursor in the document.');
    return;
  }
  var body = doc.getBody();

  var element = cursor.insertText(name.toUpperCase());
  var paragraph = element.getParent().asParagraph();
  paragraph.setIndentStart(216);
  paragraph.setIndentFirstLine(216);
  paragraph.setAlignment(DocumentApp.HorizontalAlignment.LEFT);

  var idx = body.getChildIndex(paragraph);
  var blankPara = body.insertParagraph(idx + 1, "");
  blankPara.setIndentStart(144);
  blankPara.setIndentFirstLine(144);
  blankPara.setIndentEnd(108);
  blankPara.setAlignment(DocumentApp.HorizontalAlignment.LEFT);

  var newPosition = doc.newPosition(blankPara, 0);
  doc.setCursor(newPosition);
  
  return {
    elementIndex: idx + 1,
    offset: 0
  };
}

/* ============================================================================
   TITLE PAGE GENERATION
============================================================================ */

/** Inserts a formatted title page at the beginning of the document */
function insertTitlePage(title, author, contact, date) {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  // Insert 8 blank lines at the top
  for (var i = 0; i < 8; i++) {
    body.appendParagraph("");
  }

  // Insert title
  var titleParagraph = body.appendParagraph(title || 'TITLE');
  titleParagraph
    .setFontSize(36)
    .setBold(true)
    .setAlignment(DocumentApp.HorizontalAlignment.CENTER)
    .setFontFamily('Courier New');

  // Insert "Written by"
  var writtenByParagraph = body.appendParagraph("Written by");
  writtenByParagraph
    .setFontSize(12)
    .setBold(false)
    .setAlignment(DocumentApp.HorizontalAlignment.CENTER)
    .setFontFamily('Courier New');

  // Insert author
  var authorParagraph = body.appendParagraph(author || "");
  authorParagraph
    .setFontSize(18)
    .setBold(false)
    .setAlignment(DocumentApp.HorizontalAlignment.CENTER)
    .setFontFamily('Courier New');

  // Add blank lines to push the date down (adjust number as needed)
  for (var i = 0; i < 18; i++) {
    body.appendParagraph("");
  }

  // Insert contact
  if (contact) {
    var contactParagraph = body.appendParagraph(contact);
    contactParagraph
      .setFontSize(12)
      .setBold(false)
      .setAlignment(DocumentApp.HorizontalAlignment.LEFT)
      .setFontFamily('Courier New');
  }

  // Insert date left-aligned
  if (date) {
    var dateParagraph = body.appendParagraph(date);
    dateParagraph
      .setFontSize(12)
      .setBold(false)
      .setAlignment(DocumentApp.HorizontalAlignment.LEFT)
      .setFontFamily('Courier New');
  }

  // Remove trailing blank paragraphs at the end
  var paras = body.getParagraphs();
  for (var i = paras.length - 1; i >= 0; i--) {
    var text = paras[i].getText();
    if (text === "" && paras[i].getNumChildren() === 1) {
      body.removeChild(paras[i]);
    } else {
      break; // Stop at the first non-blank paragraph from the end
    }
  }
}

/* ============================================================================
   INDENTATION HELPERS
============================================================================ */

/** Applies the correct indent for a given screenplay element type */
function applyIndent(type) {
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  if (!cursor) {
    DocumentApp.getUi().alert('Place your cursor in the element you want to format.');
    return;
  }
  var element = cursor.getElement();
  var paragraph = (element.getType() === DocumentApp.ElementType.PARAGRAPH) 
    ? element.asParagraph() 
    : element.getParent().asParagraph();
  var body = doc.getBody();
  var idx = body.getChildIndex(paragraph);

  paragraph.setFontFamily('Courier New');
  paragraph.setFontSize(12);
  paragraph.setSpacingBefore(0);
  paragraph.setSpacingAfter(0);
  paragraph.setAlignment(DocumentApp.HorizontalAlignment.LEFT);

  var blankIndentStart = null;
  var blankIndentFirstLine = null;
  var blankIndentEnd = null;
  var blankAlignment = paragraph.getAlignment();

switch(type) {
  case 'ACTOR':
    paragraph.setIndentStart(216);
    paragraph.setIndentFirstLine(216);
    paragraph.setIndentEnd(36);
    blankIndentStart = 216;
    blankIndentFirstLine = 216;
    blankIndentEnd = 36;
    break;
  case 'SCENE':
    paragraph.setIndentStart(36);
    paragraph.setIndentFirstLine(36);
    paragraph.setIndentEnd(36);
    blankIndentStart = 36;
    blankIndentFirstLine = 36;
    blankIndentEnd = 36;
    break;
  case 'ACTION':
    paragraph.setIndentStart(36);
    paragraph.setIndentFirstLine(36);
    paragraph.setIndentEnd(36);
    blankIndentStart = 36;
    blankIndentFirstLine = 36;
    blankIndentEnd = 36;
    break;
  case 'PARENTHETICAL':
    paragraph.setIndentStart(180);
    paragraph.setIndentFirstLine(180);
    paragraph.setIndentEnd(180);
    blankIndentStart = 144;
    blankIndentFirstLine = 144;
    blankIndentEnd = 72;
    break;
  case 'DIALOGUE':
    paragraph.setIndentStart(144);
    paragraph.setIndentFirstLine(144); 
    paragraph.setIndentEnd(108);
    blankIndentStart = 144;
    blankIndentFirstLine = 144;
    blankIndentEnd = 108;
    break;
  }
  var blankPara = body.insertParagraph(idx + 1, "");
    blankPara.setFontFamily('Courier New');
    blankPara.setFontSize(12);
    blankPara.setSpacingBefore(0);
    blankPara.setSpacingAfter(0);
    blankPara.setIndentStart(blankIndentStart !== null ? blankIndentStart : paragraph.getIndentStart());
    blankPara.setIndentFirstLine(blankIndentFirstLine !== null ? blankIndentFirstLine : paragraph.getIndentFirstLine());
    blankPara.setIndentEnd(blankIndentEnd !== null ? blankIndentEnd : paragraph.getIndentEnd());
    blankPara.setAlignment(blankAlignment);

  var newPosition = doc.newPosition(blankPara, 0);
    doc.setCursor(newPosition);
}


/* ============================================================================
   SCRIPT BREAKDOWN HIGHLIGHTERS
   (Capitalize and Highlight Selection by Department)
============================================================================ */

/**
 * Capitalizes and highlights selected text for PROPS (brown)
 */
function propsCapitalizeAndBrown() {
  capitalizeAndHighlightSelection('#914815', 'Props');
}

/**
 * Capitalizes and highlights selected text for CAST (red)
 */
function soundCapitalizeAndRed() {
  capitalizeAndHighlightSelection('#ff0404', 'Cast');
}

/**
 * Capitalizes and highlights selected text for SOUND (purple)
 */
function soundCapitalizeAndPurple() {
  capitalizeAndHighlightSelection('#9b59b6', 'Sound FX');
}

/**
 * Capitalizes and highlights selected text for SPECIAL FX (blue)
 */
function specialfxCapitalizeAndBlue() {
  capitalizeAndHighlightSelection('#348aff', 'Special FX');
}

/**
 * Capitalizes and highlights selected text for STUNTS (orange)
 */
function stuntsCapitalizeAndOrange() {
  capitalizeAndHighlightSelection('#e78900', 'Stunts');
}

/**
 * Capitalizes and highlights selected text for VEHICLES & ANIMALS (pink)
 */
function vehiclesandanimalsCapitalizeAndPink() {
  capitalizeAndHighlightSelection('#ff00d4', 'Vehicles & Animals');
}

/**
 * Capitalizes and highlights selected text for WARDROBE (green)
 */
function wardrobeCapitalizeAndGreen() {
  capitalizeAndHighlightSelection('#00b005', 'Wardrobe');
}

/**
 * Utility: Capitalize and highlight selected text with a given color
 */
function capitalizeAndHighlightSelection(color, label) {
  var doc = DocumentApp.getActiveDocument();
  var selection = doc.getSelection();
  if (!selection) {
    DocumentApp.getUi().alert('Please select some text to apply the ' + label + ' effect.');
    return;
  }
  var elements = selection.getRangeElements();
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.getElement().editAsText) {
      var text = element.getElement().editAsText();
      if (element.isPartial()) {
        var start = element.getStartOffset();
        var end = element.getEndOffsetInclusive();
        var selectedText = text.getText().substring(start, end + 1).toUpperCase();
        text.deleteText(start, end);
        text.insertText(start, selectedText);
        text.setBackgroundColor(start, start + selectedText.length - 1, color);
      } else {
        var fullText = text.getText().toUpperCase();
        text.setText(fullText);
        text.setBackgroundColor(color);
      }
    }
  }
}

/** ===== BREAKDOWN SUMMARY GENERATION =====
 * Scans the document for scene headings and highlighted elements, 
 * then returns a summary object by scene and category.
 */
function getBreakdownSummary() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var numParas = body.getNumChildren();

  // Map highlight colors to categories
  var colorCategoryMap = {
    '#914815': 'props',
    '#ff0404': 'cast',
    '#9b59b6': 'sound',
    '#348aff': 'specialfx',
    '#e78900': 'stunts',
    '#ff00d4': 'vehiclesandanimals',
    '#00b005': 'wardrobe'
  };

  var summary = {};
  var currentScene = "UNSPECIFIED SCENE";

  for (var i = 0; i < numParas; i++) {
    var element = body.getChild(i);
    if (element.getType() !== DocumentApp.ElementType.PARAGRAPH) continue;

    var para = element.asParagraph();
    var text = para.getText().trim();

    // Detect scene heading by pattern (INT./EXT.)
    if (text.match(/^(INT\.|EXT\.)/i)) {
      currentScene = text.toUpperCase();
      if (!summary[currentScene]) {
        summary[currentScene] = {
          props: [],
          cast: [],
          sound: [],
          specialfx: [],
          stunts: [],
          vehiclesandanimals: [],
          wardrobe: []
        };
      }
      continue;
    }

    // Check for highlighted text and categorize
    var textElement = para.editAsText();
    var length = text.length;
    var lastCategory = null;
    var buffer = "";

    for (var j = 0; j < length; j++) {
      var bgColor = textElement.getBackgroundColor(j);
      var char = text.charAt(j);
      var category = colorCategoryMap[bgColor] || null;

      if (category) {
        if (lastCategory === category) {
          buffer += char;
        } else {
          // Save previous buffer
          if (buffer && lastCategory && summary[currentScene]) {
            var item = buffer.trim().toUpperCase();
            if (item && summary[currentScene][lastCategory].indexOf(item) === -1) {
              summary[currentScene][lastCategory].push(item);
            }
          }
          buffer = char;
          lastCategory = category;
        }
      } else {
        // Save buffer if we leave a highlighted run
        if (buffer && lastCategory && summary[currentScene]) {
          var item = buffer.trim().toUpperCase();
          if (item && summary[currentScene][lastCategory].indexOf(item) === -1) {
            summary[currentScene][lastCategory].push(item);
          }
        }
        buffer = "";
        lastCategory = null;
      }
    }
    // Save any trailing buffer
    if (buffer && lastCategory && summary[currentScene]) {
      var item = buffer.trim().toUpperCase();
      if (item && summary[currentScene][lastCategory].indexOf(item) === -1) {
        summary[currentScene][lastCategory].push(item);
      }
    }
  }
  return summary;
}

function insertBreakdownSummaryTable() {
  var summary = getBreakdownSummary();
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  body.appendParagraph("Breakdown Summary").setHeading(DocumentApp.ParagraphHeading.HEADING1);

  var table = body.appendTable();
  var headerRow = table.appendTableRow();
  headerRow.appendTableCell('Scene'); 
  headerRow.appendTableCell('Props');
  headerRow.appendTableCell('Cast');
  headerRow.appendTableCell('Sound');
  headerRow.appendTableCell('Special FX');
  headerRow.appendTableCell('Stunts');
  headerRow.appendTableCell('Vehicles & Animals');
  headerRow.appendTableCell('Wardrobe');

  var sceneNumber = 1;  
  for (var scene in summary) {
    var row = table.appendTableRow();

    var numberedScene = sceneNumber + ' ' + scene;

    row.appendTableCell(numberedScene);
    
    row.appendTableCell(summary[scene].props.join(', '));
    row.appendTableCell(summary[scene].cast.join(', '));
    row.appendTableCell(summary[scene].sound.join(', '));
    row.appendTableCell(summary[scene].specialfx.join(', '));
    row.appendTableCell(summary[scene].stunts.join(', '));
    row.appendTableCell(summary[scene].vehiclesandanimals.join(', '));
    row.appendTableCell(summary[scene].wardrobe.join(', '));
    
    sceneNumber++;
  }
}

/* ============================================================================
   PER-DOCUMENT STORAGE: SCENE HEADINGS & ACTORS
============================================================================ */

/** Saves the array of scene headings to this document's properties */
function saveSceneHeadings(headingsArray) {
  var props = PropertiesService.getDocumentProperties();
  props.setProperty('sceneHeadings', JSON.stringify(headingsArray));
}

/** Loads the array of scene headings from this document's properties */
function loadSceneHeadings() {
  var props = PropertiesService.getDocumentProperties();
  var data = props.getProperty('sceneHeadings');
  return data ? JSON.parse(data) : [];
}

/** Saves the array of actors to this document's properties */
function saveActors(actorsArray) {
  PropertiesService.getDocumentProperties()
    .setProperty('actors', JSON.stringify(actorsArray));
}

/** Loads the array of actors from this document's properties */
function loadActors() {
  var data = PropertiesService.getDocumentProperties().getProperty('actors');
  return data ? JSON.parse(data) : [];
}
