const layout = require('../../layout');
const {getError} = require('../../helper');





module.exports = ({ errors }) => {
    return layout({
      content: `
        <div class="columns is-centered">
          <div class="column is-half">
            <h1 class="subtitle">Create a Product</h1>
  
            <form method="POST" enctype="multipart/form-data">
              <div class="field">
                <label class="label">Title</label>
                <input class="input" placeholder="Title" name="title">
                <p class="help is-danger">${getError(errors, 'title')}</p>
              </div>
              
              <div class="field">
                <label class="label">Price</label>
                <input class="input" placeholder="Price" name="price">
                <p class="help is-danger">${getError(errors, 'price')}</p>
              </div>
              
              <div class="field">
                <label class="label">Image</label>            
                <input type="file" name="image" />
                <input type="file" name="image" />
                <input type="file" name="image" />
                <input type="file" name="image" />
              </div>
              <br />
              <button class="button is-primary">Create</button>
            </form>
          </div>
        </div>
      `
    });
  };
  


//application/x-www-form-urlencoded"- default ending for html form , simply converts form data to a string url 
//to really capture data like image, we use multipart form encoding type 
// module.exports = ({errors}) =>{
//     return layout({
//         content: `
//         <form method="POST" enctype="multipart/form-data">
//         <input placeholder="Title" name="title" />
//         ${getError(errors, 'title')}
//         <input placeholder="Price" name="price"/>
//         ${getError(errors, 'price')}
//         <input type="file" name="image"/>
//         <button>Submit</button>
//         </form>
        
//         `
//     })
// }