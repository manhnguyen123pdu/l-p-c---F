class temperature{
    celsius;
    constructor(celsius){
        this.celsius=celsius;
    }
    getK(){
        document.write('do K'+this.celsius*273,15)
        document.write('<br>')
    }
    getF(){

        document.write('do F'+this.celsius*33.8)
    }
}
temperature1=new temperature(25);
temperature1.getK();
temperature1.getF();