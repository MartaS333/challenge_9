// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.length === 0) {
    return "";
  } else if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen)](https://opensource.org/licenses/MIT)`;
  } else if (license == "APACHE 2.0") {
    return `[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-brightgreen)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "GPL 3.0") {
    return `[![License: GPL 3.0](https://img.shields.io/badge/license-GPL%203.0-brightgreen)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == "BSD 3") {
    return `[![License: BSD 3](https://img.shields.io/badge/license-BSD%203-brightgreen)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length === 0) {
    return "";
  } else if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license == "APACHE 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license == "GPL 3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license == "BSD 3") {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length === 0) {
    return "";
  } else {
    return `## License
  ${renderLicenseBadge(license)}
  
  ${renderLicenseLink(license)} 
    `;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.dependencies}

  ## Usage

  ${data.useRepo}
  ${renderLicenseSection(data.license)}

  ## Contributing
  
  ${data.contributeRepo}
  
  ## Tests

  ${data.test}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find my work at [${data.gitHub}](https://github.com/${data.gitHub})
  

`;
}

module.exports = generateMarkdown;
