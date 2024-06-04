(() => {
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredential() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenedFolder: string,
      email: string,
      role: string,
      lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, lastAccess, name, gender, birthdate);
    }
  }
  const userSettings = new UserSettings(
    '/home/user',
    '/home/user/folder',
    'gustavo@mail.com',
    'admin',
    new Date(),
    'Gustavo',
    'M',
    new Date('1990-01-01')
  );
  console.log( { userSettings });
})();
