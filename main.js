// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the input
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the story
const message = words.get('message');

const sillyName1 = cleanAndCap(words.get('silly-name-1'));
const sillyName2 = cleanAndCap(words.get('silly-name-2'));

const personTitle = cleanAndCap(words.get('person-title'));
const insult = cleanAndCap(words.get('insult'));

const object1 = words.get('object-1');
const object2 = words.get('object-2');
const object3 = words.get('object-3');
const object4 = words.get('object-4');

const existentialThreat1 = words.get('existential-threat-1');
const existentialThreat2 = words.get('existential-threat-2');
const existentialThreat3 = words.get('existential-threat-3');
const existentialThreat4 = words.get('existential-threat-4');

const adjective = words.get('adjective');
const number = words.get('number');
const year = words.get('year');
const sizeIncrement = words.get('size-increment');

const negativePersonalityTrait = words.get('negative-personality-trait');
const positivePersonalityTrait = words.get('positive-personality-trait');

const rendezvous = words.get('rendezvous');
const contestType = words.get('contest-type');

// The string containing HTML and text which will populate the story.html page

const story =
`<p>After <span class="word" title="id: existential-threat-1">${existentialThreat1}</span>, <span class="word" title="id: existential-threat-2">${existentialThreat2}</span>, and <span class="word" title="id: existential-threat-3">${existentialThreat3}</span> leveled society as we knew it in <span class="word" title="id: year">${year}</span>, <span class="word" title="id: number">${number}</span> survivors formed a(n) <span class="word" title="id: size-increment">${sizeIncrement}</span> village. There were no institutions or utilities. The people resorted to worshiping <span class="word" title="id: object-1">${object1}</span>, <span class="word" title="id: object-2">${object2}</span>, <span class="word" title="id: object-3">${object3}</span>, <span class="word" title="id: object-4">${object4}</span>, among various other things to cope.</p>

<p>Everything needed to be built from the ground up. There was no system of government, so the most <span class="word" title="id: negative-personality-trait">${negativePersonalityTrait}</span> vied for power in primitive ways. There wasn’t enough organization for all-out war, so most conflicts were petty and between gangs. However, two gangs stood out among the rest. The largest ones, the worshipers of <span class="word" title="id: object-3">${object3}</span> and the worshipers of <span class="word" title="id: object-4">${object4}</span>. </p>

<p>Of course, said gangs were each headed by their most <span class="word" title="id: negative-personality-trait">${negativePersonalityTrait}</span> member. For the <span class="word" title="id: object-3">${object3}</span> worshipers, that was <span class="word" title="id: silly-name-1">${sillyName1}</span>, and for the <span class="word" title="id: object-4">${object4}</span> worshipers, that was <span class="word" title="id: silly-name-2">${sillyName2}</span>.</p>

<p>One <span class="word" title="id: adjective">${adjective}</span> day, <span class="word" title="id: silly-name-2">${sillyName2}</span> decided to challenge <span class="word" title="id: silly-name-1">${sillyName1}</span> to a(n) <span class="word" title="id: contest-type">${contestType}</span> to prove once and for all, who was the most <span class="word" title="id: negative-personality-trait">${negativePersonalityTrait}</span>, which in turn would of course entitle the winner to ultimate control over the village, and the permanent title of <span class="word" title="id: person-title">${personTitle}</span> <span class="word" title="id: insult">${insult}</span>. <span class="word" title="id: silly-name-1">${sillyName1}</span>, of course, agreed, not wanting to be seen by the people as a <span class="word" title="id: positive-personality-trait">${positivePersonalityTrait}</span> person and therefore unfit to rule. They agreed to have the contest <span class="word" title="id: rendezvous">${rendezvous}</span>.</p>

<p>As fate would have it, both <span class="word" title="id: silly-name-2">${sillyName2}</span> and <span class="word" title="id: silly-name-1">${sillyName1}</span> were consumed by <span class="word" title="id: existential-threat-4">${existentialThreat4}</span> before the contest. It was for the best.</p>`;


// Grabbing the title element
const title = document.getElementById('title');
// Populating the title element with text
title.innerHTML = `Unfettered`;

// Grabbing the story element
const storyEl = document.getElementById('story');
// Populating the story element with the value of the story variable
storyEl.innerHTML = story;

// Grabbing the moral-message element
const moralMessage = document.getElementById('moral-message');
// Populating the moral-message element with text
moralMessage.innerHTML = `<span class="italics" title="id: message">"${message}"</span>`;
