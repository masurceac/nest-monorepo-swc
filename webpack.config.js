const swcDefaultConfig =
  require('@nestjs/cli/lib/compiler/defaults/swc-defaults').swcDefaultsFactory()
    .swcOptions;

// When the config is loaded, this line should close the app.
// However, this doesn't happen when using require from above.
process.exit(1);

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: swcDefaultConfig,
        },
      },
    ],
  },
};
