
interface ICarachter {
   id:number,
    age: number
    name: string
    weapons: string[]
    isDark: boolean
    image: string,
   
};

export const fellowship:ICarachter[] = [
{
    id:5,
    name: "Gendalf",
    age: 2000,
    weapons: ["magic sword",  "magic staff"],
    isDark: false,
    image:"https://www.vlastelin-kolets.ru/Encyclopedia/Pics/gandalf.jpg",
    
},
{
    id:7,
    name: "Saruman",
    age: 1500,
    weapons: ["palantir"],
    isDark: true,
    image:"https://static.wikia.nocookie.net/pjmidearthfilms/images/4/48/Curunir3.jpg"
},
{
    id:8,
    name: "Frodo",
    age: 35,
    weapons: ["ring"],
    isDark: false,
    image:"https://imgcdn.stablediffusionweb.com/2024/2/24/f4dd7ebe-1b47-41ff-ab5f-541345f19c2b.jpg"
},
{
    id:6,
    name: "Gimli",
    age: 50,
    weapons: ["axt", "helmet"],
    isDark: false,
    image:"https://www.battlemerchant.com/media/image/b2/1f/e9/Die-Freundschaft-zwischen-Legolas-und-Gimli-in-Herr-der-Ringe.jpg"
},
{
    id:9,
    name: "Gollum",
    age: 80,
    weapons: [],
    isDark: true,
    image:"https://netrinoimages.s3.eu-west-2.amazonaws.com/2023/10/14/1580816/532108/gollum_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_5483596_m.jpg"
},

{
    id:4,
    name: "Arven",
    age: 500,
    weapons: ["elf magic"],
    isDark: false,
    image:"https://wiki.evendim.ru/images/thumb/f/f9/Arwen2.jpg/300px-Arwen2.jpg"
},




]