
function generateTeamMemberCards(employee) {
   return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    </head>
    <body>
      
        <section class="hero is-link">
            <div class="hero-body">
              <p class="title has-text-centered">
                My Team
              </p>
            </div>
          </section>
    
          <section>
          <div class="columns is-multiline">
            ${generateTeamMemberCard(employee)}
          </div>
            </section>
    </body>
    </html>`
}

function generateTeamMemberCard(employee) {
   
  return employee.map(function(e) {
   let role = e.getRole()
    switch (role) {
      case "Manager":
        return generateManagerCard(e)
        break;
      case "Engineer":
        return generateEngineerCard(e)
        break;
        case "Intern":
          return generateInternCard(e)
    }
    console.log(e)
  }).join("")
}

function generateManagerCard(manager) {
   return `
   <div class="column is-one-third">
   <div class="box">
    <ul>
   <div class="box has-background-danger">
   <li>${manager.name}</li>
   <br>
   <li>${manager.getRole()}</li>
 </div>
 <div class="box">
   <li>ID: ${manager.id}</li>
 </div>
   <div class="box">
   <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
   </div>
   <div class="box">
     <li>Office Number: ${manager.getOfficeNumber()}</li>
   </div>
 </ul>
</div>
</div> `
}

function generateEngineerCard(engineer) {
    return `<div class="column is-one-third">
    <div class="box">
     <ul>
    <div class="box has-background-success">
    <li>${engineer.name}</li>
    <br>
    <li>${engineer.getRole()}</li>
  </div>
  <div class="box">
    <li>ID: ${engineer.id}</li>
  </div>
    <div class="box">
    <li>Email: <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a></li>
    </div>
    <div class="box">
    <li>GitHub: <a href="${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
    </div>
  </ul>
 </div>
 </div> `
}

function generateInternCard(intern) {
    return `<div class="column is-one-third">
    <div class="box">
     <ul>
    <div class="box has-background-primary">
    <li>${intern.name}</li>
    <br>
    <li>${intern.getRole()}</li>
  </div>
  <div class="box">
    <li>ID: ${intern.id}</li>
  </div>
    <div class="box">
      <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
    </div>
    <div class="box">
      <li>School:  ${intern.getSchool()}</li>
    </div>
  </ul>
 </div>
 </div> `
}


module.exports = generateTeamMemberCards