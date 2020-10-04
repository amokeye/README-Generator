function renderLicenseBadge(proj_license) {
  if (proj_license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${proj_license}-blue.svg)`
  }
  return ''
}

function renderLicenseLink(proj_license) {
  if (proj_license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

function renderLicenseSection(proj_license) {
  if (proj_license !== "None") {
    return (
      `## License

This project is licensed under the ${proj_license} license.`
    )
  }
  return ''
}

function generateMarkdown(data) {
  return `# ${data.proj_title}
${renderLicenseBadge(data.proj_license)}

## Description

${data.proj_description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.proj_license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.proj_install}
\`\`\`

## Usage

${data.proj_usageInfo}

${renderLicenseSection(data.proj_license)}
  
## Contributing

${data.proj_contribution}

## Tests

To run tests, run the following command:

\`\`\`
${data.proj_test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.proj_questions2}. You can find more of my work at [${data.proj_questions1}](https://github.com/${data.proj_questions1}/).

`;
}

module.exports = generateMarkdown;
