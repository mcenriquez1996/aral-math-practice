/* ARAL Practice App - worksheet content (AUTO-GENERATED from the official DepEd ARAL PDFs).
   Item types: {q} computable; {q,mixed} mixed-number; {q,fmt:"decimal"} decimal;
   {q,a,type:"compare|order-asc|order-desc|num-to-words|words-to-num|rounding|key"} keyed;
   key flags: seq (ordered number list), set (unordered number set), alt (either/or answer).
   item.ask = a short "what to write" tag shown above the box; ws.ordered = keep item order (do
   not shuffle) so an instruction keyed to item numbers still lines up.
   Do not hand-edit; regenerate from _build/gen_content.js. */
var ARAL_CONTENT = {
 "g78": [
  {
   "n": 1,
   "title": "Adding Similar Fractions (Fractions with the Same Denominators)",
   "concept": "Adding Similar Fractions (Fractions with the Same Denominators). When adding fractions with the same denominator, simply add the numerators and copy the denominator. For example, 5/18 + 7/18 = (5+7)/18 = 12/18 = 2/3.",
   "example": "5/18 + 7/18 = (5+7)/18 = 12/18 = 2/3",
   "instruction": "Find the sum of the following fractions. Express answers in lowest terms.",
   "items": [
    {
     "q": "1/3 + 1/3"
    },
    {
     "q": "5/8 + 2/8"
    },
    {
     "q": "7/16 + 5/16"
    },
    {
     "q": "3/8 + 2/8"
    },
    {
     "q": "3/5 + 1/5"
    },
    {
     "q": "11/20 + 3/20"
    },
    {
     "q": "19/30 + 3/30"
    },
    {
     "q": "6/25 + 8/25"
    },
    {
     "q": "35/50 + 8/50"
    },
    {
     "q": "3/10 + 4/10"
    },
    {
     "q": "15/40 + 17/40"
    },
    {
     "q": "8/25 + 9/25"
    },
    {
     "q": "14/19 + 7/19",
     "mixed": true
    },
    {
     "q": "18/30 + 6/30"
    },
    {
     "q": "20/50 + 10/50"
    }
   ],
   "examples": [
    "2/7 + 3/7",
    "9/16 + 3/16",
    "7/20 + 9/20",
    "13/30 + 5/30",
    "11/25 + 4/25",
    "21/40 + 7/40"
   ]
  },
  {
   "n": 2,
   "title": "Subtracting Fractions with the Same Denominators",
   "concept": "Subtracting Fractions with the Same Denominators. When subtracting fractions with the same denominators, simply subtract the numerators and copy the denominator. For example, 19/23 - 6/23 = (19-6)/23 = 13/23.",
   "example": "19/23 - 6/23 = (19-6)/23 = 13/23",
   "instruction": "Find the difference of the following fractions.",
   "items": [
    {
     "q": "4/4 - 3/4"
    },
    {
     "q": "4/5 - 3/5"
    },
    {
     "q": "8/8 - 3/8"
    },
    {
     "q": "6/6 - 4/6"
    },
    {
     "q": "4/4 - 1/4"
    },
    {
     "q": "8/9 - 6/9"
    },
    {
     "q": "52/98 - 35/98"
    },
    {
     "q": "23/47 - 15/47"
    },
    {
     "q": "53/85 - 23/85"
    },
    {
     "q": "23/64 - 12/64"
    },
    {
     "q": "63/97 - 25/97"
    },
    {
     "q": "74/252 - 26/252"
    },
    {
     "q": "246/634 - 235/634"
    },
    {
     "q": "153/469 - 135/469"
    },
    {
     "q": "45/345 - 36/345"
    },
    {
     "q": "145/360 - 135/360"
    },
    {
     "q": "235/260 - 141/260"
    }
   ],
   "examples": [
    "5/6 - 2/6",
    "7/9 - 4/9",
    "29/47 - 12/47",
    "48/85 - 19/85",
    "187/252 - 43/252",
    "215/360 - 125/360"
   ]
  },
  {
   "n": 3,
   "title": "Adding or Subtracting Mixed Fractions with the Same Denominators",
   "concept": "Adding or Subtracting Mixed Fractions with the Same Denominators. Adding or subtracting fractions with the same denominator is easy. All you have to do is to add or subtract the numerators. Example ADDITION: 3 1/5 + 2 2/5 -> add the two whole numbers (3 and 2) and, since both fractions have the same denominator of 5, add the numerators and copy the common denominator -> 3 + 2 (1+2)/5 = 5 3/5. Example SUBTRACTION: 4 5/12 - 2 1/12 -> subtract the two whole numbers (4 and 2) and, since both fractions have the same denominator of 12, subtract the numerators and copy the common denominator -> 4 - 2 (5-1)/12 = 2 4/12.",
   "example": "Addition: 3 1/5 + 2 2/5 = (3+2) (1+2)/5 = 5 3/5",
   "instruction": "Add or Subtract. Final answer should be in lowest term.",
   "items": [
    {
     "q": "1 2/4 + 1 1/4",
     "mixed": true
    },
    {
     "q": "6 2/8 + 1 2/8",
     "mixed": true
    },
    {
     "q": "8 2/7 + 4 1/7",
     "mixed": true
    },
    {
     "q": "4 1/5 + 1 2/5",
     "mixed": true
    },
    {
     "q": "5 1/4 + 3 1/4",
     "mixed": true
    },
    {
     "q": "9 2/3 - 5 1/3",
     "mixed": true
    },
    {
     "q": "9 4/5 - 5 2/5",
     "mixed": true
    },
    {
     "q": "8 5/8 - 8 1/8"
    },
    {
     "q": "11 7/9 - 3 5/9",
     "mixed": true
    },
    {
     "q": "15 3/4 - 8 1/4",
     "mixed": true
    },
    {
     "q": "12 4/9 - 4 3/9",
     "mixed": true
    },
    {
     "q": "6 3/7 + 2 1/7 + 10 2/7",
     "mixed": true
    },
    {
     "q": "9 1/5 + 6 2/5 + 5 1/5",
     "mixed": true
    },
    {
     "q": "11 1/4 + 7 1/4 + 1 1/4"
    }
   ],
   "examples": [
    "2 1/6 + 3 2/6",
    "7 3/10 + 2 4/10",
    "10 5/6 - 4 1/6",
    "13 7/8 - 6 3/8",
    "4 2/9 + 3 4/9 + 1 1/9",
    "8 1/6 + 2 2/6 + 3 1/6"
   ]
  },
  {
   "n": 4,
   "title": "Adding and Subtracting Mixed Numbers",
   "concept": "",
   "example": "2/3 + 5/6 = 1 1/2",
   "instruction": "Perform the indicated operation.",
   "items": [
    {
     "q": "2/3 + 5/6",
     "mixed": true
    },
    {
     "q": "1/2 + 2/3",
     "mixed": true
    },
    {
     "q": "4/5 - 2/3"
    },
    {
     "q": "1/2 + 4/5",
     "mixed": true
    },
    {
     "q": "3/4 + 4/7",
     "mixed": true
    },
    {
     "q": "7/8 - 1/3"
    },
    {
     "q": "3/4 - 2/6"
    },
    {
     "q": "2/4 + 9/10",
     "mixed": true
    },
    {
     "q": "4/3 - 2/9",
     "mixed": true
    },
    {
     "q": "2/6 + 2/9"
    },
    {
     "q": "5/3 - 2/8",
     "mixed": true
    },
    {
     "q": "2/8 - 2/9"
    },
    {
     "q": "5/6 + 1/4",
     "mixed": true
    },
    {
     "q": "2/5 + 4/7"
    }
   ],
   "examples": [
    "1/3 + 3/4",
    "3/5 + 1/2",
    "5/6 - 1/4",
    "2/3 + 3/8",
    "7/3 - 3/9",
    "3/9 + 2/6"
   ]
  },
  {
   "n": 5,
   "title": "Addition and Subtraction of Similar Fractions",
   "concept": "Addition and Subtraction of Similar Fractions. To add or subtract fractions with same denominators, simply add/subtract the numerators and copy the denominators. Subtraction with Regrouping: In subtracting mixed numbers where the numerator in the minuend is smaller than the numerator in the subtrahend, we can regroup the minuend by borrowing 1 from the whole number. Example: 2 1/5 - 4/5. 1 is smaller than 4. Borrow 1 from the whole number, 2, and add it to 1/5. 1, expressed in improper fraction, is 5/5. Then, we can subtract: 1 6/5 - 4/5 = 1 2/5.",
   "example": "5/7 + 2/7 = 7/7 = 1",
   "instruction": "Add/subtract the following fractions. Answers must be in lowest terms and should be proper fractions or mixed numbers.",
   "items": [
    {
     "q": "6/8 + 3/8",
     "mixed": true
    },
    {
     "q": "7/9 + 6/9",
     "mixed": true
    },
    {
     "q": "2/4 + 3/4",
     "mixed": true
    },
    {
     "q": "4/9 + 6/9",
     "mixed": true
    },
    {
     "q": "2/8 + 4/8"
    },
    {
     "q": "4/6 + 2/6"
    },
    {
     "q": "3 3/5 + 1 1/5",
     "mixed": true
    },
    {
     "q": "2 7/14 + 3/14",
     "mixed": true
    },
    {
     "q": "1 5/8 + 2 4/8",
     "mixed": true
    },
    {
     "q": "1 6/7 + 6/7",
     "mixed": true
    },
    {
     "q": "3/5 - 2/5"
    },
    {
     "q": "7/14 - 2/14"
    },
    {
     "q": "5/6 - 1/6"
    },
    {
     "q": "6/17 - 2/17"
    },
    {
     "q": "8/8 - 3/8"
    },
    {
     "q": "1 7/8 - 4/8",
     "mixed": true
    },
    {
     "q": "2 25/40 - 2 7/40"
    },
    {
     "q": "8 7/17 - 3 9/17",
     "mixed": true
    },
    {
     "q": "4 2/4 - 3/4",
     "mixed": true
    },
    {
     "q": "2 5/8 - 5/8"
    },
    {
     "q": "6 5/9 - 5 8/9"
    },
    {
     "q": "1 4/6 - 5/6"
    },
    {
     "q": "4 3/8 - 2 6/8",
     "mixed": true
    },
    {
     "q": "3 3/8 - 1 5/8",
     "mixed": true
    },
    {
     "q": "5 4/8 - 1 1/8",
     "mixed": true
    },
    {
     "q": "1 3/9 - 7/9"
    },
    {
     "q": "9 4/7 - 8 4/7"
    },
    {
     "q": "3 6/43 - 2 9/43"
    },
    {
     "q": "6 15/16 - 7/16",
     "mixed": true
    },
    {
     "q": "7 6/9 - 3 2/9",
     "mixed": true
    }
   ],
   "examples": [
    "5/7 + 4/7",
    "2 3/10 + 1 4/10",
    "1 5/6 + 4/6",
    "11/12 - 5/12",
    "5 2/9 - 3 7/9",
    "7 11/16 - 2 3/16"
   ]
  },
  {
   "n": 6,
   "title": "Addition and Subtraction of Dissimilar Fractions",
   "concept": "Addition and Subtraction of Dissimilar Fractions. To add or subtract dissimilar fractions, make them similar first. Then, add/subtract the similar fractions. Examples: 2/3 + 1/2 = 4/6 + 3/6 = 7/6 = 1 1/6; 2/5 - 1/4 = 8/20 - 5/20 = 3/20.",
   "example": "2/3 + 1/2 = 4/6 + 3/6 = 7/6 = 1 1/6",
   "instruction": "Part 1 (items 1-15): Add the following fractions. Answers must be in lowest terms and should be proper fractions or mixed numbers. Part 2 (items 16-35): Subtract the following fractions. Answers must be in lowest terms and should be proper fractions or mixed numbers.",
   "items": [
    {
     "q": "4/5 + 2/4",
     "mixed": true
    },
    {
     "q": "3/8 + 6/9",
     "mixed": true
    },
    {
     "q": "4/6 + 2/4",
     "mixed": true
    },
    {
     "q": "3/8 + 1/2"
    },
    {
     "q": "1/8 + 3/4"
    },
    {
     "q": "2/8 + 2/7"
    },
    {
     "q": "4/7 + 2/5"
    },
    {
     "q": "3/4 + 7/9",
     "mixed": true
    },
    {
     "q": "5/8 + 5/6",
     "mixed": true
    },
    {
     "q": "1/3 + 1/4"
    },
    {
     "q": "2/5 + 1 3/8",
     "mixed": true
    },
    {
     "q": "2/7 + 2/3"
    },
    {
     "q": "3/6 + 3/4",
     "mixed": true
    },
    {
     "q": "8/9 + 2/5",
     "mixed": true
    },
    {
     "q": "4/13 + 8/9",
     "mixed": true
    },
    {
     "q": "5/7 - 5/9"
    },
    {
     "q": "3/5 - 2/7"
    },
    {
     "q": "9/35 - 2/15"
    },
    {
     "q": "9/26 - 1/3"
    },
    {
     "q": "5/7 - 5/10"
    },
    {
     "q": "8/9 - 6/7"
    },
    {
     "q": "6/9 - 3/7"
    },
    {
     "q": "1/4 - 3/20"
    },
    {
     "q": "4/9 - 1/7"
    },
    {
     "q": "3/7 - 2/9"
    },
    {
     "q": "2/6 - 2/8"
    },
    {
     "q": "5/8 - 3/16"
    },
    {
     "q": "5/12 - 2/9"
    },
    {
     "q": "6/9 - 8/27"
    },
    {
     "q": "13/4 - 4/5",
     "mixed": true
    },
    {
     "q": "12/5 - 3/7",
     "mixed": true
    },
    {
     "q": "9/4 - 7/6",
     "mixed": true
    },
    {
     "q": "4/3 - 5/6"
    },
    {
     "q": "5/18 - 2/9"
    },
    {
     "q": "7/5 - 9/20"
    }
   ],
   "ordered": true,
   "examples": [
    "3/4 + 5/6",
    "5/9 + 1/6",
    "5/6 + 3/10",
    "7/8 - 2/5",
    "11/15 - 4/9",
    "11/6 - 3/4"
   ]
  },
  {
   "n": 7,
   "title": "Adding and Subtracting Dissimilar Fractions",
   "concept": "",
   "example": "8/9 + 6/8 = 1 23/36",
   "instruction": "Items 1-10: Add the following fractions. Answers must be in lowest terms and should be proper fractions or mixed numbers. Items 11-20: Subtract the following fractions. Answers must be in lowest terms and should be proper fractions or mixed numbers.",
   "items": [
    {
     "q": "8/9 + 6/8",
     "mixed": true
    },
    {
     "q": "2/8 + 9/15"
    },
    {
     "q": "3/5 + 2/9"
    },
    {
     "q": "2/8 + 5/6",
     "mixed": true
    },
    {
     "q": "1/3 + 7/18"
    },
    {
     "q": "5/20 + 3/4"
    },
    {
     "q": "9/30 + 4/9"
    },
    {
     "q": "3/5 + 3/12"
    },
    {
     "q": "2/4 - 1/12"
    },
    {
     "q": "4/5 + 3/7",
     "mixed": true
    },
    {
     "q": "15/16 - 7/8"
    },
    {
     "q": "1/2 - 3/6"
    },
    {
     "q": "2/4 - 8/40"
    },
    {
     "q": "16/9 - 19/18"
    },
    {
     "q": "21/25 - 5/8"
    },
    {
     "q": "5/9 - 1/6"
    },
    {
     "q": "2/3 - 4/7"
    },
    {
     "q": "13/6 - 5/4"
    },
    {
     "q": "17/35 - 3/7"
    },
    {
     "q": "5/6 - 5/8"
    }
   ],
   "ordered": true,
   "examples": [
    "5/6 + 3/8",
    "7/10 + 4/15",
    "7/8 + 3/16",
    "9/10 - 2/6",
    "11/12 - 5/8",
    "19/8 - 7/4"
   ]
  },
  {
   "n": 8,
   "title": "Word Problems on Adding and Subtracting Fractions",
   "concept": "Fractions can only be added or subtracted when the pieces are the same size, so first find a common denominator that both denominators divide into, then rename each fraction. Add or subtract only the numerators and keep the common denominator, then reduce to lowest terms. Words like \"in all\", \"altogether\" and \"both\" tell you to add, while \"how much more\", \"how much is left\" and \"how much closer\" tell you to subtract. If a problem asks for the part that is left, remember the whole is 1, so write 1 over the same denominator and subtract.",
   "example": "",
   "instruction": "Solve the following problems. Express your answers in lowest terms and in mixed numbers if necessary.",
   "items": [
    {
     "q": "Basilio has walked for one-fifth mile yesterday and two-seventh mile today looking for his brother, Crispin. How long has he walked in all for two days?",
     "a": "17/35 mile",
     "type": "key"
    },
    {
     "q": "Patricia is preparing for her summative test. She studied for 2/3 of an hour last Friday and 5/6 of an hour last Saturday. For how long has she studied in those two days?",
     "a": "1 1/2 hour",
     "type": "key"
    },
    {
     "q": "The Grade 5 students are assigned to prepare the covered court for the recognition ceremonies. If three eights of them will clean the area and one fifth will decorate the stage, what part of the students will clean and decorate?",
     "a": "23/40 of students",
     "type": "key"
    },
    {
     "q": "Mrs. Gutierrez brings home a cake given to her by her students. If her son eats 1/7 of the cake and her daughter eats 2/9, what part of the cake is eaten by her children?",
     "a": "23/63 of the cake",
     "type": "key"
    },
    {
     "q": "Refer to the previous question. What part of the cake is left?",
     "a": "40/63 of the cake",
     "type": "key"
    },
    {
     "q": "Maria's art project is a small wooden horse. She paints 4/9 of it green and 1/10 of it blue. What part of the wooden horse is painted in green and blue?",
     "a": "49/90 of the wooden horse",
     "type": "key"
    },
    {
     "q": "In the preceding problem, what part of the wooden horse is not painted in green or blue?",
     "a": "31/90 of the wooden horse",
     "type": "key"
    },
    {
     "q": "One of the floats in a procession is decorated in one ninth lights and three fourths flowers. What part of the float is decorated with lights and flowers?",
     "a": "31/36 of the float",
     "type": "key"
    },
    {
     "q": "My basket weighs 7/10 kilogram. The squash inside it weighs 1/2 kilogram. How much will my basket weigh without the squash?",
     "a": "1/5 kg",
     "type": "key"
    },
    {
     "q": "Mia swept the floor in the living room for 2/5 of an hour and dusted the windows for 1/6 of an hour. How long did she work in the living room?",
     "a": "17/30 of an hour",
     "type": "key"
    },
    {
     "q": "2/9 of a piece of plywood is used for the roof of a doghouse while 3/4 is used for the walls. How much plywood is used for the doghouse?",
     "a": "35/36 of plywood",
     "type": "key"
    },
    {
     "q": "Grandmother and Shaira were knitting. Grandmother used 9/10 of a wool and Shaira used 3/5 of a wool. How much more wool did grandmother use than Shaira?",
     "a": "3/10 of a wool",
     "type": "key"
    },
    {
     "q": "A recipe of spaghetti needs 2/3 cup of red bell pepper and 1/5 cup of green bell pepper. How much more red bell pepper than green does the recipe need?",
     "a": "7/15 cups more",
     "type": "key"
    },
    {
     "q": "Margarette lives 3/8 of a kilometer away from her school. Lester lives 8/9 of a kilometer away from the same school. How much closer is Margarette from their school?",
     "a": "37/72 km",
     "type": "key"
    },
    {
     "q": "You ate 2/9 of a bowl of cereals while your sister ate 4/15 of a bowl. Who ate more cereals and by how much?",
     "a": "my sister. 2/45 of a bowl",
     "type": "key"
    },
    {
     "q": "Of the T-shirts sold in a store, 3/11 were large-sized while 1/2 were medium-sized. How much more shirts sold were medium sized?",
     "a": "5/22 more shirts",
     "type": "key"
    },
    {
     "q": "Georgina harvested 4/7 of a sack of mangoes while Peping harvested 5/8 of a sack. Who harvested more mangoes and by how much?",
     "a": "Peping, 3/56 of a sack",
     "type": "key"
    },
    {
     "q": "Lucy is preparing a cup of coffee. She puts in one-third teaspoon of coffee and three-fourth teaspoon of sugar. How much more sugar does she put than coffee?",
     "a": "5/12 teaspoons more",
     "type": "key"
    },
    {
     "q": "Regine's wardrobe is made up of 7/20 jeans while blouses comprise 1/4. What part of her wardrobe are either jeans or blouses?",
     "a": "3/5 of her wardrobe",
     "type": "key"
    },
    {
     "q": "Refer to the previous question. What part of her wardrobe is neither jeans nor blouses?",
     "a": "2/5 of her wardrobe",
     "type": "key"
    },
    {
     "q": "Of all the fruits sold in a fruit stand, 2/7 are apples and 9/14 are oranges. What part of the fruits are either apples or oranges?",
     "a": "13/14 of the fruits",
     "type": "key"
    },
    {
     "q": "Refer to the previous question. How much more are the oranges?",
     "a": "5/14 are oranges",
     "type": "key"
    },
    {
     "q": "An Isipnayan student brings her Isipnayan bag with worksheets weighing 2/15 of a pound and a pencil case weighing 3/20 of a pound. How heavy are the things inside the student's bag?",
     "a": "17/60 of a pound",
     "type": "key"
    },
    {
     "q": "Johnny walks 2/5 of a kilometer from his house to the market and 3/10 of a kilometer from the market to his school. How far does he walk going to school?",
     "a": "7/10 of a kilometer",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "A carpenter used 3/4 meter of wood for a shelf and 5/6 meter of wood for a picture frame. How much wood did he use in all?",
     "steps": [
      "The denominators 4 and 6 both go into 12, so use 12.",
      "3/4 = 9/12 and 5/6 = 10/12.",
      "9/12 + 10/12 = 19/12.",
      "19/12 is more than one whole, so 19/12 = 1 7/12."
     ],
     "a": "1 7/12 meters of wood"
    },
    {
     "q": "A pitcher holds 5/6 liter of calamansi juice. If 1/3 liter is poured into a glass, how much juice is left in the pitcher?",
     "steps": [
      "The denominators are 6 and 3, and 3 goes into 6.",
      "1/3 = 2/6, so the problem becomes 5/6 - 2/6.",
      "5/6 - 2/6 = 3/6.",
      "3/6 in lowest terms is 1/2."
     ],
     "a": "1/2 liter"
    },
    {
     "q": "Mang Tonyo painted 3/8 of a fence and his son painted 1/6 of it. What part of the fence is still unpainted?",
     "steps": [
      "Add the painted parts first. Both 8 and 6 go into 24.",
      "3/8 = 9/24 and 1/6 = 4/24, so 9/24 + 4/24 = 13/24.",
      "The whole fence is 1, which is the same as 24/24.",
      "24/24 - 13/24 = 11/24."
     ],
     "a": "11/24 of the fence"
    },
    {
     "q": "Ana harvested 3/4 of a sack of rambutan and Lito harvested 2/3 of a sack. Who harvested more, and by how much?",
     "steps": [
      "Compare the two amounts using the denominator 12.",
      "3/4 = 9/12 and 2/3 = 8/12, so Ana has the bigger amount.",
      "9/12 - 8/12 = 1/12."
     ],
     "a": "Ana, by 1/12 of a sack"
    }
   ]
  },
  {
   "n": 9,
   "title": "Multiplication of Fractions",
   "concept": "Multiply the numerators then multiply the denominators. We can also reduce the fractions if any numerator has a common factor with any denominator by doing cancellation. Simply divide both the numerator and the denominator by the greatest common factor before multiplying. This way, we don't need to simplify our answer anymore.",
   "example": "1/4 x 6/7 = 3/14 (divide 6 and 4 by 2)",
   "instruction": "Multiply the following fractions. Show your solution and cancellation. Express answers in lowest terms.",
   "items": [
    {
     "q": "2/15 * 3/5"
    },
    {
     "q": "2/4 * 6/10"
    },
    {
     "q": "5/8 * 6/12"
    },
    {
     "q": "3/4 * 6/9"
    },
    {
     "q": "1/6 * 2/9"
    },
    {
     "q": "6/7 * 7/9"
    },
    {
     "q": "1/3 * 3/6"
    },
    {
     "q": "4/5 * 5/6"
    },
    {
     "q": "7/8 * 4/7"
    },
    {
     "q": "2/5 * 5/9"
    },
    {
     "q": "7/8 * 6/14"
    },
    {
     "q": "8/35 * 7/54"
    },
    {
     "q": "5/9 * 2/20"
    },
    {
     "q": "5/8 * 4/15"
    },
    {
     "q": "3/22 * 11/30"
    },
    {
     "q": "1/12 * 8/10"
    },
    {
     "q": "4/36 * 4/7"
    },
    {
     "q": "9/90 * 8/13"
    },
    {
     "q": "7/9 * 9/12"
    },
    {
     "q": "1/7 * 7/64"
    },
    {
     "q": "9/88 * 4/54"
    },
    {
     "q": "6/36 * 3/6"
    },
    {
     "q": "5/14 * 7/50"
    },
    {
     "q": "4/22 * 7/18"
    },
    {
     "q": "Mang Tomio sells fishballs. On Monday, he sells 4/5 of a plastic bag of fishballs. On Tuesday, he sells 7/8 of what he has sold on Monday. How many bags of fishballs has he sold on Tuesday?",
     "a": "7/10",
     "type": "key"
    },
    {
     "q": "On a Saturday night, Janice ate buko pie and left 2/5 of the pie uneaten. The following morning, his brother ate half of what was left. How much of the buko pie did her brother eat?",
     "a": "1/5 of the buko pie",
     "type": "key"
    },
    {
     "q": "Mark spends only 2/3 of his allowance and saves the rest. Of the amount that he spends, he uses 9/10 of it for food. What part of his allowance does he spend on food?",
     "a": "3/5 of his allowance",
     "type": "key"
    },
    {
     "q": "Of all the students in a school, are 1/15 enrolled in supplementary programs. Of these students who are enrolled in supplementary programs, 3/5 are enrolled in iSipnayan. What fraction of the whole student population are enrolled in iSipnayan?",
     "a": "1/25 of the students",
     "type": "key"
    },
    {
     "q": "Greg sold gulaman during a summer vacation. On Thursday, he used 4/5 of a bottle of arnibal, a sweetener for gulaman. On Friday, he used 5/8 of the amount he used on Thursday. How much arnibal did he use on Friday?",
     "a": "1/2 of the arnibal",
     "type": "key"
    },
    {
     "q": "Dina had 5/6 of a cake left from her birthday party. She gave 6/10 of what she had to Bryan. What part of the whole cake did Bryan receive?",
     "a": "1/2 of the cake",
     "type": "key"
    },
    {
     "q": "It is indicated that you will need 1/2 cup of cheese for a certain recipe of baked macaroni. However, you are planning to make only 2/3 of that recipe. How much cheese will you need?",
     "a": "1/3 cup of cheese",
     "type": "key"
    },
    {
     "q": "The orangutans in Manila Zoo are fed 3/4 of a basket of fruits everyday. The chimpanzees, meanwhile, are fed 6/7 as much fruits as the orangutans. How many baskets of fruits are the chimpanzees fed each day?",
     "a": "9/14 of the basket",
     "type": "key"
    },
    {
     "q": "In Bagumbayan Elementary School, 1/10 of the students can play a musical instrument. Of the students who can play an instrument, 2/7 can play the piano. What part of the school population can play the piano?",
     "a": "1/35 of the school population",
     "type": "key"
    },
    {
     "q": "In a barangay in Quezon City, 3/10 of the people are married. Of these people who are married, 8/9 have children. What part of the people in that barangay are married and have children?",
     "a": "4/15 of the people",
     "type": "key"
    }
   ],
   "examples": [
    "3/10 * 5/9",
    "8/9 * 3/4",
    "5/12 * 9/20",
    "7/16 * 12/21",
    "9/25 * 10/27",
    "6/35 * 7/18"
   ]
  },
  {
   "n": 10,
   "title": "Multiplication of Mixed Numbers",
   "concept": "To multiply a mixed number by a mixed number or by a fraction, change the mixed number to improper fraction first then multiply. Finally, rename your answer back to mixed number. To multiply a whole number by a mixed number, you can either change the mixed number to an improper fraction and then multiply, or you can also multiply the whole number by the whole number and then multiply it by the fraction. Combine your answers and express your final answers in mixed numbers.",
   "example": "2 1/3 x 3 3/5 = 7/3 x 18/5 = 42/5 = 8 2/5",
   "instruction": "Multiply the following mixed numbers by changing them to improper fractions first. Express your answers in the lowest terms.",
   "items": [
    {
     "q": "2/3 * 1 3/5",
     "mixed": true
    },
    {
     "q": "3/9 * 4 1/7",
     "mixed": true
    },
    {
     "q": "6 1/3 * 6/8",
     "mixed": true
    },
    {
     "q": "6 1/8 * 2/7",
     "mixed": true
    },
    {
     "q": "2 3/5 * 4 1/4",
     "mixed": true
    },
    {
     "q": "9 1/7 * 2 4/6",
     "mixed": true
    },
    {
     "q": "5 2/8 * 6 5/9",
     "mixed": true
    },
    {
     "q": "1 5/7 * 7 3/5",
     "mixed": true
    },
    {
     "q": "3 3/7 * 6 7/9",
     "mixed": true
    },
    {
     "q": "3 3/7 * 7 3/15",
     "mixed": true
    },
    {
     "q": "1 7/18 * 3 5/8",
     "mixed": true
    },
    {
     "q": "4 6/7 * 3 2/13",
     "mixed": true
    }
   ],
   "examples": [
    "3/4 * 2 2/5",
    "4 2/3 * 3/8",
    "2 1/2 * 3 1/5",
    "5 1/4 * 2 2/7",
    "3 2/5 * 1 7/8",
    "6 1/6 * 1 5/7"
   ]
  },
  {
   "n": 11,
   "title": "Multiplying Mixed Numbers",
   "concept": "",
   "example": "7/9 * 3/4 = 7/12",
   "instruction": "Multiply the following fractions and mixed numbers. Show solution with cancellation if possible. Reduce your answers.",
   "items": [
    {
     "q": "7/9 * 3/4"
    },
    {
     "q": "3/5 * 8/9"
    },
    {
     "q": "5 1/7 * 15",
     "mixed": true
    },
    {
     "q": "4 2/3 * 4/8",
     "mixed": true
    },
    {
     "q": "7 * 1 2/5",
     "mixed": true
    },
    {
     "q": "2 7/8 * 4 2/7",
     "mixed": true
    },
    {
     "q": "9/12 * 9 8/9",
     "mixed": true
    },
    {
     "q": "7 * 5 3/7"
    },
    {
     "q": "5/9 * 3 5/6",
     "mixed": true
    },
    {
     "q": "8 8/30 * 7/8",
     "mixed": true
    },
    {
     "q": "6 4/9 * 8",
     "mixed": true
    },
    {
     "q": "6 5/8 * 3 9/12",
     "mixed": true
    },
    {
     "q": "9 3/9 * 8 3/9",
     "mixed": true
    },
    {
     "q": "3 1/9 * 3/4",
     "mixed": true
    },
    {
     "q": "8 * 9 5/7",
     "mixed": true
    },
    {
     "q": "6 4/7 * 5 1/2",
     "mixed": true
    },
    {
     "q": "9 * 5/8",
     "mixed": true
    },
    {
     "q": "6 * 7/52"
    },
    {
     "q": "4 * 1 9/24",
     "mixed": true
    },
    {
     "q": "2 4/7 * 3/16"
    },
    {
     "q": "3/27 * 2 3/9"
    },
    {
     "q": "7 8/9 * 5/6",
     "mixed": true
    },
    {
     "q": "1/6 * 2"
    },
    {
     "q": "3 3/4 * 9",
     "mixed": true
    },
    {
     "q": "3 * 4/9",
     "mixed": true
    },
    {
     "q": "8 3/24 * 3 5/6",
     "mixed": true
    },
    {
     "q": "1 9/32 * 4/9"
    },
    {
     "q": "8/18 * 3 2/6",
     "mixed": true
    },
    {
     "q": "5 1/15 * 3",
     "mixed": true
    },
    {
     "q": "8 2/6 * 4",
     "mixed": true
    },
    {
     "q": "A box of macaroons can hold up to 6 macaroons. If each macaroon uses 5 1/3 milliliters of condensed milk, how much condensed milk is needed to fill a box of macaroons?",
     "a": "32 mL of condensed milk",
     "type": "key"
    },
    {
     "q": "Aling Lucing sold 46 sticks of barbecue last night. If each stick has 20 3/4 grams of pork, how much pork did she sell?",
     "a": "954 1/2 grams",
     "type": "key"
    },
    {
     "q": "A can of peanut brittle is P35. A can of lengua de gato is 2 2/10 times as expensive as a can of peanut brittle. How much is a can of lengua de gato?",
     "a": "77 pesos",
     "type": "key"
    },
    {
     "q": "A trip from Manila to Baguio City lasts for about 5 1/6 hours. A trip from Manila to Ilocos Norte is 2 11/12 as long as a trip to Baguio. How many hours does it take to travel from Manila to Ilocos Norte?",
     "a": "15 5/72 hours",
     "type": "key"
    },
    {
     "q": "Jessica cooked 3 1/4 kilograms of spaghetti. Dindy cooked twice as much spaghetti as Jessica did. How much spaghetti did Dindy cook?",
     "a": "6 1/2 kg",
     "type": "key"
    },
    {
     "q": "Julia needs to sew 4 curtains for the living room of her house. If each curtain will use 1 2/3 yards of cloth, how many yards of cloth will she buy?",
     "a": "6 2/3 yards",
     "type": "key"
    },
    {
     "q": "A handkerchief measures 13 2/7 inches on each side. What is its area? (Area of a square: side x side)",
     "a": "176 25/49 sq. in.",
     "type": "key"
    },
    {
     "q": "Scarborough Shoal is 219 9/10 kilometers away from the Philippines. It is 3 9/10 times farther from China. How far is Scarborough Shoal from China?",
     "a": "857 61/100 km",
     "type": "key"
    },
    {
     "q": "Of the 6 1/3 boxes of clothes that they donated, 1/4 were shirts. How many boxes of shirts did they donate?",
     "a": "1 7/12 boxes",
     "type": "key"
    },
    {
     "q": "Mang Luis has 1 2/3 hectares of farmland. If he plants rice on 9/10 of the farmland, how many hectares are planted with rice?",
     "a": "1 1/2 hectares",
     "type": "key"
    }
   ],
   "examples": [
    "4/9 * 6/7",
    "3 2/5 * 10",
    "12 * 2 1/4",
    "5 1/3 * 2 1/4",
    "2/7 * 4 1/5",
    "7 1/2 * 3 3/5"
   ]
  },
  {
   "n": 12,
   "title": "Division of Fractions",
   "concept": "Reciprocal - is the multiplicative inverse of a number/fraction. When multiplied by the number, it gives a product of 1. To divide fractions, simply change the divisor to its reciprocal and change the operation to multiplication.",
   "example": "1/4 -> reciprocal: 4/1 because 1/4 x 4/1 = 4/4 = 1",
   "instruction": "Divide the following. Show your solution and express your answers in lowest terms.",
   "items": [
    {
     "q": "1/3 ÷ 4/9"
    },
    {
     "q": "3/7 ÷ 6/9"
    },
    {
     "q": "2/4 ÷ 2/6",
     "mixed": true
    },
    {
     "q": "2/9 ÷ 5/7"
    },
    {
     "q": "1 ÷ 5/6",
     "mixed": true
    },
    {
     "q": "7/9 ÷ 2"
    },
    {
     "q": "3 ÷ 4/6",
     "mixed": true
    },
    {
     "q": "9/42 ÷ 2/7"
    },
    {
     "q": "1/8 ÷ 3/6"
    },
    {
     "q": "2/9 ÷ 2/17",
     "mixed": true
    },
    {
     "q": "2/7 ÷ 9"
    },
    {
     "q": "4 ÷ 2/3"
    },
    {
     "q": "4/6 ÷ 1/7",
     "mixed": true
    },
    {
     "q": "9 ÷ 3/7"
    },
    {
     "q": "5/6 ÷ 4/9",
     "mixed": true
    },
    {
     "q": "2/3 ÷ 2/6"
    },
    {
     "q": "5/12 ÷ 4/8"
    },
    {
     "q": "3/8 ÷ 7/9"
    },
    {
     "q": "2/5 ÷ 7/10"
    },
    {
     "q": "5 ÷ 2/4"
    },
    {
     "q": "A roll of ribbon is about 20 meters long. How many pony tails can I make if each pony tail needs 3/10 meters?",
     "a": "66 ponytails",
     "type": "key"
    },
    {
     "q": "How many 2/3 are there in 5/7?",
     "a": "1 1/14",
     "type": "key"
    },
    {
     "q": "How many halves are there in 4/5?",
     "a": "1 3/5",
     "type": "key"
    },
    {
     "q": "A bus going to Bicol leaves every 1/3 hour. How many buses have left in 5 hours?",
     "a": "15 buses",
     "type": "key"
    },
    {
     "q": "Mother uses 2/3 of a pack of sinigang mix in every pot of sinigang soup she cooks. How many pots of sinigang has she cooked if she has used up 6 packs of sinigang?",
     "a": "9 pots",
     "type": "key"
    },
    {
     "q": "Aristotle receives 4/7 kilos of corn from a ration. He divides the ration among his wife, two children and himself. How many kilos of corn does each one receive?",
     "a": "1/7 kilos",
     "type": "key"
    },
    {
     "q": "How many eighths are there in 40?",
     "a": "320",
     "type": "key"
    },
    {
     "q": "Janno ran 10 kilometers on Sunday. Every 4/5 of a kilometer, he drank some water to replenish his energy. How many times did he drink water?",
     "a": "12 times",
     "type": "key"
    },
    {
     "q": "The nuns in Good Shepherd Convent cook 5 kilograms of ube. If they will put 1/10 kilogram in one bottle, how many bottles can they fill?",
     "a": "50 bottles",
     "type": "key"
    },
    {
     "q": "Jose buys a slice of a cake which is 1/8 of the whole cake. He divides this slice between his friend and himself. How much of the cake does each one get?",
     "a": "1/16 of the cake",
     "type": "key"
    }
   ],
   "examples": [
    "2/5 ÷ 3/4",
    "7/8 ÷ 2/3",
    "3/10 ÷ 9/20",
    "6 ÷ 3/5",
    "5/9 ÷ 10",
    "4/7 ÷ 8/21"
   ]
  },
  {
   "n": 13,
   "title": "Division of Mixed Numbers",
   "concept": "To divide mixed numbers, change them to improper fractions first. Then, multiply the dividend by the reciprocal of the divisor.",
   "example": "3 1/4 / 2 2/3 = 13/4 / 8/3 = 13/4 x 3/8 = 39/32 = 1 7/32",
   "instruction": "Divide the following fractions. Show your solution. Answers must be in lowest terms and should be proper fractions or mixed numbers.",
   "items": [
    {
     "q": "3 3/4 ÷ 9 7/8"
    },
    {
     "q": "1 4/7 ÷ 3 3/8"
    },
    {
     "q": "8 1/8 ÷ 8 1/6"
    },
    {
     "q": "7 5/7 ÷ 8 3/8"
    },
    {
     "q": "1 6/8 ÷ 8 5/7"
    },
    {
     "q": "6 ÷ 4 2/8",
     "mixed": true
    },
    {
     "q": "3 ÷ 3 4/7"
    },
    {
     "q": "9 7/8 ÷ 7/11",
     "mixed": true
    },
    {
     "q": "3 ÷ 7 8/13"
    },
    {
     "q": "4 1/14 ÷ 5 2/7"
    },
    {
     "q": "3 6/7 ÷ 4/15",
     "mixed": true
    },
    {
     "q": "2 1/15 ÷ 4/7",
     "mixed": true
    },
    {
     "q": "2 ÷ 4 7/9"
    },
    {
     "q": "7 7/8 ÷ 3/11",
     "mixed": true
    },
    {
     "q": "1 2/9 ÷ 9 1/2"
    },
    {
     "q": "6/18 ÷ 2 3/4"
    },
    {
     "q": "3 8/9 ÷ 6/17",
     "mixed": true
    },
    {
     "q": "5/6 ÷ 4 8/9"
    },
    {
     "q": "4/6 ÷ 9 2/8"
    },
    {
     "q": "4 2/6 ÷ 6 2/7"
    },
    {
     "q": "4 3/7 ÷ 6"
    },
    {
     "q": "3 4/8 ÷ 8"
    },
    {
     "q": "4 8/9 ÷ 4",
     "mixed": true
    },
    {
     "q": "1 3/7 ÷ 2"
    },
    {
     "q": "4/7 ÷ 9 9/28"
    },
    {
     "q": "To prepare a barrel of milk tea, a shop uses 3 1/2 cans of condensed milk. How many barrels of milk tea can it make from 12 cans of condensed milk?",
     "a": "3 3/7 barrels",
     "type": "key"
    },
    {
     "q": "A group of women made 7 bilaos of biko, a native rice cake. They used a total of 5 1/3 kilos of rice. How much rice did they use for each bilao?",
     "a": "16/21 kilo",
     "type": "key"
    },
    {
     "q": "There are 8 pounds of bricks in a sack. Each brick weighs 1 3/5 pound. How many bricks are there in the sack?",
     "a": "5 bricks",
     "type": "key"
    },
    {
     "q": "Everyday, the pet shop uses 5 2/3 bags of dogfood to feed all the dogs. How many days will 20 1/2 bags of dogfood last?",
     "a": "3 21/34 days",
     "type": "key"
    },
    {
     "q": "Jean needs 2 2/5 cups of flour for his cookie dough. He only has a scoop that is as big as 1/4 cup. How many scoops of flour will he put?",
     "a": "10 scoops",
     "type": "key"
    },
    {
     "q": "Everyday, a fastfood restaurant sells 28 1/3 bags of french fries. How many days will 100 bags last?",
     "a": "3 9/17 days",
     "type": "key"
    },
    {
     "q": "A printing press used a total 2 1/5 reams of paper to print 12 textbooks. How many reams did they use for each textbook?",
     "a": "11/60 reams",
     "type": "key"
    },
    {
     "q": "After the party, there were still 5 3/8 cupcakes left. Three children divided the cupcakes equally among themselves. How many cupcakes did each child bring home?",
     "a": "1 19/24 cupcakes",
     "type": "key"
    },
    {
     "q": "The running track for the fun run is divided into 7 laps. If the total distance to be run is 15 3/4 kilometers, how long is each lap?",
     "a": "2 1/4 km",
     "type": "key"
    },
    {
     "q": "Everyday, Andres can read 3 chapters in the book, Noli Me Tangere. How many days will it take for him to read 16 3/4 chapters?",
     "a": "5 7/12 days",
     "type": "key"
    }
   ],
   "examples": [
    "4 1/2 ÷ 2 1/4",
    "5 5/8 ÷ 1 7/8",
    "8 ÷ 3 1/5",
    "6 2/3 ÷ 5/9",
    "3/4 ÷ 2 1/2",
    "7 1/5 ÷ 9"
   ]
  },
  {
   "n": 14,
   "title": "Addition of Decimals",
   "concept": "To add decimals, align the decimal points in a column. Affix zero/es to fill in the missing places. Add, and regroup if necessary.",
   "example": "Add 14.1545 and 8.7809: 14.1545 + 8.7809 = 22.9354",
   "instruction": "Add the following decimals. Show your solutions by writing the decimals in vertical form.",
   "items": [
    {
     "q": "15.4512 + 3.147",
     "fmt": "decimal"
    },
    {
     "q": "21.1203 + 5.415",
     "fmt": "decimal"
    },
    {
     "q": "38.4514 + 6.102",
     "fmt": "decimal"
    },
    {
     "q": "45.0235 + 5.895",
     "fmt": "decimal"
    },
    {
     "q": "25.7801 + 6.145",
     "fmt": "decimal"
    },
    {
     "q": "58.4125 + 9.247",
     "fmt": "decimal"
    },
    {
     "q": "46.1025 + 3.511",
     "fmt": "decimal"
    },
    {
     "q": "65.8512 + 9.121",
     "fmt": "decimal"
    },
    {
     "q": "89.1048 + 3.458",
     "fmt": "decimal"
    },
    {
     "q": "92.8526 + 3.7415",
     "fmt": "decimal"
    },
    {
     "q": "147.4578 + 32.8452",
     "fmt": "decimal"
    },
    {
     "q": "560.1478 + 36.451",
     "fmt": "decimal"
    },
    {
     "q": "890.2004 + 69.325",
     "fmt": "decimal"
    },
    {
     "q": "120.4157 + 36.4784",
     "fmt": "decimal"
    },
    {
     "q": "326.2585 + 78.4517",
     "fmt": "decimal"
    },
    {
     "q": "120.4528 + 23.4124",
     "fmt": "decimal"
    },
    {
     "q": "415.7845 + 63.784",
     "fmt": "decimal"
    },
    {
     "q": "200.1962 + 36.8523",
     "fmt": "decimal"
    },
    {
     "q": "451.1457 + 23.214",
     "fmt": "decimal"
    },
    {
     "q": "878.4534 + 36.4893",
     "fmt": "decimal"
    }
   ],
   "examples": [
    "17.3426 + 4.218",
    "34.5071 + 8.936",
    "63.2815 + 7.409",
    "258.6143 + 45.927",
    "704.3052 + 58.6419",
    "912.7368 + 47.5231"
   ]
  },
  {
   "n": 15,
   "title": "Addition of Decimals",
   "concept": "",
   "example": "1.5 + 4.2 + 3.6 = 9 3/10",
   "instruction": "Add the following decimals. Show your solutions by writing the decimals in vertical form.",
   "items": [
    {
     "q": "1.5 + 4.2 + 3.6",
     "fmt": "decimal"
    },
    {
     "q": "2.8 + 6.3 + 4.5",
     "fmt": "decimal"
    },
    {
     "q": "8.2 + 6.4 + 7.2",
     "fmt": "decimal"
    },
    {
     "q": "6.75 + 6.15 + 8.5",
     "fmt": "decimal"
    },
    {
     "q": "5.15 + 6.35 + 9.47",
     "fmt": "decimal"
    },
    {
     "q": "6.11 + 3.56 + 9.5",
     "fmt": "decimal"
    },
    {
     "q": "84.25 + 54.6 + 78.5",
     "fmt": "decimal"
    },
    {
     "q": "8.9 + 25.2 + 16.14",
     "fmt": "decimal"
    },
    {
     "q": "6.2 + 6.25 + 6.3",
     "fmt": "decimal"
    },
    {
     "q": "30.26 + 7.45 + 9.5",
     "fmt": "decimal"
    },
    {
     "q": "45.125 + 12.154 + 23.147",
     "fmt": "decimal"
    },
    {
     "q": "63 + 105 + 25.415 + 10.845",
     "fmt": "decimal"
    },
    {
     "q": "2 + 15.11 + 13.19",
     "fmt": "decimal"
    },
    {
     "q": "0.6753 + 1.001 + 2.335 + 4.011",
     "fmt": "decimal"
    },
    {
     "q": "13 + 0.2355 + 0.1987 + 1.12",
     "fmt": "decimal"
    },
    {
     "q": "12.5788 + 0.099 + 0.122 + 10.11",
     "fmt": "decimal"
    },
    {
     "q": "8.65 + 7.575 + 8.1585",
     "fmt": "decimal"
    },
    {
     "q": "7 + 16.35 + 6 + 0.5545",
     "fmt": "decimal"
    },
    {
     "q": "1.1562 + 7.876 + 9 + 0.655",
     "fmt": "decimal"
    },
    {
     "q": "8.1926 + 21 + 0.625",
     "fmt": "decimal"
    },
    {
     "q": "20.26 + 8.201 + 0.1822 + 0.653",
     "fmt": "decimal"
    },
    {
     "q": "3.055 + 6.787 + 5 + 0.0011",
     "fmt": "decimal"
    },
    {
     "q": "5.0067 + 5.5002 + 5.0375",
     "fmt": "decimal"
    },
    {
     "q": "24.23 + 23.24 + 0.2324 + 0.2423",
     "fmt": "decimal"
    }
   ],
   "examples": [
    "3.4 + 7.1 + 2.8",
    "9.35 + 4.6 + 12.25",
    "56.75 + 38.4 + 61.2",
    "34.215 + 18.362 + 27.143",
    "15 + 2.408 + 0.1735 + 3.09",
    "6.2054 + 19 + 0.874"
   ]
  },
  {
   "n": 16,
   "title": "Subtraction of Decimals",
   "concept": "To subtract decimals, align the decimal points in a column. Affix zero/es to fill in the missing places. Subtract, and regroup if necessary.",
   "example": "25.2154 - 3.1254 = 22.0900 or 22.09",
   "instruction": "Subtract the following decimals. Show your solutions by writing the decimals in vertical form.",
   "items": [
    {
     "q": "45.2154 - 4.017",
     "fmt": "decimal"
    },
    {
     "q": "23.0142 - 9.745",
     "fmt": "decimal"
    },
    {
     "q": "56.8525 - 6.235",
     "fmt": "decimal"
    },
    {
     "q": "10.0246 - 5.147",
     "fmt": "decimal"
    },
    {
     "q": "25.3215 - 6.302",
     "fmt": "decimal"
    },
    {
     "q": "58.0124 - 8.852",
     "fmt": "decimal"
    },
    {
     "q": "60.4104 - 8.141",
     "fmt": "decimal"
    },
    {
     "q": "75.1024 - 9.023",
     "fmt": "decimal"
    },
    {
     "q": "85.6305 - 9.897",
     "fmt": "decimal"
    },
    {
     "q": "50.1474 - 2.4872",
     "fmt": "decimal"
    },
    {
     "q": "65.7842 - 4.4515",
     "fmt": "decimal"
    },
    {
     "q": "70.4104 - 6.1402",
     "fmt": "decimal"
    },
    {
     "q": "410.4102 - 60.258",
     "fmt": "decimal"
    },
    {
     "q": "562.2135 - 58.201",
     "fmt": "decimal"
    },
    {
     "q": "655.1012 - 75.325",
     "fmt": "decimal"
    },
    {
     "q": "900.2154 - 25.4521",
     "fmt": "decimal"
    },
    {
     "q": "855.8652 - 42.1205",
     "fmt": "decimal"
    },
    {
     "q": "100.1205 - 23.1254",
     "fmt": "decimal"
    },
    {
     "q": "455.5245 - 55.3204",
     "fmt": "decimal"
    },
    {
     "q": "760.5218 - 75.1278",
     "fmt": "decimal"
    }
   ],
   "examples": [
    "38.4173 - 5.026",
    "72.1053 - 8.614",
    "40.6238 - 3.5416",
    "315.7046 - 40.372",
    "680.3157 - 36.2041",
    "200.4102 - 48.2315"
   ]
  },
  {
   "n": 17,
   "title": "ARAL Math Grade 7 and Grade 8 Worksheet 17",
   "concept": "",
   "example": "125 - 23.5 = 101 1/2",
   "instruction": "Subtract the following decimals. Show your solutions by writing the decimals in vertical form.",
   "items": [
    {
     "q": "125 - 23.5"
    },
    {
     "q": "250 - 45.8"
    },
    {
     "q": "365 - 53.9"
    },
    {
     "q": "400 - 50.45"
    },
    {
     "q": "800 - 65.12"
    },
    {
     "q": "385 - 120.25"
    },
    {
     "q": "498 - 215.45"
    },
    {
     "q": "650 - 320.55"
    },
    {
     "q": "1225 - 25.125"
    },
    {
     "q": "2450 - 85.320"
    },
    {
     "q": "150 - 5.8125"
    },
    {
     "q": "255 - 9.7541"
    }
   ],
   "examples": [
    "175 - 32.4",
    "320 - 76.5",
    "540 - 85.25",
    "725 - 240.35",
    "1350 - 45.275",
    "180 - 6.4325"
   ]
  },
  {
   "n": 18,
   "title": "ARAL Math Grade 7 and Grade 8 Worksheet 18",
   "concept": "When you add decimals, write the numbers one under the other and line up the decimal points, not the last digits. You may put extra zeros at the right end of a shorter decimal so every column is filled, because 0.5 and 0.50 have the same value. Add column by column starting from the right, carrying whenever a column goes past 9, then bring the decimal point straight down into the answer. A whole number like 143 has its decimal point right after the ones digit, so write it as 143.0000 when the other number has four decimal places.",
   "example": "",
   "instruction": "Answer the following. Show your solutions by writing the decimals in vertical form.",
   "items": [
    {
     "q": "Increase 3.75 by 9.045.",
     "a": "12.795",
     "type": "key"
    },
    {
     "q": "Add 0.3406 to 34.5025.",
     "a": "34.8431",
     "type": "key"
    },
    {
     "q": "Get the sum of 3.96, 2.034 and 23.4304.",
     "a": "29.4244",
     "type": "key"
    },
    {
     "q": "What do you get when you add 14.624 and 5.896?",
     "a": "20.52",
     "type": "key"
    },
    {
     "q": "0.3042 plus 0.4234.",
     "a": "0.7276",
     "type": "key"
    },
    {
     "q": "Increase 0.2120 by 0.3240.",
     "a": "0.536",
     "type": "key"
    },
    {
     "q": "Increase 48.274 by 3.7102.",
     "a": "51.9842",
     "type": "key"
    },
    {
     "q": "Add 0.5847 to 183.4157.",
     "a": "184.0004",
     "type": "key"
    },
    {
     "q": "Get the sum of 8.18, 45.2158 & 145.28.",
     "a": "198.6758",
     "type": "key"
    },
    {
     "q": "What do you get when you add 25.4157 and 6.7845?",
     "a": "32.2002",
     "type": "key"
    },
    {
     "q": "26.1478 plus 143.",
     "a": "169.1478",
     "type": "key"
    },
    {
     "q": "Increase 890 by 15.2582.",
     "a": "905.2582",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Add 2.6 and 13.45.",
     "steps": [
      "Write 13.45 under 2.6 with the decimal points lined up.",
      "Put a zero at the end of 2.6 so it becomes 2.60 and both have two decimal places.",
      "Hundredths: 0 + 5 = 5. Tenths: 6 + 4 = 10, so write 0 and carry 1.",
      "Ones: 2 + 3 + 1 = 6, bring down the 1 in the tens, and bring the point down."
     ],
     "a": "16.05"
    },
    {
     "q": "Get the sum of 0.407, 5.2 and 12.38.",
     "steps": [
      "Line up the decimal points and fill with zeros: 0.407, 5.200, 12.380.",
      "Add the first two: 0.407 + 5.200 = 5.607.",
      "Add the third: 5.607 + 12.380 = 17.987."
     ],
     "a": "17.987"
    },
    {
     "q": "Increase 76 by 4.3085.",
     "steps": [
      "76 is a whole number, so its decimal point goes right after the 6, and you may write it as 76.0000.",
      "Line up 4.3085 under it, point under point.",
      "Every decimal column adds a digit of 4.3085 to a 0, so the decimal part of the sum is still .3085.",
      "Ones: 6 + 4 = 10, so write 0 and carry 1 to the tens: 7 + 1 = 8."
     ],
     "a": "80.3085"
    },
    {
     "q": "Add 0.0925 to 9.918.",
     "steps": [
      "Give both numbers four decimal places: 9.9180 and 0.0925.",
      "Ten thousandths: 0 + 5 = 5. Thousandths: 8 + 2 = 10, write 0 and carry 1.",
      "Hundredths: 1 + 9 + 1 = 11, write 1 and carry 1. Tenths: 9 + 0 + 1 = 10, write 0 and carry 1.",
      "Ones: 9 + 0 + 1 = 10, so the sum is 10.0105."
     ],
     "a": "10.0105"
    }
   ]
  },
  {
   "n": 19,
   "title": "Multiplication of Decimals",
   "concept": "Multiplication of Decimals. When multiplying decimals, multiply the numbers first as if they were whole numbers. Then, place the decimal point in the product by starting at the right and moving by the number of places equal to the combined decimal places of the factors.",
   "example": "Example 1: 3 x 0.4. 3 is a whole number; 0.4 is 1 decimal place from the right; product 1.2 is 1 decimal place from the right. Therefore, 3 x 0.4 = 1.2",
   "instruction": "Multiply the following decimals.",
   "items": [
    {
     "q": "1.6 * 5"
    },
    {
     "q": "2.71 * 2"
    },
    {
     "q": "5.72 * 8"
    },
    {
     "q": "0.7 * 0.1"
    },
    {
     "q": "2.61 * 9"
    },
    {
     "q": "3.85 * 0.3"
    },
    {
     "q": "0.27 * 0.4"
    },
    {
     "q": "7.81 * 0.9"
    },
    {
     "q": "2.7 * 0.07"
    },
    {
     "q": "6.7 * 0.06"
    },
    {
     "q": "7.26 * 0.09"
    },
    {
     "q": "0.09 * 0.8"
    },
    {
     "q": "1.02 * 0.6"
    },
    {
     "q": "3.24 * 4"
    },
    {
     "q": "0.29 * 0.6"
    },
    {
     "q": "4.08 * 0.2"
    },
    {
     "q": "8.31 * 7"
    },
    {
     "q": "6.18 * 0.01"
    }
   ],
   "examples": [
    "3.4 * 6",
    "4.13 * 7",
    "0.9 * 0.3",
    "5.26 * 0.4",
    "8.3 * 0.05",
    "2.47 * 0.08"
   ]
  },
  {
   "n": 20,
   "title": "ARAL Math Grade 7 and Grade 8 Worksheet 20",
   "concept": "",
   "example": "2.5 * 0.6 = 1 1/2",
   "instruction": "Multiply the following decimals.",
   "items": [
    {
     "q": "2.5 * 0.6"
    },
    {
     "q": "6.28 * 4"
    },
    {
     "q": "0.38 * 0.5"
    },
    {
     "q": "2.94 * 7"
    },
    {
     "q": "6.72 * 0.4"
    },
    {
     "q": "3.05 * 3"
    },
    {
     "q": "5.61 * 0.05"
    },
    {
     "q": "9.2 * 0.09"
    },
    {
     "q": "6.78 * 0.06"
    },
    {
     "q": "0.84 * 0.3"
    },
    {
     "q": "8.09 * 0.02"
    },
    {
     "q": "2.63 * 4"
    }
   ],
   "examples": [
    "3.7 * 0.4",
    "5.46 * 6",
    "0.72 * 0.5",
    "4.83 * 0.7",
    "7.4 * 0.08",
    "9.15 * 0.03"
   ]
  },
  {
   "n": 21,
   "title": "Division of Decimals",
   "concept": "Division of Decimals. If the dividend is a decimal, simply divide like in the long division of whole numbers and put the decimal point in your answer directly on top of the decimal point in the dividend. Add zeroes if needed and continue to divide until your answer terminates or repeats. If the divisor is a decimal, move the decimal point in the divisor to the right until it becomes a whole number. Then, move the decimal in the dividend as many times as you did with the divisor. Divide and put the decimal point in your answer directly on top of the new decimal point in the dividend. In this worksheet your answers will be terminating or exact. In the next worksheets, you will have repeating decimals in your answers no matter how many zeroes you add, so you will have to round them off.",
   "example": "Example: 1.2 div 5 = 0.24. Set up 5)1.20; add zero/es in the dividend if you have to, so you can have an exact or terminating answer.",
   "instruction": "Divide the following decimals. Add as many zeroes as needed to get a terminating answer.",
   "items": [
    {
     "q": "1.2 / 8"
    },
    {
     "q": "0.06 / 4"
    },
    {
     "q": "2.34 / 6"
    },
    {
     "q": "2.07 / 5"
    },
    {
     "q": "7.44 / 3"
    },
    {
     "q": "0.91 / 7"
    },
    {
     "q": "3.56 / 0.02"
    },
    {
     "q": "8.73 / 0.09"
    },
    {
     "q": "0.99 / 0.8"
    },
    {
     "q": "2.32 / 0.1"
    },
    {
     "q": "4.11 / 0.3"
    },
    {
     "q": "4.66 / 0.2"
    },
    {
     "q": "0.073 / 0.4"
    },
    {
     "q": "0.84 / 0.06"
    },
    {
     "q": "0.35 / 0.7"
    },
    {
     "q": "2.03 / 0.5"
    },
    {
     "q": "7.5 / 0.03"
    },
    {
     "q": "8.40 / 0.07"
    }
   ],
   "examples": [
    "1.4 / 4",
    "0.08 / 5",
    "5.46 / 7",
    "6.48 / 0.04",
    "0.87 / 0.6",
    "0.096 / 0.8"
   ]
  },
  {
   "n": 22,
   "title": "Division of Decimals",
   "concept": "Division of Decimals. To divide a whole number by a decimal, move the decimal point of the divisor to the right to make it a whole number. Append as many zero/es in the dividend as the number of decimal places moved. Round off answers to the nearest hundredth.",
   "example": "Example 1: Divide 415 by 3.32. Move the divisor decimal 2 places to make 332 and append zeros in the dividend (415.00); 3.32)415.00 = 125.",
   "instruction": "Find the quotient. Show your complete solutions and round off answers to the nearest hundredth.",
   "items": [
    {
     "q": "455 / 1.5",
     "a": "303.33",
     "type": "key",
     "fmt": "decimal"
    },
    {
     "q": "725 / 2.4",
     "a": "302.08",
     "type": "key",
     "fmt": "decimal"
    },
    {
     "q": "650 / 3.9",
     "a": "166.67",
     "type": "key",
     "fmt": "decimal"
    },
    {
     "q": "812 / 5.2",
     "a": "156.15",
     "type": "key",
     "fmt": "decimal"
    },
    {
     "q": "1512 / 5.6",
     "a": "270",
     "type": "key",
     "fmt": "decimal"
    },
    {
     "q": "4125 / 1.5",
     "a": "2750",
     "type": "key",
     "fmt": "decimal"
    },
    {
     "q": "5620 / 2.4",
     "a": "2341.67",
     "type": "key",
     "fmt": "decimal"
    },
    {
     "q": "6389 / 4.2",
     "a": "1521.19",
     "type": "key",
     "fmt": "decimal"
    },
    {
     "q": "1005 / 5.2",
     "a": "193.27",
     "type": "key",
     "fmt": "decimal"
    },
    {
     "q": "485 / 5.13",
     "a": "94.54",
     "type": "key",
     "fmt": "decimal"
    },
    {
     "q": "778 / 6.25",
     "a": "124.48",
     "type": "key",
     "fmt": "decimal"
    },
    {
     "q": "152 / 7.14",
     "a": "21.29",
     "type": "key",
     "fmt": "decimal"
    }
   ],
   "round": true
  },
  {
   "n": 23,
   "title": "ARAL Math Grade 7 and Grade 8 Worksheet 23",
   "concept": "",
   "example": "0.552 / 0.1 = 5 13/25",
   "instruction": "Find the quotient.",
   "items": [
    {
     "q": "0.552 / 0.1"
    },
    {
     "q": "0.0519 / 0.1"
    },
    {
     "q": "0.8771 / 0.1"
    },
    {
     "q": "0.052 / 0.1"
    },
    {
     "q": "0.5432 / 0.01"
    },
    {
     "q": "0.039 / 0.01"
    },
    {
     "q": "0.5611 / 0.01"
    },
    {
     "q": "0.302 / 0.01"
    },
    {
     "q": "0.055 / 0.01"
    },
    {
     "q": "0.2301 / 0.01"
    },
    {
     "q": "0.033 / 0.001"
    },
    {
     "q": "0.312 / 0.001"
    },
    {
     "q": "0.2222 / 0.001"
    },
    {
     "q": "0.6227 / 0.001"
    },
    {
     "q": "0.982 / 0.001"
    },
    {
     "q": "0.327 / 0.001"
    },
    {
     "q": "0.679 / 0.1"
    },
    {
     "q": "0.5583 / 0.001"
    },
    {
     "q": "0.2199 / 0.001"
    },
    {
     "q": "0.2461 / 0.01"
    },
    {
     "q": "0.8682 / 0.01"
    },
    {
     "q": "0.656 / 0.1"
    },
    {
     "q": "0.043 / 0.1"
    },
    {
     "q": "0.3211 / 0.001"
    }
   ],
   "examples": [
    "0.734 / 0.1",
    "0.4185 / 0.1",
    "0.916 / 0.01",
    "0.7023 / 0.01",
    "0.145 / 0.001",
    "0.8374 / 0.001"
   ]
  },
  {
   "n": 24,
   "title": "ARAL Math Grade 7 and Grade 8 Worksheet 24",
   "concept": "",
   "example": "0.0655 / 0.01 = 6 11/20",
   "instruction": "Find the quotient.",
   "items": [
    {
     "q": "0.0655 / 0.01"
    },
    {
     "q": "0.2678 / 0.1"
    },
    {
     "q": "0.324 / 0.1"
    },
    {
     "q": "0.0655 / 0.001"
    },
    {
     "q": "0.3549 / 0.001"
    },
    {
     "q": "0.6534 / 0.01"
    },
    {
     "q": "0.2244 / 0.001"
    },
    {
     "q": "0.2678 / 0.01"
    },
    {
     "q": "0.4567 / 0.01"
    },
    {
     "q": "0.2868 / 0.1"
    },
    {
     "q": "0.9098 / 0.01"
    },
    {
     "q": "0.4021 / 0.001"
    }
   ],
   "examples": [
    "0.0893 / 0.01",
    "0.3176 / 0.1",
    "0.542 / 0.1",
    "0.0893 / 0.001",
    "0.7215 / 0.001",
    "0.4608 / 0.01"
   ]
  },
  {
   "n": 25,
   "title": "Divide by 10, 100, and 1,000.",
   "concept": "",
   "example": "0.55 / 10 = 11/200",
   "instruction": "Divide by 10, 100, and 1,000.",
   "items": [
    {
     "q": "0.55 / 10",
     "fmt": "decimal"
    },
    {
     "q": "51.11 / 10",
     "fmt": "decimal"
    },
    {
     "q": "90.45 / 10",
     "fmt": "decimal"
    },
    {
     "q": "0.02 / 10",
     "fmt": "decimal"
    },
    {
     "q": "0.27 / 100",
     "fmt": "decimal"
    },
    {
     "q": "12.55 / 100",
     "fmt": "decimal"
    },
    {
     "q": "109.09 / 100",
     "fmt": "decimal"
    },
    {
     "q": "10.47 / 100",
     "fmt": "decimal"
    },
    {
     "q": "0.27 / 1000",
     "fmt": "decimal"
    },
    {
     "q": "23.67 / 1000",
     "fmt": "decimal"
    },
    {
     "q": "951.09 / 1000",
     "fmt": "decimal"
    },
    {
     "q": "0.23 / 1000",
     "fmt": "decimal"
    },
    {
     "q": "5.01 / 10",
     "fmt": "decimal"
    },
    {
     "q": "0.09 / 10",
     "fmt": "decimal"
    },
    {
     "q": "97.65 / 10",
     "fmt": "decimal"
    },
    {
     "q": "2.43 / 10",
     "fmt": "decimal"
    },
    {
     "q": "4.65 / 100",
     "fmt": "decimal"
    },
    {
     "q": "122.12 / 100",
     "fmt": "decimal"
    },
    {
     "q": "109.88 / 100",
     "fmt": "decimal"
    },
    {
     "q": "9.23 / 100",
     "fmt": "decimal"
    },
    {
     "q": "24.98 / 1000",
     "fmt": "decimal"
    },
    {
     "q": "100.01 / 1000",
     "fmt": "decimal"
    },
    {
     "q": "632.11 / 1000",
     "fmt": "decimal"
    },
    {
     "q": "25.22 / 1000",
     "fmt": "decimal"
    }
   ],
   "examples": [
    "0.84 / 10",
    "47.32 / 10",
    "0.36 / 100",
    "138.46 / 100",
    "0.71 / 1000",
    "574.28 / 1000"
   ]
  },
  {
   "n": 26,
   "title": "Divide by 10, 100, and 1,000.",
   "concept": "",
   "example": "0.12 / 10 = 3/250",
   "instruction": "Divide by 10, 100, and 1,000.",
   "items": [
    {
     "q": "0.12 / 10",
     "fmt": "decimal"
    },
    {
     "q": "53.67 / 10",
     "fmt": "decimal"
    },
    {
     "q": "0.05 / 10",
     "fmt": "decimal"
    },
    {
     "q": "193.09 / 10",
     "fmt": "decimal"
    },
    {
     "q": "0.49 / 100",
     "fmt": "decimal"
    },
    {
     "q": "15.69 / 100",
     "fmt": "decimal"
    },
    {
     "q": "231.13 / 100",
     "fmt": "decimal"
    },
    {
     "q": "98.01 / 100",
     "fmt": "decimal"
    },
    {
     "q": "0.13 / 1000",
     "fmt": "decimal"
    },
    {
     "q": "91.23 / 1000",
     "fmt": "decimal"
    },
    {
     "q": "863.11 / 1000",
     "fmt": "decimal"
    },
    {
     "q": "0.93 / 1000",
     "fmt": "decimal"
    }
   ],
   "examples": [
    "0.68 / 10",
    "72.45 / 10",
    "0.37 / 100",
    "146.52 / 100",
    "0.81 / 1000",
    "428.36 / 1000"
   ]
  },
  {
   "n": 27,
   "title": "Solid Figures",
   "concept": "A prism has two identical bases that are parallel to each other, and the faces that join the bases, called the lateral faces, are rectangles. A pyramid has only one base, and its lateral faces are triangles that meet at a single point on top. Both solids are named after the shape of their base, so a base shaped like a pentagon gives a pentagonal prism or a pentagonal pyramid. The number of lateral faces is always equal to the number of sides of the base.",
   "example": "",
   "instruction": "Answer the questions about each solid figure.",
   "items": [
    {
     "q": "What is the shape of its bases?",
     "a": "triangle; triangles",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "triangular prism"
     },
     "alt": true
    },
    {
     "q": "Aside from the bases, what do you call the other faces of the figure?",
     "a": "lateral face; lateral faces; lateral face(s)",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "triangular prism"
     },
     "alt": true
    },
    {
     "q": "What is the shape of these other faces?",
     "a": "rectangle; rectangles",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "triangular prism"
     },
     "alt": true
    },
    {
     "q": "What kind of solid figure is it?",
     "a": "triangular prism",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "triangular prism"
     }
    },
    {
     "q": "Each of the bases of this solid is a 5-sided polygon. What shape is it?",
     "a": "pentagon",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "pentagonal prism"
     }
    },
    {
     "q": "How many lateral faces does this solid have?",
     "a": "5; five",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "pentagonal prism"
     },
     "alt": true
    },
    {
     "q": "What is the shape of its lateral faces?",
     "a": "rectangle; rectangles",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "pentagonal prism"
     },
     "alt": true
    },
    {
     "q": "What kind of solid figure is it?",
     "a": "pentagonal prism",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "pentagonal prism"
     }
    },
    {
     "q": "What is the shape of the base of this solid?",
     "a": "rectangle; rectangles",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "rectangular pyramid"
     },
     "alt": true
    },
    {
     "q": "How many lateral faces does this solid have?",
     "a": "4; four",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "rectangular pyramid"
     },
     "alt": true
    },
    {
     "q": "What is the shape of its lateral faces?",
     "a": "triangle; triangles",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "rectangular pyramid"
     },
     "alt": true
    },
    {
     "q": "What kind of solid figure is it?",
     "a": "rectangular pyramid",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "rectangular pyramid"
     }
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Is this solid a prism or a pyramid, and what is its full name?",
     "fig": {
      "kind": "solid",
      "name": "square pyramid"
     },
     "steps": [
      "The slanting faces all rise to meet at a single point at the top, so there is only one base. That makes it a pyramid.",
      "Those slanting lateral faces are triangles, which is what a pyramid has.",
      "A pyramid takes its name from its base, and this base is a square."
     ],
     "a": "a pyramid; a square pyramid"
    },
    {
     "q": "Count the lateral faces of this solid. How many are there, and what shape is each one?",
     "fig": {
      "kind": "solid",
      "name": "rectangular prism"
     },
     "steps": [
      "It has two identical bases that are parallel to each other, so it is a prism.",
      "Its base is a rectangle, and a rectangle has 4 sides.",
      "A prism has one lateral face for each side of the base, and in a prism every lateral face is a rectangle."
     ],
     "a": "4 lateral faces, and each one is a rectangle"
    },
    {
     "q": "How many faces does this solid have in all?",
     "fig": {
      "kind": "solid",
      "name": "triangular prism"
     },
     "steps": [
      "Two identical parallel bases means this is a prism.",
      "The base is a triangle with 3 sides, so there are 3 lateral faces.",
      "Add the 2 bases to them: 3 + 2 = 5."
     ],
     "a": "5"
    },
    {
     "q": "Why is this solid not a prism?",
     "fig": {
      "kind": "solid",
      "name": "rectangular pyramid"
     },
     "steps": [
      "A prism needs two identical bases that are parallel to each other.",
      "Here the lateral faces slant inward and meet at one point, so there is no second base.",
      "One base with triangular lateral faces makes it a pyramid."
     ],
     "a": "it has only one base, so it is a pyramid, not a prism"
    }
   ]
  },
  {
   "n": 34,
   "title": "Differentiating Solid and Plane Figures",
   "concept": "A plane figure is flat, with only length and width, so the whole of it fits on a sheet of paper. Triangles, squares, rectangles and circles are plane figures. A solid figure also has height or depth, so it takes up space and you can hold it, and its surfaces are called faces. Cubes, prisms, cylinders, cones and spheres are solid figures.",
   "example": "",
   "instruction": "Write the name of the shape (choose from: triangle, cube, rectangle, circle, cylinder, cone, sphere, square, prism); then identify whether each figure is a solid figure or a plane figure.",
   "items": [
    {
     "q": "Write the name of the shape.",
     "a": "rectangle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "rectangle"
     }
    },
    {
     "q": "Write the name of the shape.",
     "a": "cone",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "cone"
     }
    },
    {
     "q": "Write the name of the shape.",
     "a": "cylinder",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "cylinder"
     }
    },
    {
     "q": "Write the name of the shape.",
     "a": "sphere",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "sphere"
     }
    },
    {
     "q": "Write the name of the shape.",
     "a": "cube",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "cube"
     }
    },
    {
     "q": "Write the name of the shape.",
     "a": "circle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "circle"
     }
    },
    {
     "q": "Write the name of the shape.",
     "a": "triangle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "triangle"
     }
    },
    {
     "q": "Write the name of the shape.",
     "a": "square",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "square"
     }
    },
    {
     "q": "Write the name of the shape.",
     "a": "prism; rectangular prism",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "rectangular prism"
     },
     "alt": true
    },
    {
     "q": "Is this a solid figure or a plane figure?",
     "a": "plane figure; plane",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "rectangle"
     },
     "alt": true
    },
    {
     "q": "Is this a solid figure or a plane figure?",
     "a": "solid figure; solid",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "sphere"
     },
     "alt": true
    },
    {
     "q": "Is this a solid figure or a plane figure?",
     "a": "solid figure; solid",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "triangular prism"
     },
     "alt": true
    },
    {
     "q": "Is this a solid figure or a plane figure?",
     "a": "plane figure; plane",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "circle"
     },
     "alt": true
    },
    {
     "q": "Is this a solid figure or a plane figure?",
     "a": "solid figure; solid",
     "type": "key",
     "fig": {
      "kind": "solid",
      "name": "cylinder"
     },
     "alt": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "What is this figure called, and does it take up space or lie flat?",
     "fig": {
      "kind": "solid",
      "name": "sphere"
     },
     "steps": [
      "Check for flat faces and corners. There are none, and the surface curves in every direction.",
      "A figure that is round all the way around like this is a sphere.",
      "It has length, width and height, so it takes up space."
     ],
     "a": "sphere, a solid figure"
    },
    {
     "q": "Name this figure, then tell whether it is solid or plane.",
     "fig": {
      "kind": "shape",
      "name": "square"
     },
     "steps": [
      "Count the sides: 4 straight sides, all the same length. That is a square.",
      "Nothing here rises off the page, so it has only length and width.",
      "A figure with no depth is a plane figure."
     ],
     "a": "square, a plane figure"
    },
    {
     "q": "What is the name of this figure, and is it solid or plane?",
     "fig": {
      "kind": "solid",
      "name": "cone"
     },
     "steps": [
      "One flat circular face, and a curved surface that narrows to a point above it. That is a cone.",
      "The drawing shows depth, so it is not flat on the page.",
      "A figure that takes up space is a solid figure."
     ],
     "a": "cone, a solid figure"
    },
    {
     "q": "Name this figure and say whether it is a solid figure or a plane figure.",
     "fig": {
      "kind": "shape",
      "name": "circle"
     },
     "steps": [
      "There are no straight sides and no corners, just one curved line all around. That is a circle.",
      "It lies flat, with length and width only.",
      "A flat figure like this is a plane figure."
     ],
     "a": "circle, a plane figure"
    }
   ]
  },
  {
   "n": 35,
   "title": "Speed, Distance, and Time",
   "concept": "Speed - rate of motion with a unit like km/h, m/s, or mph. Distance - total space between two points with a unit like m or km. Time - duration of the event with a unit like seconds, minutes, or hours. Formula triangle (D over S and T): S = D/T; D = S x T; T = D/S.",
   "example": "",
   "instruction": "Identify if the given is speed, distance, or time. (items 1-5) From the figures listed in the problem, identify what is asked. (items 6-15)",
   "items": [
    {
     "q": "120 km/h",
     "a": "speed",
     "type": "key"
    },
    {
     "q": "15 m",
     "a": "distance",
     "type": "key"
    },
    {
     "q": "15 seconds",
     "a": "time",
     "type": "key"
    },
    {
     "q": "23 mph",
     "a": "speed",
     "type": "key"
    },
    {
     "q": "75 minutes",
     "a": "time",
     "type": "key"
    },
    {
     "q": "A car travels 120 km in 2 hours with a speed of 60 km/h. What is the distance?",
     "a": "120 km",
     "type": "key"
    },
    {
     "q": "Within three hours, a cyclist rode 45 km at 15 km/h. What is the speed?",
     "a": "15 km/h",
     "type": "key"
    },
    {
     "q": "A train moves at 80 km/h for 3 hours, covering 240 km. What is the time?",
     "a": "3 hours",
     "type": "key"
    },
    {
     "q": "Mandy is on a bus cruising at 48 mph. She is traveling to her lola's house 144 miles away. It takes her 3 hours to reach her house. What is the speed?",
     "a": "48 mph",
     "type": "key"
    },
    {
     "q": "Alia, a marine biology student, observes that a sailfish travels 272 miles in 4 hours, traveling 68 mph. What is the distance?",
     "a": "272 miles",
     "type": "key"
    },
    {
     "q": "An airplane covered 2,400 km in 4 hours, with a speed of 600 km/h. What is the distance and time? (distance)",
     "a": "distance: 2,400 km",
     "type": "key"
    },
    {
     "q": "An airplane covered 2,400 km in 4 hours, with a speed of 600 km/h. What is the distance and time? (time)",
     "a": "time: 4 hours",
     "type": "key"
    },
    {
     "q": "Mang Tano drives 14 km on his jeepney in the morning for two hours, cruising 7 km/h. List down the distance, speed, and time. (distance)",
     "a": "distance: 14 km",
     "type": "key"
    },
    {
     "q": "Mang Tano drives 14 km on his jeepney in the morning for two hours, cruising 7 km/h. List down the distance, speed, and time. (time)",
     "a": "time: 2 hours",
     "type": "key"
    },
    {
     "q": "Mang Tano drives 14 km on his jeepney in the morning for two hours, cruising 7 km/h. List down the distance, speed, and time. (speed)",
     "a": "speed: 7 km/h",
     "type": "key"
    }
   ],
   "ordered": true
  },
  {
   "n": 36,
   "title": "Calculating Speed, Distance, Time",
   "concept": "Speed, distance and time are three parts of one relationship: speed = distance divided by time, distance = speed x time, and time = distance divided by speed. Write down the two values the problem gives you, and the missing one tells you which formula to use. Keep the units matched, so kilometers with hours give km/h. To find an arrival time, work out the travel time first, then add it to the starting time.",
   "example": "",
   "instruction": "Read the word problems carefully and solve them. Provide your solution.",
   "items": [
    {
     "q": "Kuya Ben drove his jeepney from Cubao to Lipa, covering 80 km in 2 hours. What was his average speed?",
     "a": "40 km/h",
     "type": "key"
    },
    {
     "q": "An LRT-2 train travels at an average speed of 60 km/h. How many kilometers will it cover if it runs continuously for 0.5 hours?",
     "a": "30 km",
     "type": "key"
    },
    {
     "q": "An express bus bound for Baguio City needs to cover 240 km. If the bus travels at an average speed of 60 km/h along the highway, how many hours will the trip take?",
     "a": "4 hours",
     "type": "key"
    },
    {
     "q": "A ferry left Iloilo City Port heading toward Guimaras, covering 15 km at a speed of 30 km/h. If the ferry departed at 7:45 AM, what time did it arrive in Guimaras?",
     "a": "8:15 AM",
     "type": "key"
    },
    {
     "q": "A logistics truck left Clark, Pampanga at 6:00 AM and arrived in San Fernando, La Union at 9:00 AM. The total distance traveled was 180 km. What was the average speed of the delivery truck in km/h?",
     "a": "60 km/h",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "A shuttle van covered 150 km in 3 hours. What was its average speed?",
     "steps": [
      "Distance and time are given, so you are looking for speed.",
      "Speed = distance divided by time.",
      "150 km divided by 3 hours = 50."
     ],
     "a": "50 km/h"
    },
    {
     "q": "A motorcycle rides at a steady 45 km/h. How far will it travel in 2 hours?",
     "steps": [
      "Speed and time are given, so you are looking for distance.",
      "Distance = speed x time.",
      "45 x 2 = 90."
     ],
     "a": "90 km"
    },
    {
     "q": "A fishing boat must cover 120 km at an average speed of 40 km/h. How long will the trip take?",
     "steps": [
      "Distance and speed are given, so you are looking for time.",
      "Time = distance divided by speed.",
      "120 divided by 40 = 3."
     ],
     "a": "3 hours"
    },
    {
     "q": "A shuttle left the terminal at 9:30 AM and traveled 25 km at an average speed of 50 km/h. What time did it arrive?",
     "steps": [
      "Find the travel time first. Time = distance divided by speed.",
      "25 divided by 50 = 0.5 hours.",
      "0.5 of an hour is 30 minutes.",
      "9:30 AM plus 30 minutes is 10:00 AM."
     ],
     "a": "10:00 AM"
    }
   ]
  },
  {
   "n": 37,
   "title": "Calculating Speed, Distance, Time",
   "concept": "Use the same three formulas: speed = distance divided by time, distance = speed x time, and time = distance divided by speed. The unit of the answer comes from the units you divide, so meters divided by seconds give m/s, and kilometers divided by hours give km/h. When a trip has several parts, find the time for each part on its own, then add the times. Average moving speed is the total distance divided by the total time spent moving, so a rest stop counts for the arrival time but not for the moving speed, and you never simply average the two speeds.",
   "example": "",
   "instruction": "Read the word problems carefully and solve them. Provide your solution.",
   "items": [
    {
     "q": "During a school sports fest, Mateo ran a 200-meter sprint in 25 seconds. What was Mateo's average speed?",
     "a": "8 m/s",
     "type": "key"
    },
    {
     "q": "A tricycle in Barangay San Jose travels at a steady speed of 20 km/h. If the driver travels for 1.5 hours along his route, how far did the tricycle travel?",
     "a": "30 km",
     "type": "key"
    },
    {
     "q": "Anna walks to her elementary school at an average speed of 4 km/h. If her house is 1.6 km away from the school, how long will it take her to reach the school in hours and in minutes?",
     "a": "0.4 hours / 24 minutes",
     "type": "key"
    },
    {
     "q": "A provincial bus left the Paranaque Integrated Terminal Exchange heading to Batangas Port, covering a total route distance of 110 km. The bus traveled 60 km along the expressway at an average speed of 40 km/h before stopping at a gas station. The driver and passengers took a 30-minute break (0.5 hours). The bus completed the remaining 50 km of the trip at an average speed of 50 km/h. If the bus departed the terminal at 7:00 AM: At what time did the bus arrive at Batangas Port?",
     "a": "It arrived at 10:00 AM.",
     "type": "key"
    },
    {
     "q": "A provincial bus left the Paranaque Integrated Terminal Exchange heading to Batangas Port, covering a total route distance of 110 km. The bus traveled 60 km along the expressway at an average speed of 40 km/h before stopping at a gas station. The driver and passengers took a 30-minute break (0.5 hours). The bus completed the remaining 50 km of the trip at an average speed of 50 km/h. If the bus departed the terminal at 7:00 AM: What was the average moving speed of the bus for the entire trip (excluding the 30-minute rest stop)?",
     "a": "The average speed was 44 km/h.",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "A runner finished a 150-meter dash in 20 seconds. What was his average speed?",
     "steps": [
      "Speed = distance divided by time.",
      "The distance is in meters and the time in seconds, so the speed will be in m/s.",
      "150 divided by 20 = 7.5."
     ],
     "a": "7.5 m/s"
    },
    {
     "q": "Liza bikes at an average speed of 12 km/h. The market is 3 km from her house. How long is the ride in hours and in minutes?",
     "steps": [
      "Time = distance divided by speed.",
      "3 divided by 12 = 0.25 hours.",
      "Change to minutes: 0.25 x 60 = 15."
     ],
     "a": "0.25 hours, or 15 minutes"
    },
    {
     "q": "A delivery van left at 5:00 AM, traveled 90 km at 45 km/h, rested for 20 minutes, then traveled 30 km more at 30 km/h. What time did it arrive?",
     "steps": [
      "First part: 90 divided by 45 = 2 hours.",
      "Second part: 30 divided by 30 = 1 hour.",
      "Total time away = 2 hours + 1 hour + 20 minutes of rest = 3 hours and 20 minutes.",
      "5:00 AM plus 3 hours and 20 minutes = 8:20 AM."
     ],
     "a": "8:20 AM"
    },
    {
     "q": "For that same van trip, 90 km at 45 km/h and then 30 km at 30 km/h, what was its average moving speed?",
     "steps": [
      "Total distance = 90 + 30 = 120 km.",
      "Moving time = 2 hours + 1 hour = 3 hours, and the 20-minute rest is not counted.",
      "Average speed = 120 divided by 3 = 40."
     ],
     "a": "40 km/h"
    }
   ]
  },
  {
   "n": 39,
   "title": "Area of Composite Figures",
   "concept": "A composite figure is made of simple shapes put together, so cut it into those shapes, find the area of each one, then add the parts or subtract the part that is taken away. The formulas you need are rectangle = length x width, square = side x side, triangle = 1/2 x base x height, and circle = pi x r^2, while a semicircle is half a circle, so take half of pi x r^2. Use pi = 3.14 unless the problem says otherwise. Always write area in square units such as m².",
   "example": "",
   "instruction": "Read the word problems carefully and solve them. Provide your illustration and solution.",
   "items": [
    {
     "q": "A performance stage in the barangay plaza consists of a rectangle (10 m long and 8 m wide) with a semicircle extension (radius of 4 m) at the front. What is the total floor area of the stage?",
     "a": "80 m²",
     "type": "key"
    },
    {
     "q": "A square garden with a side length of 12 m has a circular water fountain in the middle with a radius of 3 m. Find the remaining grass area outside the fountain. (Hint: Subtract circle area from square area)",
     "a": "115.74 m²",
     "type": "key"
    },
    {
     "q": "A rectangular tablecloth measures 2 m long and 1 m wide. A triangular pattern (base of 0.5 m and height of 0.4 m) is sewn on each of the 4 corners. What is the remaining area of the tablecloth after removing the 4 triangles?",
     "a": "1.6 m²",
     "type": "key"
    },
    {
     "q": "A school basketball court key consists of a rectangle (6 m long and 4 m wide) attached to a semicircle (radius of 2 m). What is the total area?",
     "a": "30.28 m²",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "A stage is a rectangle 8 m long and 6 m wide with a semicircle of radius 3 m joined to one end. What is the total floor area? Use pi = 3.14.",
     "steps": [
      "Rectangle: 8 x 6 = 48 m².",
      "Circle of radius 3: 3.14 x 3 x 3 = 28.26, so the semicircle is 28.26 divided by 2 = 14.13 m².",
      "The parts are joined together, so add: 48 + 14.13 = 62.13."
     ],
     "a": "62.13 m²"
    },
    {
     "q": "A rectangular yard measures 10 m by 7 m and has a round fishpond of radius 2 m inside it. How much ground is left outside the pond?",
     "steps": [
      "Rectangle: 10 x 7 = 70 m².",
      "Circle: 3.14 x 2 x 2 = 12.56 m².",
      "The pond is taken out of the yard, so subtract: 70 - 12.56 = 57.44."
     ],
     "a": "57.44 m²"
    },
    {
     "q": "A banner is a rectangle 3 m long and 2 m wide. A triangle with a base of 1 m and a height of 0.6 m is cut off from two of its corners. What area of cloth is left?",
     "steps": [
      "Rectangle: 3 x 2 = 6 m².",
      "One triangle: 1/2 x 1 x 0.6 = 0.3 m².",
      "Two triangles: 0.3 x 2 = 0.6 m².",
      "Subtract the cut parts: 6 - 0.6 = 5.4."
     ],
     "a": "5.4 m²"
    },
    {
     "q": "A classroom floor plan is a square 5 m on each side with a storage area 5 m by 2 m added along one side. What is the total floor area?",
     "steps": [
      "Square: 5 x 5 = 25 m².",
      "Rectangle: 5 x 2 = 10 m².",
      "The two parts are joined, so add: 25 + 10 = 35."
     ],
     "a": "35 m²"
    }
   ]
  },
  {
   "n": 41,
   "title": "Surface Area of a Rectangular Prism",
   "concept": "A rectangular prism has six flat faces and they come in three matching pairs: top and bottom, front and back, and the two ends. That is why SA = 2(lw + hl + hw) works: you find the area of one face from each pair, add the three areas, then double the total because every face has a twin. Work out the three products first and write them down before you add, so none of them gets lost. The answer is an area, so the unit is squared, like cm^2 or m^2.",
   "example": "",
   "instruction": "Find the surface area of the rectangular prism given below. (Formula: SA = 2(lw+hl+hw))",
   "items": [
    {
     "q": "Surface area of a rectangular prism with length 20 cm, width 12 cm, height 9 cm",
     "a": "1056",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a rectangular prism with length 15 m, width 9 m, height 13 m",
     "a": "894",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a rectangular prism with length 30 m, width 15 m, height 10 m",
     "a": "1800",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a rectangular prism with length 30 m, width 15.5 m, height 20 m",
     "a": "2750",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a rectangular prism with length 25.6 m, width 16.4 m, height 20 m",
     "a": "2519.68",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a rectangular prism with length 40 m, width 25 m, height 20 m",
     "a": "4600",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a rectangular prism with length 20 m, width 9 m, height 15 m",
     "a": "1230",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a rectangular prism with length 60.5 m, width 30.5 m, height 25 m",
     "a": "8240.5",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a rectangular prism with length 20 cm, width 15 cm, height 40 cm",
     "a": "3400",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a rectangular prism with length 15.75 cm, width 10.25 cm, height 28 cm",
     "a": "1778.88",
     "type": "key",
     "text": true
    },
    {
     "q": "Find the surface area of the rectangular prism with l = 14 cm, w = 5 cm and h = 6 cm",
     "a": "368",
     "type": "key",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Find the surface area of a rectangular prism with length 10 cm, width 6 cm and height 4 cm.",
     "steps": [
      "lw = 10 x 6 = 60",
      "hl = 4 x 10 = 40",
      "hw = 4 x 6 = 24",
      "SA = 2(60 + 40 + 24) = 2 x 124 = 248"
     ],
     "a": "248 cm^2"
    },
    {
     "q": "Find the surface area of a rectangular prism with length 12 m, width 8 m and height 5 m.",
     "steps": [
      "lw = 12 x 8 = 96",
      "hl = 5 x 12 = 60",
      "hw = 5 x 8 = 40",
      "SA = 2(96 + 60 + 40) = 2 x 196 = 392"
     ],
     "a": "392 m^2"
    },
    {
     "q": "Find the surface area of a rectangular prism with length 10.5 cm, width 4 cm and height 6 cm.",
     "steps": [
      "lw = 10.5 x 4 = 42",
      "hl = 6 x 10.5 = 63",
      "hw = 6 x 4 = 24",
      "SA = 2(42 + 63 + 24) = 2 x 129 = 258"
     ],
     "a": "258 cm^2"
    }
   ]
  },
  {
   "n": 42,
   "title": "Surface Area of a Triangular Prism",
   "concept": "A triangular prism is a tent shape, with two triangular ends and three rectangles wrapped around them. In SA = bh + 2ls + lb, the part bh pays for both triangles at once, because one triangle is (1/2)bh and two of them make bh. The part 2ls is the two slanted rectangles, and lb is the flat rectangle underneath. Find the three parts one at a time, then add them.",
   "example": "",
   "instruction": "Find the surface area of the triangular prism given below. (Formula: SA = bh + 2ls + lb, where b = base and h = height of the triangular face, s = slant side of the triangle, l = length of the prism)",
   "items": [
    {
     "q": "Surface area of a triangular prism with h = 6 cm, b = 8 cm, s = 10 cm, l = 25 cm",
     "a": "748",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a triangular prism with h = 10 cm, b = 15 cm, s = 12 cm, l = 38 cm",
     "a": "1632",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a triangular prism with h = 5.5 cm, b = 10.5 cm, s = 12.5 cm, l = 15 cm",
     "a": "590.25",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a triangular prism with h = 12.5 cm, b = 6.4 cm, s = 20.5 cm, l = 30 cm",
     "a": "1502",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a triangular prism with h = 18.2 m, b = 9.6 m, s = 18.5 m, l = 29.5 m",
     "a": "1549.42",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a triangular prism with h = 4 cm, b = 8 cm, s = 5 cm and l = 20 cm",
     "a": "392",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a triangular prism with h = 10 cm, b = 25 cm, s = 15 cm and l = 35 cm",
     "a": "2175",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a triangular prism with h = 12 cm, b = 25 cm, s = 18 cm and l = 38 cm",
     "a": "2618",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a triangular prism with h = 6.5 cm, b = 10.5 cm, s = 14 cm and l = 20.5 cm",
     "a": "857.5",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a triangular prism with h = 11.25 cm, b = 25.25 cm, s = 18.75 cm and l = 30 cm",
     "a": "2166.56",
     "type": "key",
     "text": true
    },
    {
     "q": "Write the formula for the surface area of a rectangular prism",
     "a": "2(lw+wh+hl)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Write the formula for the surface area of a triangular prism",
     "a": "bh+2ls+lb",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Surface area of a rectangular prism with length 40 cm, width 20 cm, height 25 cm",
     "a": "4600",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a triangular prism with h = 6 cm, b = 6 cm, s = 10 cm, l = 12 cm",
     "a": "348",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a triangular prism with h = 6 cm, b = 10 cm, s = 10 cm, l = 18 cm",
     "a": "600",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a rectangular prism with length 18 cm, width 7.5 cm, height 10.5 cm",
     "a": "805.5",
     "type": "key",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Find the surface area of a triangular prism with h = 5 cm, b = 12 cm, s = 13 cm and l = 20 cm.",
     "steps": [
      "Two triangles: bh = 12 x 5 = 60",
      "Two slanted faces: 2ls = 2 x 20 x 13 = 520",
      "Bottom face: lb = 20 x 12 = 240",
      "SA = 60 + 520 + 240 = 820"
     ],
     "a": "820 cm^2"
    },
    {
     "q": "Find the surface area of a triangular prism with h = 8 cm, b = 12 cm, s = 10 cm and l = 15 cm.",
     "steps": [
      "Two triangles: bh = 12 x 8 = 96",
      "Two slanted faces: 2ls = 2 x 15 x 10 = 300",
      "Bottom face: lb = 15 x 12 = 180",
      "SA = 96 + 300 + 180 = 576"
     ],
     "a": "576 cm^2"
    },
    {
     "q": "Find the surface area of a triangular prism with h = 7.5 cm, b = 9 cm, s = 11 cm and l = 14 cm.",
     "steps": [
      "Two triangles: bh = 9 x 7.5 = 67.5",
      "Two slanted faces: 2ls = 2 x 14 x 11 = 308",
      "Bottom face: lb = 14 x 9 = 126",
      "SA = 67.5 + 308 + 126 = 501.5"
     ],
     "a": "501.5 cm^2"
    }
   ]
  },
  {
   "n": 43,
   "title": "Surface Area of a Cube and a Square Pyramid",
   "concept": "A cube is made of 6 identical squares, so find the area of one face, s x s, and multiply it by 6, which is SA = 6s^2. A square pyramid is a square base with 4 triangles leaning up to the tip. Each triangle is (1/2)bh, and four of them come to 2bh, so SA = s^2 + 2bh. Do the squaring first, then the multiplying, and keep the base and the triangles as two separate numbers until the final add.",
   "example": "",
   "instruction": "Find the surface area of the cube given below (SA = 6s^2). Find the surface area of the square pyramid given below (SA = s^2 + 2bh).",
   "items": [
    {
     "q": "Surface area of a cube with side 10 cm",
     "a": "600",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a cube with side 36 m",
     "a": "7776",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a cube with side 0.36 m",
     "a": "0.78",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a cube with side 9.6 m",
     "a": "552.96",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a cube with side 9.75 m",
     "a": "570.38",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a cube with side 1.55 m",
     "a": "14.42",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a cube with side 11.11 cm",
     "a": "740.59",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a cube with side 25 cm",
     "a": "3750",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with s = 5 cm, b = 10 cm, h = 8 cm (SA = s^2 + 2bh)",
     "a": "185",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with s = 12 mm, b = 20 mm, h = 9 mm (SA = s^2 + 2bh)",
     "a": "504",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with s = 9 cm, b = 8 cm, h = 8 cm (SA = s^2 + 2bh)",
     "a": "209",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with s = 9 cm, b = 6 cm, h = 8 cm (SA = s^2 + 2bh)",
     "a": "177",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with s = 12 cm, b = 20 cm, h = 10 cm (SA = s^2 + 2bh)",
     "a": "544",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with s = 18 cm, b = 20 cm, h = 16 cm (SA = s^2 + 2bh)",
     "a": "964",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with s = 20 mm, b = 12 mm, h = 20 mm (SA = s^2 + 2bh)",
     "a": "880",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with s = 15 mm, b = 14 mm, h = 12 mm (SA = s^2 + 2bh)",
     "a": "561",
     "type": "key",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Find the surface area of a cube with side 7 cm.",
     "steps": [
      "s^2 = 7 x 7 = 49",
      "SA = 6 x 49 = 294"
     ],
     "a": "294 cm^2"
    },
    {
     "q": "Find the surface area of a cube with side 4.5 m.",
     "steps": [
      "s^2 = 4.5 x 4.5 = 20.25",
      "SA = 6 x 20.25 = 121.5"
     ],
     "a": "121.5 m^2"
    },
    {
     "q": "Find the surface area of a square pyramid with s = 6 cm, b = 9 cm and h = 7 cm.",
     "steps": [
      "Square base: s^2 = 6 x 6 = 36",
      "Four triangles: 2bh = 2 x 9 x 7 = 126",
      "SA = 36 + 126 = 162"
     ],
     "a": "162 cm^2"
    },
    {
     "q": "Find the surface area of a square pyramid with s = 10 mm, b = 14 mm and h = 11 mm.",
     "steps": [
      "Square base: s^2 = 10 x 10 = 100",
      "Four triangles: 2bh = 2 x 14 x 11 = 308",
      "SA = 100 + 308 = 408"
     ],
     "a": "408 mm^2"
    }
   ]
  },
  {
   "n": 44,
   "title": "Surface Area of a Cube and Square Pyramid",
   "concept": "This sheet asks you to remember the formulas and then use them, so learn these four by heart: rectangular prism 2(lw + wh + hl), triangular prism bh + 2ls + lb, cube 6s^2, square pyramid s^2 + 2bh. The cube is the easiest because all 6 faces are the same square, so it is one face times 6. The pyramid is the square base plus the 4 leaning triangles, and those 4 triangles add up to 2bh. Square the number first, multiply second, add last.",
   "example": "",
   "instruction": "Find the surface area of the cube and square pyramid, write the formulas, and find the surface area of the figures.",
   "items": [
    {
     "q": "Surface area of a cube with edge s = 6 cm",
     "a": "216",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a cube with edge s = 15 cm",
     "a": "1350",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a cube with edge s = 20 cm",
     "a": "2400",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a cube with edge s = 13 m",
     "a": "1014",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a cube with edge s = 23 m",
     "a": "3174",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with s = 9, b = 12.5 and h = 17",
     "a": "506",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with s = 15, b = 20 and h = 12",
     "a": "705",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with s = 13, b = 35 and h = 18",
     "a": "1429",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with s = 12, b = 45 and h = 8",
     "a": "864",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with s = 9, b = 19 and h = 6",
     "a": "309",
     "type": "key",
     "text": true
    },
    {
     "q": "Write the formula for the surface area of a rectangular prism",
     "a": "2(lw+wh+hl)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Write the formula for the surface area of a triangular prism",
     "a": "bh+2ls+lb",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Write the formula for the surface area of a cube",
     "a": "6s^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Write the formula for the surface area of a square pyramid",
     "a": "s^2 + 2bh",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Surface area of a cube with edge 11.11 cm",
     "a": "740.59",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a cube with edge 36.5 m",
     "a": "7993.5",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with base side s = 9 mm, b = 7 mm and h = 15 mm",
     "a": "291",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a square pyramid with base side s = 12 mm, b = 9 mm and h = 20 mm",
     "a": "504",
     "type": "key",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Find the surface area of a cube with edge s = 9 cm.",
     "steps": [
      "s^2 = 9 x 9 = 81",
      "SA = 6 x 81 = 486"
     ],
     "a": "486 cm^2"
    },
    {
     "q": "Find the surface area of a cube with edge s = 2.5 m.",
     "steps": [
      "s^2 = 2.5 x 2.5 = 6.25",
      "SA = 6 x 6.25 = 37.5"
     ],
     "a": "37.5 m^2"
    },
    {
     "q": "Find the surface area of a square pyramid with s = 8, b = 11 and h = 14.",
     "steps": [
      "Square base: s^2 = 8 x 8 = 64",
      "Four triangles: 2bh = 2 x 11 x 14 = 308",
      "SA = 64 + 308 = 372"
     ],
     "a": "372"
    },
    {
     "q": "Find the surface area of a square pyramid with base side s = 14 mm, b = 10 mm and h = 9 mm.",
     "steps": [
      "Square base: s^2 = 14 x 14 = 196",
      "Four triangles: 2bh = 2 x 10 x 9 = 180",
      "SA = 196 + 180 = 376"
     ],
     "a": "376 mm^2"
    }
   ]
  },
  {
   "n": 45,
   "title": "Surface Area of a Cylinder",
   "concept": "Cut a cylinder open and flatten it, and you get two circles plus one rectangle. The two circles give 2(pi)r^2, and the rectangle is as tall as the cylinder and as long as the rim of the circle, so it gives 2(pi)rh. Put them together and SA = 2(pi)r^2 + 2(pi)rh. Use pi = 3.14, square the radius before you multiply anything, and keep the circle part and the side part as two separate numbers until you add at the end.",
   "example": "",
   "instruction": "Find the surface area of the cylinder given below. Formula: SA = 2(pi)r^2 + 2(pi)rh (use pi = 3.14).",
   "items": [
    {
     "q": "Surface area of a cylinder with radius 10 m and height 12 m (use pi = 3.14)",
     "a": "1381.6",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cylinder with radius 15 m and height 20 m (use pi = 3.14)",
     "a": "3297",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cylinder with radius 21 cm and height 45 cm (use pi = 3.14)",
     "a": "8704.08",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cylinder with radius 11.5 m and height 20.25 m (use pi = 3.14)",
     "a": "2292.99",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cylinder with radius 6.25 m and height 15.5 m (use pi = 3.14)",
     "a": "853.69",
     "type": "key",
     "text": true,
     "tol": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Find the surface area of a cylinder with radius 5 m and height 8 m. Use pi = 3.14.",
     "steps": [
      "Two circles: 2 x 3.14 x 5^2 = 6.28 x 25 = 157",
      "Curved side: 2 x 3.14 x 5 x 8 = 6.28 x 40 = 251.2",
      "SA = 157 + 251.2 = 408.2"
     ],
     "a": "408.2 m^2"
    },
    {
     "q": "Find the surface area of a cylinder with radius 7 cm and height 10 cm. Use pi = 3.14.",
     "steps": [
      "Two circles: 6.28 x 7^2 = 6.28 x 49 = 307.72",
      "Curved side: 6.28 x 7 x 10 = 6.28 x 70 = 439.6",
      "SA = 307.72 + 439.6 = 747.32"
     ],
     "a": "747.32 cm^2"
    },
    {
     "q": "Find the surface area of a cylinder with radius 4.5 m and height 12 m. Use pi = 3.14.",
     "steps": [
      "Two circles: 6.28 x 4.5^2 = 6.28 x 20.25 = 127.17",
      "Curved side: 6.28 x 4.5 x 12 = 6.28 x 54 = 339.12",
      "SA = 127.17 + 339.12 = 466.29"
     ],
     "a": "466.29 m^2"
    }
   ]
  },
  {
   "n": 46,
   "title": "Surface Area of a Cone and Other Solid Figures",
   "concept": "A cone is a circle with a curved piece wrapped over the top of it, so SA = (pi)rs + (pi)r^2, where (pi)r^2 is the bottom circle and (pi)rs is the curved part. The letter s is the slant height, the distance up the slope, not the straight height inside, so if a question hands you both numbers, use the slant height. This sheet also mixes in cylinders, so keep SA = 2(pi)r^2 + 2(pi)rh ready as well. Use pi = 3.14 throughout.",
   "example": "",
   "instruction": "Find the surface area of the cone given below. Formula: SA = (pi)rs + (pi)r^2 (use pi = 3.14). Also write formulas and find surface areas of cylinders and cones.",
   "items": [
    {
     "q": "Surface area of a cone with radius 6 cm and slant height 10 cm (use pi = 3.14)",
     "a": "301.44",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cone with radius 3 cm and slant height 5 cm (use pi = 3.14)",
     "a": "75.36",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cone with radius 5 cm and slant height 18 cm (use pi = 3.14)",
     "a": "361.1",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cone with radius 8 cm, height 12 cm and slant height 15 cm (use pi = 3.14)",
     "a": "577.76",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cone with radius 7.5 cm and slant height 10.6 cm (use pi = 3.14)",
     "a": "426.26",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Write the formula for the surface area of a cube",
     "a": "6s^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Write the formula for the surface area of a square pyramid",
     "a": "s^2 + 2bh",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Write the formula for the surface area of a cylinder",
     "a": "(2(pi)r^2)+(2(pi)rh)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Write the formula for the surface area of a cone",
     "a": "((pi)rs)+((pi)r^2)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Surface area of a cylinder with radius 15 cm and height 35 cm (use pi = 3.14)",
     "a": "4710",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cylinder with radius 26 cm and height 15 cm (use pi = 3.14)",
     "a": "6694.48",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cylinder with radius 8 m and height 15 m (use pi = 3.14)",
     "a": "1155.52",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cylinder with radius 9 m and height 25 m (use pi = 3.14)",
     "a": "1921.68",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cylinder with radius 20.5 cm and height 38.25 cm (use pi = 3.14)",
     "a": "7563.48",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cone with radius 12 cm and slant height 25 cm (use pi = 3.14)",
     "a": "1394.16",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cone with radius 18 cm and slant height 29 cm (use pi = 3.14)",
     "a": "2656.44",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cone with radius 6.5 m and slant height 11 m (use pi = 3.14)",
     "a": "357.18",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cone with radius 13.25 m and slant height 27.35 m (use pi = 3.14)",
     "a": "1689.16",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cone with radius 1.5 m and slant height 15 m (use pi = 3.14)",
     "a": "77.72",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cylinder with radius 3 cm and height 8 cm (use pi = 3.14)",
     "a": "207.24",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cone with radius 4 cm and slant height 7.5 cm (use pi = 3.14)",
     "a": "144.44",
     "type": "key",
     "text": true,
     "tol": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Find the surface area of a cone with radius 4 cm and slant height 9 cm. Use pi = 3.14.",
     "steps": [
      "Curved part: (pi)rs = 3.14 x 4 x 9 = 3.14 x 36 = 113.04",
      "Base circle: (pi)r^2 = 3.14 x 16 = 50.24",
      "SA = 113.04 + 50.24 = 163.28"
     ],
     "a": "163.28 cm^2"
    },
    {
     "q": "Find the surface area of a cone with radius 5 cm and slant height 12.4 cm. Use pi = 3.14.",
     "steps": [
      "Curved part: 3.14 x 5 x 12.4 = 3.14 x 62 = 194.68",
      "Base circle: 3.14 x 25 = 78.5",
      "SA = 194.68 + 78.5 = 273.18"
     ],
     "a": "273.18 cm^2"
    },
    {
     "q": "Find the surface area of a cylinder with radius 4 m and height 11 m. Use pi = 3.14.",
     "steps": [
      "Two circles: 6.28 x 4^2 = 6.28 x 16 = 100.48",
      "Curved side: 6.28 x 4 x 11 = 6.28 x 44 = 276.32",
      "SA = 100.48 + 276.32 = 376.8"
     ],
     "a": "376.8 m^2"
    }
   ]
  },
  {
   "n": 47,
   "title": "Surface Area of a Sphere and Other Solid Figures",
   "concept": "A sphere is a ball, and its whole outside is SA = 4(pi)r^2, which is four times the flat circle cut through its middle. If a problem gives you the diameter, cut it in half first to get r, then square it. The rest of this sheet mixes in the solids you already know, so before you compute, name the shape and pick the matching formula. Use pi = 3.14.",
   "example": "",
   "instruction": "Find the surface area of the sphere given below. Formula: SA = 4(pi)r^2 (use pi = 3.14). Also find the surface area of other solid figures and answer the word problems.",
   "items": [
    {
     "q": "Surface area of a sphere with radius 8 cm (use pi = 3.14)",
     "a": "803.84",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a sphere with radius 16 cm (use pi = 3.14)",
     "a": "3215.36",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a sphere with radius 25 m (use pi = 3.14)",
     "a": "7850",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a sphere with radius 30.5 m (use pi = 3.14)",
     "a": "11683.94",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a sphere with radius 18 cm (use pi = 3.14)",
     "a": "4069.44",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a sphere with radius 12.2 m (use pi = 3.14)",
     "a": "1869.43",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a sphere with radius 9.3 m (use pi = 3.14)",
     "a": "1086.31",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a sphere with radius 8.4 m (use pi = 3.14)",
     "a": "886.23",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a sphere with radius 5.5 m (use pi = 3.14)",
     "a": "379.94",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a sphere with radius 13.9 cm (use pi = 3.14)",
     "a": "2426.72",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cone with radius 8.5 cm and slant height 15 cm (use pi = 3.14)",
     "a": "627.22",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a sphere with radius 2.4 m (use pi = 3.14)",
     "a": "72.35",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cylinder with radius 0.25 m and height 5.5 m (use pi = 3.14)",
     "a": "9.03",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cube with edge 8.3 m",
     "a": "413.34",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a triangular prism with triangle base 8 cm, triangle height 6.5 cm, slant side 12.5 cm and prism length 10 cm",
     "a": "382",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a rectangular prism with length 20 cm, width 10.5 cm and height 8.3 cm",
     "a": "926.3",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a cube with edge 100 m",
     "a": "60000",
     "type": "key",
     "text": true
    },
    {
     "q": "Surface area of a sphere with radius 0.4 m (use pi = 3.14)",
     "a": "2.01",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cylinder with radius 40 m and height 60 m (use pi = 3.14)",
     "a": "25120",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Surface area of a cone with radius 8.2 m and slant height 10 m (use pi = 3.14)",
     "a": "468.61",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Find the surface area of a sphere whose diameter is 15 m (use pi = 3.14).",
     "a": "706.5",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Find the surface area of a cube having an edge length of 4 feet each.",
     "a": "96",
     "type": "key",
     "text": true
    },
    {
     "q": "Find the surface area of a cylinder having a height of 10 cm and a radius of 3 cm. (Hint: Think about what a toilet roll would look like if you cut it and unfolded it.) (use pi = 3.14)",
     "a": "244.92",
     "type": "key",
     "text": true,
     "tol": true
    },
    {
     "q": "Find the surface area of a cube having an edge length of 7 m.",
     "a": "294",
     "type": "key",
     "text": true
    },
    {
     "q": "A fish tank is rectangular in shape. What is its surface area if the dimensions are 0.25 m by 1 m by 0.5 m?",
     "a": "1.75",
     "type": "key",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Find the surface area of a sphere with radius 6 cm. Use pi = 3.14.",
     "steps": [
      "r^2 = 6 x 6 = 36",
      "SA = 4 x 3.14 x 36 = 12.56 x 36",
      "SA = 452.16"
     ],
     "a": "452.16 cm^2"
    },
    {
     "q": "Find the surface area of a sphere whose diameter is 20 m. Use pi = 3.14.",
     "steps": [
      "Radius: r = 20 divided by 2 = 10",
      "r^2 = 10 x 10 = 100",
      "SA = 12.56 x 100 = 1256"
     ],
     "a": "1256 m^2"
    },
    {
     "q": "A barangay water tank is shaped like a ball with a radius of 1.5 m. How many square metres must be painted?",
     "steps": [
      "The tank is a sphere, so use SA = 4(pi)r^2",
      "r^2 = 1.5 x 1.5 = 2.25",
      "SA = 12.56 x 2.25 = 28.26"
     ],
     "a": "28.26 m^2"
    },
    {
     "q": "A balikbayan box measures 1.2 m long, 0.6 m wide and 0.5 m high. Find its surface area.",
     "steps": [
      "The box is a rectangular prism, so use SA = 2(lw + hl + hw)",
      "lw = 1.2 x 0.6 = 0.72, hl = 0.5 x 1.2 = 0.6, hw = 0.5 x 0.6 = 0.3",
      "SA = 2(0.72 + 0.6 + 0.3) = 2 x 1.62 = 3.24"
     ],
     "a": "3.24 m^2"
    }
   ]
  },
  {
   "n": 52,
   "title": "ADDING TWO POSITIVE INTEGERS",
   "concept": "Remember: If a number has no sign, it means that it is a positive number. To add two positive integers, simply add the numbers in the usual way.",
   "example": "2 + 4 = 6",
   "instruction": "Add the following:",
   "items": [
    {
     "q": "1 + 6"
    },
    {
     "q": "2 + 9"
    },
    {
     "q": "8 + 3"
    },
    {
     "q": "9 + 7"
    },
    {
     "q": "2 + 4"
    },
    {
     "q": "3 + 9"
    },
    {
     "q": "7 + 7"
    },
    {
     "q": "8 + 1"
    },
    {
     "q": "2 + 1"
    },
    {
     "q": "9 + 9"
    },
    {
     "q": "13 + 9"
    },
    {
     "q": "28 + 8"
    },
    {
     "q": "96 + 3"
    },
    {
     "q": "18 + 81"
    },
    {
     "q": "72 + 28"
    },
    {
     "q": "13 + 31"
    },
    {
     "q": "99 + 79"
    },
    {
     "q": "28 + 55"
    },
    {
     "q": "11 + 77"
    },
    {
     "q": "18 + 59"
    }
   ],
   "examples": [
    "4 + 5",
    "6 + 8",
    "15 + 7",
    "34 + 6",
    "27 + 45",
    "64 + 83"
   ]
  },
  {
   "n": 53,
   "title": "ADDING TWO NEGATIVE INTEGERS",
   "concept": "To add two negative integers, add the two numbers then affix the negative sign.",
   "example": "(-6) + (-3) = 6 - 3 (add their positive values) = 9 (get the sum) = -9 (affix the negative sign)",
   "instruction": "Add the following:",
   "items": [
    {
     "q": "(-5) + (-6)"
    },
    {
     "q": "(-9) + (-9)"
    },
    {
     "q": "(-1) + (-7)"
    },
    {
     "q": "(-2) + (-8)"
    },
    {
     "q": "(-5) + (-3)"
    },
    {
     "q": "(-11) + (-1)"
    },
    {
     "q": "(-88) + (-8)"
    },
    {
     "q": "(-99) + (-9)"
    },
    {
     "q": "(-56) + (-66)"
    },
    {
     "q": "(-77) + (-12)"
    },
    {
     "q": "(-101) + (-1)"
    },
    {
     "q": "(-365) + (-5)"
    },
    {
     "q": "(-999) + (-89)"
    },
    {
     "q": "(-234) + (-43)"
    },
    {
     "q": "(-808) + (-181)"
    },
    {
     "q": "(-756) + (-765)"
    },
    {
     "q": "(-1010) + (-1)"
    },
    {
     "q": "(-7723) + (-32)"
    },
    {
     "q": "(-2008) + (-800)"
    },
    {
     "q": "(-3409) + (-1409)"
    }
   ],
   "examples": [
    "(-4) + (-8)",
    "(-7) + (-6)",
    "(-23) + (-9)",
    "(-64) + (-37)",
    "(-412) + (-56)",
    "(-2506) + (-317)"
   ]
  },
  {
   "n": 54,
   "title": "Adding a Positive and a Negative Integer; Adding a Positive and a Negative Fraction",
   "concept": "ADDING A POSITIVE AND A NEGATIVE INTEGER: To add a positive and a negative integer, subtract the two numbers then copy the sign of the larger number. ADDING A POSITIVE AND A NEGATIVE FRACTION: To add a positive and a negative fraction with the same denominator, subtract the numerators, copy the denominator, simplify, then copy the sign of the fraction with larger numerator.",
   "example": "1) 9 + (-8) = 9 - 8 = 1; since 9 is larger than 8, the sign of the answer is also positive",
   "instruction": "Add the following integers (items 1-40). Add the following fractions (items 41-55).",
   "items": [
    {
     "q": "5 + (-5)"
    },
    {
     "q": "8 + (-9)"
    },
    {
     "q": "7 + (-1)"
    },
    {
     "q": "2 + (-4)"
    },
    {
     "q": "6 + (-9)"
    },
    {
     "q": "23 + (-3)"
    },
    {
     "q": "99 + (-1)"
    },
    {
     "q": "65 + (-9)"
    },
    {
     "q": "76 + (-67)"
    },
    {
     "q": "88 + (-80)"
    },
    {
     "q": "154 + (-9)"
    },
    {
     "q": "654 + (-5)"
    },
    {
     "q": "100 + (-20)"
    },
    {
     "q": "543 + (-34)"
    },
    {
     "q": "765 + (-567)"
    },
    {
     "q": "900 + (-789)"
    },
    {
     "q": "1000 + (-1)"
    },
    {
     "q": "1111 + (-11)"
    },
    {
     "q": "6754 + (-899)"
    },
    {
     "q": "2121 + (-7896)"
    },
    {
     "q": "(-5) + 7"
    },
    {
     "q": "(-8) + 6"
    },
    {
     "q": "(-4) + 6"
    },
    {
     "q": "(-1) + 8"
    },
    {
     "q": "(-3) + 9"
    },
    {
     "q": "(-44) + 4"
    },
    {
     "q": "(-10) + 9"
    },
    {
     "q": "(-87) + 8"
    },
    {
     "q": "(-17) + 71"
    },
    {
     "q": "(-99) + 98"
    },
    {
     "q": "(-202) + 2"
    },
    {
     "q": "(-453) + 4"
    },
    {
     "q": "(-256) + 65"
    },
    {
     "q": "(-878) + 78"
    },
    {
     "q": "(-546) + 689"
    },
    {
     "q": "(-979) + 799"
    },
    {
     "q": "(-2010) + 7"
    },
    {
     "q": "(-1028) + 82"
    },
    {
     "q": "(-1177) + 771"
    },
    {
     "q": "(-8765) + 6789"
    },
    {
     "q": "7/2 + (-9/2)"
    },
    {
     "q": "8/3 + (-14/3)"
    },
    {
     "q": "5/4 + (-7/4)"
    },
    {
     "q": "2/5 + (-6/5)"
    },
    {
     "q": "1/6 + (-11/6)",
     "mixed": true
    },
    {
     "q": "4/7 + (-9/7)"
    },
    {
     "q": "1/8 + (-11/8)",
     "mixed": true
    },
    {
     "q": "7/9 + (-11/9)"
    },
    {
     "q": "1/10 + (-7/10)"
    },
    {
     "q": "9/11 + (-12/11)"
    },
    {
     "q": "(-7/2) + 9/2"
    },
    {
     "q": "(-1/3) + 8/3",
     "mixed": true
    },
    {
     "q": "(-5/4) + 9/4"
    },
    {
     "q": "(-1/5) + 2/5"
    },
    {
     "q": "(-7/6) + 11/6"
    }
   ],
   "ordered": true,
   "examples": [
    "9 + (-4)",
    "342 + (-87)",
    "(-6) + 2",
    "(-634) + 275",
    "3/4 + (-11/4)",
    "(-3/7) + 10/7"
   ]
  },
  {
   "n": 55,
   "title": "Adding Integers",
   "concept": "ADDING INTEGERS: Add these integers using the rules and properties you learned before.",
   "example": "1) 8 + 4 = 12",
   "instruction": "Add the following integers.",
   "items": [
    {
     "q": "5 + 4"
    },
    {
     "q": "7 + (-8)"
    },
    {
     "q": "(-7) + 2"
    },
    {
     "q": "6 + (-1)"
    },
    {
     "q": "4 + 2"
    },
    {
     "q": "3 + (-2)"
    },
    {
     "q": "(-7) + (-1)"
    },
    {
     "q": "8 + (-5)"
    },
    {
     "q": "(-5) + (-2)"
    },
    {
     "q": "6 + 6"
    },
    {
     "q": "1 + (-9)"
    },
    {
     "q": "(-5) + (-3)"
    },
    {
     "q": "(-2) + (-7)"
    },
    {
     "q": "8 + 5"
    },
    {
     "q": "(-8) + 3"
    },
    {
     "q": "1 + (-6)"
    },
    {
     "q": "(-5) + 5"
    },
    {
     "q": "2 + 7"
    },
    {
     "q": "(-6) + (-9)"
    },
    {
     "q": "4 + (-4)"
    },
    {
     "q": "1 + (-2)"
    },
    {
     "q": "2 + 3"
    },
    {
     "q": "3 + (-4)"
    },
    {
     "q": "(-4) + (-5)"
    },
    {
     "q": "(-5) + 6"
    },
    {
     "q": "(-6) + (-7)"
    },
    {
     "q": "(-7) + 8"
    },
    {
     "q": "8 + 9"
    },
    {
     "q": "9 + 3"
    },
    {
     "q": "7 + (-3)"
    },
    {
     "q": "(-21) + 20"
    },
    {
     "q": "(-99) + (-32)"
    },
    {
     "q": "(-13) + 24"
    },
    {
     "q": "45 + (-46)"
    },
    {
     "q": "23 + 19"
    },
    {
     "q": "27 + (-34)"
    },
    {
     "q": "(-26) + (-20)"
    },
    {
     "q": "14 + (-56)"
    },
    {
     "q": "(-19) + (-13)"
    },
    {
     "q": "33 + (-22)"
    },
    {
     "q": "(-50) + 30"
    },
    {
     "q": "22 + 44"
    },
    {
     "q": "(-71) + (-79)"
    },
    {
     "q": "38 + 28"
    },
    {
     "q": "55 + (-5)"
    },
    {
     "q": "10 + (-10)"
    },
    {
     "q": "10 + 10"
    },
    {
     "q": "(-10) + (-10)"
    },
    {
     "q": "(-10) + 10"
    },
    {
     "q": "(-100) + 100"
    }
   ],
   "examples": [
    "3 + 8",
    "9 + (-4)",
    "(-9) + 4",
    "(-3) + (-8)",
    "(-34) + 17",
    "41 + (-68)"
   ]
  },
  {
   "n": 56,
   "title": "Subtracting Two Positive Integers",
   "concept": "SUBTRACTING TWO POSITIVE INTEGERS: To find the difference between two positive integers, 1. add the negative of the subtrahend to the minuend, 2. then proceed to the addition of integers. In 6 - 4: Minuend 6, Subtrahend 4, Negative of Subtrahend -4. So, 6 - 4 = 6 + (-4) = 2.",
   "example": "1) 21 - 15 = 21 + (-15) = 6",
   "instruction": "Write the process shown in the infobox in the first column; then, on the 2nd column, write the final answer (items 1-20). Write only the answer in the following items (21-30).",
   "items": [
    {
     "q": "9 - 1",
     "a": "9 + (-1)",
     "type": "key"
    },
    {
     "q": "8 - 5",
     "a": "8 + (-5)",
     "type": "key"
    },
    {
     "q": "4 - 7",
     "a": "4 + (-7)",
     "type": "key"
    },
    {
     "q": "15 - 8",
     "a": "15 + (-8)",
     "type": "key"
    },
    {
     "q": "76 - 26",
     "a": "76 + (-26)",
     "type": "key"
    },
    {
     "q": "9 - 1"
    },
    {
     "q": "8 - 5"
    },
    {
     "q": "4 - 7"
    },
    {
     "q": "15 - 8"
    },
    {
     "q": "76 - 26"
    },
    {
     "q": "2 - 101",
     "a": "2 + (-101)",
     "type": "key"
    },
    {
     "q": "14 - 115",
     "a": "14 + (-115)",
     "type": "key"
    },
    {
     "q": "500 - 119",
     "a": "500 + (-119)",
     "type": "key"
    },
    {
     "q": "6 - 1006",
     "a": "6 + (-1006)",
     "type": "key"
    },
    {
     "q": "202 - 2020",
     "a": "202 + (-2020)",
     "type": "key"
    },
    {
     "q": "2 - 101"
    },
    {
     "q": "14 - 115"
    },
    {
     "q": "500 - 119"
    },
    {
     "q": "6 - 1006"
    },
    {
     "q": "202 - 2020"
    },
    {
     "q": "6 - 3"
    },
    {
     "q": "1 - 9"
    },
    {
     "q": "26 - 7"
    },
    {
     "q": "6 - 35"
    },
    {
     "q": "13 - 86"
    },
    {
     "q": "207 - 5"
    },
    {
     "q": "304 - 17"
    },
    {
     "q": "600 - 908"
    },
    {
     "q": "2010 - 10"
    },
    {
     "q": "4196 - 7000"
    }
   ],
   "ordered": true,
   "examples": [
    "7 - 2",
    "3 - 9",
    "18 - 6",
    "45 - 72",
    "350 - 128",
    "305 - 1240"
   ]
  },
  {
   "n": 57,
   "title": "Subtracting Two Negative Integers",
   "concept": "SUBTRACTING TWO NEGATIVE INTEGERS: To subtract two negative integers, 1. add the positive of the subtrahend to the minuend, 2. proceed to addition of integers.",
   "example": "1) (-8) - (-6) = (-8) + (+6) = -2",
   "instruction": "Write the process shown in the infobox in the first column; then, on the 2nd column, write the final answer (items 1-20). Write only the answer in the following items (21-30).",
   "items": [
    {
     "q": "(-8) - (-2)",
     "a": "(-8) + (+2)",
     "type": "key"
    },
    {
     "q": "(-9) - (-1)",
     "a": "(-9) + (+1)",
     "type": "key"
    },
    {
     "q": "(-7) - (-9)",
     "a": "(-7) + (+9)",
     "type": "key"
    },
    {
     "q": "(-18) - (-3)",
     "a": "(-18) + (+3)",
     "type": "key"
    },
    {
     "q": "(-99) - (-89)",
     "a": "(-99) + (+89)",
     "type": "key"
    },
    {
     "q": "(-8) - (-2)"
    },
    {
     "q": "(-9) - (-1)"
    },
    {
     "q": "(-7) - (-9)"
    },
    {
     "q": "(-18) - (-3)"
    },
    {
     "q": "(-99) - (-89)"
    },
    {
     "q": "(-8) - (-108)",
     "a": "(-8) + (+108)",
     "type": "key"
    },
    {
     "q": "(-14) - (-140)",
     "a": "(-14) + (+140)",
     "type": "key"
    },
    {
     "q": "(-676) - (-867)",
     "a": "(-676) + (+867)",
     "type": "key"
    },
    {
     "q": "(-1000) - (-3)",
     "a": "(-1000) + (+3)",
     "type": "key"
    },
    {
     "q": "(-2000) - (-7000)",
     "a": "(-2000) + (+7000)",
     "type": "key"
    },
    {
     "q": "(-8) - (-108)"
    },
    {
     "q": "(-14) - (-140)"
    },
    {
     "q": "(-676) - (-867)"
    },
    {
     "q": "(-1000) - (-3)"
    },
    {
     "q": "(-2000) - (-7000)"
    },
    {
     "q": "(-3) - (-2)"
    },
    {
     "q": "(-3) - (-4)"
    },
    {
     "q": "(-21) - (-8)"
    },
    {
     "q": "(-4) - (-44)"
    },
    {
     "q": "(-27) - (-72)"
    },
    {
     "q": "(-120) - (-4)"
    },
    {
     "q": "(-300) - (-38)"
    },
    {
     "q": "(-312) - (-123)"
    },
    {
     "q": "(-22) - (-2022)"
    },
    {
     "q": "(-876) - (-1276)"
    }
   ],
   "ordered": true,
   "examples": [
    "(-6) - (-4)",
    "(-5) - (-11)",
    "(-25) - (-9)",
    "(-15) - (-150)",
    "(-543) - (-765)",
    "(-3000) - (-8000)"
   ]
  },
  {
   "n": 58,
   "title": "Subtracting a Positive Integer by a Negative Integer",
   "concept": "SUBTRACTING A POSITIVE INTEGER BY A NEGATIVE INTEGER: To subtract a positive integer by a negative integer, 1. add the positive of the subtrahend to the minuend, 2. proceed to addition of integers.",
   "example": "1) 9 - (-6) = 9 + (+6) = 15",
   "instruction": "Write the process shown in the infobox in the first column; then, on the 2nd column, write the final answer (items 1-20). Write only the answer in the following items (21-30).",
   "items": [
    {
     "q": "6 - (-1)",
     "a": "6 + (+1)",
     "type": "key"
    },
    {
     "q": "2 - (-7)",
     "a": "2 + (+7)",
     "type": "key"
    },
    {
     "q": "4 - (-4)",
     "a": "4 + (+4)",
     "type": "key"
    },
    {
     "q": "8 - (-99)",
     "a": "8 + (+99)",
     "type": "key"
    },
    {
     "q": "11 - (-22)",
     "a": "11 + (+22)",
     "type": "key"
    },
    {
     "q": "6 - (-1)"
    },
    {
     "q": "2 - (-7)"
    },
    {
     "q": "4 - (-4)"
    },
    {
     "q": "8 - (-99)"
    },
    {
     "q": "11 - (-22)"
    },
    {
     "q": "121 - (-9)",
     "a": "121 + (+9)",
     "type": "key"
    },
    {
     "q": "108 - (-12)",
     "a": "108 + (+12)",
     "type": "key"
    },
    {
     "q": "456 - (-544)",
     "a": "456 + (+544)",
     "type": "key"
    },
    {
     "q": "2010 - (-7)",
     "a": "2010 + (+7)",
     "type": "key"
    },
    {
     "q": "1000 - (-6000)",
     "a": "1000 + (+6000)",
     "type": "key"
    },
    {
     "q": "121 - (-9)"
    },
    {
     "q": "108 - (-12)"
    },
    {
     "q": "456 - (-544)"
    },
    {
     "q": "2010 - (-7)"
    },
    {
     "q": "1000 - (-6000)"
    },
    {
     "q": "8 - (-2)"
    },
    {
     "q": "6 - (-3)"
    },
    {
     "q": "72 - (-2)"
    },
    {
     "q": "3 - (-13)"
    },
    {
     "q": "17 - (-57)"
    },
    {
     "q": "6 - (-134)"
    },
    {
     "q": "212 - (-38)"
    },
    {
     "q": "670 - (-130)"
    },
    {
     "q": "1999 - (-13)"
    },
    {
     "q": "1024 - (-176)"
    }
   ],
   "ordered": true,
   "examples": [
    "7 - (-3)",
    "5 - (-9)",
    "14 - (-36)",
    "135 - (-8)",
    "321 - (-679)",
    "2000 - (-5000)"
   ]
  },
  {
   "n": 59,
   "title": "Subtracting a Negative Integer by a Positive Integer; Subtracting a Negative Fraction by a Positive Fraction",
   "concept": "SUBTRACTING A NEGATIVE INTEGER BY A POSITIVE INTEGER: To subtract a negative integer by a positive integer, 1. add the negative of the subtrahend to the minuend, 2. proceed to addition of integers. SUBTRACTING A NEGATIVE FRACTION BY A POSITIVE FRACTION: To subtract a negative fraction by a positive fraction, simply subtract the numerators (follow the rule in subtracting integers) and copy the denominator, then simplify.",
   "example": "1) -12 - 9 = -12 + (-9) = -21",
   "instruction": "Write the process shown in the infobox in the first column; then write the final answer (items 1-20). Write only the answer (items 21-30). Subtract the following fractions (items 31-50).",
   "items": [
    {
     "q": "(-9) - 1",
     "a": "-9 - 1 = -10",
     "type": "key"
    },
    {
     "q": "(-2) - 7",
     "a": "-2 - 7 = -9",
     "type": "key"
    },
    {
     "q": "(-4) - 4",
     "a": "-4 - 4 = -8",
     "type": "key"
    },
    {
     "q": "(-81) - 4",
     "a": "-81 - 4 = -85",
     "type": "key"
    },
    {
     "q": "(-22) - 18",
     "a": "-22 - 18 = -40",
     "type": "key"
    },
    {
     "q": "(-9) - 1"
    },
    {
     "q": "(-2) - 7"
    },
    {
     "q": "(-4) - 4"
    },
    {
     "q": "(-81) - 4"
    },
    {
     "q": "(-22) - 18"
    },
    {
     "q": "(-198) - 2",
     "a": "-198 - 2 = -200",
     "type": "key"
    },
    {
     "q": "(-278) - 22",
     "a": "-278 - 22 = -300",
     "type": "key"
    },
    {
     "q": "(-171) - 711",
     "a": "-171 - 711 = -882",
     "type": "key"
    },
    {
     "q": "(-1000) - 8",
     "a": "-1000 - 8 = -1008",
     "type": "key"
    },
    {
     "q": "(-4000) - 9000",
     "a": "-4000 - 9000 = -13000",
     "type": "key"
    },
    {
     "q": "(-198) - 2"
    },
    {
     "q": "(-278) - 22"
    },
    {
     "q": "(-171) - 711"
    },
    {
     "q": "(-1000) - 8"
    },
    {
     "q": "(-4000) - 9000"
    },
    {
     "q": "(-5) - 1"
    },
    {
     "q": "(-2) - 8"
    },
    {
     "q": "(-11) - 9"
    },
    {
     "q": "(-16) - 1"
    },
    {
     "q": "(-19) - 72"
    },
    {
     "q": "(-212) - 6"
    },
    {
     "q": "(-100) - 88"
    },
    {
     "q": "(-672) - 276"
    },
    {
     "q": "(-2000) - 20"
    },
    {
     "q": "(-1999) - 199"
    },
    {
     "q": "(-17/2) - 7/2"
    },
    {
     "q": "(-22/3) - 1/3"
    },
    {
     "q": "(-15/4) - 11/4"
    },
    {
     "q": "(-6/5) - 4/5"
    },
    {
     "q": "(-11/6) - 5/6"
    },
    {
     "q": "(-22/7) - 13/7"
    },
    {
     "q": "(-11/8) - 3/8"
    },
    {
     "q": "(-20/9) - 5/9"
    },
    {
     "q": "(-7/10) - 21/10"
    },
    {
     "q": "(-18/11) - 6/11"
    },
    {
     "q": "(-25/2) - 11/2"
    },
    {
     "q": "(-7/3) - 10/3"
    },
    {
     "q": "(-3/4) - 11/4"
    },
    {
     "q": "(-9/5) - 17/5"
    },
    {
     "q": "(-7/6) - 13/6"
    },
    {
     "q": "(-12/7) - 13/7"
    },
    {
     "q": "(-1/8) - 17/8"
    },
    {
     "q": "(-22/9) - 31/9"
    },
    {
     "q": "(-13/10) - 17/10"
    },
    {
     "q": "(-5/11) - 26/11"
    }
   ],
   "ordered": true,
   "examples": [
    "(-7) - 2",
    "(-35) - 15",
    "(-350) - 44",
    "(-13/2) - 5/2",
    "(-14/5) - 6/5",
    "(-19/9) - 8/9"
   ]
  },
  {
   "n": 60,
   "title": "Subtracting Integers",
   "concept": "SUBTRACTING INTEGERS: Subtract these integers using the rules and properties you learned before.",
   "example": "1) 9 - (-6) = 9 + (+6) = 15",
   "instruction": "Subtract the following integers.",
   "items": [
    {
     "q": "5 - 8"
    },
    {
     "q": "3 - (-2)"
    },
    {
     "q": "6 - (-1)"
    },
    {
     "q": "(-4) - 9"
    },
    {
     "q": "2 - (-1)"
    },
    {
     "q": "(-4) - (-6)"
    },
    {
     "q": "6 - (-5)"
    },
    {
     "q": "9 - 9"
    },
    {
     "q": "(-3) - 8"
    },
    {
     "q": "(-7) - (-7)"
    },
    {
     "q": "6 - 6"
    },
    {
     "q": "(-6) - (-6)"
    },
    {
     "q": "(-6) - 6"
    },
    {
     "q": "6 - (-7)"
    },
    {
     "q": "(-7) - (-6)"
    },
    {
     "q": "6 - (-6)"
    },
    {
     "q": "6 - 7"
    },
    {
     "q": "7 - 6"
    },
    {
     "q": "(-8) - 8"
    },
    {
     "q": "4 - (-5)"
    },
    {
     "q": "3 - (-7)"
    },
    {
     "q": "5 - (-3)"
    },
    {
     "q": "(-6) - (-4)"
    },
    {
     "q": "1 - (-8)"
    },
    {
     "q": "9 - 6"
    },
    {
     "q": "(-6) - (-3)"
    },
    {
     "q": "2 - (-1)"
    },
    {
     "q": "(-5) - 6"
    },
    {
     "q": "(-9) - (-5)"
    },
    {
     "q": "3 - (-8)"
    },
    {
     "q": "76 - (-75)"
    },
    {
     "q": "12 - (-23)"
    },
    {
     "q": "(-80) - (-50)"
    },
    {
     "q": "(-26) - 56"
    },
    {
     "q": "(-21) - (-67)"
    },
    {
     "q": "45 - 54"
    },
    {
     "q": "(-18) - 78"
    },
    {
     "q": "55 - (-97)"
    },
    {
     "q": "12 - (-56)"
    },
    {
     "q": "(-13) - (-14)"
    },
    {
     "q": "(-90) - (-70)"
    },
    {
     "q": "66 - (-94)"
    },
    {
     "q": "45 - (-76)"
    },
    {
     "q": "(-21) - (-98)"
    },
    {
     "q": "(-67) - 27"
    },
    {
     "q": "67 - 98"
    },
    {
     "q": "98 - 67"
    },
    {
     "q": "(-67) - 98"
    },
    {
     "q": "67 - (-98)"
    },
    {
     "q": "(-67) - (-98)"
    }
   ],
   "examples": [
    "4 - 9",
    "7 - (-4)",
    "(-5) - 3",
    "(-8) - (-5)",
    "34 - (-57)",
    "(-54) - (-89)"
   ]
  },
  {
   "n": 61,
   "title": "Multiplying Two Positive Integers; Multiplying Two Positive Fractions",
   "concept": "MULTIPLYING TWO POSITIVE INTEGERS: Remember: the product of two integers with the same sign is POSITIVE and the product of two integers with different signs is NEGATIVE. To find the product of two positive integers, multiply the numbers; the resulting product has a positive sign. MULTIPLYING TWO POSITIVE FRACTIONS: To find the product of two positive fractions, multiply the numerators then multiply the denominators. Simplify. The resulting product has a positive sign.",
   "example": "1) 6 x 7 = 42",
   "instruction": "Multiply the following integers (items 1-20). Multiply the following fractions (items 21-40).",
   "items": [
    {
     "q": "1 * 9"
    },
    {
     "q": "6 * 6"
    },
    {
     "q": "7 * 8"
    },
    {
     "q": "9 * 4"
    },
    {
     "q": "2 * 7"
    },
    {
     "q": "4 * 8"
    },
    {
     "q": "7 * 7"
    },
    {
     "q": "9 * 6"
    },
    {
     "q": "3 * 8"
    },
    {
     "q": "9 * 3"
    },
    {
     "q": "73 * 2"
    },
    {
     "q": "18 * 3"
    },
    {
     "q": "81 * 9"
    },
    {
     "q": "27 * 5"
    },
    {
     "q": "30 * 6"
    },
    {
     "q": "170 * 2"
    },
    {
     "q": "300 * 4"
    },
    {
     "q": "18 * 17"
    },
    {
     "q": "20 * 10"
    },
    {
     "q": "1010 * 4"
    },
    {
     "q": "1/2 * 3/2"
    },
    {
     "q": "3/4 * 2/5"
    },
    {
     "q": "1/8 * 5/3"
    },
    {
     "q": "8/9 * 3/2"
    },
    {
     "q": "1/10 * 3/5"
    },
    {
     "q": "2/5 * 6/5"
    },
    {
     "q": "2/7 * 9/2"
    },
    {
     "q": "1/9 * 4/7"
    },
    {
     "q": "9/2 * 4/5"
    },
    {
     "q": "3/8 * 5/3"
    },
    {
     "q": "1/11 * 12/5"
    },
    {
     "q": "12/7 * 1/2"
    },
    {
     "q": "1/9 * 8/5"
    },
    {
     "q": "11/12 * 1/4"
    },
    {
     "q": "22/7 * 1/3"
    },
    {
     "q": "2/5 * 7/3"
    },
    {
     "q": "9/4 * 10/3"
    },
    {
     "q": "11/8 * 9/2"
    },
    {
     "q": "12/7 * 1/7"
    },
    {
     "q": "11/9 * 9/11"
    }
   ],
   "ordered": true,
   "examples": [
    "5 * 7",
    "8 * 9",
    "46 * 3",
    "2/3 * 5/4",
    "7/8 * 4/5",
    "10/3 * 9/5"
   ]
  },
  {
   "n": 62,
   "title": "Multiplying Two Negative Integers; Multiplying Two Negative Fractions",
   "concept": "MULTIPLYING TWO NEGATIVE INTEGERS: To find the product of two negative integers, multiply the numbers. Since the two integers have the same sign, the resulting product has a positive sign. MULTIPLYING TWO NEGATIVE FRACTIONS: To find the product of two negative fractions, multiply the numerators then multiply the denominators. Simplify. Since the two fractions have the same sign, the resulting product has a positive sign.",
   "example": "(-2) x (-7) = 14",
   "instruction": "Multiply the following integers: (items 1-25). Multiply the following fractions. (items 26-45).",
   "items": [
    {
     "q": "(-2) * (-3)"
    },
    {
     "q": "(-9) * (-7)"
    },
    {
     "q": "(-1) * (-6)"
    },
    {
     "q": "(-2) * (-8)"
    },
    {
     "q": "(-4) * (-7)"
    },
    {
     "q": "(-5) * (-9)"
    },
    {
     "q": "(-3) * (-5)"
    },
    {
     "q": "(-6) * (-4)"
    },
    {
     "q": "(-9) * (-9)"
    },
    {
     "q": "(-1) * (-1)"
    },
    {
     "q": "(-21) * (-8)"
    },
    {
     "q": "(-44) * (-4)"
    },
    {
     "q": "(-16) * (-8)"
    },
    {
     "q": "(-50) * (-5)"
    },
    {
     "q": "(-17) * (-7)"
    },
    {
     "q": "(-181) * (-3)"
    },
    {
     "q": "(-900) * (-4)"
    },
    {
     "q": "(-12) * (-13)"
    },
    {
     "q": "(-15) * (-15)"
    },
    {
     "q": "(-2010) * (-8)"
    },
    {
     "q": "(-15) * (-8)"
    },
    {
     "q": "(-44) * (-11)"
    },
    {
     "q": "(-16) * (-9)"
    },
    {
     "q": "(-30) * (-5)"
    },
    {
     "q": "(-27) * (-7)"
    },
    {
     "q": "(-11/2) * (-3/4)"
    },
    {
     "q": "(-3/4) * (-2/5)"
    },
    {
     "q": "(-1/8) * (-5/3)"
    },
    {
     "q": "(-8/9) * (-3/2)"
    },
    {
     "q": "(-3/10) * (-3/2)"
    },
    {
     "q": "(-12/5) * (-6/5)"
    },
    {
     "q": "(-9/7) * (9/4)"
    },
    {
     "q": "(-1/19) * (-3/2)"
    },
    {
     "q": "(-7/2) * (-4/3)"
    },
    {
     "q": "(-13/8) * (-5/4)"
    },
    {
     "q": "(-1/11) * (-2/10)"
    },
    {
     "q": "(-22/3) * (-1/11)"
    },
    {
     "q": "(-5/9) * (-8/15)"
    },
    {
     "q": "(-7/12) * (-1/5)"
    },
    {
     "q": "(-2/7) * (-11/4)"
    },
    {
     "q": "(-2/5) * (-17/3)"
    },
    {
     "q": "(-9/4) * (-10/7)"
    },
    {
     "q": "(-1/8) * (-9/2)"
    },
    {
     "q": "(-12/7) * (-1/7)"
    },
    {
     "q": "(-1/19) * (-19/2)"
    }
   ],
   "ordered": true,
   "examples": [
    "(-7) * (-3)",
    "(-8) * (-6)",
    "(-23) * (-6)",
    "(-5/6) * (-3/4)",
    "(-7/4) * (-8/5)",
    "(-9/2) * (-2/3)"
   ]
  },
  {
   "n": 63,
   "title": "Multiplying Two Integers with Different Signs; Multiplying Fractions with Different Signs",
   "concept": "MULTIPLYING TWO INTEGERS WITH DIFFERENT SIGNS: To find the product of two integers with different signs, multiply the numbers. Since the two integers have different signs, the resulting product has a negative sign. MULTIPLYING FRACTIONS WITH DIFFERENT SIGNS: To find the product of two fractions with different signs, multiply the numerators then multiply the denominators. Simplify. Since the two fractions have different signs, affix the negative sign in the product.",
   "example": "(-2) x 9 = -18",
   "instruction": "Multiply the following integers: (items 1-25). Multiply the following fractions. (items 26-35). Let's try harder... Multiply the three integers. (items 36-50).",
   "items": [
    {
     "q": "8 * (-6)"
    },
    {
     "q": "7 * (-6)"
    },
    {
     "q": "6 * (-9)"
    },
    {
     "q": "2 * (-5)"
    },
    {
     "q": "3 * (-2)"
    },
    {
     "q": "(-9) * 9"
    },
    {
     "q": "(-8) * 8"
    },
    {
     "q": "(-2) * 7"
    },
    {
     "q": "(-5) * 5"
    },
    {
     "q": "(-6) * 3"
    },
    {
     "q": "14 * (-7)"
    },
    {
     "q": "17 * (-8)"
    },
    {
     "q": "25 * (-4)"
    },
    {
     "q": "30 * (-3)"
    },
    {
     "q": "18 * (-5)"
    },
    {
     "q": "(-150) * 8"
    },
    {
     "q": "(-200) * 5"
    },
    {
     "q": "(-16) * 10"
    },
    {
     "q": "(-22) * 12"
    },
    {
     "q": "(-1024) * 8"
    },
    {
     "q": "15 * (-3)"
    },
    {
     "q": "25 * (-5)"
    },
    {
     "q": "(-150) * 4"
    },
    {
     "q": "(-205) * 5"
    },
    {
     "q": "(-106) * 10"
    },
    {
     "q": "1/2 * (-12/7)"
    },
    {
     "q": "2/7 * (-11/2)"
    },
    {
     "q": "1/9 * (-18/5)"
    },
    {
     "q": "5/12 * (-1/4)"
    },
    {
     "q": "8/7 * (-16/3)"
    },
    {
     "q": "2/5 * (-7/13)"
    },
    {
     "q": "9/14 * (-10/3)"
    },
    {
     "q": "1/8 * (-9/2)"
    },
    {
     "q": "12/7 * (-1/6)"
    },
    {
     "q": "1/9 * (-9/23)"
    },
    {
     "q": "1 * 2 * 3"
    },
    {
     "q": "4 * 5 * 6"
    },
    {
     "q": "7 * 8 * 9"
    },
    {
     "q": "2 * 7 * 8"
    },
    {
     "q": "6 * 9 * 7"
    },
    {
     "q": "3 * 2 * 11"
    },
    {
     "q": "7 * 8 * 19"
    },
    {
     "q": "1 * 5 * 20"
    },
    {
     "q": "2 * 4 * 25"
    },
    {
     "q": "3 * 12 * 12"
    },
    {
     "q": "(-4) * 10 * 25"
    },
    {
     "q": "9 * (-11) * (-11)"
    },
    {
     "q": "(-10) * (-11) * (-12)"
    },
    {
     "q": "20 * 30 * (-40)"
    },
    {
     "q": "21 * (-12) * 12"
    }
   ],
   "ordered": true,
   "examples": [
    "9 * (-4)",
    "(-7) * 5",
    "24 * (-6)",
    "3/5 * (-10/9)",
    "7/6 * (-3/14)",
    "5 * (-6) * 4"
   ]
  },
  {
   "n": 64,
   "title": "Multiplying Integers",
   "concept": "MULTIPLYING INTEGERS: Multiply these integers using the rules and properties you learned before. Please take note of the sign of your answer.",
   "example": "1 x 3 = 3",
   "instruction": "Multiply the following integers.",
   "items": [
    {
     "q": "(-1) * (-1)"
    },
    {
     "q": "(-7) * 5"
    },
    {
     "q": "2 * (-9)"
    },
    {
     "q": "3 * 3"
    },
    {
     "q": "5 * 8"
    },
    {
     "q": "(-8) * 9"
    },
    {
     "q": "9 * (-1)"
    },
    {
     "q": "(-5) * (-5)"
    },
    {
     "q": "2 * (-7)"
    },
    {
     "q": "7 * (-7)"
    },
    {
     "q": "(-5) * 4"
    },
    {
     "q": "(-2) * (-2)"
    },
    {
     "q": "5 * (-1)"
    },
    {
     "q": "(-9) * (-9)"
    },
    {
     "q": "9 * 9"
    },
    {
     "q": "9 * (-9)"
    },
    {
     "q": "7 * (-8)"
    },
    {
     "q": "(-4) * 8"
    },
    {
     "q": "2 * 5"
    },
    {
     "q": "(-6) * 3"
    }
   ],
   "examples": [
    "(-3) * 6",
    "4 * (-7)",
    "(-6) * (-8)",
    "8 * 7",
    "(-4) * (-9)",
    "6 * (-5)"
   ]
  },
  {
   "n": 65,
   "title": "Division of Two Positive Integers; Division of Two Negative Integers",
   "concept": "DIVISION OF TWO POSITIVE INTEGERS: Remember: The quotient of two integers with the same sign is POSITIVE and the product of two integers with different signs is NEGATIVE. To find the quotient of two positive integers, divide the numbers. The resulting quotient has a positive sign. DIVISION OF TWO NEGATIVE INTEGERS: To find the quotient of two negative integers, divide the numbers. Since the two integers have the same sign, the resulting quotient has a positive sign.",
   "example": "3 ÷ 1 = 3",
   "instruction": "Divide the following integers. (items 1-20 positive; items 21-50 negative section).",
   "items": [
    {
     "q": "15 / 5"
    },
    {
     "q": "45 / 9"
    },
    {
     "q": "72 / 6"
    },
    {
     "q": "81 / 3"
    },
    {
     "q": "99 / 3"
    },
    {
     "q": "45 / 15"
    },
    {
     "q": "99 / 11"
    },
    {
     "q": "51 / 17"
    },
    {
     "q": "108 / 9"
    },
    {
     "q": "140 / 7"
    },
    {
     "q": "300 / 6"
    },
    {
     "q": "729 / 9"
    },
    {
     "q": "625 / 25"
    },
    {
     "q": "400 / 25"
    },
    {
     "q": "360 / 15"
    },
    {
     "q": "18 / 3"
    },
    {
     "q": "20 / 4"
    },
    {
     "q": "28 / 7"
    },
    {
     "q": "32 / 4"
    },
    {
     "q": "42 / 6"
    },
    {
     "q": "(-40) / (-4)"
    },
    {
     "q": "(-126) / (-6)"
    },
    {
     "q": "(-18) / (-9)"
    },
    {
     "q": "(-540) / (-10)"
    },
    {
     "q": "(-88) / (-11)"
    },
    {
     "q": "(-80) / (-4)"
    },
    {
     "q": "(-96) / (-6)"
    },
    {
     "q": "(-18) / (-3)"
    },
    {
     "q": "(-54) / (-9)"
    },
    {
     "q": "(-88) / (-8)"
    },
    {
     "q": "(-32) / (-16)"
    },
    {
     "q": "(-64) / (-16)"
    },
    {
     "q": "(-72) / (-24)"
    },
    {
     "q": "(-105) / (-7)"
    },
    {
     "q": "(-125) / (-5)"
    },
    {
     "q": "(-726) / (-6)"
    },
    {
     "q": "(-909) / (-9)"
    },
    {
     "q": "(-165) / (-15)"
    },
    {
     "q": "(-990) / (-22)"
    },
    {
     "q": "(-180) / (-12)"
    },
    {
     "q": "(-60) / 12"
    },
    {
     "q": "(-51) / 3"
    },
    {
     "q": "(-22) / 11"
    },
    {
     "q": "(-95) / 19"
    },
    {
     "q": "(-74) / 2"
    },
    {
     "q": "34 / (-17)"
    },
    {
     "q": "56 / (-7)"
    },
    {
     "q": "63 / (-9)"
    },
    {
     "q": "64 / (-8)"
    },
    {
     "q": "70 / (-2)"
    }
   ],
   "ordered": true,
   "examples": [
    "64 / 8",
    "144 / 12",
    "512 / 8",
    "(-144) / (-12)",
    "(-275) / (-25)",
    "(-96) / 8"
   ]
  },
  {
   "n": 66,
   "title": "Division of Two Integers with Different Signs",
   "concept": "DIVISION OF TWO INTEGERS WITH DIFFERENT SIGNS: To find the quotient of two integers with different signs, divide the numbers. Since the two integers have different signs, the resulting quotient has a negative sign.",
   "example": "10 ÷ (-2) = -5",
   "instruction": "Divide the following integers.",
   "items": [
    {
     "q": "34 / (-2)"
    },
    {
     "q": "84 / (-3)"
    },
    {
     "q": "49 / (-7)"
    },
    {
     "q": "48 / (-6)"
    },
    {
     "q": "56 / (-7)"
    },
    {
     "q": "40 / (-20)"
    },
    {
     "q": "68 / (-17)"
    },
    {
     "q": "95 / (-19)"
    },
    {
     "q": "75 / (-15)"
    },
    {
     "q": "84 / (-42)"
    },
    {
     "q": "(-115) / 5"
    },
    {
     "q": "(-189) / 9"
    },
    {
     "q": "(-154) / 7"
    },
    {
     "q": "(-104) / 8"
    },
    {
     "q": "(-102) / 6"
    },
    {
     "q": "(-132) / 12"
    },
    {
     "q": "(-242) / 22"
    },
    {
     "q": "(-484) / 22"
    },
    {
     "q": "(-162) / 18"
    },
    {
     "q": "(-310) / 31"
    }
   ],
   "examples": [
    "72 / (-4)",
    "96 / (-8)",
    "126 / (-14)",
    "(-144) / 12",
    "(-168) / 8",
    "(-275) / 25"
   ]
  },
  {
   "n": 67,
   "title": "Dividing Integers",
   "concept": "DIVIDING INTEGERS: Divide these integers using the rules and properties you learned before. Please take note of the sign of your answer.",
   "example": "9 ÷ 3 = 3",
   "instruction": "Multiply the following integers. (banner as printed; operations are actually division)",
   "items": [
    {
     "q": "4 / (-2)"
    },
    {
     "q": "9 / (-3)"
    },
    {
     "q": "(-6) / (-6)"
    },
    {
     "q": "(-8) / 4"
    },
    {
     "q": "(-10) / (-5)"
    },
    {
     "q": "6 / (-3)"
    },
    {
     "q": "(-2) / 1"
    },
    {
     "q": "3 / 3"
    },
    {
     "q": "(-7) / 1"
    },
    {
     "q": "(-7) / (-1)"
    },
    {
     "q": "(-5) / (-5)"
    },
    {
     "q": "8 / (-4)"
    },
    {
     "q": "9 / (-9)"
    },
    {
     "q": "6 / (-1)"
    },
    {
     "q": "(-6) / (-2)"
    },
    {
     "q": "6 / 2"
    },
    {
     "q": "(-6) / 2"
    },
    {
     "q": "6 / (-2)"
    },
    {
     "q": "7 / (-7)"
    },
    {
     "q": "(-9) / 3"
    },
    {
     "q": "12 / 3"
    },
    {
     "q": "16 / (-4)"
    },
    {
     "q": "(-20) / 5"
    },
    {
     "q": "(-18) / (-6)"
    },
    {
     "q": "16 / 2"
    },
    {
     "q": "54 / (-9)"
    },
    {
     "q": "17 / (-1)"
    },
    {
     "q": "(-49) / 7"
    },
    {
     "q": "(-51) / (-3)"
    },
    {
     "q": "35 / (-7)"
    },
    {
     "q": "22 / (-11)"
    },
    {
     "q": "34 / (-17)"
    },
    {
     "q": "60 / (-15)"
    },
    {
     "q": "(-75) / (-25)"
    },
    {
     "q": "(-96) / 6"
    },
    {
     "q": "(-20) / (-10)"
    },
    {
     "q": "55 / (-11)"
    },
    {
     "q": "(-72) / (-12)"
    },
    {
     "q": "81 / 27"
    },
    {
     "q": "48 / (-16)"
    },
    {
     "q": "100 / (-20)"
    },
    {
     "q": "(-120) / 30"
    },
    {
     "q": "(-116) / 29"
    },
    {
     "q": "(-200) / (-50)"
    },
    {
     "q": "180 / (-18)"
    },
    {
     "q": "(-108) / 27"
    },
    {
     "q": "300 / (-75)"
    },
    {
     "q": "(-500) / 50"
    },
    {
     "q": "(-1000) / (-100)"
    },
    {
     "q": "(-2010) / 2010"
    }
   ],
   "examples": [
    "(-12) / 4",
    "15 / (-5)",
    "(-24) / (-8)",
    "24 / 6",
    "(-132) / 11",
    "250 / (-50)"
   ]
  }
 ],
 "g910": [
  {
   "n": 1,
   "title": "ADDING TWO POSITIVE INTEGERS",
   "concept": "Remember: If a number has no sign, it means that it is a positive number. To add two positive integers, simply add the numbers in the usual way.",
   "example": "1) 2 + 4 = 6",
   "instruction": "Add the following:",
   "items": [
    {
     "q": "1 + 6"
    },
    {
     "q": "2 + 9"
    },
    {
     "q": "8 + 3"
    },
    {
     "q": "9 + 7"
    },
    {
     "q": "2 + 4"
    },
    {
     "q": "3 + 9"
    },
    {
     "q": "7 + 7"
    },
    {
     "q": "8 + 1"
    },
    {
     "q": "2 + 1"
    },
    {
     "q": "9 + 9"
    },
    {
     "q": "13 + 9"
    },
    {
     "q": "28 + 8"
    },
    {
     "q": "96 + 3"
    },
    {
     "q": "18 + 81"
    },
    {
     "q": "72 + 28"
    },
    {
     "q": "13 + 31"
    },
    {
     "q": "99 + 79"
    },
    {
     "q": "28 + 55"
    },
    {
     "q": "11 + 77"
    },
    {
     "q": "18 + 59"
    }
   ],
   "examples": [
    "4 + 5",
    "6 + 8",
    "24 + 7",
    "45 + 36",
    "87 + 64",
    "35 + 65"
   ]
  },
  {
   "n": 3,
   "title": "ADDING A POSITIVE AND A NEGATIVE INTEGER (and ADDING A POSITIVE AND A NEGATIVE FRACTION)",
   "concept": "ADDING A POSITIVE AND A NEGATIVE INTEGER: To add a positive and a negative integer, subtract the two numbers then copy the sign of the larger number. ADDING A POSITIVE AND A NEGATIVE FRACTION: To add a positive and a negative fraction with the same denominator, subtract the numerators, copy the denominator, simplify, then copy the sign of the fraction with larger numerator.",
   "example": "1) 9 + (-8) = 9 - 8 = 1 (since 9 is larger than 8, the sign of the answer is also positive)",
   "instruction": "Add the following integers: (items 1-40). Add the following fractions. (items 41-55)",
   "items": [
    {
     "q": "5 + (-5)"
    },
    {
     "q": "8 + (-9)"
    },
    {
     "q": "7 + (-1)"
    },
    {
     "q": "2 + (-4)"
    },
    {
     "q": "6 + (-9)"
    },
    {
     "q": "23 + (-3)"
    },
    {
     "q": "99 + (-1)"
    },
    {
     "q": "65 + (-9)"
    },
    {
     "q": "76 + (-67)"
    },
    {
     "q": "88 + (-80)"
    },
    {
     "q": "154 + (-9)"
    },
    {
     "q": "654 + (-5)"
    },
    {
     "q": "100 + (-20)"
    },
    {
     "q": "543 + (-34)"
    },
    {
     "q": "765 + (-567)"
    },
    {
     "q": "900 + (-789)"
    },
    {
     "q": "1000 + (-1)"
    },
    {
     "q": "1111 + (-11)"
    },
    {
     "q": "6754 + (-899)"
    },
    {
     "q": "2121 + (-7896)"
    },
    {
     "q": "(-5) + 7"
    },
    {
     "q": "(-8) + 6"
    },
    {
     "q": "(-4) + 6"
    },
    {
     "q": "(-1) + 8"
    },
    {
     "q": "(-3) + 9"
    },
    {
     "q": "(-44) + 4"
    },
    {
     "q": "(-10) + 9"
    },
    {
     "q": "(-87) + 8"
    },
    {
     "q": "(-17) + 71"
    },
    {
     "q": "(-99) + 98"
    },
    {
     "q": "(-202) + 2"
    },
    {
     "q": "(-453) + 4"
    },
    {
     "q": "(-256) + 65"
    },
    {
     "q": "(-878) + 78"
    },
    {
     "q": "(-546) + 689"
    },
    {
     "q": "(-979) + 799"
    },
    {
     "q": "(-2010) + 7"
    },
    {
     "q": "(-1028) + 82"
    },
    {
     "q": "(-1177) + 771"
    },
    {
     "q": "(-8765) + 6789"
    },
    {
     "q": "7/2 + (-9/2)"
    },
    {
     "q": "8/3 + (-14/3)"
    },
    {
     "q": "5/4 + (-7/4)"
    },
    {
     "q": "2/5 + (-6/5)"
    },
    {
     "q": "1/6 + (-11/6)"
    },
    {
     "q": "4/7 + (-9/7)"
    },
    {
     "q": "1/8 + (-11/8)"
    },
    {
     "q": "7/9 + (-11/9)"
    },
    {
     "q": "1/10 + (-7/10)"
    },
    {
     "q": "9/11 + (-12/11)"
    },
    {
     "q": "(-7/2) + 9/2"
    },
    {
     "q": "(-1/3) + 8/3"
    },
    {
     "q": "(-5/4) + 9/4"
    },
    {
     "q": "(-1/5) + 2/5"
    },
    {
     "q": "(-7/6) + 11/6"
    }
   ],
   "ordered": true,
   "examples": [
    "9 + (-4)",
    "348 + (-56)",
    "(-6) + 2",
    "(-325) + 47",
    "3/5 + (-8/5)",
    "(-5/8) + 13/8"
   ]
  },
  {
   "n": 4,
   "title": "ADDING INTEGERS",
   "concept": "Add these integers using the rules and properties you learned before.",
   "example": "1) 8 + 4 = 12",
   "instruction": "Add the following integers.",
   "items": [
    {
     "q": "5 + 4"
    },
    {
     "q": "7 + (-8)"
    },
    {
     "q": "(-7) + 2"
    },
    {
     "q": "6 + (-1)"
    },
    {
     "q": "4 + 2"
    },
    {
     "q": "3 + (-2)"
    },
    {
     "q": "(-7) + (-1)"
    },
    {
     "q": "8 + (-5)"
    },
    {
     "q": "(-5) + (-2)"
    },
    {
     "q": "6 + 6"
    },
    {
     "q": "1 + (-9)"
    },
    {
     "q": "(-5) + (-3)"
    },
    {
     "q": "(-2) + (-7)"
    },
    {
     "q": "8 + 5"
    },
    {
     "q": "(-8) + 3"
    },
    {
     "q": "1 + (-6)"
    },
    {
     "q": "(-5) + 5"
    },
    {
     "q": "2 + 7"
    },
    {
     "q": "(-6) + (-9)"
    },
    {
     "q": "4 + (-4)"
    },
    {
     "q": "1 + (-2)"
    },
    {
     "q": "2 + 3"
    },
    {
     "q": "3 + (-4)"
    },
    {
     "q": "(-4) + (-5)"
    },
    {
     "q": "(-5) + 6"
    },
    {
     "q": "(-6) + (-7)"
    },
    {
     "q": "(-7) + 8"
    },
    {
     "q": "8 + 9"
    },
    {
     "q": "9 + 3"
    },
    {
     "q": "7 + (-3)"
    },
    {
     "q": "(-21) + 20"
    },
    {
     "q": "(-99) + (-32)"
    },
    {
     "q": "(-13) + 24"
    },
    {
     "q": "45 + (-46)"
    },
    {
     "q": "23 + 19"
    },
    {
     "q": "27 + (-34)"
    },
    {
     "q": "(-26) + (-20)"
    },
    {
     "q": "14 + (-56)"
    },
    {
     "q": "(-19) + (-13)"
    },
    {
     "q": "33 + (-22)"
    },
    {
     "q": "(-50) + 30"
    },
    {
     "q": "22 + 44"
    },
    {
     "q": "(-71) + (-79)"
    },
    {
     "q": "38 + 28"
    },
    {
     "q": "55 + (-5)"
    },
    {
     "q": "10 + (-10)"
    },
    {
     "q": "10 + 10"
    },
    {
     "q": "(-10) + (-10)"
    },
    {
     "q": "(-10) + 10"
    },
    {
     "q": "(-100) + 100"
    }
   ],
   "examples": [
    "7 + 5",
    "9 + (-4)",
    "(-9) + 4",
    "(-4) + (-8)",
    "36 + (-48)",
    "(-62) + (-25)"
   ]
  },
  {
   "n": 5,
   "title": "SUBTRACTING TWO POSITIVE INTEGERS",
   "concept": "SUBTRACTING TWO POSITIVE INTEGERS: To find the difference between two positive integers, 1. add the negative of the subtrahend to the minuend, 2. then proceed to the addition of integers. In 6 - 4, Minuend: 6, Subtrahend: 4, Negative of Subtrahend: -4. So, 6 - 4 = 6 + (-4) = 2.",
   "example": "1) 21 - 15 = 21 + (-15) = 6",
   "instruction": "Write the process shown in the infobox in the first column. Then, on the 2nd column, write the final answer. (items 1-20). Write only the answer in the following items. (items 21-30)",
   "items": [
    {
     "q": "9 - 1",
     "a": "9 + (-1)",
     "type": "key"
    },
    {
     "q": "8 - 5",
     "a": "8 + (-5)",
     "type": "key"
    },
    {
     "q": "4 - 7",
     "a": "4 + (-7)",
     "type": "key"
    },
    {
     "q": "15 - 8",
     "a": "15 + (-8)",
     "type": "key"
    },
    {
     "q": "76 - 26",
     "a": "76 + (-26)",
     "type": "key"
    },
    {
     "q": "9 - 1"
    },
    {
     "q": "8 - 5"
    },
    {
     "q": "4 - 7"
    },
    {
     "q": "15 - 8"
    },
    {
     "q": "76 - 26"
    },
    {
     "q": "2 - 101",
     "a": "2 + (-101)",
     "type": "key"
    },
    {
     "q": "14 - 115",
     "a": "14 + (-115)",
     "type": "key"
    },
    {
     "q": "500 - 119",
     "a": "500 + (-119)",
     "type": "key"
    },
    {
     "q": "6 - 1006",
     "a": "6 + (-1006)",
     "type": "key"
    },
    {
     "q": "202 - 2020",
     "a": "202 + (-2020)",
     "type": "key"
    },
    {
     "q": "2 - 101"
    },
    {
     "q": "14 - 115"
    },
    {
     "q": "500 - 119"
    },
    {
     "q": "6 - 1006"
    },
    {
     "q": "202 - 2020"
    },
    {
     "q": "6 - 3"
    },
    {
     "q": "1 - 9"
    },
    {
     "q": "26 - 7",
     "a": "20",
     "type": "key"
    },
    {
     "q": "6 - 35"
    },
    {
     "q": "13 - 86"
    },
    {
     "q": "207 - 5",
     "a": "-2",
     "type": "key"
    },
    {
     "q": "304 - 17"
    },
    {
     "q": "600 - 908"
    },
    {
     "q": "2010 - 10"
    },
    {
     "q": "4196 - 7000"
    }
   ],
   "ordered": true,
   "examples": [
    "7 - 2",
    "3 - 8",
    "24 - 9",
    "18 - 52",
    "403 - 125",
    "305 - 1200"
   ]
  },
  {
   "n": 9,
   "title": "Subtracting Integers",
   "concept": "Subtract these integers using the rules and properties you learned before.",
   "example": "9 - (-6) = 9 + (+6) = 15",
   "instruction": "Subtract the following integers:",
   "items": [
    {
     "q": "5 - 8"
    },
    {
     "q": "3 - (-2)"
    },
    {
     "q": "6 - (-1)"
    },
    {
     "q": "(-4) - 9"
    },
    {
     "q": "2 - (-1)"
    },
    {
     "q": "(-4) - (-6)"
    },
    {
     "q": "6 - (-5)"
    },
    {
     "q": "9 - 9"
    },
    {
     "q": "(-3) - 8"
    },
    {
     "q": "(-7) - (-7)"
    },
    {
     "q": "6 - 6"
    },
    {
     "q": "(-6) - (-6)"
    },
    {
     "q": "(-6) - 6"
    },
    {
     "q": "6 - (-7)"
    },
    {
     "q": "(-7) - (-6)"
    },
    {
     "q": "6 - (-6)"
    },
    {
     "q": "6 - 7"
    },
    {
     "q": "7 - 6"
    },
    {
     "q": "(-8) - 8"
    },
    {
     "q": "4 - (-5)"
    },
    {
     "q": "3 - (-7)"
    },
    {
     "q": "5 - (-3)"
    },
    {
     "q": "(-6) - (-4)"
    },
    {
     "q": "1 - (-8)"
    },
    {
     "q": "9 - 6"
    },
    {
     "q": "(-6) - (-3)"
    },
    {
     "q": "2 - (-1)"
    },
    {
     "q": "(-5) - 6"
    },
    {
     "q": "(-9) - (-5)"
    },
    {
     "q": "3 - (-8)"
    },
    {
     "q": "76 - (-75)"
    },
    {
     "q": "12 - (-23)"
    },
    {
     "q": "(-80) - (-50)"
    },
    {
     "q": "(-26) - 56"
    },
    {
     "q": "(-21) - (-67)"
    },
    {
     "q": "45 - 54"
    },
    {
     "q": "(-18) - 78"
    },
    {
     "q": "55 - (-97)"
    },
    {
     "q": "12 - (-56)"
    },
    {
     "q": "(-13) - (-14)"
    },
    {
     "q": "(-90) - (-70)"
    },
    {
     "q": "66 - (-94)"
    },
    {
     "q": "45 - (-76)"
    },
    {
     "q": "(-21) - (-98)"
    },
    {
     "q": "(-67) - 27"
    },
    {
     "q": "67 - 98"
    },
    {
     "q": "98 - 67"
    },
    {
     "q": "(-67) - 98"
    },
    {
     "q": "67 - (-98)"
    },
    {
     "q": "(-67) - (-98)"
    }
   ],
   "examples": [
    "4 - 9",
    "8 - (-3)",
    "(-5) - 7",
    "(-9) - (-2)",
    "34 - (-29)",
    "(-52) - (-85)"
   ]
  },
  {
   "n": 10,
   "title": "Multiplying Two Positive Integers; Multiplying Two Positive Fractions",
   "concept": "Multiplying Two Positive Integers - Remember: The product of two integers with the same sign is POSITIVE and the product of two integers with different signs is NEGATIVE. To find the product of two positive integers, multiply the numbers. The resulting product has a positive sign. Multiplying Two Positive Fractions - Remember: The product of two fractions with the same sign is POSITIVE and the product of two integers with different signs is NEGATIVE. To find the product of two positive fractions, multiply the numerators then multiply the denominators. Simplify. The resulting product has a positive sign.",
   "example": "6 x 7 = 42",
   "instruction": "Multiply the following integers: (nos. 1-20) / Multiply the following fractions. (nos. 21-40)",
   "items": [
    {
     "q": "1 * 9"
    },
    {
     "q": "6 * 6"
    },
    {
     "q": "7 * 8"
    },
    {
     "q": "9 * 4"
    },
    {
     "q": "2 * 7"
    },
    {
     "q": "4 * 8"
    },
    {
     "q": "7 * 7"
    },
    {
     "q": "9 * 6"
    },
    {
     "q": "3 * 8"
    },
    {
     "q": "9 * 3"
    },
    {
     "q": "73 * 2"
    },
    {
     "q": "18 * 3"
    },
    {
     "q": "81 * 9"
    },
    {
     "q": "27 * 5"
    },
    {
     "q": "30 * 6"
    },
    {
     "q": "170 * 2"
    },
    {
     "q": "300 * 4"
    },
    {
     "q": "18 * 17"
    },
    {
     "q": "20 * 10"
    },
    {
     "q": "1010 * 4"
    },
    {
     "q": "1/2 * 3/2"
    },
    {
     "q": "3/4 * 2/5"
    },
    {
     "q": "1/8 * 5/3"
    },
    {
     "q": "8/9 * 3/2"
    },
    {
     "q": "1/10 * 3/5"
    },
    {
     "q": "2/5 * 6/5"
    },
    {
     "q": "2/7 * 9/2"
    },
    {
     "q": "1/9 * 4/7"
    },
    {
     "q": "9/2 * 4/5"
    },
    {
     "q": "3/8 * 5/3"
    },
    {
     "q": "1/11 * 12/5"
    },
    {
     "q": "12/7 * 1/2"
    },
    {
     "q": "1/9 * 8/5"
    },
    {
     "q": "11/12 * 1/4"
    },
    {
     "q": "22/7 * 1/3"
    },
    {
     "q": "2/5 * 7/3"
    },
    {
     "q": "9/4 * 10/3"
    },
    {
     "q": "11/8 * 9/2"
    },
    {
     "q": "12/7 * 1/7"
    },
    {
     "q": "11/9 * 9/11"
    }
   ],
   "ordered": true,
   "examples": [
    "3 * 7",
    "8 * 5",
    "15 * 14",
    "2/3 * 5/4",
    "7/10 * 5/3",
    "13/6 * 3/4"
   ]
  },
  {
   "n": 11,
   "title": "Multiplying Two Negative Integers; Multiplying Two Negative Fractions",
   "concept": "Multiplying Two Negative Integers - To find the product of two negative integers, multiply the numbers. Since the two integers have the same sign, the resulting product has a positive sign. Multiplying Two Negative Fractions - To find the product of two negative fractions, multiply the numerators then multiply the denominators. Simplify. Since the two fractions have the same sign, the resulting product has a positive sign.",
   "example": "(-2) x (-7) = 14",
   "instruction": "Multiply the following integers: (nos. 1-25) / Multiply the following fractions. (nos. 26-45)",
   "items": [
    {
     "q": "(-2) * (-3)"
    },
    {
     "q": "(-9) * (-7)"
    },
    {
     "q": "(-1) * (-6)"
    },
    {
     "q": "(-2) * (-8)"
    },
    {
     "q": "(-4) * (-7)"
    },
    {
     "q": "(-5) * (-9)"
    },
    {
     "q": "(-3) * (-5)"
    },
    {
     "q": "(-6) * (-4)"
    },
    {
     "q": "(-9) * (-9)"
    },
    {
     "q": "(-1) * (-1)"
    },
    {
     "q": "(-21) * (-8)"
    },
    {
     "q": "(-44) * (-4)"
    },
    {
     "q": "(-16) * (-8)"
    },
    {
     "q": "(-50) * (-5)"
    },
    {
     "q": "(-17) * (-7)"
    },
    {
     "q": "(-181) * (-3)"
    },
    {
     "q": "(-900) * (-4)"
    },
    {
     "q": "(-12) * (-13)"
    },
    {
     "q": "(-15) * (-15)"
    },
    {
     "q": "(-2010) * (-8)"
    },
    {
     "q": "(-15) * (-8)"
    },
    {
     "q": "(-44) * (-11)"
    },
    {
     "q": "(-16) * (-9)"
    },
    {
     "q": "(-30) * (-5)"
    },
    {
     "q": "(-27) * (-7)"
    },
    {
     "q": "(-11/2) * (-3/4)"
    },
    {
     "q": "(-3/4) * (-2/5)"
    },
    {
     "q": "(-1/8) * (-5/3)"
    },
    {
     "q": "(-8/9) * (-3/2)"
    },
    {
     "q": "(-3/10) * (-3/2)"
    },
    {
     "q": "(-12/5) * (-6/5)"
    },
    {
     "q": "(-9/7) * (9/4)"
    },
    {
     "q": "(-1/19) * (-3/2)"
    },
    {
     "q": "(-7/2) * (-4/3)"
    },
    {
     "q": "(-13/8) * (-5/4)"
    },
    {
     "q": "(-1/11) * (-2/10)"
    },
    {
     "q": "(-22/3) * (-1/11)"
    },
    {
     "q": "(-5/9) * (-8/15)"
    },
    {
     "q": "(-7/12) * (-1/5)"
    },
    {
     "q": "(-2/7) * (-11/4)"
    },
    {
     "q": "(-2/5) * (-17/3)"
    },
    {
     "q": "(-9/4) * (-10/7)"
    },
    {
     "q": "(-1/8) * (-9/2)"
    },
    {
     "q": "(-12/7) * (-1/7)"
    },
    {
     "q": "(-1/19) * (-19/2)"
    }
   ],
   "ordered": true,
   "examples": [
    "(-3) * (-8)",
    "(-7) * (-6)",
    "(-23) * (-9)",
    "(-5/6) * (-3/4)",
    "(-7/3) * (-9/14)",
    "(-2/9) * (-15/4)"
   ]
  },
  {
   "n": 12,
   "title": "Multiplying Two Integers with Different Signs; Multiplying Fractions with Different Signs",
   "concept": "Multiplying Two Integers with Different Signs - To find the product of two integers with different signs, multiply the numbers. Since the two integers have different signs, the resulting product has a negative sign. Multiplying Fractions with Different Signs - To find the product of two fractions with different signs, multiply the numerators then multiply the denominators. Simplify. Since the two fractions have different signs, affix the negative sign in the product.",
   "example": "(-2) x 9 = -18",
   "instruction": "Multiply the following integers: (nos. 1-25) / Multiply the following fractions. (nos. 26-35) / Let's try harder... Multiply the three integers. (nos. 36-50)",
   "items": [
    {
     "q": "8 * (-6)"
    },
    {
     "q": "7 * (-6)"
    },
    {
     "q": "6 * (-9)"
    },
    {
     "q": "2 * (-5)"
    },
    {
     "q": "3 * (-2)"
    },
    {
     "q": "(-9) * 9"
    },
    {
     "q": "(-8) * 8"
    },
    {
     "q": "(-2) * 7"
    },
    {
     "q": "(-5) * 5"
    },
    {
     "q": "(-6) * 3"
    },
    {
     "q": "14 * (-7)"
    },
    {
     "q": "17 * (-8)"
    },
    {
     "q": "25 * (-4)"
    },
    {
     "q": "30 * (-3)"
    },
    {
     "q": "18 * (-5)"
    },
    {
     "q": "(-150) * 8"
    },
    {
     "q": "(-200) * 5"
    },
    {
     "q": "(-16) * 10"
    },
    {
     "q": "(-22) * 12"
    },
    {
     "q": "(-1024) * 8"
    },
    {
     "q": "15 * (-3)"
    },
    {
     "q": "25 * (-5)"
    },
    {
     "q": "(-150) * 4"
    },
    {
     "q": "(-205) * 5"
    },
    {
     "q": "(-106) * 10"
    },
    {
     "q": "1/2 * (-12/7)"
    },
    {
     "q": "2/7 * (-11/2)"
    },
    {
     "q": "1/9 * (-18/5)"
    },
    {
     "q": "5/12 * (-1/4)"
    },
    {
     "q": "8/7 * (-16/3)"
    },
    {
     "q": "2/5 * (-7/13)"
    },
    {
     "q": "9/14 * (-10/3)"
    },
    {
     "q": "1/8 * (-9/2)"
    },
    {
     "q": "12/7 * (-1/6)"
    },
    {
     "q": "1/9 * (-9/23)"
    },
    {
     "q": "1 * 2 * 3"
    },
    {
     "q": "4 * 5 * 6"
    },
    {
     "q": "7 * 8 * 9"
    },
    {
     "q": "2 * 7 * 8"
    },
    {
     "q": "6 * 9 * 7"
    },
    {
     "q": "3 * 2 * 11"
    },
    {
     "q": "7 * 8 * 19"
    },
    {
     "q": "1 * 5 * 20"
    },
    {
     "q": "2 * 4 * 25"
    },
    {
     "q": "3 * 12 * 12"
    },
    {
     "q": "(-4) * 10 * 25"
    },
    {
     "q": "9 * (-11) * (-11)"
    },
    {
     "q": "(-10) * (-11) * (-12)"
    },
    {
     "q": "20 * 30 * (-40)"
    },
    {
     "q": "21 * (-12) * 12"
    }
   ],
   "ordered": true,
   "examples": [
    "9 * (-4)",
    "(-7) * 6",
    "(-24) * 15",
    "3/4 * (-8/9)",
    "7/10 * (-5/14)",
    "(-5) * 6 * (-7)"
   ]
  },
  {
   "n": 13,
   "title": "Multiplying Integers",
   "concept": "Multiply these integers using the rules and properties you learned before. Please take note of the sign of your answer.",
   "example": "1 x 3 = 3",
   "instruction": "Multiply the following integers.",
   "items": [
    {
     "q": "(-1) * (-1)"
    },
    {
     "q": "(-7) * 5"
    },
    {
     "q": "2 * (-9)"
    },
    {
     "q": "3 * 3"
    },
    {
     "q": "5 * 8"
    },
    {
     "q": "(-8) * 9"
    },
    {
     "q": "9 * (-1)"
    },
    {
     "q": "(-5) * (-5)"
    },
    {
     "q": "2 * (-7)"
    },
    {
     "q": "7 * (-7)"
    },
    {
     "q": "(-5) * 4"
    },
    {
     "q": "(-2) * (-2)"
    },
    {
     "q": "5 * (-1)"
    },
    {
     "q": "(-9) * (-9)"
    },
    {
     "q": "9 * 9"
    },
    {
     "q": "9 * (-9)"
    },
    {
     "q": "7 * (-8)"
    },
    {
     "q": "(-4) * 8"
    },
    {
     "q": "2 * 5"
    },
    {
     "q": "(-6) * 3"
    }
   ],
   "examples": [
    "(-3) * (-8)",
    "6 * (-4)",
    "(-9) * 4",
    "4 * 7",
    "(-6) * (-7)",
    "8 * (-3)"
   ]
  },
  {
   "n": 14,
   "title": "Division of Two Positive Integers; Division of Two Negative Integers",
   "concept": "Division of Two Positive Integers - Remember: The quotient of two integers with the same sign is POSITIVE and the product of two integers with different signs is NEGATIVE. To find the quotient of two positive integers, divide the numbers. The resulting quotient has a positive sign. Division of Two Negative Integers - To find the quotient of two negative integers, divide the numbers. Since the two integers have the same sign, the resulting quotient has a positive sign.",
   "example": "3 ÷ 1 = 3",
   "instruction": "Divide the following integers. (nos. 1-20 positive; nos. 21-50)",
   "items": [
    {
     "q": "15 / 5"
    },
    {
     "q": "45 / 9"
    },
    {
     "q": "72 / 6"
    },
    {
     "q": "81 / 3"
    },
    {
     "q": "99 / 3"
    },
    {
     "q": "45 / 15"
    },
    {
     "q": "99 / 11"
    },
    {
     "q": "51 / 17"
    },
    {
     "q": "108 / 9"
    },
    {
     "q": "140 / 7"
    },
    {
     "q": "300 / 6"
    },
    {
     "q": "729 / 9"
    },
    {
     "q": "625 / 25"
    },
    {
     "q": "400 / 25"
    },
    {
     "q": "360 / 15"
    },
    {
     "q": "18 / 3"
    },
    {
     "q": "20 / 4"
    },
    {
     "q": "28 / 7"
    },
    {
     "q": "32 / 4"
    },
    {
     "q": "42 / 6"
    },
    {
     "q": "(-40) / (-4)"
    },
    {
     "q": "(-126) / (-6)"
    },
    {
     "q": "(-18) / (-9)"
    },
    {
     "q": "(-540) / (-10)"
    },
    {
     "q": "(-88) / (-11)"
    },
    {
     "q": "(-80) / (-4)"
    },
    {
     "q": "(-96) / (-6)"
    },
    {
     "q": "(-18) / (-3)"
    },
    {
     "q": "(-54) / (-9)"
    },
    {
     "q": "(-88) / (-8)"
    },
    {
     "q": "(-32) / (-16)"
    },
    {
     "q": "(-64) / (-16)"
    },
    {
     "q": "(-72) / (-24)"
    },
    {
     "q": "(-105) / (-7)"
    },
    {
     "q": "(-125) / (-5)"
    },
    {
     "q": "(-726) / (-6)"
    },
    {
     "q": "(-909) / (-9)"
    },
    {
     "q": "(-165) / (-15)"
    },
    {
     "q": "(-990) / (-22)"
    },
    {
     "q": "(-180) / (-12)"
    },
    {
     "q": "(-60) / 12"
    },
    {
     "q": "(-51) / 3"
    },
    {
     "q": "(-22) / 11"
    },
    {
     "q": "(-95) / 19"
    },
    {
     "q": "(-74) / 2"
    },
    {
     "q": "34 / (-17)"
    },
    {
     "q": "56 / (-7)"
    },
    {
     "q": "63 / (-9)"
    },
    {
     "q": "64 / (-8)"
    },
    {
     "q": "70 / (-2)"
    }
   ],
   "ordered": true,
   "examples": [
    "56 / 8",
    "144 / 12",
    "480 / 16",
    "(-84) / (-7)",
    "(-336) / (-14)",
    "(-96) / 8"
   ]
  },
  {
   "n": 15,
   "title": "Division of Two Integers with Different Signs",
   "concept": "Division of Two Integers with Different Signs - To find the quotient of two integers with different signs, divide the numbers. Since the two integers have different signs, the resulting quotient has a negative sign.",
   "example": "10 ÷ (-2) = -5",
   "instruction": "Divide the following integers.",
   "items": [
    {
     "q": "34 / (-2)"
    },
    {
     "q": "84 / (-3)"
    },
    {
     "q": "49 / (-7)"
    },
    {
     "q": "48 / (-6)"
    },
    {
     "q": "56 / (-7)"
    },
    {
     "q": "40 / (-20)"
    },
    {
     "q": "68 / (-17)"
    },
    {
     "q": "95 / (-19)"
    },
    {
     "q": "75 / (-15)"
    },
    {
     "q": "84 / (-42)"
    },
    {
     "q": "(-115) / 5"
    },
    {
     "q": "(-189) / 9"
    },
    {
     "q": "(-154) / 7"
    },
    {
     "q": "(-104) / 8"
    },
    {
     "q": "(-102) / 6"
    },
    {
     "q": "(-132) / 12"
    },
    {
     "q": "(-242) / 22"
    },
    {
     "q": "(-484) / 22"
    },
    {
     "q": "(-162) / 18"
    },
    {
     "q": "(-310) / 31"
    }
   ],
   "examples": [
    "72 / (-8)",
    "96 / (-24)",
    "78 / (-13)",
    "(-126) / 6",
    "(-275) / 25",
    "(-128) / 16"
   ]
  },
  {
   "n": 16,
   "title": "Dividing Integers",
   "concept": "Divide these integers using the rules and properties you learned before. Please take note of the sign of your answer.",
   "example": "9 ÷ 3 = 3",
   "instruction": "Divide these integers using the rules and properties you learned before. Please take note of the sign of your answer. (The black sub-instruction banner is printed as 'Multiply the following integers.' which is a typo - this is a division worksheet.)",
   "items": [
    {
     "q": "4 / (-2)"
    },
    {
     "q": "9 / (-3)"
    },
    {
     "q": "(-6) / (-6)"
    },
    {
     "q": "(-8) / 4"
    },
    {
     "q": "(-10) / (-5)"
    },
    {
     "q": "6 / (-3)"
    },
    {
     "q": "(-2) / 1"
    },
    {
     "q": "3 / 3"
    },
    {
     "q": "(-7) / 1"
    },
    {
     "q": "(-7) / (-1)"
    },
    {
     "q": "(-5) / (-5)"
    },
    {
     "q": "8 / (-4)"
    },
    {
     "q": "9 / (-9)"
    },
    {
     "q": "6 / (-1)"
    },
    {
     "q": "(-6) / (-2)"
    },
    {
     "q": "6 / 2"
    },
    {
     "q": "(-6) / 2"
    },
    {
     "q": "6 / (-2)"
    },
    {
     "q": "7 / (-7)"
    },
    {
     "q": "(-9) / 3"
    },
    {
     "q": "12 / 3"
    },
    {
     "q": "16 / (-4)"
    },
    {
     "q": "(-20) / 5"
    },
    {
     "q": "(-18) / (-6)"
    },
    {
     "q": "16 / 2"
    },
    {
     "q": "54 / (-9)"
    },
    {
     "q": "17 / (-1)"
    },
    {
     "q": "(-49) / 7"
    },
    {
     "q": "(-51) / (-3)"
    },
    {
     "q": "35 / (-7)"
    },
    {
     "q": "22 / (-11)"
    },
    {
     "q": "34 / (-17)"
    },
    {
     "q": "60 / (-15)"
    },
    {
     "q": "(-75) / (-25)"
    },
    {
     "q": "(-96) / 6"
    },
    {
     "q": "(-20) / (-10)"
    },
    {
     "q": "55 / (-11)"
    },
    {
     "q": "(-72) / (-12)"
    },
    {
     "q": "81 / 27"
    },
    {
     "q": "48 / (-16)"
    },
    {
     "q": "100 / (-20)"
    },
    {
     "q": "(-120) / 30"
    },
    {
     "q": "(-116) / 29"
    },
    {
     "q": "(-200) / (-50)"
    },
    {
     "q": "180 / (-18)"
    },
    {
     "q": "(-108) / 27"
    },
    {
     "q": "300 / (-75)"
    },
    {
     "q": "(-500) / 50"
    },
    {
     "q": "(-1000) / (-100)"
    },
    {
     "q": "(-2010) / 2010"
    }
   ],
   "examples": [
    "10 / (-2)",
    "(-12) / (-4)",
    "(-45) / 9",
    "64 / (-8)",
    "(-144) / 12",
    "(-800) / (-40)"
   ]
  },
  {
   "n": 17,
   "title": "Performing Series of Operations Involving Fractions and Integers",
   "concept": "Given equations with decimals and fractions combined, we simply change all the decimals to fractions and perform the operation. ex. 3/4 + 0.5 — Step 1: Change decimals to fractions in its lowest term. Step 2: Perform the indicated operation. *Remember, change dissimilar to similar fractions first before solving. Step 3: Simplify your answer. *Final answers should always be in either mixed numbers or proper fractions and in lowest form.",
   "example": "3/4 + 0.5 = 3/4 + 1/2 = 3/4 + 2/4 = 6/4 = 1 2/4 = 1 1/2",
   "instruction": "Add/subtract the following decimals and fractions. Show your solutions.",
   "items": [
    {
     "q": "0.8 + 2/3"
    },
    {
     "q": "3.5 + 1/20"
    },
    {
     "q": "6.96 + 2/5"
    },
    {
     "q": "17/20 + 9.8"
    },
    {
     "q": "2.5 - 14/10"
    },
    {
     "q": "12 17/20 - 8.6"
    },
    {
     "q": "3.9 - 10/16"
    },
    {
     "q": "4 2/15 - 2.4"
    },
    {
     "q": "7.25 - 3 8/24"
    },
    {
     "q": "9 7/12 - 1.45"
    },
    {
     "q": "7 8/15 - 2.33"
    },
    {
     "q": "9 17/25 - 3.28"
    },
    {
     "q": "2.79 - 35/21"
    },
    {
     "q": "8.63 - 2 8/19"
    },
    {
     "q": "7 9/15 - 3.28"
    },
    {
     "q": "6.23 + 8 21/111"
    },
    {
     "q": "28 11/27 + 16.35"
    },
    {
     "q": "9 7/42 - 8.15"
    },
    {
     "q": "13.201 - 6 2/7"
    },
    {
     "q": "16 35/78 + 12.39"
    },
    {
     "q": "17.69 - 15 18/94"
    },
    {
     "q": "89.76 + 43/92"
    },
    {
     "q": "10.21 - 9 34/76"
    },
    {
     "q": "15/13 + 0.75"
    }
   ],
   "examples": [
    "0.6 + 3/4",
    "2.5 + 7/20",
    "13/20 + 4.8",
    "3.5 - 12/10",
    "11 13/20 - 7.4",
    "5 7/12 - 2.25"
   ]
  },
  {
   "n": 18,
   "title": "Multiplying Decimals and Fractions",
   "concept": "To multiply fractions and decimals, follow these steps: 1) Change decimals to fractions in lowest term. 2) Change mixed numbers to improper fractions. 3) Multiply. 4) Final answer should always be in either mixed numbers or proper fractions and in lowest terms.",
   "example": "3 1/2 x 5.2 = 3 1/2 x 5 1/5 = 7/2 x 26/5 = 182/10 = 18 2/10 = 18 1/5",
   "instruction": "Multiply the following. Show your solution on the provided space.",
   "items": [
    {
     "q": "1/2 * 0.75"
    },
    {
     "q": "4/5 * 1.2"
    },
    {
     "q": "2/7 * 2.7"
    },
    {
     "q": "6/7 * 9.1"
    },
    {
     "q": "1 2/3 * 1.25"
    },
    {
     "q": "2 1/2 * 7.6"
    },
    {
     "q": "1 1/4 * 8.25"
    },
    {
     "q": "6 3/7 * 0.5"
    }
   ],
   "examples": [
    "3/4 * 0.5",
    "2/3 * 1.5",
    "5/8 * 2.4",
    "4/9 * 6.3",
    "1 3/4 * 1.6",
    "3 1/3 * 2.4"
   ]
  },
  {
   "n": 19,
   "title": "Dividing Decimals and Fractions",
   "concept": "To divide fractions and decimals, follow these steps: 1) Change decimals to fractions in lowest terms. 2) Change mixed numbers to improper fractions. 3) Divide. 4) Final answer should always be in either mixed numbers or proper fractions and in lowest terms.",
   "example": "2 1/4 ÷ 0.4 = 2 1/4 ÷ 2/5 = 9/4 ÷ 2/5 = 9/4 x 5/2 = 45/8 = 5 5/8",
   "instruction": "Divide the following. Show your solution on the provided space.",
   "items": [
    {
     "q": "3/4 / 1.8"
    },
    {
     "q": "6.3 / 3.5"
    },
    {
     "q": "9/10 / 1.2"
    },
    {
     "q": "15/7 / 5.1"
    },
    {
     "q": "1 2/3 / (6/7)"
    },
    {
     "q": "2 1/2 / 0.25"
    },
    {
     "q": "1 1/6 / 0.2"
    },
    {
     "q": "2 1/3 / 9.2"
    }
   ],
   "examples": [
    "2/5 / 1.5",
    "8.4 / 2.8",
    "12/5 / 1.6",
    "1 1/4 / (5/8)",
    "3 1/2 / 0.75",
    "2 1/5 / 0.4"
   ]
  },
  {
   "n": 20,
   "title": "Performing Operations Involving Three Fractions and Decimals",
   "concept": "To perform operations like this, follow these rules: 1) Perform the operation continuously and as it appears (if the involved operations are addition and subtraction only). 2) BUT if you see a multiplication operation, solve it first then proceed to the other operations.",
   "example": "2.5 + 4 1/2 - 1.9 = 2 1/2 + 4 1/2 - 1 9/10 = 7 - 1 9/10 = 6 10/10 - 1 9/10 = 5 1/10",
   "instruction": "Perform the indicated operations. Show your solution.",
   "items": [
    {
     "q": "1/2 + 7.5 - 3/4"
    },
    {
     "q": "5 3/4 + 0.5 - 1.2"
    },
    {
     "q": "7.2 + 0.9 - 4/9"
    },
    {
     "q": "10.5 + 1/2 - 5/2"
    },
    {
     "q": "6.1 - 1/10 + 0.5"
    },
    {
     "q": "5.5 - 7/5 + 0.4"
    },
    {
     "q": "6.8 - 14/5 + 7/5"
    },
    {
     "q": "4.2 - 9/4 + 2.2"
    },
    {
     "q": "9.4 + 3/5 * 1/2"
    },
    {
     "q": "13/2 + 2.5 * 1.2"
    },
    {
     "q": "1 3/4 + 3/4 * 2.1"
    },
    {
     "q": "8/9 + 1/9 * 6.25"
    }
   ],
   "examples": [
    "1/4 + 6.5 - 1/2",
    "3 1/4 + 0.5 - 1.5",
    "8.4 + 0.6 - 2/5",
    "7.5 - 3/10 + 0.8",
    "7.2 + 2/5 * 1/2",
    "11/2 + 1.5 * 1.4"
   ]
  },
  {
   "n": 21,
   "title": "Performing Operations Involving Three Fractions and Decimals",
   "concept": "To perform operations like this, follow these rules: 1) Perform the operation continuously and as it appears (if the involved operations are addition and subtraction only). 2) BUT if you see a division operation, solve it first then proceed to the other operations.",
   "example": "1 1/4 + 3.5 ÷ 2.1 = 1 1/4 + 3 1/2 ÷ 2 1/10 = 1 1/4 + 7/2 ÷ 21/10 = 1 1/4 + 7/2 x 10/21 = 1 1/4 + 1 2/3 = 1 3/12 + 1 8/12 = 2 11/12",
   "instruction": "Perform the indicated operations. Show your solution.",
   "items": [
    {
     "q": "3/5 - 0.2 / (2/3)"
    },
    {
     "q": "2.75 - 7/2 / 2"
    },
    {
     "q": "2 1/2 - 4/3 / (10/9)"
    },
    {
     "q": "6.1 - 41/10 / 3"
    },
    {
     "q": "1.5 / 3 - 0.4"
    },
    {
     "q": "7.2 / 9 - 0.75"
    },
    {
     "q": "1 5/6 / (5/6) - 0.4"
    },
    {
     "q": "2 3/4 / 1 1/4 - 1/5"
    },
    {
     "q": "0.75 / (10/31) - 17/40"
    },
    {
     "q": "2/5 / (4/15) + 3 1/2"
    },
    {
     "q": "6 1/3 / 1 1/3 + 5/4"
    },
    {
     "q": "1.8 / (4/11) + 7.75"
    },
    {
     "q": "5/2 + 3.4 * 10/3"
    },
    {
     "q": "5.7 + 3/10 * 2.5"
    },
    {
     "q": "10 1/2 + 8/7 * 0.7"
    },
    {
     "q": "9 1/2 + 2.3 / (23/5)"
    },
    {
     "q": "8 1/3 / (5/3) - 4 1/3"
    },
    {
     "q": "5/4 / (5/4) - 1/16"
    },
    {
     "q": "5.9 * 10/3 - 1 2/3"
    },
    {
     "q": "0.85 * 20/7 - 2.0"
    },
    {
     "q": "3 3/4 - 2/5 * 7.5"
    },
    {
     "q": "4.2 - 1/6 / (5/6)"
    },
    {
     "q": "31/4 - 2 1/2 / (2/3)"
    },
    {
     "q": "4 3/4 - 1.8 / (9/5)"
    }
   ],
   "examples": [
    "4/5 - 0.3 / (3/2)",
    "3.25 - 9/2 / 3",
    "2.4 / 6 - 0.15",
    "2 1/4 / (3/4) - 0.5",
    "3/5 / (3/10) + 2 1/4",
    "7/2 + 2.8 * 5/7"
   ]
  },
  {
   "n": 22,
   "title": "Performing Operations Involving Three Fractions and Decimals",
   "concept": "If the involved operations are multiplication and division, perform the operation continuously as it appears.",
   "example": "3/4 x 3.5 ÷ 1/8 = 3/4 x 3 1/2 ÷ 1/8 = 3/4 x 7/2 ÷ 1/8 = 21/8 x 8/1 = 21",
   "instruction": "Perform the indicated operations. Show your solution.",
   "items": [
    {
     "q": "1/2 * 0.4 / 1 1/5"
    },
    {
     "q": "4/7 * 0.25 / 4"
    },
    {
     "q": "1/8 * 21/2 / (5/16)"
    },
    {
     "q": "0.5 * 1 1/2 / 0.7"
    },
    {
     "q": "0.9 * 1 1/9 / 0.001"
    },
    {
     "q": "20/3 * 0.15 / (7/8)"
    },
    {
     "q": "3/2 * 0.25 / 5 1/3"
    },
    {
     "q": "7 1/2 * 0.5 / (3/4)"
    },
    {
     "q": "7/9 * 1 2/7 / 0.7"
    },
    {
     "q": "10/11 * 1.1 / (1/10)"
    },
    {
     "q": "5/8 * 1.6 / (4/9)"
    },
    {
     "q": "2 1/5 / (10/11) * 5.5"
    },
    {
     "q": "0.4 / (7/10) * 1 3/4"
    },
    {
     "q": "2 1/7 / 7.5 * 2/7"
    },
    {
     "q": "4/9 / 1 1/9 * 2.5"
    },
    {
     "q": "0.4 / (3/5) * 1 1/2"
    },
    {
     "q": "5/7 / 1 3/7 * 0.4"
    },
    {
     "q": "8/9 / 2 2/3 * 0.6"
    },
    {
     "q": "20/7 / 1 3/7 * 3.5"
    },
    {
     "q": "21/6 / 6.5 * 12/5"
    },
    {
     "q": "6/5 / 1.2 * 3/4"
    },
    {
     "q": "5/4 / 2.5 * 0.75"
    },
    {
     "q": "3/8 / 0.75 * 1 1/2"
    },
    {
     "q": "24/25 / 2.4 * 2 1/2"
    }
   ],
   "examples": [
    "1/4 * 0.8 / (2/5)",
    "0.5 * 2 1/2 / 0.25",
    "3/5 * 1 2/3 / 0.4",
    "3 1/3 / (5/6) * 1.5",
    "0.6 / (3/4) * 1 1/2",
    "9/8 / 2.25 * 4/5"
   ]
  },
  {
   "n": 23,
   "title": "Performing Operations Involving Four Fractions and Decimals",
   "concept": "To perform operations like this, follow these rules: 1) Perform the operation continuously and as it appears (if the involved operations are addition and subtraction only). 2) BUT if you see a multiplication or division operation, solve it first then proceed to the other operations.",
   "example": "2.5 + 4 1/2 - 1.9 + 1/2 = 2 1/2 + 4 1/2 - 1 9/10 + 1/2 = 2 5/10 + 4 5/10 - 1 9/10 + 5/10 = 6 10/10 - 1 9/10 + 5/10 = 5 1/10 + 5/10 = 5 6/10 = 5 3/5",
   "instruction": "Perform the indicated operations. Show your solution.",
   "items": [
    {
     "q": "7.75 + 1 1/4 + 1.6 - 28/5"
    },
    {
     "q": "3 1/5 + 5.2 + 1.8 * 26/5"
    },
    {
     "q": "1.5 + 2 1/2 + 1/4 * 2.5"
    },
    {
     "q": "3 5/6 + 7/6 + 1.2 * 0.2"
    },
    {
     "q": "4 1/8 + 0.25 + 5/4 * 0.5"
    },
    {
     "q": "4.2 + 1 4/5 - 5 9/10 + 0.9"
    },
    {
     "q": "3.6 + 2 2/5 - 1 5/7 + 19/6"
    },
    {
     "q": "5/8 + 0.25 - 1/8 + 13/4"
    },
    {
     "q": "3 2/3 + 4/3 - 1.25 + 1 1/4"
    },
    {
     "q": "2.1 + 3 1/5 * 2 1/2 + 0.5"
    },
    {
     "q": "4 1/4 + 0.75 * 2.1 + 1 3/4"
    },
    {
     "q": "6 3/4 + 0.25 * 5.0 + 3 5/8"
    },
    {
     "q": "8/5 + 0.4 * 3/5 + 3 7/10"
    },
    {
     "q": "7 1/2 - 3.5 - 5/2 + 9 3/4"
    },
    {
     "q": "5 2/3 - 4.6 - 1/8 + 5.4"
    },
    {
     "q": "2.5 + 11/2 - 0.5 + 24/5"
    },
    {
     "q": "1 9/10 - 0.9 - 9/10 + 4/5"
    },
    {
     "q": "6.7 - 3 7/10 - 24/5 * 0.5"
    },
    {
     "q": "7 1/5 - 11/6 - 0.25 * 2.5"
    },
    {
     "q": "3.5 - 11/5 - 6.0 * 1/5"
    },
    {
     "q": "4 1/2 - 3.75 - 3/20 * 2.5"
    }
   ],
   "examples": [
    "5.25 + 2 1/4 + 1.5 - 16/5",
    "2 1/2 + 4.5 + 1.2 * 15/4",
    "2.5 + 1 1/2 + 3/4 * 1.6",
    "3.8 + 2 1/5 - 4 3/10 + 0.5",
    "6 1/4 + 0.75 * 4.0 + 1 1/2",
    "8.4 - 2 2/5 - 16/5 * 0.5"
   ]
  },
  {
   "n": 24,
   "title": "Performing Operations Involving Four Fractions and Decimals",
   "concept": "",
   "example": "6 5/6 + 2.3 + 4.5 - 4 2/3 = 8 29/30",
   "instruction": "Perform the indicated operations. Show your solution.",
   "items": [
    {
     "q": "6 5/6 + 2.3 + 4.5 - 4 2/3"
    },
    {
     "q": "6.2 + 1.2 + 3 1/3 - 17/2"
    },
    {
     "q": "4 1/5 + 0.8 + 1/10 - 3.1"
    },
    {
     "q": "5 3/4 - 1.75 + 3.5 - 29/4"
    },
    {
     "q": "9.1 - 9/10 + 1 4/5 - 99/10"
    },
    {
     "q": "8.8 - 0.8 + 5/4 - 1 3/4"
    },
    {
     "q": "2.5 - 2 1/4 + 1/10 - 1/8"
    },
    {
     "q": "3.4 - 2 1/2 * 0.5 - 2 1/10"
    },
    {
     "q": "41/5 - 5.2 * 1 1/10 - 7/5"
    },
    {
     "q": "8/5 - 4/5 / (4/5) - 0.4"
    },
    {
     "q": "0.8 - 2/9 / (5/9) - 0.2"
    },
    {
     "q": "1 1/5 * 0.5 * 5.1 + 1 47/50"
    },
    {
     "q": "4.4 * 0.25 * 6 3/5 + 1/25"
    },
    {
     "q": "6/17 / (6/9) / (9/17) + 0.25"
    },
    {
     "q": "5/4 * 1 1/2 * 0.8 + 2.5"
    },
    {
     "q": "3.1 * 0.2 * 25/31 - 0.25"
    },
    {
     "q": "1 2/5 * 5/7 / (6/29) - 14/3"
    },
    {
     "q": "5/9 * 1.8 * 4.5 - 3 1/2"
    },
    {
     "q": "3/4 / (3/4) + 4/5 / (4/5)"
    },
    {
     "q": "2 7/9 * 1.8 + 3 3/4 * 1 1/3"
    },
    {
     "q": "5 2/3 * 3/2 - 4.4 * 5/48"
    },
    {
     "q": "2/7 / (3/5) / (2/7) - 2/3"
    },
    {
     "q": "3 6/7 * 7/9 + 2 8/9 * 4.5"
    },
    {
     "q": "1 4/9 * 9/7 + 0.8 / (7/5)"
    },
    {
     "q": "1 9/11 * 2.4 - 4/7 * 7/12"
    },
    {
     "q": "1.5 / 3 - 7/4 * 1/7"
    },
    {
     "q": "2 4/5 * 5/14 - 3/8 * 1.6"
    }
   ],
   "examples": [
    "5 1/2 + 1.5 + 3.4 - 2 2/5",
    "7.5 - 1 1/4 * 0.8 - 2 1/2",
    "1.2 - 3/8 / (3/4) - 0.4",
    "2 1/2 * 0.4 * 1.5 + 3/4",
    "1 1/3 * 3/4 + 2 1/2 * 1.6",
    "4/5 / (2/5) + 1.5 / (3/4)"
   ]
  },
  {
   "n": 25,
   "title": "Order of Operations",
   "concept": "",
   "example": "(-15) + 43 = 28",
   "instruction": "Perform the indicated operations. / Solve the following. Show your solution.",
   "items": [
    {
     "q": "(-15) + 43"
    },
    {
     "q": "(-84) + (-77)"
    },
    {
     "q": "64 * (-8)"
    },
    {
     "q": "(-41) - 24"
    },
    {
     "q": "(-81) * (-5)"
    },
    {
     "q": "63 / (-7)"
    },
    {
     "q": "50 - 97"
    },
    {
     "q": "44 + 16"
    },
    {
     "q": "79 * (-39)"
    },
    {
     "q": "(-81) / (-6)",
     "fmt": "decimal"
    },
    {
     "q": "(-65) + (-96)"
    },
    {
     "q": "(-14) - 43"
    },
    {
     "q": "31 * 16"
    },
    {
     "q": "(-88) / 8"
    },
    {
     "q": "(-59) + 46"
    },
    {
     "q": "(-9/14) + (-7/28)"
    },
    {
     "q": "(-5/6) / (1/4)"
    },
    {
     "q": "3/4 - (-3/8)"
    },
    {
     "q": "8/7 * (-9/3)"
    },
    {
     "q": "(7/42) / (-9/24)"
    },
    {
     "q": "(-5/7) * (-8/9)"
    },
    {
     "q": "(-3/28) + 3 5/7"
    },
    {
     "q": "(-9/21) - 1 4/35"
    },
    {
     "q": "(-1 2/7) * 2 2/9"
    },
    {
     "q": "4 6/44 / (7 5/8)"
    },
    {
     "q": "9.24 + (-2.59)",
     "fmt": "decimal"
    },
    {
     "q": "(-5.77) - 2.81",
     "fmt": "decimal"
    },
    {
     "q": "(-4.195) - (-5.03)",
     "fmt": "decimal"
    },
    {
     "q": "(-5.25) * (-0.87)",
     "fmt": "decimal"
    },
    {
     "q": "9.65 / (-8)",
     "fmt": "decimal"
    },
    {
     "q": "(-4.83) * 1.23",
     "fmt": "decimal"
    },
    {
     "q": "(-0.57) + (-0.119)",
     "fmt": "decimal"
    },
    {
     "q": "22 - 0.511",
     "fmt": "decimal"
    },
    {
     "q": "(-8.07) / (-7.8)",
     "fmt": "decimal"
    },
    {
     "q": "0.834 + 1.95",
     "fmt": "decimal"
    },
    {
     "q": "0.751 - 0.283",
     "fmt": "decimal"
    },
    {
     "q": "(-7.53) * 33.7",
     "fmt": "decimal"
    },
    {
     "q": "7 - 4 * (2 + 3)"
    },
    {
     "q": "7 * 6 - 9 * (-8) + 5"
    },
    {
     "q": "(9*(-9))/(25*(3-4)) - (-4*(-5+8))/((-8)-2)",
     "fmt": "decimal"
    },
    {
     "q": "(-34) + 60 / 6 - 15"
    },
    {
     "q": "-((-84)/3 - (-72)/8)"
    },
    {
     "q": "-92/(2 + (-6)*3)"
    },
    {
     "q": "35 / (2 - 21) * (-5)"
    },
    {
     "q": "(7*(-4))/6 + 2/(-3)"
    },
    {
     "q": "(30 + (-9)*(-3))/(((-8)+7)*(20-66))"
    }
   ],
   "examples": [
    "(-23) + 58",
    "(-57) * (-4)",
    "(-7/12) + (-5/24)",
    "(-3/8) / (1/6)",
    "8.46 + (-3.27)",
    "9 - 5 * (3 + 4)"
   ]
  },
  {
   "n": 26,
   "title": "Evaluating Exponents & Expressing Numbers in Exponential Notation with a Given Base",
   "concept": "",
   "example": "5^4 = 5 * 5 * 5 * 5 = 625; 3^6 = 729; Write 81 in exponential notation with base 3: 81 = 3*3*3*3 = 3^4; Ex: 16 = 2*2*2*2 = 2^4",
   "instruction": "Evaluate the following exponents. (1-10) Write the following in exponential notation using the given base. (11-20) Evaluate the following. (21-35)",
   "items": [
    {
     "q": "6^4",
     "type": "computable"
    },
    {
     "q": "8^5",
     "type": "computable"
    },
    {
     "q": "10^6",
     "type": "computable"
    },
    {
     "q": "2^8",
     "type": "computable"
    },
    {
     "q": "3^10",
     "type": "computable"
    },
    {
     "q": "5^5",
     "type": "computable"
    },
    {
     "q": "1^7",
     "type": "computable"
    },
    {
     "q": "11^4",
     "type": "computable"
    },
    {
     "q": "12^6",
     "type": "computable"
    },
    {
     "q": "15^5",
     "type": "computable"
    },
    {
     "q": "16, base 2",
     "a": "2^4",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "27, base 3",
     "a": "3^3",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "256, base 4",
     "a": "4^4",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "3125, base 5",
     "a": "5^5",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "100000, base 10",
     "a": "10^5",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "64, base 4",
     "a": "4^3",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "81, base 3",
     "a": "3^4",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "7776, base 6",
     "a": "6^5",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "117649, base 7",
     "a": "7^6",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "531441, base 9",
     "a": "9^6",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "2^4 + 5^3",
     "type": "computable"
    },
    {
     "q": "4^3 + 3^4",
     "type": "computable"
    },
    {
     "q": "3 * 2^3",
     "type": "computable"
    },
    {
     "q": "7^2 - 2^2",
     "type": "computable"
    },
    {
     "q": "8^3 + 4^4",
     "type": "computable"
    },
    {
     "q": "5^2 + 3^2",
     "type": "computable"
    },
    {
     "q": "5^4 * 7^6",
     "type": "computable"
    },
    {
     "q": "2^7 + 4^8",
     "type": "computable"
    },
    {
     "q": "2^8 + 5^7",
     "type": "computable"
    },
    {
     "q": "2^3 + 8^5 - 3^4",
     "type": "computable"
    },
    {
     "q": "4^2 + 3^6 - 2^2",
     "type": "computable"
    },
    {
     "q": "9^3 - 2^5 - 3^2",
     "type": "computable"
    },
    {
     "q": "10^3 + 4^5 - 3^3",
     "type": "computable"
    },
    {
     "q": "4^4 * 3^6 - 8^2",
     "type": "computable"
    },
    {
     "q": "10^2 * 2^5 + 5^5",
     "type": "computable"
    }
   ],
   "examples": [
    "7^4",
    "9^5",
    "5 * 3^2",
    "4^3 + 2^5",
    "6^2 - 3^2",
    "2^5 + 6^4 - 4^3"
   ]
  },
  {
   "n": 27,
   "title": "Laws of Exponents",
   "concept": "When you multiply powers that have the same base, keep the base and add the exponents, because you are just counting how many copies of the base are multiplied together. When you divide powers with the same base, keep the base and subtract the exponents, since the copies on the bottom cancel the ones on top. When a power is raised to another power, keep the base and multiply the exponents. The base never changes, only the exponent does, and if the exponent ends up as 1 you just write the base by itself.",
   "example": "Product Rule: a^m * a^n = a^(m+n), e.g. 5^4 * 5^6 = 5^10; Quotient Rule: a^m / a^n = a^(m-n), e.g. 10^8 / 10^6 = 10^2; Power Rule: (a^m)^n = a^(mn), e.g. (8^5)^2 = 8^10",
   "instruction": "Find the product in exponential form. (1-8) Find the quotient in exponential form. (9-16) Find the answer in exponential form. (17-30)",
   "items": [
    {
     "q": "2^3 * 2^4",
     "a": "2^7",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "3^4 * 3^6",
     "a": "3^10",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "4^5 * 4^7",
     "a": "4^12",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "7^8 * 7^4",
     "a": "7^12",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "9^6 * 9^5",
     "a": "9^11",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "10^5 * 10^6",
     "a": "10^11",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "15^10 * 15^4",
     "a": "15^14",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "25^11 * 25^7",
     "a": "25^18",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "4^8 / 4^6",
     "a": "4^2",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "5^9 / 5^6",
     "a": "5^3",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "8^6 / 8^2",
     "a": "8^4",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "10^9 / 10^6",
     "a": "10^3",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "14^6 / 14^3",
     "a": "14^3",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "9^15 / 9^6",
     "a": "9^9",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "7^6 / 7^2",
     "a": "7^4",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "25^10 / 25^9",
     "a": "25",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(6^5)^2",
     "a": "6^10",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(4^2)^3",
     "a": "4^6",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(8^4)^4",
     "a": "8^16",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(9^4)^6",
     "a": "9^24",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(2^5)^7",
     "a": "2^35",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(5^2)^5",
     "a": "5^10",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(7^2)^9",
     "a": "7^18",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(10^3)^4",
     "a": "10^12",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(12^10)^3",
     "a": "12^30",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(4^8)^9",
     "a": "4^72",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(6^6)^8",
     "a": "6^48",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(12^2)^10",
     "a": "12^20",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(10^10)^10",
     "a": "10^100",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(25^6)^12",
     "a": "25^72",
     "type": "key",
     "vb": true,
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "6^2 * 6^5",
     "steps": [
      "Same base 6, so keep 6 and add the exponents.",
      "2 + 5 = 7"
     ],
     "a": "6^7"
    },
    {
     "q": "12^9 divided by 12^4",
     "steps": [
      "Same base 12, so keep 12 and subtract the exponents.",
      "9 - 4 = 5"
     ],
     "a": "12^5"
    },
    {
     "q": "(3^4)^5",
     "steps": [
      "A power raised to a power, so keep 3 and multiply the exponents.",
      "4 x 5 = 20"
     ],
     "a": "3^20"
    },
    {
     "q": "5^3 * 5^4 divided by 5^2",
     "steps": [
      "Multiply first: add 3 + 4 = 7, so the top is 5^7.",
      "Now divide: subtract 7 - 2 = 5."
     ],
     "a": "5^5"
    }
   ]
  },
  {
   "n": 28,
   "title": "Evaluating Expressions Using the Laws of Exponents",
   "concept": "",
   "example": "1) 5^2 * 5^2 / 5^3 = 5^4 / 5^3 = 5^1 = 5; 2) 8^5 / 8^4 + 8^0 = 8^1 + 8^0 = 8 + 1 = 9; 3) 1^3 / 6^3 = 1 / 216 = 1/216; 4) 5^-2 + 2^4 = 1/25 + 16 = 16 1/25",
   "instruction": "Evaluate the following. (Answers must be in standard form)",
   "items": [
    {
     "q": "3^-1 - 5^-2",
     "type": "computable"
    },
    {
     "q": "7^0 - 1^-39",
     "type": "computable"
    },
    {
     "q": "89^-1 + 5^4",
     "type": "computable"
    },
    {
     "q": "1^-38 / 8^2",
     "type": "computable"
    },
    {
     "q": "3^4 / 3^-3",
     "type": "computable"
    },
    {
     "q": "5^3 - 55^0",
     "type": "computable"
    },
    {
     "q": "2^0 / 13^-2",
     "type": "computable"
    },
    {
     "q": "7^1 + 0^75",
     "type": "computable"
    },
    {
     "q": "83^0 / 83^2",
     "type": "computable"
    },
    {
     "q": "93^-1 + 93^2",
     "type": "computable"
    },
    {
     "q": "9^-2 + 9^0",
     "type": "computable"
    },
    {
     "q": "1^18 / 1^17",
     "type": "computable"
    },
    {
     "q": "10^12 * 10^-3",
     "type": "computable"
    },
    {
     "q": "8^0 + 8^-1",
     "type": "computable"
    },
    {
     "q": "12^0 / 12^1",
     "type": "computable"
    },
    {
     "q": "2 * 2^4",
     "type": "computable"
    },
    {
     "q": "(4)^4 + 12^0",
     "type": "computable"
    },
    {
     "q": "(7)^-4 + (7)^-4",
     "type": "computable"
    },
    {
     "q": "4^0 + (8)^3",
     "type": "computable"
    },
    {
     "q": "7^0 + 3^0",
     "type": "computable"
    },
    {
     "q": "5^4 * 5^2 + 8^0",
     "type": "computable"
    },
    {
     "q": "6^2 * 6^5 + 7^1",
     "type": "computable"
    },
    {
     "q": "10^0 - 1^40 + 8^2",
     "type": "computable"
    },
    {
     "q": "9^4 / 9^3 * 2^3",
     "type": "computable"
    },
    {
     "q": "(4 + 2)^2 - 6^2",
     "type": "computable"
    },
    {
     "q": "(4 / 2)^4 + 8^0 - 12^1",
     "type": "computable"
    },
    {
     "q": "(4^2)^4 * 4 + 5",
     "type": "computable"
    },
    {
     "q": "5^2 * 5^5 / 5^5",
     "type": "computable"
    },
    {
     "q": "8^0 - 1^50 + 90^1",
     "type": "computable"
    },
    {
     "q": "(3^2)^3 / 3^5 + (3 * 2)^3",
     "type": "computable"
    },
    {
     "q": "(5 * 2)^2 - (15 / 3)^0",
     "type": "computable"
    },
    {
     "q": "(4^2 * 4)^2 / 4^5 + 90^1",
     "type": "computable"
    },
    {
     "q": "10^0 + 1^100 + 100^1",
     "type": "computable"
    },
    {
     "q": "(5^2)^2 + 200^1 + 9^-2",
     "type": "computable"
    },
    {
     "q": "(5^2 * 5)^5 / 5^13 + 10^0 + (5)^3",
     "type": "computable"
    }
   ],
   "examples": [
    "2^-1 - 4^-2",
    "4^0 + 4^-1",
    "2^5 / 2^-2",
    "7^3 * 7^2 / 7^4",
    "(3 * 2)^2 - 4^2",
    "(2^3)^2 / 2^4 + 6^0"
   ]
  },
  {
   "n": 29,
   "title": "Product Law and Quotient Law",
   "concept": "",
   "example": "Product Law: a^x * a^y = a^(x+y); 2^2 * 2^3 = 2^(2+3) = 2^5 = 32; 2^2 * 2^3 * 2^4 = 2^(2+3+4) = 2^9 = 512; With variables: 2x^3 * 3x^2 = (2*3)(x^(3+2)) = 6x^5; 6h^-1 * 2h^3; h = 2 -> (12)(h^2) = (12)(2)^2 = 48; Quotient Law: a^x / a^y = a^(x-y); 2^3 / 2^2 = 2^(3-2) = 2",
   "instruction": "Evaluate the following. (1-5) Simplify the following. (6-30) (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "2^2 * 2^4",
     "type": "computable"
    },
    {
     "q": "3^1 * 3^3",
     "type": "computable"
    },
    {
     "q": "5^2 * 5^0",
     "type": "computable"
    },
    {
     "q": "4^-1 * 4^3",
     "type": "computable"
    },
    {
     "q": "10^3 * 10^1",
     "type": "computable"
    },
    {
     "q": "3^0 * 3^0 * 3^4",
     "a": "81",
     "type": "algebra",
     "text": true
    },
    {
     "q": "2^3 * 2^6 * 2^1",
     "a": "1024",
     "type": "algebra",
     "text": true
    },
    {
     "q": "4^4 * 4^-2 * 4^2",
     "a": "256",
     "type": "algebra",
     "text": true
    },
    {
     "q": "2^4 * 2^1 * 2^2",
     "a": "128",
     "type": "algebra",
     "text": true
    },
    {
     "q": "5^10 * 5^-2 * 5^-3 * 5^-2",
     "a": "125",
     "type": "algebra",
     "text": true
    },
    {
     "q": "3f^5 * 4f^1",
     "a": "12f^6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "5y^3 * 2y^-1",
     "a": "10y^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-4l^5 * 3l^-1",
     "a": "-12l^4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-7k^3 * -2k^-2",
     "a": "14k",
     "type": "algebra",
     "text": true
    },
    {
     "q": "5o^2 * o^-2",
     "a": "5",
     "type": "algebra",
     "text": true
    },
    {
     "q": "s^3 * s^4 * p^-6",
     "a": "s^7/p^6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "4j^2 * j^-3 * 3k^2",
     "a": "12k^2/j",
     "type": "algebra",
     "text": true
    },
    {
     "q": "a^5b^2a^3b^5c",
     "a": "a^8b^7c",
     "type": "algebra",
     "text": true
    },
    {
     "q": "4d^3 * 5e^2 * e^-1 * d^-2",
     "a": "20de",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-5r^5 * r^2 * 2s^4 * s^2",
     "a": "-10r^7s^6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "3^-2 / 3^3",
     "a": "(1/243)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "1^0 / 1^-1",
     "a": "1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "5^5 / 5^3",
     "a": "25",
     "type": "algebra",
     "text": true
    },
    {
     "q": "10^100 / 10^99",
     "a": "10",
     "type": "algebra",
     "text": true
    },
    {
     "q": "4^5 / 4^5",
     "a": "1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "s^6 / s^3",
     "a": "s^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "b^-2 / b^-3",
     "a": "b",
     "type": "algebra",
     "text": true
    },
    {
     "q": "a^-7 / a^10",
     "a": "1/a^17",
     "type": "algebra",
     "text": true
    },
    {
     "q": "z^5 / z^2",
     "a": "z^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "d^4 / d^-3",
     "a": "d^7",
     "type": "algebra",
     "text": true
    }
   ],
   "examples": [
    "3^2 * 3^4",
    "6^-1 * 6^3",
    "2^2 * 2^5 * 2^1",
    "4^6 * 4^-3 * 4^-1",
    "7^6 / 7^4",
    "2^-3 / 2^2"
   ]
  },
  {
   "n": 30,
   "title": "Power of Powers Law and Power of Different Bases Law",
   "concept": "",
   "example": "(2^3)^2 = 2^(3*2) = 2^6 = 64; (2a^2 3a^3 a^-2)^2 = (6a^3)^2 = 36a^6; (5a^7 a^-4)^2; a = 2 -> (5a^3)^2 = 25a^6 = 25(2)^6 = 1600",
   "instruction": "Simplify the following. (Items 21-25: Simplify then evaluate using the given values. Items 26-40: Simplify the following.) (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "(3^2)^2",
     "a": "81",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-2^4)^2",
     "a": "256",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(7^10)^(1/5)",
     "a": "49",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-5^2)^(-1)",
     "a": "-(1/25)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2^(-2))^3",
     "a": "(1/64)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5^12)^(-1/4)",
     "a": "1/(125)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(6^0)^10",
     "a": "1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-9^6)^(1/3)",
     "a": "81",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3^2)^(-2)",
     "a": "(1/81)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4^5)^0",
     "a": "1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(y^2y^4)^2",
     "a": "y^12",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(s^2s^3s^4)^(1/6)",
     "a": "s^(3/2)",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(a^4a^(-1))^(-2)",
     "a": "1/a^6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^5x^(-4)x^0)^3",
     "a": "x^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(m^0m^5m^3m^(-4))^(1/2)",
     "a": "m^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2a^3a^2)^(-2)",
     "a": "1/(4a^10)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(z^0 4z^2)^3",
     "a": "64z^6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-3k^0 2k^2k^3)^2",
     "a": "36k^10",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4f^7 5f^2)^(-1)",
     "a": "1/(20f^9)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(1/(5q^6q^3))^2",
     "a": "1/(25q^18)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(g^2g^2)^(1/2); g = 5",
     "a": "25",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-5j^10 3j^5)^1; j = 1",
     "a": "-15",
     "type": "key",
     "text": true
    },
    {
     "q": "(-4a^9a^(-5))^2; a = 2",
     "a": "4096",
     "type": "key",
     "text": true
    },
    {
     "q": "(2m 2m 2m)^3; m = 3",
     "a": "10077696",
     "type": "key",
     "text": true
    },
    {
     "q": "(1/4 s 1/5 s^3 100s)^2; s = 5",
     "a": "244140625",
     "type": "key",
     "text": true
    },
    {
     "q": "(s^3s^0o^1o^(-1))^(-1)",
     "a": "1/s^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(z^3z^2x^4x)^2",
     "a": "x^10z^10",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(a^4a^(-2)a^(-1)b^(-1))^(-3)",
     "a": "b^3/a^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(p^4q^7q^2q)^1",
     "a": "p^4q^10",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(s^0s^5t^2t^0)^2",
     "a": "s^10t^4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(hh^2i^4h)^(1/2)",
     "a": "h^2i^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(j^2j^2kk)^(-4)",
     "a": "1/(j^16k^8)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(c^2dcd^2cd)^2",
     "a": "c^8d^8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(a^4a^(-3)g)^3",
     "a": "a^3g^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(h^10h^(-5)h^(-3)j^0)^8",
     "a": "h^16",
     "type": "algebra",
     "text": true
    },
    {
     "q": "2a^3(-a^2)",
     "a": "-2a^5",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5z^0 4z^2)^5",
     "a": "3200000z^10",
     "type": "algebra",
     "text": true
    },
    {
     "q": "[(-3k)(2k)(k^2)(k^3)]^2",
     "a": "36k^14",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4f^7 5f^2)^(-1)",
     "a": "1/(20f^9)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(1/(25q^2q^3))^2",
     "a": "1/(625q^10)",
     "type": "algebra",
     "text": true
    }
   ],
   "ordered": true
  },
  {
   "n": 31,
   "title": "Powers of Different Bases Law and Other Laws of Exponents",
   "concept": "",
   "example": "(2/3)^2 = 2^2/3^2 = 4/9; (3/5)^(-2) = 25/9; (10x^2y^3/y^4)^2; x = 1, y = 5 -> (10x^2/y)^2 = 100x^4/y^2 = 100/25 = 4",
   "instruction": "Simplify the following. (Items 17-21: Simplify then evaluate using the given values. Items 22-28: Evaluate the expression given the following values.) (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "(2/3)^2",
     "a": "(4/9)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(1/2)^6",
     "a": "(1/64)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3/4)^3",
     "a": "(27/64)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(7/5)^2",
     "a": "(49/25)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2/3)^(-3)",
     "a": "(27/8)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3/8)^2",
     "a": "(9/64)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(9/5)^(-2)",
     "a": "(25/81)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(1/3)^4",
     "a": "(1/81)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4/7)^2",
     "a": "(16/49)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(25/13)^(-1)",
     "a": "(13/25)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(a^3/a^4)^4",
     "a": "1/a^4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(z^7/y^9)^3",
     "a": "z^21/y^27",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^33/m^28)^(1/7)",
     "a": "x^(33/7)/m^4",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(8s^3/j^5)^(-1)",
     "a": "j^5/(8s^3)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(40k^7/(2m^30))^(1/3)",
     "a": "20^(1/3)k^(7/3)/m^10",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "(n^(1/4)/(2o^(1/2)))^8",
     "a": "n^2/(256o^4)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(b^3/4)^3; b = 1",
     "a": "1/64",
     "type": "key",
     "text": true
    },
    {
     "q": "(a^2/2)^5; a = 2",
     "a": "32",
     "type": "key",
     "text": true
    },
    {
     "q": "(c^3/d^4)^2; c = 3, d = 2",
     "a": "729/256",
     "type": "key",
     "text": true
    },
    {
     "q": "(4f/(3g))^2; f = 6, g = 9",
     "a": "64/81",
     "type": "key",
     "text": true
    },
    {
     "q": "(s^(-1/6)/t^(-1/9))^36; s = 2, t = 4",
     "a": "4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "x^0; x = 72",
     "a": "1",
     "type": "key",
     "text": true
    },
    {
     "q": "x^0; x = 1",
     "a": "1",
     "type": "key",
     "text": true
    },
    {
     "q": "x^1; x = 54",
     "a": "54",
     "type": "key",
     "text": true
    },
    {
     "q": "x^1; x = 1",
     "a": "1",
     "type": "key",
     "text": true
    },
    {
     "q": "4x^0; x = 35",
     "a": "4",
     "type": "key",
     "text": true
    },
    {
     "q": "25x^1; x = 1",
     "a": "25",
     "type": "key",
     "text": true
    },
    {
     "q": "25x^1; x = 0",
     "a": "0",
     "type": "key",
     "text": true
    }
   ],
   "examples": [
    "(3/5)^2",
    "(1/2)^5",
    "(2/5)^3",
    "(3/4)^(-2)",
    "(5/2)^(-3)",
    "(16/9)^(-1)"
   ],
   "ordered": true
  },
  {
   "n": 32,
   "title": "Laws of Exponents",
   "concept": "All the rules work together here. Add exponents when multiplying, subtract when dividing, multiply when raising a power to a power, and remember that anything to the power 0 equals 1. A negative exponent is not a negative answer, it only means the factor belongs on the other side of the fraction bar, so x^(-5) is the same as 1/x^5. A fraction exponent means a root, so a power of 1/2 is a square root and a power of 1/3 is a cube root, and you still multiply the exponents as usual. When a whole fraction is raised to a power, that power goes to the number coefficient too, not just the letters.",
   "example": "Product Law: x^a x^b = x^(a+b); Quotient Law: x^a/x^b = x^(a-b); Power of Powers Law: (x^a)^b = x^(a*b); Powers of Different Bases Law: (xy)^a = x^a y^a and (x/y)^a = x^a/y^a",
   "instruction": "Simplify the following: (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "3^2/3^2",
     "a": "1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "5^5/5^6",
     "a": "(1/5)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "2^2/2^(-4)",
     "a": "64",
     "type": "algebra",
     "text": true
    },
    {
     "q": "x^3/x^5",
     "a": "1/x^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "x^(-8)/x^2",
     "a": "1/x^10",
     "type": "algebra",
     "text": true
    },
    {
     "q": "x^(-2)/x^(-3)",
     "a": "x",
     "type": "algebra",
     "text": true
    },
    {
     "q": "x^2x^2/(x^(-2)x^(-2))",
     "a": "x^8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "x^5x^3y^5/(y^6x^8)",
     "a": "1/y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "4x^4 2y^2/(3x^3y^3)",
     "a": "8x/(3y)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "5x^5x^3x^(-2)/(3x^6 2x)",
     "a": "5/(6x)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "2a^3b^7/(7ab^2)",
     "a": "2a^2b^5/7",
     "type": "algebra",
     "text": true
    },
    {
     "q": "7r^4s^2t/(5r^3s)",
     "a": "7rst/5",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-9x^3y^3z^2/(xyz^0)",
     "a": "-9x^2y^2z^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-9w^6y^5z^2/(11w^0y^3)",
     "a": "-9w^6y^2z^2/11",
     "type": "algebra",
     "text": true
    },
    {
     "q": "12a^7b^4c^2/(19a^3b^4)",
     "a": "12a^4c^2/19",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2^3)^2",
     "a": "64",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4^10)^(1/5)",
     "a": "16",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3^2)^(-1)",
     "a": "(1/9)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^3)^2",
     "a": "x^6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^(-5))^5",
     "a": "1/x^25",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^(-4))^(-6)",
     "a": "x^24",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^3x^(-4))^2",
     "a": "1/x^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^5x^4xy^6)^(1/2)",
     "a": "x^5y^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5x^4x^2)^2",
     "a": "25x^12",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x^2y^0z^(1/2))^6",
     "a": "64x^12z^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2^3/3^4)^2",
     "a": "(64/6561)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4^6/5^(-3))^(1/3)",
     "a": "80",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x^4/(3y^3))^4",
     "a": "16x^16/(81y^12)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^(-2)/y^(-2))^(-3)",
     "a": "x^6/y^6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^(1/2)/y^1)^0",
     "a": "1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^(-3)/y^5)^2",
     "a": "1/(x^6y^10)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^2x^7/(y^(-2)y^(-3)y^(-1)))^(-1/3)",
     "a": "1/(x^3y^2)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^(-4)y^2/(y^3x^(-3)))^3",
     "a": "1/(x^3y^3)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5x^4x^3/(25y^5y^4))^3",
     "a": "x^21/(125y^27)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(23g^10e^(-5)/(am^2v^2))^2",
     "a": "529g^20/(a^2e^10m^4v^4)",
     "type": "algebra",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "x^4/x^9",
     "steps": [
      "Same base, so subtract the exponents: 4 - 9 = -5.",
      "That gives x^(-5).",
      "A negative exponent moves the factor to the bottom."
     ],
     "a": "1/x^5"
    },
    {
     "q": "(9x^6y^4)^(1/2)",
     "steps": [
      "A power of 1/2 means take the square root of every factor.",
      "sqrt(9) = 3.",
      "Multiply the exponents: 6 x 1/2 = 3, and 4 x 1/2 = 2."
     ],
     "a": "3x^3y^2"
    },
    {
     "q": "10m^6n^3/(5m^2n)",
     "steps": [
      "Divide the numbers: 10 divided by 5 = 2.",
      "Subtract the m exponents: 6 - 2 = 4.",
      "Subtract the n exponents: 3 - 1 = 2."
     ],
     "a": "2m^4n^2"
    },
    {
     "q": "(3x^2/y^4)^3",
     "steps": [
      "The outside power 3 hits every factor, the 3 included.",
      "3^3 = 27, and x^2 becomes x^(2 x 3) = x^6.",
      "On the bottom, y^4 becomes y^(4 x 3) = y^12."
     ],
     "a": "27x^6/y^12"
    }
   ]
  },
  {
   "n": 33,
   "title": "Square Roots",
   "concept": "",
   "example": "sqrt(49) = 7; sqrt(900): 2x2x3x3x5x5 -> 2 x 3 x 5 = 30; sqrt(56) = sqrt(4*14) = 2sqrt(14)",
   "instruction": "Find the square root of the following numbers. (Items 11-20: show your solutions using prime factors. Items 21-30: simplify the radical and show your solution.)",
   "items": [
    {
     "q": "sqrt(25)",
     "type": "computable"
    },
    {
     "q": "sqrt(81)",
     "type": "computable"
    },
    {
     "q": "sqrt(16)",
     "type": "computable"
    },
    {
     "q": "sqrt(36)",
     "type": "computable"
    },
    {
     "q": "sqrt(4)",
     "type": "computable"
    },
    {
     "q": "sqrt(9)",
     "type": "computable"
    },
    {
     "q": "sqrt(100)",
     "type": "computable"
    },
    {
     "q": "sqrt(64)",
     "type": "computable"
    },
    {
     "q": "sqrt(49)",
     "type": "computable"
    },
    {
     "q": "sqrt(121)",
     "type": "computable"
    },
    {
     "q": "sqrt(225)",
     "type": "computable"
    },
    {
     "q": "sqrt(256)",
     "type": "computable"
    },
    {
     "q": "sqrt(625)",
     "type": "computable"
    },
    {
     "q": "sqrt(324)",
     "type": "computable"
    },
    {
     "q": "sqrt(676)",
     "type": "computable"
    },
    {
     "q": "sqrt(729)",
     "type": "computable"
    },
    {
     "q": "sqrt(900)",
     "type": "computable"
    },
    {
     "q": "sqrt(1225)",
     "type": "computable"
    },
    {
     "q": "sqrt(1764)",
     "type": "computable"
    },
    {
     "q": "sqrt(2025)",
     "type": "computable"
    },
    {
     "q": "sqrt(18)",
     "a": "3sqrt(2)",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "sqrt(24)",
     "a": "2sqrt(6)",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "sqrt(32)",
     "a": "4sqrt(2)",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "sqrt(45)",
     "a": "3sqrt(5)",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "sqrt(50)",
     "a": "5sqrt(2)",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "sqrt(60)",
     "a": "2sqrt(15)",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "sqrt(75)",
     "a": "5sqrt(3)",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "sqrt(80)",
     "a": "4sqrt(5)",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "sqrt(96)",
     "a": "4sqrt(6)",
     "type": "key",
     "vb": true,
     "text": true
    },
    {
     "q": "sqrt(112)",
     "a": "4sqrt(7)",
     "type": "key",
     "vb": true,
     "text": true
    }
   ],
   "examples": [
    "sqrt(144)",
    "sqrt(169)",
    "sqrt(441)",
    "sqrt(576)",
    "sqrt(1089)",
    "sqrt(1600)"
   ],
   "ordered": true
  },
  {
   "n": 34,
   "title": "Translating Expressions into Symbols and Vice Versa",
   "concept": "Translating is just swapping each English word for its symbol. Plus, sum, more than and increased by all mean +, while minus, less than, decreased by and subtracted from all mean -. Times, product and twice mean multiply, and in algebra we write 6 times n simply as 6n. Order matters for subtraction and division, so read the sentence carefully and ask yourself which quantity is being taken away or being split.",
   "example": "1. 2 times a --> 2a; 2. x plus y --> x + y; 3. a minus b --> a - b; 4. m divided by n --> m/n; 5. x times x --> x^2; 6. 4 less than x --> x - 4; 7. 2 less than thrice of y --> 3y - 2; 8. 1 more than the product of m and n --> mn + 1; 9. Subtract x from 7 --> 7 - x; 10. Multiply a by -3 --> -3a; 11. Seven times the difference of a and b --> 7(a - b)",
   "instruction": "Translate the following expressions into symbols. (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "Three plus x",
     "a": "3+x",
     "type": "algebra",
     "text": true
    },
    {
     "q": "y plus two",
     "a": "y+2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "a minus four",
     "a": "a-4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Eleven times d",
     "a": "11d",
     "type": "algebra",
     "text": true
    },
    {
     "q": "c divided by twenty-seven",
     "a": "c/27",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Eight plus twice of h",
     "a": "8+2h",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Nineteen minus b^2",
     "a": "19-b^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Multiply m by -3",
     "a": "-3m",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Add ten to y",
     "a": "y+10",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Divide t by fifteen",
     "a": "t/15",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Subtract a from six",
     "a": "6-a",
     "type": "algebra",
     "text": true
    },
    {
     "q": "The sum of m and thirteen",
     "a": "m+13",
     "type": "algebra",
     "text": true
    },
    {
     "q": "The product of twenty-two and k",
     "a": "22k",
     "type": "algebra",
     "text": true
    },
    {
     "q": "The result when b is subtracted by fifty",
     "a": "b-50",
     "type": "algebra",
     "text": true
    },
    {
     "q": "n decreased by twelve",
     "a": "n-12",
     "type": "algebra",
     "text": true
    },
    {
     "q": "h increased by one thousand",
     "a": "h+1000",
     "type": "algebra",
     "text": true
    },
    {
     "q": "The result when y is divided by three",
     "a": "y/3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "The sum of w and nine",
     "a": "w+9",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Eighty decreased by p",
     "a": "80-p",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Sixty-seven increased by d",
     "a": "67+d",
     "type": "algebra",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Seven more than k",
     "steps": [
      "More than means add.",
      "The 7 is added to k."
     ],
     "a": "k+7"
    },
    {
     "q": "The quotient of n and five",
     "steps": [
      "Quotient means divide.",
      "The first quantity named, n, goes on top."
     ],
     "a": "n/5"
    },
    {
     "q": "Four less than three times r",
     "steps": [
      "Three times r is 3r.",
      "Four less than that means take 4 away from 3r."
     ],
     "a": "3r-4"
    },
    {
     "q": "The sum of six and the square of t",
     "steps": [
      "The square of t is t^2.",
      "Sum means add, so join 6 and t^2 with a plus sign."
     ],
     "a": "6+t^2"
    }
   ]
  },
  {
   "n": 35,
   "title": "Evaluating Algebraic Expressions",
   "concept": "Evaluating means replacing every letter with the number it stands for, then doing the arithmetic. Put each negative value inside parentheses when you substitute, so that signs do not get lost, especially with exponents. Then follow the order of operations: powers first, then multiplication and division, then addition and subtraction. Work the top and the bottom of a fraction separately before you divide.",
   "example": "",
   "instruction": "Evaluate the following using the given values: a = -2; b = 1; c = 0; x = -1; y = 2; z = 3. Show your solution.",
   "items": [
    {
     "q": "a - b",
     "a": "-3",
     "type": "key",
     "text": true
    },
    {
     "q": "2(bz - bc)",
     "a": "6",
     "type": "key",
     "text": true
    },
    {
     "q": "x/(yz)",
     "a": "-1/6",
     "type": "key",
     "text": true
    },
    {
     "q": "c/x",
     "a": "0",
     "type": "key",
     "text": true
    },
    {
     "q": "xy/(az)",
     "a": "1/3",
     "type": "key",
     "text": true
    },
    {
     "q": "b^z/y^z",
     "a": "1/8",
     "type": "key",
     "text": true
    },
    {
     "q": "y - a",
     "a": "4",
     "type": "key",
     "text": true
    },
    {
     "q": "b^2 - x^3z",
     "a": "4",
     "type": "key",
     "text": true
    },
    {
     "q": "3a/(b^2z^4)",
     "a": "-2/27",
     "type": "key",
     "text": true
    },
    {
     "q": "4a/(5bx) - c/(by)",
     "a": "1 3/5",
     "type": "key",
     "text": true
    },
    {
     "q": "a((y+z)/z^2)^b",
     "a": "-1 1/9",
     "type": "key",
     "text": true
    },
    {
     "q": "(x^2/(a-z))(b/(y+z))",
     "a": "-1/25",
     "type": "key",
     "text": true
    },
    {
     "q": "2/a^3 + 6x/z^2",
     "a": "-11/12",
     "type": "key",
     "text": true
    },
    {
     "q": "(5-a+(c-y))/(b-a)",
     "a": "1 2/3",
     "type": "key",
     "text": true
    },
    {
     "q": "(x/(b^3y^2)) / (x/(y^3z))",
     "a": "6",
     "type": "key",
     "text": true
    },
    {
     "q": "(b^3/(y-z))^2",
     "a": "1",
     "type": "key",
     "text": true
    },
    {
     "q": "(abc+xyz)/z",
     "a": "-2",
     "type": "key",
     "text": true
    },
    {
     "q": "a^2bz^2[(xz+(a-b))/(ab^3)]",
     "a": "108",
     "type": "key",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Evaluate z - a, where a = -2 and z = 3.",
     "steps": [
      "Substitute: 3 - (-2).",
      "Subtracting a negative is the same as adding.",
      "3 + 2 = 5"
     ],
     "a": "5"
    },
    {
     "q": "Evaluate a^2 + yz, where a = -2, y = 2 and z = 3.",
     "steps": [
      "Substitute: (-2)^2 + (2)(3).",
      "(-2)^2 = 4 because a negative times a negative is positive.",
      "(2)(3) = 6, so 4 + 6."
     ],
     "a": "10"
    },
    {
     "q": "Evaluate (y - a)/(z + b), where a = -2, b = 1, y = 2 and z = 3.",
     "steps": [
      "Top: 2 - (-2) = 2 + 2 = 4.",
      "Bottom: 3 + 1 = 4.",
      "4 divided by 4 = 1."
     ],
     "a": "1"
    },
    {
     "q": "Evaluate 3a/y^2, where a = -2 and y = 2.",
     "steps": [
      "Top: 3(-2) = -6.",
      "Bottom: 2^2 = 4.",
      "-6/4 reduces to -3/2."
     ],
     "a": "-1 1/2"
    }
   ]
  },
  {
   "n": 36,
   "title": "Adding Polynomials",
   "concept": "You can only add terms that are alike, meaning they carry exactly the same letter. The x terms combine with the x terms and the y terms with the y terms, and a lone number only combines with another lone number. Drop the parentheses first, keeping the sign in front of each term, then collect each group and add the coefficients the way you add signed numbers. If a group has nothing to pair with, it simply stays as it is.",
   "example": "(x + 4y) + (6x + 2y + 3z) = 7x + 6y + 3z",
   "instruction": "Add the following. (Items 22-25: Add the following polynomials, show your solution in vertical form and box your final answer.) (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "(7x+3y)+(2x+8y)",
     "a": "9x + 11y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4m+3p)+(3m+12p)",
     "a": "7m + 15p",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(82x+33)+(68x+42)",
     "a": "150x + 75",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(13a+2b)+(10a+4b)",
     "a": "23a + 6b",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(22p+3q)+(6p+9q)",
     "a": "28p + 12q",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(17x-3y)+(17x-8y)",
     "a": "34x - 11y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3.6m-1.2n)+(1.7m-2.4n)",
     "a": "(53/10)m - (18/5)n",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3w-5d)+(5w-3d)",
     "a": "-8d + 8w",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(15s-6t)+(2s-t)",
     "a": "17s - 7t",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(22s-15t)+(18s-5t)",
     "a": "40s - 20t",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-11+3y)+(-12+5y)",
     "a": "8y - 23",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-m+p)+(-m+12p)",
     "a": "-2m + 13p",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-8x+3)+(-8x+3)",
     "a": "-16x + 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-7a+22b)+(-22a+7b)",
     "a": "-29a + 29b",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-5p+3q)+(-5p+9q)",
     "a": "-10p + 12q",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-2x+22y)+(-22x-2y)",
     "a": "-24x + 20y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-5.6m-6.5n)+(-1.7m-7.1n)",
     "a": "-(73/10)m - (68/5)n",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-3w-5d)+(-5w-3d)",
     "a": "-8d - 8w",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-2s-t)+(-11s-t)",
     "a": "-13s - 2t",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-5s-3t)+(-5s-3t)",
     "a": "-10s - 6t",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(10x-3y)+(-11x-8y)",
     "a": "-x - 11y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4a+3b)+(-6a+12b)",
     "a": "-2a + 15b",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(11a+3b)+(-a+12b)",
     "a": "10a + 15b",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(9x+y)+(-7y+x)",
     "a": "10x - 6y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(22a+b)+(-22a+b)",
     "a": "2b",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3m+n)+(-3n+m)",
     "a": "4m - 2n",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(9p+8)+(-7p-5)",
     "a": "2p + 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5w+6)+(-4w-7)",
     "a": "w - 1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(6q+7)+(-8q-7)",
     "a": "-2q",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(7x+3y)+(2x+8y)+(3x+2y)",
     "a": "12x + 13y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(6m+2p)+(3m+12p)+(9m+3p)",
     "a": "18m + 17p",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(82x+13)+(8x+42)+(2x)",
     "a": "92x + 55",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3a+12b)+(7a+4b)+(3a+2b)",
     "a": "13a + 18b",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(13p+2q)+(6p+9q)+(-2p+4q)",
     "a": "17p + 15q",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(10x-13y)+(17x+8y)+(9x+8y)",
     "a": "36x + 3y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3m-2.2n)+(1.3m-2.4n)+(6.5n)",
     "a": "(43/10)m + (19/10)n",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(8w-5d)+(5w-38d)+(2w+6d)",
     "a": "-37d + 15w",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(10s-6t)+(2s-2t)+(10s-4t)",
     "a": "22s - 12t",
     "type": "algebra",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "(5x + 2y) + (6x + 9y)",
     "steps": [
      "Group the like terms: 5x and 6x, then 2y and 9y.",
      "5 + 6 = 11, so 11x.",
      "2 + 9 = 11, so 11y."
     ],
     "a": "11x + 11y"
    },
    {
     "q": "(12m - 7n) + (-4m - 3n)",
     "steps": [
      "Group the m terms: 12 + (-4) = 8, so 8m.",
      "Group the n terms: -7 + (-3) = -10, so -10n."
     ],
     "a": "8m - 10n"
    },
    {
     "q": "(2.5p - 1.4q) + (3.1p + 0.6q)",
     "steps": [
      "Add the p terms: 2.5 + 3.1 = 5.6.",
      "Add the q terms: -1.4 + 0.6 = -0.8."
     ],
     "a": "5.6p - 0.8q"
    },
    {
     "q": "(4x + y) + (3x + 5y) + (2x - 3y)",
     "steps": [
      "Add all the x terms: 4 + 3 + 2 = 9.",
      "Add all the y terms: 1 + 5 - 3 = 3."
     ],
     "a": "9x + 3y"
    }
   ],
   "ordered": true
  },
  {
   "n": 37,
   "title": "Special Cases on Adding Polynomials",
   "concept": "Terms are alike only when the letter and the exponent both match, so 3x^2 and 5x^2 combine but 3x^2 and 5x^3 do not. Before adding, rewrite each polynomial in order from the highest power down to the plain number, and leave a gap wherever a power is missing. Then add straight down, column by column, and copy any term that has no partner. If two like terms cancel each other out, that power simply disappears from the answer.",
   "example": "(7x^2 + 2) + (-x^2 + 3x - 6) = 6x^2 + 3x - 4",
   "instruction": "Add the following polynomials. (Items 10-19: Add the following polynomials, show your solution in vertical form and box your final answer.) (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "(11a^11 - 5a^7 + 2a^3) + (-13a^11 + 8a^7 - 17a^3)",
     "a": "-2a^11 + 3a^7 - 15a^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(9x^2 + 3x + 5) + (x^2 + 5x + 8)",
     "a": "10x^2 + 8x + 13",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5x - 4x^2 + 9) + (8x - x^2 + 6)",
     "a": "-5x^2 + 13x + 15",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4x^3 + x^2 - 2x + 3) + (3x^2 + 5x)",
     "a": "4x^3 + 4x^2 + 3x + 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(6x^3 + 2x^2 + 6x + 3) + (3x^2 - 6x - 6)",
     "a": "6x^3 + 5x^2 - 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(22p^3 - p^2 + 8p) + (p^3 - 22p^2 + 8p)",
     "a": "23p^3 - 23p^2 + 16p",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(14x^2 - 5x - 6) + (14x^3 - 5x^2 + 6x)",
     "a": "14x^3 + 9x^2 + x - 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(12x^2 + 7) + (-11x^3 + 9x - 1)",
     "a": "-11x^3 + 12x^2 + 9x + 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-12x - 19) + (10x - 13)",
     "a": "-2x - 32",
     "type": "algebra",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "(5x^2 + 2x + 7) + (3x^2 + 6x + 1)",
     "steps": [
      "Add the x^2 column: 5 + 3 = 8.",
      "Add the x column: 2 + 6 = 8.",
      "Add the numbers: 7 + 1 = 8."
     ],
     "a": "8x^2 + 8x + 8"
    },
    {
     "q": "(7x^3 - 2x + 4) + (2x^2 + 5x)",
     "steps": [
      "The first polynomial has no x^2 term, so leave that column empty.",
      "x^3: only 7x^3, so copy it. x^2: only 2x^2, so copy it.",
      "x column: -2 + 5 = 3, giving 3x. Number: only 4."
     ],
     "a": "7x^3 + 2x^2 + 3x + 4"
    },
    {
     "q": "(6x + 3 - 2x^2) + (9 - x^2 + 4x)",
     "steps": [
      "Rewrite in order: (-2x^2 + 6x + 3) + (-x^2 + 4x + 9).",
      "x^2: -2 + (-1) = -3.",
      "x: 6 + 4 = 10. Numbers: 3 + 9 = 12."
     ],
     "a": "-3x^2 + 10x + 12"
    },
    {
     "q": "(8a^5 - 3a^2) + (-8a^5 + a^2 - 6)",
     "steps": [
      "a^5: 8 + (-8) = 0, so that term disappears.",
      "a^2: -3 + 1 = -2, giving -2a^2.",
      "The -6 has no partner, so copy it down."
     ],
     "a": "-2a^2 - 6"
    }
   ],
   "ordered": true
  },
  {
   "n": 38,
   "title": "Subtracting Polynomials",
   "concept": "Subtracting a polynomial just means adding its opposite. Change the sign of EVERY term inside the second pair of parentheses, then combine like terms as usual. Like terms must have the same letter AND the same exponent, so 5x^2 and 3x^2 can be combined but 5x^2 and 3x cannot. The most common mistake is flipping only the first sign, so slow down and flip them all.",
   "example": "",
   "instruction": "Items 1-20: Subtract the following polynomials, show your solution in vertical form and box your final answer. Items 21-40: Subtract the following polynomials, rewrite if necessary and box your final answer. (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "(2x - 19) - (-x + 13)",
     "a": "3x - 32",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x - 7) - (-9x + 1)",
     "a": "10x - 8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x - 4) - (-x + 6)",
     "a": "2x - 10",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x - 20) - (-9x + 5)",
     "a": "11x - 25",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(7x - 2) - (-3x + 6)",
     "a": "10x - 8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x - 8) - (-x - 1)",
     "a": "2x - 7",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(50x - 1) - (-3x - 2)",
     "a": "53x + 1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(80x - 5) - (-2x - 8)",
     "a": "82x + 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x - 6) - (-x - 2)",
     "a": "3x - 4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(9x - 90) - (-8x - 8)",
     "a": "17x - 82",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(22p^3 - p^2 + 8p) - (-22p^2 + p^3 + 8p)",
     "a": "21p^3 + 21p^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(14x^2 - 5x - 6) - (14x^3 - 5x^2 + 6x)",
     "a": "-14x^3 + 19x^2 - 11x - 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(12x^2 + 7) - (-11x^3 + 9x - 1)",
     "a": "11x^3 + 12x^2 - 9x + 8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-12x - 19) - (10x - 13)",
     "a": "-22x - 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(ab^2 + ab - b^2) - (-a^2b + ab - b^2)",
     "a": "ab^2 + a^2b",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-x^2 - 10x + 2) - (4x^2 + 2)",
     "a": "-5x^2 - 10x",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-4x^2 + 40x + 10) - (3x^2 + 4)",
     "a": "-7x^2 + 40x + 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-4ab^2 + 40ab - 5b^2) - (-a^2b + 7ab - 2b^2)",
     "a": "-4ab^2 + a^2b + 33ab - 3b^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-4x^2 - 4) - (8x^3 - 3x + 7)",
     "a": "-8x^3 - 4x^2 + 3x - 11",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3x^2 - 5x - 6) - (4x^3 - 5x^2 + 2x - 3)",
     "a": "-4x^3 + 8x^2 - 7x - 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-(2x^2 - 7x + 5) - (x^2 + 2x + 1)",
     "a": "-3x^2 + 5x - 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(10x^2 + 7x + 5) - (-2x^2 + 3x + 5)",
     "a": "12x^2 + 4x",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-3m^5 + 4n^3 - 3m + 7n) - (8n^3 + 2m^2 - 5m)",
     "a": "-3m^5 - 4n^3 - 2m^2 + 2m + 7n",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3x^2 + 5) - (-2x^3 + 6x + 8)",
     "a": "2x^3 + 3x^2 - 6x - 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-8x^2 + 80x - 5) - (4x^2 + 3x - 9)",
     "a": "-12x^2 + 77x + 4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-3x^3 + 30x^2 + 2x - 6) - (7x^3 - 7x^2 + 8x - 2)",
     "a": "-10x^3 + 37x^2 - 6x - 4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(7x^2 + 70x + 2) - (-2x^2 + 4x + 3)",
     "a": "9x^2 + 66x - 1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x^2 - 20x + 1) - (6x^2 + x + 5)",
     "a": "-4x^2 - 21x - 4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-7x - 70) - (7x + 9)",
     "a": "-14x - 79",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x^2 + 20x - 1) - (9x^2 + 9x - 4)",
     "a": "-7x^2 + 11x + 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-4x^2 - 40x - 5) - (-8x^2 - x - 2)",
     "a": "4x^2 - 39x - 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-10x^2 - 100x - 5) - (2x^2 + 3)",
     "a": "-12x^2 - 100x - 8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-2xy^2 + 20x - 4y^2) - (9xy^2 - 8x^2 - 2y^2 - 5)",
     "a": "-11xy^2 + 8x^2 - 2y^2 + 20x + 5",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(8ab^2 + 80ab - 7b^2) - (a^2b - 2ab - 7b^2)",
     "a": "8ab^2 - a^2b + 82ab",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-9x^2 + 90x + 9) - (x^2 + 4x - 4)",
     "a": "-10x^2 + 86x + 13",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5x^2 + 8) - (9x^3 + 3x + 3)",
     "a": "-9x^3 + 5x^2 - 3x + 5",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4a^2 - 40ab - 4b^2) - (-8ab + 7b^2 + 1)",
     "a": "-32ab + 4a^2 - 11b^2 - 1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^2 - 10x - 3) - (6x^2 - 4x + 6)",
     "a": "-5x^2 - 6x - 9",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(7x^2 - 70x - 5) - (-3x^2 - 7x + 4)",
     "a": "10x^2 - 63x - 9",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-6x^2 + 60x - 6) - (-5x^2 + 7x + 6)",
     "a": "-x^2 + 53x - 12",
     "type": "algebra",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "(5x - 11) - (-2x + 4)",
     "steps": [
      "Flip every sign in the second group: -(-2x) = +2x and -(+4) = -4.",
      "The problem becomes 5x - 11 + 2x - 4.",
      "Combine like terms: 5x + 2x = 7x, and -11 - 4 = -15."
     ],
     "a": "7x - 15"
    },
    {
     "q": "(6x^2 + 3x - 9) - (2x^2 - 5x + 4)",
     "steps": [
      "Flip every sign in the second group: -2x^2 + 5x - 4.",
      "Now add: 6x^2 + 3x - 9 - 2x^2 + 5x - 4.",
      "Combine: 6x^2 - 2x^2 = 4x^2, 3x + 5x = 8x, -9 - 4 = -13."
     ],
     "a": "4x^2 + 8x - 13"
    },
    {
     "q": "(-3x^2 + 8x) - (5x^3 - x + 7)",
     "steps": [
      "Flip every sign in the second group: -5x^3 + x - 7.",
      "Write it all out: -3x^2 + 8x - 5x^3 + x - 7.",
      "Only 8x and x are like terms, so 8x + x = 9x. Arrange from the highest power down."
     ],
     "a": "-5x^3 - 3x^2 + 9x - 7"
    },
    {
     "q": "(6ab^2 - 3ab + b^2) - (-a^2b + 5ab - b^2)",
     "steps": [
      "Flip every sign in the second group: +a^2b - 5ab + b^2.",
      "Write it out: 6ab^2 - 3ab + b^2 + a^2b - 5ab + b^2.",
      "ab^2, a^2b and ab are all different terms, so only combine -3ab - 5ab = -8ab and b^2 + b^2 = 2b^2."
     ],
     "a": "6ab^2 + a^2b - 8ab + 2b^2"
    }
   ],
   "ordered": true
  },
  {
   "n": 39,
   "title": "Polynomial Operations and Functions",
   "concept": "Adding polynomials means collecting like terms; subtracting means flipping every sign in the polynomial being taken away, then collecting. When the polynomials are named P(x), Q(x) and so on, first copy the whole expression into parentheses before you do anything else, because those parentheses protect the signs. It helps to write each answer from the highest power down to the lowest. With two letters, like x and y, a term such as x^2y is only like another x^2y term.",
   "example": "",
   "instruction": "Items 1-12: Add/subtract the following polynomials. Show your solution. Items 13-22: Refer to the following equations to perform the given operations. Show your solution. P(x) = 7x^4 - 8x^3 + 9x^2 - 6; Q(x) = 6 + 9x^3 - 5x - 3x^4; R(x) = -14x^2 + 20x^3 + 9 - 6x + 4x^4; S(x) = 4x^4 - 3; T(x,y) = -7x^3 + 8x^2y - 6xy^2 + 4y^3; U(x,y) = 16xy^2 + 9y^2 - 8x^2y - 4x^3; V(x,y) = 19y^3 - 5x^3 + 6xy^2 (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "(4x^2 - 10x + 8) + (3x^2 + 7x - 1)",
     "a": "7x^2 - 3x + 7",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3x^2 + 9x) + (-5x^2 + 6) + (-x - 4)",
     "a": "-2x^2 + 8x + 2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4x^2 - 7x) + (7x^2 + 8)",
     "a": "11x^2 - 7x + 8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-7a + 5b) - (21a - 9b)",
     "a": "-28a + 14b",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(8b^3 - 5b + 6) - (25b^3 + 8b^2 + 32b)",
     "a": "-17b^3 - 8b^2 - 37b + 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(45y^2z + 37yz^2 - 8z^3) + (8z^3 - 27yz^2 + 9y^2z)",
     "a": "10yz^2 + 54y^2z",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^2 + x) + (x + 4) - (x^2 - 3)",
     "a": "2x + 7",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-7x^2 - 14x + 4) - (2x^2 + 8x - 7)",
     "a": "-9x^2 - 22x + 11",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(35x^2 - 4) + (14x - 7) + (3x^2 + 9x)",
     "a": "38x^2 + 23x - 11",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(32p^3 - 7p^2s + s^3) - (45p^2s - 38p^3)",
     "a": "-52p^2s + 70p^3 + s^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-7r + s - 6t) - (13r - 10s + 8t)",
     "a": "-20r + 11s - 14t",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-48a + 19b - 17c) + (50a - 7b + 6c)",
     "a": "2a + 12b - 11c",
     "type": "algebra",
     "text": true
    },
    {
     "q": "P(x) - R(x)",
     "a": "3x^4 - 28x^3 + 23x^2 + 6x - 15",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Q(x) + R(x) + S(x)",
     "a": "5x^4 + 29x^3 - 14x^2 - 11x + 12",
     "type": "algebra",
     "text": true
    },
    {
     "q": "T(x,y) - V(x,y)",
     "a": "-2x^3 + 8x^2y - 12xy^2 - 15y^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "P(x) - S(x) + Q(x)",
     "a": "x^3 + 9x^2 - 5x + 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "S(x) - P(x)",
     "a": "-3x^4 + 8x^3 - 9x^2 + 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "U(x,y) - T(x,y)",
     "a": "3x^3 - 16x^2y + 22xy^2 + 9y^2 - 4y^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "P(x) + S(x) + Q(x)",
     "a": "8x^4 + x^3 + 9x^2 - 5x - 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "T(x,y) + V(x,y)",
     "a": "-12x^3 + 8x^2y + 23y^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "V(x,y) - U(x,y)",
     "a": "-x^3 + 8x^2y - 10xy^2 - 9y^2 + 19y^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "R(x) - P(x)",
     "a": "-3x^4 + 28x^3 - 23x^2 - 6x + 15",
     "type": "algebra",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "(6x^2 - 3x + 5) + (2x^2 + 8x - 9)",
     "steps": [
      "Adding means the parentheses can simply be dropped: 6x^2 - 3x + 5 + 2x^2 + 8x - 9.",
      "Group like terms: (6x^2 + 2x^2) + (-3x + 8x) + (5 - 9).",
      "Combine each group."
     ],
     "a": "8x^2 + 5x - 4"
    },
    {
     "q": "(9m - 4n + 7p) - (12m - n + 3p)",
     "steps": [
      "Flip every sign in the second group: -12m + n - 3p.",
      "Write it out: 9m - 4n + 7p - 12m + n - 3p.",
      "Combine: 9m - 12m = -3m, -4n + n = -3n, 7p - 3p = 4p."
     ],
     "a": "-3m - 3n + 4p"
    },
    {
     "q": "If A(x) = 5x^3 - 2x + 1 and B(x) = -3x^3 + x^2 + 4, find A(x) - B(x).",
     "steps": [
      "Copy both into parentheses: (5x^3 - 2x + 1) - (-3x^3 + x^2 + 4).",
      "Flip every sign in B(x): +3x^3 - x^2 - 4.",
      "Combine: 5x^3 + 3x^3 = 8x^3, then bring down -x^2 and -2x, and 1 - 4 = -3."
     ],
     "a": "8x^3 - x^2 - 2x - 3"
    },
    {
     "q": "Using the same A(x) = 5x^3 - 2x + 1 and B(x) = -3x^3 + x^2 + 4, find A(x) + B(x).",
     "steps": [
      "Copy both: (5x^3 - 2x + 1) + (-3x^3 + x^2 + 4).",
      "Adding keeps all the signs as they are: 5x^3 - 2x + 1 - 3x^3 + x^2 + 4.",
      "Combine: 5x^3 - 3x^3 = 2x^3, there is only one x^2 term, -2x stays, and 1 + 4 = 5."
     ],
     "a": "2x^3 + x^2 - 2x + 5"
    }
   ],
   "ordered": true
  },
  {
   "n": 40,
   "title": "Multiplying Polynomials",
   "concept": "The distributive property says the factor outside the parentheses multiplies EVERY term inside, one by one. A lone minus sign in front, like -(3x - 5), means multiply by -1, so every sign inside flips. When you multiply monomials, multiply the number parts and ADD the exponents of the same base, because x^3 times x^2 is just x multiplied five times. A power raised to another power, like (x^4)^3, multiplies the exponents instead, giving x^12, and the number in front gets raised too.",
   "example": "-(3x^2 - 4x + 7) = -1(3x^2 - 4x + 7) = -3x^2 + 4x - 7; -2(4x^2 - 3x + 1) = -8x^2 + 6x - 2; 2x^2(3x^3y) = 6x^5y; (2x^3)^2 = 4x^6",
   "instruction": "Items 1-20: Perform the distributive property to the following polynomials. Items 21-40: Multiply the following monomials. (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "-(-13k - 12kw - w)",
     "a": "12kw + 13k + w",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-(-22y + 21xy - x)",
     "a": "-21xy + x + 22y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-(-b^2 - b + 1)",
     "a": "b^2 + b - 1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-(7s^2 - 7s - 2)",
     "a": "-7s^2 + 7s + 2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-8(8a - 2ab + 3b)",
     "a": "16ab - 64a - 24b",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-(x^2 + 2x - 3)",
     "a": "-x^2 - 2x + 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-(3a^2 - 2a - 1)",
     "a": "-3a^2 + 2a + 1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-2(-x^2 - 2x - 2)",
     "a": "2x^2 + 4x + 4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-9(-w^2 + 2w)",
     "a": "9w^2 - 18w",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-4(p^2 - p + 100)",
     "a": "-4p^2 + 4p - 400",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-4(-4x + 21)",
     "a": "16x - 84",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-13(-x - 2xy + y)",
     "a": "26xy + 13x - 13y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-11(2a + 3ab - 4b)",
     "a": "-33ab - 22a + 44b",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(1/4)(12x - 4)",
     "a": "3x - 1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(1/2)(-2m + 8n - 6)",
     "a": "-m + 4n - 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3/4)(-4a - 12b)",
     "a": "-3a - 9b",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-(1/2)(10p - 36)",
     "a": "-5p + 18",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-(3/4)(40 + 12t)",
     "a": "-9t - 30",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-(1/4)(8m - 16mn - 4n)",
     "a": "4mn - 2m + n",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-4(-d - 3e + (1/2)f)",
     "a": "4d + 12e - 2f",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^9)(2x)",
     "a": "2x^10",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3x^5)(5)",
     "a": "15x^5",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(6)(3x^5)",
     "a": "18x^5",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3w^2)(5w)",
     "a": "15w^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2w)(2w^9)",
     "a": "4w^10",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-2w^7)(4w^8)",
     "a": "-8w^15",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^7)(y^5)(x^2)(y^7)",
     "a": "x^9y^12",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-8x^3)(-5x^2)",
     "a": "40x^5",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^7)(w^3)(x^6)(w^6)",
     "a": "w^9x^13",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^2)(w^10)(w^2)(2x^6)",
     "a": "2w^12x^8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "5^2 * (4x^2)^2 (w)",
     "a": "400wx^4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-2)^3 (x^4)^8",
     "a": "-8x^32",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-3x^9)(x^8)",
     "a": "-3x^17",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5x^2)(x^8)^2",
     "a": "5x^18",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-6)^6 (x^9)^5 (x^5)^7",
     "a": "46656x^80",
     "type": "algebra",
     "text": true
    },
    {
     "q": "6^5 (x^10)^1 (x^9)^8",
     "a": "7776x^82",
     "type": "algebra",
     "text": true
    },
    {
     "q": "2(6x^2)(x^4)",
     "a": "12x^6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4x^3)(w^8)^6",
     "a": "4w^48x^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^8)(2x^3)",
     "a": "2x^11",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x^4)(4x^5)(x^2)^10",
     "a": "8x^29",
     "type": "algebra",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "-(5a^2 - 3a + 8)",
     "steps": [
      "The minus in front means multiply every term by -1.",
      "-1 times 5a^2 = -5a^2, -1 times -3a = +3a, -1 times 8 = -8."
     ],
     "a": "-5a^2 + 3a - 8"
    },
    {
     "q": "-6(3x - 2xy + 5y)",
     "steps": [
      "Multiply each term inside by -6.",
      "-6 times 3x = -18x, -6 times -2xy = +12xy, -6 times 5y = -30y."
     ],
     "a": "-18x + 12xy - 30y"
    },
    {
     "q": "(1/3)(9m - 15)",
     "steps": [
      "Multiply each term by 1/3, which is the same as dividing by 3.",
      "9m divided by 3 = 3m, and 15 divided by 3 = 5, keeping the minus sign."
     ],
     "a": "3m - 5"
    },
    {
     "q": "(-2x^3)(5x^2)^2",
     "steps": [
      "Do the power first: (5x^2)^2 = 5^2 times x^(2 times 2) = 25x^4.",
      "Multiply the number parts: -2 times 25 = -50.",
      "Add the exponents of x: 3 + 4 = 7."
     ],
     "a": "-50x^7"
    }
   ],
   "ordered": true
  },
  {
   "n": 41,
   "title": "Multiplying Polynomials (Binomials)",
   "concept": "To multiply two binomials, every term in the first must meet every term in the second, which gives four products. FOIL is a way to remember the order: First terms, Outer terms, Inner terms, Last terms. The Outer and Inner products are usually like terms, so add them to get the middle term. Watch the signs carefully, since a negative times a negative gives a positive.",
   "example": "(2x + 3)(x - 5) = 2x^2 - 10x + 3x - 15 = 2x^2 - 7x - 15 (FOIL method)",
   "instruction": "Multiply the following binomials. (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "(3x - 1)(3x - 3)",
     "a": "9x^2 - 12x + 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x - 3)(5x - 5)",
     "a": "5x^2 - 20x + 15",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3x + 2)(3x - 4)",
     "a": "9x^2 - 6x - 8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x - 6)(2x + 2)",
     "a": "2x^2 - 10x - 12",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x - 7)(2x - 2)",
     "a": "2x^2 - 16x + 14",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x + 2)(2x + 3)",
     "a": "4x^2 + 10x + 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(7x + 2)(5x + 5)",
     "a": "35x^2 + 45x + 10",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5x - 3)(2x + 2)",
     "a": "10x^2 + 4x - 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x - 2)(2x - 4)",
     "a": "2x^2 - 8x + 8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x + 7)(x + 3)",
     "a": "2x^2 + 13x + 21",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(8x + 7)(x - 1)",
     "a": "8x^2 - x - 7",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3x - 7)(4x - 2)",
     "a": "12x^2 - 34x + 14",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3x + 1)(3x - 4)",
     "a": "9x^2 - 9x - 4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(7x + 7)(4x - 5)",
     "a": "28x^2 - 7x - 35",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(7x - 6)(2x + 5)",
     "a": "14x^2 + 23x - 30",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x + 3)(3x - 5)",
     "a": "3x^2 + 4x - 15",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5x - 2)(2x - 5)",
     "a": "10x^2 - 29x + 10",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3x - 1)(x + 2)",
     "a": "3x^2 + 5x - 2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(9x + 8)(2x - 5)",
     "a": "18x^2 - 29x - 40",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x - 5)(x + 3)",
     "a": "2x^2 + x - 15",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x - 5)(x + 3)",
     "a": "x^2 - 2x - 15",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x - 6)(x + 1)",
     "a": "2x^2 - 4x - 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x - 2)(x - 3)",
     "a": "2x^2 - 8x + 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x - 5)(2x + 3)",
     "a": "4x^2 - 4x - 15",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x - 3)(2x + 3)",
     "a": "4x^2 - 9",
     "type": "algebra",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "(2x + 5)(x - 4)",
     "steps": [
      "First: 2x times x = 2x^2. Outer: 2x times -4 = -8x.",
      "Inner: 5 times x = 5x. Last: 5 times -4 = -20.",
      "Add the middle terms: -8x + 5x = -3x."
     ],
     "a": "2x^2 - 3x - 20"
    },
    {
     "q": "(4x - 3)(2x - 7)",
     "steps": [
      "First: 4x times 2x = 8x^2. Outer: 4x times -7 = -28x.",
      "Inner: -3 times 2x = -6x. Last: -3 times -7 = +21.",
      "Add the middle terms: -28x - 6x = -34x."
     ],
     "a": "8x^2 - 34x + 21"
    },
    {
     "q": "(3x + 2)(x + 6)",
     "steps": [
      "First: 3x times x = 3x^2. Outer: 3x times 6 = 18x.",
      "Inner: 2 times x = 2x. Last: 2 times 6 = 12.",
      "Add the middle terms: 18x + 2x = 20x."
     ],
     "a": "3x^2 + 20x + 12"
    },
    {
     "q": "(5x + 4)(5x - 4)",
     "steps": [
      "First: 5x times 5x = 25x^2. Outer: 5x times -4 = -20x.",
      "Inner: 4 times 5x = +20x. Last: 4 times -4 = -16.",
      "The middle terms cancel: -20x + 20x = 0."
     ],
     "a": "25x^2 - 16"
    }
   ]
  },
  {
   "n": 42,
   "title": "Multiplying Polynomials",
   "concept": "To multiply a binomial by a trinomial, each of the 2 terms in front must multiply each of the 3 terms inside, so you get 6 products, then you combine the like terms. Work left to right and keep the signs with their numbers so nothing gets lost. For dividing monomials, divide the number parts and SUBTRACT the exponents of the same base, top exponent minus bottom exponent. If the bottom exponent is bigger, that base simply stays in the denominator, for example x^2 over x^5 becomes 1 over x^3.",
   "example": "(2x+3)(4x^2-x+5) = 8x^3+10x^2+7x+15; 4x^3y^4z^5/(2x^2yz^7) = 2xy^3/z^2",
   "instruction": "Multiply the following binomial and trinomial (items 1-20). Divide the following (items 21-40). (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "(2x+6)(2x^2-3x+4)",
     "a": "4x^3 + 6x^2 - 10x + 24",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4x-7)(2x^2+x+2)",
     "a": "8x^3 - 10x^2 + x - 14",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x+4)(3x^2+4x+2)",
     "a": "3x^3 + 16x^2 + 18x + 8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(6x+8)(5x^2-3x-5)",
     "a": "30x^3 + 22x^2 - 54x - 40",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4x-4)(x^2-5x-2)",
     "a": "4x^3 - 24x^2 + 12x + 8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4x-9)(2x^2-2x-2)",
     "a": "8x^3 - 26x^2 + 10x + 18",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(6x-10)(2x^2+5x-5)",
     "a": "12x^3 + 10x^2 - 80x + 50",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3x-4)(3x^2-2x+3)",
     "a": "9x^3 - 18x^2 + 17x - 12",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x+4)(3x^2-5x+2)",
     "a": "3x^3 + 7x^2 - 18x + 8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5x-9)(3x^2-5x+4)",
     "a": "15x^3 - 52x^2 + 65x - 36",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(8x-3)(2x^2-2x+5)",
     "a": "16x^3 - 22x^2 + 46x - 15",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x+6)(5x^2+3x+4)",
     "a": "5x^3 + 33x^2 + 22x + 24",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x-4)(5x^2-4x-3)",
     "a": "10x^3 - 28x^2 + 10x + 12",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x+6)(3x^2-3x-1)",
     "a": "3x^3 + 15x^2 - 19x - 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(8x+1)(x^2+4x+2)",
     "a": "8x^3 + 33x^2 + 20x + 2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5x-2)(4x^2-3x-2)",
     "a": "20x^3 - 23x^2 - 4x + 4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x+6)(x^2+5x-1)",
     "a": "2x^3 + 16x^2 + 28x - 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4x-6)(5x^2+3x+1)",
     "a": "20x^3 - 18x^2 - 14x - 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(7x-7)(x^2-3x-2)",
     "a": "7x^3 - 28x^2 + 7x + 14",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x-7)(3x^2+5x+4)",
     "a": "3x^3 - 16x^2 - 31x - 28",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(w^6)/(w^4)",
     "a": "w^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^8)(w^8)/(w^8)",
     "a": "x^8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^7)/(x^5)",
     "a": "x^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "a^12b^5/(a^3b)",
     "a": "a^9b^4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "ab^7/b^6",
     "a": "ab",
     "type": "algebra",
     "text": true
    },
    {
     "q": "x^8y^2/(x^3y)",
     "a": "x^5y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "a^11b^5/(a^9b)",
     "a": "a^2b^4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "2ab^5/(a^3b)",
     "a": "2b^4/a^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "12ab^3/(4b^6)",
     "a": "3a/b^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "c^4d^2/(cd^5)",
     "a": "c^3/d^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "21x^5y^2/(7x^3y)",
     "a": "3x^2y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "7a^9b^5/(3a^9b)",
     "a": "7b^4/3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "16c^10d^2/(8cd^5)",
     "a": "2c^9/d^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "9f^5/(3f)",
     "a": "3f^4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "20g^9/(4g^3)",
     "a": "5g^6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "60h^8/(30h^9)",
     "a": "2/h",
     "type": "algebra",
     "text": true
    },
    {
     "q": "70k^7/(10k^3)",
     "a": "7k^4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "32m/(64m^2)",
     "a": "1/(2m)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "15n^9/(3n^5)",
     "a": "5n^4",
     "type": "algebra",
     "text": true
    },
    {
     "q": "18p^9/(18p^10)",
     "a": "1/p",
     "type": "algebra",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "(x + 5)(2x^2 - x + 3)",
     "steps": [
      "Multiply x by each term: 2x^3 - x^2 + 3x.",
      "Multiply 5 by each term: 10x^2 - 5x + 15.",
      "Add the two lines: -x^2 + 10x^2 = 9x^2 and 3x - 5x = -2x."
     ],
     "a": "2x^3 + 9x^2 - 2x + 15"
    },
    {
     "q": "(3x - 2)(x^2 + 4x - 5)",
     "steps": [
      "Multiply 3x by each term: 3x^3 + 12x^2 - 15x.",
      "Multiply -2 by each term: -2x^2 - 8x + 10.",
      "Combine: 12x^2 - 2x^2 = 10x^2 and -15x - 8x = -23x."
     ],
     "a": "3x^3 + 10x^2 - 23x + 10"
    },
    {
     "q": "24x^7y^4/(6x^3y)",
     "steps": [
      "Divide the numbers: 24 divided by 6 = 4.",
      "Subtract the exponents of x: 7 - 3 = 4.",
      "Subtract the exponents of y: 4 - 1 = 3."
     ],
     "a": "4x^4y^3"
    },
    {
     "q": "10a^2b^6/(5a^5b^2)",
     "steps": [
      "Divide the numbers: 10 divided by 5 = 2.",
      "For a: 2 - 5 is negative, so a^3 stays in the denominator.",
      "For b: 6 - 2 = 4, so b^4 stays on top."
     ],
     "a": "2b^4/a^3"
    }
   ],
   "ordered": true
  },
  {
   "n": 43,
   "title": "Dividing Polynomials",
   "concept": "To divide by a monomial, divide the number parts and subtract the exponents of matching letters, top exponent minus bottom exponent. When the top is a polynomial with several terms, split it up and divide EACH term by the monomial separately, because a sum divided by something is the same as each part divided by it. Remember that any base divided by itself leaves 1, so 6x divided by 6x is 1, not 0. Keep each term's sign with it as you go.",
   "example": "(18x^4-10x^2+6x^7)/(2x^2) = 9x^2-5+3x^5",
   "instruction": "Divide the following (items 1-20). Divide the following trinomial and monomial (items 21-50). (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "66a^6/(6a^5)",
     "a": "11a",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-50m^4/(2m)",
     "a": "-25m^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "7m^5/(7m^2)",
     "a": "m^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "30x^2/(6x)",
     "a": "5x",
     "type": "algebra",
     "text": true
    },
    {
     "q": "81k^3/(9k^2)",
     "a": "9k",
     "type": "algebra",
     "text": true
    },
    {
     "q": "28x^4y^3z^5/(7xyz^2)",
     "a": "4x^3y^2z^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "48a^3b^4/(8a^2b)",
     "a": "6ab^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-45p^5q^4r^5/(9p^3q^2r^2)",
     "a": "-5p^2q^2r^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "45x/15",
     "a": "3x",
     "type": "algebra",
     "text": true
    },
    {
     "q": "26x^4y^5/(-13xy^4)",
     "a": "-2x^3y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-121m^4n^2/(-11mn)",
     "a": "11m^3n",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-21c^4d^2/(-7cd)",
     "a": "3c^3d",
     "type": "algebra",
     "text": true
    },
    {
     "q": "49a^4b^5/(-7ab^4)",
     "a": "-7a^3b",
     "type": "algebra",
     "text": true
    },
    {
     "q": "15a/3",
     "a": "5a",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-40x^5y^4z^5/(8x^3y^2z^2)",
     "a": "-5x^2y^2z^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "36m^3n^4/(9m^2n)",
     "a": "4mn^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "18x^3y^2z^4/(3xy^2z^3)",
     "a": "6x^2z",
     "type": "algebra",
     "text": true
    },
    {
     "q": "49k^3/(7k^2)",
     "a": "7k",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-150ab^4c/(10ab^2c)",
     "a": "-15b^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "16a^5b^2/(24a^2b^2)",
     "a": "2a^3/3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2x^9-2x^5-2x^3)/(2x^3)",
     "a": "(2x^9 - 2x^5 - 2x^3)/(2x^3)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(21a^4+3a^3-9a^2)/(3a)",
     "a": "(21a^4 + 3a^3 - 9a^2)/(3a)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3x^3-2x+3x^2)/x",
     "a": "(3x^3 + 3x^2 - 2x)/(x)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(33y^6-55y^3+22y^8)/(11y^2)",
     "a": "(22y^8 + 33y^6 - 55y^3)/(11y^2)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3x^12-5x^6+4x^9)/x^5",
     "a": "(3x^12 + 4x^9 - 5x^6)/(x^5)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(12x^3-16x^2+8x)/(4x)",
     "a": "(12x^3 - 16x^2 + 8x)/(4x)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(20x^2+16x+4)/4",
     "a": "5x^2 + 4x + 1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5x^7-20x^4-15x^8)/(5x^2)",
     "a": "(-15x^8 + 5x^7 - 20x^4)/(5x^2)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3x^2-3x-3)/3",
     "a": "x^2 - x - 1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(14x^2+7x+21x^3)/(7x)",
     "a": "(21x^3 + 14x^2 + 7x)/(7x)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(12ab^2-3ab-12a)/(3a)",
     "a": "(12ab^2 - 3ab - 12a)/(3a)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(8at+2an-4a)/(2a)",
     "a": "(2an + 8at - 4a)/(2a)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(12uv-9u-3uw)/(3u)",
     "a": "(12uv - 3uw - 9u)/(3u)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(16xy^2+2x^2-8xy)/(2x)",
     "a": "(16xy^2 - 8xy + 2x^2)/(2x)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5a^2b+10ab-30ab^2)/(5ab)",
     "a": "(-30ab^2 + 5a^2b + 10ab)/(5ab)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(11mn-22m^2n+33mn^2)/(11mn)",
     "a": "(33mn^2 - 22m^2n + 11mn)/(11mn)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4pq+8qr-12q^2)/(4q)",
     "a": "(4pq + 8qr - 12q^2)/(4q)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(18t^2+9t^3-t)/t",
     "a": "(9t^3 + 18t^2 - t)/(t)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4f^3+6f-8f^2)/(2f)",
     "a": "(4f^3 - 8f^2 + 6f)/(2f)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(99hk-18h^2k+27h^3k)/(9hk)",
     "a": "(27h^3k - 18h^2k + 99hk)/(9hk)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(12x^9-36x^5-4x^3)/(4x^3)",
     "a": "(12x^9 - 36x^5 - 4x^3)/(4x^3)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(21a^4b^2+3a^3b-9a^2b)/(3a^2b)",
     "a": "(21a^4b^2 + 3a^3b - 9a^2b)/(3a^2b)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^3-x+x^2)/x",
     "a": "(x^3 + x^2 - x)/(x)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(121y^6-99y^3+44y^8)/(11y^3)",
     "a": "(44y^8 + 121y^6 - 99y^3)/(11y^3)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(33x^12-21x^6+51x^9)/(3x^5)",
     "a": "(33x^12 + 51x^9 - 21x^6)/(3x^5)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(32x^3+24x^2+8x)/(4x)",
     "a": "(32x^3 + 24x^2 + 8x)/(4x)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(100x^2+160x+200)/20",
     "a": "5x^2 + 8x + 10",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^7-x^4-x^8)/x^3",
     "a": "(-x^8 + x^7 - x^4)/(x^3)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(42x^2-24x-42)/6",
     "a": "7x^2 - 4x - 7",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4x^2+14x+2x^3)/(2x)",
     "a": "(2x^3 + 4x^2 + 14x)/(2x)",
     "type": "algebra",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "56a^7/(8a^4)",
     "steps": [
      "Divide the numbers: 56 divided by 8 = 7.",
      "Subtract the exponents of a: 7 - 4 = 3."
     ],
     "a": "7a^3"
    },
    {
     "q": "-36x^5y^3z^4/(9x^2yz)",
     "steps": [
      "Divide the numbers: -36 divided by 9 = -4.",
      "Subtract exponents letter by letter: x gives 5 - 2 = 3, y gives 3 - 1 = 2, z gives 4 - 1 = 3."
     ],
     "a": "-4x^3y^2z^3"
    },
    {
     "q": "(18x^5 - 12x^3 + 6x^2)/(6x^2)",
     "steps": [
      "Split it into three separate divisions, each over 6x^2.",
      "18x^5 divided by 6x^2 = 3x^3, and 12x^3 divided by 6x^2 = 2x.",
      "6x^2 divided by 6x^2 = 1, so keep the signs in order."
     ],
     "a": "3x^3 - 2x + 1"
    },
    {
     "q": "(10a^2b + 25ab^2 - 15ab)/(5ab)",
     "steps": [
      "Divide each term by 5ab one at a time.",
      "10a^2b divided by 5ab = 2a, and 25ab^2 divided by 5ab = 5b.",
      "15ab divided by 5ab = 3, and that term is negative."
     ],
     "a": "2a + 5b - 3"
    }
   ],
   "ordered": true
  },
  {
   "n": 44,
   "title": "Multiplication and Division of Polynomials",
   "concept": "To multiply a polynomial by a single term, multiply that term into every term inside the brackets and keep careful track of the signs. To multiply two brackets, every term of the first must meet every term of the second, then you combine like terms. When you divide, divide the number parts and subtract the exponents of matching letters, so x^5 divided by x^2 leaves x^3, and if the bigger exponent is underneath, the letter stays underneath, as b^4 divided by b^12 gives 1/b^8. If the top is a sum, divide it one term at a time.",
   "example": "",
   "instruction": "Perform the following operations. (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "2(4m^2-5m+3)",
     "a": "8m^2 - 10m + 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-3(5x-10y-1)",
     "a": "-15x + 30y + 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(1/4)(-8s^2+4s-2)",
     "a": "-2s^2 + s - (1/2)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-(2/3)(6s^2-4s-9)",
     "a": "-4s^2 + (8/3)s + 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(4x-21)(9x-2)",
     "a": "36x^2 - 197x + 42",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(r-3)(r+2)",
     "a": "r^2 - r - 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x+y)(2x-y^2)",
     "a": "-xy^2 - y^3 + 2xy + 2x^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(6x-y)(-y+2)",
     "a": "-6xy + y^2 + 12x - 2y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(m+7)(-5m^2+2m-1)",
     "a": "-5m^3 - 33m^2 + 13m - 7",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(2a-8)(3a^2-3a-7)",
     "a": "6a^3 - 30a^2 + 10a + 56",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-b+2)(6b^2+8b-1)",
     "a": "-6b^3 + 4b^2 + 17b - 2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-2c-6)(7c^2-4c+2)",
     "a": "-14c^3 - 34c^2 + 20c - 12",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(30x^6y^10z^6)/(5x^2y^4z^5)",
     "a": "6x^4y^6z",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(24a^14b^9c^6)/(6a^8b^4c^6)",
     "a": "4a^6b^5",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-18f^8-16f^5+20f^3)/(2f^3)",
     "a": "(-18f^8 - 16f^5 + 20f^3)/(2f^3)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(21a^5b^4-7a^4b^5+14a^3b^6)/(7ab)",
     "a": "(14a^3b^6 - 7a^4b^5 + 21a^5b^4)/(7ab)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(20x^4+5x^3-10x^2)/(-5x)",
     "a": "(20x^4 + 5x^3 - 10x^2)/(-5x)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(x^9-x^6+x^3)/x^2",
     "a": "(x^9 - x^6 + x^3)/(x^2)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "54b^4c^3/(-6b^12c)",
     "a": "-9c^2/b^8",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-18x^7y^5-15x^4y^2)/(3x^3y)",
     "a": "(-18x^7y^5 - 15x^4y^2)/(3x^3y)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(32p^6q^5-28p^4q^10)/(4p^2q^6)",
     "a": "(-28p^4q^10 + 32p^6q^5)/(4p^2q^6)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(72a^7b^9c^2+96a^6b^8c^3)/(6a^5b^4c^2)",
     "a": "(72a^7b^9c^2 + 96a^6b^8c^3)/(6a^5b^4c^2)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-4x^8y^3-6x^6y^4+2x^5y^5)/(2x^3y)",
     "a": "(-4x^8y^3 + 2x^5y^5 - 6x^6y^4)/(2x^3y)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-99m^9n^6+81m^8n^7-54m^7n^8)/(9m^4n^2)",
     "a": "(-54m^7n^8 + 81m^8n^7 - 99m^9n^6)/(9m^4n^2)",
     "type": "algebra",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "5(3x^2 - 2x + 4)",
     "steps": [
      "Multiply 5 by each term inside the brackets.",
      "5 * 3x^2 = 15x^2, 5 * (-2x) = -10x, 5 * 4 = 20."
     ],
     "a": "15x^2 - 10x + 20"
    },
    {
     "q": "(x + 4)(x - 5)",
     "steps": [
      "Multiply x by x and by -5: x^2 - 5x.",
      "Multiply 4 by x and by -5: 4x - 20.",
      "Put them together: x^2 - 5x + 4x - 20.",
      "Combine the like terms: -5x + 4x = -x."
     ],
     "a": "x^2 - x - 20"
    },
    {
     "q": "(2a + 3)(a^2 - 4a + 1)",
     "steps": [
      "2a times each term of the trinomial: 2a^3 - 8a^2 + 2a.",
      "3 times each term of the trinomial: 3a^2 - 12a + 3.",
      "Add the two lines and combine: -8a^2 + 3a^2 = -5a^2 and 2a - 12a = -10a."
     ],
     "a": "2a^3 - 5a^2 - 10a + 3"
    },
    {
     "q": "(20x^5y^4 - 8x^3y^2)/(4x^2y)",
     "steps": [
      "Divide each term on top by 4x^2y separately.",
      "20 divided by 4 = 5, x^(5-2) = x^3, y^(4-1) = y^3, so the first term is 5x^3y^3.",
      "-8 divided by 4 = -2, x^(3-2) = x, y^(2-1) = y, so the second term is -2xy."
     ],
     "a": "5x^3y^3 - 2xy"
    }
   ]
  },
  {
   "n": 45,
   "title": "Multiplication and Division of Polynomials",
   "concept": "When the term outside the brackets carries a variable, multiply the numbers and add the exponents of the same letter, so 3x^2 times 4x^3 gives 12x^5. Multiplying two brackets still means every term of the first meets every term of the second, and only then do you collect like terms. To divide, subtract the exponents of matching letters, and remember that a letter with a bigger exponent underneath stays underneath. For a product of two fractions, multiply the tops, multiply the bottoms, then simplify once at the end.",
   "example": "",
   "instruction": "Perform the following operations. (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "6(2m^2-9m+1)",
     "a": "12m^2 - 54m + 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-7x(9x-3y-2)",
     "a": "21xy - 63x^2 + 14x",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(1/5)s(-40s^2+50s-25)",
     "a": "-8s^3 + 10s^2 - 5s",
     "type": "algebra",
     "text": true
    },
    {
     "q": "-(8/9)s^3(54s^2-63s-81)",
     "a": "-48s^5 + 56s^4 + 72s^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(3x-4)(7x-9)",
     "a": "21x^2 - 55x + 36",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(6r-4)(r+4)",
     "a": "6r^2 + 20r - 16",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(8x+2y)(8x-y)",
     "a": "8xy + 64x^2 - 2y^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(5x-6y)(-3y+1)",
     "a": "-15xy + 18y^2 + 5x - 6y",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(m^2+3)(-4m^2+9m-1)",
     "a": "-4m^4 + 9m^3 - 13m^2 + 27m - 3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(10a^4-9)(5a^2-a-9)",
     "a": "50a^6 - 10a^5 - 90a^4 - 45a^2 + 9a + 81",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-7b^3+1)(9b^2+5b-6)",
     "a": "-63b^5 - 35b^4 + 42b^3 + 9b^2 + 5b - 6",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-8c-9)(6c^2-2c+6)",
     "a": "-48c^3 - 38c^2 - 30c - 54",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(24x^2y^2z^4)/(6xyz)",
     "a": "4xyz^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(66a^3b^4c^8)/(11a^3bc^6)",
     "a": "6b^3c^2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-84f^21-96f^8+36f^6)/(12f^2)",
     "a": "(-84f^21 - 96f^8 + 36f^6)/(12f^2)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(35a^6b-30a^4b^4+80ab^7)/(5ab)",
     "a": "(80ab^7 - 30a^4b^4 + 35a^6b)/(5ab)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "22b^23c^16/(-5b^12c^8)",
     "a": "-22b^11c^8/5",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-9x^14y^7-45x^8y^8)/(9x^4y^4)",
     "a": "(-9x^14y^7 - 45x^8y^8)/(9x^4y^4)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(64p^24q^8-48p^54q^26)/(36p^18q^3)",
     "a": "(-48p^54q^26 + 64p^24q^8)/(36p^18q^3)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(81a^6b^6c^2+105a^2b^3c^6)/(42abc^2)",
     "a": "(81a^6b^6c^2 + 105a^2b^3c^6)/(42abc^2)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-39x^9y^3-63x^4y^6+9x^3y^8)/(18x^2y^2)",
     "a": "(-39x^9y^3 + 9x^3y^8 - 63x^4y^6)/(18x^2y^2)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "(-34m^4n^2+98m^3n^5-62m^2n^7)/(8m^2n)",
     "a": "(-62m^2n^7 + 98m^3n^5 - 34m^4n^2)/(8m^2n)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "((-63x^10y^5)/(-5x^2y^4))((75x^4y^6)/(-9y^4))",
     "a": "-105x^12y^3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "((15a^10b^5)/(4c^9))((28c^24)/(21a^2b^2))",
     "a": "5a^8b^3c^15",
     "type": "algebra",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "4x^2(3x^3 - 2x + 7)",
     "steps": [
      "Multiply 4x^2 into each term inside.",
      "4 * 3 = 12 and x^2 * x^3 = x^5, giving 12x^5.",
      "4 * (-2) = -8 and x^2 * x = x^3, giving -8x^3. The last term is 4 * 7 * x^2 = 28x^2."
     ],
     "a": "12x^5 - 8x^3 + 28x^2"
    },
    {
     "q": "(2m^3 + 5)(3m^2 - m + 4)",
     "steps": [
      "2m^3 times each term: 6m^5 - 2m^4 + 8m^3.",
      "5 times each term: 15m^2 - 5m + 20.",
      "No two terms have the same power, so nothing combines. Write them from the highest power down."
     ],
     "a": "6m^5 - 2m^4 + 8m^3 + 15m^2 - 5m + 20"
    },
    {
     "q": "(45a^8b^6)/(9a^3b^2)",
     "steps": [
      "Divide the numbers: 45 divided by 9 = 5.",
      "Subtract the exponents: a^(8-3) = a^5 and b^(6-2) = b^4."
     ],
     "a": "5a^5b^4"
    },
    {
     "q": "((12x^5y^3)/(5z^2))((15z^6)/(4x^2y))",
     "steps": [
      "Multiply the tops: 180x^5y^3z^6. Multiply the bottoms: 20x^2yz^2.",
      "Divide the numbers: 180 divided by 20 = 9.",
      "Subtract exponents: x^(5-2) = x^3, y^(3-1) = y^2, z^(6-2) = z^4."
     ],
     "a": "9x^3y^2z^4"
    }
   ]
  },
  {
   "n": 46,
   "title": "Linear Equations",
   "concept": "An equation stays balanced as long as you do the very same thing to both sides. Clear the brackets first by distributing, and clear fractions by multiplying every single term by the common denominator. Then gather the x terms on one side and the plain numbers on the other, and divide by the number in front of x. Leave the answer as a fraction if it does not divide evenly. For a word problem, let x stand for the thing you are asked to find, turn the sentence into an equation, then solve it.",
   "example": "",
   "instruction": "Solve for x. Show your solution. (Items 23-32: Make an equation for each problem and solve for the answer.) (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "10 + 6x = 1",
     "a": "-3/2",
     "type": "key",
     "text": true
    },
    {
     "q": "5x - 2 = 14",
     "a": "16/5",
     "type": "key",
     "text": true
    },
    {
     "q": "-7x + 3 = -22",
     "a": "25/7",
     "type": "key",
     "text": true
    },
    {
     "q": "(x+9) + (x-2) = 0",
     "a": "-7/2",
     "type": "key",
     "text": true
    },
    {
     "q": "4[(3x-2) - 4] = -1",
     "a": "1 11/12",
     "type": "key",
     "text": true
    },
    {
     "q": "-5[2x + 4(x-2)] = 3",
     "a": "1 7/30",
     "type": "key",
     "text": true
    },
    {
     "q": "2(x-4) + (2x-7) = -2",
     "a": "13/4",
     "type": "key",
     "text": true
    },
    {
     "q": "2(5x-1) = 3(7-x)",
     "a": "23/13",
     "type": "key",
     "text": true
    },
    {
     "q": "3[x + 4(x-2)] = -2(x-1) + 5",
     "a": "1 14/17",
     "type": "key",
     "text": true
    },
    {
     "q": "3 - 2(5-3x) = 5(3x+1) - 7",
     "a": "-5/9",
     "type": "key",
     "text": true
    },
    {
     "q": "18 - (x-5) = 6(3x-8)",
     "a": "71/19",
     "type": "key",
     "text": true
    },
    {
     "q": "-(4x+5) + (4x+7) = 12x - 14",
     "a": "4/3",
     "type": "key",
     "text": true
    },
    {
     "q": "-4(12x+5) - 8x + 2 = x + 9",
     "a": "-9/19",
     "type": "key",
     "text": true
    },
    {
     "q": "(1/4)x + 3/4 = 2",
     "a": "5",
     "type": "key",
     "text": true
    },
    {
     "q": "(3x-2)/10 = -4",
     "a": "-38/3",
     "type": "key",
     "text": true
    },
    {
     "q": "(3/8)x - 1/2 = 3/4",
     "a": "10/3",
     "type": "key",
     "text": true
    },
    {
     "q": "-2/9 + 3/7 = (4/7)x",
     "a": "13/36",
     "type": "key",
     "text": true
    },
    {
     "q": "4/9 + 1/3 = (5/3)x",
     "a": "7/15",
     "type": "key",
     "text": true
    },
    {
     "q": "(9/8)x - 5/6 = 7/4",
     "a": "62/27",
     "type": "key",
     "text": true
    },
    {
     "q": "17/7 - 6/7 = -(69/21)x",
     "a": "-11/23",
     "type": "key",
     "text": true
    },
    {
     "q": "5/36 + (29/9)x = -(223/54)x",
     "a": "-15/794",
     "type": "key",
     "text": true
    },
    {
     "q": "(5/84)x + 81/12 = (185/36)x",
     "a": "1701/1280",
     "type": "key",
     "text": true
    },
    {
     "q": "I bought 4 bags of jolens. Luis bought 2 bags and added his 24 old jolens. We counted our jolens and found out that we have similar number of jolens. How many jolens does each bag contain? (Equation)",
     "a": "4x = 2x+24",
     "type": "algebra",
     "eqn": true,
     "text": true
    },
    {
     "q": "My age is twice my sister's age. The sum of our ages is 15. How old is my sister? (Equation)",
     "a": "x+2x = 15",
     "type": "algebra",
     "eqn": true,
     "text": true
    },
    {
     "q": "Cagayan River is 494 kilometers longer than Marikina River. If the sum of their lengths is 516 km, how long is Marikina River? (Equation)",
     "a": "x+(494+x) = 516",
     "type": "algebra",
     "eqn": true,
     "text": true
    },
    {
     "q": "A number and four times the difference of that number and 6 is 1. (Equation)",
     "a": "x+4(x-6) = 1",
     "type": "algebra",
     "eqn": true,
     "text": true
    },
    {
     "q": "The average of two consecutive even numbers is 17. What are the numbers? (Equation)",
     "a": "(2x + (2x+2))/2 = 17",
     "type": "algebra",
     "eqn": true,
     "text": true
    },
    {
     "q": "Answer to item 23 (jolens in each bag)",
     "a": "12",
     "type": "key",
     "text": true
    },
    {
     "q": "Answer to item 24 (sister's age)",
     "a": "5",
     "type": "key",
     "text": true
    },
    {
     "q": "Answer to item 25 (length of Marikina River)",
     "a": "11",
     "type": "key",
     "text": true
    },
    {
     "q": "Answer to item 26 (the number)",
     "a": "5",
     "type": "key",
     "text": true
    },
    {
     "q": "Answer to item 27 (the two consecutive even numbers)",
     "a": "16, 18",
     "type": "key",
     "seq": true,
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "4x - 7 = 13",
     "steps": [
      "Add 7 to both sides: 4x = 20.",
      "Divide both sides by 4."
     ],
     "a": "5"
    },
    {
     "q": "3(x - 2) + 5 = 2(x + 4)",
     "steps": [
      "Distribute both sides: 3x - 6 + 5 = 2x + 8.",
      "Simplify the left side: 3x - 1 = 2x + 8.",
      "Subtract 2x from both sides: x - 1 = 8.",
      "Add 1 to both sides."
     ],
     "a": "9"
    },
    {
     "q": "(2/3)x + 1/6 = 5/6",
     "steps": [
      "The common denominator is 6, so multiply every term by 6: 4x + 1 = 5.",
      "Subtract 1 from both sides: 4x = 4.",
      "Divide both sides by 4."
     ],
     "a": "1"
    },
    {
     "q": "A tricycle ride costs 3 pesos less than a jeepney ride. The two rides together cost 29 pesos. How much is the tricycle fare?",
     "steps": [
      "Let x be the tricycle fare, so the jeepney fare is x + 3.",
      "Equation: x + (x + 3) = 29.",
      "Simplify: 2x + 3 = 29, so 2x = 26.",
      "Divide both sides by 2."
     ],
     "a": "13 pesos"
    }
   ],
   "ordered": true
  },
  {
   "n": 47,
   "title": "Inequalities",
   "concept": "To test a number, put it in place of the letter and work out both sides until each is a single number. Then read the symbol and ask if the statement is true: < means smaller than, > means bigger than, <= means smaller than or equal to, and >= means bigger than or equal to. If the statement comes out true, the number is a solution, and if it comes out false, it is not. Watch the signs with 'or equal to', because landing exactly on the number still counts as a solution.",
   "example": "Example 1: x + 3 < 8; x = 4. Substituting x: 4 + 3 < 8, or 7 < 8. This statement is true. Therefore, 4 is a solution. Example 2: 2x - 1 < -3; x = 1. Substituting x: 2(1) - 1 < -3, 3 - 1 < -3, 2 < -3, a false statement. So 1 is not a solution.",
   "instruction": "Determine whether the given number is a solution to the inequality. Write 'Solution' or 'Not a Solution.'",
   "items": [
    {
     "q": "x - 4 < 9; x = 4",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "8 + y > 15; y = 7",
     "a": "Not a Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "19 >= a + 10; a = 3",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "y - 3 < 14; y = 4",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "3 < x - 7; x = 15",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "9 + x <= 4; x = 0",
     "a": "Not a Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "a - 9 > 15; a = 8",
     "a": "Not a Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "y - 7 <= 16; y = 2",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "a - 6 <= 17 - 4; a = 5",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "12 + b < 13 - 10; b = 4",
     "a": "Not a Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "7 + x - 5 > 16; x = 18",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "y + 8 >= -8 + 11; y = 7",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "x - 11 > 4 - 9; x = 2",
     "a": "Not a Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "6 + a < -7 + 2; a = -15",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "y + 3 < 8 + 10; y = 13",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "a + 5 > 13 - 6; a = 3",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "a - 2 <= 17 - 4; a = 15",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "5 + x - 8 > 4; x = 10",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "y + 2 < 7 + 8; y = 13",
     "a": "Not a Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "4 + 4 < x - 7; x = 15",
     "a": "Not a Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "21 - 8 >= a + 10; a = 3",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "10 + y - 7 <= 16 - 7; y = 2",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "12 + y + 8 >= 20 + 6; y = 7",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "y - 3 > 10 - 5; y = 14",
     "a": "Solution",
     "type": "key",
     "text": true
    },
    {
     "q": "7 + y > 15 - 2; y = 8",
     "a": "Solution",
     "type": "key",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "x + 6 > 10; x = 3",
     "steps": [
      "Replace x with 3: 3 + 6 > 10.",
      "The left side is 9, and 9 is not bigger than 10, so the statement is false."
     ],
     "a": "Not a Solution"
    },
    {
     "q": "a - 5 <= 12; a = 17",
     "steps": [
      "Replace a with 17: 17 - 5 <= 12.",
      "The left side is 12, and 12 is equal to 12, which the <= sign allows."
     ],
     "a": "Solution"
    },
    {
     "q": "8 + y < 20 - 6; y = 5",
     "steps": [
      "Replace y with 5: 8 + 5 < 20 - 6.",
      "Work out both sides: 13 < 14.",
      "13 really is smaller than 14, so the statement is true."
     ],
     "a": "Solution"
    },
    {
     "q": "2 + b >= 11 - 4; b = 4",
     "steps": [
      "Replace b with 4: 2 + 4 >= 11 - 4.",
      "Work out both sides: 6 >= 7.",
      "6 is neither bigger than nor equal to 7."
     ],
     "a": "Not a Solution"
    }
   ]
  },
  {
   "n": 50,
   "title": "Factoring by GCF",
   "concept": "Factoring means rewriting the expression as things multiplied together. Look first for a factor that every term shares and pull it out in front. For x^2 + bx + c, hunt for two numbers that multiply to c and add to b, then write (x + first)(x + second), and if a number sits in front of x^2, test that number's factor pairs in the brackets as well. A difference of two squares such as x^2 - 49 or 9y^2 - 64 always splits into the sum times the difference, since 9y^2 is (3y)^2, and a perfect square trinomial such as x^2 + 6x + 9 simply gives the same bracket twice, (x+3)(x+3).",
   "example": "",
   "instruction": "Factor the following using the methods learned. (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "x^2 + 10x + 16",
     "a": "(x+8)(x+2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "x^2 - 25",
     "a": "(x+5)(x-5)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "y^2 - y - 20",
     "a": "(y-5)(y+4)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "y^2 - 100",
     "a": "(y+10)(y-10)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "z^2 + 11z + 10",
     "a": "(z+10)(z+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "z^2 - 36",
     "a": "(z+6)(z-6)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "a^2 - 18a + 80",
     "a": "(a-10)(a-8)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "a^2 + 11a - 60",
     "a": "(a+15)(a-4)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "t^2 - 11t + 28",
     "a": "(t-7)(t-4)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "x^2 + x - 6",
     "a": "(x+3)(x-2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "3b^2 + 8b + 4",
     "a": "(3b+2)(b+2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "a^2 - 3a - 4",
     "a": "(a-4)(a+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "x^2 - 6x - 27",
     "a": "(x-9)(x+3)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "y^2 + 8y + 7",
     "a": "(y+7)(y+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "a^2 + 2a - 8",
     "a": "(a+4)(a-2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "x^2 + 9x + 20",
     "a": "(x+5)(x+4)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "x^3 + 8x^2",
     "a": "x^2(x+8)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "4x^2y - 12xy^2",
     "a": "4xy(x-3y)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "x^2 - 10x + 25",
     "a": "(x-5)^2",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "y^2 + 12y + 36",
     "a": "(y+6)^2",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "4x^2 - 25",
     "a": "(2x+5)(2x-5)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "100y^2 - 81",
     "a": "(10y+9)(10y-9)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "x^2 + 5x + 6",
     "a": "(x+3)(x+2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "y^2 - 14y + 45",
     "a": "(y-9)(y-5)",
     "type": "algebra",
     "factor": true,
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "x^2 + 7x + 12",
     "steps": [
      "Look for two numbers that multiply to 12 and add to 7.",
      "3 and 4 work, because 3 * 4 = 12 and 3 + 4 = 7.",
      "Put each one in a bracket with x."
     ],
     "a": "(x+3)(x+4)"
    },
    {
     "q": "m^2 - 5m - 24",
     "steps": [
      "Two numbers must multiply to -24 and add to -5, so one is positive and one is negative.",
      "-8 and 3 work, because -8 * 3 = -24 and -8 + 3 = -5."
     ],
     "a": "(m-8)(m+3)"
    },
    {
     "q": "x^2 - 49",
     "steps": [
      "Both parts are perfect squares, since 49 is 7^2, and they are subtracted.",
      "A difference of squares becomes the sum times the difference."
     ],
     "a": "(x+7)(x-7)"
    },
    {
     "q": "6a^3 - 15a^2",
     "steps": [
      "Both terms share 3 and both share a^2, so the common factor is 3a^2.",
      "6a^3 divided by 3a^2 = 2a, and -15a^2 divided by 3a^2 = -5.",
      "Write the common factor outside and what is left inside."
     ],
     "a": "3a^2(2a-5)"
    }
   ]
  },
  {
   "n": 51,
   "title": "Factoring the Trinomial",
   "concept": "When the number in front of x^2 is not 1, you test pairs until the middle term comes out right. List the factor pairs of the first number and the factor pairs of the last number, place them into two brackets, then check the outer and inner products, which must add up to the middle term. Mind the signs: if the last number is positive, both brackets take the sign of the middle term, and if it is negative, the brackets take opposite signs. When every term shares a common factor, that extra number can simply stay inside one bracket, as in 2x^2 + 6x + 4 = (2x+2)(x+2).",
   "example": "Factor 10x^2 + 23x + 12. List factors of a and c, cross multiply to find the pair whose sum of products equals the middle term (15 + 8 = 23). 10x^2 + 23x + 12 = (5x+4)(2x+3). Example 2: 12x^2 - 34x + 14 = (3x-7)(4x-2).",
   "instruction": "Factor the following. (Trinomial of the type ax^2 + bx + c, factor by trial and error.) (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "3x^2 + 5x + 2",
     "a": "(3x+2)(x+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "24y^2 - 46y + 10",
     "a": "(8y-2)(3y-5)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "4x^2 + 4x - 3",
     "a": "(2x-1)(2x+3)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "3a^2 - 14a + 8",
     "a": "(3a-2)(a-4)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "6x^2 - x - 15",
     "a": "(2x+3)(3x-5)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "6y^2 - y - 2",
     "a": "(2y+1)(3y-2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "3x^2 - 16x - 12",
     "a": "(3x+2)(x-6)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "5t^2 + 2t - 3",
     "a": "(5t-3)(t+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "20a^2 - 23a + 6",
     "a": "(5a-2)(4a-3)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "24x^2 - 47x - 2",
     "a": "(24x+1)(x-2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "18x^2 - 6x - 24",
     "a": "(6x+6)(3x-4) or (18x-24)(x+1) or (9x-12)(2x+2)",
     "type": "algebra",
     "factor": true,
     "alt": true,
     "text": true
    },
    {
     "q": "8x^2 - 28x - 16",
     "a": "(4x+2)(2x-8) or (4x-16)(2x+1)",
     "type": "algebra",
     "factor": true,
     "alt": true,
     "text": true
    },
    {
     "q": "10y^2 + 23y + 12",
     "a": "(5y+4)(2y+3)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "24y^2 + 2y - 15",
     "a": "(6y+5)(4y-3)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "15x^2 + 4x - 3",
     "a": "(5x+3)(3x-1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "4z^2 + 2z - 6",
     "a": "(2z+3)(2z-2)",
     "type": "algebra",
     "factor": true,
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "2x^2 + 7x + 3",
     "steps": [
      "2 splits only as 2 and 1, and 3 splits only as 3 and 1. Every sign is positive.",
      "Try (2x+1)(x+3): outer 6x, inner x, together 7x.",
      "The middle term matches, and 1 * 3 = 3."
     ],
     "a": "(2x+1)(x+3)"
    },
    {
     "q": "5x^2 - 17x + 6",
     "steps": [
      "5 splits only as 5 and 1, and 6 splits as 6 and 1 or as 3 and 2.",
      "The last term is positive and the middle is negative, so both brackets take minus signs.",
      "Try (5x-2)(x-3): outer -15x, inner -2x, together -17x.",
      "That matches, and -2 * -3 = 6."
     ],
     "a": "(5x-2)(x-3)"
    },
    {
     "q": "6x^2 + 11x - 10",
     "steps": [
      "Pairs for 6 are 6 and 1 or 3 and 2. Pairs for -10 are 1 and -10, 2 and -5, 5 and -2, 10 and -1.",
      "Try (3x-2)(2x+5): outer 15x, inner -4x, together 11x.",
      "That matches, and -2 * 5 = -10."
     ],
     "a": "(3x-2)(2x+5)"
    },
    {
     "q": "10x^2 + 4x - 6",
     "steps": [
      "Every term is even, so expect an extra factor of 2 to sit inside one bracket.",
      "Try (5x-3)(2x+2): outer 10x, inner -6x, together 4x.",
      "Check the ends: 5x * 2x = 10x^2 and -3 * 2 = -6."
     ],
     "a": "(5x-3)(2x+2)"
    }
   ]
  },
  {
   "n": 52,
   "title": "Factoring by Grouping, Word Problems with Factoring",
   "concept": "Factoring by grouping splits a polynomial into smaller groups that each have a common factor. With four terms, make two pairs, pull the greatest common factor out of each pair, then factor out the bracket both pairs share; with six terms you can group them three at a time in the same way. If the brackets left behind do not match, rearrange the terms and pair them differently before giving up. One more thing to watch: when you factor out a GCF, every term stays inside the bracket, so a term that becomes 1 must still be written as 1.",
   "example": "",
   "instruction": "Factor by grouping. You can group the terms together two at a time or three at a time. Either way will produce the result. (Items 3-14: Factor the polynomials below by grouping the terms together two at a time.) (Items 15-18: Answer the following questions.) (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "ax + ay + bx + by + cx + cy",
     "a": "(a+b+c)(x+y)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "ax + bx + cx + ay + by + cy",
     "a": "(x+y)(a+b+c)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "6x^2 + 9x + 4x + 6",
     "a": "(3x+2)(2x+3)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "6x^2 - 9x - 4x + 6",
     "a": "(3x-2)(2x-3)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "20x^2 - 2x + 50x - 5",
     "a": "(10x-1)(2x+5)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "20x^2 + 25x + 4x + 5",
     "a": "(4x+5)(5x+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "20x^2 + 4x + 25x + 5",
     "a": "(4x+5)(5x+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "x^3 + 2x^2 + 3x + 6",
     "a": "(x+2)(x^2+3)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "x^3 - 5x^2 - 4x + 20",
     "a": "(x-5)(x^2-4) or (x-2)(x+2)(x-5)",
     "type": "algebra",
     "factor": true,
     "alt": true,
     "text": true
    },
    {
     "q": "6x^3 - 4x^2 + 15x - 10",
     "a": "(3x-2)(2x^2+5)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "8x^3 - 12x^2 + 14x - 21",
     "a": "(4x^2+7)(2x-3)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "20x^3 + 4x^2 - 25x - 5",
     "a": "(4x^2-5)(5x+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "3ax - 2a + 15x - 10",
     "a": "(3x-2)(a+5)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "2x^2 + 5ax - 2xy - 5ay",
     "a": "(2x+5a)(x-y)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "The greatest common factor of the binomial 3x + 6 is 3. The greatest common factor of the binomial 2x + 4 is 2. What is the greatest common factor of their product, (3x + 6)(2x + 4), when it has been multiplied out?",
     "a": "6",
     "type": "key",
     "text": true
    },
    {
     "q": "The greatest common factors of the binomials 4x + 2 and 5x + 10 are 2 and 5, respectively. What is the greatest common factor of their product, (4x + 2)(5x + 10), when it has been multiplied out?",
     "a": "10",
     "type": "key",
     "text": true
    },
    {
     "q": "The following factorization is incorrect. Find the mistake and correct the right-hand side: 12x^2 + 6x + 3 = 3(4x^2 + 2x)",
     "a": "3(4x^2+2x+1)",
     "type": "algebra",
     "text": true
    },
    {
     "q": "Find the mistake of the following factorization and then rewrite the right-hand side correctly: 10x^2 + 2x + 6 = 2(5x^2 + 3)",
     "a": "2(5x^2+x+3)",
     "type": "algebra",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Factor by grouping: 10x^2 + 15x + 6x + 9",
     "steps": [
      "Pair the terms: (10x^2 + 15x) + (6x + 9).",
      "Take the GCF out of each pair: 5x(2x + 3) + 3(2x + 3).",
      "Both pairs leave (2x + 3), so factor that out."
     ],
     "a": "(2x+3)(5x+3)"
    },
    {
     "q": "Factor by grouping: x^3 + 3x^2 - 2x - 6",
     "steps": [
      "Pair the terms: (x^3 + 3x^2) + (-2x - 6).",
      "Factor each pair: x^2(x + 3) - 2(x + 3).",
      "The common bracket is (x + 3)."
     ],
     "a": "(x+3)(x^2-2)"
    },
    {
     "q": "The greatest common factor of 3x + 9 is 3, and the greatest common factor of 4x + 8 is 4. What is the greatest common factor of their product (3x + 9)(4x + 8) once it is multiplied out?",
     "steps": [
      "Write each binomial with its GCF outside: 3(x + 3) and 4(x + 2).",
      "Multiply: 3 times 4 times (x + 3)(x + 2), which is 12(x^2 + 5x + 6).",
      "Multiplied out that is 12x^2 + 60x + 72, and the number outside is the GCF."
     ],
     "a": "12"
    },
    {
     "q": "The factorization 8x^2 + 12x + 4 = 4(2x^2 + 3x) is wrong. Find the mistake and write the right side correctly.",
     "steps": [
      "Multiply the right side back: 4(2x^2 + 3x) = 8x^2 + 12x, so the last term 4 was dropped.",
      "Divide the last term by the GCF: 4 divided by 4 is 1, and that 1 must stay inside the bracket.",
      "Write all three terms inside: 4(2x^2 + 3x + 1)."
     ],
     "a": "4(2x^2+3x+1)"
    }
   ],
   "ordered": true
  },
  {
   "n": 53,
   "title": "Factoring the Difference of Two Cubes",
   "concept": "A sum of two cubes always factors the same way: a^3 + b^3 = (a + b)(a^2 - ab + b^2). Start by taking the cube root of each term to find a and b, for example the cube root of 8x^3 is 2x and the cube root of 27 is 3. The signs follow a fixed pattern: the short bracket keeps the plus sign, and the long bracket goes minus in the middle and plus at the end. The long bracket will not factor again, so you can stop there.",
   "example": "",
   "instruction": "Factor each polynomial. (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "1000x^3 + 1",
     "a": "(10x+1)(100x^2-10x+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "y^3 + 64x^3",
     "a": "(y+4x)(y^2-4xy+16x^2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "8a^3 + 1",
     "a": "(2a+1)(4a^2-2a+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "c^3 + 27",
     "a": "(c+3)(c^2-3c+9)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "125x^3 + 1",
     "a": "(5x+1)(25x^2-5x+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "343x^3 + 27",
     "a": "(7x+3)(49x^2-21x+9)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "27y^3 + 64",
     "a": "(3y+4)(9y^2-12y+16)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "w^3 + 1",
     "a": "(w+1)(w^2-w+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "64y^3 + 1",
     "a": "(4y+1)(16y^2-4y+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "m^3 + 216",
     "a": "(m+6)(m^2-6m+36)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "r^3 + 343",
     "a": "(r+7)(r^2-7r+49)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "27t^3 + 125",
     "a": "(3t+5)(9t^2-15t+25)",
     "type": "algebra",
     "factor": true,
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Factor: x^3 + 8",
     "steps": [
      "The cube root of x^3 is x and the cube root of 8 is 2, so a = x and b = 2.",
      "Use a^3 + b^3 = (a + b)(a^2 - ab + b^2).",
      "Substitute: (x + 2)(x^2 - 2x + 4)."
     ],
     "a": "(x+2)(x^2-2x+4)"
    },
    {
     "q": "Factor: 27n^3 + 8",
     "steps": [
      "Cube roots: 27n^3 gives 3n and 8 gives 2.",
      "Short bracket: (3n + 2).",
      "Long bracket: (3n)^2 - (3n)(2) + 2^2 = 9n^2 - 6n + 4."
     ],
     "a": "(3n+2)(9n^2-6n+4)"
    },
    {
     "q": "Factor: 64p^3 + 125q^3",
     "steps": [
      "a = 4p because 4^3 = 64, and b = 5q because 5^3 = 125.",
      "Short bracket: (4p + 5q).",
      "Long bracket: (4p)^2 - (4p)(5q) + (5q)^2 = 16p^2 - 20pq + 25q^2."
     ],
     "a": "(4p+5q)(16p^2-20pq+25q^2)"
    }
   ]
  },
  {
   "n": 54,
   "title": "Factoring the Difference of Two Cubes",
   "concept": "A difference of two cubes factors as a^3 - b^3 = (a - b)(a^2 + ab + b^2). Take the cube root of each term to find a and b, for example the cube root of 64m^3 is 4m. The short bracket carries the minus sign, and inside the long bracket the middle term is plus. If the problem is written the other way round, like 8 - y^3, the term that is being subtracted is b, so a = 2 and b = y.",
   "example": "",
   "instruction": "Factor each polynomial. (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "27x^3 - 8y^3",
     "a": "(3x-2y)(9x^2+6xy+4y^2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "8x^3 - 27y^3",
     "a": "(2x-3y)(4x^2+6xy+9y^2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "125y^3 - 8x^3",
     "a": "(5y-2x)(25y^2+10xy+4x^2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "125y^3 - 1",
     "a": "(5y-1)(25y^2+5y+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "x^3 - 216",
     "a": "(x-6)(x^2+6x+36)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "-8x^3 + 27y^3",
     "a": "(3y-2x)(9y^2+6xy+4x^2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "z^3 - 1",
     "a": "(z-1)(z^2+z+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "x^3 - y^3",
     "a": "(x-y)(x^2+xy+y^2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "8x^3 - 27y^3",
     "a": "(2x-3y)(4x^2+6xy+9y^2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "125x^3 - 1",
     "a": "(5x-1)(25x^2+5x+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "27y^3 - 64",
     "a": "(3y-4)(9y^2+12y+16)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "1000x^3 - 1",
     "a": "(10x-1)(100x^2+10x+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Factor: n^3 - 125",
     "steps": [
      "Cube roots: a = n and b = 5 because 5^3 = 125.",
      "Use a^3 - b^3 = (a - b)(a^2 + ab + b^2).",
      "Substitute: (n - 5)(n^2 + 5n + 25)."
     ],
     "a": "(n-5)(n^2+5n+25)"
    },
    {
     "q": "Factor: 64m^3 - 1",
     "steps": [
      "a = 4m because (4m)^3 = 64m^3, and b = 1.",
      "Short bracket: (4m - 1).",
      "Long bracket: (4m)^2 + (4m)(1) + 1^2 = 16m^2 + 4m + 1."
     ],
     "a": "(4m-1)(16m^2+4m+1)"
    },
    {
     "q": "Factor: 27a^3 - 125b^3",
     "steps": [
      "Cube roots: 3a and 5b.",
      "Short bracket: (3a - 5b).",
      "Long bracket: (3a)^2 + (3a)(5b) + (5b)^2 = 9a^2 + 15ab + 25b^2."
     ],
     "a": "(3a-5b)(9a^2+15ab+25b^2)"
    },
    {
     "q": "Factor: 8 - y^3",
     "steps": [
      "The cube being subtracted is y^3, so a = 2 and b = y.",
      "Short bracket: (2 - y).",
      "Long bracket: 2^2 + (2)(y) + y^2 = 4 + 2y + y^2."
     ],
     "a": "(2-y)(4+2y+y^2)"
    }
   ]
  },
  {
   "n": 55,
   "title": "Factoring the Sum and Difference of Two Cubes",
   "concept": "This set mixes the methods, and the hint in brackets tells you which tool to pick up. For ax^2 + bx + c, find two numbers that multiply to a times c and add to b, split the middle term with them, then group. For four terms, pair them up, take the GCF out of each pair and factor out the bracket they share. For two cube terms, use a^3 + b^3 = (a + b)(a^2 - ab + b^2) or a^3 - b^3 = (a - b)(a^2 + ab + b^2).",
   "example": "",
   "instruction": "Factor the following using the hint given. (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "3b^2 + 8b + 4 (ax^2 + bx + c)",
     "a": "(3b+2)(b+2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "ac + ad + bc + bd (by grouping)",
     "a": "(a+b)(c+d)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "9a^2 + 6a - 8 (ax^2 + bx + c)",
     "a": "(3a-2)(3a+4)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "8 - 27b^3 (difference of two cubes)",
     "a": "(2-3b)(4+6b+9b^2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "b^3 - b^2 + 2b - 2 (by grouping)",
     "a": "(b-1)(b^2+2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "6x^2 - 5x - 25 (ax^2 + bx + c)",
     "a": "(3x+5)(2x-5)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "125x^3 + 1 (sum of two cubes)",
     "a": "(5x+1)(25x^2-5x+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "4t^2 + 4t - 15 (ax^2 + bx + c)",
     "a": "(2t-3)(2t+5)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "y^2 - 8y - y + 8 (by grouping)",
     "a": "(y-1)(y-8)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "64y^3 + 1 (sum of two cubes)",
     "a": "(4y+1)(16y^2-4y+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "12a^2 - 17a + 6 (ax^2 + bx + c)",
     "a": "(4a-3)(3a-2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "64 - 125x^3 (difference of two cubes)",
     "a": "(4-5x)(16+20x+25x^2)",
     "type": "algebra",
     "factor": true,
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Factor using the hint: 3x^2 + 10x + 8 (ax^2 + bx + c)",
     "steps": [
      "Multiply a and c: 3 times 8 = 24. Find two numbers that multiply to 24 and add to 10, which are 6 and 4.",
      "Split the middle term: 3x^2 + 6x + 4x + 8.",
      "Group and factor: 3x(x + 2) + 4(x + 2).",
      "The shared bracket is (x + 2)."
     ],
     "a": "(x+2)(3x+4)"
    },
    {
     "q": "Factor using the hint: 2m^3 + m^2 + 6m + 3 (by grouping)",
     "steps": [
      "Pair the terms: (2m^3 + m^2) + (6m + 3).",
      "Factor each pair: m^2(2m + 1) + 3(2m + 1).",
      "Pull out the shared bracket (2m + 1)."
     ],
     "a": "(2m+1)(m^2+3)"
    },
    {
     "q": "Factor using the hint: 343 - 8w^3 (difference of two cubes)",
     "steps": [
      "Cube roots: 343 gives 7 and 8w^3 gives 2w, so a = 7 and b = 2w.",
      "Short bracket: (7 - 2w).",
      "Long bracket: 7^2 + (7)(2w) + (2w)^2 = 49 + 14w + 4w^2."
     ],
     "a": "(7-2w)(49+14w+4w^2)"
    },
    {
     "q": "Factor using the hint: 8x^3 + 27 (sum of two cubes)",
     "steps": [
      "Cube roots: a = 2x and b = 3.",
      "Short bracket: (2x + 3).",
      "Long bracket: (2x)^2 - (2x)(3) + 3^2 = 4x^2 - 6x + 9."
     ],
     "a": "(2x+3)(4x^2-6x+9)"
    }
   ]
  },
  {
   "n": 56,
   "title": "Factoring using Various Methods",
   "concept": "When nobody tells you which method to use, let the shape of the polynomial decide. Always take out the greatest common factor first, because it makes everything that follows smaller and easier. Then count the terms: two terms means a difference of squares or a sum or difference of cubes, three terms means split the middle term and group, and four terms means straight grouping. Keep checking your brackets, because a factor like x^2 - 4 can still be factored again.",
   "example": "",
   "instruction": "Factor each polynomial. (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "6x^2 - 3x - 18",
     "a": "(3x-6)(2x+3)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "5x^2 + 2x - 3",
     "a": "(5x-3)(x+1)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "x^3 - 343",
     "a": "(x-7)(x^2+7x+49)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "ac + cd - ab - bd",
     "a": "(c-b)(a+d)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "3x^2 + 18ax + 27a^2",
     "a": "(3x+9a)(x+3a)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "8x^3 + 125",
     "a": "(2x+5)(4x^2-10x+25)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "2x^2 + 11x + 12",
     "a": "(2x+3)(x+4)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "9m^2 + 3m^3 + 8m + 24",
     "a": "(3m^2+8)(m+3)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "3y^2 + 15y - 42",
     "a": "3(y+7)(y-2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "x^8 - y^8",
     "a": "(x^4+y^4)(x^2+y^2)(x+y)(x-y)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "8p^3 + 27q^3",
     "a": "(2p+3q)(4p^2-6pq+9q^2)",
     "type": "algebra",
     "factor": true,
     "text": true
    },
    {
     "q": "3y^3 + 6y^2 - 27y - 54",
     "a": "3(y+2)(y^2-9) or 3(y+2)(y+3)(y-3)",
     "type": "algebra",
     "factor": true,
     "alt": true,
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Factor: 4x^2 - 36",
     "steps": [
      "The GCF is 4, so write 4(x^2 - 9).",
      "Two terms are left and both are perfect squares, so use the difference of squares.",
      "x^2 - 9 = (x + 3)(x - 3)."
     ],
     "a": "4(x+3)(x-3)"
    },
    {
     "q": "Factor: 2x^2 + 9x + 10",
     "steps": [
      "There is no common factor, and there are three terms, so split the middle term.",
      "a times c is 20, and 4 + 5 = 9, so write 2x^2 + 4x + 5x + 10.",
      "Group and factor: 2x(x + 2) + 5(x + 2)."
     ],
     "a": "(x+2)(2x+5)"
    },
    {
     "q": "Factor completely: 2x^3 + 6x^2 - 8x - 24",
     "steps": [
      "Take out the GCF 2: 2(x^3 + 3x^2 - 4x - 12).",
      "Four terms inside, so group: 2[x^2(x + 3) - 4(x + 3)] = 2(x + 3)(x^2 - 4).",
      "x^2 - 4 is a difference of squares, so factor it again into (x + 2)(x - 2)."
     ],
     "a": "2(x+3)(x+2)(x-2)"
    },
    {
     "q": "Factor completely: 2a^3 - 54",
     "steps": [
      "Take out the GCF 2: 2(a^3 - 27).",
      "Inside is a difference of cubes with cube roots a and 3.",
      "a^3 - 27 = (a - 3)(a^2 + 3a + 9)."
     ],
     "a": "2(a-3)(a^2+3a+9)"
    }
   ]
  },
  {
   "n": 57,
   "title": "Factoring using various methods, Word Problems on Factoring",
   "concept": "To check a factorization, multiply the factors back out. If the product matches the original polynomial exactly, the answer is correct, and if even one term is different, the factors are wrong. Working backwards uses the same thinking: to find a missing factor of x^2 + bx + c, look for two numbers that multiply to c and add to b. Keep the square patterns in mind, (x + k)^2 = x^2 + 2kx + k^2 and (x - k)^2 = x^2 - 2kx + k^2, while x^2 - k^2 is (x + k)(x - k) and never a square of a binomial.",
   "example": "",
   "instruction": "Tell whether each is factored correctly. Write Yes or No. (Items 11-20: Answer the following questions.) (Type powers with ^ e.g. x^2; write products like 3x or (x+1)(x+2).)",
   "items": [
    {
     "q": "3a^2 - a - 4 = (3a - 4)(a + 1)",
     "a": "YES",
     "type": "key",
     "text": true
    },
    {
     "q": "y^2 - 3y + 2 = (y - 2)(y + 1)",
     "a": "NO",
     "type": "key",
     "text": true
    },
    {
     "q": "x^2 + 6x - 16 = (x + 8)(x - 2)",
     "a": "YES",
     "type": "key",
     "text": true
    },
    {
     "q": "a^2 + 6a + 9 = (a + 3)^2",
     "a": "YES",
     "type": "key",
     "text": true
    },
    {
     "q": "x^2 + ax - bx - ab = (x - b)(x - a)",
     "a": "NO",
     "type": "key",
     "text": true
    },
    {
     "q": "9a^2 - 12a + 4 = (3a - 4)(3a - 1)",
     "a": "NO",
     "type": "key",
     "text": true
    },
    {
     "q": "4a^2 + 12a + 9 = (2a + 3)^2",
     "a": "YES",
     "type": "key",
     "text": true
    },
    {
     "q": "x^2 - 2x + 1 = (x + 1)^2",
     "a": "NO",
     "type": "key",
     "text": true
    },
    {
     "q": "x^2 - 6x + 9 = (x - 3)^2",
     "a": "YES",
     "type": "key",
     "text": true
    },
    {
     "q": "m^2 - 49 = (m - 7)^2",
     "a": "NO",
     "type": "key",
     "text": true
    },
    {
     "q": "If one of the factors of x^2 + 7x + 10 is x + 5, what is the other factor?",
     "a": "x+2",
     "type": "algebra",
     "text": true
    },
    {
     "q": "If one of the factors of 6a^2 + 7a + 2 is 3a + 2, what is the other factor?",
     "a": "2a+1",
     "type": "algebra",
     "text": true
    },
    {
     "q": "The factors are (2x + 1)(x + 3), what is the polynomial?",
     "a": "2x^2+7x+3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "What polynomial factors to (2x + 3)(2x - 3)?",
     "a": "4x^2-9",
     "type": "algebra",
     "text": true
    },
    {
     "q": "What polynomial factors to (x + 4)(2x - 5)?",
     "a": "2x^2+3x-20",
     "type": "algebra",
     "text": true
    },
    {
     "q": "What is the value of b for which the polynomial x^2 + bx + 49 factors to (x + 7)^2?",
     "a": "14",
     "type": "key",
     "text": true
    },
    {
     "q": "What is the value of c for which the polynomial x^2 + 10x + c factors to (x + 5)^2?",
     "a": "25",
     "type": "key",
     "text": true
    },
    {
     "q": "What polynomial when factored gives (4x + 3)(x - 1)?",
     "a": "4x^2-x-3",
     "type": "algebra",
     "text": true
    },
    {
     "q": "A polynomial (6a^2 + 13a + 2) is factored as (6a + 1)(a + 2). Is it factored correctly? If not, write the correct factors.",
     "a": "YES",
     "type": "key",
     "text": true
    },
    {
     "q": "A polynomial (y^2 - 10y + 21) is factored as (y + 7)(y + 3). Is it factored correctly? If not, write the correct factors.",
     "a": "(y-7)(y-3)",
     "type": "algebra",
     "factor": true,
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Tell whether this is factored correctly: x^2 + 2x - 15 = (x + 5)(x - 3)",
     "steps": [
      "Multiply the right side out: x^2 - 3x + 5x - 15.",
      "Combine the middle terms: x^2 + 2x - 15.",
      "This is exactly the left side."
     ],
     "a": "Yes"
    },
    {
     "q": "Tell whether this is factored correctly, and if not, give the correct factors: x^2 - 11x + 24 = (x - 6)(x + 4)",
     "steps": [
      "Multiply the right side out: x^2 + 4x - 6x - 24 = x^2 - 2x - 24, which is not the same.",
      "Go back to the original and find two numbers that multiply to 24 and add to -11, which are -8 and -3.",
      "Write them as factors and check: (x - 8)(x - 3) = x^2 - 11x + 24."
     ],
     "a": "No, it is (x-8)(x-3)"
    },
    {
     "q": "One factor of x^2 + 9x + 20 is x + 4. What is the other factor?",
     "steps": [
      "The two constants must multiply to 20 and add to 9.",
      "One of them is 4, and 4 times 5 = 20 while 4 + 5 = 9.",
      "So the missing constant is 5."
     ],
     "a": "x+5"
    },
    {
     "q": "What value of c makes x^2 - 12x + c factor to (x - 6)^2?",
     "steps": [
      "Expand the square: (x - 6)^2 = x^2 - 6x - 6x + 36.",
      "That simplifies to x^2 - 12x + 36.",
      "Compare with x^2 - 12x + c."
     ],
     "a": "36"
    }
   ],
   "ordered": true
  }
 ],
 "g2": [
  {
   "n": 1,
   "title": "Counting Objects",
   "concept": "Counting means saying the number names in order, one number for every object. Touch each object once as you count it, so you never count the same one twice and never skip one. The last number you say is how many there are in all. When the group is big, count along a row first, then move to the next row so you do not lose your place.",
   "example": "",
   "instruction": "Count the objects in each set and write the number on the space provided.",
   "items": [
    {
     "q": "How many hearts are there?",
     "a": "5",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 5,
      "icon": "heart"
     }
    },
    {
     "q": "How many moons are there?",
     "a": "3",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 3,
      "icon": "moon"
     }
    },
    {
     "q": "How many stars are there?",
     "a": "2",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 2,
      "icon": "star"
     }
    },
    {
     "q": "How many smileys are there?",
     "a": "6",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 6,
      "icon": "smiley"
     }
    },
    {
     "q": "How many babies are there?",
     "a": "4",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 4,
      "icon": "smiley"
     }
    },
    {
     "q": "How many parrots are there?",
     "a": "8",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 8,
      "icon": "bird"
     }
    },
    {
     "q": "How many leaves are there?",
     "a": "10",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 10,
      "icon": "leaf"
     }
    },
    {
     "q": "How many flowers are there?",
     "a": "7",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 7,
      "icon": "flower"
     }
    },
    {
     "q": "How many trees are there?",
     "a": "1",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 1,
      "icon": "leaf"
     }
    },
    {
     "q": "How many clouds are there?",
     "a": "9",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 9,
      "icon": "cloud"
     }
    },
    {
     "q": "How many dogs are there?",
     "a": "18",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 18,
      "icon": "dogs"
     }
    },
    {
     "q": "How many bananas are there?",
     "a": "14",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 14,
      "icon": "apple"
     }
    },
    {
     "q": "How many trucks are there?",
     "a": "15",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 15,
      "icon": "trucks"
     }
    },
    {
     "q": "How many chickens are there?",
     "a": "11",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 11,
      "icon": "bird"
     }
    },
    {
     "q": "How many beachballs are there?",
     "a": "18",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 18,
      "icon": "beachballs"
     }
    },
    {
     "q": "How many carabaos are there?",
     "a": "12",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 12,
      "icon": "carabaos"
     }
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "How many apples are there?",
     "fig": {
      "kind": "count",
      "n": 4,
      "icon": "apple"
     },
     "steps": [
      "Touch each apple one time.",
      "Count them: 1, 2, 3, 4.",
      "The last number you say is 4."
     ],
     "a": "4"
    },
    {
     "q": "How many balloons are there?",
     "fig": {
      "kind": "count",
      "n": 7,
      "icon": "balloon"
     },
     "steps": [
      "Count the top row: 1, 2, 3, 4.",
      "Keep counting on the next row: 5, 6, 7.",
      "The last number you say is 7."
     ],
     "a": "7"
    },
    {
     "q": "How many squares are there?",
     "fig": {
      "kind": "count",
      "n": 10,
      "icon": "square"
     },
     "steps": [
      "Count the top row: 1, 2, 3, 4, 5.",
      "Keep counting on the next row: 6, 7, 8, 9, 10.",
      "The last number you say is 10."
     ],
     "a": "10"
    },
    {
     "q": "How many triangles are there?",
     "fig": {
      "kind": "count",
      "n": 3,
      "icon": "triangle"
     },
     "steps": [
      "Point to each one once.",
      "Count them: 1, 2, 3.",
      "The last number you say is 3."
     ],
     "a": "3"
    }
   ]
  },
  {
   "n": 4,
   "title": "Join the camping by counting the objects",
   "concept": "Count the objects one by one, touching each one just once, and the last number you say tells how many there are. Then write that number as a word, not as a figure. The number words are one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve. Say the number out loud first, then write it the way you say it.",
   "example": "",
   "instruction": "Join the camping by counting the objects on the next page. Write your answers in word form.",
   "items": [
    {
     "q": "How many trees are there?",
     "a": "three; 3",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 3,
      "icon": "leaf"
     },
     "alt": true
    },
    {
     "q": "How many boy scouts are there?",
     "a": "seven; 7",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 7,
      "icon": "smiley"
     },
     "alt": true
    },
    {
     "q": "How many stars are there?",
     "a": "seven; 7",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 7,
      "icon": "star"
     },
     "alt": true
    },
    {
     "q": "How many tents are there?",
     "a": "one; 1",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 1,
      "icon": "triangle"
     },
     "alt": true
    },
    {
     "q": "How many snakes are there?",
     "a": "two; 2",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 2,
      "icon": "snakes"
     },
     "alt": true
    },
    {
     "q": "How many flashlights are there?",
     "a": "five; 5",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 5,
      "icon": "flashlights"
     },
     "alt": true
    },
    {
     "q": "How many matchboxes are there?",
     "a": "six; 6",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 6,
      "icon": "square"
     },
     "alt": true
    },
    {
     "q": "How many jackets are there?",
     "a": "three; 3",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 3,
      "icon": "jackets"
     },
     "alt": true
    },
    {
     "q": "How many bats are there?",
     "a": "twelve; 12",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 12,
      "icon": "bird"
     },
     "alt": true
    },
    {
     "q": "How many flowers are there?",
     "a": "four; 4",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 4,
      "icon": "flower"
     },
     "alt": true
    },
    {
     "q": "How many water jugs are there?",
     "a": "five; 5",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 5,
      "icon": "waterjugs"
     },
     "alt": true
    },
    {
     "q": "How many grasshoppers are there?",
     "a": "seven; 7",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 7,
      "icon": "grasshoppers"
     },
     "alt": true
    },
    {
     "q": "How many eggs are there?",
     "a": "four; 4",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 4,
      "icon": "balloon"
     },
     "alt": true
    },
    {
     "q": "How many bottles of milk are there?",
     "a": "three; 3",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 3,
      "icon": "bottles"
     },
     "alt": true
    },
    {
     "q": "How many baskets are there?",
     "a": "two; 2",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 2,
      "icon": "baskets"
     },
     "alt": true
    },
    {
     "q": "How many girls are there?",
     "a": "three; 3",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 3,
      "icon": "smiley"
     },
     "alt": true
    },
    {
     "q": "How many cats are there?",
     "a": "five; 5",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 5,
      "icon": "cats"
     },
     "alt": true
    },
    {
     "q": "How many cats are wearing a hat?",
     "a": "one; 1",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 1,
      "icon": "cats"
     },
     "alt": true
    },
    {
     "q": "How many plates of pancakes are there?",
     "a": "four; 4",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 4,
      "icon": "plates"
     },
     "alt": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "How many apples are there? Write the answer in word form.",
     "fig": {
      "kind": "count",
      "n": 5,
      "icon": "apple"
     },
     "steps": [
      "Count them one by one: 1, 2, 3, 4, 5.",
      "The last number you say is 5.",
      "Write 5 as a word: five."
     ],
     "a": "five"
    },
    {
     "q": "How many balloons are there? Write the answer in word form.",
     "fig": {
      "kind": "count",
      "n": 8,
      "icon": "balloon"
     },
     "steps": [
      "Count the top row: 1, 2, 3, 4.",
      "Keep counting on the next row: 5, 6, 7, 8.",
      "Write 8 as a word: eight."
     ],
     "a": "eight"
    },
    {
     "q": "How many hearts are in the picture? Write the answer in word form.",
     "fig": {
      "kind": "count",
      "n": 11,
      "icon": "heart"
     },
     "steps": [
      "Count the top row: 1, 2, 3, 4, 5, 6.",
      "Keep counting on the next row: 7, 8, 9, 10, 11.",
      "Say it out loud, then write it: eleven."
     ],
     "a": "eleven"
    },
    {
     "q": "How many moons are in the picture? Write the answer in word form.",
     "fig": {
      "kind": "count",
      "n": 2,
      "icon": "moon"
     },
     "steps": [
      "Count them: 1, 2.",
      "The last number you say is 2.",
      "Write 2 as a word: two."
     ],
     "a": "two"
    }
   ]
  },
  {
   "n": 5,
   "title": "Writing Numbers in Words",
   "concept": "Writing Numbers In Words. Reference table of number words: 1 one, 2 two, 3 three, 4 four, 5 five, 6 six, 7 seven, 8 eight, 9 nine, 10 ten, 11 eleven, 12 twelve, 13 thirteen, 14 fourteen, 15 fifteen, 16 sixteen, 17 seventeen, 18 eighteen, 19 nineteen, 20 twenty, 10 ten, 20 twenty, 30 thirty, 40 forty, 50 fifty, 60 sixty, 70 seventy, 80 eighty, 90 ninety, 100 one hundred.",
   "example": "1) 36 = thirty-six",
   "instruction": "Write the following numbers in words.",
   "items": [
    {
     "q": "35",
     "a": "thirty-five",
     "type": "num-to-words"
    },
    {
     "q": "32",
     "a": "thirty-two",
     "type": "num-to-words"
    },
    {
     "q": "23",
     "a": "twenty-three",
     "type": "num-to-words"
    },
    {
     "q": "12",
     "a": "twelve",
     "type": "num-to-words"
    },
    {
     "q": "7",
     "a": "seven",
     "type": "num-to-words"
    },
    {
     "q": "18",
     "a": "eighteen",
     "type": "num-to-words"
    },
    {
     "q": "26",
     "a": "twenty-six",
     "type": "num-to-words"
    },
    {
     "q": "98",
     "a": "ninety-eight",
     "type": "num-to-words"
    },
    {
     "q": "76",
     "a": "seventy-six",
     "type": "num-to-words"
    },
    {
     "q": "45",
     "a": "forty-five",
     "type": "num-to-words"
    },
    {
     "q": "32",
     "a": "thirty-two",
     "type": "num-to-words"
    },
    {
     "q": "25",
     "a": "twenty-five",
     "type": "num-to-words"
    },
    {
     "q": "47",
     "a": "forty-seven",
     "type": "num-to-words"
    },
    {
     "q": "56",
     "a": "fifty-six",
     "type": "num-to-words"
    },
    {
     "q": "76",
     "a": "seventy-six",
     "type": "num-to-words"
    },
    {
     "q": "89",
     "a": "eighty-nine",
     "type": "num-to-words"
    },
    {
     "q": "93",
     "a": "ninety-three",
     "type": "num-to-words"
    },
    {
     "q": "47",
     "a": "forty-seven",
     "type": "num-to-words"
    },
    {
     "q": "99",
     "a": "ninety-nine",
     "type": "num-to-words"
    },
    {
     "q": "38",
     "a": "thirty-eight",
     "type": "num-to-words"
    }
   ]
  },
  {
   "n": 6,
   "title": "Writing Words into Numbers",
   "concept": "Writing words into numbers.",
   "example": "1) thirty-two = 32",
   "instruction": "Write the following words in numbers.",
   "items": [
    {
     "q": "fifty-four",
     "a": "54",
     "type": "words-to-num"
    },
    {
     "q": "thirty-six",
     "a": "36",
     "type": "words-to-num"
    },
    {
     "q": "twenty-eight",
     "a": "28",
     "type": "words-to-num"
    },
    {
     "q": "eighty-four",
     "a": "84",
     "type": "words-to-num"
    },
    {
     "q": "forty-three",
     "a": "43",
     "type": "words-to-num"
    },
    {
     "q": "twenty-five",
     "a": "25",
     "type": "words-to-num"
    },
    {
     "q": "forty-seven",
     "a": "47",
     "type": "words-to-num"
    },
    {
     "q": "eighty-nine",
     "a": "89",
     "type": "words-to-num"
    },
    {
     "q": "seventy-seven",
     "a": "77",
     "type": "words-to-num"
    },
    {
     "q": "sixty-eight",
     "a": "68",
     "type": "words-to-num"
    },
    {
     "q": "seventy-two",
     "a": "72",
     "type": "words-to-num"
    },
    {
     "q": "thirty-nine",
     "a": "39",
     "type": "words-to-num"
    },
    {
     "q": "twenty-six",
     "a": "26",
     "type": "words-to-num"
    },
    {
     "q": "sixty-four",
     "a": "64",
     "type": "words-to-num"
    },
    {
     "q": "forty-four",
     "a": "44",
     "type": "words-to-num"
    },
    {
     "q": "ninety-three",
     "a": "93",
     "type": "words-to-num"
    },
    {
     "q": "eighty-seven",
     "a": "87",
     "type": "words-to-num"
    },
    {
     "q": "forty-eight",
     "a": "48",
     "type": "words-to-num"
    },
    {
     "q": "twenty-five",
     "a": "25",
     "type": "words-to-num"
    },
    {
     "q": "thirty-three",
     "a": "33",
     "type": "words-to-num"
    }
   ]
  },
  {
   "n": 7,
   "title": "Comparing Numbers",
   "concept": "In comparing numbers, we use the following signs: > (greater than), < (less than), = (equals).",
   "example": "",
   "instruction": "Compare the following pairs of numbers. Use >, <, or = to fill in the blanks.",
   "items": [
    {
     "q": "302 _ 456",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "657 _ 257",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "105 _ 430",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "341 _ 48",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "987 _ 999",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "143 _ 689",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "540 _ 541",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "987 _ 987",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "32 _ 56",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "57 _ 57",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "15 _ 43",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "34 _ 48",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "87 _ 99",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "13 _ 89",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "40 _ 41",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "98 _ 98",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "350 _ 467",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "485 _ 204",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "352 _ 351",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "506 _ 607",
     "a": "<",
     "type": "compare"
    }
   ]
  },
  {
   "n": 8,
   "title": "Arranging Numbers in Increasing Order",
   "concept": "Arranging Numbers in Increasing Order. Start with the smallest number and end with the largest number. Make sure that every number is smaller than the next number to its right.",
   "example": "55, 32, 67, 58, 34, 19 -> Increasing order (or ascending order): 19, 32, 34, 55, 58, 67",
   "instruction": "Write the following numbers in increasing order.",
   "items": [
    {
     "q": "23, 43, 52, 18, 22",
     "a": "18, 22, 23, 43, 52",
     "type": "order-asc"
    },
    {
     "q": "45, 52, 28, 10, 3",
     "a": "3, 10, 28, 45, 52",
     "type": "order-asc"
    },
    {
     "q": "72, 38, 93, 68, 74",
     "a": "38, 68, 72, 74, 93",
     "type": "order-asc"
    },
    {
     "q": "28, 35, 82, 16, 67",
     "a": "16, 28, 35, 67, 82",
     "type": "order-asc"
    },
    {
     "q": "38, 25, 92, 16, 24",
     "a": "16, 24, 25, 38, 92",
     "type": "order-asc"
    },
    {
     "q": "64, 48, 71, 47, 90, 73",
     "a": "47, 48, 64, 71, 73, 90",
     "type": "order-asc"
    },
    {
     "q": "79, 93, 25, 94, 72, 29",
     "a": "25, 29, 72, 79, 93, 94",
     "type": "order-asc"
    },
    {
     "q": "78, 38, 12, 28, 84, 55",
     "a": "12, 28, 38, 55, 78, 84",
     "type": "order-asc"
    },
    {
     "q": "68, 74, 44, 11, 15, 61",
     "a": "11, 15, 44, 61, 68, 74",
     "type": "order-asc"
    },
    {
     "q": "21, 89, 58, 59, 79, 37",
     "a": "21, 37, 58, 59, 79, 89",
     "type": "order-asc"
    },
    {
     "q": "76, 24, 77, 98, 52, 70",
     "a": "24, 52, 70, 76, 77, 98",
     "type": "order-asc"
    },
    {
     "q": "31, 13, 21, 57, 85, 71",
     "a": "13, 21, 31, 57, 71, 85",
     "type": "order-asc"
    },
    {
     "q": "40, 27, 63, 66, 43, 35",
     "a": "27, 35, 40, 43, 63, 66",
     "type": "order-asc"
    },
    {
     "q": "81, 16, 77, 72, 61, 56",
     "a": "16, 56, 61, 72, 77, 81",
     "type": "order-asc"
    },
    {
     "q": "87, 72, 74, 11, 35, 43",
     "a": "11, 35, 43, 72, 74, 87",
     "type": "order-asc"
    }
   ]
  },
  {
   "n": 9,
   "title": "Comparing Numbers and Arranging Numbers in Increasing Order",
   "concept": "To compare two numbers, look at the tens digit first, because tens are worth more than ones. If the tens are the same, the ones digit decides, and a number with no tens at all, like 7, is always smaller than any 2-digit number. The wide open side of > or < always faces the bigger number, and = means the two numbers are exactly the same. Increasing order means you write the smallest number first and work your way up to the biggest.",
   "example": "",
   "instruction": "Left section: Compare the following pair of numbers. Use >, <, or = to fill in the blanks. Right section: Write the following numbers in increasing order.",
   "items": [
    {
     "q": "89 _ 52",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "69 _ 59",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "70 _ 21",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "83 _ 27",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "23 _ 39",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "3 _ 88",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "37 _ 37",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "36 _ 38",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "99 _ 77",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "58 _ 54",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "67, 43, 25, 13, 15",
     "a": "13, 15, 25, 43, 67",
     "type": "order-asc"
    },
    {
     "q": "48, 27, 89, 95, 34, 97",
     "a": "27, 34, 48, 89, 95, 97",
     "type": "order-asc"
    },
    {
     "q": "29, 12, 35, 84, 16, 19",
     "a": "12, 16, 19, 29, 35, 84",
     "type": "order-asc"
    },
    {
     "q": "12, 25, 72, 98, 43, 52",
     "a": "12, 25, 43, 52, 72, 98",
     "type": "order-asc"
    },
    {
     "q": "35, 95, 85, 75, 84, 64",
     "a": "35, 64, 75, 84, 85, 95",
     "type": "order-asc"
    },
    {
     "q": "36, 75, 84, 15, 45, 75",
     "a": "15, 36, 45, 75, 75, 84",
     "type": "order-asc"
    },
    {
     "q": "95, 74, 43, 87, 86, 24",
     "a": "24, 43, 74, 86, 87, 95",
     "type": "order-asc"
    },
    {
     "q": "15, 41, 78, 23, 56, 57",
     "a": "15, 23, 41, 56, 57, 78",
     "type": "order-asc"
    },
    {
     "q": "35, 96, 56, 25, 53, 61",
     "a": "25, 35, 53, 56, 61, 96",
     "type": "order-asc"
    },
    {
     "q": "53, 25, 58, 98, 67",
     "a": "25, 53, 58, 67, 98",
     "type": "order-asc"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Compare: 64 _ 46",
     "steps": [
      "64 has 6 tens. 46 has 4 tens.",
      "6 tens is more than 4 tens, so 64 is bigger.",
      "The open side faces 64."
     ],
     "a": ">"
    },
    {
     "q": "Compare: 71 _ 71",
     "steps": [
      "Both have 7 tens, so check the ones.",
      "Both have 1 one, so the numbers are the same.",
      "Use the equal sign."
     ],
     "a": "="
    },
    {
     "q": "Write in increasing order: 46, 18, 73, 60, 27",
     "steps": [
      "Find the smallest first. 18 has only 1 ten, so 18 comes first.",
      "Next smallest tens: 27, then 46.",
      "What is left is 60 and 73, so 60 comes before 73.",
      "Write them smallest to biggest."
     ],
     "a": "18, 27, 46, 60, 73"
    },
    {
     "q": "Write in increasing order: 54, 50, 61, 49",
     "steps": [
      "49 has 4 tens, the fewest, so it comes first.",
      "50 and 54 both have 5 tens, so compare the ones: 0 is less than 4, so 50 comes before 54.",
      "61 has 6 tens, the most, so it goes last."
     ],
     "a": "49, 50, 54, 61"
    }
   ]
  },
  {
   "n": 10,
   "title": "Arranging Numbers in Decreasing Order",
   "concept": "Arranging Numbers in Decreasing Order. Start with the largest number and end with the smallest number. Make sure that every number is bigger than the next number to its right.",
   "example": "55, 32, 67, 58, 34, 19 -> Decreasing order (or descending order): 67, 58, 55, 34, 32, 19",
   "instruction": "Write the following numbers in decreasing order.",
   "items": [
    {
     "q": "65, 12, 34, 23, 13",
     "a": "65, 34, 23, 13, 12",
     "type": "order-desc"
    },
    {
     "q": "23, 40, 16, 12, 33",
     "a": "40, 33, 23, 16, 12",
     "type": "order-desc"
    },
    {
     "q": "36, 32, 24, 28, 18",
     "a": "36, 32, 28, 24, 18",
     "type": "order-desc"
    },
    {
     "q": "10, 27, 40, 94, 70",
     "a": "94, 70, 40, 27, 10",
     "type": "order-desc"
    },
    {
     "q": "84, 72, 42, 56, 12",
     "a": "84, 72, 56, 42, 12",
     "type": "order-desc"
    },
    {
     "q": "40, 15, 47, 14, 25",
     "a": "47, 40, 25, 15, 14",
     "type": "order-desc"
    },
    {
     "q": "46, 75, 63, 54, 15",
     "a": "75, 63, 54, 46, 15",
     "type": "order-desc"
    },
    {
     "q": "49, 58, 35, 25, 45",
     "a": "58, 49, 45, 35, 25",
     "type": "order-desc"
    },
    {
     "q": "72, 63, 64, 7, 68",
     "a": "72, 68, 64, 63, 7",
     "type": "order-desc"
    },
    {
     "q": "14, 47, 83, 21, 87",
     "a": "87, 83, 47, 21, 14",
     "type": "order-desc"
    },
    {
     "q": "55, 78, 79, 83, 53",
     "a": "83, 79, 78, 55, 53",
     "type": "order-desc"
    },
    {
     "q": "34, 94, 68, 12, 77",
     "a": "94, 77, 68, 34, 12",
     "type": "order-desc"
    },
    {
     "q": "87, 25, 74, 16, 46",
     "a": "87, 74, 46, 25, 16",
     "type": "order-desc"
    },
    {
     "q": "31, 54, 6, 47, 57",
     "a": "57, 54, 47, 31, 6",
     "type": "order-desc"
    },
    {
     "q": "56, 97, 48, 45, 19",
     "a": "97, 56, 48, 45, 19",
     "type": "order-desc"
    }
   ]
  },
  {
   "n": 11,
   "title": "Comparing Numbers and Arranging Numbers in Decreasing Order",
   "concept": "Compare 2-digit numbers by checking the tens digit first, since the number with more tens is bigger. If the tens are equal, the ones digit decides. The open side of > or < faces the bigger number, and = means both numbers are the same. Decreasing order is the opposite of counting up: you write the biggest number first and go down to the smallest.",
   "example": "",
   "instruction": "Left section: Compare the following pairs of numbers. Use >, <, or = to fill in the blanks. Right section: Write the following numbers in decreasing order.",
   "items": [
    {
     "q": "41 _ 48",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "87 _ 99",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "43 _ 89",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "40 _ 41",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "87 _ 87",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "50 _ 67",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "85 _ 4",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "52 _ 51",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "56 _ 67",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "15 _ 43",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "14, 26, 98, 75, 42, 36",
     "a": "98, 75, 42, 36, 26, 14",
     "type": "order-desc"
    },
    {
     "q": "65, 98, 64, 75, 10, 29",
     "a": "98, 75, 65, 64, 29, 10",
     "type": "order-desc"
    },
    {
     "q": "36, 35, 48, 14, 89, 75",
     "a": "89, 75, 48, 36, 35, 14",
     "type": "order-desc"
    },
    {
     "q": "65, 41, 46, 56, 98, 78",
     "a": "98, 78, 65, 56, 46, 41",
     "type": "order-desc"
    },
    {
     "q": "80, 63, 23, 49, 26, 11",
     "a": "80, 63, 49, 26, 23, 11",
     "type": "order-desc"
    },
    {
     "q": "51, 82, 89, 50, 57, 37",
     "a": "89, 82, 57, 51, 50, 37",
     "type": "order-desc"
    },
    {
     "q": "63, 54, 29, 84, 39, 29",
     "a": "84, 63, 54, 39, 29, 29",
     "type": "order-desc"
    },
    {
     "q": "67, 14, 29, 78, 96, 42",
     "a": "96, 78, 67, 42, 29, 14",
     "type": "order-desc"
    },
    {
     "q": "34, 79, 75, 46, 58, 67",
     "a": "79, 75, 67, 58, 46, 34",
     "type": "order-desc"
    },
    {
     "q": "39, 18, 64, 12, 48, 46",
     "a": "64, 48, 46, 39, 18, 12",
     "type": "order-desc"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Compare: 92 _ 29",
     "steps": [
      "92 has 9 tens. 29 has only 2 tens.",
      "9 tens is more than 2 tens, so 92 is bigger.",
      "The open side faces 92."
     ],
     "a": ">"
    },
    {
     "q": "Compare: 60 _ 6",
     "steps": [
      "60 has 6 tens and 0 ones. 6 has no tens, only 6 ones.",
      "A number with tens is bigger than a number with ones only.",
      "So 60 is bigger."
     ],
     "a": ">"
    },
    {
     "q": "Write in decreasing order: 32, 76, 18, 60, 45",
     "steps": [
      "Find the biggest first. 76 has 7 tens, the most, so it comes first.",
      "Next is 60, then 45, then 32.",
      "18 has the fewest tens, so it goes last."
     ],
     "a": "76, 60, 45, 32, 18"
    },
    {
     "q": "Write in decreasing order: 63, 47, 63, 20, 55",
     "steps": [
      "The biggest is 63, and it appears twice, so write both 63s first.",
      "Next biggest is 55, then 47.",
      "20 is the smallest, so it goes last."
     ],
     "a": "63, 63, 55, 47, 20"
    }
   ]
  },
  {
   "n": 12,
   "title": "Missing Numbers",
   "concept": "When you count forward, every next number is just one more than the number before it. So if you know one number in a line, you can find the one after it by counting on, and the one before it by counting back. In a number grid with 4 boxes in each row, moving one box to the right adds 1, and moving one box straight down adds 4, because you skip a whole row of 4. Say the numbers out loud as you fill the blanks, and the pattern becomes easy to hear.",
   "example": "",
   "instruction": "Items 1-6: Write the missing numbers in the following series. Items 7-18 and 25-36: Write the missing numbers in the empty boxes (number grid). Items 19-24: The animals can only fly/jump to a box with a number. Help them by completing the number pattern.",
   "items": [
    {
     "q": "7, ___, 9, ___, 11, ___",
     "a": "8, 10, 12",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "4, 5, ___, ___, 8, ___",
     "a": "6, 7, 9",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "___, 10, 11, ___, ___, 14",
     "a": "9, 12, 13",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "___, ___, 14, ___, 16, 17",
     "a": "12, 13, 15",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "15, ___, 17, ___, 19, ___",
     "a": "16, 18, 20",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "___, 9, ___, ___, 12, 13",
     "a": "8, 10, 11",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 1 (4 columns x 5 rows, numbers 1-20), blank box 1 of 12, reading left to right and top to bottom. Grid rows: [__] [__] 3 [__] / 5 6 [__] [__] / [__] 10 [__] 12 / 13 [__] [__] [__] / 17 18 [__] [__]",
     "a": "1",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 1, blank box 2 of 12 (first row, second box)",
     "a": "2",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 1, blank box 3 of 12 (first row, fourth box)",
     "a": "4",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 1, blank box 4 of 12 (second row, third box)",
     "a": "7",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 1, blank box 5 of 12 (second row, fourth box)",
     "a": "8",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 1, blank box 6 of 12 (third row, first box)",
     "a": "9",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 1, blank box 7 of 12 (third row, third box)",
     "a": "11",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 1, blank box 8 of 12 (fourth row, second box)",
     "a": "14",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 1, blank box 9 of 12 (fourth row, third box)",
     "a": "15",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 1, blank box 10 of 12 (fourth row, fourth box)",
     "a": "16",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 1, blank box 11 of 12 (fifth row, third box)",
     "a": "19",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 1, blank box 12 of 12 (fifth row, fourth box)",
     "a": "20",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "15, ___, 17, ___, 19, ___",
     "a": "16, 18, 20",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "___, 19, 20, ___, 22, ___",
     "a": "18, 21, 23",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "21, 22, ___, 24, ___, ___",
     "a": "23, 25, 26",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "25, ___, ___, 28, 29, ___",
     "a": "26, 27, 30",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "___, 25, ___, 27, ___, 29",
     "a": "24, 26, 28",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "19, ___, 21, ___, ___, 24",
     "a": "20, 22, 23",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 2 (4 columns x 5 rows, numbers 11-30), blank box 1 of 12, reading left to right and top to bottom. Grid rows: [__] 12 [__] 14 / 15 [__] [__] [__] / [__] 20 21 [__] / [__] [__] [__] 26 / 27 [__] 29 [__]",
     "a": "11",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 2, blank box 2 of 12 (first row, third box)",
     "a": "13",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 2, blank box 3 of 12 (second row, second box)",
     "a": "16",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 2, blank box 4 of 12 (second row, third box)",
     "a": "17",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 2, blank box 5 of 12 (second row, fourth box)",
     "a": "18",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 2, blank box 6 of 12 (third row, first box)",
     "a": "19",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 2, blank box 7 of 12 (third row, fourth box)",
     "a": "22",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 2, blank box 8 of 12 (fourth row, first box)",
     "a": "23",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 2, blank box 9 of 12 (fourth row, second box)",
     "a": "24",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 2, blank box 10 of 12 (fourth row, third box)",
     "a": "25",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 2, blank box 11 of 12 (fifth row, second box)",
     "a": "28",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "Grid 2, blank box 12 of 12 (fifth row, fourth box)",
     "a": "30",
     "type": "key",
     "seq": true,
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Write the missing numbers: 31, ___, 33, ___, 35",
     "steps": [
      "After 31 comes one more, which is 32.",
      "After 33 comes one more, which is 34.",
      "Read it back: 31, 32, 33, 34, 35."
     ],
     "a": "32 and 34"
    },
    {
     "q": "Write the missing numbers: ___, 44, 45, ___, 47",
     "steps": [
      "The number before 44 is one less, which is 43.",
      "The number after 45 is one more, which is 46.",
      "Read it back: 43, 44, 45, 46, 47."
     ],
     "a": "43 and 46"
    },
    {
     "q": "A grid row has 4 boxes: 41, [__], 43, 44. What number goes in the empty box?",
     "steps": [
      "Moving one box to the right adds 1.",
      "One more than 41 is 42.",
      "Check the next box: one more than 42 is 43, which matches."
     ],
     "a": "42"
    },
    {
     "q": "In a grid with 4 boxes in each row, one box holds 38. What number is in the box right below it?",
     "steps": [
      "Going down one row skips a whole row of 4 numbers.",
      "So add 4 to the number above: 38 + 4 = 42."
     ],
     "a": "42"
    }
   ],
   "ordered": true
  },
  {
   "n": 15,
   "title": "Naming Fractions",
   "concept": "Fractions: numerator (shaded parts) and denominator (total parts)",
   "example": "",
   "instruction": "Encircle the correct fraction for the shaded part/s (1-4); write the numerator for each figure (5-10); write the denominator for each figure (11-16).",
   "items": [
    {
     "q": "What fraction is shaded?",
     "a": "1/4",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "circle",
      "total": 4,
      "shaded": 1
     }
    },
    {
     "q": "What fraction is shaded?",
     "a": "1/2",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "circle",
      "total": 2,
      "shaded": 1
     }
    },
    {
     "q": "What fraction is shaded?",
     "a": "1/2",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "circle",
      "total": 2,
      "shaded": 1
     }
    },
    {
     "q": "What fraction is shaded?",
     "a": "2/2",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "circle",
      "total": 2,
      "shaded": 2
     }
    },
    {
     "q": "Write the numerator for this figure.",
     "a": "1",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "bar",
      "total": 2,
      "shaded": 1
     }
    },
    {
     "q": "Write the numerator for this figure.",
     "a": "1",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "circle",
      "total": 2,
      "shaded": 1
     }
    },
    {
     "q": "Write the numerator for this figure.",
     "a": "1",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "circle",
      "total": 4,
      "shaded": 1
     }
    },
    {
     "q": "Write the numerator for this figure.",
     "a": "1",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "grid",
      "total": 4,
      "shaded": 1
     }
    },
    {
     "q": "Write the numerator for this figure.",
     "a": "1",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "circle",
      "total": 4,
      "shaded": 1
     }
    },
    {
     "q": "Write the numerator for this figure.",
     "a": "1",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "bar",
      "total": 2,
      "shaded": 1
     }
    },
    {
     "q": "Write the denominator for this figure.",
     "a": "2",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "bar",
      "total": 2,
      "shaded": 1
     }
    },
    {
     "q": "Write the denominator for this figure.",
     "a": "4",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "circle",
      "total": 4,
      "shaded": 3
     }
    },
    {
     "q": "Write the denominator for this figure.",
     "a": "4",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "circle",
      "total": 4,
      "shaded": 1
     }
    },
    {
     "q": "Write the denominator for this figure.",
     "a": "2",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "bar",
      "total": 2,
      "shaded": 1
     }
    },
    {
     "q": "Write the denominator for this figure.",
     "a": "4",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "circle",
      "total": 4,
      "shaded": 1
     }
    },
    {
     "q": "Write the denominator for this figure.",
     "a": "2",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "bar",
      "total": 2,
      "shaded": 1
     }
    }
   ]
  },
  {
   "n": 17,
   "title": "Illustrating Addition",
   "concept": "Adding means putting two groups together into one big group and finding how many there are in all. Count the first group, count the second group, then count every object in the new big group. The words in all, altogether and total are all asking you to add. You can also start at the first number and count on, like 4 then 5, 6, 7.",
   "example": "",
   "instruction": "Draw the objects together in one big group. Then write the numbers below each picture.",
   "items": [
    {
     "q": "How many in all?",
     "a": "5",
     "type": "key",
     "fig": {
      "kind": "count",
      "op": "+",
      "groups": [
       {
        "n": 3,
        "icon": "square"
       },
       {
        "n": 2,
        "icon": "square"
       }
      ]
     }
    },
    {
     "q": "How many in all?",
     "a": "9",
     "type": "key",
     "fig": {
      "kind": "count",
      "op": "+",
      "groups": [
       {
        "n": 6,
        "icon": "circle"
       },
       {
        "n": 3,
        "icon": "circle"
       }
      ]
     }
    },
    {
     "q": "How many in all?",
     "a": "8",
     "type": "key",
     "fig": {
      "kind": "count",
      "op": "+",
      "groups": [
       {
        "n": 3,
        "icon": "flower"
       },
       {
        "n": 5,
        "icon": "flower"
       }
      ]
     }
    },
    {
     "q": "How many in all?",
     "a": "6",
     "type": "key",
     "fig": {
      "kind": "count",
      "op": "+",
      "groups": [
       {
        "n": 2,
        "icon": "circle"
       },
       {
        "n": 4,
        "icon": "circle"
       }
      ]
     }
    },
    {
     "q": "How many in all?",
     "a": "10",
     "type": "key",
     "fig": {
      "kind": "count",
      "op": "+",
      "groups": [
       {
        "n": 9,
        "icon": "flower"
       },
       {
        "n": 1,
        "icon": "flower"
       }
      ]
     }
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "How many stars are there altogether?",
     "fig": {
      "kind": "count",
      "op": "+",
      "groups": [
       {
        "n": 4,
        "icon": "star"
       },
       {
        "n": 3,
        "icon": "star"
       }
      ]
     },
     "steps": [
      "Count the first group: 4.",
      "Count on for the second group: 5, 6, 7.",
      "So 4 + 3 = 7."
     ],
     "a": "7"
    },
    {
     "q": "Put the apples together. How many are there altogether?",
     "fig": {
      "kind": "count",
      "op": "+",
      "groups": [
       {
        "n": 5,
        "icon": "apple"
       },
       {
        "n": 4,
        "icon": "apple"
       }
      ]
     },
     "steps": [
      "Count the first group: 5.",
      "Count on for the second group: 6, 7, 8, 9.",
      "So 5 + 4 = 9."
     ],
     "a": "9"
    },
    {
     "q": "How many balloons are there altogether?",
     "fig": {
      "kind": "count",
      "op": "+",
      "groups": [
       {
        "n": 2,
        "icon": "balloon"
       },
       {
        "n": 6,
        "icon": "balloon"
       }
      ]
     },
     "steps": [
      "Count the first group: 2.",
      "Count on for the second group: 3, 4, 5, 6, 7, 8.",
      "So 2 + 6 = 8."
     ],
     "a": "8"
    },
    {
     "q": "How many hearts are there altogether?",
     "fig": {
      "kind": "count",
      "op": "+",
      "groups": [
       {
        "n": 1,
        "icon": "heart"
       },
       {
        "n": 5,
        "icon": "heart"
       }
      ]
     },
     "steps": [
      "Count the first group: 1.",
      "Count on for the second group: 2, 3, 4, 5, 6.",
      "So 1 + 5 = 6."
     ],
     "a": "6"
    }
   ]
  },
  {
   "n": 18,
   "title": "Addition",
   "concept": "Addition is the process of finding the sum or total of numbers. In the addition sentence 3 + 5 = 8, 3 and 5 are called ADDENDS, while the answer to addition, 8, is called the SUM.",
   "example": "Elena has 3 crayons at first. Her sister gives her 5 more crayons. How many crayons does she have in all? The addition sentence is 3 + 5 = n; 3 + 5 = 8; Elena has 8 crayons in all.",
   "instruction": "Find the sum.",
   "items": [
    {
     "q": "1 + 7"
    },
    {
     "q": "1 + 8"
    },
    {
     "q": "1 + 9"
    },
    {
     "q": "2 + 6"
    },
    {
     "q": "2 + 8"
    },
    {
     "q": "2 + 9"
    },
    {
     "q": "3 + 6"
    },
    {
     "q": "3 + 8"
    },
    {
     "q": "3 + 7"
    },
    {
     "q": "3 + 9"
    },
    {
     "q": "4 + 6"
    },
    {
     "q": "4 + 7"
    },
    {
     "q": "4 + 9"
    },
    {
     "q": "4 + 8"
    },
    {
     "q": "5 + 5"
    }
   ],
   "examples": [
    "2 + 7",
    "5 + 6",
    "5 + 8",
    "6 + 8",
    "7 + 9",
    "6 + 9"
   ]
  },
  {
   "n": 19,
   "title": "Addition of 1-Digit by 1-Digit by 1-Digit",
   "concept": "",
   "example": "4 + 2 + 9 = 15",
   "instruction": "Find the sum.",
   "items": [
    {
     "q": "4 + 2 + 9"
    },
    {
     "q": "5 + 6 + 3"
    },
    {
     "q": "7 + 8 + 2"
    },
    {
     "q": "8 + 7 + 6"
    },
    {
     "q": "3 + 9 + 4"
    },
    {
     "q": "6 + 6 + 7"
    },
    {
     "q": "5 + 7 + 4"
    },
    {
     "q": "9 + 9 + 2"
    },
    {
     "q": "4 + 8 + 5"
    },
    {
     "q": "7 + 5 + 4"
    },
    {
     "q": "7 + 3 + 9"
    },
    {
     "q": "8 + 4 + 6"
    },
    {
     "q": "3 + 5 + 8"
    },
    {
     "q": "7 + 6 + 7"
    },
    {
     "q": "4 + 8 + 9"
    },
    {
     "q": "7 + 4 + 6"
    },
    {
     "q": "6 + 3 + 7"
    },
    {
     "q": "5 + 4 + 9"
    },
    {
     "q": "4 + 6 + 8"
    },
    {
     "q": "9 + 3 + 5"
    }
   ],
   "examples": [
    "6 + 5 + 8",
    "9 + 4 + 7",
    "3 + 7 + 6",
    "8 + 2 + 5",
    "5 + 9 + 3",
    "2 + 6 + 9"
   ]
  },
  {
   "n": 20,
   "title": "Addition of Two-digit by One-digit numbers without Regrouping",
   "concept": "Addition of Two-digit by One-digit numbers without Regrouping. In adding two-digit and one-digit numbers vertically, line up the ones digits in the rightmost column. Add the ones digits. Bring down the tens digit.",
   "example": "Example: Find the sum of 45 and 3. (Tens 4 | Ones 5) + (Ones 3) = (Tens 4 | Ones 8); 45 + 3 = 48",
   "instruction": "Find the sum.",
   "items": [
    {
     "q": "10 + 3"
    },
    {
     "q": "12 + 4"
    },
    {
     "q": "14 + 5"
    },
    {
     "q": "15 + 2"
    },
    {
     "q": "25 + 4"
    },
    {
     "q": "23 + 6"
    },
    {
     "q": "24 + 5"
    },
    {
     "q": "26 + 2"
    },
    {
     "q": "20 + 8"
    },
    {
     "q": "31 + 5"
    },
    {
     "q": "30 + 6"
    },
    {
     "q": "32 + 7"
    },
    {
     "q": "35 + 4"
    },
    {
     "q": "33 + 5"
    }
   ],
   "examples": [
    "11 + 6",
    "16 + 3",
    "21 + 7",
    "22 + 5",
    "27 + 2",
    "34 + 5"
   ]
  },
  {
   "n": 21,
   "title": "Addition of Two-digit by One-digit numbers with Regrouping",
   "concept": "Addition of Two-digit by One-digit numbers with Regrouping. In adding two-digit and one-digit numbers, line up the ones digits in the rightmost column. Then find the sum following these steps: 1. Add the ones digits. (5 + 8 = 13) 2. Write 3 under the ones column and carry 1 to the tens column. 3. Add the tens digits. (1 + 2 = 3)",
   "example": "Example: 25 + 8 = 33. Add ones: 5 + 8 = 13, write 3 and carry 1 to tens; Add tens: 1 + 2 = 3",
   "instruction": "Find the sum.",
   "items": [
    {
     "q": "17 + 3"
    },
    {
     "q": "16 + 4"
    },
    {
     "q": "18 + 5"
    },
    {
     "q": "19 + 2"
    },
    {
     "q": "25 + 5"
    },
    {
     "q": "24 + 6"
    },
    {
     "q": "29 + 7"
    },
    {
     "q": "23 + 7"
    },
    {
     "q": "22 + 8"
    },
    {
     "q": "36 + 5"
    },
    {
     "q": "35 + 6"
    },
    {
     "q": "34 + 7"
    },
    {
     "q": "37 + 4"
    },
    {
     "q": "35 + 5"
    }
   ],
   "examples": [
    "18 + 4",
    "19 + 6",
    "26 + 5",
    "27 + 8",
    "33 + 9",
    "38 + 6"
   ]
  },
  {
   "n": 22,
   "title": "Addition of Two-digit numbers without Regrouping",
   "concept": "Addition of Two-digit numbers without Regrouping. In adding two-digit numbers, line up the ones digits in the rightmost column. Line-up the tens digits in the leftmost column. Find the sum following these steps: 1. Add the ones digits. (5 + 2 = 7) 2. Add the tens digits. (2 + 1 = 3)",
   "example": "Example: 25 + 12 = 37. Add ones: 5 + 2 = 7; Add tens: 2 + 1 = 3",
   "instruction": "Find the sum.",
   "items": [
    {
     "q": "15 + 12"
    },
    {
     "q": "24 + 11"
    },
    {
     "q": "36 + 13"
    },
    {
     "q": "64 + 14"
    },
    {
     "q": "72 + 24"
    },
    {
     "q": "15 + 21"
    },
    {
     "q": "10 + 44"
    },
    {
     "q": "65 + 20"
    },
    {
     "q": "54 + 23"
    },
    {
     "q": "52 + 23"
    },
    {
     "q": "77 + 20"
    },
    {
     "q": "12 + 26"
    },
    {
     "q": "10 + 79"
    },
    {
     "q": "25 + 11"
    }
   ],
   "examples": [
    "13 + 25",
    "26 + 13",
    "34 + 22",
    "42 + 36",
    "51 + 48",
    "61 + 27"
   ]
  },
  {
   "n": 23,
   "title": "Addition of Two-digit numbers with Regrouping",
   "concept": "Addition of Two-digit numbers with Regrouping. In adding two-digit numbers, line up the ones digits in the rightmost column. Line-up the tens digits in the leftmost column. Find the sum following these steps: 1. Add the ones digits. (6 + 8 = 14) 2. Write 4 under the ones column and carry 1 to the tens column. 3. Add the tens digits. (1 + 2 + 1 = 4)",
   "example": "Example: 26 + 18 = 44. Add ones: 6 + 8 = 14, write 4 and carry 1 to tens; Add tens: 1 + 2 + 1 = 4",
   "instruction": "Find the sum.",
   "items": [
    {
     "q": "27 + 13"
    },
    {
     "q": "28 + 14"
    },
    {
     "q": "36 + 17"
    },
    {
     "q": "38 + 14"
    },
    {
     "q": "37 + 24"
    },
    {
     "q": "35 + 29"
    },
    {
     "q": "42 + 48"
    },
    {
     "q": "45 + 26"
    },
    {
     "q": "44 + 27"
    },
    {
     "q": "57 + 23"
    },
    {
     "q": "55 + 26"
    },
    {
     "q": "65 + 26"
    },
    {
     "q": "67 + 29"
    },
    {
     "q": "65 + 19"
    }
   ],
   "examples": [
    "26 + 18",
    "34 + 29",
    "47 + 25",
    "48 + 33",
    "56 + 37",
    "59 + 26"
   ]
  },
  {
   "n": 24,
   "title": "Illustrating Subtraction",
   "concept": "Subtracting means taking some objects away from a group and counting how many are left. Start with the whole group, cross out or cover the ones that are taken away, then count only the ones still there. The words are left, taken away and how many remain all tell you to subtract. You can also count back, like 7 then 6, 5, 4.",
   "example": "",
   "instruction": "Some objects were taken away from each group. Count how many are left.",
   "items": [
    {
     "q": "How many are left?",
     "a": "2",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 3,
      "icon": "heart",
      "strike": 1
     }
    },
    {
     "q": "How many are left?",
     "a": "5",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 8,
      "icon": "circle",
      "strike": 3
     }
    },
    {
     "q": "How many are left?",
     "a": "3",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 5,
      "icon": "circle",
      "strike": 2
     }
    },
    {
     "q": "How many are left?",
     "a": "1",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 4,
      "icon": "circle",
      "strike": 3
     }
    },
    {
     "q": "How many are left?",
     "a": "2",
     "type": "key",
     "fig": {
      "kind": "count",
      "n": 6,
      "icon": "smiley",
      "strike": 4
     }
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "How many apples are left?",
     "fig": {
      "kind": "count",
      "n": 6,
      "icon": "apple",
      "strike": 2
     },
     "steps": [
      "Start with all 6 apples.",
      "Two are crossed out, so they are taken away.",
      "Count the ones still there: 1, 2, 3, 4.",
      "So 6 - 2 = 4."
     ],
     "a": "4"
    },
    {
     "q": "How many stars are left?",
     "fig": {
      "kind": "count",
      "n": 7,
      "icon": "star",
      "strike": 4
     },
     "steps": [
      "Start with all 7 stars.",
      "Four are crossed out.",
      "Count the ones still there: 1, 2, 3.",
      "So 7 - 4 = 3."
     ],
     "a": "3"
    },
    {
     "q": "How many leaves are left?",
     "fig": {
      "kind": "count",
      "n": 8,
      "icon": "leaf",
      "strike": 3
     },
     "steps": [
      "Start with all 8 leaves.",
      "Three are crossed out.",
      "Count the ones still there: 1, 2, 3, 4, 5.",
      "So 8 - 3 = 5."
     ],
     "a": "5"
    },
    {
     "q": "How many balloons are left?",
     "fig": {
      "kind": "count",
      "n": 5,
      "icon": "balloon",
      "strike": 3
     },
     "steps": [
      "Start with all 5 balloons.",
      "Three are crossed out.",
      "Count the ones still there: 1, 2.",
      "So 5 - 3 = 2."
     ],
     "a": "2"
    }
   ]
  },
  {
   "n": 25,
   "title": "Subtraction (Parts of the Subtraction)",
   "concept": "Subtraction is the process of taking away a number of things from a given number of things. There were 8 birds on the branch of a tree. One bird flew away. How many birds were left? The subtraction sentence is 8 - 1 = n. 8 - 1 = 7. Seven birds were left. In the subtraction sentence 8 - 1 = 7, 8 is called the MINUEND, 1 is called the SUBTRAHEND; while the answer to subtraction, 7, is called the DIFFERENCE. Subtraction of Two-digit by One-digit Numbers without Regrouping: In the subtraction of two-digit and one-digit numbers vertically, line up the ones digits in the rightmost column. Subtract the ones digits. Bring down the tens digit. Example: Find the difference of 28 and 5. (Tens 2 | Ones 8) - (Ones 5) = (Tens 2 | Ones 3); 28 - 5 = 23.",
   "example": "8 - 1 = 7 (minuend 8, subtrahend 1, difference 7)",
   "instruction": "Identify what part of the subtraction sentence is the underlined. Encircle your answer.",
   "items": [
    {
     "q": "[8] - 4 = 4; identify the underlined part (difference, minuend, subtrahend)",
     "a": "minuend",
     "type": "key"
    },
    {
     "q": "6 - 2 = [2]; identify the underlined part (difference, minuend, subtrahend)",
     "a": "difference",
     "type": "key"
    },
    {
     "q": "[9] - 3 = 6; identify the underlined part (difference, minuend, subtrahend)",
     "a": "minuend",
     "type": "key"
    },
    {
     "q": "7 - [1] = 6; identify the underlined part (difference, minuend, subtrahend)",
     "a": "subtrahend",
     "type": "key"
    },
    {
     "q": "6 - [5] = 1; identify the underlined part (difference, minuend, subtrahend)",
     "a": "subtrahend",
     "type": "key"
    },
    {
     "q": "7 - 3 = [4]; identify the underlined part (difference, minuend, subtrahend)",
     "a": "difference",
     "type": "key"
    },
    {
     "q": "8 - 2 = [6]; identify the underlined part (difference, minuend, subtrahend)",
     "a": "difference",
     "type": "key"
    },
    {
     "q": "[10] - 5 = 5; identify the underlined part (difference, minuend, subtrahend)",
     "a": "minuend",
     "type": "key"
    },
    {
     "q": "10 - [6] = 4; identify the underlined part (difference, minuend, subtrahend)",
     "a": "subtrahend",
     "type": "key"
    },
    {
     "q": "10 - 2 = [8]; identify the underlined part (difference, minuend, subtrahend)",
     "a": "difference",
     "type": "key"
    }
   ]
  },
  {
   "n": 26,
   "title": "Subtraction of Two-digit by One-digit Numbers without Regrouping",
   "concept": "",
   "example": "25 - 4 = 21",
   "instruction": "Find the difference.",
   "items": [
    {
     "q": "25 - 4"
    },
    {
     "q": "26 - 3"
    },
    {
     "q": "24 - 2"
    },
    {
     "q": "26 - 2"
    },
    {
     "q": "28 - 8"
    },
    {
     "q": "35 - 5"
    },
    {
     "q": "36 - 6"
    },
    {
     "q": "37 - 2"
    },
    {
     "q": "35 - 4"
    },
    {
     "q": "38 - 5"
    },
    {
     "q": "42 - 1"
    },
    {
     "q": "45 - 3"
    },
    {
     "q": "46 - 4"
    },
    {
     "q": "48 - 5"
    },
    {
     "q": "49 - 6"
    },
    {
     "q": "53 - 2"
    },
    {
     "q": "55 - 1"
    },
    {
     "q": "57 - 5"
    },
    {
     "q": "58 - 4"
    },
    {
     "q": "56 - 3"
    }
   ],
   "examples": [
    "27 - 5",
    "29 - 7",
    "34 - 3",
    "39 - 7",
    "47 - 4",
    "59 - 8"
   ]
  },
  {
   "n": 27,
   "title": "Subtracting Two-digit by One-digit Numbers with Regrouping",
   "concept": "Subtracting Two-digit by One-digit Numbers with Regrouping. In subtracting two-digit and one-digit numbers where the subtrahend is greater than the ones digit of the minuend, we do regrouping. Vertically line up the ones digits in the rightmost column. Find the difference following these steps: Example: Find the difference of 23 and 5. 1. Borrow 1 ten from the tens digit of the minuend and add this to its ones digit. 2 tens now become 1 ten. (1 ten = 10, add to the ones: 10 + 3 = 13) 2. Subtract the ones column. Bring down the tens column. 23 - 5 = 18.",
   "example": "Find the difference of 23 and 5: regroup (10 + 3 = 13), 13 - 5 = 8, bring down 1 ten; 23 - 5 = 18",
   "instruction": "Find the difference.",
   "items": [
    {
     "q": "23 - 5"
    },
    {
     "q": "32 - 4"
    },
    {
     "q": "53 - 4"
    },
    {
     "q": "63 - 9"
    },
    {
     "q": "57 - 8"
    },
    {
     "q": "40 - 3"
    },
    {
     "q": "55 - 6"
    },
    {
     "q": "45 - 7"
    },
    {
     "q": "51 - 2"
    },
    {
     "q": "60 - 5"
    }
   ],
   "examples": [
    "22 - 7",
    "34 - 6",
    "41 - 5",
    "52 - 8",
    "64 - 7",
    "70 - 4"
   ]
  },
  {
   "n": 28,
   "title": "Subtracting Two-digit Numbers without Regrouping",
   "concept": "In subtracting two-digit numbers without regrouping, vertically line-up the ones digits in the rightmost column. Line-up the tens digits in the leftmost column. Find the difference following these steps: 1. Subtract the ones digits. (9 - 5 = 4) 2. Subtract the tens digits. (4 - 2 = 2)",
   "example": "49 - 25 = 24 (ones: 9 - 5 = 4; tens: 4 - 2 = 2)",
   "instruction": "Find the difference.",
   "items": [
    {
     "q": "25 - 12"
    },
    {
     "q": "24 - 11"
    },
    {
     "q": "36 - 13"
    },
    {
     "q": "64 - 14"
    },
    {
     "q": "25 - 15"
    },
    {
     "q": "29 - 18"
    },
    {
     "q": "39 - 25"
    },
    {
     "q": "47 - 13"
    },
    {
     "q": "54 - 32"
    },
    {
     "q": "58 - 35"
    },
    {
     "q": "43 - 32"
    },
    {
     "q": "36 - 22"
    },
    {
     "q": "45 - 24"
    },
    {
     "q": "55 - 15"
    }
   ],
   "examples": [
    "27 - 14",
    "38 - 16",
    "49 - 27",
    "57 - 23",
    "68 - 45",
    "76 - 52"
   ]
  },
  {
   "n": 29,
   "title": "Subtracting Two-digit Numbers with Regrouping",
   "concept": "In subtracting two-digit and two-digit numbers where the ones digit of the subtrahend is greater than the ones digit of the minuend, we do regrouping. Vertically line up the ones digits in the rightmost column. Find the difference following these steps: 1. Borrow 1 ten from the tens digit of the minuend and add this to its ones digit. 4 tens now become 3 tens. (1 ten = 10, add to the ones: 10 + 5 = 15) 2. Subtract the ones column. Subtract the tens column. (15 - 8 = 7) (3 - 1 = 2)",
   "example": "Find the difference of 45 and 18: 45 - 18 = 27 (regroup: 4 tens become 3 tens; ones 10 + 5 = 15; 15 - 8 = 7; 3 - 1 = 2)",
   "instruction": "Find the difference.",
   "items": [
    {
     "q": "65 - 56"
    },
    {
     "q": "63 - 45"
    },
    {
     "q": "71 - 62"
    },
    {
     "q": "78 - 53"
    },
    {
     "q": "67 - 38"
    },
    {
     "q": "76 - 59"
    },
    {
     "q": "72 - 56"
    },
    {
     "q": "68 - 39"
    },
    {
     "q": "64 - 57"
    },
    {
     "q": "74 - 45"
    }
   ],
   "examples": [
    "52 - 37",
    "61 - 48",
    "66 - 47",
    "73 - 29",
    "75 - 46",
    "82 - 55"
   ]
  },
  {
   "n": 30,
   "title": "Shapes",
   "concept": "Naming basic plane shapes: circle, square, rectangle, triangle",
   "example": "",
   "instruction": "Name the shape of each object.",
   "items": [
    {
     "q": "Name the shape of this object.",
     "a": "circle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "circle"
     }
    },
    {
     "q": "Name the shape of this object.",
     "a": "square",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "square"
     }
    },
    {
     "q": "Name the shape of this object.",
     "a": "rectangle; oblong",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "rectangle"
     },
     "alt": true
    },
    {
     "q": "Name the shape of this object.",
     "a": "triangle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "triangle"
     }
    },
    {
     "q": "Name the shape of this object.",
     "a": "circle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "circle"
     }
    },
    {
     "q": "Name the shape of this object.",
     "a": "triangle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "triangle"
     }
    },
    {
     "q": "Name the shape of this object.",
     "a": "square",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "square"
     }
    },
    {
     "q": "Name the shape of this object.",
     "a": "circle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "circle"
     }
    }
   ]
  },
  {
   "n": 33,
   "title": "Days of the Week",
   "concept": "This calendar shows the month of January. There are seven days in a week, namely: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday. There are four weeks in a month. What comes Before? After? Ex. Today is Wednesday. What day comes before Wednesday? What day comes after Wednesday? TUESDAY <- WEDNESDAY -> THURSDAY (Before) (After). Answer: The day that comes before Wednesday is Tuesday.",
   "example": "Today is Wednesday. TUESDAY (before) <- WEDNESDAY -> THURSDAY (after). The day that comes before Wednesday is Tuesday.",
   "instruction": "Identify what comes before/after the given day.",
   "items": [
    {
     "q": "The day that comes before Friday is ____.",
     "a": "Thursday",
     "type": "key"
    },
    {
     "q": "The day that comes after Tuesday is ____.",
     "a": "Wednesday",
     "type": "key"
    },
    {
     "q": "What day comes before Wednesday?",
     "a": "Tuesday",
     "type": "key"
    },
    {
     "q": "The day that comes before Thursday is ____.",
     "a": "Wednesday",
     "type": "key"
    },
    {
     "q": "What day comes before Sunday?",
     "a": "Saturday",
     "type": "key"
    },
    {
     "q": "What day comes after Friday?",
     "a": "Saturday",
     "type": "key"
    },
    {
     "q": "The day that comes after Saturday is ____.",
     "a": "Sunday",
     "type": "key"
    },
    {
     "q": "What day comes after Thursday?",
     "a": "Friday",
     "type": "key"
    },
    {
     "q": "What day comes after Wednesday?",
     "a": "Thursday",
     "type": "key"
    },
    {
     "q": "The day that comes after Tuesday is ____.",
     "a": "Wednesday",
     "type": "key"
    },
    {
     "q": "What is the day after Monday?",
     "a": "Tuesday",
     "type": "key"
    },
    {
     "q": "The day that comes after Sunday is ____.",
     "a": "Monday",
     "type": "key"
    },
    {
     "q": "What day comes before Saturday?",
     "a": "Friday",
     "type": "key"
    },
    {
     "q": "The day that comes before Monday is ____.",
     "a": "Sunday",
     "type": "key"
    }
   ]
  },
  {
   "n": 34,
   "title": "Order of Months and Days",
   "concept": "Numbers which tell the positions of persons or objects are called ordinal numbers. Here's how we write the months of the year according to their order: January 1st, February 2nd, March 3rd, April 4th, May 5th, June 6th, July 7th, August 8th, September 9th, October 10th, November 11th, December 12th. And this is how we write the days of the week according to their order: Sunday 1st, Monday 2nd, Tuesday 3rd, Wednesday 4th, Thursday 5th, Friday 6th, Saturday 7th.",
   "example": "January 1st, February 2nd, March 3rd, April 4th, May 5th, June 6th, July 7th, August 8th, September 9th, October 10th, November 11th, December 12th",
   "instruction": "Write the order of the months given. (items 1-12) / Write the order of the days given. (items 13-19)",
   "items": [
    {
     "q": "August",
     "a": "8th",
     "type": "key"
    },
    {
     "q": "June",
     "a": "6th",
     "type": "key"
    },
    {
     "q": "September",
     "a": "9th",
     "type": "key"
    },
    {
     "q": "February",
     "a": "2nd",
     "type": "key"
    },
    {
     "q": "December",
     "a": "12th",
     "type": "key"
    },
    {
     "q": "April",
     "a": "4th",
     "type": "key"
    },
    {
     "q": "July",
     "a": "7th",
     "type": "key"
    },
    {
     "q": "November",
     "a": "11th",
     "type": "key"
    },
    {
     "q": "March",
     "a": "3rd",
     "type": "key"
    },
    {
     "q": "May",
     "a": "5th",
     "type": "key"
    },
    {
     "q": "October",
     "a": "10th",
     "type": "key"
    },
    {
     "q": "January",
     "a": "1st",
     "type": "key"
    },
    {
     "q": "Tuesday",
     "a": "3rd",
     "type": "key"
    },
    {
     "q": "Thursday",
     "a": "5th",
     "type": "key"
    },
    {
     "q": "Saturday",
     "a": "7th",
     "type": "key"
    },
    {
     "q": "Monday",
     "a": "2nd",
     "type": "key"
    },
    {
     "q": "Friday",
     "a": "6th",
     "type": "key"
    },
    {
     "q": "Wednesday",
     "a": "4th",
     "type": "key"
    },
    {
     "q": "Sunday",
     "a": "1st",
     "type": "key"
    }
   ],
   "ordered": true
  },
  {
   "n": 35,
   "title": "The Calendar",
   "concept": "How many months are there in a year? There are twelve months in a year. In order, these are: January, February, March, April, May, June, July, August, September, October, November, December. Different months have different numbers of days. A popular rhyme will help you remember which months have 28, 30, and 31 days: 30 days have September, April, June and November. All the rest have 31 except February which has 28 and 29 during leap years. How well do you know your calendar! What comes Before? After? For example, the current month now is June. To know what comes before June we look at the month on the left side of June. To know what month comes after June we look at the month on the right side of June. MAY <- JUNE -> JULY (before) (after). So the month before June is May. And the month after June is July.",
   "example": "MAY (before) <- JUNE -> JULY (after). The month before June is May. The month after June is July.",
   "instruction": "Identify what comes before/after the given month.",
   "items": [
    {
     "q": "The month that comes before February is ____.",
     "a": "January",
     "type": "key"
    },
    {
     "q": "What month comes after October?",
     "a": "November",
     "type": "key"
    },
    {
     "q": "The month that comes after September is ____.",
     "a": "October",
     "type": "key"
    },
    {
     "q": "What month comes before March?",
     "a": "February",
     "type": "key"
    },
    {
     "q": "What month comes before June?",
     "a": "May",
     "type": "key"
    },
    {
     "q": "The month that comes after August is ____.",
     "a": "September",
     "type": "key"
    },
    {
     "q": "What month comes before April?",
     "a": "March",
     "type": "key"
    },
    {
     "q": "The month that comes after November is ____.",
     "a": "December",
     "type": "key"
    },
    {
     "q": "What month comes after July?",
     "a": "August",
     "type": "key"
    },
    {
     "q": "The month that comes before May is ____.",
     "a": "April",
     "type": "key"
    },
    {
     "q": "What month comes after May?",
     "a": "June",
     "type": "key"
    },
    {
     "q": "The month that comes after June is ____.",
     "a": "July",
     "type": "key"
    }
   ]
  },
  {
   "n": 36,
   "title": "Reading a Calendar",
   "concept": "Reading a Calendar. This calendar shows the month of June. It has 30 days and 4 weeks. It also has all the seven days of the week. June 1 is a Sunday. June 12 is a Thursday. June 27 is a Friday. There are 5 Mondays in June: June 2, 9, 16, 23, and 30. There are 4 Wednesdays in June: June 4, 11, 18, and 25. There are 4 Saturdays in June: June 7, 14, 21, and 28.",
   "example": "",
   "instruction": "Use the calendar for the month of April to answer the questions below.",
   "items": [
    {
     "q": "April has ____ days.",
     "a": "30",
     "type": "key"
    },
    {
     "q": "April 14 is a ____.",
     "a": "Monday",
     "type": "key"
    },
    {
     "q": "There are ____ Tuesdays in April.",
     "a": "5",
     "type": "key"
    },
    {
     "q": "How many weeks are there in April?",
     "a": "4",
     "type": "key"
    },
    {
     "q": "What day of the week is April 30?",
     "a": "Wednesday",
     "type": "key"
    },
    {
     "q": "What is five days after April 3?",
     "a": "April 8; 8",
     "type": "key",
     "alt": true
    },
    {
     "q": "How many Sundays are there in April?",
     "a": "4",
     "type": "key"
    },
    {
     "q": "What is 6 days before April 18?",
     "a": "April 12; 12",
     "type": "key",
     "alt": true
    }
   ],
   "fig": {
    "kind": "calendar",
    "month": "April",
    "year": 2014,
    "firstDow": 2,
    "days": 30
   }
  }
 ],
 "g3": [
  {
   "n": 1,
   "title": "Place Value / Value of Each Digit in a Number",
   "concept": "Place Value: What is the place value of the underlined digit in 854? 854 HAS: 8 hundreds, 5 tens, 4 ones (ONES place, TENS place, HUNDREDS place). The place value of the underlined digit 5 is tens. | Value of Each Digit in a Number: The value of a digit depends on its place, or position, in the number. Each place has a value of 10 times the place to its right. Example: 654 -> 4, 50, 600. So what is the value of the digit 5? The value of the digit 5 is 50.",
   "example": "854 = 8 hundreds, 5 tens, 4 ones; place value of underlined 5 is tens",
   "instruction": "Items 1-13: Write the place value of the underlined digit. Items 14-28: Write the value of the underlined digit.",
   "items": [
    {
     "q": "234 (underlined: 4)",
     "a": "ones",
     "type": "key",
     "ask": "place value"
    },
    {
     "q": "467 (underlined: 6)",
     "a": "tens",
     "type": "key",
     "ask": "place value"
    },
    {
     "q": "780 (underlined: 0)",
     "a": "ones",
     "type": "key",
     "ask": "place value"
    },
    {
     "q": "518 (underlined: 5)",
     "a": "hundreds",
     "type": "key",
     "ask": "place value"
    },
    {
     "q": "265 (underlined: 6)",
     "a": "tens",
     "type": "key",
     "ask": "place value"
    },
    {
     "q": "247 (underlined: 7)",
     "a": "ones",
     "type": "key",
     "ask": "place value"
    },
    {
     "q": "191 (underlined: 9)",
     "a": "tens",
     "type": "key",
     "ask": "place value"
    },
    {
     "q": "563 (underlined: 3)",
     "a": "ones",
     "type": "key",
     "ask": "place value"
    },
    {
     "q": "480 (underlined: 8)",
     "a": "tens",
     "type": "key",
     "ask": "place value"
    },
    {
     "q": "734 (underlined: 7)",
     "a": "hundreds",
     "type": "key",
     "ask": "place value"
    },
    {
     "q": "567 (underlined: 6)",
     "a": "tens",
     "type": "key",
     "ask": "place value"
    },
    {
     "q": "345 (underlined: 3)",
     "a": "hundreds",
     "type": "key",
     "ask": "place value"
    },
    {
     "q": "678 (underlined: 6)",
     "a": "hundreds",
     "type": "key",
     "ask": "place value"
    },
    {
     "q": "500 (underlined: 5)",
     "a": "500",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "300 (underlined: 3)",
     "a": "300",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "731 (underlined: 3)",
     "a": "30",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "780 (underlined: 8)",
     "a": "80",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "452 (underlined: 2)",
     "a": "2",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "234 (underlined: 2)",
     "a": "200",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "734 (underlined: 7)",
     "a": "700",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "564 (underlined: 5)",
     "a": "500",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "345 (underlined: 5)",
     "a": "5",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "577 (underlined: 5)",
     "a": "500",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "372 (underlined: 7)",
     "a": "70",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "843 (underlined: 8)",
     "a": "800",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "123 (underlined: 1)",
     "a": "100",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "102 (underlined: 0)",
     "a": "0",
     "type": "key",
     "ask": "value"
    },
    {
     "q": "611 (underlined: 6)",
     "a": "600",
     "type": "key",
     "ask": "value"
    }
   ],
   "ordered": true
  },
  {
   "n": 2,
   "title": "Writing Numbers in Words / Writing Words in Numbers",
   "concept": "Writing Numbers in Words (20 to 99): always remember to write a hyphen between the numbers. 21 Twenty-one; 36 Thirty-six; 49 Forty-nine; 57 Fifty-seven; 62 Sixty-two; 78 Seventy-eight; 83 Eighty-three; 95 Ninety-five. Hundreds table: 100 one hundred, 200 two hundred, 300 three hundred, 400 four hundred, 500 five hundred, 600 six hundred, 700 seven hundred, 800 eight hundred, 900 nine hundred. Start from the left-most digit then move to the next digit until you have written the whole number. | Writing Words in Numbers: examples given below.",
   "example": "21 Twenty-one; 36 Thirty-six; 49 Forty-nine; 57 Fifty-seven; 62 Sixty-two; 78 Seventy-eight; 83 Eighty-three; 95 Ninety-five",
   "instruction": "Items 1-25: Write the following numbers in words. Items 26-45: Write the following words in numbers.",
   "items": [
    {
     "q": "346",
     "a": "three hundred forty-six",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "476",
     "a": "four hundred seventy-six",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "258",
     "a": "two hundred fifty-eight",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "389",
     "a": "three hundred eighty-nine",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "956",
     "a": "nine hundred fifty-six",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "899",
     "a": "eight hundred ninety-nine",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "401",
     "a": "four hundred one",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "256",
     "a": "two hundred fifty-six",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "677",
     "a": "six hundred seventy-seven",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "555",
     "a": "five hundred fifty-five",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "210",
     "a": "two hundred ten",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "587",
     "a": "five hundred eighty-seven",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "689",
     "a": "six hundred eighty-nine",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "897",
     "a": "eight hundred ninety-seven",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "512",
     "a": "five hundred twelve",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "734",
     "a": "seven hundred thirty-four",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "930",
     "a": "nine hundred thirty",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "456",
     "a": "four hundred fifty-six",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "545",
     "a": "five hundred forty-five",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "1,000",
     "a": "one thousand",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "400",
     "a": "four hundred",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "320",
     "a": "three hundred twenty",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "141",
     "a": "one hundred forty-one",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "196",
     "a": "one hundred ninety-six",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "658",
     "a": "six hundred fifty-eight",
     "type": "num-to-words",
     "ask": "in words"
    },
    {
     "q": "three hundred forty-five",
     "a": "345",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "six hundred seventy-two",
     "a": "672",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "five hundred one",
     "a": "501",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "two hundred seventy-seven",
     "a": "277",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "eight hundred fifty-three",
     "a": "853",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "two hundred",
     "a": "200",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "five hundred four",
     "a": "504",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "six hundred forty",
     "a": "640",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "nine hundred nineteen",
     "a": "919",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "two hundred fourteen",
     "a": "214",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "four-hundred forty-three",
     "a": "443",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "nine hundred ninety-nine",
     "a": "999",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "eight hundred seventy-six",
     "a": "876",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "two hundred ten",
     "a": "210",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "one hundred fifteen",
     "a": "115",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "two hundred six",
     "a": "206",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "seven hundred twenty-three",
     "a": "723",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "three hundred eighteen",
     "a": "318",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "eight hundred eighteen",
     "a": "818",
     "type": "words-to-num",
     "ask": "in figures"
    },
    {
     "q": "one thousand",
     "a": "1000",
     "type": "words-to-num",
     "ask": "in figures"
    }
   ],
   "ordered": true
  },
  {
   "n": 3,
   "title": "Writing Numbers in Expanded Form",
   "concept": "Writing Numbers in Expanded Form. Standard form 678 has 2 ways of writing in expanded form. First format: 600 + 70 + 8. Second format: (6 x 100) + (7 x 10) + (8 x 1).",
   "example": "678 = 600 + 70 + 8 (first format)",
   "instruction": "Write the following in expanded form. For numbers 1-10 use the first format; for 11-20 use the second format. For 21-45 you may use any format.",
   "items": [
    {
     "q": "345",
     "a": "300 + 40 + 5; (3 x 100) + (4 x 10) + (5 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "789",
     "a": "700 + 80 + 9; (7 x 100) + (8 x 10) + (9 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "127",
     "a": "100 + 20 + 7; (1 x 100) + (2 x 10) + (7 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "600",
     "a": "600; (6 x 100)",
     "type": "key",
     "alt": true
    },
    {
     "q": "507",
     "a": "500 + 7; (5 x 100) + (7 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "654",
     "a": "600 + 50 + 4; (6 x 100) + (5 x 10) + (4 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "534",
     "a": "500 + 30 + 4; (5 x 100) + (3 x 10) + (4 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "463",
     "a": "400 + 60 + 3; (4 x 100) + (6 x 10) + (3 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "370",
     "a": "300 + 70; (3 x 100) + (7 x 10)",
     "type": "key",
     "alt": true
    },
    {
     "q": "241",
     "a": "200 + 40 + 1; (2 x 100) + (4 x 10) + (1 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "507",
     "a": "500 + 7; (5 x 100) + (7 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "654",
     "a": "600 + 50 + 4; (6 x 100) + (5 x 10) + (4 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "862",
     "a": "800 + 60 + 2; (8 x 100) + (6 x 10) + (2 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "671",
     "a": "600 + 70 + 1; (6 x 100) + (7 x 10) + (1 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "804",
     "a": "800 + 4; (8 x 100) + (4 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "975",
     "a": "900 + 70 + 5; (9 x 100) + (7 x 10) + (5 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "534",
     "a": "500 + 30 + 4; (5 x 100) + (3 x 10) + (4 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "363",
     "a": "300 + 60 + 3; (3 x 100) + (6 x 10) + (3 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "234",
     "a": "200 + 30 + 4; (2 x 100) + (3 x 10) + (4 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "156",
     "a": "100 + 50 + 6; (1 x 100) + (5 x 10) + (6 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "seventy-seven",
     "a": "70 + 7; (7 x 10) + (7 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "twenty-six",
     "a": "20 + 6; (2 x 10) + (6 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "Ninety",
     "a": "90; (9 x 10)",
     "type": "key",
     "alt": true
    },
    {
     "q": "Sixty-nine",
     "a": "60 + 9; (6 x 10) + (9 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "Forty-seven",
     "a": "40 + 7; (4 x 10) + (7 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "Thirty-eight",
     "a": "30 + 8; (3 x 10) + (8 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "Ninety-five",
     "a": "90 + 5; (9 x 10) + (5 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "seven hundred twenty-eight",
     "a": "700 + 20 + 8; (7 x 100) + (2 x 10) + (8 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "Nine hundred ninety-nine",
     "a": "900 + 90 + 9; (9 x 100) + (9 x 10) + (9 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "One hundred fifty-two",
     "a": "100 + 50 + 2; (1 x 100) + (5 x 10) + (2 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "Six hundred twenty",
     "a": "600 + 20; (6 x 100) + (2 x 10)",
     "type": "key",
     "alt": true
    },
    {
     "q": "Nine hundred nineteen",
     "a": "900 + 10 + 9; (9 x 100) + (1 x 10) + (9 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "Two hundred fifty-four",
     "a": "200 + 50 + 4; (2 x 100) + (5 x 10) + (4 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "Six hundred fifty-one",
     "a": "600 + 50 + 1; (6 x 100) + (5 x 10) + (1 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "652",
     "a": "600 + 50 + 2; (6 x 100) + (5 x 10) + (2 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "235",
     "a": "200 + 30 + 5; (2 x 100) + (3 x 10) + (5 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "981",
     "a": "900 + 80 + 1; (9 x 100) + (8 x 10) + (1 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "644",
     "a": "600 + 40 + 4; (6 x 100) + (4 x 10) + (4 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "267",
     "a": "200 + 60 + 7; (2 x 100) + (6 x 10) + (7 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "109",
     "a": "100 + 9; (1 x 100) + (9 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "631",
     "a": "600 + 30 + 1; (6 x 100) + (3 x 10) + (1 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "317",
     "a": "300 + 10 + 7; (3 x 100) + (1 x 10) + (7 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "783",
     "a": "700 + 80 + 3; (7 x 100) + (8 x 10) + (3 x 1)",
     "type": "key",
     "alt": true
    },
    {
     "q": "430",
     "a": "400 + 30; (4 x 100) + (3 x 10)",
     "type": "key",
     "alt": true
    },
    {
     "q": "999",
     "a": "900 + 90 + 9; (9 x 100) + (9 x 10) + (9 x 1)",
     "type": "key",
     "alt": true
    }
   ]
  },
  {
   "n": 4,
   "title": "Comparing and Ordering Numbers",
   "concept": "Arranging Numbers in increasing or ascending order: consider 3, 0, 2, 1; arranged from least to greatest they are ordered 0, 1, 2, 3. Arranging Numbers in decreasing or descending order: 3, 0, 2, 1 arranged from greatest to least are 3, 2, 1, 0.",
   "example": "3, 0, 2, 1 arranged ascending = 0, 1, 2, 3",
   "instruction": "Items 1-10: Write the correct symbol on the blank provided (<, >, or =). Items 11-19: Answer the following problems. Items 20-30: Arrange the numbers in increasing/ascending order. Items 31-40: Arrange the numbers in decreasing/descending order.",
   "items": [
    {
     "q": "998 899 _ 99 889",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "500 001 _ 500 010",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "99 000 _ 90 999",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "85 538 _ 58 358",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "678 898 _ 697 889",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "455 600 _ 466 500",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "989 800 _ 998 800",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "100 002 _ 100 010",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "323 522 _ 322 523",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "123 115 _ 102 231",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "1, 4, 3, 2",
     "a": "1, 2, 3, 4",
     "type": "order-asc"
    },
    {
     "q": "3, 6, 4, 5",
     "a": "3, 4, 5, 6",
     "type": "order-asc"
    },
    {
     "q": "9, 11, 10, 8",
     "a": "8, 9, 10, 11",
     "type": "order-asc"
    },
    {
     "q": "3, 0, 2, 1",
     "a": "0, 1, 2, 3",
     "type": "order-asc"
    },
    {
     "q": "2, 5, 4, 3",
     "a": "2, 3, 4, 5",
     "type": "order-asc"
    },
    {
     "q": "4, 6, 7, 5",
     "a": "4, 5, 6, 7",
     "type": "order-asc"
    },
    {
     "q": "8, 6, 7, 9",
     "a": "6, 7, 8, 9",
     "type": "order-asc"
    },
    {
     "q": "8, 7, 6, 5",
     "a": "5, 6, 7, 8",
     "type": "order-asc"
    },
    {
     "q": "9, 2, 6, 3",
     "a": "2, 3, 6, 9",
     "type": "order-asc"
    },
    {
     "q": "9, 7, 6, 0",
     "a": "0, 6, 7, 9",
     "type": "order-asc"
    },
    {
     "q": "10, 8, 9, 7",
     "a": "7, 8, 9, 10",
     "type": "order-asc"
    },
    {
     "q": "0, 11, 9, 5",
     "a": "11, 9, 5, 0",
     "type": "order-desc"
    },
    {
     "q": "10, 8, 4, 2",
     "a": "10, 8, 4, 2",
     "type": "order-desc"
    },
    {
     "q": "3, 9, 6, 12",
     "a": "12, 9, 6, 3",
     "type": "order-desc"
    },
    {
     "q": "12, 11, 9, 8",
     "a": "12, 11, 9, 8",
     "type": "order-desc"
    },
    {
     "q": "18, 20, 19, 21",
     "a": "21, 20, 19, 18",
     "type": "order-desc"
    },
    {
     "q": "19, 21, 20, 22",
     "a": "22, 21, 20, 19",
     "type": "order-desc"
    },
    {
     "q": "20, 17, 18, 19",
     "a": "20, 19, 18, 17",
     "type": "order-desc"
    },
    {
     "q": "11, 13, 12, 14",
     "a": "14, 13, 12, 11",
     "type": "order-desc"
    },
    {
     "q": "20, 23, 21, 22",
     "a": "23, 22, 21, 20",
     "type": "order-desc"
    },
    {
     "q": "17, 15, 16, 14",
     "a": "17, 16, 15, 14",
     "type": "order-desc"
    }
   ],
   "ordered": true
  },
  {
   "n": 5,
   "title": "Missing Terms in Patterns (Two Attributes)",
   "concept": "A two-attribute pattern has two things changing at the same time, usually letters and numbers. The trick is to look at them one at a time. First read only the numbers and find what is added or subtracted, then read only the letters and see if they move forward or backward in the alphabet. Put the two answers back together in the right order and you have the missing terms.",
   "example": "",
   "instruction": "Determine the missing term/s in a given continuous pattern using TWO ATTRIBUTES. Write the missing term/s in the blank provided.",
   "items": [
    {
     "q": "2 B 4 D 6 F 8 H 10 __ __",
     "a": "J, 12",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 K 10 L 15 M 20 N __ __",
     "a": "O, 25",
     "type": "key",
     "seq": true
    },
    {
     "q": "A 1 C 2 E 3 G 4 I __ __",
     "a": "5, K",
     "type": "key",
     "seq": true
    },
    {
     "q": "Z 26 Y 24 X 22 W 20 __ __",
     "a": "V, 18",
     "type": "key",
     "seq": true
    },
    {
     "q": "10 D 15 E 20 F 25 G __ __",
     "a": "30, H",
     "type": "key",
     "seq": true
    },
    {
     "q": "Q 17 P 15 O 13 N 11 __ __",
     "a": "M, 9",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 A 4 B 6 C 8 D __ __",
     "a": "10, E",
     "type": "key",
     "seq": true
    },
    {
     "q": "M 10 N 15 O 20 P 25 __ __",
     "a": "Q, 30",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 Z 4 Y 6 X 8 W __ __",
     "a": "10, V",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 G 4 H 6 I 8 J __ __",
     "a": "10, L",
     "type": "key",
     "seq": true
    },
    {
     "q": "B 2 C 4 D 6 E 8 __ __",
     "a": "F, 10",
     "type": "key",
     "seq": true
    },
    {
     "q": "10 J 20 I 30 H 40 G __ __",
     "a": "50, F",
     "type": "key",
     "seq": true
    },
    {
     "q": "A 5 B 10 C 15 D 20 __ __",
     "a": "E, 25",
     "type": "key",
     "seq": true
    },
    {
     "q": "R 18 Q 16 P 14 O 12 __ __",
     "a": "N, 10",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 M 4 N 6 O 8 P __ __",
     "a": "10, Q",
     "type": "key",
     "seq": true
    },
    {
     "q": "L 30 K 25 J 20 I 15 __ __",
     "a": "H, 10",
     "type": "key",
     "seq": true
    },
    {
     "q": "1 Z 2 Y 3 X 4 W __ __",
     "a": "5, V",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 E 10 F 15 G 20 H __ __",
     "a": "25, I",
     "type": "key",
     "seq": true
    },
    {
     "q": "S 19 T 17 U 15 V 13 __ __",
     "a": "W, 11",
     "type": "key",
     "seq": true
    },
    {
     "q": "100 A 200 C 300 E 400 G __ __",
     "a": "500, H",
     "type": "key",
     "seq": true
    },
    {
     "q": "20 A 40 B 60 C 80 D 100 E __ __",
     "a": "120, F",
     "type": "key",
     "seq": true
    },
    {
     "q": "Q 5 P 10 O 15 N 20 M 25 __ __",
     "a": "L, 30",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 K 4 L 6 M 8 N 10 O __ __",
     "a": "12, P",
     "type": "key",
     "seq": true
    },
    {
     "q": "A 5 B 10 C 15 D 20 E 25 __ __",
     "a": "F, 30",
     "type": "key",
     "seq": true
    },
    {
     "q": "Z 30 Y 28 X 26 W 24 V 22 __ __",
     "a": "U, 20",
     "type": "key",
     "seq": true
    },
    {
     "q": "20 D 40 E 60 F 80 G 100 H __ __",
     "a": "120, I",
     "type": "key",
     "seq": true
    },
    {
     "q": "M 2 N 4 O 6 P 8 Q 10 __ __",
     "a": "R, 12",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 X 10 W 15 V 20 U 25 T __ __",
     "a": "30, S",
     "type": "key",
     "seq": true
    },
    {
     "q": "H 8 G 6 F 4 E 2 D 0 __ __",
     "a": "C, -2",
     "type": "key",
     "seq": true
    },
    {
     "q": "30 A 40 B 50 C 60 D 70 E __ __",
     "a": "80, F",
     "type": "key",
     "seq": true
    },
    {
     "q": "R 8 S 10 T 12 U 14 V 16 __ __",
     "a": "W, 18",
     "type": "key",
     "seq": true
    },
    {
     "q": "9 M 8 N 7 O 6 P 5 Q __ __",
     "a": "4, R",
     "type": "key",
     "seq": true
    },
    {
     "q": "C 45 D 40 E 35 F 30 G 25 __ __",
     "a": "H, 20",
     "type": "key",
     "seq": true
    },
    {
     "q": "20 A 40 B 60 C 80 D 100 __ __",
     "a": "120, E",
     "type": "key",
     "seq": true
    },
    {
     "q": "L 5 K 10 J 15 I 20 H 25 __ __",
     "a": "G, 30",
     "type": "key",
     "seq": true
    },
    {
     "q": "100 Q 98 R 96 S 94 T 92 U __ __",
     "a": "90, V",
     "type": "key",
     "seq": true
    },
    {
     "q": "B 45 C 50 D 55 E 60 F 65 __ __",
     "a": "G, 70",
     "type": "key",
     "seq": true
    },
    {
     "q": "20 J 18 I 16 H 14 G 12 F __ __",
     "a": "10, E",
     "type": "key",
     "seq": true
    },
    {
     "q": "P 0 O 50 N 100 M 150 L 200 __ __",
     "a": "K, 250",
     "type": "key",
     "seq": true
    },
    {
     "q": "45 Z 40 Y 35 X 30 W 25 V __ __",
     "a": "20, U",
     "type": "key",
     "seq": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "3 A 6 B 9 C 12 D __ __",
     "steps": [
      "Numbers only: 3, 6, 9, 12. Each one is 3 more than the one before.",
      "So the next number is 12 + 3 = 15.",
      "Letters only: A, B, C, D. They move forward one letter each time, so next is E.",
      "The pattern goes number then letter, so the blanks are 15 and E."
     ],
     "a": "15, E"
    },
    {
     "q": "T 12 S 10 R 8 Q 6 __ __",
     "steps": [
      "Letters only: T, S, R, Q. They move backward one letter each time, so next is P.",
      "Numbers only: 12, 10, 8, 6. Each one is 2 less, so next is 6 - 2 = 4.",
      "The pattern goes letter then number, so the blanks are P and 4."
     ],
     "a": "P, 4"
    },
    {
     "q": "50 B 60 D 70 F 80 H __ __",
     "steps": [
      "Numbers only: 50, 60, 70, 80. Each one is 10 more, so next is 90.",
      "Letters only: B, D, F, H. They skip one letter each time, so after H comes J.",
      "The blanks are 90 and J."
     ],
     "a": "90, J"
    }
   ]
  },
  {
   "n": 6,
   "title": "Missing Terms in Patterns (One Attribute)",
   "concept": "In a one-attribute pattern only one thing changes, so you only need to find one rule. A growing pattern adds or subtracts the same amount each time, like 5, 10, 15, where you add 5. A repeating pattern says the same small group over and over, so find where the group starts again and copy it. Lists you already know, like days and months, follow their own order.",
   "example": "",
   "instruction": "Determine the missing terms using one attribute in a given continuous pattern or in a given repeating pattern.",
   "items": [
    {
     "q": "2, 4, 6, 8, 10, ___, ___",
     "a": "12, 14",
     "type": "key",
     "seq": true
    },
    {
     "q": "A, B, C, D, E, ___, ___",
     "a": "F, G",
     "type": "key",
     "seq": true
    },
    {
     "q": "January, February, March, April, ___, ___",
     "a": "May, June",
     "type": "key",
     "seq": true
    },
    {
     "q": "Monday, Tuesday, Wednesday, Thursday, ___, ___",
     "a": "Friday, Saturday",
     "type": "key",
     "seq": true
    },
    {
     "q": "2, 4, 6, 8, 10, 12, 14, ___",
     "a": "16, 18",
     "type": "key",
     "seq": true
    },
    {
     "q": "3, 3, 3, 3, 3, 3, 3, ___",
     "a": "3",
     "type": "key"
    },
    {
     "q": "15, 20, 25, 30, 35, ___, ___",
     "a": "40, 45",
     "type": "key",
     "seq": true
    },
    {
     "q": "31, 36, 41, 46, 51, ___, ___",
     "a": "56, 61",
     "type": "key",
     "seq": true
    },
    {
     "q": "G, H, I, J, K, ___, ___",
     "a": "L, M",
     "type": "key",
     "seq": true
    },
    {
     "q": "1st, 2nd, 3rd, 4th, 5th, ___, ___",
     "a": "6th, 7th",
     "type": "key",
     "seq": true
    },
    {
     "q": "A, B, A, B, A, B, ___, ___",
     "a": "A, B",
     "type": "key",
     "seq": true
    },
    {
     "q": "X, Y, Z, X, Y, Z, ___, ___",
     "a": "X, Y",
     "type": "key",
     "seq": true
    },
    {
     "q": "red, blue, red, blue, red, blue, ___, ___",
     "a": "red, blue",
     "type": "key",
     "seq": true
    },
    {
     "q": "cat, dog, cat, dog, cat, dog, ___, ___",
     "a": "cat, dog",
     "type": "key",
     "seq": true
    },
    {
     "q": "5, 10, 5, 10, 5, 10, ___, ___",
     "a": "5, 10",
     "type": "key",
     "seq": true
    },
    {
     "q": "1, 2, 1, 2, 1, 2, ___, ___",
     "a": "1, 2",
     "type": "key",
     "seq": true
    },
    {
     "q": "2, 4, 2, 4, 2, 4, ___, ___",
     "a": "2, 4",
     "type": "key",
     "seq": true
    },
    {
     "q": "A, A, B, B, A, A, B, B, ___, ___",
     "a": "A, A",
     "type": "key",
     "seq": true
    },
    {
     "q": "sunny, rainy, sunny, rainy, sunny, rainy, ___, ___",
     "a": "sunny, rainy",
     "type": "key",
     "seq": true
    },
    {
     "q": "100, 90, 80, 70, 60, ___, ___",
     "a": "50, 40",
     "type": "key",
     "seq": true
    },
    {
     "q": "3, 6, 9, 12, 15, ___, ___",
     "a": "18, 21",
     "type": "key",
     "seq": true
    },
    {
     "q": "K, L, M, N, O, ___, ___",
     "a": "P, Q",
     "type": "key",
     "seq": true
    },
    {
     "q": "May, June, July, August, ___, ___",
     "a": "September, October",
     "type": "key",
     "seq": true
    },
    {
     "q": "Saturday, Sunday, Monday, Tuesday, ___, ___",
     "a": "Wednesday, Thursday",
     "type": "key",
     "seq": true
    },
    {
     "q": "1, 11, 111, 1111, 11111, ___, ___",
     "a": "111111, 1111111",
     "type": "key",
     "seq": true
    },
    {
     "q": "yes, yes, no, yes, yes, no, yes, yes, ___, ___",
     "a": "no, yes",
     "type": "key",
     "seq": true
    },
    {
     "q": "50, 55, 60, 65, ___, ___",
     "a": "70, 75",
     "type": "key",
     "seq": true
    },
    {
     "q": "P, Q, R, S, T, U, ___, ___",
     "a": "V, W",
     "type": "key",
     "seq": true
    },
    {
     "q": "10th, 11th, 12th, 13th, ___, ___",
     "a": "14th, 15th",
     "type": "key",
     "seq": true
    },
    {
     "q": "100, 200, 300, 400, ___, ___",
     "a": "500, 600",
     "type": "key",
     "seq": true
    },
    {
     "q": "red, blue, red, blue, red, blue, red, blue, ___, ___",
     "a": "red, blue",
     "type": "key",
     "seq": true
    },
    {
     "q": "black, white, black, white, black, white, ___, ___",
     "a": "black, white",
     "type": "key",
     "seq": true
    },
    {
     "q": "cat, cat, dog, cat, cat, dog, cat, cat, dog, ___, ___",
     "a": "cat, cat",
     "type": "key",
     "seq": true
    },
    {
     "q": "apple, banana, apple, banana, apple, banana, ___, ___",
     "a": "apple, banana",
     "type": "key",
     "seq": true
    },
    {
     "q": "2, 4, 2, 4, 2, 4, 2, 4, ___, ___",
     "a": "2, 4",
     "type": "key",
     "seq": true
    },
    {
     "q": "A, A, B, A, A, B, A, A, B, ___, ___",
     "a": "A, A",
     "type": "key",
     "seq": true
    },
    {
     "q": "1, 1, 2, 1, 1, 2, 1, 1, 2, ___, ___",
     "a": "1, 1",
     "type": "key",
     "seq": true
    },
    {
     "q": "Monday, Monday, Tuesday, Monday, Monday, Tuesday, ___, ___",
     "a": "Monday, Monday",
     "type": "key",
     "seq": true
    },
    {
     "q": "high, low, high, low, high, low, high, low, ___, ___",
     "a": "high, low",
     "type": "key",
     "seq": true
    },
    {
     "q": "up, down, up, down, up, down, up, down, ___, ___",
     "a": "up, down",
     "type": "key",
     "seq": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "4, 8, 12, 16, 20, ___, ___",
     "steps": [
      "Compare each number with the one before it: 8 - 4 = 4, 12 - 8 = 4.",
      "The rule is add 4 each time.",
      "20 + 4 = 24, then 24 + 4 = 28."
     ],
     "a": "24, 28"
    },
    {
     "q": "90, 85, 80, 75, 70, ___, ___",
     "steps": [
      "The numbers are getting smaller: 90 - 85 = 5.",
      "The rule is subtract 5 each time.",
      "70 - 5 = 65, then 65 - 5 = 60."
     ],
     "a": "65, 60"
    },
    {
     "q": "star, moon, star, moon, star, moon, ___, ___",
     "steps": [
      "The group that repeats is star, moon.",
      "The last term shown is moon, so the group starts over.",
      "The next two are star then moon."
     ],
     "a": "star, moon"
    },
    {
     "q": "mango, mango, guava, mango, mango, guava, ___, ___",
     "steps": [
      "The group that repeats is mango, mango, guava. It has three terms.",
      "The pattern ends on guava, so a new group begins.",
      "The next two are mango and mango."
     ],
     "a": "mango, mango"
    }
   ]
  },
  {
   "n": 7,
   "title": "Visualizes and Counts Numbers by 10s, 50s, 100s",
   "concept": "When things are tied in bundles, do not count them one by one. Find out how many are in one bundle, then skip count by that amount. Skip counting by 10s goes 10, 20, 30, and by 100s goes 100, 200, 300. A faster way is to multiply the number of bundles by the size of one bundle.",
   "example": "",
   "instruction": "Count the total number shown.",
   "items": [
    {
     "q": "How many are there?",
     "a": "400",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 100,
        "count": 4
       }
      ]
     }
    },
    {
     "q": "How many are there?",
     "a": "300",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 50,
        "count": 6
       }
      ]
     }
    },
    {
     "q": "How many are there?",
     "a": "80",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10,
        "count": 8
       }
      ]
     }
    },
    {
     "q": "How many are there?",
     "a": "400",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 50,
        "count": 8
       }
      ]
     }
    },
    {
     "q": "How many are there?",
     "a": "700",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 100,
        "count": 7
       }
      ]
     }
    },
    {
     "q": "How many are there?",
     "a": "90",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10,
        "count": 9
       }
      ]
     }
    },
    {
     "q": "How many are there?",
     "a": "250",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 50,
        "count": 5
       }
      ]
     }
    },
    {
     "q": "How many are there?",
     "a": "500",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 100,
        "count": 5
       }
      ]
     }
    },
    {
     "q": "How many are there?",
     "a": "90",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10,
        "count": 9
       }
      ]
     }
    },
    {
     "q": "How many are there?",
     "a": "250",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 50,
        "count": 5
       }
      ]
     }
    },
    {
     "q": "How many are there?",
     "a": "600",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 100,
        "count": 6
       }
      ]
     }
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "What is the total?",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10,
        "count": 6
       }
      ]
     },
     "steps": [
      "Each circle shows 10.",
      "Count the circles. There are 6.",
      "Skip count by tens: 10, 20, 30, 40, 50, 60."
     ],
     "a": "60"
    },
    {
     "q": "How much is shown in all?",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 50,
        "count": 4
       }
      ]
     },
     "steps": [
      "Each circle shows 50.",
      "There are 4 circles.",
      "Skip count by fifties: 50, 100, 150, 200.",
      "You can also do 4 x 50 = 200."
     ],
     "a": "200"
    },
    {
     "q": "What number is shown?",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 100,
        "count": 6
       }
      ]
     },
     "steps": [
      "Each circle shows 100.",
      "Count the circles. There are 6.",
      "Skip count by hundreds: 100, 200, 300, 400, 500, 600."
     ],
     "a": "600"
    },
    {
     "q": "How much do these make in all?",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 50,
        "count": 7
       }
      ]
     },
     "steps": [
      "Each circle shows 50.",
      "There are 7 circles.",
      "Do not count one by one. Multiply: 7 x 50 = 350."
     ],
     "a": "350"
    }
   ]
  },
  {
   "n": 8,
   "title": "Comparing and Arranging Fractions",
   "concept": "Similar fractions are fractions with the same denominators. Examples: 1/4, 2/4 and 3/4 are similar fractions. When comparing similar fractions, the smaller the numerator, the smaller the fraction. Therefore 1/4 < 2/4 and 2/4 < 3/4. Arranging them in ascending order: 1/4, 2/4, 3/4. Arranging them in descending order: 3/4, 2/4, 1/4.",
   "example": "1/4, 2/4, 3/4 are similar fractions",
   "instruction": "Items 1-10: Compare the following unit fractions (write <, > or =). Items 11-14: Arrange the unit fractions in ascending order. Items 15-18: Arrange the unit fractions in descending order. Items 19-30: Compare the following similar fractions (write <, > or =).",
   "items": [
    {
     "q": "1/5 _ 1/8",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "1/2 _ 1/3",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "1/5 _ 1/6",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "1/6 _ 1/4",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "1/6 _ 1/3",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "1/4 _ 1/4",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "1/3 _ 1/6",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "1/8 _ 1/3",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "1/5 _ 1/2",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "1/6 _ 1/6",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "1/4, 1/6, 1/3",
     "a": "1/6, 1/4, 1/3",
     "type": "order-asc"
    },
    {
     "q": "1/3, 1/4, 1/2",
     "a": "1/4, 1/3, 1/2",
     "type": "order-asc"
    },
    {
     "q": "1/6, 1/5, 1/8",
     "a": "1/8, 1/6, 1/5",
     "type": "order-asc"
    },
    {
     "q": "1/2, 1/8, 1/6",
     "a": "1/8, 1/6, 1/2",
     "type": "order-asc"
    },
    {
     "q": "1/6, 1/2, 1/3",
     "a": "1/2, 1/3, 1/6",
     "type": "order-desc"
    },
    {
     "q": "1/8, 1/4, 1/2",
     "a": "1/2, 1/4, 1/8",
     "type": "order-desc"
    },
    {
     "q": "1/6, 1/3, 1/4",
     "a": "1/3, 1/4, 1/6",
     "type": "order-desc"
    },
    {
     "q": "1/3, 1/8, 1/6",
     "a": "1/3, 1/6, 1/8",
     "type": "order-desc"
    },
    {
     "q": "3/8 _ 1/8",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "4/7 _ 5/7",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "2/5 _ 2/5",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "5/10 _ 4/10",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "8/9 _ 1/9",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "4/6 _ 5/6",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "1/2 _ 2/2",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "6/7 _ 4/7",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "3/10 _ 7/10",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "2/3 _ 1/3",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "1/10 _ 1/10",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "4/4 _ 1/4",
     "a": ">",
     "type": "compare"
    }
   ],
   "ordered": true
  },
  {
   "n": 9,
   "title": "Addition of Three-Digit by Two-Digit Numbers",
   "concept": "Addition of three-digit by two-digit number WITHOUT regrouping: line up the ones digits in the rightmost column. Add the ones digits. Add the tens digits. Bring down the hundreds digit. Example: 342 + 26 = 368. | Addition WITH regrouping: line up the ones digits; add the ones, regroup/carry if the answer is two digits; add the tens plus the carry, regroup if needed; bring down or add the hundreds digit. Example: 128 + 34 = 162. Also 137 + 72 = 209.",
   "example": "342 + 26 = 368 (without regrouping)",
   "instruction": "Find the sum. Items 1-14: addition without regrouping. Items 15-24: addition with regrouping. (Problems are presented vertically on the worksheet; shown here horizontally.)",
   "items": [
    {
     "q": "103 + 23"
    },
    {
     "q": "110 + 21"
    },
    {
     "q": "122 + 25"
    },
    {
     "q": "124 + 35"
    },
    {
     "q": "127 + 52"
    },
    {
     "q": "132 + 66"
    },
    {
     "q": "136 + 52"
    },
    {
     "q": "140 + 41"
    },
    {
     "q": "141 + 42"
    },
    {
     "q": "145 + 24"
    },
    {
     "q": "146 + 32"
    },
    {
     "q": "152 + 21"
    },
    {
     "q": "153 + 34"
    },
    {
     "q": "155 + 42"
    },
    {
     "q": "221 + 29"
    },
    {
     "q": "234 + 39"
    },
    {
     "q": "236 + 44"
    },
    {
     "q": "241 + 49"
    },
    {
     "q": "243 + 47"
    },
    {
     "q": "244 + 48"
    },
    {
     "q": "245 + 35"
    },
    {
     "q": "248 + 33"
    },
    {
     "q": "259 + 23"
    },
    {
     "q": "264 + 27"
    }
   ],
   "ordered": true,
   "examples": [
    "214 + 35",
    "162 + 27",
    "326 + 53",
    "253 + 28",
    "238 + 45",
    "267 + 26"
   ]
  },
  {
   "n": 10,
   "title": "Addition of Three-Digit by Three-Digit Number (Without and With Regrouping)",
   "concept": "Part 1 - ADDITION OF THREE-DIGIT BY THREE-DIGIT NUMBER WITHOUT REGROUPING. Consider: 134 + 145 = ___. In adding three-digit numbers without regrouping, line up the ones digits in the rightmost column. Add the ones digits. Add the tens digits. Add the hundreds digits. Answer: 134 + 145 = 279. Part 2 - ADDITION OF THREE-DIGIT BY THREE-DIGIT NUMBER WITH REGROUPING. Consider this: Find the sum of 253 and 347. In adding three-digit numbers with regrouping, line up the ones digits in the rightmost column. Add the ones digits, regroup if need. Add the tens digits, regroup if needed. Bring down or add the hundreds digits. 1. Add the ones digits (3 + 7 = 10). Since the answer is two digits, we need to REGROUP (or carry): write 0 under the ones column and carry 1 to the tens column. 2. Add the tens digits and the carry (5 + 4 + 1 = 10). Write 0 under the tens column and carry 1 to the hundreds column. 3. Add the hundreds digit and the carry (2 + 3 + 1 = 6). So, 253 + 347 = 600.",
   "example": "134 + 145 = 279",
   "instruction": "Find the sum of the following equations. (Part 1) / Find the sum. (Part 2)",
   "items": [
    {
     "q": "165 + 224"
    },
    {
     "q": "502 + 344"
    },
    {
     "q": "406 + 502"
    },
    {
     "q": "682 + 214"
    },
    {
     "q": "101 + 824"
    },
    {
     "q": "187 + 101"
    },
    {
     "q": "824 + 163"
    },
    {
     "q": "624 + 122"
    },
    {
     "q": "183 + 400"
    },
    {
     "q": "406 + 143"
    },
    {
     "q": "471 + 110"
    },
    {
     "q": "245 + 204"
    },
    {
     "q": "413 + 510"
    },
    {
     "q": "846 + 112"
    },
    {
     "q": "113 + 217"
    },
    {
     "q": "116 + 219"
    },
    {
     "q": "124 + 226"
    },
    {
     "q": "125 + 228"
    },
    {
     "q": "127 + 229"
    },
    {
     "q": "132 + 238"
    },
    {
     "q": "138 + 244"
    },
    {
     "q": "145 + 247"
    },
    {
     "q": "147 + 248"
    },
    {
     "q": "162 + 249"
    }
   ],
   "ordered": true,
   "examples": [
    "253 + 136",
    "341 + 205",
    "612 + 274",
    "148 + 235",
    "154 + 227",
    "136 + 248"
   ]
  },
  {
   "n": 11,
   "title": "Word Problems on Addition",
   "concept": "Words like altogether, in all, total and how many now tell you to add. Addition puts two amounts together to find how much there is in the end. Write the numbers one under the other so ones are under ones, tens under tens and hundreds under hundreds. Add the ones first, and if you get 10 or more, carry one to the next column.",
   "example": "",
   "instruction": "Answer the following problems.",
   "items": [
    {
     "q": "110 oranges are in the basket. 25 more oranges are put in the basket. How many oranges are in the basket now?",
     "a": "135 oranges",
     "type": "key"
    },
    {
     "q": "Leni bought 307 shirts for an orphanage. She bought 210 shirts for another orphanage. How many did she buy altogether?",
     "a": "517 shirts",
     "type": "key"
    },
    {
     "q": "Nico has ₱124 in his coin bank. His lola gave him ₱235 more. How much money does he have now?",
     "a": "₱359",
     "type": "key"
    },
    {
     "q": "115 plums were in the basket. 24 more plums were added to the basket. How many plums were in the basket now?",
     "a": "139 plums",
     "type": "key"
    },
    {
     "q": "A vendor earned ₱312 in the morning and ₱256 in the afternoon selling fish balls. How much did she earn for the whole day?",
     "a": "₱568",
     "type": "key"
    },
    {
     "q": "Emie had 216 chocolate coins. Arvin had 48 chocolate coins. How many coins did they have in all?",
     "a": "264 chocolate coins",
     "type": "key"
    },
    {
     "q": "Mrs. Santos had ₱267 in her wallet. She received ₱185 as payment for baked goods. How much money does she have altogether",
     "a": "₱452",
     "type": "key"
    },
    {
     "q": "Gary plays a game and scores 453 points in the first round and 544 points in the second round. The game is over after the second round. What is his total at the end of the game?",
     "a": "997 points",
     "type": "key"
    },
    {
     "q": "Piolo saved ₱349 from his tricycle fares last week. This week he saved ₱278 more. How much has he saved in total?",
     "a": "₱627",
     "type": "key"
    },
    {
     "q": "100 red apples and 65 green apples were in the basket. How many apples are there altogether?",
     "a": "165 apples",
     "type": "key"
    },
    {
     "q": "There are 167 books in one classroom and 332 books in the other. How many books are there altogether in both classroom?",
     "a": "499 books",
     "type": "key"
    },
    {
     "q": "Reina was picking leaves up from her yard. She picked up 324 leaves off the grass. Aries's dad was helping her and only picked up 142 leaves. How many leaves did they pick up together?",
     "a": "466 leaves",
     "type": "key"
    },
    {
     "q": "Chester's assignment this weekend is to read a book. On Saturday, he read 324 pages. On Sunday, he read 56 pages only. How many pages was he able to read?",
     "a": "380 pages",
     "type": "key"
    },
    {
     "q": "Marianne sold 580 cookies. Abram sold 119 cookies. How many cookies did they sell in all?",
     "a": "699 cookies",
     "type": "key"
    },
    {
     "q": "Wesley's farm grew seven hundred eighty-nine pumpkins. Mang Ambo's farm grew forty-five. How many pumpkins did they grow altogether?",
     "a": "834 pumpkins",
     "type": "key"
    },
    {
     "q": "Rae's farm grew 692 watermelons last year. His farm grew 269 this year. How many watermelons did he grow in both years?",
     "a": "961 watermelons",
     "type": "key"
    },
    {
     "q": "Feliz caught 357 fish. Jhun caught 145 fish. How many fish did they catch in all?",
     "a": "502 fish",
     "type": "key"
    },
    {
     "q": "The school library bought four hundred new books last years. They bought sixty-five new book this year. How many books did they buy altogether?",
     "a": "465 books",
     "type": "key"
    },
    {
     "q": "Dave read the first two hundred eight pages of a book. There are fifty-eight pages left to read. How many pages does the book have in total?",
     "a": "266 pages",
     "type": "key"
    },
    {
     "q": "There are two hundred twenty-eight people riding the first train. Another seventy-one people are on the second train. How many people are there on both trains?",
     "a": "299 people",
     "type": "key"
    },
    {
     "q": "There are 230 lions and 140 tigers in the forest. There are the only wild animals in the forest. Find the total of the wild animals in the forest.",
     "a": "370 wild animals",
     "type": "key"
    },
    {
     "q": "Cathy's apple orchard grew 338 apple last month. This month her orchard grew another 324 apples. How many apples did she get from her orchard on both months combined?",
     "a": "662 apples",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "A sari-sari store sold 236 ice candies on Saturday and 147 on Sunday. How many ice candies were sold in all?",
     "steps": [
      "In all means add: 236 + 147.",
      "Ones: 6 + 7 = 13, so write 3 and carry 1 ten.",
      "Tens: 3 + 4 + 1 = 8.",
      "Hundreds: 2 + 1 = 3, so the sum is 383."
     ],
     "a": "383 ice candies"
    },
    {
     "q": "Jun picked 418 santol fruits and his sister picked 95 santol fruits. How many did they pick altogether?",
     "steps": [
      "Altogether means add: 418 + 95. Line up 95 under the tens and ones.",
      "Ones: 8 + 5 = 13, write 3 and carry 1 ten.",
      "Tens: 1 + 9 + 1 = 11, write 1 and carry 1 hundred.",
      "Hundreds: 4 + 1 = 5, so the sum is 513."
     ],
     "a": "513 santol fruits"
    },
    {
     "q": "Aling Rosa earned 275 pesos selling ginataan and 168 pesos selling bibingka. How much did she earn in all?",
     "steps": [
      "In all means add: 275 + 168.",
      "Ones: 5 + 8 = 13, write 3 and carry 1 ten.",
      "Tens: 7 + 6 + 1 = 14, write 4 and carry 1 hundred.",
      "Hundreds: 2 + 1 + 1 = 4, so the total is 443."
     ],
     "a": "443 pesos"
    }
   ]
  },
  {
   "n": 12,
   "title": "Subtraction of Three-Digit by Two-Digit Numbers (Without and With Regrouping)",
   "concept": "Part 1 - SUBTRACTION OF THREE-DIGIT BY TWO-DIGIT NUMBERS WITHOUT REGROUPING. In subtracting three-digit by two-digit numbers without regrouping, vertically line-up the numbers where the ones digits are in the rightmost column. Find the difference following these steps: 1. Subtract the ones digits. 2. Subtract the tens digits. 3. Bring down the hundreds digit. Consider this: 456 - 24 = 432. Part 2 - SUBTRACTION OF THREE-DIGIT BY TWO-DIGIT NUMBERS WITH REGROUPING. A. In subtracting three-digit and two-digit numbers, we do regrouping when the ones digit of the subtrahend is greater than the ones digit of the minuend. (Remember, regrouping means borrowing one ten on the value of the tens digit and adding this to the ones digit of the minuend.) Ex. 255 - 49. Follow these steps: 1. Borrow one ten from the value of the tens digit which is 50. 2. Rewrite the new tens digit (subtract one on the tens digit). 5 tens become 4 tens; 1 ten = 10, add to the ones: 10 + 5 = 15. 3. Subtract the ones column, subtract the tens column and bring down the hundreds. 255 - 49 = 206.",
   "example": "456 - 24 = 432",
   "instruction": "Find the difference.",
   "items": [
    {
     "q": "157 - 12"
    },
    {
     "q": "196 - 11"
    },
    {
     "q": "145 - 13"
    },
    {
     "q": "155 - 25"
    },
    {
     "q": "158 - 18"
    },
    {
     "q": "167 - 21"
    },
    {
     "q": "179 - 25"
    },
    {
     "q": "267 - 25"
    },
    {
     "q": "264 - 14"
    },
    {
     "q": "258 - 35"
    },
    {
     "q": "288 - 33"
    },
    {
     "q": "225 - 15"
    },
    {
     "q": "277 - 24"
    },
    {
     "q": "239 - 19"
    },
    {
     "q": "134 - 27"
    },
    {
     "q": "135 - 26"
    },
    {
     "q": "148 - 39"
    },
    {
     "q": "143 - 24"
    },
    {
     "q": "145 - 28"
    },
    {
     "q": "247 - 29"
    },
    {
     "q": "252 - 33"
    },
    {
     "q": "282 - 46"
    },
    {
     "q": "281 - 27"
    },
    {
     "q": "224 - 16"
    }
   ],
   "examples": [
    "186 - 24",
    "275 - 43",
    "269 - 47",
    "162 - 35",
    "174 - 36",
    "253 - 28"
   ]
  },
  {
   "n": 13,
   "title": "Word Problems on Subtraction",
   "concept": "Subtraction is used when something is taken away, used up or left behind, and also when you compare two amounts to see how many more one has. Always start with the bigger number on top. Subtract the ones first, and if the top digit is too small, borrow one ten from the next column so the top digit grows by 10.",
   "example": "",
   "instruction": "Answer the following problems.",
   "items": [
    {
     "q": "Nica had 74 coins. After spending 20 coins on a football, how many coins does she have left?",
     "a": "54 coins",
     "type": "key"
    },
    {
     "q": "Elmer's high school played 54 baseball games this year. He attended 23 games. How many baseball games did Elmer miss?",
     "a": "31 games",
     "type": "key"
    },
    {
     "q": "Aling Fe had ₱950 in her cash box. She used ₱684 to buy ingredients for her turon business. How much money is left in her cash box??",
     "a": "52 books",
     "type": "key"
    },
    {
     "q": "There are thirty-nine pencils in the drawer. Sam took sixteen pencils from the drawer. How many pencils are now in the drawer?",
     "a": "23 pencils",
     "type": "key"
    },
    {
     "q": "Lawrence had 74 baseball cards. Then, he gave his friend 29 of them. How many does he have left?",
     "a": "45 cards",
     "type": "key"
    },
    {
     "q": "Gerard has 45 cents and his brother, Allen has 79 cents. How much more money does Allen have than Gerard?",
     "a": "34 cents",
     "type": "key"
    },
    {
     "q": "Nardo saved ₱780 from his allowance. He spent ₱225 on new school shoes. How much of his savings is left?",
     "a": "₱555",
     "type": "key"
    },
    {
     "q": "There were 77 sports books. Sadly, 29 were ruined in a flood. How many are left?",
     "a": "48 sports books",
     "type": "key"
    },
    {
     "q": "A canteen had ₱899 in sales for the week. ₱543 was used to pay the supplier. How much money remains?",
     "a": "₱356",
     "type": "key"
    },
    {
     "q": "The ice cream shop had 45 ice cream to sell. The cashier sold 21 ice cream cones. How many ice cream cones are left?",
     "a": "24 ice cream cones",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Marco had 85 marbles. He gave 37 marbles to his cousin. How many marbles are left?",
     "steps": [
      "Gave away means subtract: 85 - 37.",
      "Ones: 5 is smaller than 7, so borrow a ten. 15 - 7 = 8, and the 8 tens become 7 tens.",
      "Tens: 7 - 3 = 4, so the answer is 48."
     ],
     "a": "48 marbles"
    },
    {
     "q": "Aling Lita had 640 pesos in her cash box. She paid 285 pesos for supplies. How much money is left in the cash box?",
     "steps": [
      "Paid out means subtract: 640 - 285.",
      "Ones: 0 is smaller than 5, so borrow a ten. 10 - 5 = 5, and the 4 tens become 3 tens.",
      "Tens: 3 is smaller than 8, so borrow a hundred. 13 - 8 = 5, and the 6 hundreds become 5 hundreds.",
      "Hundreds: 5 - 2 = 3, so the answer is 355."
     ],
     "a": "355 pesos"
    },
    {
     "q": "Rosa has 62 stickers. Ben has 38 stickers. How many more stickers does Rosa have than Ben?",
     "steps": [
      "How many more means compare, so subtract the smaller from the bigger: 62 - 38.",
      "Ones: 2 is smaller than 8, so borrow a ten. 12 - 8 = 4, and the 6 tens become 5 tens.",
      "Tens: 5 - 3 = 2, so the answer is 24."
     ],
     "a": "24 more stickers"
    }
   ]
  },
  {
   "n": 14,
   "title": "Understanding Multiplication",
   "concept": "",
   "example": "9 x 2 = 18",
   "instruction": "Write a multiplication sentence for each. (items 1-10 from word phrases; items 11-20 from repeated addition) / Fill in the blanks using the number lines given. (items 21-25) / Draw the arrows on the number line for each multiplication statement and find the product. (items 26-30)",
   "items": [
    {
     "q": "4 fives",
     "a": "20",
     "type": "key"
    },
    {
     "q": "3 fours",
     "a": "12",
     "type": "key"
    },
    {
     "q": "2 eights",
     "a": "16",
     "type": "key"
    },
    {
     "q": "6 fives",
     "a": "30",
     "type": "key"
    },
    {
     "q": "4 twos",
     "a": "8",
     "type": "key"
    },
    {
     "q": "5 nines",
     "a": "45",
     "type": "key"
    },
    {
     "q": "10 ones",
     "a": "10",
     "type": "key"
    },
    {
     "q": "1 seven",
     "a": "7",
     "type": "key"
    },
    {
     "q": "7 fours",
     "a": "28",
     "type": "key"
    },
    {
     "q": "3 fives",
     "a": "15",
     "type": "key"
    },
    {
     "q": "4 + 4 + 4 + 4",
     "a": "16",
     "type": "key"
    },
    {
     "q": "7 + 7 + 7 + 7 + 7",
     "a": "35",
     "type": "key"
    },
    {
     "q": "1 + 1 + 1",
     "a": "3",
     "type": "key"
    },
    {
     "q": "9 + 9 + 9 + 9 + 9",
     "a": "45",
     "type": "key"
    },
    {
     "q": "5 + 5 + 5 + 5 + 5",
     "a": "25",
     "type": "key"
    },
    {
     "q": "8 + 8 + 8 + 8",
     "a": "32",
     "type": "key"
    },
    {
     "q": "2 + 2 + 2 + 2 + 2 + 2 + 2",
     "a": "14",
     "type": "key"
    },
    {
     "q": "4 + 4 + 4 + 4 + 4 + 4 + 4",
     "a": "28",
     "type": "key"
    },
    {
     "q": "3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 + 3",
     "a": "30",
     "type": "key"
    },
    {
     "q": "6 + 6 + 6 + 6",
     "a": "24",
     "type": "key"
    },
    {
     "q": "Number line (equal jumps of 4: 0-4-8-12): ___ x ___ = ___",
     "a": "12",
     "type": "key"
    },
    {
     "q": "Number line (equal jumps of 6: 0-6-12): ___ x ___ = ___",
     "a": "12",
     "type": "key"
    },
    {
     "q": "Number line (equal jumps of 3 up to 15): ___ x ___ = ___",
     "a": "15",
     "type": "key"
    },
    {
     "q": "Number line (equal jumps of 2 up to 10): ___ x ___ = ___",
     "a": "10",
     "type": "key"
    },
    {
     "q": "Number line (equal jumps of 1 up to 7): ___ x ___ = ___",
     "a": "7",
     "type": "key"
    },
    {
     "q": "9 x 2"
    },
    {
     "q": "2 x 8"
    },
    {
     "q": "6 x 3"
    },
    {
     "q": "4 x 5"
    },
    {
     "q": "1 x 10"
    }
   ],
   "ordered": true,
   "examples": [
    "6 + 6 + 6",
    "7 + 7 + 7",
    "8 x 3",
    "7 x 5"
   ]
  },
  {
   "n": 15,
   "title": "Properties of Multiplication",
   "concept": "MULTIPLICATION. Multiplication is a way of putting together sets with equal number of objects. PROPERTIES OF MULTIPLICATION: 1) COMMUTATIVE PROPERTY (CPM) - The order of the factors does not change the product. 2 x 6 = 6 x 2; 12 = 12. 2) ASSOCIATIVE PROPERTY (APM) - The way the factors are grouped does not change the product. (4 x 2) x 3 = 4 x (2 x 3); 24 = 24. 3) IDENTITY PROPERTY (IPM) - The product of any number and 1 equals the number. 45 x 1 = 45; 1 x 45 = 45. 4) ZERO PROPERTY (ZPM) - The product of any number and zero equals zero. 75 X 0 = 0; 0 X 75 = 0. 5) DISTRIBUTIVE PROPERTY (DPM) - To multiply a sum by a number, we can also multiply each addend by the number and add the products. Illustration: 3 x (5 + 4) = (3 X 5) + (3 X 4) = 15 + 12 = 27 (3 is distributed).",
   "example": "2 x 6 = 6 x 2; 12 = 12 (Commutative)",
   "instruction": "Write the property illustrated by the following. (items 1-10) / Identify the property illustrated in each multiplication statement and write the missing number. (PROPERTY = items 11-17 and 25-31; MISSING NUMBER = items 18-24 and 32-38)",
   "items": [
    {
     "q": "7 x (4 x 9) = (7 x 4) x 9",
     "a": "Associative Property/APM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "2 x 3 = 3 x 2",
     "a": "Commutative Property/CPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "453 x 1 = 453",
     "a": "Identity Property/IPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "4 x (30 + 5) = (4 x 30) + (4 x 5)",
     "a": "Distributive Property/DPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "19 x 1 = 19",
     "a": "Identity Property/IPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "8 x 17 = 17 x 8",
     "a": "Commutative Property/CPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "89 x 0 = 0",
     "a": "Zero Property/ZPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "(4 x 3) x 2 = 4 x (3 x 2)",
     "a": "Associative Property/APM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "(2 + 8) x 9 = (9 x 2) + (9 x 8)",
     "a": "Distributive Property/DPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "97 x 0 = 0",
     "a": "Zero Property/ZPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "179 x 1 = ____ (property)",
     "a": "Identity Property/IPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "28 x 15 = 15 x ___ (property)",
     "a": "Commutative Property/CPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "175 x ___ = 0 (property)",
     "a": "Zero Property/ZPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "10 x (3 + 9) = (10 x 3) + ( ___ x 9) (property)",
     "a": "Distributive Property/DPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "4 x (6 x 2) = (4 x ___ ) x 2 (property)",
     "a": "Associative Property/APM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "255 x ___ = 255 (property)",
     "a": "Identity Property/IPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "7 x (8 + 2) = ( ___ x 8) + (7 x 2) (property)",
     "a": "Distributive Property/DPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "179 x 1 = ____ (missing number)",
     "a": "179",
     "type": "key",
     "ask": "missing number"
    },
    {
     "q": "28 x 15 = 15 x ___ (missing number)",
     "a": "28",
     "type": "key",
     "ask": "missing number"
    },
    {
     "q": "175 x ___ = 0 (missing number)",
     "a": "0",
     "type": "key",
     "ask": "missing number"
    },
    {
     "q": "10 x (3 + 9) = (10 x 3) + ( ___ x 9) (missing number)",
     "a": "10",
     "type": "key",
     "ask": "missing number"
    },
    {
     "q": "4 x (6 x 2) = (4 x ___ ) x 2 (missing number)",
     "a": "6",
     "type": "key",
     "ask": "missing number"
    },
    {
     "q": "255 x ___ = 255 (missing number)",
     "a": "1",
     "type": "key",
     "ask": "missing number"
    },
    {
     "q": "7 x (8 + 2) = ( ___ x 8) + (7 x 2) (missing number)",
     "a": "7",
     "type": "key",
     "ask": "missing number"
    },
    {
     "q": "67 x 0 = ____ (property)",
     "a": "Zero Property/ZPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "3 x 11 = 11 x ___ (property)",
     "a": "Commutative Property/CPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "___ x 1 = 95 (property)",
     "a": "Identity Property/IPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "9 x (2 x 4) = (9 x 2) x ___ (property)",
     "a": "Associative Property/APM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "(7 x 3) x 5 = ___ x (3 x 5) (property)",
     "a": "Associative Property/APM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "2 x (3 + 4) = (2 x 3) + (2 x ___ ) (property)",
     "a": "Distributive Property/DPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "59 x ___ = 0 (property)",
     "a": "Zero Property/ZPM",
     "type": "key",
     "alt": true,
     "ask": "property"
    },
    {
     "q": "67 x 0 = ____ (missing number)",
     "a": "0",
     "type": "key",
     "ask": "missing number"
    },
    {
     "q": "3 x 11 = 11 x ___ (missing number)",
     "a": "3",
     "type": "key",
     "ask": "missing number"
    },
    {
     "q": "___ x 1 = 95 (missing number)",
     "a": "95",
     "type": "key",
     "ask": "missing number"
    },
    {
     "q": "9 x (2 x 4) = (9 x 2) x ___ (missing number)",
     "a": "4",
     "type": "key",
     "ask": "missing number"
    },
    {
     "q": "(7 x 3) x 5 = ___ x (3 x 5) (missing number)",
     "a": "7",
     "type": "key",
     "ask": "missing number"
    },
    {
     "q": "2 x (3 + 4) = (2 x 3) + (2 x ___ ) (missing number)",
     "a": "4",
     "type": "key",
     "ask": "missing number"
    },
    {
     "q": "59 x ___ = 0 (missing number)",
     "a": "0",
     "type": "key",
     "ask": "missing number"
    }
   ],
   "ordered": true
  },
  {
   "n": 16,
   "title": "Multiplication by 2, 3, 4, 5, and 10",
   "concept": "Reference tables provided: Multiplication Facts of 2 (1 x 2 = 2 ... 10 x 2 = 20); Multiplication Facts of 3 (1 x 3 = 3 ... 10 x 3 = 30); Multiplication Facts of 5 (1 x 5 = 5 ... 10 x 5 = 50); Multiplication Facts of 10 (1 x 10 = 10 ... 10 x 10 = 100). Multiplication by 4 is counting objects in groups of 4. It is also just like skip counting by 4s. Multiplication Facts of 4: 1 x 4 = 4, 2 x 4 = 8, 3 x 4 = 12, 4 x 4 = 16, 5 x 4 = 20, 6 x 4 = 24, 7 x 4 = 28, 8 x 4 = 32, 9 x 4 = 36, 10 x 4 = 40.",
   "example": "Facts of 2: 1 x 2 = 2 ... 10 x 2 = 20",
   "instruction": "Find the product. (items 1-10) / Write a multiplication statement for each. (items 11-25, each given as a product to find)",
   "items": [
    {
     "q": "5 x 5"
    },
    {
     "q": "2 x 5"
    },
    {
     "q": "1 x 3"
    },
    {
     "q": "4 x 3"
    },
    {
     "q": "7 x 2"
    },
    {
     "q": "6 x 2"
    },
    {
     "q": "8 x 10"
    },
    {
     "q": "3 x 10"
    },
    {
     "q": "9 x 5"
    },
    {
     "q": "10 x 5"
    },
    {
     "q": "5 x 4"
    },
    {
     "q": "2 x 4"
    },
    {
     "q": "1 x 4"
    },
    {
     "q": "4 x 4"
    },
    {
     "q": "7 x 4"
    },
    {
     "q": "6 x 4"
    },
    {
     "q": "8 x 4"
    },
    {
     "q": "3 x 4"
    },
    {
     "q": "9 x 4"
    },
    {
     "q": "10 x 4"
    },
    {
     "q": "4 x 2"
    },
    {
     "q": "4 x 10"
    },
    {
     "q": "4 x 8"
    },
    {
     "q": "4 x 3"
    },
    {
     "q": "4 x 5"
    }
   ],
   "ordered": true,
   "examples": [
    "3 x 5",
    "8 x 2",
    "7 x 3",
    "6 x 10",
    "4 x 7",
    "4 x 9"
   ]
  },
  {
   "n": 17,
   "title": "Understanding Division",
   "concept": "Division. Division means grouping objects equally. There are 20 pencils. How many groups of 4 pencils are there? There are 5 groups of 4 pencils. The division sentence for this is: 20 ÷ 4 = 5 (dividend ÷ divisor = quotient). Division is also the inverse of multiplication. 4 x 5 = 20 → 20 ÷ 5 = 4 or 20 ÷ 4 = 5.",
   "example": "20 ÷ 4 = 5 (dividend 20, divisor 4, quotient 5)",
   "instruction": "Complete the sentences for each picture. (items 1-4) / Box the objects in sets of four then write a division sentence for each. (items 5-6) / Write the division sentence for each. (items 7-16 from repeated subtraction)",
   "items": [
    {
     "q": "Picture (3 groups, 2 umbrellas each): There are ___ groups of 2 in 6. ___ ÷ 2 = ___",
     "a": "3",
     "type": "key"
    },
    {
     "q": "Picture (5 book stacks): There are ___ groups of 3 in 15. ___ ÷ 3 = ___",
     "a": "5",
     "type": "key"
    },
    {
     "q": "Picture (6 ovals of pears): There are ___ groups of 5 in 30. ___ ÷ 5 = ___",
     "a": "6",
     "type": "key"
    },
    {
     "q": "Picture (6 towers, 10 balls each): There are ___ groups of 10 in 60. ___ ÷ 10 = ___",
     "a": "6",
     "type": "key"
    },
    {
     "q": "Box the objects (16 shirts) in sets of four: There are ___ groups of 4 in 16. ___ ÷ ___ = ___",
     "a": "4",
     "type": "key"
    },
    {
     "q": "Box the objects (36 diamonds) in sets of four: There are ___ groups of 4 in 36. ___ ÷ ___ = ___",
     "a": "8",
     "type": "key"
    },
    {
     "q": "10 - 2 - 2 - 2 - 2 - 2 = 0 (write the division sentence)",
     "a": "5",
     "type": "key"
    },
    {
     "q": "15 - 5 - 5 - 5 = 0 (write the division sentence)",
     "a": "3",
     "type": "key"
    },
    {
     "q": "40 - 10 - 10 - 10 - 10 = 0 (write the division sentence)",
     "a": "4",
     "type": "key"
    },
    {
     "q": "18 - 3 - 3 - 3 - 3 - 3 - 3 = 0 (write the division sentence)",
     "a": "6",
     "type": "key"
    },
    {
     "q": "16 - 4 - 4 - 4 - 4 = 0 (write the division sentence)",
     "a": "4",
     "type": "key"
    },
    {
     "q": "20 - 10 - 10 = 0 (write the division sentence)",
     "a": "2",
     "type": "key"
    },
    {
     "q": "14 - 2 - 2 - 2 - 2 - 2 - 2 - 2 = 0 (write the division sentence)",
     "a": "7",
     "type": "key"
    },
    {
     "q": "30 - 5 - 5 - 5 - 5 - 5 - 5 = 0 (write the division sentence)",
     "a": "6",
     "type": "key"
    },
    {
     "q": "15 - 3 - 3 - 3 - 3 - 3 = 0 (write the division sentence)",
     "a": "5",
     "type": "key"
    },
    {
     "q": "24 - 4 - 4 - 4 - 4 - 4 - 4 = 0 (write the division sentence)",
     "a": "6",
     "type": "key"
    }
   ],
   "ordered": true
  },
  {
   "n": 18,
   "title": "Division by 2, 3, 4, 5, and 10",
   "concept": "Multiplication and division are partners, so every multiplication fact gives you two division facts. The product is the number being divided, and each factor takes a turn as the divisor: from 2 x 7 = 14 you get 14 divided by 2 = 7 and 14 divided by 7 = 2. When a division sentence is missing a number, think of the multiplication fact you already know. When a question asks how many groups of 3 are in a number, divide that number by 3.",
   "example": "",
   "instruction": "Section A: Write two division sentence for each. | Section B (items 13-28): Fill in the missing factor to complete each division sentence. | Section C (items 29-38): Write a division sentence for each.",
   "items": [
    {
     "q": "Write two division sentences for 5 x 7 = 35. (sentence 1 of 2)",
     "a": "7",
     "type": "key"
    },
    {
     "q": "Write two division sentences for 5 x 7 = 35. (sentence 2 of 2)",
     "a": "5",
     "type": "key"
    },
    {
     "q": "Write two division sentences for 8 x 2 = 16. (sentence 1 of 2)",
     "a": "2",
     "type": "key"
    },
    {
     "q": "Write two division sentences for 8 x 2 = 16. (sentence 2 of 2)",
     "a": "8",
     "type": "key"
    },
    {
     "q": "Write two division sentences for 4 x 5 = 20. (sentence 1 of 2)",
     "a": "5",
     "type": "key"
    },
    {
     "q": "Write two division sentences for 4 x 5 = 20. (sentence 2 of 2)",
     "a": "4",
     "type": "key"
    },
    {
     "q": "Write two division sentences for 10 x 5 = 50. (sentence 1 of 2)",
     "a": "10",
     "type": "key"
    },
    {
     "q": "Write two division sentences for 10 x 5 = 50. (sentence 2 of 2)",
     "a": "5",
     "type": "key"
    },
    {
     "q": "Write two division sentences for 4 x 6 = 24. (sentence 1 of 2)",
     "a": "6",
     "type": "key"
    },
    {
     "q": "Write two division sentences for 4 x 6 = 24. (sentence 2 of 2)",
     "a": "4",
     "type": "key"
    },
    {
     "q": "Write two division sentences for 3 x 9 = 27. (sentence 1 of 2)",
     "a": "9",
     "type": "key"
    },
    {
     "q": "Write two division sentences for 3 x 9 = 27. (sentence 2 of 2)",
     "a": "3",
     "type": "key"
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: 5 x ___ = 20 so 20 ÷ 5 = ___",
     "a": "4",
     "type": "key"
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: ___ x 7 = 28 so 28 ÷ 4 = ___",
     "a": "7",
     "type": "key"
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: 2 x ___ = 12 so 12 ÷ 2 = ___",
     "a": "6",
     "type": "key"
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: 9 x ___ = 36 so 36 ÷ 4 = ___",
     "a": "4; 9",
     "type": "key",
     "seq": true
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: ___ x 3 = 24 so 24 ÷ 3 = ___",
     "a": "8",
     "type": "key"
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: 10 x ___ = 30 so 30 ÷ 10 = ___",
     "a": "3",
     "type": "key"
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: ___ x 4 = 12 so 12 ÷ 4 = ___",
     "a": "3",
     "type": "key"
    },
    {
     "q": "8 x ___ = 80 so 80 / 10 = ___",
     "a": "10; 8",
     "type": "key",
     "seq": true
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: 4 x ___ = 20 so 20 ÷ 4 = ___",
     "a": "5",
     "type": "key"
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: ___ x 7 = 21 so 21 ÷ 3 = ___",
     "a": "3; 7",
     "type": "key",
     "seq": true
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: 1 x ___ = 10 so 10 ÷ 1 = ___",
     "a": "10",
     "type": "key"
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: 8 x ___ = 32 so 32 ÷ 4 = ___",
     "a": "4; 8",
     "type": "key",
     "seq": true
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: ___ x 5 = 30 so 30 ÷ 5 = ___",
     "a": "6",
     "type": "key"
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: 3 x ___ = 30 so 30 ÷ 3 = ___",
     "a": "10",
     "type": "key"
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: ___ x 2 = 18 so 18 ÷ 2 = ___",
     "a": "9",
     "type": "key"
    },
    {
     "q": "Fill in the missing factor to complete each division sentence: 6 x ___ = 60 so 60 ÷ 10 = ___",
     "a": "6",
     "type": "key"
    },
    {
     "q": "Write a division sentence for each: How many groups of 3 are there in 15?",
     "a": "5",
     "type": "key"
    },
    {
     "q": "Write a division sentence for each: How many sets of 2 are there in 10?",
     "a": "5",
     "type": "key"
    },
    {
     "q": "Write a division sentence for each: How many 4s are there in 8?",
     "a": "2",
     "type": "key"
    },
    {
     "q": "Write a division sentence for each: How many groups of 5 are there in 10?",
     "a": "2",
     "type": "key"
    },
    {
     "q": "Write a division sentence for each: How many sets of 4 are there in 36?",
     "a": "9",
     "type": "key"
    },
    {
     "q": "Write a division sentence for each: How many 10s are there in 40?",
     "a": "4",
     "type": "key"
    },
    {
     "q": "Write a division sentence for each: How many groups of 10 are there in 100?",
     "a": "10",
     "type": "key"
    },
    {
     "q": "Write a division sentence for each: How many sets of 3 are there in 24?",
     "a": "8",
     "type": "key"
    },
    {
     "q": "Write a division sentence for each: How many 4s are there in 20?",
     "a": "5",
     "type": "key"
    },
    {
     "q": "Write a division sentence for each: How many sets of 3 are there in 27?",
     "a": "9",
     "type": "key"
    }
   ],
   "ordered": true,
   "rev": 1,
   "examples": [
    {
     "q": "Write two division sentences for 6 x 3 = 18.",
     "steps": [
      "The product is 18, so 18 is the number being divided in both sentences.",
      "Divide by the first factor: 18 divided by 6 = 3.",
      "Divide by the other factor: 18 divided by 3 = 6."
     ],
     "a": "18 divided by 6 = 3 and 18 divided by 3 = 6"
    },
    {
     "q": "Fill in the missing factor: 5 x ___ = 45 so 45 divided by 5 = ___",
     "steps": [
      "Ask what times 5 gives 45. Count by fives: 5, 10, 15, 20, 25, 30, 35, 40, 45. That is 9 fives.",
      "So the missing factor is 9.",
      "The same number answers the division, so 45 divided by 5 = 9."
     ],
     "a": "9 and 9"
    },
    {
     "q": "Write a division sentence: How many groups of 10 are there in 70?",
     "steps": [
      "The whole amount is 70 and each group has 10, so divide 70 by 10.",
      "Count by tens up to 70: 10, 20, 30, 40, 50, 60, 70. That is 7 groups.",
      "The sentence is 70 divided by 10 = 7."
     ],
     "a": "70 divided by 10 = 7"
    }
   ]
  },
  {
   "n": 19,
   "title": "Word Problems on Division",
   "concept": "Use division when a total is shared into equal groups. Write the total first, then the division sign, then the number in each group, and the answer tells how many groups there are. If you are not sure of the quotient, skip count by the group size until you reach the total, and count how many times you skipped. Always write the label, like packs, rows or baskets, in your final answer.",
   "example": "",
   "instruction": "Give the number sentence for each problem and solve it. (Each item asks for Number Sentence, Solution, and Answer.)",
   "items": [
    {
     "q": "Eddie has 16 toy cars. He keeps 4 toy cars in each box. How many boxes does he use?",
     "a": "4",
     "type": "key"
    },
    {
     "q": "Mang Nestor has 24 tomato seeds. He plants 4 seeds for every row of his garden. How many rows are planted with tomato seeds?",
     "a": "6",
     "type": "key"
    },
    {
     "q": "Elena harvested 30 rambutans. She placed 5 rambutans in each bag. How many bags did she use?",
     "a": "6",
     "type": "key"
    },
    {
     "q": "There are 40 apples on the table. Marianne wants to put 10 apples in each basket, how many baskets does she need?",
     "a": "4",
     "type": "key"
    },
    {
     "q": "There are 35 candies on a jar. Feliz distributes 5 to each of her pupils. How many pupils does she have?",
     "a": "7",
     "type": "key"
    },
    {
     "q": "Aling Nelia made 20 sumans. Each of her vendors gets 2 sumans to sell. How many vendors does she have?",
     "a": "10",
     "type": "key"
    },
    {
     "q": "Marissa made 36 puto paos. She packs them in groups of 4. How many packs did she make?",
     "a": "9",
     "type": "key"
    },
    {
     "q": "Aling Neri makes 16 polvorons. She packs them into twos. How many packs will she make?",
     "a": "8",
     "type": "key"
    },
    {
     "q": "There are 45 cups on the table. Willy stacks the cups by fives. How many stacks does he form?",
     "a": "9",
     "type": "key"
    },
    {
     "q": "Catherine made 27 lumpias. She fries them in batches of threes. How many times does she have to fry?",
     "a": "9",
     "type": "key"
    },
    {
     "q": "Forty children are to ride a bump car. Each bump car can carry 4 children. How many bump cars are needed?",
     "a": "10",
     "type": "key"
    },
    {
     "q": "Mang Edgar delivers sacks of sugar. He can carry 2 sacks at a time. If there are 18 sacks, how many times does he need to deliver them all?",
     "a": "9",
     "type": "key"
    },
    {
     "q": "Aunt Helen's hen laid 27 eggs. She puts 3 eggs in each basket. How many baskets does she use?",
     "a": "9",
     "type": "key"
    },
    {
     "q": "Fifteen people are about to ride a tricycle. If a tricycle can carry 3 people, how many tricycles are needed to give them all a ride?",
     "a": "5",
     "type": "key"
    },
    {
     "q": "On his birthday, Nikolai wants to give away 90 marbles to his friends. If he will put 10 marbles on each loot bags, how many of his friends will receive a give away?",
     "a": "9",
     "type": "key"
    },
    {
     "q": "Marlon had 30 keys. He bundled them in threes. How many bundles of keys does he have in all?",
     "a": "10",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Aling Baby cooked 18 pieces of turon. She puts 3 pieces in each pack. How many packs did she make?",
     "steps": [
      "Number sentence: 18 divided by 3 = ___",
      "Skip count by 3: 3, 6, 9, 12, 15, 18. That is 6 skips.",
      "So 18 divided by 3 = 6."
     ],
     "a": "6 packs"
    },
    {
     "q": "There are 50 chairs in the barangay hall. The helpers arrange them in rows of 10 chairs. How many rows are there?",
     "steps": [
      "Number sentence: 50 divided by 10 = ___",
      "Skip count by 10: 10, 20, 30, 40, 50. That is 5 skips.",
      "So 50 divided by 10 = 5."
     ],
     "a": "5 rows"
    },
    {
     "q": "Twenty-eight scouts will ride small boats. Each boat can carry 4 scouts. How many boats are needed?",
     "steps": [
      "Number sentence: 28 divided by 4 = ___",
      "Skip count by 4: 4, 8, 12, 16, 20, 24, 28. That is 7 skips.",
      "So 28 divided by 4 = 7."
     ],
     "a": "7 boats"
    }
   ]
  },
  {
   "n": 21,
   "title": "Naming Shapes: Circle, Square, Rectangle, and Triangle",
   "concept": "To name a shape, look at its sides and its corners. A circle is round all the way around and has no straight sides and no corners. A triangle has 3 straight sides and 3 corners. A square has 4 straight sides that are all the same length. A rectangle also has 4 straight sides, but two sides are long and two are short.",
   "example": "",
   "instruction": "Name the shape of each object.",
   "items": [
    {
     "q": "Name the shape of this object.",
     "a": "circle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "circle"
     }
    },
    {
     "q": "Name the shape of this object.",
     "a": "square",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "square"
     }
    },
    {
     "q": "Name the shape of this object.",
     "a": "rectangle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "rectangle"
     }
    },
    {
     "q": "Name the shape of this object.",
     "a": "triangle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "triangle"
     }
    },
    {
     "q": "Name the shape of this object.",
     "a": "circle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "circle"
     }
    },
    {
     "q": "Name the shape of this object.",
     "a": "triangle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "triangle"
     }
    },
    {
     "q": "Name the shape of this object.",
     "a": "square",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "square"
     }
    },
    {
     "q": "Name the shape of this object.",
     "a": "circle",
     "type": "key",
     "fig": {
      "kind": "shape",
      "name": "circle"
     }
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "What is the name of this shape?",
     "fig": {
      "kind": "shape",
      "name": "circle"
     },
     "steps": [
      "Look for straight sides. This shape has none.",
      "It has no corners, and it curves all the way around.",
      "A closed curved shape like this is a circle."
     ],
     "a": "circle"
    },
    {
     "q": "What shape is this?",
     "fig": {
      "kind": "shape",
      "name": "triangle"
     },
     "steps": [
      "Count the straight sides: 1, 2, 3.",
      "Count the corners. There are 3 of them.",
      "Three straight sides and three corners make a triangle."
     ],
     "a": "triangle"
    },
    {
     "q": "Is this a square or a rectangle? Write its name.",
     "fig": {
      "kind": "shape",
      "name": "rectangle"
     },
     "steps": [
      "Count the straight sides. There are 4, so it is a square or a rectangle.",
      "Now compare the lengths. Two sides are long and two are short.",
      "The 4 sides are not all equal, so it is a rectangle."
     ],
     "a": "rectangle"
    },
    {
     "q": "Write the name of this shape.",
     "fig": {
      "kind": "shape",
      "name": "square"
     },
     "steps": [
      "Count the straight sides. There are 4.",
      "Check the lengths. All 4 sides are the same.",
      "Four equal straight sides make a square."
     ],
     "a": "square"
    }
   ]
  }
 ],
 "g4": [
  {
   "n": 1,
   "title": "Odd and Even Numbers",
   "concept": "Odd and Even Numbers. Numbers that end with 0,2,4,6,8 are EVEN. Numbers that end with 1,3,5,7,9 are ODD.",
   "example": "24, 56, 88, 100 are even numbers",
   "instruction": "Determine if each number is odd or even.",
   "items": [
    {
     "q": "23",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "25",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "88",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "22",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "73",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "16",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "29",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "72",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "48",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "84",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "45",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "183",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "902",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "100",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "528",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "565",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "982",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "126",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "609",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "432",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "25",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "71",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "91",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "10",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "63",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "83",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "174",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "125",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "364",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "723",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "352",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "947",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "727",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "736",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "720",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "500",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "238",
     "a": "Even",
     "type": "key"
    },
    {
     "q": "147",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "371",
     "a": "Odd",
     "type": "key"
    },
    {
     "q": "945",
     "a": "Odd",
     "type": "key"
    }
   ]
  },
  {
   "n": 2,
   "title": "Comparing Fractions",
   "concept": "Comparing Similar Fractions: Similar Fractions are fractions with the same denominator. When comparing fractions with the same denominator, simply compare the numerators. Comparing Dissimilar Fractions: Dissimilar Fractions are fractions with different denominators. To compare dissimilar fractions, use the cross product method (multiply the numerator of one by the denominator of the other and vice versa).",
   "example": "2/5 < 3/5 since 2 < 3",
   "instruction": "Items 1-22 (Similar Fractions): Fill in the blanks with the correct symbol (<, >, or =). Items 23-50 (Dissimilar Fractions): Compare the following by using <, > or =.",
   "items": [
    {
     "q": "1/3 _ 2/3",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "4/4 _ 1/4",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "3/10 _ 9/10",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "5/6 _ 3/6",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "9/17 _ 15/17",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "8/9 _ 7/9",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "10/10 _ 9/10",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "11/15 _ 14/15",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "16/18 _ 6/18",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "200/300 _ 250/300",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "431/576 _ 123/576",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "323/522 _ 332/522",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "101/200 _ 110/200",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "134/150 _ 144/150",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "366/700 _ 300/700",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "250/280 _ 240/280",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "66/400 _ 60/400",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "990/1000 _ 999/1000",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "780/800 _ 708/800",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "236/347 _ 347/347",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "845/987 _ 897/987",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "624/676 _ 345/676",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "1/3 _ 1/5",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "3/4 _ 3/5",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "2/4 _ 2/8",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "5/3 _ 5/4",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "7/10 _ 5/8",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "1 _ 1/4",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "2/5 _ 1/2",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "3/5 _ 3/4",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "1/2 _ 1/6",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "1/6 _ 1/5",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "3/9 _ 3/6",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "4/7 _ 4/8",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "7/10 _ 7/15",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "4/15 _ 3/16",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "25/75 _ 50/70",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "8/16 _ 8/32",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "5/15 _ 5/10",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "40/70 _ 40/60",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "4/16 _ 4/20",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "6/10 _ 8/12",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "30/50 _ 35/60",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "20/25 _ 17/30",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "1/5 _ 1/3",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "2/3 _ 2/5",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "1/3 _ 1/6",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "4/6 _ 4/5",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "1/2 _ 1/3",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "2/3 _ 2/5",
     "a": ">",
     "type": "compare"
    }
   ],
   "ordered": true
  },
  {
   "n": 3,
   "title": "Ordering (Arranging) Fractions",
   "concept": "Arranging Fractions in Ascending/Descending Order. A. Fractions with the Same Denominator: the LARGER the numerator, the LARGER the fraction. B. Fractions with the Same Numerator (different denominators): the BIGGER the denominator, the SMALLER the fraction.",
   "example": "Ascending example: Given 4/4, 1/4, 3/4, 2/4 -> 1/4, 2/4, 3/4, 4/4",
   "instruction": "Items 1-14: Arrange the fractions in ascending order. Items 15-30: Arrange the fractions in descending order.",
   "items": [
    {
     "q": "2/9, 5/9, 3/9, 4/9",
     "a": "2/9, 1/3, 4/9, 5/9",
     "type": "order-asc"
    },
    {
     "q": "4/15, 2/15, 7/15, 5/15",
     "a": "2/15, 4/15, 1/3, 7/15",
     "type": "order-asc"
    },
    {
     "q": "3/50, 15/50, 22/50, 11/50",
     "a": "3/50, 11/50, 3/10, 11/25",
     "type": "order-asc"
    },
    {
     "q": "45/60, 34/60, 9/60, 16/60",
     "a": "3/20, 4/15, 17/30, 3/4",
     "type": "order-asc"
    },
    {
     "q": "6/12, 6/15, 6/20, 6/25",
     "a": "6/25, 3/10, 2/5, 1/2",
     "type": "order-asc"
    },
    {
     "q": "7/49, 7/56, 7/35, 7/28",
     "a": "1/8, 1/7, 1/5, 1/4",
     "type": "order-asc"
    },
    {
     "q": "5/30, 5/25, 5/70, 5/65",
     "a": "1/14, 1/13, 1/6, 1/5",
     "type": "order-asc"
    },
    {
     "q": "5/90, 5/50, 5/10, 5/20",
     "a": "1/18, 1/10, 1/4, 1/2",
     "type": "order-asc"
    },
    {
     "q": "15/45, 15/30, 15/40, 15/50",
     "a": "3/10, 1/3, 3/8, 1/2",
     "type": "order-asc"
    },
    {
     "q": "15/20, 10/20, 6/20, 8/20",
     "a": "3/10, 2/5, 1/2, 3/4",
     "type": "order-asc"
    },
    {
     "q": "11/22, 15/22, 19/22, 7/22",
     "a": "7/22, 1/2, 15/22, 19/22",
     "type": "order-asc"
    },
    {
     "q": "18/90, 9/90, 27/90, 30/90",
     "a": "1/10, 1/5, 3/10, 1/3",
     "type": "order-asc"
    },
    {
     "q": "16/30, 16/40, 16/50, 16/60",
     "a": "4/15, 8/25, 2/5, 8/15",
     "type": "order-asc"
    },
    {
     "q": "16/25, 11/25, 6/25, 21/25",
     "a": "6/25, 11/25, 16/25, 21/25",
     "type": "order-asc"
    },
    {
     "q": "13/26, 13/50, 13/30, 13/45",
     "a": "1/2, 13/30, 13/45, 13/50",
     "type": "order-desc"
    },
    {
     "q": "24/60, 24/64, 24/20, 24/50",
     "a": "6/5, 12/25, 2/5, 3/8",
     "type": "order-desc"
    },
    {
     "q": "8/64, 8/80, 8/12, 8/40",
     "a": "2/3, 1/5, 1/8, 1/10",
     "type": "order-desc"
    },
    {
     "q": "9/45, 5/45, 20/45, 25/45",
     "a": "5/9, 4/9, 1/5, 1/9",
     "type": "order-desc"
    },
    {
     "q": "4/8, 2/8, 3/8, 5/8",
     "a": "5/8, 1/2, 3/8, 1/4",
     "type": "order-desc"
    },
    {
     "q": "9/16, 10/16, 8/16, 12/16",
     "a": "3/4, 5/8, 9/16, 1/2",
     "type": "order-desc"
    },
    {
     "q": "9/27, 9/18, 9/36, 9/45",
     "a": "1/2, 1/3, 1/4, 1/5",
     "type": "order-desc"
    },
    {
     "q": "8/40, 8/30, 8/20, 8/24",
     "a": "2/5, 1/3, 4/15, 1/5",
     "type": "order-desc"
    },
    {
     "q": "45/50, 44/50, 42/50, 40/50",
     "a": "9/10, 22/25, 21/25, 4/5",
     "type": "order-desc"
    },
    {
     "q": "30/60, 30/50, 30/45, 30/55",
     "a": "2/3, 3/5, 6/11, 1/2",
     "type": "order-desc"
    },
    {
     "q": "12/24, 12/25, 12/22, 12/20",
     "a": "3/5, 6/11, 1/2, 12/25",
     "type": "order-desc"
    },
    {
     "q": "19/87, 15/87, 24/87, 20/87",
     "a": "8/29, 20/87, 19/87, 5/29",
     "type": "order-desc"
    },
    {
     "q": "7/15, 6/15, 5/15, 3/15",
     "a": "7/15, 2/5, 1/3, 1/5",
     "type": "order-desc"
    },
    {
     "q": "11/23, 5/23, 15/23, 20/23",
     "a": "20/23, 15/23, 11/23, 5/23",
     "type": "order-desc"
    },
    {
     "q": "55/90, 45/90, 50/90, 60/90",
     "a": "2/3, 11/18, 5/9, 1/2",
     "type": "order-desc"
    },
    {
     "q": "32/64, 25/64, 39/64, 46/64",
     "a": "23/32, 39/64, 1/2, 25/64",
     "type": "order-desc"
    }
   ],
   "ordered": true
  },
  {
   "n": 4,
   "title": "Fractions",
   "concept": "A fraction names part of a whole that has been cut into equal parts. The bottom number, called the denominator, tells how many equal parts the whole was cut into. The top number, called the numerator, tells how many of those parts are shaded. So count all the equal parts first, then count only the shaded ones, and write shaded over total.",
   "example": "",
   "instruction": "Fill in the blanks according to the number of parts shown by the figure; name the fraction of the shape that is shaded.",
   "items": [
    {
     "q": "Numerator (number of shaded parts)?",
     "a": "1",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "grid",
      "total": 4,
      "shaded": 1
     }
    },
    {
     "q": "Denominator (number of equal parts into which the whole is divided)?",
     "a": "4",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "grid",
      "total": 4,
      "shaded": 1
     }
    },
    {
     "q": "Fraction (shows the shaded part)?",
     "a": "1/4",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "grid",
      "total": 4,
      "shaded": 1
     }
    },
    {
     "q": "Numerator (number of shaded parts)?",
     "a": "2",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "grid",
      "total": 5,
      "shaded": 2
     }
    },
    {
     "q": "Denominator (number of equal parts into which the whole is divided)?",
     "a": "5",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "grid",
      "total": 5,
      "shaded": 2
     }
    },
    {
     "q": "Fraction (shows the shaded part)?",
     "a": "2/5",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "grid",
      "total": 5,
      "shaded": 2
     }
    },
    {
     "q": "What fraction of the rectangle is shaded?",
     "a": "3/5",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "bar",
      "total": 5,
      "shaded": 3
     }
    },
    {
     "q": "What fraction of the hexagon is shaded?",
     "a": "3/6",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "hexagon",
      "total": 6,
      "shaded": 3
     }
    },
    {
     "q": "What fraction of the circle is shaded?",
     "a": "4/8",
     "type": "key",
     "fig": {
      "kind": "fraction",
      "shape": "circle",
      "total": 8,
      "shaded": 4
     }
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "What fraction of the bar is shaded?",
     "fig": {
      "kind": "fraction",
      "shape": "bar",
      "total": 4,
      "shaded": 3
     },
     "steps": [
      "Count all the equal parts first. The whole bar has 4.",
      "Now count only the parts that are shaded. There are 3.",
      "Write the shaded count over the total: 3/4."
     ],
     "a": "3/4"
    },
    {
     "q": "What is the denominator of the fraction shown?",
     "fig": {
      "kind": "fraction",
      "shape": "grid",
      "total": 6,
      "shaded": 4
     },
     "steps": [
      "The denominator tells how many equal parts the whole was cut into.",
      "Count every part, shaded or not. There are 6.",
      "So the denominator is 6."
     ],
     "a": "6"
    },
    {
     "q": "Write the fraction for the shaded part of the circle.",
     "fig": {
      "kind": "fraction",
      "shape": "circle",
      "total": 8,
      "shaded": 5
     },
     "steps": [
      "Count all the equal slices. The circle has 8.",
      "Count the slices that are shaded. There are 5.",
      "The fraction is 5/8."
     ],
     "a": "5/8"
    },
    {
     "q": "What is the numerator of the fraction for the shaded part?",
     "fig": {
      "kind": "fraction",
      "shape": "hexagon",
      "total": 6,
      "shaded": 2
     },
     "steps": [
      "The numerator tells how many parts are shaded.",
      "Count only the shaded parts. There are 2.",
      "So the numerator is 2."
     ],
     "a": "2"
    }
   ]
  },
  {
   "n": 5,
   "title": "Writing Fractions in Words",
   "concept": "To say a fraction in words, read the top number as a plain counting number, then read the bottom number like a position in order: thirds, fourths, fifths, sixths. The number 2 is special. As a denominator it is read as half, not second. When the top number is 1, the bottom word stays singular, so 1/5 is one fifth while 4/5 is four fifths. To go back from words to numbers, the counting word becomes the top number and the ordinal word becomes the bottom number.",
   "example": "",
   "instruction": "The numerator is written in its cardinal form. The denominator is written in its ordinal form. As an exception, the number 2 is written as half when used as a denominator. Also, if the numerator is 1, the denominator is singular in form. Items 1-16: Write the following fractions from numbers to words. Items 17-19: Write out the given fractions. Items 20-29: Fill in the blanks with the correct number. Items 30-42: Write the underlined fractions from words.",
   "items": [
    {
     "q": "1/2",
     "a": "one half",
     "type": "key",
     "text": true
    },
    {
     "q": "3/4",
     "a": "three fourths",
     "type": "key",
     "text": true
    },
    {
     "q": "5/9",
     "a": "five ninths",
     "type": "key",
     "text": true
    },
    {
     "q": "2/11",
     "a": "two elevenths",
     "type": "key",
     "text": true
    },
    {
     "q": "6/7",
     "a": "six sevenths",
     "type": "key",
     "text": true
    },
    {
     "q": "2/3",
     "a": "two thirds",
     "type": "key",
     "text": true
    },
    {
     "q": "8/9",
     "a": "eight ninths",
     "type": "key",
     "text": true
    },
    {
     "q": "3/20",
     "a": "three twentieths",
     "type": "key",
     "text": true
    },
    {
     "q": "3/5",
     "a": "three fifths",
     "type": "key",
     "text": true
    },
    {
     "q": "7/16",
     "a": "seven sixteenths",
     "type": "key",
     "text": true
    },
    {
     "q": "2/17",
     "a": "two seventeenths",
     "type": "key",
     "text": true
    },
    {
     "q": "23/25",
     "a": "twenty-three twenty-fifths",
     "type": "key",
     "text": true
    },
    {
     "q": "18/19",
     "a": "eighteen nineteenths",
     "type": "key",
     "text": true
    },
    {
     "q": "16/30",
     "a": "sixteen thirtieths",
     "type": "key",
     "text": true
    },
    {
     "q": "20/23",
     "a": "twenty twenty-thirds",
     "type": "key",
     "text": true
    },
    {
     "q": "88/90",
     "a": "eighty-eight ninetieths",
     "type": "key",
     "text": true
    },
    {
     "q": "What fraction of the set of caps are white? (a set of 5 caps, 3 of them white and 2 black)",
     "a": "3/5",
     "type": "key",
     "text": true
    },
    {
     "q": "What fraction of the shapes are hearts? (a set of 8 shapes, 4 of them hearts)",
     "a": "4/8 (or 1/2)",
     "type": "key",
     "text": true
    },
    {
     "q": "What fraction of the padlocks are unlocked? (a set of 5 padlocks)",
     "a": "3/5",
     "type": "key",
     "text": true
    },
    {
     "q": "1/3 is 1 of ___ equal parts of a whole",
     "a": "3",
     "type": "key",
     "text": true
    },
    {
     "q": "1/4 is 1 of ___ equal parts of a whole",
     "a": "4",
     "type": "key",
     "text": true
    },
    {
     "q": "1/8 is 1 of ___ equal parts of a whole",
     "a": "8",
     "type": "key",
     "text": true
    },
    {
     "q": "3/8 is 3 of ___ equal parts of a whole",
     "a": "8",
     "type": "key",
     "text": true
    },
    {
     "q": "1/5 is ___ of 5 equal parts of a whole",
     "a": "1",
     "type": "key",
     "text": true
    },
    {
     "q": "1/6 is ___ of ___ equal parts of a whole",
     "a": "1 of 6",
     "type": "key",
     "text": true
    },
    {
     "q": "3/4 is ___ of ___ equal parts of a whole",
     "a": "3 of 4",
     "type": "key",
     "text": true
    },
    {
     "q": "7/8 is ___ of ___ equal parts of a whole",
     "a": "7 of 8",
     "type": "key",
     "text": true
    },
    {
     "q": "2/3 is ___ of ___ equal parts of a whole",
     "a": "2 of 3",
     "type": "key",
     "text": true
    },
    {
     "q": "5/9 is ___ of ___ equal parts of a whole",
     "a": "5 of 9",
     "type": "key",
     "text": true
    },
    {
     "q": "Mother gave me one-fourth of the cake. (write the underlined fraction in numbers)",
     "a": "1/4",
     "type": "key",
     "text": true
    },
    {
     "q": "Arnold fills one-third of the glass with water. (write the underlined fraction in numbers)",
     "a": "1/3",
     "type": "key",
     "text": true
    },
    {
     "q": "Arlita cuts three-sixths of the cartolina. (write the underlined fraction in numbers)",
     "a": "3/6",
     "type": "key",
     "text": true
    },
    {
     "q": "Ben painted two-thirds of the wall. (write the underlined fraction in numbers)",
     "a": "2/3",
     "type": "key",
     "text": true
    },
    {
     "q": "Two-fifths of section Masipag are boys. (write the underlined fraction in numbers)",
     "a": "2/5",
     "type": "key",
     "text": true
    },
    {
     "q": "Each of Aling Cristina's children had one-eighth of the pie. (write the underlined fraction in numbers)",
     "a": "1/8",
     "type": "key",
     "text": true
    },
    {
     "q": "One-half of the section Maligaya got a perfect score in their Math test. (write the underlined fraction in numbers)",
     "a": "1/2",
     "type": "key",
     "text": true
    },
    {
     "q": "Three-fourths of the world is composed of water. (write the underlined fraction in numbers)",
     "a": "3/4",
     "type": "key",
     "text": true
    },
    {
     "q": "Among the girl scouts, eight-seventeenths are grade four students. (write the underlined fraction in numbers)",
     "a": "8/17",
     "type": "key",
     "text": true
    },
    {
     "q": "Five-sixths of the mangoes in the basket are already ripe. (write the underlined fraction in numbers)",
     "a": "5/6",
     "type": "key",
     "text": true
    },
    {
     "q": "Nine-tenths of the class are already done with their seatwork. (write the underlined fraction in numbers)",
     "a": "9/10",
     "type": "key",
     "text": true
    },
    {
     "q": "Six-elevenths of the garden is covered with grass. (write the underlined fraction in numbers)",
     "a": "6/11",
     "type": "key",
     "text": true
    },
    {
     "q": "Vito answered nineteen-twentieths of the test questions correctly. (write the underlined fraction in numbers)",
     "a": "19/20",
     "type": "key",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Write 4/5 in words.",
     "steps": [
      "The numerator 4 is read as a plain counting number: four.",
      "The denominator 5 is read like a position in order: fifths.",
      "Join the two words."
     ],
     "a": "four fifths"
    },
    {
     "q": "Write 1/7 in words.",
     "steps": [
      "The numerator is 1, so it is read as one.",
      "The denominator 7 becomes seventh.",
      "Because the numerator is 1, the bottom word stays singular, so it is seventh and not sevenths."
     ],
     "a": "one seventh"
    },
    {
     "q": "Write 5/12 in words.",
     "steps": [
      "The numerator 5 is read as five.",
      "The denominator 12 becomes twelfths.",
      "Join the two words."
     ],
     "a": "five twelfths"
    },
    {
     "q": "Jun ate three-tenths of the pandesal in the bag. Write the fraction in numbers.",
     "steps": [
      "The word three is the counting word, so 3 goes on top.",
      "Tenths means the whole is in 10 equal parts, so 10 goes at the bottom.",
      "Write 3 over 10."
     ],
     "a": "3/10"
    }
   ],
   "ordered": true
  },
  {
   "n": 6,
   "title": "Patterns (missing numbers/terms)",
   "concept": "Every pattern follows one rule that keeps repeating. For a number pattern, compare two numbers that sit next to each other and ask what was done to get from one to the next: added, subtracted, or multiplied. Test that rule on another pair before you fill in any blank, so you know the rule is right. For a pattern of shapes, letters, or mixed items, find the short part that keeps repeating and carry it forward.",
   "example": "",
   "instruction": "Items 1-35: Look for the pattern and write the missing numbers. Items 36-40: Complete the number pattern by writing the missing number on the space provided. Items 41-45: Write the missing term. Items 46-50: Identify the next term in the pattern. Circle the correct answer. Items 51-55: Write or draw the missing term in the box.",
   "items": [
    {
     "q": "10, ___, ___, 40",
     "a": "20, 30",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "3, ___, 9, 12, ___",
     "a": "6, 15",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "5, ___, ___, ___, 25",
     "a": "10, 15, 20",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "___, 60, 90, ___, ___",
     "a": "30, 120, 150",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "20, ___, 60, 80, ___",
     "a": "40, 100",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "50, ___, ___, 200, 250",
     "a": "100, 150",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "60, 120, ___, ___, ___",
     "a": "240, 480, 960",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "12, ___, 24, ___, ___",
     "a": "18, 30, 36",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "15, ___, ___, 60, 75",
     "a": "30, 45",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "25, 50, ___, ___, 125",
     "a": "75, 100",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "210, 280, ___, ___, 490",
     "a": "350, 420",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "240, ___, 400, 480, ___, 640",
     "a": "320, 560",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "250, 500, ___, ___, 1250",
     "a": "750, 1000",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "45, 90, ___, 180, ___",
     "a": "135, 225",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "150, ___, ___, 600, 750",
     "a": "300, 450",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "1, 2, ___, ___, 5, 6",
     "a": "3, 4",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "43, 50, 57, 64, ___, 78, ___",
     "a": "71, 85",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "2, 2, 4, 4, 6, 6, 8, 8, ___, ___",
     "a": "10, 10",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "0, ___, 8, 12, 16",
     "a": "4",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "4, 11, 18, ___",
     "a": "25",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "1, 2, 4, 8, ___",
     "a": "16",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "1, 3, 9, ___, 81",
     "a": "27",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "26, ___, 78, 104",
     "a": "52",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "1, 2, 4, 5, 10, 11, ___, ___",
     "a": "22, 23",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "2, 3, 5, 6, 8, 9, ___, ___, ___, ___",
     "a": "11, 12, 14, 15",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "19, 28, 37, 46, ___, ___",
     "a": "55, 64",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "10, 9, 8, 7, ___, ___",
     "a": "6, 5",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "100, 90, ___, 70, 60",
     "a": "80",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "1000, 750, 500, ___",
     "a": "250",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "30, 25, 21, 18, ___, ___",
     "a": "16, 15",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "50, 41, 33, 26, ___",
     "a": "20",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "3, 6, 8, 12, 15, 17, 21, 24, 26, ___, ___, ___",
     "a": "30, 33, 35",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "100, 99, 97, 94, 90, ___, ___",
     "a": "85, 79",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "2, 4, 8, 16, ___, ___, ___",
     "a": "32, 64, 128",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "9, 14, 19, 24, ___, ___",
     "a": "29, 34",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "4, 8, 12, ___, 20",
     "a": "16",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "9, 18, ___, 36, 45",
     "a": "27",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "30, 27, ___, 21, 18",
     "a": "24",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "100, 90, ___, 70, 60",
     "a": "80",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "7, 14, 21, ___",
     "a": "28",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "filled triangle, 10, filled square, 20, filled triangle, ___, filled square",
     "a": "30",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "A, 5, B, 10, C, 15, ___, 20",
     "a": "D",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "2, filled star, 4, outline star, 6, filled star, ___, outline star",
     "a": "8",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "apple, 8, blueberries, 16, apple, 24, ___, 32",
     "a": "blueberry",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "M, 3, N, 6, O, 9, ___, 12",
     "a": "P",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "triangle, square, triangle, square, triangle, ___ ; choices: a. square b. star c. triangle",
     "a": "A (square)",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "4, 8, 12, ___ ; choices: a. 13 b. 16 c. 20",
     "a": "B (16)",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "A B C A B ___ ; choices: a. D b. A c. C",
     "a": "C",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "15, 20, 25, ___ ; choices: a. 30 b. 35 c. 20",
     "a": "A (30)",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "filled heart, outline star, filled heart, outline star, ___ ; choices: a. outline star b. filled heart c. outline heart",
     "a": "B (filled heart)",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "flower, leaf, flower, leaf, [box], leaf, flower",
     "a": "flower",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "12, [box], 24, 30, 36",
     "a": "18",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "A, [box], C, A, B, C",
     "a": "B",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "triangle, circle, [box], circle, triangle, circle",
     "a": "triangle",
     "type": "key",
     "seq": true,
     "text": true
    },
    {
     "q": "50, 45, 40, [box], 30",
     "a": "35",
     "type": "key",
     "seq": true,
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Find the missing numbers: 8, 16, ___, 32, ___",
     "steps": [
      "From 8 to 16 the jump is 16 minus 8, which is 8. The rule is add 8.",
      "Check it: 16 plus 8 is 24, and 24 plus 8 is 32. The rule works.",
      "The third term is 24, and the last term is 32 plus 8, which is 40."
     ],
     "a": "24 and 40"
    },
    {
     "q": "Find the missing numbers: 70, 63, 56, ___, ___",
     "steps": [
      "From 70 to 63 the numbers go down by 7. The rule is subtract 7.",
      "Check it: 63 minus 7 is 56. The rule works.",
      "56 minus 7 is 49, and 49 minus 7 is 42."
     ],
     "a": "49 and 42"
    },
    {
     "q": "Find the missing number: 1, 5, 25, ___",
     "steps": [
      "1 times 5 is 5, and 5 times 5 is 25, so the rule is multiply by 5.",
      "Apply the rule to the last given number: 25 times 5.",
      "25 times 5 is 125."
     ],
     "a": "125"
    },
    {
     "q": "What comes next? sun, sun, cloud, sun, sun, ___",
     "steps": [
      "The repeating part is sun, sun, cloud.",
      "The pattern has already shown sun, sun again.",
      "The next item must be the one that closes the group, which is cloud."
     ],
     "a": "cloud"
    }
   ],
   "ordered": true
  },
  {
   "n": 7,
   "title": "Addition of 3- to 4-digit Whole Number without and with Regrouping",
   "concept": "",
   "example": "620 + 156 = 776",
   "instruction": "Find the sum.",
   "items": [
    {
     "q": "620 + 156"
    },
    {
     "q": "380 + 208"
    },
    {
     "q": "723 + 250"
    },
    {
     "q": "324 + 241"
    },
    {
     "q": "435 + 224"
    },
    {
     "q": "158 + 250"
    },
    {
     "q": "175 + 256"
    },
    {
     "q": "574 + 150"
    },
    {
     "q": "642 + 161"
    },
    {
     "q": "276 + 163"
    },
    {
     "q": "550 + 105 + 312"
    },
    {
     "q": "427 + 310 + 231"
    },
    {
     "q": "200 + 420 + 179"
    },
    {
     "q": "204 + 360 + 303"
    },
    {
     "q": "462 + 227 + 305"
    },
    {
     "q": "200 + 219 + 452"
    },
    {
     "q": "110 + 720 + 171"
    },
    {
     "q": "408 + 350 + 383"
    },
    {
     "q": "458 + 320 + 457"
    },
    {
     "q": "329 + 690 + 324"
    },
    {
     "q": "1173 + 2122"
    },
    {
     "q": "8671 + 1106"
    },
    {
     "q": "4384 + 2313"
    },
    {
     "q": "5352 + 3127"
    },
    {
     "q": "3103 + 3166"
    },
    {
     "q": "3287 + 3281"
    },
    {
     "q": "1127 + 2437"
    },
    {
     "q": "3156 + 3706"
    },
    {
     "q": "2451 + 1646"
    },
    {
     "q": "2136 + 1256"
    },
    {
     "q": "1605 + 1331 + 2042"
    },
    {
     "q": "4150 + 2304 + 1023"
    },
    {
     "q": "2324 + 1123 + 230"
    },
    {
     "q": "5102 + 2342 + 537"
    },
    {
     "q": "3561 + 1523 + 920"
    },
    {
     "q": "4176 + 2508 + 1891"
    },
    {
     "q": "3392 + 1203 + 975"
    },
    {
     "q": "1500 + 780 + 863"
    },
    {
     "q": "4150 + 3052 + 969"
    },
    {
     "q": "1242 + 3180 + 5325"
    }
   ],
   "examples": [
    "740 + 215",
    "367 + 254",
    "315 + 240 + 122",
    "4215 + 3142",
    "3268 + 1475",
    "2130 + 1425 + 3012"
   ]
  },
  {
   "n": 8,
   "title": "Addition of 2- to 4-digit Whole Number without and with Regrouping and Solving Word Problem in Addition",
   "concept": "",
   "example": "145 + 153 = 298",
   "instruction": "Items 1-20: Give what is asked. Items 21-35: Answer the following word problems.",
   "items": [
    {
     "q": "145 + 153"
    },
    {
     "q": "232 + 361"
    },
    {
     "q": "376 + 211"
    },
    {
     "q": "135 + 234"
    },
    {
     "q": "712 + 234"
    },
    {
     "q": "840 + 567"
    },
    {
     "q": "815 + 991"
    },
    {
     "q": "525 + 784"
    },
    {
     "q": "1857 + 1891"
    },
    {
     "q": "3904 + 795"
    },
    {
     "q": "275 + 135"
    },
    {
     "q": "3847 + 815"
    },
    {
     "q": "2047 + 464"
    },
    {
     "q": "3627 + 196"
    },
    {
     "q": "3756 + 1236"
    },
    {
     "q": "3725 + 967"
    },
    {
     "q": "1657 + 3091"
    },
    {
     "q": "1967 + 2375"
    },
    {
     "q": "1077 + 1832"
    },
    {
     "q": "9015 + 566"
    },
    {
     "q": "Magellan arrived in our country in the year 1521. Miguel Lopez de Legazpi arrived 44 years later. In what year did Legazpi come to our country?",
     "a": "1565",
     "type": "key"
    },
    {
     "q": "Jose Rizal was born in 1861 and was executed at the age of 35. What year was Rizal executed?",
     "a": "1896",
     "type": "key"
    },
    {
     "q": "The Spaniards conquered our country in 1565 and colonized the Philippines for 333 years. When did we gain our freedom from the Spanish colonizers?",
     "a": "1898",
     "type": "key"
    },
    {
     "q": "Ateneo de Manila was founded by the Jesuits in 1589. When did the school celebrate its 50th year?",
     "a": "1639",
     "type": "key"
    },
    {
     "q": "If Princess Urduja ordered for 30 durians, 27 mangoes and 48 papayas, how many fruits did she order in all?",
     "a": "105",
     "type": "key"
    },
    {
     "q": "There are 896 Grade 6 students in Bagumbayan Elementary School. If 195 students transfer to the school, how many Grade 6 Students will there be?",
     "a": "1091",
     "type": "key"
    },
    {
     "q": "If our school spends P2,345.00 for the repainting of the walls and allots P5,129.00 more for other repairs, what is our school budget for other repairs?",
     "a": "P7474",
     "type": "key"
    },
    {
     "q": "Jose Maria Sison founded the Communist Party of the Philippines (CCP) in 1968. When will the CCP reach its 50th year?",
     "a": "2018",
     "type": "key"
    },
    {
     "q": "Joseph Estrada became the 13th President of our country in 1998 and was ousted 3 years later. What year was Joseph Estrada ousted?",
     "a": "2001",
     "type": "key"
    },
    {
     "q": "If Gen. Douglas MacArthur originally had 497 American Soldiers when he came back to the Philippines and 795 Filipino Soldiers joined him, how many soldiers did he have in battle?",
     "a": "1292",
     "type": "key"
    },
    {
     "q": "Gloria Arroyo buys a kilo of rice for P17.00 If the price of rice increased by P20.00 per kilo, how much is the price of rice now?",
     "a": "P37",
     "type": "key"
    },
    {
     "q": "Cory Aquino bought 3,281 yellow shirts for her supporters while her daughter Kris bought 1,970 yellow shirts. How many yellow shirts do they have?",
     "a": "5251",
     "type": "key"
    },
    {
     "q": "Fidel Ramos was born in 1928 and became a Battalion Commander when he was 29 years old. What year was he promoted to be a Battalion Commander?",
     "a": "1975",
     "type": "key"
    },
    {
     "q": "If there were 1 982 American Soldiers, 2 192 Filipino Soldiers who were in the Death March, how many soldiers were there in all?",
     "a": "4174",
     "type": "key"
    },
    {
     "q": "There are 1 006 males in the country who are over 65 years old and 2 767 females who are over 65 year old. How many persons are over 65 years old in the country?",
     "a": "3773",
     "type": "key"
    }
   ],
   "ordered": true,
   "examples": [
    "263 + 415",
    "548 + 236",
    "726 + 893",
    "2458 + 1673",
    "3072 + 845",
    "8024 + 977"
   ]
  },
  {
   "n": 9,
   "title": "Subtraction of 3- to 4-digit Whole Number with and without Regrouping",
   "concept": "",
   "example": "900 - 250 = 650",
   "instruction": "Find the difference.",
   "items": [
    {
     "q": "900 - 250"
    },
    {
     "q": "815 - 404"
    },
    {
     "q": "984 - 231"
    },
    {
     "q": "635 - 420"
    },
    {
     "q": "558 - 237"
    },
    {
     "q": "950 - 150"
    },
    {
     "q": "500 - 250"
    },
    {
     "q": "800 - 375"
    },
    {
     "q": "700 - 250"
    },
    {
     "q": "850 - 250"
    },
    {
     "q": "450 - 240"
    },
    {
     "q": "824 - 413"
    },
    {
     "q": "774 - 124"
    },
    {
     "q": "2100 - 250"
    },
    {
     "q": "3500 - 501"
    },
    {
     "q": "6500 - 2500"
    },
    {
     "q": "4200 - 3000"
    },
    {
     "q": "5800 - 3200"
    },
    {
     "q": "612 - 411"
    },
    {
     "q": "778 - 512"
    },
    {
     "q": "950 - 250"
    },
    {
     "q": "500 - 100"
    },
    {
     "q": "800 - 500"
    },
    {
     "q": "700 - 450"
    },
    {
     "q": "850 - 120"
    },
    {
     "q": "450 - 270"
    },
    {
     "q": "800 - 250"
    },
    {
     "q": "952 - 321"
    },
    {
     "q": "958 - 235"
    },
    {
     "q": "583 - 21"
    },
    {
     "q": "1200 - 157"
    },
    {
     "q": "1400 - 245"
    },
    {
     "q": "1600 - 412"
    },
    {
     "q": "1800 - 467"
    },
    {
     "q": "841 - 205"
    },
    {
     "q": "816 - 141"
    },
    {
     "q": "764 - 425"
    },
    {
     "q": "892 - 426"
    },
    {
     "q": "982 - 628"
    },
    {
     "q": "8800 - 3400"
    }
   ],
   "examples": [
    "876 - 243",
    "740 - 320",
    "623 - 157",
    "905 - 468",
    "1500 - 374",
    "7600 - 2400"
   ]
  },
  {
   "n": 10,
   "title": "Solving Word Problem in Subtraction",
   "concept": "Read the problem twice and picture what is happening before you compute. Words like gave, received, bought more, or arrived tell you to add. Words like spent, sold, gave away, lost, took out, or left tell you to subtract. How many more means subtract the smaller amount from the bigger one. Many of these problems need two steps, so finish the first change, write that middle answer down, then do the second change on it.",
   "example": "",
   "instruction": "Answer the following problems.",
   "items": [
    {
     "q": "Mona had 714 pesos. Her mother gave her 186 more. After spending 220 pesos on a claw machine, how much money does she have left?",
     "a": "680",
     "type": "key"
    },
    {
     "q": "Ethan's high school played 544 baseball games this year. He attended 233 games and watched 87 games on television. How many baseball games did Ethan not watch?",
     "a": "224",
     "type": "key"
    },
    {
     "q": "Judith has 757 books while Justin has 253 books. Justin received 145 more books. How many more books does Judith have than Justin?",
     "a": "359",
     "type": "key"
    },
    {
     "q": "There are three hundred thirty-nine colored pencils in the drawer. Fred put one hundred sixteen colored pencils into the drawer. Then, he took one hundred forty-five colored pencils from the drawer. How many colored pencils are now in the drawer?",
     "a": "310",
     "type": "key"
    },
    {
     "q": "Larkin had 2,174 basketball cards. His uncle gave him 326 more basketball cards. Then, he gave 1,929 of them to his friend. How many basketball cards does he have left?",
     "a": "571",
     "type": "key"
    },
    {
     "q": "Greg has P3,451 and his brother, Brent, has P5,387. Greg received P425 from his grandmother. How much more money does Brent have than Greg?",
     "a": "1511",
     "type": "key"
    },
    {
     "q": "There are 8,005 fairy tale books in the library. 1,245 new fairy tale books arrived. On Monday, 3,113 were taken out. How many fairy tale books are left?",
     "a": "6137",
     "type": "key"
    },
    {
     "q": "There were 4,277 fiction books. The library received 523 more fiction books. Sadly, 2,904 were ruined in a flood. How many are left?",
     "a": "1896",
     "type": "key"
    },
    {
     "q": "There are 388 Bibles on the top shelf and 297 on the bottom shelf. If 246 Bibles were taken out, how many Bibles are left?",
     "a": "439",
     "type": "key"
    },
    {
     "q": "The coffee shop had 415 cups of coffee to sell. The staff prepared 85 more cups of coffee. The cashier sold 218 cups of coffee. How many cups of coffee are left?",
     "a": "282",
     "type": "key"
    },
    {
     "q": "Liam had 808 building blocks. His sister gave him 126 more. He lost 405 of them. How many building blocks does Liam have now?",
     "a": "529",
     "type": "key"
    },
    {
     "q": "Ms.Garcia had 1496 notebooks in her closet. She received 238 more notebooks. She gave 835 away. How many notebooks does Ms.Garcia have left?",
     "a": "899",
     "type": "key"
    },
    {
     "q": "The school had 1376 computers. The school bought 245 new computers. Then, 822 computers were given away. How many computers does the school have now?",
     "a": "799",
     "type": "key"
    },
    {
     "q": "Jamaica made 2982 cookies for the party. She made 468 more cookies in the afternoon. Kimberly made 1598 cookies. How many more cookies did Jamaica make than Kimberly?",
     "a": "1852",
     "type": "key"
    },
    {
     "q": "There were 1369 thermometers in the science lab. The school bought 214 more thermometers. The students used 763 thermometers. How many thermometers were not used?",
     "a": "820",
     "type": "key"
    },
    {
     "q": "3420 children were playing in the tree house. Then, 549 went out to play on the field. Afterward, 128 children went inside the tree house. How many children are playing in the tree house now?",
     "a": "2999",
     "type": "key"
    },
    {
     "q": "A rooster found 5256 seeds on the ground. It ate 2139 seeds then walked away. Later, it found 187 more seeds. How many seeds are left on the ground?",
     "a": "3,304",
     "type": "key"
    },
    {
     "q": "Liza has 521 children in her class this year. Last year she had 112 less children in her class. How many children were in Liza's class last year?",
     "a": "409",
     "type": "key"
    },
    {
     "q": "I found 1453 frogs by the pond. Then, 125 more frogs joined them. 728 of them hopped away. How many frogs are still on the pond?",
     "a": "850",
     "type": "key"
    },
    {
     "q": "Helen and I baked 3846 cupcakes. We baked 512 more cupcakes in the afternoon. We gave away 2037 cupcakes. How many cupcakes are left?",
     "a": "2321",
     "type": "key"
    },
    {
     "q": "Daniel gathered 650 eggs from two poultry houses. He gathered 435 eggs from one poultry house. How many eggs did he gather from the other?",
     "a": "215",
     "type": "key"
    },
    {
     "q": "Belle collected 2012 pieces of shell from the shore of Jomalig Island. Kate collected 698 less shells than Belle. How many shells did Kate collect?",
     "a": "1314",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Nena had 536 pesos. Her tita gave her 150 pesos more. She then spent 240 pesos on school supplies. How much money does she have left?",
     "steps": [
      "Her tita gave her more, so add: 536 plus 150 is 686.",
      "She spent money, so subtract from the middle answer: 686 minus 240.",
      "686 minus 240 is 446."
     ],
     "a": "446 pesos"
    },
    {
     "q": "A sari-sari store had 1,250 eggs. The store received 310 more eggs. It then sold 940 eggs. How many eggs are left?",
     "steps": [
      "Received means add: 1,250 plus 310 is 1,560.",
      "Sold means subtract: 1,560 minus 940.",
      "1,560 minus 940 is 620."
     ],
     "a": "620 eggs"
    },
    {
     "q": "Mario picked 1,874 santol fruits. Rosa picked 1,236 santol fruits. How many more fruits did Mario pick than Rosa?",
     "steps": [
      "How many more means compare, so subtract.",
      "Take the smaller amount from the bigger one: 1,874 minus 1,236.",
      "1,874 minus 1,236 is 638."
     ],
     "a": "638 fruits"
    }
   ]
  },
  {
   "n": 11,
   "title": "Multiplication of 2- to 3-digit Whole Number by 1-digit Number without or with Regrouping",
   "concept": "Multiplication of a 2-3 digit by a 1-digit factor. To multiply a 2-3 digit number by a 1-digit factor, follow these steps: 1) Multiply each of the digits of the first factor by the ones digit of the other factor. 2) Regroup if needed.",
   "example": "54 x 3 = 162",
   "instruction": "Items 1-12: Find the product. Show your solution and box your final answer. Items 13-14: Solve the following problems. Show your solution on the space provided and box your final answer.",
   "items": [
    {
     "q": "43 * 2"
    },
    {
     "q": "36 * 4"
    },
    {
     "q": "41 * 3"
    },
    {
     "q": "73 * 5"
    },
    {
     "q": "46 * 3"
    },
    {
     "q": "75 * 5"
    },
    {
     "q": "67 * 4"
    },
    {
     "q": "81 * 5"
    },
    {
     "q": "521 * 4"
    },
    {
     "q": "326 * 3"
    },
    {
     "q": "524 * 8"
    },
    {
     "q": "328 * 2"
    },
    {
     "q": "A unique means of transportation we are known for is the tricycle. One tricycle can occupy 4 passengers. If there are 32 tricycles of the same size, how many passengers can be accommodated in all?",
     "a": "128",
     "type": "key"
    },
    {
     "q": "Tricycle bound for Stop & Shop are popular because of the bumper car-like ride. If a driver collects 125 pesos from a full load in a single trip, how much does he receive in a day for 9 trips?",
     "a": "P1125",
     "type": "key"
    }
   ],
   "ordered": true,
   "examples": [
    "52 * 3",
    "68 * 4",
    "94 * 6",
    "213 * 4",
    "437 * 2",
    "615 * 7"
   ]
  },
  {
   "n": 12,
   "title": "Multiplication of a 2-digit by a 2-digit factor",
   "concept": "Multiplication of a 2-digit by a 2-digit factor. To multiply a 2-digit number by a 2-digit factor, follow these steps: 1) Multiply each of the digits of the first factor by the ones digit of the other factor. 2) Multiply each of the digits of the first factor by the tens digit of the other factor. Make sure to align the ones digit of the answer to the tens place of the factors. 3) Add the partial products.",
   "example": "54 x 23: 162 (54 x 3) + 108 (54 x 2) = 1,242",
   "instruction": "Find the product. Show your solution and box your final answer.",
   "items": [
    {
     "q": "43 * 12"
    },
    {
     "q": "36 * 21"
    },
    {
     "q": "41 * 29"
    },
    {
     "q": "73 * 31"
    },
    {
     "q": "46 * 23"
    },
    {
     "q": "75 * 31"
    },
    {
     "q": "67 * 45"
    },
    {
     "q": "81 * 55"
    },
    {
     "q": "51 * 24"
    },
    {
     "q": "36 * 34"
    },
    {
     "q": "24 * 18"
    },
    {
     "q": "98 * 42"
    },
    {
     "q": "A unique means of transportation we are known for is the jeepney. One jeepney can occupy 18 passengers. If there are 32 jeepneys of the same size, how many passengers can be accommodated in all?",
     "a": "576",
     "type": "key"
    },
    {
     "q": "Jeepneys bound for Stop & Shop are popular because of the rollercoaster-like ride. If a driver collects 95 pesos from a full load in a single trip, how much does he receive in a day for 12 trips?",
     "a": "₱1140",
     "type": "key"
    }
   ],
   "examples": [
    "52 * 14",
    "38 * 26",
    "64 * 32",
    "47 * 53",
    "85 * 27",
    "72 * 46"
   ]
  },
  {
   "n": 13,
   "title": "Multiplication by 10 and 100",
   "concept": "Multiplication by 10 and 100. To multiply numbers by 10 or 100, follow these steps: 1) Copy the first factor. 2) Affix the number of zeros in the second factor, that is, affix one zero if the factor is 10. Affix two zeros if the factor is 100.",
   "example": "34 x 10 = 340",
   "instruction": "Multiply the following.",
   "items": [
    {
     "q": "9 * 10"
    },
    {
     "q": "45 * 10"
    },
    {
     "q": "786 * 10"
    },
    {
     "q": "1998 * 10"
    },
    {
     "q": "7 * 10"
    },
    {
     "q": "67 * 10"
    },
    {
     "q": "886 * 10"
    },
    {
     "q": "6 * 10"
    },
    {
     "q": "21 * 10"
    },
    {
     "q": "597 * 10"
    },
    {
     "q": "5 * 10"
    },
    {
     "q": "75 * 10"
    },
    {
     "q": "145 * 10"
    },
    {
     "q": "340 * 10"
    },
    {
     "q": "7 * 10"
    },
    {
     "q": "6 * 10"
    },
    {
     "q": "4 * 10"
    },
    {
     "q": "9 * 10"
    },
    {
     "q": "9 * 100"
    },
    {
     "q": "65 * 100"
    },
    {
     "q": "5 * 100"
    },
    {
     "q": "75 * 100"
    },
    {
     "q": "145 * 100"
    },
    {
     "q": "340 * 100"
    },
    {
     "q": "7 * 100"
    },
    {
     "q": "6 * 100"
    },
    {
     "q": "4 * 100"
    },
    {
     "q": "9 * 100"
    },
    {
     "q": "9 * 100"
    },
    {
     "q": "65 * 100"
    }
   ],
   "examples": [
    "8 * 10",
    "52 * 10",
    "473 * 10",
    "1256 * 10",
    "8 * 100",
    "263 * 100"
   ]
  },
  {
   "n": 14,
   "title": "Solving Word Problem in Multiplication",
   "concept": "Multiplication is a fast way of adding equal groups. When a problem says each group holds the same number, multiply the number of groups by the number inside each group. Watch out for a second step, because some problems add extra items or take some away after the multiplying is done. Keep the label, such as pesos or chairs, attached to your answer so it still makes sense.",
   "example": "",
   "instruction": "",
   "items": [
    {
     "q": "There are 8 baskets. Each basket has 7 oranges. How many oranges are there in all?",
     "a": "56",
     "type": "key"
    },
    {
     "q": "A classroom has 6 rows of chairs. Each row has 9 chairs. How many chairs are there in all?",
     "a": "54",
     "type": "key"
    },
    {
     "q": "A notebook costs ₱18. Mia buys 4 notebooks. How much does she pay?",
     "a": "₱72",
     "type": "key"
    },
    {
     "q": "A garden has 7 rows of plants. Each row has 12 plants. How many plants are there in all?",
     "a": "84",
     "type": "key"
    },
    {
     "q": "Carlo sells 24 bottles of juice each day for 6 days. On the last day, he sold 15 more bottles. How many bottles did he sell in all?",
     "a": "159",
     "type": "key"
    },
    {
     "q": "A library has 7 shelves with 18 books on each shelf. The librarian donated 22 more books. How many books are in the library now?",
     "a": "148",
     "type": "key"
    },
    {
     "q": "Lina planted 9 rows of vegetables with 14 plants in each row. After a storm, 18 plants were damaged. How many plants were left?",
     "a": "108",
     "type": "key"
    },
    {
     "q": "A runner completes 12 laps each day for 5 days. He ran 8 extra laps on Saturday. How many laps did he run in all?",
     "a": "68",
     "type": "key"
    },
    {
     "q": "A baker made 9 trays of cupcakes. Each tray has 8 cupcakes. How many cupcakes did the baker make?",
     "a": "72",
     "type": "key"
    },
    {
     "q": "There are 5 shelves. Each shelf has 14 books. How many books are there in all?",
     "a": "70",
     "type": "key"
    },
    {
     "q": "A farmer packed 11 baskets with 6 mangoes in each basket. How many mangoes are there in all?",
     "a": "66",
     "type": "key"
    },
    {
     "q": "A toy store has 8 boxes. Each box contains 15 toy cars. How many toy cars are there in all?",
     "a": "₱120",
     "type": "key"
    },
    {
     "q": "A factory produces 28 bottles every hour for 6 hours. It found 17 defective bottles. How many good bottles were produced?",
     "a": "151",
     "type": "key"
    },
    {
     "q": "Anna bought 7 notebooks costing ₱25 each. She also bought a ruler worth ₱35. How much did she spend in all?",
     "a": "210",
     "type": "key"
    },
    {
     "q": "A class prepared 8 tables with 9 chairs at each table. 6 extra chairs were brought in. How many chairs are there altogether?",
     "a": "78",
     "type": "key"
    },
    {
     "q": "A school bought 9 boxes of crayons. Each box has 24 crayons. The teacher used 31 crayons for an art activity. How many crayons were left?",
     "a": "185",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "There are 4 trays. Each tray holds 12 eggs. How many eggs are there in all?",
     "steps": [
      "The groups are the trays, so there are 4 equal groups.",
      "Each group holds 12, so multiply 4 by 12.",
      "4 times 12 is 48."
     ],
     "a": "48 eggs"
    },
    {
     "q": "One kilo of rambutan costs 45 pesos. Aling Rosa buys 3 kilos. How much does she pay?",
     "steps": [
      "Each kilo has the same price, so multiply the price by the number of kilos.",
      "45 times 3 is 135.",
      "The answer is money, so label it in pesos."
     ],
     "a": "135 pesos"
    },
    {
     "q": "A vendor packed 6 boxes with 13 mangoes in each box. He then added 14 more mangoes to the delivery. How many mangoes are in the delivery in all?",
     "steps": [
      "First multiply the equal groups: 6 times 13 is 78.",
      "He added more, so the second step is addition: 78 plus 14.",
      "78 plus 14 is 92."
     ],
     "a": "92 mangoes"
    },
    {
     "q": "A store had 9 packs of candy with 12 candies in each pack. The owner gave away 20 candies. How many candies were left?",
     "steps": [
      "Multiply the equal groups first: 9 times 12 is 108.",
      "Gave away means subtract: 108 minus 20.",
      "108 minus 20 is 88."
     ],
     "a": "88 candies"
    }
   ]
  },
  {
   "n": 16,
   "title": "Division Facts of Numbers up to 10",
   "concept": "",
   "example": "32 / 4 = 8",
   "instruction": "Divide the following.",
   "items": [
    {
     "q": "32 / 4"
    },
    {
     "q": "35 / 5"
    },
    {
     "q": "48 / 6"
    },
    {
     "q": "36 / 4"
    },
    {
     "q": "36 / 6"
    },
    {
     "q": "42 / 6"
    },
    {
     "q": "45 / 9"
    },
    {
     "q": "48 / 8"
    },
    {
     "q": "49 / 7"
    },
    {
     "q": "63 / 9"
    },
    {
     "q": "64 / 8"
    },
    {
     "q": "18 / 2"
    },
    {
     "q": "12 / 3"
    },
    {
     "q": "15 / 3"
    },
    {
     "q": "12 / 4"
    },
    {
     "q": "24 / 3"
    },
    {
     "q": "28 / 4"
    },
    {
     "q": "20 / 4"
    },
    {
     "q": "40 / 5"
    },
    {
     "q": "30 / 6"
    },
    {
     "q": "42 / 6"
    },
    {
     "q": "28 / 7"
    },
    {
     "q": "56 / 7"
    },
    {
     "q": "64 / 8"
    },
    {
     "q": "8 / 4"
    },
    {
     "q": "8 / 2"
    },
    {
     "q": "10 / 5"
    },
    {
     "q": "5 / 5"
    },
    {
     "q": "12 / 4"
    },
    {
     "q": "16 / 4"
    },
    {
     "q": "15 / 5"
    },
    {
     "q": "20 / 5"
    },
    {
     "q": "14 / 2"
    },
    {
     "q": "9 / 3"
    },
    {
     "q": "4 / 2"
    },
    {
     "q": "16 / 2"
    },
    {
     "q": "20 / 5"
    },
    {
     "q": "50 / 10"
    },
    {
     "q": "16 / 4"
    },
    {
     "q": "27 / 9"
    },
    {
     "q": "45 / 5"
    },
    {
     "q": "50 / 5"
    },
    {
     "q": "8 / 4"
    },
    {
     "q": "9 / 3"
    },
    {
     "q": "12 / 2"
    }
   ],
   "examples": [
    "54 / 9",
    "72 / 8",
    "81 / 9",
    "24 / 6",
    "35 / 7",
    "63 / 7"
   ]
  },
  {
   "n": 17,
   "title": "Division of 2-digit Whole Number by 1-digit Whole Number without or with remainder",
   "concept": "",
   "example": "15 / 3 = 5",
   "instruction": "Solve the following division problems.",
   "items": [
    {
     "q": "15 / 3"
    },
    {
     "q": "16 / 4"
    },
    {
     "q": "24 / 3"
    },
    {
     "q": "27 / 3"
    },
    {
     "q": "28 / 4"
    },
    {
     "q": "30 / 3"
    },
    {
     "q": "32 / 4"
    },
    {
     "q": "35 / 5"
    },
    {
     "q": "36 / 4"
    },
    {
     "q": "40 / 4"
    },
    {
     "q": "40 / 5"
    },
    {
     "q": "14 / 7"
    },
    {
     "q": "18 / 9"
    },
    {
     "q": "24 / 6"
    },
    {
     "q": "16 / 4"
    },
    {
     "q": "30 / 6"
    },
    {
     "q": "35 / 7"
    },
    {
     "q": "36 / 9"
    },
    {
     "q": "42 / 7"
    },
    {
     "q": "45 / 9"
    },
    {
     "q": "81 / 9"
    },
    {
     "q": "28 / 7"
    },
    {
     "q": "32 / 8"
    },
    {
     "q": "24 / 8"
    },
    {
     "q": "56 / 8"
    },
    {
     "q": "48 / 8"
    },
    {
     "q": "45 / 9"
    },
    {
     "q": "27 / 9"
    },
    {
     "q": "36 / 6"
    },
    {
     "q": "12 / 6"
    },
    {
     "q": "18 / 6"
    },
    {
     "q": "49 / 7"
    },
    {
     "q": "72 / 8"
    },
    {
     "q": "21 / 7"
    },
    {
     "q": "16 / 8"
    },
    {
     "q": "40 / 8"
    },
    {
     "q": "64 / 8"
    },
    {
     "q": "80 / 8"
    },
    {
     "q": "72 / 9"
    },
    {
     "q": "63 / 9"
    },
    {
     "q": "56 / 7"
    },
    {
     "q": "32 / 4"
    },
    {
     "q": "72 / 9"
    },
    {
     "q": "54 / 6"
    }
   ],
   "examples": [
    "57 / 3",
    "66 / 6",
    "84 / 7",
    "91 / 7",
    "78 / 6",
    "96 / 8"
   ]
  },
  {
   "n": 18,
   "title": "More on Division of Two to Three - Digit Numbers by One-Digit Divisor",
   "concept": "More on Division of Two to Three - Digit Numbers by One-Digit Divisor. If the first digit of the dividend is smaller than the divisor, take the next digit and follow the steps learned. Study the examples below.",
   "example": "1) 28 ÷ 5 = 5 R. 3 (Since 2 is smaller than the divisor 5, take the next digit. (28 ÷ 5))",
   "instruction": "Solve for the quotient. Show your solutions.",
   "items": [
    {
     "q": "46 / 6"
    },
    {
     "q": "67 / 7"
    },
    {
     "q": "29 / 5"
    },
    {
     "q": "75 / 8"
    },
    {
     "q": "61 / 7"
    },
    {
     "q": "46 / 8"
    },
    {
     "q": "29 / 3"
    },
    {
     "q": "26 / 6"
    },
    {
     "q": "29 / 9"
    },
    {
     "q": "255 / 5"
    },
    {
     "q": "248 / 8"
    },
    {
     "q": "115 / 5"
    },
    {
     "q": "169 / 8"
    },
    {
     "q": "179 / 8"
    },
    {
     "q": "325 / 4"
    }
   ],
   "examples": [
    "38 / 7",
    "53 / 6",
    "27 / 4",
    "85 / 9",
    "148 / 6",
    "216 / 4"
   ]
  },
  {
   "n": 19,
   "title": "Division by 2-Digit Divisor",
   "concept": "Division by 2-Digit Divisor. To divide a 2-digit number by a 2-digit divisor, follow these steps: 1) Divide the number by the divisor. 2) Multiply the quotient by the divisor. 3) Subtract the product from the number. 4) Write the remainder if there's any.",
   "example": "1) 48 ÷ 24 = 2 (if bigger numbers are hard to divide mentally, try to multiply the divisor by a factor starting with 1 (or with the most convenient). 24 x 1 = 24, 24 x 2 = 48, therefore, 48 ÷ 2 = 2)",
   "instruction": "Find the quotient. Show your solution and box your final answer.",
   "items": [
    {
     "q": "66 / 11"
    },
    {
     "q": "48 / 12"
    },
    {
     "q": "75 / 25"
    },
    {
     "q": "60 / 30"
    },
    {
     "q": "80 / 15"
    },
    {
     "q": "95 / 35"
    },
    {
     "q": "98 / 45"
    },
    {
     "q": "85 / 26"
    },
    {
     "q": "81 / 18"
    },
    {
     "q": "88 / 16"
    },
    {
     "q": "58 / 14"
    },
    {
     "q": "75 / 23"
    },
    {
     "q": "On their closing program, Ms. Gomez brought 92 pieces of puto-seko, a kind of biscuit made from rice flour, and distributed it among her 46 students. How many puto-sekos did each of the student receive?",
     "a": "2",
     "type": "key"
    },
    {
     "q": "As a source of money for her daily allowance in school, Elena sells yema to her classmates. She has 75 pieces of yemas everyday, which she divides among her 25 classmates. How many yemas does she sell to each of them?",
     "a": "3",
     "type": "key"
    }
   ],
   "examples": [
    "84 / 12",
    "90 / 15",
    "78 / 13",
    "92 / 24",
    "70 / 22",
    "96 / 32"
   ]
  },
  {
   "n": 20,
   "title": "Division of 2- to 3-digit Whole Number by 10 and 100",
   "concept": "",
   "example": "30 / 10 = 3",
   "instruction": "Solve for the quotient. Show your solutions.",
   "items": [
    {
     "q": "30 / 10"
    },
    {
     "q": "60 / 10"
    },
    {
     "q": "50 / 10"
    },
    {
     "q": "70 / 10"
    },
    {
     "q": "90 / 10"
    },
    {
     "q": "80 / 10"
    },
    {
     "q": "300 / 10"
    },
    {
     "q": "600 / 10"
    },
    {
     "q": "400 / 10"
    },
    {
     "q": "800 / 10"
    },
    {
     "q": "500 / 10"
    },
    {
     "q": "900 / 10"
    },
    {
     "q": "400 / 10"
    },
    {
     "q": "500 / 10"
    },
    {
     "q": "800 / 100"
    },
    {
     "q": "700 / 100"
    },
    {
     "q": "200 / 100"
    },
    {
     "q": "900 / 100"
    },
    {
     "q": "600 / 100"
    },
    {
     "q": "500 / 100"
    }
   ],
   "examples": [
    "40 / 10",
    "20 / 10",
    "120 / 10",
    "750 / 10",
    "300 / 100",
    "400 / 100"
   ]
  },
  {
   "n": 21,
   "title": "Point, Line, Line Segment, and Ray",
   "concept": "A point is one exact spot. It is drawn as a single dot and named with a capital letter. A line is straight and goes on forever in both directions, so it is drawn with an arrow on each end. A line segment is a straight piece with two endpoints and no arrows, which is why a segment can be measured. A ray starts at one endpoint and goes on forever in one direction, so it has a dot on one end and an arrow on the other. Look at the two ends of the figure to decide which one it is.",
   "example": "",
   "instruction": "Look at each figure. Write point, line, line segment, or ray.",
   "items": [
    {
     "q": "What is this figure called? Write point, line, line segment, or ray.",
     "a": "point",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "point"
     }
    },
    {
     "q": "What is this figure called? Write point, line, line segment, or ray.",
     "a": "ray",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "ray"
     }
    },
    {
     "q": "What is this figure called? Write point, line, line segment, or ray.",
     "a": "line segment; segment",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "segment"
     },
     "alt": true
    },
    {
     "q": "What is this figure called? Write point, line, line segment, or ray.",
     "a": "line",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "line"
     }
    },
    {
     "q": "What is this figure called? Write point, line, line segment, or ray.",
     "a": "ray",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "ray"
     }
    },
    {
     "q": "What is this figure called? Write point, line, line segment, or ray.",
     "a": "line segment; segment",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "segment"
     },
     "alt": true
    },
    {
     "q": "What is this figure called? Write point, line, line segment, or ray.",
     "a": "point",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "point"
     }
    },
    {
     "q": "What is this figure called? Write point, line, line segment, or ray.",
     "a": "line",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "line"
     }
    },
    {
     "q": "What is this figure called? Write point, line, line segment, or ray.",
     "a": "point",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "point"
     }
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Name this figure.",
     "fig": {
      "kind": "line",
      "rel": "point"
     },
     "steps": [
      "Look for a straight path. There is none.",
      "Only one exact spot is marked, with a capital letter beside it.",
      "One exact spot is a point."
     ],
     "a": "point"
    },
    {
     "q": "Which one is this: point, line, line segment, or ray?",
     "fig": {
      "kind": "line",
      "rel": "segment"
     },
     "steps": [
      "Look at the two ends of the straight path.",
      "Each end stops at a dot, so each end is an endpoint.",
      "There is no arrow, so nothing goes on forever.",
      "Two endpoints and no arrows means line segment."
     ],
     "a": "line segment"
    },
    {
     "q": "What do we call this figure?",
     "fig": {
      "kind": "line",
      "rel": "ray"
     },
     "steps": [
      "Check the two ends again.",
      "One end is a dot, so that end stops there.",
      "The other end has an arrow, so it keeps going forever that way.",
      "One endpoint and one arrow means ray."
     ],
     "a": "ray"
    },
    {
     "q": "What is the name of this figure?",
     "fig": {
      "kind": "line",
      "rel": "line"
     },
     "steps": [
      "Check both ends once more.",
      "Both ends have an arrow.",
      "It goes on forever in both directions, so it is a line."
     ],
     "a": "line"
    }
   ]
  },
  {
   "n": 22,
   "title": "Parallel, Intersecting, and Perpendicular Lines",
   "concept": "Parallel lines stay the same distance apart and never meet, no matter how far you stretch them. Intersecting lines cross each other at one point. Perpendicular lines are a special kind of intersecting lines, because they cross and make a square corner, a right angle of 90 degrees. So check first whether the lines meet. If they never meet, they are parallel. If they do meet, look at the corner: a square corner means perpendicular, any other corner means just intersecting.",
   "example": "",
   "instruction": "Items 1-4: write parallel or not parallel. Items 5-10: identify each pair of lines as parallel, intersecting, or perpendicular.",
   "items": [
    {
     "q": "Are these lines parallel or not parallel?",
     "a": "parallel; parallel lines",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "parallel"
     },
     "alt": true
    },
    {
     "q": "Are these lines parallel or not parallel?",
     "a": "not parallel",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "intersecting"
     }
    },
    {
     "q": "Are these lines parallel or not parallel?",
     "a": "not parallel",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "intersecting"
     }
    },
    {
     "q": "Are these lines parallel or not parallel?",
     "a": "parallel; parallel lines",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "parallel"
     },
     "alt": true
    },
    {
     "q": "Identify the pair of lines. Write parallel, intersecting, or perpendicular.",
     "a": "intersecting; intersecting lines",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "intersecting"
     },
     "alt": true
    },
    {
     "q": "Identify the pair of lines. Write parallel, intersecting, or perpendicular.",
     "a": "perpendicular; perpendicular lines",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "perpendicular"
     },
     "alt": true
    },
    {
     "q": "Identify the pair of lines. Write parallel, intersecting, or perpendicular.",
     "a": "parallel; parallel lines",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "parallel"
     },
     "alt": true
    },
    {
     "q": "Identify the pair of lines. Write parallel, intersecting, or perpendicular.",
     "a": "parallel; parallel lines",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "parallel"
     },
     "alt": true
    },
    {
     "q": "Identify the pair of lines. Write parallel, intersecting, or perpendicular.",
     "a": "intersecting; intersecting lines",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "intersecting"
     },
     "alt": true
    },
    {
     "q": "Identify the pair of lines. Write parallel, intersecting, or perpendicular.",
     "a": "perpendicular; perpendicular lines",
     "type": "key",
     "fig": {
      "kind": "line",
      "rel": "perpendicular"
     },
     "alt": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Write parallel or not parallel for this pair.",
     "fig": {
      "kind": "line",
      "rel": "parallel"
     },
     "steps": [
      "Follow both lines all the way to the arrows.",
      "They stay the same distance apart and never meet.",
      "Lines that never meet are parallel."
     ],
     "a": "parallel"
    },
    {
     "q": "What kind of pair of lines is this?",
     "fig": {
      "kind": "line",
      "rel": "intersecting"
     },
     "steps": [
      "The two lines meet, so they are not parallel.",
      "Look at the corners where they meet. They are slanted, not square.",
      "A pair that only crosses is intersecting."
     ],
     "a": "intersecting"
    },
    {
     "q": "Name this pair of lines.",
     "fig": {
      "kind": "line",
      "rel": "perpendicular"
     },
     "steps": [
      "The two lines meet, so they are not parallel.",
      "The small corner mark shows a right angle of 90 degrees.",
      "Lines that cross at a right angle are perpendicular."
     ],
     "a": "perpendicular"
    }
   ],
   "ordered": true
  },
  {
   "n": 23,
   "title": "Congruent Line Segments",
   "concept": "Congruent line segments are segments that have exactly the same length. Position does not matter. One may be flat, upright, or slanted and they are still congruent as long as they measure the same. To check, measure each segment with a ruler, or imagine sliding one on top of the other to see if the endpoints land on each other. If the lengths are different even by a little, the segments are not congruent.",
   "example": "",
   "instruction": "Study the two segments. Write yes if they are congruent (equal in length), no if they are not.",
   "items": [
    {
     "q": "Are these two segments congruent?",
     "a": "yes; congruent",
     "type": "key",
     "fig": {
      "kind": "segments",
      "lengths": [
       4,
       4
      ]
     },
     "alt": true
    },
    {
     "q": "Are these two segments congruent?",
     "a": "no; not congruent",
     "type": "key",
     "fig": {
      "kind": "segments",
      "lengths": [
       5,
       3
      ]
     },
     "alt": true
    },
    {
     "q": "Are these two segments congruent?",
     "a": "no; not congruent",
     "type": "key",
     "fig": {
      "kind": "segments",
      "lengths": [
       2,
       4
      ]
     },
     "alt": true
    },
    {
     "q": "Are these two segments congruent?",
     "a": "yes; congruent",
     "type": "key",
     "fig": {
      "kind": "segments",
      "lengths": [
       3,
       3
      ]
     },
     "alt": true
    },
    {
     "q": "Are these two segments congruent?",
     "a": "no; not congruent",
     "type": "key",
     "fig": {
      "kind": "segments",
      "lengths": [
       2,
       4
      ]
     },
     "alt": true
    },
    {
     "q": "Are these two segments congruent?",
     "a": "yes; congruent",
     "type": "key",
     "fig": {
      "kind": "segments",
      "lengths": [
       4,
       4
      ]
     },
     "alt": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Do segment A and segment B have the same length?",
     "fig": {
      "kind": "segments",
      "lengths": [
       5,
       5
      ]
     },
     "steps": [
      "Both segments start at the same place on the left.",
      "Their right endpoints stop at the same place too.",
      "Same length means the segments are congruent."
     ],
     "a": "yes"
    },
    {
     "q": "Are segment A and segment B congruent? Write yes or no.",
     "fig": {
      "kind": "segments",
      "lengths": [
       2,
       5
      ]
     },
     "steps": [
      "Both segments start at the same place on the left.",
      "Segment B reaches much farther than segment A.",
      "Different lengths, so they are not congruent."
     ],
     "a": "no"
    },
    {
     "q": "Write yes or no: is this pair congruent?",
     "fig": {
      "kind": "segments",
      "lengths": [
       3,
       3
      ]
     },
     "steps": [
      "Slide one segment on top of the other in your mind.",
      "Both endpoints would land on each other.",
      "They match, so the segments are congruent."
     ],
     "a": "yes"
    },
    {
     "q": "Do these two segments measure the same?",
     "fig": {
      "kind": "segments",
      "lengths": [
       4,
       3
      ]
     },
     "steps": [
      "Compare the right endpoints of A and B.",
      "Segment A is a little longer than segment B.",
      "Even a small difference means they are not congruent."
     ],
     "a": "no"
    }
   ]
  },
  {
   "n": 24,
   "title": "Visualizing Numbers",
   "concept": "Each circle is a token with its own worth printed inside it: 50,000, 10,000, 1,000, 100, 10 or 1. To find the number shown, count how many tokens of each kind there are, multiply that count by what the token is worth, then add all the parts together. Work from the biggest token down to the smallest so the digits land in the right places. If a place has no token at all, write 0 there so the other digits stay where they belong.",
   "example": "",
   "instruction": "Write the total amount equivalent to the place-value tokens shown (50,000 / 10,000 / 1,000 / 100 / 10 / 1).",
   "items": [
    {
     "q": "What number do the place-value tokens show?",
     "a": "21220",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "12310",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "11321",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "4200",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 4
       },
       {
        "value": 100,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "10233",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 3
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "21112",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "10331",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "4022",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 4
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "13201",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "2323",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 3
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "3122",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "10240",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 4
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "11124",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 4
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "2411",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 4
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "22110",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "12222",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "11111",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "1312",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "521",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 100,
        "count": 5
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "11303",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 1,
        "count": 3
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "1321",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "13211",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "40111",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 4
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "2312",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "11221",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "21212",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "3131",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "12111",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "31211",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 3
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "333",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 3
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "1501",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 5
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "12222",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "12212",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "2322",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "21311",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "3123",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 3
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "10331",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "23020",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 10,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "423",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 100,
        "count": 4
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 3
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "11211",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "30221",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 3
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "1412",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 4
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "13210",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "234",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 4
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "21121",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "80112",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 50000,
        "count": 1
       },
       {
        "value": 10000,
        "count": 3
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "90210",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 50000,
        "count": 1
       },
       {
        "value": 10000,
        "count": 4
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the place-value tokens show?",
     "a": "92110",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 50000,
        "count": 1
       },
       {
        "value": 10000,
        "count": 4
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       }
      ]
     }
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "What number is shown?",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 3
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 4
       }
      ]
     },
     "steps": [
      "Read the number printed inside each circle, then count how many of each kind.",
      "3 x 10000 = 30000 and 2 x 1000 = 2000.",
      "4 x 100 = 400. No circle says 10 or 1, so those places are 0.",
      "30000 + 2000 + 400 + 0 + 0 = 32400"
     ],
     "a": "32400"
    },
    {
     "q": "What number do these circles make?",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 5
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 4
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     },
     "steps": [
      "Sort the circles by what is printed on them, biggest first.",
      "5 x 1000 = 5000 and 1 x 100 = 100.",
      "4 x 10 = 40 and 2 x 1 = 2.",
      "5000 + 100 + 40 + 2 = 5142"
     ],
     "a": "5142"
    },
    {
     "q": "What number is this?",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 4
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     },
     "steps": [
      "Start with the biggest: 1 x 10000 = 10000.",
      "4 x 1000 = 4000.",
      "Look for a circle marked 100. There is none, so the hundreds place is 0.",
      "10000 + 4000 + 0 + 30 + 1 = 14031"
     ],
     "a": "14031"
    },
    {
     "q": "What number do these circles stand for?",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 1
       }
      ]
     },
     "steps": [
      "2 x 10000 = 20000.",
      "3 x 100 = 300 and 1 x 10 = 10.",
      "Nothing is marked 1000 and nothing is marked 1, so both of those places are 0.",
      "20000 + 0 + 300 + 10 + 0 = 20310"
     ],
     "a": "20310"
    }
   ]
  },
  {
   "n": 26,
   "title": "Finding the Value and Place Value of a Digit",
   "concept": "Every digit sits in a spot, and the spots have names counting from the right: ones, tens, hundreds, thousands, ten thousands. The place value is simply the name of the spot the digit is sitting in. The value is how much that digit is really worth there, which you get by multiplying the digit by 1, 10, 100, 1,000 or 10,000. That is why a 7 in the tens place is only worth 70, while the same 7 in the thousands place is worth 7,000.",
   "example": "",
   "instruction": "Find the value and place value of each digit. (Parts 2-3 group items by a target digit: 'Determine and write the value and place value of [digit] in each number.')",
   "items": [
    {
     "q": "5 in 29,151",
     "a": "50, tens",
     "type": "key",
     "seq": true
    },
    {
     "q": "1 in 54,251",
     "a": "1, ones",
     "type": "key",
     "seq": true
    },
    {
     "q": "8 in 86,172",
     "a": "80,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "3 in 38,758",
     "a": "30,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "7 in 72,838",
     "a": "70,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 in 90,512",
     "a": "500, hundreds",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 in 54,418",
     "a": "50,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "8 in 85,371",
     "a": "80,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "1 in 51,523",
     "a": "1,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 in 24,655",
     "a": "20,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 62,545",
     "a": "40, tens",
     "type": "key",
     "seq": true
    },
    {
     "q": "6 in 64,782",
     "a": "60,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 47,967",
     "a": "40,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "9 in 11,947",
     "a": "900, hundreds",
     "type": "key",
     "seq": true
    },
    {
     "q": "8 in 56,784",
     "a": "80, tens",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 in 5,319",
     "a": "5,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "7 in 87,340",
     "a": "7,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "1 in 84,155",
     "a": "100, hundreds",
     "type": "key",
     "seq": true
    },
    {
     "q": "9 in 97,323",
     "a": "90,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "3 in 94,399",
     "a": "300, hundreds",
     "type": "key",
     "seq": true
    },
    {
     "q": "3 in 93,879",
     "a": "3,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "3 in 35,181",
     "a": "30,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "3 in 1,397",
     "a": "300, hundreds",
     "type": "key",
     "seq": true
    },
    {
     "q": "3 in 41,213",
     "a": "3, ones",
     "type": "key",
     "seq": true
    },
    {
     "q": "3 in 89,938",
     "a": "30, tens",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 in 58,916",
     "a": "50,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 in 35,090",
     "a": "5,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 in 9,095",
     "a": "5, ones",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 in 21,531",
     "a": "500, hundreds",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 in 23,451",
     "a": "50, tens",
     "type": "key",
     "seq": true
    },
    {
     "q": "6 in 97,162",
     "a": "60, tens",
     "type": "key",
     "seq": true
    },
    {
     "q": "6 in 21,746",
     "a": "6, ones",
     "type": "key",
     "seq": true
    },
    {
     "q": "6 in 60,531",
     "a": "60,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "6 in 46,810",
     "a": "6,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "6 in 6,324",
     "a": "6,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "9 in 9,412",
     "a": "9,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "9 in 91,578",
     "a": "90,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "9 in 29,122",
     "a": "9,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "9 in 41,955",
     "a": "900, hundreds",
     "type": "key",
     "seq": true
    },
    {
     "q": "9 in 74,129",
     "a": "9, ones",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 in 42,718",
     "a": "2,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 in 26,531",
     "a": "20,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 in 72,946",
     "a": "2,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 in 13,215",
     "a": "200, hundreds",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 in 80,462",
     "a": "2, ones",
     "type": "key",
     "seq": true
    },
    {
     "q": "7 in 37,501",
     "a": "7,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "7 in 67,284",
     "a": "7,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "7 in 19,763",
     "a": "700, hundreds",
     "type": "key",
     "seq": true
    },
    {
     "q": "7 in 74,095",
     "a": "70,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "7 in 87,630",
     "a": "7,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 84,259",
     "a": "4,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 14,837",
     "a": "4,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 64,701",
     "a": "4,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 42,963",
     "a": "40,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 35,124",
     "a": "4, ones",
     "type": "key",
     "seq": true
    },
    {
     "q": "8 in 18,526",
     "a": "8,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "8 in 68,341",
     "a": "8,000, thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "8 in 82,769",
     "a": "80,000, ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "8 in 90,483",
     "a": "80, tens",
     "type": "key",
     "seq": true
    },
    {
     "q": "8 in 28,150",
     "a": "8,000, thousands",
     "type": "key",
     "seq": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Give the value and the place value of 6 in 36,482.",
     "steps": [
      "Name the spots from the right: 2 ones, 8 tens, 4 hundreds, 6 thousands, 3 ten thousands.",
      "The 6 is sitting in the thousands spot, so the place value is thousands.",
      "Value is 6 x 1,000 = 6,000."
     ],
     "a": "6,000, thousands"
    },
    {
     "q": "Give the value and the place value of 8 in 52,083.",
     "steps": [
      "Name the spots from the right: 3 ones, 8 tens, 0 hundreds, 2 thousands, 5 ten thousands.",
      "The 8 is in the tens spot, so the place value is tens.",
      "Value is 8 x 10 = 80."
     ],
     "a": "80, tens"
    },
    {
     "q": "Give the value and the place value of 2 in 20,715.",
     "steps": [
      "Name the spots from the right: 5 ones, 1 ten, 7 hundreds, 0 thousands, 2 ten thousands.",
      "The 2 is the leftmost digit, so it is in the ten thousands spot.",
      "Value is 2 x 10,000 = 20,000."
     ],
     "a": "20,000, ten thousands"
    },
    {
     "q": "Give the value and the place value of 7 in 48,732.",
     "steps": [
      "Name the spots from the right: 2 ones, 3 tens, 7 hundreds, 8 thousands, 4 ten thousands.",
      "The 7 is in the hundreds spot, so the place value is hundreds.",
      "Value is 7 x 100 = 700."
     ],
     "a": "700, hundreds"
    }
   ]
  },
  {
   "n": 27,
   "title": "Determining the Value of a Digit based on Place Value",
   "concept": "Reading from the right, the places go ones, tens, hundreds, thousands, ten thousands. Here you are handed a place name and asked which digit is sitting in it, so your answer is a single digit. Point to the last digit for ones, then step one place to the left at a time until you reach the place you want. A 0 counts as a digit too, so if that spot holds a 0, then 0 is your answer.",
   "example": "",
   "instruction": "Give the value of the number corresponding to the given place value.",
   "items": [
    {
     "q": "ones in 64,259",
     "a": "9",
     "type": "key"
    },
    {
     "q": "ten thousands in 64,259",
     "a": "6",
     "type": "key"
    },
    {
     "q": "tens in 64,259",
     "a": "5",
     "type": "key"
    },
    {
     "q": "hundreds in 64,259",
     "a": "2",
     "type": "key"
    },
    {
     "q": "thousands in 64,259",
     "a": "4",
     "type": "key"
    },
    {
     "q": "hundreds in 49,402",
     "a": "4",
     "type": "key"
    },
    {
     "q": "tens in 49,402",
     "a": "0",
     "type": "key"
    },
    {
     "q": "ones in 49,402",
     "a": "2",
     "type": "key"
    },
    {
     "q": "ten thousands in 49,402",
     "a": "4",
     "type": "key"
    },
    {
     "q": "thousands in 49,402",
     "a": "9",
     "type": "key"
    },
    {
     "q": "thousands in 3,546",
     "a": "3",
     "type": "key"
    },
    {
     "q": "hundreds in 3,546",
     "a": "5",
     "type": "key"
    },
    {
     "q": "tens in 3,546",
     "a": "4",
     "type": "key"
    },
    {
     "q": "ones in 3,546",
     "a": "6",
     "type": "key"
    },
    {
     "q": "tens in 93,546",
     "a": "4",
     "type": "key"
    },
    {
     "q": "thousands in 93,546",
     "a": "3",
     "type": "key"
    },
    {
     "q": "ten thousands in 93,546",
     "a": "9",
     "type": "key"
    },
    {
     "q": "hundreds in 93,546",
     "a": "5",
     "type": "key"
    },
    {
     "q": "ones in 93,546",
     "a": "6",
     "type": "key"
    },
    {
     "q": "ones in 1,234",
     "a": "4",
     "type": "key"
    },
    {
     "q": "hundreds in 1,234",
     "a": "2",
     "type": "key"
    },
    {
     "q": "tens in 1,234",
     "a": "3",
     "type": "key"
    },
    {
     "q": "thousands in 1,234",
     "a": "1",
     "type": "key"
    },
    {
     "q": "ten thousands in 17,382",
     "a": "1",
     "type": "key"
    },
    {
     "q": "thousands in 17,382",
     "a": "7",
     "type": "key"
    },
    {
     "q": "tens in 17,382",
     "a": "8",
     "type": "key"
    },
    {
     "q": "ones in 17,382",
     "a": "2",
     "type": "key"
    },
    {
     "q": "hundreds in 17,382",
     "a": "3",
     "type": "key"
    },
    {
     "q": "thousands in 70,615",
     "a": "0",
     "type": "key"
    },
    {
     "q": "hundreds in 70,615",
     "a": "6",
     "type": "key"
    },
    {
     "q": "ones in 70,615",
     "a": "5",
     "type": "key"
    },
    {
     "q": "ten thousands in 70,615",
     "a": "7",
     "type": "key"
    },
    {
     "q": "tens in 70,615",
     "a": "1",
     "type": "key"
    },
    {
     "q": "hundreds in 8,190",
     "a": "1",
     "type": "key"
    },
    {
     "q": "ones in 8,190",
     "a": "0",
     "type": "key"
    },
    {
     "q": "tens in 8,190",
     "a": "9",
     "type": "key"
    },
    {
     "q": "thousands in 8,190",
     "a": "8",
     "type": "key"
    },
    {
     "q": "ten thousands in 25,971",
     "a": "2",
     "type": "key"
    },
    {
     "q": "thousands in 25,971",
     "a": "5",
     "type": "key"
    },
    {
     "q": "hundreds in 25,971",
     "a": "9",
     "type": "key"
    },
    {
     "q": "ones in 25,971",
     "a": "1",
     "type": "key"
    },
    {
     "q": "tens in 25,971",
     "a": "7",
     "type": "key"
    },
    {
     "q": "tens in 9,403",
     "a": "0",
     "type": "key"
    },
    {
     "q": "hundreds in 9,403",
     "a": "4",
     "type": "key"
    },
    {
     "q": "thousands in 9,403",
     "a": "9",
     "type": "key"
    },
    {
     "q": "ones in 9,403",
     "a": "3",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Which digit is in the hundreds place in 57,308?",
     "steps": [
      "Step from the right: 8 is ones, 0 is tens, 3 is hundreds.",
      "Stop at hundreds."
     ],
     "a": "3"
    },
    {
     "q": "Which digit is in the ten thousands place in 82,617?",
     "steps": [
      "Step from the right: 7 ones, 1 ten, 6 hundreds, 2 thousands, 8 ten thousands.",
      "The ten thousands place holds 8."
     ],
     "a": "8"
    },
    {
     "q": "Which digit is in the tens place in 4,069?",
     "steps": [
      "Step from the right: 9 is ones, 6 is tens.",
      "The tens place holds 6."
     ],
     "a": "6"
    },
    {
     "q": "Which digit is in the thousands place in 30,541?",
     "steps": [
      "Step from the right: 1 ones, 4 tens, 5 hundreds, 0 thousands.",
      "The thousands spot is holding a 0.",
      "Write 0, not a blank."
     ],
     "a": "0"
    }
   ]
  },
  {
   "n": 28,
   "title": "Determining the Value of a Digit based on Place Value and Vice Versa",
   "concept": "You are given a number and a place name, and you write how much the digit in that place is really worth. First find the digit sitting in that place, then multiply it by 1, 10, 100, 1,000, 10,000 or 100,000 to match the place. A quick shortcut is to keep that digit, drop everything to its left, and turn every digit to its right into 0. If the digit in that place happens to be 0, then the value is just 0.",
   "example": "",
   "instruction": "Give the value of the number corresponding to the given place value.",
   "items": [
    {
     "q": "64,875 (ten thousands)",
     "a": "60,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "87,443 (hundreds)",
     "a": "400",
     "type": "key"
    },
    {
     "q": "100,000 (hundred thousands)",
     "a": "100,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "20,534 (ones)",
     "a": "4",
     "type": "key"
    },
    {
     "q": "83,021 (tens)",
     "a": "20",
     "type": "key"
    },
    {
     "q": "21,108 (ten thousands)",
     "a": "20,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "63,921 (hundreds)",
     "a": "900",
     "type": "key"
    },
    {
     "q": "94,124 (thousands)",
     "a": "4,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "5,912 (hundreds)",
     "a": "900",
     "type": "key"
    },
    {
     "q": "15,773 (ones)",
     "a": "3",
     "type": "key"
    },
    {
     "q": "74,694 (ones)",
     "a": "4",
     "type": "key"
    },
    {
     "q": "28,455 (tens)",
     "a": "50",
     "type": "key"
    },
    {
     "q": "77,722 (ten thousands)",
     "a": "70,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "95,857 (hundreds)",
     "a": "800",
     "type": "key"
    },
    {
     "q": "8,112 (hundreds)",
     "a": "100",
     "type": "key"
    },
    {
     "q": "31,627 (ten thousands)",
     "a": "30,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "54,614 (thousands)",
     "a": "4,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "24,712 (ten thousands)",
     "a": "20,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "1,237 (ones)",
     "a": "7",
     "type": "key"
    },
    {
     "q": "32,114 (tens)",
     "a": "10",
     "type": "key"
    },
    {
     "q": "5,732 (hundreds)",
     "a": "700",
     "type": "key"
    },
    {
     "q": "64,421 (hundreds)",
     "a": "400",
     "type": "key"
    },
    {
     "q": "89,365 (tens)",
     "a": "60",
     "type": "key"
    },
    {
     "q": "45,188 (ten thousands)",
     "a": "40,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "25,714 (ten thousands)",
     "a": "20,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "76,438 (hundreds)",
     "a": "400",
     "type": "key"
    },
    {
     "q": "13,907 (thousands)",
     "a": "3,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "92,315 (ones)",
     "a": "5",
     "type": "key"
    },
    {
     "q": "8,642 (tens)",
     "a": "40",
     "type": "key"
    },
    {
     "q": "43,120 (ten thousands)",
     "a": "40,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "55,209 (hundreds)",
     "a": "200",
     "type": "key"
    },
    {
     "q": "67,818 (hundreds)",
     "a": "800",
     "type": "key"
    },
    {
     "q": "2,319 (ones)",
     "a": "9",
     "type": "key"
    },
    {
     "q": "71,463 (tens)",
     "a": "60",
     "type": "key"
    },
    {
     "q": "96,580 (thousands)",
     "a": "6,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "19,237 (ten thousands)",
     "a": "10,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "5,824 (hundreds)",
     "a": "800",
     "type": "key"
    },
    {
     "q": "38,619 (ones)",
     "a": "9",
     "type": "key"
    },
    {
     "q": "14,256 (tens)",
     "a": "50",
     "type": "key"
    },
    {
     "q": "84,372 (hundreds)",
     "a": "300",
     "type": "key"
    },
    {
     "q": "62,905 (ten thousands)",
     "a": "60,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "7,531 (thousands)",
     "a": "7,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "29,847 (ones)",
     "a": "7",
     "type": "key"
    },
    {
     "q": "91,208 (hundreds)",
     "a": "200",
     "type": "key"
    },
    {
     "q": "36,741 (tens)",
     "a": "40",
     "type": "key"
    },
    {
     "q": "48,203 (hundreds)",
     "a": "200",
     "type": "key"
    },
    {
     "q": "73,690 (ten thousands)",
     "a": "70,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "2,146 (ones)",
     "a": "6",
     "type": "key"
    },
    {
     "q": "85,509 (thousands)",
     "a": "5,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "60,934 (hundreds)",
     "a": "900",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Give the value of the digit in the thousands place of 27,456.",
     "steps": [
      "Count from the right: 6 ones, 5 tens, 4 hundreds, 7 thousands.",
      "The thousands digit is 7.",
      "Value is 7 x 1,000 = 7,000."
     ],
     "a": "7,000"
    },
    {
     "q": "Give the value of the digit in the hundreds place of 58,210.",
     "steps": [
      "Count from the right: 0 ones, 1 ten, 2 hundreds.",
      "The hundreds digit is 2.",
      "Value is 2 x 100 = 200."
     ],
     "a": "200"
    },
    {
     "q": "Give the value of the digit in the ten thousands place of 46,083.",
     "steps": [
      "In a five digit number the leftmost digit is the ten thousands digit, here 4.",
      "Value is 4 x 10,000 = 40,000."
     ],
     "a": "40,000"
    },
    {
     "q": "Give the value of the digit in the tens place of 9,704.",
     "steps": [
      "Count from the right: 4 ones, 0 tens.",
      "The tens digit is 0.",
      "Value is 0 x 10 = 0."
     ],
     "a": "0"
    }
   ]
  },
  {
   "n": 29,
   "title": "Writing Numbers in Words and Vice Versa",
   "concept": "Writing Numbers in Words and Vice Versa. When writing worded numbers in numerical form, use comma to separate the periods (groups of three digits) of the number - thousands from units, millions from thousands, billions from millions, and so on. When writing numbers in words, follow these rules: Use hyphen to separate words ending with 'y' from the next word (example: twenty-one; One hundred sixty-five). Use 'and' only when separating whole numbers from decimals. Don't use it to separate hundreds from tens (Correct: six hundred seventy-nine; Incorrect: six hundred and seventy-nine).",
   "example": "97,304 - Ninety-seven thousand, three hundred four.",
   "instruction": "Part 1 (1-15): Write the following numerals in words. Part 2 (16-35): Write the following worded numbers in numerals.",
   "items": [
    {
     "q": "1,357",
     "a": "one thousand three hundred fifty-seven",
     "type": "num-to-words"
    },
    {
     "q": "13,332",
     "a": "thirteen thousand three hundred thirty-two",
     "type": "num-to-words"
    },
    {
     "q": "23,017",
     "a": "twenty-three thousand seventeen",
     "type": "num-to-words"
    },
    {
     "q": "49,012",
     "a": "forty-nine thousand twelve",
     "type": "num-to-words"
    },
    {
     "q": "67,887",
     "a": "sixty-seven thousand eight hundred eighty-seven",
     "type": "num-to-words"
    },
    {
     "q": "90,187",
     "a": "ninety thousand one hundred eighty-seven",
     "type": "num-to-words"
    },
    {
     "q": "11,320",
     "a": "eleven thousand three hundred twenty",
     "type": "num-to-words"
    },
    {
     "q": "21,207",
     "a": "twenty-one thousand two hundred seven",
     "type": "num-to-words"
    },
    {
     "q": "42,894",
     "a": "forty-two thousand eight hundred ninety-four",
     "type": "num-to-words"
    },
    {
     "q": "33,696",
     "a": "thirty-three thousand six hundred ninety-six",
     "type": "num-to-words"
    },
    {
     "q": "43,444",
     "a": "forty-three thousand four hundred forty-four",
     "type": "num-to-words"
    },
    {
     "q": "52,001",
     "a": "fifty-two thousand one",
     "type": "num-to-words"
    },
    {
     "q": "88,022",
     "a": "eighty-eight thousand twenty-two",
     "type": "num-to-words"
    },
    {
     "q": "68,848",
     "a": "sixty-eight thousand eight hundred forty-eight",
     "type": "num-to-words"
    },
    {
     "q": "87,226",
     "a": "eighty-seven thousand two hundred twenty-six",
     "type": "num-to-words"
    },
    {
     "q": "twelve thousand, six hundred seventy-one",
     "a": "12671",
     "type": "words-to-num"
    },
    {
     "q": "seventy-five thousand, six hundred eighty",
     "a": "75680",
     "type": "words-to-num"
    },
    {
     "q": "three thousand, ninety-two",
     "a": "3092",
     "type": "words-to-num"
    },
    {
     "q": "one hundred thousand",
     "a": "100000",
     "type": "words-to-num"
    },
    {
     "q": "thirteen thousand, seven hundred thirty-six",
     "a": "13736",
     "type": "words-to-num"
    },
    {
     "q": "fourteen thousand, two hundred forty-four",
     "a": "14244",
     "type": "words-to-num"
    },
    {
     "q": "six thousand, five hundred",
     "a": "6500",
     "type": "words-to-num"
    },
    {
     "q": "fifty-eight thousand, five hundred five",
     "a": "58505",
     "type": "words-to-num"
    },
    {
     "q": "fifty-two thousand, one hundred one",
     "a": "52101",
     "type": "words-to-num"
    },
    {
     "q": "fifteen thousand, three hundred nineteen",
     "a": "15319",
     "type": "words-to-num"
    },
    {
     "q": "seven hundred seventy-seven",
     "a": "777",
     "type": "words-to-num"
    },
    {
     "q": "eighty thousand, eighty-eight",
     "a": "80088",
     "type": "words-to-num"
    },
    {
     "q": "nine thousand, nine hundred ninety",
     "a": "9990",
     "type": "words-to-num"
    },
    {
     "q": "one thousand, one hundred ten",
     "a": "1110",
     "type": "words-to-num"
    },
    {
     "q": "ninety-nine thousand, nine hundred nineteen",
     "a": "99919",
     "type": "words-to-num"
    },
    {
     "q": "three thousand, two hundred twelve",
     "a": "3212",
     "type": "words-to-num"
    },
    {
     "q": "thirteen thousand, thirteen",
     "a": "13013",
     "type": "words-to-num"
    },
    {
     "q": "five hundred twenty eight",
     "a": "528",
     "type": "words-to-num"
    },
    {
     "q": "eighteen thousand, six hundred fifty-two",
     "a": "18652",
     "type": "words-to-num"
    },
    {
     "q": "fourteen thousand, seventeen",
     "a": "14017",
     "type": "words-to-num"
    }
   ]
  },
  {
   "n": 30,
   "title": "Comparing Numbers Using Relation Symbols",
   "concept": "Before you compare, turn any number written in words into digits so both sides look the same. Then count the digits: a number with more digits is always the bigger one. If both have the same number of digits, compare them place by place starting from the left, and stop at the first place where the digits differ. Write > when the left side is bigger, < when the left side is smaller, and = when every place matches.",
   "example": "",
   "instruction": "Write each number in words or digits. Then, encircle the correct symbol (>, <, or =) to compare them.",
   "items": [
    {
     "q": "forty-two thousand, three hundred _ 42,300",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "15,678 _ fifteen thousand, six hundred seventy-eight",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "seventy thousand, five _ 69,995",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "8,204 _ eight thousand, two hundred forty",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "ninety-nine thousand, nine hundred _ 99,899",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "23,450 _ twenty-three thousand, four hundred forty-nine",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "sixty thousand, sixty _ 60,600",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "17,999 _ seventeen thousand, nine hundred ninety-nine",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "five thousand, five _ 5,050",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "83,120 _ eighty-three thousand, one hundred twenty",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "thirty-four thousand, seven hundred _ 35,000",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "10,010 _ ten thousand, nine",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "seventy-eight thousand, nine _ 78,900",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "46,789 _ forty-six thousand, seven hundred ninety",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "ninety thousand, ninety _ 89,999",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "24,001 _ twenty-four thousand, one",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "fifty-two thousand, five hundred _ 52,050",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "9,876 _ nine thousand, eight hundred seventy-six",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "one hundred thousand _ 99,999",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "31,235 _ thirty-one thousand, two hundred thirty-five",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "forty-three thousand, five hundred _ 43,050",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "27,458 _ twenty-seven thousand, five hundred sixty-two",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "ninety-one thousand, two hundred _ 91,200",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "56,780 _ fifty-six thousand, nine hundred",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "thirty-three thousand, two hundred _ 33,250",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "74,000 _ seventy-four thousand, eighty-nine",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "ninety-eight thousand, seven hundred twelve _ 98,712",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "63,029 _ sixty-three thousand, four hundred thirty-two",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "49,875 _ 50,000",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "ten thousand, nine hundred fifty-six _ 10,956",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "sixty-two thousand, three hundred _ 62,730",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "seventy-five thousand, nine hundred _ 75,901",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "48,672 _ forty-nine thousand, six hundred seventy-two",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "one hundred thousand _ 99,999",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "67,504 _ sixty-seven thousand, seven hundred ninety",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "52,317 _ fifty-two thousand, three hundred twenty-six",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "76,540 _ seventy-six thousand, six hundred forty-nine",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "85,600 _ eighty-five thousand, six hundred",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "73,219 _ seventy-three thousand, three hundred twenty",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "68,432 _ sixty-eight thousand, five hundred",
     "a": "<",
     "type": "compare"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "fifty-six thousand, forty ___ 56,400. Which symbol goes in the blank, >, < or =?",
     "steps": [
      "Fifty-six thousand, forty is 56,040. Note the 40 is tens and ones, not hundreds.",
      "Both have 5 digits, so compare from the left: 5 and 5 match, 6 and 6 match, then 0 against 4.",
      "0 is less than 4, so 56,040 is the smaller number."
     ],
     "a": "<"
    },
    {
     "q": "eighty thousand, two hundred fifteen ___ 80,215. Which symbol goes in the blank?",
     "steps": [
      "Eighty thousand, two hundred fifteen is 80,215.",
      "Compare place by place: 8 and 8, 0 and 0, 2 and 2, 1 and 1, 5 and 5.",
      "Every place matches."
     ],
     "a": "="
    },
    {
     "q": "30,009 ___ twenty-nine thousand, nine hundred ninety. Which symbol goes in the blank?",
     "steps": [
      "Twenty-nine thousand, nine hundred ninety is 29,990.",
      "Both have 5 digits, so start at the left: 3 against 2.",
      "3 is greater than 2, so 30,009 is bigger. The nines on the right do not matter once the left side has decided it."
     ],
     "a": ">"
    },
    {
     "q": "9,870 ___ ten thousand, seven. Which symbol goes in the blank?",
     "steps": [
      "Ten thousand, seven is 10,007.",
      "9,870 has 4 digits and 10,007 has 5 digits.",
      "Fewer digits means the smaller number, so 9,870 is smaller."
     ],
     "a": "<"
    }
   ]
  },
  {
   "n": 31,
   "title": "Rounding Off to a Specific Place Value",
   "concept": "To round a number, look at the digit one place to the right of the place you are rounding to. If that digit is 5 or more, add 1 to the digit in the rounding place; if it is 4 or less, leave that digit alone. Then change every digit to the right of the rounding place into 0. So for the nearest thousands you check the hundreds digit, and for the nearest ten thousands you check the thousands digit.",
   "example": "",
   "instruction": "Round off each number to the indicated place value.",
   "items": [
    {
     "q": "Round 86,854 to the nearest thousands",
     "a": "87,000",
     "type": "rounding"
    },
    {
     "q": "Round 78,949 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "Round 34,987 to the nearest thousands",
     "a": "35,000",
     "type": "rounding"
    },
    {
     "q": "Round 84,531 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "Round 35,724 to the nearest thousands",
     "a": "36,000",
     "type": "rounding"
    },
    {
     "q": "Round 94,333 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "Round 94,637 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "Round 96,423 to the nearest thousands",
     "a": "96,000",
     "type": "rounding"
    },
    {
     "q": "Round 34,706 to the nearest ten thousands",
     "a": "30,000",
     "type": "rounding"
    },
    {
     "q": "Round 62,893 to the nearest thousands",
     "a": "63,000",
     "type": "rounding"
    },
    {
     "q": "Round 84,241 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "Round 98,569 to the nearest thousands",
     "a": "99,000",
     "type": "rounding"
    },
    {
     "q": "Round 45,139 to the nearest ten thousands",
     "a": "50,000",
     "type": "rounding"
    },
    {
     "q": "Round 48,557 to the nearest ten thousands",
     "a": "50,000",
     "type": "rounding"
    },
    {
     "q": "Round 24,558 to the nearest thousands",
     "a": "25,000",
     "type": "rounding"
    },
    {
     "q": "Round 46,476 to the nearest thousands",
     "a": "46,000",
     "type": "rounding"
    },
    {
     "q": "Round 34,671 to the nearest thousands",
     "a": "35,000",
     "type": "rounding"
    },
    {
     "q": "Round 40,194 to the nearest ten thousands",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "Round 44,388 to the nearest thousands",
     "a": "44,000",
     "type": "rounding"
    },
    {
     "q": "Round 98,433 to the nearest ten thousands",
     "a": "100,000",
     "type": "rounding"
    },
    {
     "q": "Round 25,199 to the nearest thousands",
     "a": "25,000",
     "type": "rounding"
    },
    {
     "q": "Round 2,999 to the nearest thousands",
     "a": "3,000",
     "type": "rounding"
    },
    {
     "q": "Round 48,214 to the nearest ten thousands",
     "a": "50,000",
     "type": "rounding"
    },
    {
     "q": "Round 82,262 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "Round 38,238 to the nearest ten thousands",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "Round 67,842 to the nearest thousands",
     "a": "68,000",
     "type": "rounding"
    },
    {
     "q": "Round 28,719 to the nearest ten thousands",
     "a": "30,000",
     "type": "rounding"
    },
    {
     "q": "Round 43,586 to the nearest thousands",
     "a": "44,000",
     "type": "rounding"
    },
    {
     "q": "Round 91,765 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "Round 36,294 to the nearest thousands",
     "a": "36,000",
     "type": "rounding"
    },
    {
     "q": "Round 75,683 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "Round 19,457 to the nearest thousands",
     "a": "19,000",
     "type": "rounding"
    },
    {
     "q": "Round 82,918 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "Round 29,134 to the nearest thousands",
     "a": "29,000",
     "type": "rounding"
    },
    {
     "q": "Round 64,975 to the nearest ten thousands",
     "a": "60,000",
     "type": "rounding"
    },
    {
     "q": "Round 88,230 to the nearest thousands",
     "a": "88,000",
     "type": "rounding"
    },
    {
     "q": "Round 37,868 to the nearest ten thousands",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "Round 66,511 to the nearest thousands",
     "a": "67,000",
     "type": "rounding"
    },
    {
     "q": "Round 73,049 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "Round 24,365 to the nearest thousands",
     "a": "24,000",
     "type": "rounding"
    },
    {
     "q": "Round 95,672 to the nearest ten thousands",
     "a": "100,000",
     "type": "rounding"
    },
    {
     "q": "Round 41,286 to the nearest thousands",
     "a": "41,000",
     "type": "rounding"
    },
    {
     "q": "Round 58,947 to the nearest ten thousands",
     "a": "60,000",
     "type": "rounding"
    },
    {
     "q": "Round 33,418 to the nearest thousands",
     "a": "33,000",
     "type": "rounding"
    },
    {
     "q": "Round 79,304 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "Round 21,657 to the nearest thousands",
     "a": "22,000",
     "type": "rounding"
    },
    {
     "q": "Round 86,123 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "Round 14,892 to the nearest thousands",
     "a": "15,000",
     "type": "rounding"
    },
    {
     "q": "Round 92,605 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "Round 27,531 to the nearest thousands",
     "a": "28,000",
     "type": "rounding"
    }
   ],
   "round": true,
   "rev": 1,
   "examples": [
    {
     "q": "Round 53,672 to the nearest thousands.",
     "steps": [
      "Rounding to thousands, so look at the hundreds digit of 53,672, which is 6.",
      "6 is 5 or more, so add 1 to the thousands digit: 3 becomes 4.",
      "Turn the hundreds, tens and ones into 0."
     ],
     "a": "54,000"
    },
    {
     "q": "Round 71,248 to the nearest ten thousands.",
     "steps": [
      "Rounding to ten thousands, so look at the thousands digit of 71,248, which is 1.",
      "1 is 4 or less, so the ten thousands digit 7 stays the same.",
      "Turn the last four digits into 0."
     ],
     "a": "70,000"
    },
    {
     "q": "Round 99,618 to the nearest thousands.",
     "steps": [
      "Look at the hundreds digit of 99,618, which is 6.",
      "6 is 5 or more, so round up: 99 thousands becomes 100 thousands.",
      "The carry pushes it to a six digit answer."
     ],
     "a": "100,000"
    },
    {
     "q": "Round 32,500 to the nearest thousands.",
     "steps": [
      "The hundreds digit of 32,500 is 5.",
      "Exactly 5 still rounds up, so 2 thousands becomes 3 thousands.",
      "Fill the rest with zeros."
     ],
     "a": "33,000"
    }
   ]
  },
  {
   "n": 32,
   "title": "Rounding Off to a Specific Place Value",
   "concept": "Rounding follows the same routine every time: find the digit in the place you are rounding to, check the single digit right after it, then decide. A 5, 6, 7, 8 or 9 means round that digit up by one, while a 0, 1, 2, 3 or 4 means leave it as it is. Either way every digit after the rounding place becomes 0, and the digits in front stay untouched unless a 9 forces a carry. Use this check at the end: a number rounded to thousands ends in three zeros, and one rounded to ten thousands ends in four zeros.",
   "example": "",
   "instruction": "Round off each number to the indicated place value.",
   "items": [
    {
     "q": "Round 37,684 to the nearest thousands",
     "a": "38,000",
     "type": "rounding"
    },
    {
     "q": "Round 65,429 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "Round 82,915 to the nearest thousands",
     "a": "83,000",
     "type": "rounding"
    },
    {
     "q": "Round 14,237 to the nearest ten thousands",
     "a": "10,000",
     "type": "rounding"
    },
    {
     "q": "Round 96,358 to the nearest thousands",
     "a": "96,000",
     "type": "rounding"
    },
    {
     "q": "Round 28,471 to the nearest ten thousands",
     "a": "30,000",
     "type": "rounding"
    },
    {
     "q": "Round 59,863 to the nearest thousands",
     "a": "60,000",
     "type": "rounding"
    },
    {
     "q": "Round 73,146 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "Round 41,902 to the nearest thousands",
     "a": "42,000",
     "type": "rounding"
    },
    {
     "q": "Round 68,257 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "Round 23,516 to the nearest thousands",
     "a": "24,000",
     "type": "rounding"
    },
    {
     "q": "Round 87,329 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "Round 31,647 to the nearest thousands",
     "a": "32,000",
     "type": "rounding"
    },
    {
     "q": "Round 92,874 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "Round 16,938 to the nearest thousands",
     "a": "17,000",
     "type": "rounding"
    },
    {
     "q": "Round 74,261 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "Round 48,599 to the nearest thousands",
     "a": "49,000",
     "type": "rounding"
    },
    {
     "q": "Round 69,713 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "Round 25,381 to the nearest thousands",
     "a": "25,000",
     "type": "rounding"
    },
    {
     "q": "Round 83,645 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "Round 61,472 to the nearest thousands",
     "a": "61,000",
     "type": "rounding"
    },
    {
     "q": "Round 15,762 to the nearest ten thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "Round 93,108 to the nearest thousands",
     "a": "93,000",
     "type": "rounding"
    },
    {
     "q": "Round 36,849 to the nearest ten thousands",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "Round 77,235 to the nearest thousands",
     "a": "77,000",
     "type": "rounding"
    },
    {
     "q": "Round 52,347 to the nearest thousands",
     "a": "52,000",
     "type": "rounding"
    },
    {
     "q": "Round 18,265 to the nearest ten thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "Round 83,914 to the nearest thousands",
     "a": "84,000",
     "type": "rounding"
    },
    {
     "q": "Round 27,638 to the nearest ten thousands",
     "a": "30,000",
     "type": "rounding"
    },
    {
     "q": "Round 61,759 to the nearest thousands",
     "a": "62,000",
     "type": "rounding"
    },
    {
     "q": "Round 74,216 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "Round 33,892 to the nearest thousands",
     "a": "34,000",
     "type": "rounding"
    },
    {
     "q": "Round 91,163 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "Round 24,578 to the nearest thousands",
     "a": "25,000",
     "type": "rounding"
    },
    {
     "q": "Round 46,892 to the nearest ten thousands",
     "a": "50,000",
     "type": "rounding"
    },
    {
     "q": "Round 68,453 to the nearest thousands",
     "a": "68,000",
     "type": "rounding"
    },
    {
     "q": "Round 37,129 to the nearest ten thousands",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "Round 95,087 to the nearest thousands",
     "a": "95,000",
     "type": "rounding"
    },
    {
     "q": "Round 15,683 to the nearest ten thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "Round 73,946 to the nearest thousands",
     "a": "74,000",
     "type": "rounding"
    },
    {
     "q": "Round 22,845 to the nearest ten thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "Round 84,297 to the nearest thousands",
     "a": "84,000",
     "type": "rounding"
    },
    {
     "q": "Round 39,615 to the nearest ten thousands",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "Round 58,734 to the nearest thousands",
     "a": "59,000",
     "type": "rounding"
    },
    {
     "q": "Round 67,481 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "Round 29,356 to the nearest thousands",
     "a": "29,000",
     "type": "rounding"
    },
    {
     "q": "Round 93,628 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "Round 42,179 to the nearest thousands",
     "a": "42,000",
     "type": "rounding"
    },
    {
     "q": "Round 16,987 to the nearest ten thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "Round 78,254 to the nearest thousands",
     "a": "78,000",
     "type": "rounding"
    },
    {
     "q": "Round 42,376 to the nearest thousands",
     "a": "42,000",
     "type": "rounding"
    },
    {
     "q": "Round 87,651 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "Round 23,894 to the nearest thousands",
     "a": "24,000",
     "type": "rounding"
    },
    {
     "q": "Round 76,218 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "Round 19,735 to the nearest thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "Round 68,903 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "Round 55,472 to the nearest thousands",
     "a": "55,000",
     "type": "rounding"
    },
    {
     "q": "Round 91,386 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "Round 34,621 to the nearest thousands",
     "a": "35,000",
     "type": "rounding"
    },
    {
     "q": "Round 72,549 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "Round 28,765 to the nearest thousands",
     "a": "29,000",
     "type": "rounding"
    },
    {
     "q": "Round 63,842 to the nearest ten thousands",
     "a": "60,000",
     "type": "rounding"
    },
    {
     "q": "Round 84,917 to the nearest thousands",
     "a": "85,000",
     "type": "rounding"
    },
    {
     "q": "Round 17,438 to the nearest ten thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "Round 93,204 to the nearest thousands",
     "a": "93,000",
     "type": "rounding"
    },
    {
     "q": "Round 46,573 to the nearest ten thousands",
     "a": "50,000",
     "type": "rounding"
    },
    {
     "q": "Round 29,618 to the nearest thousands",
     "a": "30,000",
     "type": "rounding"
    },
    {
     "q": "Round 81,746 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "Round 37,592 to the nearest thousands",
     "a": "38,000",
     "type": "rounding"
    },
    {
     "q": "Round 65,309 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "Round 22,184 to the nearest thousands",
     "a": "22,000",
     "type": "rounding"
    },
    {
     "q": "Round 98,731 to the nearest ten thousands",
     "a": "100,000",
     "type": "rounding"
    },
    {
     "q": "Round 14,867 to the nearest thousands",
     "a": "15,000",
     "type": "rounding"
    },
    {
     "q": "Round 76,592 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "Round 39,285 to the nearest thousands",
     "a": "39,000",
     "type": "rounding"
    }
   ],
   "round": true,
   "rev": 1,
   "examples": [
    {
     "q": "Round 26,480 to the nearest thousands.",
     "steps": [
      "The thousands digit of 26,480 is 6.",
      "The digit just to its right is 4, which is less than 5, so 6 stays as 6.",
      "Replace the last three digits with zeros."
     ],
     "a": "26,000"
    },
    {
     "q": "Round 57,903 to the nearest ten thousands.",
     "steps": [
      "The ten thousands digit of 57,903 is 5.",
      "The digit just to its right is 7, which is 5 or more, so 5 becomes 6.",
      "Replace the last four digits with zeros."
     ],
     "a": "60,000"
    },
    {
     "q": "Round 8,560 to the nearest thousands.",
     "steps": [
      "The thousands digit of 8,560 is 8.",
      "The hundreds digit is 5, so round up and 8 becomes 9.",
      "The answer is 9 thousands."
     ],
     "a": "9,000"
    },
    {
     "q": "Round 95,204 to the nearest ten thousands.",
     "steps": [
      "The ten thousands digit of 95,204 is 9.",
      "The thousands digit is 5, so round up: 9 ten thousands becomes 10 ten thousands.",
      "10 ten thousands is 100,000."
     ],
     "a": "100,000"
    }
   ]
  },
  {
   "n": 33,
   "title": "Ordering Numbers in Increasing or Decreasing Order",
   "concept": "Increasing order means smallest to biggest, and decreasing order means biggest to smallest, so read the heading before you write anything. Start by counting digits, because any 4 digit number is smaller than any 5 digit number. For numbers with the same number of digits, compare the leftmost digits first and only move one place to the right when those digits are equal. Cross out each number as you place it so nothing gets copied twice or left out.",
   "example": "",
   "instruction": "Order Numbers in Increasing or Decreasing Order. (Left columns = Order Increasing; Right columns = Order Decreasing.)",
   "items": [
    {
     "q": "45,267, 12,890, 78,345, 33,111, 9,876",
     "a": "9876, 12890, 33111, 45267, 78345",
     "type": "order-asc"
    },
    {
     "q": "63,452, 21,089, 76,234, 14,567, 58,901",
     "a": "14567, 21089, 58901, 63452, 76234",
     "type": "order-asc"
    },
    {
     "q": "9,234, 72,345, 56,789, 18,900, 31,246",
     "a": "9234, 18900, 31246, 56789, 72345",
     "type": "order-asc"
    },
    {
     "q": "84,321, 27,654, 39,876, 60,111, 15,432",
     "a": "15432, 27654, 39876, 60111, 84321",
     "type": "order-asc"
    },
    {
     "q": "47,890, 3,456, 92,321, 66,220, 19,008",
     "a": "3456, 19008, 47890, 66220, 92321",
     "type": "order-asc"
    },
    {
     "q": "72,468, 38,291, 14,375, 59,832, 7,609",
     "a": "7609, 14375, 38291, 59832, 72468",
     "type": "order-asc"
    },
    {
     "q": "28,136, 65,879, 11,234, 93,540, 49,002",
     "a": "11234, 28136, 49002, 65879, 93540",
     "type": "order-asc"
    },
    {
     "q": "50,777, 23,456, 81,900, 12,345, 67,210",
     "a": "12345, 23456, 50777, 67210, 81900",
     "type": "order-asc"
    },
    {
     "q": "99,001, 34,560, 5,678, 73,245, 16,432",
     "a": "5678, 16432, 34560, 73245, 99001",
     "type": "order-asc"
    },
    {
     "q": "44,210, 88,765, 24,809, 60,312, 2,997",
     "a": "2997, 24809, 44210, 60312, 88765",
     "type": "order-asc"
    },
    {
     "q": "15,678, 70,230, 32,456, 89,001, 6,543",
     "a": "6543, 15678, 32456, 70230, 89001",
     "type": "order-asc"
    },
    {
     "q": "61,234, 29,876, 83,150, 9,432, 51,009",
     "a": "9432, 29876, 51009, 61234, 83150",
     "type": "order-asc"
    },
    {
     "q": "7,890, 45,678, 26,543, 90,876, 18,234",
     "a": "7890, 18234, 26543, 45678, 90876",
     "type": "order-asc"
    },
    {
     "q": "77,888, 54,321, 12,678, 90,234, 23,456",
     "a": "90234, 77888, 54321, 23456, 12678",
     "type": "order-desc"
    },
    {
     "q": "30,018, 4,567, 69,890, 21,345, 81,276",
     "a": "81276, 69890, 30018, 21345, 4567",
     "type": "order-desc"
    },
    {
     "q": "85,430, 17,999, 42,160, 60,501, 7,250",
     "a": "85430, 60501, 42160, 17999, 7250",
     "type": "order-desc"
    },
    {
     "q": "3,210, 64,578, 38,900, 72,604, 19,871",
     "a": "72604, 64578, 38900, 19871, 3210",
     "type": "order-desc"
    },
    {
     "q": "26,700, 58,340, 7,890, 91,108, 45,620",
     "a": "91108, 58340, 45620, 26700, 7890",
     "type": "order-desc"
    },
    {
     "q": "68,120, 12,305, 39,456, 85,780, 5,678",
     "a": "85780, 68120, 39456, 12305, 5678",
     "type": "order-desc"
    },
    {
     "q": "13,015, 94,230, 50,400, 28,630, 6,789",
     "a": "94230, 50400, 28630, 13015, 6789",
     "type": "order-desc"
    },
    {
     "q": "41,111, 73,892, 2,345, 60,870, 19,234",
     "a": "73892, 60870, 41111, 19234, 2345",
     "type": "order-desc"
    },
    {
     "q": "8,765, 27,540, 63,012, 92,800, 44,130",
     "a": "92800, 63012, 44130, 27540, 8765",
     "type": "order-desc"
    },
    {
     "q": "57,160, 14,098, 80,302, 23,671, 4,509",
     "a": "80302, 57160, 23671, 14098, 4509",
     "type": "order-desc"
    },
    {
     "q": "95,432, 31,276, 9,876, 67,210, 20,543",
     "a": "95432, 67210, 31276, 20543, 9876",
     "type": "order-desc"
    },
    {
     "q": "16,203, 73,561, 35,420, 8,910, 62,700",
     "a": "73561, 62700, 35420, 16203, 8910",
     "type": "order-desc"
    },
    {
     "q": "49,999, 22,011, 77,770, 3,333, 88,888",
     "a": "88888, 77770, 49999, 22011, 3333",
     "type": "order-desc"
    },
    {
     "q": "36,741, 5,892, 87,213, 14,650, 63,409",
     "a": "5892, 14650, 36741, 63409, 87213",
     "type": "order-asc"
    },
    {
     "q": "73,564, 28,191, 9,876, 54,320, 41,265",
     "a": "9876, 28191, 41265, 54320, 73564",
     "type": "order-asc"
    },
    {
     "q": "12,987, 65,432, 31,509, 2,345, 88,210",
     "a": "2345, 12987, 31509, 65432, 88210",
     "type": "order-asc"
    },
    {
     "q": "91,876, 47,382, 16,245, 78,901, 3,210",
     "a": "3210, 16245, 47382, 78901, 91876",
     "type": "order-asc"
    },
    {
     "q": "22,134, 5,678, 83,451, 44,209, 19,876",
     "a": "5678, 19876, 22134, 44209, 83451",
     "type": "order-asc"
    },
    {
     "q": "60,321, 7,890, 39,456, 72,813, 25,694",
     "a": "7890, 25694, 39456, 60321, 72813",
     "type": "order-asc"
    },
    {
     "q": "17,308, 92,145, 11,986, 48,672, 36,519",
     "a": "11986, 17308, 36519, 48672, 92145",
     "type": "order-asc"
    },
    {
     "q": "84,729, 13,567, 55,820, 2,478, 67,310",
     "a": "2478, 13567, 55820, 67310, 84729",
     "type": "order-asc"
    },
    {
     "q": "29,654, 80,123, 9,234, 41,897, 66,542",
     "a": "9234, 29654, 41897, 66542, 80123",
     "type": "order-asc"
    },
    {
     "q": "4,567, 32,198, 75,460, 18,309, 59,812",
     "a": "4567, 18309, 32198, 59812, 75460",
     "type": "order-asc"
    },
    {
     "q": "61,908, 26,740, 8,321, 53,104, 14,679",
     "a": "8321, 14679, 26740, 53104, 61908",
     "type": "order-asc"
    },
    {
     "q": "92,001, 37,695, 15,870, 68,234, 7,456",
     "a": "7456, 15870, 37695, 68234, 92001",
     "type": "order-asc"
    },
    {
     "q": "10,345, 47,820, 23,167, 85,603, 3,218",
     "a": "3218, 10345, 23167, 47820, 85603",
     "type": "order-asc"
    },
    {
     "q": "66,789, 14,234, 91,672, 45,321, 2,109",
     "a": "91672, 66789, 45321, 14234, 2109",
     "type": "order-desc"
    },
    {
     "q": "78,456, 21,987, 63,210, 39,805, 16,432",
     "a": "78456, 63210, 39805, 21987, 16432",
     "type": "order-desc"
    },
    {
     "q": "52,640, 8,905, 74,321, 19,876, 3,450",
     "a": "74321, 52640, 19876, 8905, 3450",
     "type": "order-desc"
    },
    {
     "q": "87,654, 12,345, 60,978, 28,109, 7,890",
     "a": "87654, 60978, 28109, 12345, 7890",
     "type": "order-desc"
    },
    {
     "q": "93,215, 41,876, 25,634, 11,987, 3,210",
     "a": "93215, 41876, 25634, 11987, 3210",
     "type": "order-desc"
    },
    {
     "q": "70,432, 18,345, 55,671, 29,876, 6,543",
     "a": "70432, 55671, 29876, 18345, 6543",
     "type": "order-desc"
    },
    {
     "q": "61,203, 9,876, 48,765, 23,111, 4,890",
     "a": "61203, 48765, 23111, 9876, 4890",
     "type": "order-desc"
    },
    {
     "q": "85,321, 30,987, 12,654, 69,432, 8,765",
     "a": "85321, 69432, 30987, 12654, 8765",
     "type": "order-desc"
    },
    {
     "q": "74,890, 22,199, 51,360, 7,654, 14,298",
     "a": "74890, 51360, 22199, 14298, 7654",
     "type": "order-desc"
    },
    {
     "q": "99,123, 13,567, 65,432, 28,890, 5,678",
     "a": "99123, 65432, 28890, 13567, 5678",
     "type": "order-desc"
    },
    {
     "q": "43,210, 16,789, 9,012, 61,054, 2,345",
     "a": "61054, 43210, 16789, 9012, 2345",
     "type": "order-desc"
    },
    {
     "q": "89,432, 31,210, 55,876, 7,109, 12,456",
     "a": "89432, 55876, 31210, 12456, 7109",
     "type": "order-desc"
    },
    {
     "q": "77,210, 24,568, 48,903, 3,867, 19,001",
     "a": "77210, 48903, 24568, 19001, 3867",
     "type": "order-desc"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Arrange in increasing order: 52,140, 9,087, 31,276, 7,450, 68,903",
     "steps": [
      "Two numbers have only 4 digits, 9,087 and 7,450, so they are the smallest. Between them 7 is less than 9, so 7,450 comes first.",
      "The 5 digit numbers are 31,276, 52,140 and 68,903. Their leftmost digits are 3, 5 and 6.",
      "Write the 4 digit ones first, then the 5 digit ones from smallest to biggest."
     ],
     "a": "7,450, 9,087, 31,276, 52,140, 68,903"
    },
    {
     "q": "Arrange in decreasing order: 24,619, 80,357, 6,948, 47,205, 13,860",
     "steps": [
      "Only 6,948 has 4 digits, so it is the smallest and goes last.",
      "For the 5 digit numbers compare the leftmost digits: 2, 8, 4 and 1.",
      "Biggest first: 80,357, then 47,205, then 24,619, then 13,860, then 6,948."
     ],
     "a": "80,357, 47,205, 24,619, 13,860, 6,948"
    },
    {
     "q": "Arrange in increasing order: 43,512, 43,215, 43,125, 43,521, 43,152",
     "steps": [
      "All five begin with 43, so move to the third digit: 5, 2, 1, 5, 1.",
      "The two with 1 are 43,125 and 43,152. Their next digits are 2 and 5, so 43,125 is smaller.",
      "Next comes 43,215. The two with 5 are 43,512 and 43,521, and their next digits are 1 and 2, so 43,512 comes first."
     ],
     "a": "43,125, 43,152, 43,215, 43,512, 43,521"
    }
   ]
  },
  {
   "n": 34,
   "title": "Ordering Numbers in Increasing or Decreasing Order",
   "concept": "Increasing order runs from smallest to biggest and decreasing order runs from biggest to smallest, so check which one is asked before you start. A quick way is to group the numbers by how many digits they have, then sort each group by the leftmost digit. When two numbers begin with the same digit, keep stepping one place to the right until the digits are different. Finish by counting that you wrote all five numbers, with none repeated and none missing.",
   "example": "",
   "instruction": "Order Numbers in Increasing or Decreasing Order. (Left column (No. 1-13) = Order Increasing; Right column (No. 14-26) = Order Decreasing.)",
   "items": [
    {
     "q": "7,654, 23,110, 65,432, 12,208, 98,765",
     "a": "7654, 12208, 23110, 65432, 98765",
     "type": "order-asc"
    },
    {
     "q": "33,210, 15,678, 72,901, 4,567, 27,890",
     "a": "4567, 15678, 27890, 33210, 72901",
     "type": "order-asc"
    },
    {
     "q": "5,432, 81,234, 16,789, 24,302, 9,876",
     "a": "5432, 9876, 16789, 24302, 81234",
     "type": "order-asc"
    },
    {
     "q": "60,501, 14,234, 39,800, 27,345, 7,678",
     "a": "7678, 14234, 27345, 39800, 60501",
     "type": "order-asc"
    },
    {
     "q": "45,610, 2,345, 91,230, 30,456, 11,789",
     "a": "2345, 11789, 30456, 45610, 91230",
     "type": "order-asc"
    },
    {
     "q": "25,678, 70,123, 8,910, 44,333, 17,654",
     "a": "8910, 17654, 25678, 44333, 70123",
     "type": "order-asc"
    },
    {
     "q": "13,579, 62,480, 9,321, 51,903, 22,710",
     "a": "9321, 13579, 22710, 51903, 62480",
     "type": "order-asc"
    },
    {
     "q": "86,100, 31,245, 15,899, 42,876, 6,544",
     "a": "6544, 15899, 31245, 42876, 86100",
     "type": "order-asc"
    },
    {
     "q": "77,709, 4,321, 68,540, 29,876, 12,345",
     "a": "4321, 12345, 29876, 68540, 77709",
     "type": "order-asc"
    },
    {
     "q": "18,765, 59,320, 23,456, 90,011, 7,899",
     "a": "7899, 18765, 23456, 59320, 90011",
     "type": "order-asc"
    },
    {
     "q": "22,477, 71,095, 3,468, 84,230, 16,052",
     "a": "3468, 16052, 22477, 71095, 84230",
     "type": "order-asc"
    },
    {
     "q": "50,901, 19,345, 63,654, 2,789, 30,210",
     "a": "2789, 19345, 30210, 50901, 63654",
     "type": "order-asc"
    },
    {
     "q": "8,234, 41,678, 26,135, 55,400, 13,912",
     "a": "8234, 13912, 26135, 41678, 55400",
     "type": "order-asc"
    },
    {
     "q": "91,203, 42,567, 15,678, 73,999, 6,321",
     "a": "91203, 73999, 42567, 15678, 6321",
     "type": "order-desc"
    },
    {
     "q": "34,210, 8,765, 62,300, 21,987, 11,456",
     "a": "62300, 34210, 21987, 11456, 8765",
     "type": "order-desc"
    },
    {
     "q": "88,120, 27,799, 60,234, 13,045, 7,890",
     "a": "88120, 60234, 27799, 13045, 7890",
     "type": "order-desc"
    },
    {
     "q": "2,345, 76,891, 40,300, 18,654, 9,210",
     "a": "76891, 40300, 18654, 9210, 2345",
     "type": "order-desc"
    },
    {
     "q": "58,432, 6,789, 93,100, 24,567, 33,890",
     "a": "93100, 58432, 33890, 24567, 6789",
     "type": "order-desc"
    },
    {
     "q": "16,980, 41,222, 73,450, 12,309, 5,678",
     "a": "73450, 41222, 16980, 12309, 5678",
     "type": "order-desc"
    },
    {
     "q": "64,753, 29,301, 11,045, 50,670, 3,210",
     "a": "64753, 50670, 29301, 11045, 3210",
     "type": "order-desc"
    },
    {
     "q": "7,899, 90,888, 25,410, 14,999, 6,654",
     "a": "90888, 25410, 14999, 7899, 6654",
     "type": "order-desc"
    },
    {
     "q": "52,109, 31,875, 2,456, 69,000, 17,650",
     "a": "69000, 52109, 31875, 17650, 2456",
     "type": "order-desc"
    },
    {
     "q": "44,321, 9,876, 70,555, 20,110, 1,234",
     "a": "70555, 44321, 20110, 9876, 1234",
     "type": "order-desc"
    },
    {
     "q": "96,010, 13,245, 8,679, 61,432, 27,890",
     "a": "96010, 61432, 27890, 13245, 8679",
     "type": "order-desc"
    },
    {
     "q": "38,421, 72,678, 4,999, 19,805, 53,210",
     "a": "72678, 53210, 38421, 19805, 4999",
     "type": "order-desc"
    },
    {
     "q": "66,777, 22,344, 85,910, 3,567, 47,123",
     "a": "85910, 66777, 47123, 22344, 3567",
     "type": "order-desc"
    }
   ],
   "ordered": true,
   "rev": 1,
   "examples": [
    {
     "q": "Arrange in increasing order: 3,205, 64,180, 19,472, 8,736, 50,019",
     "steps": [
      "Group by size: 3,205 and 8,736 have 4 digits, the other three have 5.",
      "Among the 4 digit numbers, 3 is less than 8, so 3,205 comes before 8,736.",
      "The 5 digit numbers start with 1, 5 and 6, so the order is 19,472, then 50,019, then 64,180."
     ],
     "a": "3,205, 8,736, 19,472, 50,019, 64,180"
    },
    {
     "q": "Arrange in decreasing order: 71,083, 7,910, 71,830, 17,009, 71,038",
     "steps": [
      "7,910 has only 4 digits, so it is the smallest and goes last.",
      "17,009 starts with 1 while the others start with 7, so it is next to last.",
      "Three numbers begin with 71. Compare the third digit: 0, 8, 0. So 71,830 is the biggest of them.",
      "For 71,083 and 71,038 compare the fourth digit, 8 against 3, so 71,083 is bigger."
     ],
     "a": "71,830, 71,083, 71,038, 17,009, 7,910"
    },
    {
     "q": "Arrange in increasing order: 2,468, 24,680, 4,268, 42,860, 20,486",
     "steps": [
      "The 4 digit numbers are 2,468 and 4,268, and 2,468 is smaller.",
      "The 5 digit numbers begin with 2, 4 and 2, so 42,860 is the biggest.",
      "For 24,680 and 20,486 compare the second digit, 4 against 0, so 20,486 comes first."
     ],
     "a": "2,468, 4,268, 20,486, 24,680, 42,860"
    }
   ]
  }
 ],
 "g5": [
  {
   "n": 1,
   "title": "Visualizing Numbers",
   "concept": "Each block has its own number printed inside it: 1, 10, 100, 1,000, 10,000 or 50,000. A block is worth exactly what is written on it, no matter where it sits on the page. So count how many blocks of each kind you see, multiply each count by the number printed on it, then add everything together. Start with the biggest blocks and work down to the smallest, so nothing gets missed.",
   "example": "",
   "instruction": "On the space provided, write the total amount equivalent to the objects shown.",
   "items": [
    {
     "q": "What number do the blocks show?",
     "a": "21220",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "12310",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "11321",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "4200",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 4
       },
       {
        "value": 100,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "10233",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 3
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "21112",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "10331",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "4022",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 4
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "13201",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "2323",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 3
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "3122",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "10240",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 4
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "11124",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 4
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "2411",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 4
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "22110",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "12222",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "11111",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "1312",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "521",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 100,
        "count": 5
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "11303",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 1,
        "count": 3
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "1321",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "13211",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "40111",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 4
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "2312",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "11221",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "21212",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "3131",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "12111",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "31211",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 3
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "333",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 3
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "1501",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 5
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "12222",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "12212",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "2322",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "21311",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "3123",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 3
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "10331",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 100,
        "count": 3
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "23020",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 10,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "423",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 100,
        "count": 4
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 3
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "11211",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "30221",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 3
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "1412",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 4
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "13210",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "234",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 4
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "21121",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "80112",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 50000,
        "count": 1
       },
       {
        "value": 10000,
        "count": 3
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "90210",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 50000,
        "count": 1
       },
       {
        "value": 10000,
        "count": 4
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 1
       }
      ]
     }
    },
    {
     "q": "What number do the blocks show?",
     "a": "92110",
     "type": "key",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 50000,
        "count": 1
       },
       {
        "value": 10000,
        "count": 4
       },
       {
        "value": 1000,
        "count": 2
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 1
       }
      ]
     }
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "What number is this?",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 1
       },
       {
        "value": 10,
        "count": 4
       }
      ]
     },
     "steps": [
      "Read what is printed inside each circle and group them, largest first.",
      "2 x 10000 = 20000 and 3 x 1000 = 3000.",
      "1 x 100 = 100 and 4 x 10 = 40.",
      "20000 + 3000 + 100 + 40 = 23140"
     ],
     "a": "23140"
    },
    {
     "q": "What is the total value shown?",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 1000,
        "count": 3
       },
       {
        "value": 100,
        "count": 4
       },
       {
        "value": 1,
        "count": 2
       }
      ]
     },
     "steps": [
      "3 x 1000 = 3000 and 4 x 100 = 400.",
      "Nothing is marked 10, so the tens place is 0.",
      "2 x 1 = 2.",
      "3000 + 400 + 0 + 2 = 3402"
     ],
     "a": "3402"
    },
    {
     "q": "What number is shown here?",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 1
       },
       {
        "value": 1000,
        "count": 1
       },
       {
        "value": 100,
        "count": 2
       },
       {
        "value": 10,
        "count": 3
       },
       {
        "value": 1,
        "count": 4
       }
      ]
     },
     "steps": [
      "Every place has at least one circle here, so no place is 0.",
      "1 x 10000 = 10000 and 1 x 1000 = 1000.",
      "2 x 100 = 200, 3 x 10 = 30, 4 x 1 = 4.",
      "10000 + 1000 + 200 + 30 + 4 = 11234"
     ],
     "a": "11234"
    },
    {
     "q": "What number do these make?",
     "fig": {
      "kind": "bundle",
      "units": [
       {
        "value": 10000,
        "count": 2
       },
       {
        "value": 10,
        "count": 2
       },
       {
        "value": 1,
        "count": 3
       }
      ]
     },
     "steps": [
      "2 x 10000 = 20000.",
      "Check each place. There is nothing marked 1000 and nothing marked 100, so both are 0.",
      "2 x 10 = 20 and 3 x 1 = 3.",
      "20000 + 0 + 0 + 20 + 3 = 20023"
     ],
     "a": "20023"
    }
   ]
  },
  {
   "n": 3,
   "title": "Finding the Value and Place Value of a Digit",
   "concept": "Every digit has a seat called its place value, and counting from the right the seats are ones, tens, hundreds, thousands, ten thousands. The value of a digit is what it is really worth in that seat, which is the digit times its place. So in 27,634 the 6 sits in the hundreds place and its value is 600. Point at the digits from the right and name the seats out loud until you reach the digit being asked about.",
   "example": "",
   "instruction": "Find the value and place value of each digit. (Parts 2-3: Determine and write the value and place value of a specified digit in each number.)",
   "items": [
    {
     "q": "5 in 29,151",
     "a": "50 tens",
     "type": "key"
    },
    {
     "q": "1 in 54,251",
     "a": "1 ones",
     "type": "key"
    },
    {
     "q": "8 in 86,172",
     "a": "80,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "3 in 38,758",
     "a": "30,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "7 in 72,838",
     "a": "70,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 in 90,512",
     "a": "500 hundreds",
     "type": "key"
    },
    {
     "q": "5 in 54,418",
     "a": "50,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "8 in 85,371",
     "a": "80,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "1 in 51,523",
     "a": "1,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 in 24,655",
     "a": "20,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 62,545",
     "a": "40 tens",
     "type": "key"
    },
    {
     "q": "6 in 64,782",
     "a": "60,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 47,967",
     "a": "40,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "9 in 11,947",
     "a": "900 hundreds",
     "type": "key"
    },
    {
     "q": "8 in 56,784",
     "a": "80 tens",
     "type": "key"
    },
    {
     "q": "5 in 5,319",
     "a": "5,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "7 in 87,340",
     "a": "7,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "1 in 84,155",
     "a": "100 hundreds",
     "type": "key"
    },
    {
     "q": "9 in 97,323",
     "a": "90,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "3 in 94,399",
     "a": "300 hundreds",
     "type": "key"
    },
    {
     "q": "3 in 93,879",
     "a": "3,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "3 in 35,181",
     "a": "30,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "3 in 1,397",
     "a": "300 hundreds",
     "type": "key"
    },
    {
     "q": "3 in 41,213",
     "a": "3 ones",
     "type": "key"
    },
    {
     "q": "3 in 89,938",
     "a": "30 tens",
     "type": "key"
    },
    {
     "q": "5 in 58,916",
     "a": "50,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 in 35,090",
     "a": "5,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "5 in 9,095",
     "a": "5 ones",
     "type": "key"
    },
    {
     "q": "5 in 21,531",
     "a": "500 hundreds",
     "type": "key"
    },
    {
     "q": "5 in 23,451",
     "a": "50 tens",
     "type": "key"
    },
    {
     "q": "6 in 97,162",
     "a": "60 tens",
     "type": "key"
    },
    {
     "q": "6 in 21,746",
     "a": "6 ones",
     "type": "key"
    },
    {
     "q": "6 in 60,531",
     "a": "60,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "6 in 46,810",
     "a": "6,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "6 in 6,324",
     "a": "6,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "9 in 9,412",
     "a": "9,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "9 in 91,578",
     "a": "90,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "9 in 29,122",
     "a": "9,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "9 in 41,955",
     "a": "900 hundreds",
     "type": "key"
    },
    {
     "q": "9 in 74,129",
     "a": "9 ones",
     "type": "key"
    },
    {
     "q": "2 in 42,718",
     "a": "2,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 in 26,531",
     "a": "20,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 in 72,946",
     "a": "2,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "2 in 13,215",
     "a": "200 hundreds",
     "type": "key"
    },
    {
     "q": "2 in 80,462",
     "a": "2 ones",
     "type": "key"
    },
    {
     "q": "7 in 37,501",
     "a": "7,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "7 in 67,284",
     "a": "7,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "7 in 19,763",
     "a": "700 hundreds",
     "type": "key"
    },
    {
     "q": "7 in 74,095",
     "a": "70,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "7 in 87,630",
     "a": "7,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 84,259",
     "a": "4,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 14,837",
     "a": "4,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 64,701",
     "a": "4,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 42,963",
     "a": "40,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 in 35,124",
     "a": "4 ones",
     "type": "key"
    },
    {
     "q": "8 in 18,526",
     "a": "8,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "8 in 68,341",
     "a": "8,000 thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "8 in 82,769",
     "a": "80,000 ten thousands",
     "type": "key",
     "seq": true
    },
    {
     "q": "8 in 90,483",
     "a": "80 tens",
     "type": "key"
    },
    {
     "q": "8 in 28,150",
     "a": "8,000 thousands",
     "type": "key",
     "seq": true
    }
   ],
   "ordered": true,
   "rev": 1,
   "examples": [
    {
     "q": "6 in 36,418",
     "steps": [
      "Name the seats from the right: 8 ones, 1 ten, 4 hundreds, 6 thousands, 3 ten thousands.",
      "The 6 landed in the thousands seat, so its place value is thousands.",
      "Its value is 6 x 1,000 = 6,000."
     ],
     "a": "6,000 thousands"
    },
    {
     "q": "2 in 45,239",
     "steps": [
      "From the right: 9 ones, 3 tens, 2 hundreds, 5 thousands, 4 ten thousands.",
      "The 2 is in the hundreds place.",
      "Its value is 2 x 100 = 200."
     ],
     "a": "200 hundreds"
    },
    {
     "q": "5 in 3,675",
     "steps": [
      "From the right: 5 ones, 7 tens, 6 hundreds, 3 thousands.",
      "The 5 is the very last digit, so it sits in the ones place.",
      "Its value is 5 x 1 = 5."
     ],
     "a": "5 ones"
    },
    {
     "q": "8 in 80,214",
     "steps": [
      "From the right: 4 ones, 1 ten, 2 hundreds, 0 thousands, 8 ten thousands.",
      "The 8 is the first digit, in the ten thousands place.",
      "Its value is 8 x 10,000 = 80,000."
     ],
     "a": "80,000 ten thousands"
    }
   ]
  },
  {
   "n": 4,
   "title": "Determining the Value of a Digit based on Place Value",
   "concept": "Here the place is already given to you, so your job is to find the digit sitting in that seat and say how much it is worth. Count the seats from the right: ones, tens, hundreds, thousands, ten thousands. Once you find the digit, write it with one zero for every seat to its right. If the digit in that seat is 0, then the value is simply 0.",
   "example": "",
   "instruction": "Give the value of the number corresponding to the given place value.",
   "items": [
    {
     "q": "64,259 (ones)",
     "a": "9",
     "type": "key"
    },
    {
     "q": "64,259 (ten thousands)",
     "a": "60,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "64,259 (tens)",
     "a": "50",
     "type": "key"
    },
    {
     "q": "64,259 (hundreds)",
     "a": "200",
     "type": "key"
    },
    {
     "q": "64,259 (thousands)",
     "a": "4,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "49,402 (hundreds)",
     "a": "400",
     "type": "key"
    },
    {
     "q": "49,402 (tens)",
     "a": "0",
     "type": "key"
    },
    {
     "q": "49,402 (ones)",
     "a": "2",
     "type": "key"
    },
    {
     "q": "49,402 (ten thousands)",
     "a": "40,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "49,402 (thousands)",
     "a": "9,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "3,546 (thousands)",
     "a": "3,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "3,546 (hundreds)",
     "a": "500",
     "type": "key"
    },
    {
     "q": "3,546 (tens)",
     "a": "40",
     "type": "key"
    },
    {
     "q": "3,546 (ones)",
     "a": "6",
     "type": "key"
    },
    {
     "q": "93,546 (tens)",
     "a": "40",
     "type": "key"
    },
    {
     "q": "93,546 (thousands)",
     "a": "3,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "93,546 (ten thousands)",
     "a": "90,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "93,546 (hundreds)",
     "a": "500",
     "type": "key"
    },
    {
     "q": "93,546 (ones)",
     "a": "6",
     "type": "key"
    },
    {
     "q": "1,234 (ones)",
     "a": "4",
     "type": "key"
    },
    {
     "q": "1,234 (hundreds)",
     "a": "200",
     "type": "key"
    },
    {
     "q": "1,234 (tens)",
     "a": "30",
     "type": "key"
    },
    {
     "q": "1,234 (thousands)",
     "a": "1,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "17,382 (ten thousands)",
     "a": "10,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "17,382 (thousands)",
     "a": "7,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "17,382 (tens)",
     "a": "80",
     "type": "key"
    },
    {
     "q": "17,382 (ones)",
     "a": "2",
     "type": "key"
    },
    {
     "q": "17,382 (hundreds)",
     "a": "300",
     "type": "key"
    },
    {
     "q": "70,615 (thousands)",
     "a": "0",
     "type": "key"
    },
    {
     "q": "70,615 (hundreds)",
     "a": "600",
     "type": "key"
    },
    {
     "q": "70,615 (ones)",
     "a": "5",
     "type": "key"
    },
    {
     "q": "70,615 (ten thousands)",
     "a": "70,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "70,615 (tens)",
     "a": "10",
     "type": "key"
    },
    {
     "q": "8,190 (hundreds)",
     "a": "100",
     "type": "key"
    },
    {
     "q": "8,190 (ones)",
     "a": "0",
     "type": "key"
    },
    {
     "q": "8,190 (tens)",
     "a": "90",
     "type": "key"
    },
    {
     "q": "8,190 (thousands)",
     "a": "8,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "25,971 (ten thousands)",
     "a": "20,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "25,971 (thousands)",
     "a": "5,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "25,971 (hundreds)",
     "a": "900",
     "type": "key"
    },
    {
     "q": "25,971 (ones)",
     "a": "1",
     "type": "key"
    },
    {
     "q": "25,971 (tens)",
     "a": "70",
     "type": "key"
    },
    {
     "q": "9,403 (tens)",
     "a": "0",
     "type": "key"
    },
    {
     "q": "9,403 (hundreds)",
     "a": "400",
     "type": "key"
    },
    {
     "q": "9,403 (thousands)",
     "a": "9,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "9,403 (ones)",
     "a": "3",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "In 57,318, give the value of the digit in the thousands place.",
     "steps": [
      "Label from the right: 8 ones, 1 ten, 3 hundreds, 7 thousands, 5 ten thousands.",
      "The thousands seat holds 7.",
      "Write 7 with three zeros after it: 7,000."
     ],
     "a": "7,000"
    },
    {
     "q": "In 6,205, give the value of the digit in the tens place.",
     "steps": [
      "Label from the right: 5 ones, 0 tens, 2 hundreds, 6 thousands.",
      "The tens seat holds 0.",
      "0 x 10 = 0, so the value is 0."
     ],
     "a": "0"
    },
    {
     "q": "In 82,470, give the value of the digit in the ten thousands place.",
     "steps": [
      "Label from the right: 0 ones, 7 tens, 4 hundreds, 2 thousands, 8 ten thousands.",
      "The ten thousands seat holds 8.",
      "Write 8 with four zeros after it: 80,000."
     ],
     "a": "80,000"
    }
   ]
  },
  {
   "n": 5,
   "title": "Determining the Value of a Digit based on Place Value and Vice Versa",
   "concept": "The seats keep going as numbers get longer, and from the right they are ones, tens, hundreds, thousands, ten thousands, hundred thousands. When a place is named, find the digit sitting there and write it with one zero for each seat to its right. A 0 in the named seat means the value is just 0. It works backwards too, so a digit worth 4,000 is sitting in the thousands place.",
   "example": "",
   "instruction": "Give the value of the number corresponding to the given place value.",
   "items": [
    {
     "q": "64,875 (ten thousands)",
     "a": "60,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "87,443 (hundreds)",
     "a": "400",
     "type": "key"
    },
    {
     "q": "100,000 (hundred thousands)",
     "a": "100,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "20,534 (ones)",
     "a": "4",
     "type": "key"
    },
    {
     "q": "83,021 (tens)",
     "a": "20",
     "type": "key"
    },
    {
     "q": "21,108 (ten thousands)",
     "a": "20,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "63,921 (hundreds)",
     "a": "900",
     "type": "key"
    },
    {
     "q": "94,124 (thousands)",
     "a": "4,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "5,912 (hundreds)",
     "a": "900",
     "type": "key"
    },
    {
     "q": "15,773 (ones)",
     "a": "3",
     "type": "key"
    },
    {
     "q": "74,694 (ones)",
     "a": "4",
     "type": "key"
    },
    {
     "q": "28,455 (tens)",
     "a": "50",
     "type": "key"
    },
    {
     "q": "77,722 (ten thousands)",
     "a": "70,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "95,857 (hundreds)",
     "a": "800",
     "type": "key"
    },
    {
     "q": "8,112 (hundreds)",
     "a": "100",
     "type": "key"
    },
    {
     "q": "31,627 (ten thousands)",
     "a": "30,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "54,614 (thousands)",
     "a": "4,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "24,712 (ten thousands)",
     "a": "20,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "1,237 (ones)",
     "a": "7",
     "type": "key"
    },
    {
     "q": "32,114 (tens)",
     "a": "10",
     "type": "key"
    },
    {
     "q": "5,732 (hundreds)",
     "a": "700",
     "type": "key"
    },
    {
     "q": "64,421 (hundreds)",
     "a": "400",
     "type": "key"
    },
    {
     "q": "89,365 (tens)",
     "a": "60",
     "type": "key"
    },
    {
     "q": "45,188 (ten thousands)",
     "a": "40,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "25,714 (ten thousands)",
     "a": "20,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "76,438 (hundreds)",
     "a": "400",
     "type": "key"
    },
    {
     "q": "13,907 (thousands)",
     "a": "3,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "92,315 (ones)",
     "a": "5",
     "type": "key"
    },
    {
     "q": "8,642 (tens)",
     "a": "40",
     "type": "key"
    },
    {
     "q": "43,120 (ten thousands)",
     "a": "40,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "55,209 (hundreds)",
     "a": "200",
     "type": "key"
    },
    {
     "q": "67,818 (hundreds)",
     "a": "800",
     "type": "key"
    },
    {
     "q": "2,319 (ones)",
     "a": "9",
     "type": "key"
    },
    {
     "q": "71,463 (tens)",
     "a": "60",
     "type": "key"
    },
    {
     "q": "96,580 (thousands)",
     "a": "6,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "19,237 (ten thousands)",
     "a": "10,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "5,824 (hundreds)",
     "a": "800",
     "type": "key"
    },
    {
     "q": "38,619 (ones)",
     "a": "9",
     "type": "key"
    },
    {
     "q": "14,256 (tens)",
     "a": "50",
     "type": "key"
    },
    {
     "q": "84,372 (hundreds)",
     "a": "300",
     "type": "key"
    },
    {
     "q": "62,905 (ten thousands)",
     "a": "60,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "7,531 (thousands)",
     "a": "7,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "29,847 (ones)",
     "a": "7",
     "type": "key"
    },
    {
     "q": "91,208 (hundreds)",
     "a": "200",
     "type": "key"
    },
    {
     "q": "36,741 (tens)",
     "a": "40",
     "type": "key"
    },
    {
     "q": "48,203 (hundreds)",
     "a": "200",
     "type": "key"
    },
    {
     "q": "73,690 (ten thousands)",
     "a": "70,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "2,146 (ones)",
     "a": "6",
     "type": "key"
    },
    {
     "q": "85,509 (thousands)",
     "a": "5,000",
     "type": "key",
     "seq": true
    },
    {
     "q": "60,934 (hundreds)",
     "a": "900",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "In 9,047, give the value of the digit in the hundreds place.",
     "steps": [
      "From the right: 7 ones, 4 tens, 0 hundreds, 9 thousands.",
      "The hundreds seat holds 0.",
      "So the value is 0."
     ],
     "a": "0"
    },
    {
     "q": "In 58,316, give the value of the digit in the ten thousands place.",
     "steps": [
      "From the right: 6 ones, 1 ten, 3 hundreds, 8 thousands, 5 ten thousands.",
      "The ten thousands seat holds 5.",
      "Write 5 with four zeros after it: 50,000."
     ],
     "a": "50,000"
    },
    {
     "q": "In 406,215, give the value of the digit in the hundred thousands place.",
     "steps": [
      "From the right: 5 ones, 1 ten, 2 hundreds, 6 thousands, 0 ten thousands, 4 hundred thousands.",
      "The hundred thousands seat holds 4.",
      "Write 4 with five zeros after it: 400,000."
     ],
     "a": "400,000"
    }
   ]
  },
  {
   "n": 6,
   "title": "Writing Numbers in Words and Vice Versa",
   "concept": "Writing Numbers in Words and Vice Versa. When writing worded numbers in numerical form, use comma to separate the periods (groups of three digits) of the number - thousands from units, millions from thousands, billions from millions, and so on. When writing numbers in words, follow these rules: Use hyphen to separate words ending with 'y' from the next word (Example: twenty-one; One hundred sixty-five). Use 'and' only when separating whole numbers from decimals. Don't use it to separate hundreds from tens. Correct: six hundred seventy-nine; Incorrect: six hundred and seventy-nine.",
   "example": "97,304 - Ninety-seven thousand, three hundred four.",
   "instruction": "Part 1: Write the following numerals in words. Part 2: Write the following worded numbers in numerals.",
   "items": [
    {
     "q": "1,357",
     "a": "one thousand three hundred fifty-seven",
     "type": "num-to-words"
    },
    {
     "q": "13,332",
     "a": "thirteen thousand three hundred thirty-two",
     "type": "num-to-words"
    },
    {
     "q": "23,017",
     "a": "twenty-three thousand seventeen",
     "type": "num-to-words"
    },
    {
     "q": "49,012",
     "a": "forty-nine thousand twelve",
     "type": "num-to-words"
    },
    {
     "q": "67,887",
     "a": "sixty-seven thousand eight hundred eighty-seven",
     "type": "num-to-words"
    },
    {
     "q": "90,187",
     "a": "ninety thousand one hundred eighty-seven",
     "type": "num-to-words"
    },
    {
     "q": "11,320",
     "a": "eleven thousand three hundred twenty",
     "type": "num-to-words"
    },
    {
     "q": "21,207",
     "a": "twenty-one thousand two hundred seven",
     "type": "num-to-words"
    },
    {
     "q": "42,894",
     "a": "forty-two thousand eight hundred ninety-four",
     "type": "num-to-words"
    },
    {
     "q": "33,696",
     "a": "thirty-three thousand six hundred ninety-six",
     "type": "num-to-words"
    },
    {
     "q": "43,444",
     "a": "forty-three thousand four hundred forty-four",
     "type": "num-to-words"
    },
    {
     "q": "52,001",
     "a": "fifty-two thousand one",
     "type": "num-to-words"
    },
    {
     "q": "88,022",
     "a": "eighty-eight thousand twenty-two",
     "type": "num-to-words"
    },
    {
     "q": "68,848",
     "a": "sixty-eight thousand eight hundred forty-eight",
     "type": "num-to-words"
    },
    {
     "q": "87,226",
     "a": "eighty-seven thousand two hundred twenty-six",
     "type": "num-to-words"
    },
    {
     "q": "twelve thousand, six hundred seventy-one",
     "a": "12671",
     "type": "words-to-num"
    },
    {
     "q": "seventy-five thousand, six hundred eighty",
     "a": "75680",
     "type": "words-to-num"
    },
    {
     "q": "three thousand, ninety-two",
     "a": "3092",
     "type": "words-to-num"
    },
    {
     "q": "one hundred thousand",
     "a": "100000",
     "type": "words-to-num"
    },
    {
     "q": "thirteen thousand, seven hundred thirty-six",
     "a": "13736",
     "type": "words-to-num"
    },
    {
     "q": "fourteen thousand, two hundred forty-four",
     "a": "14244",
     "type": "words-to-num"
    },
    {
     "q": "six thousand, five hundred",
     "a": "6500",
     "type": "words-to-num"
    },
    {
     "q": "fifty-eight thousand, five hundred five",
     "a": "58505",
     "type": "words-to-num"
    },
    {
     "q": "fifty-two thousand, one hundred one",
     "a": "52101",
     "type": "words-to-num"
    },
    {
     "q": "fifteen thousand, three hundred nineteen",
     "a": "15319",
     "type": "words-to-num"
    },
    {
     "q": "seven hundred seventy-seven",
     "a": "777",
     "type": "words-to-num"
    },
    {
     "q": "eighty thousand, eighty-eight",
     "a": "80088",
     "type": "words-to-num"
    },
    {
     "q": "nine thousand, nine hundred ninety",
     "a": "9990",
     "type": "words-to-num"
    },
    {
     "q": "one thousand, one hundred ten",
     "a": "1110",
     "type": "words-to-num"
    },
    {
     "q": "ninety-nine thousand, nine hundred nineteen",
     "a": "99919",
     "type": "words-to-num"
    },
    {
     "q": "three thousand, two hundred twelve",
     "a": "3212",
     "type": "words-to-num"
    },
    {
     "q": "thirteen thousand, thirteen",
     "a": "13013",
     "type": "words-to-num"
    },
    {
     "q": "five hundred twenty eight",
     "a": "528",
     "type": "words-to-num"
    },
    {
     "q": "eighteen thousand, six hundred fifty-two",
     "a": "18652",
     "type": "words-to-num"
    },
    {
     "q": "fourteen thousand, seventeen",
     "a": "14017",
     "type": "words-to-num"
    }
   ]
  },
  {
   "n": 7,
   "title": "Comparing Numbers Using Relation Symbols",
   "concept": "You cannot compare words with digits, so change the words into digits first, and read them carefully: forty thousand, six means 40,006 and not 40,600. Once both are in digits, the number with more digits is the bigger one. If they have the same number of digits, compare from the left, place by place, and stop at the first place where the digits differ. Use > if the left number is bigger, < if it is smaller, and = if every place matches.",
   "example": "",
   "instruction": "Compare Numbers Using Relation Symbols. Write each number in words or digits. Then, encircle the correct symbol (>, <, or =) to compare them.",
   "items": [
    {
     "q": "forty-two thousand, three hundred _ 42,300",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "15,678 _ fifteen thousand, six hundred seventy-eight",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "seventy thousand, five _ 69,995",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "8,204 _ eight thousand, two hundred forty",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "ninety-nine thousand, nine hundred _ 99,899",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "23,450 _ twenty-three thousand, four hundred forty-nine",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "sixty thousand, sixty _ 60,600",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "17,999 _ seventeen thousand, nine hundred ninety-nine",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "five thousand, five _ 5,050",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "83,120 _ eighty-three thousand, one hundred twenty",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "thirty-four thousand, seven hundred _ 35,000",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "10,010 _ ten thousand, nine",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "seventy-eight thousand, nine _ 78,900",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "46,789 _ forty-six thousand, seven hundred ninety",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "ninety thousand, ninety _ 89,999",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "24,001 _ twenty-four thousand, one",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "fifty-two thousand, five hundred _ 52,050",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "9,876 _ nine thousand, eight hundred seventy-six",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "one hundred thousand _ 99,999",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "31,235 _ thirty-one thousand, two hundred thirty-five",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "forty-three thousand, five hundred _ 43,050",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "27,458 _ twenty-seven thousand, five hundred sixty-two",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "ninety-one thousand, two hundred _ 91,200",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "56,780 _ fifty-six thousand, nine hundred",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "thirty-three thousand, two hundred _ 33,250",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "74,000 _ seventy-four thousand, eighty-nine",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "ninety-eight thousand, seven hundred twelve _ 98,712",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "63,029 _ sixty-three thousand, four hundred thirty-two",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "49,875 _ 50,000",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "ten thousand, nine hundred fifty-six _ 10,956",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "sixty-two thousand, three hundred _ 62,730",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "seventy-five thousand, nine hundred _ 75,901",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "48,672 _ forty-nine thousand, six hundred seventy-two",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "one hundred thousand _ 99,999",
     "a": ">",
     "type": "compare"
    },
    {
     "q": "67,504 _ sixty-seven thousand, seven hundred ninety",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "52,317 _ fifty-two thousand, three hundred twenty six",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "76,540 _ seventy-six thousand, six hundred forty-nine",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "85,600 _ eighty-five thousand, six hundred",
     "a": "=",
     "type": "compare"
    },
    {
     "q": "73,219 _ seventy-three thousand, three hundred twenty",
     "a": "<",
     "type": "compare"
    },
    {
     "q": "68,432 _ sixty-eight thousand, five hundred",
     "a": "<",
     "type": "compare"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "fifty-six thousand, forty _ 56,400",
     "steps": [
      "Fifty-six thousand, forty is 56,040, because forty is 4 tens and not 4 hundreds.",
      "Both have 5 digits, so compare from the left: 5 and 5 match, 6 and 6 match, then 0 against 4.",
      "0 is less than 4, so 56,040 is the smaller number."
     ],
     "a": "<"
    },
    {
     "q": "28,105 _ twenty-eight thousand, one hundred five",
     "steps": [
      "Twenty-eight thousand, one hundred five is 28,105.",
      "Compare place by place: 2 and 2, 8 and 8, 1 and 1, 0 and 0, 5 and 5.",
      "Every place matches, so the numbers are equal."
     ],
     "a": "="
    },
    {
     "q": "eighty thousand, two _ 79,998",
     "steps": [
      "Eighty thousand, two is 80,002.",
      "Both have 5 digits, so start from the left: 8 against 7.",
      "8 is greater than 7, so 80,002 is bigger. No need to check the other places."
     ],
     "a": ">"
    }
   ]
  },
  {
   "n": 8,
   "title": "Rounding Off to a Specific Place Value",
   "concept": "Rounding gives a near number that is easier to work with. Find the digit in the place you are rounding to, then look only at the one digit right after it: if that next digit is 5, 6, 7, 8 or 9, add 1 to your digit, and if it is 0, 1, 2, 3 or 4, leave your digit as it is. Either way, every digit after that place becomes 0. Never look past that one next digit, because it is the only one that decides.",
   "example": "",
   "instruction": "Round off each number to the indicated place value.",
   "items": [
    {
     "q": "86,854 to the nearest thousands",
     "a": "87,000",
     "type": "rounding"
    },
    {
     "q": "78,949 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "34,987 to the nearest thousands",
     "a": "35,000",
     "type": "rounding"
    },
    {
     "q": "84,531 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "35,724 to the nearest thousands",
     "a": "36,000",
     "type": "rounding"
    },
    {
     "q": "94,333 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "94,637 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "96,423 to the nearest thousands",
     "a": "96,000",
     "type": "rounding"
    },
    {
     "q": "34,706 to the nearest ten thousands",
     "a": "30,000",
     "type": "rounding"
    },
    {
     "q": "62,893 to the nearest thousands",
     "a": "63,000",
     "type": "rounding"
    },
    {
     "q": "84,241 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "98,569 to the nearest thousands",
     "a": "99,000",
     "type": "rounding"
    },
    {
     "q": "45,139 to the nearest ten thousands",
     "a": "50,000",
     "type": "rounding"
    },
    {
     "q": "48,557 to the nearest ten thousands",
     "a": "50,000",
     "type": "rounding"
    },
    {
     "q": "24,558 to the nearest thousands",
     "a": "25,000",
     "type": "rounding"
    },
    {
     "q": "46,476 to the nearest thousands",
     "a": "46,000",
     "type": "rounding"
    },
    {
     "q": "34,671 to the nearest thousands",
     "a": "35,000",
     "type": "rounding"
    },
    {
     "q": "40,194 to the nearest ten thousands",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "44,388 to the nearest thousands",
     "a": "44,000",
     "type": "rounding"
    },
    {
     "q": "98,433 to the nearest ten thousands",
     "a": "100,000",
     "type": "rounding"
    },
    {
     "q": "25,199 to the nearest thousands",
     "a": "25,000",
     "type": "rounding"
    },
    {
     "q": "2,999 to the nearest thousands",
     "a": "3,000",
     "type": "rounding"
    },
    {
     "q": "48,214 to the nearest ten thousands",
     "a": "50,000",
     "type": "rounding"
    },
    {
     "q": "82,262 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "38,238 to the nearest ten thousands",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "67,842 to the nearest thousands",
     "a": "68,000",
     "type": "rounding"
    },
    {
     "q": "28,719 to the nearest ten thousands",
     "a": "30,000",
     "type": "rounding"
    },
    {
     "q": "43,586 to the nearest thousands",
     "a": "44,000",
     "type": "rounding"
    },
    {
     "q": "91,765 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "36,294 to the nearest thousands",
     "a": "36,000",
     "type": "rounding"
    },
    {
     "q": "75,683 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "19,457 to the nearest thousands",
     "a": "19,000",
     "type": "rounding"
    },
    {
     "q": "82,918 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "29,134 to the nearest thousands",
     "a": "29,000",
     "type": "rounding"
    },
    {
     "q": "64,975 to the nearest ten thousands",
     "a": "60,000",
     "type": "rounding"
    },
    {
     "q": "88,230 to the nearest thousands",
     "a": "88,000",
     "type": "rounding"
    },
    {
     "q": "37,868 to the nearest ten thousands",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "66,511 to the nearest thousands",
     "a": "67,000",
     "type": "rounding"
    },
    {
     "q": "73,049 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "24,365 to the nearest thousands",
     "a": "24,000",
     "type": "rounding"
    },
    {
     "q": "95,672 to the nearest ten thousands",
     "a": "100,000",
     "type": "rounding"
    },
    {
     "q": "41,286 to the nearest thousands",
     "a": "41,000",
     "type": "rounding"
    },
    {
     "q": "58,947 to the nearest ten thousands",
     "a": "60,000",
     "type": "rounding"
    },
    {
     "q": "33,418 to the nearest thousands",
     "a": "33,000",
     "type": "rounding"
    },
    {
     "q": "79,304 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "21,657 to the nearest thousands",
     "a": "22,000",
     "type": "rounding"
    },
    {
     "q": "86,123 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "14,892 to the nearest thousands",
     "a": "15,000",
     "type": "rounding"
    },
    {
     "q": "92,605 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "27,531 to the nearest thousands",
     "a": "28,000",
     "type": "rounding"
    }
   ],
   "round": true,
   "rev": 1,
   "examples": [
    {
     "q": "Round 53,462 to the nearest thousands.",
     "steps": [
      "The thousands digit in 53,462 is 3.",
      "The digit right after it is 4, which is less than 5, so the 3 stays.",
      "Change everything after it to zeros: 53,000."
     ],
     "a": "53,000"
    },
    {
     "q": "Round 67,180 to the nearest ten thousands.",
     "steps": [
      "The ten thousands digit in 67,180 is 6.",
      "The digit right after it is 7, which is 5 or more, so 6 becomes 7.",
      "Change everything after it to zeros: 70,000."
     ],
     "a": "70,000"
    },
    {
     "q": "Round 29,738 to the nearest thousands.",
     "steps": [
      "The thousands digit in 29,738 is 9.",
      "The next digit is 7, so round up. Adding 1 to 29 thousands gives 30 thousands.",
      "Write zeros after it: 30,000."
     ],
     "a": "30,000"
    }
   ]
  },
  {
   "n": 9,
   "title": "Rounding Off to a Specific Place Value",
   "concept": "Rounding gives you a nearby number that is easier to say and work with. Find the place you are asked to round to, then look only at the one digit directly to its right. If that digit is 5 or more, add 1 to the digit in your place; if it is 4 or less, leave that digit alone. Either way, every digit after that place turns into 0.",
   "example": "",
   "instruction": "Round off each number to the indicated place value.",
   "items": [
    {
     "q": "37,684 to the nearest thousands",
     "a": "38,000",
     "type": "rounding"
    },
    {
     "q": "65,429 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "82,915 to the nearest thousands",
     "a": "83,000",
     "type": "rounding"
    },
    {
     "q": "14,237 to the nearest ten thousands",
     "a": "10,000",
     "type": "rounding"
    },
    {
     "q": "96,358 to the nearest thousands",
     "a": "96,000",
     "type": "rounding"
    },
    {
     "q": "28,471 to the nearest ten thousands",
     "a": "30,000",
     "type": "rounding"
    },
    {
     "q": "59,863 to the nearest thousands",
     "a": "60,000",
     "type": "rounding"
    },
    {
     "q": "73,146 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "41,902 to the nearest thousands",
     "a": "42,000",
     "type": "rounding"
    },
    {
     "q": "68,257 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "23,516 to the nearest thousands",
     "a": "24,000",
     "type": "rounding"
    },
    {
     "q": "87,329 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "31,647 to the nearest thousands",
     "a": "32,000",
     "type": "rounding"
    },
    {
     "q": "92,874 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "16,938 to the nearest thousands",
     "a": "17,000",
     "type": "rounding"
    },
    {
     "q": "74,261 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "48,599 to the nearest thousands",
     "a": "49,000",
     "type": "rounding"
    },
    {
     "q": "69,713 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "25,381 to the nearest thousands",
     "a": "25,000",
     "type": "rounding"
    },
    {
     "q": "83,645 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "61,472 to the nearest thousands",
     "a": "61,000",
     "type": "rounding"
    },
    {
     "q": "15,762 to the nearest ten thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "93,108 to the nearest thousands",
     "a": "93,000",
     "type": "rounding"
    },
    {
     "q": "36,849 to the nearest ten thousands",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "77,235 to the nearest thousands",
     "a": "77,000",
     "type": "rounding"
    },
    {
     "q": "52,347 to the nearest thousands",
     "a": "52,000",
     "type": "rounding"
    },
    {
     "q": "18,265 to the nearest ten thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "83,914 to the nearest thousands",
     "a": "84,000",
     "type": "rounding"
    },
    {
     "q": "27,638 to the nearest ten thousands",
     "a": "30,000",
     "type": "rounding"
    },
    {
     "q": "61,759 to the nearest thousands",
     "a": "62,000",
     "type": "rounding"
    },
    {
     "q": "74,216 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "33,892 to the nearest thousands",
     "a": "34,000",
     "type": "rounding"
    },
    {
     "q": "91,163 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "24,578 to the nearest thousands",
     "a": "25,000",
     "type": "rounding"
    },
    {
     "q": "46,892 to the nearest ten thousands",
     "a": "50,000",
     "type": "rounding"
    },
    {
     "q": "68,453 to the nearest thousands",
     "a": "68,000",
     "type": "rounding"
    },
    {
     "q": "37,129 to the nearest ten thousands",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "95,087 to the nearest thousands",
     "a": "95,000",
     "type": "rounding"
    },
    {
     "q": "15,683 to the nearest ten thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "73,946 to the nearest thousands",
     "a": "74,000",
     "type": "rounding"
    },
    {
     "q": "22,845 to the nearest ten thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "84,297 to the nearest thousands",
     "a": "84,000",
     "type": "rounding"
    },
    {
     "q": "39,615 to the nearest ten thousands",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "58,734 to the nearest thousands",
     "a": "59,000",
     "type": "rounding"
    },
    {
     "q": "67,481 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "29,356 to the nearest thousands",
     "a": "29,000",
     "type": "rounding"
    },
    {
     "q": "93,628 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "42,179 to the nearest thousands",
     "a": "42,000",
     "type": "rounding"
    },
    {
     "q": "16,987 to the nearest ten thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "78,254 to the nearest thousands",
     "a": "78,000",
     "type": "rounding"
    },
    {
     "q": "42,376 to the nearest thousands",
     "a": "42,000",
     "type": "rounding"
    },
    {
     "q": "87,651 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "23,894 to the nearest thousands",
     "a": "24,000",
     "type": "rounding"
    },
    {
     "q": "76,218 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "19,735 to the nearest thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "68,903 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "55,472 to the nearest thousands",
     "a": "55,000",
     "type": "rounding"
    },
    {
     "q": "91,386 to the nearest ten thousands",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "34,621 to the nearest thousands",
     "a": "35,000",
     "type": "rounding"
    },
    {
     "q": "72,549 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "28,765 to the nearest thousands",
     "a": "29,000",
     "type": "rounding"
    },
    {
     "q": "63,842 to the nearest ten thousands",
     "a": "60,000",
     "type": "rounding"
    },
    {
     "q": "84,917 to the nearest thousands",
     "a": "85,000",
     "type": "rounding"
    },
    {
     "q": "17,438 to the nearest ten thousands",
     "a": "20,000",
     "type": "rounding"
    },
    {
     "q": "93,204 to the nearest thousands",
     "a": "93,000",
     "type": "rounding"
    },
    {
     "q": "46,573 to the nearest ten thousands",
     "a": "50,000",
     "type": "rounding"
    },
    {
     "q": "29,618 to the nearest thousands",
     "a": "30,000",
     "type": "rounding"
    },
    {
     "q": "81,746 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "37,592 to the nearest thousands",
     "a": "38,000",
     "type": "rounding"
    },
    {
     "q": "65,309 to the nearest ten thousands",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "22,184 to the nearest thousands",
     "a": "22,000",
     "type": "rounding"
    },
    {
     "q": "98,731 to the nearest ten thousands",
     "a": "100,000",
     "type": "rounding"
    },
    {
     "q": "14,867 to the nearest thousands",
     "a": "15,000",
     "type": "rounding"
    },
    {
     "q": "76,592 to the nearest ten thousands",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "39,285 to the nearest thousands",
     "a": "39,000",
     "type": "rounding"
    }
   ],
   "round": true,
   "rev": 1,
   "examples": [
    {
     "q": "Round 54,318 to the nearest thousands.",
     "steps": [
      "In 54,318 the thousands digit is 4.",
      "The digit right after it is the hundreds digit, 3.",
      "3 is less than 5, so the 4 stays and the digits after it become 0."
     ],
     "a": "54,000"
    },
    {
     "q": "Round 27,650 to the nearest thousands.",
     "steps": [
      "In 27,650 the thousands digit is 7.",
      "The digit right after it is 6.",
      "6 is 5 or more, so 7 becomes 8 and the digits after it become 0."
     ],
     "a": "28,000"
    },
    {
     "q": "Round 48,200 to the nearest ten thousands.",
     "steps": [
      "In 48,200 the ten thousands digit is 4.",
      "The digit right after it is the thousands digit, 8.",
      "8 is 5 or more, so 4 becomes 5 and all four digits after it become 0."
     ],
     "a": "50,000"
    },
    {
     "q": "Round 31,409 to the nearest ten thousands.",
     "steps": [
      "In 31,409 the ten thousands digit is 3.",
      "The thousands digit right after it is 1.",
      "1 is less than 5, so 3 stays and the rest become 0."
     ],
     "a": "30,000"
    }
   ]
  },
  {
   "n": 10,
   "title": "Ordering Numbers in Increasing or Decreasing Order",
   "concept": "Increasing order means smallest to largest, and decreasing order means largest to smallest. Start by counting digits, because a number with more digits is always bigger than one with fewer. When two numbers have the same number of digits, compare them from the left, one place at a time, and stop at the first place where the digits differ. Read the instruction first so you know which direction is being asked.",
   "example": "",
   "instruction": "Order Numbers in Increasing or Decreasing Order.",
   "items": [
    {
     "q": "45,267, 12,890, 78,345, 33,111, 9,876",
     "a": "9876, 12890, 33111, 45267, 78345",
     "type": "order-asc"
    },
    {
     "q": "63,452, 21,089, 76,234, 14,567, 58,901",
     "a": "14567, 21089, 58901, 63452, 76234",
     "type": "order-asc"
    },
    {
     "q": "9,234, 72,345, 56,789, 18,900, 31,246",
     "a": "9234, 18900, 31246, 56789, 72345",
     "type": "order-asc"
    },
    {
     "q": "84,321, 27,654, 39,876, 60,111, 15,432",
     "a": "15432, 27654, 39876, 60111, 84321",
     "type": "order-asc"
    },
    {
     "q": "47,890, 3,456, 92,321, 66,220, 19,008",
     "a": "3456, 19008, 47890, 66220, 92321",
     "type": "order-asc"
    },
    {
     "q": "72,468, 38,291, 14,375, 59,832, 7,609",
     "a": "7609, 14375, 38291, 59832, 72468",
     "type": "order-asc"
    },
    {
     "q": "28,136, 65,879, 11,234, 93,540, 49,002",
     "a": "11234, 28136, 49002, 65879, 93540",
     "type": "order-asc"
    },
    {
     "q": "50,777, 23,456, 81,900, 12,345, 67,210",
     "a": "12345, 23456, 50777, 67210, 81900",
     "type": "order-asc"
    },
    {
     "q": "99,001, 34,560, 5,678, 73,245, 16,432",
     "a": "5678, 16432, 34560, 73245, 99001",
     "type": "order-asc"
    },
    {
     "q": "44,210, 88,765, 24,809, 60,312, 2,997",
     "a": "2997, 24809, 44210, 60312, 88765",
     "type": "order-asc"
    },
    {
     "q": "15,678, 70,230, 32,456, 89,001, 6,543",
     "a": "6543, 15678, 32456, 70230, 89001",
     "type": "order-asc"
    },
    {
     "q": "61,234, 29,876, 83,150, 9,432, 51,009",
     "a": "9432, 29876, 51009, 61234, 83150",
     "type": "order-asc"
    },
    {
     "q": "7,890, 45,678, 26,543, 90,876, 18,234",
     "a": "7890, 18234, 26543, 45678, 90876",
     "type": "order-asc"
    },
    {
     "q": "77,888, 54,321, 12,678, 90,234, 23,456",
     "a": "90234, 77888, 54321, 23456, 12678",
     "type": "order-desc"
    },
    {
     "q": "30,018, 4,567, 69,890, 21,345, 81,276",
     "a": "81276, 69890, 30018, 21345, 4567",
     "type": "order-desc"
    },
    {
     "q": "85,430, 17,999, 42,160, 60,501, 7,250",
     "a": "85430, 60501, 42160, 17999, 7250",
     "type": "order-desc"
    },
    {
     "q": "3,210, 64,578, 38,900, 72,604, 19,871",
     "a": "72604, 64578, 38900, 19871, 3210",
     "type": "order-desc"
    },
    {
     "q": "26,700, 58,340, 7,890, 91,108, 45,620",
     "a": "91108, 58340, 45620, 26700, 7890",
     "type": "order-desc"
    },
    {
     "q": "68,120, 12,305, 39,456, 85,780, 5,678",
     "a": "85780, 68120, 39456, 12305, 5678",
     "type": "order-desc"
    },
    {
     "q": "13,015, 94,230, 50,400, 28,630, 6,789",
     "a": "94230, 50400, 28630, 13015, 6789",
     "type": "order-desc"
    },
    {
     "q": "41,111, 73,892, 2,345, 60,870, 19,234",
     "a": "73892, 60870, 41111, 19234, 2345",
     "type": "order-desc"
    },
    {
     "q": "8,765, 27,540, 63,012, 92,800, 44,130",
     "a": "92800, 63012, 44130, 27540, 8765",
     "type": "order-desc"
    },
    {
     "q": "57,160, 14,098, 80,302, 23,671, 4,509",
     "a": "80302, 57160, 23671, 14098, 4509",
     "type": "order-desc"
    },
    {
     "q": "95,432, 31,276, 9,876, 67,210, 20,543",
     "a": "95432, 67210, 31276, 20543, 9876",
     "type": "order-desc"
    },
    {
     "q": "16,203, 73,561, 35,420, 8,910, 62,700",
     "a": "73561, 62700, 35420, 16203, 8910",
     "type": "order-desc"
    },
    {
     "q": "49,999, 22,011, 77,770, 3,333, 88,888",
     "a": "88888, 77770, 49999, 22011, 3333",
     "type": "order-desc"
    },
    {
     "q": "36,741, 5,892, 87,213, 14,650, 63,409",
     "a": "5892, 14650, 36741, 63409, 87213",
     "type": "order-asc"
    },
    {
     "q": "73,564, 28,191, 9,876, 54,320, 41,265",
     "a": "9876, 28191, 41265, 54320, 73564",
     "type": "order-asc"
    },
    {
     "q": "12,987, 65,432, 31,509, 2,345, 88,210",
     "a": "2345, 12987, 31509, 65432, 88210",
     "type": "order-asc"
    },
    {
     "q": "91,876, 47,382, 16,245, 78,901, 3,210",
     "a": "3210, 16245, 47382, 78901, 91876",
     "type": "order-asc"
    },
    {
     "q": "22,134, 5,678, 83,451, 44,209, 19,876",
     "a": "5678, 19876, 22134, 44209, 83451",
     "type": "order-asc"
    },
    {
     "q": "60,321, 7,890, 39,456, 72,813, 25,694",
     "a": "7890, 25694, 39456, 60321, 72813",
     "type": "order-asc"
    },
    {
     "q": "17,308, 92,145, 11,986, 48,672, 36,519",
     "a": "11986, 17308, 36519, 48672, 92145",
     "type": "order-asc"
    },
    {
     "q": "84,729, 13,567, 55,820, 2,478, 67,310",
     "a": "2478, 13567, 55820, 67310, 84729",
     "type": "order-asc"
    },
    {
     "q": "29,654, 80,123, 9,234, 41,897, 66,542",
     "a": "9234, 29654, 41897, 66542, 80123",
     "type": "order-asc"
    },
    {
     "q": "4,567, 32,198, 75,460, 18,309, 59,812",
     "a": "4567, 18309, 32198, 59812, 75460",
     "type": "order-asc"
    },
    {
     "q": "61,908, 26,740, 8,321, 53,104, 14,679",
     "a": "8321, 14679, 26740, 53104, 61908",
     "type": "order-asc"
    },
    {
     "q": "92,001, 37,695, 15,870, 68,234, 7,456",
     "a": "7456, 15870, 37695, 68234, 92001",
     "type": "order-asc"
    },
    {
     "q": "10,345, 47,820, 23,167, 85,603, 3,218",
     "a": "3218, 10345, 23167, 47820, 85603",
     "type": "order-asc"
    },
    {
     "q": "66,789, 14,234, 91,672, 45,321, 2,109",
     "a": "91672, 66789, 45321, 14234, 2109",
     "type": "order-desc"
    },
    {
     "q": "78,456, 21,987, 63,210, 39,805, 16,432",
     "a": "78456, 63210, 39805, 21987, 16432",
     "type": "order-desc"
    },
    {
     "q": "52,640, 8,905, 74,321, 19,876, 3,450",
     "a": "74321, 52640, 19876, 8905, 3450",
     "type": "order-desc"
    },
    {
     "q": "87,654, 12,345, 60,978, 28,109, 7,890",
     "a": "87654, 60978, 28109, 12345, 7890",
     "type": "order-desc"
    },
    {
     "q": "93,215, 41,876, 25,634, 11,987, 3,210",
     "a": "93215, 41876, 25634, 11987, 3210",
     "type": "order-desc"
    },
    {
     "q": "70,432, 18,345, 55,671, 29,876, 6,543",
     "a": "70432, 55671, 29876, 18345, 6543",
     "type": "order-desc"
    },
    {
     "q": "61,203, 9,876, 48,765, 23,111, 4,890",
     "a": "61203, 48765, 23111, 9876, 4890",
     "type": "order-desc"
    },
    {
     "q": "85,321, 30,987, 12,654, 69,432, 8,765",
     "a": "85321, 69432, 30987, 12654, 8765",
     "type": "order-desc"
    },
    {
     "q": "74,890, 22,199, 51,360, 7,654, 14,298",
     "a": "74890, 51360, 22199, 14298, 7654",
     "type": "order-desc"
    },
    {
     "q": "99,123, 13,567, 65,432, 28,890, 5,678",
     "a": "99123, 65432, 28890, 13567, 5678",
     "type": "order-desc"
    },
    {
     "q": "43,210, 16,789, 9,012, 61,054, 2,345",
     "a": "61054, 43210, 16789, 9012, 2345",
     "type": "order-desc"
    },
    {
     "q": "89,432, 31,210, 55,876, 7,109, 12,456",
     "a": "89432, 55876, 31210, 12456, 7109",
     "type": "order-desc"
    },
    {
     "q": "77,210, 24,568, 48,903, 3,867, 19,001",
     "a": "77210, 48903, 24568, 19001, 3867",
     "type": "order-desc"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Arrange in increasing order: 8,432, 50,126, 13,709, 2,845, 64,310",
     "steps": [
      "Count digits. 8,432 and 2,845 have only 4 digits, so they are the two smallest.",
      "Between them, 2,845 starts with 2 and 8,432 starts with 8, so 2,845 is smaller.",
      "The 5-digit numbers start with 1, 5 and 6, so they go 13,709 then 50,126 then 64,310."
     ],
     "a": "2,845, 8,432, 13,709, 50,126, 64,310"
    },
    {
     "q": "Arrange in decreasing order: 40,215, 9,087, 76,530, 21,468, 58,903",
     "steps": [
      "9,087 has only 4 digits, so it is the smallest and goes last.",
      "Compare the first digits of the rest: 7, 5, 4 and 2.",
      "Write the largest first and work down."
     ],
     "a": "76,530, 58,903, 40,215, 21,468, 9,087"
    },
    {
     "q": "Which is larger, 46,180 or 46,810?",
     "steps": [
      "Both have 5 digits, so compare place by place from the left.",
      "Ten thousands: 4 and 4 are the same. Thousands: 6 and 6 are the same.",
      "Hundreds: 1 and 8 are different, and 8 is bigger, so stop there."
     ],
     "a": "46,810"
    }
   ]
  },
  {
   "n": 11,
   "title": "Ordering Numbers in Increasing or Decreasing Order",
   "concept": "Ordering numbers is just careful comparing. The number with more digits is always the bigger one, so count digits before anything else. If the digit counts match, line the numbers up from the left and compare the ten thousands, then the thousands, then the hundreds, stopping the moment two digits differ. Check the instruction again before you write, because increasing goes smallest to largest and decreasing goes largest to smallest.",
   "example": "",
   "instruction": "Order Numbers in Increasing or Decreasing Order.",
   "items": [
    {
     "q": "7,654, 23,110, 65,432, 12,208, 98,765",
     "a": "7654, 12208, 23110, 65432, 98765",
     "type": "order-asc"
    },
    {
     "q": "33,210, 15,678, 72,901, 4,567, 27,890",
     "a": "4567, 15678, 27890, 33210, 72901",
     "type": "order-asc"
    },
    {
     "q": "5,432, 81,234, 16,789, 24,302, 9,876",
     "a": "5432, 9876, 16789, 24302, 81234",
     "type": "order-asc"
    },
    {
     "q": "60,501, 14,234, 39,800, 27,345, 7,678",
     "a": "7678, 14234, 27345, 39800, 60501",
     "type": "order-asc"
    },
    {
     "q": "45,610, 2,345, 91,230, 30,456, 11,789",
     "a": "2345, 11789, 30456, 45610, 91230",
     "type": "order-asc"
    },
    {
     "q": "25,678, 70,123, 8,910, 44,333, 17,654",
     "a": "8910, 17654, 25678, 44333, 70123",
     "type": "order-asc"
    },
    {
     "q": "13,579, 62,480, 9,321, 51,903, 22,710",
     "a": "9321, 13579, 22710, 51903, 62480",
     "type": "order-asc"
    },
    {
     "q": "86,100, 31,245, 15,899, 42,876, 6,544",
     "a": "6544, 15899, 31245, 42876, 86100",
     "type": "order-asc"
    },
    {
     "q": "77,709, 4,321, 68,540, 29,876, 12,345",
     "a": "4321, 12345, 29876, 68540, 77709",
     "type": "order-asc"
    },
    {
     "q": "18,765, 59,320, 23,456, 90,011, 7,899",
     "a": "7899, 18765, 23456, 59320, 90011",
     "type": "order-asc"
    },
    {
     "q": "22,477, 71,095, 3,468, 84,230, 16,052",
     "a": "3468, 16052, 22477, 71095, 84230",
     "type": "order-asc"
    },
    {
     "q": "50,901, 19,345, 63,654, 2,789, 30,210",
     "a": "2789, 19345, 30210, 50901, 63654",
     "type": "order-asc"
    },
    {
     "q": "8,234, 41,678, 26,135, 55,400, 13,912",
     "a": "8234, 13912, 26135, 41678, 55400",
     "type": "order-asc"
    },
    {
     "q": "91,203, 42,567, 15,678, 73,999, 6,321",
     "a": "91203, 73999, 42567, 15678, 6321",
     "type": "order-desc"
    },
    {
     "q": "34,210, 8,765, 62,300, 21,987, 11,456",
     "a": "62300, 34210, 21987, 11456, 8765",
     "type": "order-desc"
    },
    {
     "q": "88,120, 27,799, 60,234, 13,045, 7,890",
     "a": "88120, 60234, 27799, 13045, 7890",
     "type": "order-desc"
    },
    {
     "q": "2,345, 76,891, 40,300, 18,654, 9,210",
     "a": "76891, 40300, 18654, 9210, 2345",
     "type": "order-desc"
    },
    {
     "q": "58,432, 6,789, 93,100, 24,567, 33,890",
     "a": "93100, 58432, 33890, 24567, 6789",
     "type": "order-desc"
    },
    {
     "q": "16,980, 41,222, 73,450, 12,309, 5,678",
     "a": "73450, 41222, 16980, 12309, 5678",
     "type": "order-desc"
    },
    {
     "q": "64,753, 29,301, 11,045, 50,670, 3,210",
     "a": "64753, 50670, 29301, 11045, 3210",
     "type": "order-desc"
    },
    {
     "q": "7,899, 90,888, 25,410, 14,999, 6,654",
     "a": "90888, 25410, 14999, 7899, 6654",
     "type": "order-desc"
    },
    {
     "q": "52,109, 31,875, 2,456, 69,000, 17,650",
     "a": "69000, 52109, 31875, 17650, 2456",
     "type": "order-desc"
    },
    {
     "q": "44,321, 9,876, 70,555, 20,110, 1,234",
     "a": "70555, 44321, 20110, 9876, 1234",
     "type": "order-desc"
    },
    {
     "q": "96,010, 13,245, 8,679, 61,432, 27,890",
     "a": "96010, 61432, 27890, 13245, 8679",
     "type": "order-desc"
    },
    {
     "q": "38,421, 72,678, 4,999, 19,805, 53,210",
     "a": "72678, 53210, 38421, 19805, 4999",
     "type": "order-desc"
    },
    {
     "q": "66,777, 22,344, 85,910, 3,567, 47,123",
     "a": "85910, 66777, 47123, 22344, 3567",
     "type": "order-desc"
    },
    {
     "q": "12,430, 54,210, 7,890, 33,456, 61,005",
     "a": "7890, 12430, 33456, 54210, 61005",
     "type": "order-asc"
    },
    {
     "q": "83,120, 26,789, 41,305, 15,990, 72,450",
     "a": "15990, 26789, 41305, 72450, 83120",
     "type": "order-asc"
    },
    {
     "q": "5,678, 92,345, 18,765, 60,321, 40,098",
     "a": "5678, 18765, 40098, 60321, 92345",
     "type": "order-asc"
    },
    {
     "q": "27,610, 8,945, 73,230, 16,870, 33,450",
     "a": "8945, 16870, 27610, 33450, 73230",
     "type": "order-asc"
    },
    {
     "q": "44,299, 19,764, 68,120, 2,345, 57,890",
     "a": "2345, 19764, 44299, 57890, 68120",
     "type": "order-asc"
    },
    {
     "q": "15,320, 7,654, 95,210, 31,870, 22,901",
     "a": "7654, 15320, 22901, 31870, 95210",
     "type": "order-asc"
    },
    {
     "q": "63,500, 11,245, 84,760, 29,310, 4,678",
     "a": "4678, 11245, 29310, 63500, 84760",
     "type": "order-asc"
    },
    {
     "q": "90,876, 36,543, 12,345, 70,111, 5,432",
     "a": "5432, 12345, 36543, 70111, 90876",
     "type": "order-asc"
    },
    {
     "q": "23,467, 76,890, 3,456, 51,230, 18,999",
     "a": "3456, 18999, 23467, 51230, 76890",
     "type": "order-asc"
    },
    {
     "q": "41,078, 28,345, 67,890, 9,123, 54,201",
     "a": "9123, 28345, 41078, 54201, 67890",
     "type": "order-asc"
    },
    {
     "q": "6,789, 88,654, 17,231, 39,876, 26,543",
     "a": "6789, 17231, 26543, 39876, 88654",
     "type": "order-asc"
    },
    {
     "q": "74,321, 14,678, 59,890, 21,340, 3,567",
     "a": "3567, 14678, 21340, 59890, 74321",
     "type": "order-asc"
    },
    {
     "q": "32,210, 10,987, 48,765, 75,001, 22,145",
     "a": "10987, 22145, 32210, 48765, 75001",
     "type": "order-asc"
    },
    {
     "q": "66,543, 23,890, 93,210, 4,567, 31,678",
     "a": "93210, 66543, 31678, 23890, 4567",
     "type": "order-desc"
    },
    {
     "q": "18,765, 75,432, 2,345, 61,980, 29,110",
     "a": "75432, 61980, 29110, 18765, 2345",
     "type": "order-desc"
    },
    {
     "q": "85,600, 13,457, 64,321, 7,890, 49,210",
     "a": "85600, 64321, 49210, 13457, 7890",
     "type": "order-desc"
    },
    {
     "q": "25,678, 91,234, 30,111, 6,789, 44,560",
     "a": "91234, 44560, 30111, 25678, 6789",
     "type": "order-desc"
    },
    {
     "q": "72,901, 19,876, 52,430, 8,765, 33,210",
     "a": "72901, 52430, 33210, 19876, 8765",
     "type": "order-desc"
    },
    {
     "q": "97,654, 42,321, 10,998, 68,765, 22,334",
     "a": "97654, 68765, 42321, 22334, 10998",
     "type": "order-desc"
    },
    {
     "q": "3,210, 58,432, 26,789, 90,123, 14,567",
     "a": "90123, 58432, 26789, 14567, 3210",
     "type": "order-desc"
    },
    {
     "q": "11,678, 70,900, 31,110, 56,432, 24,789",
     "a": "70900, 56432, 31110, 24789, 11678",
     "type": "order-desc"
    },
    {
     "q": "84,321, 17,999, 61,234, 29,876, 8,345",
     "a": "84321, 61234, 29876, 17999, 8345",
     "type": "order-desc"
    },
    {
     "q": "5,432, 47,890, 22,111, 99,001, 36,543",
     "a": "99001, 47890, 36543, 22111, 5432",
     "type": "order-desc"
    },
    {
     "q": "67,321, 12,456, 77,890, 28,765, 3,210",
     "a": "77890, 67321, 28765, 12456, 3210",
     "type": "order-desc"
    },
    {
     "q": "38,901, 15,678, 64,200, 2,987, 49,876",
     "a": "64200, 49876, 38901, 15678, 2987",
     "type": "order-desc"
    },
    {
     "q": "92,310, 24,567, 80,123, 6,789, 33,450",
     "a": "92310, 80123, 33450, 24567, 6789",
     "type": "order-desc"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Arrange in increasing order: 6,215, 37,048, 19,530, 82,607, 4,129",
     "steps": [
      "4,129 and 6,215 have 4 digits, so they are smaller than all the 5-digit numbers.",
      "4,129 comes before 6,215 because 4 is less than 6.",
      "The 5-digit numbers start with 1, 3 and 8, so the order is 19,530, then 37,048, then 82,607."
     ],
     "a": "4,129, 6,215, 19,530, 37,048, 82,607"
    },
    {
     "q": "Arrange in decreasing order: 53,284, 70,619, 11,043, 95,728, 26,350",
     "steps": [
      "All five have 5 digits, so compare the first digit of each: 5, 7, 1, 9 and 2.",
      "Largest first digit is 9, then 7, then 5, then 2, then 1.",
      "Write them in that order."
     ],
     "a": "95,728, 70,619, 53,284, 26,350, 11,043"
    },
    {
     "q": "Which is larger, 27,406 or 27,064?",
     "steps": [
      "Both have 5 digits, so compare from the left.",
      "Ten thousands: 2 and 2 match. Thousands: 7 and 7 match.",
      "Hundreds: 4 and 0 differ, and 4 is bigger, so 27,406 wins."
     ],
     "a": "27,406"
    }
   ]
  },
  {
   "n": 12,
   "title": "Multiplying Numbers up to Thousands",
   "concept": "",
   "example": "79 x 45 = 3555",
   "instruction": "Multiply the following. Show your solutions.",
   "items": [
    {
     "q": "79 x 45"
    },
    {
     "q": "123 x 20"
    },
    {
     "q": "111 x 22"
    },
    {
     "q": "3 x 77"
    },
    {
     "q": "687 x 2"
    },
    {
     "q": "974 x 32"
    },
    {
     "q": "13 x 67"
    },
    {
     "q": "110 x 32"
    },
    {
     "q": "456 x 21"
    },
    {
     "q": "147 x 92"
    },
    {
     "q": "213 x 74"
    },
    {
     "q": "999 x 11"
    },
    {
     "q": "999 x 55"
    },
    {
     "q": "325 x 32"
    },
    {
     "q": "987 x 41"
    },
    {
     "q": "698 x 65"
    },
    {
     "q": "987 x 25"
    },
    {
     "q": "581 x 99"
    },
    {
     "q": "229 x 12"
    },
    {
     "q": "412 x 96"
    },
    {
     "q": "339 x 36"
    },
    {
     "q": "769 x 41"
    },
    {
     "q": "668 x 78"
    },
    {
     "q": "901 x 55"
    },
    {
     "q": "888 x 11"
    },
    {
     "q": "634 x 12"
    },
    {
     "q": "406 x 46"
    },
    {
     "q": "800 x 64"
    },
    {
     "q": "422 x 50"
    },
    {
     "q": "247 x 52"
    },
    {
     "q": "536 x 34"
    },
    {
     "q": "999 x 99"
    }
   ],
   "examples": [
    "68 x 54",
    "245 x 13",
    "506 x 38",
    "873 x 67",
    "4 x 59",
    "750 x 24"
   ]
  },
  {
   "n": 13,
   "title": "Multiplying Numbers up to Thousands and Solving Word Problems Involving Multiplication",
   "concept": "",
   "example": "2 x 26 = 52",
   "instruction": "Multiply the following. Show your solutions. / Solve the following problems.",
   "items": [
    {
     "q": "2 x 26"
    },
    {
     "q": "34 x 14"
    },
    {
     "q": "234 x 45"
    },
    {
     "q": "882 x 23"
    },
    {
     "q": "134 x 11"
    },
    {
     "q": "204 x 13"
    },
    {
     "q": "8 x 32"
    },
    {
     "q": "436 x 16"
    },
    {
     "q": "251 x 64"
    },
    {
     "q": "422 x 24"
    },
    {
     "q": "324 x 19"
    },
    {
     "q": "218 x 76"
    },
    {
     "q": "198 x 31"
    },
    {
     "q": "189 x 42"
    },
    {
     "q": "199 x 12"
    },
    {
     "q": "315 x 36"
    },
    {
     "q": "Angelo and nine of his friends rode the UP IKOT jeepney to go to their classes. How much would they pay the driver altogether if the student fare was seven pesos per head?",
     "a": "70",
     "type": "key"
    },
    {
     "q": "Malacañang of the North used to be the official residence of Ferdinand Marcos in Ilocos Norte when he was still President. It is now a museum which has an entrance fee of 20 pesos per head. If a group of 17 people wants to visit, how much will the group pay?",
     "a": "340",
     "type": "key"
    },
    {
     "q": "Betty is now 28 years old. Her grandmother's age is thrice her age. How old is her grandmother now?",
     "a": "84",
     "type": "key"
    },
    {
     "q": "The military sent 999 soldiers and equipped each one with 99 bullets. How many bullets should the military send in all?",
     "a": "98,901",
     "type": "key"
    },
    {
     "q": "A shrine has 85 gardeners making the shrine clean and green. If each gardener gets a daily salary of P950, how much is the total cost of cleaning the shrine for a day?",
     "a": "80,750",
     "type": "key"
    },
    {
     "q": "In San Jose Church in Ivana Batanes, each person donates 15 pesos every mass. If there are 912 people who attend mass in a week, how much is the total collection?",
     "a": "13,680",
     "type": "key"
    },
    {
     "q": "From the previous question, how much is the total collection for a year?",
     "a": "711,360",
     "type": "key"
    },
    {
     "q": "The San Pablo Church in San Pablo, Isabela features the tallest bell tower in the Cagayan Valley. If 32 people, each having the same height of 6 feet, stand on each other and they match the height of the bell tower, how high is the tower in feet?",
     "a": "192",
     "type": "key"
    },
    {
     "q": "In St. Hyacinth Church in Tuguegarao, Cagayan, each person donates 6 pesos every mass. If there are 926 persons who attend mass every week, how much donation will the church receive in a year?",
     "a": "288,912",
     "type": "key"
    }
   ],
   "examples": [
    "3 x 48",
    "57 x 26",
    "362 x 25",
    "745 x 18",
    "208 x 47",
    "913 x 62"
   ]
  },
  {
   "n": 14,
   "title": "Estimating Products and Solving Word Problems Involving Multiplication",
   "concept": "ESTIMATING PRODUCTS. Estimating products can be done by rounding off the factors to their highest place values before multiplying. Take note that there is no need to round off one-digit factors. * When multiplying more than two factors, round off them all first to the highest place value before multiplying.",
   "example": "26 x 7 ≈ 30 x 7 = 210",
   "instruction": "Estimate the products of the following. Show your solution.",
   "items": [
    {
     "q": "240 x 63",
     "a": "12,000",
     "type": "rounding"
    },
    {
     "q": "1,424 x 89",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "4,386 x 73",
     "a": "280,000",
     "type": "rounding"
    },
    {
     "q": "9,307 x 308",
     "a": "2,700,000",
     "type": "rounding"
    },
    {
     "q": "5,138 x 49",
     "a": "250,000",
     "type": "rounding"
    },
    {
     "q": "7,246 x 245",
     "a": "1,400,000",
     "type": "rounding"
    },
    {
     "q": "5,015 x 527",
     "a": "2,500,000",
     "type": "rounding"
    },
    {
     "q": "3,615 x 413",
     "a": "1,600,000",
     "type": "rounding"
    },
    {
     "q": "966 x 876",
     "a": "900,000",
     "type": "rounding"
    },
    {
     "q": "5,220 x 642",
     "a": "3,000,000",
     "type": "rounding"
    },
    {
     "q": "735 x 968",
     "a": "700,000",
     "type": "rounding"
    },
    {
     "q": "6,531 x 127",
     "a": "700,000",
     "type": "rounding"
    },
    {
     "q": "2,271 x 282",
     "a": "600,000",
     "type": "rounding"
    },
    {
     "q": "8,284 x 451",
     "a": "4,000,000",
     "type": "rounding"
    },
    {
     "q": "9,978 x 646",
     "a": "6,000,000",
     "type": "rounding"
    },
    {
     "q": "5,475 x 708",
     "a": "3,500,000",
     "type": "rounding"
    },
    {
     "q": "3,833 x 95",
     "a": "400,000",
     "type": "rounding"
    },
    {
     "q": "1,976 x 965",
     "a": "2,000,000",
     "type": "rounding"
    },
    {
     "q": "983 x 61",
     "a": "60,000",
     "type": "rounding"
    },
    {
     "q": "5,419 x 638",
     "a": "3,000,000",
     "type": "rounding"
    },
    {
     "q": "3,357 x 28",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "768 x 115",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "4,321 x 890",
     "a": "3,600,000",
     "type": "rounding"
    },
    {
     "q": "446 x 325",
     "a": "120,000",
     "type": "rounding"
    },
    {
     "q": "5,924 x 45",
     "a": "300,000",
     "type": "rounding"
    },
    {
     "q": "1,010 x 333",
     "a": "300,000",
     "type": "rounding"
    },
    {
     "q": "7,456 x 422",
     "a": "2,800,000",
     "type": "rounding"
    },
    {
     "q": "8,326 x 438",
     "a": "3,200,000",
     "type": "rounding"
    },
    {
     "q": "4,295 x 368",
     "a": "1,600,000",
     "type": "rounding"
    },
    {
     "q": "1,661 x 22",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "6,320 x 34",
     "a": "180,000",
     "type": "rounding"
    },
    {
     "q": "3,276 x 52",
     "a": "150,000",
     "type": "rounding"
    },
    {
     "q": "6,439 x 838",
     "a": "4,800,000",
     "type": "rounding"
    },
    {
     "q": "368 x 230",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "1,589 x 137",
     "a": "200,000",
     "type": "rounding"
    },
    {
     "q": "7,258 x 603",
     "a": "4,200,000",
     "type": "rounding"
    },
    {
     "q": "1,393 x 656",
     "a": "700,000",
     "type": "rounding"
    },
    {
     "q": "6,973 x 52",
     "a": "350,000",
     "type": "rounding"
    },
    {
     "q": "9,365 x 257",
     "a": "2,700,000",
     "type": "rounding"
    },
    {
     "q": "3,359 x 369",
     "a": "1,200,000",
     "type": "rounding"
    },
    {
     "q": "8,112 x 578",
     "a": "4,800,000",
     "type": "rounding"
    },
    {
     "q": "5,372 x 974",
     "a": "5,000,000",
     "type": "rounding"
    },
    {
     "q": "4,222 x 16",
     "a": "80,000",
     "type": "rounding"
    },
    {
     "q": "3,355 x 234",
     "a": "600,000",
     "type": "rounding"
    },
    {
     "q": "8,124 x 576",
     "a": "4,800,000",
     "type": "rounding"
    },
    {
     "q": "2,435 x 776",
     "a": "1,600,000",
     "type": "rounding"
    }
   ]
  },
  {
   "n": 15,
   "title": "Estimating Products and Solving Word Problems Involving Multiplication",
   "concept": "To estimate a product, round each factor to its biggest place value first, then multiply the simple numbers you get. Rounded numbers have one front digit and then zeros, so you can multiply the front digits and attach all the zeros. The answer you get is not exact, it is a quick close answer, so say about. This is useful when you only need to know roughly how many.",
   "example": "",
   "instruction": "Estimate the products of the following. Show your solution. / Solve the following problems. Estimate your answers.",
   "items": [
    {
     "q": "126 x 873",
     "a": "90,000",
     "type": "rounding"
    },
    {
     "q": "639 x 13",
     "a": "6,000",
     "type": "rounding"
    },
    {
     "q": "5,245 x 932",
     "a": "4,500,000",
     "type": "rounding"
    },
    {
     "q": "2,456 x 567",
     "a": "1,200,000",
     "type": "rounding"
    },
    {
     "q": "3,658 x 987",
     "a": "4,000,000",
     "type": "rounding"
    },
    {
     "q": "6,234 x 75",
     "a": "480,000",
     "type": "rounding"
    },
    {
     "q": "897 x 43",
     "a": "36,000",
     "type": "rounding"
    },
    {
     "q": "6,234 x 557",
     "a": "3,600,000",
     "type": "rounding"
    },
    {
     "q": "7,789 x 240",
     "a": "1,600,000",
     "type": "rounding"
    },
    {
     "q": "8,438 x 768",
     "a": "6,400,000",
     "type": "rounding"
    },
    {
     "q": "4,435 x 12",
     "a": "40,000",
     "type": "rounding"
    },
    {
     "q": "6,436 x 561",
     "a": "3,600,000",
     "type": "rounding"
    },
    {
     "q": "6,034 x 22",
     "a": "120,000",
     "type": "rounding"
    },
    {
     "q": "6,258 x 10",
     "a": "60,000",
     "type": "rounding"
    },
    {
     "q": "570 x 912",
     "a": "540,000",
     "type": "rounding"
    },
    {
     "q": "4,457 x 240",
     "a": "800,000",
     "type": "rounding"
    },
    {
     "q": "735 x 128",
     "a": "70,000",
     "type": "rounding"
    },
    {
     "q": "9,346 x 47",
     "a": "450,000",
     "type": "rounding"
    },
    {
     "q": "3,222 x 705",
     "a": "2,100,000",
     "type": "rounding"
    },
    {
     "q": "8,257 x 67",
     "a": "560,000",
     "type": "rounding"
    },
    {
     "q": "2,046 x 124",
     "a": "200,000",
     "type": "rounding"
    },
    {
     "q": "7,005 x 900",
     "a": "6,300,000",
     "type": "rounding"
    },
    {
     "q": "8,246 x 257",
     "a": "2,400,000",
     "type": "rounding"
    },
    {
     "q": "1,540 x 239",
     "a": "400,000",
     "type": "rounding"
    },
    {
     "q": "1,366 x 99",
     "a": "100,000",
     "type": "rounding"
    },
    {
     "q": "6,280 x 235",
     "a": "1,200,000",
     "type": "rounding"
    },
    {
     "q": "Matthew sold 124 pencils each day for 21 days. About how many pencils did he sell in all?",
     "a": "2,000",
     "type": "key"
    },
    {
     "q": "Records show that more and more persons get afflicted with respiratory infections because of pollution. If 274 persons are diagnosed to have respiratory infections everyday, how many get infected in 25 days? Estimate your answer.",
     "a": "9,000",
     "type": "key"
    },
    {
     "q": "1,776 people attended the local carnival per week. Around how many people attended the carnival in 32 weeks?",
     "a": "60,000",
     "type": "key"
    },
    {
     "q": "Mrs. Garcia bought 326 packets of stickers. Each sticker packet had 32 stickers. What was the best estimate of the number of stickers Mrs. Garcia bought?",
     "a": "9,000",
     "type": "key"
    },
    {
     "q": "Shawn sold 23 candy bars each day for 116 days. What was the best estimate of the number of candy bars he sold during this time?",
     "a": "2,000",
     "type": "key"
    },
    {
     "q": "A farmer sold 2,010 sacks of mangoes. Each sack had 79 pieces of mangoes inside. What is the best estimate of the number of mangoes sold by the farmer?",
     "a": "160,000",
     "type": "key"
    },
    {
     "q": "Estimate which is cheaper: to buy 5 boxes of juice that cost 48 pesos per box or 12 bottles of softdrinks that cost 23 pesos per bottle.",
     "a": "200",
     "type": "key"
    },
    {
     "q": "Pedro buys 23 bags of jolens. Each bag contains 102 jolens. Around how many jolens does Pedro have in all?",
     "a": "2,000",
     "type": "key"
    },
    {
     "q": "The parish priest asks you to decorate the church with flowers for an upcoming wedding. If you will make 135 flower arrangements and each arrangement has 26 flowers, around how many flowers will you need to buy?",
     "a": "3,000",
     "type": "key"
    },
    {
     "q": "Janice bought 250 pieces of crayons. If each crayon is priced at P16, how much did Janice pay?",
     "a": "6,000",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Estimate 418 x 61.",
     "steps": [
      "418 rounds to 400 and 61 rounds to 60.",
      "Multiply the front digits: 4 x 6 = 24.",
      "Attach the zeros, 2 from 400 and 1 from 60, so write 24 followed by 3 zeros."
     ],
     "a": "24,000"
    },
    {
     "q": "Estimate 3,512 x 88.",
     "steps": [
      "3,512 rounds to 4,000 because the hundreds digit 5 makes it round up.",
      "88 rounds to 90.",
      "4 x 9 = 36, then attach the 3 zeros from 4,000 and the 1 zero from 90."
     ],
     "a": "360,000"
    },
    {
     "q": "A sari-sari store sells 182 pieces of pandesal each morning. About how many pieces does it sell in 48 mornings?",
     "steps": [
      "The problem asks for an estimate, so round first: 182 becomes 200 and 48 becomes 50.",
      "Multiply the front digits: 2 x 5 = 10.",
      "Attach the 2 zeros from 200 and the 1 zero from 50."
     ],
     "a": "about 10,000 pieces"
    },
    {
     "q": "A school prints 1,240 handouts for each of its 38 sections. About how many handouts is that in all?",
     "steps": [
      "Round 1,240 to 1,000 and round 38 to 40.",
      "Multiply the front digits: 1 x 4 = 4.",
      "Attach the 3 zeros from 1,000 and the 1 zero from 40."
     ],
     "a": "about 40,000 handouts"
    }
   ]
  },
  {
   "n": 18,
   "title": "Division",
   "concept": "",
   "example": "554 / 2 = 277",
   "instruction": "Divide the following. Show your solutions.",
   "items": [
    {
     "q": "554 / 2"
    },
    {
     "q": "1111 / 11"
    },
    {
     "q": "252 / 4"
    },
    {
     "q": "2838 / 55"
    },
    {
     "q": "3523 / 26"
    },
    {
     "q": "5890 / 95"
    },
    {
     "q": "3794 / 14"
    },
    {
     "q": "8410 / 22"
    },
    {
     "q": "8120 / 54"
    },
    {
     "q": "7960 / 60"
    },
    {
     "q": "6500 / 25"
    },
    {
     "q": "8460 / 56"
    },
    {
     "q": "236 / 59"
    },
    {
     "q": "9234 / 38"
    },
    {
     "q": "4164 / 87"
    },
    {
     "q": "2287 / 60"
    }
   ],
   "examples": [
    "648 / 3",
    "1212 / 12",
    "476 / 4",
    "2730 / 65",
    "3822 / 26",
    "5880 / 84"
   ]
  },
  {
   "n": 19,
   "title": "Division",
   "concept": "",
   "example": "350 / 25 = 14",
   "instruction": "Divide the following. Show your solutions.",
   "items": [
    {
     "q": "350 / 25"
    },
    {
     "q": "1456 / 56"
    },
    {
     "q": "288 / 9"
    },
    {
     "q": "2732 / 42"
    },
    {
     "q": "562 / 10"
    },
    {
     "q": "8268 / 81"
    },
    {
     "q": "786 / 12"
    },
    {
     "q": "4293 / 33"
    },
    {
     "q": "9268 / 68"
    },
    {
     "q": "9003 / 30"
    },
    {
     "q": "2348 / 68"
    },
    {
     "q": "9244 / 99"
    },
    {
     "q": "1290 / 32"
    },
    {
     "q": "354 / 6"
    },
    {
     "q": "3168 / 44"
    },
    {
     "q": "5084 / 82"
    }
   ],
   "examples": [
    "425 / 25",
    "1512 / 56",
    "432 / 9",
    "2646 / 42",
    "7128 / 81",
    "4719 / 33"
   ]
  },
  {
   "n": 20,
   "title": "Dividing Mentally by Tens, Hundreds, or Thousands",
   "concept": "DIVIDING MENTALLY BY TENS, HUNDREDS, OR THOUSANDS. To divide numbers mentally 2 to 4-digit numbers by 10, 100, or 1 000 without remainder, you have to do the following: a. Cancel the same number of zeros both in the dividend and the divisor. b. Divide the remaining numbers. In dividing 2 to 4-digit numbers by 10 with remainder, the last digit in the dividend is the remainder while the remaining digits represent the quotient. In dividing 2 to 4-digit numbers by 100 with remainder, the last two digits in the dividend is the remainder while the remaining digits represent the quotient.",
   "example": "45 ÷ 10 = 4 R 5",
   "instruction": "Solve the following. Show your solution.",
   "items": [
    {
     "q": "47 / 10"
    },
    {
     "q": "356 / 10"
    },
    {
     "q": "842 / 10"
    },
    {
     "q": "3729 / 10"
    },
    {
     "q": "645 / 100"
    },
    {
     "q": "2431 / 100"
    },
    {
     "q": "7058 / 100"
    },
    {
     "q": "8410 / 100"
    },
    {
     "q": "6789 / 1000"
    },
    {
     "q": "9305 / 1000"
    },
    {
     "q": "83 / 10"
    },
    {
     "q": "508 / 10"
    },
    {
     "q": "7296 / 10"
    },
    {
     "q": "1652 / 100"
    },
    {
     "q": "5734 / 100"
    },
    {
     "q": "9876 / 100"
    },
    {
     "q": "4528 / 1000"
    },
    {
     "q": "6931 / 1000"
    },
    {
     "q": "2145 / 10"
    },
    {
     "q": "4378 / 100"
    },
    {
     "q": "3248 / 10"
    },
    {
     "q": "87 / 10"
    },
    {
     "q": "6540 / 100"
    },
    {
     "q": "742 / 100"
    },
    {
     "q": "9163 / 10"
    },
    {
     "q": "58 / 10"
    },
    {
     "q": "4389 / 1000"
    },
    {
     "q": "635 / 100"
    },
    {
     "q": "2916 / 10"
    },
    {
     "q": "7805 / 100"
    },
    {
     "q": "3478 / 1000"
    },
    {
     "q": "96 / 10"
    },
    {
     "q": "8120 / 100"
    },
    {
     "q": "419 / 10"
    },
    {
     "q": "5233 / 100"
    },
    {
     "q": "2807 / 1000"
    },
    {
     "q": "73 / 10"
    },
    {
     "q": "6946 / 100"
    },
    {
     "q": "8753 / 10"
    },
    {
     "q": "362 / 100"
    },
    {
     "q": "1502 / 10"
    },
    {
     "q": "7634 / 1000"
    },
    {
     "q": "45 / 10"
    },
    {
     "q": "4271 / 100"
    },
    {
     "q": "5019 / 1000"
    },
    {
     "q": "312 / 10"
    }
   ],
   "examples": [
    "68 / 10",
    "514 / 10",
    "927 / 100",
    "3176 / 100",
    "5846 / 1000",
    "7213 / 1000"
   ]
  },
  {
   "n": 21,
   "title": "Dividing Mentally by Tens, Hundreds, or Thousands",
   "concept": "",
   "example": "64 / 10 = 6 2/5",
   "instruction": "",
   "items": [
    {
     "q": "64 / 10"
    },
    {
     "q": "583 / 100"
    },
    {
     "q": "2417 / 10"
    },
    {
     "q": "7300 / 100"
    },
    {
     "q": "89 / 10"
    },
    {
     "q": "1608 / 100"
    },
    {
     "q": "4251 / 1000"
    },
    {
     "q": "35 / 10"
    },
    {
     "q": "782 / 100"
    },
    {
     "q": "3964 / 1000"
    },
    {
     "q": "147 / 10"
    },
    {
     "q": "6470 / 100"
    },
    {
     "q": "2039 / 1000"
    },
    {
     "q": "92 / 10"
    },
    {
     "q": "5686 / 100"
    },
    {
     "q": "276 / 10"
    },
    {
     "q": "8503 / 1000"
    },
    {
     "q": "608 / 100"
    },
    {
     "q": "4715 / 10"
    },
    {
     "q": "1100 / 100"
    },
    {
     "q": "7842 / 1000"
    },
    {
     "q": "53 / 10"
    },
    {
     "q": "3369 / 100"
    },
    {
     "q": "990 / 10"
    },
    {
     "q": "6024 / 100"
    },
    {
     "q": "2867 / 1000"
    },
    {
     "q": "87 / 10"
    },
    {
     "q": "2935 / 100"
    },
    {
     "q": "4607 / 1000"
    },
    {
     "q": "153 / 10"
    },
    {
     "q": "6843 / 100"
    },
    {
     "q": "9264 / 1000"
    },
    {
     "q": "46 / 10"
    },
    {
     "q": "1472 / 100"
    },
    {
     "q": "3719 / 10"
    },
    {
     "q": "5368 / 1000"
    },
    {
     "q": "94 / 10"
    },
    {
     "q": "7126 / 100"
    },
    {
     "q": "2584 / 10"
    },
    {
     "q": "8742 / 1000"
    },
    {
     "q": "329 / 10"
    },
    {
     "q": "4896 / 100"
    },
    {
     "q": "6072 / 1000"
    },
    {
     "q": "128 / 10"
    },
    {
     "q": "3845 / 100"
    },
    {
     "q": "9851 / 1000"
    },
    {
     "q": "61 / 10"
    },
    {
     "q": "7963 / 100"
    },
    {
     "q": "2765 / 1000"
    },
    {
     "q": "483 / 10"
    },
    {
     "q": "4821 / 10"
    },
    {
     "q": "6423 / 100"
    },
    {
     "q": "7914 / 1000"
    },
    {
     "q": "135 / 10"
    },
    {
     "q": "8760 / 100"
    },
    {
     "q": "3254 / 1000"
    },
    {
     "q": "72 / 10"
    },
    {
     "q": "6985 / 100"
    },
    {
     "q": "1265 / 1000"
    },
    {
     "q": "9308 / 10"
    },
    {
     "q": "5943 / 100"
    },
    {
     "q": "2437 / 1000"
    },
    {
     "q": "84 / 10"
    },
    {
     "q": "4672 / 100"
    },
    {
     "q": "7561 / 1000"
    },
    {
     "q": "216 / 10"
    },
    {
     "q": "3817 / 100"
    },
    {
     "q": "9402 / 1000"
    },
    {
     "q": "58 / 10"
    },
    {
     "q": "6239 / 100"
    }
   ],
   "examples": [
    "37 / 10",
    "865 / 10",
    "1294 / 100",
    "4538 / 100",
    "6157 / 1000",
    "3482 / 1000"
   ]
  },
  {
   "n": 22,
   "title": "Estimating Quotients",
   "concept": "ESTIMATING QUOTIENTS. Example: Estimate the quotient of 637 and 8. Step 1: Find compatible numbers. These are numbers that are close in value to the actual numbers and can be divided mentally. In this case, the number closest to 637 that can be divided by 8 is 640. 637 ÷ 8 ≈ 640 ÷ 8. Step 2: Find the quotient. 640 ÷ 8 = 80. So, 637 ÷ 8 is around 80. For one-digit divisors, the technique is to look at the leftmost digit of the dividend and see if it is enough or it is close to a number that can be divided by the divisor. If not, include the next digit. For two-digit divisors, round off the divisor first to the highest place value before looking for a compatible dividend.",
   "example": "387 ÷ 4 -> 400 ÷ 4 -> 100",
   "instruction": "Choose the compatible numbers that will give the closest estimate. Encircle the letter of your answer then give the estimated quotient. (Items 16-30: Encircle the letter of the best estimate. Items 31-45: Give an estimated quotient for the following.)",
   "items": [
    {
     "q": "876 ÷ 3 = ___ (a. 800 ÷ 3 b. 600 ÷ 3 c. 900 ÷ 3)",
     "a": "300",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "434 ÷ 7 = ___ (a. 400 ÷ 7 b. 420 ÷ 7 c. 490 ÷ 7)",
     "a": "60",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "161 ÷ 3 = ___ (a. 150 ÷ 3 b. 180 ÷ 3 c. 210 ÷ 3)",
     "a": "50",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "296 ÷ 5 = ___ (a. 250 ÷ 5 b. 350 ÷ 5 c. 300 ÷ 5)",
     "a": "60",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "901 ÷ 7 = ___ (a. 630 ÷ 7 b. 1,400 ÷ 7 c. 700 ÷ 7)",
     "a": "100",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "843 ÷ 9 = ___ (a. 900 ÷ 9 b. 720 ÷ 9 c. 810 ÷ 9)",
     "a": "90",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "894 ÷ 5 = ___ (a. 500 ÷ 5 b. 1,000 ÷ 5 c. 100 ÷ 5)",
     "a": "200",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "1,490 ÷ 5 = ___ (a. 2,000 ÷ 5 b. 1,500 ÷ 5 c. 1,400 ÷ 5)",
     "a": "300",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "1,728 ÷ 32 = ___ (a. 1,500 ÷ 30 b. 2,000 ÷ 30 c. 1,800 ÷ 30)",
     "a": "60",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "6,272 ÷ 28 = ___ (a. 6,000 ÷ 30 b. 6,000 ÷ 20 c. 9,000 ÷ 30)",
     "a": "200",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "6,919 ÷ 7 = ___ (a. 6,300 ÷ 7 b. 5,600 ÷ 7 c. 7,000 ÷ 7)",
     "a": "1,000",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "7,819 ÷ 4 = ___ (a. 8,000 ÷ 4 b. 6,000 ÷ 4 c. 10,000 ÷ 4)",
     "a": "2,000",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "1,299 ÷ 12 = ___ (a. 1,200 ÷ 10 b. 1,200 ÷ 12 c. 1,440 ÷ 12)",
     "a": "120",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "795 ÷ 84 = ___ (a. 800 ÷ 80 b. 700 ÷ 80 c. 400 ÷ 80)",
     "a": "10",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "819 ÷ 94 = ___ (a. 900 ÷ 90 b. 810 ÷ 90 c. 800 ÷ 8)",
     "a": "9",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "895 ÷ 8 (a. 200 b. 100 c. 300)",
     "a": "b. 100",
     "type": "key",
     "ask": "choose the letter"
    },
    {
     "q": "336 ÷ 7 (a. 50 b. 60 c. 70)",
     "a": "a. 50",
     "type": "key",
     "ask": "choose the letter"
    },
    {
     "q": "324 ÷ 4 (a. 100 b. 10 c. 80)",
     "a": "c. 80",
     "type": "key",
     "ask": "choose the letter"
    },
    {
     "q": "816 ÷ 6 (a. 100 b. 50 c. 10)",
     "a": "a. 100",
     "type": "key",
     "ask": "choose the letter"
    },
    {
     "q": "521 ÷ 3 (a. 300 b. 200 c. 100)",
     "a": "b. 200",
     "type": "key",
     "ask": "choose the letter"
    },
    {
     "q": "777 ÷ 8 (a. 50 b. 100 c. 200)",
     "a": "b. 100",
     "type": "key",
     "ask": "choose the letter"
    },
    {
     "q": "4,821 ÷ 5 (a. 100 b. 500 c. 1,000)",
     "a": "c. 1,000",
     "type": "key",
     "seq": true,
     "ask": "choose the letter"
    },
    {
     "q": "5,895 ÷ 4 (a. 1,000 b. 2,000 c. 3,000)",
     "a": "a. 1,000",
     "type": "key",
     "seq": true,
     "ask": "choose the letter"
    },
    {
     "q": "6,335 ÷ 51 (a. 200 b. 100 c. 150)",
     "a": "b. 100",
     "type": "key",
     "ask": "choose the letter"
    },
    {
     "q": "9,339 ÷ 81 (a. 10 b. 1,000 c. 100)",
     "a": "c. 100",
     "type": "key",
     "ask": "choose the letter"
    },
    {
     "q": "1,344 ÷ 26 (a. 50 b. 500 c. 5,000)",
     "a": "a. 50",
     "type": "key",
     "ask": "choose the letter"
    },
    {
     "q": "6,290 ÷ 68 (a. 90 b. 950 c. 900)",
     "a": "a. 90",
     "type": "key",
     "ask": "choose the letter"
    },
    {
     "q": "9,812 ÷ 998 (a. 100 b. 10 c. 1,000)",
     "a": "b. 10",
     "type": "key",
     "ask": "choose the letter"
    },
    {
     "q": "5,679 ÷ 529 (a. 100 b. 10 c. 1,000)",
     "a": "b. 10",
     "type": "key",
     "ask": "choose the letter"
    },
    {
     "q": "2,598 ÷ 25 (a. 500 b. 1,000 c. 100)",
     "a": "c. 100",
     "type": "key",
     "ask": "choose the letter"
    },
    {
     "q": "261 ÷ 5",
     "a": "50",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "168 ÷ 9",
     "a": "20",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "2,985 ÷ 6",
     "a": "500",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "436 ÷ 4",
     "a": "110",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "296 ÷ 4",
     "a": "70",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "723 ÷ 6",
     "a": "120",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "417 ÷ 2",
     "a": "200",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "331 ÷ 7",
     "a": "50",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "888 ÷ 3",
     "a": "300",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "4,047 ÷ 2",
     "a": "2,000",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "2,452 ÷ 8",
     "a": "300",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "1,311 ÷ 7",
     "a": "200",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "9,344 ÷ 9",
     "a": "1,000",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "1,597 ÷ 83",
     "a": "20",
     "type": "key",
     "ask": "estimated quotient"
    },
    {
     "q": "1,197 ÷ 42",
     "a": "30",
     "type": "key",
     "ask": "estimated quotient"
    }
   ],
   "ordered": true
  },
  {
   "n": 30,
   "title": "Angles (Naming Angles)",
   "concept": "An angle is formed by two rays that start from the same point. That corner point is the vertex, and the two rays are the sides. To name an angle with three letters, write a point from one side, then the vertex, then a point from the other side, so the vertex is always the middle letter. If only one angle sits at that vertex, you may also name it with the vertex letter alone.",
   "example": "",
   "instruction": "Name the angle shown using three letters (vertex in the middle) or the vertex letter.",
   "items": [
    {
     "q": "Name this angle.",
     "a": "angle CHE; ∠CHE; CHE; angle EHC; ∠EHC; EHC; angle H; ∠H; H",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 65,
      "labels": [
       "C",
       "H",
       "E"
      ]
     },
     "alt": true
    },
    {
     "q": "Name this angle.",
     "a": "angle ICK; ∠ICK; ICK; angle KCI; ∠KCI; KCI; angle C; ∠C; C",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 60,
      "labels": [
       "I",
       "C",
       "K"
      ]
     },
     "alt": true
    },
    {
     "q": "Name this angle.",
     "a": "angle SQR; ∠SQR; SQR; angle RQS; ∠RQS; RQS; angle Q; ∠Q; Q",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 55,
      "labels": [
       "S",
       "Q",
       "R"
      ]
     },
     "alt": true
    },
    {
     "q": "Name this angle.",
     "a": "angle ZXY; ∠ZXY; ZXY; angle YXZ; ∠YXZ; YXZ; angle X; ∠X; X",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 50,
      "labels": [
       "Z",
       "X",
       "Y"
      ]
     },
     "alt": true
    },
    {
     "q": "Name this angle.",
     "a": "angle WUV; ∠WUV; WUV; angle VUW; ∠VUW; VUW; angle U; ∠U; U",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 117,
      "labels": [
       "W",
       "U",
       "V"
      ]
     },
     "alt": true
    },
    {
     "q": "Name this angle.",
     "a": "angle ABC; ∠ABC; ABC; angle CBA; ∠CBA; CBA; angle B; ∠B; B",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 113,
      "labels": [
       "A",
       "B",
       "C"
      ]
     },
     "alt": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Write the three-letter name of this angle.",
     "fig": {
      "kind": "angle",
      "deg": 55,
      "labels": [
       "D",
       "M",
       "T"
      ]
     },
     "steps": [
      "The two rays meet at M, so M is the vertex.",
      "Read the letter on each ray: D and T.",
      "In a three-letter name the vertex is the middle letter."
     ],
     "a": "angle DMT, or angle TMD"
    },
    {
     "q": "Give two correct three-letter names for this angle.",
     "fig": {
      "kind": "angle",
      "deg": 75,
      "labels": [
       "N",
       "P",
       "R"
      ]
     },
     "steps": [
      "The rays meet at P, so P is the vertex.",
      "Read one way: start at N, through P, end at R.",
      "Read the other way: start at R, through P, end at N.",
      "Both names keep the vertex in the middle."
     ],
     "a": "angle NPR and angle RPN"
    },
    {
     "q": "A learner named this angle GFJ. Is that name correct?",
     "fig": {
      "kind": "angle",
      "deg": 110,
      "labels": [
       "F",
       "G",
       "J"
      ]
     },
     "steps": [
      "Find the vertex first. The two rays meet at G.",
      "A three-letter name must have the vertex in the middle.",
      "GFJ puts G first instead of in the middle."
     ],
     "a": "No. The correct name is angle FGJ, or angle JGF."
    },
    {
     "q": "Which letter names the vertex of this angle?",
     "fig": {
      "kind": "angle",
      "deg": 72,
      "labels": [
       "L",
       "V",
       "B"
      ]
     },
     "steps": [
      "The vertex is the point where the two rays start.",
      "On this figure both rays start at V."
     ],
     "a": "V"
    }
   ]
  },
  {
   "n": 31,
   "title": "Kinds of Angles",
   "concept": "A right angle measures exactly 90 degrees and looks like the square corner of a book or a floor tile. An angle smaller than 90 degrees is acute, so it looks sharp and narrow. An angle bigger than 90 degrees but smaller than 180 degrees is obtuse, so it looks wide and opened out. When you are not sure, hold the corner of a sheet of paper against the angle and check if the angle is narrower, the same, or wider.",
   "example": "",
   "instruction": "Identify the kind of each angle shown (acute, right, or obtuse).",
   "items": [
    {
     "q": "What kind of angle is this?",
     "a": "acute; acute angle",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 25
     },
     "alt": true
    },
    {
     "q": "What kind of angle is this?",
     "a": "right; right angle",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 90
     },
     "alt": true
    },
    {
     "q": "What kind of angle is this?",
     "a": "acute; acute angle",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 35
     },
     "alt": true
    },
    {
     "q": "What kind of angle is this?",
     "a": "acute; acute angle",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 50
     },
     "alt": true
    },
    {
     "q": "What kind of angle is this?",
     "a": "obtuse; obtuse angle",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 115
     },
     "alt": true
    },
    {
     "q": "What kind of angle is this?",
     "a": "acute; acute angle",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 65
     },
     "alt": true
    },
    {
     "q": "What kind of angle is this?",
     "a": "right; right angle",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 90
     },
     "alt": true
    },
    {
     "q": "What kind of angle is this?",
     "a": "obtuse; obtuse angle",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 135
     },
     "alt": true
    },
    {
     "q": "What kind of angle is this?",
     "a": "obtuse; obtuse angle",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 155
     },
     "alt": true
    },
    {
     "q": "What kind of angle is this?",
     "a": "acute; acute angle",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 80
     },
     "alt": true
    },
    {
     "q": "What kind of angle is this?",
     "a": "right; right angle",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 90
     },
     "alt": true
    },
    {
     "q": "What kind of angle is this?",
     "a": "acute; acute angle",
     "type": "key",
     "fig": {
      "kind": "angle",
      "deg": 40
     },
     "alt": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Is this angle acute, right, or obtuse?",
     "fig": {
      "kind": "angle",
      "deg": 40
     },
     "steps": [
      "Picture the square corner of a sheet of paper on this vertex.",
      "The opening here is narrower than that square corner.",
      "Narrower than a square corner means less than 90 degrees."
     ],
     "a": "acute"
    },
    {
     "q": "Name the kind of angle shown here.",
     "fig": {
      "kind": "angle",
      "deg": 90
     },
     "steps": [
      "The small square at the vertex marks a perfect square corner.",
      "A square corner is exactly 90 degrees."
     ],
     "a": "right"
    },
    {
     "q": "Acute, right, or obtuse?",
     "fig": {
      "kind": "angle",
      "deg": 125
     },
     "steps": [
      "Compare the opening with a square corner.",
      "This opening is wider than a square corner, so it is more than 90 degrees.",
      "It is still less than a straight line, which is 180 degrees."
     ],
     "a": "obtuse"
    },
    {
     "q": "Check this angle against the corner of a paper. Acute, right, or obtuse?",
     "fig": {
      "kind": "angle",
      "deg": 85
     },
     "steps": [
      "The opening is close to a square corner, so look carefully.",
      "It is still a little narrower than the square corner.",
      "A little less than 90 degrees is acute, not right."
     ],
     "a": "acute"
    }
   ]
  }
 ],
 "g6": [
  {
   "n": 1,
   "title": "Divisibility Rules Review (2, 3, 5, 9, 10)",
   "concept": "DIVISIBILITY RULES REVIEW. For 2: All even numbers are divisible by 2. For 3: Add the digits. If the sum is divisible by 3, so is the number. For 5: Any number ending in 5 or 0 is divisible by 5. For 10: All numbers ending in 0 is divisible by 10. For 9: Add the digits. If the sum is divisible by 9, so is the number.",
   "example": "128 is even so it is divisible by 2; 129 is not even so it is not divisible by 2",
   "instruction": "Part 1: Check the box below all the number/s by which the given number is divisible (columns 2, 3, 5, 9, 10). Part 2: Fill in the blanks with SMALLEST digit that will make each number divisible by the given number.",
   "items": [
    {
     "q": "245 (which of 2, 3, 5, 9, 10?)",
     "a": "5",
     "type": "key"
    },
    {
     "q": "240 (which of 2, 3, 5, 9, 10?)",
     "a": "2, 3, 5, 10",
     "type": "key",
     "set": true
    },
    {
     "q": "256 (which of 2, 3, 5, 9, 10?)",
     "a": "2",
     "type": "key"
    },
    {
     "q": "432 (which of 2, 3, 5, 9, 10?)",
     "a": "2, 3, 9",
     "type": "key",
     "set": true
    },
    {
     "q": "454 (which of 2, 3, 5, 9, 10?)",
     "a": "2",
     "type": "key"
    },
    {
     "q": "455 (which of 2, 3, 5, 9, 10?)",
     "a": "5",
     "type": "key"
    },
    {
     "q": "480 (which of 2, 3, 5, 9, 10?)",
     "a": "2, 3, 5, 10",
     "type": "key",
     "set": true
    },
    {
     "q": "543 (which of 2, 3, 5, 9, 10?)",
     "a": "3",
     "type": "key"
    },
    {
     "q": "610 (which of 2, 3, 5, 9, 10?)",
     "a": "2, 5, 10",
     "type": "key",
     "set": true
    },
    {
     "q": "612 (which of 2, 3, 5, 9, 10?)",
     "a": "2, 3, 9",
     "type": "key",
     "set": true
    },
    {
     "q": "630 (which of 2, 3, 5, 9, 10?)",
     "a": "2, 3, 5, 9, 10",
     "type": "key",
     "set": true
    },
    {
     "q": "662 (which of 2, 3, 5, 9, 10?)",
     "a": "2",
     "type": "key"
    },
    {
     "q": "729 (which of 2, 3, 5, 9, 10?)",
     "a": "3, 9",
     "type": "key",
     "set": true
    },
    {
     "q": "750 (which of 2, 3, 5, 9, 10?)",
     "a": "2, 3, 5, 10",
     "type": "key",
     "set": true
    },
    {
     "q": "768 (which of 2, 3, 5, 9, 10?)",
     "a": "2, 3",
     "type": "key",
     "set": true
    },
    {
     "q": "780 (which of 2, 3, 5, 9, 10?)",
     "a": "2, 3, 5, 10",
     "type": "key",
     "set": true
    },
    {
     "q": "850 (which of 2, 3, 5, 9, 10?)",
     "a": "2, 5, 10",
     "type": "key",
     "set": true
    },
    {
     "q": "998 (which of 2, 3, 5, 9, 10?)",
     "a": "2",
     "type": "key"
    },
    {
     "q": "1,065 (which of 2, 3, 5, 9, 10?)",
     "a": "3, 5",
     "type": "key",
     "set": true
    },
    {
     "q": "2,150 (which of 2, 3, 5, 9, 10?)",
     "a": "2, 5, 10",
     "type": "key",
     "set": true
    },
    {
     "q": "2_4 (smallest blank digit, divisible by 9)",
     "a": "3",
     "type": "key"
    },
    {
     "q": "41_ (smallest blank digit, divisible by 2)",
     "a": "0",
     "type": "key"
    },
    {
     "q": "6_7 (smallest blank digit, divisible by 3)",
     "a": "2",
     "type": "key"
    },
    {
     "q": "74_ (smallest blank digit, divisible by 10)",
     "a": "0",
     "type": "key"
    },
    {
     "q": "_77 (smallest blank digit, divisible by 9)",
     "a": "4",
     "type": "key"
    },
    {
     "q": "16_ (smallest blank digit, divisible by 5)",
     "a": "0",
     "type": "key"
    },
    {
     "q": "_85 (smallest blank digit, divisible by 3)",
     "a": "2",
     "type": "key"
    },
    {
     "q": "72_ (smallest blank digit, divisible by 9)",
     "a": "0",
     "type": "key"
    },
    {
     "q": "5,23_ (smallest blank digit, divisible by 10)",
     "a": "0",
     "type": "key"
    },
    {
     "q": "7,67_ (smallest blank digit, divisible by 5)",
     "a": "0",
     "type": "key"
    },
    {
     "q": "4,6_7 (smallest blank digit, divisible by 9)",
     "a": "1",
     "type": "key"
    },
    {
     "q": "95_ (smallest blank digit, divisible by 5)",
     "a": "0",
     "type": "key"
    },
    {
     "q": "_,615 (smallest blank digit, divisible by 3)",
     "a": "0",
     "type": "key"
    },
    {
     "q": "35_ (smallest blank digit, divisible by 9)",
     "a": "1",
     "type": "key"
    },
    {
     "q": "3,34_ (smallest blank digit, divisible by 10)",
     "a": "0",
     "type": "key"
    }
   ]
  },
  {
   "n": 2,
   "title": "Divisibility Rules Review (4, 6, 8 and more)",
   "concept": "DIVISIBILITY RULES REVIEW. For 4: If the last two digits are divisible by 4, so is the number. For 6: If the number is divisible by 2 and 3, then it is divisible by 6. For 8: If the last 3 digits are divisible by 8, so is the number.",
   "example": "For 4: 1,312 -12 is divisible by 4, so is 1,312.",
   "instruction": "Check the box below all the number/s by which the given number is divisible. Items 1-15 test 4, 6, 8; items 16-30 test 2, 3, 4, 5, 6, 8, 9, 10.",
   "items": [
    {
     "q": "648 (which of 4, 6, 8?)",
     "a": "4, 6, 8",
     "type": "key",
     "set": true
    },
    {
     "q": "924 (which of 4, 6, 8?)",
     "a": "4, 6",
     "type": "key",
     "set": true
    },
    {
     "q": "216 (which of 4, 6, 8?)",
     "a": "4, 6, 8",
     "type": "key",
     "set": true
    },
    {
     "q": "460 (which of 4, 6, 8?)",
     "a": "4",
     "type": "key"
    },
    {
     "q": "618 (which of 4, 6, 8?)",
     "a": "6",
     "type": "key"
    },
    {
     "q": "248 (which of 4, 6, 8?)",
     "a": "4, 8",
     "type": "key",
     "set": true
    },
    {
     "q": "6,816 (which of 4, 6, 8?)",
     "a": "4, 6, 8",
     "type": "key",
     "set": true
    },
    {
     "q": "6,424 (which of 4, 6, 8?)",
     "a": "4, 8",
     "type": "key",
     "set": true
    },
    {
     "q": "9,428 (which of 4, 6, 8?)",
     "a": "4",
     "type": "key"
    },
    {
     "q": "6,864 (which of 4, 6, 8?)",
     "a": "4, 6, 8",
     "type": "key",
     "set": true
    },
    {
     "q": "9,232 (which of 4, 6, 8?)",
     "a": "4, 8",
     "type": "key",
     "set": true
    },
    {
     "q": "4,656 (which of 4, 6, 8?)",
     "a": "4, 6, 8",
     "type": "key",
     "set": true
    },
    {
     "q": "7,344 (which of 4, 6, 8?)",
     "a": "4, 6, 8",
     "type": "key",
     "set": true
    },
    {
     "q": "9,462 (which of 4, 6, 8?)",
     "a": "6",
     "type": "key"
    },
    {
     "q": "1,284 (which of 4, 6, 8?)",
     "a": "4, 6",
     "type": "key",
     "set": true
    },
    {
     "q": "5,312 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "2, 4, 8",
     "type": "key",
     "set": true
    },
    {
     "q": "1,492 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "2, 4",
     "type": "key",
     "set": true
    },
    {
     "q": "4,272 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "2, 3, 4, 6, 8",
     "type": "key",
     "set": true
    },
    {
     "q": "2,725 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "5",
     "type": "key"
    },
    {
     "q": "9,963 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "3, 9",
     "type": "key",
     "set": true
    },
    {
     "q": "1,586 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "2",
     "type": "key"
    },
    {
     "q": "4,686 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "2, 3, 6",
     "type": "key",
     "set": true
    },
    {
     "q": "8,714 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "2",
     "type": "key"
    },
    {
     "q": "7,089 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "3",
     "type": "key"
    },
    {
     "q": "5,930 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "2, 5, 10",
     "type": "key",
     "set": true
    },
    {
     "q": "2,967 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "3",
     "type": "key"
    },
    {
     "q": "5,680 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "2, 4, 5, 8, 10",
     "type": "key",
     "set": true
    },
    {
     "q": "6,657 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "3",
     "type": "key"
    },
    {
     "q": "7,260 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "2, 3, 4, 5, 6, 10",
     "type": "key",
     "set": true
    },
    {
     "q": "9,688 (which of 2, 3, 4, 5, 6, 8, 9, 10?)",
     "a": "2, 4, 8",
     "type": "key",
     "set": true
    }
   ],
   "ordered": true
  },
  {
   "n": 4,
   "title": "Divisibility Rules (yes/no, list all, and table)",
   "concept": "A divisibility rule is a quick check that tells you whether one number divides another evenly, with no remainder, so you do not have to do long division. Look at the ending for 2, 5 and 10, at the last two digits for 4, and at the last three digits for 8. Add up all the digits for 3 and for 9. For 6 and 12 you check two smaller rules at once, since 6 needs both 2 and 3 while 12 needs both 3 and 4, and for 11 you add and subtract the digits in turn, then see if you land on 0 or a multiple of 11.",
   "example": "",
   "instruction": "Items 1-10: Tell if the first number is divisible by the second. Write yes or no. Items 11-20: Tell what number are the following divisible by. Write 2, 3, 4, 5, 6, 8, 9, 10, 11 or 12. Give all possible answers. Items 21-30: Check the box if the number is divisible by the number in that column (2, 3, 4, 5, 6, 8, 9, 10, 11, 12).",
   "items": [
    {
     "q": "265; 9 - is the first divisible by the second?",
     "a": "no",
     "type": "key",
     "ask": "yes or no"
    },
    {
     "q": "420; 2 - is the first divisible by the second?",
     "a": "yes",
     "type": "key",
     "ask": "yes or no"
    },
    {
     "q": "505; 11 - is the first divisible by the second?",
     "a": "no",
     "type": "key",
     "ask": "yes or no"
    },
    {
     "q": "111; 3 - is the first divisible by the second?",
     "a": "yes",
     "type": "key",
     "ask": "yes or no"
    },
    {
     "q": "696; 5 - is the first divisible by the second?",
     "a": "no",
     "type": "key",
     "ask": "yes or no"
    },
    {
     "q": "1,600; 4 - is the first divisible by the second?",
     "a": "yes",
     "type": "key",
     "ask": "yes or no"
    },
    {
     "q": "2,228; 8 - is the first divisible by the second?",
     "a": "no",
     "type": "key",
     "ask": "yes or no"
    },
    {
     "q": "4,132; 12 - is the first divisible by the second?",
     "a": "no",
     "type": "key",
     "ask": "yes or no"
    },
    {
     "q": "5,640; 6 - is the first divisible by the second?",
     "a": "yes",
     "type": "key",
     "ask": "yes or no"
    },
    {
     "q": "7,517; 10 - is the first divisible by the second?",
     "a": "no",
     "type": "key",
     "ask": "yes or no"
    },
    {
     "q": "800 (list all of 2, 3, 4, 5, 6, 8, 9, 10, 11, 12 that divide it)",
     "a": "2, 4, 5, 8, 10",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "878 (list all of 2, 3, 4, 5, 6, 8, 9, 10, 11, 12 that divide it)",
     "a": "2",
     "type": "key",
     "ask": "list the divisors"
    },
    {
     "q": "160 (list all of 2, 3, 4, 5, 6, 8, 9, 10, 11, 12 that divide it)",
     "a": "2, 4, 5, 8, 10",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "663 (list all of 2, 3, 4, 5, 6, 8, 9, 10, 11, 12 that divide it)",
     "a": "3",
     "type": "key",
     "ask": "list the divisors"
    },
    {
     "q": "445 (list all of 2, 3, 4, 5, 6, 8, 9, 10, 11, 12 that divide it)",
     "a": "5",
     "type": "key",
     "ask": "list the divisors"
    },
    {
     "q": "9,999 (list all of 2, 3, 4, 5, 6, 8, 9, 10, 11, 12 that divide it)",
     "a": "3, 9, 11",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "1,144 (list all of 2, 3, 4, 5, 6, 8, 9, 10, 11, 12 that divide it)",
     "a": "2, 4, 8, 11",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "7,326 (list all of 2, 3, 4, 5, 6, 8, 9, 10, 11, 12 that divide it)",
     "a": "2, 3, 6, 9, 11",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "7,400 (list all of 2, 3, 4, 5, 6, 8, 9, 10, 11, 12 that divide it)",
     "a": "2, 4, 5, 8, 10",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "4,215 (list all of 2, 3, 4, 5, 6, 8, 9, 10, 11, 12 that divide it)",
     "a": "3, 5",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "216 (check divisibility by 2, 3, 4, 5, 6, 8, 9, 10, 11, 12)",
     "a": "2, 3, 4, 6, 8, 9, 12",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "970 (check divisibility by 2, 3, 4, 5, 6, 8, 9, 10, 11, 12)",
     "a": "2, 5, 10",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "752 (check divisibility by 2, 3, 4, 5, 6, 8, 9, 10, 11, 12)",
     "a": "2, 4, 8",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "459 (check divisibility by 2, 3, 4, 5, 6, 8, 9, 10, 11, 12)",
     "a": "3, 9",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "760 (check divisibility by 2, 3, 4, 5, 6, 8, 9, 10, 11, 12)",
     "a": "2, 4, 5, 8, 10",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "9,645 (check divisibility by 2, 3, 4, 5, 6, 8, 9, 10, 11, 12)",
     "a": "3, 5",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "7,653 (check divisibility by 2, 3, 4, 5, 6, 8, 9, 10, 11, 12)",
     "a": "3",
     "type": "key",
     "ask": "list the divisors"
    },
    {
     "q": "5,580 (check divisibility by 2, 3, 4, 5, 6, 8, 9, 10, 11, 12)",
     "a": "2, 3, 4, 5, 6, 9, 10, 12",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "5,900 (check divisibility by 2, 3, 4, 5, 6, 8, 9, 10, 11, 12)",
     "a": "2, 4, 5, 10",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    },
    {
     "q": "9,040 (check divisibility by 2, 3, 4, 5, 6, 8, 9, 10, 11, 12)",
     "a": "2, 4, 5, 8, 10",
     "type": "key",
     "set": true,
     "ask": "list the divisors"
    }
   ],
   "ordered": true,
   "rev": 1,
   "examples": [
    {
     "q": "Is 342 divisible by 6?",
     "steps": [
      "A number is divisible by 6 only if it passes the rule for 2 and the rule for 3.",
      "342 ends in 2, so it is even. The rule for 2 passes.",
      "3 + 4 + 2 = 9, and 9 is divisible by 3. The rule for 3 passes.",
      "Both rules pass, so 342 is divisible by 6. Check: 342 divided by 6 is 57."
     ],
     "a": "yes"
    },
    {
     "q": "Is 3,128 divisible by 8?",
     "steps": [
      "For 8, look only at the last three digits, which are 128.",
      "128 divided by 8 is 16, with nothing left over.",
      "So 3,128 is divisible by 8. Check: 3,128 divided by 8 is 391."
     ],
     "a": "yes"
    },
    {
     "q": "Is 7,205 divisible by 11?",
     "steps": [
      "For 11, add and subtract the digits in turn, starting from the left.",
      "7 - 2 + 0 - 5 = 0.",
      "A result of 0 means the number is divisible by 11. Check: 7,205 divided by 11 is 655."
     ],
     "a": "yes"
    },
    {
     "q": "Which of 2, 3, 4, 5, 6, 8, 9, 10, 11 and 12 divide 924?",
     "steps": [
      "924 is even, so 2 works. 9 + 2 + 4 = 15, which is divisible by 3 but not by 9, so 3 works and 9 does not.",
      "The last two digits are 24, and 24 divided by 4 is 6, so 4 works. The last three digits are 924, and 924 divided by 8 is not a whole number, so 8 does not.",
      "924 does not end in 0 or 5, so 5 and 10 do not work. It passes 2 and 3, so 6 works. It passes 3 and 4, so 12 works.",
      "For 11: 9 - 2 + 4 = 11, so 11 works."
     ],
     "a": "2, 3, 4, 6, 11, 12"
    }
   ]
  },
  {
   "n": 5,
   "title": "Order of Operations",
   "concept": "",
   "example": "3 x ( 13 x 10) = 390",
   "instruction": "Evaluate the given expression. Show your solution and box your final answer.",
   "items": [
    {
     "q": "3 x ( 13 x 10)"
    },
    {
     "q": "6 + ( 10 x 14)"
    },
    {
     "q": "17 x ( 2 x 10)"
    },
    {
     "q": "( 3 x 44 ) x 1"
    },
    {
     "q": "3 x ( 1 x 14)"
    },
    {
     "q": "( 17 x 2 ) x 2"
    },
    {
     "q": "( 3 x 11) + 2"
    },
    {
     "q": "(10 x 12) + 4"
    },
    {
     "q": "7 x ( 10 x 16)"
    },
    {
     "q": "40 x ( 4 x 10)"
    },
    {
     "q": "9 x ( 10 x 12)"
    },
    {
     "q": "8 x ( 13 x 10)"
    },
    {
     "q": "19 x ( 10 x 3)"
    },
    {
     "q": "(3 x 8) + 2"
    },
    {
     "q": "1 + (10 x 6)"
    },
    {
     "q": "2 x (6 / 6)"
    },
    {
     "q": "(7 x 5) - 2"
    },
    {
     "q": "(10 - 4) + 8"
    },
    {
     "q": "(7 + 5) + 9"
    },
    {
     "q": "(10 - 10) + 4"
    },
    {
     "q": "(10 + 1) + 10"
    },
    {
     "q": "(7 x 6) - 10"
    },
    {
     "q": "(8 / 4) x 6"
    },
    {
     "q": "(10 + 5) + 5"
    },
    {
     "q": "5 + (7 x 8)"
    },
    {
     "q": "(9 / 9) x 2"
    },
    {
     "q": "(4 x 10) - 9"
    },
    {
     "q": "1 + (1 x 8)"
    },
    {
     "q": "(10 + 9) + 3"
    },
    {
     "q": "7 - (9 - 5)"
    },
    {
     "q": "10 + (2 x 6)"
    },
    {
     "q": "(6 / 2) x 7"
    },
    {
     "q": "5 + (9 / 1)"
    },
    {
     "q": "( 6 x 12 ) - 2"
    },
    {
     "q": "8 + (9 x 7)"
    },
    {
     "q": "(9 x 2) - 3"
    },
    {
     "q": "4 x (5 x 9)"
    },
    {
     "q": "3 + ( 5 x 4)"
    },
    {
     "q": "(5 x 6) + 2"
    },
    {
     "q": "( 12 x 6 ) - 6"
    }
   ],
   "examples": [
    "4 x ( 15 x 10)",
    "(9 x 4) + 3",
    "(12 - 5) + 6",
    "8 + (11 x 3)",
    "(16 / 4) x 5",
    "(13 x 2) - 7"
   ]
  },
  {
   "n": 6,
   "title": "Order of Operations",
   "concept": "",
   "example": "( 10 x 7 ) + 1 = 71",
   "instruction": "Evaluate the given expression. Show your solution and box your final answer.",
   "items": [
    {
     "q": "( 10 x 7 ) + 1"
    },
    {
     "q": "( 8 x 2) + 9"
    },
    {
     "q": "3 x ( 9 x 2)"
    },
    {
     "q": "4 + ( 3 x 6)"
    },
    {
     "q": "( 31 x 1) + 1"
    },
    {
     "q": "(36 / 6) / 1"
    },
    {
     "q": "(27 / 9) / 3"
    },
    {
     "q": "(110 / 10) / 1"
    },
    {
     "q": "(36 / 9) / 2"
    },
    {
     "q": "(12 / 4) / 1"
    },
    {
     "q": "(49 / 7) / 1"
    },
    {
     "q": "(48 / 8) / 1"
    },
    {
     "q": "(9 / 9) / 1"
    },
    {
     "q": "50 / (200 / 4)"
    },
    {
     "q": "(60 / 10) / 6"
    },
    {
     "q": "(16 / 4 ) / 2"
    },
    {
     "q": "(15 / 5 ) / 3"
    },
    {
     "q": "(10 / 5) x 10"
    },
    {
     "q": "1 x (1 / 1)"
    },
    {
     "q": "(7 x 5) / 1"
    },
    {
     "q": "10 + (8 x 1)"
    },
    {
     "q": "1 x (9 - 7)"
    },
    {
     "q": "7 + (6 + 1)"
    },
    {
     "q": "3 x (9 / 3)"
    },
    {
     "q": "(6 x 6) x 1"
    },
    {
     "q": "7 x (5 x 2)"
    },
    {
     "q": "(8 x 2) x 2"
    },
    {
     "q": "6 x (5 / 1)"
    },
    {
     "q": "(10 x 9) - 7"
    },
    {
     "q": "7 + (6 + 9)"
    },
    {
     "q": "7 + (7 + 9)"
    },
    {
     "q": "(1 - 1) + 1"
    },
    {
     "q": "6 + (8 x 3)"
    },
    {
     "q": "(3 x 3) + 9"
    },
    {
     "q": "1 x (4 - 2)"
    },
    {
     "q": "(2 x 3) + 10"
    },
    {
     "q": "(6 / 3) + 7"
    },
    {
     "q": "(5 x 5) + 7"
    },
    {
     "q": "(9 x 9) - 8"
    },
    {
     "q": "4 + (3 x 8)"
    }
   ],
   "examples": [
    "( 10 x 8 ) + 3",
    "(64 / 8) / 2",
    "(81 / 9) / 3",
    "5 x (8 / 2)",
    "9 + (7 + 4)",
    "(4 x 7) + 6"
   ]
  },
  {
   "n": 7,
   "title": "Order of Operations",
   "concept": "",
   "example": "(8 x 5) - 10 = 30",
   "instruction": "Evaluate the given expression. Show your solution and box your final answer.",
   "items": [
    {
     "q": "(8 x 5) - 10"
    },
    {
     "q": "(9 x 9) - 8"
    },
    {
     "q": "(3 x 5) + 8"
    },
    {
     "q": "(7 x 6) + 23"
    },
    {
     "q": "( 18 / 2) - 3"
    },
    {
     "q": "(45 / 5) - 3"
    },
    {
     "q": "( 8 x 5 ) + 5"
    },
    {
     "q": "45 - (2 x 5)"
    },
    {
     "q": "(2 x 10) - 5"
    },
    {
     "q": "( 8 x 3) + 2"
    },
    {
     "q": "(10 x 6) + 5"
    },
    {
     "q": "(24 / 3 ) - 3"
    },
    {
     "q": "(72 / 9) - 6"
    },
    {
     "q": "(5 x 9) + 0"
    },
    {
     "q": "34 - (6 x 2)"
    },
    {
     "q": "( 5 x 3) - 2"
    },
    {
     "q": "(9 x 3) - 1"
    },
    {
     "q": "(9 x 3) - 9"
    },
    {
     "q": "(7 x 5) + 7"
    },
    {
     "q": "(6 x 4) + 4"
    },
    {
     "q": "(6 x 6) x 10"
    },
    {
     "q": "(6 x 8) / 4"
    },
    {
     "q": "(3 x 4) / 6"
    },
    {
     "q": "(8 / 4) x 5"
    },
    {
     "q": "6 x (10 - 4)"
    },
    {
     "q": "9 + (5 x 5)"
    },
    {
     "q": "10 + (2 x 8)"
    },
    {
     "q": "(5 / 5) x 6"
    },
    {
     "q": "(8 + 9) - 7"
    },
    {
     "q": "4 x (6 / 2)"
    },
    {
     "q": "(5 x 5) + 7"
    },
    {
     "q": "(3 x 4) - 1"
    },
    {
     "q": "(5 x 4) + 5"
    },
    {
     "q": "1 - (10 - 9)"
    },
    {
     "q": "(5 x 5) -10"
    },
    {
     "q": "10 + (6 + 9)"
    },
    {
     "q": "(6 x 9) - 9"
    },
    {
     "q": "10 + (10 / 5)"
    },
    {
     "q": "(2 / 1) x 3"
    },
    {
     "q": "6 x (3 x 5)"
    }
   ],
   "examples": [
    "(7 x 8) - 12",
    "(56 / 7) - 4",
    "(4 x 9) + 15",
    "50 - (3 x 8)",
    "8 x (12 - 5)",
    "(9 x 7) / 7"
   ]
  },
  {
   "n": 8,
   "title": "Order of Operations",
   "concept": "",
   "example": "4 - (9 / 9) = 3",
   "instruction": "Evaluate the given expression. Show your solution and box your final answer.",
   "items": [
    {
     "q": "4 - (9 / 9)"
    },
    {
     "q": "(8 / 4) + 9"
    },
    {
     "q": "(10 x 3) / 5"
    },
    {
     "q": "3 x (5 x 1)"
    },
    {
     "q": "(7 + 5) - 2"
    },
    {
     "q": "(7 x 2) + 10"
    },
    {
     "q": "(4 x 3) + 5"
    },
    {
     "q": "(10 + 10) + 1"
    },
    {
     "q": "2 + (3 x 7)"
    },
    {
     "q": "(10 x 5) - 4"
    },
    {
     "q": "(7 x 3) - 10"
    },
    {
     "q": "(4 - 3) x 5"
    },
    {
     "q": "1 x (10 x 8)"
    },
    {
     "q": "(9 - 7) + 1"
    },
    {
     "q": "(10 + 9) - 6"
    },
    {
     "q": "(9 x 8) / 4"
    },
    {
     "q": "(9 + 7) - 1"
    },
    {
     "q": "(3 x 3) + 1"
    },
    {
     "q": "(8 x 3) / 1"
    },
    {
     "q": "(3 x 8) - 6"
    },
    {
     "q": "(8 + 7) + 7"
    },
    {
     "q": "(8 x 3) x 9"
    },
    {
     "q": "(8 - 2) + 7"
    },
    {
     "q": "(5 x 3) + 6"
    },
    {
     "q": "(2 + 1) x 9"
    },
    {
     "q": "(4 / 1) / 2"
    },
    {
     "q": "(8 x 3) + 7"
    },
    {
     "q": "(8 x 4) - 10"
    },
    {
     "q": "(6 + 8) + 7"
    },
    {
     "q": "(9 x 8) - 1"
    },
    {
     "q": "(2 x 3) + 8"
    },
    {
     "q": "1 + (9 x 5)"
    },
    {
     "q": "1 + (8 x 9)"
    },
    {
     "q": "(6 x 7) - 6"
    },
    {
     "q": "1 + (6 x 2)"
    },
    {
     "q": "(5 + 9) + 6"
    },
    {
     "q": "(6 x 5) - 3"
    },
    {
     "q": "2 / (4 / 2)"
    },
    {
     "q": "(7 x 5) - 1"
    },
    {
     "q": "(3 x 4) + 10"
    }
   ],
   "examples": [
    "(12 / 6) + 8",
    "(10 x 4) / 8",
    "(9 + 6) - 4",
    "(6 x 4) + 9",
    "3 + (4 x 8)",
    "(5 + 2) x 7"
   ]
  },
  {
   "n": 9,
   "title": "Greatest Common Factor (GCF) by Continuous Division",
   "concept": "Greatest Common Factor - Finding the GCF by Continuous Division. From the previous level, we have learned how to find the GCF of two numbers. The methods we used are Prime Factorization and Listing Method. Another method is by Continuous Division. We do this by dividing the numbers by the least prime factor common to two numbers continuously until the quotient are relatively prime (no common factor) already. Then we multiply all the common prime factors and that's the GCF of the two numbers.",
   "example": "Find the GCF of 16 and 40 using continuous division: 2 | 16 40 -> 2 | 8 20 -> 2 | 4 10 -> 2 5; 2 x 2 x 2 = 8. The GCF of 16 and 40 is 8.",
   "instruction": "Find the GCF of the following set of numbers using Continuous Division. Show your solutions.",
   "items": [
    {
     "q": "GCF(10, 50)",
     "a": "10",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(16, 40)",
     "a": "8",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(28, 40)",
     "a": "4",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(36, 52)",
     "a": "4",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(20, 50)",
     "a": "10",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(35, 50)",
     "a": "5",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(18, 27)",
     "a": "9",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(26, 40)",
     "a": "2",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(50, 80)",
     "a": "10",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(56, 60)",
     "a": "4",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(24, 60)",
     "a": "12",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(48, 72)",
     "a": "24",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(32, 44)",
     "a": "4",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(110, 150)",
     "a": "10",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(36, 51)",
     "a": "3",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(28, 40)",
     "a": "4",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(49, 77)",
     "a": "7",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(120, 150)",
     "a": "30",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(90, 135)",
     "a": "45",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(150, 200)",
     "a": "50",
     "type": "key",
     "fmt": "number"
    }
   ]
  },
  {
   "n": 10,
   "title": "Finding the LCM of Three Numbers using Continuous Division",
   "concept": "Finding the LCM of Three Numbers using Continuous Division. From the previous level we already learned how to get the LCM of two numbers using continuous division. Same procedure will do so in finding the LCM of three numbers.",
   "example": "1) Find the LCM of 20, 40 and 60. Continuous division: 2 | 20 40 60 ; 2 | 10 20 30 ; 5 | 5 10 15 ; (bottom) 1 2 3. 2 x 2 x 5 x 1 x 2 x 3 = 120",
   "instruction": "Find the LCM of the following set of numbers. Show your solutions.",
   "items": [
    {
     "q": "LCM(10, 15, 30)",
     "a": "30",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(24, 32, 40)",
     "a": "480",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(40, 24, 48)",
     "a": "240",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(27, 36, 54)",
     "a": "108",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(16, 20, 24)",
     "a": "240",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(9, 12, 18)",
     "a": "36",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(12, 16, 14)",
     "a": "336",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(14, 18, 30)",
     "a": "630",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(9, 18, 27)",
     "a": "54",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(12, 16, 20)",
     "a": "240",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(8, 20, 28)",
     "a": "280",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(10, 25, 30)",
     "a": "150",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(12, 20, 24)",
     "a": "120",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(15, 18, 21)",
     "a": "630",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(12, 15, 18)",
     "a": "180",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(28, 30, 32)",
     "a": "3360",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(25, 30, 50)",
     "a": "150",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(22, 34, 44)",
     "a": "748",
     "type": "key",
     "fmt": "number"
    }
   ]
  },
  {
   "n": 11,
   "title": "More on GCF and LCM (LCM from GCF; Product-GCF-LCM table)",
   "concept": "More on GCF and LCM. It is easy to find the LCM of two numbers if we know their GCF. We simply multiply the numbers and divide it by their GCF. (N1 x N2) / GCF = LCM",
   "example": "Find the LCM of 35 and 50 given that their GCF is 5. Solution: (35 x 50) / 5 = 1,750 / 5 = 350. The LCM of 35 and 50 is 350.",
   "instruction": "Part 1 (items 1-10): Find the LCM of the following set of numbers given their GCF. Show your solutions. Part 2 (items 11-20): Fill in the blanks with the missing data (columns: Product, GCF, LCM).",
   "items": [
    {
     "q": "12 * 30 / 6"
    },
    {
     "q": "10 * 50 / 10"
    },
    {
     "q": "9 * 12 / 3"
    },
    {
     "q": "14 * 24 / 2"
    },
    {
     "q": "12 * 40 / 4"
    },
    {
     "q": "15 * 35 / 5"
    },
    {
     "q": "25 * 40 / 5"
    },
    {
     "q": "28 * 42 / 14"
    },
    {
     "q": "40 * 60 / 20"
    },
    {
     "q": "15 * 85 / 5"
    },
    {
     "q": "21 and 24 (find Product, GCF, LCM)",
     "a": "Product: 504; GCF: 3; LCM: 168",
     "type": "key",
     "seq": true
    },
    {
     "q": "15 and 25 (find Product, GCF, LCM)",
     "a": "Product: 375; GCF: 5; LCM: 75",
     "type": "key",
     "seq": true
    },
    {
     "q": "24 and 56 (find Product, GCF, LCM)",
     "a": "Product: 1344; GCF: 8; LCM: 168",
     "type": "key",
     "seq": true
    },
    {
     "q": "30 and 36 (find Product, GCF, LCM)",
     "a": "Product: 1080; GCF: 6; LCM: 180",
     "type": "key",
     "seq": true
    },
    {
     "q": "27 and 63 (find Product, GCF, LCM)",
     "a": "Product: 1701; GCF: 9; LCM: 189",
     "type": "key",
     "seq": true
    },
    {
     "q": "18 and 24 (find Product, GCF, LCM)",
     "a": "Product: 432; GCF: 6; LCM: 72",
     "type": "key",
     "seq": true
    },
    {
     "q": "28 and 40 (find Product, GCF, LCM)",
     "a": "Product: 1120; GCF: 4; LCM: 280",
     "type": "key",
     "seq": true
    },
    {
     "q": "21 and 27 (find Product, GCF, LCM)",
     "a": "Product: 567; GCF: 3; LCM: 189",
     "type": "key",
     "seq": true
    },
    {
     "q": "20 and 55 (find Product, GCF, LCM)",
     "a": "Product: 1100; GCF: 5; LCM: 220",
     "type": "key",
     "seq": true
    },
    {
     "q": "14 and 35 (find Product, GCF, LCM)",
     "a": "Product: 490; GCF: 7; LCM: 70",
     "type": "key",
     "seq": true
    }
   ],
   "ordered": true,
   "examples": [
    "18 * 45 / 9",
    "16 * 24 / 8",
    "20 * 32 / 4",
    "35 * 56 / 7"
   ]
  },
  {
   "n": 12,
   "title": "More on GCF and LCM (smaller number as factor of the bigger number)",
   "concept": "More on GCF and LCM. If the smaller number is a factor of the bigger number, then the smaller number is the GCF and the larger number is the LCM of the two numbers. Example: Find the GCF and LCM of 9 and 27. The smaller number is 9. Is 9 a factor of the larger number 27? 27 / 9 = 3. Yes, so the GCF of 9 and 27 is 9 and the LCM is 27.",
   "example": "Find the GCF and LCM of 9 and 27. The smaller number is 9. Is 9 a factor of the larger number 27? 27 / 9 = 3. Yes, so the GCF of 9 and 27 is 9 and the LCM is 27.",
   "instruction": "Check if the smaller number is a factor of the bigger number through division then find their GCF and LCM. (Show the division.)",
   "items": [
    {
     "q": "10 and 30 (find GCF and LCM)",
     "a": "GCF: 10; LCM: 30",
     "type": "key",
     "seq": true
    },
    {
     "q": "27 and 54 (find GCF and LCM)",
     "a": "GCF: 27; LCM: 54",
     "type": "key",
     "seq": true
    },
    {
     "q": "25 and 50 (find GCF and LCM)",
     "a": "GCF: 25; LCM: 50",
     "type": "key",
     "seq": true
    },
    {
     "q": "22 and 44 (find GCF and LCM)",
     "a": "GCF: 22; LCM: 44",
     "type": "key",
     "seq": true
    },
    {
     "q": "15 and 30 (find GCF and LCM)",
     "a": "GCF: 15; LCM: 30",
     "type": "key",
     "seq": true
    },
    {
     "q": "50 and 100 (find GCF and LCM)",
     "a": "GCF: 50; LCM: 100",
     "type": "key",
     "seq": true
    },
    {
     "q": "26 and 52 (find GCF and LCM)",
     "a": "GCF: 26; LCM: 52",
     "type": "key",
     "seq": true
    },
    {
     "q": "13 and 39 (find GCF and LCM)",
     "a": "GCF: 13; LCM: 39",
     "type": "key",
     "seq": true
    },
    {
     "q": "24 and 72 (find GCF and LCM)",
     "a": "GCF: 24; LCM: 72",
     "type": "key",
     "seq": true
    },
    {
     "q": "4 and 28 (find GCF and LCM)",
     "a": "GCF: 4; LCM: 28",
     "type": "key",
     "seq": true
    },
    {
     "q": "15 and 30 (find GCF and LCM)",
     "a": "GCF: 15; LCM: 30",
     "type": "key",
     "seq": true
    },
    {
     "q": "48 and 144 (find GCF and LCM)",
     "a": "GCF: 48; LCM: 144",
     "type": "key",
     "seq": true
    },
    {
     "q": "49 and 196 (find GCF and LCM)",
     "a": "GCF: 49; LCM: 196",
     "type": "key",
     "seq": true
    },
    {
     "q": "13 and 169 (find GCF and LCM)",
     "a": "GCF: 13; LCM: 169",
     "type": "key",
     "seq": true
    },
    {
     "q": "80 and 320 (find GCF and LCM)",
     "a": "GCF: 80; LCM: 320",
     "type": "key",
     "seq": true
    },
    {
     "q": "55 and 165 (find GCF and LCM)",
     "a": "GCF: 55; LCM: 165",
     "type": "key",
     "seq": true
    },
    {
     "q": "15 and 120 (find GCF and LCM)",
     "a": "GCF: 15; LCM: 120",
     "type": "key",
     "seq": true
    },
    {
     "q": "66 and 198 (find GCF and LCM)",
     "a": "GCF: 66; LCM: 198",
     "type": "key",
     "seq": true
    },
    {
     "q": "35 and 105 (find GCF and LCM)",
     "a": "GCF: 35; LCM: 105",
     "type": "key",
     "seq": true
    },
    {
     "q": "25 and 175 (find GCF and LCM)",
     "a": "GCF: 25; LCM: 175",
     "type": "key",
     "seq": true
    },
    {
     "q": "19 and 114 (find GCF and LCM)",
     "a": "GCF: 19; LCM: 114",
     "type": "key",
     "seq": true
    },
    {
     "q": "32 and 224 (find GCF and LCM)",
     "a": "GCF: 32; LCM: 224",
     "type": "key",
     "seq": true
    }
   ]
  },
  {
   "n": 13,
   "title": "GCF and LCM (simultaneous, with word problems)",
   "concept": "The GCF is the largest number that divides every number in the set with no remainder, and the LCM is the smallest number that every number in the set divides into. Break each number down into prime factors: multiply the primes that all of them share to get the GCF, then multiply the highest power of every prime that shows up anywhere to get the LCM. Always build the LCM from the prime powers, because multiplying the numbers together gives the LCM only when no two of them share a factor. In word problems, splitting things into the greatest number of equal groups points to the GCF, while things happening together again or a least possible total points to the LCM.",
   "example": "",
   "instruction": "Items 1-32: Find the GCF and LCM of the following set of numbers simultaneously. Use any method. Items 33-43: Analyze and solve the following problems.",
   "items": [
    {
     "q": "GCF(44, 48)",
     "a": "4",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(44, 48)",
     "a": "528",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(25, 30)",
     "a": "5",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(25, 30)",
     "a": "150",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(21, 24)",
     "a": "3",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(21, 24)",
     "a": "168",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(39, 42)",
     "a": "3",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(39, 42)",
     "a": "546",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(3, 24)",
     "a": "3",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(3, 24)",
     "a": "24",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(10, 18)",
     "a": "2",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(10, 18)",
     "a": "90",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(15, 24, 27)",
     "a": "3",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(15, 24, 27)",
     "a": "1080",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(15, 18, 20)",
     "a": "1",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(15, 18, 20)",
     "a": "180",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(25, 45, 60)",
     "a": "5",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(25, 45, 60)",
     "a": "900",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(13, 27)",
     "a": "1",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(13, 27)",
     "a": "351",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(9, 14, 25)",
     "a": "1",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(9, 14, 25)",
     "a": "3150",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(21, 50)",
     "a": "1",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(21, 50)",
     "a": "1050",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(6, 17, 35)",
     "a": "1",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(6, 17, 35)",
     "a": "3570",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(18, 90)",
     "a": "18",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(18, 90)",
     "a": "90",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(10, 50)",
     "a": "10",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(10, 50)",
     "a": "50",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "GCF(23, 92)",
     "a": "23",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "LCM(23, 92)",
     "a": "92",
     "type": "key",
     "fmt": "number"
    },
    {
     "q": "Melissa wants to make paper bouquets. Each flower uses one sheet of colored paper. She has 12 red, 14 yellow and 16 orange colored papers. If she wants each bouquet to have equal number of flowers per color, how many bouquets can she make at the most?",
     "a": "2 bouquets",
     "type": "key"
    },
    {
     "q": "How many flowers per color are in each bouquet? (same Melissa paper-bouquet problem as item 33)",
     "a": "6 red, 7 yellow, 8 orange",
     "type": "key",
     "seq": true
    },
    {
     "q": "Three blinking neon signs are turned on at the same time. Each blinks every 6 seconds, 11 seconds and 25 seconds respectively. After how many seconds will they blink together?",
     "a": "1650 seconds",
     "type": "key"
    },
    {
     "q": "Jona can arrange her toy collections in a box. She can either arrange 15 toys, 20 toys or 18 toys in a box. How many toys can she have at the least?",
     "a": "180 toys",
     "type": "key"
    },
    {
     "q": "Cathy is giving donation to calamity victims. She has 12 clothes, 28 packs of goods, and 36 kilos of rice. What is the greatest number of bags she can make if each type is equally distributed among the bags?",
     "a": "4 bags",
     "type": "key"
    },
    {
     "q": "How many of each will go into the bags? (same Cathy donation problem as item 37)",
     "a": "3 clothes, 7packs of goods, 9 kilos of rice",
     "type": "key",
     "seq": true
    },
    {
     "q": "The teachers will make loot bags for the awardees in a contest. Stickers come in sheets of 9, glitter pens come in packs of 12, water bottles are sold individually so they plan to buy 36 pieces. They want that each loot bag should have equal number of each of the items. How many stickers should they buy at the least?",
     "a": "4 sheets of stickers",
     "type": "key"
    },
    {
     "q": "How many glitter pens should they buy at the least? (same loot-bag problem as item 39)",
     "a": "3 packs of glitter",
     "type": "key"
    }
   ],
   "ordered": true,
   "rev": 1,
   "examples": [
    {
     "q": "Find the GCF and the LCM of 16 and 24.",
     "steps": [
      "16 = 2 x 2 x 2 x 2 and 24 = 2 x 2 x 2 x 3.",
      "They share three 2s, so the GCF is 2 x 2 x 2 = 8.",
      "For the LCM take the most of each prime: four 2s and one 3, so 16 x 3 = 48."
     ],
     "a": "GCF = 8, LCM = 48"
    },
    {
     "q": "Find the GCF and the LCM of 8, 12 and 20.",
     "steps": [
      "8 = 2 x 2 x 2, 12 = 2 x 2 x 3, and 20 = 2 x 2 x 5.",
      "All three share two 2s, so the GCF is 2 x 2 = 4.",
      "The most of each prime is three 2s, one 3 and one 5, so the LCM is 8 x 3 x 5 = 120."
     ],
     "a": "GCF = 4, LCM = 120"
    },
    {
     "q": "Mang Tonyo is packing 24 mangoes and 36 bananas into baskets. Each basket must hold the same number of mangoes and the same number of bananas, with no fruit left over. What is the greatest number of baskets he can make, and what goes in each one?",
     "steps": [
      "He is splitting into the greatest number of equal groups, so find the GCF.",
      "24 = 2 x 2 x 2 x 3 and 36 = 2 x 2 x 3 x 3, so the GCF is 2 x 2 x 3 = 12.",
      "Divide to fill each basket: 24 divided by 12 is 2 mangoes, and 36 divided by 12 is 3 bananas."
     ],
     "a": "12 baskets, with 2 mangoes and 3 bananas in each"
    },
    {
     "q": "At a terminal, a jeepney leaves every 8 minutes and a tricycle leaves every 10 minutes. They both leave at 6:00 AM. After how many minutes will they leave together again?",
     "steps": [
      "They meet again at a time both counts land on, so find the LCM.",
      "8 = 2 x 2 x 2 and 10 = 2 x 5.",
      "The LCM is 2 x 2 x 2 x 5 = 40.",
      "Check: 40 divided by 8 is 5 trips, and 40 divided by 10 is 4 trips."
     ],
     "a": "40 minutes"
    }
   ]
  },
  {
   "n": 15,
   "title": "Multiplication of Fractions",
   "concept": "Multiplication of Fractions. To multiply fractions, simply multiply the numerators and then multiply the denominators. Reduce answer to lowest term if necessary. (Part 2) In multiplying fractions wherein the numerator of the first fraction has a common factor with the denominator of the other fraction or vice versa, we can do cross cancellation by dividing them with their GCF.",
   "example": "4/5 x 2/7 = 8/35",
   "instruction": "Part 1 (items 1-15): Find the product. Show your solutions by following the given example. Express your answers in lowest term. Part 2 (items 16-30): Find the product using cross cancellation. Show your solutions by following the given example. Express your answers in lowest term.",
   "items": [
    {
     "q": "5/7 * 1/4"
    },
    {
     "q": "3/4 * 1/4"
    },
    {
     "q": "6/7 * 4/5"
    },
    {
     "q": "1/2 * 3/6"
    },
    {
     "q": "1/2 * 3/6"
    },
    {
     "q": "2/10 * 1/9"
    },
    {
     "q": "1/3 * 2/3"
    },
    {
     "q": "6/7 * 1/7"
    },
    {
     "q": "1/6 * 1/13"
    },
    {
     "q": "1/8 * 3/7"
    },
    {
     "q": "2/9 * 1/11"
    },
    {
     "q": "3/10 * 7/8"
    },
    {
     "q": "5/7 * 2/11"
    },
    {
     "q": "2/3 * 4/9"
    },
    {
     "q": "1/4 * 2/7"
    },
    {
     "q": "2/9 * 3/4"
    },
    {
     "q": "2/10 * 2/3"
    },
    {
     "q": "1/4 * 2/3"
    },
    {
     "q": "1/3 * 3/5"
    },
    {
     "q": "1/2 * 2/5"
    },
    {
     "q": "2/3 * 1/2"
    },
    {
     "q": "5/10 * 4/5"
    },
    {
     "q": "1/3 * 3/4"
    },
    {
     "q": "2/3 * 1/2"
    },
    {
     "q": "4/5 * 3/4"
    },
    {
     "q": "3/4 * 2/5"
    },
    {
     "q": "4/5 * 1/2"
    },
    {
     "q": "2/15 * 3/16"
    },
    {
     "q": "5/18 * 3/10"
    },
    {
     "q": "3/5 * 10/18"
    }
   ],
   "ordered": true,
   "examples": [
    "3/8 * 2/5",
    "4/9 * 5/7",
    "1/5 * 3/8",
    "7/10 * 3/4",
    "4/15 * 5/8",
    "7/12 * 9/14"
   ]
  },
  {
   "n": 16,
   "title": "Multiplication of Whole Numbers, Fractions, and Mixed Numbers",
   "concept": "Multiplication of Whole Numbers & Fractions. To multiply whole numbers and fractions, simply multiply the whole number and the numerator then copy the denominator. Cancellation can be done also if the whole number and the denominator have a common factor. Reduce answer to lowest term if necessary. (Part 2) Multiplication of Mixed Numbers. To multiply mixed numbers, first, change them to improper fractions then multiply. Cancellation may be done also. Reduce answer to lowest term if necessary.",
   "example": "1) 5 x 3/7 = 15/7 = 2 1/7",
   "instruction": "Part 1 (items 1-15): Multiply (whole numbers & fractions). Show your solutions by following the given example. Express your answers in lowest term. Part 2 (items 16-30): Multiply (mixed numbers). Show your solutions by following the given example. Express your answers in lowest term.",
   "items": [
    {
     "q": "9 * 2/5",
     "mixed": true
    },
    {
     "q": "5 * 1/4",
     "mixed": true
    },
    {
     "q": "2 * 1/2"
    },
    {
     "q": "8 * 1/2"
    },
    {
     "q": "3 * 2/3"
    },
    {
     "q": "10 * 1/2"
    },
    {
     "q": "2 * 4/9"
    },
    {
     "q": "3/9 * 16",
     "mixed": true
    },
    {
     "q": "11/14 * 21",
     "mixed": true
    },
    {
     "q": "8/14 * 24",
     "mixed": true
    },
    {
     "q": "2/5 * 18",
     "mixed": true
    },
    {
     "q": "4/7 * 6",
     "mixed": true
    },
    {
     "q": "5 * 2/5"
    },
    {
     "q": "10 * 3/20",
     "mixed": true
    },
    {
     "q": "4/6 * 9"
    },
    {
     "q": "2 1/2 * 4 2/5"
    },
    {
     "q": "2 1/2 * 3 4/5",
     "mixed": true
    },
    {
     "q": "2 1/5 * 3 1/4",
     "mixed": true
    },
    {
     "q": "3 4/5 * 4 1/2",
     "mixed": true
    },
    {
     "q": "3 1/3 * 2 9/10",
     "mixed": true
    },
    {
     "q": "4 4/5 * 2 7/10",
     "mixed": true
    },
    {
     "q": "4 4/5 * 2 1/3",
     "mixed": true
    },
    {
     "q": "2 2/5 * 2 1/2"
    },
    {
     "q": "4 1/3 * 3 1/2",
     "mixed": true
    },
    {
     "q": "3 1/4 * 2 5/9",
     "mixed": true
    },
    {
     "q": "3 5/8 * 4 1/2",
     "mixed": true
    },
    {
     "q": "5 4/5 * 2 2/3",
     "mixed": true
    },
    {
     "q": "5 1/2 * 4 1/2",
     "mixed": true
    },
    {
     "q": "2 4/7 * 3 8/9"
    },
    {
     "q": "6 1/2 * 3 2/5",
     "mixed": true
    }
   ],
   "ordered": true,
   "examples": [
    "7 * 3/8",
    "6 * 5/9",
    "5/12 * 18",
    "3 1/2 * 2 2/3",
    "2 3/4 * 1 1/5",
    "4 1/2 * 2 2/5"
   ]
  },
  {
   "n": 17,
   "title": "Multiplication of Fractions (fractions, whole x fraction, mixed; with word problems)",
   "concept": "",
   "example": "1/2 * 1/9 = 1/18",
   "instruction": "Part 1 (items 1-20): Find the product. Express your answers in lowest term. Part 2 (items 21-30): Analyze and answer the following word problems. Show your solutions.",
   "items": [
    {
     "q": "1/2 * 1/9"
    },
    {
     "q": "3/11 * 5/13"
    },
    {
     "q": "5/13 * 3/7"
    },
    {
     "q": "5/7 * 9/11"
    },
    {
     "q": "3/10 * 4/9"
    },
    {
     "q": "2/3 * 9/14"
    },
    {
     "q": "5/8 * 10/25"
    },
    {
     "q": "6/18 * 3/4"
    },
    {
     "q": "3/4 * 4/9"
    },
    {
     "q": "3/5 * 1/18"
    },
    {
     "q": "3/7 * 4",
     "mixed": true
    },
    {
     "q": "18 * 2/9"
    },
    {
     "q": "20 * 4/5"
    },
    {
     "q": "5/12 * 30",
     "mixed": true
    },
    {
     "q": "6/8 * 14",
     "mixed": true
    },
    {
     "q": "2 4/9 * 4 1/8",
     "mixed": true
    },
    {
     "q": "3 1/5 * 3 1/4",
     "mixed": true
    },
    {
     "q": "5 2/9 * 4 7/8",
     "mixed": true
    },
    {
     "q": "3 1/4 * 3 6/7",
     "mixed": true
    },
    {
     "q": "3 5/6 * 6 1/2",
     "mixed": true
    },
    {
     "q": "1/4 of 2 1/2 is what number?",
     "a": "5/8",
     "type": "key"
    },
    {
     "q": "What is the product of 2 2/3 and 3/4?",
     "a": "2",
     "type": "key"
    },
    {
     "q": "If you triple, 2 4/5 what number will you get?",
     "a": "8 2/5",
     "type": "key"
    },
    {
     "q": "Harald has three bucket of fries. Each bucket contains 10 2/3 fries. How many fries does Harald have?",
     "a": "32 fries",
     "type": "key"
    },
    {
     "q": "On Monday a team of street sweepers cleaned 3/5 of a city block. Tuesday, the team cleaned 2 2/5 times as many blocks as on Monday. How many city blocks did the street sweepers clean on Tuesday?",
     "a": "1 11/25 city blocks",
     "type": "key"
    },
    {
     "q": "Dawn has 3 1/2 cookies. Each cost 5. What is the cost of all the cookies?",
     "a": "17 1/2 cookies",
     "type": "key"
    },
    {
     "q": "Anna's height 1 1/3 of Jenny's height. Jenny is 5 1/2 feet tall. What is Anna's height?",
     "a": "7 1/3 feet tall",
     "type": "key"
    },
    {
     "q": "Gino's score is 2 1/8 of Jona's score. Jona scored 56 1/4. What is Gino's score?",
     "a": "119 17/32",
     "type": "key"
    },
    {
     "q": "Allan's weight is 3 1/2 times heavier than Nico's weight. Nico's weight is 50 1/4 kg. What is Allan's weight?",
     "a": "175 7/8 kg",
     "type": "key"
    },
    {
     "q": "Bambi's foot size is 1 1/2 of Dona's foot size. Dona's foot size is 5 1/2 inches. What is Bambi's foot size?",
     "a": "8 1/4 inches",
     "type": "key"
    }
   ],
   "ordered": true,
   "examples": [
    "1/3 * 1/8",
    "7/9 * 3/14",
    "16 * 3/8",
    "5/6 * 24",
    "4 1/2 * 2 2/3",
    "3 1/3 * 2 1/4"
   ]
  },
  {
   "n": 18,
   "title": "Multiplication of Three Fractions & Mixed Numbers",
   "concept": "Multiplication of Three Fractions & Mixed Numbers. To multiply three or more fractions and mixed numbers, follow the rules learned in multiplication of fractions from the previous worksheets. Do cancellation simultaneously if possible.",
   "example": "1) 3/8 x 4/7 x 7/11 = 3/22",
   "instruction": "Multiply the following. Do cancellation if possible.",
   "items": [
    {
     "q": "3/4 * 2/7 * 2/9"
    },
    {
     "q": "4/5 * 1/4 * 5/6"
    },
    {
     "q": "3/4 * 4/7 * 2/6"
    },
    {
     "q": "4/10 * 5/9 * 3/8"
    },
    {
     "q": "3/10 * 4/9 * 2/7"
    },
    {
     "q": "2/5 * 1/4 * 5/9"
    },
    {
     "q": "3/4 * 1/2 * 6/9"
    },
    {
     "q": "2/5 * 3/7 * 2/10"
    },
    {
     "q": "2/9 * 3/10 * 4/8"
    },
    {
     "q": "2/7 * 3/5 * 7/9"
    },
    {
     "q": "4/10 * 10/20 * 7/8"
    },
    {
     "q": "5 * 3/5 * 3/10"
    },
    {
     "q": "6 * 4/6 * 5/8",
     "mixed": true
    },
    {
     "q": "7 * 6/7 * 3/8",
     "mixed": true
    },
    {
     "q": "8 * 3/4 * 2/15"
    },
    {
     "q": "9 * 1/6 * 8/10",
     "mixed": true
    },
    {
     "q": "3 1/4 * 1/6 * 3/5"
    },
    {
     "q": "2 1/7 * 5 3/5 * 4 2/10",
     "mixed": true
    },
    {
     "q": "3 3/4 * 1/3 * 2 2/3",
     "mixed": true
    },
    {
     "q": "1 1/2 * 2 1/3 * 3 1/4",
     "mixed": true
    },
    {
     "q": "5 1/2 * 3/8 * 1 2/9",
     "mixed": true
    },
    {
     "q": "8 * 1 1/8 * 2 2/3"
    },
    {
     "q": "9 * 2 3/5 * 1 5/9",
     "mixed": true
    },
    {
     "q": "4/5 * 2 2/5 * 10",
     "mixed": true
    },
    {
     "q": "3/8 * 3 3/4 * 8/9"
    }
   ],
   "examples": [
    "2/3 * 3/8 * 4/5",
    "5/6 * 2/5 * 9/10",
    "3/7 * 7/9 * 6/10",
    "4 * 5/8 * 2/5",
    "2 1/2 * 2/5 * 1 1/3",
    "1 1/5 * 2 1/2 * 2/9"
   ]
  },
  {
   "n": 20,
   "title": "Reciprocals and Division of Fractions",
   "concept": "Reciprocals: To get the reciprocal of a fraction, just turn it upside down. In other words, swap the numerator and denominator. The reciprocal of a/b -> b/a. For mixed number, convert it first to its improper form. | Division of Fractions: To divide fractions, multiply the dividend by the reciprocal of the divisor. So first, find the reciprocal of the divisor then proceed to multiplication of fractions. Reduce answer to lowest term if necessary.",
   "example": "2/3 -> 3/2",
   "instruction": "Identify the reciprocals of the following (items 1-15). Find the quotient. Show your solutions by following the given example. Reduce answer to lowest term if necessary (items 16-30).",
   "items": [
    {
     "q": "4/5",
     "a": "5/4",
     "type": "key"
    },
    {
     "q": "7/6",
     "a": "6/7",
     "type": "key"
    },
    {
     "q": "4/3",
     "a": "3/4",
     "type": "key"
    },
    {
     "q": "10/12",
     "a": "12/10",
     "type": "key"
    },
    {
     "q": "2",
     "a": "1/2",
     "type": "key"
    },
    {
     "q": "3/5",
     "a": "5/3",
     "type": "key"
    },
    {
     "q": "2 2/8",
     "a": "8/18",
     "type": "key"
    },
    {
     "q": "1 2/3",
     "a": "3/5",
     "type": "key"
    },
    {
     "q": "6 7/11",
     "a": "11/73",
     "type": "key"
    },
    {
     "q": "3 1/3",
     "a": "3/10",
     "type": "key"
    },
    {
     "q": "1 2/9",
     "a": "9/11",
     "type": "key"
    },
    {
     "q": "3 3/6",
     "a": "6/21",
     "type": "key"
    },
    {
     "q": "1 3/4",
     "a": "4/7",
     "type": "key"
    },
    {
     "q": "6 2/5",
     "a": "5/32",
     "type": "key"
    },
    {
     "q": "1 9/10",
     "a": "10/19",
     "type": "key"
    },
    {
     "q": "4/5 ÷ 1/2"
    },
    {
     "q": "2/7 ÷ 1/3"
    },
    {
     "q": "3/8 ÷ 1/4"
    },
    {
     "q": "6/7 ÷ 1/5"
    },
    {
     "q": "4/5 ÷ 5/6"
    },
    {
     "q": "2/9 ÷ 2/7"
    },
    {
     "q": "1/2 ÷ 5/8"
    },
    {
     "q": "1/5 ÷ 1/9"
    },
    {
     "q": "2/5 ÷ 3/10"
    },
    {
     "q": "7/9 ÷ 2/11"
    },
    {
     "q": "9/10 ÷ 5/12"
    },
    {
     "q": "1/4 ÷ 2/13"
    },
    {
     "q": "2/3 ÷ 3/4"
    },
    {
     "q": "2/9 ÷ 4/15"
    },
    {
     "q": "5/14 ÷ 5/9"
    }
   ],
   "ordered": true,
   "examples": [
    "3/5 ÷ 1/2",
    "5/8 ÷ 1/4",
    "9/10 ÷ 3/8",
    "5/6 ÷ 5/9",
    "4/9 ÷ 8/15",
    "7/10 ÷ 7/12"
   ]
  },
  {
   "n": 21,
   "title": "Division of Fractions and Whole Numbers",
   "concept": "Division of Fractions & Whole Numbers: To divide a fraction by a whole number, and vice versa, same rules apply. Reduce answer to lowest term if necessary.",
   "example": "7/9 / 5 = 7/9 x 1/5 = 7/45",
   "instruction": "Find the quotient. Show your solutions by following the given example. Reduce answer to lowest term if necessary.",
   "items": [
    {
     "q": "4/5 ÷ 2"
    },
    {
     "q": "2/7 ÷ 3"
    },
    {
     "q": "3/8 ÷ 4"
    },
    {
     "q": "6/7 ÷ 5"
    },
    {
     "q": "4/5 ÷ 6"
    },
    {
     "q": "2/9 ÷ 7"
    },
    {
     "q": "1/2 ÷ 8"
    },
    {
     "q": "1/5 ÷ 9"
    },
    {
     "q": "2/5 ÷ 10"
    },
    {
     "q": "7/9 ÷ 11"
    },
    {
     "q": "9/10 ÷ 12"
    },
    {
     "q": "1/4 ÷ 13"
    },
    {
     "q": "2/3 ÷ 14"
    },
    {
     "q": "2/9 ÷ 15"
    },
    {
     "q": "5 ÷ 5/9"
    },
    {
     "q": "4 ÷ 2/7"
    },
    {
     "q": "7 ÷ 4/7"
    },
    {
     "q": "1 ÷ 2/9"
    },
    {
     "q": "4 ÷ 1/2"
    },
    {
     "q": "9 ÷ 5/6"
    },
    {
     "q": "5 ÷ 1/2"
    },
    {
     "q": "2 ÷ 1/3"
    },
    {
     "q": "3 ÷ 1/4"
    },
    {
     "q": "6 ÷ 1/5"
    },
    {
     "q": "5 ÷ 5/6"
    },
    {
     "q": "9 ÷ 2/7"
    },
    {
     "q": "1 ÷ 5/8"
    },
    {
     "q": "5 ÷ 1/9"
    },
    {
     "q": "2 ÷ 3/10"
    },
    {
     "q": "7 ÷ 2/11"
    }
   ],
   "examples": [
    "3/5 ÷ 2",
    "5/8 ÷ 4",
    "3/7 ÷ 6",
    "8 ÷ 2/3",
    "6 ÷ 3/4",
    "12 ÷ 3/5"
   ]
  },
  {
   "n": 22,
   "title": "Division of Mixed Numbers",
   "concept": "Division of Mixed Numbers: To divide mixed numbers, change them first to improper fractions. Then multiply the dividend by the reciprocal of the divisor. Reduce answer to lowest term if necessary.",
   "example": "5 4/5 / 2 1/3 = 29/5 / 7/3 = 29/5 x 3/7 = 87/35 = 2 17/35",
   "instruction": "Find the quotient. Show your solutions by following the given example. Reduce answer to lowest term if necessary.",
   "items": [
    {
     "q": "2 ÷ 1/8"
    },
    {
     "q": "3 ÷ 3/5"
    },
    {
     "q": "2 ÷ 2/3"
    },
    {
     "q": "3 ÷ 1/2"
    },
    {
     "q": "4 ÷ 3/7"
    },
    {
     "q": "4 ÷ 5/8"
    },
    {
     "q": "1/10 ÷ 4"
    },
    {
     "q": "1/8 ÷ 3"
    },
    {
     "q": "4/5 ÷ 3"
    },
    {
     "q": "1/7 ÷ 4"
    },
    {
     "q": "7/9 ÷ 3"
    },
    {
     "q": "7/8 ÷ 5"
    },
    {
     "q": "4 ÷ 1/2"
    },
    {
     "q": "3 ÷ 2/7"
    },
    {
     "q": "5 ÷ 3/10"
    },
    {
     "q": "6 ÷ 4/9"
    },
    {
     "q": "5 ÷ 4/5"
    },
    {
     "q": "3 ÷ 1/3"
    },
    {
     "q": "7 ÷ 7/10"
    },
    {
     "q": "8 ÷ 5/9"
    },
    {
     "q": "6 ÷ 7/8"
    },
    {
     "q": "1/2 ÷ 8"
    },
    {
     "q": "1/8 ÷ 3"
    },
    {
     "q": "5/7 ÷ 8"
    },
    {
     "q": "2/3 ÷ 7"
    },
    {
     "q": "5/9 ÷ 6"
    },
    {
     "q": "3/8 ÷ 6"
    },
    {
     "q": "3/10 ÷ 4"
    },
    {
     "q": "3/8 ÷ 5"
    },
    {
     "q": "5/8 ÷ 9"
    }
   ],
   "examples": [
    "6 ÷ 3/8",
    "10 ÷ 5/8",
    "3/4 ÷ 7",
    "5/6 ÷ 4",
    "4 1/2 ÷ 1 1/2",
    "3 3/4 ÷ 2 1/2"
   ]
  },
  {
   "n": 23,
   "title": "Division of Fractions (Quotients and Word Problems)",
   "concept": "",
   "example": "2/7 ÷ 1/2 = 4/7",
   "instruction": "Find the quotient (items 1-20). Analyze and answer the following word problems. Show your solutions and reduce answers to lowest terms (items 21-30).",
   "items": [
    {
     "q": "2/7 ÷ 1/2"
    },
    {
     "q": "5/9 ÷ 1/3"
    },
    {
     "q": "3/8 ÷ 2/5"
    },
    {
     "q": "2/5 ÷ 8"
    },
    {
     "q": "3/7 ÷ 10"
    },
    {
     "q": "3/11 ÷ 12"
    },
    {
     "q": "4 ÷ 1/7"
    },
    {
     "q": "2 ÷ 5/9"
    },
    {
     "q": "7 ÷ 2/3"
    },
    {
     "q": "2/3 ÷ 5"
    },
    {
     "q": "3/5 ÷ 5"
    },
    {
     "q": "3 ÷ 2/7"
    },
    {
     "q": "4 ÷ 5/6"
    },
    {
     "q": "2/3 ÷ 4"
    },
    {
     "q": "9 ÷ 5/8"
    },
    {
     "q": "1/10 ÷ 4"
    },
    {
     "q": "3 ÷ 1/8"
    },
    {
     "q": "2/5 ÷ 8"
    },
    {
     "q": "10 ÷ 1/7"
    },
    {
     "q": "7/9 ÷ 8"
    },
    {
     "q": "Jessa has 2/3 cakes left in her house and she wants to divide it equally among her 6 friends, what part will each of her friend receive?",
     "a": "1/9 of a cake",
     "type": "key"
    },
    {
     "q": "The Carla is baking cookies for her friends. A batch of cookies needs 3 pounds of chocolate chips. The average weight of a chocolate chip is 1/10 pounds?",
     "a": "30 chocolate chips",
     "type": "key"
    },
    {
     "q": "If the total weight of Marie's laundry is 1/5 kilos, and she pays the laundry shop P25, how much is the laundry per kilo?",
     "a": "₱ 125 per kilo",
     "type": "key"
    },
    {
     "q": "Each block is 1/4 ft high. If the total height of blocks put on top of each other is 9/10 ft, how many blocks are there?",
     "a": "3 3/5 blocks",
     "type": "key"
    },
    {
     "q": "You only have 3/4 hours left for your exam, and you still have 8 questions unanswered, how many minutes should you allot for each question?",
     "a": "5 5/8 minutes",
     "type": "key"
    },
    {
     "q": "Lenny has already written 12 novels. If she writes 1/2 of a novel every month, how many months did she take to finish all the 12?",
     "a": "24 months",
     "type": "key"
    },
    {
     "q": "Icko can memorize the poem in 8/9 minutes. Steph can memorize it in 1/3 minutes. How many times is Steph faster in memorizing than Kiko?",
     "a": "2 2/3 times faster",
     "type": "key"
    },
    {
     "q": "Many computer addicts spend at least P40 in net cafe's. If one student plays computer games for 4/5 hours, how much is the probable hourly rate?",
     "a": "₱ 50 per hour",
     "type": "key"
    },
    {
     "q": "The total weight of the books is 10 kg. If each book weighs 5/8 kg, how many books are there?",
     "a": "16 books",
     "type": "key"
    },
    {
     "q": "How many small bottles will you need if each bottle can only contain 1/4 tablespoons of salt, and you have 1/2 tablespoons of salt?",
     "a": "2 bottles",
     "type": "key"
    }
   ],
   "ordered": true,
   "examples": [
    "3/7 ÷ 1/2",
    "4/9 ÷ 2/3",
    "5/6 ÷ 10",
    "5 ÷ 1/6",
    "8 ÷ 2/5",
    "7/8 ÷ 6"
   ]
  },
  {
   "n": 24,
   "title": "Division of Three Fractions & Mixed Numbers",
   "concept": "Division of Three Fractions & Mixed Numbers: To divide three or more fractions and mixed numbers, follow the rules learned in division of fractions from the previous worksheets. Also, all divisors are changed to its reciprocal before multiplying. Do cancellation simultaneously if possible.",
   "example": "5/8 / 3/4 / 5/9 = (cancel) = 3/2 or 1 1/2",
   "instruction": "Divide the following. Do cancellation if possible.",
   "items": [
    {
     "q": "4/5 ÷ 8/15 ÷ 2/3"
    },
    {
     "q": "1/3 ÷ 4/5 ÷ 10/21"
    },
    {
     "q": "1/5 ÷ 3/4 ÷ 8/15"
    },
    {
     "q": "1/2 ÷ 5/6 ÷ 10/11"
    },
    {
     "q": "5/6 ÷ 1/10 ÷ 2/3"
    },
    {
     "q": "1/6 ÷ 3/8 ÷ 4/7"
    },
    {
     "q": "11/12 ÷ 1/9 ÷ 11/14"
    },
    {
     "q": "1/15 ÷ 3/5 ÷ 3/7"
    },
    {
     "q": "2/3 ÷ 3/14 ÷ 9/10"
    },
    {
     "q": "3/4 ÷ 2/3 ÷ 1/9"
    },
    {
     "q": "1/2 ÷ 2/5 ÷ 3"
    },
    {
     "q": "2 ÷ 5/8 ÷ 3"
    },
    {
     "q": "5/9 ÷ 3 ÷ 1/3"
    },
    {
     "q": "2/3 ÷ 6 ÷ 5"
    },
    {
     "q": "3/4 ÷ 4 ÷ 2/5"
    },
    {
     "q": "2/3 ÷ 4/5 ÷ 2/5"
    },
    {
     "q": "3 ÷ 5/6 ÷ 4"
    },
    {
     "q": "4 ÷ 6/7 ÷ 2/7"
    },
    {
     "q": "8 ÷ 4/5 ÷ 2"
    },
    {
     "q": "9 ÷ 3/7 ÷ 3/4"
    },
    {
     "q": "10 ÷ 4/5 ÷ 1/3"
    },
    {
     "q": "5/7 ÷ 3/7 ÷ 5"
    },
    {
     "q": "3/8 ÷ 1/5 ÷ 6"
    },
    {
     "q": "2/9 ÷ 8 ÷ 2/5"
    },
    {
     "q": "5/6 ÷ 10 ÷ 3/4"
    }
   ],
   "examples": [
    "3/5 ÷ 9/10 ÷ 2/3",
    "1/4 ÷ 2/7 ÷ 7/10",
    "5/8 ÷ 3/4 ÷ 5/9",
    "2/5 ÷ 4 ÷ 1/2",
    "6 ÷ 2/3 ÷ 3",
    "12 ÷ 3/5 ÷ 4/5"
   ]
  },
  {
   "n": 25,
   "title": "Polygons: Name, Figure, Number of Sides",
   "concept": "A polygon is a closed figure made only of straight sides that meet end to end, so a figure with any curve is not a polygon. The name of a polygon tells you how many sides it has, which means counting the sides is really all you need to do. From 3 sides upward they are triangle, quadrilateral, pentagon, hexagon, heptagon, octagon, nonagon, decagon, hendecagon and dodecagon for 12 sides. The number of corners is always the same as the number of sides, so you can count either one.",
   "example": "",
   "instruction": "Fill out the table below.",
   "items": [
    {
     "q": "How many sides does this polygon have?",
     "a": "4",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 4,
      "regular": false
     }
    },
    {
     "q": "How many sides does this polygon have?",
     "a": "6",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 6,
      "regular": true
     }
    },
    {
     "q": "How many sides does this polygon have?",
     "a": "8",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 8,
      "regular": true
     }
    },
    {
     "q": "Name this polygon.",
     "a": "decagon",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 10,
      "regular": true
     }
    },
    {
     "q": "How many sides does this polygon have?",
     "a": "7",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 7,
      "regular": true
     }
    },
    {
     "q": "How many sides does this polygon have?",
     "a": "5",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 5,
      "regular": true
     }
    },
    {
     "q": "How many sides does this polygon have?",
     "a": "11",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 11,
      "regular": true
     }
    },
    {
     "q": "Name this polygon.",
     "a": "nonagon",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 9,
      "regular": true
     }
    },
    {
     "q": "How many sides does this polygon have?",
     "a": "12",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 12,
      "regular": true
     }
    },
    {
     "q": "Name this polygon.",
     "a": "hexagon",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 6,
      "regular": true
     }
    },
    {
     "q": "How many sides does this polygon have?",
     "a": "10",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 10,
      "regular": true
     }
    },
    {
     "q": "How many sides does this polygon have?",
     "a": "5",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 5,
      "regular": true
     }
    },
    {
     "q": "Name this polygon.",
     "a": "octagon",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 8,
      "regular": true
     }
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "What is the name of this figure?",
     "fig": {
      "kind": "polygon",
      "sides": 5,
      "regular": true
     },
     "steps": [
      "Count the straight sides going around the figure: 5.",
      "The polygon with 5 sides is the pentagon."
     ],
     "a": "pentagon"
    },
    {
     "q": "How many corners does this figure have?",
     "fig": {
      "kind": "polygon",
      "sides": 8,
      "regular": true
     },
     "steps": [
      "Count the sides first. There are 8.",
      "A polygon always has as many corners as it has sides.",
      "So the number of corners is 8. This figure is an octagon."
     ],
     "a": "8"
    },
    {
     "q": "Is this figure a polygon? If it is, give its name.",
     "fig": {
      "kind": "polygon",
      "sides": 4,
      "regular": false
     },
     "steps": [
      "Every side is straight and the figure is closed, so it is a polygon.",
      "The sides are not all the same length, but that does not change the name.",
      "Count the sides: 4. A polygon with 4 sides is a quadrilateral."
     ],
     "a": "yes, it is a quadrilateral"
    },
    {
     "q": "What is the name of this figure, and how many sides does it have?",
     "fig": {
      "kind": "polygon",
      "sides": 7,
      "regular": true
     },
     "steps": [
      "Count the sides one by one. There are 7.",
      "The polygon with 7 sides is the heptagon."
     ],
     "a": "heptagon, 7 sides"
    }
   ]
  },
  {
   "n": 26,
   "title": "Regular and Irregular Polygons",
   "concept": "POLYGONS. Regular polygons: a regular polygon's sides are all of the same length and its angles are equal. For example, a square is a regular polygon because it has equal angles and equal side lengths. Irregular polygons: an irregular polygon, on the other hand, is a polygon whose sides are not of the same sizes and whose angles are not equal.",
   "example": "",
   "instruction": "Tell whether the given polygons are regular or irregular.",
   "items": [
    {
     "q": "Is this polygon regular or irregular?",
     "a": "regular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 3,
      "regular": true
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 8,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "regular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 5,
      "regular": true
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 6,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 3,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 5,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "regular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 8,
      "regular": true
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "regular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 6,
      "regular": true
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 4,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 7,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 3,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 10,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 5,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 6,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 6,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 8,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 5,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 4,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "regular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 7,
      "regular": true
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 6,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 4,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 5,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "regular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 5,
      "regular": true
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "regular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 3,
      "regular": true
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 6,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 6,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "regular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 6,
      "regular": true
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 6,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "regular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 4,
      "regular": true
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "regular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 8,
      "regular": true
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 4,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 5,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "regular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 9,
      "regular": true
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 8,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 6,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 3,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "regular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 8,
      "regular": true
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 8,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "irregular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 7,
      "regular": false
     }
    },
    {
     "q": "Is this polygon regular or irregular?",
     "a": "regular",
     "type": "key",
     "fig": {
      "kind": "polygon",
      "sides": 3,
      "regular": true
     }
    }
   ]
  },
  {
   "n": 27,
   "title": "12- and 24-hour Clock System",
   "concept": "The 24-hour clock counts the hours straight through from 0000 at midnight to 2359 just before the next midnight, so it never needs AM or PM. For an AM time, keep the same hour and write it with two digits, except 12 AM, which becomes 00. For a PM time, add 12 to the hour, except 12 PM, which stays 12. The minutes never change, and the answer is always four digits.",
   "example": "",
   "instruction": "Fill out the table below. (Given the 12-hour format, write the 24-hour format.)",
   "items": [
    {
     "q": "12:00 AM",
     "a": "0000",
     "type": "key"
    },
    {
     "q": "1:00 AM",
     "a": "0100",
     "type": "key"
    },
    {
     "q": "2:00 AM",
     "a": "0200",
     "type": "key"
    },
    {
     "q": "3:00 AM",
     "a": "0300",
     "type": "key"
    },
    {
     "q": "4:00 AM",
     "a": "0400",
     "type": "key"
    },
    {
     "q": "5:00 AM",
     "a": "0500",
     "type": "key"
    },
    {
     "q": "6:00 AM",
     "a": "0600",
     "type": "key"
    },
    {
     "q": "7:00 AM",
     "a": "0700",
     "type": "key"
    },
    {
     "q": "8:00 AM",
     "a": "0800",
     "type": "key"
    },
    {
     "q": "9:00 AM",
     "a": "0900",
     "type": "key"
    },
    {
     "q": "10:00 AM",
     "a": "1000",
     "type": "key"
    },
    {
     "q": "11:00 AM",
     "a": "1100",
     "type": "key"
    },
    {
     "q": "12:00 PM",
     "a": "1200",
     "type": "key"
    },
    {
     "q": "1:00 PM",
     "a": "1300",
     "type": "key"
    },
    {
     "q": "2:00 PM",
     "a": "1400",
     "type": "key"
    },
    {
     "q": "3:00 PM",
     "a": "1500",
     "type": "key"
    },
    {
     "q": "4:00 PM",
     "a": "1600",
     "type": "key"
    },
    {
     "q": "5:00 PM",
     "a": "1700",
     "type": "key"
    },
    {
     "q": "6:00 PM",
     "a": "1800",
     "type": "key"
    },
    {
     "q": "7:00 PM",
     "a": "1900",
     "type": "key"
    },
    {
     "q": "8:00 PM",
     "a": "2000",
     "type": "key"
    },
    {
     "q": "9:00 PM",
     "a": "2100",
     "type": "key"
    },
    {
     "q": "10:00 PM",
     "a": "2200",
     "type": "key"
    },
    {
     "q": "11:00 PM",
     "a": "2300",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Write 7:30 PM in 24-hour format.",
     "steps": [
      "It is PM and the hour is not 12, so add 12 to the hour.",
      "7 + 12 = 19.",
      "Keep the minutes as 30."
     ],
     "a": "1930"
    },
    {
     "q": "Write 9:15 AM in 24-hour format.",
     "steps": [
      "It is AM and the hour is not 12, so the hour keeps its number.",
      "Write the hour with two digits: 09.",
      "Keep the minutes as 15."
     ],
     "a": "0915"
    },
    {
     "q": "Write 12:40 AM in 24-hour format.",
     "steps": [
      "12 AM is midnight, the very start of the day, so the hour becomes 00.",
      "Keep the minutes as 40."
     ],
     "a": "0040"
    },
    {
     "q": "Write 12:25 PM in 24-hour format.",
     "steps": [
      "12 PM is noon, and it is the one PM time where you do not add 12.",
      "The hour stays 12 and the minutes stay 25."
     ],
     "a": "1225"
    }
   ]
  },
  {
   "n": 28,
   "title": "Reading Clocks and Converting to 24-Hour Time",
   "concept": "On a clock face the short hand gives the hour and the long hand gives the minutes. Count the minutes by fives from the 12, so the long hand on 1 means 5 minutes, on 2 means 10 minutes, and so on. Read the hour from the number the short hand has already passed, not the one it is heading toward. Then switch to the 24-hour clock: an AM hour keeps its number written with two digits, 12 AM becomes 00, a PM hour has 12 added to it, and 12 PM stays 12.",
   "example": "",
   "instruction": "Write the time in 24-hour format.",
   "items": [
    {
     "q": "Write the time in 24-hour format.",
     "a": "00:15",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 0,
      "m": 15,
      "period": "AM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "01:30",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 1,
      "m": 30,
      "period": "AM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "14:00",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 14,
      "m": 0,
      "period": "PM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "17:45",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 17,
      "m": 45,
      "period": "PM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "00:30",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 0,
      "m": 30,
      "period": "AM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "18:00",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 18,
      "m": 0,
      "period": "PM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "21:45",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 21,
      "m": 45,
      "period": "PM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "20:15",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 20,
      "m": 15,
      "period": "PM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "20:45",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 20,
      "m": 45,
      "period": "PM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "06:15",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 6,
      "m": 15,
      "period": "AM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "02:30",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 2,
      "m": 30,
      "period": "AM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "16:45",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 16,
      "m": 45,
      "period": "PM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "00:15",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 0,
      "m": 15,
      "period": "AM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "13:45",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 13,
      "m": 45,
      "period": "PM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "08:00",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 8,
      "m": 0,
      "period": "AM"
     },
     "ph": "HH:MM"
    },
    {
     "q": "Write the time in 24-hour format.",
     "a": "22:15",
     "type": "key",
     "fig": {
      "kind": "clock",
      "h": 22,
      "m": 15,
      "period": "PM"
     },
     "ph": "HH:MM"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "What is this time in 24-hour format?",
     "fig": {
      "kind": "clock",
      "h": 7,
      "m": 20,
      "period": "AM"
     },
     "steps": [
      "The short hand has passed 7, so the hour is 7.",
      "The long hand is on 4, and 4 fives make 20 minutes.",
      "AM hours keep their number, written with two digits: 07:20."
     ],
     "a": "07:20"
    },
    {
     "q": "Give this time in 24-hour format.",
     "fig": {
      "kind": "clock",
      "h": 15,
      "m": 40,
      "period": "PM"
     },
     "steps": [
      "The short hand has passed 3, so the hour is 3.",
      "The long hand is on 8, and 8 fives make 40 minutes.",
      "The badge says PM, so add 12 to the hour: 3 + 12 = 15."
     ],
     "a": "15:40"
    },
    {
     "q": "How is this time written in 24-hour format?",
     "fig": {
      "kind": "clock",
      "h": 0,
      "m": 5,
      "period": "AM"
     },
     "steps": [
      "The short hand is just past 12 and the long hand is on 1, so the time is 12:05.",
      "The badge says AM, so this is 12 midnight.",
      "The 12 AM hour becomes 00."
     ],
     "a": "00:05"
    },
    {
     "q": "Write this time in 24-hour form.",
     "fig": {
      "kind": "clock",
      "h": 12,
      "m": 25,
      "period": "PM"
     },
     "steps": [
      "The long hand is on 5, and 5 fives make 25 minutes.",
      "The badge says PM, so this is 12 noon, not midnight.",
      "The 12 PM hour stays 12."
     ],
     "a": "12:25"
    }
   ]
  },
  {
   "n": 29,
   "title": "Converting 12-hour and 24-hour Time",
   "concept": "The 24-hour clock runs straight through from 0000 at midnight to 2359, so it never needs AM or PM. For an AM time keep the same hour and write four digits, so 7:15 AM becomes 0715, and for a PM time add 12 to the hour, so 3:40 PM becomes 1540. Midnight is the odd one, because 12 midnight is hour 00, so 12:25 AM is 0025, while 12 noon stays 12, so 12:25 PM is 1225. Going the other way, an hour of 00 is 12 AM, 0100 to 1159 is AM as written, 1200 to 1259 is PM, and from 1300 up you subtract 12 and write PM.",
   "example": "",
   "instruction": "Convert the following times from 12-hour format to 24-hour format and vice versa.",
   "items": [
    {
     "q": "12:10 AM",
     "a": "0010",
     "type": "key"
    },
    {
     "q": "7:45 PM",
     "a": "1945",
     "type": "key"
    },
    {
     "q": "5:05 AM",
     "a": "0505",
     "type": "key"
    },
    {
     "q": "4:45 PM",
     "a": "1645",
     "type": "key"
    },
    {
     "q": "9:30 AM",
     "a": "0930",
     "type": "key"
    },
    {
     "q": "2:15 AM",
     "a": "0215",
     "type": "key"
    },
    {
     "q": "8:25 PM",
     "a": "2025",
     "type": "key"
    },
    {
     "q": "1:55 PM",
     "a": "1355",
     "type": "key"
    },
    {
     "q": "8:00 AM",
     "a": "0800",
     "type": "key"
    },
    {
     "q": "10:15 PM",
     "a": "2215",
     "type": "key"
    },
    {
     "q": "12:00 PM",
     "a": "1200",
     "type": "key"
    },
    {
     "q": "3:40 AM",
     "a": "0340",
     "type": "key"
    },
    {
     "q": "1650",
     "a": "4:50 PM",
     "type": "key"
    },
    {
     "q": "2235",
     "a": "10:35 PM",
     "type": "key"
    },
    {
     "q": "1800",
     "a": "6:00 PM",
     "type": "key"
    },
    {
     "q": "1545",
     "a": "3:45 PM",
     "type": "key"
    },
    {
     "q": "1330",
     "a": "1:30 PM",
     "type": "key"
    },
    {
     "q": "0000",
     "a": "12:00 AM",
     "type": "key"
    },
    {
     "q": "2015",
     "a": "8:15 PM",
     "type": "key"
    },
    {
     "q": "1755",
     "a": "5:55 PM",
     "type": "key"
    },
    {
     "q": "2140",
     "a": "9:40 PM",
     "type": "key"
    },
    {
     "q": "0615",
     "a": "6:15 AM",
     "type": "key"
    },
    {
     "q": "0410",
     "a": "4:10 AM",
     "type": "key"
    },
    {
     "q": "2355",
     "a": "11:55 PM",
     "type": "key"
    },
    {
     "q": "2:50 AM",
     "a": "0250",
     "type": "key"
    },
    {
     "q": "7:35 PM",
     "a": "1935",
     "type": "key"
    },
    {
     "q": "11:48 PM",
     "a": "2348",
     "type": "key"
    },
    {
     "q": "7:00 AM",
     "a": "0700",
     "type": "key"
    },
    {
     "q": "9:00 PM",
     "a": "2100",
     "type": "key"
    },
    {
     "q": "10:15 PM",
     "a": "2215",
     "type": "key"
    },
    {
     "q": "12:15 AM",
     "a": "0015",
     "type": "key"
    },
    {
     "q": "8:45 AM",
     "a": "0845",
     "type": "key"
    },
    {
     "q": "1:30 PM",
     "a": "1330",
     "type": "key"
    },
    {
     "q": "4:15 PM",
     "a": "1615",
     "type": "key"
    },
    {
     "q": "3:35 PM",
     "a": "1535",
     "type": "key"
    },
    {
     "q": "5:00 AM",
     "a": "0500",
     "type": "key"
    },
    {
     "q": "0545",
     "a": "5:45 AM",
     "type": "key"
    },
    {
     "q": "1950",
     "a": "7:50 PM",
     "type": "key"
    },
    {
     "q": "1200",
     "a": "12:00 PM",
     "type": "key"
    },
    {
     "q": "1715",
     "a": "5:15 PM",
     "type": "key"
    },
    {
     "q": "0910",
     "a": "9:10 AM",
     "type": "key"
    },
    {
     "q": "0010",
     "a": "12:10 AM",
     "type": "key"
    },
    {
     "q": "1445",
     "a": "2:45 PM",
     "type": "key"
    },
    {
     "q": "2230",
     "a": "10:30 PM",
     "type": "key"
    },
    {
     "q": "1115",
     "a": "11:15 AM",
     "type": "key"
    },
    {
     "q": "2325",
     "a": "11:25 PM",
     "type": "key"
    },
    {
     "q": "1650",
     "a": "4:50 PM",
     "type": "key"
    },
    {
     "q": "0335",
     "a": "3:35 AM",
     "type": "key"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Change 11:40 AM to 24-hour time.",
     "steps": [
      "It is AM, so the hour stays 11.",
      "Write the hour and minutes as four digits with no colon."
     ],
     "a": "1140"
    },
    {
     "q": "Change 6:20 PM to 24-hour time.",
     "steps": [
      "It is PM, so add 12 to the hour: 6 + 12 = 18.",
      "Keep the minutes 20 and write four digits."
     ],
     "a": "1820"
    },
    {
     "q": "Change 2105 to 12-hour time.",
     "steps": [
      "2105 is 1300 or higher, so it is PM.",
      "Subtract 12 from the hour: 21 - 12 = 9.",
      "Keep the minutes 05 and add PM."
     ],
     "a": "9:05 PM"
    },
    {
     "q": "Change 12:30 AM to 24-hour time.",
     "steps": [
      "12 AM is midnight, so the hour becomes 00.",
      "Keep the minutes 30."
     ],
     "a": "0030"
    }
   ]
  },
  {
   "n": 30,
   "title": "Area of a Triangle",
   "concept": "AREA of a TRIANGLE: The area of a triangle can be computed using the following formula: A = 1/2 bh. Multiply the length of the base with the height of the triangle times 1/2. The height of this triangle is 3 cm and the base is 4 cm. Thus its area is A = 4 x 3 x 1/2 = 6 square cm. (Also shown: Area, A; Perimeter, P; A = 1/2 c.h; P = a+b+c)",
   "example": "A = 1/2 bh",
   "instruction": "Find the area (items 1-4, figures). Calculate for the area of a triangle. Label your answers (items 5-26).",
   "items": [
    {
     "q": "Triangle (figure) with base = 6 feet and height = 4 feet. Find the area.",
     "a": "12 ft²",
     "type": "key"
    },
    {
     "q": "Triangle (figure) with base = 54 cm and height = 45 cm. Find the area.",
     "a": "1215 cm²",
     "type": "key"
    },
    {
     "q": "Triangle (figure) with base = 72 feet and height = 64 feet. Find the area.",
     "a": "2304 ft²",
     "type": "key"
    },
    {
     "q": "Triangle (figure) with base = 6 cm and height = 2 cm. Find the area.",
     "a": "6 cm²",
     "type": "key"
    },
    {
     "q": "Base = 12 in, Height = 6 in",
     "a": "36 in²",
     "type": "key"
    },
    {
     "q": "Base = 8 in, Height = 8 in",
     "a": "32 in²",
     "type": "key"
    },
    {
     "q": "Base = 19 in, Height = 4 in",
     "a": "38 in²",
     "type": "key"
    },
    {
     "q": "Base = 22 in, Height = 10 in",
     "a": "110 in²",
     "type": "key"
    },
    {
     "q": "Base = 31 in, Height = 24 in",
     "a": "372 in²",
     "type": "key"
    },
    {
     "q": "Base = 35 in, Height = 12 in",
     "a": "210 in²",
     "type": "key"
    },
    {
     "q": "Base = 22 in, Height = 6 in",
     "a": "66 in²",
     "type": "key"
    },
    {
     "q": "Base = 42 in, Height = 14 in",
     "a": "294 in²",
     "type": "key"
    },
    {
     "q": "Triangle (figure) with base = 36 m and height = 36 m. Calculate the area.",
     "a": "648 m²",
     "type": "key"
    },
    {
     "q": "Triangle (figure) with base = 60 meters and height = 24 meters. Calculate the area.",
     "a": "720m²",
     "type": "key"
    },
    {
     "q": "Triangle (figure) with base = 12 meters and height = 16 meters. Calculate the area.",
     "a": "96 m²",
     "type": "key"
    },
    {
     "q": "Triangle (figure) with base = 80 m and height = 10 m. Calculate the area.",
     "a": "400 m²",
     "type": "key"
    },
    {
     "q": "Triangle (figure) with base = 27 m and height = 63 m. Calculate the area.",
     "a": "850.5 m²",
     "type": "key"
    },
    {
     "q": "Triangle (figure) with base = 32 feet and height = 48 feet. Calculate the area.",
     "a": "768 ft²",
     "type": "key"
    },
    {
     "q": "Base = 18 in, Height = 10 in",
     "a": "90 in²",
     "type": "key"
    },
    {
     "q": "Base = 40 in, Height = 36 in",
     "a": "720 in²",
     "type": "key"
    },
    {
     "q": "Base = 32 in, Height = 16 in",
     "a": "256 in²",
     "type": "key"
    },
    {
     "q": "Base = 17 in, Height = 5 in",
     "a": "42.5 in²",
     "type": "key"
    },
    {
     "q": "Base = 14 in, Height = 9 in",
     "a": "63 in²",
     "type": "key"
    },
    {
     "q": "Base = 35 in, Height = 21 in",
     "a": "367.5 in²",
     "type": "key"
    },
    {
     "q": "Base = 42 in, Height = 23 in",
     "a": "483 in²",
     "type": "key"
    },
    {
     "q": "Base = 53 in, Height = 33 in",
     "a": "874 in²",
     "type": "key"
    }
   ],
   "ordered": true
  },
  {
   "n": 31,
   "title": "Area of Trapezoid and Area of Parallelogram",
   "concept": "A parallelogram is just a pushed-over rectangle, so its area is still base x height. The height is the straight up and down distance between the two parallel sides, not the slanted side. A trapezoid has two parallel sides of different lengths, so you take the average of those two bases and multiply by the height: area = (b1 + b2) x h divided by 2. Adding the bases first, then multiplying, then halving keeps the numbers easy to handle.",
   "example": "",
   "instruction": "Find the area of each trapezoid or parallelogram. Trapezoid area = (b1 + b2) x h / 2. Parallelogram area = base x height.",
   "items": [
    {
     "q": "Area of a trapezoid with upper base 14, lower base 16, and height 8",
     "a": "120",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with upper base 7, lower base 9, and height 5",
     "a": "40",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with upper base 24, lower base 63, and height 35",
     "a": "1522.5",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with upper base 150, lower base 180, and height 17",
     "a": "2805",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with upper base 120, lower base 135, and height 55",
     "a": "7012.5",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with parallel sides 8 cm (top) and 16 cm (bottom) and height 8 cm",
     "a": "96",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with parallel sides 25 cm (top) and 43 cm (bottom) and height 19 cm",
     "a": "646",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with parallel sides 49 m (top) and 27 m (bottom) and height 16 m",
     "a": "608",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with parallel sides 57 m (top) and 38 m (bottom) and height 58 m",
     "a": "2755",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with parallel sides 44 feet (top) and 57 feet (bottom) and height 44 feet",
     "a": "2222",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with parallel sides 150 cm (top) and 330 cm (bottom) and height 90 cm",
     "a": "21600",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with parallel sides 80 cm (top) and 160 cm (bottom) and height 60 cm",
     "a": "7200",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with parallel sides 84 m (top) and 76 m (bottom) and height 55 m",
     "a": "4400",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with parallel sides 140 feet (top) and 210 feet (bottom) and height 90 feet",
     "a": "15750",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a trapezoid with parallel sides 570 m (top) and 283 m (bottom) and height 38 m",
     "a": "16207",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 200 cm and height 120 cm",
     "a": "24000",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 20 cm and height 12 cm",
     "a": "240",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 160 m and height 120 m",
     "a": "19200",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 150 m and height 10 m",
     "a": "1500",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 15 cm and height 9 cm",
     "a": "135",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 115 cm and height 94 cm",
     "a": "10810",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 10 cm and height 15 cm",
     "a": "150",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 16 m and height 20 m",
     "a": "320",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 164 m and height 88 m",
     "a": "14432",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 16 m and height 8 m",
     "a": "128",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 40 and height 60",
     "a": "2400",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 65 and height 34",
     "a": "2210",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 220 and height 46",
     "a": "10120",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 289 and height 92",
     "a": "26588",
     "type": "key",
     "text": true
    },
    {
     "q": "Area of a parallelogram with base 125 and height 59",
     "a": "7375",
     "type": "key",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Find the area of a trapezoid with parallel sides 10 cm and 18 cm and height 6 cm.",
     "steps": [
      "Add the two parallel sides: 10 + 18 = 28.",
      "Multiply by the height: 28 x 6 = 168.",
      "Divide by 2: 168 divided by 2 = 84."
     ],
     "a": "84 square cm"
    },
    {
     "q": "Find the area of a trapezoid with upper base 9 m, lower base 12 m, and height 7 m.",
     "steps": [
      "Add the bases: 9 + 12 = 21.",
      "Multiply by the height: 21 x 7 = 147.",
      "Divide by 2: 147 divided by 2 = 73.5."
     ],
     "a": "73.5 square m"
    },
    {
     "q": "Find the area of a parallelogram with base 25 cm and height 12 cm.",
     "steps": [
      "Use area = base x height.",
      "25 x 12 = 300."
     ],
     "a": "300 square cm"
    }
   ]
  },
  {
   "n": 32,
   "title": "Volume of a Rectangular Prism and a Cube",
   "concept": "Volume tells you how many unit cubes fit inside a solid, so the answer is always in cubic units like cubic cm. For a rectangular prism, multiply the three edges that meet at one corner: volume = length x width x height. A cube has all edges equal, so volume = s x s x s, which is s^3. Before you multiply, check that every measurement uses the same unit, because 1 m and 50 cm cannot be multiplied until one of them is changed.",
   "example": "",
   "instruction": "Identify the values asked, then solve for the volume. Make sure all units are the same before computing. Volume of rectangular prism = l x w x h. Volume of cube = s x s x s.",
   "items": [
    {
     "q": "Rectangular prism with edges 20 mm, 5 mm, and 15 mm: what is the length?",
     "a": "20",
     "type": "key",
     "text": true
    },
    {
     "q": "Rectangular prism with edges 20 mm, 5 mm, and 15 mm (length 20 mm): what is the width?",
     "a": "5",
     "type": "key",
     "text": true
    },
    {
     "q": "Rectangular prism with edges 20 mm, 5 mm, and 15 mm (length 20 mm): what is the height?",
     "a": "15",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 20 mm, width 5 mm, height 15 mm",
     "a": "1500",
     "type": "key",
     "text": true
    },
    {
     "q": "Rectangular prism with edges 40 cm, 10 cm, and 30 cm: what is the length?",
     "a": "40",
     "type": "key",
     "text": true
    },
    {
     "q": "Rectangular prism with edges 40 cm, 10 cm, and 30 cm (length 40 cm): what is the width?",
     "a": "10",
     "type": "key",
     "text": true
    },
    {
     "q": "Rectangular prism with edges 40 cm, 10 cm, and 30 cm (length 40 cm): what is the height?",
     "a": "30",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 40 cm, width 10 cm, height 30 cm",
     "a": "12000",
     "type": "key",
     "text": true
    },
    {
     "q": "Rectangular prism with edges 50 m, 30 m, and 20 m: what is the length?",
     "a": "50",
     "type": "key",
     "text": true
    },
    {
     "q": "Rectangular prism with edges 50 m, 30 m, and 20 m (length 50 m): what is the width?",
     "a": "30",
     "type": "key",
     "text": true
    },
    {
     "q": "Rectangular prism with edges 50 m, 30 m, and 20 m (length 50 m): what is the height?",
     "a": "20",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 50 m, width 30 m, height 20 m",
     "a": "30000",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 4 cm, width 3 cm, height 1 cm",
     "a": "12",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 12 cm, width 9 cm, height 3 cm",
     "a": "324",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 8 m, width 6 m, height 2 m",
     "a": "96",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 40 mm, width 30 mm, height 10 mm",
     "a": "12000",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 5 in., width 3 in., height 2 in.",
     "a": "30",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 6 in., width 3 in., height 3 in.",
     "a": "54",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 9 m, width 6 m, height 5 m",
     "a": "270",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 36 ft, width 28 ft, height 5 ft",
     "a": "5040",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 80 cm, width 15 cm, height 1 cm",
     "a": "1200",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 6 mm, width 48 mm, height 12 mm",
     "a": "3456",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a rectangular prism with length 3 m, width 10 m, height 10 m",
     "a": "300",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with edge 10 mm",
     "a": "1000",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with edge 16 mm",
     "a": "4096",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with edge 9 mm",
     "a": "729",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with edge 11 mm",
     "a": "1331",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with edge 90 mm",
     "a": "729000",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with edge 15 mm",
     "a": "3375",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with edge 2 cm",
     "a": "8",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with edge 18 mm",
     "a": "5832",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with side s = 5 cm",
     "a": "125",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with side s = 100 mm",
     "a": "1000000",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with side s = 35 mm",
     "a": "42875",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with side s = 3 m",
     "a": "27",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with side s = 6 ft",
     "a": "216",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with side s = 4 cm",
     "a": "64",
     "type": "key",
     "text": true
    },
    {
     "q": "Volume of a cube with side s = 7 cm",
     "a": "343",
     "type": "key",
     "text": true
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "Find the volume of a rectangular prism with length 7 cm, width 4 cm, and height 3 cm.",
     "steps": [
      "Multiply length by width: 7 x 4 = 28.",
      "Multiply that by the height: 28 x 3 = 84."
     ],
     "a": "84 cubic cm"
    },
    {
     "q": "Find the volume of a cube with edge 12 mm.",
     "steps": [
      "All edges are equal, so volume = 12 x 12 x 12.",
      "12 x 12 = 144, then 144 x 12 = 1728."
     ],
     "a": "1728 cubic mm"
    },
    {
     "q": "A box is 1 m long, 50 cm wide, and 40 cm high. Find its volume in cubic cm.",
     "steps": [
      "Make the units match: 1 m = 100 cm.",
      "Multiply: 100 x 50 = 5000.",
      "Multiply by the height: 5000 x 40 = 200000."
     ],
     "a": "200000 cubic cm"
    }
   ]
  },
  {
   "n": 33,
   "title": "Identify the Temperature (Thermometer)",
   "concept": "A thermometer is a number line standing up. Find the nearest labelled number first, then check how much each small mark is worth by counting the marks between two labels. Count up from the label if the liquid is above it, and count down if it is below. Numbers below the zero line are negative, so write the minus sign, and remember that -20 is colder than -5.",
   "example": "",
   "instruction": "Identify the temperature in the thermometer. Write your answer in degrees Celsius on the space provided.",
   "items": [
    {
     "q": "What temperature does the thermometer show?",
     "a": "15",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 15,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "10",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 10,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "45",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 45,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "10",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 10,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "40",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 40,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "-25",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": -25,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "-15",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": -15,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "35",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 35,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "-20",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": -20,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "50",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 50,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "20",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 20,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "25",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 25,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "-5",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": -5,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "30",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 30,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "0",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 0,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "5",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 5,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "ph": "number"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "What is the temperature on this thermometer?",
     "fig": {
      "kind": "thermo",
      "value": 30,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "steps": [
      "The labels go up by 10 each time.",
      "The column stops level with a label, so read that label."
     ],
     "a": "30"
    },
    {
     "q": "What temperature is this?",
     "fig": {
      "kind": "thermo",
      "value": 25,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "steps": [
      "The column stops between 20 and 30.",
      "It is halfway, and half of 10 is 5.",
      "20 + 5 = 25."
     ],
     "a": "25"
    },
    {
     "q": "What is the reading on this thermometer?",
     "fig": {
      "kind": "thermo",
      "value": -10,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "steps": [
      "The column stops below the 0 line, so the answer is negative.",
      "It is level with the label one step below 0."
     ],
     "a": "-10"
    },
    {
     "q": "Read this thermometer. What is the temperature?",
     "fig": {
      "kind": "thermo",
      "value": -5,
      "unit": "C",
      "min": -30,
      "max": 50,
      "step": 10,
      "digital": false
     },
     "steps": [
      "The column stops between -10 and 0, so the answer is negative.",
      "Halfway from -10 to 0 is 5 degrees up from -10.",
      "-10 + 5 = -5."
     ],
     "a": "-5"
    }
   ]
  },
  {
   "n": 35,
   "title": "Write the Temperature (Digital Thermometer)",
   "concept": "A digital thermometer already shows the number for you, so your job is to copy it exactly. Keep the decimal point where it is, because 8.5 degrees and 85 degrees are very different readings. If a minus sign appears on the screen, keep it, since it means the temperature is below zero. Then write the unit, degrees Celsius.",
   "example": "",
   "instruction": "Write the temperature indicated on the thermometer on the spaces provided.",
   "items": [
    {
     "q": "What temperature does the thermometer show?",
     "a": "37.2",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 37.2,
      "unit": "C",
      "min": -30,
      "max": 100,
      "step": 10,
      "digital": true
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "12",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 12,
      "unit": "C",
      "min": -30,
      "max": 100,
      "step": 10,
      "digital": true
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "52",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 52,
      "unit": "C",
      "min": -30,
      "max": 100,
      "step": 10,
      "digital": true
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "-7",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": -7,
      "unit": "C",
      "min": -30,
      "max": 100,
      "step": 10,
      "digital": true
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "42.1",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 42.1,
      "unit": "C",
      "min": -30,
      "max": 100,
      "step": 10,
      "digital": true
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "38",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 38,
      "unit": "C",
      "min": -30,
      "max": 100,
      "step": 10,
      "digital": true
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "72.3",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 72.3,
      "unit": "C",
      "min": -30,
      "max": 100,
      "step": 10,
      "digital": true
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "-20.1",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": -20.1,
      "unit": "C",
      "min": -30,
      "max": 100,
      "step": 10,
      "digital": true
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "-15.7",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": -15.7,
      "unit": "C",
      "min": -30,
      "max": 100,
      "step": 10,
      "digital": true
     },
     "ph": "number"
    },
    {
     "q": "What temperature does the thermometer show?",
     "a": "57.5",
     "type": "key",
     "fig": {
      "kind": "thermo",
      "value": 57.5,
      "unit": "C",
      "min": -30,
      "max": 100,
      "step": 10,
      "digital": true
     },
     "ph": "number"
    }
   ],
   "rev": 1,
   "examples": [
    {
     "q": "What temperature is on the screen?",
     "fig": {
      "kind": "thermo",
      "value": 8.5,
      "unit": "C",
      "min": -30,
      "max": 100,
      "step": 10,
      "digital": true
     },
     "steps": [
      "Copy the digits exactly as the screen shows them.",
      "Keep the decimal point, because 8.5 is not the same as 85."
     ],
     "a": "8.5"
    },
    {
     "q": "Write the temperature shown here.",
     "fig": {
      "kind": "thermo",
      "value": 26,
      "unit": "C",
      "min": -30,
      "max": 100,
      "step": 10,
      "digital": true
     },
     "steps": [
      "The screen shows a whole number.",
      "There is no decimal point, so do not add one."
     ],
     "a": "26"
    },
    {
     "q": "What does this digital thermometer read?",
     "fig": {
      "kind": "thermo",
      "value": -3.4,
      "unit": "C",
      "min": -30,
      "max": 100,
      "step": 10,
      "digital": true
     },
     "steps": [
      "The minus sign means the temperature is below zero, so keep it.",
      "Copy the digits and the decimal point after the minus sign."
     ],
     "a": "-3.4"
    }
   ]
  }
 ]
};
if(typeof module!=="undefined") module.exports=ARAL_CONTENT;
