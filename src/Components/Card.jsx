import React from 'react'
import "./Card.css"

const Card = props => (
        <div className="card">
            <div className="thumbnail">
                <img className="left" alt="foto" src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"></img>
            </div>
            <div className="right">
                <h1>Espaço reservado ao titulo do post</h1>
                <div className="author">
                    <img alt="Portrait" src="https://randomuser.me/api/portraits/men/95.jpg"></img>
                    <h2>Teste Nome</h2>
                </div>
                <div className="separator">
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."
                    </p>
                </div>
            </div>
            <h5>21</h5>
            <h6>Janeiro</h6>        
        </div>
)

export default Card