function iniciacalculos(){

    var sx = document.getElementById('sexo').value;
    var ps = document.getElementById('peso').value;
    var al = document.getElementById('altura').value;
    var dd = document.getElementById('idade').value;
    var at = document.getElementById('atividade').value;

    sx = parseInt(sx);
    ps = parseInt(ps);
    al = parseInt(al);
    dd = parseInt(dd);
    at = parseInt(at);

    if(sx == '' || sx <= 0 || sx == null){
        alert('Favor selecionar um sexo válido.');
        return false;
    }
    if(ps == '' || ps <= 0 || ps == null){
        alert('Favor digitar um valor válido.');
        return false;
    }
    if(al == '' || al <= 0 || al == null){
        alert('Favor digitar um valor válido.');
        return false;
    }
    if(dd == '' || dd <= 0 || dd == null){
        alert('Favor digitar um valor válido.');
        return false;
    }
    if(at == '' || at <= 0 || at == null){
        alert('Favor selecionar um nível válido.');
        return false;
    }

    var basal = null;
    var manter = null;
    var ganhar = null;
    var perder = null;

    var pro_b = null;
    var car_b = null;
    var gor_b = null;

    var pro_m = null;
    var car_m = null;
    var gor_m = null;

    var pro_g = null;
    var car_g = null;
    var gor_g = null;

    var pro_p = null;
    var car_p = null;
    var gor_p = null;

    if(sx == 1){
        switch(at){
            case 1:
                basal = 66.5 + (13.8 * ps) + (5 * al) - (6.8 * dd);
                manter = basal * 1.2 + basal / 10;
                ganhar = manter + 500;
                perder = manter - 500;
                pro_b = basal / 100 * 30 / 4;
                car_b = basal / 100 * 50 / 4;
                gor_b = basal / 100 * 20 / 9;
                pro_m = manter / 100 * 30 / 4;
                car_m = manter / 100 * 50 / 4;
                gor_m = manter / 100 * 20 / 9;
                pro_g = ganhar / 100 * 30 / 4;
                car_g = ganhar / 100 * 50 / 4;
                gor_g = ganhar / 100 * 20 / 9;
                pro_p = perder / 100 * 30 / 4;
                car_p = perder / 100 * 50 / 4;
                gor_p = perder / 100 * 20 / 9;
                break;
            case 2:
                basal = 66.5 + (13.8 * ps) + (5 * al) - (6.8 * dd);
                manter = basal * 1.55 + basal / 10;
                ganhar = manter + 500;
                perder = manter - 500;
                pro_b = basal / 100 * 30 / 4;
                car_b = basal / 100 * 50 / 4;
                gor_b = basal / 100 * 20 / 9;
                pro_m = manter / 100 * 30 / 4;
                car_m = manter / 100 * 50 / 4;
                gor_m = manter / 100 * 20 / 9;
                pro_g = ganhar / 100 * 30 / 4;
                car_g = ganhar / 100 * 50 / 4;
                gor_g = ganhar / 100 * 20 / 9;
                pro_p = perder / 100 * 30 / 4;
                car_p = perder / 100 * 50 / 4;
                gor_p = perder / 100 * 20 / 9;
                break;
            case 3:
                basal = 66.5 + (13.8 * ps) + (5 * al) - (6.8 * dd);
                manter = basal * 1.725 + basal / 10;
                ganhar = manter + 500;
                perder = manter - 500;
                pro_b = basal / 100 * 30 / 4;
                car_b = basal / 100 * 50 / 4;
                gor_b = basal / 100 * 20 / 9;
                pro_m = manter / 100 * 30 / 4;
                car_m = manter / 100 * 50 / 4;
                gor_m = manter / 100 * 20 / 9;
                pro_g = ganhar / 100 * 30 / 4;
                car_g = ganhar / 100 * 50 / 4;
                gor_g = ganhar / 100 * 20 / 9;
                pro_p = perder / 100 * 30 / 4;
                car_p = perder / 100 * 50 / 4;
                gor_p = perder / 100 * 20 / 9;
                break;
            case 4:
                basal = 66.5 + (13.8 * ps) + (5 * al) - (6.8 * dd);
                manter = basal * 1.9 + basal / 10;
                ganhar = manter + 500;
                perder = manter - 500;
                pro_b = basal / 100 * 30 / 4;
                car_b = basal / 100 * 50 / 4;
                gor_b = basal / 100 * 20 / 9;
                pro_m = manter / 100 * 30 / 4;
                car_m = manter / 100 * 50 / 4;
                gor_m = manter / 100 * 20 / 9;
                pro_g = ganhar / 100 * 30 / 4;
                car_g = ganhar / 100 * 50 / 4;
                gor_g = ganhar / 100 * 20 / 9;
                pro_p = perder / 100 * 30 / 4;
                car_p = perder / 100 * 50 / 4;
                gor_p = perder / 100 * 20 / 9;
                break;
        }
    }
    if(sx == 2){
        switch(at){
            case 1:
                basal = 655 + (9.6 * ps) + (1.8 * al) - (4.7 * dd);
                manter = basal * 1.2 + basal / 10;
                ganhar = manter + 500;
                perder = manter - 500;
                pro_b = basal / 100 * 30 / 4;
                car_b = basal / 100 * 50 / 4;
                gor_b = basal / 100 * 20 / 9;
                pro_m = manter / 100 * 30 / 4;
                car_m = manter / 100 * 50 / 4;
                gor_m = manter / 100 * 20 / 9;
                pro_g = ganhar / 100 * 30 / 4;
                car_g = ganhar / 100 * 50 / 4;
                gor_g = ganhar / 100 * 20 / 9;
                pro_p = perder / 100 * 30 / 4;
                car_p = perder / 100 * 50 / 4;
                gor_p = perder / 100 * 20 / 9;
                break;
            case 2:
                basal = 655 + (9.6 * ps) + (1.8 * al) - (4.7 * dd);
                manter = basal * 1.55 + basal / 10;
                ganhar = manter + 500;
                perder = manter - 500;
                pro_b = basal / 100 * 30 / 4;
                car_b = basal / 100 * 50 / 4;
                gor_b = basal / 100 * 20 / 9;
                pro_m = manter / 100 * 30 / 4;
                car_m = manter / 100 * 50 / 4;
                gor_m = manter / 100 * 20 / 9;
                pro_g = ganhar / 100 * 30 / 4;
                car_g = ganhar / 100 * 50 / 4;
                gor_g = ganhar / 100 * 20 / 9;
                pro_p = perder / 100 * 30 / 4;
                car_p = perder / 100 * 50 / 4;
                gor_p = perder / 100 * 20 / 9;
                break;
            case 3:
                basal = 655 + (9.6 * ps) + (1.8 * al) - (4.7 * dd);
                manter = basal * 1.725 + basal / 10;
                ganhar = manter + 500;
                perder = manter - 500;
                pro_b = basal / 100 * 30 / 4;
                car_b = basal / 100 * 50 / 4;
                gor_b = basal / 100 * 20 / 9;
                pro_m = manter / 100 * 30 / 4;
                car_m = manter / 100 * 50 / 4;
                gor_m = manter / 100 * 20 / 9;
                pro_g = ganhar / 100 * 30 / 4;
                car_g = ganhar / 100 * 50 / 4;
                gor_g = ganhar / 100 * 20 / 9;
                pro_p = perder / 100 * 30 / 4;
                car_p = perder / 100 * 50 / 4;
                gor_p = perder / 100 * 20 / 9;
                break;
            case 4:
                basal = 655 + (9.6 * ps) + (1.8 * al) - (4.7 * dd);
                manter = basal * 1.9 + basal / 10;
                ganhar = manter + 500;
                perder = manter - 500;
                pro_b = basal / 100 * 30 / 4;
                car_b = basal / 100 * 50 / 4;
                gor_b = basal / 100 * 20 / 9;
                pro_m = manter / 100 * 30 / 4;
                car_m = manter / 100 * 50 / 4;
                gor_m = manter / 100 * 20 / 9;
                pro_g = ganhar / 100 * 30 / 4;
                car_g = ganhar / 100 * 50 / 4;
                gor_g = ganhar / 100 * 20 / 9;
                pro_p = perder / 100 * 30 / 4;
                car_p = perder / 100 * 50 / 4;
                gor_p = perder / 100 * 20 / 9;
                break;
        }
    }

    basal = basal.toFixed(2)
    manter = manter.toFixed(2)
    ganhar = ganhar.toFixed(2)
    perder = perder.toFixed(2)

    pro_b = pro_b.toFixed(2)
    car_b = car_b.toFixed(2)
    gor_b = gor_b.toFixed(2)

    pro_m = pro_m.toFixed(2)
    car_m = car_m.toFixed(2)
    gor_m = gor_m.toFixed(2)

    pro_g = pro_g.toFixed(2)
    car_g = car_g.toFixed(2)
    gor_g = gor_g.toFixed(2)

    pro_p = pro_p.toFixed(2)
    car_p = car_p.toFixed(2)
    gor_p = gor_p.toFixed(2)

    document.getElementById('basal').value = basal +' Kcal';
    document.getElementById('manter').value = manter +' Kcal';
    document.getElementById('ganhar').value = ganhar +' Kcal';
    document.getElementById('perder').value = perder +' Kcal';

    document.getElementById('proteinas-b').value = pro_b +' gr';
    document.getElementById('carboidratos-b').value = car_b +' gr';
    document.getElementById('gorduras-b').value = gor_b +' gr';

    document.getElementById('proteinas-m').value = pro_m +' gr';
    document.getElementById('carboidratos-m').value = car_m +' gr';
    document.getElementById('gorduras-m').value = gor_m +' gr';

    document.getElementById('proteinas-g').value = pro_g +' gr';
    document.getElementById('carboidratos-g').value = car_g +' gr';
    document.getElementById('gorduras-g').value = gor_g +' gr';

    document.getElementById('proteinas-p').value = pro_p +' gr';
    document.getElementById('carboidratos-p').value = car_p +' gr';
    document.getElementById('gorduras-p').value = gor_p +' gr';
}
