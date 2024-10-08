import path from 'path'
import {Configuration} from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

export default (env: BuildEnv): Configuration => {

    const paths: BuildPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        src: path.resolve(__dirname, 'src')
    }
    const mode = env.mode || 'development'
    const port = env.port || 3000
    const isDev = mode === 'development'

    const config: Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    })
    return config
}
