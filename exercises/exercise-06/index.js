import helloWorld from './helloWorld';

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();


import ambilDataUser from './ambilDataUser';

ambilDataUser().then((users) => {
  console.log(users);
});


import ambilDataUser from './ambilDataUserAsync/ambilDataUserAsync';

async function main() {
  try {
    const users = await ambilDataUser();
    console.log(users);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

main();