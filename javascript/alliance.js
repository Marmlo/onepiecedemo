let alliance = "";
let rank = "";
let fighting = "";
let haki = "";
let feat = "";



// Alliance ---------------------------------------------------------------------------------------------------------------------------------------------------------------

function capFirst(alli) {
    return alli.charAt(0).toUpperCase() + alli.slice(1);
}

function generateAlliance(){
      var alliances = ["Revolucionary Army","Marine","Pirate","Bounty Hunter","Cipher Pol","World Nobles"
      				,"Revolucionary Army","Marine","Pirate","Bounty Hunter","Marine","Pirate"];

      alliance = capFirst(alliances[getRandomInt(0, alliances.length + 1)]);
      document.getElementById("alliance").innerHTML = alliance;
}

function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
}

	/* 

    Odds:
      Revolucionary Army - 2/12 - 16,6%
      Marine    		 - 3/12 - 25,0%
      Pirate 		 	 - 3/12 - 25,0%
      Bounty Hunter      - 2/12 - 16,6%
      Cipher Pol    	 - 1/12 - 08,3%
      World Nobles  	 - 1/12 - 08,3%

	*/


// Rank ---------------------------------------------------------------------------------------------------------------------------------------------------------------

function assignRank(){

 
     
  (alliance === "Revolucionary Army") {
     ranks = ["Leader","Chief of Staff","Army Commander","Officer","Member","Associate"];
  }  (alliance === "Marine") {
     ranks = ["Fleet Admiral","Admiral","Vice Admiral","Rear Admiral","Commodore","Captain","Commander",
     "Lieutenant","Ensign","Petty Officer","Seaman","Choreboy","Inspector General","Instructor","Cook"
     ,"Doctor","Scientist","Shipwright"];
  }  (alliance === "Pirate") {
     ranks = ["Shichibukai","Pirate Captain","First Mate","Swordsman","Sniper","Martial Artist","Navigator","Cook","Doctor","Shipwright","Musician","Aprentice","Pet"];
  }  (alliance === "Bounty Hunter") {
     ranks = ["Individual","Baroque Works","Franky Family","Accino Family","Cidre Guild"];
  }  (alliance === "Cipher Pol") {
     ranks = ["CP0","CP1","CP2","CP3","CP4","CP5","CP6","CP7","CP8","CP9"];
  }  (alliance === "World Nobles") {
     ranks = ["Celestial Dragon","King/Queen","Prince/Princess","Noble Commander","Soldier"];
  } 

  rank = capFirst(ranks[getRandomInt(0, ranks.length + 1)]);
  document.getElementById("rank").innerHTML = rank;
}

// Fighting ---------------------------------------------------------------------------------------------------------------------------------------------------------------

function generatefighting(){

 
     
  (alliance === "Cipher Pol") { // ---------------------------------------------- Cipher Pol
     fightings = ["Six power"];
  }  (rank === "Seaman") {  // ---------------------------------------------- Marine
     fightings = ["Gunsmanship","Swordsmanship"];
  }  (rank === "Choreboy") { 						
     fightings = ["Gunsmanship","Swordsmanship","Fists"];
  }  (rank === "Swordsman") {   // ------------------------------------------ Pirate			
     fightings = ["Swordsmanship","Samurai"];    
  }  (rank === "Sniper") {
     fightings = ["Gunsmanship"];
  }  (rank === "Martial Artist") {
     fightings = ["Six power","Dragon Claw","Fishman karate"];
  }  (rank === "Soldier") {  // --------------------------------------------- World Nobles
     fightings = ["Gunsmanship","Swordsmanship"];     
  }  {                         // --------------------------------------------- Rest
  	 fightings = ["Swordsmanship","Gunsmanship","Six power","Dragon Claw","Fishman karate","Freestyle","Black leg","Fists","Samurai"]
  }

  fighting = capFirst(fightings[getRandomInt(0, fightings.length + 1)]);
  document.getElementById("fighting").innerHTML = fighting;
}

// Haki ---------------------------------------------------------------------------------------------------------------------------------------------------------------

