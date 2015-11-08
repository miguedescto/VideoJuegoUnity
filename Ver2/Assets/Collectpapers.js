#pragma strict
@script RequireComponent( AudioSource )

var piezas : int = 0;
var piezasToWin : int = 3;
var distanceTopieza : float = 2.5;

public var piezaPickup : AudioClip;






function Start() 
{
	Screen.lockCursor = true;
	
	
}


function Update() 
{ 
    
    if ( Input.GetMouseButtonDown(0) || Input.GetKeyDown(KeyCode.E) ) 
    {
       
        var ray = Camera.main.ScreenPointToRay( Vector3( Screen.width * 0.5, Screen.height * 0.5, 0.0 ) );
        var hit : RaycastHit;
        if ( Physics.Raycast( ray, hit, distanceTopieza ) )
        {
          
            if ( hit.collider.gameObject.name == "pieza" )
            {
	            piezas += 1;
	        
	            
	            Destroy( hit.collider.gameObject );
	            
	         
            }
        }
    }
}


function OnGUI()
{
    if ( piezas < piezasToWin )
    {
		GUI.Box( Rect( (Screen.width * 0.5) - 60, 10, 220, 40 ), "Obten las piezas de la lampara \n" + piezas.ToString() + " de 3 piezas" );
    }
    else
    {	
		GUI.Box( Rect( (Screen.width/2)-100, 10, 300, 35 ), "Ahora tienes lo necesario para seguir!" );
		for(var i =0; i<=100; i++){
		if (i == 100) 
		{
		Application.LoadLevel("ma2");
		}
		
		}
		// Application.LoadLevel( "sceneWin" );
    }
}
