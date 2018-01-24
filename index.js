const Fontmin = require("fontmin");
const loaderUtils = require("loader-utils");

module.exports = async function(font) {
  const callback = this.async();
  const options = loaderUtils.getOptions(this) || {};

  const fontmin = new Fontmin().src(font);

  if (options.otf) {
    fontmin.use(Fontmin.otf2ttf());
  }

  if (options.text) {
    fontmin.use(
      Fontmin.glyph({
        text: options.text,
        hinting: false
      })
    );
  }
  fontmin.use(Fontmin.ttf2woff());

  const fonts = await new Promise((resolve, reject) => {
    fontmin.run((err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });

  const woff = fonts.find(font => {
    font.extname === ".woff";
  });

  callback(null, woff ? woff.contents : fonts[0].contents);
};

module.exports.raw = true;
