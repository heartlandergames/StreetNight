#pragma strict

import UnityEngine.SceneManagement;

import UnityEngine.UI;

var walking : boolean;

var head : GameObject;

var walkSpeed : float = 3.5;

var controller : CharacterController;

var text : Text;

var game : boolean;

var fpsController : MonoBehaviour;

function Start () {
    controller = gameObject.GetComponent(CharacterController);
}

function Update () {
    
    if(game == false)
    {
        Move();
    }
    if(game == true)
    {
        GameMove();
    }
}

function Move()
{
    if(Cardboard.SDK.Triggered)
    {
        var hit : RaycastHit;
        if(Physics.Raycast(head.transform.position, head.transform.forward, hit, 5))
        {
            if(hit.collider.gameObject.tag=="BUTTON")
            {
                Debug.Log("BUTTON");
                SceneManager.LoadScene("SimpleStreetNight");
                return;
            }
        }
        walking = !walking;
        
    }
    if(walking)
    {
        controller.SimpleMove(head.transform.forward * walkSpeed);
    }
    
    if(Input.acceleration.x > 0.4)
    {
        controller.SimpleMove(head.transform.right * walkSpeed);
    }
    if(Input.acceleration.x < -0.4)
    {
        controller.SimpleMove(-head.transform.right * walkSpeed);
    }
}

function GameMove()
{

    if(Cardboard.SDK.Triggered)
    {   
        var hit : RaycastHit;
        if(Physics.Raycast(head.transform.position, head.transform.forward, hit, 100))
        {
            if(hit.collider.gameObject.tag=="BUTTON")
            {
                Debug.Log("BUTTON");
                SceneManager.LoadScene("Environment");
                Time.timeScale = 1;
                return;
            }
        }
        if(transform.root.position.y == 7.32)
        {
            transform.root.position.y += 3;
            Debug.Log("Jump");
        }
    }
    if(Input.acceleration.x > 0.25)
    {
        controller.SimpleMove(head.transform.right * walkSpeed);
    }
    if(Input.acceleration.x >.6)
    {
        controller.SimpleMove(head.transform.right * (walkSpeed * 1.5));
    }
    if(Input.acceleration.x < -0.25)
    {
        controller.SimpleMove(-head.transform.right * walkSpeed);
    }
    if(Input.acceleration.x < -.6)
    {
        controller.SimpleMove(-head.transform.right * (walkSpeed * 1.5));
    }

    if(Input.acceleration.z < -.3)
    {
        controller.SimpleMove(head.transform.forward * walkSpeed);
    }

    if(Input.acceleration.z> .3)
    {
        controller.SimpleMove(-head.transform.forward);
    }

}