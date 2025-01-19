export default function SpaceMission(){

    let shipName:string='Stargate';

    let crewCount:number = 3;

    let isMissionStarted: boolean = true;

    const crewNames:string[] = ['Nil Armstrong', 'Maikl Kollins', 'Bazz Oldrin'];

    const capitan:readonly [string, number] = ['Nil Armstrong', 45];

    function startMission(shipName: string):string {

        return `Миссия  + '${shipName}' +  началась!`;
    }


    
    return(
        <div>
<h2> Название миссии {shipName}</h2>
<p> Экипаж: {crewCount} человека </p>
<ul>
                Список членов экипажа:
                {crewNames.map((name, index) => (
                    <li key={index}>{name}</li> 
                ))}
            </ul>
<p>Капитан корабля: {capitan[0]} возраст {capitan [1]} лет </p>

{isMissionStarted ? <p> Сообщение: {startMission(shipName)} </p> : null}

        </div>
    );
}