(() => {

  // Aplicando principio de resposabilidade única
  // Priorizando composicion frente a la herencia!

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
    email: string;
    lastAccess: Date;
    role: string;
  }

  class User {
    
    public email: string;
    public role: string;
    public lastAccess: Date;
    
    constructor({
      email,
      role,
      lastAccess
    }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = lastAccess;
    }

    checkCredential() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenedFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenedFolder: string;
    public workingDirectory: string;

    constructor({
      lastOpenedFolder,
      workingDirectory,
    }: SettingsProps) {
      this.lastOpenedFolder = lastOpenedFolder;
      this.workingDirectory = workingDirectory;
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

  class UserSettings {
    
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({name, gender, birthdate, email, role, lastAccess, lastOpenedFolder, workingDirectory}: UserSettingsProps){
      this.person = new Person({name, gender, birthdate});
      this.user = new User({ email, role, lastAccess });
      this.settings = new Settings({lastOpenedFolder, workingDirectory});
    };

    public checkCredential() {
      return this.user.checkCredential();
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
