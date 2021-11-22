import './portfolio.scss';
import PortfolioList from "../portfolioList/PortfolioList"


export default function Portfolio() {

    const list =[
        {
            id: "featured",
            title: "Featured",
          },
          {
            id: "web",
            title: "Web App",
          },
          {
            id: "mobile",
            title: "Mobile App",
          },
          {
            id: "design",
            title: "Design",
          },
          {
            id: "content",
            title: "Content",
          },
        ];

    return (
        <div className='portfolio' id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          {list.map((item)=>(   
              <PortfolioList title={item.title}/>
          ))}
        </ul>
        <div className='container'>
            <div className='item'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPaHLRNenlMHvkxDDfp2kKiSZY_zSr0-50g&usqp=CAU"
                    alt=""
                    />
        <h3>Designer App</h3>
        </div>
        <div className='item'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPaHLRNenlMHvkxDDfp2kKiSZY_zSr0-50g&usqp=CAU"
                    alt=""
                    />
        <h3>Designer App</h3>
        </div><div className='item'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPaHLRNenlMHvkxDDfp2kKiSZY_zSr0-50g&usqp=CAU"
                    alt=""
                    />
        <h3>Designer App</h3>
        </div><div className='item'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPaHLRNenlMHvkxDDfp2kKiSZY_zSr0-50g&usqp=CAU"
                    alt=""
                    />
        <h3>Designer App</h3>
        </div><div className='item'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPaHLRNenlMHvkxDDfp2kKiSZY_zSr0-50g&usqp=CAU"
                    alt=""
                    />
        <h3>Designer App</h3>
        </div><div className='item'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPaHLRNenlMHvkxDDfp2kKiSZY_zSr0-50g&usqp=CAU"
                    alt=""
                    />
        <h3>Designer App</h3>
        </div>
        </div> 
        </div>   
        
    )
}
