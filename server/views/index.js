module.exports = function renderFullPage(initialState) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />

      <title>FRANKIE CRICKET</title>
      <meta name="description" content="Tjio." />

      <!-- Schema.org markup for Google+ -->
      <meta itemprop="name" content="Frankie Cricket">
      <meta itemprop="description" content="Cross-platform music player for SoundCloud and YouTube.">
      <meta itemprop="image" content="http://i.imgur.com/DB7mtAG.png">

      <!-- Twitter Card data -->
      <meta name="twitter:card" content="product">
      <meta name="twitter:title" content="Frankie Cricket">
      <meta name="twitter:description" content="Cross-platform music player for SoundCloud and YouTube.">
      <meta name="twitter:image" content="http://i.imgur.com/DB7mtAG.png">

      <!-- Open Graph data -->
      <meta property="og:title" content="Cross-platform music player for SoundCloud and YouTube. " />
      <meta property="og:url" content="http://www.frankiecricket.com/" />
      <meta property="og:image" content="http://i.imgur.com/DB7mtAG.png" />
      <meta property="og:description" content="More music, more fun. Build playlists using SoundCloud AND YouTube." />
      <meta property="og:site_name" content="Frankie Cricket" />

      <link rel="stylesheet" href="./styles/styles.css" charset="utf-8">
      <link rel="stylesheet" href="./styles/simple-grid.css" charset="utf-8">

      <link href='https://fonts.googleapis.com/css?family=Inconsolata:400,700' rel='stylesheet' type='text/css'>
    </head>
    <body>
      <div id="app"></div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
      </script>
      <script src="./dist/bundle.js" async></script>
    </body>
  </html>
  `
};
