"use client"
import React,  { useState, useContext } from "react";


const Calendar = () => {
    const locale = 'es' //Spanish
    const actualDate = new Date();                    //Fehca completa de Hoy
    const actualYear = (actualDate).getFullYear();      //Año actual
    const actualMonth = (actualDate).getMonth();       //Numero de mes de Hoy (del 0 al 11)
    const actualDay = (actualDate).getDate();         //Numero de dia de Hoynpm 
    
//  Functions  
    let [renderedYear, setRenderedYear] = useState(actualYear);
    const goUpOneYear = () => {
        setRenderedYear(renderedYear + 1)
    }
    const goDownAYear = () => {
        setRenderedYear(renderedYear - 1)
    }
    
    //date(AAAA-MM-DD)
    const intlForMonths = new Intl.DateTimeFormat(locale, { month: "long" });
    const months = [...Array(12).keys()];
    
    const intlForWeeks = new Intl.DateTimeFormat(locale, { weekday: "short" });

    const weekDays = [...Array(7).keys()].map((dayIndex) =>
        intlForWeeks.format(new Date(2024, 3, dayIndex +1))); //Con esta fecha establesco el Lunes como 0 del arreglo y Domingo como 6 [0,1,..,5,6]
    
    
    const calendar = months.map(monthIndex => {
        const monthName = intlForMonths.format(new Date(renderedYear, monthIndex));
        const nextMonthIndex = (monthIndex + 1) % 12;
        const daysOfMonth = new Date(renderedYear, nextMonthIndex, 0).getDate();
        const days = [...Array(daysOfMonth).keys()];
        const startsDay = new Date(renderedYear, monthIndex, 1).getDay();  
        const startsOn = startsDay===0 ? 6 : startsDay-1;
        return {           //Arreglo de obj de 12 meses
            renderedYear,   //Número del año a renderizar 
            monthName,      //Nombre del mes
            days,           //Arreglo con la cantirar de dias del mes
            startsOn,       //Número de dia de la semana en que empieza dicho mes  [Lun 0, ...., Dom 6]
        };
    });


//Funcion para cambier entre mes previo y siguiente
    let [indexMonth, setIndexMonth] = useState(actualMonth);
    const prevMonth = index => {
        if (index === 0) {
            goDownAYear()
            setIndexMonth(11)
            setToggleToday(false)
        }else  {
            setIndexMonth(index - 1)
            setToggleToday(false)
        }
    }
    const nextMonth = index => {
        if (index == 11) {
            goUpOneYear()
            setIndexMonth(0)
            setToggleToday(false)
        } else {
            setIndexMonth(index + 1)
            setToggleToday(false)
        }

    }
    
//Funcion para seleccionar el dia
    let valuesSelectDay = {
        year:renderedYear,
        month:actualMonth,
        day:actualDay,
        nameOfDay: (new Date(renderedYear, actualMonth, actualDay).getDay())===0 ? 6 : (new Date(renderedYear, actualMonth, actualDay).getDay())-1
    }
    let [selectDay, setSelectDay] = useState(valuesSelectDay);
    const handleSelectDay = (year, month, day) => {
        let nameOfDay = new Date(year, month, day).getDay();   
        nameOfDay = nameOfDay===0 ? 6 : nameOfDay-1;
        valuesSelectDay = {
            year:year,
            month:month,
            day:day,
            nameOfDay:nameOfDay
        }
        setSelectDay(valuesSelectDay)
        setToggleToday(false)
    }


//  Funciton to add Event
    // let event = {
    //     id:'',
    //     doctor_id:'',
    //     emialPatient:'',
    //     date:'',
    //     timeFrom:'',
    //     timeTo:'',
    //     title:''
    // }
    const [toggleEvent, setToggleEvent] = useState(false)
    const handleClickToggleEvent = () => {
        setToggleEvent(!toggleEvent);
    }

    function handleSubmitAddEvent(e) {
        e.preventDefault();

    // Lee los datos del formulario
        const form = e.target;
        const formData = new FormData(form);
        const dataEvent = {
            eventName: formData.get('eventName'),
            eventTimeFrom: formData.get('eventTimeFrom'),
            eventTimeTo: formData.get('eventTimeTo'),
            date: selectDay
        }
        handleClickToggleEvent()
        console.log(dataEvent);
        alert('Su evento fue guardado exitosamente')
        // // Puedes pasar formData como el cuerpo de la consulta directamente:
        // fetch('/some-api', { method: form.method, body: formData });
    
        // // O puedes trabajar con él como un objecto plano:
        // const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson);
    }
    // const {addEvent, removeEvent, state } = useContext(AppContext); 
    // const handleClickAddToEvent = (selectDay,eventName, eventTimeFrom, eventTimeTo) => {
    //     alert(selectDay, eventName,eventTimeFrom,eventTimeTo);
    // }

    
//Funcion para ir al dia de HOY
    const [toggleToday, setToggleToday] = useState(true);
    const handleToggleToday  = ()  => {
        setIndexMonth(actualMonth)
        setRenderedYear(actualYear)
        handleSelectDay(actualYear,actualMonth,actualDay)
        setToggleToday(true);
    };



    //w-full md:w-1/2 lg:w-1/4 px-3 mb-6

//RENDER
    return (
        <div className="containercalendar">
            <div className="left">

                <div className="calendar">
            
                    <RenderedMonth
                    calendario={calendar}
                    weekDays={weekDays}
                    indexMonth={indexMonth}
                    actualMonth={actualMonth}
                    actualDay={actualDay}
                    toggleToday={toggleToday}
                    handleToggleToday={handleToggleToday}
                    prevMonth={prevMonth}
                    nextMonth={nextMonth}
                    handleSelectDay={handleSelectDay}
                    selectDay={selectDay}
                    />

                    <GotoDay 
                        handleToggleToday={handleToggleToday}
                    />
                </div>   
            </div>

            <div className="right">
                <SideBar 
                    calendario={calendar}
                    weekDays={weekDays}
                    indexMonth={indexMonth}
                    selectDay={selectDay}
                    toggleEvent={toggleEvent}
                    handleSubmitAddEvent={handleSubmitAddEvent}
                />
            

                <ButtonAddEvent
                    handleClickToggleEvent={handleClickToggleEvent}
                />
            </div>
        </div>
    );
}





