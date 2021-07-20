/*importing file system*/
const fs = require('fs');
/*creating file*/
fs.writeFile('new_file.txt', "This is a new_file created with help of writeFile method", (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('File created successfully');
        fs.readFile('new_file.txt', 'utf-8', (err,file) => {
            if(err){
                console.log(file);
            }
            if(file){
                console.log(file);
            }
        });
    }
});