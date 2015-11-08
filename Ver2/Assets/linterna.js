#pragma strict

var Linterna : GameObject;
public var sonidolin : AudioClip;

function Update () {
	
	if(Input.GetKeyDown("f")){
		Debug.Log("Presiono f");
		if(Linterna.active == true ){
			Linterna.active = false;
			audio.PlayClipAtPoint( sonidolin, transform.position );
		}
		else{
			Linterna.active = true;
		audio.PlayClipAtPoint( sonidolin, transform.position );
		}
	}
	
}