module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-scopify')('.edavisualiser-root'),
    process.env.NODE_ENV === 'production' &&
      process.env.MINIFY_STYLES === 'true' &&
      require('cssnano')({
        preset: 'default',
      }),
  ],
};
