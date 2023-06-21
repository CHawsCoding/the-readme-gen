// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    // Add more cases for other licenses as needed
    default:
      badge = '';
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  switch (license) {
    case 'MIT':
      link = '[MIT License](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      link = '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
      break;
    // Add more cases for other licenses as needed
    default:
      link = '';
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = '';
  switch (license) {
    case 'MIT':
      section = 'This project is licensed under the terms of the MIT License. For more information, see the [MIT License](https://opensource.org/licenses/MIT).';
      break;
    case 'Apache 2.0':
      section = 'This project is licensed under the terms of the Apache License 2.0. For more information, see the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).';
      break;
    // Add more cases for other licenses as needed
    default:
      section = 'none';
      break;
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
