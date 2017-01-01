module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['> 3% in JP']
    }),
    require('postcss-csso')()
  ]
};