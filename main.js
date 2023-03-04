const inputEnterPin = document.getElementById('inputEnterPin');
const btnSend = document.getElementById('btnSend');

const contaier1 = document.getElementById('contaier1');
const container3 = document.getElementById('container3');



btnSend.addEventListener('click', () => {
    let enterCode = "*770#"
    if(inputEnterPin.value === enterCode){
        contaier1.style.display = "none"
        container2.style.display = "block"
    }else{
        alert('ShortCode aad garaacday ma ahan mid jira')
    }
   

   inputEnterPin.value = '';
})



// .................... Qeebta EVCLPUS PIN-KA..........................

const container2 = document.getElementById('container2')
const btnSend2 = document.getElementById('btnSend2');
const geliPinkaaga = document.getElementById('geliPin-kaaga');

btnSend2.addEventListener('click', () =>{

    let pin = '1425';
    if(geliPinkaaga.value === pin){
       
        container2.style.display = "none";
        container3.style.display="block"

       
    }else{
        alert('Pin-kaaga waa qalad Xubi mar labaad')
    }
  

geliPinkaaga.value= '';
})


// .................qeebta Adeegyada EVCPLUS ..................



const btnSend3 = document.getElementById('btnSend3');
const inputDooro = document.getElementById('inputDooro')
const container4 = document.getElementById('container4')
const container5 = document.getElementById('container5')
const container6 = document.getElementById('container6')
const container7 = document.getElementById('container7')
const container8 = document.getElementById('container8')
const container9 = document.getElementById('container9')
const container10 = document.getElementById('container10')
const container11 = document.getElementById('container11')
const container12 = document.getElementById('container12')
const container13 = document.getElementById('container13')
const container14 = document.getElementById('container14')
const container15 = document.getElementById('container15')
const container16 = document.getElementById('container16')
const container17 = document.getElementById('container17')

// .......................... sub container.......................

const sub_container5_1 =  document.querySelector('#sub_container5_1')
const sub_container5_2 =  document.querySelector('#sub_container5_2')


