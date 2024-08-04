// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

let age:number = 50;
let max:string = 'Max';
let toggle:boolean = true;
let empty:null = null;
let notInitialize:undefined;
let callback = (a:number):number => { return 100 + a };


let anything:any = -20;
anything = 'Text';
anything = {};

let some:string;
some = 'Text';
let str: string;
str = some;


/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/

let person:[string,number] = ['Max', 21];



/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union:number|string;
let literal:'enable'|'disable';


/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message:string):void {
    console.log(message);
  }
  
  function calc(num1:number, num2:number):number {
    return num1 + num2;
  }
  
  function customError():never {
    throw new Error('Error');
  }



  /*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum dayOfWeeks{
    monday = 'Monday',
    tuesday = "Tuesday",
    wednesday = "Wednesday",
    thursday = "Thursday",
    friday = "Friday",
    saturday = "Saturday",
    sunday = "Sunday"
}


function isWeekend(day:dayOfWeeks):boolean {
    if (day === 'Saturday' || day ==='Sunday') {
        return true
    } return false
}
/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

let myGender:"male"|"female";

myGender="female"






/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/
type TypePage={
    title:string,
    likes:number,
    accounts:string[],
    status:string,
    details?:{createAt:Date,
        updateAt:Date
    }
}
const page1:TypePage = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
  }
  
  const page2:TypePage = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  }


/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise <T extends[string,number]>():Promise<T> {
    return new Promise((resolve) => {
      resolve(['Text', 50] as T);
    });
  }
  
  getPromise()
  .then((data) => {
    console.log(data);
  });



  /*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
  }
  
  function compare <T extends AllType>(top:T, bottom:T): AllType  {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
  }
  


// /*
//   У вас є функція merge, яка поєднує два об'єкти. 
//   Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
// */

function merge<T extends object,K extends object> (objA:T, objB:K) {
    return Object.assign(objA, objB);
  }
  


//   /*
//   Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
// */

interface IT{
    [key:string]:string
}


class Component <T> {
    constructor (public props:T) {
  
    }
  }
  
  class Page extends Component <IT>{
    pageInfo () {
      console.log(this.props.title);
    }
  }
  const a = new Page({ title: 'Sea' });
  a.pageInfo();

//   /*
//   Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
//   Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
// */
interface KeyValuePair <T,K>{
    key:T;
    value:K;
  }


// /*
//   Ви маєте форму реєстрації користувачів. 
//   Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
//   Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
//   залишивши ім'я та прізвище без змін.

//   Виправте тип у аргументі функції так, щоб не було помилок типу.
// */

type User = {
    name?: string;
    surname?: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser(initialValues: User) {
    // Оновлення користувача
  }
  
  createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });
  


// /*
//   У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
//   Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
// */

export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }
  
  // Замініть наступний код на версію за допомогою Record
  const RoleDescription: Record<UserRole, string> = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
  };
  

// /*
//   У вас є тип Form, який містить інформацію про форму, включаючи поле errors. 
//   Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
// */

type Errors = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
  };
  
  type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
  };

  // Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, 'errors'>;
  
//   // Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
//   type Params = Form;
  



























































