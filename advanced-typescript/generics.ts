interface Container<Type> {
  title: string;
  contents: Type,
  get: () => Type
}

const numContainer: Container<number> = {
  title: 'number container',
  contents: 7,
  get: () => 20
};

const stringContainer: Container<string> = {
  title: 'string container',
  contents: 'hello',
  get: () => 'goodbye'
};
