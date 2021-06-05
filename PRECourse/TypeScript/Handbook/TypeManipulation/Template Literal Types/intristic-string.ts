type GreetingIntristic = "Hello, world";
type ShoutyGreeting = Uppercase<GreetingIntristic>;
type QuietGreeting = Lowercase<GreetingIntristic>;

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<"my_app">;

type ASCIICacheKeyLower<Str extends string> = `id-${Lowercase<Str>}`;
type MainIDLower = ASCIICacheKeyLower<"MY_APP">;

type LowerCaseGreeting = "hello, world";
type GreetingCapitalized = Capitalize<LowerCaseGreeting>;

type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;