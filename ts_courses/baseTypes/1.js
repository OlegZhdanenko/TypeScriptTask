// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.
let age = 50;
let max = 'Max';
let toggle = true;
let empty = null;
let notInitialize;
let callback = (a) => { return 100 + a; };
let anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
str = some;
/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів,
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/
let person = ['Max', 21];
/*
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)?
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/
let union;
let literal;
/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
/*
Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var dayOfWeeks;
(function (dayOfWeeks) {
    dayOfWeeks["monday"] = "Monday";
    dayOfWeeks["tuesday"] = "Tuesday";
    dayOfWeeks["wednesday"] = "Wednesday";
    dayOfWeeks["thursday"] = "Thursday";
    dayOfWeeks["friday"] = "Friday";
    dayOfWeeks["saturday"] = "Saturday";
    dayOfWeeks["sunday"] = "Sunday";
})(dayOfWeeks || (dayOfWeeks = {}));
function isWeekend(day) {
    if (day === 'Saturday' || day === 'Sunday') {
        return true;
    }
    return false;
}
/*
  Створіть тип "Gender", використовуючи union type,
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
let myGender;
myGender = "female";
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа.
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/
function getPromise() {
    return new Promise((resolve) => {
        resolve(['Text', 50]);
    });
}
getPromise()
    .then((data) => {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
// /*
//   У вас є функція merge, яка поєднує два об'єкти. 
//   Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
// */
// function merge<T,K> (objA:T, objB:K) {
//     return Object.assign(objA, objB);
//   }
//   /*
//   Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
// */
// class Component {
//     constructor (public props:T) {
//     }
//   }
//   class Page extends Component {
//     pageInfo () {
//       console.log(this.props.title);
//     }
//   }
//   /*
//   Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
//   Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
// */
// interface KeyValuePair {
//     key;
//     value;
//   }
// /*
//   Ви маєте форму реєстрації користувачів. 
//   Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
//   Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
//   залишивши ім'я та прізвище без змін.
//   Виправте тип у аргументі функції так, щоб не було помилок типу.
// */
// type User = {
//     name: string;
//     surname: string;
//     email: string;
//     password: string;
//   }
//   function createOrUpdateUser(initialValues: User) {
//     // Оновлення користувача
//   }
//   createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });
// /*
//   У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
//   Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
// */
// export enum UserRole {
//     admin = 'admin',
//     editor = 'editor',
//     guest = 'guest',
//   }
//   // Замініть наступний код на версію за допомогою Record
//   const RoleDescription = {
//     admin: 'Admin User',
//     editor: 'Editor User',
//     guest: 'Guest User',
//   };
// /*
//   У вас є тип Form, який містить інформацію про форму, включаючи поле errors. 
//   Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
// */
// type Errors = {
//     email?: string[];
//     firstName?: string[];
//     lastName?: string[];
//     phone?: string[];
//   };
//   type Form = {
//     email: string | null;
//     firstName: string | null;
//     lastName: string | null;
//     phone: string | null;
//     errors: Errors;
//   };
//   // Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
//   type Params = Form;
//# sourceMappingURL=1.js.map