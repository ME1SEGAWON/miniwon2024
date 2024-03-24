import { exec } from 'child_process';


exec("node . --db 'mongodb+srv://mt:mt@cluster0.e7q5a6b.mongodb.net/?retryWrites=true&w=majority'", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});