
type Mods = Record<string, string | boolean>


function classNames(cls: string, mods: Mods, additional: string[]): string{
    return [
        cls,
        ...additional,
        ...Object.keys(mods).filter((key) => mods[key])
    ].join(' ')
}

export {
    classNames as cn
}
