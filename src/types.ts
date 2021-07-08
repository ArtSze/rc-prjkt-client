export interface IUserString {
    first_name: string;
    last_name: string;
}

export interface IProject {
    _id: string;
    title: string;
    description: string;
    githubLink: string;
    owner: IUserString;
    collaborators: IUserString[];
    tags: ITag[];
    active: boolean;
}

export interface ITag {
    value: string;
}

export interface IOption<T> {
    value: T;
    label: string;
}

export type ITagOptions = Array<IOption<ITag>>;
export type IUserOptions = Array<IOption<IUser>>;

export interface IUser {
    rcId: number;
    first_name: string;
    last_name: string;
    zulip_id: number;
    image_path: string;
    batchEndDate: Date;
    batch: string;
    ownedProjects: Array<IProject>;
    collabProjects: Array<IProject>;
}
