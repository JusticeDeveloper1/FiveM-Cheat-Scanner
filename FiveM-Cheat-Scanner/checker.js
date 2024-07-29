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

                                 ████████╗██╗  ██╗ ██████╗ ███╗   ███╗███████╗███████╗███╗   ██╗
                                 ╚══██╔══╝██║  ██║██╔═══██╗████╗ ████║██╔════╝██╔════╝████╗  ██║
                                    ██║   ███████║██║   ██║██╔████╔██║███████╗█████╗  ██╔██╗ ██║
                                    ██║   ██╔══██║██║   ██║██║╚██╔╝██║╚════██║██╔══╝  ██║╚██╗██║
                                    ██║   ██║  ██║╚██████╔╝██║ ╚═╝ ██║███████║███████╗██║ ╚████║
                                    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝
            `;
            
            console.log(colors.cyan(text));
            console.log(colors.gray("                                            ["),colors.cyan("FiveM Cheat Scanner"),colors.gray("] ["),colors.cyan("Version: 1.1.0"),colors.gray("]"));
            console.log(colors.cyan());
            console.log(colors.gray("                                             Press"), colors.gray("["),colors.cyan("ENTER"),colors.gray("]"), colors.gray("to start scanning the PC…"));
            
            rl.on('line', () => {
              rl.close();
              console.log(colors.cyan(""));
              setTimeout(() => {
                
              
              console.log(colors.gray(" ["),colors.cyan("?"),colors.gray("]"),colors.gray ("Is currently scanning your PC..."));
            
            }, 150);
            
            
              checkDirectory(userHome, "Downloads");
              checkDirectory(userHome, "Desktop");
              checkDirectory(userHome, "Documents");
              checkDirectory(userHome, "Videos");
              checkDirectory(userHome, "Pictures");
              checkDirectory(userHome, "OneDrive");
            
              setTimeout(() => {
                console.log(colors.cyan(""));
                console.log(colors.gray(" ["),colors.cyan("?"),colors.gray("]"),colors.gray ("If you can see something green inside the program, it means there is a cheat"));
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
                        console.log(colors.gray(" ["),colors.cyan("+"),colors.gray("]"), colors.gray ("Eulen loader found in:"), colors.cyan(fullPath), colors.cyan("|"), colors.green(file.name));
                      }, 300);
            
                      } else if (file.name.includes('loader.cfg')) {
                        setTimeout(() => {
                        cheatsFounds++;
                        console.log(colors.cyan(" "));
                        console.log(colors.gray(" ["),colors.cyan("+"),colors.gray("]"), colors.gray ("Settings Eulen found in:"), colors.cyan(fullPath), colors.cyan("|"), colors.cyan(file.name));
                      }, 450);
            
                      } else if (file.name.includes('settings.cock')) {
                        setTimeout(() => {
                        cheatsFounds++;
                        console.log(colors.cyan(" "));
                        console.log(colors.gray(" ["),colors.cyan("+"),colors.gray("]"), colors.gray ("Settings redEngine in:"), colors.cyan(fullPath), colors.cyan("|"), colors.cyan(file.name));
                      }, 600);
            
                      } else if (file.name.includes('password_is_eulen')) {
                        setTimeout(() => {  
                        cheatsFounds++;
                        console.log(colors.cyan(" "));
                        console.log(colors.gray(" ["),colors.cyan("+"),colors.gray("]"), colors.gray ("Eulen download folder found in:"), colors.cyan(fullPath), colors.cyan("|"), colors.cyan(file.name));
                      }, 750);
            
                      } else if (file.name.startsWith('chrome')) {
                        if (file.name.endsWith('.exe')) {
                          cheatsFounds++;
                          setTimeout(() => { 
                          console.log(colors.gray( ))
                          console.log(colors.gray(" ["),colors.cyan("+"),colors.gray("]"), colors.gray ("TZ folder found in:"), colors.cyan(fullPath), colors.cyan("|"), colors.cyan(file.name));
                        }, 900);
                        }
            
                      } else if (file.name.includes('Susano')) {
                        setTimeout(() => {
                        cheatsFounds++;
                        console.log(colors.cyan(" "));
                        console.log(colors.gray(" ["),colors.cyan("+"),colors.gray("]"),  colors.gray("Susano found in:"), colors.cyan(fullPath), colors.cyan("|"), colors.cyan(file.name));
                      }, 1300);

                      } else if (file.name.includes('TDPremium.exe','TDLoader.exe')) {
                        setTimeout(() => {
                        cheatsFounds++;
                        console.log(colors.cyan(" "));
                        console.log(colors.gray(" ["),colors.cyan("+"),colors.gray("]"),  colors.gray("TDPremium or TDLoader found in:"), colors.cyan(fullPath), colors.cyan("|"), colors.cyan(file.name));
                        }, 1300);

                      } else if (file.name.includes('d3d10.dll')) {
                        setTimeout(() => {
                        cheatsFounds++;
                        console.log(colors.cyan(" "));
                        console.log(colors.gray(" ["),colors.cyan("+"),colors.gray("]"),  colors.gray("Free FiveM Cheat found in:"), colors.cyan(fullPath), colors.cyan("|"), colors.cyan(file.name));
                        }, 1300);
            
                      } else if (file.name.startsWith('usbdeview-x64')) {
                        if (file.name.endsWith('.zip')) {
                        cheatsFounds++;
                        setTimeout(() => {  
                        console.log(colors.green( ))
                        console.log(colors.gray(" ["),colors.cyan("+"),colors.gray("]"), colors.gray("Skript folder found in:"), colors.cyan(fullPath), colors.cyan("|"), colors.cyan(file.name));
                          
                        }, 1450);
                          
                          
                      }
            
                      
            
                      } else if (file.name.includes('chrome.exe')) {
            
                        fs.stat(filePath, (err, stats) => {
                          if (err) {
                            
                            console.log(colors.yellow(" [!] ", colors.gray ("Error loading file:"), colors.yellow(filePath)));   
                            return;
                          }
                          const fileSizeInBytes = stats.size;
                          const fileSizeInKilobytes = fileSizeInBytes / 1024;
                          const fileSizeInMegabytes = fileSizeInKilobytes / 1024;
            
                          if (fileSizeInMegabytes.toFixed(2) < 10) {
                            cheatsFounds++;
                            setTimeout(() => {
                              
                            
                            console.log(colors.cyan(" "));
                            console.log(colors.green(" [+]", colors.gray ("TZ Or HX folder found in:"), colors.green(fullPath), "|", colors.green(file.name)));
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
            
