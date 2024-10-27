const survey = [
	["A: expend energy, enjoy groups",	"B: conserve energy, enjoy one-on-one"],
	["A: interpret literally",	"B: look for meaning and possibilities"],
	["A: logical, thinking, questioning",	"B: empathetic, feeling, accomodating"],
	["A: Organized, orderly",	"B: flexible, adaptable"],
	["A: more outgoing, think out loud",	"B: more reserved, think to yourself"],
	["A: practical, realistic, experiential",	"B: imaginative, innovative, thoretical"],
	["A: candid, straight forward, frank",	"B: tactful, kind, encouraging"],
	["A: plan, schedule",	"B: unplanned, spontaneous"],
	["A: seek many tasks, public activities, interaction with others",	"B: seek private, solitary activities with quiet to concentrate"],
	["A: standard, usual, conventional",	"B: different, novel, unique"],
	["A: firm, tend to criticize, hold the line",	"B: gentle, tend to appreciate, conciliate"],
	["A: regulated, structured",	"B: easygoing, live and let live"],
	["A: external, communicative, express yourself",	"B: internal, reticent, keep to yourself"],
	["A: focus on here-and-now",	"B: look to the future, global perspective, big picture"],
	["A: tough-minded, just",	"B : tender-hearted, merciful"],
	["A: preparation, plan ahead",	"B: go with the flow, adapt as you go"],
	["A: active, initiate",	"B: reflective, deliberate"],
	["A: facts, things, what is",	"B: ideas, dreams, what could be, philosophical"],
	["A: matter of fact, issue-oriented",	"B: sensitive, people-oriented, compassionate"],
	["A: control, govern",	"B: latitude, freedom"]
	];

console.table(survey)

const options = [["A","B"], ["A", "B"], ["A", "B"],["A","B"], ["A", "B"], ["A", "B"],["A","B"], ["A", "B"], ["A", "B"],["A","B"], ["A", "B"], ["A", "B"],["A","B"], ["A", "B"], ["A", "B"], ["A","B"], ["A", "B"], ["A", "B"],["A","B"], ["A", "B"]];

let personalityType = [""];



const userInput = require("prompt-sync");
const prompt = userInput();

name = prompt("Please enter your name: ");

let answers = getUserInput(survey);
displayIntrovertsVsExtrovertsResults(answers, survey, options, name, personalityType);
displaySensingVsIntuitiveResults(answers, survey, options, personalityType);
displayThinkingVsFeelingResults(answers, survey, options, personalityType);
displayJudgingVsPerceptiveResults(answers, survey, options, personalityType);
displayPersonalityType(personalityType);


function getUserInput(survey){
	
	let answers = [survey.length];

	for(let row = 0; row < survey.length; row++){

		while(true){

			console.log(survey[row].join());
			answers[row] = prompt().toUpperCase();

			if(answers[row] === ("A") || answers[row] === ("B")){
				break;
				}
			else{ 
				console.log("Expected A or B as response");
				console.log("I know this is an error, please retry again");

					}


				}

			}

		return answers;
		};


function displayIntrovertsVsExtrovertsResults(answers, survey, options, name, personalityType){

			
	let extrovert = 0;
	let introvert = 0;

	console.log("Hello, " + name);

	console.log("You selected: ");
				

	for(let row = 0; row < survey.length; row++){

		if (answers[row] === (options[row][0])) {
        		if((row === 0)|| (row === 4) || (row === 8) || (row === 12) || (row === 16)) extrovert++; 

        	} else if (answers[row] === (options[row][1])) {
        		if((row === 0)||(row === 4) || (row === 8)  || (row === 12) || (row === 16)) introvert++; 

				}
					

		}

	getIntrovertsVsExtrovertsInputs(answers, survey, options);

	console.log("Number of A selected:  " + extrovert + " ");
	console.log("Number of B selected:  " + introvert + " ");


	console.log();
	console.log();

	return personalityType[0] = (extrovert > introvert)? "E" : "I";			



};


							
function getIntrovertsVsExtrovertsInputs(answers, survey, options){

	for(let row = 0; row < survey.length; row++){
		if (answers[row] === (options[row][0])){
			if (row === 0) console.log (survey[0][0]);
               		if (row === 4) console.log(survey[4][0]);
                	if (row === 8) console.log(survey[8][0]);
			if (row === 12) console.log(survey[12][0]);
			if (row === 16) console.log(survey[16][0]);
		
			
            	}else if (answers[row] === (options[row][1])) {
               		if (row === 0) console.log(survey[0][1]);
               		if (row === 4) console.log(survey[4][1]);
               		if (row === 8) console.log(survey[8][1]);
			if (row === 12) console.log(survey[12][1]);
			if (row === 16) console.log(survey[16][1]);

				}

	
		}
	
};




