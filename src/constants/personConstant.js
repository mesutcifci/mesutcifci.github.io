import { name, surname } from "react-lorem-ipsum";

const personName =  name('female');
const personSurname =  surname();
const personFullname = personName + " " + personSurname;

const personResume =  `Hello, I am ${personFullname}, I have been working as a frontend developer
for a year and a half. Everyday I learn something new and try to
improve myself.`


export const personConstant = [ personName, personSurname, personFullname, personResume];
  