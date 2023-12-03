Prism.languages['dosato'] = {
    'comment': /\/\/.*/,
    'string': /(["'])(?:(?!\1)[^\\]|\\.)*\1/,
    'keyword': /\b(?:DO|SET|MAKE|WHEN|ELSE|WHILE|CATCH|THEN|INTO)\b/,
    'type_identifier': /\b(?:INT|SHORT|BYTE|LONG|UINT|USHORT|UBYTE|ULONG|DOUBLE|FLOAT|STRING|CHAR|BOOL|ARRAY|FUNC|VOID)\b/,
    'variable': /\b(?:[a-zA-Z_]\w*)\b/,
    'number': /\b(?:\d+(?:\.\d*)?|\.\d+)(?:F)?\b/,
    'operator': /[-+*\/=<>!%?^|&]+/,
    'punctuation': /[{}[\];(),.:]/
};

Prism.hooks.add('before-highlight', function (env) {
    if (env.language !== 'dosato') {
        return;
    }

    // Do any preprocessing if needed
});

Prism.hooks.add('complete', function (env) {
    if (env.language !== 'dosato') {
        return;
    }

    // Do any post-processing if needed
});