function displaySensingVsIntuitiveResults(answers, survey, options, personalityType){

	let sensing = 0;
	let intuitive = 0;
			


	for(let row = 0; row < survey.length; row++){

		if (answers[row] === (options[row][0])) {
                	if((row === 1)|| (row === 5) || (row === 9) || (row === 13) || (row === 17)) sensing++; 

            		} else if (answers[row] === (options[row][1])) {
               			if((row === 1)||(row === 5) || (row === 9)  || (row === 13) || (row === 17)) intuitive++; 

				}

			}

	getSensingVsIntuitiveInputs(answers, survey, options);

	console.log("Number of A selected:  " + sensing + " ");
	console.log("Number of B selected:  " + intuitive + " ");

	console.log();
	console.log();
				
	return personalityType[1] = (sensing > intuitive)? "S" : "N";

						

	};





function getSensingVsIntuitiveInputs(answers, survey, options){

	for(let row = 0; row < survey.length; row++){
		if (answers[row] === (options[row][0])){
			if (row === 1) console.log (survey[1][0]);
               		if (row === 5) console.log (survey[5][0]);
                	if (row === 9) console.log (survey[9][0]);
			if (row === 13) console.log (survey[13][0]);
                	if (row === 17) console.log (survey[17][0]);
			
            	}else if (answers[row] === (options[row][1])) {
               		if (row === 1) console.log (survey[1][1]);
               		if (row === 5) console.log (survey[5][1]);
               		if (row === 9) console.log (survey[9][1]);
			if (row === 13) console.log (survey[13][1]);
                	if (row === 17) console.log (survey[17][1]);
			
		}

	}
	
};


function displayThinkingVsFeelingResults(answers, survey, options, personalityType){

	let thinking = 0;
	let feeling = 0;


	for(let row = 0; row < survey.length; row++){

		if (answers[row] === (options[row][0])) {
                	if((row === 2)|| (row === 6) || (row === 10) || (row === 14) || (row === 18)) thinking++; 

            	} else if (answers[row] === (options[row][1])) {
               		if((row === 2)||(row === 6) || (row === 10)  || (row === 14) || (row === 18)) feeling++; 

		}
				
	}

	getThinkingVsFeelingInputs(answers, survey, options);

	console.log("Number of A selected:  " + thinking + " ");
	console.log("Number of B selected:  " + feeling + " ");

	console.log();
	console.log();

	return personalityType[2] = (thinking > feeling)? "T" : "F";

				
};



function getThinkingVsFeelingInputs(answers, survey, options){

	for(let row = 0; row < survey.length; row++){
		if (answers[row] === (options[row][0])){
			if (row === 2) console.log (survey[2][0]);
               		if (row === 6) console.log (survey[6][0]);
                	if (row === 10) console.log (survey[10][0]);
			if (row === 14) console.log (survey[14][0]);
                	if (row === 18) console.log (survey[18][0]);
			
            	}else if (answers[row] === (options[row][1])) {
               		if (row === 2) console.log (survey[2][1]);
               		if (row === 6) console.log (survey[6][1]);
               		if (row === 10) console.log (survey[10][1]);
			if (row === 14) console.log (survey[14][1]);
                	if (row === 18) console.log (survey[18][1]);
		}

	}
	
};



function displayJudgingVsPerceptiveResults(answers, survey, options, personalityType){

	let judging = 0;
	let perceptive = 0;


	for(let row = 0; row < survey.length; row++){

	if (answers[row] === (options[row][0])) {
                if((row === 3)|| (row === 7) || (row === 11) || (row === 15) || (row === 19)) judging++; 

        } else if (answers[row] === (options[row][1])) {
               	if((row === 3)||(row === 7) || (row === 11)  || (row === 15) || (row === 19)) perceptive++; 

		}
				
	}
	
	getJudgingVsPerceptiveInputs(answers, survey, options);

	console.log("Number of A selected:  " + judging + " ");
	console.log("Number of B selected:  " + perceptive + " ");

	console.log();
	console.log();

	return personalityType[3] = (judging  > perceptive)? "J" : "P";
				
				

};


