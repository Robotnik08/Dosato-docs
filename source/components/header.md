<head>
    <title>{$main_title}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>html{visibility: hidden;opacity:0;}</style>
    {$styles}
    {$scripts}
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            Prism.highlightAll();
        });
    </script>
    <link rel="shortcut icon" type="image/x-icon" href="{$favicon}">
</head>