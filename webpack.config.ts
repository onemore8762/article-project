import path from 'path'
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";


const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist')
}

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths
})

export default config
