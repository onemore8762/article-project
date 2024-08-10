import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {BuildPaths} from "./types/config";


export function buildPlugins({html}: BuildPaths): WebpackPluginInstance[] {
    return [
    new HtmlWebpackPlugin({
        template: html
    }),
    new ProgressPlugin()
]
}
