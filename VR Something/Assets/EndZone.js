#pragma strict
import UnityEngine.UI;

var points : float;

var text : Text;

var gameOver : boolean;
function Start () {

}

function LateUpdate () {
    text.text = "POINTS: " + points;
    if(gameOver)
    {
        text.text = "GAMEOVER" + "  " + points;
    }
}

function OnTriggerEnter(col : Collider)
    {
        if(col.gameObject.tag == "ITEM")
        {
            points++;
            Destroy(col.gameObject);
        }
        if(col.gameObject.tag == "Player")
        {
            gameOver = true;
            Time.timeScale = 0;
        }
    }