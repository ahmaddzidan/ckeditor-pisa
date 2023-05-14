// app.js

// import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js";
import GeneralHtmlSupport from "@ckeditor/ckeditor5-html-support/src/generalhtmlsupport.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting.js";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript.js";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableCaption from "@ckeditor/ckeditor5-table/src/tablecaption.js";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount.js";
import Math from "@isaul32/ckeditor5-math/src/math";
import AutoformatMath from "@isaul32/ckeditor5-math/src/autoformatmath";
import Font from "@ckeditor/ckeditor5-font/src/font";

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Alignment,
  Autoformat,
  BlockQuote,
  Bold,
  Essentials,
  FindAndReplace,
  GeneralHtmlSupport,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResize,
  ImageInsert,
  Indent,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SourceEditing,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableProperties,
  TableToolbar,
  TextTransformation,
  WordCount,
  Math,
  Font,
  AutoformatMath,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "fontSize",
      "|",
      "bold",
      "italic",
      "link",
      "subscript",
      "superscript",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "alignment",
      "|",
      "imageUpload",
      "removeFormat",
      "blockQuote",
      "insertTable",
      "math",
      "findAndReplace",
      "sourceEditing",
      "undo",
      "redo",
    ],
  },
  language: "en",
  image: {
    resizeUnit: "%",
    resizeOptions: [
      {
        name: "resizeImage:original",
        label: "Original",
        value: null,
      },
      {
        name: "resizeImage:20",
        label: "25%",
        value: "25",
      },
      {
        name: "resizeImage:40",
        label: "50%",
        value: "50",
      },
      {
        name: "resizeImage:60",
        label: "75%",
        value: "75",
      },
    ],
    toolbar: [
      "imageStyle:inline",
      "imageStyle:wrapText",
      "imageStyle:breakText",
      "resizeImage",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
    ],
  },
};

window.ClassicEditor = ClassicEditor;
