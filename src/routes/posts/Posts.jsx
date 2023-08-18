import './Posts.css'
import Post from './Post';

const postsData = [
  {
    author: {
      name: "Elon Musk",
      photo: 'https://static.toiimg.com/thumb/msid-102075304,width-1280,height-720,resizemode-4/.jpg',
      nickname: "@elonmusk"
    },
    content: `Next I'm buying Coca-Cola to put the cocaine back in`,
    image: 'https://pbs.twimg.com/media/FRZTWDOacAAcTbK?format=jpg&name=small',
    date: '28 Apr, 2022',
    replies: '221K',
    reposts: '649.7K',
    likes: '4.6M',
  },
  {
    author: {
      name: "Macaulay Culkin",
      photo: 'https://pbs.twimg.com/profile_images/968572702788239360/KL-zulbA_400x400.jpg',
      nickname: "@IncredibleCulk"
    },
    content: `Hey guys, wanna feel old? I'm 40. You're welcome.`,
    image: 'https://s.yimg.com/ny/api/res/1.2/FrbDuj5OseG8Pov_yrCC0A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/us_magazine_896/d235fbd70e26f7e6d702815b9cbf40ae',
    date: '27 Aug, 2020',
    replies: '131K',
    reposts: '451.5K',
    likes: '3M',
  },
  {
    author: {
      name: "Barack Obama",
      photo: 'https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg',
      nickname: "@BarackObama"
    },
    content: '"No one is born hating another person because of the color of his skin or his background or his religion..."',
    image: 'https://pbs.twimg.com/media/DHEXH7RV0AAUwKj?format=jpg&name=small',
    date: '13 Aug, 2017',
    replies: '421K',
    reposts: '1.4M',
    likes: '3.9M',
  },  
  {
    author: {
      name: "игореня",
      photo: 'https://u.newsua.one/uploads/images/default/631b465d3a34a1_44345006.webp',
      nickname: "@kakashenkov"
    },
    content: 'comrades. me reportin nothing happen. very big temperature today. dont forget to wear sunglasses. if u is tired and want to sit down there are special bottles in nearby trashcan ready for your service. tried them alot good for healthy',
    image: 'https://fakty.com.ua/wp-content/uploads/2023/05/03/novyj-proekt-17.jpg',
    date: '24 Aug, 2023',
    replies: '23M',
    reposts: '299M',
    likes: '357M',
  },
]

export function Posts() {
  return (
    <>
      <div className='posts'>
        {
          postsData.map(post => <Post
            key={Math.random()}
            author={post.author}
            content={post.content}
            image={post.image}
            date={post.date}
            replies={post.replies}
            reposts={post.reposts}
            likes={post.likes}
          />)
        }        
      </div>     
    </>
  );
}