function assignhaki(){

 
     
  (fighting === "Dragon Claw") {
     hakis = ["Observation + Armament","Armament","Armament","Armament","Armament","Conquerors + Armament","Armament",
     "Observation + Armament","Armament","Armament","Armament","Observation + Armament","Conquerors + Armament","Armament",
     "Observation + Armament","Armament","Armament","Armament","Armament","Armament","Armament","Armament",
     "Conquerors + Armament","Armament","Conquerors + Armament + Observation"];
  }   (rank === "Fleet Admiral"){ // -------------------------------------------------------------------------------------------------- Marine
     hakis = ["Armament","Conquerors","Observation","Armament","Observation","Conquerors + Armament","Observation","Observation + Armament","Observation",
      "Conquerors + Observation","Armament","Armament","Observation","Observation","Armament","Observation","Armament","Armament","Observation","Armament",
      "Observation","Armament","Observation","Armament","Conquerors + Armament + Observation"];
  }   (rank === "Admiral"){
     hakis = ["Armament","Conquerors","Observation","Armament","Observation","Conquerors + Armament","Observation","Observation + Armament","Observation",
      "Conquerors + Observation","Armament","Armament","Observation","Observation","Armament","Observation","Armament","Armament","Observation","Armament",
      "Observation","Armament","Observation","Armament","Conquerors + Armament + Observation"];
  }   (rank === "Rear Admiral"){
     hakis = ["Armament","Conquerors","Observation","Armament","Observation","Conquerors + Armament","Observation","Observation + Armament","Observation",
      "Conquerors + Observation","Armament","Armament","Observation","Observation","Armament","Observation","Armament","Armament","Observation","Armament",
      "Observation","Armament","Observation","Armament","Conquerors + Armament + Observation"];
  }   (rank === "Leader"){ // -------------------------------------------------------------------------------------------------- Revolucionary Army
     hakis = ["Armament","Conquerors","Observation","Armament","Observation","Conquerors + Armament","Observation","Observation + Armament","Observation",
      "Conquerors + Observation","Armament","Armament","Observation","Observation","Armament","Observation","Armament","Armament","Observation","Armament",
      "Observation","Armament","Observation","Armament","Conquerors + Armament + Observation"];
  }   (rank === "Chief of Staff"){
     hakis = ["Armament","Conquerors","Observation","Armament","Observation","Conquerors + Armament","Observation","Observation + Armament","Observation",
      "Conquerors + Observation","Armament","Armament","Observation","Observation","Armament","Observation","Armament","Armament","Observation","Armament",
      "Observation","Armament","Observation","Armament","Conquerors + Armament + Observation"];
  }   (rank === "Army Commander"){
     hakis = ["Armament","Conquerors","Observation","Armament","Observation","Conquerors + Armament","Observation","Observation + Armament","Observation",
      "Conquerors + Observation","Armament","Armament","Observation","Observation","Armament","Observation","Armament","Armament","Observation","Armament",
      "Observation","Armament","Observation","Armament","Conquerors + Armament + Observation"];
  }   (rank === "Shichibukai"){ // -------------------------------------------------------------------------------------------------- Pirate (Shichibukai)
     hakis = ["Armament","Conquerors","Observation","Armament","Observation","Conquerors + Armament","Observation","Observation + Armament","Observation",
      "Conquerors + Observation","Armament","Armament","Observation","Observation","Armament","Observation","Armament","Armament","Observation","Armament",
      "Observation","Armament","Observation","Armament","Conquerors + Armament + Observation"];                
  }  {
     hakis = ["None","Conquerors","Observation","Armament","None","Conquerors + Armament","None","Observation + Armament","None",
      "Conquerors + Observation","None","Armament","None","Observation","None","None","None","None","None","None","None","None",
      "None","None","Conquerors + Armament + Observation"];
  } 

  haki = capFirst(hakis[getRandomInt(0, hakis.length + 1)]);
      document.getElementById("haki").innerHTML = haki;
}

	/* 

    Odds:
      Conquerors  - 4/25 - 16%
      Armament    - 5/25 - 20%
      Observation - 5/25 - 20%
      None        - 16/25 - 64%
      Two Haki    - 3/25 - 12%
      Three Haki  - 1/25 - 04%

    Odds ( Dragon Claw):
      Conquerors  - 4/25 - 16%
      Armament    - 25/25 - 100%
      Observation - 5/25 - 20%
      None        - 0/25 - 0%
      Two Haki    - 7/25 - 28%
      Three Haki  - 1/25 - 04%

    Odds ( Fleet Admiral/Admiral/Rear Admiral/Shichibukai/Leader/Chief of Staff/Army Commander):
      Conquerors  - 4/25 - 16%
      Armament    - 13/25 - 52%
      Observation - 13/25 - 52%
      None        - 0/25 - 00%
      Two Haki    - 3/25 - 12%
      Three Haki  - 1/25 - 04%  

	*/

