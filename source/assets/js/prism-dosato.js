Prism.languages['dosato'] = {
    'comment': /\/\/.*|\/\*[\s\S]*?\*\//,
    'string': /(["'`])(?:(?!\1)[^\\]|\\.)*\1/,
    'keyword': /\b(?:do|set|make|when|else|while|for|if|catch|then|define|import|include|continue|break|return|switch|const|other|in|class|implement|unless|until|enum|inherit|match)\b/i,
    'type_identifier': /\b(?:int|short|byte|long|uint|ushort|ubyte|ulong|double|float|string|char|bool|array|void|var|object|function|self)\b/i,
    'boolean': /\b(?:true|false)\b/i,
    'null': /\bnull\b/i,
    'function': /\b(?:[a-zA-Z_]\w*)\s*(?=\()/,
    'variable': /\b(?:[a-zA-Z_]\w*)\b/,
    'number': /\b(?:\d+(?:\.\d*)?|\.\d+)(?:F)?\b/,
    'octal': /\b0o[0-7]+\b/i,
    'hex': /\b0x[\da-f]+\b/i,
    'binary': /\b0b[01]+\b/i,
    'operator': /[-+*\/=<>!%?^|&]+/,
    'punctuation': /[{}[\];(),]/
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