const fs = require('fs');

const generateLicense = (type) => {
    let color;
    if (type === "MPL") color = "red";
    if (type === "GPL") color = "gray";
    if (type === "Apache") color = "green";
    if (type === "MIT") color = "blue";
    if (type === "CC") color = "orange";
    if (type === "BSD") color = "goldenrod";
  
    return (
      `
      <h3>License</h3>
      <img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" />
      `
    );
  };

const generatePage = ({
    name,
    location,
    bio,
    linkedIn,
    gitHub,
    license,
  }) => {
    console.log('GENERATING PAGE…');
    const template = (
      `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Avatar HTML</title>
        <!-- Minified version -->
        <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
      </head>
      <body>
        <h1>Avatar HTML</h1>
        <h2>${name}</h2>
        <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
            " alt="picture of Gary" />
            <h3>${location}</h3>
            <p>${bio}</p>
            <a href="#${linkedIn}">LinkedIn</a>
            <a href="#${gitHub}">GitHub</a>
            ${generateLicense(license)}
          </body>
          </html>
          `
        );
        fs.writeFileSync('./output/index.html', template);
        console.log('TEMPLATE GENERATED!');
        process.exit();
      };
      
      module.exports = {
        generatePage
      };