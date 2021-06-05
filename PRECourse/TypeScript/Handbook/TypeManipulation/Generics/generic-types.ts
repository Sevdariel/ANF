function genericTypesIdentity<Type>(arg: Type): Type {
    return arg;
}

let myIdentity: <Type>(arg: Type) => Type = genericTypesIdentity;

let myIdentityInput: <Input>(arg: Input) => Input = genericTypesIdentity;

let myIdentityCallSignature: { <Type>(arg: Type): Type } = genericTypesIdentity;

// interface GenericIdentityFn {
//     <Type>(arg: Type): Type;
// }
// let myIdentityInterface: GenericIdentityFn = genericTypesIdentity;
interface GenericIdentityFn<Type> {
    (arg: Type): Type;
}

let myIdentityInterface: GenericIdentityFn<number> = genericTypesIdentity;