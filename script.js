function getTotal(){
    var f_nairobi = document.getElementById("fnai").value
    var f_kisumu = document.getElementById("fkis").value
    var f_mombasa =document.getElementById("fmom").value
    var f_kilifi = document.getElementById("fkil").value
    var f_kakamega = document.getElementById("fkak").value
    
    var p_nairobi = document.getElementById("pnai").value
    var p_kisumu = document.getElementById("pkis").value
    var p_mombasa =document.getElementById("pmom").value
    var p_kilifi = document.getElementById("pkil").value
    var p_kakamega = document.getElementById("pkak").value

    var pr_nairobi = document.getElementById("prnai").value
    var pr_kisumu = document.getElementById("prkis").value
    var pr_mombasa =document.getElementById("prmom").value
    var pr_kilifi = document.getElementById("prkil").value
    var pr_kakamega = document.getElementById("prkak").value

    var y_nairobi = document.getElementById("ynai").value
    var y_kisumu = document.getElementById("ykis").value
    var y_mombasa =document.getElementById("ymom").value
    var y_kilifi = document.getElementById("ykil").value
    var y_kakamega = document.getElementById("ykak").value

    var m_nairobi = document.getElementById("mnai").value
    var m_kisumu = document.getElementById("mkis").value
    var m_mombasa =document.getElementById("mmom").value
    var m_kilifi = document.getElementById("mkil").value
    var m_kakamega = document.getElementById("mkak").value




    var sum1= parseFloat(f_nairobi) + parseFloat(f_kisumu) + parseFloat(f_mombasa) + parseFloat(f_kilifi) + parseFloat(f_kakamega)

    document.getElementById("f_result").innerHTML = "FAYSAL'S TOTAL VOTE IS " + sum1


    var sum2 = parseFloat(p_nairobi) + parseFloat(p_kisumu) + parseFloat(p_mombasa) + parseFloat(p_kilifi) + parseFloat(p_kakamega)
    
    document.getElementById("p_result").innerHTML = "PATEL'S TOTAL VOTE IS " + sum2

    var sum3 = parseFloat(pr_nairobi) + parseFloat(pr_kisumu) + parseFloat(pr_mombasa) + parseFloat(pr_kilifi) + parseFloat(pr_kakamega)
    
    document.getElementById("pr_result").innerHTML = "PRAKASH'S TOTAL VOTE IS " + sum3

    var sum4 = parseFloat(y_nairobi) + parseFloat(y_kisumu) + parseFloat(y_mombasa) + parseFloat(y_kilifi) + parseFloat(y_kakamega)
    
    document.getElementById("y_result").innerHTML = "YUSSUF'S TOTAL VOTE IS " + sum4

    var sum5 = parseFloat(m_nairobi) + parseFloat(m_kisumu) + parseFloat(m_mombasa) + parseFloat(m_kilifi) + parseFloat(m_kakamega)
    
    document.getElementById("m_result").innerHTML = "MIRIAM'S TOTAL VOTE IS " + sum5


if(sum1> sum2 && sum1>sum3&& sum1>sum4 && sum1>sum5){
    alert("FAYSAL IS THE WINNER")
} else if(sum2>sum1 && sum2>sum3 && sum2>sum4 && sum2>sum5){
    alert("PATEL IS THE WINNER")
} else if(sum3>sum1 && sum3>sum2 && sum3>sum4 && sum3>sum5){
    alert("PRAKASH IS THE WINNER")
}else if(sum4>sum1 && sum4>sum2 && sum4>sum3 && sum4>sum5){
    alert("YUSSUF IS THE WINNER")
}else if(sum5>sum1 && sum5>sum2 && sum5>sum3 && sum5>sum4){
    alert("MIRIAM IS THE WINNER")
}


    

            
}