//Elementos1
const txtFuncion = document.getElementById("txtFuncion");
const txtX = document.getElementById("txtX");

const cbOrden = document.getElementById("cbOrden");
const btnCalcular = document.getElementById("btnCalcular");

//ELEMENTOS 2
const txtX0 = document.getElementById("txtx0");
const txtX1 = document.getElementById("txtx1");
const txtX2 = document.getElementById("txtx2");


//Resultados
const pConfirmacion = document.getElementById("confirmacion");
const lblResultFx = document.getElementById("ResultFx");

const lblPasos0 = document.getElementById("PasosX0");
const lblX0 = document.getElementById("X0");
const lblFx0 = document.getElementById("Fx0");

const lblPasos1 = document.getElementById("PasosX1");
const lblX1 = document.getElementById("X1");
const lblFx1 = document.getElementById("Fx1");

const lblPasos2 = document.getElementById("PasosX2");
const lblX2 = document.getElementById("X2");
const lblFx2 = document.getElementById("Fx2");

//const lblReultados = document.getElementById("Resultados");

btnCalcular.addEventListener('click', Condicion)

/*
var xAnt = 0;
var xAct = 0;
var eA = 0;
var expo = 0;
var euler = 0; */

var ecuacionOriginal = "", ecuacionModificada = "";
var xp, fx;
var Xs;


const x = 0, x0 = 0, x1 = 0, x2 = 0;
var fx0,fx1,fx2, Result;

var Bandera;

function Condicion(){ 


    if (cbOrden.value === 'orden1') //Orden 1

    {
        if (txtX0.value < txtX.value && txtX1.value > txtX.value)
        {
            Bandera = 1;
            Calcular();
        }
        else
        {
            pConfirmacion.innerText = "Los valores de x0 y x1, deben ser menor y mayor a x en ese orden";
           
        }
    }
    else //Orden2
    {
        if (txtX0.value < txtX.value && txtX1.value < txtX.value && txtX2.value > txtX.value || txtX0.value < txtX.value && txtX1.value > txtX.value && txtX2.value > txtX.value)
        {
            Bandera = 2;
            Calcular();
        }
        else
        {
            pConfirmacion.innerText = "Los valores de x0,x1,x2. Deben rodear al valor de x";
            
        }
    }
}

function Calcular(){
    // int a;
    switch (Bandera)
    {
        case 1:
           // a = 3;
            Orden1();
            break;
        case 2:
            //a = 4;
            Orden2();
            break;

    }
}

function Orden1(){
    
    for (var i = 0; i < 2; i++)
    {
        if (i == 0)
        {
           // Xs = txtX0.value;
           // Xs = System.Convert.ToString(x0);

           ecuacionModificada = txtFuncion.replace("x", txtX0.value);
           fx0 = eval(ecuacionModificada);

            //fx0 = Asignar();
           // fx0 = System.Convert.ToDouble(Asignar()); //x actual

            lblPasos0.innerText = i;
            lblX0.innerText = txtX0.value;
            lblFx0.innerText = fx0;
            //sdataGridView1.Rows.Add(i,x0,fx0); //FALTA
        }
        else //i = 1
        {
           // Xs = txtX1.value;
          //  Xs = System.Convert.ToString(x1);
          ecuacionModificada = txtFuncion.replace("x", txtX1.value);
          fx1 = eval(ecuacionModificada);
            
          //fx1 = Asignar();
            //fx1 = System.Convert.ToDouble(Asignar()); //x actual

            lblPasos1.innerText = i;
            lblX1.innerText = txtX1.value;
            lblFx1.innerText = fx1;
            //dataGridView1.Rows.Add(i, x1, fx1); //FALTA
        }
        
    }

    Result = ((txtX.value - txtX1.value) / (txtX0.value - txtX1.value)) * fx0 + ((txtX.value - txtX0.value) / (txtX1.value - txtX0.value)) * fx1;

        lblResultFx.innerText = Result;
}


function Orden2() //Hasta aqui me quede
{
            for (var i = 0; i < 3; i++)
            {
                if (i == 0)
                {
                    
                  //  Xs = txtX0.value;
                    
                    ecuacionModificada = txtFuncion.replace("x", txtX0.value);
                    fx0 = eval(ecuacionModificada);

                   // fx0 = Asignar();
         
                    lblPasos0.innerText = i;
                    lblX0.innerText = txtX0.value;
                    lblFx0.innerText = fx0;




                  /*  Xs = System.Convert.ToString(x0);

                    fx0 = System.Convert.ToDouble(Asignar()); //x actual
                    
                    dataGridView1.Rows.Add(i, x0, fx0); */
                }
                else if(i == 1)
                {

                //    Xs = txtX1.value;
                    
                    ecuacionModificada = txtFuncion.replace("x", txtX1.value);
                    fx1 = eval(ecuacionModificada);

                    //fx1 = Asignar();
          
                    lblPasos1.innerText = i;
                    lblX1.innerText = txtX1.value;
                    lblFx1.innerText = fx1;


                   /* Xs = System.Convert.ToString(x1);

                    fx1 = System.Convert.ToDouble(Asignar()); //x actual

                    dataGridView1.Rows.Add(i, x1, fx1); */
                }
                else // i = 2
                {
                    //Xs = txtX2.value;
                    //Xs = System.Convert.ToString(x2);

                    ecuacionModificada = txtFuncion.replace("x", txtX2.value);
                    fx2 = eval(ecuacionModificada);

                    //fx2 = Asignar();
                    //fx2 = System.Convert.ToDouble(Asignar()); //x actual
                    
                    lblPasos2.innerText = i;
                    lblX2.innerText = txtX2.value;
                    lblFx2.innerText = fx2;
                    //dataGridView1.Rows.Add(i, x2, fx2);
                }
                
            }

            Result = (((txtX.value - txtX1.value) * (txtX.value - txtX2.value)) / ((txtX0.value - txtX1.value) * (txtX0.value - txtX2.value))) * fx0 + (((txtX.value - txtX0.value) * (txtX.value - txtX2.value)) / ((txtX1.value - txtX0.value) * (txtX1.value - txtX2.value))) * fx1 + (((txtX.value - txtX0.value) * (txtX.value - txtX1.value)) / ((txtX2.value - txtX0.value) * (txtX2.value - txtX1.value))) * fx2;

            lblResultFx.innerText = Result;
}


function Asignar()
{
    try
    {
        //asigna variables deben ser string
        //   a = txtN.Text; // N
        //  b = txtB.Text; // B


      //  ecuacionOriginal = txtEcOriginal.Text;
        ecuacionModificada = txtFuncion.replace("x", Xs);
        fx = eval(ecuacionModificada);
        
        return fx;

    }
    catch (error)
    {
        return "Error";
    }
}





function je(){
    

    //    const a = parseFloat(txtA.value);
      //  const b = parseFloat(txtB.value);
       // const iteraciones = parseInt(txtIteraciones.value);

       
       
   

        if(!isNaN(x) && !isNaN(b) && !isNaN(iteraciones)){
          
             
                
           
        }
        else{
            pConfirmacion.style = "color:red";
            pConfirmacion.innerText = "Calculo Imposible";
        }

}




let micanvas = document.getElementById('grafica').getContext("2d");
var char = new Chart(micanvas,{
    type:"line",
    data:{
        labels:["x0","x","x1","x2"],
        datasets:[
            {
              label:"Mi Grafica",
              backgroundColor:"rgb(0,0,0)",
              borderColor:"rgb(0,255,0)",
              data:[1,3,4,2]  
            }
        ]
    }
})