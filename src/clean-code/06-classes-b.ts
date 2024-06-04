(() => {
  
  type Gender = "M" | "F";

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastAccess: Date;
    name: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;
    constructor({
      email,
      role,
      lastAccess,
      name,
      gender,
      birthdate,
    }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.role = role;
      this.lastAccess = lastAccess;
    }

    checkCredential() {
      return true;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastAccess: Date;
    lastOpenedFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public lastOpenedFolder: string;
    public workingDirectory: string;

    constructor({
      birthdate,
      email,
      gender,
      lastAccess,
      lastOpenedFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ email, role, lastAccess, name, gender, birthdate });
      this.lastOpenedFolder = lastOpenedFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const userSettings = new UserSettings({
    lastOpenedFolder: "/home/user/folder",
    workingDirectory: "/home/user",
    birthdate: new Date("1990-01-01"),
    email: "gustavo@mail.com",
    gender: "M",
    lastAccess: new Date(),
    name: "Gustavo",
    role: "admin",
  });

  userSettings.checkCredential();
  console.log({ userSettings });

})();
