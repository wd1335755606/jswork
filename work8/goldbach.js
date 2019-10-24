    //判断奇数偶数
function goldbach(){
    odd = document.getElementById('odd').value
    zz = parseInt(document.getElementById('odd').value);
    if(isNaN(zz)||zz<=2||zz%2==1){
        alert('请输入一个大于2的偶数')
        return false
}else{
    goldbach(odd)
}
//判断一个数是否为质数
function wd(a){
    var sum=0
    for(var w=1;w<=a;w++){
        if(a % w ==0){
            sum++;
        }
    }
    if(sum==2){
        return true;
    }else{
        return false
    }
}
//判断用户输入的偶数是否可分为俩个质数之和
function goldbach(odd) {
    let str=" ";
    for(var i=2;i<odd;i++){
        var j = odd - i;
        if(wd(i)&&wd(j)&& i<=j){
           str +=(odd+"可以拆分为俩个质数"+i+"与"+j+"的和"+'<br>');
        }
    }

    document.getElementById('goldbach').innerHTML = str

}
}

