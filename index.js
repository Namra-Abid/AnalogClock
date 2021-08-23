setInterval(()=>{
        date=new Date();
        h_time=date.getHours();
        m_time=date.getMinutes();
        s_time=date.getSeconds();
        hrotation=30*h_time+m_time/2;
        mrotaion=6*m_time;
        srotation=6*s_time;
        hour.style.transform=  `rotate(${hrotation}deg)`;
        min.style.transform=  `rotate(${mrotaion}deg)`;
        sec.style.transform=  `rotate(${srotation}deg)`;
        console.log(mrotaion,srotation,hrotation,min.style.transform);
},1000);