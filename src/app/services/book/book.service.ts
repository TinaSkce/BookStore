import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/modules/book';
import { Tag } from 'src/app/shared/modules/tag';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAllBooksByTag(tag: string): Book[] {
    if(tag == "All")
      return this.getAll();
    else
      return this.getAll().filter(book => book.tags?.includes(tag));
  }

  getBookById(id:number): Book {
    return this.getAll().find(book => book.id == id)!;
  }

  getAllBooksBySearchTerm(searchTerm: string): Book[]{
    return this.getAll().filter(book => 
      book.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return [
      {name: 'All', count:18},
      {name: 'fantasy', count:14},
      {name: 'science fiction',count:7},
      {name:'metro', count:3},
      {name:'postapo', count: 3},
      {name: 'fiction', count:4},
      {name: 'romance', count: 4},
      {name: 'new adult', count:4},
      {name: 'thriller', count:1}
    ]
  }

  getAll():Book[]{
    return [
    {
      id: 1,
      name: 'A court of thorns and roses',
      author: 'Sarah J. Maas',
      price: 44.99,
      tags:['fantasy','science fiction'],
      favourite: false,
      imageUrl: '/assets/images/first.jpg',
      description: `THE FIRST BOOK IN THE BESTSELLING SERIES AND A TIKTOK SENSATION 'With bits of Buffy, Game Of Thrones and Outlander, this is a glorious series of total joy' STYLIST Feyre is a huntress. And when she sees a deer in the forest being pursued by a wolf, she kills the predator and takes its prey to feed herself and her family. But the wolf was not what it seemed, and Feyre cannot predict the high price she will have to pay for its death... Dragged away from her family for the murder of a faerie, Feyre discovers that her captor, his face obscured by a jewelled mask, is hiding even more than his piercing green eyes suggest. As Feyre’s feelings for Tamlin turn from hostility to passion, she learns that the faerie lands are a far more dangerous place than she realized. And Feyre must fight to break an ancient curse, or she will lose him forever. _________________________ Sarah J. Maas's books have sold millions of copies worldwide and have been translated into 37 languages. Discover the tantalising, sweeping romantic fantasy, soon to be a major TV series, for yourself.`,
      publisher: 'Bloomsbury Publishing',
      numberOfPages:419,
      binding:'paperback',
    },
    {
      id: 2,
      name: 'A court of mist and fury',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy','science fiction'],
      favourite: false,
      imageUrl: '/assets/images/second.jpg',
      description: `THE SECOND BOOK IN THE #1 BESTSELLING SERIES 'With bits of Buffy, Game Of Thrones and Outlander, this is a glorious series of total joy' - STYLIST _____________________________ Feyre survived Amarantha's clutches to return to the Spring Court – but at a steep cost. Though she now possesses the powers of the High Fae, her heart remains human, and it can’t forget the terrible deeds she performed to save Tamlin’s people. Nor has Feyre forgotten her bargain with Rhysand, the mesmerising High Lord of the feared Night Court. As Feyre navigates his dark web of political games and tantalising promises, a greater evil looms – and she might be key to stopping it. But only if she can step into her growing power, heal her fractured soul and have the courage to shape her own future – and the future of a world cloven in two... _____________________________ Sarah J. Maas's books have sold millions of copies worldwide and have been translated into 37 languages. Discover the sweeping romantic fantasy that everyone's talking about for yourself.`,
      publisher:'Bloomsbury Publishing', 
      numberOfPages:656,
      binding:'paperback',
    },
    {
      id: 3,
      name: 'A court of wings and ruin',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/third.jpg',
      description: `THE THIRD BOOK IN THE #1 BESTSELLING SERIES 'With bits of Buffy, Game Of Thrones and Outlander, this is a glorious series of total joy' STYLIST Feyre has returned to the Spring Court, determined to gather information on Tamlin’s manoeuvrings and the invading king threatening to bring her land to its knees. But to do so she must play a deadly game of deceit – and one slip may spell doom not only for Feyre, but for her world as well. As war bears down upon them all, Feyre must decide who to trust amongst the dazzling and lethal High Lords and hunt for allies in unexpected places. And her heart will face the ultimate test as she and her mate are forced to question whether they can truly trust each other. Sarah J. Maas's books have sold millions of copies and have been translated into 37 languages. Discover the sweeping romantic fantasy that everyone's talking about for yourself.`,
      publisher:'Bloomsbury Publishing', 
      numberOfPages:736,
      binding:'paperback',
    },
    {
      id: 4,
      name: 'A court of frost and starlight',
      author: 'Sarah J. Maas',
      price: 34.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/fourth.jpg',
      description: `AN UNMISSABLE COMPANION TALE TO THE #1 BESTSELLING SERIES 'With bits of Buffy, Game Of Thrones and Outlander, this is a glorious series of total joy' STYLIST _________________________ In this companion tale to the bestselling A Court of Thorns and Roses series, Feyre, Rhys and their friends are working to rebuild the Night Court and the vastly changed world beyond after the events of A Court of Wings and Ruin. But Winter Solstice is finally near, and with it a hard-earned reprieve. Yet even the festive atmosphere can’t keep the shadows of the past from looming. As Feyre navigates her first Winter Solstice as High Lady, she finds that those dearest to her have more wounds than she anticipated – scars that will have a far-reaching impact on the future of their court. _________________________ Sarah J. Maas is a global #1 bestselling author. Her books have sold millions of copies worldwide and have been translated into 37 languages. Discover the sweeping romantic fantasy that everyone's talking about for yourself.`,
      publisher:'Bloomsbury Publishing', 
      numberOfPages:233,
      binding:'paperback',
    },
    {
      id: 5,
      name: 'A court of silver flames',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/fifth.jpg',
      description: `THE LATEST BOOK IN THE #1 BESTSELLING SERIES 'With bits of Buffy, Game Of Thrones and Outlander, this is a glorious series of total joy' STYLIST ___________________________ Sarah J. Maas’s sexy, richly imagined A Court of Thorns and Roses series continues with the journey of Feyre’s fiery sister, Nesta... Nesta Archeron has always been prickly – proud, swift to anger and slow to forgive. And since the war – since being made High Fae against her will – she’s struggled to forget the horrors she endured and find a place for herself within the strange and deadly Night Court. The person who ignites her temper more than any other is Cassian, the battle-scarred, winged warrior who is there at Nesta’s every turn. But her temper isn’t the only thing Cassian ignites. And when they are forced to train in battle together, sparks become flame. As the threat of war casts its shadow over them once again, Nesta and Cassian must fight monsters from within and without if they are to stand a chance of halting the enemies of their court. But the ultimate risk will be searching for acceptance – and healing – in each other’s arms. ___________________________ Sarah J. Maas's books have sold millions of copies and been translated into 37 languages. Discover the sweeping romantic fantasy that everyone's talking about for yourself.`,
      publisher:'Bloomsbury Publishing', 
      numberOfPages:768,
      binding:'paperback',
    },
    {
      id: 6,
      name: 'Crown of midnight',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/sixth.jpg',
      description: `The sensational sequel to Sarah J. Maas' acclaimed YA fantasy debut, "Throne Of Glass". 18-year-old Celaena Sardothien is about to discover that the slavery she endured in the suffocating salt mines of Endovier is nothing compared to a life bound to her darkest enemy - a king whose rule is so dark and evil that it is near impossible to defy. Action-packed, heart-wrenching and ultra-addictive. Ages: 12+`,
      publisher:'Bloomsbury Publishing', 
      numberOfPages:417,
      binding:'paperback',
    },
    {
      id: 7,
      name: 'Throne of Glass',
      author: 'Sarah J. Maas',
      price: 34.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/seventh.jpg',
      description: `‘One of the best fantasy book series of the past decade’ TIME Enter the realm. Unleash the darkness. Live the legend. In a land without magic, an assassin is summoned to the castle. Celaena Sardothien has no love for the vicious king who rules from his throne of glass, but she has not come to kill him. She has come to win her freedom. If she defeats twenty-three murderers, thieves, and warriors in a deadly competition, she will be released from prison to serve as the King's Champion. But something rotten dwells in the castle – and it's there to kill. When her competitors start dying mysteriously, one by one, Celaena’s fight for freedom becomes a fight for survival – and a desperate quest to root out the evil before it destroys her world, and the people she has come to love. Thrilling and fierce, Throne of Glass is the first book in the #1 New York Times bestselling series that has captivated readers worldwide.`,
      publisher:'Bloomsbury UK', 
      numberOfPages:432,
      binding:'paperback',
    },
    {
      id: 8,
      name: 'Heir of fire',
      author: 'Sarah J. Maas',
      price: 44.99,
      tags:['fantasy','science fiction'],
      favourite: false,
      imageUrl: '/assets/images/eigth.jpg',
      description: `Lost and broken, Celaena Sardothien's only thought is to avenge the savage death of her dearest friend: as the King of Adarlan's Assassin, she is bound to serve this tyrant, but he will pay for what he did. Any hope Celaena has of destroying the king lies in answers to be found in Wendlyn. Sacrificing his future, Chaol, the Captain of the King's Guard, has sent Celaena there to protect her, but her darkest demons lay in that same place. If she can overcome them, she will be Adarlan's biggest threat - and his own toughest enemy. While Celaena learns of her true destiny, and the eyes of Erilea are on Wendlyn, a brutal and beastly force is preparing to take to the skies. Will Celaena find the strength not only to win her own battles, but to fight a war that could pit her loyalties to her own people against those she has grown to love? This third novel in the Throne of Glass sequence, from New York Times bestselling author Sarah J. Maas, is packed with more heart-stopping action, devastating drama and swoonsome romance, and introduces some fierce new heroines to love and hate.`,
      publisher:'Bloomsbury Publishing', 
      numberOfPages:576,
      binding:'paperback',
    },
    {
      id: 9,
      name: 'Queen of shadows',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy','science fiction'],
      favourite: false,
      imageUrl: '/assets/images/nineth.jpg',
      description: `‘One of the best fantasy book series of the past decade’ TIME No masters. No limits. No regrets. Aelin Galathynius takes her place as queen in the fourth book of the #1 bestselling Throne of Glass series by Sarah J. Maas. Celaena Sardothien has embraced her identity as Aelin Galathynius, Queen of Terrasen. But before she can reclaim her throne, she must fight. She will fight for her cousin, a warrior prepared to die for her. She will fight for her friend, a young man trapped in an unspeakable prison. And she will fight for her people, enslaved to a brutal king and awaiting their lost queen’s triumphant return. Everyone Aelin loves has been taken from her. Everything she holds dear is in danger. But she has the heart of a queen ― and that heart beats for vengeance. In this fourth book in the #1 New York Times bestselling Throne of Glass series, no one will escape the queen’s wrath.`,
      publisher:'Bloomsbury Publishing', 
      numberOfPages:648,
      binding:'paperback',
    },
    {
      id: 10,
      name: 'Empire of storms',
      author: 'Sarah J. Maas',
      price: 49.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/tenth.jpg',
      description: `Only the greatest sacrifice can turn the tide of war.

      War is brewing in the fifth book of the #1 bestselling Throne of Glass series by Sarah J. Maas.
      
      The long path to the throne has only just begun for Aelin Galathynius as war looms on the horizon. Loyalties have been broken and bought, friends have been lost and gained, and those who possess magic find themselves increasingly at odds with those who don't.
      
      With her heart sworn to the warrior-prince by her side and her fealty pledged to the people she is determined to save, Aelin will delve into the depths of her power to protect those she loves. But as monsters emerge from the horrors of the past, dark forces stand poised to claim her world. The only chance for salvation lies in a desperate quest that may take more from Aelin than she has to give, a quest that forces her to choose what-and who-she's willing to sacrifice for the sake of peace.
      
      Kingdoms collide in this fifth book in the #1 New York Times bestselling Throne of Glass series.`,
      publisher:'Bloomsbury UK', 
      numberOfPages:720,
      binding:'paperback',
    },
    {
      id: 11,
      name: 'The assassins blade',
      author: 'Sarah J. Maas',
      price: 49.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/eleventh.jpg',
      description: `Celaena Sardothien is Adarlan's most feared assassin. As part of the Assassins' Guild, her allegiance is to her master, Arobynn Hamel, yet Celaena listens to no one and trusts only her fellow killer-for-hire, Sam. In these action-packed prequel novellas - together in one edition for the first time - Celaena embarks on five daring missions. They take her from remote islands to hostile deserts, where she fights to liberate slaves and seeks to avenge the tyrannous. But she is acting against Arobynn's orders and could suffer an unimaginable punishment for such treachery ...Explore the dark underworld of this kick-ass heroine and find out how the legend begins in the five page-turning prequel novellas to the New York Times bestselling Throne of Glass series.`,
      publisher:'Bloomsbury Publishing', 
      numberOfPages:448,
      binding:'paperback',
    },
    {
      id: 12,
      name: 'Metro 2035',
      author: 'Dmitry Glukhovsky',
      price: 59.99,
      tags:['fantasy','science fiction','metro','postapo'],
      favourite: false,
      imageUrl: '/assets/images/book-1.jpg',
      description: `World War Three wiped out the humankind. The planet is empty now. Huge cities became dust and ashes. Railroads are being eaten by rust. Abandoned satellites hang lonely on the orbit. Radio is mute on all the frequencies. 

      The only survivors of the last war were those who made it into the gates of the Metro, the subway system of Moscow city. It’s there, hundreds of feet below the ground, in the vaults of what was constructed as the world’s largest air-raids shelter that people try to outlive the end of the days. It’s there that they created a new world for themselves. 
      
      The stations of Metro became city-states, and its citizens, torn apart by religions and ideologies are fighting for the now scarce commodities: air, water, and space. This tiny underground world can only remind humans of an immense world they once were the masters of. 
      
      It’s been twenty years past Doomsday, and yet the survivors refuse to give up. The most stubborn of them keep cherishing a dream: when the radiation level from nuclear bombings subsides, they will be able to return to the surface and have the life their parents once had. 
      
      But the most stubborn of the stubborn continues to search for other survivors in this huge emptiness that once was called Earth. His name is Artyom. He would give anything to lead his own people from the underground onto the surface.
      
      And he will.`,
      publisher: 'CreateSpace Independent Publishing Platform; 1st edition (December 1, 2016)',
      numberOfPages:502,
      binding:'paperback',
    },
    {
      id: 13,
      name: 'Metro 2034',
      author: 'Dmitry Glukhovsky',
      price: 59.99,
      tags:['fantasy','science fiction','metro','postapo'],
      favourite: false,
      imageUrl: '/assets/images/book-2.jpg',
      description: `The basis of three bestselling computer games Metro 2033 and Metro Last Light, and Metro: Exodus.

      The Metro books have put Dmitry Glukhovsky in the vanguard of Russian speculative fiction alongside the creator of Night Watch, Sergei Lukyanenko.
      
      A year after the events of METRO 2033 the last few survivors of the apocalypse, surrounded by mutants and monsters, face a terrifying new danger as they hang on for survival in the tunnels of the Moscow Metro.
      
      Featuring blistering action, vivid and tough characters, claustrophobic tension and dark satire the Metro books have become bestsellers across Europe.
      
      Readers can't get enough of the Metro series:
      
      'What can I say - once you pick up this book and start reading, it's just amazingly hard to actually put it down until you finish. And after that, you just want MORE!!' Goodreads reviewer, ⭐ ⭐ ⭐ ⭐
      
      'This does everything right in its additions to the metro world. A great story with super fleshed out characters, who have all been warped by the new life humanity leads underground' Goodreads reviewer, ⭐ ⭐ ⭐ ⭐ ⭐
      
      'The author is particularly good at character development and world building. I've read a lot of dystopian novels but nothing like [Metro 2033] and [Metro 2034]' Goodreads reviewer, ⭐ ⭐ ⭐ ⭐
      
      'What a sequel! From page 1 on you get soaked into this dark, creepy and yet beautiful universe' Goodreads reviewer, ⭐ ⭐ ⭐ ⭐ ⭐
      
      'Metro 2034 is an amazing book, it shows tremendous amount of thought. The post-apocalyptic/sci-fi feel of the book makes it very exciting' Goodreads reviewer, ⭐ ⭐ ⭐ ⭐ ⭐`,
      publisher: 'Future Corp. (July 5, 2016)',
      numberOfPages:286,
      binding:'paperback',  
    },
    {
      id: 14,
      name: 'Metro 2033',
      author: 'Dmitry Glukhovsky',
      price: 49.99,
      tags:['fantasy','science fiction','metro','postapo'],
      favourite: false,
      imageUrl: '/assets/images/book-3.jpg',
      description: `The novel that spawned the videogame: It's post-apocalypse Moscow. After the nuclear holocaust, a new fear is born, underground The year is 2033, the world has been reduced to rubble, and humanity is nearly extinct, half-destroyed cities having become uninhabitable through radiation. Beyond their boundaries, they say, lie endless burned-out deserts and the remains of splintered forests. Man has handed over stewardship of the earth to new life-forms—mutated by radiation, they are better adapted to the new world. A few score thousand human survivors live on in the Moscow Metro—the biggest air-raid shelter ever built. Stations have become mini-statelets, their people uniting around ideas, religions, water-filters—or the simple need to repulse an enemy incursion. It is a world without a tomorrow, and feelings have given way to instinct—the most important of which is survival, at any price. VDNKh, the northernmost inhabited station on its line, remains secure—but now a new and terrible threat has appeared. Artyom, a young man living in VDNKh, is given the task of penetrating to the heart of the Metro, to the legendary Polis, to alert everyone to the awful danger and to get help. In his hands he holds the future of his native station, the Metro, and perhaps the whole of humanity.`,
      publisher: 'Gollancz (April 1, 2011)',
      numberOfPages:464,
      binding:'paperback',  
    },
    {
      id: 15,
      name: 'November 9',
      author: 'Colleen Hoover',
      price: 44.99,
      tags:['fiction','romance','new adult'],
      favourite: false,
      imageUrl: '/assets/images/book-4.jpg',
      description: `Beloved #1 New York Times bestselling author of It Starts with Us, It Ends with Us, and All Your Perfects returns with an unforgettable love story between a writer and his unexpected muse.
      Fallon meets Ben, an aspiring novelist, the day before her scheduled cross-country move. Their untimely attraction leads them to spend Fallon's last day in Los Angeles together, and her eventful life becomes the creative inspiration Ben has always sought for his novel. Over time and amidst the various relationships and tribulations of their own separate lives, they continue to meet on the same date every year. Until one day Fallon becomes unsure if Ben has been telling her the truth or fabricating a perfect reality for the sake of the ultimate plot twist.
      
      Can Ben's relationship with Fallon--and simultaneously his novel--be considered a love story if it ends in heartbreak?`,
      publisher: 'Simon + Schuster Inc. (10 listopada 2015)',
      numberOfPages:310,
      binding:'paperback',  
    },
    {
    id: 16,
    name: 'Ugly love',
    author: 'Colleen Hoover',
    price: 39.99,
    tags:['fiction','romance','new adult'],
    favourite: false,
    imageUrl: '/assets/images/book-5.jpg',
    description: `From Colleen Hoover, the #1 Sunday Times bestselling author of It Ends with Us, a heart-wrenching love story that proves attraction at first sight can be messy.

    When Tate Collins meets airline pilot Miles Archer, she doesn't think it's love at first sight. They wouldn’t even go so far as to consider themselves friends. The only thing Tate and Miles have in common is an undeniable mutual attraction. Once their desires are out in the open, they realise they have the perfect set-up. He doesn’t want love, she doesn’t have time for love, so that just leaves the sex. Their arrangement could be surprisingly seamless, as long as Tate can stick to the only two rules Miles has for her.
    
    Never ask about the past.
    Don’t expect a future.
    
    They think they can handle it, but realise almost immediately they can’t handle it at all.
    
    Hearts get infiltrated.
    Promises get broken.
    Rules get shattered.
    Love gets ugly.`,
    publisher: 'Simon & Schuster UK',
    numberOfPages:322,
    binding:'paperback',  
  },
  {
    id: 17,
    name: 'It ends with us',
    author: 'Colleen Hoover',
    price: 44.99,
    tags:['fiction','romance','new adult'],
    favourite: false,
    imageUrl: '/assets/images/book-6.jpg',
    description: `About the Author Colleen Hoover is the 1 New York Times bestselling author of Slammed, Hopeless, Maybe Someday, Maybe Not, Ugly Love, Confess, November 9, It Ends with Us, Without Merit, and All Your Perfects She has won the Goodreads Choice Award for Best Romance three years in a row—for Confess 2015, It Ends with Us 2016, and Without Merit 2017 Confess was adapted into a seven-episode online series In 2015, Colleen and her family founded The Bookworm Box, a bookstore and monthly subscription service offering signed novels donated by authors All profits are given to various charities each month to help those in need Colleen lives in Texas with her husband and their three boys Visit ColleenHoovercom.`,
    publisher: 'Simon + Schuster Inc.',
    numberOfPages:384,
    binding:'paperback',  
  },
  {
  id: 18,
  name: 'Verity',
  author: 'Colleen Hoover',
  price: 39.99,
  tags:['fiction','romance','new adult','thriller'],
  favourite: false,
  imageUrl: '/assets/images/book-7.jpg',
  description: `THE BRITISH BOOK AWARD PAGETURNER OF THE YEAR! OVER 3 MILLION COPIES SOLD OF THE NO.1 BESTSELLER AND TIKTOK SENSATION.

  Are you ready to stay up all night? Rebecca meets Gone Girl in this shocking, unpredictable thriller with a twist that will leave you reeling . . .
  
  Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish.
  
  Lowen arrives at the Crawford home, ready to sort through years of Verity's notes and outlines, hoping to find enough material to get her started. What Lowen doesn't expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Verity's recollection of the night their family was forever altered.
  
  Lowen decides to keep the manuscript hidden from Jeremy, knowing its contents would devastate the already-grieving father. But as Lowen's feelings for Jeremy begin to intensify, she recognizes all the ways she could benefit if he were to read his wife's words. After all, no matter how devoted Jeremy is to his injured wife, a truth this horrifying would make it impossible for him to continue loving her . . .
  
  If you love Verity, don't miss Colleen Hoover's thrilling new suspense - Too Late is coming soon.
  
  
  1 MILLION READERS HAVE ALREADY GIVEN VERITY FIVE STARS
  'One of the best thrillers I have ever read' *****
  
  'Powerful, mind-blowing and emotional' *****
  
  'The plot twists and that ending came out of nowhere' *****
  
  'There are no words. Bravo' *****
  
  'Dark, creepy, and one hundred per cent original' *****
  
  'I NEEDED to know how this was going to end' *****
  
  'Left me completely speechless' *****
  `,
  publisher: 'Simon & Schuster UK',
  numberOfPages:323,
  binding:'paperback',  
},  
]
}
}
