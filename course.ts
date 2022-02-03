export class Course {
    static find(arg0: (courseIterator: Course) => boolean): Course {
        throw new Error("Method not implemented.");
    }
    id!: number;
    name!: string;
    imageUrl!: string;
    price!: number;
    code!: string;
    duration!: number;
    rating!: number;
    releaseDate!: string;
    description!: string;

}