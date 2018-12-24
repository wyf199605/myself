const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    let isDevelop = argv.mode === 'development';

    // 公用配置
    let config = {

        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",

        watchOptions: {
            aggregateTimeout: 500,
            poll: false,
            ignored: /node_modules/
        },

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                {test: /\.tsx?$/, loader: "awesome-typescript-loader"},

                // 使用file-loader处理图片文件
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: '[path][name].[ext]'
                            }
                        }
                    ],
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
                {
                    test: /\.scss$/,
                    use: [
                        {
                            // 将css文件打包成一个文件
                            loader: MiniCssExtractPlugin.loader
                        },
                        "css-loader",
                        "sass-loader"
                    ],
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].css"
            })
        ],
        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        },
        devServer: {
            contentBase: __dirname,
            compress: true,
            port: 9000,
            index: 'index.html',
            disableHostCheck: true, // 为true时绕过主机检查。
            historyApiFallback: true // 解决刷新页面出现Cannot GET /page的错误
        }
    };

    // 设置各自出入口配置
    return [
        {
            entry: {
                build: "./src/app.tsx"
            },
            output: {
                filename: "[name].js",
                path: __dirname + "/dist"
            }
        },
        {
            entry: {
                test: "./src/test.tsx"
            },
            output: {
                filename: "[name].js",
                path: __dirname + "/test"
            }
        }
    ].map(obj => Object.assign(obj, config));
};
