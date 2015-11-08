#pragma strict
var tiempo : float = 10; // time of respaw
var isPlayerVisible : boolean = false;
var player : Transform;

function Start () {
InvokeRepeating("Timer",1.0,1.0);

}

function Update () {

}

function Timer(){
	if (isPlayerVisible)
	{	
	if(tiempo == 1){
	 Application.LoadLevel("bue1");
	}
	tiempo -= 1;
	
	}
	if (tiempo == -1)
	{	
     tiempo = 5;
	
	}
	
}

function OnTriggerEnter(Player : Collider)
{
Debug.Log("Trigger Enter");
isPlayerVisible = true;
// teleport next scen
}

function OnTriggerExit(Player : Collider)
{
Debug.Log("Trigger Exit");
isPlayerVisible = false;
tiempo = 10;
}

function OnGUI()
{
if (isPlayerVisible){
GUI.Box( Rect( (Screen.width * 0.5) - 150, 20, 420, 25 ), "Seras llevado a la siguiente escena en: " + tiempo + " segundos" );

}
}

