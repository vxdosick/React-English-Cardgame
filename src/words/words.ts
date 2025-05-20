type Words = {
    word: string,
    translate: string,
    sentence: string
}

const words: Words[] = [
  {
    word: "home",
    translate: "mieszkanie",
    sentence: "It's my home"
  },
  {
    word: "school",
    translate: "szkoła",
    sentence: "I go to school"
  },
  {
    word: "add",
    translate: "dodać",
    sentence: "I add two numbers"
  },
  {
    word: "go",
    translate: "jechać",
    sentence: "I go to the gym"
  },
  // {
  //   "word": "arrive",
  //   "translate": "przybyć",
  //   "sentence": "They arrive at the airport at noon"
  // },
  // {
  //   "word": "borrow",
  //   "translate": "pożyczyć",
  //   "sentence": "Can I borrow your book?"
  // },
  // {
  //   "word": "choice",
  //   "translate": "wybór",
  //   "sentence": "It was a difficult choice"
  // },
  // {
  //   "word": "decide",
  //   "translate": "zdecydować",
  //   "sentence": "She decided to stay home"
  // },
  // {
  //   "word": "depend",
  //   "translate": "zależeć",
  //   "sentence": "It depends on the weather"
  // },
  // {
  //   "word": "describe",
  //   "translate": "opisać",
  //   "sentence": "Can you describe the man you saw?"
  // },
  // {
  //   "word": "develop",
  //   "translate": "rozwijać",
  //   "sentence": "We need to develop a new plan"
  // },
  // {
  //   "word": "earn",
  //   "translate": "zarabiać",
  //   "sentence": "She earns a good salary"
  // },
  // {
  //   "word": "enjoy",
  //   "translate": "cieszyć się",
  //   "sentence": "I enjoy listening to music"
  // },
  // {
  //   "word": "explain",
  //   "translate": "wyjaśnić",
  //   "sentence": "Please explain the rules"
  // },
  // {
  //   "word": "forget",
  //   "translate": "zapomnieć",
  //   "sentence": "Don't forget your keys"
  // },
  // {
  //   "word": "happen",
  //   "translate": "zdarzyć się",
  //   "sentence": "What happened yesterday?"
  // },
  // {
  //   "word": "include",
  //   "translate": "zawierać",
  //   "sentence": "The price includes breakfast"
  // },
  // {
  //   "word": "invite",
  //   "translate": "zaprosić",
  //   "sentence": "They invited me to the party"
  // },
  // {
  //   "word": "join",
  //   "translate": "dołączyć",
  //   "sentence": "Would you like to join us?"
  // },
  // {
  //   "word": "learn",
  //   "translate": "uczyć się",
  //   "sentence": "I'm learning Spanish"
  // },
  // {
  //   "word": "leave",
  //   "translate": "opuścić",
  //   "sentence": "She left the room quietly"
  // },
  // {
  //   "word": "move",
  //   "translate": "przeprowadzić się",
  //   "sentence": "We moved to a new city"
  // },
  // {
  //   "word": "offer",
  //   "translate": "zaproponować",
  //   "sentence": "He offered to help"
  // },
  // {
  //   "word": "order",
  //   "translate": "zamówić",
  //   "sentence": "I ordered a pizza"
  // },
  // {
  //   "word": "plan",
  //   "translate": "planować",
  //   "sentence": "We plan to travel next month"
  // },
  // {
  //   "word": "prepare",
  //   "translate": "przygotować",
  //   "sentence": "She is preparing dinner"
  // },
  // {
  //   "word": "promise",
  //   "translate": "obiecać",
  //   "sentence": "He promised to call me"
  // },
  // {
  //   "word": "receive",
  //   "translate": "otrzymać",
  //   "sentence": "I received your email"
  // },
  // {
  //   "word": "remember",
  //   "translate": "pamiętać",
  //   "sentence": "Do you remember his name?"
  // },
  // {
  //   "word": "repeat",
  //   "translate": "powtórzyć",
  //   "sentence": "Could you repeat that, please?"
  // },
  // {
  //   "word": "return",
  //   "translate": "wrócić",
  //   "sentence": "She returned home late"
  // },
  // {
  //   "word": "save",
  //   "translate": "oszczędzać",
  //   "sentence": "I'm trying to save money"
  // },
  // {
  //   "word": "sell",
  //   "translate": "sprzedawać",
  //   "sentence": "They sell fresh bread here"
  // },
  // {
  //   "word": "share",
  //   "translate": "dzielić się",
  //   "sentence": "We shared a taxi"
  // },
  // {
  //   "word": "show",
  //   "translate": "pokazać",
  //   "sentence": "Can you show me the way?"
  // },
  // {
  //   "word": "spend",
  //   "translate": "spędzać",
  //   "sentence": "We spent the weekend at the lake"
  // },
  // {
  //   "word": "start",
  //   "translate": "zacząć",
  //   "sentence": "She started a new job"
  // },
  // {
  //   "word": "stay",
  //   "translate": "zostać",
  //   "sentence": "I stayed at home"
  // },
  // {
  //   "word": "suggest",
  //   "translate": "zasugerować",
  //   "sentence": "He suggested going to the cinema"
  // },
  // {
  //   "word": "talk",
  //   "translate": "rozmawiać",
  //   "sentence": "We talked for hours"
  // },
  // {
  //   "word": "travel",
  //   "translate": "podróżować",
  //   "sentence": "I love to travel"
  // },
  // {
  //   "word": "try",
  //   "translate": "próbować",
  //   "sentence": "Try to stay calm"
  // },
  // {
  //   "word": "use",
  //   "translate": "używać",
  //   "sentence": "Can I use your phone?"
  // },
  // {
  //   "word": "visit",
  //   "translate": "odwiedzić",
  //   "sentence": "We visited our grandparents"
  // },
  // {
  //   "word": "wait",
  //   "translate": "czekać",
  //   "sentence": "Wait for me!"
  // },
  // {
  //   "word": "walk",
  //   "translate": "spacerować",
  //   "sentence": "We walked in the park"
  // },
  // {
  //   "word": "win",
  //   "translate": "wygrać",
  //   "sentence": "They won the match"
  // },
  // {
  //   "word": "wish",
  //   "translate": "życzyć",
  //   "sentence": "I wish you good luck"
  // },
  // {
  //   "word": "work",
  //   "translate": "pracować",
  //   "sentence": "She works at a hospital"
  // },
  // {
  //   "word": "worry",
  //   "translate": "martwić się",
  //   "sentence": "Don’t worry about it"
  // },
  // {
  //   "word": "write",
  //   "translate": "pisać",
  //   "sentence": "He writes poems"
  // },
  // {
  //   "word": "accept",
  //   "translate": "zaakceptować",
  //   "sentence": "She accepted the offer"
  // },
  // {
  //   "word": "advise",
  //   "translate": "doradzać",
  //   "sentence": "He advised me to wait"
  // },
  // {
  //   "word": "agree",
  //   "translate": "zgodzić się",
  //   "sentence": "I agree with you"
  // }

]

export default words