btnSend3.addEventListener('click', () => {
    //  haraagaaga();
    //  kaarkaHadalka();
    const haragag = document.getElementById('haragag')
    
    let num1 = '1';
    let num2 = '2';
    let num3 = '3';
    let num4 = '4';
    let num5 = '5';
    let num6 = '6';
    let num7 = '7';
    let num8 = '8';
    let num9 = '9';
   
  
    if(inputDooro.value === num1){
        // .................Qeebta Haraagaaga.........................


        let balance =  44;
        container4.style.display="block"
            container3.style.display = "none"
            haragag.innerText= 'Haraagagu waa $' + balance + ''
           haragag.classList= 'text-white tex-2xl text-center p-6'

    }else if(inputDooro.value === num2){
        // ..............................Qeebta Kaarka hadalka.......................


        const KuShuboAirtime = document.getElementById('KuShuboAirtime')
        const uguShubAirtime = document.getElementById('uguShubAirtime')
        const MIFIPacheges = document.getElementById('MIFIPacheges')
        const KUshuboInternet = document.getElementById('KUshuboInternet')
        const uguShubQofkle = document.getElementById('uguShubQofkle')
        
      
        container5.style.display = "block";
        container3.style.display = "none";
        container4.style.display= "none"

        uguShubAirtime.innerText = "1- Ugu shub airtime"
        uguShubAirtime.classList = 'text-white text-lg pl-10 pt-2'

        MIFIPacheges.innerText = "2- MIFI pacheges"
        MIFIPacheges.classList = 'text-white text-lg pl-10 pt-2'

        KUshuboInternet.innerText = "3- Ku shub internet"
        KUshuboInternet.classList = 'text-white text-lg pl-10 pt-2'

        uguShubQofkle.innerText = "4- Ugu shub qof kale"
        uguShubQofkle.classList = 'text-white text-lg pl-10 pt-2'
        
        


    } else if(inputDooro.value === num3){
        // ...................Qeebta Bixi biilka..........................



        const postPaiud = document.getElementById('postPaiud')
        const kuIibso = document.getElementById('kuIibso')
        container2.style.display = "none";
        container3.style.display="none"
        container6.style.display = 'block'
        container3.style.display = "none"

        postPaiud.innerText = '1- Post Paid';
        postPaiud.classList = '2- text-white text-lg pl-10 pt-2'

        kuIibso.innerText = '2-Post Paid';
        kuIibso.classList = 'text-white text-lg pl-10 pt-2'



    } else if(inputDooro.value === num4){
        // ................Qeebta Uwareeji EVCplus.....................



        
        const galiNumberka = document.getElementById('galiNumberka')
        container3.style.display = "none"
        container6.style.display = "none"
        container7.style.display = "block"
      

        galiNumberka.innerText = "1-fadlan gali mobile-ka"
        galiNumberka.classList = 'text-white text-lg pl-10 pt-2'

       
    }else if(inputDooro.value === num5){

        // .................Warbixin Kooban.........................
        
        container11.style.display = "block"
        container3.style.display = "none"

        const lastAction = document.getElementById('lastAction')
        const wareejintiUguDanbeytay = document.getElementById('wareejintiUguDanbeytay')
        const iibashadiUguDanbeytay = document.getElementById('iibashadiUguDanbeytay')
        const last3Action = document.getElementById('last3Action')


        last3Action.innerText = '1- Last action'
        last3Action.classList = 'text-white text-lg pl-10 pt-2'


        wareejintiUguDanbeytay.innerText = "2- wareejintii ugu dambay"
        wareejintiUguDanbeytay.classList = 'text-white text-lg pl-10 pt-2'


        iibashadiUguDanbeytay.innerText = "3- iibashadii ugu dambsay"
        iibashadiUguDanbeytay.classList='text-white text-lg pl-10 pt-2'


        last3Action.innerText="4- Last 3 actions"
        last3Action.classList ='text-white text-lg pl-10 pt-2'
    }else if(inputDooro.value === num6){


        // ....................Salaam bank....................


        container12.style.display = "block"
        container3.style.display="none"

        const kawareejiEvcplus = document.getElementById('kawareejiEvcplus')
        kawareejiEvcplus.innerText = '1- Kawareeji EVCPLUS'
        kawareejiEvcplus.classList = 'text-white text-lg pl-10 pt-2';
    }else if(inputDooro.value === num7){


        // ........................Kordhi xisaabtaada...........................
        container14.style.display = 'block';
        container3.style.display = 'none'
    }else if(inputDooro.value === num8){



        // .............................maareynta...................
        container16.style.display = "block"
        container3.style.display = "none"

        const bedelNumberSirta = document.getElementById('bedelNumberSirta')
        const bedelLuqada = document.getElementById('bedelLuqada')
        const wargeliMobilelumay = document.getElementById('wargeliMobilelumay')
        const lacagXirasho = document.getElementById('lacagXirasho')
        const uceliLacagQaldanty = document.getElementById('uceliLacagQaldanty')
       

        bedelNumberSirta.innerText = "1- Bedel lambarka sirta ah";
        bedelNumberSirta.classList= 'text-white text-lg pl-10 pt-2'

        bedelLuqada.innerText = "2- Bedel Luqada";
        bedelLuqada.classList= 'text-white text-lg pl-10 pt-2'

        wargeliMobilelumay.innerText = "3- Wargelin mobile lumay";
        wargeliMobilelumay.classList= 'text-white text-lg pl-10 pt-2'


        lacagXirasho.innerText = "4- Lacag xirasho";
        lacagXirasho.classList= 'text-white text-lg pl-10 pt-2'

        uceliLacagQaldanty.innerText = "5 - U celi lacag qaldantay";
        uceliLacagQaldanty.classList= 'text-white text-lg pl-10 pt-2'
    }else if(inputDooro.value === num9){



        // ........................Bill paymeny..........................
        container17.style.display = "block";
        container3.style.display= "none"

        const itusHraagaBilka = document.getElementById('itusHraagaBilka')
        const wadaBixiBiilka = document.getElementById('wadaBixiBiilka')
        const qeybKabixiBilka = document.getElementById('qeybKabixiBilka')


        itusHraagaBilka.innerText = "1- itus Haraaga Biil-ka"
        itusHraagaBilka.classList = "text-white text-lg pl-10 pt-2"

        wadaBixiBiilka.innerText = "2- Wada bixi Biil-ka"
        wadaBixiBiilka.classList = "text-white text-lg pl-10 pt-2"

        qeybKabixiBilka.innerText = "3- Qayb ka bixi Biilka"
        qeybKabixiBilka.classList = "text-white text-lg pl-10 pt-2"
    }
    else{
        alert('Fadlan dooro Adeegyada aad rabto')
    }
 

   inputDooro.value = '';
})
// ................................. ka shaqeenta kaarta ku hadalka.....................
const btn_kaarkuhadal = document.querySelector('#Kaardka_kuhadal')
btn_kaarkuhadal.addEventListener('click', () => {
    const KuShuboAirtime_selection = 1
    if (KuShuboAirtime_selection == 1){
        sub_container5_1.style.display = 'block'
        
        container5.style.display = "none";
        container3.style.display = "none";
        container4.style.display= "none"
    }


})
const sub_btn_1 = document.querySelector('#sub_btn_1')
sub_btn_1.addEventListener('click', () => {
    
   
    sub_container5_2.style.display = 'block'
    sub_container5_1.style.display = 'none'
        
    container5.style.display = "none";
    container3.style.display = "none";
    container4.style.display= "none"

})

