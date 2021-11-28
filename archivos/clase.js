class Guardar {
    lista = [];
    text = "";
    x = 0;
    Cod =0;
    Tique ="";
    Nom="";
    Ced="";
    Mon=0;
    Fec="";
    Mot="";
    Cod2="";
    Mon2="";

    contador1=0;
    contador2=0;
    texto2="";
    total=0;

    mod =0;

    Variables() {
      this.Tique = document.getElementById("Tiquete").value;
      this.Nom = document.getElementById("Nombre").value;
      this.Ced =  document.getElementById("Cedula").value;
      this.Mon =  document.getElementById("Monto").value;
      this.Fec =  document.getElementById("Fecha").value;
       this.Mot = document.getElementById("Motivo").value;
      if (this.Tique =="factura"){
        this.contador1=this.contador1 +1;
      }
      if (this.Tique == "abono") {
        this.contador2 = this.contador2 + 1;
      }
      this.total = Number(this.total) + Number(this.Mon);
      this.Cod = this.Cod + 1;
      this.Cod2 = String(this.Cod);
      this.Mon2 = String(this.Mon)
      this.agregar();
      this.mostrar_bleer();
    }

    agregar() {
      this.lista.push({
        Codigo: this.Cod2,
        Tiquete: this.Tique, 
        Nombre: this.Nom,
        Cedula: this.Ced,
        Monto: this.Mon2,
        Fecha: this.Fec,
        Motivo: this.Mot,
      });
    }
   
    mostrar_bleer(){
      document.getElementById("salida").innerHTML = JSON.stringify(this.lista);
    }
 
    mostrar() {
       this.lista.forEach(this._mostrar);
    }

   _mostrar() {
     this.text = 
       " Codigo...> " + this.Cod2 +
        " Tiquete...> " + this.Tique+
        " Nombre...>" + this.Nom +
        " Cedula...>" + this.Ced +
        " Monto...>" + this.Mon +
        " Fecha...>" + this.Fec +
        " Motivo..>" + this.Mot + "<br>";
    document.getElementById("salida").innerHTML = this.text;
  }

  contabilidad(){
    this.texto2 = "su contabilidad es faturados: "+ String(this.contador1) + " abonados: " + String(this.contador2) + "dinero recaudo:" + String(this.total); 
    document.getElementById("conta").innerHTML = this.texto2;
  }

  Variables() {
    this.Tique = document.getElementById("Tiquete").value;
    this.Nom = document.getElementById("Nombre").value;
    this.Ced = document.getElementById("Cedula").value;
    this.Mon = document.getElementById("Monto").value;
    this.Fec = document.getElementById("Fecha").value;
    this.Mot = document.getElementById("Motivo").value;
    if (this.Tique == "factura") {
      this.contador1 = this.contador1 + 1;
    }
    if (this.Tique == "abono") {
      this.contador2 = this.contador2 + 1;
    }
    this.total = Number(this.total) + Number(this.Mon);
    this.Cod = this.Cod + 1;
    this.Cod2 = String(this.Cod);
    this.Mon2 = String(this.Mon)
    this.agregar();
    this.mostrar_bleer();
  }

  Variables2() {
    this.Tique = document.getElementById("Tiquete").value;
    this.Nom = document.getElementById("Nombre").value;
    this.Ced = document.getElementById("Cedula").value;
    this.Mon = document.getElementById("Monto").value;
    this.Fec = document.getElementById("Fecha").value;
    this.Mot = document.getElementById("Motivo").value;
    this.mod = document.getElementById("Modificar").value;
    if (this.Tique == "factura") {
      this.contador1 = this.contador1 + 1;
    }
    if (this.Tique == "abono") {
      this.contador2 = this.contador2 + 1;
    }
    this.total = Number(this.total) + Number(this.Mon);
    this.Cod2 = String(this.mod);
    this.Mon2 = String(this.Mon)
    this.lista.splice((this.mod - 1), 1, {Codigo: this.Cod2, Tiquete: this.Tique, Nombre: this.Nom, Cedula: this.Ced, Monto: this.Mon2, Fecha: this.Fec, Motivo: this.Mot});
    this.mostrar_bleer();
  }
}

Object = new Guardar();