// Devil Fruit ---------------------------------------------------------------------------------------------------------------------------------------------------------------

let devilfruit = "";

function capFirst(alli) {
    return alli.charAt(0).toUpperCase() + alli.slice(1);
}

function generatedevilfruit() {
      var devilfruits = ["Special Paramecia","Paramecia","Zoan","No","Paramecia","Ancient Zoan","No","Paramecia","Logia","Zoan",
      "No","Zoan","No","Special Paramecia","Mythical Zoan","No","Paramecia","No","Zoan","Mythical Zoan",
      "Ancient Zoan","No","Paramecia","Logia","No"];

      devilfruit = capFirst(devilfruits[getRandomInt(0, devilfruits.length + 1)]);
      document.getElementById("devilfruit").innerHTML = devilfruit;
}

function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
}

	/* 

    Odds:
      Zoan              - 4/25 - 16%
      Mythical Zoan     - 2/25 - 08%
      Ancient Zoan      - 2/25 - 08%
      Paramecia         - 5/25 - 20%
      Special Paramecia - 2/25 - 08%
      Logia             - 2/25 - 08%
      No                - 8/25 - 32%

    */

/* Specic Devil Fruit */

function assigndevilfruit(){

 var df = [];
     
  (devilfruit === "Zoan") {
     dfs = ["Tori-Tori no Mi - Model: Raven","Uma-Uma no Mi - Model: Pony","Neko-Neko no Mi - Model: Tiger"
     ,"Kani-Kani no Mi - Model: Hermit Crab","Hebi-Hebi no Mi - Model: Viper","Kame-Kame no Mi - Model: Tortoise"
     ,"Croco-Croco no Mi - Model: Alligator","Prima-Prima no Mi - Model: Gorilla","Kuma-Kuma no Mi - Model: Polar Bear"];
  }  (devilfruit === "Mythical Zoan") {
     dfs = ["Tori-Tori no Mi - Model: Thunderbird","Uma-Uma no Mi - Model: Pegasus","Neko-Neko no Mi - Model: Sphinx"
     ,"Kame-Kame no Mi - Model: Colossal Turtle"];
  }  (devilfruit === "Ancient Zoan") {
     dfs = ["Mushi-Mushi no Mi - Model: Meganeura","Mushi-Mushi no Mi - Model: Gastropod","Webbo-Webbo no Mi - Model: Megarachne"];
  }  (devilfruit === "Paramecia") {
     dfs = ["Obbi-Obbi no Mi","Depra-Depra no Mi","Soda-Soda no Mi","Kako-Kako no Mi","Ana-Ana no Mi","Kyara-Kyara no Mi"
     ,"Emro-Emro no Mi","Enye-Enye no Mi","Rubi-Rubi no Mi","Gamma-Gamma no Mi","Hoshi-Hoshi no Mi","Implo-Implo no Mi"];
  }  (devilfruit === "Special Paramecia") {
     dfs = ["Jero-Jero no Mi","Nori-Nori no Mi","Huni-Huni no Mi","Pinu-Pinu no Mi","Toryo-Toryo no Mi"];
  }  (devilfruit === "Logia") {
     dfs = ["Salti-Salti no Mi","Sora-Sora no Mi","Sido-Sido no Mi","Nendo-Nendo no Mi","Doro-Doro no Mi","Plazu-Plazu no Mi","Suigi-Suigi no Mi","Taru-Taru no Mi",
     "Genyu-Genyu no Mi","Shibo-Shibo no Mi","Tanso-Tanso no Mi","Unchi-Unchi no Mi","Hone-Hone no Mi","Moku-Moku no Mi","Nama-Nama no Mi","Sulfu-Sulfu no Mi",
     "Tassi-Tassi no Mi","Gino-Gino no Mi","Suraimu-Suraimu no Mi","Mera-Mera no Mi"];
  }  (devilfruit === "No") {
     dfs = ["None"];
  } 

  var df = capFirst(dfs[getRandomInt(0, dfs.length + 1)]);
  document.getElementById("df").innerHTML = df;
}
    

// Feat ---------------------------------------------------------------------------------------------------------------------------------------------------------------

