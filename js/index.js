class student {

    constructor(mymth, mysci, myhis, myeng, myphy) {

        this.mth = mymth;
        this.sci = mysci;
        this.his = myhis;
        this.eng = myeng;
        this.phy = myphy;

    }

    calCgpa() {
        var cgpa2 = ((this.mth + this.sci + this.his + this.eng + this.phy) / 50);

        return cgpa2;
    }

}


function myFunction() {

    var a = document.getElementById("marks1").valueAsNumber;
    var b = document.getElementById("marks2").valueAsNumber;
    var c = document.getElementById("marks3").valueAsNumber;
    var d = document.getElementById("marks4").valueAsNumber;
    var e = document.getElementById("marks5").valueAsNumber;

    var answer = new student(a, b, c, d, e);

    document.getElementById("demo").innerHTML = ("Your Total CGPA is = " + answer.calCgpa());
}