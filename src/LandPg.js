import QuizPg from "./QuizPg";
import QuizPgMob from "./QuizPgMob";
import { useState, useEffect, useRef } from "react"

const LandPg = () => {
    let [genre,setGenre] = useState('anime')
    let [activate,setActivate] = useState(false)
    let bg
    let qSet = []
    let mobile = false
    let [diff,set_Diff] = useState('0')
    let [dd, setDD] = useState('On')
    const diffSelectRef = useRef(null)
    let [diffAnchor, setDA] = useState('0')
    let catInfo 

    if(window.innerWidth <=820){
        mobile = true
    }
    if(window.innerWidth >820){
        mobile = false
    }
    let AnimeEasy = [
        {id: 0, q: "In the Naruto anime, Team 7 originally comprised of...", a: "Naruto, Sasuke and Sakura", opt1: "Naruto, Sakura and Sai", opt2: "Sasuke, Suigetsu and Karin", opt3: "Kakashi, Obito and Tsunade", opt4: "Naruto, Sasuke and Sakura", check: 'unanswered'},
        {id: 1, q: "Goku's most iconic move is the...", a: "Kamehameha", opt1: "Spiritual Bomb", opt2: "Hair color change", opt3: "Kaioken", opt4: "Kamehameha", check: 'unanswered'},
        {id: 2, q: "In the One piece anime, can pirates who have eaten devil fruits swim?", a: "Definitely not", opt1: "Absolutely. Why not", opt2: "Yes but for a short while", opt3: "It depends on their power level", opt4: "Definitely not", check: 'unanswered'},
        {id: 3, q: "What does 'Kawaii' mean in English?", a: "Cute", opt1: "Awesome", opt2: "Beautiful", opt3: "Cool", opt4: "Cute", check: 'unanswered'},
        {id: 4, q: "Who's the god of destruction in universe 7?", a: 'Beerus', opt1: 'Borus', opt2: 'Kratos', opt3: 'Bezos', opt4: 'Beerus', check: 'unanswered'},
        {id: 5, q: "What is All Might's quirk?", a: "One for All", opt1: "All for One", opt2: "The hero quirk", opt3: "Plot armor", opt4: "One for All", check: 'unanswered'},
        {id: 6, q: "Ryuk, the Death god, is from which anime?", a: "Death Note", opt1: "Death Parade", opt2: "Death Billiards", opt3: "Deadman Wonderland", opt4: "Death Note", check: 'unanswered'},
        {id: 'last', q: '-', a: '-', opt1: '-', opt2: '-', opt3: '-', opt4: '-', check: 'unanswered'}
    ]
    let AnimeMedium = [
        {id: 0, q: "Which clan is Minato from in the Naruto anime?", a: 'The Namikaze clan', opt1: 'The hidden flash clan', opt2: 'The Shinobi clan', opt3: 'The Uzumaki clan', opt4: 'The Namikaze clan', check: 'unanswered'},
        {id: 1, q: "Chakra is to Naruto as ___ is to Dragonball.", a: "Ki", opt1: "Energy", opt2: "Mana", opt3: "Power", opt4: "Ki", check: 'unanswered'},
        {id: 2, q: "This anime has super strong ants?", a: 'Hunter x Hunter', opt1: 'Bakemonogatari', opt2: 'Quantumania', opt3: "A Bug's life", opt4: 'Hunter x Hunter', check: 'unanswered'},
        {id: 3, q: 'Where the heck is the one piece?', a: 'On the last island of the Grand Line', opt1: 'At the end of the world', opt2: 'On the moon', opt3: 'On the last mountain of the Grand Line', opt4: 'On the last island of the Grand Line', check: 'unanswered'},
        {id: 4, q: "How many Hokages have there ever been?", a: "7", opt1: "8", opt2: "5", opt3: "10", opt4: "7", check: 'unanswered'},
        {id: 5, q: "The protagonist of the Rurouni Kenshin (Samurai X) anime was formerly called...", a: "Himura the battousai", opt1: "Kenshin the terrorist", opt2: "Samurai X", opt3: "Himura the samurai", opt4: "Himura the battousai" , check: 'unanswered'},
        {id: 6, q: "What does 'Kakkoi' mean in English", a: "Cool", opt1: "Cute", opt2: "Interesting", opt3: "Special", opt4: "Cool", check: 'unanswered'},
        {id: 'last', q: '-', a: '-', opt1: '-', opt2: '-', opt3: '-', opt4: '-', check: 'unanswered'},
    ]
    let AnimeHard = [
        {id: 0, q: "What is the highest grossing anime movie of all time?", a: "Kimetsu no Yaiba: Infinity train", opt1: "Shingeki no Kyojin: Mugen train", opt2: "Spirited Away", opt3: "Dragonball Evolution", opt4: "Kimetsu no Yaiba: Infinity train", check: 'unanswered'},
       {id: 1, q: "Who's Goku's granddaughter?", a: "Pan", opt1: "Videl", opt2: "Goku doesn't have a granddaughter", opt3: "Arale", opt4: "Pan", check: 'unanswered'},
        {id: 2, q: "The name of the original Strawhat Pirates ship.", a: "The Thousand Sunny", opt1: "The Sunny Go", opt2: "The Going Merry", opt3: "The Strawhat ship", opt4: "The Thousand Sunny", check: 'unanswered'},
        {id: 3, q: "What's Ichigo's sword named in Bleach?", a: "Zangetsu", opt1: "Suigetsu", opt2: "Zamatsu", opt3: "Bankai", opt4: "Zangetsu", check: 'unanswered'},
       {id: 4, q: "In Jujutsu Kaisen, Sukuna's domain expansion is the...", a: "Malevolent shrine", opt1: "Demon shrine", opt2: "Irrefutable shrine", opt3: "Cursed shrine", opt4: "Malevolent shrine", check: 'unanswered'},
       {id: 5, q: "Who is nicknamed 'the strongest creature in history' in the Baki anime?", a: "Yuujiro Hanma", opt1: "Baki Hanma", opt2: "Hector Doyle", opt3: "Kaoru Hanayama", opt4: "Yuujiro Hanma", check: 'unanswered'},
       {id: 6, q: "What does 'Akuma' mean in English?", a: "Demon", opt1: "Death", opt2: "Devil", opt3: "Curse", opt4: "Demon", check: 'unanswered'},
        {id: 'last', q: '-', a: '-', opt1: '-', opt2: '-', opt3: '-', opt4: '-', check: 'unanswered'},
    ]
    let AnimeSuper = [
        {id: 0, q: "How many times has Goku technically died in the Dragonball franchise?", a: "7 times", opt1: "Never. He's too freaking strong!", opt2: "3 times. One for each mainline series.", opt3: "5 times", opt4: "7 times", check: 'unanswered'},
        {id: 1, q: "In the Bakemonogatari anime, what is the strongest apprition's full name?", a: "Kiss-Shot Acerola-Orion Heart-Under-Blade", opt1: "Shinobu Ever-Glow Estrada no Cherry", opt2: "Sakura Cherryblossom Nightingale II", opt3: "Elizabeth Lionheart Obsquorada", opt4: "Kiss-Shot Acerola-Orion Heart-Under-Blade", check: 'unanswered'},
        {id: 2, q: "In the Hunter x Hunter anime, what is Killua's mother's name?", a: "Kikyo Zoldyck", opt1: "Slivia Zoldyck", opt2: "Miria Zoldyck", opt3: "Kimiko Zoldyck", opt4: "Kikyo Zoldyck", check: 'unanswered'},
        {id: 3, q: "What class is Smile man ranked in the One punch man anime?", a: "A-class", opt1: "S-class", opt2: "C-class", opt3: "B-class", opt4: "A-class", check: 'unanswered'},
        {id: 4, q: "What is All Might's real name in My Hero Academia?", a: "Toshinori Yagi", opt1: "Toshimada Senjo", opt2: "Yoshino Yamada", opt3: "Akimara Yamato", opt4: "Toshinori Yagi", check: 'unanswered'},
        {id: 5, q: "Who is the commandment of patience in the Seven deadly sins anime?", a: "Drole", opt1: "Estarossa", opt2: "Mael", opt3: "Zeldris", opt4: "Drole", check: 'unanswered'},
        {id: 6, q: "What servant class is Gilgamesh in the Fate series?", a: "Archer class", opt1: "Gunner class", opt2: "Rider class", opt3: "Mage class", opt4: "Archer class", check: 'unanswered'},
        {id: 'last', q: '-', a: '-', opt1: '-', opt2: '-', opt3: '-', opt4: '-', check: 'unanswered'},
    ]

    let AnimeQtns = [
        AnimeEasy,
        AnimeMedium,
        AnimeHard,
        AnimeSuper,
    ]

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    let GenEasy = [
        {id: 0, q: "Which is the only body part that is fully grown from birth?", a: "Eyes", opt1: "Teeth", opt2: "Cerebellum", opt3: "Ossicles", opt4: "Eyes", check: "unanswered"},
        {id: 1, q: "What planet is closest to the sun?", a: "Mercury", opt1: "Venus", opt2: "Mars", opt3: "Namek", opt4: "Mercury", check: "unanswered"},
        {id: 2, q: "Who is considered the first Disney princess?", a: "Snow White", opt1: "Cinderella", opt2: "Belle", opt3: "Aurora", opt4: "Snow White", check: "unanswered"},
        {id: 3, q: "What part of a plant conducts photosynthesis?", a: "The Leaves", opt1: "The stem", opt2: "The root", opt3: "The plumule", opt4: "The Leaves", check: "unanswered"},
        {id: 4, q: "Dogs bark, cats meow, crows ...", a: "Caw", opt1: "Scream", opt2: "Creek", opt3: "Cry", opt4: "Caw", check: "unanswered"},
        {id: 5, q: "The apex predator of the sea is the...", a: "Orca (Killer whale)", opt1: "Great white shark", opt2: "Blue whale", opt3: "Megalodon", opt4: "Orca (Killer whale)", check: "unanswered"},
        {id: 6, q: "Which are the farmer's best friend?", a: "Earthworms", opt1: "Dogs", opt2: "Cats", opt3: "Scarecrows", opt4: "Earthworms", check: "unanswered"},
        {id: 'last', q: '-', a: '-', opt1: '-', opt2: '-', opt3: '-', opt4: '-', check: 'unanswered'},
    ]
    let GenMedium = [
        {id: 0, q: "How many dots appear on a pair of dice?", a: "42", opt1: "21", opt2: "84", opt3: "12", opt4: "42", check: "unanswered"},
        {id: 1, q: "How many seconds are in one and a half hours", a: "5400 seconds", opt1: "3600 seconds", opt2: "7200 seconds", opt3: "1440 seconds", opt4: "5400 seconds", check: "unanswered"},
        {id: 2, q: "Cats have how many lives?", a: "Just one", opt1: "9 lives", opt2: "7 lives", opt3: "2 lives", opt4: "Just one", check: 'unanswered'},
        {id: 3, q: "How many tertiary colors are there?", a: "6", opt1: "12", opt2: "3", opt3: "What are tertiary colors?", opt4:"6", check: 'unanswered'},
        {id: 4, q: "Who is the father of Zeus in Greek mythology?", a: "Kronos", opt1: "Chaos", opt2: "Calamity", opt3: "No one. He just always existed.", opt4: "Kronos", check: 'unanswered'},
        {id: 5, q: "The largest animal of all time is the...", a: "Blue whale", opt1: "Tyrannosaurus Rex", opt2: "Megalodon", opt3: "Sperm whale", opt4: "Blue whale", check: 'unanswered'},
        {id: 6, q: "The gestation period in humans usually lasts how long?", a: "About 40 weeks", opt1: "50 weeks", opt2: "20 weeks", opt3: "10 months", opt4: "About 40 weeks", check: 'unanswered'},
        {id: 'last', q: '-', a: '-', opt1: '-', opt2: '-', opt3: '-', opt4: '-', check: 'unanswered'},
    ]
    let GenHard = [
        {id: 0, q: "What is a group of crows called?", a: "A murder", opt1: "A gang", opt2: "A flight", opt3: "A sweep", opt4: "A murder", check: "unanswered"},
        {id: 1, q: "The old capital of Japan is...", a: "Kyoto", opt1: "Tokyo", opt2: "Hiroshima", opt3: "Nagasaki", opt4: "Kyoto", check: "unanswered"},
        {id: 2, q: "How many elements are in the periodic table?", a: "118", opt1: "120", opt2: "98", opt3: "102", opt4: "118", check: "unanswered"},
        {id: 3, q: "A female donkey is called?", a: "A jenny", opt1: "An ass", opt2: "A laughing stock", opt3: "A joe", opt4: "A jenny", check: 'unanswered'},
        {id: 4, q: "What operating system did the iphone IX mainly run on?", a: "None", opt1: "ios 10", opt2: "ios 12", opt3: "ios 9", opt4: "None", check: 'unanswered'},
        {id: 5, q: "How many hearts do octopuses have?", a: "3 hearts", opt1: "Just one", opt2: "2 hearts", opt3: "3 hearts" , opt4: "5 hearts", check: 'unanswered'},
        {id: 6, q: "DJ is short for...", a: "Disc Jockey", opt1: "DJango", opt2: "Disco Jammer", opt3: "Digital Joe", opt4: "Disc Jockey",check: 'unanswered'},
        {id: 'last', q: '-', a: '-', opt1: '-', opt2: '-', opt3: '-', opt4: '-', check: 'unanswered'},
    ]
    let GenSuper = [
        {id: 0, q: "How many keys are there on a piano?", a: "88", opt1: "77", opt2: "99", opt3: "100", opt4: "88", check: "unanswered"},
        {id: 1, q: "What does LG stand for in LG Electronics?", a: "Lucky-Goldstar", opt1: "Life is Good", opt2: "Doesn't mean anything", opt3: "Lee and Gyeong", opt4: "Lucky-Goldstar", check: "unanswered"},
        {id: 2, q: "What's the distance from the Earth to the Sun?", a: "~150 Mkm", opt1: "1.02 Gkm", opt2: "1096 km", opt3: "~170 Mkm", opt4: "~150 Mkm", check: "unanswered"},
        {id: 3, q: "Usain Bolt does not hold the world record for...", a: "4 x 200 metres relay", opt1: "100-meter dash", opt2: "200-meter dash", opt3: "4 x 100 metres relay", opt4: "4 x 200 metres relay", check: "unanswered"},
        {id: 4, q: "Vantablack is the darkess shade of black. How much light does it absorb?", a: "99.965%", opt1: "99.57%", opt2: "99.33%", opt3: "99.98%", opt4: "99.965%", check: "unanswered"},
        {id: 5, q: "How many bones are present in the average human adult?", a: "206 bones", opt1: "212 bones", opt2: "119 bones", opt3: "217 bones",opt4: "206 bones", check: 'unanswered'},
        {id: 6, q: "What's the solution to 144exp(-2)", a: "~0", opt1: "12", opt2: "72", opt3: "Mathematicall error", opt4: "~0", check: 'unanswered'},
        {id: 'last', q: '-', a: '-', opt1: '-', opt2: '-', opt3: '-', opt4: '-', check: 'unanswered'},

    ]
    let GenQtns = [
        GenEasy,
        GenMedium,
        GenHard,
        GenSuper,
    ]
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let GamesEasy = [
        {id: 0, q: 'What is the name of the only female toad in the Mario game series?', a: 'Toadette', opt1: 'Peaches', opt2: 'Froggie', opt3: 'Toadita', opt4: 'Toadette', check: 'unanswered'},
        {id: 1, q: "How many hits does it take to defeat the average Mario boss?", a: "3 hits", opt1: "5 hits", opt2: "10 hits", opt3: "7 hits", opt4: "3 hits", check: 'unanswered'},
        {id: 2, q: "Doom is ...", a: 'ETERNAL', opt1: 'Just a video game', opt2: 'IMMORTAL', opt3: 'BLISS', opt4: 'ETERNAL', check: 'unanswered'},
        {id: 3, q: 'Captain Falcon wants you to show him your ...', a: 'Moves!', opt1: 'Power!', opt2: 'Hands!', opt3: 'Teeth!', opt4: 'Moves!', check: 'unanswered'},
        {id: 4, q: "Who is popularly known to wield the Buster blade?", a: "Cloud Strife", opt1: "The Buster blader", opt2: "Zack", opt3: "Dante", opt4: "Cloud Strife", check: 'unanswered'},
        {id: 5, q: "Who is the main character in the Legend of Zelda games", a: "Link", opt1: "Zelda", opt2: "The Hero", opt3: "Prince Sidon", opt4: "Link", check: 'unanswered'},
        {id: 6, q: "How many chaos emeralds does Sonic need to transform to Super Sonic?", a: "7 emeralds", opt1: "5 emeralds", opt2: "3 emeralds", opt3: "10 emeralds", opt4: "7 emeralds", check: 'unanswered'},
        {id: 'last', q: '-', a: '-', opt1: '-', opt2: '-', opt3: '-', opt4: '-', check: 'unanswered'},
    ]
    let GamesMedium = [
        {id: 0, q: 'What is the best selling video game console of all time?', a: 'PlayStation 2', opt1: 'PlayStation 4', opt2: 'Nintendo Switch', opt3: 'Xbox 720', opt4: 'PlayStation 2', check: 'unanswered'},
        {id: 1, q: "How many hearts do players start off with in the Zelda games?", a: "3 hearts", opt1: "5 hearts", opt2: "1 heart", opt3: "10 hearts", opt4: "3 hearts", check: 'unanswered'},
        {id: 2, q: "Charizard is what type of pokemon?", a: "Fire, flying type", opt1: "Dragon, flying type", opt2: "Fighting, dragon type", opt3: "Fire, dragon type", opt4: "Fire, flying type", check: 'unanswered'},
        {id: 3, q: "How much damage will the strongest attack in the game do to a player with 100% defense", a: "0 damage", opt1: "The game will crash", opt2: "50% damage", opt3: "max damage", opt4: "0 damage", check: 'unanswered'},
        {id: 4, q: "Grabbler-type fighting game characters are usually weak against...", a: "Zoning characters", opt1: "High dps characters", opt2: "High defense characters", opt3: "Rushdown characters", opt4: "Zoning characters" , check: 'unanswered'},
        {id: 5, q: "What is the default skin in Minecraft known as?", a: "Steve", opt1: "Miner", opt2: "Alex", opt3: "Player", opt4: "Steve" , check: 'unanswered'},
        {id: 6, q: "What is Tails full name?", a: "Miles Prower", opt1: "Tails Prower", opt2: "Miles Prowler", opt3: "Tails the fox", opt4: "Miles Prower", check: 'unanswered'},
        {id: 'last', q: '-', a: '-', opt1: '-', opt2: '-', opt3: '-', opt4: '-', check: 'unanswered'},
    ]
    let GamesHard = [
        {id: 0, q: "What is meant by a move having Crowd control (CC) effects?", a: "It can disable/disrupt multiple opponents in some form", opt1: "It allows you to manipulate multiple players", opt2: "It allows you to control crowds.", opt3: "It allows you to debuff a single opponent", opt4: "It can disable/disrupt multiple opponents in some form" , check: 'unanswered'},
        {id: 1, q: "What does the 'piercing' stat do?", a: "It reduces the effectiveness of the defense stat", opt1: "It applies extra damage to your attacks", opt2: "It causes a bleed effect on opponents if attacked", opt3: "It makes the opponents shields break faster", opt4: "It reduces the effectiveness of the defense stat" , check: 'unanswered'},
        {id: 2, q: "What's the name of Sonic's main support character in Sonic Unleashed?", a: "Chip", opt1: "Tails", opt2: "Shadow", opt3: "Jet", opt4: "Chip", check: 'unanswered'},
        {id: 3, q: "The leader of Organisation 13 in the Kingdom hearts franchise is?", a: "Xemnas", opt1: "Xehonort", opt2: "Ansem", opt3: "Diz", opt4: "Xemnas" , check: 'unanswered'},
        {id: 4, q: "Which of these is not a Fortnite skin", a: "Super Mario", opt1: "The Terminator", opt2: "John Wick", opt3: "Son Goku", opt4: "Super Mario", check: 'unanswered'},
        {id: 5, q: "The most popular MMORPG is...", a: "World of Warcraft", opt1: "Warframe", opt2: "Dota 2", opt3: "League of Legends", opt4: "World of Warcraft", check: 'unanswered'},
        {id: 6, q: "What does it mean for an attack to be plus on shield?", a: "You can perform another action faster than your opponent if they block it", opt1: "More end lag on that move if the opponent blocks it", opt2: "Deals more damage on the opponents shield", opt3: "Means nothing", opt4: "You can perform another action faster than your opponent if they block it", check: 'unanswered'},
        {id: 'last', q: '-', a: '-', opt1: '-', opt2: '-', opt3: '-', opt4: '-', check: 'unanswered'},
    ]
    let GamesSuper = [
        {id: 0, q: "The minecraft world ends after at what point?", a: "At ±30 million blocks", opt1: "It's actually infinite", opt2: "At ±20 million blocks", opt3: "At ±50 million blocks", opt4: "At ±30 million blocks" , check: 'unanswered'},
        {id: 1, q: "What is the highest possible score in Pacman", a: "3,333,360 points", opt1: "3,000,000 points", opt2: "999,999 points", opt3: "1,499,950 points", opt4: "3,333,360 points", check: 'unanswered'},
        {id: 2, q: "Who was the first ever playable female character?", a: "Samus Aran (Metroid)", opt1: "Chun Li (Street Fighter)", opt2: "Lara Croft (Tomb Raider)", opt3: "Sonya Blade (Mortal Kombat)", opt4: "Samus Aran (Metroid)", check: 'unanswered'},
        {id: 3, q: "How many levels were in the original Super Mario Bros?", a: "32 levels", opt1: "30 levels", opt2: "50 levels", opt3: "99 levels", opt4: "32 levels", check: 'unanswered'},
        {id: 4, q: "What was the first game to feature the option to save your progress?", a: "The Legend of Zelda", opt1: "Final Fantasy II", opt2: "Super Mario Bros 3", opt3: "Grand Theft Auto", opt4: "The Legend of Zelda", check: 'unanswered'},
        {id: 5, q: "What is the 3rd best-selling video game franchise of all time?", a: "The Call of Duty franchise", opt1: "The Mario franchise", opt2: "The Pokemon franchise", opt3: "The GTA franchise", opt4: "The Call of Duty franchise", check: 'unanswered'},
        {id: 6, q: "What is the name of the city in the original 'SimCity'?", a: "It depends on what the player names it to be", opt1: "SimCity", opt2: "Emerald city", opt3: "Electricity", opt4: "It depends on what the player names it to be", check: 'unanswered'},
        {id: 'last', q: '-', a: '-', opt1: '-', opt2: '-', opt3: '-', opt4: '-', check: 'unanswered'},
    ]
    let GamesQtns = [
        GamesEasy,
        GamesMedium,
        GamesHard,
        GamesSuper,

        
        {id: 'last', q: '-', a: '-', opt1: '-', opt2: '-', opt3: '-', opt4: '-', check: 'unanswered'},
    ]

    ////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////   TITLE DISPLAY LOGIC   //////////////////////////////
    switch(genre){
        case 'anime':{
            bg = 'linear-gradient(90deg, #ed0b20 0%, #D6626B 100%)'
            qSet = AnimeQtns
            catInfo = 'Worry not brave warrior, no major spoilers are included in this quiz. Test your wits and power-through these questions!'
            break
        }
        case 'general':{
            bg='#2a2b30'
            qSet = GenQtns
            catInfo = 'Just general stuff, things you probably should know... or not know. Varios questions asked from different fields and categories, obviously not including anime and video games.'
            break
        }
        case 'games':{
            bg='#002e42'
            qSet = GamesQtns
            catInfo = "Put your gaming knowledge to the test and see if you can bag a perfect score (PS: You wont). Let's separate the pros from the scrubs."
            break
        }
        
    }
    

    const takeQuiz = (choice) => {
        
        setGenre(choice)
        document.querySelectorAll('.genre').forEach((el)=>{
            el.style.pointerEvents = 'none'
        })
        document.querySelector('.diffSelectBox').style.visibility = 'visible'
        document.querySelector('.infoBox').style.visibility = 'hidden'
        document.querySelector('.diffSelectBox').style.top = '50%'
        document.querySelector('.diffSelectBox').style.opacity = '1'

        setTimeout(()=>{
            document.addEventListener('click', outClick)
        }, 1000)

    }
    const outClick = (event)=>{
        if(diffSelectRef.current && !diffSelectRef.current.contains(event.target)){
            
            document.querySelector('.diffSelectBox').style.opacity = '0'
            document.querySelectorAll('.genre').forEach((el)=>{
                el.style.pointerEvents = 'all'
            })
            document.querySelector('.infoBox').style.visibility = 'hidden'
            setTimeout(()=>{
                document.querySelector('.diffSelectBox').style.visibility = 'hidden'
                document.removeEventListener('click', outClick)
            }, 500)
        }
        
    }


    const setDiff = (rank) => {
        set_Diff(rank)
        setDA(rank)
        setActivate(true)
        document.querySelector('body').style.overflowY = 'hidden'
        document.querySelector('.landBg').style.transform = 'translate(0 ,-100%)'
        setTimeout(()=>{
            document.querySelector('.diffSelectBox').style.visibility = 'hidden'
            document.querySelector('.diffSelectBox').style.top = '60%'
            document.querySelector('.diffSelectBox').style.opacity = '0'
            document.querySelector('body').style.overflowY = 'visible'
            document.querySelector('.landBg').style.display = 'none'
        },2000)
    }
    
    const dynamic = () => {
        if(dd == 'On'){
            setDD('Off')
        }
        else{
            setDD('On')
        }
        
    }
    const info = () => {
        
        if(document.querySelector('.infoBox').style.visibility == 'hidden'){
            document.querySelector('.infoBox').style.visibility = 'visible'
            // alert('hi')
        }
        else{
            document.querySelector('.infoBox').style.visibility = 'hidden'
        }
        
    }

    return ( 
        <>
        
            <section className="landBg" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className="diffSelectBox" ref={diffSelectRef}>
                    <div className="infoBox">
                        <div className="info">
                            <h2 style={{fontWeight: 'bold', textAlign: 'center', borderBottom: '1px solid black'}}>{genre.toUpperCase()} CATEGORY</h2>
                            {catInfo}<br/><br/>
                            <h2 style={{fontWeight: 'bold', textAlign: 'center', borderBottom: '1px solid black'}}>ABOUT THIS APP</h2>
                            This application was made from scratch by me, King Legitto. This is my
                            first ever application. It took a while to make this app so feel free to support me if you think it's
                            ...cool.<br/><br/>
                            <h2 style={{fontWeight: 'bold', textAlign: 'center', borderBottom: '1px solid black'}}>DYNAMIC DIFFICULTY</h2>
                            This quiz app features a dynamic difficulty option. If active, every 3 questions you get correct in a row or every 30 points you make will
                            up the difficulty, presenting to you a more challenging set of questions - Note that a question offers 10 points if gotten right.  This is active by default and you can turn it off
                            by clicking on the option in the difficulty select menu.<br/><br/>
                            There are a total number of 7 randomly selected questions you will answer per quiz attempt, making the maximum score possible to be 70. Also, at the highest difficulty, 
                            a countdown timer is activated, giving you only 30 seconds to answer all remaining questions. You can use the links below to contact me (Yes they're clickable). Have fun and goodluck💯<br/><br/>
                            <div style={{ textAlign: 'center'}}><a href="https://instagram.com/king_legitto?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" className="link">IG: king_legitto</a></div>
                            <div style={{ textAlign: 'center'}}><a href="https://mail.google.com/" target="_blank" className="link">Email: kinglegitto@gmail.com</a></div>
                        </div>
                        
                    </div>
                    <button className="infoBtn" onClick={()=>{info()}}>
                        Info
                    </button>
                    <button className="note" onClick={()=>{dynamic()}}>
                        Dynamic difficulty: {dd}
                    </button>
                    <button className="diff" onClick={()=>{setDiff('0')}}>
                        Easy
                    </button>
                    <button className="diff" onClick={()=>{setDiff('1')}}>
                        Medium
                    </button>
                    <button className="diff" onClick={()=>{setDiff('2')}}>
                        Hard
                    </button>

                </div>
                <section className="header centerText relative">
                    Legitto's COOL QUIZ
                </section>
                <section className="genreBox">
                    
                    <button className="genre" onClick={()=>{takeQuiz('games')}}>
                        GAMES
                    </button>
                    <button className="genre" onClick={()=>{takeQuiz('anime')}}>
                        ANIME
                    </button>
                    <button className="genre" onClick={()=>{takeQuiz('general')}}>
                        GENERAL
                    </button>
                </section>
            </section>
            
            {!mobile && activate && <QuizPg genre={genre} questions={qSet} bg={bg} diff={diff} setActivate={setActivate} set_Diff={set_Diff} dd={dd} diffAnchor={diffAnchor}/>}
            {mobile && activate && <QuizPgMob genre={genre} questions={qSet} bg={bg} diff={diff} setActivate={setActivate} set_Diff={set_Diff} dd={dd} diffAnchor={diffAnchor}/>}

        </>
     );
}
 
export default LandPg;

