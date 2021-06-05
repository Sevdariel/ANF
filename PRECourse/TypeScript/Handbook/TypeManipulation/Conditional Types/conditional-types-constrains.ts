// type MessageOf<T> = T["message"];
// Type '"message"' cannot be used to index type 'T'.

type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
    message: string;
}

interface Dog {
    bark(): void;
}

type EmailMessageContents = MessageOf<Email>;

type ConstraintMessageOf<T> = T extends { message: unknown } ? T["message"] : never;

type EmailConstraintMessageContents = ConstraintMessageOf<Email>;
type DogConstraintMessageContents = ConstraintMessageOf<Dog>;

type Flatten<T> = T extends any[] ? T[number] : T;

// Extracts out the element type. 
type Str = Flatten<string[]>;

// Leaves the type alone.
type Num = Flatten<number>;