function getJudgingVsPerceptiveInputs(answers, survey, options){

	for(let row = 0; row < survey.length; row++){
		if (answers[row] === (options[row][0])){
			if (row === 3) console.log (survey[3][0]);
               		if (row === 7) console.log (survey[7][0]);
                	if (row === 11) console.log (survey[11][0]);
			if (row === 15) console.log (survey[15][0]);
                	if (row === 19) console.log (survey[19][0]);
			
            	}else if (answers[row] === (options[row][1])) {
               		if (row === 3) console.log (survey[3][1]);
               		if (row === 7) console.log (survey[7][1]);
               		if (row === 11) console.log (survey[11][1]);
			if (row === 15) console.log (survey[15][1]);
                	if (row === 19) console.log (survey[19][1]);
		}

	}
						
};


function displayPersonalityType(personalityType){

			
	let enfpText = "ENFJ, Protagonist ENFJ Personality.\n" +
			"These people tend to embrace big ideas and actions that reflect their sense of hope and goodwill toward others.\n"+
			"Their vibrant energy can flow in many directions.Even in moments of fun, ENFPs want to connect emotionally with others.\n"+
			"Few things matter more to these personalities than having genuine, heartfelt conversations with the people they cherish.\n"+
			"ENFPs believe that everyone deserves to express their feelings, and their empathy and warmth create spaces where even the most timid spirits can feel comfortable opening up.\n"+
			"People with the ENFP personality type (Campaigners) are true free spirits – outgoing, openhearted, and open-minded.\n"+
			"With their lively, upbeat approach to life, ENFPs stand out in any crowd.\n" +
			"But even though they can be the life of the party, they don’t just care about having a good time.\n" +
     			"These personalities have profound depths that are fueled by their intense desire for meaningful, emotional connections with others.\n" +
			"ENFPs need to be careful, however. Their intuition may lead them to read far too much into other people’s actions and behaviors.\n" +
			"Instead of simply asking for an explanation, they may end up puzzling over someone else’s desires or intentions.\n" +
			"This kind of social stress is what keeps harmony-focused ENFP personalities awake at night.\n"+
			"ENFPs will spend a lot of time exploring different relationships, feelings, and ideas before they find a path for their life that feels right.\n" +
			"But when they do finally find their way, their imagination, empathy, and courage can light up not only their own life but also the world around them.";




	let enfjText = "ENFJ (Protagonist) is a personality type with the Extraverted, Intuitive, Feeling, and Judging traits.\n" +
			"These warm, forthright types love helping others, and they tend to have strong ideas and values.\n" +
			"They back their perspective with the creative energy to achieve their goals.\n" +
			"ENFJs are born leaders, which explains why these personalities can be found among many notable politicians, coaches, and teachers.\n" +
			"Their passion and charisma allow them to inspire others not just in their careers but in every arena of their lives, including their relationships.\n" +
			"Few things bring people with the ENFJ personality type a deeper sense of joy and fulfillment than guiding friends and loved ones to grow into their best selves.\n" +
			"ENFJs tend to be vocal about their values, including authenticity and altruism. When something strikes them as unjust or wrong, they speak up.\n" +
			"But they rarely come across as brash or pushy, as their sensitivity and insight guide them to speak in ways that resonate with others.\n" +
			"ENFJ personalities have not only an uncanny ability to pick up on people’s underlying motivations and beliefs but also a knack for understanding how others are feeling just by looking at them.\n" +
			"At times, they may not even understand how they come to grasp another person’s mind and heart so quickly.\n" +
			"These flashes of insight can make ENFJs incredibly persuasive and inspiring communicators.\n"+
			"People with this personality type are devoted altruists, ready to face slings and arrows in order to stand up for the people and ideas that they believe in.\n" +
			"This strength of conviction bolsters an ENFJ’s ability to guide others to work together in service of the greater good.";
	

	let infpText = "INFP (Mediator) is a personality type with the Introverted, Intuitive, Feeling, and Prospecting traits.\n" +
 			"These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do.\n" +
			"Although they may seem quiet or unassuming, people with the INFP personality type (Mediators) have vibrant, passionate inner lives.\n" +
 			"Creative and imaginative, they happily lose themselves in daydreams, inventing all sorts of stories and conversations in their mind.\n" + 
			"INFPs are known for their sensitivity – these personalities can have profound emotional responses to music, art, nature, and the people around them.\n" + 
 			"They are known to be extremely sentimental and nostalgic, often holding onto special keepsakes and memorabilia that brighten their days and fill their heart with joy.\n" +

			"Idealistic and empathetic, people with the INFP personality type long for deep, soulful relationships, and they feel called to help others.\n" +
			"Due to the fast-paced and competitive nature of our society, they may sometimes feel lonely or invisible, adrift in a world that doesn’t seem to appreciate the traits that make them unique.\n" +
			"Yet it is precisely because INFPs brim with such rich sensitivity and profound creativity that they possess the unique potential to connect deeply and initiate positive change.\n" +


			"INFP personalities share a sincere curiosity about the depths of human nature.\n" + 
			"Introspective to the core, they’re exquisitely attuned to their own thoughts and feelings, but they yearn to understand the people around them as well.\n" +
 			"INFPs are compassionate and nonjudgmental, always willing to hear another person’s story.\n" +
 			"When someone opens up to them or turns to them for comfort, they feel honored to listen and be of help.\n" +

			"Empathy is among the INFP personality type’s greatest gifts, but at times it can be a liability.\n" + 
 			"The troubles of the world weigh heavily on their shoulders, and these personalities can be vulnerable to internalizing other people’s negative moods or mindsets.\n" + 
			"Unless they learn to set boundaries, INFPs may feel overwhelmed by just how many wrongs there are that need to be set right.";


	let infjText = "INFJ (Advocate) is a personality type with the Introverted, Intuitive, Feeling, and Judging traits.\n" +
			"They tend to approach life with deep thoughtfulness and imagination.\n" +
			"Their inner vision, personal values, and a quiet, principled version of humanism guide them in all things.\n" +
			"Idealistic and principled, people with the INFJ personality type (Advocates) aren’t content to coast through life – they want to stand up and make a difference.\n" +
		 	"For these compassionate personalities, success doesn’t come from money or status but from seeking fulfillment, helping others, and being a force for good in the world.\n" +
			"While they have lofty goals and ambitions, INFJs shouldn’t be mistaken for idle dreamers.\n" +
			"People with this personality type care about integrity, and they’re rarely satisfied until they’ve done what they know to be right.\n" + 
                        "Conscientious to the core, they move through life with a clear sense of their values, and they aim to never lose sight of what truly matters – not according to other people or society at large but according to their own wisdom and intuition.";


	let entpText = "ENTP (Debater) is a personality type with the Extraverted, Intuitive, Thinking, and Prospecting traits.\n" + 
 			"They tend to be bold and creative, deconstructing and rebuilding ideas with great mental agility.\n" +
			"They pursue their goals vigorously despite any resistance they might encounter.\n" +
			"Quick-witted and audacious, people with the ENTP personality type (Debaters) aren’t afraid to disagree with the status quo.\n" + 
 			"In fact, they’re not afraid to disagree with pretty much anything or anyone.\n" + 
 			"Few things light up these personalities more than a bit of verbal sparring – and if the conversation veers into controversial terrain, so much the better.\n" +
			"It would be a mistake, though, to think of ENTPs as disagreeable or mean-spirited.Instead, people with this personality type are knowledgeable and curious with a playful sense of humor, and they can be incredibly entertaining.\n" +
 			"They simply have an offbeat, contrarian idea of fun – one that usually involves a healthy dose of spirited debate.\n" +
			"ENTPs are known for their rebellious streak.\n" + 
			"For this personality type, no belief is too sacred to be questioned, no idea is too fundamental to be scrutinized, and no rule is too important to be broken or at least thoroughly tested.\n" +
 			"This may make ENTP personalities seem overly cavalier or defiant, but at their core, their innate tendency to test boundaries has more to do with their desire for innovation and change.\n" +
			"As they see it, most people are too ready to do as they’re told and blindly conform to social norms, pressures, and standards.\n" + 
			"ENTP personalities enjoy the mental exercise of questioning the prevailing mode of thought, and they take a certain pleasure in uncovering the value of underdogs and outliers.\n" +
			"Their active mind can’t help but rethink the things that everyone else takes for granted and pushes them in clever new directions.";



	let intjText =  "INTJ (Architect) is a personality type with the Introverted, Intuitive, Thinking, and Judging traits.\n" +
 			"These thoughtful tacticians love perfecting the details of life, applying creativity and rationality to everything they do.\n" +
			"Their inner world is often a private, complex one.\n" +
			"People with the INTJ personality type (Architects) are intellectually curious individuals with a deep-seated thirst for knowledge.\n" +
			"INTJs tend to value creative ingenuity, straightforward rationality, and self-improvement.\n" +
			"They consistently work toward enhancing intellectual abilities and are often driven by an intense desire to master any and every topic that piques their interest.\n" +
			"Logical and quick-witted, INTJs pride themselves on their ability to think for themselves, not to mention their uncanny knack for seeing right through phoniness and hypocrisy.\n" +
			"Because their minds are never at rest, these personalities may sometimes struggle to find people who can keep up with their nonstop analysis of everything around them.\n" +
 			"But when they do find like-minded individuals who appreciate their intensity and depth of thought, INTJs form profound and intellectually stimulating relationships that they deeply treasure.";


	let esfjText = "ESFJ (Consul) is a personality type with the Extraverted, Observant, Feeling, and Judging traits.\n" +
	 		"They are attentive and people-focused, and they enjoy taking part in their social community.\n" +
 			"Their achievements are guided by decisive values, and they willingly offer guidance to others.\n" +
			"For people with the ESFJ personality type (Consuls), life is sweetest when it’s shared with others.\n" +
 			"These social individuals form the bedrock of many communities, opening their homes – and their hearts – to friends, loved ones, and neighbors.\n" +
			"This doesn’t mean that they are saints or that they like everyone.\n" +
			"In fact, they are much more likely to form close bonds with people who share their same values and opinions. \n" + 
			"But regardless of other people’s beliefs, ESFJ personalities still strongly believe in the power of hospitality and good manners, and they tend to feel a sense of duty to those around them.\n" +
	 		"Generous and reliable, they often take it upon themselves – in ways both large and small – to hold their families and their communities together.";


	let estjText = "ESTJ (Executive) is a personality type with the Extraverted, Observant, Thinking, and Judging traits.\n" +
			"They possess great fortitude, emphatically following their own sensible judgment.\n" +
			"They often serve as a stabilizing force among others, able to offer solid direction amid adversity.\n" +
			"People with the ESTJ personality type (Executives) are representatives of tradition and order, utilizing their understanding of what is right, wrong, and socially acceptable to bring families and communities together.\n" +
		 	"Embracing the values of honesty and dedication, ESTJs are valued for their mentorship mindset and their ability to create and follow through on plans in a diligent and efficient manner.\n" +
 			"They will happily lead the way on difficult paths, and they won’t give up when things become stressful.";
		
	let isfjText = "ISFJ (Defender) is a personality type with the Introverted, Observant, Feeling, and Judging traits.\n" + 
 			"These people tend to be warm and unassuming in their own steady way.\n" +
			"They’re efficient and responsible, giving careful attention to practical details in their daily lives.\n" +
			"In their unassuming, understated way, people with the ISFJ personality type (Defenders) help make the world go round.\n" +
 			"Hardworking and devoted, these personalities feel a deep sense of responsibility to those around them.\n" + 
 			"ISFJs can be counted on to meet deadlines, remember birthdays and special occasions, uphold traditions, and shower their loved ones with gestures of care and support.\n" +
 			"But they rarely demand recognition for all that they do, preferring instead to operate behind the scenes.\n" +
			"This is a capable, can-do personality type with a wealth of versatile gifts.\n" +
 			"Though sensitive and caring, ISFJs also have excellent analytical abilities and an eye for detail.\n" +
 			"And despite their reserve, they tend to have well-developed people skills and robust social relationships.\n" + 
			"These personalities are truly more than the sum of their parts, and their varied strengths shine in even the most ordinary aspects of their daily lives.";



	let istjText = "ISTJ (Logistician) is a personality type with the Introverted, Observant, Thinking, and Judging traits.\n" + 
			"These people tend to be reserved yet willful, with a rational outlook on life.\n" +
 			"They compose their actions carefully and carry them out with methodical purpose.\n" +
			"People with the ISTJ personality type (Logisticians) mean what they say and say what they mean, and when they commit to doing something, they make sure to follow through.\n" +
			"With their responsible and dependable nature, it might not be so surprising that ISTJ personalities also tend to have a deep respect for structure and tradition.\n" +
 			"They are often drawn to organizations, workplaces, and educational settings that offer clear hierarchies and expectations.\n" +
			"While ISTJs may not be particularly flashy or attention seeking, they do more than their share to keep society on a sturdy, stable foundation.\n" +
		 	"In their families and their communities, people with this personality type often earn respect for their reliability, their practicality, and their ability to stay grounded and logical in even the most stressful situations.";

	
	let esfpText = "ESFP (Entertainer) is a personality type with the Extraverted, Observant, Feeling, and Prospecting traits.\n" +
			"These people love vibrant experiences, engaging in life eagerly and taking pleasure in discovering the unknown.\n" +
		 	"They can be very social, often encouraging others into shared activities.\n" +
			"If anyone is to be found spontaneously breaking into song and dance, it is people with the ESFP personality type (Entertainers).\n" +
 			"They get caught up in the excitement of the moment and want everyone else to feel that way too.\n" +
 			"No other type is as generous with their time and energy when it comes to encouraging others, and no other type does it with such irresistible style.\n" +
			"ESFP personalities are inclined toward putting on a show for others and generally appear to be very comfortable in the spotlight.\n" +
 			"However, it is not their love for being the center of attention that drives this sense of confidence but their knack for sensing what’s appropriate in certain situations.\n" + 
			"They have an uncanny ability to mirror the behaviors of those around them.";

	let estpText = "ESTP (Entrepreneur) is a personality type with the Extraverted, Observant, Thinking, and Prospecting traits.\n" + 
			"They tend to be energetic and action-oriented, deftly navigating whatever is in front of them.\n" +
 			"They love uncovering life’s opportunities, whether socializing with others or in more personal pursuits.\n" +
			"People with the ESTP personality type (Entrepreneurs) are vibrant individuals brimming with an enthusiastic and spontaneous energy. \n" +
			"They tend to be on the competitive side, often assuming that a competitive mindset is a necessity in order to achieve success in life.\n" + 
			"With their driven, action-oriented attitudes, they rarely waste time thinking about the past.\n" +
			 "In fact, they excel at keeping their attention rooted in their present – so much so that they rarely find themselves fixated on the time throughout the day.\n" +
			"Theory, abstract concepts, and plodding discussions about global issues and their implications don’t keep ESTP personalities interested for long.\n" +
 			"They keep their conversations energetic, with a good dose of intelligence, but they like to talk about what is – or better yet, to just go out and do it.\n" +
 			"They often leap before they look, fixing their mistakes as they go rather than sitting idle and preparing contingencies and escape clauses.";

			
	let isfpText = "ISFP (Adventurer) is a personality type with the Introverted, Observant, Feeling, and Prospecting traits.\n" +
		 	"They tend to have open minds, approaching life, new experiences, and people with grounded warmth.\n" + 
			"Their ability to stay in the moment helps them uncover exciting potentials.\n" +
			"People with the ISFP personality type (Adventurers) are true artists – although not necessarily in the conventional sense.\n" +
		 	"For these types, life itself is a canvas for self-expression.\n" +
		 	"From what they wear to how they spend their free time, they act in ways that vividly reflect who they are as unique individuals.\n" +
 			"With their exploratory spirit and their ability to find joy in everyday life, ISFPs can be among the most interesting people you’ll ever meet.\n" +
			"Driven by their sense of fairness and their open-mindedness, people with this personality type move through life with an infectiously encouraging attitude.\n" + 
	 		"They love motivating those close to them to follow their passions and usually follow their own interests with the same unhindered enthusiasm.\n" +
 			"The only irony? Unassuming and humble, ISFPs tend to see themselves as “just doing their own thing,” so they may not even realize how remarkable they really are.";

			
	let istpText = "ISTP (Virtuoso) is a personality type with the Introverted, Observant, Thinking, and Prospecting traits.\n" +
			"They tend to have an individualistic mindset, pursuing goals without needing much external connection.\n" +
 			"They engage in life with inquisitiveness and personal skill, varying their approach as needed.\n" +
			"People with the ISTP personality type (Virtuosos) love to explore with their hands and their eyes, touching and examining the world around them with an impressive diligence, a casual curiosity, and a healthy dose of skepticism.\n" +
		 	"They are natural makers, moving from project to project, building the useful and the superfluous for the fun of it and learning from their environment as they go.\n" +
	 		"They find no greater joy than in getting their hands dirty pulling things apart and putting them back together, leaving them just a little bit better than they were before.\n" +

			"ISTPs prefer to approach problems directly, seeking straightforward solutions over convoluted troubleshooting methods.\n" +
			"People with this personality type rely heavily on firsthand experience and trial and error as they execute their ideas and projects.\n" +
 			"And as they do so, they usually prefer to work at their own pace, on their own terms, and without unnecessary interruptions.\n" +
			"This is not a type who is inclined to socialize beyond what is necessary as they try to accomplish their goals.\n" + 
			"In fact, ISTP personalities generally find regular socializing to be taxing.\n" + 
			"And when they do decide to get together with people, they will almost always choose smaller, more meaningful interactions over superficial networking.";



			

			if(personalityType[0] === ("E") && personalityType[1] === ("N") && personalityType[2] === ("F") && personalityType[3] === ("P")){
				console.log(enfpText);

			}else if (personalityType[0] === ("E") && personalityType[1] === ("N") && personalityType[2] === ("F") && personalityType[3] === ("J")){
				console.log(enfjText);
	

			}else if(personalityType[0] === ("I") && personalityType[1] === ("N") && personalityType[2] === ("F") && personalityType[3] === ("P")){
				console.log(infpText);

			}else if (personalityType[0] === ("I") && personalityType[1] === ("N") && personalityType[2] === ("F") && personalityType[3] === ("J")){
				console.log(infjText);

			}else if(personalityType[0] === ("E") && personalityType[1] === ("N") && personalityType[2] === ("T") && personalityType[3] === ("P")){
				console.log(enfpText);


			}else if(personalityType[0] === ("E") && personalityType[1] === ("N") && personalityType[2] === ("T") && personalityType[3] === ("J")){
				console.log(enfpText);



			}else if(personalityType[0] === ("I") && personalityType[1] === ("N") && personalityType[2] === ("T") && personalityType[3] === ("P")){
				console.log(entpText);


			}else if(personalityType[0] === ("I") && personalityType[1] === ("N") && personalityType[2] === ("T") && personalityType[3] === ("J")){
					
				console.log(intjText);

				
			}else if(personalityType[0] === ("E") && personalityType[1] === ("S") && personalityType[2] === ("F") && personalityType[3] === ("J")){
					
				console.log(esfjText);

			}else if(personalityType[0] === ("E") && personalityType[1] === ("S") && personalityType[2] === ("T") && personalityType[3] === ("J")){
				console.log(estjText);


			}else if(personalityType[0] === ("I") && personalityType[1] === ("S") && personalityType[2] === ("F") && personalityType[3] === ("J")){
				console.log(isfjText);


			}else if(personalityType[0] === ("I") && personalityType[1] === ("S") && personalityType[2] === ("T") && personalityType[3] === ("J")){
				console.log(istjText);

			}else if(personalityType[0] === ("E") && personalityType[1] === ("S") && personalityType[2] === ("F") && personalityType[3] === ("P")){
				console.log(esfpText);

			}else if(personalityType[0] === ("E") && personalityType[1] === ("S") && personalityType[2] === ("T") && personalityType[3] === ("P")){
				console.log(estpText);

			}else if(personalityType[0] === ("I") && personalityType[1] === ("S") && personalityType[2] === ("F") && personalityType[3] === ("P")){
				console.log(isfpText);}

			else if(personalityType[0] === ("I") && personalityType[1] === ("S") && personalityType[2] === ("T") && personalityType[3] === ("P")){
				console.log(istpText);

				}
			
			return infpText;

		};









