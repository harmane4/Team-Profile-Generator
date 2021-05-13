
// .map 
// method creates a new array populated with the results of calling a provided function on every element in the calling array.


function generateTeamMemberCards() {
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
    
          <div class="column is-one-third is-multiline">
            <div class="box">
            ${generateTeamMemberCard(teamMember)}
            </div>
          </div>
    </body>
    </html>`
}

function generateTeamMemberCard(teamMember) {
    return ``

    // switch case for if the employee is chosen 

}

function generateManagerCard() {
   return ` <ul>
            <div class="box">
            <li>${.name}</li>
            <br>
            <li>${.getRole}</li>
          </div>
          <div class="box">
            <li>ID: ${.id}</li>
          </div>
            <div class="box">
              <li>Email: ${.email}</li>
            </div>
            <div class="box">
              <li>Office Number: ${.officeNumber}</li>
            </div>
          </ul>
        </div>
      </div>`
}

function generateEngineerCard() {
    return ` <ul>
    <div class="box">
    <li>${.name}</li>
    <br>
    <li>${.getRole}</li>
  </div>
  <div class="box">
    <li>ID: ${.id}</li>
  </div>
    <div class="box">
      <li>Email: ${.email}</li>
    </div>
    <div class="box">
      <li>Github: ${.github}</li>
    </div>
  </ul>
</div>
</div>`
}

function generateInternCard() {
    return `<ul>
    <div class="box">
    <li>${.name}</li>
    <br>
    <li>${.getRole}</li>
  </div>
  <div class="box">
    <li>ID:${.id}</li>
  </div>
    <div class="box">
      <li>Email:${.email}</li>
    </div>
    <div class="box">
      <li>School:${.school}</li>
    </div>
  </ul>
</div>
</div>`
}


function generateReport() {
    return // html string
}