function assignfeat(){

 
     
  (alliance === "Revolucionary Army") { // ---------------------------------------------- Revolucionary Army
     feats = ["None"
     ,"Attacked a Government country."
     ,"Leaked sensitive Government information."
     ,"Stole a rare devil fruit from the Government."
     ,"Participated in a war."
     ,"Released slaves from a Government ally."];
  }  (alliance === "Marine") { // ---------------------------------------------- Marine
     feats = ["None"
     ,"Captured a 40,000,000 bounty pirate all by himself."
     ,"Defeated a small group of pirates."
     ,"Helped save a country."
     ,"Captured a 20,000,000 bounty pirate all by himself."];
  }  (alliance === "Pirate") { // ---------------------------------------------- Pirate
     feats = ["None"
     ,"Defeated a small group of pirates."
     ,"Defeated a Marine's Captain."
     ,"Defeated a Shichibukai."
     ,"Defeated a Yonko."
     ,"Is investigating the ponegls."
     ,"Escaped Impel Down."
     ,"Stormed a Marine's fortress."
     ,"Defeated a notorious pirate."
     ,"Stole a rare devil fruit from the Government."];
  }  (alliance === "Bounty Hunter") { // ---------------------------------------------- Bounty Hunter
     feats = ["None"
     ,"Captured a 40,000,000 bounty criminal."
     ,"Defeated a small group of pirates."
     ,"Defeated a Marine's Captain."
     ,"Captured a 20,000,000 bounty criminal."
     ,"Captured a 5,000,000 bounty criminal."];
  }  (alliance === "Cipher Pol") { // ---------------------------------------------- Cipher Pol
     feats = ["None"
     ,"Adquired information about a ponegl."
     ,"Spied on a Yonko."
     ,"Contained a possible leak of sensitive Government information."
     ,"Completed a secret mission from the Government."
     ,"Defeated a notorious pirate."];
  }  (alliance === "World Nobles") { // ---------------------------------------------- World Nobles
     feats = ["None"
     ,"Attacked a neighboring country."
     ,"Denied his past and royal family."
     ,"Destroyed an enemy's facility."
     ,"Allied with pirates."];
  } 

  feat = capFirst(feats[getRandomInt(0, feats.length + 1)]);
      document.getElementById("feat").innerHTML = feat;
}





// Bounty New System ----------------------------------------------------------------------------------------------------------------------------------------------------

let alliancebounty = "";
let rankbounty = "";
let hakibounty = "";
let devilfruitbounty = "";
let featbounty = "";
let bountyfinal = "";

