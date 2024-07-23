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

const text = `
            
                                   _______ __                                      __   
                                  |_     _|  |--.-----.--------.-----.-----.-----.|  |.-----.  
                                    |   | |     |  _  |        |__ --|  -__|     | |_||__ --|
                                    |___| |__|__|_____|__|__|__|_____|_____|__|__|    |_____|
            `;
            console.log(colors.cyan(text));
            console.log(colors.cyan("                                                     [FiveM PC CHECKER]\n"));
            console.log(colors.cyan("                                            Press ENTER to start scanning the PC…"));
            
            rl.on('line', () => {
              rl.close();
              console.log(colors.cyan(""));
              setTimeout(() => {
                
              
              console.log(colors.cyan(" [-]", colors.white ("Is currently scanning your PC...")));
            
            }, 150);
            
            
              checkDirectory(userHome, "Downloads");
              checkDirectory(userHome, "Desktop");
              checkDirectory(userHome, "Documents");
              checkDirectory(userHome, "Videos");
              checkDirectory(userHome, "Pictures");
              checkDirectory(userHome, "OneDrive");
            
              setTimeout(() => {
                console.log(colors.cyan(""));
                console.log(colors.cyan(" [-]", colors.white ("If you can see something green inside the program, it means there is a cheat")));
                console.log(colors.cyan(""));
              }, 2000);
            });
            
            function checkDirectory(parentDir, directory) {
              const fullPath = path.join(parentDir, directory);
              if (fs.existsSync(fullPath)) {
                fs.readdir(fullPath, { withFileTypes: true }, (err, files) => {
                  if (err) {
                    console.error("Erreur dans le dossier", fullPath, ":", err);
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
                        console.log(colors.cyan(" "));
                        console.log(colors.green(" [+]", colors.white ("Eulen loader found in:"), colors.green(fullPath), "|", colors.green(file.name)));
                      }, 300);
            
                      } else if (file.name.includes('loader.cfg')) {
                        setTimeout(() => {
                        cheatsFounds++;
                        console.log(colors.cyan(" "));
                        console.log(colors.green(" [+]", colors.white ("Settings Eulen found in:"), colors.green(fullPath), "|", colors.green(file.name)));
                      }, 450);
            
                      } else if (file.name.includes('settings.cock')) {
                        setTimeout(() => {
                        cheatsFounds++;
                        console.log(colors.cyan(" "));
                        console.log(colors.green(" [+] Settings redEngine in:", colors.green(fullPath), "|", colors.green(file.name)));
                      }, 600);
            
                      } else if (file.name.includes('password_is_eulen')) {
                        setTimeout(() => {  
                        cheatsFounds++;
                        console.log(colors.cyan(" "));
                        console.log(colors.green(" [+]", colors.white ("Eulen download folder found in:"), colors.green(fullPath), "|", colors.green(file.name)));
                      }, 750);
            
                      } else if (file.name.startsWith('TZ')) {
                        if (file.name.endsWith('.zip')) {
                          cheatsFounds++;
                          setTimeout(() => { 
                          console.log(colors.white( ))
                          console.log(colors.green(" [+]", colors.white ("TZ folder found in:"), colors.green(fullPath), "|", colors.green(file.name)));
                        }, 900);
                        }
            
                      } else if (file.name.startsWith('TZX')) {
                        if (file.name.endsWith('.zip')) {
                          cheatsFounds++;
                          setTimeout(() => {
                          console.log(colors.cyan(" "));
                          console.log(colors.green(" [+] TZX found in:", colors.green(fullPath), "|", colors.green(file.name)));
                        }, 1150);
                        }
            
                      } else if (file.name.includes('Susano')) {
                        setTimeout(() => {
                        cheatsFounds++;
                        console.log(colors.cyan(" "));
                        console.log(colors.green(" [+]"),  colors.white("Susano found in:"), colors.green(fullPath), "|", colors.green(file.name));
                      }, 1300);
            
                      } else if (file.name.startsWith('usbdeview-x64')) {
                        if (file.name.endsWith('.zip')) {
                        cheatsFounds++;
                        setTimeout(() => {  
                        console.log(colors.green( ))
                        console.log(colors.green(" [+]"), colors.white("Skript folder found in:"), colors.green(fullPath), colors.green("|"), colors.green(file.name));
                          
                        }, 1450);
                          
                          
                      }
            
                      
            
                      } else if (file.name.includes('chrome.exe')) {
            
                        fs.stat(filePath, (err, stats) => {
                          if (err) {
                            
                            console.log(colors.yellow(" [!] ", colors.white ("Error loading file:"), colors.yellow(filePath)));   
                            return;
                          }
                          const fileSizeInBytes = stats.size;
                          const fileSizeInKilobytes = fileSizeInBytes / 1024;
                          const fileSizeInMegabytes = fileSizeInKilobytes / 1024;
            
                          if (fileSizeInMegabytes.toFixed(2) < 10) {
                            cheatsFounds++;
                            setTimeout(() => {
                              
                            
                            console.log(colors.cyan(" "));
                            console.log(colors.green(" [+]", colors.white ("TZ Or HX folder found in:"), colors.green(fullPath), "|", colors.green(file.name)));
                          }, 1600);
                          }
                        })
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
            
                        for (const possibleName of possibleFileNames) {
                          if (file.name.includes(possibleName)) {
                            fs.stat(filePath, (err, stats) => {
                              if (err) {
                                console.log(colors.red(" [!] Erreur lors du chargement du fichier :", colors.yellow(filePath)));
                                return;
                              }
                              const fileSizeInBytes = stats.size;
                              const fileSizeInKilobytes = fileSizeInBytes / 1024;
                              const fileSizeInMegabytes = fileSizeInKilobytes / 1024;
                        
                              const megabytesString = fileSizeInMegabytes.toFixed(2);
                              const threeFirstDigits = parseFloat(megabytesString.substring(0, 4));
                        
                              if (threeFirstDigits === 5.94) {
                                cheatsFounds++; 
                                setTimeout(() => {
                                  
                                
                                console.log(colors.green(" [+]"), colors.white ("HX can you'r fine in his:"), colors.yellow(fullPath), "|", colors.red(file.name));
                              }, 1750);
                              }
                            });
                            break;
                          }
                        }
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
            