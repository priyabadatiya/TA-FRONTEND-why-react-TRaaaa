import articles from '../data.js';
import Article from './Article';

function Articles() {
    console.log(articles)
    return(
        <>
        <h2 className="text-5xl my-12 font-bold text-center">Articles List</h2>
        <section className="flex justify-between px-12 flex-wrap articles">
            
                {
                   articles.map((article)=><Article {...article}/>) 
            
                }
               
        </section>
        </>
    )
}
export default Articles;