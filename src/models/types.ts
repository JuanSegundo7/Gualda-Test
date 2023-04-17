export interface States {
    Films: Films[]
    Characters: Characters[]
    CharactersCopy: Characters[]
    CharactersError: string
}

export interface Films {
    title: string,
    episode_id: number,
    director: string,
    characters: Characters[]
}

export interface Characters {
    name: string,
    eye_color: string,
    gender: string
}

export interface DropdownInfo {
    name: string
    array: string[]
}

export interface AnchorClickEvent extends React.MouseEvent<HTMLAnchorElement> {
    target: HTMLAnchorElement & { dataset: { value: string } };
}
  