let utenti = [];

class utente {
  constructor(name, surname, email, password) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
  }

  createUtenteDiv() {
    let utenteDiv = document.createElement("div");
    utenteDiv.innerText = this.name + " " + this.surname + " " + this.email + " " + this.password;
    return utenteDiv;
  }
}

for (let utente of utenti) {
  let utentiList = document.getElementById("display");
  let utenteDiv = utente.createUtenteDiv();
  utentiList.appendChild(utenteDiv);
}

function createUtente() {
  utenti.push(
    new utente(
      document.getElementById("name").value,
      document.getElementById("surname").value,
      document.getElementById("email").value,
      document.getElementById("password").value
    )
  );
}
