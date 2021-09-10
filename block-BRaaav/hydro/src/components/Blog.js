function Blog() {
    return (
        <section className="blog padding">
        <div className="container">
          <header className="sec-header text-center">
            <h2 className="heading">Our Blog</h2>
            <div className="dot-wrapper">
                {
                    ["dot", "dot", "dot"].map((dot, i) =>  <div className={dot} key={i}></div>)
                }
            </div>
          </header>
          <div className="flex wrap">
            <article className="flex article flex-48">
              <div className="flex-40 font-0">
                <img
                  className="flexible-img"
                  src="/media/blog-image1.jpg"
                  alt="Blog-1"
                />
              </div>

              <div className="flex-60 article-content">
                <time datetime="">
                  <i className="far fa-clock"></i>
                  December 22, 2017
                </time>
                <h3>How to find beautiful workspace?</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a className="btn btn-tertiary" href="#blog">Read Article</a>
              </div>
            </article>
            <article className="flex article flex-48">
              <div className="flex-40 font-0">
                <img
                  className="flexible-img"
                  src="/media/blog-image2.jpg"
                  alt="Blog-2"
                />
              </div>

              <div className="flex-60 article-content">
                <time datetime="">
                  <i className="far fa-clock"></i>
                  December 18, 2017
                </time>
                <h3>Woman sportwear</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a className="btn btn-tertiary" href="#blog">Read More</a>
              </div>
            </article>
            <article className="flex article flex-48">
              <div className="flex-40 font-0">
                <img
                  className="flexible-img"
                  src="/media/blog-image3.jpg"
                  alt="Blog-3"
                />
              </div>

              <div className="flex-60 article-content">
                <time datetime="">
                  <i className="far fa-clock"></i>
                  December 14, 2017
                </time>
                <h3>New creative fashion</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a className="btn btn-tertiary" href="#blog">Read Article</a>
              </div>
            </article>
            <article className="flex article flex-48">
              <div className="flex-40 font-0">
                <img
                  className="flexible-img"
                  src="/media/blog-image4.jpg"
                  alt="Blog-4"
                />
              </div>

              <div className="flex-60 article-content">
                <time datetime="">
                  <i className="far fa-clock"></i>
                  December 10, 2017
                </time>
                <h3>Minimalist design trend in 2018</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a className="btn btn-tertiary" href="#blog">View Detail</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    )
}

export default Blog;