const sub_btn_2 = document.querySelector('#sub_btn_2')

sub_btn_2.addEventListener('click', () => {
    const ma_hubta  = document.querySelector('#ma_hubta')
    const kushubo_aritme_input = document.querySelector('#kushubo_aritme_input')
    geli_lacagta = kushubo_aritme_input.value

    ma_hubta.innerHTML = 'Ma Hubtaa inaad ' + geli_lacagta  + ' ugu shubtid undefined'
    ma_hubta.classList = "text-white text-lg pl-10 pt-2"
               
})


//.......................Kashaqeeynta Uwareeji EVCPLUS.....................

const btn4 = document.getElementById('btn4');
const galiMobilKa = document.getElementById('galiMobil-ka');


btn4.addEventListener('click', () => {
   let numbers = galiMobilKa.value;
   if(numbers.match(numbers))
    {
        container8.style.display = "block"
        container3.style.display = "none"
        container6.style.display = "none"
        container7.style.display = "none"
    return true;
    }
    else{
        alert('qalad waaye')
        return false
    }
 
galiMobilKa.value='';
});



const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {
    let numbers = galiMobilKa.value;
    const galilacgta = document.getElementById('galilacgta');
    let hubinLacgta = galilacgta.value;
   container9.style.display = "block"
   container8.style.display = "none"
   const mahubta = document.getElementById('mahubtaa')
   mahubta.innerText = ('ma hubtaa in numberkan ' + numbers + ' aad uwareejisid lacag dhan $' + hubinLacgta);
   mahubta.classList = "text-white text-lg pl-10 pt-2"


   const haa  = document.getElementById('Haa')
   haa.innerText = "1- Haa";
   haa.classList = "text-white text-lg pl-10 pt-2"

   const maya  = document.getElementById('Maya')
   maya.innerText = "2-Maya";
   maya.classList = "text-white text-lg pl-10 pt-2"
})


const haaWanHubaa = document.getElementById('haaWanhubaa')
const btn6 = document.getElementById('btn6')

btn6.addEventListener('click', () => {
    let hadi1Ladoorto = haaWanHubaa.value;
    const weyBaxdayLacgta = document.getElementById('weyBaxdayLacgta')
    const galilacgta = document.getElementById('galilacgta');
    let balance = 40 

    if(hadi1Ladoorto === '1'){
        let numbers = galiMobilKa.value;
        let hubinLacgta = galilacgta.value;
        container10.style.display = "block"
        container9.style.display = "none"
        container8.style.display = "none"
    
        let send_balance = galilacgta - balance
       weyBaxdayLacgta.innerText = ('waxaad numberkan ' + numbers + ' lacag dhan ' + hubinLacgta + ' haraagaagu waa ' + send_balance)
       weyBaxdayLacgta.classList = "text-white text-lg pl-10 pt-2"
    }else if(hadi1Ladoorto === '2'){
        container9.style.display = "none"
        contaier1.style.display = 'block'
    }
   
})



const kawaarejiEvcplusToSalamBak = document.getElementById('kawaarejiEvcplusToSalamBak');
const btn7 = document.getElementById('btn7');


btn7.addEventListener('click', () => {
    if(kawaarejiEvcplusToSalamBak.value === '1'){
    container13.style.display = 'block'
    container12.style.display = 'none'

    const salaamSomaliaBnak = document.getElementById('salaamSomaliaBnak')
    const salaamSOH = document.getElementById('salaamSOH')

    salaamSomaliaBnak.innerText = '1- Salaam Somalia Bank'
    salaamSomaliaBnak.classList = 'text-white text-lg pl-10 pt-2'

    
    salaamSOH.innerText = '1- Salaam SOH'
    salaamSOH.classList = 'text-white text-lg pl-10 pt-2'
    }

    kawaarejiEvcplusToSalamBak.value = '';
})




const btn8 = document.getElementById('btn8');

const forms = document.getElementById('forms')
btn8.addEventListener('click', () => {
    container15.style.display = "block"
    container14.style.display="none"

    const waalaguuKordhiyey = document.getElementById('waalaguuKordhiyey');
    waalaguuKordhiyey.innerText = "Macaamiil xisaabtaada waa laguu kordhiyey"
    waalaguuKordhiyey.classList = 'text-white text-lg pl-10 pt-2'

    
})

const btn9 = document.getElementById('btn9');
btn9.addEventListener('click', () => {
    contaier1.style.display = "block"
    container15.style.display = "none"
})


const btn10 = document.getElementById('btn10');
btn10.addEventListener('click', () => {
    contaier1.style.display = "block"
    container16.style.display="none"
})




const btn11 = document.getElementById('btn11');
btn11.addEventListener('click', () => {
    contaier1.style.display = "block"
    container17.style.display="none"
})

