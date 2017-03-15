module.exports = {
    entry: "./src/app/app.tsx",

    output: {
        filename: "bundle.js",
        path: __dirname + "/src",
    },

    resolve: {
        extensions: ['.js', '.tsx']
    },

    module: {
        loaders: [
          {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              loaders: ["ts-loader"]
          }
        ]
    }
};