function addbounty() {

   (alliance === "Revolucionary Army") {            // --- Alliance
     var alliancebounty = getRandomInt(1, 10 + 1);
  }  (alliance === "Pirate") {
     var alliancebounty = getRandomInt(1, 5 + 1);
  }  {
     var alliancebounty = getRandomInt(0, 0 + 1);
  }

   (rank === "Leader") {                            // --- Rank Revolucionary Army
     var rankbounty = getRandomInt(100, 500 + 1);
  }  (rank === "Chief of Staff") {
     var rankbounty = getRandomInt(100, 400 + 1);
  }  (rank === "Army Commander") {
     var rankbounty = getRandomInt(50, 200 + 1);
  }  (rank === "Member") {
     var rankbounty = getRandomInt(0, 30 + 1);
  }  (rank === "Associate") {
     var rankbounty = getRandomInt(0, 80 + 1);
  }  (rank === "Shichibukai") {                  // --- Rank Pirate
     var rankbounty = getRandomInt(100, 250 + 1);
  }  (rank === "Pirate Captain") {
     var rankbounty = getRandomInt(100, 250 + 1);
  }  (rank === "First Mate") {
     var rankbounty = getRandomInt(50, 200 + 1);
  }  {
     var rankbounty = getRandomInt(0, 0 + 1);
  }

   (haki === "Conquerors + Armament + Observation") {   // --- Haki
     var hakibounty = getRandomInt(200, 500 + 1);
  }  (haki === "Observation + Armament") {
     var hakibounty = getRandomInt(50, 100 + 1);
  }  (haki === "Conquerors + Armament") {
     var hakibounty = getRandomInt(120, 320 + 1);
  }  (haki === "Conquerors + Observation") {
     var hakibounty = getRandomInt(120, 320 + 1);
  }  (haki === "Conquerors") {
     var hakibounty = getRandomInt(100, 300 + 1);
  }  (haki === "Armament") {
     var hakibounty = getRandomInt(50, 150 + 1);
  }  (haki === "Observation") {
     var hakibounty = getRandomInt(50, 150 + 1);
  }  {
     var hakibounty = getRandomInt(0, 0 + 1);
  }

   (devilfruit === "Zoan") { 						// --- Devilfruit
     var devilfruitbounty = getRandomInt(5, 10 + 1);
  }  (devilfruit === "Ancient Zoan") {
     var devilfruitbounty = getRandomInt(5, 30 + 1);
  }  (devilfruit === "Mythical Zoan") {
     var devilfruitbounty = getRandomInt(5, 40 + 1);
  }  (devilfruit === "Paramecia") {
     var devilfruitbounty = getRandomInt(5, 15 + 1);
  }  (devilfruit === "Special Paramecia") {
     var devilfruitbounty = getRandomInt(5, 35 + 1);
  }  (devilfruit === "Logia") {
     var devilfruitbounty = getRandomInt(5, 50 + 1);
  }  {
     var devilfruitbounty = getRandomInt(0, 0 + 1);
  }

   (feat === "Leaked sensitive Government information.") { 		// --- Feat
     var featbounty = getRandomInt(5, 25 + 1);
  }  (feat === "Defeated a Marine's Captain.") {
     var featbounty = getRandomInt(10, 20 + 1);
  }  (feat === "Defeated a Shichibukai.") {
     var featbounty = getRandomInt(70, 100 + 1);
  }  (feat === "Defeated a Yonko.") {
     var featbounty = getRandomInt(500, 1000 + 1);
  }  (feat === "Is investigating the ponegls.") {
     var featbounty = getRandomInt(10, 50 + 1);
  }  (feat === "Escaped Impel Down.") {
     var featbounty = getRandomInt(35, 70 + 1);
  }  (feat === "Stormed a Marine's fortress.") {
     var featbounty = getRandomInt(10, 50 + 1);
  }  (feat === "Allied with pirates.") {
     var featbounty = getRandomInt(5, 10 + 1);
  }  (feat === "Denied his past and royal family.") {
     var featbounty = getRandomInt(0, 5 + 1);
  }  (feat === "Defeated a notorious pirate.") {
     var featbounty = getRandomInt(50, 200 + 1);
  }  (feat === "Attacked a neighboring country.") {
     var featbounty = getRandomInt(0, 5 + 1);
  }  (feat === "Stole a rare devil fruit from the Government.") {
     var featbounty = getRandomInt(25, 100 + 1);              
  }  {
     var featbounty = getRandomInt(0, 0 + 1);
  }

   (alliance === "Marine") { 		                  // --- Block Alliances
     var alliancebounty = getRandomInt(0, 0 + 1);
     var rankbounty = getRandomInt(0, 0 + 1);
     var hakibounty = getRandomInt(0, 0 + 1);
     var devilfruitbounty = getRandomInt(0, 0 + 1);
     var featbounty = getRandomInt(0, 0 + 1);
  }  (alliance === "Cipher Pol") {
     var alliancebounty = getRandomInt(0, 0 + 1);
     var rankbounty = getRandomInt(0, 0 + 1);
     var hakibounty = getRandomInt(0, 0 + 1);
     var devilfruitbounty = getRandomInt(0, 0 + 1);
     var featbounty = getRandomInt(0, 0 + 1);
  }

  var bountyfinal = alliancebounty + rankbounty + hakibounty + devilfruitbounty + featbounty
  var addbounty = bountyfinal
  document.getElementById("bountyfinal").innerHTML = bountyfinal + ',000,000';
  document.getElementById("addbounty").innerHTML = '(+' + bountyfinal + ',000,000)';

                        // Variables bounty adds info
  document.getElementById("alliancebounty").innerHTML = '(+' + alliancebounty + ',000,000)';
  document.getElementById("rankbounty").innerHTML = '(+' + rankbounty + ',000,000)';
  document.getElementById("hakibounty").innerHTML = '(+' + hakibounty + ',000,000)';
  document.getElementById("devilfruitbounty").innerHTML = '(+' + devilfruitbounty + ',000,000)';
  document.getElementById("featbounty").innerHTML = '(+' + featbounty + ',000,000)';

}