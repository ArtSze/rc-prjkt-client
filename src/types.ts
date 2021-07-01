export interface IUserString {
    first_name: string;
    last_name: string;
}

export interface IProject {
    title: string;
    description: string;
    githubLink: string;
    owner: IUserString;
    collaborators: IUserString[];
    tags: ITag[];
    active: boolean;
}

export enum ETagCategories {
    Category = 'category',
    Language = 'language',
    Library = 'library',
    CollaborationStyle = 'collaboration style',
}

export interface ITag {
    category: ETagCategories;
    value: string;
}