function RenderedMonth({ calendario, weekDays, indexMonth ,actualMonth ,actualDay,toggleToday,prevMonth,nextMonth,handleSelectDay, selectDay}) {
    const cantidadDeDiasMesActual = (calendario[indexMonth].days).length ;     
    const ultimoDiaDelMesAnterior = indexMonth=== 0 ? 31 : (calendario[indexMonth - 1].days).length ; 
    let prevDaysArr = [];
    let nextDaysArr = [];
    for (let i = (ultimoDiaDelMesAnterior-calendario[indexMonth].startsOn+1); i <= (ultimoDiaDelMesAnterior); i++) {
        prevDaysArr.push(i);   
    }
    for (let i = 1 ; i <= (41 - cantidadDeDiasMesActual - calendario[indexMonth].startsOn + 1); i++) {
        nextDaysArr.push(i);
    }
    return (
        <>
          
            <div className="month">
                <i className="fas fa-angle-left prev" onClick={() => prevMonth(indexMonth)}>Prev</i>
                <h2 className="date">{calendario[indexMonth].monthName} {calendario[indexMonth].renderedYear} </h2>
                <i className="fas fa-angle-right next" onClick={() => nextMonth(indexMonth)}>Next</i>
            </div>
            <div className="">                
                    <div className="weekdays">
                        {weekDays.map((nameDay, index) => (
                            <div key={index} className="">{nameDay}</div>
                        ))}
                    </div>
                    <div className="days">
                        {prevDaysArr.map((day, index) => (
                             <div key={index} className="day prev-date"> {day}</div>
                        ))}
                        {calendario[indexMonth].days.map((day, index) => (
                            <div key={index}
                                className={
                                    (day+1==actualDay && indexMonth==actualMonth ? 
                                        (toggleToday ? 
                                            "day active" :
                                             "day today") 
                                             : (day+1==selectDay.day  && indexMonth==selectDay.month) 
                                             ? "day active" : "day")        
                                } 
                                onClick={() => handleSelectDay(calendario[indexMonth].renderedYear, indexMonth ,day+1)}> 
                                    {day + 1}
                            </div> 
                        ))}
                        {nextDaysArr.map((day,index) => (
                             <div key={index} className="day prev-date"> {day}</div>
                        ))}
                    </div>
            </div> 
        </>
    )
}

