
import {Document} from './document';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DocumentDetails } from './documentdetails';



export class DocumentData implements InMemoryDbService {
  createDb(){
    const documents: Document[] = [
        {
            id: 1, title: 'Daisy story', text: 'Two men in a smoking-room were talking of their private-school days. ‘At our school,’ said A., ‘we had a ghost’s footmark on the staircase. What was it like? Oh, very unconvincing. Just the shape of a shoe, with a square toe, if I remember right. The staircase was a stone one. I never heard any story about the thing. That seems odd, when you come to think of it. Why didn’t somebody invent one, I wonder?’ ‘You never can tell with little boys.' 
        },
        {
            id: 2, title: 'Alice story', text: 'It was a Thursday, but it felt like a Monday to John. And John loved Mondays. He thrived at work. He dismissed the old cliché of dreadi.Monday mornings and refused to engage in water-cooler complaints about “the grind” and empty conversations that included the familiar parry “How was your weekend?” “Too short!”. Yes, John liked his work and was unashamed.I should probably get another latte. Ive just been sitting here with this empty cup. But then Ill start to get jittery. Ill get a decaf. No, thats stupid, it feels stupid to pay for a decaf. I cant justify that.' 
       }    ,
       {
        id: 3, title: 'Table story', text: 'Yes; the crop is rather scanty, though. I imagine, if you were to investigate the cycle of ghost stories, for instance, I needn’t spend time in describing him: the main thing is that I got to know him very well. He was not an exceptional boy in any way — not particularly good at books or games — but he suited me. ‘The school was a large one: there must have been from 120 to 130 boys there as a rule, and so a considerable staff of masters was required, and there were rather frequent changes among them. ‘One term — perhaps it was my third or fourth — a new master made his appearance. which the boys at private schools tell each other, they would all turn out to be highly-compressed versions of stories out of books.'
       }    ,
       {
        id: 4, title: 'King of Allepey', text: 'Also there was the lady who, on locking her bedroom door in a strange house, I needn’t spend time in describing him: the main thing is that I got to know him very well. He was not an exceptional boy in any way — not particularly good at books or games — but he suited me. ‘The school was a large one: there must have been from 120 to 130 boys there as a rule, and so a considerable staff of masters was required, and there were rather frequent changes among them. ‘One term — perhaps it was my third or fourth — a new master made his appearance. heard a thin voice among the bed-curtains say, Now we are shut in for the night. None of those had any explanation or sequel. I wonder if they go on still, those stories. Oh, likely enough — with additions from the magazines, as I said.'
       } ,
       {
        id: 5, title: 'My dear Comrade', text: 'Thames valley, and ancient elms in the three or four fields which we used for our games. I think probably it was quite an attractive place, but boys seldom allow that their schools possess any tolerable features. I needn’t spend time in describing him: the main thing is that I got to know him very well. He was not an exceptional boy in any way — not particularly good at books or games — but he suited me. ‘The school was a large one: there must have been from 120 to 130 boys there as a rule, and so a considerable staff of masters was required, and there were rather frequent changes among them. ‘One term — perhaps it was my third or fourth — a new master made his appearance.'
       }
       ];

    const document: DocumentDetails[]=[
        {
            id: 1, title: 'Daisy story', text: 'Two men in a smoking-room were talking of their private-school days. ‘At our school,’ said A., ‘we had a ghost’s footmark on the staircase. What was it like? Oh, very unconvincing. Just the shape of a shoe, with a square toe, if I remember right. The staircase was a stone one. I never heard any story about the thing. That seems odd, when you come to think of it. Why didn’t somebody invent one, I wonder?’ ‘You never can tell with little boys.' 
        },
        {
            id: 2, title: 'Alice story', text: 'It was a Thursday, but it felt like a Monday to John. And John loved Mondays. He thrived at work. He dismissed the old cliché of dreadi' 
       }    ,
       {
        id: 3, title: 'Table story', text: 'Yes; the crop is rather scanty, though. I imagine, if you were to investigate the cycle of ghost stories, I needn’t spend time in describing him: the main thing is that I got to know him very well. He was not an exceptional boy in any way — not particularly good at books or games — but he suited me. ‘The school was a large one: there must have been from 120 to 130 boys there as a rule, and so a considerable staff of masters was required, and there were rather frequent changes among them. ‘One term — perhaps it was my third or fourth — a new master made his appearance. for instance, which the boys at private schools tell each other, they would all turn out to be highly-compressed versions of stories out of books.'
       }    ,
       {
        id: 4, title: 'King of Allepey', text: 'Also there was the lady who, on locking her bedroom door in a strange house, I needn’t spend time in describing him: the main thing is that I got to know him very well. He was not an exceptional boy in any way — not particularly good at books or games — but he suited me. ‘The school was a large one: there must have been from 120 to 130 boys there as a rule, and so a considerable staff of masters was required, and there were rather frequent changes among them. ‘One term — perhaps it was my third or fourth — a new master made his appearance. heard a thin voice among the bed-curtains say, Now we are shut in for the night. None of those had any explanation or sequel. I wonder if they go on still, those stories. Oh, likely enough — with additions from the magazines, as I said. I needn’t spend time in describing him: the main thing is that I got to know him very well. He was not an exceptional boy in any way — not particularly good at books or games — but he suited me. ‘The school was a large one: there must have been from 120 to 130 boys there as a rule, and so a considerable staff of masters was required, and there were rather frequent changes among them. ‘One term — perhaps it was my third or fourth — a new master made his appearance.'
       } ,
       {
        id: 5, title: 'My dear Comrade', text: 'Thames valley, and ancient elms in the three or four fields which we used for our games. I think probably it was quite an attractive place, but boys seldom allow that their schools possess any tolerable features.'
       }
       ];
    return {documents, document};
}
}