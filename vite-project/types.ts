export type Movie = {
    id: number;
    name: string;
    title?: string;
    poster_path?: string;
};

export type MovieListProps = {
    movies: Movie[];
};