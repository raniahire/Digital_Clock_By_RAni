function updateClock () {
    let clock = new Date ();
    
    day_name = clock.getDay(),
    mo = clock.getMonth(),
    dnum = clock.getDate(),
    year = clock.getFullYear(),
    hour = clock.getHours(),
    min = clock.getMinutes(),
    sec = clock.getSeconds(),
    pe = 'AM';

    // nama hari
    day_names = ['Sunday','Monday','Tuesday','Wednesday','Thursday',"Friday",'Saturday'];
    // console.log(day_name);
    // if (day_name == 0) {
    //     day_name = 7;
    // }
    const result_day = day_names[day_name];
    // console.log(result_day);
    
    document.getElementsByClassName('day_name')[0].innerHTML = result_day +',';

    // bulan
    // console.log(mo);
    // mo_name = ['JANUARI','FEBRUARY'];
    // const result_mo = mo_name[mo];
    // document.getElementsByClassName('month')[0].innerHTML = result_mo;

    function mo_name () {
        mo_name = ['January','February','March', 'April','May', 'June', 'July','August','September','October','November','December'];
        const result_mo = mo_name[mo];
        document.getElementsByClassName('month')[0].innerHTML = result_mo;
    }

    mo_name ();

    // nomer hari
    // console.log(dnum);
    document.getElementsByClassName('day_num')[0].innerHTML = dnum + ',';

    // tahun
    // console.log(year);
    document.getElementsByClassName('year')[0].innerHTML = year;

    // jam
    // console.log(hour);
    document.getElementsByClassName('hour')[0].innerHTML = hour + ':';

    // menit
    // console.log(min);
    document.getElementsByClassName('minutes')[0].innerHTML = min + ':';

    // detik
    // console.log(sec);
    function detik() {
		// setTimeout(() => {
        //     detik();
        // }, 0);
        document.getElementsByClassName('seconds')[0].innerHTML = sec;
	}

    detik ();
    // setTimeout(() => {
    //     detik();
    // }), 0;
    // console.log(detik());

    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // return [day_name,mo,dnum,year,hour,min,sec]
    // return  pe;
    // return result_day;
    // return day_name;
    // return mo;
    // return hour;
    // return min;
    // return sec;

    setTimeout(() => {updateClock()}, 0)
}

updateClock();
// console.log(updateClock());