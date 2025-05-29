import path from 'node:path';
// import fsPromises from 'node:fs/promises';


const CWD = process.cwd();

export const PATH_DB = path.join(CWD, 'src', 'db', 'db.json');

// try {
//   const asyncContent = await fsPromises.readFile(PATH_DB);
//   console.log(asyncContent.toString('utf-8'));
// } catch (error) {
//   console.log(error);
// }
