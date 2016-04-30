#pragma strict




function Start () {
    if(gameObject.GetComponent(Rigidbody)==null)
    {
        gameObject.AddComponent(Rigidbody);
    }
    gameObject.GetComponent(Rigidbody).AddForce(Vector3(-10,0,0), ForceMode.Acceleration);

}

function LateUpdate () {
    gameObject.GetComponent(Rigidbody).AddForce(Vector3(-50,0,0), ForceMode.Acceleration);
}

function OnCollisionEnter(col : Collision)
    {
        if(col.gameObject.tag == "Player")
        {
            col.transform.position = Vector3.Lerp(col.transform.position, col.transform.position - Vector3(10,0,0), .3);
            col.gameObject.GetComponent(Rigidbody).AddForce(Vector3(-10,0,0), ForceMode.Impulse);
            //Time.timeScale = 0;
        }
    }