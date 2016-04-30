#pragma strict
import System.Collections.Generic;

var itemList : List.<GameObject> = new List.<GameObject>();

var timer : float;

var interval : float;

var itemHolder : GameObject;

function Start () {
    Application.targetFrameRate = 30;
}

function Update () {
    Timer();
    Spawn();
}


function Timer()
{
    timer += Time.deltaTime;
}

function Spawn()
{
    if(timer >= interval)
    {
        var item : GameObject = Instantiate(itemList[Random.Range(0,itemList.Count-1)], transform.position, transform.rotation);
        item.transform.Rotate(Vector3(Random.Range(0,360),Random.Range(0,360),Random.Range(0,360)));

        if(item.GetComponent(Rigidbody) == null)
        {
            item.AddComponent(Rigidbody);
        }
        item.AddComponent(ItemTumble);
        item.GetComponent(Rigidbody).drag = 0;
        item.tag = "ITEM";
        item.transform.SetParent(itemHolder.transform);
        timer = 0;

    }
}