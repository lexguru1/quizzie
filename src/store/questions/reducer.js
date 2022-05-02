const initialState = [
  {
    Qn: "Which programming language is fastest?",
    Ans: [
      { answer: "C", result: true },
      { answer: "Javascript", result: false },
      { answer: "Python", result: false },
      { answer: "C++", result: false },
    ],
    money: 100,
  },
  {
    Qn: "What does the word nybble means in computing?",
    Ans: [
      { answer: "Python GUI library", result: false },
      { answer: "Half of a byte", result: true },
      { answer: "Javascript Package", result: false },
      { answer: "Intel processor made in 1974", result: false },
    ],
    money: 200,
  },
  {
    Qn: "The hammer and sickle is one of the most recognisable symbols of which political ideology?",
    Ans: [
      { answer: "Republicanism", result: false },
      { answer: "Communism", result: true },
      { answer: "Conservatism", result: false },
      { answer: "Liberalism", result: false },
    ],
    money: 300,
  },
  {
    Qn: "Which toys have been marketed with the phrase “robots in disguise”?",
    Ans: [
      { answer: "Bratz Dolls", result: false },
      { answer: "Transformers", result: true },
      { answer: "Hatchimals", result: false },
      { answer: "Sylvanian Families", result: false },
    ],
    money: 500,
  },
  {
    Qn: "What is actually electricity?",
    Ans: [
      { answer: "A flow of water", result: false },
      { answer: "A flow of electrons", result: true },
      { answer: "A flow of air", result: false },
      { answer: "A flow of atoms", result: false },
    ],
    money: 1000,
  },
  {
    Qn: "In the United States, football is called soccer. So what is American football called in the United Kingdom?",
    Ans: [
      { answer: "Rugby", result: false },
      { answer: "American football", result: true },
      { answer: "Handball", result: false },
      { answer: " Combball", result: false },
    ],
    money: 2000,
  },

  {
    Qn: "A person with well-developed abdominal muscles is said to have a what?",
    Ans: [
      { answer: "One-pack", result: false },
      { answer: "Six-pack", result: true },
      { answer: "12-pack", result: false },
      { answer: "family pack", result: false },
    ],
    money: 4000,
  },
  {
    Qn: "Which two words traditionally appear onscreen at the termination of a feature film?",
    Ans: [
      { answer: "The end", result: true },
      { answer: "The conclusion", result: false },
      { answer: "The finish", result: false },
      { answer: "The pizza rolls are done", result: false },
    ],
    money: 8000,
  },
  {
    Qn: "Which of these names is not in the title of a Shakespeare play?",
    Ans: [
      { answer: "Hamlet", result: false },
      { answer: "Romeo", result: false },
      { answer: "Macbeth", result: false },
      { answer: "Darren", result: true },
    ],
    money: 16000,
  },
  {
    Qn: "Where did Scotch whisky originate?",
    Ans: [
      { answer: "Ireland", result: false },
      { answer: "Wales", result: false },
      { answer: "The united states", result: false },
      { answer: "Scotland", result: true },
    ],
    money: 32000,
  },
  {
    Qn: "What name is traditionally given to the party held for a woman who is expecting a baby?",
    Ans: [
      { answer: "Baby drizzle", result: false },
      { answer: "Baby shower", result: true },
      { answer: "Baby downpour", result: false },
      { answer: "Baby deluge", result: false },
    ],
    money: 64000,
  },
  {
    Qn: "In fancy hotels, it is traditional for what tantalizing treat to be left on your pillow?",
    Ans: [
      { answer: "A pretzel", result: false },
      { answer: "An apple", result: false },
      { answer: "A mint", result: true },
      { answer: "A photo of Wolf Blitzer", result: false },
    ],
    money: 125000,
  },
  {
    Qn: "In the United States, what is traditionally the proper way to address a judge?",
    Ans: [
      { answer: "Your holiness", result: false },
      { answer: "Your honor", result: true },
      { answer: "Your eminence", result: false },
      { answer: "You da man!", result: false },
    ],
    money: 250000,
  },
  {
    Qn: "Which of these pairs of apps offers roughly the same type of service?",
    Ans: [
      { answer: "Snapchat and Grubhub", result: false },
      { answer: "Whatsapp and SHAREit", result: false },
      { answer: "TikTok and Spotify", result: false },
      { answer: "Lyft and Uber", result: true },
    ],
    money: 500000,
  },
  {
    Qn: "The popular children's song 'It's Raining, It's Pouring' mentions an 'old man' doing what?",
    Ans: [
      { answer: "Snoring", result: true },
      { answer: "Cooking", result: false },
      { answer: "Laughing", result: false },
      { answer: "Yelling", result: false },
    ],
    money: 1000000,
  },
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
