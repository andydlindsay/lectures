interface Container<Type> {
  title: string;
  contents: Type
}

const numContainer: Container<number> = {
  title: 'number container',
  contents: 7
};

const stringContainer: Container<string> = {
  title: 'string container',
  contents: 'hello'
};
