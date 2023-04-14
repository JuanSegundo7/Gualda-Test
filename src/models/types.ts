export interface States {
    Films: Films[]
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