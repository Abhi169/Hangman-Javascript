const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "banana",
        hint: "A yellow fruit."
    },
    {
        word: "computer",
        hint: "An electronic device used for various tasks."
    },
    {
        word: "elephant",
        hint: "A large mammal with a long trunk."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "A colorful insect with wings."
    },
    {
        word: "ocean",
        hint: "A large body of saltwater."
    },
    {
        word: "piano",
        hint: "A musical instrument with keys."
    },
    {
        word: "mountain",
        hint: "A tall landform with steep sides."
    },
    {
        word: "sunflower",
        hint: "A tall yellow flower that follows the sun."
    },
    {
        word: "telephone",
        hint: "A device used for communication."
    },
    {
        word: "bicycle",
        hint: "A two-wheeled vehicle."
    },
    {
        word: "television",
        hint: "An electronic device for watching shows and movies."
    },
    {
        word: "penguin",
        hint: "A flightless bird that lives in cold regions."
    },
    {
        word: "pizza",
        hint: "A popular Italian dish with a dough base and toppings."
    },
    {
        word: "rocket",
        hint: "A vehicle used for space travel."
    },
    {
        word: "dictionary",
        hint: "A book containing words and their meanings."
    },
    {
        word: "octopus",
        hint: "A sea creature with tentacles."
    },
    {
        word: "rainbow",
        hint: "A colorful arc in the sky."
    },
    {
        word: "camera",
        hint: "A device for capturing photos and videos."
    },
    {
        word: "fireplace",
        hint: "A structure for burning wood indoors."
    },
    {
        word: "library",
        hint: "A place with books for reading."
    },
    {
        word: "whale",
        hint: "A massive marine mammal."
    },
    {
        word: "ballet",
        hint: "A form of dance."
    },
    {
        word: "giraffe",
        hint: "A tall, long-necked mammal."
    },
    {
        word: "raincoat",
        hint: "A waterproof garment."
    },
    {
        word: "jigsaw",
        hint: "A type of puzzle."
    },
    {
        word: "skyscraper",
        hint: "A tall building."
    },
    {
        word: "umbrella",
        hint: "A device used to shield from rain."
    },
    {
        word: "volcano",
        hint: "A mountain that can erupt with lava."
    },
    {
        word: "yacht",
        hint: "A luxurious boat for sailing."
    },
    {
        word: "candle",
        hint: "A source of light."
    },
    {
        word: "dolphin",
        hint: "A smart marine mammal."
    },
    {
        word: "earthquake",
        hint: "A sudden shaking of the ground."
    },
    {
        word: "fountain",
        hint: "A decorative water feature."
    },
    {
        word: "gorilla",
        hint: "A large, powerful primate."
    },
    {
        word: "honeycomb",
        hint: "A hexagonal structure made by bees."
    },
    {
        word: "kangaroo",
        hint: "A marsupial from Australia."
    },
    {
        word: "lighthouse",
        hint: "A tall tower with a light at the top."
    },
    {
        word: "magnolia",
        hint: "A type of flowering tree."
    },
    {
        word: "narwhal",
        hint: "A whale with a long spiral tusk."
    },
    {
        word: "orchestra",
        hint: "A group of musicians playing together."
    },
    {
        word: "parachute",
        hint: "A device for slowing down a fall."
    },
    {
        word: "rhinoceros",
        hint: "A large, horned mammal."
    },
    {
        word: "tiger",
        hint: "A large, striped cat."
    },
    {
        word: "unicorn",
        hint: "A mythical horse with a single horn."
    },
    {
        word: "violin",
        hint: "A musical instrument with strings."
    },
    {
        word: "waterfall",
        hint: "A cascade of water."
    },
    {
        word: "xylophone",
        hint: "A musical instrument with wooden bars."
    },
    {
        word: "acoustic",
        hint: "Related to sound or music."
    },
    {
        word: "backpack",
        hint: "A bag worn on the back."
    },
    {
        word: "carousel",
        hint: "A rotating amusement ride."
    },
    {
        word: "dinosaur",
        hint: "An extinct reptile."
    },
    {
        word: "elevator",
        hint: "A vertical transport device."
    },
    {
        word: "ferris wheel",
        hint: "A large rotating ride at an amusement park."
    },
    {
        word: "garden",
        hint: "An outdoor space with plants."
    },
    {
        word: "helicopter",
        hint: "An aircraft with rotating blades."
    },
    {
        word: "island",
        hint: "A landmass surrounded by water."
    },
    {
        word: "jungle",
        hint: "A dense, tropical forest."
    },
    {
        word: "laptop",
        hint: "A portable computer."
    },
    {
        word: "moonlight",
        hint: "Light from the moon."
    },
    {
        word: "octagon",
        hint: "A shape with eight sides."
    },
    {
        word: "apple",
        hint: "A round, red or green fruit."
    },
    {
        word: "book",
        hint: "A written or printed work with pages."
    },
    {
        word: "cat",
        hint: "A small domesticated feline."
    },
    {
        word: "dog",
        hint: "A common domesticated canine."
    },
    {
        word: "house",
        hint: "A building where people live."
    },
    {
        word: "car",
        hint: "A four-wheeled motor vehicle."
    },
    {
        word: "tree",
        hint: "A tall, woody plant with branches and leaves."
    },
    {
        word: "flower",
        hint: "A colorful, fragrant plant bloom."
    },
    {
        word: "rain",
        hint: "Water falling from the sky."
    },
    {
        word: "shoe",
        hint: "Footwear worn on the feet."
    },
    {
        word: "chair",
        hint: "A piece of furniture for sitting."
    },
    {
        word: "hat",
        hint: "A head-covering accessory."
    },
    {
        word: "bird",
        hint: "A feathered, flying creature."
    },
    {
        word: "beach",
        hint: "A sandy shore by the sea."
    },
    {
        word: "moon",
        hint: "Earth's natural satellite in the night sky."
    },
    {
        word: "star",
        hint: "A distant, luminous celestial object."
    },
    {
        word: "river",
        hint: "A flowing body of water."
    },
    {
        word: "cookie",
        hint: "A sweet baked treat."
    },
    {
        word: "key",
        hint: "A small, metal device for unlocking things."
    },
    {
        word: "garden",
        hint: "An outdoor space with plants."
    },
    {
        word: "chair",
        hint: "A piece of furniture for sitting."
    },
    {
        word: "hat",
        hint: "A head-covering accessory."
    },
    {
        word: "cloud",
        hint: "A visible mass of water droplets in the sky."
    },
    {
        word: "door",
        hint: "An entrance or exit barrier."
    },
    {
        word: "earth",
        hint: "The third planet from the sun."
    },
    {
        word: "fire",
        hint: "A rapid chemical reaction producing heat and light."
    },
    {
        word: "game",
        hint: "An activity or competition with rules."
    },
    {
        word: "ice",
        hint: "Frozen water."
    },
    {
        word: "jacket",
        hint: "A lightweight outerwear garment."
    },
    {
        word: "kite",
        hint: "A flying toy on a string."
    },
    {
        word: "lamp",
        hint: "A lighting device with a bulb."
    },
    {
        word: "notebook",
        hint: "A small book for writing notes."
    },
    {
        word: "dinosaur",
        hint: "An extinct reptile."
    },
    {
        word: "helicopter",
        hint: "An aircraft with rotating blades."
    },
    {
        word: "quilt",
        hint: "A warm, padded bed covering."
    },
    {
        word: "mango",
        hint: "A tropical fruit with a sweet flavor."
    },
    {
        word: "volleyball",
        hint: "A team sport played with a ball over a net."
    },
    {
        word: "telescope",
        hint: "An optical instrument used for distant viewing."
    },
    {
        word: "crystal",
        hint: "A transparent mineral with a regular atomic structure."
    },
    {
        word: "sunflower",
        hint: "A tall yellow flower that follows the sun."
    }
];