export default {
  // Define input files to scan
  input: [
    'src/**/*.{js,jsx,ts,tsx}',
    // Exclude test files and node_modules
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],

  // Define output directory for translation files
  output: 'dump/locales/$LOCALE/$NAMESPACE.json',

  // Supported languages
  locales: ['en'],

  // Default namespace used in your i18next config
  defaultNamespace: 'translation',

  // Key separator used in your translation keys
  keySeparator: '.',

  // Namespace separator
  namespaceSeparator: ':',

  // Supported file extensions
  lexers: {
    js: ['JsxLexer'],
    jsx: ['JsxLexer'],
    ts: ['JsxLexer'],
    tsx: ['JsxLexer'],
    default: ['JsxLexer'],
  },

  // Output format options
  lineEnding: 'auto',
  indentation: 2,

  // Keep keys in order
  sort: true,

  // Create file even if no keys are found
  createOldCatalogs: true,

  // Default value for missing translations
  defaultValue: '',

  // Custom marker to catch dynamic keys
  contextSeparator: '_',

  // Add comments in translation files
  keepRemoved: true,

  // Add location info about where the key is used
  addUsage: true,

  // React specific options
  attr: {
    list: ['i18nKey', 't'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  // Functions that will be searched for translation keys
  func: {
    list: ['t', 'i18next.t', 'i18n.t', 'translate'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  // Trans component specific options
  trans: {
    component: 'Trans',
    i18nKey: 'i18nKey',
    defaultsKey: 'defaults',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    fallbackKey: (ns, value) => value,
  },

  // Plural suffix
  pluralSeparator: '_plural',

  // Write a fallback file for the source language
  failOnWarnings: false,

  // Don't fail if a namespace cannot be found
  failOnUpdate: false,

  // Automatically add new keys to translation files
  add: true,

  // Don't remove obsolete keys from translation files
  removeUnusedKeys: false,
};
