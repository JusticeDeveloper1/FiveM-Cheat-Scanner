console.clear();

const readline = require('readline');
const fs = require('fs');
const path = require('path');
const colors = require('colors');

const userHome = getUserHome();

let cheatsFounds = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const text = `                                              _____  _                              
                                             |_   _|| |_  ___  _____  ___  ___  ___ 
                                               | |  |   || . ||     ||_ -|| -_||   |
                                               |_|  |_|_||___||_|_|_||___||___||_|_|                                               `;
            console.log(colors.red(text));
            console.log(colors.red("                                          ╭───────────────────────────────────────────╮"));
            console.log(colors.red("                                          |           "),colors.red("FiveM Cheat Scanner"),colors.red("           |"));
            console.log(colors.red("                                          |              "),colors.gray("Version:"),colors.red("1.2.1"),colors.red("             |"));
            console.log(colors.red("                                          |  "),colors.gray("Press"), colors.red("ENTER"), colors.gray ("to start scanning the PC…"),colors.red("  |"));
            console.log(colors.red("                                          ╰───────────────────────────────────────────╯"));
            
            rl.on('line', () => {
              rl.close();
              console.log(colors.red(""));
              setTimeout(() => {
                
              
              console.log(colors.gray(" ["),colors.red("?"),colors.gray("]"),colors.gray ("Is currently scanning your PC..."));
            
            }, 50);
            
            
              checkDirectory(userHome, "Downloads");
              checkDirectory(userHome, "Desktop");
              checkDirectory(userHome, "Documents");
              checkDirectory(userHome, "Videos");
              checkDirectory(userHome, "Pictures");
              checkDirectory(userHome, "OneDrive");
            
              setTimeout(() => {
                console.log(colors.red(""));
                console.log(colors.gray(" ["),colors.red("?"),colors.gray("]"),colors.gray ("If you can see something"), colors.red("Red"), colors.gray ("inside the program, it means there is a cheat"));
                console.log(colors.red(""));
              }, 2200);
            }); 
            
            function checkDirectory(parentDir, directory) {
              const fullPath = path.join(parentDir, directory);
              if (fs.existsSync(fullPath)) {
                fs.readdir(fullPath, { withFileTypes: true }, (err, files) => {
                  if (err) {
                    console.error("Error in the file", fullPath, ":", err);
                    return;
                  }
                  files.forEach(file => {
                    const filePath = path.join(fullPath, file.name);
                    if (file.isDirectory()) {
                      checkDirectory(fullPath, file.name);
                    } else {
                      if (file.name.includes('loader_prod.exe')) {
                        setTimeout(() => {  
                        cheatsFounds++;
                        console.log(colors.red(" "));
                        console.log(colors.gray(" ["),colors.red("+"),colors.gray("]"), colors.gray ("Eulen loader found in:"), colors.red(fullPath), colors.gray("|"), colors.green(file.name));
                      }, 200);
            
                      } else if (file.name.includes('loader.cfg')) {
                        setTimeout(() => {
                        cheatsFounds++;
                        console.log(colors.red(" "));
                        console.log(colors.gray(" ["),colors.red("+"),colors.gray("]"), colors.gray ("Settings Eulen found in:"), colors.red(fullPath), colors.gray("|"), colors.red(file.name));
                      }, 400);
            
                      } else if (file.name.includes('settings.cock')) {
                        setTimeout(() => {
                        cheatsFounds++;
                        console.log(colors.red(" "));
                        console.log(colors.gray(" ["),colors.red("+"),colors.gray("]"), colors.gray ("Settings redEngine in:"), colors.red(fullPath), colors.gray("|"), colors.red(file.name));
                      }, 600);
            
                      } else if (file.name.includes('password_is_eulen')) {
                        setTimeout(() => {  
                        cheatsFounds++;
                        console.log(colors.red(" "));
                        console.log(colors.gray(" ["),colors.red("+"),colors.gray("]"), colors.gray ("Eulen download folder found in:"), colors.red(fullPath), colors.gray("|"), colors.red(file.name));
                      }, 800);
            
                      } else if (file.name.startsWith('chrome.exe')) {
                        cheatsFounds++;
                        setTimeout(() => { 
                        console.log(colors.gray( ))
                        console.log(colors.gray(" ["),colors.red("+"),colors.gray("]"), colors.gray ("TZ folder found in:"), colors.red(fullPath), colors.gray("|"), colors.red(file.name));
                      }, 1000);
                        
            
                      } else if (file.name.includes('Susano')) {
                        setTimeout(() => {
                        cheatsFounds++;
                        console.log(colors.red(" "));
                        console.log(colors.gray(" ["),colors.red("+"),colors.gray("]"),  colors.gray("Susano found in:"), colors.red(fullPath), colors.gray("|"), colors.red(file.name));
                      }, 1200);

                      } else if (file.name.includes('TDPremium.exe','TDLoader.exe')) {
                        setTimeout(() => {
                        cheatsFounds++;
                        console.log(colors.red(" "));
                        console.log(colors.gray(" ["),colors.red("+"),colors.gray("]"),  colors.gray("TDPremium or TDLoader found in:"), colors.red(fullPath), colors.gray("|"), colors.red(file.name));
                        }, 1400);

                      } else if (file.name.includes('d3d10.dll')) {
                        setTimeout(() => {
                        cheatsFounds++;
                        console.log(colors.red(" "));
                        console.log(colors.gray(" ["),colors.red("+"),colors.gray("]"),  colors.gray("Free FiveM Cheat found in:"), colors.red(fullPath), colors.gray("|"), colors.red(file.name));
                        }, 1600);
            
                      } else if (file.name.startsWith('usbdeview-x64.zip')) {
                        cheatsFounds++;
                        setTimeout(() => {  
                        console.log(colors.green( ))
                        console.log(colors.gray(" ["),colors.red("+"),colors.gray("]"), colors.gray("Skript folder found in:"), colors.red(fullPath), colors.gray("|"), colors.red(file.name));
                        }, 1800);

                      } else if (file.name.startsWith('plug.exe')) {
                        cheatsFounds++;
                        setTimeout(() => {
                        console.log(colors.green())
                        console.log(colors.gray(" ["),colors.red("+"),colors.gray("]"), colors.gray("plug folder found in:"), colors.red(fullPath), colors.gray("|"), colors.red(file.name));
                        }, 2000);

                      } else {
                        const possibleFileNames = [
                          'visualstudio.exe',
                          'edge.exe',
                          'eclipse.exe',
                          'excel.exe',
                          'filezilla.exe',
                          'explorer.exe',
                          'firefox.exe',
                          'wordpad.exe',
                          'acrobat.exe',
                          'discord.exe',
                          'winword.exe',
                          'teams.exe',
                          'notepad.exe',
                          'opera.exe',
                          'paint.exe',
                          'premiere.exe',
                          'putty.exe',
                          'dwm.exe',
                          'iexplore.exe',
                          'outlook.exe',
                          'photoshop.exe',
                          'gimp.exe',
                          'skype.exe',
                          'obs.exe',
                          'thunderbird.exe',
                          'microsoftpowerpoint.exe',
                          'steam.exe',
                          'notepad++.exe',
                          'microsoftedge.exe'
                        ];
                        
                      }
                    }
                  });
                });
              } else {
              }
            }
            
            function getUserHome() {
              return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
            }