function RenderedWeek ({ calendario, weekDays, indexMonth ,actualMonth ,actualDay,toggleToday,prevMonth,nextMonth,handleSelectDay, selectDay}){
    return(
        <div className="week">
            <div className="month">
                <i className="fas fa-angle-left prev" onClick={() => prevMonth(indexMonth)}>Prev week</i>
                <h2 className="date">{calendario[indexMonth].monthName} {calendario[indexMonth].renderedYear} </h2>
                <i className="fas fa-angle-right next" onClick={() => nextMonth(indexMonth)}>Next week</i>
            </div>
            <div className="">                
                    <div className="weekdays">
                        {weekDays.map(nameDay,index => (
                            <div key={index} className="">{nameDay}</div>
                        ))}
                    </div>
                    <div className="days">
                        {/* {prevDaysArr.map((day,index) => (
                             <div className="day prev-date"> {day}</div>
                        ))} */}
                        {calendario[indexMonth].days.map((day, index) => (
                            <div key={index}
                                className={
                                    (day+1==actualDay && indexMonth==actualMonth ? 
                                        (toggleToday ? 
                                            "day active" :
                                             "day today") 
                                             : (day+1==selectDay.day  && indexMonth==selectDay.month) 
                                             ? "day active" : "day")        
                                } 
                                onClick={() => handleSelectDay(calendario[indexMonth].renderedYear, indexMonth ,day+1)}> 
                                    {day + 1}
                            </div> 
                        ))}
                        {/* {nextDaysArr.map((day,index) => (
                             <div className="day prev-date"> {day}</div>
                        ))} */}
                    </div>
            </div> 
        </div>
    );
}


function GotoDay ({handleToggleToday}) {
    return (
        <div className="goto-today">
                <div className="goto">
                    <input type="text" placeholder="mm/yyyy" className="date-input" />
                    <button className="goto-btn">Go</button>
                </div>
                <button className="today-btn" onClick={ handleToggleToday }>Today</button>
        </div>   
    )
}




function SideBar({calendario,weekDays,selectDay,toggleEvent,handleSubmitAddEvent}){
    return(
        <>
            <div className="today-date">
                <div className="event-date">{weekDays[selectDay.nameOfDay]}</div>
                {/* <div className="event-day">{selectDay.day} {calendario[selectDay.month].monthName} {selectDay.year}</div> */}
                <div className="event-date">{selectDay.day} {calendario[selectDay.month].monthName} {selectDay.year}</div>
            </div> 
            <form action="/" onSubmit={handleSubmitAddEvent}>
                <div className="events"></div>
                <div className={toggleEvent ? "add-event-wrapper active": "add-event-wrapper" }>
                <div className="add-event-header">
                    <div className="title">Add Event</div>
                    <i className="fas fa-times close"></i>
                </div>
                <div className="add-event-body">
                    <div className="add-event-input">
                    <input 
                        name="eventName" 
                        type="text" 
                        placeholder="Event Name" 
                        className="event-name" 
                    />
                    </div>
                    <div className="add-event-input">
                    <input
                        name="eventTimeFrom"
                        type="text"
                        placeholder="Event Time From"
                        className="event-time-from"
                    />
                    </div>
                    <div className="add-event-input">
                    <input
                        name="eventTimeTo"
                        type="text"
                        placeholder="Event Time To"
                        className="event-time-to"
                    />
                    </div>
                </div>
                <div className="add-event-footer">
                    <button type="submit" className="add-event-btn">Add Event</button>
                </div>
                </div>  
            </form>         
        </>
    )
}

function  ButtonAddEvent({handleClickToggleEvent}){
    return(
        <button className="add-event" onClick={handleClickToggleEvent}> 
            <i className="fas fa-plus" >+</i>
            
        </button>
    );
}



export default Calendar;

