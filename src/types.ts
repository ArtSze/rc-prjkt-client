import { ObjectId } from 'mongoose';

export interface ICollaborator {
    _id: ObjectId;
    first_name: string;
    last_name: string;
}

export interface IOwner extends ICollaborator {
    rcId: number;
    zulip_id: number;
    image_path: string;
    batch: string;
    batchEndDate: Date;
}

export interface IProject {
    _id: ObjectId;
    title: string;
    description: string;
    githubLink: string;
    owner: IOwner;
    collaborators: ICollaborator[];
    tags: ITag[];
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export enum ETagCategories {
    Category = 'category',
    Language = 'language',
    Library = 'library',
    CollaborationStyle = 'collaboration style',
}

export interface ITag {
    _id: ObjectId;
    value: string;
}
